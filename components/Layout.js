import Head from "next/head";
import Haad from "next/head";
import Navbar from "./Navbar"

const Layout  = (props) => (
    <div>
        <Head>
            <title>BitzPrice</title>
            <link href="https://bootswatch.com/4/cerulean/bootstrap.min.css" rel="stylesheet"></link>
        </Head>
        <Navbar/>
        <div className="container">
            {props.children}
        </div>
    </div>
);

export default Layout;