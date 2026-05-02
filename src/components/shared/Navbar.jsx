"use client";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    const userdata = authClient.useSession();
    console.log(userdata)
    const data = userdata.data?.user;
   // console.log(data);
    
    const handleSignOut = async()=>{

        await authClient.signOut()
    }

    return (
        <div className="border-b px-2 ">
            <nav className=" flex justify-between items-center  py-3 max-w-7xl mx-auto w-full">
                <div className="flex gap-2 items-center">
                    <h3 className="font-black text-lg">Suncart.</h3>
                </div>

                <ul className="flex items-center gap-5 text-sm">
                    <li>
                        <Link href={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link href={"/allProducts"}>All Photos</Link>
                    </li>
                    <li>
                        <Link href={"/profile"}>Profile</Link>
                    </li>
                </ul>

                <div className="flex gap-4">
                    {!data && <ul className="flex items-center  text-sm gap-3">
                        <li>
                            <Link href={"/signup"}>SignUp</Link>
                        </li>
                        <li>
                            <Link href={"/signin"}>SignIn</Link>
                        </li>
                    </ul>}

                    {
                        data && <div className="flex items-center gap-3">
                            <Avatar>
                                <Avatar.Image alt="John Doe" src={data?.image} referrerPolicy="no-referrer" />
                                <Avatar.Fallback>{data?.name[0]}</Avatar.Fallback>
                            </Avatar>
                            <Button onClick={handleSignOut} variant="danger" >Logout</Button>
                        </div>
                    }
                </div>
            </nav>
        </div>
    );
};

export default Navbar;