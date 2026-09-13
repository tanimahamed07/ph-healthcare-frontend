"use client";

import { Button } from "@/components/ui/button";
import { useGetMe, useLogout } from "@/hooks";
import Link from "next/link";
import { toast } from "../../toast";
import { useQueryClient } from "@tanstack/react-query";

export default function Header() {
  const routes = [
    { name: "Home", url: "/" },
    { name: "About us", url: "/about-us" },
  ];

  const { data, isLoading } = useGetMe();
  const queryClient = useQueryClient();
  const { mutate: logout } = useLogout();

  const handleLogout = () => {
    logout(undefined, {
      onSuccess: () => {
        toast.add({
          title: "Tata",
          description: "Logged Out Successfully",
          type: "success",
        });

        queryClient.removeQueries({ queryKey: ["user"] });
      },
      onError: () => {
        toast.add({
          title: "Logout failed",
          description: "Something went wrong",
          type: "error",
        });
      },
    });
  };

  return (
    <header className="w-full h-16 border border-b">
      <div className="flex justify-between items-center h-full max-w-7xl mx-auto">
        <div>PH Healthcare</div>
        <nav className="flex gap-5">
          {routes.map((route) => (
            <Link key={route.url} href={route.url}>
              {route.name}
            </Link>
          ))}
        </nav>
        <div>
          {!isLoading && !data && (
            <Button
              variant="outline"
              render={<Link href="/login">Login</Link>}
              nativeButton={false}
            >
              Login
            </Button>
          )}
          {!isLoading && data && (
            <Button onClick={handleLogout} variant="destructive">
              Logout
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
