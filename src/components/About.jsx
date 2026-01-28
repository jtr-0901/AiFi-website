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
                    style={{ flex: '1 1 300px', padding: '2rem', maxWidth: '600px' }}
                >
                    <h3 style={{ color: 'var(--primary-cyan)', marginBottom: '1rem', fontSize: '1.8rem' }}>Vision</h3>
                    <p style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#e0e0e0' }}>
                        To be a premier center of excellence for Artificial Intelligence and Machine Learning,
                        fostering a culture of innovation, research, and technical proficiency. We aim to empower
                        students with cutting-edge skills to build impactful, real-world solutions and become
                        globally competitive leaders in the evolving technological landscape.
                    </p>
                </motion.div>

                <motion.div
                    className="glass-card neon-border"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    style={{ flex: '1 1 300px', padding: '2rem', maxWidth: '600px' }}
                >
                    <h3 style={{ color: 'var(--secondary-purple)', marginBottom: '1rem', fontSize: '1.8rem' }}>Mission</h3>
                    <ul style={{ textAlign: 'left', paddingLeft: '20px', lineHeight: '2', fontSize: '1.1rem', color: '#e0e0e0' }}>
                        <li><strong>Cultivate Knowledge:</strong> Provide a platform for students to explore and master AI & ML concepts through workshops, masterclasses, and hands-on projects.</li>
                        <li><strong>Foster Innovation:</strong> Encourage creative problem-solving and ideation to address societal and industrial challenges.</li>
                        <li><strong>Bridge the Gap:</strong> Connect students with industry experts, alumni, and opportunities to ensure industry readiness.</li>
                        <li><strong>Promote Collaboration:</strong> Build a strong community of learners and developers working together to push the boundaries of technology.</li>
                    </ul>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
