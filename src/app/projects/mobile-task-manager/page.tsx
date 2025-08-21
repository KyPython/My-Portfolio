import Image from "next/image";

export default function MobileTaskManager() {
  return (
    <main className="min-h-screen bg-white text-gray-900 py-10 px-4">
      <h1 className="text-3xl font-bold mb-4">Mobile Task Manager</h1>
      <h2 className="text-lg font-semibold mb-2">App Developer</h2>
      <ul className="mb-4 flex flex-wrap gap-2">
        <li className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">
          React Native
        </li>
        <li className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">
          Supabase
        </li>
      </ul>
      <p className="mb-4">
        A React Native app for managing daily tasks with cloud sync and
        notifications.
      </p>
      <section className="mb-6">
        <h3 className="font-bold mb-2">Problem</h3>
        <p>Users needed a simple way to track tasks across devices.</p>
      </section>
      <section className="mb-6">
        <h3 className="font-bold mb-2">Hypothesis</h3>
        <p>
          Cloud sync and notifications would boost productivity and reliability.
        </p>
      </section>
      <section className="mb-6">
        <h3 className="font-bold mb-2">Messy Thinking / Sketches</h3>
        <Image
          src="https://via.placeholder.com/800x450?text=Task+Sketch"
          alt="Task Manager Sketch"
          width={800}
          height={450}
          className="w-full max-w-md mb-2 rounded"
        />
        <p>Wireframes and user flow diagrams shaped the app’s UX.</p>
      </section>
      <section className="mb-6">
        <h3 className="font-bold mb-2">Solution + Tech</h3>
        <p>
          Built with React Native and Supabase for real-time sync and
          notifications.
        </p>
      </section>
      <section className="mb-6">
        <h3 className="font-bold mb-2">Result / Impact</h3>
        <p>Users reported improved task completion and satisfaction.</p>
      </section>
      <section className="mb-6">
        <h3 className="font-bold mb-2">Demo</h3>
        <iframe
          src="https://codepen.io/demo"
          title="Task Manager Demo"
          className="w-full aspect-video rounded border"
          allowFullScreen
        ></iframe>
      </section>
    </main>
  );
}
