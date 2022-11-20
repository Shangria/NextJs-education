import Head from "next/head";
import Heading from "../components/Heading";
import Socials from "../components/Socials";
import {FC} from "react";
import {socialsType} from "../types";

type SocialsProps = {
    socials: [socialsType]
}



export const getStaticProps = async () => {
    try {
        const response = await fetch(`${process.env.API_HOST}/socials/`);
        const data = await response.json();

        //special object next then data is null
        if (!data) {
            return {
                notFound: true
            };
        }

        return {
            props: {socials: data},
        };
    } catch {
        return {
            props: {socials: null}
        };
    }

};

const Index:FC<SocialsProps> = ({socials}) => {
    return (
        <div>
            <Head>
                <title>Home</title>
            </Head>
            <Heading text="Next.JS"></Heading>
            <Socials socials={socials}/>
        </div>
    );
};

export default Index;