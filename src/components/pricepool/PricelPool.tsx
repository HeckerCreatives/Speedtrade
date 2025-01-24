"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Coin from "./Coins"

interface PricePoolProps {
  initialAmount: number
}

const PricePool: React.FC<PricePoolProps> = ({ initialAmount }) => {
  const [amount, setAmount] = useState(initialAmount)
  const [showCoins, setShowCoins] = useState(false)

  // Update amount and trigger coins when initialAmount changes
  useEffect(() => {
    setAmount(initialAmount) // Update the amount state
    setShowCoins(true) // Trigger coin animation
    const timer = setTimeout(() => setShowCoins(false), 5000) // Hide coins after 2 seconds
    return () => clearTimeout(timer)
  }, [initialAmount]) // Run this effect when initialAmount changes



  const generateCoins = () => {
    return [...Array(30)].map((_, i) => {
      const angle = (i / 30) * 360 // Distribute coins in a circle
      const radius = Math.random() * 150 + 50 // Random radius between 50 and 200
      const x = Math.cos((angle * Math.PI) / 180) * radius
      const y = Math.sin((angle * Math.PI) / 180) * radius

      return (
        <motion.div
          key={i}
          className="absolute"
          initial={{
            x: 0,
            y: 0,
            scale: 0,
          }}
          animate={{
            x: x,
            y: y,
            scale: [0, 1, 1, 0],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 1.5,
            ease: [0.23, 1, 0.32, 1], // Custom easing for explosive effect
            times: [0, 0.3, 0.8, 1], // Control timing of scale and opacity
          }}
        >
          <Coin />
        </motion.div>
      )
    })
  }

  return (
    <div className="relative w-full max-w-md mx-auto mt-10 text-center flex flex-col items-center justify-center">
      <motion.div className="text-5xl font-bold mb-4 text-green-500" animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 0.3 }}>
        ₱{amount.toLocaleString()}
      </motion.div>
      <div className="text-lg mb-8">Price Pool of ₱3,000,000</div>
      <AnimatePresence>
        {showCoins && (
          <motion.div
            className="absolute top-0 overflow-visible pointer-events-none"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {generateCoins()}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default PricePool