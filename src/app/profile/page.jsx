
"use client"

import { UpDateUserModal } from "@/components/profile/UpdateUserModal";
import { authClient } from "@/lib/auth-client";
import { Avatar, Card } from "@heroui/react";

const ProfilePage = () => {
    const userdata = authClient.useSession();
    console.log(userdata)
    const data = userdata.data?.user;

    return (
        <div>
            <Card className="w-[70vh] mx-auto h-[40vh]  gap-2  flex justify-center items-center shadow-xl rounded-2xl">
                <div className="mx-auto flex flex-col justify-center items-center space-y-2">
                    <Avatar className="h-20 w-20">
                        <Avatar.Image alt="John Doe" src={data?.image} referrerPolicy="no-referrer" />
                        <Avatar.Fallback>{data?.name[0]}</Avatar.Fallback>
                    </Avatar>
                    <h2 className="text-3xl font-bold">{data?.name}</h2>
                    <p className="font-medium">{data?.email}</p>
                </div>
                <UpDateUserModal></UpDateUserModal>
            </Card>
        </div>
    );
};

export default ProfilePage;