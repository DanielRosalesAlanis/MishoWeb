"use client";

import { useState } from "react";

type AccordionItemData = {
  title: string;
  summary: string;
  bullets: string[];
};

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      className={`shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
      aria-hidden
    >
      <path
        d="M6 9l6 6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function AccordionItem({
  item,
  open,
  onToggle,
}: {
  item: AccordionItemData;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-misho-border bg-misho-card transition-colors duration-300 hover:border-misho-white/30">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <div>
          <h3 className="font-bold">{item.title}</h3>
          <p className="mt-1 text-sm text-misho-muted">{item.summary}</p>
        </div>
        <ChevronIcon open={open} />
      </button>

      <div
        className="grid transition-[grid-template-rows] duration-300 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <ul className="flex flex-col gap-2 px-6 pb-6 text-sm text-misho-muted">
            {item.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-2">
                <span className="text-misho-white">—</span>
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function Accordion({ items }: { items: AccordionItemData[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="flex flex-col gap-3">
      {items.map((item, index) => (
        <AccordionItem
          key={item.title}
          item={item}
          open={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  );
}
