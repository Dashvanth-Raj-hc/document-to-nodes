import { useEffect, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Download, ArrowLeft, Share2, RotateCcw, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { MindmapData } from "@/types/mindmap";

// Placeholder component for the actual mind map visualization
// This will be replaced with your existing MindmapViewer component
function MindMapDisplay({ data }: { data: MindmapData }) {
  return (
    <div className="glass-card-hero p-8 h-full min-h-96 flex items-center justify-center">
      <div className="text-center space-y-6">
        <div className="w-24 h-24 mx-auto rounded-3xl bg-gradient-primary flex items-center justify-center">
          <Zap className="h-12 w-12 text-white" />
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-4">{data.title}</h3>
          <p className="text-muted-foreground mb-6">
            Mind map visualization will be rendered here using your existing MindmapViewer component.
          </p>
          <div className="text-sm text-muted-foreground space-y-2">
            <p>Total nodes: {data.nodes.length}</p>
            <p>Root node: {data.nodes[0]?.text || "N/A"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MindMapViewer() {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [mindmapData, setMindmapData] = useState<MindmapData | null>(null);
  const [isExporting, setIsExporting] = useState(false);

  useEffect(() => {
    // Get mind map data from navigation state
    const data = location.state?.mindmapData;
    if (data) {
      setMindmapData(data);
    }
  }, [location.state]);

  const handleExportPDF = async () => {
    if (!mindmapData) return;

    setIsExporting(true);
    
    try {
      // Simulate PDF export process
      // This is where you'll integrate your existing PDF export functionality
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Export Successful!",
        description: "Your mind map has been exported as a PDF."
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Export Failed",
        description: "There was an error exporting your mind map."
      });
    } finally {
      setIsExporting(false);
    }
  };

  const handleShare = async () => {
    if (navigator.share && mindmapData) {
      try {
        await navigator.share({
          title: mindmapData.title,
          text: `Check out this mind map: ${mindmapData.title}`,
          url: window.location.href
        });
      } catch (error) {
        // Fallback to copying URL
        navigator.clipboard.writeText(window.location.href);
        toast({
          title: "Link Copied!",
          description: "The mind map link has been copied to your clipboard."
        });
      }
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link Copied!",
        description: "The mind map link has been copied to your clipboard."
      });
    }
  };

  const handleCreateNew = () => {
    navigate("/generator");
  };

  // Show fallback if no data
  if (!mindmapData) {
    return (
      <div className="min-h-screen pt-32 flex items-center justify-center">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-2xl mx-auto"
          >
            <Card className="glass-card-hero p-12">
              <CardContent className="space-y-6">
                <div className="w-20 h-20 mx-auto rounded-2xl bg-muted/10 flex items-center justify-center">
                  <RotateCcw className="h-10 w-10 text-muted-foreground" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold mb-4">No Mind Map Data Found</h1>
                  <p className="text-muted-foreground mb-8">
                    It looks like you navigated here directly. To view a mind map, 
                    you'll need to generate one first.
                  </p>
                  <Link to="/generator">
                    <Button className="btn-animated bg-gradient-primary">
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Create a Mind Map
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8"
        >
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{mindmapData.title}</h1>
            <p className="text-muted-foreground">
              Interactive mind map visualization
            </p>
          </div>
          
          <div className="flex items-center space-x-3">
            <Button
              variant="outline"
              onClick={handleShare}
              className="glass-card border-white/20 hover:bg-white/10"
            >
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </Button>
            
            <Button
              onClick={handleExportPDF}
              disabled={isExporting}
              className="btn-animated bg-gradient-primary hover:shadow-glow"
            >
              {isExporting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Exporting...
                </>
              ) : (
                <>
                  <Download className="mr-2 h-4 w-4" />
                  Export PDF
                </>
              )}
            </Button>
            
            <Button
              onClick={handleCreateNew}
              variant="outline"
              className="glass-card border-white/20 hover:bg-white/10"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              New Map
            </Button>
          </div>
        </motion.div>

        {/* Mind Map Display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <MindMapDisplay data={mindmapData} />
        </motion.div>

        {/* Mind Map Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <Card className="glass-card">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold gradient-text mb-2">
                {mindmapData.nodes.length}
              </div>
              <div className="text-muted-foreground">Total Nodes</div>
            </CardContent>
          </Card>
          
          <Card className="glass-card">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold gradient-text mb-2">
                {mindmapData.nodes.filter(node => node.level === 1).length}
              </div>
              <div className="text-muted-foreground">Main Topics</div>
            </CardContent>
          </Card>
          
          <Card className="glass-card">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold gradient-text mb-2">
                {Math.max(...mindmapData.nodes.map(node => node.level || 0))}
              </div>
              <div className="text-muted-foreground">Max Depth</div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}