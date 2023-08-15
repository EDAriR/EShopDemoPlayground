/**
 * API 查詢信託文件記錄 res
 */
export interface WfmDocLogInquiryRes {
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
  applyUser: string;
  applyTime: string;
  checkUser?: string;
  checkTime?: string;
}
