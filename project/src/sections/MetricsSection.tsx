import { motion } from 'framer-motion';

const stats = [
  { label: 'AI PILOTS', value: 'Easy', description: 'Agents, prompts, models, and demos are faster to create than ever before.', color: 'text-emerald-400' },
  { label: 'PRODUCTION REALITY', value: 'Hard', description: 'Real operations need workflows, integrations, retries, approvals, and monitoring.', color: 'text-blue-400' },
  { label: 'SYSTEM LANDSCAPE', value: 'Fragmented', description: 'CRMs, APIs, databases, messaging, files, and contact centres rarely work from one execution layer.', color: 'text-purple-400' },
  { label: 'GAPFLOW ROLE', value: 'Execution', description: 'Gapflow connects AI agents to production systems through governed operational workflows.', color: 'text-teal-400' },
];

export default function MetricsSection() {
  return (
    <section className="mt-10 pb-10 pt-12 bg-slate-900 overflow-hidden relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute -top-[50%] -left-[10%] w-[70%] h-[150%] bg-emerald-500/10 blur-[120px] rounded-full rotate-12 animate-pulse" />
        <div className="absolute top-[20%] -right-[10%] w-[50%] h-[100%] bg-blue-500/10 blur-[120px] rounded-full -rotate-12" />
      </div>

      <div className="relative z-10">
        <div className="container-standard">
          <div className="max-w-4xl mb-10 text-center lg:text-left">
            <h2 className="text-3xl lg:text-5xl font-bold text-white tracking-tight leading-[1.15]">
              AI Agents Are Everywhere. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400">
                Production Execution Is The Gap.
              </span>
            </h2>
            <p className="mt-0 text-lg text-slate-400 max-w-3xl leading-relaxed">
              The real challenge is no longer creating agents. It is connecting them to workflows,
              systems, governance, and reliable operational execution.
            </p>
          </div>
        </div>

        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="flex flex-col group relative"
              >
                <div className={`absolute -left-4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-slate-700 to-transparent opacity-50 hidden lg:block`} />

                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400 mb-4 group-hover:text-white transition-colors duration-500">
                  {stat.label}
                </span>

                <h3 className={`text-4xl lg:text-5xl font-black mb-4 tracking-tighter ${stat.color} transition-transform duration-500 group-hover:scale-105 whitespace-nowrap`}>
                  {stat.value}
                </h3>

                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 leading-relaxed border-t border-slate-800 pt-5">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
