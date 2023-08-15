export interface KycQnrAnsInquiryRes {
  kycQustClsfyId: string;
  kycQustClsfyName: string;
  kycQustId: string;
  kycQustTitle: string;
  kycQustType: string;
  kycQustAns: [
    {
      kycAnsSeq: string;
      kycAns: string;
      kycAnsScore: string;
    }
  ];
}
