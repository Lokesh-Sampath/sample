import React, { useState } from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const Letter = () => {
  const [open, setOpen] = useState(false);

  return (
    <section
      id="letter"
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-[#8B0000] to-[#FF4500] text-white p-6"
    >
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: open ? 1 : 0 }}
        transition={{ duration: 1 }}
        className="relative w-[900px] h-[850px] p-8 rounded-lg shadow-xl border-4 border-red-400 bg-cover bg-center overflow-y-auto"
        style={{ backgroundImage: "url('/images/old-paper.jpg')" }}
      >
        <h2 className="text-3xl font-bold text-center text-white">
          💌 A Letter for You
        </h2>
        <p className="mt-4 font-serif text-lg text-gray-200 leading-relaxed">
          <Typewriter
            options={{
              strings: [
                `My Dearest Shamyu,

Happy Birthday, my love! 

I find myself at a loss for words as I sit here, trying to express everything that you mean to me, but I’ll try my best to put into words the love that grows inside me for you every single day. Today, as I celebrate the beautiful person you are, I can't help but reflect on the journey we've shared, from the days when we were just the best of friends to now as my partner, when you are the love of my life.

Looking back, it feels like it was just yesterday when we were two souls finding comfort in each other's presence, laughing, sharing, and navigating through life as friends and now as love forever. I never imagined that those moments would slowly turn into something so much more beautiful, something so profound, something so real. You’ve been my pillar of support, my constant source of joy, and the one who makes everything in life feel like a deeper meaning.

Over time, I realized that I had found not just a best out of everything in this world, but my heart’s home. Your kindness, your laughter, your strength — everything about you is a reflection of pure beauty, and every moment with you feels like a blessing. I used to think love was just a feeling, but you’ve shown me that it’s much more than that. It’s understanding each other even in silence, it's feeling complete in each other's presence, and it’s a bond that only grows stronger with time.

I want you to know how deeply I cherish every part of you, your heart, your soul, your dreams, and even the little things that make you, you. You make my world brighter, and each day with you is a reminder of how lucky I am to have you in my life.

On your special day, I want to promise you this: no matter where life takes us, I will always be by your side. I will support you, stand by you, and love you in every way I can and definitely marry you Shamyu. You are not just the love of my life, Shamyu — you are my everything which you became.

May this birthday bring you all the happiness and joy you deserve, and may this year be filled with endless adventures, laughter, and love. I look forward to making more memories with you, to growing together, and to loving you more than I ever thought was possible.

Happy Birthday, my love. You will always have my heart, my soul, and as always, ME.

Forever yours,
Loki`,
              ],
              autoStart: open,
              loop: false, // Ensures that text doesn't loop
              delay: 30,
              backspace: false,
            }}
          />
        </p>
      </motion.div>

      {!open && (
        <div className="mt-6 flex justify-center items-center">
          <button
            onClick={() => setOpen(true)}
            className="bg-red-600 text-white px-8 py-3 rounded-lg shadow-lg text-xl font-semibold hover:bg-red-800 transition-all duration-300"
          >
            Open Letter ✉️
          </button>
        </div>
      )}
    </section>
  );
};

export default Letter;
