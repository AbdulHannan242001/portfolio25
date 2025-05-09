import CTA from "./components/global/CTA";
import Banner from "./components/home/Banner";
import Portfolio from "./components/home/Portfolio";
import TechStack from "./components/home/TechStack";

export default function Home() {
  return <div className="space-y-32">
      <Banner />
      <TechStack />
      <Portfolio />
      <CTA />
     </div>;
}
