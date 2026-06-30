export interface Analysis {
  _id: string;
  resume: string;
  score: number;
  strengths: string[];
  weaknesses: string[];
  suggestions: string[];
  summary: string;
  detailedFeedback: string;
  createdAt?: string;
}

export interface AnalysisResponse {
  message: string;
  analysis: Analysis;
}
