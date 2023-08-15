/**
 * API 查詢KYC問卷記錄 res
 */
export interface KycQnrLogInquiryRes {
  kycQnrId: string;
  kycQnrDesc: string;
  kycQnrEfDate: string;
  kycQnrStatus: string;
  kycQnrVersion?: string;
  rejectReason?: string;
  createUser: string;
  createTime: string;
  updateUser?: string;
  updateTime?: string;
  checkUser?: string;
  checkTime?: string;
}
