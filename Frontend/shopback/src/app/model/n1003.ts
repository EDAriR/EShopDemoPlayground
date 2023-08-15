export interface AuthData {
  funClassName?: string;
  funList?: { [propName: string]: string }[];
}
export interface GroupData {
  roleID: string;
  roleName: string;
  funList: { funCode: string; funName: string }[];
}
export interface FunctionData {
  funClassCode: string;
  funClassName: string;
  funList: { funCode: string; funName: string }[];
}
