export type StudentInfo = {
  studentId: string;
  fullNameTH: string;
  fullNameEN: string;
  phone: string;
  email: string;
  faculty: string;
  major: string;
  program: string;
  advisor: string;
  status: string;
};

export type AcademicRecord = {
  year: number;
  semester: string;
  credits: number;
  GPA: number;
  GPAX: number;
  GPAXChange: number;
};

export type SubjectCategory = {
  category: string;
  averageGPA: number;
  totalCredits: number;
  completedCredits: number;
  incompleteCredits: number;
};

export type StudentProfile = {
  studentInfo: StudentInfo;
  academicRecords: AcademicRecord[];
  subjectCategories: SubjectCategory[];
};
