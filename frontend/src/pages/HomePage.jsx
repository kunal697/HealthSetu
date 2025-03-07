import { motion, useAnimation } from 'framer-motion'
import { useEffect, useState } from 'react'
import Features from "../components/Features"
import Footer from "../components/Footer"
import GetInvolved from "../components/GetInvolved"
import Header from "../components/Header"
import HeroSection from "../components/HeroSection"
import { useNavigate } from "react-router-dom"

// Replace the medicalIcons array with medical emojis
const medicalEmojis = ["💊", "💉", "🏥", "🩺", "🧬", "⚕️", "🩹", "💗"];

const ParticlesBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Fast Moving Medical Icons */}
      {[...Array(20)].map((_, i) => {
        const randomX = Math.random() * window.innerWidth;
        const randomY = Math.random() * window.innerHeight;
        
        return (
          <motion.div
            key={i}
            className="absolute text-2xl md:text-3xl filter drop-shadow-md"
            initial={{
              x: randomX,
              y: randomY,
              rotate: Math.random() * 360,
              opacity: 0.4,
            }}
            animate={{
              x: [
                randomX,
                randomX + (Math.random() - 0.5) * 800,
                randomX + (Math.random() - 0.5) * 800,
                randomX,
              ],
              y: [
                randomY,
                randomY + (Math.random() - 0.5) * 800,
                randomY + (Math.random() - 0.5) * 800,
                randomY,
              ],
              rotate: [0, 180, 360],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: Math.random() * 15 + 15, // Faster duration: 15-30 seconds
              repeat: Infinity,
              ease: "linear",
              times: [0, 0.33, 0.66, 1]
            }}
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2, // Faster scaling
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-blue-500/80"
            >
              {medicalEmojis[i % medicalEmojis.length]}
            </motion.div>
          </motion.div>
        );
      })}

      {/* Fast Background Large Icons */}
      {[...Array(8)].map((_, i) => {
        const randomX = Math.random() * window.innerWidth;
        const randomY = Math.random() * window.innerHeight;
        
        return (
          <motion.div
            key={`bg-${i}`}
            className="absolute text-5xl md:text-6xl opacity-[0.03] filter blur-sm"
            initial={{
              x: randomX,
              y: randomY,
              rotate: Math.random() * 360,
            }}
            animate={{
              x: [
                randomX,
                randomX + (Math.random() - 0.5) * 600,
                randomX + (Math.random() - 0.5) * 600,
                randomX,
              ],
              y: [
                randomY,
                randomY + (Math.random() - 0.5) * 600,
                randomY + (Math.random() - 0.5) * 600,
                randomY,
              ],
              rotate: [0, 360, 720],
            }}
            transition={{
              duration: Math.random() * 20 + 25, // Faster background: 25-45 seconds
              repeat: Infinity,
              ease: "linear",
              times: [0, 0.33, 0.66, 1]
            }}
          >
            {medicalEmojis[i % medicalEmojis.length]}
          </motion.div>
        );
      })}

      {/* Faster Moving Background Gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-50/5 via-transparent to-indigo-50/5"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 15, // Faster gradient movement
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
        style={{
          backgroundSize: "200% 200%",
        }}
      />
    </div>
  );
};

const HomePage = ({ loading }) => {
    const navigate = useNavigate();

    const handleAppointmentClick = (e) => {
        e.preventDefault();
        const token = localStorage.getItem("token");
        if (!token) {
            navigate('/login');
        } else {
            navigate('/talk');
        }
    };

    // If loading, only show the main content without banner and appointment button
    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
                <main className="relative">
                    <HeroSection />
                    <Features />
                    <GetInvolved />
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
            {/* Add the particles background */}
            <ParticlesBackground />
            
            {/* Emergency Banner */}
            <div className="bg-blue-500 text-white py-2 text-center text-sm font-medium mt-16">
                <p>🤖 AI-Powered Appointment Booking: Fast & Efficient</p>
            </div>
            
            <main className="relative">
                <HeroSection />
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="py-20"
                >
                    <Features />
                </motion.section>
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="py-16 bg-blue-50"
                >
                    <GetInvolved />
                </motion.section>
            </main>

            <Footer />

            {/* Emergency Float Button */}
            <motion.div
                onClick={handleAppointmentClick}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                className="fixed bottom-6 right-6 bg-blue-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-600 transition-all z-50 flex items-center gap-2 cursor-pointer"
            >
                <span className="animate-pulse">📅</span> Book Appointment
            </motion.div>
        </div>
    )
}

export default HomePage