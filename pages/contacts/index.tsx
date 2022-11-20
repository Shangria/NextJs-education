import Heading from "../../components/Heading";
import Head from "next/head";
import Link from "next/link";
import {GetStaticProps} from "next";
import {FC} from "react";
import {contactType} from "../../types";


const url = 'https://jsonplaceholder.typicode.com/users';

export const getStaticProps:GetStaticProps = async () => {
    const response = await fetch(url);
    const data = await response.json();

    //special object next then data is null
    if (!data) {
        return {
            notFound: true
        };
    }

    return {
        props: {contacts: data},
    };
};

type contactTypeProps={
    contacts:[contactType]
}

const Contacts:FC<contactTypeProps> = ({contacts}) => {

    return (
        <>
            <Head>
                <title>Contacts</title>
            </Head>
            <Heading text="Contacts list"></Heading>
            <ul>
                {/* {contacts.map((contact) => (
                        <li key={contact.name}>{contact.name}</li>
                    ))}*/}

                {
                    contacts && contacts.map(({name, id}) => (
                        <li key={id}>
                            <Link href={`/contacts/${id}`}>{name}</Link>
                        </li>
                    ))
                }

            </ul>
        </>
    );
};

export default Contacts;