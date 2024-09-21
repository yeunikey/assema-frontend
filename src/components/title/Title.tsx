import { motion } from "framer-motion";

import './title.scss';

function Title() {
    return (
        <motion.div className="title"
            initial={{
              scale: 0,
              opacity: 0
            }}
            animate={{
              scale: 1,
              opacity: 0.05
            }}
            transition={{
              duration: 0.5,
              delay: 2.5
            }}
          >
            Assema
          </motion.div>
    );
}

export default Title;