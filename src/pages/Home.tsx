import Hero from "../components/Hero";
import Section1 from "../components/HomeSections/Section1";
import Section2 from "../components/HomeSections/Section2";

export default function Home() {
  return (
    <div className="h-auto bg-[#dae6f6] ">
      <Hero />
      <Section1 />
      <Section2 />
    </div>
  )
}
