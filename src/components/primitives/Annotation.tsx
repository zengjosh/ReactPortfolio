import { useEffect, useRef, useState } from 'react';
import { annotate } from 'rough-notation';

type AnnotationType = 'highlight' | 'underline' | 'box' | 'bracket';
type TriggerType = 'none' | 'inView' | 'hover';

export function Annotation({
  children,
  type = 'underline',
  color = 'var(--accent, #60A5FA)',
  show,
  trigger = 'inView',
  animationDuration = 700,
  delay = 0,
}: {
  children: React.ReactNode;
  type?: AnnotationType;
  color?: string;
  show?: boolean;
  trigger?: TriggerType;
  animationDuration?: number;
  delay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (show !== undefined) setActive(show);
  }, [show]);

  useEffect(() => {
    if (!ref.current) return;
    if (trigger === 'inView') {
      const io = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(true);
        },
        { threshold: 0.6 }
      );
      io.observe(ref.current);
      return () => io.disconnect();
    }
  }, [trigger]);

  useEffect(() => {
    if (!ref.current) return;
    const annotation = annotate(ref.current, {
      type,
      color,
      animationDuration,
      padding: 2,
    } as any);

    if (active) {
      const id = setTimeout(() => annotation.show(), delay);
      return () => clearTimeout(id);
    }
    return () => annotation.hide();
  }, [active, type, color, animationDuration, delay]);

  const hoverProps =
    trigger === 'hover'
      ? {
          onMouseEnter: () => setActive(true),
          onMouseLeave: () => setActive(false),
        }
      : {};

  return (
    <span ref={ref} {...hoverProps} style={{ position: 'relative' }}>
      {children}
    </span>
  );
}

export default Annotation;

