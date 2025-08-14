"use client"

import { motion} from "framer-motion"

const container = {
  hidden: { opacity: 1 },
  visible: (customDelay = 0) => ({
    opacity: 1,
    transition: {
      delayChildren: customDelay,
      staggerChildren: 0.03,
    },
  }),
}

const char = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
}

export default function AnimatedText({
  text = "Animated heading",
  className,
  as = "h1",
  delay = 0.15,
}) {
  const Tag = as

  const characters = Array.from(text)

  return (
    <Tag className={className} aria-label={text}>
      <motion.span
        initial="hidden"
        animate="visible"
        variants={container}
        custom={delay}
        className="inline-flex flex-wrap"
        aria-hidden="true"
      >
        {characters.map((c, i) => (
          <motion.span key={i} variants={char} className="inline-block will-change-transform">
            {c === " " ? "\u00A0" : c}
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  )
}
