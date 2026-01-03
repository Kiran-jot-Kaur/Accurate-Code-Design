const WhyACD = () => {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Section Title */}
        <div className="mb-14 text-center">
          <p className="text-sm uppercase tracking-wider text-gray-500">
            Why Choose Us
          </p>
          <h2 className="mt-2 text-3xl font-bold">
            Why ACD Tech
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          
          {/* Card 1 */}
          <div className="rounded-lg bg-gray-900 p-8 shadow-sm">
            <h3 className="mb-3 text-lg font-semibold">
              Product-Based Learning
            </h3>
            <p className="text-gray-600">
              We don’t teach random topics. Students learn by working on
              real-world products designed like actual company projects.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-lg bg-gray-900 p-8 shadow-sm">
            <h3 className="mb-3 text-lg font-semibold">
              AI-Integrated Training
            </h3>
            <p className="text-gray-600">
              We train students to use AI tools the right way for coding,
              debugging, design improvement, and faster learning.
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-lg bg-gray-900 p-8 shadow-sm">
            <h3 className="mb-3 text-lg font-semibold">
              Internship-Oriented Approach
            </h3>
            <p className="text-gray-600">
              Our training is aligned with internships, so students gain
              practical experience instead of just certificates.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyACD;
