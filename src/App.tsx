import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
// import Layout from "@/components/layout/Layout";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Generator from "./pages/Generator";
import MindMapViewer from "./pages/MindMapViewer";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Temporary simple layout for debugging
const SimpleLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen bg-background text-foreground">
    <nav className="p-4 border-b">
      <h1 className="text-xl font-bold">MindMap Genius</h1>
    </nav>
    <main>{children}</main>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="dark">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <SimpleLayout>
            <Routes>
              <Route path="/" element={<div className="p-8"><h1 className="text-4xl">Landing Page</h1></div>} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/generator" element={<Generator />} />
              <Route path="/mindmap" element={<MindMapViewer />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </SimpleLayout>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
