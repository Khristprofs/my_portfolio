import { Link } from "react-router-dom";
import { ArrowRight, Github, ExternalLink } from "lucide-react";
import { Button } from "../components/ui/button1";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/CardOne";
import { Badge } from "../components/ui/Badget";

export function ProjectCard({ project }) {
  return (
    <Card className="h-full flex flex-col overflow-hidden border-2 transition-all hover:border-primary">
      {project.image && (
        <div className="aspect-video overflow-hidden relative w-full">
          <img
            src={project.image}
            alt={project.title}
            className="object-cover object-top w-full h-full"
          />
        </div>
      )}

      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>

      <CardContent className="flex-1">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 4).map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 4 && (
            <Badge variant="outline">+{project.technologies.length - 4}</Badge>
          )}
        </div>

        <ul className="space-y-2 text-sm text-muted-foreground">
          {project.achievements.slice(0, 2).map((achievement, i) => (
            <li key={i} className="flex items-start">
              <ArrowRight className="mr-2 h-4 w-4 text-primary mt-0.5 shrink-0" />
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter className="flex gap-2">
        <Button asChild variant="default" size="sm">
          <Link to={`/projects/${project.id}`}>
            View Details
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>

        <div className="flex-1" />

        {project.github && (
          <Button asChild variant="ghost" size="icon">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
          </Button>
        )}

        {project.liveUrl && (
          <Button asChild variant="ghost" size="icon">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Live Demo"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}

export default ProjectCard;