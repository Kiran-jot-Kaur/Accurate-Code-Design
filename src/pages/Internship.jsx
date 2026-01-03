const Internship = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20">

      {/* Page Header */}
      <div className="mb-16 text-center">
        <h1 className="text-4xl font-bold">Internship Program</h1>
        <p className="mt-4 text-gray-600">
          Our internship program is designed to give students real
          product experience in a company-like environment.
        </p>
      </div>

      {/* How It Works */}
      <div className="mb-20">
        <h2 className="mb-8 text-2xl font-semibold">
          How Our Internship Works
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">

          <div className="rounded-lg border p-6">
            <span className="text-sm font-semibold text-gray-400">
              Step 01
            </span>
            <h3 className="mt-3 mb-2 text-lg font-semibold">
              Skill Readiness
            </h3>
            <p className="text-gray-600">
              Students first complete required training modules to
              ensure they are ready for real project work.
            </p>
          </div>

          <div className="rounded-lg border p-6">
            <span className="text-sm font-semibold text-gray-400">
              Step 02
            </span>
            <h3 className="mt-3 mb-2 text-lg font-semibold">
              Product Assignment
            </h3>
            <p className="text-gray-600">
              Interns are assigned to internal company products
              based on their skill level and interests.
            </p>
          </div>

          <div className="rounded-lg border p-6">
            <span className="text-sm font-semibold text-gray-400">
              Step 03
            </span>
            <h3 className="mt-3 mb-2 text-lg font-semibold">
              Team Collaboration
            </h3>
            <p className="text-gray-600">
              Interns work in small teams, use Git, receive reviews,
              and follow real development workflows.
            </p>
          </div>

          <div className="rounded-lg border p-6">
            <span className="text-sm font-semibold text-gray-400">
              Step 04
            </span>
            <h3 className="mt-3 mb-2 text-lg font-semibold">
              Internship Experience
            </h3>
            <p className="text-gray-600">
              Interns gain hands-on experience, project ownership,
              and exposure to real-world development practices.
            </p>
          </div>

        </div>
      </div>

      {/* What Students Will Do */}
      <div className="mb-20">
        <h2 className="mb-8 text-2xl font-semibold">
          What Interns Will Work On
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 border border-gray-200 rounded-lg p-6">
          <ul className="list-disc pl-6 text-gray-600">
            <li>Frontend UI development using React</li>
            <li>Building responsive and accessible interfaces</li>
            <li>Working with APIs and backend data</li>
            <li>Using AI tools for coding and debugging</li>
            <li>Understanding product requirements</li>
          </ul>

          <ul className="list-disc pl-6 text-gray-600">
            <li>Fixing bugs and improving UI performance</li>
            <li>Collaborating using Git and version control</li>
            <li>Participating in code reviews</li>
            <li>Learning deployment basics</li>
            <li>Documenting project work</li>
          </ul>
        </div>
      </div>

      {/* Eligibility */}
      <div className="mb-20 rounded-lg bg-gray-900 p-8">
        <h2 className="mb-4 text-2xl font-semibold">
          Eligibility & Selection
        </h2>
        <p className="mb-4 text-gray-600">
          Internship opportunities are offered to students who
          demonstrate commitment, learning progress, and
          discipline during training.
        </p>
        <p className="text-gray-600">
          Selection is based on performance, not on certificates
          or fees.
        </p>
      </div>

      {/* CTA */}
      <div className="text-center">
        <a
          href="/contact"
          className="rounded-md bg-gray-600 px-6 py-3 text-sm font-medium text-white hover:bg-gray-800 transition-colors duration-200 inline-block"
        >
          Apply for Internship Program
        </a>
      </div>

    </div>
  );
};

export default Internship;
