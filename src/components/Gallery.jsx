import React from "react";
import { motion } from "framer-motion";

const images = [
  "/images/IMG-20241221-WA0006.jpg",
  "/images/IMG-20241221-WA0004.jpg",
  "/images/IMG-20250113-WA0061.jpg",
  "/images/IMG-20250113-WA0062.jpg",
  "/images/IMG-20250113-WA0063.jpg",
  "/images/IMG-20250113-WA0064.jpg",
  "/images/IMG-20250113-WA0138.jpg",
  "/images/IMG-20250113-WA0139.jpg",
  "/images/IMG-20250113-WA0140.jpg",
  "/images/IMG-20250113-WA0143.jpg",
  "/images/IMG-20250113-WA0141.jpg",
  "/images/IMG-20250113-WA0144.jpg",
  "/images/IMG-20250113-WA0145.jpg",
  "/images/IMG-20250113-WA0146.jpg",
  "/images/IMG-20250113-WA0147.jpg",
  "/images/IMG-20250113-WA0148.jpg",
  "/images/IMG-20250113-WA0150.jpg",
  "/images/IMG-20250113-WA0151.jpg",
  "/images/IMG-20250113-WA0152.jpg",
  "/images/IMG-20250113-WA0153.jpg",
  "/images/IMG-20250113-WA0155.jpg",
  "/images/IMG-20250113-WA0156.jpg",
  "/images/IMG-20250113-WA0157.jpg",
  "/images/IMG-20250113-WA0158.jpg",
  "/images/IMG-20250113-WA0159.jpg",
  "/images/IMG-20250113-WA0160.jpg",
  "/images/IMG-20250113-WA0196.jpg",
  "/images/IMG-20250113-WA0197.jpg",
  "/images/IMG-20250113-WA0198.jpg",
  "/images/IMG-20250114-WA0028.jpg",
  "/images/IMG-20250118-WA0003.jpg",
  "/images/IMG-20250115-WA0003.jpg",
  "/images/IMG-20250122-WA0001.jpg",
  "/images/IMG-20250131-WA0011.jpg",
  "/images/IMG-20250131-WA0023.jpg",
  "/images/IMG-20250131-WA0025.jpg",
  "/images/IMG-20250131-WA0026.jpg",
  "/images/IMG-20250131-WA0045.jpg",
  "/images/IMG-20250201-WA0005.jpg",
  "/images/IMG-20250212-WA0219.jpg",
  "/images/IMG-20250212-WA0220.jpg",
  "/images/IMG-20250212-WA0227.jpg",
  "/images/IMG-20250305-WA0016.jpg",
  "/images/IMG-20250215-WA0051.jpg",
  "/images/IMG-20250305-WA0017.jpg",
  "/images/IMG-20250305-WA0018.jpg",
  "/images/IMG-20250305-WA0020.jpg",
  "/images/IMG-20250305-WA0021.jpg",
  "/images/IMG-20250305-WA0022.jpg",
  "/images/IMG-20250305-WA0024.jpg",
  "/images/IMG-20250305-WA0025.jpg",
  "/images/IMG-20250305-WA0026.jpg",
  "/images/IMG-20250305-WA0029.jpg",
  "/images/IMG-20250305-WA0031.jpg",
  "/images/IMG-20250305-WA0032.jpg",
  "/images/IMG-20250305-WA0033.jpg",
  "/images/IMG-20250305-WA0034.jpg",
  "/images/IMG-20250305-WA0035.jpg",
  "/images/IMG-20250305-WA0036.jpg",
  "/images/IMG-20250305-WA0037.jpg",
  "/images/IMG-20250305-WA0038.jpg",
  "/images/IMG-20250305-WA0039.jpg",
  "/images/IMG-20250305-WA0040.jpg",
  "/images/IMG-20250305-WA0041.jpg",
  "/images/IMG-20250305-WA0042.jpg",
  "/images/IMG-20250305-WA0045.jpg",
  "/images/IMG-20250305-WA0046.jpg",
  "/images/IMG-20250305-WA0047.jpg",
  "/images/IMG-20250305-WA0048.jpg",
  "/images/IMG-20250305-WA0050.jpg",
  "/images/IMG-20250305-WA0051.jpg",
  "/images/IMG-20250305-WA0052.jpg",
  "/images/IMG-20250305-WA0054.jpg",
  "/images/IMG-20250305-WA0055.jpg",
  "/images/IMG-20250305-WA0057.jpg",
  "/images/IMG-20250306-WA0013.jpg",
  "/images/IMG-20250306-WA0015.jpg",
  "/images/IMG-20250306-WA0014.jpg",
  "/images/IMG-20250306-WA0033.jpg",
  "/images/IMG-20250306-WA0034.jpg",
  "/images/IMG-20250306-WA0076.jpg",
  "/images/IMG-20250306-WA0079.jpg",
  "/images/IMG-20250306-WA0094.jpg",
  "/images/IMG-20250306-WA0095.jpg",
  "/images/IMG-20250306-WA0096.jpg",
  "/images/IMG-20250306-WA0099.jpg",
  "/images/IMG-20250306-WA0097.jpg",
  "/images/IMG-20250306-WA0139.jpg",
  "/images/IMG-20250306-WA0138.jpg",
  "/images/IMG-20250306-WA0134.jpg",
  "/images/IMG-20250306-WA0102.jpg",
  "/images/IMG-20250306-WA0106.jpg"
];


const infiniteScroll = (direction) => ({
  y: direction === "up" ? ["0%", "-100%"] : ["-100%", "0%"],
  transition: {
    duration: 200,
    repeat: Infinity,
    ease: "linear",
  },
});

const Gallery = () => {
  return (
    <section id="gallery" className="bg-gradient-to-r from-purple-600 to-pink-600 min-h-screen flex flex-col items-center justify-center py-10">
      <h2 className="text-5xl font-extrabold text-white mb-10 drop-shadow-lg">📸 Beautiful Memories</h2>

      {/* Gallery Grid - Adjusted to Fill Space */}
      <div className="grid grid-cols-5 gap-4 w-full px-6 max-w-[90%]">
        {[0, 1, 2, 3, 4].map((row) => (
          <div key={row} className="overflow-hidden h-[600px] relative">
            <motion.div
              className="absolute top-0 left-0 w-full flex flex-col space-y-4"
              animate={infiniteScroll(row % 2 === 0 ? "up" : "down")}
            >
              {/* Loop through images twice for seamless scrolling */}
              {[...images, ...images].map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Memory ${index + 1}`}
                  className="w-full h-[200px] object-cover rounded-xl shadow-xl transition-transform hover:scale-105"
                />
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
