const CoursesPreview = () => {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <p className="text-sm uppercase tracking-wider text-gray-500">
            Our Programs
          </p>
          <h2 className="mt-2 text-3xl font-bold">Courses We Offer</h2>
          <p className="mt-4 text-gray-600">
            Industry-focused training designed to build real skills, not just
            certificates.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="rounded-lg border p-8 hover:shadow-md transition">
            <h3 className="mb-2 text-lg font-semibold">
              Frontend & UI Foundations
            </h3>
            <p className="mb-4 text-sm text-gray-600">
              45 Days • Beginner Friendly
            </p>
            <p className="text-gray-600">
              Learn HTML, CSS, SCSS, JavaScript and UI fundamentals to build
              responsive and clean interfaces.
            </p>
          </div>

          <div className="rounded-lg border p-8 hover:shadow-md transition">
            <h3 className="mb-2 text-lg font-semibold">
              AI-Powered Frontend Engineer
            </h3>
            <p className="mb-4 text-sm text-gray-600">
              3 Months • Intermediate
            </p>
            <p className="text-gray-600">
              Master React, UI engineering, animations, and learn to use AI
              tools for faster development and debugging.
            </p>
          </div>

          <div className="rounded-lg border p-8 hover:shadow-md transition">
            <h3 className="mb-2 text-lg font-semibold">
              AI Full Frontend + Backend (Internship)
            </h3>
            <p className="mb-4 text-sm text-gray-600">
              6 Months • Job-Oriented
            </p>
            <p className="text-gray-600">
              Work on real products with frontend, backend basics, AI
              integration, and internship-style experience.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="/courses"
            className="rounded-md border border-white inline-flex items-center justify-center px-2 py-2 md:px-4 text-sm font-medium text-white hover:bg-white hover:text-black"
          >
            View Full Course Details
          </a>
        </div>
      </div>
    </section>
  );
};

export default CoursesPreview;
