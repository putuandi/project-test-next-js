import Link from "next/link";
import Styles from './product.module.css';
import Info from "../components/Info";
import { resolve } from "path";

export default async function product() {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return (
        <>
            <div className={Styles.main}>
                <h1>ini product</h1>
            </div>
            <Info title="Product Component" />
        </>
    );
}
