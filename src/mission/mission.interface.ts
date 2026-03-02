export interface IMission {
  id: number;
  codename: string;
  status: string;
  targetName: string;
  riskLevel: string;
  startDate: Date;
  endDate?: Date;
}
