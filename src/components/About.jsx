import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section style={{ padding: '4rem 2rem', textAlign: 'center' }}>
            <h2 className="text-gradient" style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>
                About AIFi
            </h2>
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '2rem'
            }}>
                <motion.div
                    className="glass-card neon-border"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    style={{ flex: '1 1 300px', padding: '2rem', maxWidth: '500px' }}
                >
                    <h3 style={{ color: 'var(--primary-cyan)', marginBottom: '1rem' }}>Vision</h3>
                    <p style={{ lineHeight: '1.6' }}>
                        To foster innovation in Artificial Intelligence and Machine Learning by empowering
                        students to build impactful solutions and become future leaders.
                    </p>
                </motion.div>

                <motion.div
                    className="glass-card neon-border"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    style={{ flex: '1 1 300px', padding: '2rem', maxWidth: '500px' }}
                >
                    <h3 style={{ color: 'var(--secondary-purple)', marginBottom: '1rem' }}>Mission</h3>
                    <ul style={{ textAlign: 'left', paddingLeft: '20px', lineHeight: '1.8' }}>
                        <li>Promote AI & ML research</li>
                        <li>Enable industry-ready skills</li>
                        <li>Encourage innovation & collaboration</li>
                        <li>Build future AI leaders</li>
                    </ul>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
