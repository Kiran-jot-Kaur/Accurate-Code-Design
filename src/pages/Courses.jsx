const Courses = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20">
      
      {/* Page Header */}
      <div className="mb-16 text-center">
        <h1 className="text-4xl font-bold">Our Courses</h1>
        <p className="mt-4 text-gray-600">
          Structured programs designed to build strong frontend,
          UI, backend, and AI-assisted development skills.
        </p>
      </div>

      {/* Course 1 */}
      <div className="mb-16 rounded-lg border p-8">
        <h2 className="text-2xl font-semibold">
          Frontend & UI Foundations
        </h2>
        <p className="mt-2 text-sm text-gray-500">
          Duration: 45 Days • Level: Beginner • Fee: ₹4,000
        </p>

        <p className="mt-4 text-gray-600">
          This course builds a strong foundation in frontend
          development and UI design for beginners.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          <ul className="list-disc pl-5 text-gray-600">
            <li>HTML & semantic structure</li>
            <li>CSS, SCSS & responsive layouts</li>
            <li>UI principles & design basics</li>
            <li>JavaScript fundamentals</li>
            <li>Mini UI project</li>
          </ul>

          <ul className="list-disc pl-5 text-gray-600">
            <li>Flexbox & Grid</li>
            <li>Forms & validations</li>
            <li>DOM manipulation</li>
            <li>Basic animations</li>
            <li>Project deployment</li>
          </ul>
        </div>
      </div>

      {/* Course 2 */}
      <div className="mb-16 rounded-lg border p-8">
        <h2 className="text-2xl font-semibold">
          AI-Powered Frontend Engineer
        </h2>
        <p className="mt-2 text-sm text-gray-500">
          Duration: 3 Months • Level: Intermediate • Fee: ₹12,000
        </p>

        <p className="mt-4 text-gray-600">
          A practical program focused on React, UI engineering,
          and using AI tools for efficient development.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          <ul className="list-disc pl-5 text-gray-600">
            <li>Advanced JavaScript (ES6+)</li>
            <li>React fundamentals & hooks</li>
            <li>Component-based architecture</li>
            <li>SCSS & Tailwind usage</li>
            <li>API integration</li>
          </ul>

          <ul className="list-disc pl-5 text-gray-600">
            <li>AI tools for coding & debugging</li>
            <li>UI animations (Framer Motion)</li>
            <li>Form handling & auth UI</li>
            <li>Project-based learning</li>
            <li>Deployment & best practices</li>
          </ul>
        </div>
      </div>

      {/* Course 3 */}
      <div className="rounded-lg border p-8">
        <h2 className="text-2xl font-semibold">
          AI Full Frontend + Backend (Internship Track)
        </h2>
        <p className="mt-2 text-sm text-gray-500">
          Duration: 6 Months • Level: Job-Oriented • Fee: ₹20,000
        </p>

        <p className="mt-4 text-gray-600">
          A complete program combining frontend, backend basics,
          AI integration, and real product internship experience.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          <ul className="list-disc pl-5 text-gray-600">
            <li>Advanced frontend engineering</li>
            <li>Design systems & UI workflows</li>
            <li>Backend with Node & Express</li>
            <li>MongoDB & APIs</li>
            <li>Authentication & roles</li>
          </ul>

          <ul className="list-disc pl-5 text-gray-600">
            <li>AI-assisted development</li>
            <li>Product-based projects</li>
            <li>Git & team collaboration</li>
            <li>Internship-style work</li>
            <li>Portfolio & interview prep</li>
          </ul>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-20 text-center">
        <a
          href="/contact"
          className="rounded-md bg-gray-600 px-5 py-2 text-sm font-medium text-white hover:bg-gray-800 transition-colors duration-200 inline-block"
        >
          Enroll or Get More Details
        </a>
      </div>

    </div>
  );
};

export default Courses;
