/**
 * API 審核KYC問卷 req
 */
export interface CheckKycQnrReq {
  kycQnrId: string;
  kycQnrStatus: string;
  rejectReason?: string;
}
