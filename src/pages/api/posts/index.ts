import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

export const prerender = false;

export const GET: APIRoute = async ({ request }) => {
    const blogCollection = await getCollection("blog");

    const url = new URL(request.url);
    const id = url.searchParams.get("id");

    const filteredPosts = id
        ? blogCollection.filter((post) => post.id === id)
        : blogCollection;

    if (filteredPosts.length > 0) {
        const responseBody = {
            status: "success",
            results: filteredPosts.length,
            data: filteredPosts,
        }; 
        return new Response(JSON.stringify(responseBody), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });

    } else {
        const responseBody = {
            status: "not found",
            results: 0,
            message: "There is no post with that id.",
        };
        return new Response(JSON.stringify(responseBody), {
            status: 404,
            headers: { "Content-Type": "application/json" },
        });
    }
};

export const POST: APIRoute = () => { return new Response('POST Request', { status: 200 }) }
export const PUT: APIRoute = () => { return new Response('PUT Request', { status: 200 }) }
export const PATCH: APIRoute = () => { return new Response('PATCH Request', { status: 200 }) }
export const DELETE: APIRoute = () => { return new Response('DELETE Request', { status: 200 }) }
