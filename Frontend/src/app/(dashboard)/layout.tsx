'use client';
import Header from "@/components/layout/header";
import Sidebar from "@/components/layout/sidebar";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Clock } from 'lucide-react';



export default function ContainerLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {

    const pathname = usePathname();

    const title = pathname.split("/").filter(Boolean).pop()?.replace(/^\w/, (c) => c.toUpperCase());

    console.log(title);

    return <div className="container max-w-full h-full flex flex-col overflow-hidden">
            <Header></Header>
            <div className="container max-w-full max-h-full flex flex-row overflow-hidden">
            <Sidebar></Sidebar>
            <div className="container max-w-full h-full flex flex-col">
                <div className="max-w-full flex flex-row gap-[0.5rem] items-center px-[1rem] py-[1rem] box-border bg-white h-auto border border-[#E0E0E0]"> 
                    {title === "Dashboard" && <LayoutDashboard size={24}/>}
                    {title === "Timeclock" && <Clock size={24}/>}
                    {title}
                </div>
                {children}
            </div>
            </div>
        </div>;
}
  