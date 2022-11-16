import {useEffect} from "react";
import {useRouter} from "next/router";

const Error = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 1000);
    }, [router]);

    return (
        <h1>Error</h1>
    );
};

export default Error;