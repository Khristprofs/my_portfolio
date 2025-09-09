"use client";

import { motion } from "framer-motion";
import { Trophy, Medal, Award, Code, Cpu, Gamepad, Zap, BookOpen } from "lucide-react";
import { Card, CardContent } from "../../components/ui/CardOne";
import { Badge } from "../../components/ui/Badget";

const achievements = [
  {
    icon: <Code className="h-6 w-6" />,
    title: "Trainer (Frontend Web Development) ListaccTech Academy",
    colorClass: "text-teal-600 dark:text-teal-400",
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: "Certificate of participation Ebonyi Hackathon",
    colorClass: "text-teal-600 dark:text-teal-400",
  },
];

export default function Achievements() {
  return (
    <section className="py-12 md:py-24 bg-muted/30 relative overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Achievements
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
            Recognition and milestones from my technical journey
          </p>
        </motion.div>
        
        <div className="mt-12 flex flex-wrap gap-4 justify-center">
          {achievements.map((achievement, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                type: "spring", 
                stiffness: 100,
                damping: 15
              }}
              className="w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.75rem)]"
            >
              <Card className="h-full border-2 hover:border-primary transition-all duration-300">
                <CardContent className="p-4 flex items-center gap-3">
                  <div className={`${achievement.colorClass} shrink-0`}>
                    {achievement.icon}
                  </div>
                  <div className="text-left">
                    <p className="font-medium">{achievement.title}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-10 inline-flex flex-wrap justify-center gap-2">
          <Badge variant="secondary" className="text-sm py-1.5 px-3">Technical Leadership</Badge>
          <Badge variant="secondary" className="text-sm py-1.5 px-3">Hackathon Winner</Badge>
          <Badge variant="secondary" className="text-sm py-1.5 px-3">Research</Badge>
        </div>
      </div>
    </section>
  );
}
