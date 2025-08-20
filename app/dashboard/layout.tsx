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
      <aside className="w-[250px] md:w-[350px] bg-white shadow-md border-r fixed top-0 left-0 h-scree">
        <SideBar /> {/*  only reason sidebar fixed */}
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex ml-[250px] md:ml-[350px] justify-center overflow-y-auto">
        <main className="w-full max-w-screen-lg p-6 mr-20">{children}</main>
      </div>
    </div>
  );
}
