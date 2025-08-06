"use client";
import SideBar from "../components/SideBar/SideBar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-[250px] md:w-[350px] bg-white shadow-md border-r">
        <SideBar /> {/*  only reason sidebar fixed */}
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex justify-center">
        <main className="w-full max-w-screen-lg p-6 mr-20">{children}</main>
      </div>
    </div>
  );
}
