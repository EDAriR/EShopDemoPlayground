/**
 * API 功能選單資料 res
 */
export interface FunctionInquiryRes {
  mainFuncName: string;
  subFunc: [
    {
      functionCode: string;
      functionName: string;
    }
  ];
}
