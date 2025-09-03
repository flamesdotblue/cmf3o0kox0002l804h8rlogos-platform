import Hero from './components/Hero';
import Features from './components/Features';
import ProductShowcase from './components/ProductShowcase';
import DeliveryCTA from './components/DeliveryCTA';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white selection:bg-fuchsia-500/30 selection:text-white">
      {/* 3D-ish layered background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_500px_at_50%_-100px,rgba(168,85,247,0.25),transparent),radial-gradient(800px_400px_at_10%_10%,rgba(59,130,246,0.2),transparent),radial-gradient(900px_500px_at_90%_20%,rgba(16,185,129,0.18),transparent)]" />
        <div className="absolute inset-0 [mask-image:radial-gradient(circle_at_center,black_40%,transparent_70%)] bg-[conic-gradient(from_180deg_at_50%_50%,rgba(255,255,255,0.06),rgba(255,255,255,0)_40%,rgba(255,255,255,0.06)_60%,rgba(255,255,255,0)_100%)]" />
        <div className="absolute inset-0 opacity-[0.07]" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,.12) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.12) 1px,transparent 1px)', backgroundSize: '60px 60px'}} />
      </div>

      <main className="relative">
        <Hero />
        <Features />
        <ProductShowcase />
        <DeliveryCTA />
      </main>
    </div>
  );
}

export default App;
