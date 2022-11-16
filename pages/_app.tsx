import '../styles/globals.scss';
import type {AppProps} from 'next/app';
import img1 from '../public/photo-15.jpeg';
import Layout from "../components/Layout";
import Image from "next/image";

const myApp = ({Component, pageProps}: AppProps) => {
    return (
        <Layout>
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