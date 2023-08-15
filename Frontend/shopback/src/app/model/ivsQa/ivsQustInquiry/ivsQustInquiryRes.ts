/**
 * API 查詢投資小問題題目 res
 */
export interface IvsQustInquiryRes {
  ivsqaQustClsfyName: string;
  ivsqaQustClsfyId: string;
  ivsqaQustId: string;
  ivsqaQustType: string;
  ivsqaQustTitle: string;
  createUser: string;
  createTime: string;
  updateUser?: string;
  updateTime?: string;
  ivsqaQustAns: [
    {
      invqaAnsSeq: string;
      invqaAns: string;
      custTagClsfyId?: string;
      custTagId?: string;
    }
  ];
}
