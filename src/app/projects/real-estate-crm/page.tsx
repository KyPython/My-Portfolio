import Image from "next/image";

export default function RealEstateCRMStory() {
  return (
    <main className="max-w-2xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-4">Real Estate CRM Web App</h1>
      <Image
        src="/project1.jpg"
        alt="Real Estate CRM Web App"
        width={600}
        height={240}
        className="rounded mb-6"
      />
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Value</h2>
        <p>
          Automates real estate workflows, improves client management, and saves
          agents time.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Process</h2>
        <p>
          Built with React, Node.js, and Firebase; iterated features based on
          agent feedback.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Hypothesis</h2>
        <p>
          Agents would close more deals with automated reminders and streamlined
          client data.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Results</h2>
        <p>
          Agents reported higher efficiency and improved client satisfaction;
          automation reduced manual errors.
        </p>
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-2">Visuals</h2>
        <Image
          src="/project1.jpg"
          alt="CRM Screenshot"
          width={600}
          height={240}
          className="rounded"
        />
      </section>
    </main>
  );
}
