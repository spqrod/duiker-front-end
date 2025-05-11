import { motion } from "framer-motion";

const pageVariants = {
    initial: { opacity: 0, transform: 'translateY(10px)' },
    in: { opacity: 1, transform: 'translateY(0)' },
    out: { opacity: 0, transform: 'translateY(-10px)' },
};

const pageTransition = {
    duration: 0.3,
    ease: [0.37, 0, 0.63, 1],
};

const Transition = (OgComponent) => {
    return () => (
        <>
            <motion.div
                variants={pageVariants}
                initial="initial"
                animate="in"
                exit="out"
                transition={pageTransition}
            >
                <OgComponent />
            </motion.div>
        </>
    );
};

export default Transition;