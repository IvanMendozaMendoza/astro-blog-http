import type { APIRoute } from "astro";
import { Clients, db, eq } from "astro:db";

export const prerender = false

// --------------------------- WARNING: REPEATABLE CODE ON SEVERAL ROUTES
const headers = { "Content-Type": "application.json" }
// ---------------------------


export const GET: APIRoute = async ({ params }) => {
    const { id } = params;
    if (!id) return new Response(`Ok get Id: ${id}`, { status: 200 })

    const client = await db.select().from(Clients).where(eq(Clients.id, +id))

    const res = {
        status: 200,
        client
    }
    return new Response(JSON.stringify(res), { status: 200, headers })
}

export const PATCH: APIRoute = async ({ params, request }) => {
    const { id } = params;
    if (!id) return new Response(`Ok get Id: ${id}`, { status: 200 })

    const body = await request.json()

    await db.update(Clients).set(body).where(eq(Clients.id, +id))
    const client = await db.select().from(Clients).where(eq(Clients.id, +id))
    const res = {
        status: 200,
        client
    }
    return new Response(JSON.stringify(res), { status: 200, headers })
}

export const DELETE: APIRoute = async ({ params }) => {
    const { id } = params;
    if (!id) return new Response(`Ok there is no client with that id: ${id}`, { status: 200 })
    await db.delete(Clients).where(eq(Clients.id, +id))
    return new Response(null, {
        status: 200, headers
    })
}