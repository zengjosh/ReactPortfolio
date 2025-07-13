import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface AnimatedImageProps {
    src: string;
    alt: string;
    className?: string;
}

const AnimatedImage: React.FC<AnimatedImageProps> = ({ src, alt, className = '' }) => {
    const imageRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        const image = imageRef.current;

        if (!container || !image) return;

        // Initial animation on mount
        gsap.set(image, {
            scale: 0.8,
            opacity: 0,
            y: 50,
        });

        // Entrance animation
        gsap.to(image, {
            scale: 1,
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
            delay: 0.3,
        });

        // Scroll-triggered animation
        gsap.to(image, {
            y: -30,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
                trigger: container,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
            },
        });

        // Hover animations
        const handleMouseEnter = () => {
            gsap.to(image, {
                scale: 1.05,
                rotation: 2,
                duration: 0.4,
                ease: "power2.out",
            });
        };

        const handleMouseLeave = () => {
            gsap.to(image, {
                scale: 1,
                rotation: 0,
                duration: 0.4,
                ease: "power2.out",
            });
        };

        container.addEventListener('mouseenter', handleMouseEnter);
        container.addEventListener('mouseleave', handleMouseLeave);

        // Cleanup
        return () => {
            container.removeEventListener('mouseenter', handleMouseEnter);
            container.removeEventListener('mouseleave', handleMouseLeave);
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className={`relative flex items-center justify-end ${className}`}
        >
            {/* Glow effect */}
            <div className="absolute -inset-12 bg-gradient-to-r from-primary/30 via-primary-light/20 to-primary-dark/30 rounded-full blur-3xl"></div>

            {/* Image container */}
            <div
                ref={imageRef}
                className="relative w-[360px] h-[360px] lg:w-[520px] lg:h-[520px] rounded-3xl overflow-hidden shadow-2xl cursor-pointer"
            >
                <img
                    src={src}
                    alt={alt}
                    className="w-full h-full object-cover"
                />

                {/* Overlay effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            </div>
        </div>
    );
};

export default AnimatedImage; 