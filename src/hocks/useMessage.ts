import { ElMessage, ElMessageBox } from "element-plus/lib/components/index.js";
interface ConfirmConf {
  title: string
  /**
   * 确认按钮文字
   */
  confirmButtonText: string,
  /**
   * 取消按钮文字
   */
  cancelButtonText: string,
  /**
   * 弹出框类型
   */
  type: "warning" | "success" | "info" | "error",
  /**
   * 弹出框提示信息
   */
  message: string
  /**
   * 确认按钮回调事件
   * @param params 
   * @returns 
   */
  cancelCallback?: (...params: any[]) => void
  /**
   * 取消按钮回调事件
   * @param params 
   * @returns 
   */
  confirmCallback?: (...params: any[]) => void
  /**
   * 确认回调事件参数
   */
  cancelCallbackParams?: object
  /**
   * 取消回调事件参数
   */
  confirmCallbackParams?: object
}
export class notify {
  static Succ(msg: string, closeable: boolean = true) {
    ElMessage({
      showClose: closeable,
      grouping: true,
      message: msg,
      type: "success",
    });
  }
  static Err(msg: string, closeable: boolean = true) {
    ElMessage({
      showClose: closeable,
      grouping: true,
      message: msg,
      type: "error",
    });
  }
  static Info(msg: string, closeable: boolean = true) {
    ElMessage({
      showClose: closeable,
      grouping: true,
      message: msg,
    });
  }
  static Warn(msg: string, closeable: boolean = true) {
    ElMessage({
      showClose: closeable,
      grouping: true,
      message: msg,
      type: "warning",
    });
  }
  static Confirm(config: Partial<ConfirmConf> = {}): void {
    const {
      title = "提示",
      type = "info",
      confirmButtonText = "确定",
      cancelButtonText = "取消",
      message = "是否执行该操作？",
      cancelCallback,
      confirmCallback,
      cancelCallbackParams,
      confirmCallbackParams
    } = config
    ElMessageBox.confirm(
      message,
      title,
      {
        confirmButtonText,
        cancelButtonText,
        type,
      }
    ).then(() => {
      confirmCallback?.(confirmCallbackParams)
    })
      .catch(() => {
        cancelCallback?.(cancelCallbackParams)
      })
  }
}
