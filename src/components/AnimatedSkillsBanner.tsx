import React, { useRef, useEffect, useMemo } from 'react';

interface AnimatedSkillsBannerProps {
    skills: string[];
    className?: string;
}

const AnimatedSkillsBanner: React.FC<AnimatedSkillsBannerProps> = ({ skills, className = '' }) => {
    const bannerRef = useRef<HTMLDivElement>(null);

    // Memoize the duplicated skills array to prevent unnecessary re-renders
    const duplicatedSkills = useMemo(() => [...skills, ...skills], [skills]);

    useEffect(() => {
        const banner = bannerRef.current;
        if (!banner) return;

        let lastScrollY = window.scrollY;
        let passiveOffset = 0;
        let animationId: number;

        // Passive sliding animation
        const passiveSlide = () => {
            passiveOffset += 0.5; // Base speed
            if (passiveOffset > banner.scrollWidth / 2) {
                passiveOffset = 0;
            }
            banner.style.transform = `translateX(-${passiveOffset}px)`;
            animationId = requestAnimationFrame(passiveSlide);
        };

        // Start passive animation
        passiveSlide();

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const scrollDelta = currentScrollY - lastScrollY;

            // Only update if there's significant scroll movement
            if (Math.abs(scrollDelta) > 1) {
                // Increase passive offset based on scroll speed
                const scrollSpeed = Math.abs(scrollDelta);
                passiveOffset += scrollSpeed * 0.3; // Faster scroll = faster movement

                if (passiveOffset > banner.scrollWidth / 2) {
                    passiveOffset = 0;
                }

                banner.style.transform = `translateX(-${passiveOffset}px)`;
                lastScrollY = currentScrollY;
            }
        };

        // Use passive scroll listener for better performance
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (animationId) cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <div className={`relative overflow-hidden ${className}`}>
            <div
                ref={bannerRef}
                className="flex gap-6 whitespace-nowrap will-change-transform"
                style={{ transform: 'translateX(0)' }}
            >
                {duplicatedSkills.map((skill, index) => (
                    <span
                        key={`${skill}-${index}`}
                        className="px-6 py-3 bg-white rounded-full shadow-md text-gray-700 font-medium hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex-shrink-0"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default AnimatedSkillsBanner; 