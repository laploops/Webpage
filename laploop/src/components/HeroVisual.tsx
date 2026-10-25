import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react';

// ============================================================================
// THE LAPLOOP TECHNOLOGY FIELD
// Architectural Multi-Tiered Computing & Systems Matrix
// ============================================================================

// Isometric 30-degree projection mathematical utilities
const ORIGIN_X = 460;
const ORIGIN_Y = 225;
const COS30 = Math.cos(Math.PI / 6); // ~0.866025
const SIN30 = Math.sin(Math.PI / 6); // 0.500000

interface Point2D {
  x: number;
  y: number;
}

const iso = (u: number, v: number, w: number = 0): Point2D => ({
  x: ORIGIN_X + (u - v) * COS30,
  y: ORIGIN_Y + (u + v) * SIN30 - w,
});

const polyPoints = (pts: Point2D[]): string =>
  pts.map((p) => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ');

export const HeroVisual: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const visualWrapperRef = useRef<HTMLDivElement | null>(null);
  const [activeTier, setActiveTier] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse tilt animation state
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const animFrameRef = useRef<number | null>(null);

  // SVG dynamic data pulse refs
  const pulseGroupRef = useRef<SVGGElement | null>(null);
  const pulseTimeRef = useRef(0);

  // Pre-calculate isometric geometries for pristine SVG rendering
  const geo = useMemo(() => {
    // ------------------------------------------------------------------------
    // TIER 1: Silicon & Hardware Substrate (Ground Plane, w = 0, thickness = 18)
    // ------------------------------------------------------------------------
    const t1_w = 0;
    const t1_thick = 16;
    const t1_uMin = -220, t1_uMax = 220;
    const t1_vMin = -160, t1_vMax = 160;

    const t1_top = [
      iso(t1_uMin, t1_vMin, t1_w),
      iso(t1_uMax, t1_vMin, t1_w),
      iso(t1_uMax, t1_vMax, t1_w),
      iso(t1_uMin, t1_vMax, t1_w),
    ];

    const t1_leftFace = [
      iso(t1_uMin, t1_vMax, t1_w),
      iso(t1_uMax, t1_vMax, t1_w),
      iso(t1_uMax, t1_vMax, t1_w - t1_thick),
      iso(t1_uMin, t1_vMax, t1_w - t1_thick),
    ];

    const t1_rightFace = [
      iso(t1_uMax, t1_vMin, t1_w),
      iso(t1_uMax, t1_vMax, t1_w),
      iso(t1_uMax, t1_vMax, t1_w - t1_thick),
      iso(t1_uMax, t1_vMin, t1_w - t1_thick),
    ];

    // Substrate etched grid lines
    const t1_gridLines: { x1: number; y1: number; x2: number; y2: number }[] = [];
    for (let u = -180; u <= 180; u += 60) {
      const p1 = iso(u, -140, t1_w);
      const p2 = iso(u, 140, t1_w);
      t1_gridLines.push({ x1: p1.x, y1: p1.y, x2: p2.x, y2: p2.y });
    }
    for (let v = -120; v <= 120; v += 60) {
      const p1 = iso(-180, v, t1_w);
      const p2 = iso(180, v, t1_w);
      t1_gridLines.push({ x1: p1.x, y1: p1.y, x2: p2.x, y2: p2.y });
    }

    // ------------------------------------------------------------------------
    // TIER 2: Distributed Processing Matrix (Mid Elevation, w = 48, thick = 12)
    // ------------------------------------------------------------------------
    const t2_w = 48;
    const t2_thick = 12;

    // Primary Compute Slab (Center & East)
    const t2a_top = [
      iso(-90, -110, t2_w),
      iso(160, -110, t2_w),
      iso(160, 80, t2_w),
      iso(-90, 80, t2_w),
    ];
    const t2a_leftFace = [
      iso(-90, 80, t2_w),
      iso(160, 80, t2_w),
      iso(160, 80, t2_w - t2_thick),
      iso(-90, 80, t2_w - t2_thick),
    ];
    const t2a_rightFace = [
      iso(160, -110, t2_w),
      iso(160, 80, t2_w),
      iso(160, 80, t2_w - t2_thick),
      iso(160, -110, t2_w - t2_thick),
    ];

    // Secondary Accelerator Slab (West Coprocessor)
    const t2b_w = 36;
    const t2b_thick = 10;
    const t2b_top = [
      iso(-175, -50, t2b_w),
      iso(-80, -50, t2b_w),
      iso(-80, 110, t2b_w),
      iso(-175, 110, t2b_w),
    ];
    const t2b_leftFace = [
      iso(-175, 110, t2b_w),
      iso(-80, 110, t2b_w),
      iso(-80, 110, t2b_w - t2b_thick),
      iso(-175, 110, t2b_w - t2b_thick),
    ];
    const t2b_rightFace = [
      iso(-80, -50, t2b_w),
      iso(-80, 110, t2b_w),
      iso(-80, 110, t2b_w - t2b_thick),
      iso(-80, -50, t2b_w - t2b_thick),
    ];

    // Optical Interconnect Bridges between T2a and T2b
    const bridgeTraces = [
      { start: iso(-80, -10, t2b_w), end: iso(-90, -10, t2_w) },
      { start: iso(-80, 20, t2b_w), end: iso(-90, 20, t2_w) },
      { start: iso(-80, 50, t2b_w), end: iso(-90, 50, t2_w) },
    ];

    // ------------------------------------------------------------------------
    // TIER 3: Cognitive Synthesis Core (Upper Elevation, w = 102, thick = 12)
    // ------------------------------------------------------------------------
    const t3_w = 102;
    const t3_thick = 12;
    const t3_uMin = -65, t3_uMax = 65;
    const t3_vMin = -55, t3_vMax = 55;

    const t3_top = [
      iso(t3_uMin, t3_vMin, t3_w),
      iso(t3_uMax, t3_vMin, t3_w),
      iso(t3_uMax, t3_vMax, t3_w),
      iso(t3_uMin, t3_vMax, t3_w),
    ];

    const t3_leftFace = [
      iso(t3_uMin, t3_vMax, t3_w),
      iso(t3_uMax, t3_vMax, t3_w),
      iso(t3_uMax, t3_vMax, t3_w - t3_thick),
      iso(t3_uMin, t3_vMax, t3_w - t3_thick),
    ];

    const t3_rightFace = [
      iso(t3_uMax, t3_vMin, t3_w),
      iso(t3_uMax, t3_vMax, t3_w),
      iso(t3_uMax, t3_vMax, t3_w - t3_thick),
      iso(t3_uMax, t3_vMin, t3_w - t3_thick),
    ];

    // Inner Logic Nexus on Tier 3
    const t3_innerNexus = [
      iso(-35, -28, t3_w + 1),
      iso(35, -28, t3_w + 1),
      iso(35, 28, t3_w + 1),
      iso(-35, 28, t3_w + 1),
    ];

    // Central high-density processing core chip
    const t3_microDie = [
      iso(-16, -14, t3_w + 2),
      iso(16, -14, t3_w + 2),
      iso(16, 14, t3_w + 2),
      iso(-16, 14, t3_w + 2),
    ];

    // ------------------------------------------------------------------------
    // VERTICAL INTERCONNECT PILLARS (Through-Silicon Vias - TSVs)
    // Connecting Tier 3 to Tier 2 and Tier 2 to Tier 1
    // ------------------------------------------------------------------------
    const tsvs = [
      // From Tier 3 to Tier 2
      { u: -45, v: -35, topW: t3_w - t3_thick, botW: t2_w, tier: 3 },
      { u: 45, v: -35, topW: t3_w - t3_thick, botW: t2_w, tier: 3 },
      { u: 45, v: 35, topW: t3_w - t3_thick, botW: t2_w, tier: 3 },
      { u: -45, v: 35, topW: t3_w - t3_thick, botW: t2_w, tier: 3 },
      // Secondary peripheral TSVs from Tier 2 down to Tier 1 Substrate
      { u: 125, v: -60, topW: t2_w - t2_thick, botW: t1_w, tier: 2 },
      { u: 125, v: 40, topW: t2_w - t2_thick, botW: t1_w, tier: 2 },
      { u: -135, v: 70, topW: t2b_w - t2b_thick, botW: t1_w, tier: 2 },
      { u: -135, v: -15, topW: t2b_w - t2b_thick, botW: t1_w, tier: 2 },
    ];

    // ------------------------------------------------------------------------
    // HIGHWAY BUS PATHS FOR ANIMATED DATA SIGNALS
    // ------------------------------------------------------------------------
    // Bus A: Loops across Tier 3 core and down through TSV
    const busPathA = [
      iso(-45, -35, t3_w),
      iso(45, -35, t3_w),
      iso(45, 35, t3_w),
      iso(-45, 35, t3_w),
      iso(-45, -35, t3_w),
    ];

    // Bus B: Traverses Tier 2 Compute Matrix out to East Edge
    const busPathB = [
      iso(0, 0, t2_w),
      iso(120, 0, t2_w),
      iso(120, -70, t2_w),
      iso(145, -70, t2_w),
    ];

    // Bus C: Optical Bridge Channel between T2a and T2b
    const busPathC = [
      iso(50, 40, t2_w),
      iso(-60, 40, t2_w),
      iso(-80, 40, t2b_w),
      iso(-140, 40, t2b_w),
      iso(-140, 85, t2b_w),
    ];

    return {
      t1_top,
      t1_leftFace,
      t1_rightFace,
      t1_gridLines,
      t2a_top,
      t2a_leftFace,
      t2a_rightFace,
      t2b_top,
      t2b_leftFace,
      t2b_rightFace,
      bridgeTraces,
      t3_top,
      t3_leftFace,
      t3_rightFace,
      t3_innerNexus,
      t3_microDie,
      tsvs,
      busPathA,
      busPathB,
      busPathC,
    };
  }, []);

  // --------------------------------------------------------------------------
  // Interactive 3D Parallax Tilt & Precision Data Packet Loop
  // --------------------------------------------------------------------------
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const handlePointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1; // [-1, 1]
      const ny = ((e.clientY - rect.top) / rect.height) * 2 - 1; // [-1, 1]
      mouseRef.current.targetX = Math.max(-1, Math.min(1, nx));
      mouseRef.current.targetY = Math.max(-1, Math.min(1, ny));
    };

    const handlePointerLeave = () => {
      mouseRef.current.targetX = 0;
      mouseRef.current.targetY = 0;
      setIsHovered(false);
      setActiveTier(null);
    };

    const handlePointerEnter = () => {
      setIsHovered(true);
    };

    container.addEventListener('pointermove', handlePointerMove, { passive: true });
    container.addEventListener('pointerleave', handlePointerLeave);
    container.addEventListener('pointerenter', handlePointerEnter);

    let lastTime = performance.now();

    const animate = (now: number) => {
      const dt = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;

      // Spring interpolate 3D tilt
      const m = mouseRef.current;
      m.x += (m.targetX - m.x) * 0.1;
      m.y += (m.targetY - m.y) * 0.1;

      if (visualWrapperRef.current && !prefersReducedMotion) {
        const tiltX = -m.y * 3.8; // subtle max 3.8 deg pitch
        const tiltY = m.x * 4.8;  // subtle max 4.8 deg yaw
        visualWrapperRef.current.style.transform = `perspective(1200px) rotateX(${tiltX.toFixed(2)}deg) rotateY(${tiltY.toFixed(2)}deg)`;
      }

      // Step data packet clock
      if (!prefersReducedMotion) {
        pulseTimeRef.current += dt * (isHovered ? 1.3 : 0.85);
      }

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animFrameRef.current = requestAnimationFrame(animate);

    return () => {
      container.removeEventListener('pointermove', handlePointerMove);
      container.removeEventListener('pointerleave', handlePointerLeave);
      container.removeEventListener('pointerenter', handlePointerEnter);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [isHovered]);

  return (
    <div
      ref={containerRef}
      data-cursor="technology-field"
      className="relative w-full h-[360px] sm:h-[430px] lg:h-[480px] flex items-center justify-center select-none"
      aria-label="The Laploop Technology Field — Architectural computing systems and intelligent interconnect matrix"
    >
      {/* Background soft ambient radial gradient (ultra-restrained, pure white compatible) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(37, 99, 235, 0.05) 0%, rgba(6, 182, 212, 0.02) 45%, transparent 75%)',
        }}
        aria-hidden="true"
      />

      {/* 3D Tilt Wrapper */}
      <div
        ref={visualWrapperRef}
        className="relative w-full h-full flex items-center justify-center will-change-transform transition-transform duration-300 ease-out"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <svg
          viewBox="100 20 720 420"
          className="w-full h-full object-contain relative z-10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Soft cast shadow filter for floating tiers */}
            <filter id="slab-shadow" x="-10%" y="-10%" width="130%" height="130%">
              <feDropShadow dx="0" dy="16" stdDeviation="18" floodColor="#0F172A" floodOpacity="0.07" />
            </filter>

            <filter id="top-slab-shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="20" stdDeviation="22" floodColor="#0B1220" floodOpacity="0.11" />
            </filter>

            {/* Linear gradients for architectural faces */}
            {/* Top surfaces: crisp tech off-white */}
            <linearGradient id="plane-surface-light" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="60%" stopColor="#F8FAFC" />
              <stop offset="100%" stopColor="#F1F5F9" />
            </linearGradient>

            {/* Executive tier top surface: precision deep obsidian/navy */}
            <linearGradient id="plane-surface-core" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1E293B" />
              <stop offset="100%" stopColor="#0B1220" />
            </linearGradient>

            {/* Vertical drop faces: steel navy light and shadow sides */}
            <linearGradient id="facet-left-shadow" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1E293B" />
              <stop offset="100%" stopColor="#0F172A" />
            </linearGradient>

            <linearGradient id="facet-right-mid" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#334155" />
              <stop offset="100%" stopColor="#1E293B" />
            </linearGradient>

            {/* Laploop Blue to Cyan Bus trace gradient */}
            <linearGradient id="bus-glow-trace" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06B6D4" />
              <stop offset="50%" stopColor="#2563EB" />
              <stop offset="100%" stopColor="#06B6D4" />
            </linearGradient>

            {/* Vertical TSV Pillar gradient */}
            <linearGradient id="tsv-pillar-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#94A3B8" />
              <stop offset="40%" stopColor="#E2E8F0" />
              <stop offset="70%" stopColor="#CBD5E1" />
              <stop offset="100%" stopColor="#64748B" />
            </linearGradient>
          </defs>

          {/* ========================================================== */}
          {/* TIER 1: SILICON & HARDWARE SUBSTRATE (GROUND FOUNDATION)   */}
          {/* ========================================================== */}
          <g
            id="tier-1-substrate"
            className="transition-opacity duration-300 cursor-pointer"
            onPointerEnter={() => setActiveTier(1)}
            onPointerLeave={() => setActiveTier(null)}
            opacity={activeTier && activeTier !== 1 ? 0.65 : 1}
          >
            {/* Side Bevel Drop Faces */}
            <polygon points={polyPoints(geo.t1_leftFace)} fill="url(#facet-left-shadow)" />
            <polygon points={polyPoints(geo.t1_rightFace)} fill="url(#facet-right-mid)" />

            {/* Top Plane Surface */}
            <polygon
              points={polyPoints(geo.t1_top)}
              fill="url(#plane-surface-light)"
              stroke="#CBD5E1"
              strokeWidth="1.2"
            />

            {/* Substrate Etched Technical Grid */}
            <g stroke="#E2E8F0" strokeWidth="0.8" opacity="0.85">
              {geo.t1_gridLines.map((line, idx) => (
                <line key={`t1-grid-${idx}`} x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2} />
              ))}
            </g>

            {/* Substrate Corner Alignment Reticles */}
            {geo.t1_top.map((pt, idx) => (
              <g key={`t1-corner-${idx}`}>
                <circle cx={pt.x} cy={pt.y} r="2.5" fill="#94A3B8" />
                <circle cx={pt.x} cy={pt.y} r="5" stroke="#CBD5E1" strokeWidth="0.8" />
              </g>
            ))}

            {/* Grounding Contact Vias along perimeter */}
            {[
              iso(-180, 110, 0),
              iso(-120, 110, 0),
              iso(120, -110, 0),
              iso(180, -110, 0),
            ].map((pt, idx) => (
              <circle key={`t1-via-${idx}`} cx={pt.x} cy={pt.y} r="2.2" fill="#2563EB" opacity="0.75" />
            ))}
          </g>

          {/* ========================================================== */}
          {/* LOWER TSV VERTICAL PILLARS (Connecting Tier 2 to Tier 1)   */}
          {/* ========================================================== */}
          <g id="lower-tsvs">
            {geo.tsvs
              .filter((tsv) => tsv.tier === 2)
              .map((tsv, idx) => {
                const topPt = iso(tsv.u, tsv.v, tsv.topW);
                const botPt = iso(tsv.u, tsv.v, tsv.botW);
                return (
                  <g key={`tsv-low-${idx}`}>
                    {/* TSV Shadow onto substrate */}
                    <ellipse cx={botPt.x} cy={botPt.y + 1} rx="4" ry="2.2" fill="#0F172A" opacity="0.25" />
                    {/* Vertical pillar stroke */}
                    <line
                      x1={topPt.x}
                      y1={topPt.y}
                      x2={botPt.x}
                      y2={botPt.y}
                      stroke="url(#tsv-pillar-grad)"
                      strokeWidth="3.2"
                      strokeLinecap="round"
                    />
                    {/* Core high-speed optical conduit center */}
                    <line
                      x1={topPt.x}
                      y1={topPt.y}
                      x2={botPt.x}
                      y2={botPt.y}
                      stroke="#2563EB"
                      strokeWidth="1.0"
                      strokeDasharray="3 3"
                      opacity="0.8"
                    />
                  </g>
                );
              })}
          </g>

          {/* ========================================================== */}
          {/* TIER 2: DISTRIBUTED PROCESSING MATRIX & BUS ARCHITECTURE   */}
          {/* ========================================================== */}
          <g
            id="tier-2-matrix"
            className="transition-opacity duration-300 cursor-pointer"
            filter="url(#slab-shadow)"
            onPointerEnter={() => setActiveTier(2)}
            onPointerLeave={() => setActiveTier(null)}
            opacity={activeTier && activeTier !== 2 ? 0.7 : 1}
          >
            {/* Secondary Coprocessor Slab (T2b - West) */}
            <g id="tier-2b-coprocessor">
              <polygon points={polyPoints(geo.t2b_leftFace)} fill="url(#facet-left-shadow)" />
              <polygon points={polyPoints(geo.t2b_rightFace)} fill="url(#facet-right-mid)" />
              <polygon
                points={polyPoints(geo.t2b_top)}
                fill="url(#plane-surface-light)"
                stroke="#94A3B8"
                strokeWidth="1.2"
              />
              {/* Micro-etched parallel routing lines on Coprocessor */}
              {[-30, 0, 30, 60, 90].map((v, i) => {
                const p1 = iso(-160, v, 36);
                const p2 = iso(-95, v, 36);
                return (
                  <line
                    key={`t2b-lane-${i}`}
                    x1={p1.x}
                    y1={p1.y}
                    x2={p2.x}
                    y2={p2.y}
                    stroke="#CBD5E1"
                    strokeWidth="1.0"
                  />
                );
              })}
            </g>

            {/* Inter-Slab Optical Bridge Conduits */}
            {geo.bridgeTraces.map((trace, idx) => (
              <g key={`bridge-trace-${idx}`}>
                <line
                  x1={trace.start.x}
                  y1={trace.start.y}
                  x2={trace.end.x}
                  y2={trace.end.y}
                  stroke="#2563EB"
                  strokeWidth="1.6"
                />
                <circle cx={trace.start.x} cy={trace.start.y} r="2.2" fill="#06B6D4" />
                <circle cx={trace.end.x} cy={trace.end.y} r="2.2" fill="#2563EB" />
              </g>
            ))}

            {/* Primary Compute Matrix Slab (T2a - East) */}
            <g id="tier-2a-primary">
              <polygon points={polyPoints(geo.t2a_leftFace)} fill="url(#facet-left-shadow)" />
              <polygon points={polyPoints(geo.t2a_rightFace)} fill="url(#facet-right-mid)" />
              <polygon
                points={polyPoints(geo.t2a_top)}
                fill="url(#plane-surface-light)"
                stroke="#94A3B8"
                strokeWidth="1.2"
              />

              {/* Highway Bus Lines on Tier 2a */}
              <path
                d={`M ${geo.busPathB.map((p) => `${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(' L ')}`}
                stroke="url(#bus-glow-trace)"
                strokeWidth="1.8"
                fill="none"
              />

              <path
                d={`M ${geo.busPathC.map((p) => `${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(' L ')}`}
                stroke="#2563EB"
                strokeWidth="1.5"
                fill="none"
                strokeDasharray="4 2"
              />

              {/* Precision Micro Nodes on Compute Grid */}
              {[
                iso(-40, -50, 48),
                iso(30, -50, 48),
                iso(100, -50, 48),
                iso(-40, 20, 48),
                iso(30, 20, 48),
                iso(100, 20, 48),
              ].map((pt, idx) => (
                <g key={`t2-node-${idx}`}>
                  <circle cx={pt.x} cy={pt.y} r="3" fill="#FFFFFF" stroke="#2563EB" strokeWidth="1.4" />
                  <circle cx={pt.x} cy={pt.y} r="1.2" fill="#06B6D4" />
                </g>
              ))}
            </g>
          </g>

          {/* ========================================================== */}
          {/* UPPER TSV VERTICAL PILLARS (Connecting Tier 3 to Tier 2)   */}
          {/* ========================================================== */}
          <g id="upper-tsvs">
            {geo.tsvs
              .filter((tsv) => tsv.tier === 3)
              .map((tsv, idx) => {
                const topPt = iso(tsv.u, tsv.v, tsv.topW);
                const botPt = iso(tsv.u, tsv.v, tsv.botW);
                return (
                  <g key={`tsv-up-${idx}`}>
                    {/* Cast shadow of pillar base */}
                    <ellipse cx={botPt.x} cy={botPt.y + 1} rx="4.5" ry="2.4" fill="#0F172A" opacity="0.3" />
                    {/* Vertical structural column */}
                    <line
                      x1={topPt.x}
                      y1={topPt.y}
                      x2={botPt.x}
                      y2={botPt.y}
                      stroke="url(#tsv-pillar-grad)"
                      strokeWidth="3.6"
                      strokeLinecap="round"
                    />
                    {/* Luminous optical core vector */}
                    <line
                      x1={topPt.x}
                      y1={topPt.y}
                      x2={botPt.x}
                      y2={botPt.y}
                      stroke="#06B6D4"
                      strokeWidth="1.2"
                      opacity="0.9"
                    />
                  </g>
                );
              })}
          </g>

          {/* ========================================================== */}
          {/* TIER 3: COGNITIVE SYNTHESIS CORE (HIGH-FREQUENCY NEXUS)   */}
          {/* ========================================================== */}
          <g
            id="tier-3-core"
            className="transition-opacity duration-300 cursor-pointer"
            filter="url(#top-slab-shadow)"
            onPointerEnter={() => setActiveTier(3)}
            onPointerLeave={() => setActiveTier(null)}
            opacity={activeTier && activeTier !== 3 ? 0.75 : 1}
          >
            {/* Side Bevel Drop Faces */}
            <polygon points={polyPoints(geo.t3_leftFace)} fill="#0B1220" />
            <polygon points={polyPoints(geo.t3_rightFace)} fill="#1E293B" />

            {/* Top Plane Surface: Precision Obsidian/Navy Glass Die */}
            <polygon
              points={polyPoints(geo.t3_top)}
              fill="url(#plane-surface-core)"
              stroke="#3B82F6"
              strokeWidth="1.4"
            />

            {/* Inner Recessed Logic Nexus */}
            <polygon
              points={polyPoints(geo.t3_innerNexus)}
              fill="#0F172A"
              stroke="#06B6D4"
              strokeWidth="1.2"
              opacity="0.95"
            />

            {/* Micro-Logic Die (Center Core) */}
            <polygon
              points={polyPoints(geo.t3_microDie)}
              fill="#2563EB"
              stroke="#FFFFFF"
              strokeWidth="1.5"
            />

            {/* Micro-Circuit Bus Traces on Tier 3 */}
            <path
              d={`M ${geo.busPathA.map((p) => `${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(' L ')}`}
              stroke="#06B6D4"
              strokeWidth="1.2"
              fill="none"
              opacity="0.8"
            />

            {/* Corner Alignment Reticles for Tier 3 */}
            {geo.t3_top.map((pt, idx) => (
              <circle key={`t3-corner-${idx}`} cx={pt.x} cy={pt.y} r="2.2" fill="#38BDF8" />
            ))}

            {/* Central Precision Telemetry Crosshair on the Micro-Die */}
            {(() => {
              const center = iso(0, 0, 104);
              return (
                <g>
                  <circle cx={center.x} cy={center.y} r="2" fill="#FFFFFF" />
                  <circle cx={center.x} cy={center.y} r="5" stroke="#FFFFFF" strokeWidth="0.8" opacity="0.6" />
                </g>
              );
            })()}
          </g>

          {/* ========================================================== */}
          {/* DYNAMIC DATA PACKETS (Smooth animated telemetry signals)   */}
          {/* ========================================================== */}
          <g id="dynamic-data-packets" ref={pulseGroupRef}>
            {/* Packet 1: Gliding across Tier 3 perimeter */}
            <g className="animate-packet-1">
              {(() => {
                // Computed parametric coordinate along Tier 3 bus
                const p = iso(
                  Math.sin(pulseTimeRef.current * 1.5) * 45,
                  Math.cos(pulseTimeRef.current * 1.5) * 35,
                  103
                );
                return (
                  <g>
                    <circle cx={p.x} cy={p.y} r="3.2" fill="#06B6D4" />
                    <circle cx={p.x} cy={p.y} r="1.5" fill="#FFFFFF" />
                  </g>
                );
              })()}
            </g>

            {/* Packet 2: Flowing down TSV from Tier 3 to Tier 2 */}
            {(() => {
              // Normalized downward flow [0..1]
              const frac = (pulseTimeRef.current * 0.7) % 1;
              const curW = 102 - 12 - frac * (102 - 12 - 48);
              const p = iso(45, 35, curW);
              return (
                <g>
                  <circle cx={p.x} cy={p.y} r="2.8" fill="#2563EB" />
                  <circle cx={p.x} cy={p.y} r="1.2" fill="#FFFFFF" />
                </g>
              );
            })()}

            {/* Packet 3: Traveling across Tier 2 Compute Matrix */}
            {(() => {
              const frac = (pulseTimeRef.current * 0.55 + 0.35) % 1;
              const u = frac < 0.5 ? frac * 240 : 120;
              const v = frac < 0.5 ? 0 : -(frac - 0.5) * 140;
              const p = iso(u, v, 48);
              return (
                <g>
                  <circle cx={p.x} cy={p.y} r="2.6" fill="#06B6D4" />
                  <circle cx={p.x} cy={p.y} r="1.1" fill="#FFFFFF" />
                </g>
              );
            })()}

            {/* Packet 4: Crossing Optical Interconnect Bridge */}
            {(() => {
              const frac = (pulseTimeRef.current * 0.8 + 0.6) % 1;
              const u = 50 - frac * 190;
              const v = 40;
              const w = u > -80 ? 48 : 36;
              const p = iso(u, v, w);
              return (
                <g>
                  <circle cx={p.x} cy={p.y} r="2.4" fill="#2563EB" />
                  <circle cx={p.x} cy={p.y} r="1.0" fill="#FFFFFF" />
                </g>
              );
            })()}
          </g>

          {/* ========================================================== */}
          {/* ARCHITECTURAL ANNOTATION HUD (Precision Editorial Design)   */}
          {/* ========================================================== */}
          {/* Tier 3 Leader Badge (Top-Right) */}
          <g className="transition-opacity duration-200" opacity={activeTier === 3 || activeTier === null ? 0.9 : 0.4}>
            {(() => {
              const anchor = iso(65, -55, 102);
              const lineEnd = { x: anchor.x + 35, y: anchor.y - 18 };
              const textEnd = { x: lineEnd.x + 85, y: lineEnd.y };
              return (
                <g>
                  <circle cx={anchor.x} cy={anchor.y} r="2" fill="#3B82F6" />
                  <polyline
                    points={`${anchor.x},${anchor.y} ${lineEnd.x},${lineEnd.y} ${textEnd.x},${textEnd.y}`}
                    stroke="#94A3B8"
                    strokeWidth="0.8"
                    strokeDasharray="2 2"
                    fill="none"
                  />
                  <text
                    x={lineEnd.x + 4}
                    y={lineEnd.y - 5}
                    fill="#334155"
                    fontSize="9"
                    fontFamily="monospace"
                    fontWeight="600"
                    letterSpacing="0.08em"
                  >
                    TIER 03 // COGNITIVE CORE
                  </text>
                  <text
                    x={lineEnd.x + 4}
                    y={lineEnd.y + 11}
                    fill="#64748B"
                    fontSize="7.5"
                    fontFamily="monospace"
                    letterSpacing="0.04em"
                  >
                    HIGH-DENSITY SYNTHESIS MATRIX
                  </text>
                </g>
              );
            })()}
          </g>

          {/* Tier 2 Leader Badge (Mid-Left) */}
          <g className="transition-opacity duration-200" opacity={activeTier === 2 || activeTier === null ? 0.9 : 0.4}>
            {(() => {
              const anchor = iso(-175, 40, 36);
              const lineEnd = { x: anchor.x - 30, y: anchor.y - 14 };
              const textEnd = { x: lineEnd.x - 85, y: lineEnd.y };
              return (
                <g>
                  <circle cx={anchor.x} cy={anchor.y} r="2" fill="#2563EB" />
                  <polyline
                    points={`${anchor.x},${anchor.y} ${lineEnd.x},${lineEnd.y} ${textEnd.x},${textEnd.y}`}
                    stroke="#94A3B8"
                    strokeWidth="0.8"
                    strokeDasharray="2 2"
                    fill="none"
                  />
                  <text
                    x={textEnd.x}
                    y={lineEnd.y - 5}
                    fill="#334155"
                    fontSize="9"
                    fontFamily="monospace"
                    fontWeight="600"
                    letterSpacing="0.08em"
                  >
                    TIER 02 // COMPUTE MATRIX
                  </text>
                  <text
                    x={textEnd.x}
                    y={lineEnd.y + 11}
                    fill="#64748B"
                    fontSize="7.5"
                    fontFamily="monospace"
                    letterSpacing="0.04em"
                  >
                    OPTICAL ROUTING & TSV INTERCONNECT
                  </text>
                </g>
              );
            })()}
          </g>

          {/* Tier 1 Leader Badge (Bottom-Right) */}
          <g className="transition-opacity duration-200" opacity={activeTier === 1 || activeTier === null ? 0.9 : 0.4}>
            {(() => {
              const anchor = iso(160, 120, 0);
              const lineEnd = { x: anchor.x + 30, y: anchor.y + 16 };
              const textEnd = { x: lineEnd.x + 85, y: lineEnd.y };
              return (
                <g>
                  <circle cx={anchor.x} cy={anchor.y} r="2" fill="#64748B" />
                  <polyline
                    points={`${anchor.x},${anchor.y} ${lineEnd.x},${lineEnd.y} ${textEnd.x},${textEnd.y}`}
                    stroke="#CBD5E1"
                    strokeWidth="0.8"
                    strokeDasharray="2 2"
                    fill="none"
                  />
                  <text
                    x={lineEnd.x + 4}
                    y={lineEnd.y - 5}
                    fill="#475569"
                    fontSize="9"
                    fontFamily="monospace"
                    fontWeight="600"
                    letterSpacing="0.08em"
                  >
                    TIER 01 // SILICON SUBSTRATE
                  </text>
                  <text
                    x={lineEnd.x + 4}
                    y={lineEnd.y + 11}
                    fill="#94A3B8"
                    fontSize="7.5"
                    fontFamily="monospace"
                    letterSpacing="0.04em"
                  >
                    ENGINEERED HARDWARE GROUND
                  </text>
                </g>
              );
            })()}
          </g>
        </svg>
      </div>

      {/* Floating Minimalist Telemetry Bar at Base of Visual */}
      <div className="absolute bottom-1 sm:bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-4 sm:gap-6 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-sm border border-slate-200/80 shadow-xs pointer-events-auto">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
          <span className="text-[10px] sm:text-xs font-mono font-medium text-slate-700 tracking-wider">
            ARCH // ISOMETRIC FIELD
          </span>
        </div>
        <span className="text-slate-300 font-mono">|</span>
        <div className="hidden sm:flex items-center gap-2">
          <span className="text-[10px] sm:text-xs font-mono text-slate-500">BUS:</span>
          <span className="text-[10px] sm:text-xs font-mono font-medium text-slate-800">1.28 TB/s TSV</span>
        </div>
        <span className="hidden sm:inline text-slate-300 font-mono">|</span>
        <div className="flex items-center gap-1.5">
          <span className="text-[10px] sm:text-xs font-mono text-slate-500">STATE:</span>
          <span className="text-[10px] sm:text-xs font-mono font-medium text-blue-600">
            {activeTier === 3
              ? 'TIER 03 CORE INSPECT'
              : activeTier === 2
              ? 'TIER 02 MATRIX INSPECT'
              : activeTier === 1
              ? 'TIER 01 SUBSTRATE INSPECT'
              : 'SYNCHRONIZED'}
          </span>
        </div>
      </div>
    </div>
  );
};
