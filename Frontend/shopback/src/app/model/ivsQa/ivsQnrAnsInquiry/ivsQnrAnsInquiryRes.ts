/**
 * API 查詢投資小問題問卷已選擇題目的答案列表 res
 */
export interface IvsQnrAnsInquiryRes {
  ivsqaQustClsfyId: string;
  ivsqaQustClsfyName: string;
  ivsqaQustId: string;
  ivsqaQustTitle: string;
  ivsqaQustType: string;
  ivsqaQustAns: [
    {
      ivsqaAnsSeq: string;
      ivsqaAns: string;
      custTagClsfyId: string;
      custTagId: string;
    }
  ];
}
