import Head from "next/head";
import ContactInfo from "../../components/ContactInfo";
import {GetServerSideProps} from "next";
import {FC} from "react";
import {contactType} from "../../types";

type contactTypeProps = {
    contact: contactType
}


export const getServerSideProps: GetServerSideProps = async (context) => {
    // @ts-ignore
    const {id} = context.params;
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    const response = await fetch(url);
    const data = await response.json();

    //special object next then data is null
    if (!data) {
        return {
            notFound: true
        };
    }

    return {
        props: {contact: data},
    };
};

const Id: FC<contactTypeProps> = ({contact}) => {

    return (
        <>
            <Head>
                <title>Contact</title>
            </Head>
            <ContactInfo contact={contact}></ContactInfo>
        </>

    );
};

export default Id;