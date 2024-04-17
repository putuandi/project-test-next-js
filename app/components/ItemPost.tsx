import Link from "next/link"

function ItemPost({ post }) {
    return (
        <div key={post.id} className="p-4 rounded-md bg-slate-500">
            <h5>{post.title}</h5>
            <Link href={`/blog/${post.id}`} className="text-blue-300 text-sm">Learn more</Link>
        </div>
    )
}

export default ItemPost
