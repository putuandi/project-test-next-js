async function getDetailPost({ id }) {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const post = await res.json()
    return post;
}

async function Detail({ id }) {
    const data = await getDetailPost(id);
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

export default Detail
