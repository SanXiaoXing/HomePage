import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// 导入翻译资源
import translationEN from '../i18n/en.json'; // <-- 导入这些文件
import translationZH from '../i18n/zh.json'; // <-- 导入这些文件

const resources = {
  en: {
    translation: translationEN,
  },
  zh: {
    translation: translationZH,
  },
};

// 获取当前路径名
const pathname = window.location.pathname;
// 简单的路径名检查来决定默认语言
const defaultLanguage = pathname.startsWith('/en') ? 'en' : 'zh';

i18n
  .use(initReactI18next) // 通过initReactI18next绑定到react
  .init({
    resources,
    lng: defaultLanguage, // 使用默认语言
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;