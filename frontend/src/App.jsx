import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout"
import Home from "./components/Home"
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Project from "./components/Projects";
import { ProjectDetails } from "./components/ProjectDetails";
import BlogPage from "./components/Blog";
import { StarsCanvas } from "./context/starBackground"
import { BlackHoleVideo } from "./context/blackHoleVideo"

function App() {

  return (
    <div>
      {/* Background stars appear everywhere (only in dark mode) */}
      <BlackHoleVideo />
      <StarsCanvas />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path="/blog" element={<BlogPage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App;