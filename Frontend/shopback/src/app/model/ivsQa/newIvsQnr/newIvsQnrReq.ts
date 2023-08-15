/**
 * API 新增投資小問題問卷 req
 */
export interface NewIvsQnrReq {
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
      ivsQnrQustAns: [
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
