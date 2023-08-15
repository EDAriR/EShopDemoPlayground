/**
 * API 審核推薦產品 req
 */
export interface CheckRecomndPrdReq {
  recomndPrdCode: string;
  recomndPrdStatus: string;
  rejectReason?: string;
}
