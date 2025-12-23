import Header from "@/components/Header";
import Intro from "@/components/Intro";
import TechStack from "@/components/TechStack";
import SocialLinks from "@/components/SocialLinks";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4">
      <Header />
      <TechStack />
      <Intro />
      <SocialLinks />
    </main>
  );
}
