import { motion } from "framer-motion"

const Coin = () => {
  const randomRotation = Math.random() * 360
  const randomScale = Math.random() * 0.5 + 0.5 // Scale between 0.5 and 1

  return (
    <motion.svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        rotate: `${randomRotation}deg`,
        scale: randomScale,
      }}
    >
      <circle cx="12" cy="12" r="11" fill="#FFD700" stroke="#B8860B" strokeWidth="2" />
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="#B8860B"
        fontSize="14"
        fontWeight="bold"
      >
        $
      </text>
    </motion.svg>
  )
}

export default Coin

