import { motion } from "framer-motion";

const planes = [
  { className: "hero-plane plane-one", duration: 3.8, x: [0, 18, -10, 0], y: [0, -16, 8, 0], rotate: [0, 8, -5, 0] },
  { className: "hero-plane plane-two", duration: 4.4, x: [0, -16, 14, 0], y: [0, 12, -10, 0], rotate: [0, -10, 6, 0] },
  { className: "hero-plane plane-three", duration: 5, x: [0, 10, -18, 0], y: [0, 18, -6, 0], rotate: [0, 6, -8, 0] }
];

export default function HeroBackground3D() {
  return (
    <div className="hero-bg-3d" aria-hidden="true">
      <motion.div
        className="hero-orbit"
        animate={{ rotateX: [58, 66, 58], rotateZ: [0, 360] }}
        transition={{ duration: 8, ease: "linear", repeat: Infinity }}
      />
      {planes.map((plane) => (
        <motion.span
          animate={{ x: plane.x, y: plane.y, rotate: plane.rotate }}
          className={plane.className}
          key={plane.className}
          transition={{ duration: plane.duration, ease: "easeInOut", repeat: Infinity }}
        />
      ))}
    </div>
  );
}
