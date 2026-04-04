import React from 'react';
import { motion } from 'motion/react';

const PopIn = ({ children, delay = 0, className = "" }) => {
    return (
        <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className={className}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: delay
            }}
        >
            {children}
        </motion.div>
    );
};

export default PopIn;
