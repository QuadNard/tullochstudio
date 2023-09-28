"use client";

import Link from 'next/link';
import {usePathname} from 'next/navigation';



const ClientLink = ({path, name}: {path: string, name: string}) => {
    const pathname = usePathname();
    return <Link href={path} className={`${path === pathname ? "": ""}`}>
        {name}
    </Link>
}


export default ClientLink;