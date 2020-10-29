export interface ChallegeItem {
  challengeId: string;
  title: string;
  shortDescription: string;
  tags: Array<string>;
  maxScore: number;
  successRate: number;
  upVotes: number;
  difficulty: HackObj;
  dateCreated: Date;
  isSolved?: boolean;
}
interface HackObj {
  key: string;
  value: string;
}
