import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button1";
import { Separator } from "../components/ui/Separator";
import { Badge } from "../components/ui/Badget";
import { useParams, useNavigate } from "react-router-dom";
import projects from "../data/projects"; // make sure this path is correct

export function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find the project by ID from your data file
  const project = projects.find((p) => p.id.toString() === id);

  if (!project) {
    return (
      <div className="container px-4 md:px-6 mx-auto">
        <p className="text-red-500">Project not found</p>
        <Button variant="ghost" className="mt-4" onClick={() => navigate(-1)}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Projects
        </Button>
      </div>
    );
  }

  return (
    <div className="container px-4 md:px-6 mx-auto">
      <Button variant="ghost" className="mb-6" onClick={() => navigate(-1)}>
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Projects
      </Button>

      <div className="grid gap-6 lg:grid-cols-[2fr_1fr] lg:gap-12">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              {project.title}
            </h1>

            {project.image && (
              <div className="rounded-lg overflow-hidden mb-6 relative">
                <div className="aspect-video w-full relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover object-top w-full h-full"
                  />
                </div>
              </div>
            )}

            <p className="text-xl text-muted-foreground mb-8">
              {project.description}
            </p>

            <div className="prose max-w-none">
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="mb-6">{project.longDescription || project.description}</p>

              <h2 className="text-2xl font-bold mb-4">Achievements</h2>
              <ul className="space-y-2 mb-6">
                {project.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-2 font-bold">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-muted rounded-lg p-6 sticky top-24"
          >
            <h2 className="text-xl font-bold mb-4">Project Details</h2>
            <Separator className="my-4" />

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <Separator className="my-4" />

              <div className="flex flex-col gap-2">
                <h3 className="font-semibold">Links</h3>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-500 hover:underline"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    GitHub Repository
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-500 hover:underline"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}