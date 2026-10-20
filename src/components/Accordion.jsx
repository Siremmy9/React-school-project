import { useState } from "react";

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200 bg-white">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={item.question}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-semibold text-slate-900 transition hover:bg-slate-50"
            >
              {item.question}
              <span
                className={`shrink-0 text-2xl leading-none text-blue-600 transition-transform ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>

            {isOpen && (
              <p className="px-6 pb-5 leading-relaxed text-slate-600">
                {item.answer}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
