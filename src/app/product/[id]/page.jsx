"use client";
import { usePathname } from "next/navigation";

function page() {
    const pathname = usePathname();
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <header className="mb-4">
        <h1 className="text-2xl font-bold text-gray-800">Product info</h1>
      </header>
      <p className="text-gray-600">
        This page gives information about the {pathname}.
      </p>
    </div>
  );
}

export default page;
