import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

const AnimatedCard = ({ children, visible }) => {
    console.log(children);
    const [showCard, setShowCard] = useState(visible);

    // Define the animation using the useSpring hook
    const animation = useSpring({
        transform: showCard ? 'translateX(0%)' : 'translateX(-100%)',
    });

    return (
        <animated.div style={animation}>
            {showCard && (
                <div>
                    <h1>sdfasd</h1>
                    {children}
                    <button onClick={() => setShowCard(false)}>Remove Card</button>
                </div>
            )}
        </animated.div>
    );
};

export default AnimatedCard