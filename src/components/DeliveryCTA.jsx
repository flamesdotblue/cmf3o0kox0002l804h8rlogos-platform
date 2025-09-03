import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';

export default function DeliveryCTA() {
  return (
    <section id="order" className="py-16">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.03] p-6 md:p-8 backdrop-blur-xl"
        >
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gradient-to-br from-fuchsia-500/20 to-sky-500/20 blur-3xl" />
          <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6 justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80 mb-3">
                <Rocket className="h-4 w-4 text-fuchsia-400" />
                Faster than cravings
              </div>
              <h3 className="text-xl md:text-2xl font-bold">Order now, delight in 30 minutes</h3>
              <p className="text-white/70 mt-1">We ship with FedEx so your ice cream arrives cold, intact, and right on time.</p>
            </div>
            <div className="flex w-full md:w-auto flex-col sm:flex-row gap-3">
              <a href="#" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-tr from-fuchsia-500 to-sky-500 px-5 py-3 font-semibold shadow-[0_12px_40px_-15px_rgba(168,85,247,0.7)] hover:opacity-95 transition">Checkout</a>
              <a href="#flavors" className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 py-3 font-semibold hover:bg-white/10 transition">Browse flavors</a>
            </div>
          </div>
        </motion.div>
        <p className="text-xs text-white/50 mt-3">Cold-chain packed. Contact-free delivery available in most areas.</p>
      </div>
    </section>
  );
}
