import { Badge } from "@/components/ui/badge";

const About = () => {
  const skills = [
    "React", "TypeScript", "Next.js", "Node.js", "Python", "PostgreSQL",
    "Tailwind CSS", "Figma", "AWS", "Docker", "GraphQL", "MongoDB"
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate full-stack developer with over 5 years of experience 
                building modern web applications. I love creating clean, efficient code 
                and designing beautiful user interfaces that provide exceptional user experiences.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open-source projects, or sharing knowledge with the 
                developer community through blogs and speaking engagements.
              </p>

              <div className="pt-4">
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                  What I Do
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Full-Stack Web Development</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>UI/UX Design & Prototyping</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Mobile App Development</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Technical Consulting</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-6">
                  Technologies I Work With
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 px-3 py-1 text-sm font-medium"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 shadow-elegant">
                <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                  Quick Stats
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="font-display text-2xl font-bold text-primary">50+</div>
                    <div className="text-sm text-muted-foreground">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="font-display text-2xl font-bold text-primary">5+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="font-display text-2xl font-bold text-primary">30+</div>
                    <div className="text-sm text-muted-foreground">Happy Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="font-display text-2xl font-bold text-primary">24/7</div>
                    <div className="text-sm text-muted-foreground">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;