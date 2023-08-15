/**
 * API 新增人員資料 req
 */
export interface NewUserReq {
  userId: string;
  userName: string;
  userEmail: string;
  groupId: string;
}
