import { motion } from 'framer-motion';
import { Rocket, IceCream } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-20 md:pt-28 pb-12">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur px-3 py-1 text-sm text-white/80"
            >
              <Rocket className="h-4 w-4 text-fuchsia-400" />
              30-minute delivery by FedEx
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05, duration: 0.8 }}
              className="mt-5 text-4xl md:text-6xl font-extrabold tracking-tight"
              style={{ fontFamily: 'Mona Sans, Inter, system-ui, sans-serif' }}
            >
              FedEx Ice Cream
              <span className="block bg-gradient-to-r from-fuchsia-400 via-sky-400 to-emerald-400 bg-clip-text text-transparent">Mini. Sugar‑Free. High‑Protein.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="mt-5 text-white/70 text-lg"
            >
              Indulgent taste, without the sugar crash. Mini-sized pints packed with protein and delivered to your door in under 30 minutes.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href="#order"
                className="group relative inline-flex items-center gap-2 rounded-xl bg-gradient-to-tr from-fuchsia-500 to-sky-500 px-5 py-3 font-semibold text-white shadow-[0_12px_40px_-15px_rgba(168,85,247,0.7)] transition-transform hover:-translate-y-0.5"
              >
                <IceCream className="h-5 w-5" />
                Order now
              </a>
              <a
                href="#flavors"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 font-semibold text-white/90 backdrop-blur transition hover:bg-white/10"
              >
                Explore flavors
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative mx-auto w-full max-w-md perspective-[1600px]">
              <div className="relative h-72 md:h-80 [transform-style:preserve-3d]">
                {/* Floating 3D-ish cards */}
                <Card z={60} rotate={-10} y={-10} gradient="from-fuchsia-500/30 to-sky-500/30" label="Vanilla Sky" calories="90" protein="12" />
                <Card z={40} rotate={8} y={10} x={110} gradient="from-emerald-400/30 to-cyan-400/30" label="Mint Lift" calories="80" protein="13" delay={0.06} />
                <Card z={20} rotate={2} y={-4} x={-100} gradient="from-amber-400/30 to-pink-400/30" label="Strawberry Spark" calories="85" protein="11" delay={0.12} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Card({ z = 40, rotate = 0, x = 0, y = 0, gradient, label, calories, protein, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, rotate: rotate * 0.7 }}
      animate={{ opacity: 1, y, rotate }}
      transition={{ duration: 0.7, delay }}
      className="absolute left-1/2 top-1/2 w-[250px] -translate-x-1/2 -translate-y-1/2"
      style={{ transform: `translate3d(-50%, -50%, ${z}px)` }}
    >
      <div
        className={`group rounded-3xl border border-white/10 bg-white/5 p-4 shadow-[0_30px_120px_-40px_rgba(0,0,0,0.6)] backdrop-blur-xl transition-transform hover:-translate-y-1 hover:rotate-1`}
        style={{ transform: `translateX(${x}px) translateY(${y}px)` }}
      >
        <div className={`h-28 w-full rounded-2xl bg-gradient-to-br ${gradient} ring-1 ring-inset ring-white/10`} />
        <div className="mt-4 flex items-center justify-between">
          <div>
            <p className="text-sm text-white/60">Mini Pint</p>
            <p className="font-semibold">{label}</p>
          </div>
          <div className="text-right text-sm">
            <p className="text-white/60">{calories} cals</p>
            <p className="text-emerald-300">{protein}g protein</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
