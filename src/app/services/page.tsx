import Link from "next/link";

export default function Services() {
  const services = [
    {
      category: "Web Development",
      description: "Modern, responsive websites and web applications",
      services: [
        "Custom React/Next.js applications",
        "Responsive website design",
        "E-commerce solutions",
        "Landing pages and portfolios",
        "Web app optimization and performance"
      ]
    },
    {
      category: "Mobile App Development", 
      description: "Cross-platform mobile applications",
      services: [
        "React Native mobile apps",
        "iOS and Android development",
        "App store deployment",
        "Mobile UI/UX design",
        "App maintenance and updates"
      ]
    },
    {
      category: "Backend Development",
      description: "Scalable server-side solutions",
      services: [
        "Node.js API development",
        "Database design and optimization",
        "Supabase integration",
        "Authentication systems",
        "Cloud deployment and hosting"
      ]
    },
    {
      category: "Game Development",
      description: "Interactive games and experiences",
      services: [
        "Unity game development",
        "Godot game creation",
        "2D and 3D game design",
        "Game mechanics programming",
        "Cross-platform game deployment"
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-(--color-background) py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="heading-hero text-(--color-foreground) mb-8">Services</h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-body-large text-(--color-foreground) leading-relaxed mb-8">
              I help businesses and individuals bring their digital ideas to life through 
              clean code, user-first design, and creative problem solving. Here's what I can do for you:
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-(--color-muted) p-8 rounded-lg">
              <h3 className="heading-card text-(--color-foreground) mb-4">{service.category}</h3>
              <p className="text-body text-(--color-muted-foreground) mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.services.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-(--color-accent) rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-body text-(--color-foreground)">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-(--color-muted) p-8 rounded-lg text-center">
          <h3 className="heading-card text-(--color-foreground) mb-4">Ready to Get Started?</h3>
          <p className="text-body text-(--color-muted-foreground) mb-6 max-w-2xl mx-auto">
            Let's discuss your project and how I can help bring your vision to life. 
            I work with businesses of all sizes to create impactful digital solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-(--color-accent) text-(--color-accent-foreground) rounded-lg text-body font-semibold hover:opacity-90 transition-opacity"
            >
              Get In Touch
            </Link>
            <Link
              href="/projects"
              className="inline-block px-8 py-4 border border-(--color-border) rounded-lg text-body font-semibold hover:bg-(--color-muted) transition-colors"
            >
              View My Work
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}