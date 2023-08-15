/**
 * API 查詢客戶標籤類別 req
 */
export interface CustTagClsfyInquiryRes {
  custTagClsfyId: string;
  custTagClsfyCode: string;
  custTagClsfyName: string;
  createUser: string;
  createTime: string;
  updateUser?: string;
  updateTime?: string;
}
