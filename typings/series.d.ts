import React from "react";

interface MarksTypes {
  positive: number;
  negative: number;
}
interface Section {
  _id: any;
  title: string;
  marks: MarksTypes;
  questionsCount: number;
  questions: QuestionTypes[];
}
interface Option {
  value: string;
  correct: boolean;
}
interface Languages {
  question: string;
  options: Option[];
  solution: string;
}
interface QuestionTypes {
  _id: string;
  hindi: Languages;
  english: Languages;
  type: string;
  QSNo: number;
  SSNo: number;
  SSSNo: number;
}
interface TestSectionResponseType {
  _id: string;
  title: string;
  course: string[];
  slug: string;
  duration: number;
  is_saved: boolean;
  is_marked: boolean;
  createdAt: string;
  question_score: string;
  user_attempt_list: string[];
  sections: Section[];
}
