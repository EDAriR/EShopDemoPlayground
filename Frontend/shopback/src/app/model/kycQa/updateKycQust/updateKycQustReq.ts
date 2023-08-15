/**
 * API 編輯KYC題目 req
 */
export interface UpdateKycQustReq {
  kycQustId: string;
  kycQustType: string;
  kycQustTitle: string;
  kycQustClsfyId: string;
  kycQustAns: [
    {
      kycAnsSeq: string;
      kycAns: string;
      kycAnsScore: string;
    }
  ];
}
