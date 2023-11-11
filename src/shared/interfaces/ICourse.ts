export interface ICourse {
  courseId: number;
  courseTitle: string;
  courseDescription: string;
  courseLength: number;
  courseCompleteness: number;
  courseLevel: "Начинающим" | "Продвинутым";
  courseSteps: string[];
}
