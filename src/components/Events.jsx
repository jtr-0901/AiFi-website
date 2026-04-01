import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Zap, MapPin, Calendar, Code2 } from 'lucide-react';

const Events = () => {
    const navigate = useNavigate();

    return (
        <section id="upcoming-events" className="section-container" style={{ paddingBottom: '8rem' }}>
            <h2 className="text-gradient heading-lg">
                Upcoming Events
            </h2>

            {/* Main AINEX Container */}
            <motion.div
                className="glass-card neon-border"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                style={{
                    maxWidth: '1100px',
                    margin: '0 auto 4rem auto',
                    background: 'linear-gradient(180deg, rgba(138, 43, 226, 0.05) 0%, rgba(5, 5, 16, 0.9) 100%)'
                }}
            >
                {/* Header */}
                <div style={{ marginBottom: '2rem' }}>
                    <Zap size={40} color="var(--secondary-purple)" style={{ filter: 'drop-shadow(0 0 10px var(--secondary-purple))' }} />
                    <h3 style={{ fontSize: 'min(3.5rem, 10vw)', marginTop: '1rem', marginBottom: '0.5rem', color: '#fff' }}>AINEX REVA Edition</h3>
                    <p style={{ fontSize: '1.2rem', color: 'var(--secondary-purple)' }}>AiFI, The AIML Club × Google Developer Group</p>

                    <div style={{ marginTop: '1.5rem', color: '#ddd' }}>
                        <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>🧠 Build. Innovate. Disrupt with AI</p>
                        <p style={{ marginBottom: '1rem' }}>Get ready to create powerful AI solutions using vision, voice, and real-world data — all in just 24 hours ⚡</p>
                        
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', marginTop: '2rem', textAlign: 'left' }}>
                            <div style={{ flex: '1 1 300px' }}>
                                <h4 style={{ color: 'var(--secondary-purple)', marginBottom: '1rem' }}>Event Details</h4>
                                <ul style={{ lineHeight: '1.8', paddingLeft: '0', listStyle: 'none' }}>
                                    <li><Calendar size={16} style={{display: 'inline', marginRight: '8px', verticalAlign: 'middle'}} /><strong>Dates:</strong> April 10 - 11, 2025</li>
                                    <li><MapPin size={16} style={{display: 'inline', marginRight: '8px', verticalAlign: 'middle'}} /><strong>Venue:</strong> To be announced, REVA University</li>
                                    <li><Zap size={16} style={{display: 'inline', marginRight: '8px', verticalAlign: 'middle'}} /><strong>Duration:</strong> 24 Hours (Overnight hackathon)</li>
                                    <li><Code2 size={16} style={{display: 'inline', marginRight: '8px', verticalAlign: 'middle'}} /><strong>Mode:</strong> Hybrid (Online Phase 1 / Offline Phase 2)</li>
                                    <li>👥 <strong>Team Size:</strong> Min 2 - Max 4 members</li>
                                    <li>💳 <strong>Registration Fee:</strong> ₹300 per team</li>
                                </ul>
                            </div>
                            
                            <div style={{ flex: '1 1 300px' }}>
                                <h4 style={{ color: 'var(--secondary-purple)', marginBottom: '1rem' }}>What You'll Do</h4>
                                <ul style={{ lineHeight: '1.8', paddingLeft: '0', listStyle: 'none' }}>
                                    <li>⚡ Build real-time AI systems</li>
                                    <li>🎤 Work with voice & gesture-based interaction</li>
                                    <li>👁️ Use vision + sensor-driven intelligence</li>
                                    <li>💡 Facilities: Internet, Power Backup, Discussion Room</li>
                                </ul>
                            </div>
                        </div>

                        <div style={{ marginTop: '2rem', textAlign: 'left', background: 'rgba(255, 255, 255, 0.03)', padding: '1.5rem', borderRadius: '10px', border: '1px solid rgba(138, 43, 226, 0.3)' }}>
                            <h4 style={{ color: 'var(--secondary-purple)', marginBottom: '0.5rem' }}>Hackathon Objective</h4>
                            <p style={{ lineHeight: '1.6', fontSize: '0.95rem' }}>
                            AINEX – REVA Edition is to create a platform where students can design and develop an ambient AI system that seamlessly integrates into real-world environments, using voice, vision, gestures, and sensors to enable natural, hands-free human–AI interaction. The solution should intelligently perceive surroundings, make real-time decisions, and enhance everyday experiences without relying on traditional screens or manual input.
                            </p>
                            <p style={{ marginTop: '1rem', fontWeight: 'bold' }}>🚨 Limited slots | Bring your best ideas<br/>✨ Think. Build. Disrupt.</p>
                        </div>
                        
                        <div style={{ marginTop: '2.5rem', marginBottom: '1rem' }}>
                            <button
                                onClick={() => window.open('https://vision.hack2skill.com/event/ainex-hack', '_blank')}
                                style={{
                                    background: 'var(--secondary-purple)',
                                    color: '#fff',
                                    border: 'none',
                                    padding: '12px 35px',
                                    fontSize: '1.1rem',
                                    borderRadius: '25px',
                                    fontWeight: 'bold',
                                    cursor: 'pointer',
                                    boxShadow: '0 0 20px rgba(138, 43, 226, 0.4)'
                                }}
                                className="hover-scale"
                            >
                                Register Now
                            </button>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Main AI-RENA 2.0 Container */}
            <motion.div
                className="glass-card neon-border"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                style={{
                    maxWidth: '1100px',
                    margin: '0 auto',
                    background: 'linear-gradient(180deg, rgba(0, 242, 255, 0.05) 0%, rgba(5, 5, 16, 0.9) 100%)'
                }}
            >
                {/* Header */}
                <div style={{ marginBottom: '2rem' }}>
                    <Zap size={40} color="var(--primary-cyan)" style={{ filter: 'drop-shadow(0 0 10px var(--primary-cyan))' }} />
                    <h3 style={{ fontSize: 'min(3.5rem, 10vw)', marginTop: '1rem', marginBottom: '0.5rem', color: '#fff' }}>AI-RENA 2.0</h3>
                    <p style={{ fontSize: '1.2rem', color: 'var(--primary-cyan)' }}>National Level AI Event Series</p>

                    <div style={{ marginTop: '1.5rem', color: '#ddd' }}>
                        <h4 style={{ color: 'var(--primary-cyan)', marginBottom: '0.5rem' }}>Hackathon Timeline</h4>

                        <ul style={{ lineHeight: '1.8', paddingLeft: '1.2rem' }}>

                            <li>2 Mar – Registrations Close</li>
                            <li>4 Mar – Top 60 Teams Revealed</li>
                        </ul>
                    </div>
                </div>

                {/* Event Timeline - 3 Boxes */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

                    {/* Box 1: Day 1 */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        style={{
                            padding: 'min(2rem, 5vw)',
                            background: 'rgba(255, 255, 255, 0.03)',
                            borderRadius: '15px',
                            border: '1px solid rgba(0, 242, 255, 0.3)'
                        }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                            <Calendar size={24} color="var(--primary-cyan)" />
                            <h4 style={{ fontSize: 'min(1.8rem, 6vw)', color: 'var(--primary-cyan)', margin: 0 }}>Day 1 • March 5, 2026</h4>
                        </div>

                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'flex-start' }}>
                            {/* Inaugural Event */}
                            <div style={{ flex: '1 1 250px', textAlign: 'left' }}>
                                <h5 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#fff' }}>Inaugural Ceremony</h5>
                                <p style={{ color: '#aaa', marginBottom: '0.5rem', fontSize: '0.9rem' }}>⏰ 9:30 AM</p>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#e0e0e0', fontSize: '0.85rem' }}>
                                    <MapPin size={14} color="var(--secondary-purple)" />
                                    <span>Kuvempu Auditorium, REVA</span>
                                </div>
                            </div>

                            {/* GFG Contest */}
                            <div style={{ flex: '1 1 250px', textAlign: 'left' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                                    <h5 style={{ fontSize: '1.2rem', margin: 0, color: '#fff' }}>GFG Coding Contest</h5>
                                    <img
                                        src="/gfg-logo.jpg"
                                        alt="GFG Logo"
                                        style={{ height: '30px', width: 'auto', objectFit: 'contain' }}
                                    />
                                </div>
                                <p style={{ color: '#aaa', marginBottom: '1rem', fontSize: '0.9rem' }}>⏰ 1:30 PM</p>
                                <button
                                    onClick={() => window.open('https://forms.gle/kbMT2hrcMA3ukb93A', '_blank')}
                                    style={{
                                        background: '#2f8d46',
                                        color: '#fff',
                                        border: 'none',
                                        padding: '8px 20px',
                                        fontSize: '0.9rem',
                                        borderRadius: '20px',
                                        fontWeight: 'bold',
                                        cursor: 'pointer'
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
                            padding: 'min(2rem, 5vw)',
                            background: 'rgba(255, 255, 255, 0.03)',
                            borderRadius: '15px',
                            border: '1px solid rgba(0, 242, 255, 0.3)'
                        }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                            <Calendar size={24} color="var(--primary-cyan)" />
                            <h4 style={{ fontSize: 'min(1.8rem, 6vw)', color: 'var(--primary-cyan)', margin: 0 }}>Day 2-3 • March 6-7, 2026</h4>
                        </div>

                        <div style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
                            <h5 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#fff' }}>AI National Level Hackathon</h5>
                            <p style={{ color: '#aaa', marginBottom: '0.5rem', fontSize: '0.9rem' }}>⏰ Day 2, 9:00 AM → Day 3, 9:00 AM (24 Hours)</p>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#e0e0e0', marginBottom: '1rem', fontSize: '0.85rem' }}>
                                <MapPin size={14} color="var(--secondary-purple)" />
                                <span>REVA Rangasthala</span>
                            </div>
                            <p style={{ color: '#ddd', lineHeight: '1.4', fontSize: '0.9rem' }}>
                                Deep dive into Generative AI and Transformers with industry experts. Learn cutting-edge techniques and best practices.
                            </p>
                        </div>

                        <button
                            onClick={() => window.open('https://forms.gle/pS5K8RBCMdr5eaxT7', '_blank')}
                            style={{
                                background: 'var(--primary-cyan)',
                                color: 'var(--bg-space)',
                                border: 'none',
                                padding: '10px 30px',
                                fontSize: '1rem',
                                borderRadius: '25px',
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
                            padding: 'min(2rem, 5vw)',
                            background: 'rgba(255, 255, 255, 0.03)',
                            borderRadius: '15px',
                            border: '1px solid rgba(138, 43, 226, 0.3)'
                        }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                            <Calendar size={24} color="var(--secondary-purple)" />
                            <h4 style={{ fontSize: 'min(1.8rem, 6vw)', color: 'var(--secondary-purple)', margin: 0 }}>Day 4-5 • March 9-10, 2026</h4>
                        </div>

                        <div style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
                            <h5 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#fff' }}>AI Masterclass</h5>
                            <p style={{ color: '#aaa', marginBottom: '1rem', fontSize: '0.9rem' }}>⏰ Timings will be announced soon</p>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#e0e0e0', marginBottom: '1rem', fontSize: '0.85rem' }}>
                                <MapPin size={14} color="var(--secondary-purple)" />
                                <span>Justice Hegde Seminar Hall</span>
                            </div>
                            <p style={{ color: '#ddd', lineHeight: '1.4', fontSize: '0.9rem' }}>
                                Deep dive into Generative AI and Transformers with industry experts. Learn cutting-edge techniques and best practices.
                            </p>
                        </div>

                        <button
                            onClick={() => window.open('https://forms.gle/ZEjBHMzozY2HTV388', '_blank')}
                            style={{
                                background: 'transparent',
                                border: '2px solid var(--secondary-purple)',
                                color: '#fff',
                                padding: '10px 30px',
                                fontSize: '1rem',
                                borderRadius: '25px',
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
