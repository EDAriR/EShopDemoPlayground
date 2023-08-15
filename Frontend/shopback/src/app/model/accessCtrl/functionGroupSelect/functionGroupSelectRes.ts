/**
 * API 群組功能權限選單資料 res
 */
export interface FunctionGroupSelectRes {
  groupId: string;
  groupName: string;
  function: [
    {
      paramseter: string;
      functionCode: string;
      functionName: string;
      isSelect: string;
    }
  ];
}
