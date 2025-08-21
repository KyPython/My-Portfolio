import Image from "next/image";

export default function MobileTaskManagerStory() {
  return (
    <main className="max-w-2xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-4">Mobile Task Manager</h1>
      <Image
        src="/project3.jpg"
        alt="Mobile Task Manager"
        width={600}
        height={240}
        className="rounded mb-6"
      />
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Value</h2>
        <p>
          Empowers users to manage daily tasks efficiently with cloud sync and
          notifications.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Process</h2>
        <p>
          Developed with React Native and Supabase, focused on seamless UX and
          real-time sync.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Hypothesis</h2>
        <p>
          Task completion rates improve with instant sync and timely reminders.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Results</h2>
        <p>
          Users reported increased productivity and satisfaction; cloud sync was
          reliable across devices.
        </p>
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-2">Visuals</h2>
        <Image
          src="/project3.jpg"
          alt="App Screenshot"
          width={600}
          height={240}
          className="rounded"
        />
      </section>
    </main>
  );
}
