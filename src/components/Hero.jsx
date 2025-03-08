import React from "react";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400 text-white text-center p-6 transition-all duration-500"
    >
      {/* Super Large Profile Image with Neon Glow */}
      <motion.img
        src="/images\IMG-20250305-WA0021.jpg"
        className="w-96 h-96 md:w-[500px] md:h-[500px] rounded-full shadow-2xl border-[10px] border-white 
                  hover:border-pink-300 transition-all duration-500 hover:scale-110"
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
      />

      {/* Heading */}
      <h1 className="text-5xl md:text-6xl font-bold mt-6 animate-pulse">
        💝 Happy Birthday, My Love! You are my greatest blessing, today and always ❤️
      </h1>

      {/* Typewriter Effect */}
     {/* Typewriter Effect with Larger, Bolder Text */}
<div className="mt-4 text-2xl md:text-3xl font-extrabold tracking-wide bg-gradient-to-r from-yellow-700 to-pink-700 bg-clip-text text-transparent">
  <Typewriter
    options={{
      strings: [
        "You're my sunshine! ☀️",
        "My love for you is endless! ❤️",
        "Today is as special as you! 🎁",
        "I hope all your wishes come true! 🎊",
        "You make every day magical! ✨",
        "You're my forever and always! 💖",
        "Every moment with you is a blessing! 🌸",
        "Your smile is my favorite sight! 😊",
        "My heart beats only for you! 💓",
        "You're the reason my world is beautiful! 🌎",
        "You are the melody to my heart’s song! 🎶",
        "If love had a name, it would be yours! 💕",
        "You shine brighter than the stars! ✨",
        "Every second with you is a memory worth keeping! ⏳",
        "You are the wish I never knew I made! 🌠",
        "You're the missing piece of my soul! 🧩",
        "With you, every day is a fairytale! 📖",
        "Your love is my favorite adventure! 🗺️",
        "Falling for you was my greatest adventure! 🎢",
        "I’d choose you over and over, in every lifetime! 💞",
        "You set my heart on fire! 🔥",
        "Being with you is my greatest joy! 🎶",
        "You’re my dream come true! 🌙",
        "Your love is my sweetest addiction! 🍫",
        "You’re my happily ever after! 🏰",
        "One lifetime isn't enough with you! ♾️",
        "You're the love story I never want to end! 📖",
        "Holding you feels like home! 🏡",
        "Every heartbeat whispers your name! 💓",
        "You are the love I never knew I needed! 💌",
        "You make my heart do a happy dance! 💃",
        "Loving you is my favorite hobby! 🎨",
        "You're the peanut butter to my jelly! 🥪",
        "You're my human diary, my love! 📖",
        "I’d share my fries with you! 🍟",
        "You're the reason I believe in love! 💕",
        "You’re my 11:11 wish every day! 🌠",
        "You stole my heart, and I don’t want it back! 🔐",
        "You make my world brighter! ☀️",
        "You're the sweetest part of my life! 🍩",
        "No matter what, I’m always here for you! 🤗",
        "You are safe in my heart! 💖",
        "Through every high and low, I choose you! ⛰️",
        "You are my peace in chaos! 🌊",
        "Loving you is the easiest thing I’ve ever done! 💑",
        "You're my strength, my heart, my love! 💪",
        "No distance can change what we have! ✈️",
        "You make even the hardest days feel easy! 🌈",
        "You are my heart’s greatest home! 🏡",
        "Loving you is my life’s greatest privilege! 💍",
      ],
      autoStart: true,
      loop: true,
    }}
  />
</div>

      {/* Scroll Down Button */}
      <motion.a
       href="#gallery"

        className="mt-8 bg-white text-pink-600 font-semibold px-6 py-3 rounded-full shadow-lg 
                  hover:bg-pink-700 hover:text-white transition-all duration-300"
        whileHover={{ scale: 1.1 }}
      >
        Scroll Down ⬇️
      </motion.a>
    </section>
  );
};

export default Hero;
