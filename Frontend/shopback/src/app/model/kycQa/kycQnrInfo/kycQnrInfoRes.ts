/**
 * API 查詢單筆KYC問卷 res
 */
export interface KycQnrInfoRes {
  kycQnrId: string;
  kycQnrDesc: string;
  kycQnrEfDate: string;
  kycQnrStatus: string;
  kycQnrVersion?: string;
  kycQnrRr1: string;
  kycQnrRr2: string;
  kycQnrRr3: string;
  kycQnrRr4: string;
  kycQnrRr5: string;
  kycQnrQust: [
    {
      kycQustId: string;
      kycQustType: string;
      kycQustTitle: string;
      kycQustClsfyId: string;
      kycQustSeq: string;
      kycQnrQustAns: [
        {
          kycAnsSeq: string;
          kycAns: string;
          kycAnsScore: string;
          toKycQustId?: string;
        }
      ];
    }
  ];
}
