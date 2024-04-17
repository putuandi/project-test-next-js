import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode } from "react";

async function getUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const user = await res.json();
    return user;
}

export default async function Users() {
    const data = await getUsers();
    return (
        <div className="container mx-auto py-5">
            {data.map((user: { name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; }) => {
                return (
                    // eslint-disable-next-line react/jsx-key
                    <div className="p-4 bg-blue-500 rounded-sm mb-3">
                        <h5>{user.name}</h5>
                    </div>
                );
            })}
        </div>
    )
}

