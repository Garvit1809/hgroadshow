"use client";
import React from 'react';

const SPONSORS = [
  { name: "Gautam Solar", src: "/sponsors/gautam solar.png" },
  { name: "ReNew", src: "/sponsors/RENEW.png" },
  { name: "Evolve", src: "/sponsors/evolve logo.png" },
  { name: "Good Enough", src: "/sponsors/good enough.png" },
  { name: "Grun", src: "/sponsors/grun logo.png" },
  { name: "INA Solar", src: "/sponsors/ina solar.png" },
  { name: "Voltra", src: "/sponsors/voltra logo .png" },
];

export default function SponsorMarquee() {
  // The list is rendered twice so the track can loop by translating exactly
  // -50%. Spacing lives in each chip's right margin rather than a flex `gap`,
  // so both halves measure identically and the loop point is seamless.
  const track = [...SPONSORS, ...SPONSORS];

  return (
    <div className="marquee w-full overflow-hidden py-1">
      <div className="marquee-track flex w-max items-center">
        {track.map((sponsor, i) => (
          <div
            key={`${sponsor.name}-${i}`}
            aria-hidden={i >= SPONSORS.length}
            className="mr-3 sm:mr-4 shrink-0 flex h-12 sm:h-14 items-center justify-center rounded-xl bg-white/95 px-4 sm:px-6 shadow-[0_4px_16px_rgba(0,0,0,0.15)]"
          >
            <img
              src={encodeURI(sponsor.src)}
              alt={i < SPONSORS.length ? sponsor.name : ""}
              loading="lazy"
              decoding="async"
              className="h-6 sm:h-8 w-auto max-w-[96px] sm:max-w-[128px] object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
