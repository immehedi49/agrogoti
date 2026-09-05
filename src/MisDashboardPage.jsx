import { useState } from "react";
import ProjectPage from "./ProjectPage";

const projects = [
  {
    id: 1,
    name: "IKI",
    title: "Project 1",
    logo: "/slides/logo1.svg",
    count: 5,
    subItems: [
      {
        name: "IKI Family Profile",
        dataUrl:
          "https://docs.google.com/spreadsheets/d/18701JLIMgP_2amhiWIc5FZUdbLzJ12KL/edit?usp=sharing&ouid=107556374060003788663&rtpof=true&sd=true",
        dashboardUrl:
          "https://app.powerbi.com/view?r=eyJrIjoiMTkxY2RlODgtM2VmMC00MzhmLWJlNjYtYTBiOTc5NzAyOTNjIiwidCI6ImU3MWNiODkyLTg3NmQtNGM2YS1iZWJlLTI0OWU3YWVhMTA1ZiIsImMiOjEwfQ%3D%3D",
      },
      {
        name: "IKI Project Activities Information",
        dataUrl:
          "https://docs.google.com/spreadsheets/d/1XAX7K70i3TKUSKwoQEl4JnPVP08K3GrddVYNKcLMnes/edit?usp=sharing",
        dashboardUrl:
          "https://app.powerbi.com/view?r=eyJrIjoiM2I0MGY4NjAtMjM4Zi00ZDc1LWI0ZWYtY2ZlZTViMjA4MDJhIiwidCI6ImU3MWNiODkyLTg3NmQtNGM2YS1iZWJlLTI0OWU3YWVhMTA1ZiIsImMiOjEwfQ%3D%3D",
      },
      {
        name: "IKI Target vs Achievement",
        dataUrl:
          "https://docs.google.com/spreadsheets/d/1hqbTyEBSbE-nlHnTMcb1F7-QSI1yZ76eN0jvyNi4ju4/edit?usp=sharing",
        dashboardUrl:
          "https://app.powerbi.com/view?r=eyJrIjoiM2I1YTU2Y2QtNDc4Yi00NzQ1LTg2MWYtODdmODE1ZTRiYmI1IiwidCI6ImU3MWNiODkyLTg3NmQtNGM2YS1iZWJlLTI0OWU3YWVhMTA1ZiIsImMiOjEwfQ%3D%3D",
      },
      {
        name: "IKI FDP BDP Form",
        dataUrl:
          "https://docs.google.com/spreadsheets/d/1g3dg852uzbjMkwJ7FFNxMZCIIWLzvQWDz4rlSxI4o_c/edit?usp=sharing",
        dashboardUrl:
          "https://app.powerbi.com/view?r=eyJrIjoiOGM0MGQ2OGEtMzdjMi00MmQzLWJlNDYtMTM5M2Y2Mzc5MGM0IiwidCI6ImU3MWNiODkyLTg3NmQtNGM2YS1iZWJlLTI0OWU3YWVhMTA1ZiIsImMiOjEwfQ%3D%3D",
      },
      {
        name: "IKI Transfer of Productive Assets",
        dataUrl:
          "https://docs.google.com/spreadsheets/d/1nOvUE4Dpjx7ktOhBhCSuPUG3oa8lUJs0V7ZVuLoZUA0/edit?usp=sharing",
        dashboardUrl:
          "https://app.powerbi.com/view?r=eyJrIjoiNGJmMTkxNzYtMjc4OS00MTY3LThkNDAtMWM3MThhMjExNDQzIiwidCI6ImU3MWNiODkyLTg3NmQtNGM2YS1iZWJlLTI0OWU3YWVhMTA1ZiIsImMiOjEwfQ%3D%3D",
      },
    ],
  },
  {
    id: 2,
    name: "Srijon",
    title: "Project 2",
    logo: "/slides/srijan.jpeg",
    count: 5,
    subItems: [
      {
        name: "Srijan Family Profile",
        dataUrl:
          "https://docs.google.com/spreadsheets/d/12a6H-XQsPKp-R0-DpuE93HxIQ0hz3KCI/edit?usp=sharing&ouid=107556374060003788663&rtpof=true&sd=true",
        dashboardUrl:
          "https://app.powerbi.com/view?r=eyJrIjoiMmE0MjM4ZjAtYmQ5Mi00ODNlLTlkZGMtOWM1ZTNmOGY4YzQ1IiwidCI6ImU3MWNiODkyLTg3NmQtNGM2YS1iZWJlLTI0OWU3YWVhMTA1ZiIsImMiOjEwfQ%3D%3D",
      },
      {
        name: "Project Activities Information",
        dataUrl:
          "https://docs.google.com/spreadsheets/d/1MS3SIjoLYrVqIWv3KS0LoK0AdLbWhtYC5XuFrVmPQpI/edit?usp=sharing",
        dashboardUrl:
          "https://app.powerbi.com/view?r=eyJrIjoiOTMzY2M2MGYtYTFkNi00ODAyLTk2OGMtMmYzOTQ1M2ZhZDdiIiwidCI6ImU3MWNiODkyLTg3NmQtNGM2YS1iZWJlLTI0OWU3YWVhMTA1ZiIsImMiOjEwfQ%3D%3D",
      },
      {
        name: "Srijan Asset Transfer",
        dataUrl:
          "https://docs.google.com/spreadsheets/d/1R31Yrcz6di0w6SfF3scn1FrZxgN1APOj/edit?usp=sharing&ouid=107556374060003788663&rtpof=true&sd=true",
        dashboardUrl:
          "https://app.powerbi.com/view?r=eyJrIjoiNmE0OTA3ZjYtZjhlYS00ZDFiLWJkODItZmZmNzNjZTc4N2VjIiwidCI6ImU3MWNiODkyLTg3NmQtNGM2YS1iZWJlLTI0OWU3YWVhMTA1ZiIsImMiOjEwfQ%3D%3D",
      },
      {
        name: "Srijan FDP BDP Form",
        dataUrl:
          "https://docs.google.com/spreadsheets/d/1AhB-fP6lpvBhG5xPLurlLeTz35XQPmvzZkvvpQt37_I/edit?usp=sharing",
        dashboardUrl:
          "https://app.powerbi.com/view?r=eyJrIjoiMWU4NDRmODEtZTg0MS00YzYyLWFlN2QtNDA2ZDQ2YWU3OTljIiwidCI6ImU3MWNiODkyLTg3NmQtNGM2YS1iZWJlLTI0OWU3YWVhMTA1ZiIsImMiOjEwfQ%3D%3D",
      },
      {
        name: "Srijan Target vs Achievement",
        dataUrl:
          "https://docs.google.com/spreadsheets/d/1F_4SZqDSvuADSW8mQ3H31FzaRDT60Kn5U3Qiq65Tem4/edit?usp=sharing",
        dashboardUrl:
          "https://app.powerbi.com/view?r=eyJrIjoiNDBlZjEzYjgtMmJlYS00OWRjLWJmNTgtMmFkNDYxZTVkNWM2IiwidCI6ImU3MWNiODkyLTg3NmQtNGM2YS1iZWJlLTI0OWU3YWVhMTA1ZiIsImMiOjEwfQ%3D%3D",
      },
    ],
  },
  {
    id: 3,
    name: "Ashshash",
    title: "Project 3",
    logo: "/slides/ashash.jpeg",
    count: 8,
    subItems: [
      {
        name: "Ashshash Career Counseling",
        dataUrl:
          "https://docs.google.com/spreadsheets/d/15Z5N_4GMj4-a7hfxBacVXiOCUC7nnKCH/edit?usp=sharing&ouid=107556374060003788663&rtpof=true&sd=true",
        dashboardUrl:
          "https://app.powerbi.com/view?r=eyJrIjoiMWU2MzRhNzQtNjhjOC00MzQxLWIxZTYtZDFkMGNkN2RmOTcwIiwidCI6ImU3MWNiODkyLTg3NmQtNGM2YS1iZWJlLTI0OWU3YWVhMTA1ZiIsImMiOjEwfQ%3D%3D",
      },
      {
        name: "Ashshash Classroom Based Training",
        dataUrl:
          "https://docs.google.com/spreadsheets/d/1DN-JUMbqYORJ7Io90jrmb7vWgHahQua3/edit?usp=sharing&ouid=107556374060003788663&rtpof=true&sd=true",
        dashboardUrl:
          "https://app.powerbi.com/view?r=eyJrIjoiNDY5ZTk4MTctY2UwOC00ZTAxLWI1OWItNDkzZDFlZWZmNTk4IiwidCI6ImU3MWNiODkyLTg3NmQtNGM2YS1iZWJlLTI0OWU3YWVhMTA1ZiIsImMiOjEwfQ%3D%3D",
      },
      {
        name: "Ashshash Entrepreneurship Development Tr",
        dataUrl:
          "https://docs.google.com/spreadsheets/d/10WtojQKuChLdY9la-91s229z5FnRgdi2/edit?usp=sharing&ouid=107556374060003788663&rtpof=true&sd=true",
        dashboardUrl:
          "https://app.powerbi.com/view?r=eyJrIjoiM2MyOTc1ZDYtZWI3Yi00MjA5LWI4Y2UtNWQ5Yzc1YTFhZGE0IiwidCI6ImU3MWNiODkyLTg3NmQtNGM2YS1iZWJlLTI0OWU3YWVhMTA1ZiIsImMiOjEwfQ%3D%3D",
      },
      {
        name: "Ashshash Identification",
        dataUrl:
          "https://docs.google.com/spreadsheets/d/1FHOqkUeDJ7mGyXtOg861rXQUkAGQexcQ/edit?usp=sharing&ouid=107556374060003788663&rtpof=true&sd=true",
        dashboardUrl:
          "https://app.powerbi.com/view?r=eyJrIjoiMzE4NDU2NTYtZWRmNy00MzllLTg3YmEtMDViOGM2ZmJjYjE4IiwidCI6ImU3MWNiODkyLTg3NmQtNGM2YS1iZWJlLTI0OWU3YWVhMTA1ZiIsImMiOjEwfQ%3D%3D",
      },
      {
        name: "Ashshash Life Skills Training",
        dataUrl:
          "https://docs.google.com/spreadsheets/d/1GtKDX1R0OV0bEf3LDPI_GUPOPZJp6t_C/edit?usp=sharing&ouid=107556374060003788663&rtpof=true&sd=true",
        dashboardUrl:
          "https://app.powerbi.com/view?r=eyJrIjoiOTdmM2NkYjctMzdjNC00MGNlLTk1MzctNjkxZGMxNzEyMGVmIiwidCI6ImU3MWNiODkyLTg3NmQtNGM2YS1iZWJlLTI0OWU3YWVhMTA1ZiIsImMiOjEwfQ%3D%3D",
      },
      {
        name: "Ashshash Mentor-Mentee Based Training",
        dataUrl:
          "https://docs.google.com/spreadsheets/d/14_svC1xqSafFwPayf9H5Ky50rJtYCEM5/edit?usp=sharing&ouid=107556374060003788663&rtpof=true&sd=true",
        dashboardUrl:
          "https://app.powerbi.com/view?r=eyJrIjoiNjlhMjcxOGQtNjhlMy00MmQ4LTk4YjAtZDYyODRkNTFiYzMyIiwidCI6ImU3MWNiODkyLTg3NmQtNGM2YS1iZWJlLTI0OWU3YWVhMTA1ZiIsImMiOjEwfQ%3D%3D",
      },
      {
        name: "Ashshash Psychosocial Counseling",
        dataUrl:
          "https://docs.google.com/spreadsheets/d/17VjaGNEXQBembiku5mx-Zs2JvkZhdeAL/edit?usp=sharing&ouid=107556374060003788663&rtpof=true&sd=true",
        dashboardUrl:
          "https://app.powerbi.com/view?r=eyJrIjoiYjkxMTRhMjAtZDg0Zi00MWEyLTk2Y2MtYWViMmMwZmJkZTY0IiwidCI6ImU3MWNiODkyLTg3NmQtNGM2YS1iZWJlLTI0OWU3YWVhMTA1ZiIsImMiOjEwfQ%3D%3D",
      },
      {
        name: "Ashshash Upskill Training",
        dataUrl:
          "https://docs.google.com/spreadsheets/d/1uQDRIpJiP0y0FcVtbR9eMWfNzf2hWgsz/edit?usp=sharing&ouid=107556374060003788663&rtpof=true&sd=true",
        dashboardUrl:
          "https://app.powerbi.com/view?r=eyJrIjoiNTI4N2U0NzYtY2M2NS00MzQyLThiZDAtZjE5MWFlNzZiNjY3IiwidCI6ImU3MWNiODkyLTg3NmQtNGM2YS1iZWJlLTI0OWU3YWVhMTA1ZiIsImMiOjEwfQ%3D%3D",
      },
    ],
  },
  {
    id: 4,
    name: "SIRRM",
    title: "Project 4",
    logo: "/slides/sirrm.jpeg",
    count: 2,
    subItems: [
      {
        name: "SIRRM Minority Rights Forum Monthly Meeting",
        dataUrl:
          "https://docs.google.com/spreadsheets/d/1QSmvs38K5ldAYRBEmrAcD-P4yqw6lUTP1CUkMWTBHws/edit?usp=sharing",
        dashboardUrl:
          "https://app.powerbi.com/view?r=eyJrIjoiM2EwNWMzMTgtNTIxOC00ODY4LWExNjgtMWIzMzYzNTc5MzRhIiwidCI6ImU3MWNiODkyLTg3NmQtNGM2YS1iZWJlLTI0OWU3YWVhMTA1ZiIsImMiOjEwfQ%3D%3D",
      },
      {
        name: "SIRRM Right Defenders Youth Group",
        dataUrl:
          "https://docs.google.com/spreadsheets/d/1V5kJJbTFZeLtLJXKaUAtRzrrLi2YZdZcU3HT4sJxN_k/edit?usp=sharing",
        dashboardUrl:
          "https://app.powerbi.com/view?r=eyJrIjoiNjJlMGUyNWQtY2E0Yy00YjI2LTliYWMtNjA1YmFjOTc1YmUyIiwidCI6ImU3MWNiODkyLTg3NmQtNGM2YS1iZWJlLTI0OWU3YWVhMTA1ZiIsImMiOjEwfQ%3D%3D",
      },
    ],
  },
  {
    id: 5,
    name: "FSTIP",
    title: "Project 5",
    logo: "/slides/fstip.jpeg",
    count: 4,
    subItems: [
      {
        name: "FSTIP Event",
        dataUrl:
          "https://docs.google.com/spreadsheets/d/1BH6mQIqqU4gOWmKirPxIysRPhgUtohIF/edit?usp=sharing&ouid=107556374060003788663&rtpof=true&sd=true",
        dashboardUrl:
          "https://app.powerbi.com/view?r=eyJrIjoiMDQ1YTliZGQtMzUyNi00OThmLWIwOGQtN2RjYjZiYzhkNGZlIiwidCI6ImU3MWNiODkyLTg3NmQtNGM2YS1iZWJlLTI0OWU3YWVhMTA1ZiIsImMiOjEwfQ%3D%3D",
      },
      {
        name: "FSTIP Peer Leader",
        dataUrl:
          "https://docs.google.com/spreadsheets/d/1i6YteC6fOTN26HhwzL0m4HXqkaqr2bHr/edit?usp=sharing&ouid=107556374060003788663&rtpof=true&sd=true",
        dashboardUrl:
          "https://app.powerbi.com/view?r=eyJrIjoiOWJiYjFkZDItZmVkNy00YjI5LThlNjMtMDU4OWYyMmE1MmRjIiwidCI6ImU3MWNiODkyLTg3NmQtNGM2YS1iZWJlLTI0OWU3YWVhMTA1ZiIsImMiOjEwfQ%3D%3D",
      },
      {
        name: "FSTIP Survivors",
        dataUrl:
          "https://docs.google.com/spreadsheets/d/1ty3k4Rk7LRxQ7BwDZB1FRkh7mMah4soU/edit?usp=sharing&ouid=107556374060003788663&rtpof=true&sd=true",
        dashboardUrl:
          "https://app.powerbi.com/view?r=eyJrIjoiOTllOGIzZWUtYzc0Yi00YzBkLTk1ZTUtYTkzYzg3YjRjMWJhIiwidCI6ImU3MWNiODkyLTg3NmQtNGM2YS1iZWJlLTI0OWU3YWVhMTA1ZiIsImMiOjEwfQ%3D%3D",
      },
      {
        name: "FSTIP Training",
        dataUrl:
          "https://docs.google.com/spreadsheets/d/15HM9sEGePvGG-3JTh3e8WxbQppEjwf0C/edit?usp=sharing&ouid=107556374060003788663&rtpof=true&sd=true",
        dashboardUrl:
          "https://app.powerbi.com/view?r=eyJrIjoiMmQzODAzYjctMjJkYS00NWJiLTg3NjEtZTIyZmI4MTI0OWUyIiwidCI6ImU3MWNiODkyLTg3NmQtNGM2YS1iZWJlLTI0OWU3YWVhMTA1ZiIsImMiOjEwfQ%3D%3D",
      },
    ],
  },
  {
    id: 6,
    name: "Grow School",
    title: "Project 6",
    logo: "/slides/grow-school.jpeg",
    count: 2,
    subItems: [
      {
        name: "Grow School Meeting with stakeholder Form",
        dataUrl:
          "https://docs.google.com/spreadsheets/d/12-y_OQf_IckTemR3Uj1nyX1VblNzwCgAmpWFJv-MhAk/edit?usp=sharing",
        dashboardUrl:
          "https://app.powerbi.com/view?r=eyJrIjoiZGVlMTI4ZTQtMzk1Yi00YTUzLWE2NDctOGE0OTc5ZmJjMGQ5IiwidCI6ImU3MWNiODkyLTg3NmQtNGM2YS1iZWJlLTI0OWU3YWVhMTA1ZiIsImMiOjEwfQ%3D%3D",
      },
      {
        name: "Grow School Student Profile and Educational Support Form",
        dataUrl:
          "https://docs.google.com/spreadsheets/d/1PbtFmYhwy9k-KReoeKYAgy9GLt-enGdK9Iz8UquFYY4/edit?usp=sharing",
        dashboardUrl:
          "https://app.powerbi.com/view?r=eyJrIjoiYmQzOTQzM2QtNTQ1OC00OGE5LThhNDgtMzZkYmI2ZTg0YzI2IiwidCI6ImU3MWNiODkyLTg3NmQtNGM2YS1iZWJlLTI0OWU3YWVhMTA1ZiIsImMiOjEwfQ%3D%3D",
      },
    ],
  },
  {
    id: 7,
    name: "BNF Bangladesh",
    title: "Project 7",
    logo: "/slides/logo7.svg",
    count: 1,
    subItems: [
      {
        name: "BNF Project IGA Support Form",
        dataUrl:
          "https://docs.google.com/spreadsheets/d/1y3dATczIK24hQvw2tNyjbMinCjGFprqnKxqyVMieEtE/edit?usp=sharing",
        dashboardUrl:
          "https://app.powerbi.com/view?r=eyJrIjoiYzEwZGQ4ZTQtYmIxYy00MGQyLTg1ZmYtMTI5MDk1YTI0NGUyIiwidCI6ImU3MWNiODkyLTg3NmQtNGM2YS1iZWJlLTI0OWU3YWVhMTA1ZiIsImMiOjEwfQ%3D%3D",
      },
    ],
  },
  {
    id: 8,
    name: "Sapath",
    title: "Project 8",
    logo: "/slides/sapath.jpeg  ",
    count: 0,
  },
  {
    id: 9,
    name: "ARC",
    title: "Project 9",
    logo: "/slides/logo9.svg",
    count: 1,
    subItems: [
      {
        name: "ARC Project- IGA Support Form",
        dataUrl:
          "https://docs.google.com/spreadsheets/d/1nM5NrSkQ7lhcezOchY4UlFxZ-tO6-rcd3k1ySNl__Ss/edit?usp=sharing",
        dashboardUrl:
          "https://app.powerbi.com/view?r=eyJrIjoiN2JlOTA0NDMtZWQ2NS00MzQ2LTljMWUtMTE2YWU0ZWU3YTU3IiwidCI6ImU3MWNiODkyLTg3NmQtNGM2YS1iZWJlLTI0OWU3YWVhMTA1ZiIsImMiOjEwfQ%3D%3D",
      },
    ],
  },
  {
    id: 10,
    name: "Jaagoron ",
    title: "Project 10",
    logo: "/slides/jagoron.jpeg",
    count: 0,
  },
];

const projectAccents = [
  {
    border: "border-t-4 border-green-500",
    title: "text-green-600",
    badge: "bg-green-100 text-green-700",
  },
  {
    border: "border-t-4 border-sky-500",
    title: "text-sky-600",
    badge: "bg-sky-100 text-sky-700",
  },
  {
    border: "border-t-4 border-amber-500",
    title: "text-amber-600",
    badge: "bg-amber-100 text-amber-700",
  },
  {
    border: "border-t-4 border-violet-500",
    title: "text-violet-600",
    badge: "bg-violet-100 text-violet-700",
  },
  {
    border: "border-t-4 border-rose-500",
    title: "text-rose-600",
    badge: "bg-rose-100 text-rose-700",
  },
  {
    border: "border-t-4 border-cyan-500",
    title: "text-cyan-600",
    badge: "bg-cyan-100 text-cyan-700",
  },
  {
    border: "border-t-4 border-indigo-500",
    title: "text-indigo-600",
    badge: "bg-indigo-100 text-indigo-700",
  },
  {
    border: "border-t-4 border-pink-500",
    title: "text-pink-600",
    badge: "bg-pink-100 text-pink-700",
  },
  {
    border: "border-t-4 border-teal-500",
    title: "text-teal-600",
    badge: "bg-teal-100 text-teal-700",
  },
  {
    border: "border-t-4 border-orange-500",
    title: "text-orange-600",
    badge: "bg-orange-100 text-orange-700",
  },
];

function MisDashboardPage({ onBack }) {
  const [activeProject, setActiveProject] = useState(null);

  if (activeProject) {
    return (
      <ProjectPage
        project={activeProject}
        onBack={() => setActiveProject(null)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <header className="bg-gradient-to-r from-green-700 via-emerald-600 to-teal-600 px-6 py-8 text-white shadow-lg sm:px-4 sm:py-6">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-100">
              Agrogoti Sangstha
            </p>
            <h1 className="text-3xl font-bold sm:text-2xl">MIS Dashboard</h1>
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

      <main className="mx-auto max-w-6xl px-6 py-14 sm:px-4 sm:py-10">
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3 max-lg:gap-6">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className={`flex flex-col items-center overflow-hidden rounded-xl bg-white p-5 pb-6 text-center shadow-lg transition-transform hover:-translate-y-1 hover:shadow-xl ${projectAccents[index].border}`}
            >
              <span
                className={`mb-3 rounded-full px-3 py-1 text-xs font-semibold ${projectAccents[index].badge}`}
              >
                {project.title}
              </span>
              <img
                src={project.logo}
                alt={project.name}
                className="mb-4 h-[140px] w-[140px] rounded-lg object-cover ring-2 ring-white"
              />
              <h3
                className={`mb-3 text-lg font-bold leading-snug ${projectAccents[index].title}`}
              >
                {project.name}
              </h3>
              <button
                type="button"
                onClick={() => setActiveProject(project)}
                className="rounded-full bg-gradient-to-r from-orange-500 to-rose-500 px-5 py-1.5 text-[13px] font-bold tracking-wide text-white transition-opacity hover:opacity-85"
              >
                Dashboard
              </button>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}

export default MisDashboardPage;
