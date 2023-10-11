export interface RequestResult<T> {
  code: number;
  data: T;
  msg: string;
  /**
   * 分页总数
   */
  count: number
}
export enum ContentTypeEnum {
  // json
  JSON = 'application/json;charset=UTF-8',
  // form-data qs
  FORM_URLENCODED = 'application/x-www-form-urlencoded;charset=UTF-8',
  // form-data  upload
  FORM_DATA = 'multipart/form-data;charset=UTF-8',
}
