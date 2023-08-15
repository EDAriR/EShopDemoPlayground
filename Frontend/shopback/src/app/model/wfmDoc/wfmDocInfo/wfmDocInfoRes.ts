/**
 * API 查詢單筆信託文件 res
 */
export interface WfmDocInfoRes {
  docId: string;
  docVersion?: string;
  docEfDate: string;
  docCode?: string;
  docName?: string;
  docStatus: string;
  rejectReason?: string;
  docContent: [
    {
      docContentSeq: string;
      docContent: string;
    }
  ];
}
