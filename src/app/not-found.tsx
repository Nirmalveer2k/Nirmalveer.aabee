"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <main className="flex w-screen flex-grow flex-col items-center justify-center py-2">
      <h2 className="font-mono text-8xl font-black">
        <div className="inline-block animate-[wave_2s_ease-in-out_infinite]">
          4
        </div>
        <div className="inline-block animate-[wave_2s_ease-in-out_0.3s_infinite] duration-100">
          0
        </div>
        <div className="inline-block animate-[wave_2s_ease-in-out_0.6s_infinite] duration-200">
          4
        </div>
      </h2>
      <p className="mb-4">We couldn&apos;t find the requested page</p>
      <div className="flex items-center gap-4">
        <Link
          href={"/"}
          className="rounded-sm border border-black bg-black px-4 py-2 text-white transition hover:scale-105 hover:bg-white hover:text-black"
        >
          Return Home
        </Link>
        <button
          onClick={router.back}
          className="rounded-sm border border-black px-4 py-2 transition hover:scale-105"
        >
          Back
        </button>
      </div>
    </main>
  );
}
