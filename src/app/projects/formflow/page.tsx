import Image from "next/image";
import Link from "next/link";

export default function FormFlowStory() {
  return (
    <main className="max-w-2xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-4">FormFlow</h1>
      <div className="mb-4">
        <Link href="/projects" className="text-sm text-blue-600 underline">
          ← Back to Projects
        </Link>
      </div>
      <Image
        src="/images/formflow.svg"
        alt="FormFlow Screenshot"
        width={1200}
        height={600}
        className="rounded mb-6"
      />
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Value</h2>
        <p>
          A robust SaaS application for automating form workflows and
          deployment. Features intelligent auto-fill, Typeform integration,
          secure cloud hosting, and automated CI/CD pipelines.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Tech Stack</h2>
        <p>
          React, JavaScript, SCSS, Node.js, Express.js, REST APIs, GitHub
          Actions, Vercel
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Live & Repo</h2>
        <a
          href="https://formflow-frontend-phi.vercel.app"
          target="_blank"
          className="text-blue-600 underline mr-4"
        >
          Live
        </a>
        <a
          href="https://github.com/KyPython/FormFlow"
          target="_blank"
          className="text-gray-600 underline"
        >
          Repo
        </a>
      </section>
    </main>
  );
}
