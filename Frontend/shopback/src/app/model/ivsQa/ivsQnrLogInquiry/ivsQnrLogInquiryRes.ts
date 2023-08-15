/**
 * API 查詢投資小問題問卷記錄 res
 */
export interface IvsQnrLogInquiryRes {
  ivsqaQnrId: string;
  ivsqaQnrDesc: string;
  ivsqaQnrEfDate: string;
  ivsqaQnrStatus: string;
  ivsqaQnrVersion?: string;
  rejectReason?: string;
  createUser: string;
  createTime: string;
  updateUser?: string;
  updateTime?: string;
  checkUser?: string;
  checkTime?: string;
}
