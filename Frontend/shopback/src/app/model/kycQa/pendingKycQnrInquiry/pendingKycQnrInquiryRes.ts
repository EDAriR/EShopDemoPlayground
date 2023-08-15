/**
 * API 查詢待審KYC問卷 res
 */
export interface PendingKycQnrInquiryRes {
  kycQnrId: string;
  kycQnrDesc: string;
  kycQnrEfDate: string;
  kycQnrStatus: string;
  kycQnrVersion?: string;
  createUser: string;
  createTime: string;
  applyUser: string;
  applyTime: string;
}
