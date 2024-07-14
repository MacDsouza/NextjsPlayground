"use client"
import { usePathname } from "next/navigation";

export default function Post() {
    const pathname = usePathname();
    return <p>{pathname}</p>;
    //usePathname is an hook provided by nextjs for navgation 
    //pathname gives us the current path of the page we are on, which can be helpful to conditional render components based on the path.
}