"use client";

import React, { useEffect, useId, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, type MotionProps } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";

export type ExpandableCardItem = {
  title: string;
  description: string;
  src?: string;
  ctaText?: React.ReactNode;
  ctaLink?: string;
  previewText?: string;
  previewLink?: string;
  category?: string;
  content?: React.ReactNode | (() => React.ReactNode);
};

export default function ExpandableCard({
  cards,
}: {
  cards: ExpandableCardItem[];
}) {
  const [active, setActive] = useState<ExpandableCardItem | boolean | null>(
    null,
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();
  const prefersReducedMotion = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  const hasImage = (card?: ExpandableCardItem | null) => Boolean(card?.src);

  const overlayMotion: MotionProps = prefersReducedMotion
    ? {}
    : { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } };

  const modalMotion: MotionProps = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, scale: 0.96, y: 8 },
        animate: { opacity: 1, scale: 1, y: 0 },
        exit: { opacity: 0, scale: 0.98, y: 6 },
        transition: { duration: 0.28, ease: "easeOut" },
      };

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            {...overlayMotion}
            className="fixed inset-0 z-10 h-full w-full bg-black/70 backdrop-blur-sm"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 z-[100] grid place-items-center p-4">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-white lg:hidden"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              {...modalMotion}
              className="relative flex h-full w-full max-w-[620px] flex-col overflow-hidden rounded-3xl border border-emerald-400/40 bg-zinc-950/95 shadow-[0_30px_80px_rgba(0,0,0,0.55)] md:h-fit md:max-h-[90%]"
            >
              {active.previewLink ? (
                <a
                  href={active.previewLink}
                  target="_blank"
                  rel="noreferrer"
                  className="block"
                >
                  <motion.div layoutId={`image-${active.title}-${id}`}>
                    {hasImage(active) ? (
                      <img
                        width={560}
                        height={320}
                        src={active.src}
                        alt={active.title}
                        className="h-72 w-full object-cover object-top"
                      />
                    ) : (
                      <div className="flex h-48 w-full items-center justify-center bg-emerald-500/10 text-xs uppercase tracking-[0.2em] text-emerald-200/70">
                        Preview
                      </div>
                    )}
                  </motion.div>
                </a>
              ) : (
                <motion.div layoutId={`image-${active.title}-${id}`}>
                  {hasImage(active) ? (
                    <img
                      width={560}
                      height={320}
                      src={active.src}
                      alt={active.title}
                      className="h-72 w-full object-cover object-top"
                    />
                  ) : (
                    <div className="flex h-48 w-full items-center justify-center bg-emerald-500/10 text-xs uppercase tracking-[0.2em] text-emerald-200/70">
                      Preview
                    </div>
                  )}
                </motion.div>
              )}

              <div>
                <div className="flex items-start justify-between gap-3 p-4">
                  <div>
                    {active.category ? (
                      <span className="mb-2 inline-flex rounded border border-emerald-400/30 bg-emerald-400/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-emerald-200">
                        {active.category}
                      </span>
                    ) : null}
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="text-2xl font-semibold text-zinc-100"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-sm text-zinc-400"
                    >
                      {active.description}
                    </motion.p>
                  </div>
                  <div className="flex items-center gap-2">
                    {active.ctaText && active.ctaLink ? (
                      <motion.a
                        layoutId={`button-${active.title}-${id}`}
                        href={active.ctaLink}
                        target="_blank"
                        className="text-[10px] font-semibold uppercase tracking-[0.16em] text-emerald-100 transition hover:text-emerald-200"
                        rel="noreferrer"
                      >
                        {active.ctaText}
                      </motion.a>
                    ) : null}
                    {active.previewText && active.previewLink ? (
                      <motion.a
                        href={active.previewLink}
                        target="_blank"
                        className="rounded-full border border-emerald-400/30 bg-black/40 px-2 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-emerald-100 transition hover:border-emerald-300/70 hover:bg-emerald-400/10 hover:text-emerald-50"
                        rel="noreferrer"
                      >
                        {active.previewText}
                      </motion.a>
                    ) : null}
                  </div>
                </div>
                <div className="relative px-4 pt-4">
                  <motion.div
                    layout
                    initial={prefersReducedMotion ? undefined : { opacity: 0 }}
                    animate={prefersReducedMotion ? undefined : { opacity: 1 }}
                    exit={prefersReducedMotion ? undefined : { opacity: 0 }}
                    className="flex h-40 flex-col items-start gap-4 overflow-auto pb-10 text-xs text-zinc-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [-ms-overflow-style:none] [scrollbar-width:none] md:h-fit md:text-sm"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
                
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="group relative -ml-px -mt-px cursor-pointer border border-emerald-500/15 bg-black/30 p-4 transition hover:bg-emerald-400/5"
          >
            <div className="mb-3 flex items-center justify-between gap-2">
              <span className="rounded border border-emerald-400/30 bg-emerald-400/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-emerald-200">
                {card.category ?? "Other"}
              </span>
              {card.ctaText && card.ctaLink ? (
                <motion.a
                  layoutId={`button-${card.title}-${id}`}
                  href={card.ctaLink}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(event) => event.stopPropagation()}
                  className="text-[10px] font-semibold uppercase tracking-[0.16em] text-emerald-100"
                >
                  {card.ctaText}
                </motion.a>
              ) : null}
            </div>
            <motion.h3
              layoutId={`title-${card.title}-${id}`}
              className="text-lg font-semibold text-zinc-100"
            >
              {card.title}
            </motion.h3>
            <motion.p
              layoutId={`description-${card.description}-${id}`}
              className="mt-2 text-xs leading-relaxed text-zinc-400"
            >
              {card.description}
            </motion.p>
            <div className="mt-4 flex items-center gap-2 text-[10px] uppercase tracking-[0.16em] text-emerald-200/70">
              <span>Click to expand</span>
              <span className="h-px w-6 bg-emerald-300/50" />
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};
