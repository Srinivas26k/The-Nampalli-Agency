import React, { useEffect, useState } from 'react';

const CursorGlow: React.FC = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
            setIsVisible(true);
        };

        const handleMouseLeave = () => {
            setIsVisible(false);
        };

        window.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    if (!isVisible) return null;

    return (
        <div
            className="fixed pointer-events-none z-50 mix-blend-screen"
            style={{
                left: position.x,
                top: position.y,
                transform: 'translate(-50%, -50%)',
            }}
        >
            <div className="w-96 h-96 bg-champagne/5 rounded-full blur-3xl" />
        </div>
    );
};

export default CursorGlow;
