// https://vitepress.dev/guide/custom-theme
import {
  h
} from 'vue'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import 'viewerjs/dist/viewer.min.css';
import imageViewer from 'vitepress-plugin-image-viewer';
import vImageViewer from 'vitepress-plugin-image-viewer/lib/vImageViewer.vue';
import {
  useRoute
} from 'vitepress';

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx);
    // 注册全局组件，如果你不想使用也可以不添加
    ctx.app.component('vImageViewer', vImageViewer);
    // ...
  },
  setup() {
    // 获取路由
    const route = useRoute();
    // 使用
    imageViewer(route);
  }
}