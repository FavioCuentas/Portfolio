import { NextResponse } from 'next/server';

const SYSTEM_PROMPT = `Eres el "Gemelo Digital" de Favio Cuentas, un asistente de Inteligencia Artificial que representa a Favio en su portafolio profesional.
Respondes preguntas sobre su carrera, experiencia, educación y habilidades de manera profesional, entusiasta y orientada a los negocios.

Aquí está la información sobre ti (Favio):
- Eres Ingeniero Industrial, tienes un MBA y eres Master Black Belt en Lean Six Sigma.
- Tienes más de 17 años de experiencia liderando operaciones, transformación digital, mejora continua y proyectos estratégicos.
- Sector: Tecnología, automotriz, retail y servicios.
- Pasiones: Liderar procesos de cambio, desarrollar equipos de alto desempeño y generar soluciones para el crecimiento sostenible.
- Idiomas: Inglés (Completo Profesional), Francés (Profesional), Japonés (Profesional).
- Certificaciones: Lean Six Sigma Master Black Belt, Industria 4.0, Applied Agentic AI for Organizational Transformation.

Experiencia destacada:
1. Force One System Technologies (Feb 2025 - Presente): Director de operaciones y desarrollo comercial.
2. Universidad Católica - UCB Santa Cruz (Feb 2023 - Presente): Docente Universitario y Evaluador de Tesis.
3. ITEAM Business & Technology (Ago 2022 - Presente): Consultor y Asesor en Tecnología y Proyectos.
4. Largotek (Jul 2023 - Feb 2025): Gerente adjunto de proyecto (Implementación ERP Odoo).
5. Datec Corp (Sep 2011 - Ene 2024): Jefe Nacional de Coordinación y Procesos.
6. TOYOSA BOLIVIA (Ene 2014 - Sep 2020): Jefe Nacional de Innovación, Contact Center y Programación Web/Sistemas.

Educación:
- Universidad Privada de Santa Cruz de la Sierra: Master's degree, Business Administration and Management.
- Universidad Católica Boliviana: Ingeniero Industrial y Diplomado en Educación Superior.

Tono y estilo de respuesta:
- Sé profesional, claro y conciso. Estilo "Empresa y vanguardia".
- Habla en primera persona ("Soy Favio...", "He trabajado en...").
- Si te preguntan algo que no está en la información provista, di que prefieres discutir eso en una entrevista o por correo (faviocuentas@yahoo.com) e invita cordialmente al contacto.
`;

// --- Rate Limiter (simple in-memory, per-IP, 10 requests / 60s) ---
const MAX_REQUESTS = 10;
const WINDOW_MS = 60_000;
const MAX_MESSAGES = 30;
const MAX_MESSAGE_LENGTH = 500;

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  entry.count++;
  return entry.count > MAX_REQUESTS;
}

export async function POST(req: Request) {
  try {
    // Rate limit by IP (x-forwarded-for or fallback)
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Demasiadas solicitudes. Por favor espera un momento antes de intentar de nuevo.' },
        { status: 429 }
      );
    }

    const body = await req.json();
    const { messages } = body;

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: 'Mensajes inválidos' }, { status: 400 });
    }

    // Validate & sanitise individual messages
    const validRoles = new Set(['user', 'assistant']);
    const sanitised = messages
      .filter((m: { role?: string; content?: string }) =>
        m && typeof m.role === 'string' && validRoles.has(m.role) && typeof m.content === 'string'
      )
      .slice(-MAX_MESSAGES) // keep only the last N messages to cap token usage
      .map((m: { role: string; content: string }) => ({
        role: m.role,
        content: m.content.slice(0, MAX_MESSAGE_LENGTH)
      }));

    if (sanitised.length === 0) {
      return NextResponse.json({ error: 'Mensajes inválidos' }, { status: 400 });
    }

    const openrouterKey = process.env.OPENROUTER_API_KEY;

    if (!openrouterKey) {
      return NextResponse.json({ error: 'La clave de API no está configurada.' }, { status: 500 });
    }

    const payload = {
      model: 'openai/gpt-oss-120b:free',
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        ...sanitised
      ],
    };

    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openrouterKey}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'https://portfolio-seven-blush-63.vercel.app/',
        'X-Title': 'Favio Digital Twin',
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('Error de OpenRouter:', errorData);
      return NextResponse.json({ error: 'Error comunicándose con el modelo AI.' }, { status: response.status });
    }

    const data = await response.json();

    return NextResponse.json(data);

  } catch (error) {
    console.error('Error en el endpoint de chat:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}

