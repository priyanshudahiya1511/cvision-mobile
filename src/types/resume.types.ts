export interface Resume {
  _id: string;
  user: string;
  originalFileName: string;
  isAnalysed: boolean;
  createdAt: string;
  updatedAt?: string;
}

export interface UploadResumeResponse {
  message: string;
  resumeId: string;
  originalFileName: string;
}

export interface ResumeHistoryResponse {
  message: string;
  resumes: Resume[];
}

export interface SingleResumeResponse {
  message: string;
  resume: Resume;
}
