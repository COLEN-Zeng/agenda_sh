// 本文件为ORM数据结构定义
// 本文件由toolchain/code_generator/service_orm/build自动生成,请勿手动修改

interface AccountDuplicate {
  id: string;
  coreAccountId: string;
  superiorCoreAccountId: string;
  userId: string;
}

interface AccountInfo {
  id: string;
  coreAccountId: string;
  userId: string;
  type: number;
  password: string;
  createdAt: number;
}

