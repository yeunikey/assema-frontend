
import { motion } from 'framer-motion';
import './author.scss';

function Author() {
    return (
        <motion.div className="author"
            initial={{
              opacity: 0,
              y: 100
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.7
            }}
          >
            from @yeunikey
          </motion.div>
    );
}

export default Author;