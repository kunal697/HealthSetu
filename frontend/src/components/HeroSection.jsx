import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import Hr1 from '../assets/hr1.jpg';
import Hr2 from '../assets/hr2.jpg';
import Hr3 from '../assets/hr3.jpg';
import Hr4 from '../assets/hr4.jpg';

function HeroSection() {
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

  return (
    <div className="relative min-h-[90vh] bg-gradient-to-b from-blue-50/50 to-white font-poppins overflow-hidden">
      {/* Background Pattern with hover effect */}
      <motion.div 
        className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none"
        animate={{
          backgroundPosition: ["0px 0px", "20px 20px"],
          transition: {
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }
        }}
      />
      
      <div className="container mx-auto px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0.8, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-center lg:text-left relative z-10"
          >
            {/* Emergency Badge with enhanced hover */}
            <motion.div
              initial={{ opacity: 0.8, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-8 text-sm font-medium cursor-pointer"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              24/7 Healthcare Assistance Available
            </motion.div>

            {/* Enhanced heading with letter hover effect */}
            <motion.h1 
              className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
              whileHover={{ scale: 1.02 }}
            >
              <motion.span
                initial={{ opacity: 1 }}
                whileHover={{ opacity: 0.8 }}
                transition={{ duration: 0.2 }}
              >
                Better Care,
              </motion.span>{" "}
              <br/>
              <motion.span
                className="text-blue-600"
                whileHover={{ 
                  scale: 1.05,
                  textShadow: "0 0 8px rgba(59, 130, 246, 0.3)"
                }}
              >
                Smarter Management
              </motion.span>
            </motion.h1>
            
            <p className="text-lg lg:text-xl text-gray-600 mb-8 font-inter max-w-xl">
              Optimizing hospital operations for seamless patient care. Schedule appointments, manage inventory, and ensure timely treatment with our integrated healthcare system.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <motion.button 
                onClick={handleAppointmentClick}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-8 py-4 bg-blue-500 text-white rounded-xl hover:bg-blue-600 
                         transition-all font-semibold shadow-lg hover:shadow-blue-200/50 
                         flex items-center justify-center gap-2 group relative"
              >
                <span>Book an Appointment</span>
                <motion.div className="relative">
                  <motion.span 
                    className="absolute -right-2 -top-1 text-5xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ scale: 0.5 }}
                    whileHover={{ scale: 1.1 }}
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [-5, 5, -5, 5, 0],
                    }}
                    transition={{ 
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    🎙️
                  </motion.span>
                  <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                </motion.div>
              </motion.button>

              <Link to="/login">
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto px-8 py-4 bg-white text-blue-500 border-2 border-blue-500 
                           rounded-xl hover:bg-blue-50 transition-all font-semibold 
                           flex items-center justify-center gap-2 group"
                >
                  <span>Get Started</span>
                  <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                </motion.button>
              </Link>
            </div>

            {/* Trust Indicators with hover effects */}
            <div className="flex items-center gap-6 text-sm text-gray-500 justify-center lg:justify-start">
              <motion.div 
                className="flex items-center gap-2"
                whileHover={{ 
                  scale: 1.05,
                  color: "#3B82F6",
                  transition: { duration: 0.2 }
                }}
              >
                <motion.svg 
                  className="w-5 h-5 text-blue-500"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  
                </motion.svg>
                <span>AI-Powered Smart Queuing for Appointments</span>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-2"
                whileHover={{ 
                  scale: 1.05,
                  color: "#3B82F6",
                  transition: { duration: 0.2 }
                }}
              >
                <motion.svg 
                  className="w-5 h-5 text-blue-500"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </motion.svg>
                <span>Real-Time Fitbit Health Data Sync</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Content - Enhanced Image Grid */}
          <motion.div 
            initial={{ opacity: 0.8, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden lg:grid grid-cols-2 gap-4 relative"
          >
            {/* Decorative Background */}
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-blue-200 rounded-full filter blur-3xl opacity-20" />
            <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-blue-200 rounded-full filter blur-3xl opacity-20" />
            
            <div className="space-y-4">
              <motion.div
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 10px 30px -10px rgba(59, 130, 246, 0.3)"
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden rounded-2xl shadow-lg h-48 relative"
              >
                <motion.img 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  src={Hr1}
                  alt="Medical facility" 
                  className="w-full h-full object-cover"
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
                  whileHover={{ opacity: 0 }}
                />
              </motion.div>
              <motion.div
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 10px 30px -10px rgba(59, 130, 246, 0.3)"
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden rounded-2xl shadow-lg h-64 relative"
              >
                <motion.img 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  src={Hr2} 
                  alt="Animal rescue team in action" 
                  className="w-full h-full object-cover"
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
                  whileHover={{ opacity: 0 }}
                />
              </motion.div>
            </div>
            <div className="space-y-4 mt-8">
              <motion.div
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 10px 30px -10px rgba(59, 130, 246, 0.3)"
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden rounded-2xl shadow-lg h-64 relative"
              >
                <motion.img 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  src={Hr3} 
                  alt="Volunteers feeding street animals" 
                  className="w-full h-full object-cover"
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
                  whileHover={{ opacity: 0 }}
                />
              </motion.div>
              <motion.div
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 10px 30px -10px rgba(59, 130, 246, 0.3)"
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden rounded-2xl shadow-lg h-48 relative"
              >
                <motion.img 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  src={Hr4} 
                  alt="Successfully rescued and happy animal" 
                  className="w-full h-full object-cover"
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
                  whileHover={{ opacity: 0 }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;