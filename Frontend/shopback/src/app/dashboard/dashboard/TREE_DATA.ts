import { FoodNode } from "./FoodNode";

// menu 待 api 完成後刪除
export const TREE_DATA: FoodNode[] = [
  {
    name: '總覽'
  },
  {
    name: '訂單管理',
    children: [{ name: '訂單查詢' }, { name: '訂單列印' }, { name: '退貨單' }],
  },
  {
    name: '商品及分類',
    children: [{ name: '商品分類設定', }, { name: '新增商品', }]
  },
  {
    name: '庫存管理',
    children: [{ name: '商品數量設定' }, { name: '退貨單' }],
  },
  {
    name: '顧客管理',
    children: [{ name: '會員資料查詢' }, { name: '意見回復' }],
  },
  {
    name: '促銷設定',
    children: [{ name: '折扣碼設定' }, { name: '發送折扣' }],
  },
  {
    name: '報表分析',
    children: [{ name: '會員資料' }, { name: '訂單報表' }],
  },
  {
    name: '網站設計',
    children: [{ name: '新增文章' }, { name: '編輯文章' }, { name: '新增圖片' }],
  },
];
