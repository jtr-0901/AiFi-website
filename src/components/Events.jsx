import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Zap, MapPin, Calendar, Code2 } from 'lucide-react';

const Events = () => {
    const navigate = useNavigate();

    return (
        <section id="upcoming-events" style={{ padding: '4rem 2rem', textAlign: 'center', paddingBottom: '8rem' }}>
            <h2 className="text-gradient" style={{ fontSize: '3rem', marginBottom: '4rem' }}>
                Upcoming Events
            </h2>

            {/* Main AI-RENA 2.0 Container */}
            <motion.div
                className="glass-card neon-border"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                style={{
                    maxWidth: '1100px',
                    margin: '0 auto',
                    padding: '3rem',
                    background: 'linear-gradient(180deg, rgba(0, 242, 255, 0.05) 0%, rgba(5, 5, 16, 0.9) 100%)'
                }}
            >
                {/* Header */}
                <div style={{ marginBottom: '3rem' }}>
                    <Zap size={60} color="var(--primary-cyan)" style={{ filter: 'drop-shadow(0 0 10px var(--primary-cyan))' }} />
                    <h3 style={{ fontSize: '3.5rem', marginTop: '1rem', marginBottom: '0.5rem', color: '#fff' }}>AI-RENA 2.0</h3>
                    <p style={{ fontSize: '1.2rem', color: 'var(--primary-cyan)' }}>National Level AI Event Series</p>
                </div>

                {/* Event Timeline - 3 Boxes */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

                    {/* Box 1: Day 1 */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        style={{
                            padding: '2rem',
                            background: 'rgba(255, 255, 255, 0.03)',
                            borderRadius: '15px',
                            border: '1px solid rgba(0, 242, 255, 0.3)'
                        }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                            <Calendar size={30} color="var(--primary-cyan)" />
                            <h4 style={{ fontSize: '2rem', color: 'var(--primary-cyan)', margin: 0 }}>Day 1 • March 5, 2026</h4>
                        </div>

                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
                            {/* Inaugural Event */}
                            <div style={{ flex: '1 1 300px', textAlign: 'left' }}>
                                <h5 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: '#fff' }}>Inaugural Ceremony</h5>
                                <p style={{ color: '#aaa', marginBottom: '0.5rem' }}>⏰ 10:30 AM - 1:00 PM</p>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#e0e0e0' }}>
                                    <MapPin size={16} color="var(--secondary-purple)" />
                                    <span>Kuvempu Auditorium, REVA University</span>
                                </div>
                            </div>

                            {/* GFG Contest */}
                            <div style={{ flex: '1 1 300px', textAlign: 'left' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                                    <h5 style={{ fontSize: '1.5rem', margin: 0, color: '#fff' }}>GeeksForGeeks Contest</h5>
                                    {/* GFG Logo Image */}
                                    <img
                                        src="/gfg-logo.jpg"
                                        alt="GeeksForGeeks Logo"
                                        style={{
                                            height: '50px',
                                            width: 'auto',
                                            objectFit: 'contain',
                                            filter: 'brightness(1.1)'
                                        }}
                                    />
                                </div>
                                <p style={{ color: '#aaa', marginBottom: '1rem' }}>⏰ 2:00 PM - 4:00 PM</p>
                                <button
                                    onClick={() => navigate('/register/gfg')}
                                    style={{
                                        background: '#2f8d46',
                                        color: '#fff',
                                        border: 'none',
                                        padding: '10px 25px',
                                        fontSize: '1rem',
                                        borderRadius: '25px',
                                        fontWeight: 'bold',
                                        cursor: 'pointer',
                                        boxShadow: '0 0 15px rgba(47, 141, 70, 0.4)'
                                    }}
                                    className="hover-scale"
                                >
                                    Register for GFG
                                </button>
                            </div>
                        </div>
                    </motion.div>

                    {/* Box 2: Day 2-3 */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        style={{
                            padding: '2rem',
                            background: 'rgba(255, 255, 255, 0.03)',
                            borderRadius: '15px',
                            border: '1px solid rgba(0, 242, 255, 0.3)'
                        }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                            <Calendar size={30} color="var(--primary-cyan)" />
                            <h4 style={{ fontSize: '2rem', color: 'var(--primary-cyan)', margin: 0 }}>Day 2-3 • March 6-7, 2026</h4>
                        </div>

                        <div style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
                            <h5 style={{ fontSize: '1.8rem', marginBottom: '0.5rem', color: '#fff' }}>AI National Level Hackathon</h5>
                            <p style={{ color: '#aaa', marginBottom: '0.5rem' }}>⏰ Day 2, 9:00 AM → Day 3, 9:00 AM (24 Hours)</p>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#e0e0e0', marginBottom: '1rem' }}>
                                <MapPin size={16} color="var(--secondary-purple)" />
                                <span>REVA Rangasthala</span>
                            </div>
                            <p style={{ color: '#ddd', lineHeight: '1.6' }}>
                                Challenge yourself in a 24-hour logic-building marathon. Build innovative AI solutions and compete with the best minds.
                            </p>
                        </div>

                        <button
                            onClick={() => navigate('/register/hackathon')}
                            style={{
                                background: 'var(--primary-cyan)',
                                color: 'var(--bg-space)',
                                border: 'none',
                                padding: '12px 35px',
                                fontSize: '1.1rem',
                                borderRadius: '30px',
                                fontWeight: 'bold',
                                cursor: 'pointer',
                                boxShadow: '0 0 20px rgba(0, 242, 255, 0.4)'
                            }}
                            className="hover-scale"
                        >
                            Register for Hackathon
                        </button>
                    </motion.div>

                    {/* Box 3: Day 4-5 */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        style={{
                            padding: '2rem',
                            background: 'rgba(255, 255, 255, 0.03)',
                            borderRadius: '15px',
                            border: '1px solid rgba(138, 43, 226, 0.3)'
                        }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                            <Calendar size={30} color="var(--secondary-purple)" />
                            <h4 style={{ fontSize: '2rem', color: 'var(--secondary-purple)', margin: 0 }}>Day 4-5 • March 9-10, 2026</h4>
                        </div>

                        <div style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
                            <h5 style={{ fontSize: '1.8rem', marginBottom: '0.5rem', color: '#fff' }}>AI Masterclass</h5>
                            <p style={{ fontSize: '1.1rem', color: 'var(--secondary-purple)', marginBottom: '0.5rem' }}>
                                In collaboration with <strong>AiFi × GDG × OS Code</strong>
                            </p>
                            <p style={{ color: '#aaa', marginBottom: '1rem' }}>⏰ Venue & Timings: To Be Announced</p>
                            <p style={{ color: '#ddd', lineHeight: '1.6' }}>
                                Deep dive into Generative AI and Transformers with industry experts. Learn cutting-edge techniques and best practices.
                            </p>
                        </div>

                        <button
                            onClick={() => navigate('/register/masterclass')}
                            style={{
                                background: 'transparent',
                                border: '2px solid var(--secondary-purple)',
                                color: '#fff',
                                padding: '12px 35px',
                                fontSize: '1.1rem',
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

                </div>
            </motion.div >
        </section >
    );
};

export default Events;
