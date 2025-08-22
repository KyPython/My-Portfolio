import Image from "next/image";
import Link from "next/link";

export default function GrowthMasterStory() {
  return (
    <main className="max-w-2xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-4">Growth Master</h1>
      <div className="mb-4">
        <Link href="/projects" className="text-sm text-blue-600 underline">
          ← Back to Projects
        </Link>
      </div>
      <Image
        src="/images/growth-master.svg"
        alt="Growth Master Screenshot"
        width={1200}
        height={600}
        className="rounded mb-6"
      />
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Value</h2>
        <p>
          A clean, emotionally-driven mobile app for tracking personal growth
          and performance. Log daily wins, visualize progress, and enjoy a fast,
          intuitive, and motivating experience.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Tech Stack</h2>
        <p>React Native, JavaScript, TypeScript, HTML, CSS/SCSS, Figma</p>
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Live & Repo</h2>
        <span className="text-gray-500">Not deployed yet</span>
      </section>
    </main>
  );
}
