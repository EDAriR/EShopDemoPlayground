/**
 * API 查詢推薦產品 req
 */
export interface RecomndPrdInquiryRes {
  recomndPrdCode: string;
  recomndPrdName: string;
  recomndClsfyId: string;
  prdSlogan: string;
  recomndBgnDate: string;
  recomndEndDate: string;
  recomnder: string;
  recomndPrdStatus: string;
  createUser: string;
  createTime: string;
  updateUser?: string;
  updateTime?: string;
}
