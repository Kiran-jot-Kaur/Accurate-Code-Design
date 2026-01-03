import whiteLogo from "../assets/whiteLogo.svg";

const Banner = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 pt-28 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          <div className="flex items-center text-left gap-1 space-x-1">
            <img src={whiteLogo} alt="ACD Logo" className="h-24 w-auto" />
            <div>
              <h2 className="text-4xl font-bold tracking-wide text-white">ACD</h2>
              <p className="mt-2 text-sm tracking-widest text-gray-400">
                ACCURATE CODE & DESIGN
              </p>
            </div>
          </div>

          <div>
            <p className="mb-3 text-sm uppercase tracking-wider text-gray-400">
              Training • Internships • Real Product Experience
            </p>

            <h1 className="text-4xl font-bold leading-tight text-white">
              AI-Powered Frontend & UI Engineering
            </h1>

            <p className="mt-4 text-gray-500">
              Learn. Build. Intern on real products designed for modern tech
              companies.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="/courses"
                className="inline-flex items-center justify-center rounded-md bg-gray-500 px-2 py-3 md:px-4 text-sm font-medium text-white hover:bg-gray-800 transition-colors duration-200"
              >
                View Courses
              </a>

              <a
                href="/contact"
                className="rounded-md border border-white inline-flex items-center justify-center px-2 py-3 md:px-4 text-sm font-medium text-white hover:bg-white hover:text-black"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
