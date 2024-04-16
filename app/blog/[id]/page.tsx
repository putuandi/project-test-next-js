import Detail from "@/app/components/Detail";

async function SinglePost({ params: id }) {
    const data = await Detail(id);
    return (
        <div className="container py-5 mx-auto">
            <div className="p-4 rounded-md bg-slate-500">
                <h5 className="font-bold text-lg">{data.title}</h5>
                <article>
                    <p>{data.body}</p>
                </article>
            </div>
        </div>
    )
}

export default SinglePost;