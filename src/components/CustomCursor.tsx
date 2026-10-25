import React, { useEffect, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Only activate on devices with fine pointers and hover capability (desktop mice / trackpads)
    const hasPointerAndHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!hasPointerAndHover || prefersReducedMotion) {
      return;
    }

    // Add class to html/body so CSS can hide default cursor on interactive items where appropriate
    document.documentElement.classList.add('has-custom-cursor');

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let targetX = -100;
    let targetY = -100;
    let currentX = -100;
    let currentY = -100;
    let isVisible = false;
    let animationFrameId: number;

    // Hover state tracking
    let cursorState: 'default' | 'interactive' | 'infinity' | 'card' | 'input' = 'default';

    const handlePointerMove = (e: PointerEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;

      if (!isVisible) {
        isVisible = true;
        currentX = targetX;
        currentY = targetY;
      }

      // Detect element beneath pointer
      const target = e.target as HTMLElement | null;
      if (!target) return;

      // 1. Text input / selectable editable elements: hide custom cursor and restore native text cursor
      const isInput =
        target.closest('input, textarea, select, [contenteditable="true"], label') !== null;
      if (isInput) {
        cursorState = 'input';
        return;
      }

      // 2. Technology Field hero visual: subtle cyan & blue precision accent state
      const isTechField =
        target.closest('[data-cursor="technology-field"], [data-cursor="visual"], [data-cursor="infinity"]') !== null;
      if (isTechField) {
        cursorState = 'infinity'; // activates the 42px precision cyan accent ring
        return;
      }

      // 3. Project / venture cards
      const isCard = target.closest('[data-cursor="card"]') !== null;
      if (isCard) {
        cursorState = 'card';
        return;
      }

      // 4. Interactive buttons, links, controls
      const isInteractive =
        target.closest('a, button, [role="button"], input[type="submit"]') !== null;
      if (isInteractive) {
        cursorState = 'interactive';
        return;
      }

      cursorState = 'default';
    };

    const handlePointerLeave = () => {
      isVisible = false;
    };

    const handlePointerEnter = () => {
      isVisible = true;
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    document.addEventListener('mouseleave', handlePointerLeave);
    document.addEventListener('mouseenter', handlePointerEnter);

    // Smooth animation loop using requestAnimationFrame
    const loop = () => {
      // Linear interpolation (lerp) for outer ring inertia
      currentX += (targetX - currentX) * 0.22;
      currentY += (targetY - currentY) * 0.22;

      if (dot && ring) {
        if (!isVisible || cursorState === 'input') {
          dot.style.opacity = '0';
          ring.style.opacity = '0';
        } else {
          dot.style.opacity = '1';
          ring.style.opacity = '1';

          // Immediate sharp positioning for center dot
          dot.style.transform = `translate3d(${targetX}px, ${targetY}px, 0) translate(-50%, -50%)`;

          // Fluid eased positioning for outer ring
          ring.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;

          // State variations:
          if (cursorState === 'infinity') {
            // Infinity Visual: cyan accent, slightly expanded
            ring.style.width = '42px';
            ring.style.height = '42px';
            ring.style.borderColor = '#00C5FF';
            ring.style.backgroundColor = 'rgba(0, 197, 255, 0.08)';
            dot.style.backgroundColor = '#00C5FF';
            dot.style.transform = `translate3d(${targetX}px, ${targetY}px, 0) translate(-50%, -50%) scale(1.2)`;
          } else if (cursorState === 'interactive') {
            // Links & Buttons: Laploop blue accent, expanded click target
            ring.style.width = '38px';
            ring.style.height = '38px';
            ring.style.borderColor = '#0265FF';
            ring.style.backgroundColor = 'rgba(2, 101, 255, 0.07)';
            dot.style.backgroundColor = '#0265FF';
            dot.style.transform = `translate3d(${targetX}px, ${targetY}px, 0) translate(-50%, -50%) scale(1.1)`;
          } else if (cursorState === 'card') {
            // Cards: refined expansion
            ring.style.width = '32px';
            ring.style.height = '32px';
            ring.style.borderColor = 'rgba(2, 101, 255, 0.8)';
            ring.style.backgroundColor = 'rgba(2, 101, 255, 0.04)';
            dot.style.backgroundColor = '#0265FF';
            dot.style.transform = `translate3d(${targetX}px, ${targetY}px, 0) translate(-50%, -50%) scale(1)`;
          } else {
            // Default: 24px outlined ring in deep navy, transparent center
            ring.style.width = '24px';
            ring.style.height = '24px';
            ring.style.borderColor = 'rgba(11, 18, 32, 0.55)';
            ring.style.backgroundColor = 'transparent';
            dot.style.backgroundColor = '#0B1220';
            dot.style.transform = `translate3d(${targetX}px, ${targetY}px, 0) translate(-50%, -50%) scale(1)`;
          }
        }
      }

      animationFrameId = requestAnimationFrame(loop);
    };

    animationFrameId = requestAnimationFrame(loop);

    return () => {
      document.documentElement.classList.remove('has-custom-cursor');
      window.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('mouseleave', handlePointerLeave);
      document.removeEventListener('mouseenter', handlePointerEnter);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {/* Outer Eased Circular Ring */}
      <div
        ref={ringRef}
        aria-hidden="true"
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border border-slate-900/60 will-change-transform transition-[width,height,border-color,background-color] duration-200 ease-out opacity-0"
        style={{
          width: '24px',
          height: '24px',
          transform: 'translate3d(-100px, -100px, 0) translate(-50%, -50%)',
        }}
      />

      {/* Center Precise Dot */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-slate-900 will-change-transform transition-[background-color,transform] duration-150 ease-out opacity-0"
        style={{
          width: '3.5px',
          height: '3.5px',
          transform: 'translate3d(-100px, -100px, 0) translate(-50%, -50%)',
        }}
      />
    </>
  );
};
