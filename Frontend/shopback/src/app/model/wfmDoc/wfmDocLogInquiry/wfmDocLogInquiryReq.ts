/**
 * API 查詢信託文件記錄 req
 */
export interface WfmDocLogInquiryReq {
  docStatus: string;
  docCode?: string;
  docName?: string;
}
