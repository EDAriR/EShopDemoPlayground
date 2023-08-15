/**
 * API 查詢待審投資小問題問卷 res
 */
export interface PendingIvsQnrInquiryRes {
  ivsqaQnrId: string;
  ivsqaQnrDesc: string;
  ivsqaQnrEfDate: string;
  ivsqaQnrStatus: string;
  ivsqaQnrVersion?: string;
  createUser: string;
  createTime: string;
  applyUser: string;
  applyTime: string;
}
