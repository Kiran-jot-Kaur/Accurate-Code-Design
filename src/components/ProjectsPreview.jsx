const ProjectsPreview = () => {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <p className="text-sm uppercase tracking-wider text-gray-500">
            Product-Based Learning
          </p>
          <h2 className="mt-2 text-3xl font-bold">Projects You Will Work On</h2>
          <p className="mt-4 text-gray-600">
            Students don’t work on random websites. Each project is designed to
            match real industry use cases.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="rounded-lg border p-8 hover:shadow-md transition">
            <h3 className="mb-3 text-lg font-semibold">
              Business Admin Dashboard
            </h3>
            <p className="text-gray-600">
              A complete admin panel with authentication, user roles, analytics
              charts, and responsive UI built using React and backend APIs.
            </p>
          </div>

          <div className="rounded-lg border p-8 hover:shadow-md transition">
            <h3 className="mb-3 text-lg font-semibold">
              AI-Powered Chat Interface
            </h3>
            <p className="text-gray-600">
              A modern chat UI integrated with AI logic to simulate real-time
              conversations, message handling, and smart responses.
            </p>
          </div>

          <div className="rounded-lg border p-8 hover:shadow-md transition">
            <h3 className="mb-3 text-lg font-semibold">
              Role-Based Management System
            </h3>
            <p className="text-gray-600">
              A system where different users (admin, staff, user) have
              controlled access, permissions, and dashboards.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="/projects"
            className="rounded-md border border-white inline-flex items-center justify-center px-2 py-2 md:px-4 text-sm font-medium text-white hover:bg-white hover:text-black"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPreview;
