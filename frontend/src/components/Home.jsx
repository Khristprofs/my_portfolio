import React from "react";
import Hero from "../components/home/Hero";
import FeaturedProjects from "../components/home/featuredProject";
import SkillsShowcase from "../components/home/technicalSkills";
import Achievements from "../components/home/achievements";
import Testimonials from "../components/home/testimonials";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <FeaturedProjects />
      <SkillsShowcase />
      <Achievements />
      <Testimonials />
    </div>
  );
}