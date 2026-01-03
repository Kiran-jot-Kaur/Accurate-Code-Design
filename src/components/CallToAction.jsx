const CallToAction = () => {
  return (
    <section className="bg-black py-16 text-white">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h2 className="text-3xl font-bold text-white">Start Your Journey with ACD Tech</h2>

        <p className="mt-4 text-gray-300">
          Learn industry-relevant skills, work on real products, and gain
          practical experience through our structured training and internship
          programs.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="/courses"
            className="rounded-md inline-flex items-center justify-center bg-white px-2 py-3 md:px-4 text-sm font-medium text-black hover:bg-gray-200"
          >
            Explore Courses
          </a>

          <a
            href="/contact"
            className="rounded-md border border-white inline-flex items-center justify-center px-2 py-3 md:px-4 text-sm font-medium text-white hover:bg-white hover:text-black"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
