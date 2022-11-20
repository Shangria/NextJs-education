import Heading from "./Heading";
import {contactType} from "../types";
import {FC} from "react";

type ContactInfoProps = {
    contact: contactType
}
const ContactInfo: FC<ContactInfoProps> = ({contact}) => {
    const {name, email} = contact || {};

    if (!contact) {
        return <Heading tag="h3" text="Contact is fall"></Heading>;
    }
    return (
        <>
            <Heading tag="h3" text={name}></Heading>
            <h2>{name}</h2>
            <h4>{email}</h4>
        </>
    );
};

export default ContactInfo;