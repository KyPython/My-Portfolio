import Link from "next/link";

export default function About() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-900">
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      <p className="max-w-xl text-lg text-center mb-8">
        Hi, I&apos;m KyPython! I build web, app, and game projects with a focus
        on clean code, user-first design, and creative problem solving. My
        journey started with curiosity and grew into a passion for impactful
        software.
      </p>
      <ul className="mb-8 text-left max-w-lg">
        <li>
          <strong>Frontend:</strong> HTML, CSS, JS, React & React Native
        </li>
        <li>
          <strong>Backend:</strong> Node.js, Supabase
        </li>
        <li>
          <strong>Game Dev:</strong> Unity, C#, Godot
        </li>
        <li>
          <strong>Tools:</strong> Git, Figma, Firebase, Jira, Postman
        </li>
      </ul>
      <Link
        href="/projects"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
      >
        See My Projects
      </Link>
    </main>
  );
}
