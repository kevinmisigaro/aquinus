"use client";

import { useRouter } from "next/navigation";

function Menu({ section }: { section?: string }) {
  const router = useRouter();

  return (
    <div
      className={`flex flex-row justify-between px-20 py-5 bg-black w-full text-white`}
    >
      <div onClick={() => router.push("/")} className="cursor-pointer">Aquinus Farms</div>

      <div
        onClick={() => router.push("/privacy")}
        className="hover:underline cursor-pointer"
      >
        Privacy Policy
      </div>
    </div>
  );
}

export default Menu;
