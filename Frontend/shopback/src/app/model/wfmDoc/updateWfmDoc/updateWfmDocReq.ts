/**
 * API 編輯信託文件 req
 */
export interface UpdateWfmDocReq {
  docId: string;
  docEfDate: string;
  docCode?: string;
  docName?: string;
  docStatus: string;
  docContent: [
    {
      paramseter: string;
      docContentSeq: string;
      docContent: string;
    }
  ];
}
