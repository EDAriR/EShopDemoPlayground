/**
 * API 新增KYC題目 req
 */
export interface NewKycQustReq {
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
