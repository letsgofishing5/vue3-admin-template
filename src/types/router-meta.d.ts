// typings.d.ts or router.ts
import "vue-router";

declare module "vue-router" {
    interface RouteMeta {
        // 菜单名称
        title: string;
        // 图标
        icon?: string
        // 是否全屏
        isFull?: boolean
        // 是否缓存
        keepAlive?: boolean
        /**
         * 是否是标签
         */
        isTab?: boolean
    }
}

