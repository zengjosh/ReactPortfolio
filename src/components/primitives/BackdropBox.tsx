import React from 'react';

export function BackdropBox({
  children,
  offset = 6,
  radius = 14,
  bg = 'rgba(0,0,0,0.04)',
  className = '',
}: {
  children: React.ReactNode;
  offset?: number;
  radius?: number;
  bg?: string;
  className?: string;
}) {
  return (
    <div className={`relative ${className}`} style={{ zIndex: 0 }}>
      <div
        aria-hidden
        style={{
          content: "''",
          position: 'absolute' as const,
          inset: 0,
          transform: `translate(${offset}px, ${offset}px)`,
          background: bg,
          borderRadius: radius,
          zIndex: -1,
        }}
      />
      {children}
    </div>
  );
}

export default BackdropBox;

