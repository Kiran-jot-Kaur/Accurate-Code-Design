const InternshipModel = () => {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <p className="text-sm uppercase tracking-wider text-gray-500">
            Internship Model
          </p>
          <h2 className="mt-2 text-3xl font-bold">
            Learn Like a Company Intern
          </h2>
          <p className="mt-4 text-gray-600">
            Our training seamlessly transitions into internship-style product
            development.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="rounded-lg bg-gray-900 p-6 shadow-sm">
            <span className="text-sm font-semibold text-gray-400">Step 01</span>
            <h3 className="mt-3 mb-2 text-lg font-semibold">Skill Training</h3>
            <p className="text-gray-600">
              Students build strong foundations in frontend, UI, backend basics,
              and AI-assisted development.
            </p>
          </div>

          <div className="rounded-lg bg-gray-900  p-6 shadow-sm">
            <span className="text-sm font-semibold text-gray-400">Step 02</span>
            <h3 className="mt-3 mb-2 text-lg font-semibold">Product Work</h3>
            <p className="text-gray-600">
              Learners work on internal company products following real-world
              development practices.
            </p>
          </div>

          <div className="rounded-lg bg-gray-900  p-6 shadow-sm">
            <span className="text-sm font-semibold text-gray-400">Step 03</span>
            <h3 className="mt-3 mb-2 text-lg font-semibold">
              Team Collaboration
            </h3>
            <p className="text-gray-600">
              Students use Git, collaborate in teams, receive reviews, and
              follow professional workflows.
            </p>
          </div>

          <div className="rounded-lg bg-gray-900  p-6 shadow-sm">
            <span className="text-sm font-semibold text-gray-400">Step 04</span>
            <h3 className="mt-3 mb-2 text-lg font-semibold">
              Internship Experience
            </h3>
            <p className="text-gray-600">
              Top-performing students gain internship experience with real
              responsibilities and project ownership.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternshipModel;
