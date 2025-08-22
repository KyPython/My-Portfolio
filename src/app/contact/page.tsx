export default function Contact() {
  return (
    <main className="min-h-screen bg-(--color-background) py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="heading-hero text-(--color-foreground) mb-8">Contact</h1>
        
        <div className="max-w-2xl mx-auto mb-12">
          <p className="text-body-large text-(--color-foreground) leading-relaxed">
            Let&apos;s connect! Reach out via email or social links below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-(--color-muted) p-6 rounded-lg">
            <h3 className="heading-card text-(--color-foreground) mb-4">Email</h3>
            <a
              href="mailto:kyjahntsmith@gmail.com"
              className="text-body text-(--color-accent) hover:text-blue-700 transition-colors break-all"
            >
              kyjahntsmith@gmail.com
            </a>
          </div>
          
          <div className="bg-(--color-muted) p-6 rounded-lg">
            <h3 className="heading-card text-(--color-foreground) mb-4">LinkedIn</h3>
            <a
              href="https://www.linkedin.com/in/kyjahn-smith-16487224b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-body text-(--color-accent) hover:text-blue-700 transition-colors break-all"
            >
              linkedin.com/in/kyjahn-smith-16487224b/
            </a>
          </div>
          
          <div className="bg-(--color-muted) p-6 rounded-lg">
            <h3 className="heading-card text-(--color-foreground) mb-4">GitHub</h3>
            <a
              href="https://github.com/KyPython"
              target="_blank"
              rel="noopener noreferrer"
              className="text-body text-(--color-accent) hover:text-blue-700 transition-colors break-all"
            >
              github.com/KyPython
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}