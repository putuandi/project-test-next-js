import Link from "next/link";
import GetPosts from "../components/GetPosts";

async function Blog() {
    const blog = await GetPosts();

    return (
        <>
            <div className="container mx-auto">
                <h1 className="text-lg font-bold text-center text-black mb-5">
                    Blog
                </h1>
                <div className="grid grid-cols-4 gap-4">
                    {blog.map((post : any, i : any) => {
                        return (
                            <div key={post.id} className="p-4 rounded-md bg-slate-500">
                                <h5>{post.title}</h5>
                                <Link href={`/blog/${post.id}`} className="text-blue-300 text-sm">Learn more</Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Blog
