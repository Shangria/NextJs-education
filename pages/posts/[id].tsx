import Head from "next/head";
import PostInfo from "../../components/PostInfo";
import {GetStaticPaths, GetStaticProps} from "next";
import {FC} from "react";
import { postType} from "../../types";



type postsTypeProps = {
    post: postType
}


//for generation static pages

const url = 'https://jsonplaceholder.typicode.com/posts';

export const getStaticPaths:GetStaticPaths = async () => {
    const response = await fetch(url);
    const data = await response.json();

    // @ts-ignore
    const paths = data.map(({id}) => ({
        params: {id: id.toString()},
    }));

    return {
        paths,
        fallback: false
    };
};

export const getStaticProps:GetStaticProps = async (context) => {

    // @ts-ignore
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

const Id:FC<postsTypeProps> = ({post}) => {

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