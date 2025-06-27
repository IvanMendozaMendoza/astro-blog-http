import type { APIRoute } from "astro";
import { getEntry } from "astro:content";
export const prerender = false

export const GET: APIRoute = async ({ params, request }) => {
    const { id } = params

    const blog = await getEntry('blog', id as string)
    if (!blog) {
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
    return new Response(JSON.stringify(blog), { status: 200, headers: { "Content-Type": "application/json" } })
}
