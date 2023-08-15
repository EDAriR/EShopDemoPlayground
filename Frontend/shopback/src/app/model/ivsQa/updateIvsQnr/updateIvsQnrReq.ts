/**
 * API 編輯投資小問題問卷 req
 */
 export interface UpdateIvsQnrReq {
  ivsqaQnrId: string;
  ivsqaQnrDesc: string;
  ivsqaQnrEfDate: string;
  ivsqaQnrStatus: string;
  ivsqaQnrQust: [
    {
      ivsqaQustId: string;
      ivsqaQustType: string;
      ivsqaQustTitle: string;
      ivsqaQustClsfyId: string;
      ivsqaQustSeq: string;
      ivsqaQnrQustAns: [
        {
          invqaAnsSeq: string;
          invqaAns: string;
          custTagClsfyId?: string;
          custTagId?: string;
        }
      ];
    }
  ];
}
