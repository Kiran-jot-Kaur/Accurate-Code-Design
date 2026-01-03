import Banner from "../components/Banner";
import CallToAction from "../components/CallToAction";
import CoursesPreview from "../components/CoursesPreview";
import InternshipModel from "../components/InternshipModel";
import ProjectsPreview from "../components/ProjectsPreview";
import WhyACD from "../components/WhyACD";

const Home = () => {
  return (
    <div className="bg-black">
      <Banner />
      <WhyACD />
      <CoursesPreview />
      <InternshipModel />
      <ProjectsPreview />
      <CallToAction />  
    </div>
  );
};

export default Home;
