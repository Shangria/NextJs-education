import Heading from "../../components/Heading";
import Head from "next/head";
import Link from "next/link";
import {GetStaticProps} from "next";
import {FC} from "react";
import {postType} from "../../types";

type postsTypeProps = {
    posts: [postType]
}



export const getStaticProps:GetStaticProps = async () => {
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


const Posts:FC<postsTypeProps> = ({posts}) => {

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