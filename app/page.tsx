"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [user, setUser] = useState<{ name: string; token: string } | null>(
    null
  );
  const [loading, setLoading] = useState(true);

  // Check if user is logged in by checking local storage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        const token = parsedUser?.token;
        const name = parsedUser?.user?.name;

        if (token && name) {
          setUser({ name, token });
          setLoading(false);
        } else {
          router.push("/login");
        }
      } catch {
        router.push("/login");
      }
    } else {
      router.push("/login");
    }
  }, [router]);

  // Show loading screen while verifying user
  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="relative flex flex-col items-center">
          {/* Gradient Spinner */}
          <div className="relative">
            <div className="w-20 h-20 border-4 border-t-transparent border-green-800 rounded-full animate-spin"></div>
            <div className="absolute inset-0 w-16 h-16 m-2 border-4 border-t-transparent border-green-600 rounded-full animate-spin animate-reverse"></div>
            <div className="absolute inset-0 w-12 h-12 m-4 bg-green-400 rounded-full opacity-50 animate-pulse"></div>
          </div>
          {/* Loading Text */}
          <div className="mt-6 flex items-center space-x-2">
            <p className="text-xl font-semibold text-gray-800 animate-pulse">
              Loading
            </p>
            <div className="flex space-x-1">
              <div
                className="w-2 h-2 bg-green-800 rounded-full animate-bounce"
                style={{ animationDelay: "0s" }}
              ></div>
              <div
                className="w-2 h-2 bg-green-600 rounded-full animate-bounce"
                style={{ animationDelay: "0.2s" }}
              ></div>
              <div
                className="w-2 h-2 bg-green-400 rounded-full animate-bounce"
                style={{ animationDelay: "0.4s" }}
              ></div>
            </div>
          </div>
          {/* Subtle Hint Text */}
          <p className="mt-2 text-sm text-gray-500 animate-pulse">
            Please wait a moment...
          </p>
        </div>
      </div>
    );

  // If loading, return null to avoid rendering before user state is set
  if (!user) return null;
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Main content centered */}
      <div className="flex justify-center mr-20 w-full">
        <main className="w-full max-w-screen-lg p-6">go to dashboard</main>
      </div>
    </div>
  );
}
