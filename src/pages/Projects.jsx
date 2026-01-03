import PageWrapper from "../components/PageWrapper";

const Projects = () => {
  return (
    <PageWrapper>
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-bold">Our Projects</h1>
          <p className="mt-4 text-gray-600">
            All projects at ACD Tech are designed around real-world product use
            cases, not random college assignments.
          </p>
        </div>

        <div className="mb-20 rounded-lg bg-gray-900 p-8">
          <h2 className="mb-4 text-2xl font-semibold">
            Our Core Project Domain
          </h2>
          <p className="text-gray-600">
            At ACD Tech, we focus on building{" "}
            <strong>
              business dashboards, admin systems, and AI-assisted applications
            </strong>
            . This helps students understand how real software companies design
            and maintain products.
          </p>
        </div>

        <div className="mb-20">
          <h2 className="mb-10 text-2xl font-semibold">
            Student Project Portfolio
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-lg border p-6">
              <h3 className="mb-3 text-lg font-semibold">
                Business Analytics Dashboard
              </h3>
              <p className="text-gray-600">
                A responsive admin dashboard to manage users, visualize
                analytics, and generate insights using charts and reports.
              </p>
            </div>

            <div className="rounded-lg border p-6">
              <h3 className="mb-3 text-lg font-semibold">
                Role-Based Management System
              </h3>
              <p className="text-gray-600">
                A system with different user roles such as admin, staff, and
                users, each having controlled access to features.
              </p>
            </div>

            <div className="rounded-lg border p-6">
              <h3 className="mb-3 text-lg font-semibold">
                AI-Powered Chat Interface
              </h3>
              <p className="text-gray-600">
                A modern chat UI integrated with AI logic to simulate
                intelligent conversations and assistance.
              </p>
            </div>

            <div className="rounded-lg border p-6">
              <h3 className="mb-3 text-lg font-semibold">
                Admin Panel for E-Commerce
              </h3>
              <p className="text-gray-600">
                An internal system to manage products, orders, users, and
                analytics for an e-commerce platform.
              </p>
            </div>

            <div className="rounded-lg border p-6">
              <h3 className="mb-3 text-lg font-semibold">
                Task & Team Management Tool
              </h3>
              <p className="text-gray-600">
                A project management tool to assign tasks, track progress, and
                collaborate within teams.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-gray-900 p-8">
          <h2 className="mb-6 text-2xl font-semibold">
            Project Synopsis Format (For Students)
          </h2>

          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>
              <strong>Project Title:</strong> Name of the project
            </li>
            <li>
              <strong>Problem Statement:</strong> What problem the project
              solves
            </li>
            <li>
              <strong>Objective:</strong> Purpose of building the project
            </li>
            <li>
              <strong>Technology Stack:</strong> React, Tailwind, Node, MongoDB,
              AI tools
            </li>
            <li>
              <strong>System Features:</strong> Key functionalities
            </li>
            <li>
              <strong>User Roles:</strong> Admin, user, staff (if applicable)
            </li>
            <li>
              <strong>Outcome:</strong> Skills and learning achieved
            </li>
          </ul>

          <p className="mt-4 text-gray-600">
            This format is provided to students for college submissions and
            academic evaluations.
          </p>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Projects;
