/**
 * API 審核投資小問題問卷 req
 */
export interface CheckIvsQnrReq {
  ivsqaQnrId: string;
  ivsqaQnrStatus: string;
  rejectReason?: string;
}
