export default function Starfield() {
  const stars = [
    { left: "10%", top: "20%", size: 2, color: "#FAC775", delay: 0 },
    { left: "25%", top: "55%", size: 1.5, color: "#fff", delay: 0.4 },
    { left: "40%", top: "15%", size: 2, color: "#FAC775", delay: 0.8 },
    { left: "55%", top: "65%", size: 1.5, color: "#fff", delay: 1.1 },
    { left: "70%", top: "30%", size: 2, color: "#fff", delay: 0.2 },
    { left: "85%", top: "75%", size: 1.5, color: "#FAC775", delay: 1.4 },
    { left: "15%", top: "80%", size: 1.5, color: "#fff", delay: 0.6 },
    { left: "33%", top: "90%", size: 2, color: "#FAC775", delay: 1.7 },
    { left: "50%", top: "45%", size: 1.5, color: "#fff", delay: 0.9 },
    { left: "65%", top: "95%", size: 2, color: "#FAC775", delay: 1.2 },
    { left: "80%", top: "50%", size: 1.5, color: "#fff", delay: 0.3 },
    { left: "95%", top: "25%", size: 1.5, color: "#fff", delay: 1.5 },
  ];

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {stars.map((star, i) => (
        <span
          key={i}
          className="absolute rounded-full animate-twinkle"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            backgroundColor: star.color,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}
    </div>
  );
}