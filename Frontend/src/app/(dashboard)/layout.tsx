'use client';
import Header from "@/components/layout/header";
import Sidebar from "@/components/layout/sidebar";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { LayoutDashboard, Clock, Users, ChevronRight } from 'lucide-react';
import React from "react";
import Link from "next/link";
import Cookies from 'js-cookie';



// Example hook to get the user session (replace with your actual session management)
function useSession() {
  if (typeof window === "undefined") return false; // Prevents SSR issues

  const userCookie = Cookies.get("user");
  if (!userCookie) return false;

  try {
    return JSON.parse(userCookie);
  } catch (error) {
    console.error("Error parsing user cookie:", error);
    return false;
  }
}



export default function ContainerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const title = pathname.split("/")[1]?.replace(/^\w/, (c) => c.toUpperCase());
  const session = useSession();

  useEffect(() => {
    if (!session) {
      router.replace("/login");
      return;
    }
  
    if (!session.roles.includes("Admin")) {
      router.replace("/unauthorized");
      return;
    }
  }, [session, router]);

  return (
    <div className="container max-w-full h-full flex flex-col overflow-hidden">
      <Header />
      <div className="container max-w-full max-h-full flex flex-row overflow-hidden">
        <Sidebar />
        <div className="container max-w-full h-full flex flex-col relative">
          <div className="max-w-full flex flex-row gap-[0.5rem] items-center px-[1rem] py-[1rem] box-border bg-white h-auto border border-[#E0E0E0]">
            {title === "Dashboard" && <LayoutDashboard size={24} />}
            {title === "Timeclock" && <Clock size={24} />}
            {title === "Users" && <Users size={24} />}
            {pathname
              .split("/")
              .filter((segment) => segment)
              .map((segment, index, array) => (
                <React.Fragment key={index}>
                  {index === 0 && array.length > 1 ? (
                    <Link
                      href={`/${segment}`}
                      className="capitalize text-blue-500 hover:underline"
                    >
                      {segment}
                    </Link>
                  ) : (
                    <span className="capitalize">{segment}</span>
                  )}
                  {index < array.length - 1 && <ChevronRight size={24} />}
                </React.Fragment>
              ))}
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
