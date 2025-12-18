import React, { useEffect, useState } from 'react';

const CursorGlow: React.FC = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Check if device is mobile/tablet
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024 || 'ontouchstart' in window);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        const handleMouseMove = (e: MouseEvent) => {
            if (!isMobile) {
                setPosition({ x: e.clientX, y: e.clientY });
                setIsVisible(true);
            }
        };

        const handleMouseLeave = () => {
            setIsVisible(false);
        };

        if (!isMobile) {
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseleave', handleMouseLeave);
        }

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseleave', handleMouseLeave);
            window.removeEventListener('resize', checkMobile);
        };
    }, [isMobile]);

    // Don't render on mobile
    if (isMobile) return null;

    return (
        <div
            className="pointer-events-none fixed inset-0 z-50 transition-opacity duration-300"
            style={{ opacity: isVisible ? 1 : 0 }}
        >
            <div
                className="absolute w-96 h-96 rounded-full"
                style={{
                    left: position.x - 192,
                    top: position.y - 192,
                    background: 'radial-gradient(circle, rgba(247, 231, 206, 0.15) 0%, transparent 70%)',
                    filter: 'blur(40px)',
                    mixBlendMode: 'screen',
                }}
            />
        </div>
    );
};

export default CursorGlow;
