import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { CoreExpertise } from "@/components/CoreExpertise";
import { ProfessionalExperience } from "@/components/ProfessionalExperience";
import { Industries } from "@/components/Industries";
import { UVP } from "@/components/UVP";
import { Services } from "@/components/Services";
import { FounderBio } from "@/components/FounderBio";
import { Footer } from "@/components/Footer";
import { MouseGlow } from "@/components/effects/MouseGlow";

export default function Home() {
  return (
    <>
      <MouseGlow />
      <Header />
      <main>
        <Hero />
        <About />
        <CoreExpertise />
        <ProfessionalExperience />
        <Industries />
        <UVP />
        <Services />
        <FounderBio />
      </main>
      <Footer />
    </>
  );
}
