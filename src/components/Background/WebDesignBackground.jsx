import React from 'react';
import { motion } from 'framer-motion';

const WebDesignBackground = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-[#030712] perspective-[1000px]">
      
      {/* Abstract Glowing Orbs */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] right-[-5%] w-[40vw] h-[40vw] bg-cyan-600/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none"
      />
      <motion.div 
        animate={{ scale: [1, 1.3, 1], x: [0, -60, 0], y: [0, -40, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-indigo-600/20 blur-[130px] rounded-full mix-blend-screen pointer-events-none"
      />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCI+PHBhdGggZD0iTTAgNTBMMCAwTDUwIDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+')] opacity-50 pointer-events-none"></div>

      {/* Floating 3D Elements Container */}
      <div className="absolute inset-0 pointer-events-none" style={{ transformStyle: 'preserve-3d' }}>
        
        {/* Element 1: IDE/Code Editor Window */}
        <motion.div 
          animate={{ y: [0, -30, 0], rotateX: [10, 15, 10], rotateY: [-15, -10, -15] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[15%] left-[5%] md:left-[10%] w-72 h-48 rounded-xl border border-white/10 bg-[#0A192F]/80 backdrop-blur-xl shadow-2xl p-4 opacity-70 hidden md:block"
        >
          <div className="flex gap-2 mb-3">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/70"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/70"></div>
          </div>
          <div className="space-y-2 opacity-70">
            <div className="w-3/4 h-2 bg-cyan-400/30 rounded"></div>
            <div className="w-1/2 h-2 bg-blue-400/30 rounded ml-4"></div>
            <div className="w-2/3 h-2 bg-indigo-400/30 rounded ml-4"></div>
            <div className="w-1/3 h-2 bg-purple-400/30 rounded ml-8"></div>
            <div className="w-1/2 h-2 bg-cyan-400/30 rounded"></div>
          </div>
        </motion.div>

        {/* Element 2: Dashboard Analytics */}
        <motion.div 
          animate={{ y: [0, 40, 0], rotateX: [-10, -5, -10], rotateY: [15, 20, 15] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[25%] right-[5%] md:right-[15%] w-80 h-56 rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-lg shadow-2xl p-5 flex flex-col justify-between opacity-80"
        >
          <div className="flex justify-between items-center mb-4 border-b border-white/5 pb-2">
            <div className="w-24 h-3 bg-white/20 rounded"></div>
            <div className="w-12 h-3 bg-cyan-400/40 rounded"></div>
          </div>
          <div className="flex items-end justify-between h-24 gap-2">
            {[40, 70, 45, 90, 60, 80, 50].map((h, i) => (
              <motion.div 
                key={i}
                initial={{ height: "0%" }}
                animate={{ height: `${h}%` }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: i * 0.1 }}
                className="w-full bg-gradient-to-t from-cyan-500/20 to-cyan-400/60 rounded-t-sm"
              />
            ))}
          </div>
        </motion.div>

        {/* Element 3: Mobile UI Wireframe */}
        <motion.div 
          animate={{ y: [0, -20, 0], rotateZ: [0, 5, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] right-[8%] w-40 h-72 rounded-[2rem] border-[4px] border-white/10 bg-black/40 backdrop-blur-md shadow-2xl p-3 flex flex-col gap-3 opacity-60 hidden lg:flex"
        >
          <div className="w-12 h-1 bg-white/20 rounded-full mx-auto mb-2"></div>
          <div className="w-full h-24 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-xl"></div>
          <div className="w-3/4 h-3 bg-white/20 rounded-full"></div>
          <div className="w-1/2 h-2 bg-white/10 rounded-full"></div>
          <div className="grid grid-cols-2 gap-2 mt-auto">
            <div className="w-full h-12 bg-white/5 rounded-lg"></div>
            <div className="w-full h-12 bg-white/5 rounded-lg"></div>
          </div>
        </motion.div>

        {/* Element 4: Interactive Circular Node (Floating Center-Left) */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-[50%] left-[15%] w-40 h-40 border border-dashed border-cyan-500/40 rounded-full flex items-center justify-center opacity-50 hidden md:flex"
        >
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-24 h-24 border-t-2 border-r-2 border-blue-400/50 rounded-full"
          />
        </motion.div>

      </div>

      {/* Light Overlay at bottom to blend into #091925 */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#091925]/50 to-[#091925] pointer-events-none" />
    </div>
  );
};

export default WebDesignBackground;
