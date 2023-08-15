/**
 * API 查詢投資小問題問卷題目 res
 */
export interface IvsQnrInfoRes {
  ivsqaQnrId: string;
  ivsqaQnrDesc: string;
  ivsqaQnrEfDate: string;
  ivsqaQnrStatus: string;
  ivsqaQnrVersion?: string;
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
