import { motion } from "framer-motion";
import { Loader2, CheckCircle, XCircle, AlertCircle } from "lucide-react";
import { ProcessingStatus as StatusType } from "@/types/mindmap";

interface ProcessingStatusProps {
  status: StatusType;
  message?: string;
}

export default function ProcessingStatus({ status, message }: ProcessingStatusProps) {
  if (status === "idle") return null;

  const getStatusConfig = () => {
    switch (status) {
      case "processing":
        return {
          icon: <Loader2 className="h-5 w-5 animate-spin" />,
          color: "text-primary",
          bgColor: "bg-primary/10",
          title: "Processing...",
          description: message || "Analyzing your content and generating mind map"
        };
      case "completed":
        return {
          icon: <CheckCircle className="h-5 w-5" />,
          color: "text-accent",
          bgColor: "bg-accent/10",
          title: "Completed!",
          description: message || "Mind map generated successfully"
        };
      case "error":
        return {
          icon: <XCircle className="h-5 w-5" />,
          color: "text-destructive",
          bgColor: "bg-destructive/10",
          title: "Error",
          description: message || "Failed to process your request"
        };
      default:
        return {
          icon: <AlertCircle className="h-5 w-5" />,
          color: "text-muted-foreground",
          bgColor: "bg-muted/10",
          title: "Unknown Status",
          description: message || "Something unexpected happened"
        };
    }
  };

  const config = getStatusConfig();

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="glass-card p-4"
    >
      <div className="flex items-center space-x-3">
        <div className={`p-2 rounded-full ${config.bgColor} ${config.color}`}>
          {config.icon}
        </div>
        <div className="flex-1">
          <h4 className="font-medium">{config.title}</h4>
          <p className="text-sm text-muted-foreground">{config.description}</p>
        </div>
      </div>
    </motion.div>
  );
}