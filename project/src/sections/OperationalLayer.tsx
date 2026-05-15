import { motion } from 'framer-motion';

export default function OperationalLayer() {
  return (
    <section className="py-20 bg-white overflow-hidden relative">
      <div className="container-standard relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-6xl mx-auto"
        >
          <div className="bg-[#0f1115] border border-slate-800/50 rounded-[3rem] p-12 lg:p-24 text-center shadow-2xl relative group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

            <div className="relative z-10">
              <span className="inline-block text-[#10B981] text-[10px] lg:text-[12px] font-black uppercase tracking-[0.4em] mb-2">
                GAPFLOW VALUE
              </span>

              <h2 className="text-3xl lg:text-5xl font-black text-white leading-[1.1] mb-10 tracking-tight">
                Gapflow becomes the operational <br className="hidden lg:block" />
                execution layer between AI and <br className="hidden lg:block" />
                production systems.
              </h2>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
