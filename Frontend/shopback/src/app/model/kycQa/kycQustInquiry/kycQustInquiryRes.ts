/**
 * API 查詢KYC題目 res
 */
export interface KycQustInquiryRes {
  kycQustClsfyId: string;
  kycQustId: string;
  kycQustType: string;
  kycQustTitle: string;
  kycQustClsfyName: string;
  kycQustAns: [
    {
      kycAnsSeq: string;
      kycAns: string;
      kycAnsScore: string;
    }
  ];
}
