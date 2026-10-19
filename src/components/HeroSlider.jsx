import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const slides = ["/images/hero1.jpg", "/images/hero2.jpg", "/images/hero3.jpg"];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 7000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[85vh] min-h-[500px] overflow-hidden bg-slate-900 text-white">
      {/* Layer 1: images */}
      {slides.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[2500ms] ease-in-out ${
            i === current ? "z-10 opacity-100" : "z-0 opacity-0 delay-[2500ms]"
          }`}
        />
      ))}

      {/* Layer 2: dark overlay */}
      <div className="absolute inset-0 z-20 bg-black/50" />

      {/* Layer 3: content */}
      <div className="relative z-30 flex h-full flex-col items-center justify-center px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-200">
          Welcome to Your School
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
          Where curious minds grow into confident leaders
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-slate-200">
          A nurturing environment with excellent teachers, modern facilities and
          a community that supports every child to succeed.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            to="/admissions"
            className="rounded-lg bg-white px-6 py-3 font-semibold text-blue-700 transition hover:bg-blue-50"
          >
            Apply Now
          </Link>
          <Link
            to="/about"
            className="rounded-lg border border-white/50 px-6 py-3 font-semibold transition hover:bg-white/10"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
