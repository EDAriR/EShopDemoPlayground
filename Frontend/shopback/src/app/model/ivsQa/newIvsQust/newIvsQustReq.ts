/**
 * API 新增投資小問題題目 req
 */
export interface NewIvsQustReq {
  ivsqaQustType: string;
  ivsqaQustTitle: string;
  ivsqaQustClsfyId: string;
  ivsqaQustAns: [
    {
      invqaAnsSeq: string;
      invqaAns: string;
      custTagClsfyId?: string;
      custTagId?: string;
    }
  ];
}
