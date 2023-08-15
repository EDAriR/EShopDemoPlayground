/**
 * API 新增信託文件 req
 */
export interface NewWfmDocReq {
  docVersion?: string;
  docEfDate: string;
  docCode?: string;
  docName?: string;
  docStatus: string;
  docContent: [
    {
      docContentSeq: string;
      docContent: string;
    }
  ];
}
