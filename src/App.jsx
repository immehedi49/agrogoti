import { useEffect, useState } from "react";

const slides = [
  { src: "/slides/slide1.jpg", alt: "Slide 1" },
  { src: "/slides/slide2.jpg", alt: "Slide 2" },
];

const programs = [
  {
    title: "Climate Change and Adaptation",
    description:
      "Creating opportunities for women to become leaders in their communities.",
    image: "/slides/slide1.jpg",
  },
  {
    title: "Human Rights",
    description:
      "Improving access to healthcare services and promoting healthy living practices.",
    image: "/slides/slide2.jpg",
  },
  {
    title: "Child Rights",
    description:
      "Supporting sustainable farming practices and food security initiatives.",
    image: "/slides/slide1.jpg",
  },
  {
    title: "Good Governance",
    description:
      "Providing quality education and skills training to empower future generations.",
    image: "/slides/slide2.jpg",
  },
  {
    title: "Health and Rights",
    description:
      "Creating opportunities for women to become leaders in their communities.",
    image: "/slides/slide1.jpg",
  },
];

const navBtnPrimaryClass =
  "cursor-pointer rounded-lg border-2 border-white/30 bg-green-600 px-5 py-2.5 text-[15px] font-semibold text-white shadow-md transition-all hover:bg-green-700 hover:shadow-lg sm:px-3.5 sm:py-2 sm:text-sm";

const navBtnSecondaryClass =
  "cursor-pointer rounded-lg border-2 border-white/30 bg-orange-500 px-5 py-2.5 text-[15px] font-semibold text-white shadow-md transition-all hover:bg-orange-600 hover:shadow-lg sm:px-3.5 sm:py-2 sm:text-sm";

const programAccents = [
  { border: "border-t-4 border-green-500", title: "text-green-600", badge: "bg-green-100 text-green-700" },
  { border: "border-t-4 border-sky-500", title: "text-sky-600", badge: "bg-sky-100 text-sky-700" },
  { border: "border-t-4 border-amber-500", title: "text-amber-600", badge: "bg-amber-100 text-amber-700" },
  { border: "border-t-4 border-violet-500", title: "text-violet-600", badge: "bg-violet-100 text-violet-700" },
  { border: "border-t-4 border-rose-500", title: "text-rose-600", badge: "bg-rose-100 text-rose-700" },
];

const footerLinkClass =
  "text-sm text-white/90 no-underline transition-colors hover:text-amber-300";

const footerIconClass = "h-5 w-5 shrink-0 text-orange-400";

const socialLinkClass =
  "flex h-9 w-9 items-center justify-center rounded-full text-white transition-transform hover:scale-110";

function App() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index) => setCurrent(index);
  const goPrev = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  const goNext = () => setCurrent((prev) => (prev + 1) % slides.length);

  return (
    <div className="flex min-h-svh flex-col bg-gradient-to-b from-emerald-50 to-white">
      <header className="bg-gradient-to-r from-green-600 via-emerald-500 to-teal-500 px-6 py-4 shadow-lg sm:px-4 sm:py-3">
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-3">
          <a href="/" className="flex items-center gap-2.5 no-underline">
            <img
              src="/slides/logo.png"
              alt="Agrogoti logo"
              className="h-12 w-auto max-w-36 object-contain rounded-lg bg-white/90 p-1 shadow sm:h-10 sm:max-w-32"
            />
            <span className="bg-gradient-to-r from-white to-amber-100 bg-clip-text text-lg font-bold text-transparent sm:text-base">
              Agrogoti Shongshtha
            </span>
          </a>
          <nav className="flex gap-3">
            <button type="button" className={navBtnPrimaryClass}>
              button1
            </button>
            <button type="button" className={navBtnSecondaryClass}>
              button2
            </button>
          </nav>
        </div>
      </header>

      <section
        className="relative h-[420px] overflow-hidden bg-gradient-to-br from-green-400 via-teal-400 to-sky-400 sm:h-[280px]"
        aria-label="Image slideshow"
      >
        <div className="relative h-full w-full">
          {slides.map((slide, index) => (
            <img
              key={slide.src}
              src={slide.src}
              alt={slide.alt}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[600ms] ease-in-out ${
                index === current
                  ? "pointer-events-auto opacity-100"
                  : "pointer-events-none opacity-0"
              }`}
            />
          ))}
        </div>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-green-900/30 via-transparent to-orange-500/20" />

        <button
          type="button"
          className="absolute top-1/2 left-4 z-10 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border-2 border-white bg-green-500 text-[28px] leading-none text-white shadow-lg transition-all hover:scale-105 hover:bg-green-600 sm:h-9 sm:w-9 sm:text-[22px]"
          onClick={goPrev}
          aria-label="Previous slide"
        >
          ‹
        </button>
        <button
          type="button"
          className="absolute top-1/2 right-4 z-10 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border-2 border-white bg-orange-500 text-[28px] leading-none text-white shadow-lg transition-all hover:scale-105 hover:bg-orange-600 sm:h-9 sm:w-9 sm:text-[22px]"
          onClick={goNext}
          aria-label="Next slide"
        >
          ›
        </button>

        <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 gap-2.5">
          {slides.map((slide, index) => (
            <button
              key={slide.src}
              type="button"
              className={`h-3 w-3 cursor-pointer rounded-full border-2 border-white p-0 transition-[background,transform] duration-200 ${
                index === current
                  ? "scale-125 bg-amber-400"
                  : "bg-white/40 hover:bg-white/70"
              }`}
              onClick={() => goTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-br from-green-50 via-amber-50 to-sky-50 px-6 py-14 pb-16 text-center sm:px-4 sm:py-10 sm:pb-12">
        <h2 className="mb-2.5 bg-gradient-to-r from-green-600 via-emerald-500 to-teal-500 bg-clip-text text-[32px] font-bold tracking-tight text-transparent sm:text-[26px]">
          Our Programs
        </h2>
        <p className="mb-10 text-base font-medium text-teal-700/80">
          Comprehensive solutions for community development
        </p>

        <div className="mx-auto grid max-w-[1100px] grid-cols-6 gap-7 max-md:grid-cols-2 max-sm:grid-cols-1 max-sm:gap-5">
          {programs.map((program, index) => (
            <article
              key={program.title}
              className={`col-span-2 flex flex-col items-center overflow-hidden rounded-xl bg-white p-5 pb-6 text-center shadow-lg transition-transform hover:-translate-y-1 hover:shadow-xl max-md:col-span-1 max-sm:col-span-1 ${programAccents[index].border} ${
                index === 3 ? "max-md:col-start-auto md:col-start-2" : ""
              } ${index === 4 ? "max-md:col-span-full max-md:max-w-[360px] max-md:justify-self-center max-sm:max-w-none md:col-start-4" : ""}`}
            >
              <span className={`mb-3 rounded-full px-3 py-1 text-xs font-semibold ${programAccents[index].badge}`}>
                Program {index + 1}
              </span>
              <img
                src={program.image}
                alt={program.title}
                className="mb-4.5 h-[180px] w-full rounded-lg object-cover ring-2 ring-white sm:h-[200px]"
              />
              <h3 className={`mb-2.5 text-lg font-bold leading-snug ${programAccents[index].title}`}>
                {program.title}
              </h3>
              <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-600">
                {program.description}
              </p>
              <a
                href="#"
                className="rounded-full bg-gradient-to-r from-orange-500 to-rose-500 px-4 py-1.5 text-[13px] font-bold tracking-wide text-white no-underline transition-opacity hover:opacity-85"
              >
                LEARN MORE
              </a>
            </article>
          ))}
        </div>
      </section>

      <footer className="bg-gradient-to-br from-gray-900 via-green-950 to-emerald-900 text-white">
        <div className="mx-auto grid max-w-[1100px] grid-cols-[1.4fr_1fr_1fr_1.2fr] gap-10 px-6 py-12 pb-10 max-md:grid-cols-2 max-md:gap-8 max-sm:grid-cols-1 max-sm:gap-7 max-sm:px-4 max-sm:py-9 max-sm:pb-8">
          <div className="max-md:col-span-full">
            <img
              src="/slides/logo.png"
              alt="Agrogoti Sangstha"
              className="mb-4 h-14 w-auto object-contain"
            />
            <p className="mb-5 max-w-[260px] text-sm leading-relaxed text-white/85 max-sm:max-w-none">
              Empowering communities for sustainable development and social
              change.
            </p>
            <div className="flex gap-3.5">
              <a href="#" aria-label="Facebook" className={`${socialLinkClass} bg-blue-600 hover:bg-blue-500`}>
                <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                  <path
                    d="M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07c0 6.02 4.39 11.01 10.13 11.93v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.23 2.68.23v2.96h-1.51c-1.49 0-1.95.93-1.95 1.88v2.26h3.32l-.53 3.49h-2.79v8.44C19.61 23.08 24 18.09 24 12.07z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a href="#" aria-label="Twitter" className={`${socialLinkClass} bg-sky-500 hover:bg-sky-400`}>
                <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                  <path
                    d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className={`${socialLinkClass} bg-gradient-to-br from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-400`}>
                <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                  <path
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a href="#" aria-label="YouTube" className={`${socialLinkClass} bg-red-600 hover:bg-red-500`}>
                <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                  <path
                    d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4.5 text-base font-bold text-amber-400">
              Quick Links
            </h3>
            <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
              <li>
                <a href="#" className={footerLinkClass}>
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className={footerLinkClass}>
                  Our Programs
                </a>
              </li>
              <li>
                <a href="#" className={footerLinkClass}>
                  Get Involved
                </a>
              </li>
              <li>
                <a href="#" className={footerLinkClass}>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4.5 text-base font-bold text-emerald-400">
              Programs
            </h3>
            <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
              <li>
                <a href="#" className={footerLinkClass}>
                  Education
                </a>
              </li>
              <li>
                <a href="#" className={footerLinkClass}>
                  Healthcare
                </a>
              </li>
              <li>
                <a href="#" className={footerLinkClass}>
                  Agriculture
                </a>
              </li>
              <li>
                <a href="#" className={footerLinkClass}>
                  Women Empowerment
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4.5 text-base font-bold text-orange-400">
              Contact Info
            </h3>
            <ul className="m-0 flex list-none flex-col gap-3.5 p-0">
              <li className="flex items-start gap-2.5 text-sm leading-normal text-white/85">
                <svg
                  viewBox="0 0 24 24"
                  className={footerIconClass}
                  aria-hidden="true"
                >
                  <path
                    d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"
                    fill="currentColor"
                  />
                </svg>
                <span>Trish Mile Bazar, Nagorghata Satkhira, Bangladesh</span>
              </li>
              <li className="flex items-start gap-2.5 text-sm leading-normal text-white/85">
                <svg
                  viewBox="0 0 24 24"
                  className={footerIconClass}
                  aria-hidden="true"
                >
                  <path
                    d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.36 11.36 0 003.56.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.56 1 1 0 01-.25 1.01l-2.2 2.22z"
                    fill="currentColor"
                  />
                </svg>
                <span>+880 1715-608864</span>
              </li>
              <li className="flex items-start gap-2.5 text-sm leading-normal text-white/85">
                <svg
                  viewBox="0 0 24 24"
                  className={footerIconClass}
                  aria-hidden="true"
                >
                  <path
                    d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                    fill="currentColor"
                  />
                </svg>
                <span>agrogoti@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-emerald-700/50 bg-black/20 px-6 py-5 text-center max-sm:px-4">
          <p className="m-0 text-[13px] text-emerald-200/80">
            © 2025 Agrogoti Sangstha. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
