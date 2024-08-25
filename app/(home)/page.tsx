import { Hero } from "./_components/Hero";
import { Projects } from "./_components/Projects";
import { Skills } from "./_components/Skills";

export default function Home() {
  return (
    <div>
      <div className="mt-[5rem]"></div>
      <section id = "home">
        <Hero/>
        <Skills/>
      </section>
      <section id="projects" >
        <Projects/>
      </section>
    </div>
  );
}
