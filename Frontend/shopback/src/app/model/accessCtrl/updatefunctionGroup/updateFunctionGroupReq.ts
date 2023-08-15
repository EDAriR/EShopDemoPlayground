/**
 * API 編輯群組功能權限 req
 */
export interface UpdateFunctionGroupReq {
  groupId: string;
  function?: { functionCode: string[] };
}
