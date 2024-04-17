import Link from "next/link";
import GetPosts from "../components/GetPosts";
import ItemPost from "../components/ItemPost";

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
                        return <ItemPost post={post} key={post.id} />
                    })}
                </div>
            </div>
        </>
    )
}

export default Blog
