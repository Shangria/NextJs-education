import Link from "next/link";
import {useRouter} from 'next/router';
import Image from "next/image";
import styles from "../styles/Navbar.module.scss";

const navigation = [
    {id: 1, title: "Home", path: "/"},
    {id: 2, title: "Posts", path: "/posts"},
    {id: 3, title: "Contacts", path: "/contacts"},
];

const Navbar = () => {
    const rout = useRouter();
    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>
                <Image alt="logo" width="64" height="64" src="/uniswap-uni-logo.png"/>
            </div>
            <div className={styles.links}>
                {navigation.map(({id, title, path}) => (
                    <Link legacyBehavior key={id} href={path}>
                        <a className={rout.pathname === path ? styles.active : null}>{title}</a>
                    </Link>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;