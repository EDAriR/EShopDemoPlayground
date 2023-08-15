/**
 * API 查詢文件代碼名稱 res
 */
export interface DocCodeInquiryRes {
  docCode: string;
  docName: string;
  docDesc: string;
  isTrustDoc: string;
  createUser: string;
  createTime: string;
  updateUser?: string;
  updateTime?: string;
}
