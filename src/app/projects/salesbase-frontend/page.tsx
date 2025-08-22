import Image from "next/image";
import Link from "next/link";

export default function SalesBaseFrontendStory() {
  return (
    <main className="max-w-2xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-4">SalesBase Frontend</h1>
      <div className="mb-4">
        <Link href="/projects" className="text-sm text-blue-600 underline">
          ← Back to Projects
        </Link>
      </div>
      <Image
        src="/images/salesbase-frontend.svg"
        alt="SalesBase CRM Screenshot"
        width={1200}
        height={600}
        className="rounded mb-6"
      />
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Value</h2>
        <p>
          Modern CRM frontend with React and Tailwind CSS. Intuitive dashboard,
          responsive design, and seamless API integration for enterprise sales
          management. Launched enterprise CRM with real-time data and secure
          auth.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Tech Stack</h2>
        <p>React, Tailwind CSS, API Integration</p>
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Live & Repo</h2>
        <a
          href="https://salesbase-frontend.vercel.app"
          target="_blank"
          className="text-blue-600 underline mr-4"
        >
          Live
        </a>
        <a
          href="https://github.com/KyPython/salesbase-frontend"
          target="_blank"
          className="text-gray-600 underline"
        >
          Repo
        </a>
      </section>
    </main>
  );
}
