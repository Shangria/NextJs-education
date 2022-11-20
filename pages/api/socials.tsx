import {socials} from "./data/socials";
import {NextApiHandler, NextApiResponse} from "next";


export default function handler(req:NextApiHandler, res:NextApiResponse) {
    if(req.method==='GET'){
        res.status(200).json(socials);
    }
}
