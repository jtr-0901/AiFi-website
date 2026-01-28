import React from 'react';
import { motion } from 'framer-motion';
import drRashmiImage from '../assets/dr-rashmi.jpg';

const Faculty = () => {
    return (
        <section style={{ padding: '4rem 2rem', textAlign: 'center' }}>
            <h2 className="text-gradient" style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>
                Faculty Coordinator
            </h2>
            <motion.div
                className="glass-card neon-border"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                style={{
                    maxWidth: '400px',
                    margin: '0 auto',
                    padding: '2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
                <div style={{
                    width: '150px',
                    height: '150px',
                    borderRadius: '50%',
                    background: 'var(--bg-space)',
                    border: '2px solid var(--primary-cyan)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem',
                    overflow: 'hidden'
                }}>
                    <img
                        src={drRashmiImage}
                        alt="Dr. Rashmi C"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                        }}
                    />
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Dr. Rashmi C</h3>
                <p style={{ color: 'var(--primary-cyan)', marginBottom: '1rem' }}>Faculty Coordinator - AIFi</p>
                <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>
                    School of Computer Science & Engineering<br />
                    REVA University
                </p>
            </motion.div>
        </section>
    );
};

export default Faculty;
