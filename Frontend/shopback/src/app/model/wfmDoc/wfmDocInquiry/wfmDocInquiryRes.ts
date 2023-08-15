/**
 * API 查詢信託文件 res
 */
export interface WfmDocInquiryRes {
  docId: string;
  docVersion?: string;
  docEfDate: string;
  docCode?: string;
  docName?: string;
  docStatus: string;
  createUser: string;
  createTime: string;
  updateUser?: string;
  updateTime?: string;
}
