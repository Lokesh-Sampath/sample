import React from "react";
import { motion } from "framer-motion";

const VideoSection = () => {
  return (
    <section 
      id="video" 
      className="min-h-screen flex flex-col justify-center items-center 
 bg-gradient-to-l from-slate-500 via-violet-600 to-pink-800"
    >
    <h2 className="text-5xl font-bold mb-8 drop-shadow-lg text-white">
  📽️Your Journey In This World
</h2>


      <motion.video 
        controls 
        className="w-[80%] max-w-4xl rounded-lg shadow-lg border-4 border-purple-500
                bg-gradient-to-l from-slate-50 via-violet-600 to-pink-800"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <source src="/videos/WhatsApp Video 2025-03-08 at 21.33.38_d563ea69.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </motion.video>
    </section>
  );
};

export default VideoSection;
