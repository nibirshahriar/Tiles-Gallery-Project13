"use client";

import { authClient } from "@/lib/auth-client";
import { Avatar, Button, Card } from "@heroui/react";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";
import { BiEdit } from "react-icons/bi";


const ProfilePage = () => {
  const userData = authClient.useSession();
  if (!userData.isPending && !userData.data?.user) {
    redirect("/signin");
  }
  const user = userData.data?.user;
  return (
    <div>
      <Card className="max-w-96 mx-auto flex flex-col items-center gap-4 py-10 mt-5">
        <Avatar className="h-20 w-20 rounded-full mx-auto">
          <Avatar.Image
            alt={user?.name}
            src={user?.image}
            referrerPolicy="no-referrer"
          />
          <Avatar.Fallback>
            {user?.name.charAt(0).toUpperCase()}
          </Avatar.Fallback>
        </Avatar>
        <h2 className="text-xl font-bold">{user?.name}</h2>
        <p className="text-muted-foreground">{user?.email}</p>
        <Link href="/profile/update">
          <Button variant="secondary">
            <BiEdit />
            Update Profile
          </Button>
        </Link>
      </Card>
    </div>
  );
};

export default ProfilePage;
