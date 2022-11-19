import Head from "next/head";
import ContactInfo from "../../components/ContactInfo";


export const getServerSideProps = async (context) => {
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

const Id = ({contact}) => {

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