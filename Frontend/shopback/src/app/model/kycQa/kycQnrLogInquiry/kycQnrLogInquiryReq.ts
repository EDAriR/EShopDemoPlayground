/**
 * API 查詢KYC問卷記錄 req
 */
export interface KycQnrLogInquiryReq {
  kycQnrStatus: string;
  startDate?: string;
  endDate?: string;
}
