async function GetPosts() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const post = await res.json();
    return post;
}

export default GetPosts;
