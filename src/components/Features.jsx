import { Timer, Shield, Leaf, Package } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'Lightning delivery',
    desc: 'Your treats arrive in 30 minutes or less with FedEx reliability.',
    icon: Timer,
    accent: 'from-fuchsia-400/30 to-sky-400/30',
  },
  {
    title: 'Sugar-free delight',
    desc: 'All the flavor with none of the sugar crash—sweetened smartly.',
    icon: Shield,
    accent: 'from-emerald-400/30 to-cyan-400/30',
  },
  {
    title: 'Lean, clean protein',
    desc: 'Each mini pint packs high-quality protein to fuel your day.',
    icon: Leaf,
    accent: 'from-amber-400/30 to-pink-400/30',
  },
  {
    title: 'Mini-sized magic',
    desc: 'Portioned for joy—just enough to treat yourself anytime.',
    icon: Package,
    accent: 'from-sky-400/30 to-indigo-400/30',
  },
];

export default function Features() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Why you'll love it</h2>
            <p className="text-white/60 mt-1">Balanced nutrition, modern flavors, and delivery that flies.</p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-md hover:bg-white/[0.07] transition"
            >
              <div className={`mb-4 h-12 w-12 rounded-2xl bg-gradient-to-br ${f.accent} ring-1 ring-inset ring-white/10 flex items-center justify-center`}> 
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-lg">{f.title}</h3>
              <p className="text-white/60 text-sm mt-1">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
