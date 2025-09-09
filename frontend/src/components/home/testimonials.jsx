import { motion } from "framer-motion";
import { Card, CardContent } from "../ui/CardOne";
import { Avatar, AvatarFallback } from "../ui/Avatar";
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: "vincent",
    name: "Mazi Vincent",
    position: "Manager ListaccTech Academy",
    relation: "Mentor",
    date: "January 20, 2025",
    quote:
      "Christian has consistently demonstrated a strong work ethic, technical proficiency, and exceptional leadership skills throughout his tenure learning and teaching coding. As a trainer in ListaccTech academy, Christian played a pivotal role in organizing and training senior developers.",
  },
  {
    id: "jerry",
    name: "Jerry Anayo N",
    position: "Founder Konvey.app",
    relation: "Client",
    date: "May 1, 2025",
    quote:
      "I am pleased to recommend Christian for his exceptional technical and leadership skills. As a Client, he oversaw technical operations using advanced methodologies to achieve project milestones and foster innovation.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-12 md:py-24 relative overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Recommendations
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
            What mentors and colleagues say about my work
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <Quote className="h-10 w-10 text-primary/20 mb-4" />

                  <p className="italic text-muted-foreground mb-6">
                    "{testimonial.quote}"
                  </p>

                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12 border-2 border-primary/20">
                      <AvatarFallback className="bg-primary/10 text-primary">
                        {testimonial.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.position}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {testimonial.relation} • {testimonial.date}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
