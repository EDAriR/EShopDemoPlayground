/**
 * API 查詢推薦產品單筆記錄 res
 */
export interface RecomndPrdInfoReqRes {
  recomndPrdCode: string;
  recomndPrdName: string;
  recomndClsfyId: string;
  prdSlogan: string;
  recomndBgnDate: string;
  recomndEndDate: string;
  recomnder: string;
  recomndPrdStatus: string;
  rejectReason?: string;
  createUser: string;
  createTime: string;
  updateUser?: string;
  updateTime?: string;
  applyUser: string;
  applyTime: string;
  checkUser?: string;
  checkTime?: string;
}
