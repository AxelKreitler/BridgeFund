export interface ICheckoutResponse {
  session: string;
  startedAt: Date;
  endedAt: Date;
  total: number;
}
