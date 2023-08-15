/**
 * API 編輯推薦產品 req
 */
export interface UpdateRecomndPrdReq {
  recomndPrdCode: string;
  recomndPrdName: string;
  recomndClsfyId: string;
  prdSlogan: string;
  recomndBgnDate: string;
  recomndEndDate: string;
  recomnder: string;
  recomndPrdStatus: string;
}
