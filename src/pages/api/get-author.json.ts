import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ params, request }) => {

    const author = {
        name: "carl jhonson",
        role: "cj",
        age: 100
    }
    return new Response(JSON.stringify(author), { 
        status: 201,
        headers: {
            "Content-Type": "application/json"
        }
     })

}