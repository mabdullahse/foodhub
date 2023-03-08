import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';



const Testing = () => {
    const [showSidebar, setShowSidebar] = useState(false);

    // Define the animation using the useSpring hook
    const animation = useSpring({
        transform: showSidebar ? 'translateX(0%)' : 'translateX(-100%)',
        config: {
            duration: 1000,
            delay: 500,
            mass: 2,
            tension: 400,
            friction: 50,
        },
    });

    return (
        <div>
            <button onClick={() => setShowSidebar(!showSidebar)}>
                {showSidebar ? 'Hide Sidebar' : 'Show Sidebar'}
            </button>
            <animated.div style={animation}>
                <nav>
                    <ul>
                        <li>Link 1</li>
                        <li>Link 2</li>
                        <li>Link 3</li>
                        <li>Link 4</li>
                    </ul>
                </nav>
            </animated.div>

            <div class="banner">

                <img class="profile" src="https://i.imgur.com/LxxvbbL.png" />

            </div>

        </div>
    );
};

export default Testing;