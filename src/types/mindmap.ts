// MindMap data structures for seamless integration
export interface MindmapNode {
  id: string;
  text: string;
  description?: string;
  children?: MindmapNode[];
  x?: number;
  y?: number;
  color?: string;
  level?: number;
}

export interface MindmapData {
  title: string;
  nodes: MindmapNode[];
}

// Processing status for file uploads and AI generation
export type ProcessingStatus = 'idle' | 'processing' | 'completed' | 'error';

// File processing result
export interface FileProcessingResult {
  success: boolean;
  text?: string;
  error?: string;
}

// AI processing result
export interface AIProcessingResult {
  success: boolean;
  data?: MindmapData;
  error?: string;
}