import {useEffect} from "react";
import {useRouter} from "next/router";
import Head from "next/head";

const Error = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 1000);
    }, [router]);

    return (
        <>
            <Head>
                <title>Error</title>
            </Head>
            <h1>Error</h1>
        </>

    );
};

export default Error;