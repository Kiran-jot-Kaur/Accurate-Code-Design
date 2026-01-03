import Banner from "../components/Banner";
import CallToAction from "../components/CallToAction";
import CoursesPreview from "../components/CoursesPreview";
import InternshipModel from "../components/InternshipModel";
import PageWrapper from "../components/PageWrapper";
import ProjectsPreview from "../components/ProjectsPreview";
import WhyACD from "../components/WhyACD";

const Home = () => {
  return (
    <div className="bg-black">
      <PageWrapper>
        <Banner />
        <WhyACD />
        <CoursesPreview />
        <InternshipModel />
        <ProjectsPreview />
        <CallToAction />
      </PageWrapper>
    </div>
  );
};

export default Home;
