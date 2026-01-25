import React from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

const Team = () => {
    const members = [
        { role: 'President', name: 'Member Name' },
        { role: 'Vice President', name: 'Member Name' },
        { role: 'Technical Lead', name: 'Member Name' },
        { role: 'Event Lead', name: 'Member Name' },
    ];

    return (
        <section style={{ padding: '4rem 2rem', textAlign: 'center' }}>
            <h2 className="text-gradient" style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>
                Core Team
            </h2>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '2rem',
                maxWidth: '1000px',
                margin: '0 auto'
            }}>
                {members.map((member, index) => (
                    <motion.div
                        key={index}
                        className="glass-card neon-border"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                    >
                        <div style={{
                            width: '100px',
                            height: '100px',
                            borderRadius: '50%',
                            background: 'rgba(255,255,255,0.05)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '1rem'
                        }}>
                            <Users size={40} color="var(--secondary-purple)" />
                        </div>
                        <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{member.name}</h4>
                        <p style={{ color: 'var(--accent-magenta)', fontSize: '0.9rem' }}>{member.role}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Team;
