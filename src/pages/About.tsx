import { motion } from "framer-motion";
import { Brain, Users, Target, Lightbulb, Award, Rocket } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  const values = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Innovation",
      description: "We leverage cutting-edge AI technology to revolutionize how people visualize and understand information."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Accessibility",
      description: "Making powerful mind mapping tools accessible to everyone, regardless of technical expertise."
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Simplicity",
      description: "Complex documents simplified into clear, actionable visual representations in seconds."
    }
  ];

  const stats = [
    { number: "10K+", label: "Mind Maps Created" },
    { number: "500+", label: "Happy Users" },
    { number: "15+", label: "File Formats" },
    { number: "99.9%", label: "Uptime" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="min-h-screen py-32">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto mb-32"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <div className="inline-flex items-center space-x-2 glass-card px-4 py-2 mb-8">
              <Lightbulb className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Our Story</span>
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold mb-8"
          >
            Transforming Ideas Into
            <span className="gradient-text block">Visual Understanding</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            MindMap Genius was born from a simple observation: the human brain 
            processes visual information 60,000 times faster than text. We're 
            on a mission to unlock the power of visual thinking for everyone.
          </motion.p>
        </motion.div>

        {/* Mission Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <div className="glass-card-hero p-12 max-w-5xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              <div className="p-4 rounded-2xl bg-gradient-primary">
                <Rocket className="h-12 w-12 text-white" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Our Mission</h2>
            <p className="text-lg text-muted-foreground text-center leading-relaxed">
              To democratize visual thinking by providing powerful, AI-driven tools 
              that transform complex information into clear, actionable insights. 
              We believe that when information is presented visually, learning becomes 
              faster, retention improves, and creativity flourishes.
            </p>
          </div>
        </motion.section>

        {/* Values Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-32"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="gradient-text">Core Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do and build.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="glass-card h-full hover:scale-105 transition-all duration-300 group">
                  <CardContent className="p-8 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-white">
                        {value.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-semibold mb-4">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Stats Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <div className="glass-card p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Trusted by <span className="gradient-text">Thousands</span>
              </h2>
              <p className="text-muted-foreground">
                Join a growing community of visual thinkers and creators.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className="text-4xl md:text-5xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Team Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center space-x-2 glass-card px-4 py-2 mb-8">
              <Award className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Built with Excellence</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Crafted by <span className="gradient-text">Experts</span>
            </h2>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Our team combines decades of experience in AI, user experience design, 
              and educational technology. We're passionate about creating tools that 
              make complex information accessible and actionable for everyone.
            </p>
          </div>
        </motion.section>
      </div>
    </div>
  );
}