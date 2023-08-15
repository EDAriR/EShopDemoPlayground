/**
 * API 查詢投組風險等級 res
 */
export interface IvsLevelInquiryRes {
  riskLevelId: string;
  riskLevelName: string;
  createUser: string;
  createTime: string;
  updateUser?: string;
  updateTime?: string;
}
