/**
 * API 查詢待審推薦產品 res
 */
export interface PendingRecomndPrdRes {
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
  applyUser: string;
  applyTime: string;
}