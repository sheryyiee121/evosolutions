import { howItWorksSteps } from "../data/services";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="border-t border-white/5 bg-[#0A0A0A] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="text-xs font-bold tracking-widest text-[#00F0FF] uppercase">Process</p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">How it works</h2>
          <p className="mx-auto mt-4 max-w-xl text-white/50">
            A clear, proven workflow from first call to launch — no surprises, just results.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {howItWorksSteps.map((item, i) => (
            <div key={item.step} className="relative">
              {i < howItWorksSteps.length - 1 && (
                <div className="absolute top-8 left-[calc(50%+2rem)] hidden h-px w-[calc(100%-4rem)] bg-gradient-to-r from-[#00F0FF]/30 to-transparent lg:block" />
              )}
              <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-all hover:border-[#00F0FF]/20">
                <span className="text-3xl font-bold text-[#0A0FF5]/40">{item.step}</span>
                <h3 className="mt-4 text-lg font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/45">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
