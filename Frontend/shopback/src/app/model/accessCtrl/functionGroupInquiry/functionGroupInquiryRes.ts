/**
 * API 查詢群組功能權限res
 */
export interface FunctionGroupInquiryRes {
  groupId: string;
  groupName: string;
  function: [
    {
      functionCode: string;
      functionName: string;
      isSelect: string;
    }
  ];
}
