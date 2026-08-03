const projects = [
  {
    title: "IKI Project",
    description:
      "The IKI Project focuses on improving climate resilience and sustainable livelihoods in vulnerable communities. It includes household profiling, Farmer Development Program (FDP) activities, training and implementation planning, weekly group meetings, and Income Generating Activity (IGA) support for 720 households.",
  },
  {
    title: "Srijon",
    description:
      "The Srijon Project works to improve the socio-economic conditions of 720 households through household profiling, farmer development, training programs, weekly group meetings, and livelihood support activities that promote self-reliance.",
  },
  {
    title: "Ashash Project",
    description:
      "The Ashash Project provides support to 650 beneficiaries through five key project components. It aims to improve community well-being by delivering essential services and development activities that enhance the quality of life.",
  },
  {
    title: "SIRRM",
    description:
      "The SIRRM Project strengthens community resilience by organizing group meetings, training sessions, workshops, and awareness campaigns. It encourages community participation and promotes knowledge sharing for sustainable development.",
  },
  {
    title: "FSTIP",
    description:
      "The FSTIP Project focuses on capacity building through skills training, awareness meetings, beneficiary support, peer leader development, and referral services. It helps beneficiaries improve their knowledge, skills, and access to essential services.",
  },
  {
    title: "Grow School",
    description:
      "The Grow School Project supports educational development by maintaining student profiles and monitoring the progress of approximately 300 students. It aims to improve learning opportunities and educational outcomes.",
  },
  {
    title: "BNF Bangladesh",
    description:
      "The BNF Bangladesh Project provides vocational and skills training to community members. Its goal is to increase employment opportunities, improve income generation, and strengthen economic independence.",
  },
  {
    title: "Sapath Project",
    description:
      "The Sapath Project promotes community development through awareness training, beneficiary support, and assistance programs. It focuses on increasing public awareness and improving the well-being of vulnerable groups.",
  },
  {
    title: "ARC",
    description:
      "The ARC Project delivers skills training programs to enhance beneficiaries' technical and professional abilities. The project aims to improve employability and support sustainable livelihood opportunities.",
  },
  {
    title: "Nagorikota",
    description:
      "The Nagorikota Project promotes civic engagement and citizen participation through community-based activities. It encourages active involvement in social development, strengthens local governance, and raises public awareness on civic rights and responsibilities.",
  },
];

function ProjectPage({ onBack }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-amber-50">
      <header className="bg-gradient-to-r from-green-700 via-emerald-600 to-teal-600 px-6 py-8 text-white shadow-lg sm:px-4 sm:py-6">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-100">
              Agrogoti Sangstha
            </p>
            <h1 className="text-3xl font-bold sm:text-2xl">Our Projects</h1>
            <p className="mt-2 max-w-2xl text-sm text-emerald-50/90 sm:text-base">
              A detailed overview of the initiatives supporting communities through resilience, livelihoods, education, and development.
            </p>
          </div>
          <button
            type="button"
            onClick={onBack}
            className="rounded-full border border-white/30 bg-white/15 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/25"
          >
            ← Back to Home
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-10 sm:px-4 sm:py-8">
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h2 className="mb-3 text-xl font-bold text-green-700">{project.title}</h2>
              <p className="text-sm leading-7 text-gray-700">{project.description}</p>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}

export default ProjectPage;
