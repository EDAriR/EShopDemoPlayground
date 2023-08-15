/**
 * API 編輯投資小問題題目 req
 */
export interface UpdateIvsQustReq {
  ivsqaQustId: string;
  ivsqaQustType: string;
  ivsqaQustTitle: string;
  ivsqaQustClsfyId: string;
  ivsqaQustAns: [
    {
      ivsqaAnsSeq: string;
      ivsqaAns: string;
      custTagClsfyId?: string;
      custTagId?: string;
    }
  ];
}
