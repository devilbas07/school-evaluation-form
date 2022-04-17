export interface FormTeacher {
  tableHeader: string;
  tableBody: {
    tbodyHeading: string;
    header: {
      topic: string;
      selectedOperation?: string;
    }[];
  }[];
  evidence: string[];
  selectedEvidence?: string[];
  feedback?: string;
}