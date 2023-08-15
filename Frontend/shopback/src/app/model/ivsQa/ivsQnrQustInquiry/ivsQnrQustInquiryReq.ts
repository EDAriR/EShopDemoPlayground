/**
 * API 查詢投資小問題題庫及投資小問題問卷相關所有題目列表 res
 */
export interface IvsQnrQustInquiryRes {
  ivsqaQustClsfyId: string;
  ivsqaQustClsfyName: string;
  ivsqaQust: [
    {
      ivsqaQustId: string;
      ivsqaQustTitle: string;
      ivsqaQustType: string;
      isSelect: string;
    }
  ];
}
