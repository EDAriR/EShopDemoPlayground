/**
 * API 查詢投資小問題問卷 res
 */
export interface IvsQnrInquiryRes {
  ivsqaQnrId: string;
  ivsqaQnrDesc: string;
  ivsqaQnrEfDate: string;
  ivsqaQnrStatus: string;
  ivsqaQnrVersion?: string;
  createUser: string;
  createTime: string;
  updateUser?: string;
  updateTime?: string;
}
