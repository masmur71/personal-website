"use client";

import { useEffect, useRef } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";
import { skills } from "../lib/content";

function SkillSet({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul className="skill-set" aria-hidden={hidden || undefined} aria-label={hidden ? undefined : "Skills"}>
      {skills.map((skill, index) => (
        <li className="skill" key={skill.label} style={{ animationDelay: `${index * -0.4}s` }}>
          <img src={`/skills/${skill.icon}.svg`} alt={hidden ? "" : skill.label} title={skill.label} width={40} height={40} draggable={false} />
        </li>
      ))}
    </ul>
  );
}

export default function SkillCarousel() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const hoveredRef = useRef(false);
  const draggingRef = useRef(false);
  const startXRef = useRef(0);
  const startScrollRef = useRef(0);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const speed = 0.035;
    let frame = 0;
    let last = performance.now();
    let position = viewport.scrollLeft;

    const tick = (now: number) => {
      const delta = Math.min(now - last, 64);
      last = now;

      if (!hoveredRef.current && !draggingRef.current) {
        position += delta * speed;
        const half = viewport.scrollWidth / 2;
        if (half > 0 && position >= half) position -= half;
        viewport.scrollLeft = position;
      } else {
        position = viewport.scrollLeft;
      }

      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  const onPointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse") return;
    const viewport = event.currentTarget;
    draggingRef.current = true;
    startXRef.current = event.clientX;
    startScrollRef.current = viewport.scrollLeft;
    viewport.setPointerCapture(event.pointerId);
  };

  const onPointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;
    event.currentTarget.scrollLeft = startScrollRef.current - (event.clientX - startXRef.current);
  };

  const endDrag = (event: ReactPointerEvent<HTMLDivElement>) => {
    draggingRef.current = false;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  return (
    <div
      ref={viewportRef}
      className="skill-strip"
      onPointerEnter={() => { hoveredRef.current = true; }}
      onPointerLeave={() => { hoveredRef.current = false; draggingRef.current = false; }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
    >
      <div className="skill-track">
        <SkillSet />
        <SkillSet hidden />
      </div>
    </div>
  );
}

