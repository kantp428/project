export type code = "60" | "61" | "62" | "63" | "64" | "65" | "66";

export type GPACategory = "3_25_4_00" | "2_00_3_24" | "1_75_1_99" | "0_00_1_74";

export type GPAGroup = Record<GPACategory, number>;

export type GPAbyCode = Record<code, GPAGroup>;

export type YearGPA = {
  year1: GPAbyCode;
  year2: GPAbyCode;
  year3: GPAbyCode;
  year4: GPAbyCode;
};

export type GPAData = {
  yearGPA: YearGPA;
  studyingGPA: GPAbyCode;
  graduatedGPA: GPAbyCode;
};