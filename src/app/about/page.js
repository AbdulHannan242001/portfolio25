import Banner from "../components/about/Banner";
import Experience from "../components/about/Experience";
import CTA from "../components/global/CTA";

export default function About() {
  return (
    <div className="space-y-32">
      <Banner />
      <Experience />
      <CTA />
    </div>
  );
}
