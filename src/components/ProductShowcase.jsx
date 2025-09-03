import { motion } from 'framer-motion';

const products = [
  {
    name: 'Vanilla Sky',
    accent: 'from-fuchsia-400/30 to-sky-400/30',
    stats: { calories: 90, protein: 12, sugar: 0 },
  },
  {
    name: 'Mint Lift',
    accent: 'from-emerald-400/30 to-cyan-400/30',
    stats: { calories: 80, protein: 13, sugar: 0 },
  },
  {
    name: 'Strawberry Spark',
    accent: 'from-amber-400/30 to-pink-400/30',
    stats: { calories: 85, protein: 11, sugar: 0 },
  },
  {
    name: 'Cocoa Glide',
    accent: 'from-indigo-400/30 to-purple-400/30',
    stats: { calories: 95, protein: 14, sugar: 0 },
  },
];

export default function ProductShowcase() {
  return (
    <section id="flavors" className="py-14">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Signature mini flavors</h2>
            <p className="text-white/60 mt-1">Crafted to be light on calories and big on satisfaction.</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" style={{ perspective: '1200px' }}>
          {products.map((p, i) => (
            <TiltCard key={p.name} i={i} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TiltCard({ product, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: i * 0.07 }}
      className="group relative rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-md shadow-[0_30px_120px_-40px_rgba(0,0,0,0.6)]"
    >
      <div className="relative h-40 w-full rounded-2xl bg-gradient-to-br ring-1 ring-inset ring-white/10 transition will-change-transform group-hover:[transform:translateZ(8px)]" style={{ transformStyle: 'preserve-3d' }}>
        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${product.accent}`} />
        <div className="absolute -right-3 -top-3 h-16 w-16 rounded-2xl bg-white/10 backdrop-blur-sm ring-1 ring-white/10 flex items-center justify-center"
             style={{ transform: 'translateZ(24px)' }}>
          <span className="text-2xl">🍦</span>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div>
          <p className="text-sm text-white/60">Mini Pint</p>
          <p className="font-semibold">{product.name}</p>
        </div>
        <div className="text-right text-xs text-white/70">
          <p><span className="text-white/50">Calories</span> {product.stats.calories}</p>
          <p><span className="text-white/50">Protein</span> <span className="text-emerald-300 font-medium">{product.stats.protein}g</span></p>
          <p><span className="text-white/50">Sugar</span> {product.stats.sugar}g</p>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <button className="rounded-xl bg-white/10 px-3 py-2 text-sm font-semibold hover:bg-white/15 transition">Details</button>
        <a href="#order" className="rounded-xl bg-gradient-to-tr from-fuchsia-500 to-sky-500 px-3 py-2 text-sm font-semibold hover:opacity-90 transition">Add to cart</a>
      </div>
    </motion.div>
  );
}
