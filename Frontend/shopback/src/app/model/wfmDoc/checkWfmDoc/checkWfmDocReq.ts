/**
 * API 審核信託文件 req
 */
export interface CheckWfmDocReq {
  docId: string;
  docStatus: string;
  rejectReason?: string;
}
