"use client";

import { useGetMe } from "@/hooks";

export default function RoleGuard() {
    const {data,  isPending, isError} = useGetMe()
  return <div>RoleGuard</div>;
}
