import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Calendar, Code, Zap } from 'lucide-react';

const Events = () => {
    const navigate = useNavigate();

    return (
        <section id="upcoming-events" style={{ padding: '4rem 2rem', textAlign: 'center', paddingBottom: '8rem' }}>
            <h2 className="text-gradient" style={{ fontSize: '3rem', marginBottom: '4rem' }}>
                Upcoming Events
            </h2>

            {/* Main Highlight: AI RENA 2.0 */}
            <motion.div
                className="glass-card neon-border"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                style={{
                    maxWidth: '900px',
                    margin: '0 auto 4rem',
                    padding: '3rem',
                    background: 'linear-gradient(180deg, rgba(0, 242, 255, 0.05) 0%, rgba(5, 5, 16, 0.9) 100%)'
                }}
            >
                <div style={{ marginBottom: '2rem' }}>
                    <Zap size={60} color="var(--primary-cyan)" style={{ filter: 'drop-shadow(0 0 10px var(--primary-cyan))' }} />
                </div>
                <h3 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#fff' }}>AI RENA 2.0</h3>
                <p style={{ fontSize: '1.2rem', color: 'var(--primary-cyan)', marginBottom: '2rem' }}>National Level Logic Building Hackathon</p>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
                    <div style={{ textAlign: 'left' }}>
                        <h4 style={{ color: 'var(--text-dim)' }}>Day 1</h4>
                        <p style={{ fontSize: '1.2rem' }}>Inaugural Ceremony</p>
                    </div>
                    <div style={{ textAlign: 'left' }}>
                        <h4 style={{ color: 'var(--text-dim)' }}>Day 2</h4>
                        <p style={{ fontSize: '1.2rem' }}>24H Hackathon</p>
                    </div>
                </div>

                <button
                    onClick={() => navigate('/register/hackathon')}
                    style={{
                        background: 'var(--primary-cyan)',
                        color: 'var(--bg-space)',
                        border: 'none',
                        padding: '15px 40px',
                        fontSize: '1.2rem',
                        borderRadius: '50px',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        boxShadow: '0 0 20px rgba(0, 242, 255, 0.4)'
                    }}
                    className="hover-scale"
                >
                    Register for Hackathon
                </button>
            </motion.div>

            {/* Masterclass Card */}
            <motion.div
                className="glass-card neon-border"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                style={{
                    maxWidth: '600px',
                    margin: '0 auto',
                    padding: '2.5rem'
                }}
            >
                <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>AI Masterclass</h3>
                <p style={{ color: 'var(--secondary-purple)', marginBottom: '1rem' }}>Day 2 - Exclusive Session</p>
                <p style={{ marginBottom: '2rem', color: 'var(--text-dim)' }}>
                    Deep dive into generative AI and transformers with industry experts.
                    (Topics & Date TBA)
                </p>
                <button
                    onClick={() => navigate('/register/masterclass')}
                    style={{
                        background: 'transparent',
                        border: '2px solid var(--secondary-purple)',
                        color: '#fff',
                        padding: '12px 35px',
                        fontSize: '1rem',
                        borderRadius: '30px',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        transition: '0.3s'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.background = 'var(--secondary-purple)'}
                    onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}
                >
                    Register for Masterclass
                </button>
            </motion.div>
        </section>
    );
};

export default Events;
