import { useState, useEffect } from "react";
import Container from "./Container";
import SectionHeading from "./SectionHeading";
import { testimonials } from "../data/testimonials";

function getInitials(name) {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [paused]);

  return (
    <section>
      <Container className="py-20">
        <SectionHeading
          title="What Parents Say"
          subtitle="Hear from the families who trust us with their children."
        />

        <div
          className="mx-auto max-w-3xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* The window */}
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            {/* The track */}
            <div
              className="flex ease-in-out motion-safe:transition-transform motion-safe:duration-700"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((t, i) => (
                <figure
                  key={t.id}
                  aria-hidden={i !== current}
                  className="w-full shrink-0 px-6 py-10 text-center md:px-12 md:py-14"
                >
                  <span
                    className="block text-6xl leading-none text-blue-200"
                    aria-hidden="true"
                  >
                    “
                  </span>

                  <blockquote className="mt-2 text-lg leading-relaxed text-slate-700 md:text-xl">
                    {t.quote}
                  </blockquote>

                  <figcaption className="mt-8 flex items-center justify-center gap-3">
                    {t.image ? (
                      <img
                        src={t.image}
                        alt={t.name}
                        className="h-12 w-12 rounded-full object-cover"
                      />
                    ) : (
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-700">
                        {getInitials(t.name)}
                      </div>
                    )}
                    <div className="text-left">
                      <p className="font-semibold text-slate-900">{t.name}</p>
                      <p className="text-sm text-slate-500">{t.role}</p>
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="mt-6 flex justify-center gap-2">
            {testimonials.map((t, i) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setCurrent(i)}
                aria-label={`Show testimonial ${i + 1}`}
                aria-current={i === current}
                className={`h-2.5 rounded-full transition-all ${
                  i === current
                    ? "w-8 bg-blue-600"
                    : "w-2.5 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
