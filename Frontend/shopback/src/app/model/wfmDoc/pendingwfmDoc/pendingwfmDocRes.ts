/**
 * API 查詢待審信託文件 res
 */
export interface PendingwfmDocRes {
  docId: string;
  docEfDate: string;
  docVersion?: string;
  docCode: string;
  docName: string;
  docStatus: string;
  createUser: string;
  createTime: string;
  updateUser?: string;
  updateTime?: string;
  applyUser: string;
  applyTime: string;
}
