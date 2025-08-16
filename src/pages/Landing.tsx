import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Brain, Zap, FileText, Download, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Landing() {
  const features = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "AI-Powered Analysis",
      description: "Advanced AI processes your documents and extracts key concepts automatically."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Instant Generation",
      description: "Transform any document into a beautiful mind map in seconds."
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Multiple Formats",
      description: "Support for PDF, DOCX, TXT, and more document formats."
    },
    {
      icon: <Download className="h-8 w-8" />,
      title: "Export Ready",
      description: "Download your mind maps as high-quality PDF or image files."
    }
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div variants={itemVariants} className="mb-8">
              <div className="inline-flex items-center space-x-2 glass-card px-4 py-2 mb-8">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">AI-Powered Mind Mapping</span>
              </div>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            >
              Turn Documents Into
              <span className="gradient-text block">Visual Mind Maps</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto"
            >
              Transform any document into clear, interactive mind maps instantly 
              with our AI-powered visualization tool. Perfect for students, 
              professionals, and creative thinkers.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <Link to="/generator">
                <Button 
                  size="lg" 
                  className="btn-animated bg-gradient-primary hover:shadow-glow text-lg px-8 py-6 h-auto group"
                >
                  Create Your First Mind Map
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              
              <Link to="/about">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="text-lg px-8 py-6 h-auto glass-card border-white/20 hover:bg-white/10"
                >
                  Learn More
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-10 animate-float">
          <div className="glass-card p-4 glow-primary">
            <Brain className="h-8 w-8 text-primary" />
          </div>
        </div>
        <div className="absolute top-1/3 right-10 animate-float" style={{ animationDelay: '1s' }}>
          <div className="glass-card p-4 glow-primary">
            <Zap className="h-8 w-8 text-accent" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose <span className="gradient-text">MindMap Genius</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Powerful features designed to transform how you visualize and understand information.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="glass-card h-full hover:scale-105 transition-all duration-300 group">
                  <CardContent className="p-8 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-white">
                        {feature.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-card-hero max-w-4xl mx-auto p-12 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Documents?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of users who are already creating stunning mind maps 
              from their documents in seconds.
            </p>
            <Link to="/generator">
              <Button 
                size="lg" 
                className="btn-animated bg-gradient-primary hover:shadow-glow text-lg px-12 py-6 h-auto group"
              >
                Start Creating Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}