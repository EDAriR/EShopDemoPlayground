/**
 * API 查詢人員列表 res
 */

export interface UserInquiryRes {
  userId: string;
  userName: string;
  userEmail: string;
  userStatus: string;
  groupId: string;
  groupName: string;
  createUser: string;
  createTime: string;
  updateUser?: string;
  updateTime?: string;
}
