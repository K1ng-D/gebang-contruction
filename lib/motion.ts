// lib/motion.ts
import { Variants } from "framer-motion";

export const float: Variants = {
  initial: { y: 0 },
  animate: {
    y: [0, -6, 0],
    transition: { duration: 3, repeat: Infinity, ease: [0.42, 0, 0.58, 1] },
  },
};
