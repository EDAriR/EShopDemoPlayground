/**
 * API 查詢產品標籤類別 res
 */
export interface PrdTagClsfyInquiryRes {
  prdTagClsfyId: string;
  prdTagClsfyName: string;
  createUser: string;
  createTime: string;
  updateUser?: string;
  updateTime?: string;
}
