/**
 * API 新增推薦產品 req
 */
export interface NewRecomndPrdReq {
  recomndPrdCode: string;
  recomndPrdName: string;
  recomndClsfyId: string;
  prdSlogan: string;
  recomndBgnDate: string;
  recomndEndDate: string;
  recomnder: string;
  recomndPrdStatus: string;
}
