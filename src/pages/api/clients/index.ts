import type { APIRoute } from "astro";
import { Clients, db } from "astro:db";

export const prerender = false;


// --------------------------- WARNING: REPEATABLE CODE ON SEVERAL ROUTES
const headers = { "Content-Type": "application.json" }
// ---------------------------


export const GET: APIRoute = async () => {
    const clients = await db.select().from(Clients)
    const res = {
        status: 'success',
        results: clients.length,
        data: clients
    }
    return new Response(JSON.stringify(res), { status: 200, headers })
}

export const POST: APIRoute = async ({ request }) => {
    const { id, ...body } = await request.json()
    await db.insert(Clients).values(body)
    const res = {
        status: 'success',
        client: body
    }
    return new Response(JSON.stringify(res), { status: 200, headers })
}