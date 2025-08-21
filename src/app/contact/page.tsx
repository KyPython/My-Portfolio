export default function Contact() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-900">
      <h1 className="text-3xl font-bold mb-4">Contact</h1>
      <p className="mb-6 text-lg">
        Let&apos;s connect! Reach out via email or social links below.
      </p>
      <ul className="space-y-4">
        <li>
          Email:{" "}
          <a
            href="mailto:ky@python.dev"
            className="text-blue-600 hover:underline"
          >
            ky@python.dev
          </a>
        </li>
        <li>
          LinkedIn:{" "}
          <a
            href="https://linkedin.com/in/kypython"
            className="text-blue-600 hover:underline"
          >
            linkedin.com/in/kypython
          </a>
        </li>
        <li>
          GitHub:{" "}
          <a
            href="https://github.com/KyPython"
            className="text-blue-600 hover:underline"
          >
            github.com/KyPython
          </a>
        </li>
      </ul>
    </main>
  );
}
