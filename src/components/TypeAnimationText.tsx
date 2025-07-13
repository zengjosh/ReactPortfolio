import React from 'react';
import { TypeAnimation } from 'react-type-animation';

interface TypeAnimationTextProps {
    texts: string[];
    speed?: number;
    repeat?: number;
    className?: string;
    cursor?: boolean;
    wrapper?: 'span' | 'div' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    preRenderFirstString?: boolean;
    deletionSpeed?: number;
    sequence?: (string | number)[];
    style?: React.CSSProperties;
}

const TypeAnimationText: React.FC<TypeAnimationTextProps> = ({
    texts,
    speed = 40,
    repeat = Infinity,
    className = '',
    cursor = true,
    wrapper = 'span',
    preRenderFirstString = false,
    deletionSpeed = 50,
    sequence,
    style,
    ...rest
}) => {
    // If sequence is provided, use it directly
    if (sequence) {
        return (
            <TypeAnimation
                sequence={sequence}
                speed={speed as any}
                repeat={repeat}
                className={className}
                cursor={cursor}
                wrapper={wrapper}
                preRenderFirstString={preRenderFirstString}
                deletionSpeed={deletionSpeed as any}
                style={style}
                {...rest}
            />
        );
    }

    // Otherwise, create sequence from texts array
    const animationSequence = texts.flatMap((text, index) => [
        text,
        index < texts.length - 1 ? 2000 : 1000, // Pause between texts
    ]);

    return (
        <TypeAnimation
            sequence={animationSequence}
            speed={speed as any}
            repeat={repeat}
            className={className}
            cursor={cursor}
            wrapper={wrapper}
            preRenderFirstString={preRenderFirstString}
            deletionSpeed={deletionSpeed as any}
            style={style}
            {...rest}
        />
    );
};

export default TypeAnimationText; 