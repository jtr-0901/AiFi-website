import React from 'react';
import Hero from './Hero';
import About from './About';
import Faculty from './Faculty';
import Team from './Team';
import Events from './Events';

const Home = () => {
    return (
        <div>
            <Hero />
            <About />
            <Faculty />
            <Team />
            <Events />

            <footer style={{ padding: '2rem', textAlign: 'center', borderTop: '1px solid var(--glass-border)' }}>
                <p style={{ color: 'var(--text-dim)' }}>&copy; 2024 AIFi - The AIML Club. REVA University.</p>
            </footer>
        </div>
    );
};

export default Home;
