/**
 * API 查詢推薦產品記錄 res
 */
export interface RecomndPrdLogInquiryRes {
  recomndPrdCode: string;
  recomndPrdName: string;
  recomndClsfyId: string;
  recomnder: string;
  recomndPrdStatus: string;
  createUser: string;
  createTime: string;
  updateUser?: string;
  updateTime?: string;
  applyUser: string;
  applyTime: string;
  checkUser?: string;
  checkTime?: string;
}
