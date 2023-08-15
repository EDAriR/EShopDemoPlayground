export interface KycQnrQustInquiryRes {
  kycQustClsfyId: string;
  kycQustClsfyName: string;
  kycQust: [
    {
      kycQustId: string;
      kycQustTitle: string;
      kycQustType: string;
      isSelect: string;
    }
  ];
}
