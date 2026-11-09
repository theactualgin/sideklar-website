import { projects } from "@/lib/projects";
import { Reveal } from "@/components/ui/reveal";
import { SectionHead, TextLink } from "@/components/ui/section-head";

export function ProsjekterPreview() {
  return (
    <section className="bg-white px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHead
          label="Konsepter og eksempler"
          title="Slik kan nettsiden din se ut."
          action={<TextLink href="/prosjekter">Se alle konsepter</TextLink>}
        />

        <div className="grid gap-x-10 gap-y-14 md:grid-cols-2">
          {projects.slice(0, 4).map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.06}>
              <a href={`/prosjekter/${project.slug}`} className="group block">
                <div className="overflow-hidden rounded-xl border border-[#0A2349]/10 bg-[#F3F4F6]">
                  <img
                    src={project.image}
                    alt={`${project.title} (konseptdesign)`}
                    className="block aspect-[16/10] w-full object-cover object-top"
                  />
                </div>
                <div className="mt-5 flex items-baseline justify-between gap-4">
                  <h3 className="text-xl font-semibold tracking-tight text-[#0A2349] underline decoration-transparent decoration-2 underline-offset-[6px] transition-colors group-hover:decoration-[#3ADBA1]">
                    {project.title}
                  </h3>
                  <span className="shrink-0 text-sm text-[#0A2349]/55">
                    {project.category} · {project.year}
                  </span>
                </div>
                <p className="mt-2 max-w-md text-[15px] leading-relaxed text-[#0A2349]/65">{project.description}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
