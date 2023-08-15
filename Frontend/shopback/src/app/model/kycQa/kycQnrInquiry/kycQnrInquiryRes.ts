/**
 * API 查詢KYC問卷 res
 */
export interface KycQnrInquiryRes {
  kycQnrId: string;
  kycQnrDesc: string;
  kycQnrEfDate: string;
  kycQnrStatus: string;
  kycQnrVersion?: string;
  createUser: string;
  createTime: string;
  updateUser?: string;
  updateTime?: string;
}
