import Head from "next/head";
import PostInfo from "../../components/PostInfo";

//for generation static pages

const url = 'https://jsonplaceholder.typicode.com/posts';

export const getStaticPaths = async () => {
    const response = await fetch(url);
    const data = await response.json();

    const paths = data.map(({id}) => ({
        params: {id: id.toString()},
    }));

    return {
        paths,
        fallback: false
    };
};

export const getStaticProps = async (context) => {

    const { id } = context.params;
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    const response = await fetch(url);
    const data = await response.json();

    //special object next then data is null
    if (!data) {
        return {
            notFound: true
        };
    }

    return {
        props: {post: data},
    };
};

const Id = ({post}) => {

    return (
        <>
            <Head>
                <title>Post</title>
            </Head>
            <PostInfo post={post}></PostInfo>
        </>

    );
};

export default Id;