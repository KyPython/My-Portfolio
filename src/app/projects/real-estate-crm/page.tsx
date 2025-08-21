import Image from "next/image";

export default function RealEstateCRM() {
  return (
    <main className="min-h-screen bg-white text-gray-900 py-10 px-4">
      <h1 className="text-3xl font-bold mb-4">Real Estate CRM Web App</h1>
      <h2 className="text-lg font-semibold mb-2">Full Stack Developer</h2>
      <ul className="mb-4 flex flex-wrap gap-2">
        <li className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">
          React
        </li>
        <li className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">
          Node.js
        </li>
        <li className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">
          Firebase
        </li>
      </ul>
      <p className="mb-4">
        A full-stack application that helps real estate agents automate
        processes and manage client relationships.
      </p>
      <section className="mb-6">
        <h3 className="font-bold mb-2">Problem</h3>
        <p>
          Agents struggled with manual client tracking and inefficient
          workflows.
        </p>
      </section>
      <section className="mb-6">
        <h3 className="font-bold mb-2">Hypothesis</h3>
        <p>
          Automating client management would save time and improve
          relationships.
        </p>
      </section>
      <section className="mb-6">
        <h3 className="font-bold mb-2">Messy Thinking / Sketches</h3>
        <Image
          src="https://via.placeholder.com/800x450?text=CRM+Sketch"
          alt="CRM Sketch"
          width={800}
          height={450}
          className="w-full max-w-md mb-2 rounded"
        />
        <p>Initial wireframes and flow diagrams mapped out the user journey.</p>
      </section>
      <section className="mb-6">
        <h3 className="font-bold mb-2">Solution + Tech</h3>
        <p>
          Built with React, Node.js, and Firebase for real-time updates and
          secure data.
        </p>
      </section>
      <section className="mb-6">
        <h3 className="font-bold mb-2">Result / Impact</h3>
        <p>
          Reduced client onboarding time by 60%. Agents reported higher
          satisfaction.
        </p>
      </section>
      <section className="mb-6">
        <h3 className="font-bold mb-2">Demo</h3>
        <iframe
          src="https://codepen.io/demo"
          title="CRM Demo"
          className="w-full aspect-video rounded border"
          allowFullScreen
        ></iframe>
      </section>
    </main>
  );
}
