import React from 'react';
import aboutData from '../../../data/about.json';
import { motion } from 'motion/react';
import board1 from '../../../assets/img/board/board1.png';
import board2 from '../../../assets/img/board/board2.png';
import board3 from '../../../assets/img/board/board3.png';
import board4 from '../../../assets/img/board/board4.png';

const BoardMembers = () => {
    const { boardMembers } = aboutData;
    const images = [board1, board2, board3, board4];

    return (
        <section className="py-5 bg-white dark:bg-gray-900 transition-colors">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
                    >
                        {boardMembers.title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
                    >
                        {boardMembers.subtitle}
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {boardMembers.members.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 border border-transparent hover:border-primary/20"
                        >
                            <div className="relative overflow-hidden aspect-square">
                                <img
                                    src={images[index]}
                                    alt={member.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700 ease-in-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-primary transition-colors">
                                    {member.name}
                                </h3>
                                <p className="text-secondary dark:text-secondary font-medium text-sm mb-3">
                                    {member.role}
                                </p>
                                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                    {member.bio}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BoardMembers;
