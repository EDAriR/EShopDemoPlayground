/**
 * API 群組查詢 res
 */
export interface GroupInquiryRes {
  groupId: string;
  groupName: string;
  groupStatus: string;
  createUser: string;
  createTime: string;
  updateUser?: string;
  updateTime?: string;
}
