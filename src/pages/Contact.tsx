import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MessageSquare, Phone, MapPin, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Us",
      description: "Get in touch via email",
      contact: "hello@mindmapgenius.com"
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Live Chat",
      description: "Chat with our support team",
      contact: "Available 9 AM - 6 PM EST"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Call Us",
      description: "Speak directly with our team",
      contact: "+1 (555) 123-4567"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Visit Us",
      description: "Come say hello",
      contact: "San Francisco, CA"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Message Sent!",
      description: "Thank you for your message. We'll get back to you within 24 hours.",
    });

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
    
    setIsSubmitting(false);
  };

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
              <MessageSquare className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Get In Touch</span>
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold mb-8"
          >
            We'd Love to
            <span className="gradient-text block">Hear From You</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Have questions about MindMap Genius? Need help with your mind maps? 
            Or just want to share your feedback? We're here to help and would 
            love to connect with you.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="glass-card-hero">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-8 text-center">Send Us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Full Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="glass-card border-white/20 bg-white/5"
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="glass-card border-white/20 bg-white/5"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="glass-card border-white/20 bg-white/5"
                      placeholder="What's this about?"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="glass-card border-white/20 bg-white/5 min-h-32"
                      placeholder="Tell us more about your question or feedback..."
                      required
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-animated bg-gradient-primary hover:shadow-glow py-6 text-lg group"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Other Ways to Reach Us</h2>
              <p className="text-muted-foreground text-lg">
                Choose the method that works best for you. We're committed to 
                providing quick and helpful responses.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="glass-card hover:scale-105 transition-all duration-300 group h-full">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-xl bg-gradient-primary group-hover:scale-110 transition-transform duration-300">
                          <div className="text-white">
                            {info.icon}
                          </div>
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-1">{info.title}</h3>
                          <p className="text-muted-foreground text-sm mb-2">{info.description}</p>
                          <p className="text-primary font-medium">{info.contact}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* FAQ Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="glass-card p-8"
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <CheckCircle className="mr-3 h-6 w-6 text-primary" />
                Quick Answers
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">How fast do you respond?</h4>
                  <p className="text-muted-foreground text-sm">
                    We typically respond to all inquiries within 24 hours, often much sooner.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Do you offer technical support?</h4>
                  <p className="text-muted-foreground text-sm">
                    Yes! Our team provides comprehensive technical support for all users.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Can I request new features?</h4>
                  <p className="text-muted-foreground text-sm">
                    Absolutely! We love hearing feature requests from our community.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}