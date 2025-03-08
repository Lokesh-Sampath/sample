import React, { useState, useEffect } from "react";

const Countdown = () => {
  const [timePassed, setTimePassed] = useState(getTimePassed());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimePassed(getTimePassed());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function getTimePassed() {
    const startDate = new Date("2004-03-08T00:00:00Z");
    const now = new Date();
    const diff = Math.floor((now - startDate) / 1000);

    const days = Math.floor(diff / (60 * 60 * 24));
    const hours = Math.floor((diff % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((diff % (60 * 60)) / 60);
    const seconds = diff % 60;

    return { days, hours, minutes, seconds };
  }

  const quotes = [
    "⏳ Every second counts, make it worthwhile!",
    "✨ The journey is long, but every moment is precious.",
    "💙 Time flies, but memories last forever.",
    "🚀 Keep moving forward, your story is still being written.",
  ];

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6 overflow-hidden">
      {/* Twinkling Stars Effect */}
      <div className="absolute inset-0 bg-black opacity-30 pointer-events-none animate-pulse"></div>

      <h1 className="text-3xl md:text-4xl font-semibold mb-6 text-center animate-fadeIn">
        ⏳LIFELINE -<span className="text-blue-400">TIMELINE</span>
      </h1>

      <div className="flex flex-wrap gap-6 justify-center">
        {Object.entries(timePassed).map(([label, value]) => (
          <div
            key={label}
            className="flex flex-col items-center bg-gray-800 p-4 rounded-lg shadow-lg w-24 md:w-28 animate-fadeIn"
          >
            <span className="text-2xl md:text-3xl font-bold text-blue-400">
              {value}
            </span>
            <span className="text-sm text-gray-400 uppercase">{label}</span>
          </div>
        ))}
      </div>

      {/* Motivational Quote */}
      <p className="mt-6 text-gray-300 italic text-lg animate-fadeIn">
        {quotes[Math.floor(Math.random() * quotes.length)]}
      </p>

      {/* Extra Star Animations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-50"
            style={{
              width: `${Math.random() * 3}px`,
              height: `${Math.random() * 3}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `twinkle ${Math.random() * 5 + 2}s infinite`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Countdown;
