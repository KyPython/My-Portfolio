import Image from "next/image";
import Link from "next/link";

export default function AlgoClinicStory() {
  return (
    <main className="max-w-2xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-4">AlgoClinic</h1>
      <div className="mb-4">
        <Link href="/projects" className="text-sm text-blue-600 underline">
          ← Back to Projects
        </Link>
      </div>
      <Image
        src="/images/algoclinic.svg"
        alt="AlgoClinic Screenshot"
        width={1200}
        height={600}
        className="rounded mb-6"
      />
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Value</h2>
        <p>
          Created a unique multiplayer puzzle experience, blending creative
          mechanics with social play.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Process</h2>
        <p>
          Designed core mechanics in Unity, iterated with player feedback, and
          implemented online logic using C#.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Hypothesis</h2>
        <p>
          Players would engage longer if puzzles required collaboration and
          creative thinking.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Results</h2>
        <p>
          Beta testers reported high engagement and replay value; multiplayer
          logic was robust and scalable.
        </p>
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-2">Visuals</h2>
        <Image
          src="/project2.jpg"
          alt="Game Screenshot"
          width={600}
          height={240}
          className="rounded"
        />
      </section>
    </main>
  );
}
