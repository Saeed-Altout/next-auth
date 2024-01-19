"use client";
import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { date } from "zod";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

export default function Home() {
  const { data: session, status } = useSession();

  if (status === "unauthenticated") {
    redirect("/sign-up");
  }
  return (
    <>
      <nav className="flex justify-between items-center h-16 border-b container mx-auto">
        <div className="flex justify-center items-center gap-2">
          <Avatar>
            <AvatarImage src={session?.user?.image || undefined} />
            <AvatarFallback className="capitalize font-semibold">
              {session?.user?.name?.toString()[0]}
            </AvatarFallback>
          </Avatar>

          <p>{session?.user?.name}</p>
        </div>

        <div>
          <Button variant="ghost" size="icon" onClick={() => signOut()}>
            <LogOut className="h-4 w-4" />
          </Button>
        </div>
      </nav>
    </>
  );
}
