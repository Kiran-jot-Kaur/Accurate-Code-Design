import PageWrapper from "../components/PageWrapper";

const About = () => {
  return (
    
    <PageWrapper>
    <div className="mx-auto max-w-7xl px-6 py-20">

      <div className="mb-16 text-center">
        <h1 className="text-4xl font-bold text-white">About ACD Tech</h1>
        <p className="mt-4 text-gray-400">
          Accurate Code & Design – building skills for real-world
          frontend and AI-powered development.
        </p>
      </div>

      <div className="mb-20">
        <h2 className="mb-4 text-2xl font-semibold text-white">
          Who We Are
        </h2>
        <p className="text-gray-400 leading-relaxed border border-gray-200 rounded-lg p-4">
          ACD Tech is a training and development studio focused on
          frontend engineering, UI design, and AI-assisted development.
          We aim to prepare students for modern tech roles by combining
          structured learning with real product experience.
        </p>
      </div>

      <div className="mb-20 rounded-lg bg-gray-500 p-8">
        <h2 className="mb-4 text-2xl font-semibold text-white">
          Our Vision
        </h2>
        <p className="text-gray-900 leading-relaxed">
          Our vision is to create industry-ready engineers who understand
          not just how to write code, but how real software products are
          designed, built, and maintained in companies.
        </p>
      </div>

      <div className="mb-20">
        <h2 className="mb-4 text-2xl font-semibold text-white">
          Our Approach
        </h2>
        <ul className="list-disc pl-6 text-gray-400 space-y-2 border border-white rounded-lg p-4">
          <li>Focused training in frontend, UI, backend basics, and AI</li>
          <li>Product-based learning instead of random assignments</li>
          <li>Internship-style workflows and collaboration</li>
          <li>Practical exposure to real development practices</li>
        </ul>
      </div>

      <div className="rounded-lg bg-gray-500 p-8">
        <h2 className="mb-4 text-2xl font-semibold text-white">
          Why ACD Tech Exists
        </h2>
        <p className="text-gray-900 leading-relaxed">
          Many students complete courses but still feel unprepared for
          real jobs. ACD Tech was created to bridge this gap by focusing
          on practical skills, real projects, and industry-relevant
          learning rather than just certificates.
        </p>
      </div>

    </div>
    </PageWrapper>
  );
};

export default About;
