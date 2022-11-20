import '../styles/globals.scss';
import img1 from '../public/photo-15.jpeg';
import Layout from "../components/Layout";
import Image from "next/image";
import Head from "next/head";
import {AppProps} from "next/app";

const myApp = ({Component, pageProps} :AppProps) => {
    return (
        <Layout>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Comic+Neue&display=swap" rel="stylesheet"/>
            </Head>
            <main>
                <Component {...pageProps} />
            </main>
            <Image
                src={img1}
                alt="logo"
                width={500}
                height={300}
                placeholder="blur"/>
        </Layout>
    );
};

export default myApp;