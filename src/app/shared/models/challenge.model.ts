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
  problemStatement?: Array<ProblemStatment>;
}
interface HackObj {
  key: string;
  value: string;
}
export interface ChallengeDetails {
  challengeDetails: ChallegeItem;
  joinHandsData: any;
  leadersBoardData: any;
}
export interface ProblemStatment {
  header: string;
  description: string;
}
