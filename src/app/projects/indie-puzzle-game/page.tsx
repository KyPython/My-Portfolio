import Image from "next/image";

export default function IndiePuzzleGame() {
  return (
    <main className="min-h-screen bg-white text-gray-900 py-10 px-4">
      <h1 className="text-3xl font-bold mb-4">Indie Puzzle Game</h1>
      <h2 className="text-lg font-semibold mb-2">Game Developer</h2>
      <ul className="mb-4 flex flex-wrap gap-2">
        <li className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">
          Unity
        </li>
        <li className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">
          C#
        </li>
      </ul>
      <p className="mb-4">
        A Unity-based puzzle game with multiplayer logic and creative mechanics.
      </p>
      <section className="mb-6">
        <h3 className="font-bold mb-2">Problem</h3>
        <p>Players wanted a challenging, collaborative puzzle experience.</p>
      </section>
      <section className="mb-6">
        <h3 className="font-bold mb-2">Hypothesis</h3>
        <p>
          Combining unique mechanics with multiplayer would increase engagement.
        </p>
      </section>
      <section className="mb-6">
        <h3 className="font-bold mb-2">Messy Thinking / Sketches</h3>
        <Image
          src="https://via.placeholder.com/800x450?text=Puzzle+Sketch"
          alt="Puzzle Game Sketch"
          width={800}
          height={450}
          className="w-full max-w-md mb-2 rounded"
        />
        <p>Concept art and level design sketches guided development.</p>
      </section>
      <section className="mb-6">
        <h3 className="font-bold mb-2">Solution + Tech</h3>
        <p>Developed in Unity with C# for robust gameplay and networking.</p>
      </section>
      <section className="mb-6">
        <h3 className="font-bold mb-2">Result / Impact</h3>
        <p>
          Players reported high satisfaction and replay value. Featured on
          Itch.io.
        </p>
      </section>
      <section className="mb-6">
        <h3 className="font-bold mb-2">Demo</h3>
        <iframe
          src="https://itch.io/embed/123456"
          title="Puzzle Game Demo"
          className="w-full aspect-video rounded border"
          allowFullScreen
        ></iframe>
      </section>
    </main>
  );
}
