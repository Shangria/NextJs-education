import Heading from "../../components/Heading";
import Head from "next/head";
import Link from "next/link";


export const getStaticProps = async () => {
    const url = `https://jsonplaceholder.typicode.com/posts`;
    const response = await fetch(url);
    const data = await response.json();

    //special object next then data is null
    if (!data) {
        return {
            notFound: true
        };
    }

    return {
        props: {posts: data},
    };
};


const Posts = ({posts}) => {

    return (
        <>
            <Head>
                <title>Posts</title>
            </Head>
            <Heading text="Posts list"></Heading>
            <ul>
                {
                    posts && posts.map(({id, title}) => (
                        <li key={id}>
                            <Link href={`/posts/${id}`}>{title}</Link>
                        </li>
                    ))
                }

            </ul>
        </>
    );
};

export default Posts;