import { r as ref, G as onMounted, o as onBeforeUnmount, X as createElementBlock, P as openBlock, p as computed, I as createVNode, W as withCtx, a5 as createBaseVNode, a6 as toDisplayString, a8 as script$2, F as Fragment, a9 as renderList, n as unref, O as createBlock, aa as withModifiers, a7 as createTextVNode, ab as script$3, ac as r, ad as normalizeClass, ae as withDirectives, af as StyleClass, ag as createCommentVNode, ah as normalizeStyle, ai as script$4, aj as createStaticVNode, ak as script$5, al as script$6, am as script$7, an as script$8, ao as script$9, ap as script$a, aq as script$b, ar as script$c, as as script$d, q as provide, m as defineComponent, H as onUnmounted, at as renderSlot, g as getCurrentInstance, v as watch, i as inject, au as NOOP, av as extend, aw as isString$1, ax as NO, ay as isSymbol, az as isBuiltInDirective, aA as capitalize, aB as camelize, aC as EMPTY_OBJ, aD as isObject, aE as toHandlerKey, aF as isArray, aG as isOn, aH as isReservedProp, aI as isHTMLTag, aJ as isSVGTag, aK as isMathMLTag, aL as isVoidTag, aM as parseStringStyle, aN as makeMap, aO as generateCodeFrame, aP as runtimeDom_esmBundler, aQ as shared_esmBundler, aR as useToast, aS as script$e, aT as script$f, aU as script$g, aV as script$h, aW as script$i, aX as vShow, T as Transition, aY as script$j, aZ as script$k, a_ as script$l, a$ as script$m, b0 as script$n, b1 as script$o, b2 as script$p } from "./primevue.js";
import { f as useI18n, g as useCookie, _ as _export_sfc, u as useRouter, e as useHead } from "./entry.js";
const _sfc_main$s = {
  __name: "ObserverDom",
  emits: ["intersect"],
  setup(__props, { emit: __emit }) {
    const emits = __emit;
    let observer = null;
    const observerRef = ref(null);
    onMounted(() => {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              emits("intersect", true);
            } else {
              emits("intersect", false);
            }
          });
        },
        {
          threshold: 0
        }
      );
      observer.observe(observerRef.value);
    });
    onBeforeUnmount(() => {
      observer && observer.disconnect();
      observer = null;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "observerRef",
        ref: observerRef
      }, null, 512);
    };
  }
};
const GOOGLE_MAP_API_KEY = "AIzaSyBWi6o7ZcfuhssJV7wtW16s8k1HWtEPjnw";
const BAIDU_MAP_API_KEY = "";
const LAN_DIS_MAP = {
  en: "English",
  ja: "日本語",
  zh: "中文",
  "zh-tw": "中文（繁體）"
};
const LAN_CURRENCY_MAP = {
  en: "$",
  ja: "円",
  zh: "元",
  "zh-tw": "圓"
};
const THEME_COLOR = [
  {
    name: "red",
    palette: {
      50: "#fef2f2",
      100: "#fee2e2",
      200: "#fecaca",
      300: "#fca5a5",
      400: "#f87171",
      500: "#ef4444",
      600: "#dc2626",
      700: "#b91c1c",
      800: "#991b1b",
      900: "#7f1d1d",
      950: "#450a0a"
    }
  },
  {
    name: "orange",
    palette: {
      50: "#fff7ed",
      100: "#ffedd5",
      200: "#fed7aa",
      300: "#fdba74",
      400: "#fb923c",
      500: "#f97316",
      600: "#ea580c",
      700: "#c2410c",
      800: "#9a3412",
      900: "#7c2d12",
      950: "#431407"
    }
  },
  {
    name: "amber",
    palette: {
      50: "#fffbeb",
      100: "#fef3c7",
      200: "#fde68a",
      300: "#fcd34d",
      400: "#fbbf24",
      500: "#f59e0b",
      600: "#d97706",
      700: "#b45309",
      800: "#92400e",
      900: "#78350f",
      950: "#451a03"
    }
  },
  {
    name: "yellow",
    palette: {
      50: "#fefce8",
      100: "#fef9c3",
      200: "#fef08a",
      300: "#fde047",
      400: "#facc15",
      500: "#eab308",
      600: "#ca8a04",
      700: "#a16207",
      800: "#854d0e",
      900: "#713f12",
      950: "#422006"
    }
  },
  {
    name: "lime",
    palette: {
      50: "#f7fee7",
      100: "#ecfccb",
      200: "#d9f99d",
      300: "#bef264",
      400: "#a3e635",
      500: "#84cc16",
      600: "#65a30d",
      700: "#4d7c0f",
      800: "#3f6212",
      900: "#365314",
      950: "#1a2e05"
    }
  },
  {
    name: "green",
    palette: {
      50: "#f0fdf4",
      100: "#dcfce7",
      200: "#bbf7d0",
      300: "#86efac",
      400: "#4ade80",
      500: "#22c55e",
      600: "#16a34a",
      700: "#15803d",
      800: "#166534",
      900: "#14532d",
      950: "#052e16"
    }
  },
  {
    name: "emerald",
    palette: {
      50: "#ecfdf5",
      100: "#d1fae5",
      200: "#a7f3d0",
      300: "#6ee7b7",
      400: "#34d399",
      500: "#10b981",
      600: "#059669",
      700: "#047857",
      800: "#065f46",
      900: "#064e3b",
      950: "#022c22"
    }
  },
  {
    name: "teal",
    palette: {
      50: "#f0fdfa",
      100: "#ccfbf1",
      200: "#99f6e4",
      300: "#5eead4",
      400: "#2dd4bf",
      500: "#14b8a6",
      600: "#0d9488",
      700: "#0f766e",
      800: "#115e59",
      900: "#134e4a",
      950: "#042f2e"
    }
  },
  {
    name: "cyan",
    palette: {
      50: "#ecfeff",
      100: "#cffafe",
      200: "#a5f3fc",
      300: "#67e8f9",
      400: "#22d3ee",
      500: "#06b6d4",
      600: "#0891b2",
      700: "#0e7490",
      800: "#155e75",
      900: "#164e63",
      950: "#083344"
    }
  },
  {
    name: "sky",
    palette: {
      50: "#f0f9ff",
      100: "#e0f2fe",
      200: "#bae6fd",
      300: "#7dd3fc",
      400: "#38bdf8",
      500: "#0ea5e9",
      600: "#0284c7",
      700: "#0369a1",
      800: "#075985",
      900: "#0c4a6e",
      950: "#082f49"
    }
  },
  {
    name: "blue",
    palette: {
      50: "#eff6ff",
      100: "#dbeafe",
      200: "#bfdbfe",
      300: "#93c5fd",
      400: "#60a5fa",
      500: "#3b82f6",
      600: "#2563eb",
      700: "#1d4ed8",
      800: "#1e40af",
      900: "#1e3a8a",
      950: "#172554"
    }
  },
  {
    name: "indigo",
    palette: {
      50: "#eef2ff",
      100: "#e0e7ff",
      200: "#c7d2fe",
      300: "#a5b4fc",
      400: "#818cf8",
      500: "#6366f1",
      600: "#4f46e5",
      700: "#4338ca",
      800: "#3730a3",
      900: "#312e81",
      950: "#1e1b4b"
    }
  },
  {
    name: "violet",
    palette: {
      50: "#f5f3ff",
      100: "#ede9fe",
      200: "#ddd6fe",
      300: "#c4b5fd",
      400: "#a78bfa",
      500: "#8b5cf6",
      600: "#7c3aed",
      700: "#6d28d9",
      800: "#5b21b6",
      900: "#4c1d95",
      950: "#2e1065"
    }
  },
  {
    name: "purple",
    palette: {
      50: "#faf5ff",
      100: "#f3e8ff",
      200: "#e9d5ff",
      300: "#d8b4fe",
      400: "#c084fc",
      500: "#a855f7",
      600: "#9333ea",
      700: "#7e22ce",
      800: "#6b21a8",
      900: "#581c87",
      950: "#3b0764"
    }
  },
  {
    name: "fuchsia",
    palette: {
      50: "#fdf4ff",
      100: "#fae8ff",
      200: "#f5d0fe",
      300: "#f0abfc",
      400: "#e879f9",
      500: "#d946ef",
      600: "#c026d3",
      700: "#a21caf",
      800: "#86198f",
      900: "#701a75",
      950: "#4a044e"
    }
  },
  {
    name: "pink",
    palette: {
      50: "#fdf2f8",
      100: "#fce7f3",
      200: "#fbcfe8",
      300: "#f9a8d4",
      400: "#f472b6",
      500: "#ec4899",
      600: "#db2777",
      700: "#be185d",
      800: "#9d174d",
      900: "#831843",
      950: "#500724"
    }
  },
  {
    name: "rose",
    palette: {
      50: "#fff1f2",
      100: "#ffe4e6",
      200: "#fecdd3",
      300: "#fda4af",
      400: "#fb7185",
      500: "#f43f5e",
      600: "#e11d48",
      700: "#be123c",
      800: "#9f1239",
      900: "#881337",
      950: "#4c0519"
    }
  },
  {
    name: "slate",
    palette: {
      50: "#f8fafc",
      100: "#f1f5f9",
      200: "#e2e8f0",
      300: "#cbd5e1",
      400: "#94a3b8",
      500: "#64748b",
      600: "#475569",
      700: "#334155",
      800: "#1e293b",
      900: "#0f172a",
      950: "#020617"
    }
  },
  {
    name: "gray",
    palette: {
      50: "#f9fafb",
      100: "#f3f4f6",
      200: "#e5e7eb",
      300: "#d1d5db",
      400: "#9ca3af",
      500: "#6b7280",
      600: "#4b5563",
      700: "#374151",
      800: "#1f2937",
      900: "#111827",
      950: "#030712"
    }
  },
  {
    name: "zinc",
    palette: {
      50: "#fafafa",
      100: "#f4f4f5",
      200: "#e4e4e7",
      300: "#d4d4d8",
      400: "#a1a1aa",
      500: "#71717a",
      600: "#52525b",
      700: "#3f3f46",
      800: "#27272a",
      900: "#18181b",
      950: "#09090b"
    }
  },
  {
    name: "neutral",
    palette: {
      50: "#fafafa",
      100: "#f5f5f5",
      200: "#e5e5e5",
      300: "#d4d4d4",
      400: "#a3a3a3",
      500: "#737373",
      600: "#525252",
      700: "#404040",
      800: "#262626",
      900: "#171717",
      950: "#0a0a0a"
    }
  },
  {
    name: "stone",
    palette: {
      50: "#fafaf9",
      100: "#f5f5f4",
      200: "#e7e5e4",
      300: "#d6d3d1",
      400: "#a8a29e",
      500: "#78716c",
      600: "#57534e",
      700: "#44403c",
      800: "#292524",
      900: "#1c1917",
      950: "#0c0a09"
    }
  },
  {
    name: "taupe",
    palette: {
      50: "#fbfaf9",
      100: "#f3f1f1",
      200: "#e8e4e3",
      300: "#d8d2d0",
      400: "#aba09c",
      500: "#7c6d67",
      600: "#5b4f4b",
      700: "#473c39",
      800: "#2b2422",
      900: "#1d1816",
      950: "#0c0a09"
    }
  },
  {
    name: "mauve",
    palette: {
      50: "#fafafa",
      100: "#f3f1f3",
      200: "#e7e4e7",
      300: "#d7d0d7",
      400: "#a89ea9",
      500: "#79697b",
      600: "#594c5b",
      700: "#463947",
      800: "#2a212c",
      900: "#1d161e",
      950: "#0c090c"
    }
  },
  {
    name: "mist",
    palette: {
      50: "#f9fbfb",
      100: "#f1f3f3",
      200: "#e3e7e8",
      300: "#d0d6d8",
      400: "#9ca8ab",
      500: "#67787c",
      600: "#4b585b",
      700: "#394447",
      800: "#22292b",
      900: "#161b1d",
      950: "#090b0c"
    }
  },
  {
    name: "olive",
    palette: {
      50: "#fbfbf9",
      100: "#f4f4f0",
      200: "#e8e8e3",
      300: "#d8d8d0",
      400: "#abab9c",
      500: "#7c7c67",
      600: "#5b5b4b",
      700: "#474739",
      800: "#2b2b22",
      900: "#1d1d16",
      950: "#0c0c09"
    }
  }
];
const _hoisted_1$q = { class: "card flex justify-end" };
const _hoisted_2$o = { class: "text-gray-400 text-xs whitespace-nowrap" };
const _hoisted_3$o = { class: "flex flex-col gap-1" };
const _sfc_main$r = {
  __name: "AppLanguage",
  setup(__props) {
    const { availableLocales, locale } = useI18n();
    const op = ref();
    const curLan = computed(() => {
      if (availableLocales.includes(locale.value)) {
        return LAN_DIS_MAP[locale.value] || locale.value;
      }
      return LAN_DIS_MAP["en"];
    });
    function toggle(event) {
      op.value.toggle(event);
    }
    function changeLocale(lang) {
      locale.value = lang;
      const i18nCookie = useCookie("i18n_redirected");
      i18nCookie.value = lang;
      document.querySelector("html").setAttribute("lang", lang);
      op.value.hide();
    }
    return (_ctx, _cache) => {
      const _component_Button = script$2;
      const _component_Popover = script$3;
      return openBlock(), createElementBlock("div", _hoisted_1$q, [
        createVNode(_component_Button, {
          type: "button",
          severity: "secondary",
          rounded: "",
          onClick: toggle
        }, {
          default: withCtx(() => [
            _cache[0] || (_cache[0] = createBaseVNode("i", { class: "pi pi-language" }, null, -1)),
            createBaseVNode("span", _hoisted_2$o, toDisplayString(curLan.value), 1)
          ]),
          _: 1
        }),
        createVNode(_component_Popover, {
          ref_key: "op",
          ref: op,
          class: "language-popover",
          "pt:root:class": "dark:[--p-popover-background:#373737] dark:[--p-popover-border-color:#333]"
        }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_3$o, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(availableLocales), (lItem) => {
                return openBlock(), createBlock(_component_Button, {
                  onClick: withModifiers(($event) => changeLocale(lItem), ["prevent", "stop"]),
                  severity: "contrast",
                  variant: "text",
                  key: `locale-${lItem}`
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(LAN_DIS_MAP)[lItem] || lItem), 1)
                  ]),
                  _: 2
                }, 1032, ["onClick"]);
              }), 128))
            ])
          ]),
          _: 1
        }, 512)
      ]);
    };
  }
};
const appConfig = ref(null);
const appTheme = ref({
  isDark: false,
  color: "blue"
});
const appModules = ref([]);
const appLanguages = ref([]);
const appSmtp = ref({});
const appTemplate = ref(0);
const countryCode = ref("");
function useConfig() {
  function setAppConfig(value) {
    appConfig.value = value;
  }
  function setAppTheme(value) {
    const isDark = !!value?.isDark;
    const color = value?.color || "blue";
    appTheme.value = {
      isDark,
      color
    };
    let target = THEME_COLOR.find((item) => item.name === color);
    if (!target) {
      appTheme.value.color = "blue";
      target = THEME_COLOR.find((item) => item.name === "blue");
    }
    if (target) {
      r(target.palette);
    }
  }
  function setAppModules(value) {
    appModules.value = value;
  }
  function setAppLanguages(value) {
    appLanguages.value = value;
  }
  function setAppSmtp(value) {
    appSmtp.value = value;
  }
  function setAppTemplate(value) {
    appTemplate.value = value;
  }
  function setCountryCode(value) {
    countryCode.value = value;
  }
  return {
    appConfig,
    setAppConfig,
    appTheme,
    setAppTheme,
    appModules,
    setAppModules,
    appLanguages,
    setAppLanguages,
    appSmtp,
    setAppSmtp,
    appTemplate,
    setAppTemplate,
    countryCode,
    setCountryCode
  };
}
const logoIcon = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='239'%20height='149'%20fill='none'%20viewBox='0%200%20239%20149'%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='0'%20x2='.936'%20y1='0'%20y2='1.057'%3e%3cstop%20offset='0%25'%20stop-color='%23BED2FE'/%3e%3cstop%20offset='100%25'%20stop-color='%234C8AFF'/%3e%3c/linearGradient%3e%3clinearGradient%20id='b'%20x1='.5'%20x2='.5'%20y1='-.208'%20y2='1.087'%3e%3cstop%20offset='0%25'%20stop-color='%23ACE4FD'%20stop-opacity='.44'/%3e%3cstop%20offset='100%25'%20stop-color='%2300B1F9'/%3e%3c/linearGradient%3e%3clinearGradient%20id='c'%20x1='0'%20x2='.819'%20y1='0'%20y2='1.131'%3e%3cstop%20offset='0%25'%20stop-color='%23BED2FE'%20stop-opacity='0'/%3e%3cstop%20offset='100%25'%20stop-color='%234C8AFF'/%3e%3c/linearGradient%3e%3clinearGradient%20id='d'%20x1='0'%20x2='1.17'%20y1='0'%20y2='.727'%3e%3cstop%20offset='0%25'%20stop-color='%23FF3D00'%20stop-opacity='.83'/%3e%3cstop%20offset='100%25'%20stop-color='%23FEF5F2'%20stop-opacity='.41'/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20fill='url(%23a)'%20fill-rule='evenodd'%20d='M162.338%20135.865A74.519%2074.519%200%200%200%20194.565%2074.5c0-41.145-33.326-74.5-74.434-74.5a74.402%2074.402%200%200%200-53.442%2022.643q2.274.29%204.574.715%2014.395%202.657%2026.495%2010.067%2013.986%208.564%2023.086%2022.443%2010.103%2015.41%2013.366%2036.262%203.534%2022.585%2015.568%2034.776%205.337%205.407%2012.56%208.959Z'%20style='mix-blend-mode:passthrough'/%3e%3cg%20style='opacity:.699999988079071'%3e%3cellipse%20cx='193.308'%20cy='103.263'%20fill='url(%23b)'%20rx='45.697'%20ry='45.737'%20style='mix-blend-mode:passthrough'/%3e%3c/g%3e%3cpath%20fill='url(%23c)'%20fill-rule='evenodd'%20d='M119.617%20148.998c-40.907-.283-73.92-33.554-73.92-74.498a74.553%2074.553%200%200%201%208.668-34.892h.283c20.184%200%2038.724%2011.134%2048.22%2028.96q7.163%2011.25%209.622%2026.967%204.631%2029.597%2021.649%2046.836%202.213%202.242%204.617%204.259a74.359%2074.359%200%200%201-19.126%202.368h-.013Z'%20style='mix-blend-mode:passthrough'/%3e%3cpath%20fill='url(%23d)'%20fill-rule='evenodd'%20d='M102.868%2068.568c-9.497-17.826-28.037-28.96-48.22-28.96C24.467%2039.607%200%2064.095%200%2094.303S24.467%20149%2054.648%20149h61.87v-.086a74.37%2074.37%200%200%200%2022.237-2.284q-2.404-2.017-4.616-4.259-17.018-17.24-21.65-46.836-2.459-15.717-9.62-26.967Z'%20style='mix-blend-mode:passthrough'/%3e%3c/svg%3e";
const _hoisted_1$p = { class: "fixed w-full z-[10] h-20" };
const _hoisted_2$n = { class: "h-full flex justify-between items-center px-6 relative" };
const _hoisted_3$n = {
  class: "flex items-center relative z-[1] mr-12",
  href: "#"
};
const _hoisted_4$l = ["src"];
const _hoisted_5$l = { class: "items-center grow justify-between hidden lg:flex absolute lg:static flex-1 left-0 top-0 pt-20 px-10 lg:px-0 lg:pt-0 bg-white/70 dark:bg-black/70 lg:bg-transparent dark:lg:bg-transparent backdrop-blur-md lg:backdrop-blur-none w-full lg:w-auto" };
const _hoisted_6$l = ["onClick"];
const _hoisted_7$k = { class: "flex items-center justify-between pt-3 pb-5 lg:p-0" };
const _hoisted_8$k = { class: "ml-1 text-2xl font-medium" };
const _hoisted_9$j = { key: 1 };
const _sfc_main$q = {
  __name: "AppTopbar",
  setup(__props) {
    const { locale, availableLocales } = useI18n();
    const { appModules: appModules2, appConfig: appConfig2, appTemplate: appTemplate2 } = useConfig();
    const isObserverDomVisible = ref(true);
    const headerList = computed(() => {
      return appModules2.value?.filter((item) => !["hero", "herov"].includes(item)) || [];
    });
    function handleTopBar(flg) {
      isObserverDomVisible.value = flg;
    }
    function smoothScroll(id2) {
      document.body.click();
      const element = document.getElementById(id2);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    }
    return (_ctx, _cache) => {
      const _component_ObserverDom = _sfc_main$s;
      const _component_Button = script$2;
      const _component_AppLanguage = _sfc_main$r;
      const _directive_styleclass = StyleClass;
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(_component_ObserverDom, { onIntersect: handleTopBar }),
        createBaseVNode("div", _hoisted_1$p, [
          createBaseVNode("div", {
            class: normalizeClass(["absolute w-full h-full", [{ "bg-white/70 dark:bg-black/70 backdrop-blur-md": !isObserverDomVisible.value }]])
          }, null, 2),
          createBaseVNode("div", _hoisted_2$n, [
            createBaseVNode("a", _hoisted_3$n, [
              createBaseVNode("img", {
                src: unref(appConfig2)?.siteLogo ? unref(appConfig2).siteLogo : unref(logoIcon),
                class: "w-10 h-10 mr-2",
                width: "33",
                height: "32",
                alt: "logo"
              }, null, 8, _hoisted_4$l),
              createBaseVNode("span", {
                class: normalizeClass(["font-semibold text-2xl leading-normal whitespace-nowrap", [{
                  "text-primary-600": !unref(appConfig2)?.isLogoTextCustomColor
                }]])
              }, toDisplayString(unref(appConfig2)?.siteName || "Dorawow"), 3)
            ]),
            withDirectives((openBlock(), createBlock(_component_Button, {
              class: "lg:!hidden relative z-[1]",
              text: "",
              severity: "secondary",
              rounded: ""
            }, {
              default: withCtx(() => [..._cache[0] || (_cache[0] = [
                createBaseVNode("i", { class: "pi pi-bars !text-2xl" }, null, -1)
              ])]),
              _: 1
            })), [
              [_directive_styleclass, {
                selector: "@next",
                enterFromClass: "hidden",
                enterActiveClass: "animate-fadein",
                leaveToClass: "hidden",
                leaveActiveClass: "animate-fadeout",
                hideOnOutsideClick: true
              }]
            ]),
            createBaseVNode("div", _hoisted_5$l, [
              createBaseVNode("ul", {
                class: normalizeClass(["list-none py-3 m-0 flex lg:p-0 lg:items-center select-none flex-col lg:flex-row cursor-pointer", headerList.value.length < 5 ? "gap-8" : "gap-6"])
              }, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(headerList.value, (item) => {
                  return openBlock(), createElementBlock("li", {
                    key: `header_${item}`
                  }, [
                    createBaseVNode("a", {
                      onClick: ($event) => smoothScroll(item),
                      class: normalizeClass(["px-0 py-4 text-primary hover:opacity-60 whitespace-nowrap", headerList.value.length < 5 ? "text-xl" : "text-base"])
                    }, [
                      createBaseVNode("span", null, toDisplayString(_ctx.$t(`header.${item}`)), 1)
                    ], 10, _hoisted_6$l)
                  ]);
                }), 128))
              ], 2),
              createBaseVNode("div", _hoisted_7$k, [
                createBaseVNode("div", {
                  class: normalizeClass([[{ "mr-6": unref(availableLocales).length > 1 }], "flex flex-col gap-2 text-right whitespace-nowrap text-shadow-xs"])
                }, [
                  unref(appConfig2)?.phoneNumber?.[unref(locale)] ? (openBlock(), createElementBlock("div", {
                    key: 0,
                    class: normalizeClass(["text-surface-700 dark:text-surface-200", [{ "xl:text-surface-200": unref(appTemplate2) === 1 && unref(appConfig2)?.isPosterDark && isObserverDomVisible.value }]])
                  }, [
                    _cache[1] || (_cache[1] = createBaseVNode("i", { class: "text-xl mr-1 pi pi-phone" }, null, -1)),
                    createBaseVNode("span", _hoisted_8$k, toDisplayString(unref(appConfig2)?.phoneNumber[unref(locale)]), 1)
                  ], 2)) : createCommentVNode("", true),
                  unref(appConfig2)?.businessHours?.[unref(locale)] ? (openBlock(), createElementBlock("div", {
                    key: 1,
                    class: normalizeClass(["text-xs text-surface-500 dark:text-surface-300", [{ "xl:text-surface-300": unref(appTemplate2) === 1 && unref(appConfig2)?.isPosterDark && isObserverDomVisible.value }]])
                  }, toDisplayString(_ctx.$t(`Contact.businessHours`)) + "   " + toDisplayString(unref(appConfig2)?.businessHours[unref(locale)]), 3)) : createCommentVNode("", true)
                ], 2),
                unref(availableLocales).length > 1 ? (openBlock(), createBlock(_component_AppLanguage, { key: 0 })) : (openBlock(), createElementBlock("div", _hoisted_9$j))
              ])
            ])
          ])
        ])
      ], 64);
    };
  }
};
const _hoisted_1$o = { class: "relative bg-white dark:bg-black/70" };
const _hoisted_2$m = { class: "py-3" };
const _hoisted_3$m = { class: "flex justify-between items-center pb-3 max-w-6xl mx-auto" };
const _hoisted_4$k = { class: "w-full px-6 flex items-center justify-between" };
const _hoisted_5$k = { class: "flex items-center" };
const _hoisted_6$k = {
  class: "flex items-center relative z-1 mr-16",
  href: "#"
};
const _hoisted_7$j = ["src"];
const _hoisted_8$j = { class: "text-surface-900 dark:text-surface-0 font-semibold text-2xl leading-normal whitespace-nowrap" };
const _hoisted_9$i = { class: "flex items-center justify-between pt-3 pb-5 lg:p-0" };
const _hoisted_10$f = {
  key: 0,
  class: "text-surface-700 dark:text-surface-200"
};
const _hoisted_11$e = { class: "ml-1 text-2xl font-medium" };
const _hoisted_12$c = {
  key: 1,
  class: "text-xs text-surface-500 dark:text-surface-300"
};
const _hoisted_13$a = { key: 1 };
const _hoisted_14$a = { class: "flex py-3 px-6 mt-3 items-center text-center whitespace-nowrap max-w-6xl mx-auto" };
const _hoisted_15$8 = ["onClick"];
const _sfc_main$p = {
  __name: "AppTemplate2Topbar",
  setup(__props) {
    const { locale, availableLocales } = useI18n();
    const { appModules: appModules2, appConfig: appConfig2 } = useConfig();
    ref(true);
    const headerList = computed(() => {
      return (appModules2.value?.filter((item) => !["hero", "herov"].includes(item)) || []).slice(0, 4);
    });
    function smoothScroll(id2) {
      document.body.click();
      const element = document.getElementById(id2);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    }
    return (_ctx, _cache) => {
      const _component_AppLanguage = _sfc_main$r;
      return openBlock(), createElementBlock("div", _hoisted_1$o, [
        createBaseVNode("div", _hoisted_2$m, [
          createBaseVNode("div", _hoisted_3$m, [
            createBaseVNode("div", _hoisted_4$k, [
              createBaseVNode("div", _hoisted_5$k, [
                createBaseVNode("a", _hoisted_6$k, [
                  createBaseVNode("img", {
                    src: unref(appConfig2)?.siteLogo ? unref(appConfig2).siteLogo : unref(logoIcon),
                    class: "w-10 h-10 mr-2",
                    width: "33",
                    height: "32"
                  }, null, 8, _hoisted_7$j),
                  createBaseVNode("span", _hoisted_8$j, toDisplayString(unref(appConfig2)?.siteName || "Dorawow"), 1)
                ])
              ]),
              createBaseVNode("div", _hoisted_9$i, [
                createBaseVNode("div", {
                  class: normalizeClass([[{ "mr-6": unref(availableLocales).length > 1 }], "flex flex-col gap-2 text-right whitespace-nowrap text-shadow-xs hidden sm:block"])
                }, [
                  unref(appConfig2)?.phoneNumber?.[unref(locale)] ? (openBlock(), createElementBlock("div", _hoisted_10$f, [
                    _cache[0] || (_cache[0] = createBaseVNode("i", { class: "text-xl mr-1 pi pi-phone" }, null, -1)),
                    createBaseVNode("span", _hoisted_11$e, toDisplayString(unref(appConfig2)?.phoneNumber[unref(locale)]), 1)
                  ])) : createCommentVNode("", true),
                  unref(appConfig2)?.businessHours?.[unref(locale)] ? (openBlock(), createElementBlock("div", _hoisted_12$c, toDisplayString(_ctx.$t(`Contact.businessHours`)) + "   " + toDisplayString(unref(appConfig2)?.businessHours[unref(locale)]), 1)) : createCommentVNode("", true)
                ], 2),
                unref(availableLocales).length > 1 ? (openBlock(), createBlock(_component_AppLanguage, { key: 0 })) : (openBlock(), createElementBlock("div", _hoisted_13$a))
              ])
            ])
          ]),
          _cache[3] || (_cache[3] = createBaseVNode("div", { class: "border-b border-gray-400 dark:border-gray-600" }, null, -1)),
          createBaseVNode("div", _hoisted_14$a, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(headerList), (item) => {
              return openBlock(), createElementBlock(Fragment, {
                key: `header_${item}`
              }, [
                _cache[1] || (_cache[1] = createBaseVNode("div", { class: "split-line w-px h-[1em] bg-gray-400 dark:bg-gray-600" }, null, -1)),
                createBaseVNode("a", {
                  class: normalizeClass(["nav-item text-md leading-5 text-surface-700 dark:text-surface-200 transition-colors duration-300 transform hover:underline md:my-0", [{
                    "w-full": unref(headerList).length === 1,
                    "w-1/2": unref(headerList).length === 2,
                    "w-1/3": unref(headerList).length === 3,
                    "w-1/4": unref(headerList).length === 4,
                    "w-1/5": unref(headerList).length === 5
                  }]]),
                  href: "javascript:void(0)",
                  onClick: ($event) => smoothScroll(item)
                }, [
                  createBaseVNode("span", null, toDisplayString(_ctx.$t(`header.${item}`)), 1)
                ], 10, _hoisted_15$8)
              ], 64);
            }), 128)),
            _cache[2] || (_cache[2] = createBaseVNode("div", { class: "split-line w-px h-[1em] bg-gray-400 dark:bg-gray-600" }, null, -1))
          ])
        ])
      ]);
    };
  }
};
const bannerImg = "" + new URL("banner-placeholder.jpg", import.meta.url).href;
const _hoisted_1$n = { class: "relative w-full" };
const _hoisted_2$l = { class: "absolute w-full h-full overflow-hidden" };
const _hoisted_3$l = ["src", "poster"];
const _hoisted_4$j = ["src"];
const _hoisted_5$j = { class: "relative flex items-center justify-center w-full min-h-[48rem] bg-gray-900/50 py-20" };
const _hoisted_6$j = { class: "text-center px-12" };
const _hoisted_7$i = { class: "text-4xl md:text-5xl xl:text-6xl font-light text-gray-200 leading-tight mb-16 max-w-full lg:max-w-[80%] mx-auto" };
const _hoisted_8$i = { key: 1 };
const _hoisted_9$h = {
  key: 0,
  class: "font-normal text-lg md:text-xl xl:text-2xl leading-normal md:mt-4 text-gray-300 max-w-full lg:max-w-[90%] mx-auto whitespace-pre-wrap"
};
const _sfc_main$o = {
  __name: "AppTemplate0Hero",
  setup(__props) {
    const { locale } = useI18n();
    const { appModules: appModules2, appConfig: appConfig2 } = useConfig();
    function parseBoldText(text) {
      const lines = text.split("\n");
      const result = [];
      for (const line of lines) {
        const lineResult = [];
        let currentIndex = 0;
        let inBold = false;
        let boldStart = -1;
        for (let i = 0; i < line.length; i++) {
          if (!inBold && line.slice(i, i + 2) === "**") {
            if (i > currentIndex) {
              const normalText = line.slice(currentIndex, i);
              if (normalText) {
                lineResult.push({
                  str: normalText
                });
              }
            }
            inBold = true;
            boldStart = i + 2;
            i++;
            currentIndex = i + 1;
            continue;
          }
          if (inBold && line.slice(i, i + 2) === "**") {
            const boldText = line.slice(boldStart, i);
            if (boldText) {
              lineResult.push({
                str: boldText,
                isBold: true
              });
            }
            inBold = false;
            i++;
            currentIndex = i + 1;
            continue;
          }
        }
        if (currentIndex < line.length) {
          const remainingText = line.slice(currentIndex);
          if (remainingText) {
            lineResult.push({
              str: remainingText
            });
          }
        }
        result.push(lineResult);
      }
      return result;
    }
    const titleInfo = computed(() => {
      if (typeof appConfig2.value?.bannerTitle?.[locale.value] === "string") {
        return parseBoldText(appConfig2.value.bannerTitle[locale.value]);
      }
      return [];
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$n, [
        createBaseVNode("div", _hoisted_2$l, [
          unref(appConfig2)?.bannerVideo && unref(appModules2)?.includes("herov") ? (openBlock(), createElementBlock("video", {
            key: 0,
            class: "w-full h-full object-cover",
            src: unref(appConfig2).bannerVideo,
            poster: unref(appConfig2)?.bannerPoster,
            "x5-video-player-type": "h5",
            autoplay: "",
            "webkit-playsinline": "",
            playsinline: "",
            muted: "",
            loop: ""
          }, null, 8, _hoisted_3$l)) : (openBlock(), createElementBlock("img", {
            key: 1,
            class: "w-full h-full object-cover",
            src: unref(appConfig2)?.bannerPoster ? unref(appConfig2).bannerPoster : unref(bannerImg)
          }, null, 8, _hoisted_4$j))
        ]),
        createBaseVNode("div", _hoisted_5$j, [
          createBaseVNode("div", _hoisted_6$j, [
            createBaseVNode("h1", _hoisted_7$i, [
              titleInfo.value.length ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(titleInfo.value, (arr, i) => {
                return openBlock(), createElementBlock("div", {
                  key: `title_${i}`
                }, [
                  arr.length > 0 ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(arr, (item, j) => {
                    return openBlock(), createElementBlock("span", {
                      key: `title_${i}_${j}`,
                      class: normalizeClass([{ "font-bold": item.isBold }])
                    }, toDisplayString(item.str), 3);
                  }), 128)) : (openBlock(), createElementBlock("br", _hoisted_8$i))
                ]);
              }), 128)) : createCommentVNode("", true)
            ]),
            unref(appConfig2)?.bannerSubTitle?.[unref(locale)] ? (openBlock(), createElementBlock("div", _hoisted_9$h, toDisplayString(unref(appConfig2).bannerSubTitle[unref(locale)]), 1)) : createCommentVNode("", true)
          ])
        ])
      ]);
    };
  }
};
const _hoisted_1$m = { class: "w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-20 md:pt-25 text-center" };
const _hoisted_2$k = { class: "flex flex-col gap-12" };
const _hoisted_3$k = { class: "flex flex-col items-center" };
const _hoisted_4$i = { class: "text-center text-primary font-bold text-3xl leading-tight" };
const _hoisted_5$i = { class: "text-center text-surface-500 dark:text-surface-200 font-bold text-xl leading-tight mt-6 px-6" };
const _hoisted_6$i = {
  key: 0,
  class: "flex flex-col gap-10"
};
const _hoisted_7$h = { class: "flex-1" };
const _hoisted_8$h = { class: "w-full max-w-lg mx-auto pb-[90%] sm:pb-[40%] relative" };
const _hoisted_9$g = { class: "flex flex-col justify-center flex-1" };
const _hoisted_10$e = { class: "max-w-lg mx-auto text-lg sm:text-2xl text-center text-surface-500 dark:text-surface-100 mb-4 sm:mb-8" };
const _hoisted_11$d = { class: "max-w-lg px-4 text-surface-400 dark:text-surface-500 text-sm sm:text-base leading-tight text-left whitespace-pre-wrap" };
const _hoisted_12$b = { class: "flex flex-col justify-center flex-1" };
const _hoisted_13$9 = { class: "max-w-lg mx-auto text-lg sm:text-2xl text-center text-surface-500 dark:text-surface-100 mb-4 sm:mb-8" };
const _hoisted_14$9 = { class: "max-w-lg px-4 text-surface-400 dark:text-surface-500 text-sm sm:text-base leading-tight text-left whitespace-pre-wrap" };
const _hoisted_15$7 = { class: "flex-1" };
const _hoisted_16$6 = { class: "w-full max-w-lg mx-auto pb-[90%] sm:pb-[40%] relative" };
const _hoisted_17$5 = {
  key: 1,
  class: "flex flex-col gap-10"
};
const _sfc_main$n = {
  __name: "AppTemplate0ServiceGrid",
  setup(__props) {
    const { locale } = useI18n();
    const { appConfig: appConfig2 } = useConfig();
    const businessList = computed(() => {
      if (appConfig2.value?.businessList && appConfig2.value.businessList.length > 0) {
        return appConfig2.value.businessList;
      }
      return [];
    });
    return (_ctx, _cache) => {
      const _component_DeferredContent = script$4;
      return openBlock(), createElementBlock("div", _hoisted_1$m, [
        createBaseVNode("div", _hoisted_2$k, [
          createBaseVNode("div", _hoisted_3$k, [
            createBaseVNode("div", _hoisted_4$i, toDisplayString(_ctx.$t("Service.title")), 1),
            createBaseVNode("div", _hoisted_5$i, toDisplayString(_ctx.$t("Service.subtitle")), 1)
          ]),
          businessList.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_6$i, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(businessList.value, (item, i) => {
              return openBlock(), createElementBlock("div", {
                class: "w-full flex gap-10",
                key: `business_${i}`
              }, [
                (i + 1) % 2 ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                  createBaseVNode("div", _hoisted_7$h, [
                    createBaseVNode("div", _hoisted_8$h, [
                      createVNode(_component_DeferredContent, null, {
                        default: withCtx(() => [
                          createBaseVNode("div", {
                            class: "absolute w-full h-full top-0 bg-cover bg-no-repeat bg-center",
                            style: normalizeStyle({ backgroundImage: `url(${item.icon})` })
                          }, null, 4)
                        ]),
                        _: 2
                      }, 1024)
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_9$g, [
                    createBaseVNode("div", _hoisted_10$e, toDisplayString(item.title?.[unref(locale)]), 1),
                    createBaseVNode("pre", _hoisted_11$d, toDisplayString(item.desc?.[unref(locale)]), 1)
                  ])
                ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                  createBaseVNode("div", _hoisted_12$b, [
                    createBaseVNode("div", _hoisted_13$9, toDisplayString(item.title?.[unref(locale)]), 1),
                    createBaseVNode("pre", _hoisted_14$9, toDisplayString(item.desc?.[unref(locale)]), 1)
                  ]),
                  createBaseVNode("div", _hoisted_15$7, [
                    createBaseVNode("div", _hoisted_16$6, [
                      createVNode(_component_DeferredContent, null, {
                        default: withCtx(() => [
                          createBaseVNode("div", {
                            class: "absolute w-full h-full top-0 bg-cover bg-no-repeat bg-center",
                            style: normalizeStyle({ backgroundImage: `url(${item.icon})` })
                          }, null, 4)
                        ]),
                        _: 2
                      }, 1024)
                    ])
                  ])
                ], 64))
              ]);
            }), 128))
          ])) : (openBlock(), createElementBlock("div", _hoisted_17$5, [..._cache[0] || (_cache[0] = [
            createStaticVNode('<div class="w-full flex gap-10"><div class="flex-1"><div class="w-full max-w-lg mx-auto pt-[90%] sm:pt-[40%] bg-gray-300"></div></div><div class="flex flex-col justify-center flex-1"><div class="max-w-lg mx-auto text-lg sm:text-2xl text-center text-surface-500 dark:text-surface-100 mb-4 sm:mb-8">XXXXXXXXXX</div><pre class="max-w-lg px-4 text-surface-400 dark:text-surface-500 text-sm sm:text-base leading-tight text-left whitespace-pre-wrap">· yyyyy<br>· yyyyy</pre></div></div><div class="w-full flex gap-10"><div class="flex flex-col justify-center flex-1"><div class="max-w-lg mx-auto text-lg sm:text-2xl text-center text-surface-500 dark:text-surface-100 mb-4 sm:mb-8">XXXXXXXXXX</div><pre class="max-w-lg px-4 text-surface-400 dark:text-surface-500 text-sm sm:text-base leading-tight text-left whitespace-pre-wrap">· yyyyy<br>· yyyyy</pre></div><div class="flex-1"><div class="w-full max-w-lg mx-auto pt-[90%] sm:pt-[40%] bg-gray-300"></div></div></div><div class="w-full flex gap-10"><div class="flex-1"><div class="w-full max-w-lg mx-auto pt-[90%] sm:pt-[40%] bg-gray-300"></div></div><div class="flex flex-col justify-center flex-1"><div class="max-w-lg mx-auto text-lg sm:text-2xl text-center text-surface-500 dark:text-surface-100 mb-4 sm:mb-8">XXXXXXXXXX</div><pre class="max-w-lg px-4 text-surface-400 dark:text-surface-500 text-sm sm:text-base leading-tight text-left whitespace-pre-wrap">· yyyyy<br>· yyyyy</pre></div></div>', 3)
          ])]))
        ])
      ]);
    };
  }
};
const _hoisted_1$l = { class: "w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-20 md:pt-25 text-center" };
const _hoisted_2$j = { class: "flex flex-col gap-6" };
const _hoisted_3$j = { class: "flex flex-col items-center gap-4" };
const _hoisted_4$h = { class: "font-bold text-3xl leading-tight" };
const _hoisted_5$h = { class: "text-primary" };
const _hoisted_6$h = { class: "text-surface-700 dark:text-surface-100 text-left mb-3 text-lg sm:text-3xl line-clamp-1" };
const _hoisted_7$g = { class: "text-surface-400 dark:text-surface-500 text-left mb-5 text-sm sm:text-base line-clamp-1" };
const _hoisted_8$g = { class: "w-full pb-[56.25%] relative" };
const _hoisted_9$f = {
  key: 1,
  class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
};
const _sfc_main$m = {
  __name: "AppPortfolio",
  setup(__props) {
    const { locale } = useI18n();
    const { appConfig: appConfig2 } = useConfig();
    const portfolioList = computed(() => {
      if (appConfig2.value?.portfolioList && appConfig2.value.portfolioList.length > 0) {
        return appConfig2.value.portfolioList;
      }
      return [];
    });
    return (_ctx, _cache) => {
      const _component_DeferredContent = script$4;
      return openBlock(), createElementBlock("div", _hoisted_1$l, [
        createBaseVNode("div", _hoisted_2$j, [
          createBaseVNode("div", _hoisted_3$j, [
            createBaseVNode("div", _hoisted_4$h, [
              createBaseVNode("span", _hoisted_5$h, toDisplayString(_ctx.$t("Portfolio.title")), 1)
            ])
          ]),
          portfolioList.value.length > 0 ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(["grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6", [{ "!grid-cols-1": portfolioList.value.length === 1, "!grid-cols-2": portfolioList.value.length === 2 }]])
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(portfolioList.value, (item, i) => {
              return openBlock(), createElementBlock("div", {
                key: `portfolio_${i}`,
                class: "mx-auto max-w-md w-full"
              }, [
                createBaseVNode("div", _hoisted_6$h, toDisplayString(item.title?.[unref(locale)]), 1),
                createBaseVNode("div", _hoisted_7$g, toDisplayString(item.tag?.[unref(locale)]), 1),
                createBaseVNode("div", _hoisted_8$g, [
                  createVNode(_component_DeferredContent, null, {
                    default: withCtx(() => [
                      createBaseVNode("div", {
                        class: "absolute w-full h-full top-0 bg-cover bg-no-repeat bg-center",
                        style: normalizeStyle({ backgroundImage: `url(${item.icon})` })
                      }, null, 4)
                    ]),
                    _: 2
                  }, 1024)
                ])
              ]);
            }), 128))
          ], 2)) : (openBlock(), createElementBlock("div", _hoisted_9$f, [..._cache[0] || (_cache[0] = [
            createStaticVNode('<div class="w-full pt-[60%] bg-gray-300"></div><div class="w-full pt-[60%] bg-gray-300"></div><div class="w-full pt-[60%] bg-gray-300"></div><div class="w-full pt-[60%] bg-gray-300 hidden md:block"></div><div class="w-full pt-[60%] bg-gray-300 hidden md:block"></div><div class="w-full pt-[60%] bg-gray-300 hidden md:block"></div>', 6)
          ])]))
        ])
      ]);
    };
  }
};
const _hoisted_1$k = { class: "w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-20 md:pt-25 text-center" };
const _hoisted_2$i = { class: "flex flex-col gap-6" };
const _hoisted_3$i = { class: "flex flex-col items-center gap-4" };
const _hoisted_4$g = { class: "font-bold text-3xl leading-tight" };
const _hoisted_5$g = { class: "text-primary" };
const _hoisted_6$g = {
  key: 0,
  class: "flex flex-col"
};
const _hoisted_7$f = { class: "flex items-center w-full gap-4" };
const _hoisted_8$f = { class: "w-[100px] min-w-[100px] xs:w-[200px] xs:min-w-[200px] lg:w-3xs lg:min-w-3xs h-20 xs:h-40 lg:h-50 relative" };
const _hoisted_9$e = { class: "w-[100px] min-w-[100px] xs:w-[200px] xs:min-w-[200px] lg:w-3xs lg:min-w-3xs h-20 xs:h-40 lg:h-50 relative hidden md:block" };
const _hoisted_10$d = { class: "flex-1 overflow-hidden" };
const _hoisted_11$c = { class: "flex items-center mb-3" };
const _hoisted_12$a = { class: "text-surface-700 dark:text-surface-100 text-left text-lg sm:text-2xl line-clamp-1" };
const _hoisted_13$8 = {
  key: 0,
  class: "w-full flex items-center text-left"
};
const _hoisted_14$8 = { class: "text-primary font-semibold overflow-hidden text-ellipsis whitespace-nowrap" };
const _hoisted_15$6 = { class: "text-xs dark:text-surface-100 ml-1" };
const _hoisted_16$5 = {
  key: 0,
  class: "flex items-center mt-3"
};
const _hoisted_17$4 = {
  key: 0,
  class: "bg-primary-300 mr-2 px-2 text-white dark:text-surface-800 whitespace-nowrap"
};
const _hoisted_18$3 = {
  key: 1,
  class: "dark:text-surface-100 line-clamp-3 text-left"
};
const _hoisted_19$3 = { class: "hidden lg:block" };
const _hoisted_20$3 = { class: "lg:hidden" };
const _hoisted_21$3 = {
  key: 1,
  class: "flex flex-col"
};
const _hoisted_22$2 = { class: "flex items-center w-full gap-4" };
const _hoisted_23$2 = { class: "flex-1 overflow-hidden" };
const _hoisted_24$2 = { class: "flex items-center mb-3" };
const _hoisted_25$1 = { class: "w-full flex items-center text-left" };
const _hoisted_26$1 = { class: "text-xs dark:text-surface-100 ml-1" };
const _hoisted_27$1 = { class: "flex items-center w-full gap-4" };
const _hoisted_28 = { class: "flex-1 overflow-hidden" };
const _hoisted_29 = { class: "flex items-center mb-3" };
const _hoisted_30 = { class: "w-full flex items-center text-left" };
const _hoisted_31 = { class: "text-xs dark:text-surface-100 ml-1" };
const _hoisted_32 = { class: "flex items-center" };
const _hoisted_33 = { class: "text-surface-700 dark:text-surface-100 text-2xl" };
const _hoisted_34 = { class: "grid grid-cols-1 md:grid-cols-2 gap-4 px-4" };
const _hoisted_35 = ["src"];
const _hoisted_36 = ["src"];
const _hoisted_37 = {
  key: 1,
  class: "flex items-center justify-center text-left mt-3"
};
const _hoisted_38 = { class: "text-primary font-semibold overflow-hidden text-ellipsis whitespace-nowrap" };
const _hoisted_39 = { class: "text-xs dark:text-surface-100 ml-1" };
const _hoisted_40 = { class: "w-full grid grid-cols-1 md:grid-cols-2 px-4 my-8" };
const _hoisted_41 = { class: "w-full min-w-full bg-primary-300 py-6 px-4 text-white dark:text-surface-800 border border-x-0 border-t-0 border-surface-200 dark:border-surface-500" };
const _hoisted_42 = { class: "w-full min-w-full dark:text-surface-100 text-left py-6 px-4 border border-x-0 border-t-0 border-surface-200 dark:border-surface-500" };
const _sfc_main$l = {
  __name: "AppProduct",
  setup(__props) {
    const { locale } = useI18n();
    const { appConfig: appConfig2 } = useConfig();
    const visible = ref(false);
    const activeItem = ref(null);
    const productList = computed(() => {
      if (appConfig2.value?.productList && appConfig2.value.productList.length > 0) {
        return appConfig2.value.productList;
      }
      return [];
    });
    const images = computed(() => {
      if (activeItem.value) {
        return activeItem.value.productImgs || [];
      }
      return [];
    });
    const parameterImage = computed(() => {
      if (activeItem.value) {
        return activeItem.value.parameterImg || "";
      }
      return "";
    });
    function showDialog(item) {
      visible.value = true;
      activeItem.value = item;
    }
    return (_ctx, _cache) => {
      const _component_DeferredContent = script$4;
      const _component_Tag = script$5;
      const _component_Button = script$2;
      const _component_divider = script$6;
      const _component_Galleria = script$7;
      const _component_Image = script$8;
      const _component_Dialog = script$9;
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1$k, [
          createBaseVNode("div", _hoisted_2$i, [
            createBaseVNode("div", _hoisted_3$i, [
              createBaseVNode("div", _hoisted_4$g, [
                createBaseVNode("span", _hoisted_5$g, toDisplayString(_ctx.$t("Product.title")), 1)
              ])
            ]),
            productList.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_6$g, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(productList.value, (item, i) => {
                return openBlock(), createElementBlock(Fragment, {
                  key: `product_${i}`
                }, [
                  createBaseVNode("div", _hoisted_7$f, [
                    createBaseVNode("div", _hoisted_8$f, [
                      createVNode(_component_DeferredContent, null, {
                        default: withCtx(() => [
                          createBaseVNode("div", {
                            class: "absolute w-full h-full top-0 bg-contain bg-no-repeat bg-center",
                            style: normalizeStyle({ backgroundImage: `url(${item.productImgs[0]})` })
                          }, null, 4)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    createBaseVNode("div", _hoisted_9$e, [
                      createVNode(_component_DeferredContent, null, {
                        default: withCtx(() => [
                          createBaseVNode("div", {
                            class: "absolute w-full h-full top-0 bg-contain bg-no-repeat bg-center",
                            style: normalizeStyle({ backgroundImage: `url(${item.parameterImg})` })
                          }, null, 4)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    createBaseVNode("div", _hoisted_10$d, [
                      createBaseVNode("div", _hoisted_11$c, [
                        createBaseVNode("div", _hoisted_12$a, toDisplayString(item.title?.[unref(locale)] || "-"), 1),
                        item.tag?.[unref(locale)] ? (openBlock(), createBlock(_component_Tag, {
                          key: 0,
                          class: "ml-3 whitespace-nowrap !bg-transparent border !border-current !font-light !text-surface-400 !dark:text-surface-500"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item.tag?.[unref(locale)]), 1)
                          ]),
                          _: 2
                        }, 1024)) : createCommentVNode("", true)
                      ]),
                      Number(item.price?.[unref(locale)]) > 0 ? (openBlock(), createElementBlock("div", _hoisted_13$8, [
                        createBaseVNode("div", _hoisted_14$8, toDisplayString(Number(item.price?.[unref(locale)]).toLocaleString()), 1),
                        createBaseVNode("div", _hoisted_15$6, toDisplayString(unref(LAN_CURRENCY_MAP)[unref(locale)]), 1)
                      ])) : createCommentVNode("", true),
                      (openBlock(true), createElementBlock(Fragment, null, renderList(item.customArg?.slice(0, 3), (cItem, i2) => {
                        return openBlock(), createElementBlock(Fragment, {
                          key: `product_custom_arg_${i2}`
                        }, [
                          cItem.label?.[unref(locale)] || cItem.value?.[unref(locale)] ? (openBlock(), createElementBlock("div", _hoisted_16$5, [
                            cItem.label?.[unref(locale)] ? (openBlock(), createElementBlock("div", _hoisted_17$4, toDisplayString(cItem.label?.[unref(locale)]), 1)) : createCommentVNode("", true),
                            cItem.value?.[unref(locale)] ? (openBlock(), createElementBlock("div", _hoisted_18$3, toDisplayString(cItem.value?.[unref(locale)]), 1)) : createCommentVNode("", true)
                          ])) : createCommentVNode("", true)
                        ], 64);
                      }), 128))
                    ]),
                    createBaseVNode("div", _hoisted_19$3, [
                      createVNode(_component_Button, {
                        class: "w-20 h-20 !rounded-none",
                        onClick: ($event) => showDialog(item)
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("Product.button")), 1)
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_20$3, [
                    createVNode(_component_Button, {
                      class: "w-full mt-3 !rounded-none",
                      onClick: ($event) => showDialog(item)
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("Product.button")), 1)
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  i < productList.value.length - 1 ? (openBlock(), createBlock(_component_divider, {
                    key: 0,
                    class: "[--p-divider-border-color:#cbd5e1] dark:[--p-divider-border-color:#52525b]"
                  })) : createCommentVNode("", true)
                ], 64);
              }), 128))
            ])) : (openBlock(), createElementBlock("div", _hoisted_21$3, [
              createBaseVNode("div", _hoisted_22$2, [
                _cache[4] || (_cache[4] = createBaseVNode("div", { class: "w-[100px] min-w-[100px] xs:w-[200px] xs:min-w-[200px] lg:w-3xs lg:min-w-3xs h-20 xs:h-40 lg:h-50 relative bg-gray-300" }, null, -1)),
                _cache[5] || (_cache[5] = createBaseVNode("div", { class: "w-[100px] min-w-[100px] xs:w-[200px] xs:min-w-[200px] lg:w-3xs lg:min-w-3xs h-20 xs:h-40 lg:h-50 relative hidden md:block bg-gray-300" }, null, -1)),
                createBaseVNode("div", _hoisted_23$2, [
                  createBaseVNode("div", _hoisted_24$2, [
                    _cache[2] || (_cache[2] = createBaseVNode("div", { class: "text-surface-700 dark:text-surface-100 text-left text-lg sm:text-2xl line-clamp-1" }, "XXXXXXXXXXXXXXXXXX", -1)),
                    createVNode(_component_Tag, { class: "ml-3 whitespace-nowrap !bg-transparent border !border-current !font-light !text-surface-400 !dark:text-surface-500" }, {
                      default: withCtx(() => [..._cache[1] || (_cache[1] = [
                        createTextVNode("xxx", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  createBaseVNode("div", _hoisted_25$1, [
                    _cache[3] || (_cache[3] = createBaseVNode("div", { class: "text-primary font-semibold overflow-hidden text-ellipsis whitespace-nowrap" }, "000,000,000", -1)),
                    createBaseVNode("div", _hoisted_26$1, toDisplayString(unref(LAN_CURRENCY_MAP)[unref(locale)]), 1)
                  ])
                ])
              ]),
              createVNode(_component_divider, { class: "[--p-divider-border-color:#cbd5e1] dark:[--p-divider-border-color:#52525b]" }),
              createBaseVNode("div", _hoisted_27$1, [
                _cache[9] || (_cache[9] = createBaseVNode("div", { class: "w-[100px] min-w-[100px] xs:w-[200px] xs:min-w-[200px] lg:w-3xs lg:min-w-3xs h-20 xs:h-40 lg:h-50 relative bg-gray-300" }, null, -1)),
                _cache[10] || (_cache[10] = createBaseVNode("div", { class: "w-[100px] min-w-[100px] xs:w-[200px] xs:min-w-[200px] lg:w-3xs lg:min-w-3xs h-20 xs:h-40 lg:h-50 relative hidden md:block bg-gray-300" }, null, -1)),
                createBaseVNode("div", _hoisted_28, [
                  createBaseVNode("div", _hoisted_29, [
                    _cache[7] || (_cache[7] = createBaseVNode("div", { class: "text-surface-700 dark:text-surface-100 text-left text-lg sm:text-2xl line-clamp-1" }, "XXXXXXXXXXXXXXXXXX", -1)),
                    createVNode(_component_Tag, { class: "ml-3 whitespace-nowrap !bg-transparent border !border-current !font-light !text-surface-400 !dark:text-surface-500" }, {
                      default: withCtx(() => [..._cache[6] || (_cache[6] = [
                        createTextVNode("xxx", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  createBaseVNode("div", _hoisted_30, [
                    _cache[8] || (_cache[8] = createBaseVNode("div", { class: "text-primary font-semibold overflow-hidden text-ellipsis whitespace-nowrap" }, "000,000,000", -1)),
                    createBaseVNode("div", _hoisted_31, toDisplayString(unref(LAN_CURRENCY_MAP)[unref(locale)]), 1)
                  ])
                ])
              ])
            ]))
          ])
        ]),
        createVNode(_component_Dialog, {
          visible: visible.value,
          "onUpdate:visible": _cache[0] || (_cache[0] = ($event) => visible.value = $event),
          draggable: false,
          blockScroll: true,
          modal: "",
          "pt:root:class": "w-[90vw] md:w-[75vw] xl:w-[70rem] dark:bg-surface-700! dark:border-surface-600!"
        }, {
          header: withCtx(() => [
            createBaseVNode("div", _hoisted_32, [
              createBaseVNode("div", _hoisted_33, toDisplayString(activeItem.value?.title?.[unref(locale)]), 1),
              activeItem.value.tag?.[unref(locale)] ? (openBlock(), createBlock(_component_Tag, {
                key: 0,
                class: "mx-3 whitespace-nowrap !bg-transparent border !border-current !font-light !text-surface-400 !dark:text-surface-500"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(activeItem.value.tag?.[unref(locale)]), 1)
                ]),
                _: 1
              })) : createCommentVNode("", true)
            ])
          ]),
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_34, [
              createVNode(_component_Galleria, {
                value: images.value,
                circular: true,
                numVisible: 4,
                showThumbnails: images.value.length > 1,
                showThumbnailNavigators: images.value.length > 4,
                containerClass: "rounded-none !border-0",
                pt: {
                  thumbnailContent: "bg-transparent!"
                }
              }, {
                item: withCtx((slotProps) => [
                  createBaseVNode("img", {
                    src: slotProps.item,
                    alt: "product-image",
                    style: { "width": "100%", "display": "block" }
                  }, null, 8, _hoisted_35)
                ]),
                thumbnail: withCtx((slotProps) => [
                  createBaseVNode("img", {
                    src: slotProps.item,
                    alt: "product-image",
                    style: { "width": "100%", "display": "block", "margin": "0 auto", "max-width": "40px", "max-height": "40px" }
                  }, null, 8, _hoisted_36)
                ]),
                _: 1
              }, 8, ["value", "showThumbnails", "showThumbnailNavigators"]),
              createBaseVNode("div", null, [
                parameterImage.value ? (openBlock(), createBlock(_component_Image, {
                  key: 0,
                  src: parameterImage.value,
                  alt: "parameter-image",
                  width: "100%"
                }, null, 8, ["src"])) : createCommentVNode("", true),
                Number(activeItem.value.price?.[unref(locale)]) > 0 ? (openBlock(), createElementBlock("div", _hoisted_37, [
                  createBaseVNode("div", _hoisted_38, toDisplayString(Number(activeItem.value.price?.[unref(locale)]).toLocaleString()), 1),
                  createBaseVNode("div", _hoisted_39, toDisplayString(unref(LAN_CURRENCY_MAP)[unref(locale)]), 1)
                ])) : createCommentVNode("", true)
              ])
            ]),
            createBaseVNode("div", _hoisted_40, [
              _cache[11] || (_cache[11] = createBaseVNode("div", { class: "border border-x-0 border-b-0 border-surface-200 dark:border-surface-500" }, null, -1)),
              _cache[12] || (_cache[12] = createBaseVNode("div", { class: "border border-x-0 border-b-0 border-surface-200 dark:border-surface-500 hidden md:block" }, null, -1)),
              (openBlock(true), createElementBlock(Fragment, null, renderList(activeItem.value.customArg, (cItem, i) => {
                return openBlock(), createElementBlock("div", {
                  class: "grid grid-cols-[1fr_2fr]",
                  key: `dg_product_custom_arg_${i}`
                }, [
                  createBaseVNode("div", _hoisted_41, toDisplayString(cItem.label[unref(locale)]), 1),
                  createBaseVNode("div", _hoisted_42, toDisplayString(cItem.value[unref(locale)]), 1)
                ]);
              }), 128))
            ])
          ]),
          _: 1
        }, 8, ["visible"])
      ], 64);
    };
  }
};
const _hoisted_1$j = { class: "w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-20 md:pt-25" };
const _hoisted_2$h = { class: "text-center text-primary font-bold text-3xl leading-tight mb-6" };
const _hoisted_3$h = { class: "flex flex-col-reverse lg:flex-row" };
const _hoisted_4$f = { class: "w-full" };
const _hoisted_5$f = { class: "text-surface-700 dark:text-surface-100 text-left text-lg sm:text-2xl line-clamp-1" };
const _hoisted_6$f = {
  key: 0,
  class: "text-surface-400 dark:text-surface-500 text-left mt-3 font-normal text-sm sm:text-base line-clamp-1"
};
const _hoisted_7$e = { class: "text-base text-surface-600 dark:text-surface-300 font-bold" };
const _hoisted_8$e = { class: "flex-2 lg:flex-2 text-base leading-tight text-left whitespace-pre-wrap break-all mb-6 text-surface-500 dark:text-surface-400" };
const _hoisted_9$d = { class: "text-base text-surface-600 dark:text-surface-300 font-bold" };
const _hoisted_10$c = { class: "flex-2 lg:flex-2 text-base leading-tight text-left whitespace-pre-wrap break-all mb-6 text-surface-500 dark:text-surface-400" };
const _hoisted_11$b = { class: "text-base text-surface-600 dark:text-surface-300 font-bold" };
const _hoisted_12$9 = { class: "text-base text-surface-600 dark:text-surface-300 font-bold" };
const _hoisted_13$7 = { class: "text-base text-surface-600 dark:text-surface-300 font-bold" };
const _hoisted_14$7 = { class: "text-base text-surface-600 dark:text-surface-300 font-bold" };
const _sfc_main$k = {
  __name: "AppJob",
  setup(__props) {
    const { locale } = useI18n();
    const { appConfig: appConfig2 } = useConfig();
    const jobList = computed(() => {
      if (appConfig2.value?.jobList && appConfig2.value.jobList.length > 0) {
        return appConfig2.value.jobList;
      }
      return [];
    });
    return (_ctx, _cache) => {
      const _component_AccordionHeader = script$b;
      const _component_Divider = script$6;
      const _component_AccordionContent = script$c;
      const _component_AccordionPanel = script$a;
      const _component_Accordion = script$d;
      return openBlock(), createElementBlock("div", _hoisted_1$j, [
        createBaseVNode("div", _hoisted_2$h, toDisplayString(_ctx.$t("Job.title")), 1),
        createBaseVNode("div", _hoisted_3$h, [
          createVNode(_component_Accordion, {
            multiple: "",
            class: "w-full"
          }, {
            default: withCtx(() => [
              jobList.value.length > 0 ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(jobList.value, (item, i) => {
                return openBlock(), createBlock(_component_AccordionPanel, {
                  key: `job_${i}`,
                  value: i,
                  class: "border-surface-300! dark:border-surface-600!"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_AccordionHeader, { class: "bg-transparent!" }, {
                      default: withCtx(() => [
                        createBaseVNode("div", _hoisted_4$f, [
                          createBaseVNode("div", _hoisted_5$f, toDisplayString(item.name?.[unref(locale)]), 1),
                          item.location?.[unref(locale)] ? (openBlock(), createElementBlock("div", _hoisted_6$f, toDisplayString(_ctx.$t("Job.jobLocation")) + "： " + toDisplayString(item.location?.[unref(locale)]), 1)) : createCommentVNode("", true)
                        ])
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(_component_AccordionContent, { "pt:content:class": "bg-transparent!" }, {
                      default: withCtx(() => [
                        createVNode(_component_Divider, {
                          type: "dashed",
                          class: "mt-0! [--p-divider-border-color:#cbd5e1] dark:[--p-divider-border-color:#52525b]",
                          "pt:content:class": "bg-[#f8fafc]! dark:bg-[#161616]!"
                        }, {
                          default: withCtx(() => [
                            createBaseVNode("span", _hoisted_7$e, toDisplayString(_ctx.$t("Job.jobRequirement")), 1)
                          ]),
                          _: 1
                        }),
                        createBaseVNode("pre", _hoisted_8$e, toDisplayString(item.requirement?.[unref(locale)]), 1),
                        createVNode(_component_Divider, {
                          type: "dashed",
                          class: "[--p-divider-border-color:#cbd5e1] dark:[--p-divider-border-color:#52525b]",
                          "pt:content:class": "bg-[#f8fafc]! dark:bg-[#161616]!"
                        }, {
                          default: withCtx(() => [
                            createBaseVNode("span", _hoisted_9$d, toDisplayString(_ctx.$t("Job.jobDescription")), 1)
                          ]),
                          _: 1
                        }),
                        createBaseVNode("pre", _hoisted_10$c, toDisplayString(item.description?.[unref(locale)]), 1)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1032, ["value"]);
              }), 128)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                createVNode(_component_AccordionPanel, {
                  value: "0",
                  class: "border-surface-300! dark:border-surface-600!"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_AccordionHeader, { class: "bg-transparent!" }, {
                      default: withCtx(() => [..._cache[0] || (_cache[0] = [
                        createBaseVNode("div", { class: "w-full" }, [
                          createBaseVNode("div", { class: "text-surface-700 dark:text-surface-100 text-left text-lg sm:text-2xl line-clamp-1" }, "XXXX")
                        ], -1)
                      ])]),
                      _: 1
                    }),
                    createVNode(_component_AccordionContent, { "pt:content:class": "bg-transparent!" }, {
                      default: withCtx(() => [
                        createVNode(_component_Divider, {
                          type: "dashed",
                          class: "mt-0! [--p-divider-border-color:#cbd5e1] dark:[--p-divider-border-color:#52525b]",
                          "pt:content:class": "bg-[#f8fafc]! dark:bg-[#161616]!"
                        }, {
                          default: withCtx(() => [
                            createBaseVNode("span", _hoisted_11$b, toDisplayString(_ctx.$t("Job.jobRequirement")), 1)
                          ]),
                          _: 1
                        }),
                        _cache[1] || (_cache[1] = createBaseVNode("pre", { class: "flex-2 lg:flex-2 text-base leading-tight text-left whitespace-pre-wrap break-all mb-6 text-surface-500 dark:text-surface-400" }, "xxxxxxxx", -1)),
                        createVNode(_component_Divider, {
                          type: "dashed",
                          class: "[--p-divider-border-color:#cbd5e1] dark:[--p-divider-border-color:#52525b]",
                          "pt:content:class": "bg-[#f8fafc]! dark:bg-[#161616]!"
                        }, {
                          default: withCtx(() => [
                            createBaseVNode("span", _hoisted_12$9, toDisplayString(_ctx.$t("Job.jobDescription")), 1)
                          ]),
                          _: 1
                        }),
                        _cache[2] || (_cache[2] = createBaseVNode("pre", { class: "flex-2 lg:flex-2 text-base leading-tight text-left whitespace-pre-wrap break-all mb-6 text-surface-500 dark:text-surface-400" }, "xxxxxxxx", -1))
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_AccordionPanel, {
                  value: "1",
                  class: "border-surface-300! dark:border-surface-600!"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_AccordionHeader, { class: "bg-transparent!" }, {
                      default: withCtx(() => [..._cache[3] || (_cache[3] = [
                        createBaseVNode("div", { class: "w-full" }, [
                          createBaseVNode("div", { class: "text-surface-700 dark:text-surface-100 text-left text-lg sm:text-2xl line-clamp-1" }, "XXXX")
                        ], -1)
                      ])]),
                      _: 1
                    }),
                    createVNode(_component_AccordionContent, { "pt:content:class": "bg-transparent!" }, {
                      default: withCtx(() => [
                        createVNode(_component_Divider, {
                          type: "dashed",
                          class: "mt-0! [--p-divider-border-color:#cbd5e1] dark:[--p-divider-border-color:#52525b]",
                          "pt:content:class": "bg-[#f8fafc]! dark:bg-[#161616]!"
                        }, {
                          default: withCtx(() => [
                            createBaseVNode("span", _hoisted_13$7, toDisplayString(_ctx.$t("Job.jobRequirement")), 1)
                          ]),
                          _: 1
                        }),
                        _cache[4] || (_cache[4] = createBaseVNode("pre", { class: "flex-2 lg:flex-2 text-base leading-tight text-left whitespace-pre-wrap break-all mb-6 text-surface-500 dark:text-surface-400" }, "xxxxxxxx", -1)),
                        createVNode(_component_Divider, {
                          type: "dashed",
                          class: "[--p-divider-border-color:#cbd5e1] dark:[--p-divider-border-color:#52525b]",
                          "pt:content:class": "bg-[#f8fafc]! dark:bg-[#161616]!"
                        }, {
                          default: withCtx(() => [
                            createBaseVNode("span", _hoisted_14$7, toDisplayString(_ctx.$t("Job.jobDescription")), 1)
                          ]),
                          _: 1
                        }),
                        _cache[5] || (_cache[5] = createBaseVNode("pre", { class: "flex-2 lg:flex-2 text-base leading-tight text-left whitespace-pre-wrap break-all mb-6 text-surface-500 dark:text-surface-400" }, "xxxxxxxx", -1))
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ], 64))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
};
function mitt(n) {
  return { all: n = n || /* @__PURE__ */ new Map(), on: function(t, e) {
    var i = n.get(t);
    i ? i.push(e) : n.set(t, [e]);
  }, off: function(t, e) {
    var i = n.get(t);
    i && (e ? i.splice(i.indexOf(e) >>> 0, 1) : n.set(t, []));
  }, emit: function(t, e) {
    var i = n.get(t);
    i && i.slice().map(function(n2) {
      n2(e);
    }), (i = n.get("*")) && i.slice().map(function(n2) {
      n2(t, e);
    });
  } };
}
const mittInstance = mitt();
function usePubSub() {
  return mittInstance;
}
const noop = () => {
};
const BMapScriptLoaderWrapper = {};
function getScriptAsync({ key, src, addCalToWindow = false, exportGetter = noop }) {
  let exported;
  try {
    exported = exportGetter();
  } catch (e) {
  }
  if (!BMapScriptLoaderWrapper[key] && !exported) {
    BMapScriptLoaderWrapper[key] = new Promise((resolve, reject) => {
      const script2 = document.createElement("script");
      const cal = () => {
        resolve({ [key]: exportGetter() });
        window.document.body.removeChild(script2);
      };
      if (addCalToWindow) {
        window[key] = cal;
      } else {
        script2.onload = function() {
          if (!this.readyState || this.readyState == "loaded" || this.readyState == "complete") {
            script2.onload = null;
            cal();
          }
        };
      }
      script2.src = src;
      script2.type = "text/javascript";
      script2.defer = true;
      script2.onerror = reject;
      document.body.appendChild(script2);
    });
  } else if (exported !== void 0) {
    return Promise.resolve({ [key]: exported });
  }
  return BMapScriptLoaderWrapper[key];
}
const DEFAULT_PLUGINS_SOURCE_LINK = {
  Mapvgl: "https://unpkg.com/mapvgl/dist/mapvgl.min.js",
  MapvglThreeLayers: "https://unpkg.com/mapvgl/dist/mapvgl.threelayers.min.js",
  Mapv: "https://unpkg.com/mapv/build/mapv.min.js",
  MapvThree: "https://unpkg.com/mapv-three/dist/mapvthree.umd.js",
  TrackAnimation: "https://mapopen.bj.bcebos.com/github/BMapGLLib/TrackAnimation/src/TrackAnimation.min.js",
  DrawingManager: "https://mapopen.bj.bcebos.com/github/BMapGLLib/DrawingManager/src/DrawingManager.min.js",
  DistanceTool: "https://mapopen.bj.bcebos.com/github/BMapGLLib/DistanceTool/src/DistanceTool.min.js",
  GeoUtils: "https://mapopen.bj.bcebos.com/github/BMapGLLib/GeoUtils/src/GeoUtils.min.js",
  AreaRestriction: "https://mapopen.bj.bcebos.com/github/BMapGLLib/AreaRestriction/src/AreaRestriction.min.js",
  InfoBox: "https://mapopen.bj.bcebos.com/github/BMapGLLib/InfoBox/src/InfoBox.min.js",
  RichMarker: "https://bj.bcebos.com/v1/mapopen/github/BMapGLLib/RichMarker/src/RichMarker.min.js",
  LuShu: "https://bj.bcebos.com/v1/mapopen/github/BMapGLLib/Lushu/src/Lushu.min.js"
};
const pluginLoaderMap = {
  TrackAnimation: (customSourceLink) => getScriptAsync({
    src: customSourceLink || DEFAULT_PLUGINS_SOURCE_LINK["TrackAnimation"],
    key: "trackAnimation",
    exportGetter: () => window.BMapGLLib.TrackAnimation
  }),
  DrawingManager: (customSourceLink) => getScriptAsync({
    src: customSourceLink || DEFAULT_PLUGINS_SOURCE_LINK["DrawingManager"],
    key: "DrawingManager",
    exportGetter: () => window.BMapGLLib.DrawingManager
  }),
  DistanceTool: (customSourceLink) => getScriptAsync({
    src: customSourceLink || DEFAULT_PLUGINS_SOURCE_LINK["DistanceTool"],
    key: "DistanceTool",
    exportGetter: () => window.BMapGLLib.DistanceTool
  }),
  GeoUtils: (customSourceLink) => getScriptAsync({
    src: customSourceLink || DEFAULT_PLUGINS_SOURCE_LINK["GeoUtils"],
    key: "GeoUtils",
    exportGetter: () => window.BMapGLLib.GeoUtils
  }),
  RichMarker: (customSourceLink) => getScriptAsync({
    src: customSourceLink || DEFAULT_PLUGINS_SOURCE_LINK["RichMarker"],
    key: "RichMarker",
    exportGetter: () => window.BMapGLLib.RichMarker
  }),
  AreaRestriction: (customSourceLink) => getScriptAsync({
    src: customSourceLink || DEFAULT_PLUGINS_SOURCE_LINK["AreaRestriction"],
    key: "AreaRestriction",
    exportGetter: () => window.BMapGLLib.AreaRestriction
  }),
  InfoBox: (customSourceLink) => getScriptAsync({
    src: customSourceLink || DEFAULT_PLUGINS_SOURCE_LINK["InfoBox"],
    key: "InfoBox",
    exportGetter: () => window.BMapGLLib.InfoBox
  }),
  LuShu: (customSourceLink) => getScriptAsync({
    src: customSourceLink || DEFAULT_PLUGINS_SOURCE_LINK["LuShu"],
    key: "LuShu",
    exportGetter: () => window.BMapGLLib.LuShu
  }),
  Mapvgl: (customSourceLink) => getScriptAsync({
    src: customSourceLink || DEFAULT_PLUGINS_SOURCE_LINK["Mapvgl"],
    key: "Mapvgl",
    exportGetter: () => window.mapvgl
  }),
  MapvglThreeLayers: (customSourceLink) => getScriptAsync({
    src: customSourceLink || DEFAULT_PLUGINS_SOURCE_LINK["MapvglThreeLayers"],
    key: "MapvglThreeLayers",
    exportGetter: () => window.mapvglThreeLayers
  }),
  Mapv: (customSourceLink) => getScriptAsync({
    src: customSourceLink || DEFAULT_PLUGINS_SOURCE_LINK["Mapv"],
    key: "Mapv",
    exportGetter: () => window.mapv
  }),
  MapvThree: (customSourceLink) => getScriptAsync({
    src: customSourceLink || DEFAULT_PLUGINS_SOURCE_LINK["MapvThree"],
    key: "MapvThree",
    exportGetter: () => window.mapvthree
  })
};
function initPlugins(plugins, customPluginSourceLink = {}) {
  const pluginsLoaders = [...new Set(plugins)].reduce((pluginsLoaderArr, pluginsKey) => {
    let plugin;
    if (typeof pluginsKey === "string" && (plugin = pluginLoaderMap[pluginsKey])) {
      pluginsLoaderArr.push(plugin(customPluginSourceLink[pluginsKey]));
    } else if (typeof pluginsKey === "function") {
      pluginsLoaderArr.push(pluginsKey());
    }
    return pluginsLoaderArr;
  }, []);
  return Promise.all(pluginsLoaders).then((res) => {
    const returnValue = {};
    res.forEach((item) => {
      Object.assign(returnValue, item);
    });
    return returnValue;
  });
}
function bindEvents(props, VueEmit, instance) {
  for (const key of Object.keys(props)) {
    if (/^on/.test(key) && props[key]) {
      const _key = key.replace(/^on/, "").toLocaleLowerCase();
      instance.addEventListener(_key, (e) => {
        var _a, _b;
        e.preventDefault = e.preventDefault || ((_a = e.domEvent) === null || _a === void 0 ? void 0 : _a.preventDefault.bind(e.domEvent));
        e.stopPropagation = e.stopPropagation || ((_b = e.domEvent) === null || _b === void 0 ? void 0 : _b.stopPropagation.bind(e.domEvent));
        VueEmit(_key, e);
      });
    }
  }
}
function error(location, message) {
  console.error(`[Vue3 BaiduMap GL/${location}]: ${message}`);
}
const isClient = typeof window !== "undefined";
const isDef = (val) => typeof val !== "undefined";
function isString(value) {
  return Object.prototype.toString.call(value) === "[object String]";
}
let id = 0;
function getUid() {
  return `${id++}`;
}
function callWhenDifferentValue(cal) {
  return (nv, ov) => {
    if (nv === ov || nv !== ov && JSON.stringify(nv) !== JSON.stringify(ov))
      cal(nv);
  };
}
let icons = null;
function useDefaultMarkerIcons() {
  if (icons !== null)
    return icons;
  const defaultIconUrl = "//mapopen.bj.bcebos.com/cms/react-bmap/markers_new2x_fbb9e99.png";
  icons = {
    simple_red: new BMapGL.Icon(defaultIconUrl, new BMapGL.Size(42 / 2, 66 / 2), {
      imageOffset: new BMapGL.Size(454 / 2, 378 / 2),
      imageSize: new BMapGL.Size(600 / 2, 600 / 2)
    }),
    simple_blue: new BMapGL.Icon(defaultIconUrl, new BMapGL.Size(42 / 2, 66 / 2), {
      imageOffset: new BMapGL.Size(454 / 2, 450 / 2),
      imageSize: new BMapGL.Size(600 / 2, 600 / 2)
    }),
    loc_red: new BMapGL.Icon(defaultIconUrl, new BMapGL.Size(46 / 2, 70 / 2), {
      imageOffset: new BMapGL.Size(400 / 2, 378 / 2),
      imageSize: new BMapGL.Size(600 / 2, 600 / 2)
    }),
    loc_blue: new BMapGL.Icon(defaultIconUrl, new BMapGL.Size(46 / 2, 70 / 2), {
      imageOffset: new BMapGL.Size(400 / 2, 450 / 2),
      imageSize: new BMapGL.Size(600 / 2, 600 / 2)
    }),
    start: new BMapGL.Icon(defaultIconUrl, new BMapGL.Size(50 / 2, 80 / 2), {
      imageOffset: new BMapGL.Size(400 / 2, 278 / 2),
      imageSize: new BMapGL.Size(600 / 2, 600 / 2)
    }),
    end: new BMapGL.Icon(defaultIconUrl, new BMapGL.Size(50 / 2, 80 / 2), {
      imageOffset: new BMapGL.Size(450 / 2, 278 / 2),
      imageSize: new BMapGL.Size(600 / 2, 600 / 2)
    }),
    location: new BMapGL.Icon(defaultIconUrl, new BMapGL.Size(28 / 2, 40 / 2), {
      imageOffset: new BMapGL.Size(248 / 2, 466 / 2),
      imageSize: new BMapGL.Size(600 / 2, 600 / 2)
    })
  };
  for (let i = 1; i <= 10; i++) {
    icons["red" + i] = new BMapGL.Icon(defaultIconUrl, new BMapGL.Size(42 / 2, 66 / 2), {
      imageOffset: new BMapGL.Size(42 / 2 * (i - 1), 0),
      imageSize: new BMapGL.Size(600 / 2, 600 / 2)
    });
  }
  for (let i = 1; i <= 10; i++) {
    icons["blue" + i] = new BMapGL.Icon(defaultIconUrl, new BMapGL.Size(42 / 2, 66 / 2), {
      imageOffset: new BMapGL.Size(42 / 2 * (i - 1), 132 / 2),
      imageSize: new BMapGL.Size(600 / 2, 600 / 2)
    });
  }
  return icons;
}
function useInstanceId() {
  const instanceId = getUid();
  provide("parentComponentId", instanceId);
  return instanceId;
}
const _hoisted_1$i = ["id"];
var script$1 = /* @__PURE__ */ defineComponent(Object.assign({
  name: "BMap"
}, { __name: "index", props: {
  ak: { type: String, required: false },
  apiUrl: { type: String, required: false },
  width: { type: [String, Number], required: false, default: "100%" },
  height: { type: [String, Number], required: false, default: "550px" },
  center: { type: null, required: false, default: () => ({ lat: 39.915185, lng: 116.403901 }) },
  mapType: { type: null, required: false, default: "BMAP_NORMAL_MAP" },
  zoom: { type: Number, required: false, default: 14 },
  heading: { type: Number, required: false, default: 0 },
  tilt: { type: Number, required: false, default: 0 },
  minZoom: { type: Number, required: false, default: 0 },
  maxZoom: { type: Number, required: false, default: 21 },
  noAnimation: { type: Boolean, required: false, default: false },
  mapStyleId: { type: String, required: false },
  mapStyleJson: { type: Array, required: false },
  showControls: { type: Boolean, required: false, default: false },
  plugins: { type: null, required: false },
  pluginsSourceLink: { type: Object, required: false },
  displayOptions: { type: Object, required: false },
  restrictCenter: { type: Boolean, required: false, default: true },
  enableTraffic: { type: Boolean, required: false, default: false },
  enableDragging: { type: Boolean, required: false, default: true },
  enableInertialDragging: { type: Boolean, required: false, default: true },
  enableScrollWheelZoom: { type: Boolean, required: false, default: false },
  enableContinuousZoom: { type: Boolean, required: false, default: true },
  enableResizeOnCenter: { type: Boolean, required: false, default: true },
  enableDoubleClickZoom: { type: Boolean, required: false, default: false },
  enableKeyboard: { type: Boolean, required: false, default: true },
  enablePinchToZoom: { type: Boolean, required: false, default: true },
  enableAutoResize: { type: Boolean, required: false, default: true },
  enableIconClick: { type: Boolean, required: false },
  loadingBgColor: { type: String, required: false, default: "#f1f1f1" },
  loadingTextColor: { type: String, required: false, default: "#999" },
  backgroundColor: { type: Array, required: false },
  onClick: { type: null, required: false },
  onDblclick: { type: null, required: false },
  onRightclick: { type: null, required: false },
  onRightdblclick: { type: null, required: false },
  onMaptypechange: { type: null, required: false },
  onMousemove: { type: null, required: false },
  onMouseover: { type: null, required: false },
  onMouseout: { type: null, required: false },
  onMovestart: { type: null, required: false },
  onMoving: { type: null, required: false },
  onMoveend: { type: null, required: false },
  onZoomstart: { type: null, required: false },
  onZoomend: { type: null, required: false },
  onAddoverlay: { type: null, required: false },
  onAddcontrol: { type: null, required: false },
  onRemovecontrol: { type: null, required: false },
  onRemoveoverlay: { type: null, required: false },
  onClearoverlays: { type: null, required: false },
  onDragstart: { type: null, required: false },
  onDragging: { type: null, required: false },
  onDragend: { type: null, required: false },
  onAddtilelayer: { type: null, required: false },
  onRemovetilelayer: { type: null, required: false },
  onLoad: { type: null, required: false },
  onResize: { type: null, required: false },
  onHotspotclick: { type: null, required: false },
  onHotspotover: { type: null, required: false },
  onHotspotout: { type: null, required: false },
  onTilesloaded: { type: null, required: false },
  onTouchstart: { type: null, required: false },
  onTouchmove: { type: null, required: false },
  onTouchend: { type: null, required: false },
  onLongpress: { type: null, required: false }
}, emits: [
  "initd",
  "unload",
  "pluginReady",
  "click",
  "dblclick",
  "rightclick",
  "rightdblclick",
  "maptypechange",
  "mousemove",
  "mouseover",
  "mouseout",
  "movestart",
  "moving",
  "moveend",
  "zoomstart",
  "zoomend",
  "addoverlay",
  "addcontrol",
  "removecontrol",
  "removeoverlay",
  "clearoverlays",
  "dragstart",
  "dragging",
  "dragend",
  "addtilelayer",
  "removetilelayer",
  "load",
  "resize",
  "hotspotclick",
  "hotspotover",
  "hotspotout",
  "tilesloaded",
  "touchstart",
  "touchmove",
  "touchend",
  "longpress"
], setup(__props, { expose: __expose, emit: vueEmits }) {
  const props = __props;
  const mapContainer = ref();
  let map = null;
  let initd = ref(false);
  const instance = getCurrentInstance();
  const instanceId = useInstanceId();
  const { emit } = usePubSub();
  const width = computed(() => isString(props.width) ? props.width : `${props.width}px`);
  const height = computed(() => isString(props.height) ? props.height : `${props.height}px`);
  const shouldRender = isClient && !!instance;
  function init() {
    if (!shouldRender)
      return;
    const { proxy } = instance;
    const ak = props.ak || proxy && proxy.$baiduMapAk;
    const apiUrl = props.apiUrl || proxy && proxy.$baiduMapApiUrl;
    const plugins = props.plugins && proxy.$baiduMapPlugins ? Object.assign(proxy.$baiduMapPlugins, props.plugins) : props.plugins || proxy.$baiduMapPlugins;
    const pluginsSourceLink = props.pluginsSourceLink && proxy.$baiduMapPluginsSourceLink ? Object.assign(proxy.$baiduMapPluginsSourceLink, props.pluginsSourceLink) : props.pluginsSourceLink || proxy.$baiduMapPluginsSourceLink || {};
    const scriptKey = apiUrl ? `_initBMap_` : `_initBMap_${ak}`;
    const src = apiUrl ? `${apiUrl.replace(/&$/, "")}&callback=${scriptKey}` : `//api.map.baidu.com/api?type=webgl&v=1.0&ak=${ak}&callback=${scriptKey}`;
    getScriptAsync({
      src,
      addCalToWindow: true,
      key: scriptKey,
      exportGetter: () => window.BMapGL
    }).then(() => {
      const { restrictCenter, enableIconClick, backgroundColor, minZoom, maxZoom, mapType, enableAutoResize, showControls, center, displayOptions } = props;
      if (!mapContainer.value)
        return;
      map = new BMapGL.Map(mapContainer.value, {
        backgroundColor,
        enableIconClick,
        restrictCenter,
        minZoom,
        maxZoom,
        mapType: window[mapType],
        enableAutoResize,
        showControls,
        displayOptions
      });
      setCenterAndZoom(center);
      initMapOptions();
      initCustomStyle();
      startWatchProps();
      bindEvents(props, vueEmits, map);
      if (plugins) {
        initPlugins(plugins, pluginsSourceLink).then((res) => {
          vueEmits("pluginReady", map, res);
        }).catch((err) => {
          error("BMap", "plugins error: " + err);
        });
      }
      const event = {
        map,
        instance,
        BMapGL: window.BMapGL
      };
      emit(instanceId, event);
      vueEmits("initd", event);
      initd.value = true;
    }).catch((e) => error("BMap", e.message));
  }
  function initCustomStyle() {
    if (props.mapStyleId) {
      map.setMapStyleV2({
        styleId: props.mapStyleId
      });
      return;
    } else if (props.mapStyleJson) {
      map.setMapStyleV2({
        styleJson: props.mapStyleJson
      });
    }
  }
  function startWatchProps() {
    watch(() => props.zoom, setZoom);
    watch(() => props.tilt, setTilt);
    watch(() => props.heading, setHeading);
    watch(() => props.center, callWhenDifferentValue(setCenterAndZoom), {
      deep: true
    });
    watch(() => props.mapStyleId, initCustomStyle);
    watch(() => props.mapStyleJson, callWhenDifferentValue(initCustomStyle), {
      deep: true
    });
    watch(() => props.displayOptions, callWhenDifferentValue(setDisplayOptions), {
      deep: true
    });
    watch(() => props.mapType, setMapType);
    watch(() => props.enableTraffic, setTraffic);
    watch(() => props.enableDragging, setDragging);
    watch(() => props.enableInertialDragging, setInertialDragging);
    watch(() => props.enableScrollWheelZoom, setScrollWheelZoom);
    watch(() => props.enableContinuousZoom, setContinuousZoom);
    watch(() => props.enableResizeOnCenter, setResizeOnCenter);
    watch(() => props.enableDoubleClickZoom, setDoubleClickZoom);
    watch(() => props.enableKeyboard, setKeyboard);
    watch(() => props.enablePinchToZoom, setPinchToZoom);
    watch(() => props.enableAutoResize, setAutoResize);
  }
  function initMapOptions() {
    const { enableDragging, enableInertialDragging, enableScrollWheelZoom, enableContinuousZoom, enableResizeOnCenter, enableDoubleClickZoom, enableKeyboard, enablePinchToZoom, enableAutoResize, enableTraffic, mapType, zoom, tilt, heading } = props;
    setZoom(zoom);
    setTilt(tilt);
    setTraffic(enableTraffic);
    setHeading(heading);
    setMapType(mapType);
    setKeyboard(enableKeyboard);
    setDragging(enableDragging);
    setAutoResize(enableAutoResize);
    setPinchToZoom(enablePinchToZoom);
    setContinuousZoom(enableContinuousZoom);
    setResizeOnCenter(enableResizeOnCenter);
    setDoubleClickZoom(enableDoubleClickZoom);
    setScrollWheelZoom(enableScrollWheelZoom);
    setInertialDragging(enableInertialDragging);
  }
  function genPoint(lng, lat) {
    return new BMapGL.Point(lng, lat);
  }
  function setTraffic(enableTraffic) {
    enableTraffic ? map.setTrafficOn() : map.setTrafficOff();
  }
  function setCenterAndZoom(center) {
    if (typeof center === "string") {
      map.centerAndZoom(center, props.zoom);
    } else {
      map.centerAndZoom(genPoint(center.lng, center.lat), props.zoom);
    }
  }
  function setDisplayOptions(displayOptions) {
    map.setDisplayOptions(displayOptions || {});
  }
  function setZoom(zoom) {
    map.setZoom(zoom, {
      noAnimation: props.noAnimation
    });
  }
  function setMapType(mapType) {
    window[mapType] !== void 0 && map.setMapType(window[mapType]);
  }
  function setHeading(heading) {
    map.setHeading(heading);
  }
  function setTilt(tilt) {
    map.setTilt(tilt);
  }
  function setDragging(enableDragging) {
    enableDragging ? map.enableDragging() : map.disableDragging();
  }
  function setInertialDragging(enableInertialDragging) {
    enableInertialDragging ? map.enableInertialDragging() : map.disableInertialDragging();
  }
  function setScrollWheelZoom(enableScrollWheelZoom) {
    enableScrollWheelZoom ? map.enableScrollWheelZoom() : map.disableScrollWheelZoom();
  }
  function setContinuousZoom(enableContinuousZoom) {
    enableContinuousZoom ? map.enableContinuousZoom() : map.disableContinuousZoom();
  }
  function setResizeOnCenter(enableResizeOnCenter) {
    enableResizeOnCenter ? map.enableResizeOnCenter() : map.disableResizeOnCenter();
  }
  function setDoubleClickZoom(enableDoubleClickZoom) {
    enableDoubleClickZoom ? map.enableDoubleClickZoom() : map.disableDoubleClickZoom();
  }
  function setKeyboard(enableKeyboard) {
    enableKeyboard ? map.enableKeyboard() : map.disableKeyboard();
  }
  function setPinchToZoom(enablePinchToZoom) {
    enablePinchToZoom ? map.enablePinchToZoom() : map.disablePinchToZoom();
  }
  function setAutoResize(enableAutoResize) {
    enableAutoResize ? map.enableAutoResize() : map.disableAutoResize();
  }
  onMounted(init);
  onUnmounted(() => {
    if (map) {
      try {
        map.destroy();
      } catch (e) {
        error("BMapGL SDK", e.message);
      }
    }
  });
  __expose({
    // 父组件获取map实例方法
    getMapInstance: () => map,
    // 父组件/外部获取map组件 options
    getBaseMapOptions: () => props,
    // 重置地图中心
    resetCenter: () => setCenterAndZoom(props.center),
    // 设置地图是否可拖动
    setDragging
  });
  provide("getMapInstance", () => map);
  provide("baseMapSetCenterAndZoom", (_center) => setCenterAndZoom(_center));
  provide("baseMapSetDragging", (enableDragging) => setDragging(enableDragging));
  provide("getBaseMapOptions", () => props);
  return (_ctx, _cache) => {
    return unref(shouldRender) ? (openBlock(), createElementBlock(
      Fragment,
      { key: 0 },
      [
        createBaseVNode("div", {
          id: unref(instanceId),
          class: "baidu-map-container",
          ref_key: "mapContainer",
          ref: mapContainer,
          style: normalizeStyle([{ width: width.value, height: height.value, background: props.loadingBgColor }, { "position": "relative", "overflow": "hidden" }])
        }, [
          renderSlot(_ctx.$slots, "loading", {}, () => [
            createBaseVNode(
              "div",
              {
                style: normalizeStyle([{ color: props.loadingTextColor }, { "position": "absolute", "top": "50%", "left": "50%", "transform": "translate(-50%, -50%)" }])
              },
              toDisplayString(!unref(initd) ? "map loading..." : ""),
              5
              /* TEXT, STYLE */
            )
          ])
        ], 12, _hoisted_1$i),
        renderSlot(_ctx.$slots, "default")
      ],
      64
      /* STABLE_FRAGMENT */
    )) : createCommentVNode("v-if", true);
  };
} }));
script$1.__file = "packages/components/map/index.vue";
function useParentComponentEffect(initdCallback) {
  const { on, off, emit } = usePubSub();
  const comInstance = getCurrentInstance();
  const currentInstanceId = useInstanceId();
  const { emit: vueEmit } = comInstance || { emit: noop };
  const getMapInstance = inject("getMapInstance", void 0);
  const parentComponentId = inject("parentComponentId", void 0);
  const parentUid = parentComponentId || "";
  const componentName = comInstance ? comInstance.type.name || "" : "";
  if (typeof getMapInstance === "undefined") {
    return { ready: noop };
  }
  const map = getMapInstance();
  let clearEffect;
  const initCallbackProxy = (event) => {
    clearEffect = initdCallback(event.map);
  };
  onMounted(() => {
    if (map) {
      initCallbackProxy({ map });
    } else {
      on(parentUid, initCallbackProxy);
    }
  });
  onBeforeUnmount(() => {
    try {
      clearEffect && clearEffect();
    } catch (e) {
      error(componentName, e.message);
    }
    vueEmit("unload");
    off(parentUid, initCallbackProxy);
  });
  return {
    ready: (map2, instance) => {
      const eventPayload = {
        map: map2,
        instance,
        BMapGL: window.BMapGL
      };
      vueEmit("initd", eventPayload);
      emit(currentInstanceId, eventPayload);
    }
  };
}
var script = /* @__PURE__ */ defineComponent(Object.assign({ name: "BMarker" }, { __name: "index", props: {
  position: { type: null, required: true },
  offset: { type: Object, required: false, default: () => ({
    x: 0,
    y: 0
  }) },
  icon: { type: null, required: false },
  zIndex: { type: Number, required: false },
  enableMassClear: { type: Boolean, required: false, default: true },
  enableDragging: { type: Boolean, required: false, default: false },
  enableClicking: { type: Boolean, required: false, default: true },
  raiseOnDrag: { type: Boolean, required: false, default: false },
  draggingCursor: { type: String, required: false, default: "pointer" },
  rotation: { type: Number, required: false, default: 0 },
  title: { type: String, required: false, default: "" },
  visible: { type: Boolean, required: false, default: true },
  onClick: { type: null, required: false },
  onDblclick: { type: null, required: false },
  onMousedown: { type: null, required: false },
  onMouseup: { type: null, required: false },
  onMouseout: { type: null, required: false },
  onMouseover: { type: null, required: false },
  onRemove: { type: null, required: false },
  onInfowindowclose: { type: null, required: false },
  onInfowindowopen: { type: null, required: false },
  onDragstart: { type: null, required: false },
  onDragging: { type: null, required: false },
  onDragend: { type: null, required: false },
  onRightclick: { type: null, required: false }
}, emits: [
  "initd",
  "unload",
  "click",
  "dblclick",
  "mousedown",
  "mouseup",
  "mouseout",
  "mouseover",
  "remove",
  "infowindowclose",
  "infowindowopen",
  "dragstart",
  "dragging",
  "dragend",
  "rightclick"
], setup(__props, { emit: vueEmits }) {
  const props = __props;
  let marker;
  const { ready } = useParentComponentEffect((map) => {
    const cal = () => {
      marker && map.removeOverlay(marker);
    };
    const init = () => {
      if (!props.position) {
        return false;
      }
      const { position, offset, enableMassClear, enableDragging, enableClicking, raiseOnDrag, draggingCursor, rotation, title, icon, zIndex, visible } = props;
      const options = {
        offset: new BMapGL.Size(offset.x, offset.y),
        enableMassClear,
        enableDragging,
        enableClicking,
        raiseOnDrag,
        draggingCursor,
        title
      };
      if (icon) {
        options.icon = getIconConfig();
      }
      marker = new BMapGL.Marker(new BMapGL.Point(position.lng, position.lat), options);
      setRotation(rotation);
      isDef(zIndex) && setZIndex(zIndex);
      visible && map.addOverlay(marker);
      bindEvents(props, vueEmits, marker);
      ready(map, marker);
    };
    init();
    watch(() => props.position, callWhenDifferentValue((n) => {
      marker ? setPosition(n) : init();
    }), { deep: true });
    watch(() => props.icon, callWhenDifferentValue(setIcon), { deep: true });
    watch(() => props.offset, callWhenDifferentValue(setOffset), { deep: true });
    watch(() => props.enableDragging, setDragging);
    watch(() => props.enableMassClear, setMassClear);
    watch(() => props.rotation, setRotation);
    watch(() => props.visible, (n) => {
      map[n ? "addOverlay" : "removeOverlay"](marker);
    });
    return cal;
  });
  provide("getOverlayInstance", () => marker);
  function getIconConfig() {
    const defaultIcons = useDefaultMarkerIcons();
    const { icon } = props;
    if (isString(icon) && defaultIcons[icon]) {
      return defaultIcons[icon];
    } else {
      const { anchor, imageOffset, imageSize, imageUrl, printImageUrl, size } = icon;
      const iconOptions = {
        size: new BMapGL.Size(size.width, size.height)
      };
      if (imageSize) {
        iconOptions.imageSize = new BMapGL.Size(imageSize.width, imageSize.height);
      }
      if (anchor) {
        iconOptions.anchor = new BMapGL.Size(anchor.x, anchor.y);
      }
      if (imageOffset) {
        iconOptions.imageOffset = new BMapGL.Size(imageOffset.x, imageOffset.y);
      }
      if (printImageUrl) {
        iconOptions.printImageUrl = printImageUrl;
      }
      return new BMapGL.Icon(imageUrl, new BMapGL.Size(size.width, size.height), iconOptions);
    }
  }
  function setZIndex(zIndex) {
    marker.setZIndex(zIndex);
  }
  function setPosition(position) {
    position && position.lat && position.lng && marker.setPosition(new BMapGL.Point(position.lng, position.lat));
  }
  function setIcon() {
    marker.setIcon(getIconConfig());
  }
  function setDragging(enableDragging) {
    enableDragging ? marker.enableDragging() : marker.disableDragging();
  }
  function setMassClear(enableMassClear) {
    enableMassClear ? marker.enableMassClear() : marker.disableMassClear();
  }
  function setOffset(offset) {
    offset && marker.setOffset(new BMapGL.Size(offset.x, offset.y));
  }
  function setRotation(rotation) {
    rotation !== void 0 && marker.setRotation(rotation);
  }
  return (_ctx, _cache) => {
    return renderSlot(_ctx.$slots, "default");
  };
} }));
script.__file = "packages/components/overlay/marker/index.vue";
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getAugmentedNamespace(n) {
  if (Object.prototype.hasOwnProperty.call(n, "__esModule")) return n;
  var f = n.default;
  if (typeof f == "function") {
    var a = function a2() {
      var isInstance = false;
      try {
        isInstance = this instanceof a2;
      } catch {
      }
      if (isInstance) {
        return Reflect.construct(f, arguments, this.constructor);
      }
      return f.apply(this, arguments);
    };
    a.prototype = f.prototype;
  } else a = {};
  Object.defineProperty(a, "__esModule", { value: true });
  Object.keys(n).forEach(function(k) {
    var d = Object.getOwnPropertyDescriptor(n, k);
    Object.defineProperty(a, k, d.get ? d : {
      enumerable: true,
      get: function() {
        return n[k];
      }
    });
  });
  return a;
}
var index_umd$1 = { exports: {} };
var vue = { exports: {} };
var vue_cjs_prod = {};
const FRAGMENT = /* @__PURE__ */ Symbol(``);
const TELEPORT = /* @__PURE__ */ Symbol(``);
const SUSPENSE = /* @__PURE__ */ Symbol(``);
const KEEP_ALIVE = /* @__PURE__ */ Symbol(``);
const BASE_TRANSITION = /* @__PURE__ */ Symbol(
  ``
);
const OPEN_BLOCK = /* @__PURE__ */ Symbol(``);
const CREATE_BLOCK = /* @__PURE__ */ Symbol(``);
const CREATE_ELEMENT_BLOCK = /* @__PURE__ */ Symbol(
  ``
);
const CREATE_VNODE = /* @__PURE__ */ Symbol(``);
const CREATE_ELEMENT_VNODE = /* @__PURE__ */ Symbol(
  ``
);
const CREATE_COMMENT = /* @__PURE__ */ Symbol(
  ``
);
const CREATE_TEXT = /* @__PURE__ */ Symbol(
  ``
);
const CREATE_STATIC = /* @__PURE__ */ Symbol(
  ``
);
const RESOLVE_COMPONENT = /* @__PURE__ */ Symbol(
  ``
);
const RESOLVE_DYNAMIC_COMPONENT = /* @__PURE__ */ Symbol(
  ``
);
const RESOLVE_DIRECTIVE = /* @__PURE__ */ Symbol(
  ``
);
const RESOLVE_FILTER = /* @__PURE__ */ Symbol(
  ``
);
const WITH_DIRECTIVES = /* @__PURE__ */ Symbol(
  ``
);
const RENDER_LIST = /* @__PURE__ */ Symbol(``);
const RENDER_SLOT = /* @__PURE__ */ Symbol(``);
const CREATE_SLOTS = /* @__PURE__ */ Symbol(``);
const TO_DISPLAY_STRING = /* @__PURE__ */ Symbol(
  ``
);
const MERGE_PROPS = /* @__PURE__ */ Symbol(``);
const NORMALIZE_CLASS = /* @__PURE__ */ Symbol(
  ``
);
const NORMALIZE_STYLE = /* @__PURE__ */ Symbol(
  ``
);
const NORMALIZE_PROPS = /* @__PURE__ */ Symbol(
  ``
);
const GUARD_REACTIVE_PROPS = /* @__PURE__ */ Symbol(
  ``
);
const TO_HANDLERS = /* @__PURE__ */ Symbol(``);
const CAMELIZE = /* @__PURE__ */ Symbol(``);
const CAPITALIZE = /* @__PURE__ */ Symbol(``);
const TO_HANDLER_KEY = /* @__PURE__ */ Symbol(
  ``
);
const SET_BLOCK_TRACKING = /* @__PURE__ */ Symbol(
  ``
);
const PUSH_SCOPE_ID = /* @__PURE__ */ Symbol(``);
const POP_SCOPE_ID = /* @__PURE__ */ Symbol(``);
const WITH_CTX = /* @__PURE__ */ Symbol(``);
const UNREF = /* @__PURE__ */ Symbol(``);
const IS_REF = /* @__PURE__ */ Symbol(``);
const WITH_MEMO = /* @__PURE__ */ Symbol(``);
const IS_MEMO_SAME = /* @__PURE__ */ Symbol(``);
const helperNameMap = {
  [FRAGMENT]: `Fragment`,
  [TELEPORT]: `Teleport`,
  [SUSPENSE]: `Suspense`,
  [KEEP_ALIVE]: `KeepAlive`,
  [BASE_TRANSITION]: `BaseTransition`,
  [OPEN_BLOCK]: `openBlock`,
  [CREATE_BLOCK]: `createBlock`,
  [CREATE_ELEMENT_BLOCK]: `createElementBlock`,
  [CREATE_VNODE]: `createVNode`,
  [CREATE_ELEMENT_VNODE]: `createElementVNode`,
  [CREATE_COMMENT]: `createCommentVNode`,
  [CREATE_TEXT]: `createTextVNode`,
  [CREATE_STATIC]: `createStaticVNode`,
  [RESOLVE_COMPONENT]: `resolveComponent`,
  [RESOLVE_DYNAMIC_COMPONENT]: `resolveDynamicComponent`,
  [RESOLVE_DIRECTIVE]: `resolveDirective`,
  [RESOLVE_FILTER]: `resolveFilter`,
  [WITH_DIRECTIVES]: `withDirectives`,
  [RENDER_LIST]: `renderList`,
  [RENDER_SLOT]: `renderSlot`,
  [CREATE_SLOTS]: `createSlots`,
  [TO_DISPLAY_STRING]: `toDisplayString`,
  [MERGE_PROPS]: `mergeProps`,
  [NORMALIZE_CLASS]: `normalizeClass`,
  [NORMALIZE_STYLE]: `normalizeStyle`,
  [NORMALIZE_PROPS]: `normalizeProps`,
  [GUARD_REACTIVE_PROPS]: `guardReactiveProps`,
  [TO_HANDLERS]: `toHandlers`,
  [CAMELIZE]: `camelize`,
  [CAPITALIZE]: `capitalize`,
  [TO_HANDLER_KEY]: `toHandlerKey`,
  [SET_BLOCK_TRACKING]: `setBlockTracking`,
  [PUSH_SCOPE_ID]: `pushScopeId`,
  [POP_SCOPE_ID]: `popScopeId`,
  [WITH_CTX]: `withCtx`,
  [UNREF]: `unref`,
  [IS_REF]: `isRef`,
  [WITH_MEMO]: `withMemo`,
  [IS_MEMO_SAME]: `isMemoSame`
};
function registerRuntimeHelpers(helpers) {
  Object.getOwnPropertySymbols(helpers).forEach((s) => {
    helperNameMap[s] = helpers[s];
  });
}
const Namespaces = {
  "HTML": 0,
  "0": "HTML",
  "SVG": 1,
  "1": "SVG",
  "MATH_ML": 2,
  "2": "MATH_ML"
};
const NodeTypes = {
  "ROOT": 0,
  "0": "ROOT",
  "ELEMENT": 1,
  "1": "ELEMENT",
  "TEXT": 2,
  "2": "TEXT",
  "COMMENT": 3,
  "3": "COMMENT",
  "SIMPLE_EXPRESSION": 4,
  "4": "SIMPLE_EXPRESSION",
  "INTERPOLATION": 5,
  "5": "INTERPOLATION",
  "ATTRIBUTE": 6,
  "6": "ATTRIBUTE",
  "DIRECTIVE": 7,
  "7": "DIRECTIVE",
  "COMPOUND_EXPRESSION": 8,
  "8": "COMPOUND_EXPRESSION",
  "IF": 9,
  "9": "IF",
  "IF_BRANCH": 10,
  "10": "IF_BRANCH",
  "FOR": 11,
  "11": "FOR",
  "TEXT_CALL": 12,
  "12": "TEXT_CALL",
  "VNODE_CALL": 13,
  "13": "VNODE_CALL",
  "JS_CALL_EXPRESSION": 14,
  "14": "JS_CALL_EXPRESSION",
  "JS_OBJECT_EXPRESSION": 15,
  "15": "JS_OBJECT_EXPRESSION",
  "JS_PROPERTY": 16,
  "16": "JS_PROPERTY",
  "JS_ARRAY_EXPRESSION": 17,
  "17": "JS_ARRAY_EXPRESSION",
  "JS_FUNCTION_EXPRESSION": 18,
  "18": "JS_FUNCTION_EXPRESSION",
  "JS_CONDITIONAL_EXPRESSION": 19,
  "19": "JS_CONDITIONAL_EXPRESSION",
  "JS_CACHE_EXPRESSION": 20,
  "20": "JS_CACHE_EXPRESSION",
  "JS_BLOCK_STATEMENT": 21,
  "21": "JS_BLOCK_STATEMENT",
  "JS_TEMPLATE_LITERAL": 22,
  "22": "JS_TEMPLATE_LITERAL",
  "JS_IF_STATEMENT": 23,
  "23": "JS_IF_STATEMENT",
  "JS_ASSIGNMENT_EXPRESSION": 24,
  "24": "JS_ASSIGNMENT_EXPRESSION",
  "JS_SEQUENCE_EXPRESSION": 25,
  "25": "JS_SEQUENCE_EXPRESSION",
  "JS_RETURN_STATEMENT": 26,
  "26": "JS_RETURN_STATEMENT"
};
const ElementTypes = {
  "ELEMENT": 0,
  "0": "ELEMENT",
  "COMPONENT": 1,
  "1": "COMPONENT",
  "SLOT": 2,
  "2": "SLOT",
  "TEMPLATE": 3,
  "3": "TEMPLATE"
};
const ConstantTypes = {
  "NOT_CONSTANT": 0,
  "0": "NOT_CONSTANT",
  "CAN_SKIP_PATCH": 1,
  "1": "CAN_SKIP_PATCH",
  "CAN_CACHE": 2,
  "2": "CAN_CACHE",
  "CAN_STRINGIFY": 3,
  "3": "CAN_STRINGIFY"
};
const locStub = {
  start: { line: 1, column: 1, offset: 0 },
  end: { line: 1, column: 1, offset: 0 },
  source: ""
};
function createRoot(children, source = "") {
  return {
    type: 0,
    source,
    children,
    helpers: /* @__PURE__ */ new Set(),
    components: [],
    directives: [],
    hoists: [],
    imports: [],
    cached: [],
    temps: 0,
    codegenNode: void 0,
    loc: locStub
  };
}
function createVNodeCall(context, tag, props, children, patchFlag, dynamicProps, directives, isBlock = false, disableTracking = false, isComponent2 = false, loc = locStub) {
  if (context) {
    if (isBlock) {
      context.helper(OPEN_BLOCK);
      context.helper(getVNodeBlockHelper(context.inSSR, isComponent2));
    } else {
      context.helper(getVNodeHelper(context.inSSR, isComponent2));
    }
    if (directives) {
      context.helper(WITH_DIRECTIVES);
    }
  }
  return {
    type: 13,
    tag,
    props,
    children,
    patchFlag,
    dynamicProps,
    directives,
    isBlock,
    disableTracking,
    isComponent: isComponent2,
    loc
  };
}
function createArrayExpression(elements, loc = locStub) {
  return {
    type: 17,
    loc,
    elements
  };
}
function createObjectExpression(properties, loc = locStub) {
  return {
    type: 15,
    loc,
    properties
  };
}
function createObjectProperty(key, value) {
  return {
    type: 16,
    loc: locStub,
    key: isString$1(key) ? createSimpleExpression(key, true) : key,
    value
  };
}
function createSimpleExpression(content, isStatic = false, loc = locStub, constType = 0) {
  return {
    type: 4,
    loc,
    content,
    isStatic,
    constType: isStatic ? 3 : constType
  };
}
function createInterpolation(content, loc) {
  return {
    type: 5,
    loc,
    content: isString$1(content) ? createSimpleExpression(content, false, loc) : content
  };
}
function createCompoundExpression(children, loc = locStub) {
  return {
    type: 8,
    loc,
    children
  };
}
function createCallExpression(callee, args = [], loc = locStub) {
  return {
    type: 14,
    loc,
    callee,
    arguments: args
  };
}
function createFunctionExpression(params, returns = void 0, newline = false, isSlot = false, loc = locStub) {
  return {
    type: 18,
    params,
    returns,
    newline,
    isSlot,
    loc
  };
}
function createConditionalExpression(test, consequent, alternate, newline = true) {
  return {
    type: 19,
    test,
    consequent,
    alternate,
    newline,
    loc: locStub
  };
}
function createCacheExpression(index, value, needPauseTracking = false, inVOnce = false) {
  return {
    type: 20,
    index,
    value,
    needPauseTracking,
    inVOnce,
    needArraySpread: false,
    loc: locStub
  };
}
function createBlockStatement(body) {
  return {
    type: 21,
    body,
    loc: locStub
  };
}
function createTemplateLiteral(elements) {
  return {
    type: 22,
    elements,
    loc: locStub
  };
}
function createIfStatement(test, consequent, alternate) {
  return {
    type: 23,
    test,
    consequent,
    alternate,
    loc: locStub
  };
}
function createAssignmentExpression(left, right) {
  return {
    type: 24,
    left,
    right,
    loc: locStub
  };
}
function createSequenceExpression(expressions) {
  return {
    type: 25,
    expressions,
    loc: locStub
  };
}
function createReturnStatement(returns) {
  return {
    type: 26,
    returns,
    loc: locStub
  };
}
function getVNodeHelper(ssr, isComponent2) {
  return ssr || isComponent2 ? CREATE_VNODE : CREATE_ELEMENT_VNODE;
}
function getVNodeBlockHelper(ssr, isComponent2) {
  return ssr || isComponent2 ? CREATE_BLOCK : CREATE_ELEMENT_BLOCK;
}
function convertToBlock(node, { helper, removeHelper, inSSR }) {
  if (!node.isBlock) {
    node.isBlock = true;
    removeHelper(getVNodeHelper(inSSR, node.isComponent));
    helper(OPEN_BLOCK);
    helper(getVNodeBlockHelper(inSSR, node.isComponent));
  }
}
const defaultDelimitersOpen = new Uint8Array([123, 123]);
const defaultDelimitersClose = new Uint8Array([125, 125]);
function isTagStartChar(c) {
  return c >= 97 && c <= 122 || c >= 65 && c <= 90;
}
function isWhitespace(c) {
  return c === 32 || c === 10 || c === 9 || c === 12 || c === 13;
}
function isEndOfTagSection(c) {
  return c === 47 || c === 62 || isWhitespace(c);
}
function toCharCodes(str) {
  const ret = new Uint8Array(str.length);
  for (let i = 0; i < str.length; i++) {
    ret[i] = str.charCodeAt(i);
  }
  return ret;
}
const Sequences = {
  Cdata: new Uint8Array([67, 68, 65, 84, 65, 91]),
  // CDATA[
  CdataEnd: new Uint8Array([93, 93, 62]),
  // ]]>
  CommentEnd: new Uint8Array([45, 45, 62]),
  // `-->`
  ScriptEnd: new Uint8Array([60, 47, 115, 99, 114, 105, 112, 116]),
  // `<\/script`
  StyleEnd: new Uint8Array([60, 47, 115, 116, 121, 108, 101]),
  // `</style`
  TitleEnd: new Uint8Array([60, 47, 116, 105, 116, 108, 101]),
  // `</title`
  TextareaEnd: new Uint8Array([
    60,
    47,
    116,
    101,
    120,
    116,
    97,
    114,
    101,
    97
  ])
  // `</textarea
};
class Tokenizer {
  constructor(stack2, cbs) {
    this.stack = stack2;
    this.cbs = cbs;
    this.state = 1;
    this.buffer = "";
    this.sectionStart = 0;
    this.index = 0;
    this.entityStart = 0;
    this.baseState = 1;
    this.inRCDATA = false;
    this.inXML = false;
    this.inVPre = false;
    this.newlines = [];
    this.mode = 0;
    this.delimiterOpen = defaultDelimitersOpen;
    this.delimiterClose = defaultDelimitersClose;
    this.delimiterIndex = -1;
    this.currentSequence = void 0;
    this.sequenceIndex = 0;
  }
  get inSFCRoot() {
    return this.mode === 2 && this.stack.length === 0;
  }
  reset() {
    this.state = 1;
    this.mode = 0;
    this.buffer = "";
    this.sectionStart = 0;
    this.index = 0;
    this.baseState = 1;
    this.inRCDATA = false;
    this.currentSequence = void 0;
    this.newlines.length = 0;
    this.delimiterOpen = defaultDelimitersOpen;
    this.delimiterClose = defaultDelimitersClose;
  }
  /**
   * Generate Position object with line / column information using recorded
   * newline positions. We know the index is always going to be an already
   * processed index, so all the newlines up to this index should have been
   * recorded.
   */
  getPos(index) {
    let line = 1;
    let column = index + 1;
    const length = this.newlines.length;
    let j = -1;
    if (length > 100) {
      let l = -1;
      let r2 = length;
      while (l + 1 < r2) {
        const m = l + r2 >>> 1;
        this.newlines[m] < index ? l = m : r2 = m;
      }
      j = l;
    } else {
      for (let i = length - 1; i >= 0; i--) {
        if (index > this.newlines[i]) {
          j = i;
          break;
        }
      }
    }
    if (j >= 0) {
      line = j + 2;
      column = index - this.newlines[j];
    }
    return {
      column,
      line,
      offset: index
    };
  }
  peek() {
    return this.buffer.charCodeAt(this.index + 1);
  }
  stateText(c) {
    if (c === 60) {
      if (this.index > this.sectionStart) {
        this.cbs.ontext(this.sectionStart, this.index);
      }
      this.state = 5;
      this.sectionStart = this.index;
    } else if (!this.inVPre && c === this.delimiterOpen[0]) {
      this.state = 2;
      this.delimiterIndex = 0;
      this.stateInterpolationOpen(c);
    }
  }
  stateInterpolationOpen(c) {
    if (c === this.delimiterOpen[this.delimiterIndex]) {
      if (this.delimiterIndex === this.delimiterOpen.length - 1) {
        const start = this.index + 1 - this.delimiterOpen.length;
        if (start > this.sectionStart) {
          this.cbs.ontext(this.sectionStart, start);
        }
        this.state = 3;
        this.sectionStart = start;
      } else {
        this.delimiterIndex++;
      }
    } else if (this.inRCDATA) {
      this.state = 32;
      this.stateInRCDATA(c);
    } else {
      this.state = 1;
      this.stateText(c);
    }
  }
  stateInterpolation(c) {
    if (c === this.delimiterClose[0]) {
      this.state = 4;
      this.delimiterIndex = 0;
      this.stateInterpolationClose(c);
    }
  }
  stateInterpolationClose(c) {
    if (c === this.delimiterClose[this.delimiterIndex]) {
      if (this.delimiterIndex === this.delimiterClose.length - 1) {
        this.cbs.oninterpolation(this.sectionStart, this.index + 1);
        if (this.inRCDATA) {
          this.state = 32;
        } else {
          this.state = 1;
        }
        this.sectionStart = this.index + 1;
      } else {
        this.delimiterIndex++;
      }
    } else {
      this.state = 3;
      this.stateInterpolation(c);
    }
  }
  stateSpecialStartSequence(c) {
    const isEnd = this.sequenceIndex === this.currentSequence.length;
    const isMatch = isEnd ? (
      // If we are at the end of the sequence, make sure the tag name has ended
      isEndOfTagSection(c)
    ) : (
      // Otherwise, do a case-insensitive comparison
      (c | 32) === this.currentSequence[this.sequenceIndex]
    );
    if (!isMatch) {
      this.inRCDATA = false;
    } else if (!isEnd) {
      this.sequenceIndex++;
      return;
    }
    this.sequenceIndex = 0;
    this.state = 6;
    this.stateInTagName(c);
  }
  /** Look for an end tag. For <title> and <textarea>, also decode entities. */
  stateInRCDATA(c) {
    if (this.sequenceIndex === this.currentSequence.length) {
      if (c === 62 || isWhitespace(c)) {
        const endOfText = this.index - this.currentSequence.length;
        if (this.sectionStart < endOfText) {
          const actualIndex = this.index;
          this.index = endOfText;
          this.cbs.ontext(this.sectionStart, endOfText);
          this.index = actualIndex;
        }
        this.sectionStart = endOfText + 2;
        this.stateInClosingTagName(c);
        this.inRCDATA = false;
        return;
      }
      this.sequenceIndex = 0;
    }
    if ((c | 32) === this.currentSequence[this.sequenceIndex]) {
      this.sequenceIndex += 1;
    } else if (this.sequenceIndex === 0) {
      if (this.currentSequence === Sequences.TitleEnd || this.currentSequence === Sequences.TextareaEnd && !this.inSFCRoot) {
        if (!this.inVPre && c === this.delimiterOpen[0]) {
          this.state = 2;
          this.delimiterIndex = 0;
          this.stateInterpolationOpen(c);
        }
      } else if (this.fastForwardTo(60)) {
        this.sequenceIndex = 1;
      }
    } else {
      this.sequenceIndex = Number(c === 60);
    }
  }
  stateCDATASequence(c) {
    if (c === Sequences.Cdata[this.sequenceIndex]) {
      if (++this.sequenceIndex === Sequences.Cdata.length) {
        this.state = 28;
        this.currentSequence = Sequences.CdataEnd;
        this.sequenceIndex = 0;
        this.sectionStart = this.index + 1;
      }
    } else {
      this.sequenceIndex = 0;
      this.state = 23;
      this.stateInDeclaration(c);
    }
  }
  /**
   * When we wait for one specific character, we can speed things up
   * by skipping through the buffer until we find it.
   *
   * @returns Whether the character was found.
   */
  fastForwardTo(c) {
    while (++this.index < this.buffer.length) {
      const cc = this.buffer.charCodeAt(this.index);
      if (cc === 10) {
        this.newlines.push(this.index);
      }
      if (cc === c) {
        return true;
      }
    }
    this.index = this.buffer.length - 1;
    return false;
  }
  /**
   * Comments and CDATA end with `-->` and `]]>`.
   *
   * Their common qualities are:
   * - Their end sequences have a distinct character they start with.
   * - That character is then repeated, so we have to check multiple repeats.
   * - All characters but the start character of the sequence can be skipped.
   */
  stateInCommentLike(c) {
    if (c === this.currentSequence[this.sequenceIndex]) {
      if (++this.sequenceIndex === this.currentSequence.length) {
        if (this.currentSequence === Sequences.CdataEnd) {
          this.cbs.oncdata(this.sectionStart, this.index - 2);
        } else {
          this.cbs.oncomment(this.sectionStart, this.index - 2);
        }
        this.sequenceIndex = 0;
        this.sectionStart = this.index + 1;
        this.state = 1;
      }
    } else if (this.sequenceIndex === 0) {
      if (this.fastForwardTo(this.currentSequence[0])) {
        this.sequenceIndex = 1;
      }
    } else if (c !== this.currentSequence[this.sequenceIndex - 1]) {
      this.sequenceIndex = 0;
    }
  }
  startSpecial(sequence, offset) {
    this.enterRCDATA(sequence, offset);
    this.state = 31;
  }
  enterRCDATA(sequence, offset) {
    this.inRCDATA = true;
    this.currentSequence = sequence;
    this.sequenceIndex = offset;
  }
  stateBeforeTagName(c) {
    if (c === 33) {
      this.state = 22;
      this.sectionStart = this.index + 1;
    } else if (c === 63) {
      this.state = 24;
      this.sectionStart = this.index + 1;
    } else if (isTagStartChar(c)) {
      this.sectionStart = this.index;
      if (this.mode === 0) {
        this.state = 6;
      } else if (this.inSFCRoot) {
        this.state = 34;
      } else if (!this.inXML) {
        if (c === 116) {
          this.state = 30;
        } else {
          this.state = c === 115 ? 29 : 6;
        }
      } else {
        this.state = 6;
      }
    } else if (c === 47) {
      this.state = 8;
    } else {
      this.state = 1;
      this.stateText(c);
    }
  }
  stateInTagName(c) {
    if (isEndOfTagSection(c)) {
      this.handleTagName(c);
    }
  }
  stateInSFCRootTagName(c) {
    if (isEndOfTagSection(c)) {
      const tag = this.buffer.slice(this.sectionStart, this.index);
      if (tag !== "template") {
        this.enterRCDATA(toCharCodes(`</` + tag), 0);
      }
      this.handleTagName(c);
    }
  }
  handleTagName(c) {
    this.cbs.onopentagname(this.sectionStart, this.index);
    this.sectionStart = -1;
    this.state = 11;
    this.stateBeforeAttrName(c);
  }
  stateBeforeClosingTagName(c) {
    if (isWhitespace(c)) ;
    else if (c === 62) {
      this.state = 1;
      this.sectionStart = this.index + 1;
    } else {
      this.state = isTagStartChar(c) ? 9 : 27;
      this.sectionStart = this.index;
    }
  }
  stateInClosingTagName(c) {
    if (c === 62 || isWhitespace(c)) {
      this.cbs.onclosetag(this.sectionStart, this.index);
      this.sectionStart = -1;
      this.state = 10;
      this.stateAfterClosingTagName(c);
    }
  }
  stateAfterClosingTagName(c) {
    if (c === 62) {
      this.state = 1;
      this.sectionStart = this.index + 1;
    }
  }
  stateBeforeAttrName(c) {
    if (c === 62) {
      this.cbs.onopentagend(this.index);
      if (this.inRCDATA) {
        this.state = 32;
      } else {
        this.state = 1;
      }
      this.sectionStart = this.index + 1;
    } else if (c === 47) {
      this.state = 7;
    } else if (c === 60 && this.peek() === 47) {
      this.cbs.onopentagend(this.index);
      this.state = 5;
      this.sectionStart = this.index;
    } else if (!isWhitespace(c)) {
      this.handleAttrStart(c);
    }
  }
  handleAttrStart(c) {
    if (c === 118 && this.peek() === 45) {
      this.state = 13;
      this.sectionStart = this.index;
    } else if (c === 46 || c === 58 || c === 64 || c === 35) {
      this.cbs.ondirname(this.index, this.index + 1);
      this.state = 14;
      this.sectionStart = this.index + 1;
    } else {
      this.state = 12;
      this.sectionStart = this.index;
    }
  }
  stateInSelfClosingTag(c) {
    if (c === 62) {
      this.cbs.onselfclosingtag(this.index);
      this.state = 1;
      this.sectionStart = this.index + 1;
      this.inRCDATA = false;
    } else if (!isWhitespace(c)) {
      this.state = 11;
      this.stateBeforeAttrName(c);
    }
  }
  stateInAttrName(c) {
    if (c === 61 || isEndOfTagSection(c)) {
      this.cbs.onattribname(this.sectionStart, this.index);
      this.handleAttrNameEnd(c);
    }
  }
  stateInDirName(c) {
    if (c === 61 || isEndOfTagSection(c)) {
      this.cbs.ondirname(this.sectionStart, this.index);
      this.handleAttrNameEnd(c);
    } else if (c === 58) {
      this.cbs.ondirname(this.sectionStart, this.index);
      this.state = 14;
      this.sectionStart = this.index + 1;
    } else if (c === 46) {
      this.cbs.ondirname(this.sectionStart, this.index);
      this.state = 16;
      this.sectionStart = this.index + 1;
    }
  }
  stateInDirArg(c) {
    if (c === 61 || isEndOfTagSection(c)) {
      this.cbs.ondirarg(this.sectionStart, this.index);
      this.handleAttrNameEnd(c);
    } else if (c === 91) {
      this.state = 15;
    } else if (c === 46) {
      this.cbs.ondirarg(this.sectionStart, this.index);
      this.state = 16;
      this.sectionStart = this.index + 1;
    }
  }
  stateInDynamicDirArg(c) {
    if (c === 93) {
      this.state = 14;
    } else if (c === 61 || isEndOfTagSection(c)) {
      this.cbs.ondirarg(this.sectionStart, this.index + 1);
      this.handleAttrNameEnd(c);
    }
  }
  stateInDirModifier(c) {
    if (c === 61 || isEndOfTagSection(c)) {
      this.cbs.ondirmodifier(this.sectionStart, this.index);
      this.handleAttrNameEnd(c);
    } else if (c === 46) {
      this.cbs.ondirmodifier(this.sectionStart, this.index);
      this.sectionStart = this.index + 1;
    }
  }
  handleAttrNameEnd(c) {
    this.sectionStart = this.index;
    this.state = 17;
    this.cbs.onattribnameend(this.index);
    this.stateAfterAttrName(c);
  }
  stateAfterAttrName(c) {
    if (c === 61) {
      this.state = 18;
    } else if (c === 47 || c === 62) {
      this.cbs.onattribend(0, this.sectionStart);
      this.sectionStart = -1;
      this.state = 11;
      this.stateBeforeAttrName(c);
    } else if (!isWhitespace(c)) {
      this.cbs.onattribend(0, this.sectionStart);
      this.handleAttrStart(c);
    }
  }
  stateBeforeAttrValue(c) {
    if (c === 34) {
      this.state = 19;
      this.sectionStart = this.index + 1;
    } else if (c === 39) {
      this.state = 20;
      this.sectionStart = this.index + 1;
    } else if (!isWhitespace(c)) {
      this.sectionStart = this.index;
      this.state = 21;
      this.stateInAttrValueNoQuotes(c);
    }
  }
  handleInAttrValue(c, quote) {
    if (c === quote || this.fastForwardTo(quote)) {
      this.cbs.onattribdata(this.sectionStart, this.index);
      this.sectionStart = -1;
      this.cbs.onattribend(
        quote === 34 ? 3 : 2,
        this.index + 1
      );
      this.state = 11;
    }
  }
  stateInAttrValueDoubleQuotes(c) {
    this.handleInAttrValue(c, 34);
  }
  stateInAttrValueSingleQuotes(c) {
    this.handleInAttrValue(c, 39);
  }
  stateInAttrValueNoQuotes(c) {
    if (isWhitespace(c) || c === 62) {
      this.cbs.onattribdata(this.sectionStart, this.index);
      this.sectionStart = -1;
      this.cbs.onattribend(1, this.index);
      this.state = 11;
      this.stateBeforeAttrName(c);
    } else if (c === 39 || c === 60 || c === 61 || c === 96) {
      this.cbs.onerr(
        18,
        this.index
      );
    } else ;
  }
  stateBeforeDeclaration(c) {
    if (c === 91) {
      this.state = 26;
      this.sequenceIndex = 0;
    } else {
      this.state = c === 45 ? 25 : 23;
    }
  }
  stateInDeclaration(c) {
    if (c === 62 || this.fastForwardTo(62)) {
      this.state = 1;
      this.sectionStart = this.index + 1;
    }
  }
  stateInProcessingInstruction(c) {
    if (c === 62 || this.fastForwardTo(62)) {
      this.cbs.onprocessinginstruction(this.sectionStart, this.index);
      this.state = 1;
      this.sectionStart = this.index + 1;
    }
  }
  stateBeforeComment(c) {
    if (c === 45) {
      this.state = 28;
      this.currentSequence = Sequences.CommentEnd;
      this.sequenceIndex = 2;
      this.sectionStart = this.index + 1;
    } else {
      this.state = 23;
    }
  }
  stateInSpecialComment(c) {
    if (c === 62 || this.fastForwardTo(62)) {
      this.cbs.oncomment(this.sectionStart, this.index);
      this.state = 1;
      this.sectionStart = this.index + 1;
    }
  }
  stateBeforeSpecialS(c) {
    if (c === Sequences.ScriptEnd[3]) {
      this.startSpecial(Sequences.ScriptEnd, 4);
    } else if (c === Sequences.StyleEnd[3]) {
      this.startSpecial(Sequences.StyleEnd, 4);
    } else {
      this.state = 6;
      this.stateInTagName(c);
    }
  }
  stateBeforeSpecialT(c) {
    if (c === Sequences.TitleEnd[3]) {
      this.startSpecial(Sequences.TitleEnd, 4);
    } else if (c === Sequences.TextareaEnd[3]) {
      this.startSpecial(Sequences.TextareaEnd, 4);
    } else {
      this.state = 6;
      this.stateInTagName(c);
    }
  }
  startEntity() {
  }
  stateInEntity() {
  }
  /**
   * Iterates through the buffer, calling the function corresponding to the current state.
   *
   * States that are more likely to be hit are higher up, as a performance improvement.
   */
  parse(input) {
    this.buffer = input;
    while (this.index < this.buffer.length) {
      const c = this.buffer.charCodeAt(this.index);
      if (c === 10 && this.state !== 33) {
        this.newlines.push(this.index);
      }
      switch (this.state) {
        case 1: {
          this.stateText(c);
          break;
        }
        case 2: {
          this.stateInterpolationOpen(c);
          break;
        }
        case 3: {
          this.stateInterpolation(c);
          break;
        }
        case 4: {
          this.stateInterpolationClose(c);
          break;
        }
        case 31: {
          this.stateSpecialStartSequence(c);
          break;
        }
        case 32: {
          this.stateInRCDATA(c);
          break;
        }
        case 26: {
          this.stateCDATASequence(c);
          break;
        }
        case 19: {
          this.stateInAttrValueDoubleQuotes(c);
          break;
        }
        case 12: {
          this.stateInAttrName(c);
          break;
        }
        case 13: {
          this.stateInDirName(c);
          break;
        }
        case 14: {
          this.stateInDirArg(c);
          break;
        }
        case 15: {
          this.stateInDynamicDirArg(c);
          break;
        }
        case 16: {
          this.stateInDirModifier(c);
          break;
        }
        case 28: {
          this.stateInCommentLike(c);
          break;
        }
        case 27: {
          this.stateInSpecialComment(c);
          break;
        }
        case 11: {
          this.stateBeforeAttrName(c);
          break;
        }
        case 6: {
          this.stateInTagName(c);
          break;
        }
        case 34: {
          this.stateInSFCRootTagName(c);
          break;
        }
        case 9: {
          this.stateInClosingTagName(c);
          break;
        }
        case 5: {
          this.stateBeforeTagName(c);
          break;
        }
        case 17: {
          this.stateAfterAttrName(c);
          break;
        }
        case 20: {
          this.stateInAttrValueSingleQuotes(c);
          break;
        }
        case 18: {
          this.stateBeforeAttrValue(c);
          break;
        }
        case 8: {
          this.stateBeforeClosingTagName(c);
          break;
        }
        case 10: {
          this.stateAfterClosingTagName(c);
          break;
        }
        case 29: {
          this.stateBeforeSpecialS(c);
          break;
        }
        case 30: {
          this.stateBeforeSpecialT(c);
          break;
        }
        case 21: {
          this.stateInAttrValueNoQuotes(c);
          break;
        }
        case 7: {
          this.stateInSelfClosingTag(c);
          break;
        }
        case 23: {
          this.stateInDeclaration(c);
          break;
        }
        case 22: {
          this.stateBeforeDeclaration(c);
          break;
        }
        case 25: {
          this.stateBeforeComment(c);
          break;
        }
        case 24: {
          this.stateInProcessingInstruction(c);
          break;
        }
        case 33: {
          this.stateInEntity();
          break;
        }
      }
      this.index++;
    }
    this.cleanup();
    this.finish();
  }
  /**
   * Remove data that has already been consumed from the buffer.
   */
  cleanup() {
    if (this.sectionStart !== this.index) {
      if (this.state === 1 || this.state === 32 && this.sequenceIndex === 0) {
        this.cbs.ontext(this.sectionStart, this.index);
        this.sectionStart = this.index;
      } else if (this.state === 19 || this.state === 20 || this.state === 21) {
        this.cbs.onattribdata(this.sectionStart, this.index);
        this.sectionStart = this.index;
      }
    }
  }
  finish() {
    this.handleTrailingData();
    this.cbs.onend();
  }
  /** Handle any trailing data. */
  handleTrailingData() {
    const endIndex = this.buffer.length;
    if (this.sectionStart >= endIndex) {
      return;
    }
    if (this.state === 28) {
      if (this.currentSequence === Sequences.CdataEnd) {
        this.cbs.oncdata(this.sectionStart, endIndex);
      } else {
        this.cbs.oncomment(this.sectionStart, endIndex);
      }
    } else if (this.state === 6 || this.state === 11 || this.state === 18 || this.state === 17 || this.state === 12 || this.state === 13 || this.state === 14 || this.state === 15 || this.state === 16 || this.state === 20 || this.state === 19 || this.state === 21 || this.state === 9) ;
    else {
      this.cbs.ontext(this.sectionStart, endIndex);
    }
  }
  emitCodePoint(cp, consumed) {
  }
}
const CompilerDeprecationTypes = {
  "COMPILER_IS_ON_ELEMENT": "COMPILER_IS_ON_ELEMENT",
  "COMPILER_V_BIND_SYNC": "COMPILER_V_BIND_SYNC",
  "COMPILER_V_BIND_OBJECT_ORDER": "COMPILER_V_BIND_OBJECT_ORDER",
  "COMPILER_V_ON_NATIVE": "COMPILER_V_ON_NATIVE",
  "COMPILER_V_IF_V_FOR_PRECEDENCE": "COMPILER_V_IF_V_FOR_PRECEDENCE",
  "COMPILER_NATIVE_TEMPLATE": "COMPILER_NATIVE_TEMPLATE",
  "COMPILER_INLINE_TEMPLATE": "COMPILER_INLINE_TEMPLATE",
  "COMPILER_FILTERS": "COMPILER_FILTERS"
};
const deprecationData = {
  ["COMPILER_IS_ON_ELEMENT"]: {
    message: `Platform-native elements with "is" prop will no longer be treated as components in Vue 3 unless the "is" value is explicitly prefixed with "vue:".`,
    link: `https://v3-migration.vuejs.org/breaking-changes/custom-elements-interop.html`
  },
  ["COMPILER_V_BIND_SYNC"]: {
    message: (key) => `.sync modifier for v-bind has been removed. Use v-model with argument instead. \`v-bind:${key}.sync\` should be changed to \`v-model:${key}\`.`,
    link: `https://v3-migration.vuejs.org/breaking-changes/v-model.html`
  },
  ["COMPILER_V_BIND_OBJECT_ORDER"]: {
    message: `v-bind="obj" usage is now order sensitive and behaves like JavaScript object spread: it will now overwrite an existing non-mergeable attribute that appears before v-bind in the case of conflict. To retain 2.x behavior, move v-bind to make it the first attribute. You can also suppress this warning if the usage is intended.`,
    link: `https://v3-migration.vuejs.org/breaking-changes/v-bind.html`
  },
  ["COMPILER_V_ON_NATIVE"]: {
    message: `.native modifier for v-on has been removed as is no longer necessary.`,
    link: `https://v3-migration.vuejs.org/breaking-changes/v-on-native-modifier-removed.html`
  },
  ["COMPILER_V_IF_V_FOR_PRECEDENCE"]: {
    message: `v-if / v-for precedence when used on the same element has changed in Vue 3: v-if now takes higher precedence and will no longer have access to v-for scope variables. It is best to avoid the ambiguity with <template> tags or use a computed property that filters v-for data source.`,
    link: `https://v3-migration.vuejs.org/breaking-changes/v-if-v-for.html`
  },
  ["COMPILER_NATIVE_TEMPLATE"]: {
    message: `<template> with no special directives will render as a native template element instead of its inner content in Vue 3.`
  },
  ["COMPILER_INLINE_TEMPLATE"]: {
    message: `"inline-template" has been removed in Vue 3.`,
    link: `https://v3-migration.vuejs.org/breaking-changes/inline-template-attribute.html`
  },
  ["COMPILER_FILTERS"]: {
    message: `filters have been removed in Vue 3. The "|" symbol will be treated as native JavaScript bitwise OR operator. Use method calls or computed properties instead.`,
    link: `https://v3-migration.vuejs.org/breaking-changes/filters.html`
  }
};
function getCompatValue(key, { compatConfig }) {
  const value = compatConfig && compatConfig[key];
  if (key === "MODE") {
    return value || 3;
  } else {
    return value;
  }
}
function isCompatEnabled(key, context) {
  const mode = getCompatValue("MODE", context);
  const value = getCompatValue(key, context);
  return mode === 3 ? value === true : value !== false;
}
function checkCompatEnabled(key, context, loc, ...args) {
  const enabled = isCompatEnabled(key, context);
  return enabled;
}
function warnDeprecation(key, context, loc, ...args) {
  const val = getCompatValue(key, context);
  if (val === "suppress-warning") {
    return;
  }
  const { message, link } = deprecationData[key];
  const msg = `(deprecation ${key}) ${typeof message === "function" ? message(...args) : message}${link ? `
  Details: ${link}` : ``}`;
  const err = new SyntaxError(msg);
  err.code = key;
  if (loc) err.loc = loc;
  context.onWarn(err);
}
function defaultOnError(error2) {
  throw error2;
}
function defaultOnWarn(msg) {
}
function createCompilerError(code, loc, messages, additionalMessage) {
  const msg = `https://vuejs.org/error-reference/#compiler-${code}`;
  const error2 = new SyntaxError(String(msg));
  error2.code = code;
  error2.loc = loc;
  return error2;
}
const ErrorCodes = {
  "ABRUPT_CLOSING_OF_EMPTY_COMMENT": 0,
  "0": "ABRUPT_CLOSING_OF_EMPTY_COMMENT",
  "CDATA_IN_HTML_CONTENT": 1,
  "1": "CDATA_IN_HTML_CONTENT",
  "DUPLICATE_ATTRIBUTE": 2,
  "2": "DUPLICATE_ATTRIBUTE",
  "END_TAG_WITH_ATTRIBUTES": 3,
  "3": "END_TAG_WITH_ATTRIBUTES",
  "END_TAG_WITH_TRAILING_SOLIDUS": 4,
  "4": "END_TAG_WITH_TRAILING_SOLIDUS",
  "EOF_BEFORE_TAG_NAME": 5,
  "5": "EOF_BEFORE_TAG_NAME",
  "EOF_IN_CDATA": 6,
  "6": "EOF_IN_CDATA",
  "EOF_IN_COMMENT": 7,
  "7": "EOF_IN_COMMENT",
  "EOF_IN_SCRIPT_HTML_COMMENT_LIKE_TEXT": 8,
  "8": "EOF_IN_SCRIPT_HTML_COMMENT_LIKE_TEXT",
  "EOF_IN_TAG": 9,
  "9": "EOF_IN_TAG",
  "INCORRECTLY_CLOSED_COMMENT": 10,
  "10": "INCORRECTLY_CLOSED_COMMENT",
  "INCORRECTLY_OPENED_COMMENT": 11,
  "11": "INCORRECTLY_OPENED_COMMENT",
  "INVALID_FIRST_CHARACTER_OF_TAG_NAME": 12,
  "12": "INVALID_FIRST_CHARACTER_OF_TAG_NAME",
  "MISSING_ATTRIBUTE_VALUE": 13,
  "13": "MISSING_ATTRIBUTE_VALUE",
  "MISSING_END_TAG_NAME": 14,
  "14": "MISSING_END_TAG_NAME",
  "MISSING_WHITESPACE_BETWEEN_ATTRIBUTES": 15,
  "15": "MISSING_WHITESPACE_BETWEEN_ATTRIBUTES",
  "NESTED_COMMENT": 16,
  "16": "NESTED_COMMENT",
  "UNEXPECTED_CHARACTER_IN_ATTRIBUTE_NAME": 17,
  "17": "UNEXPECTED_CHARACTER_IN_ATTRIBUTE_NAME",
  "UNEXPECTED_CHARACTER_IN_UNQUOTED_ATTRIBUTE_VALUE": 18,
  "18": "UNEXPECTED_CHARACTER_IN_UNQUOTED_ATTRIBUTE_VALUE",
  "UNEXPECTED_EQUALS_SIGN_BEFORE_ATTRIBUTE_NAME": 19,
  "19": "UNEXPECTED_EQUALS_SIGN_BEFORE_ATTRIBUTE_NAME",
  "UNEXPECTED_NULL_CHARACTER": 20,
  "20": "UNEXPECTED_NULL_CHARACTER",
  "UNEXPECTED_QUESTION_MARK_INSTEAD_OF_TAG_NAME": 21,
  "21": "UNEXPECTED_QUESTION_MARK_INSTEAD_OF_TAG_NAME",
  "UNEXPECTED_SOLIDUS_IN_TAG": 22,
  "22": "UNEXPECTED_SOLIDUS_IN_TAG",
  "X_INVALID_END_TAG": 23,
  "23": "X_INVALID_END_TAG",
  "X_MISSING_END_TAG": 24,
  "24": "X_MISSING_END_TAG",
  "X_MISSING_INTERPOLATION_END": 25,
  "25": "X_MISSING_INTERPOLATION_END",
  "X_MISSING_DIRECTIVE_NAME": 26,
  "26": "X_MISSING_DIRECTIVE_NAME",
  "X_MISSING_DYNAMIC_DIRECTIVE_ARGUMENT_END": 27,
  "27": "X_MISSING_DYNAMIC_DIRECTIVE_ARGUMENT_END",
  "X_V_IF_NO_EXPRESSION": 28,
  "28": "X_V_IF_NO_EXPRESSION",
  "X_V_IF_SAME_KEY": 29,
  "29": "X_V_IF_SAME_KEY",
  "X_V_ELSE_NO_ADJACENT_IF": 30,
  "30": "X_V_ELSE_NO_ADJACENT_IF",
  "X_V_FOR_NO_EXPRESSION": 31,
  "31": "X_V_FOR_NO_EXPRESSION",
  "X_V_FOR_MALFORMED_EXPRESSION": 32,
  "32": "X_V_FOR_MALFORMED_EXPRESSION",
  "X_V_FOR_TEMPLATE_KEY_PLACEMENT": 33,
  "33": "X_V_FOR_TEMPLATE_KEY_PLACEMENT",
  "X_V_BIND_NO_EXPRESSION": 34,
  "34": "X_V_BIND_NO_EXPRESSION",
  "X_V_ON_NO_EXPRESSION": 35,
  "35": "X_V_ON_NO_EXPRESSION",
  "X_V_SLOT_UNEXPECTED_DIRECTIVE_ON_SLOT_OUTLET": 36,
  "36": "X_V_SLOT_UNEXPECTED_DIRECTIVE_ON_SLOT_OUTLET",
  "X_V_SLOT_MIXED_SLOT_USAGE": 37,
  "37": "X_V_SLOT_MIXED_SLOT_USAGE",
  "X_V_SLOT_DUPLICATE_SLOT_NAMES": 38,
  "38": "X_V_SLOT_DUPLICATE_SLOT_NAMES",
  "X_V_SLOT_EXTRANEOUS_DEFAULT_SLOT_CHILDREN": 39,
  "39": "X_V_SLOT_EXTRANEOUS_DEFAULT_SLOT_CHILDREN",
  "X_V_SLOT_MISPLACED": 40,
  "40": "X_V_SLOT_MISPLACED",
  "X_V_MODEL_NO_EXPRESSION": 41,
  "41": "X_V_MODEL_NO_EXPRESSION",
  "X_V_MODEL_MALFORMED_EXPRESSION": 42,
  "42": "X_V_MODEL_MALFORMED_EXPRESSION",
  "X_V_MODEL_ON_SCOPE_VARIABLE": 43,
  "43": "X_V_MODEL_ON_SCOPE_VARIABLE",
  "X_V_MODEL_ON_PROPS": 44,
  "44": "X_V_MODEL_ON_PROPS",
  "X_V_MODEL_ON_CONST": 45,
  "45": "X_V_MODEL_ON_CONST",
  "X_INVALID_EXPRESSION": 46,
  "46": "X_INVALID_EXPRESSION",
  "X_KEEP_ALIVE_INVALID_CHILDREN": 47,
  "47": "X_KEEP_ALIVE_INVALID_CHILDREN",
  "X_PREFIX_ID_NOT_SUPPORTED": 48,
  "48": "X_PREFIX_ID_NOT_SUPPORTED",
  "X_MODULE_MODE_NOT_SUPPORTED": 49,
  "49": "X_MODULE_MODE_NOT_SUPPORTED",
  "X_CACHE_HANDLER_NOT_SUPPORTED": 50,
  "50": "X_CACHE_HANDLER_NOT_SUPPORTED",
  "X_SCOPE_ID_NOT_SUPPORTED": 51,
  "51": "X_SCOPE_ID_NOT_SUPPORTED",
  "X_VNODE_HOOKS": 52,
  "52": "X_VNODE_HOOKS",
  "X_V_BIND_INVALID_SAME_NAME_ARGUMENT": 53,
  "53": "X_V_BIND_INVALID_SAME_NAME_ARGUMENT",
  "__EXTEND_POINT__": 54,
  "54": "__EXTEND_POINT__"
};
const errorMessages = {
  // parse errors
  [0]: "Illegal comment.",
  [1]: "CDATA section is allowed only in XML context.",
  [2]: "Duplicate attribute.",
  [3]: "End tag cannot have attributes.",
  [4]: "Illegal '/' in tags.",
  [5]: "Unexpected EOF in tag.",
  [6]: "Unexpected EOF in CDATA section.",
  [7]: "Unexpected EOF in comment.",
  [8]: "Unexpected EOF in script.",
  [9]: "Unexpected EOF in tag.",
  [10]: "Incorrectly closed comment.",
  [11]: "Incorrectly opened comment.",
  [12]: "Illegal tag name. Use '&lt;' to print '<'.",
  [13]: "Attribute value was expected.",
  [14]: "End tag name was expected.",
  [15]: "Whitespace was expected.",
  [16]: "Unexpected '<!--' in comment.",
  [17]: `Attribute name cannot contain U+0022 ("), U+0027 ('), and U+003C (<).`,
  [18]: "Unquoted attribute value cannot contain U+0022 (\"), U+0027 ('), U+003C (<), U+003D (=), and U+0060 (`).",
  [19]: "Attribute name cannot start with '='.",
  [21]: "'<?' is allowed only in XML context.",
  [20]: `Unexpected null character.`,
  [22]: "Illegal '/' in tags.",
  // Vue-specific parse errors
  [23]: "Invalid end tag.",
  [24]: "Element is missing end tag.",
  [25]: "Interpolation end sign was not found.",
  [27]: "End bracket for dynamic directive argument was not found. Note that dynamic directive argument cannot contain spaces.",
  [26]: "Legal directive name was expected.",
  // transform errors
  [28]: `v-if/v-else-if is missing expression.`,
  [29]: `v-if/else branches must use unique keys.`,
  [30]: `v-else/v-else-if has no adjacent v-if or v-else-if.`,
  [31]: `v-for is missing expression.`,
  [32]: `v-for has invalid expression.`,
  [33]: `<template v-for> key should be placed on the <template> tag.`,
  [34]: `v-bind is missing expression.`,
  [53]: `v-bind with same-name shorthand only allows static argument.`,
  [35]: `v-on is missing expression.`,
  [36]: `Unexpected custom directive on <slot> outlet.`,
  [37]: `Mixed v-slot usage on both the component and nested <template>. When there are multiple named slots, all slots should use <template> syntax to avoid scope ambiguity.`,
  [38]: `Duplicate slot names found. `,
  [39]: `Extraneous children found when component already has explicitly named default slot. These children will be ignored.`,
  [40]: `v-slot can only be used on components or <template> tags.`,
  [41]: `v-model is missing expression.`,
  [42]: `v-model value must be a valid JavaScript member expression.`,
  [43]: `v-model cannot be used on v-for or v-slot scope variables because they are not writable.`,
  [44]: `v-model cannot be used on a prop, because local prop bindings are not writable.
Use a v-bind binding combined with a v-on listener that emits update:x event instead.`,
  [45]: `v-model cannot be used on a const binding because it is not writable.`,
  [46]: `Error parsing JavaScript expression: `,
  [47]: `<KeepAlive> expects exactly one child component.`,
  [52]: `@vnode-* hooks in templates are no longer supported. Use the vue: prefix instead. For example, @vnode-mounted should be changed to @vue:mounted. @vnode-* hooks support has been removed in 3.4.`,
  // generic errors
  [48]: `"prefixIdentifiers" option is not supported in this build of compiler.`,
  [49]: `ES module mode is not supported in this build of compiler.`,
  [50]: `"cacheHandlers" option is only supported when the "prefixIdentifiers" option is enabled.`,
  [51]: `"scopeId" option is only supported in module mode.`,
  // just to fulfill types
  [54]: ``
};
function walkIdentifiers(root, onIdentifier, includeAll = false, parentStack = [], knownIds = /* @__PURE__ */ Object.create(null)) {
  {
    return;
  }
}
function isReferencedIdentifier(id2, parent, parentStack) {
  {
    return false;
  }
}
function isInDestructureAssignment(parent, parentStack) {
  if (parent && (parent.type === "ObjectProperty" || parent.type === "ArrayPattern")) {
    let i = parentStack.length;
    while (i--) {
      const p = parentStack[i];
      if (p.type === "AssignmentExpression") {
        return true;
      } else if (p.type !== "ObjectProperty" && !p.type.endsWith("Pattern")) {
        break;
      }
    }
  }
  return false;
}
function isInNewExpression(parentStack) {
  let i = parentStack.length;
  while (i--) {
    const p = parentStack[i];
    if (p.type === "NewExpression") {
      return true;
    } else if (p.type !== "MemberExpression") {
      break;
    }
  }
  return false;
}
function walkFunctionParams(node, onIdent) {
  for (const p of node.params) {
    for (const id2 of extractIdentifiers(p)) {
      onIdent(id2);
    }
  }
}
function walkBlockDeclarations(block, onIdent) {
  const body = block.type === "SwitchCase" ? block.consequent : block.body;
  for (const stmt of body) {
    if (stmt.type === "VariableDeclaration") {
      if (stmt.declare) continue;
      for (const decl of stmt.declarations) {
        for (const id2 of extractIdentifiers(decl.id)) {
          onIdent(id2);
        }
      }
    } else if (stmt.type === "FunctionDeclaration" || stmt.type === "ClassDeclaration") {
      if (stmt.declare || !stmt.id) continue;
      onIdent(stmt.id);
    } else if (isForStatement(stmt)) {
      walkForStatement(stmt, true, onIdent);
    } else if (stmt.type === "SwitchStatement") {
      walkSwitchStatement(stmt, true, onIdent);
    }
  }
}
function isForStatement(stmt) {
  return stmt.type === "ForOfStatement" || stmt.type === "ForInStatement" || stmt.type === "ForStatement";
}
function walkForStatement(stmt, isVar, onIdent) {
  const variable = stmt.type === "ForStatement" ? stmt.init : stmt.left;
  if (variable && variable.type === "VariableDeclaration" && (variable.kind === "var" ? isVar : !isVar)) {
    for (const decl of variable.declarations) {
      for (const id2 of extractIdentifiers(decl.id)) {
        onIdent(id2);
      }
    }
  }
}
function walkSwitchStatement(stmt, isVar, onIdent) {
  for (const cs of stmt.cases) {
    for (const stmt2 of cs.consequent) {
      if (stmt2.type === "VariableDeclaration" && (stmt2.kind === "var" ? isVar : !isVar)) {
        for (const decl of stmt2.declarations) {
          for (const id2 of extractIdentifiers(decl.id)) {
            onIdent(id2);
          }
        }
      }
    }
    walkBlockDeclarations(cs, onIdent);
  }
}
function extractIdentifiers(param, nodes = []) {
  switch (param.type) {
    case "Identifier":
      nodes.push(param);
      break;
    case "MemberExpression":
      let object = param;
      while (object.type === "MemberExpression") {
        object = object.object;
      }
      nodes.push(object);
      break;
    case "ObjectPattern":
      for (const prop of param.properties) {
        if (prop.type === "RestElement") {
          extractIdentifiers(prop.argument, nodes);
        } else {
          extractIdentifiers(prop.value, nodes);
        }
      }
      break;
    case "ArrayPattern":
      param.elements.forEach((element) => {
        if (element) extractIdentifiers(element, nodes);
      });
      break;
    case "RestElement":
      extractIdentifiers(param.argument, nodes);
      break;
    case "AssignmentPattern":
      extractIdentifiers(param.left, nodes);
      break;
  }
  return nodes;
}
const isFunctionType = (node) => {
  return /Function(?:Expression|Declaration)$|Method$/.test(node.type);
};
const isStaticProperty = (node) => node && (node.type === "ObjectProperty" || node.type === "ObjectMethod") && !node.computed;
const isStaticPropertyKey = (node, parent) => isStaticProperty(parent) && parent.key === node;
const TS_NODE_TYPES = [
  "TSAsExpression",
  // foo as number
  "TSTypeAssertion",
  // (<number>foo)
  "TSNonNullExpression",
  // foo!
  "TSInstantiationExpression",
  // foo<string>
  "TSSatisfiesExpression"
  // foo satisfies T
];
function unwrapTSNode(node) {
  if (TS_NODE_TYPES.includes(node.type)) {
    return unwrapTSNode(node.expression);
  } else {
    return node;
  }
}
const isStaticExp = (p) => p.type === 4 && p.isStatic;
function isCoreComponent(tag) {
  switch (tag) {
    case "Teleport":
    case "teleport":
      return TELEPORT;
    case "Suspense":
    case "suspense":
      return SUSPENSE;
    case "KeepAlive":
    case "keep-alive":
      return KEEP_ALIVE;
    case "BaseTransition":
    case "base-transition":
      return BASE_TRANSITION;
  }
}
const nonIdentifierRE = /^$|^\d|[^\$\w\xA0-\uFFFF]/;
const isSimpleIdentifier = (name) => !nonIdentifierRE.test(name);
const validFirstIdentCharRE = /[A-Za-z_$\xA0-\uFFFF]/;
const validIdentCharRE = /[\.\?\w$\xA0-\uFFFF]/;
const whitespaceRE = /\s+[.[]\s*|\s*[.[]\s+/g;
const getExpSource = (exp) => exp.type === 4 ? exp.content : exp.loc.source;
const isMemberExpressionBrowser = (exp) => {
  const path = getExpSource(exp).trim().replace(whitespaceRE, (s) => s.trim());
  let state = 0;
  let stateStack = [];
  let currentOpenBracketCount = 0;
  let currentOpenParensCount = 0;
  let currentStringType = null;
  for (let i = 0; i < path.length; i++) {
    const char = path.charAt(i);
    switch (state) {
      case 0:
        if (char === "[") {
          stateStack.push(state);
          state = 1;
          currentOpenBracketCount++;
        } else if (char === "(") {
          stateStack.push(state);
          state = 2;
          currentOpenParensCount++;
        } else if (!(i === 0 ? validFirstIdentCharRE : validIdentCharRE).test(char)) {
          return false;
        }
        break;
      case 1:
        if (char === `'` || char === `"` || char === "`") {
          stateStack.push(state);
          state = 3;
          currentStringType = char;
        } else if (char === `[`) {
          currentOpenBracketCount++;
        } else if (char === `]`) {
          if (!--currentOpenBracketCount) {
            state = stateStack.pop();
          }
        }
        break;
      case 2:
        if (char === `'` || char === `"` || char === "`") {
          stateStack.push(state);
          state = 3;
          currentStringType = char;
        } else if (char === `(`) {
          currentOpenParensCount++;
        } else if (char === `)`) {
          if (i === path.length - 1) {
            return false;
          }
          if (!--currentOpenParensCount) {
            state = stateStack.pop();
          }
        }
        break;
      case 3:
        if (char === currentStringType) {
          state = stateStack.pop();
          currentStringType = null;
        }
        break;
    }
  }
  return !currentOpenBracketCount && !currentOpenParensCount;
};
const isMemberExpressionNode = NOOP;
const isMemberExpression = isMemberExpressionBrowser;
const fnExpRE = /^\s*(?:async\s*)?(?:\([^)]*?\)|[\w$_]+)\s*(?::[^=]+)?=>|^\s*(?:async\s+)?function(?:\s+[\w$]+)?\s*\(/;
const isFnExpressionBrowser = (exp) => fnExpRE.test(getExpSource(exp));
const isFnExpressionNode = NOOP;
const isFnExpression = isFnExpressionBrowser;
function advancePositionWithClone(pos, source, numberOfCharacters = source.length) {
  return advancePositionWithMutation(
    {
      offset: pos.offset,
      line: pos.line,
      column: pos.column
    },
    source,
    numberOfCharacters
  );
}
function advancePositionWithMutation(pos, source, numberOfCharacters = source.length) {
  let linesCount = 0;
  let lastNewLinePos = -1;
  for (let i = 0; i < numberOfCharacters; i++) {
    if (source.charCodeAt(i) === 10) {
      linesCount++;
      lastNewLinePos = i;
    }
  }
  pos.offset += numberOfCharacters;
  pos.line += linesCount;
  pos.column = lastNewLinePos === -1 ? pos.column + numberOfCharacters : numberOfCharacters - lastNewLinePos;
  return pos;
}
function assert(condition, msg) {
  if (!condition) {
    throw new Error(msg || `unexpected compiler condition`);
  }
}
function findDir(node, name, allowEmpty = false) {
  for (let i = 0; i < node.props.length; i++) {
    const p = node.props[i];
    if (p.type === 7 && (allowEmpty || p.exp) && (isString$1(name) ? p.name === name : name.test(p.name))) {
      return p;
    }
  }
}
function findProp(node, name, dynamicOnly = false, allowEmpty = false) {
  for (let i = 0; i < node.props.length; i++) {
    const p = node.props[i];
    if (p.type === 6) {
      if (dynamicOnly) continue;
      if (p.name === name && (p.value || allowEmpty)) {
        return p;
      }
    } else if (p.name === "bind" && (p.exp || allowEmpty) && isStaticArgOf(p.arg, name)) {
      return p;
    }
  }
}
function isStaticArgOf(arg, name) {
  return !!(arg && isStaticExp(arg) && arg.content === name);
}
function hasDynamicKeyVBind(node) {
  return node.props.some(
    (p) => p.type === 7 && p.name === "bind" && (!p.arg || // v-bind="obj"
    p.arg.type !== 4 || // v-bind:[_ctx.foo]
    !p.arg.isStatic)
    // v-bind:[foo]
  );
}
function isText$1(node) {
  return node.type === 5 || node.type === 2;
}
function isVPre(p) {
  return p.type === 7 && p.name === "pre";
}
function isVSlot(p) {
  return p.type === 7 && p.name === "slot";
}
function isTemplateNode(node) {
  return node.type === 1 && node.tagType === 3;
}
function isSlotOutlet(node) {
  return node.type === 1 && node.tagType === 2;
}
const propsHelperSet = /* @__PURE__ */ new Set([NORMALIZE_PROPS, GUARD_REACTIVE_PROPS]);
function getUnnormalizedProps(props, callPath = []) {
  if (props && !isString$1(props) && props.type === 14) {
    const callee = props.callee;
    if (!isString$1(callee) && propsHelperSet.has(callee)) {
      return getUnnormalizedProps(
        props.arguments[0],
        callPath.concat(props)
      );
    }
  }
  return [props, callPath];
}
function injectProp(node, prop, context) {
  let propsWithInjection;
  let props = node.type === 13 ? node.props : node.arguments[2];
  let callPath = [];
  let parentCall;
  if (props && !isString$1(props) && props.type === 14) {
    const ret = getUnnormalizedProps(props);
    props = ret[0];
    callPath = ret[1];
    parentCall = callPath[callPath.length - 1];
  }
  if (props == null || isString$1(props)) {
    propsWithInjection = createObjectExpression([prop]);
  } else if (props.type === 14) {
    const first = props.arguments[0];
    if (!isString$1(first) && first.type === 15) {
      if (!hasProp(prop, first)) {
        first.properties.unshift(prop);
      }
    } else {
      if (props.callee === TO_HANDLERS) {
        propsWithInjection = createCallExpression(context.helper(MERGE_PROPS), [
          createObjectExpression([prop]),
          props
        ]);
      } else {
        props.arguments.unshift(createObjectExpression([prop]));
      }
    }
    !propsWithInjection && (propsWithInjection = props);
  } else if (props.type === 15) {
    if (!hasProp(prop, props)) {
      props.properties.unshift(prop);
    }
    propsWithInjection = props;
  } else {
    propsWithInjection = createCallExpression(context.helper(MERGE_PROPS), [
      createObjectExpression([prop]),
      props
    ]);
    if (parentCall && parentCall.callee === GUARD_REACTIVE_PROPS) {
      parentCall = callPath[callPath.length - 2];
    }
  }
  if (node.type === 13) {
    if (parentCall) {
      parentCall.arguments[0] = propsWithInjection;
    } else {
      node.props = propsWithInjection;
    }
  } else {
    if (parentCall) {
      parentCall.arguments[0] = propsWithInjection;
    } else {
      node.arguments[2] = propsWithInjection;
    }
  }
}
function hasProp(prop, props) {
  let result = false;
  if (prop.key.type === 4) {
    const propKeyName = prop.key.content;
    result = props.properties.some(
      (p) => p.key.type === 4 && p.key.content === propKeyName
    );
  }
  return result;
}
function toValidAssetId(name, type) {
  return `_${type}_${name.replace(/[^\w]/g, (searchValue, replaceValue) => {
    return searchValue === "-" ? "_" : name.charCodeAt(replaceValue).toString();
  })}`;
}
function hasScopeRef(node, ids) {
  if (!node || Object.keys(ids).length === 0) {
    return false;
  }
  switch (node.type) {
    case 1:
      for (let i = 0; i < node.props.length; i++) {
        const p = node.props[i];
        if (p.type === 7 && (hasScopeRef(p.arg, ids) || hasScopeRef(p.exp, ids))) {
          return true;
        }
      }
      return node.children.some((c) => hasScopeRef(c, ids));
    case 11:
      if (hasScopeRef(node.source, ids)) {
        return true;
      }
      return node.children.some((c) => hasScopeRef(c, ids));
    case 9:
      return node.branches.some((b) => hasScopeRef(b, ids));
    case 10:
      if (hasScopeRef(node.condition, ids)) {
        return true;
      }
      return node.children.some((c) => hasScopeRef(c, ids));
    case 4:
      return !node.isStatic && isSimpleIdentifier(node.content) && !!ids[node.content];
    case 8:
      return node.children.some((c) => isObject(c) && hasScopeRef(c, ids));
    case 5:
    case 12:
      return hasScopeRef(node.content, ids);
    case 2:
    case 3:
    case 20:
      return false;
    default:
      return false;
  }
}
function getMemoedVNodeCall(node) {
  if (node.type === 14 && node.callee === WITH_MEMO) {
    return node.arguments[1].returns;
  } else {
    return node;
  }
}
const forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+(\S[\s\S]*)/;
function isAllWhitespace(str) {
  for (let i = 0; i < str.length; i++) {
    if (!isWhitespace(str.charCodeAt(i))) {
      return false;
    }
  }
  return true;
}
function isWhitespaceText(node) {
  return node.type === 2 && isAllWhitespace(node.content) || node.type === 12 && isWhitespaceText(node.content);
}
function isCommentOrWhitespace(node) {
  return node.type === 3 || isWhitespaceText(node);
}
const defaultParserOptions = {
  parseMode: "base",
  ns: 0,
  delimiters: [`{{`, `}}`],
  getNamespace: () => 0,
  isVoidTag: NO,
  isPreTag: NO,
  isIgnoreNewlineTag: NO,
  isCustomElement: NO,
  onError: defaultOnError,
  onWarn: defaultOnWarn,
  comments: false,
  prefixIdentifiers: false
};
let currentOptions = defaultParserOptions;
let currentRoot = null;
let currentInput = "";
let currentOpenTag = null;
let currentProp = null;
let currentAttrValue = "";
let currentAttrStartIndex = -1;
let currentAttrEndIndex = -1;
let inPre = 0;
let inVPre = false;
let currentVPreBoundary = null;
const stack = [];
const tokenizer = new Tokenizer(stack, {
  onerr: emitError,
  ontext(start, end) {
    onText(getSlice(start, end), start, end);
  },
  ontextentity(char, start, end) {
    onText(char, start, end);
  },
  oninterpolation(start, end) {
    if (inVPre) {
      return onText(getSlice(start, end), start, end);
    }
    let innerStart = start + tokenizer.delimiterOpen.length;
    let innerEnd = end - tokenizer.delimiterClose.length;
    while (isWhitespace(currentInput.charCodeAt(innerStart))) {
      innerStart++;
    }
    while (isWhitespace(currentInput.charCodeAt(innerEnd - 1))) {
      innerEnd--;
    }
    let exp = getSlice(innerStart, innerEnd);
    if (exp.includes("&")) {
      {
        exp = currentOptions.decodeEntities(exp, false);
      }
    }
    addNode({
      type: 5,
      content: createExp(exp, false, getLoc(innerStart, innerEnd)),
      loc: getLoc(start, end)
    });
  },
  onopentagname(start, end) {
    const name = getSlice(start, end);
    currentOpenTag = {
      type: 1,
      tag: name,
      ns: currentOptions.getNamespace(name, stack[0], currentOptions.ns),
      tagType: 0,
      // will be refined on tag close
      props: [],
      children: [],
      loc: getLoc(start - 1, end),
      codegenNode: void 0
    };
  },
  onopentagend(end) {
    endOpenTag(end);
  },
  onclosetag(start, end) {
    const name = getSlice(start, end);
    if (!currentOptions.isVoidTag(name)) {
      let found = false;
      for (let i = 0; i < stack.length; i++) {
        const e = stack[i];
        if (e.tag.toLowerCase() === name.toLowerCase()) {
          found = true;
          if (i > 0) {
            emitError(24, stack[0].loc.start.offset);
          }
          for (let j = 0; j <= i; j++) {
            const el = stack.shift();
            onCloseTag(el, end, j < i);
          }
          break;
        }
      }
      if (!found) {
        emitError(23, backTrack(start, 60));
      }
    }
  },
  onselfclosingtag(end) {
    const name = currentOpenTag.tag;
    currentOpenTag.isSelfClosing = true;
    endOpenTag(end);
    if (stack[0] && stack[0].tag === name) {
      onCloseTag(stack.shift(), end);
    }
  },
  onattribname(start, end) {
    currentProp = {
      type: 6,
      name: getSlice(start, end),
      nameLoc: getLoc(start, end),
      value: void 0,
      loc: getLoc(start)
    };
  },
  ondirname(start, end) {
    const raw = getSlice(start, end);
    const name = raw === "." || raw === ":" ? "bind" : raw === "@" ? "on" : raw === "#" ? "slot" : raw.slice(2);
    if (!inVPre && name === "") {
      emitError(26, start);
    }
    if (inVPre || name === "") {
      currentProp = {
        type: 6,
        name: raw,
        nameLoc: getLoc(start, end),
        value: void 0,
        loc: getLoc(start)
      };
    } else {
      currentProp = {
        type: 7,
        name,
        rawName: raw,
        exp: void 0,
        arg: void 0,
        modifiers: raw === "." ? [createSimpleExpression("prop")] : [],
        loc: getLoc(start)
      };
      if (name === "pre") {
        inVPre = tokenizer.inVPre = true;
        currentVPreBoundary = currentOpenTag;
        const props = currentOpenTag.props;
        for (let i = 0; i < props.length; i++) {
          if (props[i].type === 7) {
            props[i] = dirToAttr(props[i]);
          }
        }
      }
    }
  },
  ondirarg(start, end) {
    if (start === end) return;
    const arg = getSlice(start, end);
    if (inVPre && !isVPre(currentProp)) {
      currentProp.name += arg;
      setLocEnd(currentProp.nameLoc, end);
    } else {
      const isStatic = arg[0] !== `[`;
      currentProp.arg = createExp(
        isStatic ? arg : arg.slice(1, -1),
        isStatic,
        getLoc(start, end),
        isStatic ? 3 : 0
      );
    }
  },
  ondirmodifier(start, end) {
    const mod = getSlice(start, end);
    if (inVPre && !isVPre(currentProp)) {
      currentProp.name += "." + mod;
      setLocEnd(currentProp.nameLoc, end);
    } else if (currentProp.name === "slot") {
      const arg = currentProp.arg;
      if (arg) {
        arg.content += "." + mod;
        setLocEnd(arg.loc, end);
      }
    } else {
      const exp = createSimpleExpression(mod, true, getLoc(start, end));
      currentProp.modifiers.push(exp);
    }
  },
  onattribdata(start, end) {
    currentAttrValue += getSlice(start, end);
    if (currentAttrStartIndex < 0) currentAttrStartIndex = start;
    currentAttrEndIndex = end;
  },
  onattribentity(char, start, end) {
    currentAttrValue += char;
    if (currentAttrStartIndex < 0) currentAttrStartIndex = start;
    currentAttrEndIndex = end;
  },
  onattribnameend(end) {
    const start = currentProp.loc.start.offset;
    const name = getSlice(start, end);
    if (currentProp.type === 7) {
      currentProp.rawName = name;
    }
    if (currentOpenTag.props.some(
      (p) => (p.type === 7 ? p.rawName : p.name) === name
    )) {
      emitError(2, start);
    }
  },
  onattribend(quote, end) {
    if (currentOpenTag && currentProp) {
      setLocEnd(currentProp.loc, end);
      if (quote !== 0) {
        if (currentAttrValue.includes("&")) {
          currentAttrValue = currentOptions.decodeEntities(
            currentAttrValue,
            true
          );
        }
        if (currentProp.type === 6) {
          if (currentProp.name === "class") {
            currentAttrValue = condense(currentAttrValue).trim();
          }
          if (quote === 1 && !currentAttrValue) {
            emitError(13, end);
          }
          currentProp.value = {
            type: 2,
            content: currentAttrValue,
            loc: quote === 1 ? getLoc(currentAttrStartIndex, currentAttrEndIndex) : getLoc(currentAttrStartIndex - 1, currentAttrEndIndex + 1)
          };
          if (tokenizer.inSFCRoot && currentOpenTag.tag === "template" && currentProp.name === "lang" && currentAttrValue && currentAttrValue !== "html") {
            tokenizer.enterRCDATA(toCharCodes(`</template`), 0);
          }
        } else {
          let expParseMode = 0;
          currentProp.exp = createExp(
            currentAttrValue,
            false,
            getLoc(currentAttrStartIndex, currentAttrEndIndex),
            0,
            expParseMode
          );
          if (currentProp.name === "for") {
            currentProp.forParseResult = parseForExpression(currentProp.exp);
          }
          let syncIndex = -1;
          if (currentProp.name === "bind" && (syncIndex = currentProp.modifiers.findIndex(
            (mod) => mod.content === "sync"
          )) > -1 && checkCompatEnabled(
            "COMPILER_V_BIND_SYNC",
            currentOptions,
            currentProp.loc,
            currentProp.arg.loc.source
          )) {
            currentProp.name = "model";
            currentProp.modifiers.splice(syncIndex, 1);
          }
        }
      }
      if (currentProp.type !== 7 || currentProp.name !== "pre") {
        currentOpenTag.props.push(currentProp);
      }
    }
    currentAttrValue = "";
    currentAttrStartIndex = currentAttrEndIndex = -1;
  },
  oncomment(start, end) {
    if (currentOptions.comments) {
      addNode({
        type: 3,
        content: getSlice(start, end),
        loc: getLoc(start - 4, end + 3)
      });
    }
  },
  onend() {
    const end = currentInput.length;
    for (let index = 0; index < stack.length; index++) {
      onCloseTag(stack[index], end - 1);
      emitError(24, stack[index].loc.start.offset);
    }
  },
  oncdata(start, end) {
    if (stack[0].ns !== 0) {
      onText(getSlice(start, end), start, end);
    } else {
      emitError(1, start - 9);
    }
  },
  onprocessinginstruction(start) {
    if ((stack[0] ? stack[0].ns : currentOptions.ns) === 0) {
      emitError(
        21,
        start - 1
      );
    }
  }
});
const forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
const stripParensRE = /^\(|\)$/g;
function parseForExpression(input) {
  const loc = input.loc;
  const exp = input.content;
  const inMatch = exp.match(forAliasRE);
  if (!inMatch) return;
  const [, LHS, RHS] = inMatch;
  const createAliasExpression = (content, offset, asParam = false) => {
    const start = loc.start.offset + offset;
    const end = start + content.length;
    return createExp(
      content,
      false,
      getLoc(start, end),
      0,
      asParam ? 1 : 0
      /* Normal */
    );
  };
  const result = {
    source: createAliasExpression(RHS.trim(), exp.indexOf(RHS, LHS.length)),
    value: void 0,
    key: void 0,
    index: void 0,
    finalized: false
  };
  let valueContent = LHS.trim().replace(stripParensRE, "").trim();
  const trimmedOffset = LHS.indexOf(valueContent);
  const iteratorMatch = valueContent.match(forIteratorRE);
  if (iteratorMatch) {
    valueContent = valueContent.replace(forIteratorRE, "").trim();
    const keyContent = iteratorMatch[1].trim();
    let keyOffset;
    if (keyContent) {
      keyOffset = exp.indexOf(keyContent, trimmedOffset + valueContent.length);
      result.key = createAliasExpression(keyContent, keyOffset, true);
    }
    if (iteratorMatch[2]) {
      const indexContent = iteratorMatch[2].trim();
      if (indexContent) {
        result.index = createAliasExpression(
          indexContent,
          exp.indexOf(
            indexContent,
            result.key ? keyOffset + keyContent.length : trimmedOffset + valueContent.length
          ),
          true
        );
      }
    }
  }
  if (valueContent) {
    result.value = createAliasExpression(valueContent, trimmedOffset, true);
  }
  return result;
}
function getSlice(start, end) {
  return currentInput.slice(start, end);
}
function endOpenTag(end) {
  if (tokenizer.inSFCRoot) {
    currentOpenTag.innerLoc = getLoc(end + 1, end + 1);
  }
  addNode(currentOpenTag);
  const { tag, ns } = currentOpenTag;
  if (ns === 0 && currentOptions.isPreTag(tag)) {
    inPre++;
  }
  if (currentOptions.isVoidTag(tag)) {
    onCloseTag(currentOpenTag, end);
  } else {
    stack.unshift(currentOpenTag);
    if (ns === 1 || ns === 2) {
      tokenizer.inXML = true;
    }
  }
  currentOpenTag = null;
}
function onText(content, start, end) {
  {
    const tag = stack[0] && stack[0].tag;
    if (tag !== "script" && tag !== "style" && content.includes("&")) {
      content = currentOptions.decodeEntities(content, false);
    }
  }
  const parent = stack[0] || currentRoot;
  const lastNode = parent.children[parent.children.length - 1];
  if (lastNode && lastNode.type === 2) {
    lastNode.content += content;
    setLocEnd(lastNode.loc, end);
  } else {
    parent.children.push({
      type: 2,
      content,
      loc: getLoc(start, end)
    });
  }
}
function onCloseTag(el, end, isImplied = false) {
  if (isImplied) {
    setLocEnd(el.loc, backTrack(end, 60));
  } else {
    setLocEnd(el.loc, lookAhead(end, 62) + 1);
  }
  if (tokenizer.inSFCRoot) {
    if (el.children.length) {
      el.innerLoc.end = extend({}, el.children[el.children.length - 1].loc.end);
    } else {
      el.innerLoc.end = extend({}, el.innerLoc.start);
    }
    el.innerLoc.source = getSlice(
      el.innerLoc.start.offset,
      el.innerLoc.end.offset
    );
  }
  const { tag, ns, children } = el;
  if (!inVPre) {
    if (tag === "slot") {
      el.tagType = 2;
    } else if (isFragmentTemplate(el)) {
      el.tagType = 3;
    } else if (isComponent(el)) {
      el.tagType = 1;
    }
  }
  if (!tokenizer.inRCDATA) {
    el.children = condenseWhitespace(children);
  }
  if (ns === 0 && currentOptions.isIgnoreNewlineTag(tag)) {
    const first = children[0];
    if (first && first.type === 2) {
      first.content = first.content.replace(/^\r?\n/, "");
    }
  }
  if (ns === 0 && currentOptions.isPreTag(tag)) {
    inPre--;
  }
  if (currentVPreBoundary === el) {
    inVPre = tokenizer.inVPre = false;
    currentVPreBoundary = null;
  }
  if (tokenizer.inXML && (stack[0] ? stack[0].ns : currentOptions.ns) === 0) {
    tokenizer.inXML = false;
  }
  {
    const props = el.props;
    if (!tokenizer.inSFCRoot && isCompatEnabled(
      "COMPILER_NATIVE_TEMPLATE",
      currentOptions
    ) && el.tag === "template" && !isFragmentTemplate(el)) {
      const parent = stack[0] || currentRoot;
      const index = parent.children.indexOf(el);
      parent.children.splice(index, 1, ...el.children);
    }
    const inlineTemplateProp = props.find(
      (p) => p.type === 6 && p.name === "inline-template"
    );
    if (inlineTemplateProp && checkCompatEnabled(
      "COMPILER_INLINE_TEMPLATE",
      currentOptions,
      inlineTemplateProp.loc
    ) && el.children.length) {
      inlineTemplateProp.value = {
        type: 2,
        content: getSlice(
          el.children[0].loc.start.offset,
          el.children[el.children.length - 1].loc.end.offset
        ),
        loc: inlineTemplateProp.loc
      };
    }
  }
}
function lookAhead(index, c) {
  let i = index;
  while (currentInput.charCodeAt(i) !== c && i < currentInput.length - 1) i++;
  return i;
}
function backTrack(index, c) {
  let i = index;
  while (currentInput.charCodeAt(i) !== c && i >= 0) i--;
  return i;
}
const specialTemplateDir = /* @__PURE__ */ new Set(["if", "else", "else-if", "for", "slot"]);
function isFragmentTemplate({ tag, props }) {
  if (tag === "template") {
    for (let i = 0; i < props.length; i++) {
      if (props[i].type === 7 && specialTemplateDir.has(props[i].name)) {
        return true;
      }
    }
  }
  return false;
}
function isComponent({ tag, props }) {
  if (currentOptions.isCustomElement(tag)) {
    return false;
  }
  if (tag === "component" || isUpperCase(tag.charCodeAt(0)) || isCoreComponent(tag) || currentOptions.isBuiltInComponent && currentOptions.isBuiltInComponent(tag) || currentOptions.isNativeTag && !currentOptions.isNativeTag(tag)) {
    return true;
  }
  for (let i = 0; i < props.length; i++) {
    const p = props[i];
    if (p.type === 6) {
      if (p.name === "is" && p.value) {
        if (p.value.content.startsWith("vue:")) {
          return true;
        } else if (checkCompatEnabled(
          "COMPILER_IS_ON_ELEMENT",
          currentOptions,
          p.loc
        )) {
          return true;
        }
      }
    } else if (
      // :is on plain element - only treat as component in compat mode
      p.name === "bind" && isStaticArgOf(p.arg, "is") && checkCompatEnabled(
        "COMPILER_IS_ON_ELEMENT",
        currentOptions,
        p.loc
      )
    ) {
      return true;
    }
  }
  return false;
}
function isUpperCase(c) {
  return c > 64 && c < 91;
}
const windowsNewlineRE = /\r\n/g;
function condenseWhitespace(nodes) {
  const shouldCondense = currentOptions.whitespace !== "preserve";
  let removedWhitespace = false;
  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];
    if (node.type === 2) {
      if (!inPre) {
        if (isAllWhitespace(node.content)) {
          const prev = nodes[i - 1] && nodes[i - 1].type;
          const next = nodes[i + 1] && nodes[i + 1].type;
          if (!prev || !next || shouldCondense && (prev === 3 && (next === 3 || next === 1) || prev === 1 && (next === 3 || next === 1 && hasNewlineChar(node.content)))) {
            removedWhitespace = true;
            nodes[i] = null;
          } else {
            node.content = " ";
          }
        } else if (shouldCondense) {
          node.content = condense(node.content);
        }
      } else {
        node.content = node.content.replace(windowsNewlineRE, "\n");
      }
    }
  }
  return removedWhitespace ? nodes.filter(Boolean) : nodes;
}
function hasNewlineChar(str) {
  for (let i = 0; i < str.length; i++) {
    const c = str.charCodeAt(i);
    if (c === 10 || c === 13) {
      return true;
    }
  }
  return false;
}
function condense(str) {
  let ret = "";
  let prevCharIsWhitespace = false;
  for (let i = 0; i < str.length; i++) {
    if (isWhitespace(str.charCodeAt(i))) {
      if (!prevCharIsWhitespace) {
        ret += " ";
        prevCharIsWhitespace = true;
      }
    } else {
      ret += str[i];
      prevCharIsWhitespace = false;
    }
  }
  return ret;
}
function addNode(node) {
  (stack[0] || currentRoot).children.push(node);
}
function getLoc(start, end) {
  return {
    start: tokenizer.getPos(start),
    // @ts-expect-error allow late attachment
    end: end == null ? end : tokenizer.getPos(end),
    // @ts-expect-error allow late attachment
    source: end == null ? end : getSlice(start, end)
  };
}
function cloneLoc(loc) {
  return getLoc(loc.start.offset, loc.end.offset);
}
function setLocEnd(loc, end) {
  loc.end = tokenizer.getPos(end);
  loc.source = getSlice(loc.start.offset, end);
}
function dirToAttr(dir) {
  const attr = {
    type: 6,
    name: dir.rawName,
    nameLoc: getLoc(
      dir.loc.start.offset,
      dir.loc.start.offset + dir.rawName.length
    ),
    value: void 0,
    loc: dir.loc
  };
  if (dir.exp) {
    const loc = dir.exp.loc;
    if (loc.end.offset < dir.loc.end.offset) {
      loc.start.offset--;
      loc.start.column--;
      loc.end.offset++;
      loc.end.column++;
    }
    attr.value = {
      type: 2,
      content: dir.exp.content,
      loc
    };
  }
  return attr;
}
function createExp(content, isStatic = false, loc, constType = 0, parseMode = 0) {
  const exp = createSimpleExpression(content, isStatic, loc, constType);
  return exp;
}
function emitError(code, index, message) {
  currentOptions.onError(
    createCompilerError(code, getLoc(index, index))
  );
}
function reset() {
  tokenizer.reset();
  currentOpenTag = null;
  currentProp = null;
  currentAttrValue = "";
  currentAttrStartIndex = -1;
  currentAttrEndIndex = -1;
  stack.length = 0;
}
function baseParse(input, options) {
  reset();
  currentInput = input;
  currentOptions = extend({}, defaultParserOptions);
  if (options) {
    let key;
    for (key in options) {
      if (options[key] != null) {
        currentOptions[key] = options[key];
      }
    }
  }
  tokenizer.mode = currentOptions.parseMode === "html" ? 1 : currentOptions.parseMode === "sfc" ? 2 : 0;
  tokenizer.inXML = currentOptions.ns === 1 || currentOptions.ns === 2;
  const delimiters = options && options.delimiters;
  if (delimiters) {
    tokenizer.delimiterOpen = toCharCodes(delimiters[0]);
    tokenizer.delimiterClose = toCharCodes(delimiters[1]);
  }
  const root = currentRoot = createRoot([], input);
  tokenizer.parse(currentInput);
  root.loc = getLoc(0, input.length);
  root.children = condenseWhitespace(root.children);
  currentRoot = null;
  return root;
}
function cacheStatic(root, context) {
  walk(
    root,
    void 0,
    context,
    // Root node is unfortunately non-hoistable due to potential parent
    // fallthrough attributes.
    !!getSingleElementRoot(root)
  );
}
function getSingleElementRoot(root) {
  const children = root.children.filter((x) => x.type !== 3);
  return children.length === 1 && children[0].type === 1 && !isSlotOutlet(children[0]) ? children[0] : null;
}
function walk(node, parent, context, doNotHoistNode = false, inFor = false) {
  const { children } = node;
  const toCache = [];
  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    if (child.type === 1 && child.tagType === 0) {
      const constantType = doNotHoistNode ? 0 : getConstantType(child, context);
      if (constantType > 0) {
        if (constantType >= 2) {
          child.codegenNode.patchFlag = -1;
          toCache.push(child);
          continue;
        }
      } else {
        const codegenNode = child.codegenNode;
        if (codegenNode.type === 13) {
          const flag = codegenNode.patchFlag;
          if ((flag === void 0 || flag === 512 || flag === 1) && getGeneratedPropsConstantType(child, context) >= 2) {
            const props = getNodeProps(child);
            if (props) {
              codegenNode.props = context.hoist(props);
            }
          }
          if (codegenNode.dynamicProps) {
            codegenNode.dynamicProps = context.hoist(codegenNode.dynamicProps);
          }
        }
      }
    } else if (child.type === 12) {
      const constantType = doNotHoistNode ? 0 : getConstantType(child, context);
      if (constantType >= 2) {
        if (child.codegenNode.type === 14 && child.codegenNode.arguments.length > 0) {
          child.codegenNode.arguments.push(
            `-1`
          );
        }
        toCache.push(child);
        continue;
      }
    }
    if (child.type === 1) {
      const isComponent2 = child.tagType === 1;
      if (isComponent2) {
        context.scopes.vSlot++;
      }
      walk(child, node, context, false, inFor);
      if (isComponent2) {
        context.scopes.vSlot--;
      }
    } else if (child.type === 11) {
      walk(child, node, context, child.children.length === 1, true);
    } else if (child.type === 9) {
      for (let i2 = 0; i2 < child.branches.length; i2++) {
        walk(
          child.branches[i2],
          node,
          context,
          child.branches[i2].children.length === 1,
          inFor
        );
      }
    }
  }
  let cachedAsArray = false;
  if (toCache.length === children.length && node.type === 1) {
    if (node.tagType === 0 && node.codegenNode && node.codegenNode.type === 13 && isArray(node.codegenNode.children)) {
      node.codegenNode.children = getCacheExpression(
        createArrayExpression(node.codegenNode.children)
      );
      cachedAsArray = true;
    } else if (node.tagType === 1 && node.codegenNode && node.codegenNode.type === 13 && node.codegenNode.children && !isArray(node.codegenNode.children) && node.codegenNode.children.type === 15) {
      const slot = getSlotNode(node.codegenNode, "default");
      if (slot) {
        slot.returns = getCacheExpression(
          createArrayExpression(slot.returns)
        );
        cachedAsArray = true;
      }
    } else if (node.tagType === 3 && parent && parent.type === 1 && parent.tagType === 1 && parent.codegenNode && parent.codegenNode.type === 13 && parent.codegenNode.children && !isArray(parent.codegenNode.children) && parent.codegenNode.children.type === 15) {
      const slotName = findDir(node, "slot", true);
      const slot = slotName && slotName.arg && getSlotNode(parent.codegenNode, slotName.arg);
      if (slot) {
        slot.returns = getCacheExpression(
          createArrayExpression(slot.returns)
        );
        cachedAsArray = true;
      }
    }
  }
  if (!cachedAsArray) {
    for (const child of toCache) {
      child.codegenNode = context.cache(child.codegenNode);
    }
  }
  function getCacheExpression(value) {
    const exp = context.cache(value);
    exp.needArraySpread = true;
    return exp;
  }
  function getSlotNode(node2, name) {
    if (node2.children && !isArray(node2.children) && node2.children.type === 15) {
      const slot = node2.children.properties.find(
        (p) => p.key === name || p.key.content === name
      );
      return slot && slot.value;
    }
  }
  if (toCache.length && context.transformHoist) {
    context.transformHoist(children, context, node);
  }
}
function getConstantType(node, context) {
  const { constantCache } = context;
  switch (node.type) {
    case 1:
      if (node.tagType !== 0) {
        return 0;
      }
      const cached = constantCache.get(node);
      if (cached !== void 0) {
        return cached;
      }
      const codegenNode = node.codegenNode;
      if (codegenNode.type !== 13) {
        return 0;
      }
      if (codegenNode.isBlock && node.tag !== "svg" && node.tag !== "foreignObject" && node.tag !== "math") {
        return 0;
      }
      if (codegenNode.patchFlag === void 0) {
        let returnType2 = 3;
        const generatedPropsType = getGeneratedPropsConstantType(node, context);
        if (generatedPropsType === 0) {
          constantCache.set(node, 0);
          return 0;
        }
        if (generatedPropsType < returnType2) {
          returnType2 = generatedPropsType;
        }
        for (let i = 0; i < node.children.length; i++) {
          const childType = getConstantType(node.children[i], context);
          if (childType === 0) {
            constantCache.set(node, 0);
            return 0;
          }
          if (childType < returnType2) {
            returnType2 = childType;
          }
        }
        if (returnType2 > 1) {
          for (let i = 0; i < node.props.length; i++) {
            const p = node.props[i];
            if (p.type === 7 && p.name === "bind" && p.exp) {
              const expType = getConstantType(p.exp, context);
              if (expType === 0) {
                constantCache.set(node, 0);
                return 0;
              }
              if (expType < returnType2) {
                returnType2 = expType;
              }
            }
          }
        }
        if (codegenNode.isBlock) {
          for (let i = 0; i < node.props.length; i++) {
            const p = node.props[i];
            if (p.type === 7) {
              constantCache.set(node, 0);
              return 0;
            }
          }
          context.removeHelper(OPEN_BLOCK);
          context.removeHelper(
            getVNodeBlockHelper(context.inSSR, codegenNode.isComponent)
          );
          codegenNode.isBlock = false;
          context.helper(getVNodeHelper(context.inSSR, codegenNode.isComponent));
        }
        constantCache.set(node, returnType2);
        return returnType2;
      } else {
        constantCache.set(node, 0);
        return 0;
      }
    case 2:
    case 3:
      return 3;
    case 9:
    case 11:
    case 10:
      return 0;
    case 5:
    case 12:
      return getConstantType(node.content, context);
    case 4:
      return node.constType;
    case 8:
      let returnType = 3;
      for (let i = 0; i < node.children.length; i++) {
        const child = node.children[i];
        if (isString$1(child) || isSymbol(child)) {
          continue;
        }
        const childType = getConstantType(child, context);
        if (childType === 0) {
          return 0;
        } else if (childType < returnType) {
          returnType = childType;
        }
      }
      return returnType;
    case 20:
      return 2;
    default:
      return 0;
  }
}
const allowHoistedHelperSet = /* @__PURE__ */ new Set([
  NORMALIZE_CLASS,
  NORMALIZE_STYLE,
  NORMALIZE_PROPS,
  GUARD_REACTIVE_PROPS
]);
function getConstantTypeOfHelperCall(value, context) {
  if (value.type === 14 && !isString$1(value.callee) && allowHoistedHelperSet.has(value.callee)) {
    const arg = value.arguments[0];
    if (arg.type === 4) {
      return getConstantType(arg, context);
    } else if (arg.type === 14) {
      return getConstantTypeOfHelperCall(arg, context);
    }
  }
  return 0;
}
function getGeneratedPropsConstantType(node, context) {
  let returnType = 3;
  const props = getNodeProps(node);
  if (props && props.type === 15) {
    const { properties } = props;
    for (let i = 0; i < properties.length; i++) {
      const { key, value } = properties[i];
      const keyType = getConstantType(key, context);
      if (keyType === 0) {
        return keyType;
      }
      if (keyType < returnType) {
        returnType = keyType;
      }
      let valueType;
      if (value.type === 4) {
        valueType = getConstantType(value, context);
      } else if (value.type === 14) {
        valueType = getConstantTypeOfHelperCall(value, context);
      } else {
        valueType = 0;
      }
      if (valueType === 0) {
        return valueType;
      }
      if (valueType < returnType) {
        returnType = valueType;
      }
    }
  }
  return returnType;
}
function getNodeProps(node) {
  const codegenNode = node.codegenNode;
  if (codegenNode.type === 13) {
    return codegenNode.props;
  }
}
function createTransformContext(root, {
  filename = "",
  prefixIdentifiers = false,
  hoistStatic = false,
  hmr = false,
  cacheHandlers = false,
  nodeTransforms = [],
  directiveTransforms = {},
  transformHoist = null,
  isBuiltInComponent = NOOP,
  isCustomElement = NOOP,
  expressionPlugins = [],
  scopeId = null,
  slotted = true,
  ssr = false,
  inSSR = false,
  ssrCssVars = ``,
  bindingMetadata = EMPTY_OBJ,
  inline = false,
  isTS = false,
  onError = defaultOnError,
  onWarn = defaultOnWarn,
  compatConfig
}) {
  const nameMatch = filename.replace(/\?.*$/, "").match(/([^/\\]+)\.\w+$/);
  const context = {
    // options
    filename,
    selfName: nameMatch && capitalize(camelize(nameMatch[1])),
    prefixIdentifiers,
    hoistStatic,
    hmr,
    cacheHandlers,
    nodeTransforms,
    directiveTransforms,
    transformHoist,
    isBuiltInComponent,
    isCustomElement,
    expressionPlugins,
    scopeId,
    slotted,
    ssr,
    inSSR,
    ssrCssVars,
    bindingMetadata,
    inline,
    isTS,
    onError,
    onWarn,
    compatConfig,
    // state
    root,
    helpers: /* @__PURE__ */ new Map(),
    components: /* @__PURE__ */ new Set(),
    directives: /* @__PURE__ */ new Set(),
    hoists: [],
    imports: [],
    cached: [],
    constantCache: /* @__PURE__ */ new WeakMap(),
    temps: 0,
    identifiers: /* @__PURE__ */ Object.create(null),
    scopes: {
      vFor: 0,
      vSlot: 0,
      vPre: 0,
      vOnce: 0
    },
    parent: null,
    grandParent: null,
    currentNode: root,
    childIndex: 0,
    inVOnce: false,
    // methods
    helper(name) {
      const count = context.helpers.get(name) || 0;
      context.helpers.set(name, count + 1);
      return name;
    },
    removeHelper(name) {
      const count = context.helpers.get(name);
      if (count) {
        const currentCount = count - 1;
        if (!currentCount) {
          context.helpers.delete(name);
        } else {
          context.helpers.set(name, currentCount);
        }
      }
    },
    helperString(name) {
      return `_${helperNameMap[context.helper(name)]}`;
    },
    replaceNode(node) {
      context.parent.children[context.childIndex] = context.currentNode = node;
    },
    removeNode(node) {
      const list = context.parent.children;
      const removalIndex = node ? list.indexOf(node) : context.currentNode ? context.childIndex : -1;
      if (!node || node === context.currentNode) {
        context.currentNode = null;
        context.onNodeRemoved();
      } else {
        if (context.childIndex > removalIndex) {
          context.childIndex--;
          context.onNodeRemoved();
        }
      }
      context.parent.children.splice(removalIndex, 1);
    },
    onNodeRemoved: NOOP,
    addIdentifiers(exp) {
    },
    removeIdentifiers(exp) {
    },
    hoist(exp) {
      if (isString$1(exp)) exp = createSimpleExpression(exp);
      context.hoists.push(exp);
      const identifier = createSimpleExpression(
        `_hoisted_${context.hoists.length}`,
        false,
        exp.loc,
        2
      );
      identifier.hoisted = exp;
      return identifier;
    },
    cache(exp, isVNode = false, inVOnce = false) {
      const cacheExp = createCacheExpression(
        context.cached.length,
        exp,
        isVNode,
        inVOnce
      );
      context.cached.push(cacheExp);
      return cacheExp;
    }
  };
  {
    context.filters = /* @__PURE__ */ new Set();
  }
  return context;
}
function transform(root, options) {
  const context = createTransformContext(root, options);
  traverseNode(root, context);
  if (options.hoistStatic) {
    cacheStatic(root, context);
  }
  if (!options.ssr) {
    createRootCodegen(root, context);
  }
  root.helpers = /* @__PURE__ */ new Set([...context.helpers.keys()]);
  root.components = [...context.components];
  root.directives = [...context.directives];
  root.imports = context.imports;
  root.hoists = context.hoists;
  root.temps = context.temps;
  root.cached = context.cached;
  root.transformed = true;
  {
    root.filters = [...context.filters];
  }
}
function createRootCodegen(root, context) {
  const { helper } = context;
  const { children } = root;
  if (children.length === 1) {
    const singleElementRootChild = getSingleElementRoot(root);
    if (singleElementRootChild && singleElementRootChild.codegenNode) {
      const codegenNode = singleElementRootChild.codegenNode;
      if (codegenNode.type === 13) {
        convertToBlock(codegenNode, context);
      }
      root.codegenNode = codegenNode;
    } else {
      root.codegenNode = children[0];
    }
  } else if (children.length > 1) {
    let patchFlag = 64;
    root.codegenNode = createVNodeCall(
      context,
      helper(FRAGMENT),
      void 0,
      root.children,
      patchFlag,
      void 0,
      void 0,
      true,
      void 0,
      false
    );
  } else ;
}
function traverseChildren(parent, context) {
  let i = 0;
  const nodeRemoved = () => {
    i--;
  };
  for (; i < parent.children.length; i++) {
    const child = parent.children[i];
    if (isString$1(child)) continue;
    context.grandParent = context.parent;
    context.parent = parent;
    context.childIndex = i;
    context.onNodeRemoved = nodeRemoved;
    traverseNode(child, context);
  }
}
function traverseNode(node, context) {
  context.currentNode = node;
  const { nodeTransforms } = context;
  const exitFns = [];
  for (let i2 = 0; i2 < nodeTransforms.length; i2++) {
    const onExit = nodeTransforms[i2](node, context);
    if (onExit) {
      if (isArray(onExit)) {
        exitFns.push(...onExit);
      } else {
        exitFns.push(onExit);
      }
    }
    if (!context.currentNode) {
      return;
    } else {
      node = context.currentNode;
    }
  }
  switch (node.type) {
    case 3:
      if (!context.ssr) {
        context.helper(CREATE_COMMENT);
      }
      break;
    case 5:
      if (!context.ssr) {
        context.helper(TO_DISPLAY_STRING);
      }
      break;
    // for container types, further traverse downwards
    case 9:
      for (let i2 = 0; i2 < node.branches.length; i2++) {
        traverseNode(node.branches[i2], context);
      }
      break;
    case 10:
    case 11:
    case 1:
    case 0:
      traverseChildren(node, context);
      break;
  }
  context.currentNode = node;
  let i = exitFns.length;
  while (i--) {
    exitFns[i]();
  }
}
function createStructuralDirectiveTransform(name, fn) {
  const matches = isString$1(name) ? (n) => n === name : (n) => name.test(n);
  return (node, context) => {
    if (node.type === 1) {
      const { props } = node;
      if (node.tagType === 3 && props.some(isVSlot)) {
        return;
      }
      const exitFns = [];
      for (let i = 0; i < props.length; i++) {
        const prop = props[i];
        if (prop.type === 7 && matches(prop.name)) {
          props.splice(i, 1);
          i--;
          const onExit = fn(node, prop, context);
          if (onExit) exitFns.push(onExit);
        }
      }
      return exitFns;
    }
  };
}
const PURE_ANNOTATION = `/*@__PURE__*/`;
const aliasHelper = (s) => `${helperNameMap[s]}: _${helperNameMap[s]}`;
function createCodegenContext(ast, {
  mode = "function",
  prefixIdentifiers = mode === "module",
  sourceMap = false,
  filename = `template.vue.html`,
  scopeId = null,
  optimizeImports = false,
  runtimeGlobalName = `Vue`,
  runtimeModuleName = `vue`,
  ssrRuntimeModuleName = "vue/server-renderer",
  ssr = false,
  isTS = false,
  inSSR = false
}) {
  const context = {
    mode,
    prefixIdentifiers,
    sourceMap,
    filename,
    scopeId,
    optimizeImports,
    runtimeGlobalName,
    runtimeModuleName,
    ssrRuntimeModuleName,
    ssr,
    isTS,
    inSSR,
    source: ast.source,
    code: ``,
    column: 1,
    line: 1,
    offset: 0,
    indentLevel: 0,
    pure: false,
    map: void 0,
    helper(key) {
      return `_${helperNameMap[key]}`;
    },
    push(code, newlineIndex = -2, node) {
      context.code += code;
    },
    indent() {
      newline(++context.indentLevel);
    },
    deindent(withoutNewLine = false) {
      if (withoutNewLine) {
        --context.indentLevel;
      } else {
        newline(--context.indentLevel);
      }
    },
    newline() {
      newline(context.indentLevel);
    }
  };
  function newline(n) {
    context.push(
      "\n" + `  `.repeat(n),
      0
      /* Start */
    );
  }
  return context;
}
function generate(ast, options = {}) {
  const context = createCodegenContext(ast, options);
  if (options.onContextCreated) options.onContextCreated(context);
  const {
    mode,
    push,
    prefixIdentifiers,
    indent,
    deindent,
    newline,
    scopeId,
    ssr
  } = context;
  const helpers = Array.from(ast.helpers);
  const hasHelpers = helpers.length > 0;
  const useWithBlock = !prefixIdentifiers && mode !== "module";
  const preambleContext = context;
  {
    genFunctionPreamble(ast, preambleContext);
  }
  const functionName = ssr ? `ssrRender` : `render`;
  const args = ssr ? ["_ctx", "_push", "_parent", "_attrs"] : ["_ctx", "_cache"];
  const signature = args.join(", ");
  {
    push(`function ${functionName}(${signature}) {`);
  }
  indent();
  if (useWithBlock) {
    push(`with (_ctx) {`);
    indent();
    if (hasHelpers) {
      push(
        `const { ${helpers.map(aliasHelper).join(", ")} } = _Vue
`,
        -1
        /* End */
      );
      newline();
    }
  }
  if (ast.components.length) {
    genAssets(ast.components, "component", context);
    if (ast.directives.length || ast.temps > 0) {
      newline();
    }
  }
  if (ast.directives.length) {
    genAssets(ast.directives, "directive", context);
    if (ast.temps > 0) {
      newline();
    }
  }
  if (ast.filters && ast.filters.length) {
    newline();
    genAssets(ast.filters, "filter", context);
    newline();
  }
  if (ast.temps > 0) {
    push(`let `);
    for (let i = 0; i < ast.temps; i++) {
      push(`${i > 0 ? `, ` : ``}_temp${i}`);
    }
  }
  if (ast.components.length || ast.directives.length || ast.temps) {
    push(
      `
`,
      0
      /* Start */
    );
    newline();
  }
  if (!ssr) {
    push(`return `);
  }
  if (ast.codegenNode) {
    genNode(ast.codegenNode, context);
  } else {
    push(`null`);
  }
  if (useWithBlock) {
    deindent();
    push(`}`);
  }
  deindent();
  push(`}`);
  return {
    ast,
    code: context.code,
    preamble: ``,
    map: context.map ? context.map.toJSON() : void 0
  };
}
function genFunctionPreamble(ast, context) {
  const {
    ssr,
    prefixIdentifiers,
    push,
    newline,
    runtimeModuleName,
    runtimeGlobalName,
    ssrRuntimeModuleName
  } = context;
  const VueBinding = runtimeGlobalName;
  const helpers = Array.from(ast.helpers);
  if (helpers.length > 0) {
    {
      push(
        `const _Vue = ${VueBinding}
`,
        -1
        /* End */
      );
      if (ast.hoists.length) {
        const staticHelpers = [
          CREATE_VNODE,
          CREATE_ELEMENT_VNODE,
          CREATE_COMMENT,
          CREATE_TEXT,
          CREATE_STATIC
        ].filter((helper) => helpers.includes(helper)).map(aliasHelper).join(", ");
        push(
          `const { ${staticHelpers} } = _Vue
`,
          -1
          /* End */
        );
      }
    }
  }
  genHoists(ast.hoists, context);
  newline();
  push(`return `);
}
function genAssets(assets, type, { helper, push, newline, isTS }) {
  const resolver = helper(
    type === "filter" ? RESOLVE_FILTER : type === "component" ? RESOLVE_COMPONENT : RESOLVE_DIRECTIVE
  );
  for (let i = 0; i < assets.length; i++) {
    let id2 = assets[i];
    const maybeSelfReference = id2.endsWith("__self");
    if (maybeSelfReference) {
      id2 = id2.slice(0, -6);
    }
    push(
      `const ${toValidAssetId(id2, type)} = ${resolver}(${JSON.stringify(id2)}${maybeSelfReference ? `, true` : ``})${isTS ? `!` : ``}`
    );
    if (i < assets.length - 1) {
      newline();
    }
  }
}
function genHoists(hoists, context) {
  if (!hoists.length) {
    return;
  }
  context.pure = true;
  const { push, newline } = context;
  newline();
  for (let i = 0; i < hoists.length; i++) {
    const exp = hoists[i];
    if (exp) {
      push(`const _hoisted_${i + 1} = `);
      genNode(exp, context);
      newline();
    }
  }
  context.pure = false;
}
function genNodeListAsArray(nodes, context) {
  const multilines = nodes.length > 3 || false;
  context.push(`[`);
  multilines && context.indent();
  genNodeList(nodes, context, multilines);
  multilines && context.deindent();
  context.push(`]`);
}
function genNodeList(nodes, context, multilines = false, comma = true) {
  const { push, newline } = context;
  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];
    if (isString$1(node)) {
      push(
        node,
        -3
        /* Unknown */
      );
    } else if (isArray(node)) {
      genNodeListAsArray(node, context);
    } else {
      genNode(node, context);
    }
    if (i < nodes.length - 1) {
      if (multilines) {
        comma && push(",");
        newline();
      } else {
        comma && push(", ");
      }
    }
  }
}
function genNode(node, context) {
  if (isString$1(node)) {
    context.push(
      node,
      -3
      /* Unknown */
    );
    return;
  }
  if (isSymbol(node)) {
    context.push(context.helper(node));
    return;
  }
  switch (node.type) {
    case 1:
    case 9:
    case 11:
      genNode(node.codegenNode, context);
      break;
    case 2:
      genText(node, context);
      break;
    case 4:
      genExpression(node, context);
      break;
    case 5:
      genInterpolation(node, context);
      break;
    case 12:
      genNode(node.codegenNode, context);
      break;
    case 8:
      genCompoundExpression(node, context);
      break;
    case 3:
      genComment(node, context);
      break;
    case 13:
      genVNodeCall(node, context);
      break;
    case 14:
      genCallExpression(node, context);
      break;
    case 15:
      genObjectExpression(node, context);
      break;
    case 17:
      genArrayExpression(node, context);
      break;
    case 18:
      genFunctionExpression(node, context);
      break;
    case 19:
      genConditionalExpression(node, context);
      break;
    case 20:
      genCacheExpression(node, context);
      break;
    case 21:
      genNodeList(node.body, context, true, false);
      break;
  }
}
function genText(node, context) {
  context.push(JSON.stringify(node.content), -3, node);
}
function genExpression(node, context) {
  const { content, isStatic } = node;
  context.push(
    isStatic ? JSON.stringify(content) : content,
    -3,
    node
  );
}
function genInterpolation(node, context) {
  const { push, helper, pure } = context;
  if (pure) push(PURE_ANNOTATION);
  push(`${helper(TO_DISPLAY_STRING)}(`);
  genNode(node.content, context);
  push(`)`);
}
function genCompoundExpression(node, context) {
  for (let i = 0; i < node.children.length; i++) {
    const child = node.children[i];
    if (isString$1(child)) {
      context.push(
        child,
        -3
        /* Unknown */
      );
    } else {
      genNode(child, context);
    }
  }
}
function genExpressionAsPropertyKey(node, context) {
  const { push } = context;
  if (node.type === 8) {
    push(`[`);
    genCompoundExpression(node, context);
    push(`]`);
  } else if (node.isStatic) {
    const text = isSimpleIdentifier(node.content) ? node.content : JSON.stringify(node.content);
    push(text, -2, node);
  } else {
    push(`[${node.content}]`, -3, node);
  }
}
function genComment(node, context) {
  const { push, helper, pure } = context;
  if (pure) {
    push(PURE_ANNOTATION);
  }
  push(
    `${helper(CREATE_COMMENT)}(${JSON.stringify(node.content)})`,
    -3,
    node
  );
}
function genVNodeCall(node, context) {
  const { push, helper, pure } = context;
  const {
    tag,
    props,
    children,
    patchFlag,
    dynamicProps,
    directives,
    isBlock,
    disableTracking,
    isComponent: isComponent2
  } = node;
  let patchFlagString;
  if (patchFlag) {
    {
      patchFlagString = String(patchFlag);
    }
  }
  if (directives) {
    push(helper(WITH_DIRECTIVES) + `(`);
  }
  if (isBlock) {
    push(`(${helper(OPEN_BLOCK)}(${disableTracking ? `true` : ``}), `);
  }
  if (pure) {
    push(PURE_ANNOTATION);
  }
  const callHelper = isBlock ? getVNodeBlockHelper(context.inSSR, isComponent2) : getVNodeHelper(context.inSSR, isComponent2);
  push(helper(callHelper) + `(`, -2, node);
  genNodeList(
    genNullableArgs([tag, props, children, patchFlagString, dynamicProps]),
    context
  );
  push(`)`);
  if (isBlock) {
    push(`)`);
  }
  if (directives) {
    push(`, `);
    genNode(directives, context);
    push(`)`);
  }
}
function genNullableArgs(args) {
  let i = args.length;
  while (i--) {
    if (args[i] != null) break;
  }
  return args.slice(0, i + 1).map((arg) => arg || `null`);
}
function genCallExpression(node, context) {
  const { push, helper, pure } = context;
  const callee = isString$1(node.callee) ? node.callee : helper(node.callee);
  if (pure) {
    push(PURE_ANNOTATION);
  }
  push(callee + `(`, -2, node);
  genNodeList(node.arguments, context);
  push(`)`);
}
function genObjectExpression(node, context) {
  const { push, indent, deindent, newline } = context;
  const { properties } = node;
  if (!properties.length) {
    push(`{}`, -2, node);
    return;
  }
  const multilines = properties.length > 1 || false;
  push(multilines ? `{` : `{ `);
  multilines && indent();
  for (let i = 0; i < properties.length; i++) {
    const { key, value } = properties[i];
    genExpressionAsPropertyKey(key, context);
    push(`: `);
    genNode(value, context);
    if (i < properties.length - 1) {
      push(`,`);
      newline();
    }
  }
  multilines && deindent();
  push(multilines ? `}` : ` }`);
}
function genArrayExpression(node, context) {
  genNodeListAsArray(node.elements, context);
}
function genFunctionExpression(node, context) {
  const { push, indent, deindent } = context;
  const { params, returns, body, newline, isSlot } = node;
  if (isSlot) {
    push(`_${helperNameMap[WITH_CTX]}(`);
  }
  push(`(`, -2, node);
  if (isArray(params)) {
    genNodeList(params, context);
  } else if (params) {
    genNode(params, context);
  }
  push(`) => `);
  if (newline || body) {
    push(`{`);
    indent();
  }
  if (returns) {
    if (newline) {
      push(`return `);
    }
    if (isArray(returns)) {
      genNodeListAsArray(returns, context);
    } else {
      genNode(returns, context);
    }
  } else if (body) {
    genNode(body, context);
  }
  if (newline || body) {
    deindent();
    push(`}`);
  }
  if (isSlot) {
    if (node.isNonScopedSlot) {
      push(`, undefined, true`);
    }
    push(`)`);
  }
}
function genConditionalExpression(node, context) {
  const { test, consequent, alternate, newline: needNewline } = node;
  const { push, indent, deindent, newline } = context;
  if (test.type === 4) {
    const needsParens = !isSimpleIdentifier(test.content);
    needsParens && push(`(`);
    genExpression(test, context);
    needsParens && push(`)`);
  } else {
    push(`(`);
    genNode(test, context);
    push(`)`);
  }
  needNewline && indent();
  context.indentLevel++;
  needNewline || push(` `);
  push(`? `);
  genNode(consequent, context);
  context.indentLevel--;
  needNewline && newline();
  needNewline || push(` `);
  push(`: `);
  const isNested = alternate.type === 19;
  if (!isNested) {
    context.indentLevel++;
  }
  genNode(alternate, context);
  if (!isNested) {
    context.indentLevel--;
  }
  needNewline && deindent(
    true
    /* without newline */
  );
}
function genCacheExpression(node, context) {
  const { push, helper, indent, deindent, newline } = context;
  const { needPauseTracking, needArraySpread } = node;
  if (needArraySpread) {
    push(`[...(`);
  }
  push(`_cache[${node.index}] || (`);
  if (needPauseTracking) {
    indent();
    push(`${helper(SET_BLOCK_TRACKING)}(-1`);
    if (node.inVOnce) push(`, true`);
    push(`),`);
    newline();
    push(`(`);
  }
  push(`_cache[${node.index}] = `);
  genNode(node.value, context);
  if (needPauseTracking) {
    push(`).cacheIndex = ${node.index},`);
    newline();
    push(`${helper(SET_BLOCK_TRACKING)}(1),`);
    newline();
    push(`_cache[${node.index}]`);
    deindent();
  }
  push(`)`);
  if (needArraySpread) {
    push(`)]`);
  }
}
new RegExp(
  "\\b" + "arguments,await,break,case,catch,class,const,continue,debugger,default,delete,do,else,export,extends,finally,for,function,if,import,let,new,return,super,switch,throw,try,var,void,while,with,yield".split(",").join("\\b|\\b") + "\\b"
);
const transformExpression = (node, context) => {
  if (node.type === 5) {
    node.content = processExpression(
      node.content,
      context
    );
  } else if (node.type === 1) {
    const memo = findDir(node, "memo");
    for (let i = 0; i < node.props.length; i++) {
      const dir = node.props[i];
      if (dir.type === 7 && dir.name !== "for") {
        const exp = dir.exp;
        const arg = dir.arg;
        if (exp && exp.type === 4 && !(dir.name === "on" && arg) && // key has been processed in transformFor(vMemo + vFor)
        !(memo && arg && arg.type === 4 && arg.content === "key")) {
          dir.exp = processExpression(
            exp,
            context,
            // slot args must be processed as function params
            dir.name === "slot"
          );
        }
        if (arg && arg.type === 4 && !arg.isStatic) {
          dir.arg = processExpression(arg, context);
        }
      }
    }
  }
};
function processExpression(node, context, asParams = false, asRawStatements = false, localVars = Object.create(context.identifiers)) {
  {
    return node;
  }
}
function stringifyExpression(exp) {
  if (isString$1(exp)) {
    return exp;
  } else if (exp.type === 4) {
    return exp.content;
  } else {
    return exp.children.map(stringifyExpression).join("");
  }
}
const transformIf = createStructuralDirectiveTransform(
  /^(?:if|else|else-if)$/,
  (node, dir, context) => {
    return processIf(node, dir, context, (ifNode, branch, isRoot) => {
      const siblings = context.parent.children;
      let i = siblings.indexOf(ifNode);
      let key = 0;
      while (i-- >= 0) {
        const sibling = siblings[i];
        if (sibling && sibling.type === 9) {
          key += sibling.branches.length;
        }
      }
      return () => {
        if (isRoot) {
          ifNode.codegenNode = createCodegenNodeForBranch(
            branch,
            key,
            context
          );
        } else {
          const parentCondition = getParentCondition(ifNode.codegenNode);
          parentCondition.alternate = createCodegenNodeForBranch(
            branch,
            key + ifNode.branches.length - 1,
            context
          );
        }
      };
    });
  }
);
function processIf(node, dir, context, processCodegen) {
  if (dir.name !== "else" && (!dir.exp || !dir.exp.content.trim())) {
    const loc = dir.exp ? dir.exp.loc : node.loc;
    context.onError(
      createCompilerError(28, dir.loc)
    );
    dir.exp = createSimpleExpression(`true`, false, loc);
  }
  if (dir.name === "if") {
    const branch = createIfBranch(node, dir);
    const ifNode = {
      type: 9,
      loc: cloneLoc(node.loc),
      branches: [branch]
    };
    context.replaceNode(ifNode);
    if (processCodegen) {
      return processCodegen(ifNode, branch, true);
    }
  } else {
    const siblings = context.parent.children;
    let i = siblings.indexOf(node);
    while (i-- >= -1) {
      const sibling = siblings[i];
      if (sibling && isCommentOrWhitespace(sibling)) {
        context.removeNode(sibling);
        continue;
      }
      if (sibling && sibling.type === 9) {
        if ((dir.name === "else-if" || dir.name === "else") && sibling.branches[sibling.branches.length - 1].condition === void 0) {
          context.onError(
            createCompilerError(30, node.loc)
          );
        }
        context.removeNode();
        const branch = createIfBranch(node, dir);
        sibling.branches.push(branch);
        const onExit = processCodegen && processCodegen(sibling, branch, false);
        traverseNode(branch, context);
        if (onExit) onExit();
        context.currentNode = null;
      } else {
        context.onError(
          createCompilerError(30, node.loc)
        );
      }
      break;
    }
  }
}
function createIfBranch(node, dir) {
  const isTemplateIf = node.tagType === 3;
  return {
    type: 10,
    loc: node.loc,
    condition: dir.name === "else" ? void 0 : dir.exp,
    children: isTemplateIf && !findDir(node, "for") ? node.children : [node],
    userKey: findProp(node, `key`),
    isTemplateIf
  };
}
function createCodegenNodeForBranch(branch, keyIndex, context) {
  if (branch.condition) {
    return createConditionalExpression(
      branch.condition,
      createChildrenCodegenNode(branch, keyIndex, context),
      // make sure to pass in asBlock: true so that the comment node call
      // closes the current block.
      createCallExpression(context.helper(CREATE_COMMENT), [
        '""',
        "true"
      ])
    );
  } else {
    return createChildrenCodegenNode(branch, keyIndex, context);
  }
}
function createChildrenCodegenNode(branch, keyIndex, context) {
  const { helper } = context;
  const keyProperty = createObjectProperty(
    `key`,
    createSimpleExpression(
      `${keyIndex}`,
      false,
      locStub,
      2
    )
  );
  const { children } = branch;
  const firstChild = children[0];
  const needFragmentWrapper = children.length !== 1 || firstChild.type !== 1;
  if (needFragmentWrapper) {
    if (children.length === 1 && firstChild.type === 11) {
      const vnodeCall = firstChild.codegenNode;
      injectProp(vnodeCall, keyProperty, context);
      return vnodeCall;
    } else {
      let patchFlag = 64;
      return createVNodeCall(
        context,
        helper(FRAGMENT),
        createObjectExpression([keyProperty]),
        children,
        patchFlag,
        void 0,
        void 0,
        true,
        false,
        false,
        branch.loc
      );
    }
  } else {
    const ret = firstChild.codegenNode;
    const vnodeCall = getMemoedVNodeCall(ret);
    if (vnodeCall.type === 13) {
      convertToBlock(vnodeCall, context);
    }
    injectProp(vnodeCall, keyProperty, context);
    return ret;
  }
}
function getParentCondition(node) {
  while (true) {
    if (node.type === 19) {
      if (node.alternate.type === 19) {
        node = node.alternate;
      } else {
        return node;
      }
    } else if (node.type === 20) {
      node = node.value;
    }
  }
}
const transformFor = createStructuralDirectiveTransform(
  "for",
  (node, dir, context) => {
    const { helper, removeHelper } = context;
    return processFor(node, dir, context, (forNode) => {
      const renderExp = createCallExpression(helper(RENDER_LIST), [
        forNode.source
      ]);
      const isTemplate = isTemplateNode(node);
      const memo = findDir(node, "memo");
      const keyProp = findProp(node, `key`, false, true);
      keyProp && keyProp.type === 7;
      let keyExp = keyProp && (keyProp.type === 6 ? keyProp.value ? createSimpleExpression(keyProp.value.content, true) : void 0 : keyProp.exp);
      const keyProperty = keyProp && keyExp ? createObjectProperty(`key`, keyExp) : null;
      const isStableFragment = forNode.source.type === 4 && forNode.source.constType > 0;
      const fragmentFlag = isStableFragment ? 64 : keyProp ? 128 : 256;
      forNode.codegenNode = createVNodeCall(
        context,
        helper(FRAGMENT),
        void 0,
        renderExp,
        fragmentFlag,
        void 0,
        void 0,
        true,
        !isStableFragment,
        false,
        node.loc
      );
      return () => {
        let childBlock;
        const { children } = forNode;
        const needFragmentWrapper = children.length !== 1 || children[0].type !== 1;
        const slotOutlet = isSlotOutlet(node) ? node : isTemplate && node.children.length === 1 && isSlotOutlet(node.children[0]) ? node.children[0] : null;
        if (slotOutlet) {
          childBlock = slotOutlet.codegenNode;
          if (isTemplate && keyProperty) {
            injectProp(childBlock, keyProperty, context);
          }
        } else if (needFragmentWrapper) {
          childBlock = createVNodeCall(
            context,
            helper(FRAGMENT),
            keyProperty ? createObjectExpression([keyProperty]) : void 0,
            node.children,
            64,
            void 0,
            void 0,
            true,
            void 0,
            false
          );
        } else {
          childBlock = children[0].codegenNode;
          if (isTemplate && keyProperty) {
            injectProp(childBlock, keyProperty, context);
          }
          if (childBlock.isBlock !== !isStableFragment) {
            if (childBlock.isBlock) {
              removeHelper(OPEN_BLOCK);
              removeHelper(
                getVNodeBlockHelper(context.inSSR, childBlock.isComponent)
              );
            } else {
              removeHelper(
                getVNodeHelper(context.inSSR, childBlock.isComponent)
              );
            }
          }
          childBlock.isBlock = !isStableFragment;
          if (childBlock.isBlock) {
            helper(OPEN_BLOCK);
            helper(getVNodeBlockHelper(context.inSSR, childBlock.isComponent));
          } else {
            helper(getVNodeHelper(context.inSSR, childBlock.isComponent));
          }
        }
        if (memo) {
          const loop = createFunctionExpression(
            createForLoopParams(forNode.parseResult, [
              createSimpleExpression(`_cached`)
            ])
          );
          loop.body = createBlockStatement([
            createCompoundExpression([`const _memo = (`, memo.exp, `)`]),
            createCompoundExpression([
              `if (_cached`,
              ...keyExp ? [` && _cached.key === `, keyExp] : [],
              ` && ${context.helperString(
                IS_MEMO_SAME
              )}(_cached, _memo)) return _cached`
            ]),
            createCompoundExpression([`const _item = `, childBlock]),
            createSimpleExpression(`_item.memo = _memo`),
            createSimpleExpression(`return _item`)
          ]);
          renderExp.arguments.push(
            loop,
            createSimpleExpression(`_cache`),
            createSimpleExpression(String(context.cached.length))
          );
          context.cached.push(null);
        } else {
          renderExp.arguments.push(
            createFunctionExpression(
              createForLoopParams(forNode.parseResult),
              childBlock,
              true
            )
          );
        }
      };
    });
  }
);
function processFor(node, dir, context, processCodegen) {
  if (!dir.exp) {
    context.onError(
      createCompilerError(31, dir.loc)
    );
    return;
  }
  const parseResult = dir.forParseResult;
  if (!parseResult) {
    context.onError(
      createCompilerError(32, dir.loc)
    );
    return;
  }
  finalizeForParseResult(parseResult);
  const { addIdentifiers, removeIdentifiers, scopes } = context;
  const { source, value, key, index } = parseResult;
  const forNode = {
    type: 11,
    loc: dir.loc,
    source,
    valueAlias: value,
    keyAlias: key,
    objectIndexAlias: index,
    parseResult,
    children: isTemplateNode(node) ? node.children : [node]
  };
  context.replaceNode(forNode);
  scopes.vFor++;
  const onExit = processCodegen && processCodegen(forNode);
  return () => {
    scopes.vFor--;
    if (onExit) onExit();
  };
}
function finalizeForParseResult(result, context) {
  if (result.finalized) return;
  result.finalized = true;
}
function createForLoopParams({ value, key, index }, memoArgs = []) {
  return createParamsList([value, key, index, ...memoArgs]);
}
function createParamsList(args) {
  let i = args.length;
  while (i--) {
    if (args[i]) break;
  }
  return args.slice(0, i + 1).map((arg, i2) => arg || createSimpleExpression(`_`.repeat(i2 + 1), false));
}
const defaultFallback = createSimpleExpression(`undefined`, false);
const trackSlotScopes = (node, context) => {
  if (node.type === 1 && (node.tagType === 1 || node.tagType === 3)) {
    const vSlot = findDir(node, "slot");
    if (vSlot) {
      vSlot.exp;
      context.scopes.vSlot++;
      return () => {
        context.scopes.vSlot--;
      };
    }
  }
};
const trackVForSlotScopes = (node, context) => {
  let vFor;
  if (isTemplateNode(node) && node.props.some(isVSlot) && (vFor = findDir(node, "for"))) {
    const result = vFor.forParseResult;
    if (result) {
      finalizeForParseResult(result);
      const { value, key, index } = result;
      const { addIdentifiers, removeIdentifiers } = context;
      value && addIdentifiers(value);
      key && addIdentifiers(key);
      index && addIdentifiers(index);
      return () => {
        value && removeIdentifiers(value);
        key && removeIdentifiers(key);
        index && removeIdentifiers(index);
      };
    }
  }
};
const buildClientSlotFn = (props, _vForExp, children, loc) => createFunctionExpression(
  props,
  children,
  false,
  true,
  children.length ? children[0].loc : loc
);
function buildSlots(node, context, buildSlotFn = buildClientSlotFn) {
  context.helper(WITH_CTX);
  const { children, loc } = node;
  const slotsProperties = [];
  const dynamicSlots = [];
  let hasDynamicSlots = context.scopes.vSlot > 0 || context.scopes.vFor > 0;
  const onComponentSlot = findDir(node, "slot", true);
  if (onComponentSlot) {
    const { arg, exp } = onComponentSlot;
    if (arg && !isStaticExp(arg)) {
      hasDynamicSlots = true;
    }
    slotsProperties.push(
      createObjectProperty(
        arg || createSimpleExpression("default", true),
        buildSlotFn(exp, void 0, children, loc)
      )
    );
  }
  let hasTemplateSlots = false;
  let hasNamedDefaultSlot = false;
  const implicitDefaultChildren = [];
  const seenSlotNames = /* @__PURE__ */ new Set();
  let conditionalBranchIndex = 0;
  for (let i = 0; i < children.length; i++) {
    const slotElement = children[i];
    let slotDir;
    if (!isTemplateNode(slotElement) || !(slotDir = findDir(slotElement, "slot", true))) {
      if (slotElement.type !== 3) {
        implicitDefaultChildren.push(slotElement);
      }
      continue;
    }
    if (onComponentSlot) {
      context.onError(
        createCompilerError(37, slotDir.loc)
      );
      break;
    }
    hasTemplateSlots = true;
    const { children: slotChildren, loc: slotLoc } = slotElement;
    const {
      arg: slotName = createSimpleExpression(`default`, true),
      exp: slotProps,
      loc: dirLoc
    } = slotDir;
    let staticSlotName;
    if (isStaticExp(slotName)) {
      staticSlotName = slotName ? slotName.content : `default`;
    } else {
      hasDynamicSlots = true;
    }
    const vFor = findDir(slotElement, "for");
    const slotFunction = buildSlotFn(slotProps, vFor, slotChildren, slotLoc);
    let vIf;
    let vElse;
    if (vIf = findDir(slotElement, "if")) {
      hasDynamicSlots = true;
      dynamicSlots.push(
        createConditionalExpression(
          vIf.exp,
          buildDynamicSlot(slotName, slotFunction, conditionalBranchIndex++),
          defaultFallback
        )
      );
    } else if (vElse = findDir(
      slotElement,
      /^else(?:-if)?$/,
      true
      /* allowEmpty */
    )) {
      let j = i;
      let prev;
      while (j--) {
        prev = children[j];
        if (!isCommentOrWhitespace(prev)) {
          break;
        }
      }
      if (prev && isTemplateNode(prev) && findDir(prev, /^(?:else-)?if$/)) {
        let conditional = dynamicSlots[dynamicSlots.length - 1];
        while (conditional.alternate.type === 19) {
          conditional = conditional.alternate;
        }
        conditional.alternate = vElse.exp ? createConditionalExpression(
          vElse.exp,
          buildDynamicSlot(
            slotName,
            slotFunction,
            conditionalBranchIndex++
          ),
          defaultFallback
        ) : buildDynamicSlot(slotName, slotFunction, conditionalBranchIndex++);
      } else {
        context.onError(
          createCompilerError(30, vElse.loc)
        );
      }
    } else if (vFor) {
      hasDynamicSlots = true;
      const parseResult = vFor.forParseResult;
      if (parseResult) {
        finalizeForParseResult(parseResult);
        dynamicSlots.push(
          createCallExpression(context.helper(RENDER_LIST), [
            parseResult.source,
            createFunctionExpression(
              createForLoopParams(parseResult),
              buildDynamicSlot(slotName, slotFunction),
              true
            )
          ])
        );
      } else {
        context.onError(
          createCompilerError(
            32,
            vFor.loc
          )
        );
      }
    } else {
      if (staticSlotName) {
        if (seenSlotNames.has(staticSlotName)) {
          context.onError(
            createCompilerError(
              38,
              dirLoc
            )
          );
          continue;
        }
        seenSlotNames.add(staticSlotName);
        if (staticSlotName === "default") {
          hasNamedDefaultSlot = true;
        }
      }
      slotsProperties.push(createObjectProperty(slotName, slotFunction));
    }
  }
  if (!onComponentSlot) {
    const buildDefaultSlotProperty = (props, children2) => {
      const fn = buildSlotFn(props, void 0, children2, loc);
      if (context.compatConfig) {
        fn.isNonScopedSlot = true;
      }
      return createObjectProperty(`default`, fn);
    };
    if (!hasTemplateSlots) {
      slotsProperties.push(buildDefaultSlotProperty(void 0, children));
    } else if (implicitDefaultChildren.length && // #3766
    // with whitespace: 'preserve', whitespaces between slots will end up in
    // implicitDefaultChildren. Ignore if all implicit children are whitespaces.
    !implicitDefaultChildren.every(isWhitespaceText)) {
      if (hasNamedDefaultSlot) {
        context.onError(
          createCompilerError(
            39,
            implicitDefaultChildren[0].loc
          )
        );
      } else {
        slotsProperties.push(
          buildDefaultSlotProperty(void 0, implicitDefaultChildren)
        );
      }
    }
  }
  const slotFlag = hasDynamicSlots ? 2 : hasForwardedSlots(node.children) ? 3 : 1;
  let slots = createObjectExpression(
    slotsProperties.concat(
      createObjectProperty(
        `_`,
        // 2 = compiled but dynamic = can skip normalization, but must run diff
        // 1 = compiled and static = can skip normalization AND diff as optimized
        createSimpleExpression(
          slotFlag + ``,
          false
        )
      )
    ),
    loc
  );
  if (dynamicSlots.length) {
    slots = createCallExpression(context.helper(CREATE_SLOTS), [
      slots,
      createArrayExpression(dynamicSlots)
    ]);
  }
  return {
    slots,
    hasDynamicSlots
  };
}
function buildDynamicSlot(name, fn, index) {
  const props = [
    createObjectProperty(`name`, name),
    createObjectProperty(`fn`, fn)
  ];
  if (index != null) {
    props.push(
      createObjectProperty(`key`, createSimpleExpression(String(index), true))
    );
  }
  return createObjectExpression(props);
}
function hasForwardedSlots(children) {
  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    switch (child.type) {
      case 1:
        if (child.tagType === 2 || hasForwardedSlots(child.children)) {
          return true;
        }
        break;
      case 9:
        if (hasForwardedSlots(child.branches)) return true;
        break;
      case 10:
      case 11:
        if (hasForwardedSlots(child.children)) return true;
        break;
    }
  }
  return false;
}
const directiveImportMap = /* @__PURE__ */ new WeakMap();
const transformElement = (node, context) => {
  return function postTransformElement() {
    node = context.currentNode;
    if (!(node.type === 1 && (node.tagType === 0 || node.tagType === 1))) {
      return;
    }
    const { tag, props } = node;
    const isComponent2 = node.tagType === 1;
    let vnodeTag = isComponent2 ? resolveComponentType(node, context) : `"${tag}"`;
    const isDynamicComponent = isObject(vnodeTag) && vnodeTag.callee === RESOLVE_DYNAMIC_COMPONENT;
    let vnodeProps;
    let vnodeChildren;
    let patchFlag = 0;
    let vnodeDynamicProps;
    let dynamicPropNames;
    let vnodeDirectives;
    let shouldUseBlock = (
      // dynamic component may resolve to plain elements
      isDynamicComponent || vnodeTag === TELEPORT || vnodeTag === SUSPENSE || !isComponent2 && // <svg> and <foreignObject> must be forced into blocks so that block
      // updates inside get proper isSVG flag at runtime. (#639, #643)
      // This is technically web-specific, but splitting the logic out of core
      // leads to too much unnecessary complexity.
      (tag === "svg" || tag === "foreignObject" || tag === "math")
    );
    if (props.length > 0) {
      const propsBuildResult = buildProps(
        node,
        context,
        void 0,
        isComponent2,
        isDynamicComponent
      );
      vnodeProps = propsBuildResult.props;
      patchFlag = propsBuildResult.patchFlag;
      dynamicPropNames = propsBuildResult.dynamicPropNames;
      const directives = propsBuildResult.directives;
      vnodeDirectives = directives && directives.length ? createArrayExpression(
        directives.map((dir) => buildDirectiveArgs(dir, context))
      ) : void 0;
      if (propsBuildResult.shouldUseBlock) {
        shouldUseBlock = true;
      }
    }
    if (node.children.length > 0) {
      if (vnodeTag === KEEP_ALIVE) {
        shouldUseBlock = true;
        patchFlag |= 1024;
      }
      const shouldBuildAsSlots = isComponent2 && // Teleport is not a real component and has dedicated runtime handling
      vnodeTag !== TELEPORT && // explained above.
      vnodeTag !== KEEP_ALIVE;
      if (shouldBuildAsSlots) {
        const { slots, hasDynamicSlots } = buildSlots(node, context);
        vnodeChildren = slots;
        if (hasDynamicSlots) {
          patchFlag |= 1024;
        }
      } else if (node.children.length === 1 && vnodeTag !== TELEPORT) {
        const child = node.children[0];
        const type = child.type;
        const hasDynamicTextChild = type === 5 || type === 8;
        if (hasDynamicTextChild && getConstantType(child, context) === 0) {
          patchFlag |= 1;
        }
        if (hasDynamicTextChild || type === 2) {
          vnodeChildren = child;
        } else {
          vnodeChildren = node.children;
        }
      } else {
        vnodeChildren = node.children;
      }
    }
    if (dynamicPropNames && dynamicPropNames.length) {
      vnodeDynamicProps = stringifyDynamicPropNames(dynamicPropNames);
    }
    node.codegenNode = createVNodeCall(
      context,
      vnodeTag,
      vnodeProps,
      vnodeChildren,
      patchFlag === 0 ? void 0 : patchFlag,
      vnodeDynamicProps,
      vnodeDirectives,
      !!shouldUseBlock,
      false,
      isComponent2,
      node.loc
    );
  };
};
function resolveComponentType(node, context, ssr = false) {
  let { tag } = node;
  const isExplicitDynamic = isComponentTag(tag);
  const isProp = findProp(
    node,
    "is",
    false,
    true
    /* allow empty */
  );
  if (isProp) {
    if (isExplicitDynamic || isCompatEnabled(
      "COMPILER_IS_ON_ELEMENT",
      context
    )) {
      let exp;
      if (isProp.type === 6) {
        exp = isProp.value && createSimpleExpression(isProp.value.content, true);
      } else {
        exp = isProp.exp;
        if (!exp) {
          exp = createSimpleExpression(`is`, false, isProp.arg.loc);
        }
      }
      if (exp) {
        return createCallExpression(context.helper(RESOLVE_DYNAMIC_COMPONENT), [
          exp
        ]);
      }
    } else if (isProp.type === 6 && isProp.value.content.startsWith("vue:")) {
      tag = isProp.value.content.slice(4);
    }
  }
  const builtIn = isCoreComponent(tag) || context.isBuiltInComponent(tag);
  if (builtIn) {
    if (!ssr) context.helper(builtIn);
    return builtIn;
  }
  context.helper(RESOLVE_COMPONENT);
  context.components.add(tag);
  return toValidAssetId(tag, `component`);
}
function buildProps(node, context, props = node.props, isComponent2, isDynamicComponent, ssr = false) {
  const { tag, loc: elementLoc, children } = node;
  let properties = [];
  const mergeArgs = [];
  const runtimeDirectives = [];
  const hasChildren = children.length > 0;
  let shouldUseBlock = false;
  let patchFlag = 0;
  let hasRef = false;
  let hasClassBinding = false;
  let hasStyleBinding = false;
  let hasHydrationEventBinding = false;
  let hasDynamicKeys = false;
  let hasVnodeHook = false;
  const dynamicPropNames = [];
  const pushMergeArg = (arg) => {
    if (properties.length) {
      mergeArgs.push(
        createObjectExpression(dedupeProperties(properties), elementLoc)
      );
      properties = [];
    }
    if (arg) mergeArgs.push(arg);
  };
  const pushRefVForMarker = () => {
    if (context.scopes.vFor > 0) {
      properties.push(
        createObjectProperty(
          createSimpleExpression("ref_for", true),
          createSimpleExpression("true")
        )
      );
    }
  };
  const analyzePatchFlag = ({ key, value }) => {
    if (isStaticExp(key)) {
      const name = key.content;
      const isEventHandler = isOn(name);
      if (isEventHandler && (!isComponent2 || isDynamicComponent) && // omit the flag for click handlers because hydration gives click
      // dedicated fast path.
      name.toLowerCase() !== "onclick" && // omit v-model handlers
      name !== "onUpdate:modelValue" && // omit onVnodeXXX hooks
      !isReservedProp(name)) {
        hasHydrationEventBinding = true;
      }
      if (isEventHandler && isReservedProp(name)) {
        hasVnodeHook = true;
      }
      if (isEventHandler && value.type === 14) {
        value = value.arguments[0];
      }
      if (value.type === 20 || (value.type === 4 || value.type === 8) && getConstantType(value, context) > 0) {
        return;
      }
      if (name === "ref") {
        hasRef = true;
      } else if (name === "class") {
        hasClassBinding = true;
      } else if (name === "style") {
        hasStyleBinding = true;
      } else if (name !== "key" && !dynamicPropNames.includes(name)) {
        dynamicPropNames.push(name);
      }
      if (isComponent2 && (name === "class" || name === "style") && !dynamicPropNames.includes(name)) {
        dynamicPropNames.push(name);
      }
    } else {
      hasDynamicKeys = true;
    }
  };
  for (let i = 0; i < props.length; i++) {
    const prop = props[i];
    if (prop.type === 6) {
      const { loc, name, nameLoc, value } = prop;
      let isStatic = true;
      if (name === "ref") {
        hasRef = true;
        pushRefVForMarker();
      }
      if (name === "is" && (isComponentTag(tag) || value && value.content.startsWith("vue:") || isCompatEnabled(
        "COMPILER_IS_ON_ELEMENT",
        context
      ))) {
        continue;
      }
      properties.push(
        createObjectProperty(
          createSimpleExpression(name, true, nameLoc),
          createSimpleExpression(
            value ? value.content : "",
            isStatic,
            value ? value.loc : loc
          )
        )
      );
    } else {
      const { name, arg, exp, loc, modifiers } = prop;
      const isVBind = name === "bind";
      const isVOn = name === "on";
      if (name === "slot") {
        if (!isComponent2) {
          context.onError(
            createCompilerError(40, loc)
          );
        }
        continue;
      }
      if (name === "once" || name === "memo") {
        continue;
      }
      if (name === "is" || isVBind && isStaticArgOf(arg, "is") && (isComponentTag(tag) || isCompatEnabled(
        "COMPILER_IS_ON_ELEMENT",
        context
      ))) {
        continue;
      }
      if (isVOn && ssr) {
        continue;
      }
      if (
        // #938: elements with dynamic keys should be forced into blocks
        isVBind && isStaticArgOf(arg, "key") || // inline before-update hooks need to force block so that it is invoked
        // before children
        isVOn && hasChildren && isStaticArgOf(arg, "vue:before-update")
      ) {
        shouldUseBlock = true;
      }
      if (isVBind && isStaticArgOf(arg, "ref")) {
        pushRefVForMarker();
      }
      if (!arg && (isVBind || isVOn)) {
        hasDynamicKeys = true;
        if (exp) {
          if (isVBind) {
            {
              pushMergeArg();
              if (isCompatEnabled(
                "COMPILER_V_BIND_OBJECT_ORDER",
                context
              )) {
                mergeArgs.unshift(exp);
                continue;
              }
            }
            pushRefVForMarker();
            pushMergeArg();
            mergeArgs.push(exp);
          } else {
            pushMergeArg({
              type: 14,
              loc,
              callee: context.helper(TO_HANDLERS),
              arguments: isComponent2 ? [exp] : [exp, `true`]
            });
          }
        } else {
          context.onError(
            createCompilerError(
              isVBind ? 34 : 35,
              loc
            )
          );
        }
        continue;
      }
      if (isVBind && modifiers.some((mod) => mod.content === "prop")) {
        patchFlag |= 32;
      }
      const directiveTransform = context.directiveTransforms[name];
      if (directiveTransform) {
        const { props: props2, needRuntime } = directiveTransform(prop, node, context);
        !ssr && props2.forEach(analyzePatchFlag);
        if (isVOn && arg && !isStaticExp(arg)) {
          pushMergeArg(createObjectExpression(props2, elementLoc));
        } else {
          properties.push(...props2);
        }
        if (needRuntime) {
          runtimeDirectives.push(prop);
          if (isSymbol(needRuntime)) {
            directiveImportMap.set(prop, needRuntime);
          }
        }
      } else if (!isBuiltInDirective(name)) {
        runtimeDirectives.push(prop);
        if (hasChildren) {
          shouldUseBlock = true;
        }
      }
    }
  }
  let propsExpression = void 0;
  if (mergeArgs.length) {
    pushMergeArg();
    if (mergeArgs.length > 1) {
      propsExpression = createCallExpression(
        context.helper(MERGE_PROPS),
        mergeArgs,
        elementLoc
      );
    } else {
      propsExpression = mergeArgs[0];
    }
  } else if (properties.length) {
    propsExpression = createObjectExpression(
      dedupeProperties(properties),
      elementLoc
    );
  }
  if (hasDynamicKeys) {
    patchFlag |= 16;
  } else {
    if (hasClassBinding && !isComponent2) {
      patchFlag |= 2;
    }
    if (hasStyleBinding && !isComponent2) {
      patchFlag |= 4;
    }
    if (dynamicPropNames.length) {
      patchFlag |= 8;
    }
    if (hasHydrationEventBinding) {
      patchFlag |= 32;
    }
  }
  if (!shouldUseBlock && (patchFlag === 0 || patchFlag === 32) && (hasRef || hasVnodeHook || runtimeDirectives.length > 0)) {
    patchFlag |= 512;
  }
  if (!context.inSSR && propsExpression) {
    switch (propsExpression.type) {
      case 15:
        let classKeyIndex = -1;
        let styleKeyIndex = -1;
        let hasDynamicKey = false;
        for (let i = 0; i < propsExpression.properties.length; i++) {
          const key = propsExpression.properties[i].key;
          if (isStaticExp(key)) {
            if (key.content === "class") {
              classKeyIndex = i;
            } else if (key.content === "style") {
              styleKeyIndex = i;
            }
          } else if (!key.isHandlerKey) {
            hasDynamicKey = true;
          }
        }
        const classProp = propsExpression.properties[classKeyIndex];
        const styleProp = propsExpression.properties[styleKeyIndex];
        if (!hasDynamicKey) {
          if (classProp && !isStaticExp(classProp.value)) {
            classProp.value = createCallExpression(
              context.helper(NORMALIZE_CLASS),
              [classProp.value]
            );
          }
          if (styleProp && // the static style is compiled into an object,
          // so use `hasStyleBinding` to ensure that it is a dynamic style binding
          (hasStyleBinding || styleProp.value.type === 4 && styleProp.value.content.trim()[0] === `[` || // v-bind:style and style both exist,
          // v-bind:style with static literal object
          styleProp.value.type === 17)) {
            styleProp.value = createCallExpression(
              context.helper(NORMALIZE_STYLE),
              [styleProp.value]
            );
          }
        } else {
          propsExpression = createCallExpression(
            context.helper(NORMALIZE_PROPS),
            [propsExpression]
          );
        }
        break;
      case 14:
        break;
      default:
        propsExpression = createCallExpression(
          context.helper(NORMALIZE_PROPS),
          [
            createCallExpression(context.helper(GUARD_REACTIVE_PROPS), [
              propsExpression
            ])
          ]
        );
        break;
    }
  }
  return {
    props: propsExpression,
    directives: runtimeDirectives,
    patchFlag,
    dynamicPropNames,
    shouldUseBlock
  };
}
function dedupeProperties(properties) {
  const knownProps = /* @__PURE__ */ new Map();
  const deduped = [];
  for (let i = 0; i < properties.length; i++) {
    const prop = properties[i];
    if (prop.key.type === 8 || !prop.key.isStatic) {
      deduped.push(prop);
      continue;
    }
    const name = prop.key.content;
    const existing = knownProps.get(name);
    if (existing) {
      if (name === "style" || name === "class" || isOn(name)) {
        mergeAsArray(existing, prop);
      }
    } else {
      knownProps.set(name, prop);
      deduped.push(prop);
    }
  }
  return deduped;
}
function mergeAsArray(existing, incoming) {
  if (existing.value.type === 17) {
    existing.value.elements.push(incoming.value);
  } else {
    existing.value = createArrayExpression(
      [existing.value, incoming.value],
      existing.loc
    );
  }
}
function buildDirectiveArgs(dir, context) {
  const dirArgs = [];
  const runtime = directiveImportMap.get(dir);
  if (runtime) {
    dirArgs.push(context.helperString(runtime));
  } else {
    {
      context.helper(RESOLVE_DIRECTIVE);
      context.directives.add(dir.name);
      dirArgs.push(toValidAssetId(dir.name, `directive`));
    }
  }
  const { loc } = dir;
  if (dir.exp) dirArgs.push(dir.exp);
  if (dir.arg) {
    if (!dir.exp) {
      dirArgs.push(`void 0`);
    }
    dirArgs.push(dir.arg);
  }
  if (Object.keys(dir.modifiers).length) {
    if (!dir.arg) {
      if (!dir.exp) {
        dirArgs.push(`void 0`);
      }
      dirArgs.push(`void 0`);
    }
    const trueExpression = createSimpleExpression(`true`, false, loc);
    dirArgs.push(
      createObjectExpression(
        dir.modifiers.map(
          (modifier) => createObjectProperty(modifier, trueExpression)
        ),
        loc
      )
    );
  }
  return createArrayExpression(dirArgs, dir.loc);
}
function stringifyDynamicPropNames(props) {
  let propsNamesString = `[`;
  for (let i = 0, l = props.length; i < l; i++) {
    propsNamesString += JSON.stringify(props[i]);
    if (i < l - 1) propsNamesString += ", ";
  }
  return propsNamesString + `]`;
}
function isComponentTag(tag) {
  return tag === "component" || tag === "Component";
}
const transformSlotOutlet = (node, context) => {
  if (isSlotOutlet(node)) {
    const { children, loc } = node;
    const { slotName, slotProps } = processSlotOutlet(node, context);
    const slotArgs = [
      context.prefixIdentifiers ? `_ctx.$slots` : `$slots`,
      slotName,
      "{}",
      "undefined",
      "true"
    ];
    let expectedLen = 2;
    if (slotProps) {
      slotArgs[2] = slotProps;
      expectedLen = 3;
    }
    if (children.length) {
      slotArgs[3] = createFunctionExpression([], children, false, false, loc);
      expectedLen = 4;
    }
    if (context.scopeId && !context.slotted) {
      expectedLen = 5;
    }
    slotArgs.splice(expectedLen);
    node.codegenNode = createCallExpression(
      context.helper(RENDER_SLOT),
      slotArgs,
      loc
    );
  }
};
function processSlotOutlet(node, context) {
  let slotName = `"default"`;
  let slotProps = void 0;
  const nonNameProps = [];
  for (let i = 0; i < node.props.length; i++) {
    const p = node.props[i];
    if (p.type === 6) {
      if (p.value) {
        if (p.name === "name") {
          slotName = JSON.stringify(p.value.content);
        } else {
          p.name = camelize(p.name);
          nonNameProps.push(p);
        }
      }
    } else {
      if (p.name === "bind" && isStaticArgOf(p.arg, "name")) {
        if (p.exp) {
          slotName = p.exp;
        } else if (p.arg && p.arg.type === 4) {
          const name = camelize(p.arg.content);
          slotName = p.exp = createSimpleExpression(name, false, p.arg.loc);
        }
      } else {
        if (p.name === "bind" && p.arg && isStaticExp(p.arg)) {
          p.arg.content = camelize(p.arg.content);
        }
        nonNameProps.push(p);
      }
    }
  }
  if (nonNameProps.length > 0) {
    const { props, directives } = buildProps(
      node,
      context,
      nonNameProps,
      false,
      false
    );
    slotProps = props;
    if (directives.length) {
      context.onError(
        createCompilerError(
          36,
          directives[0].loc
        )
      );
    }
  }
  return {
    slotName,
    slotProps
  };
}
const transformOn$1 = (dir, node, context, augmentor) => {
  const { loc, modifiers, arg } = dir;
  if (!dir.exp && !modifiers.length) {
    context.onError(createCompilerError(35, loc));
  }
  let eventName;
  if (arg.type === 4) {
    if (arg.isStatic) {
      let rawName = arg.content;
      if (rawName.startsWith("vue:")) {
        rawName = `vnode-${rawName.slice(4)}`;
      }
      const eventString = node.tagType !== 0 || rawName.startsWith("vnode") || !/[A-Z]/.test(rawName) ? (
        // for non-element and vnode lifecycle event listeners, auto convert
        // it to camelCase. See issue #2249
        toHandlerKey(camelize(rawName))
      ) : (
        // preserve case for plain element listeners that have uppercase
        // letters, as these may be custom elements' custom events
        `on:${rawName}`
      );
      eventName = createSimpleExpression(eventString, true, arg.loc);
    } else {
      eventName = createCompoundExpression([
        `${context.helperString(TO_HANDLER_KEY)}(`,
        arg,
        `)`
      ]);
    }
  } else {
    eventName = arg;
    eventName.children.unshift(`${context.helperString(TO_HANDLER_KEY)}(`);
    eventName.children.push(`)`);
  }
  let exp = dir.exp;
  if (exp && !exp.content.trim()) {
    exp = void 0;
  }
  let shouldCache = context.cacheHandlers && !exp && !context.inVOnce;
  if (exp) {
    const isMemberExp = isMemberExpression(exp);
    const isInlineStatement = !(isMemberExp || isFnExpression(exp));
    const hasMultipleStatements = exp.content.includes(`;`);
    if (isInlineStatement || shouldCache && isMemberExp) {
      exp = createCompoundExpression([
        `${isInlineStatement ? `$event` : `${``}(...args)`} => ${hasMultipleStatements ? `{` : `(`}`,
        exp,
        hasMultipleStatements ? `}` : `)`
      ]);
    }
  }
  let ret = {
    props: [
      createObjectProperty(
        eventName,
        exp || createSimpleExpression(`() => {}`, false, loc)
      )
    ]
  };
  if (augmentor) {
    ret = augmentor(ret);
  }
  if (shouldCache) {
    ret.props[0].value = context.cache(ret.props[0].value);
  }
  ret.props.forEach((p) => p.key.isHandlerKey = true);
  return ret;
};
const transformBind = (dir, _node, context) => {
  const { modifiers, loc } = dir;
  const arg = dir.arg;
  let { exp } = dir;
  if (exp && exp.type === 4 && !exp.content.trim()) {
    {
      exp = void 0;
    }
  }
  if (arg.type !== 4) {
    arg.children.unshift(`(`);
    arg.children.push(`) || ""`);
  } else if (!arg.isStatic) {
    arg.content = arg.content ? `${arg.content} || ""` : `""`;
  }
  if (modifiers.some((mod) => mod.content === "camel")) {
    if (arg.type === 4) {
      if (arg.isStatic) {
        arg.content = camelize(arg.content);
      } else {
        arg.content = `${context.helperString(CAMELIZE)}(${arg.content})`;
      }
    } else {
      arg.children.unshift(`${context.helperString(CAMELIZE)}(`);
      arg.children.push(`)`);
    }
  }
  if (!context.inSSR) {
    if (modifiers.some((mod) => mod.content === "prop")) {
      injectPrefix(arg, ".");
    }
    if (modifiers.some((mod) => mod.content === "attr")) {
      injectPrefix(arg, "^");
    }
  }
  return {
    props: [createObjectProperty(arg, exp)]
  };
};
const injectPrefix = (arg, prefix) => {
  if (arg.type === 4) {
    if (arg.isStatic) {
      arg.content = prefix + arg.content;
    } else {
      arg.content = `\`${prefix}\${${arg.content}}\``;
    }
  } else {
    arg.children.unshift(`'${prefix}' + (`);
    arg.children.push(`)`);
  }
};
const transformText = (node, context) => {
  if (node.type === 0 || node.type === 1 || node.type === 11 || node.type === 10) {
    return () => {
      const children = node.children;
      let currentContainer = void 0;
      let hasText = false;
      for (let i = 0; i < children.length; i++) {
        const child = children[i];
        if (isText$1(child)) {
          hasText = true;
          for (let j = i + 1; j < children.length; j++) {
            const next = children[j];
            if (isText$1(next)) {
              if (!currentContainer) {
                currentContainer = children[i] = createCompoundExpression(
                  [child],
                  child.loc
                );
              }
              currentContainer.children.push(` + `, next);
              children.splice(j, 1);
              j--;
            } else {
              currentContainer = void 0;
              break;
            }
          }
        }
      }
      if (!hasText || // if this is a plain element with a single text child, leave it
      // as-is since the runtime has dedicated fast path for this by directly
      // setting textContent of the element.
      // for component root it's always normalized anyway.
      children.length === 1 && (node.type === 0 || node.type === 1 && node.tagType === 0 && // #3756
      // custom directives can potentially add DOM elements arbitrarily,
      // we need to avoid setting textContent of the element at runtime
      // to avoid accidentally overwriting the DOM elements added
      // by the user through custom directives.
      !node.props.find(
        (p) => p.type === 7 && !context.directiveTransforms[p.name]
      ) && // in compat mode, <template> tags with no special directives
      // will be rendered as a fragment so its children must be
      // converted into vnodes.
      !(node.tag === "template"))) {
        return;
      }
      for (let i = 0; i < children.length; i++) {
        const child = children[i];
        if (isText$1(child) || child.type === 8) {
          const callArgs = [];
          if (child.type !== 2 || child.content !== " ") {
            callArgs.push(child);
          }
          if (!context.ssr && getConstantType(child, context) === 0) {
            callArgs.push(
              `1`
            );
          }
          children[i] = {
            type: 12,
            content: child,
            loc: child.loc,
            codegenNode: createCallExpression(
              context.helper(CREATE_TEXT),
              callArgs
            )
          };
        }
      }
    };
  }
};
const seen$1 = /* @__PURE__ */ new WeakSet();
const transformOnce = (node, context) => {
  if (node.type === 1 && findDir(node, "once", true)) {
    if (seen$1.has(node) || context.inVOnce || context.inSSR) {
      return;
    }
    seen$1.add(node);
    context.inVOnce = true;
    context.helper(SET_BLOCK_TRACKING);
    return () => {
      context.inVOnce = false;
      const cur = context.currentNode;
      if (cur.codegenNode) {
        cur.codegenNode = context.cache(
          cur.codegenNode,
          true,
          true
        );
      }
    };
  }
};
const transformModel$1 = (dir, node, context) => {
  const { exp, arg } = dir;
  if (!exp) {
    context.onError(
      createCompilerError(41, dir.loc)
    );
    return createTransformProps();
  }
  const rawExp = exp.loc.source.trim();
  const expString = exp.type === 4 ? exp.content : rawExp;
  const bindingType = context.bindingMetadata[rawExp];
  if (bindingType === "props" || bindingType === "props-aliased") {
    context.onError(createCompilerError(44, exp.loc));
    return createTransformProps();
  }
  if (bindingType === "literal-const" || bindingType === "setup-const") {
    context.onError(createCompilerError(45, exp.loc));
    return createTransformProps();
  }
  if (!expString.trim() || !isMemberExpression(exp) && true) {
    context.onError(
      createCompilerError(42, exp.loc)
    );
    return createTransformProps();
  }
  const propName = arg ? arg : createSimpleExpression("modelValue", true);
  const eventName = arg ? isStaticExp(arg) ? `onUpdate:${camelize(arg.content)}` : createCompoundExpression(['"onUpdate:" + ', arg]) : `onUpdate:modelValue`;
  let assignmentExp;
  const eventArg = context.isTS ? `($event: any)` : `$event`;
  {
    assignmentExp = createCompoundExpression([
      `${eventArg} => ((`,
      exp,
      `) = $event)`
    ]);
  }
  const props = [
    // modelValue: foo
    createObjectProperty(propName, dir.exp),
    // "onUpdate:modelValue": $event => (foo = $event)
    createObjectProperty(eventName, assignmentExp)
  ];
  if (dir.modifiers.length && node.tagType === 1) {
    const modifiers = dir.modifiers.map((m) => m.content).map((m) => (isSimpleIdentifier(m) ? m : JSON.stringify(m)) + `: true`).join(`, `);
    const modifiersKey = arg ? isStaticExp(arg) ? `${arg.content}Modifiers` : createCompoundExpression([arg, ' + "Modifiers"']) : `modelModifiers`;
    props.push(
      createObjectProperty(
        modifiersKey,
        createSimpleExpression(
          `{ ${modifiers} }`,
          false,
          dir.loc,
          2
        )
      )
    );
  }
  return createTransformProps(props);
};
function createTransformProps(props = []) {
  return { props };
}
const validDivisionCharRE = /[\w).+\-_$\]]/;
const transformFilter = (node, context) => {
  if (!isCompatEnabled("COMPILER_FILTERS", context)) {
    return;
  }
  if (node.type === 5) {
    rewriteFilter(node.content, context);
  } else if (node.type === 1) {
    node.props.forEach((prop) => {
      if (prop.type === 7 && prop.name !== "for" && prop.exp) {
        rewriteFilter(prop.exp, context);
      }
    });
  }
};
function rewriteFilter(node, context) {
  if (node.type === 4) {
    parseFilter(node, context);
  } else {
    for (let i = 0; i < node.children.length; i++) {
      const child = node.children[i];
      if (typeof child !== "object") continue;
      if (child.type === 4) {
        parseFilter(child, context);
      } else if (child.type === 8) {
        rewriteFilter(node, context);
      } else if (child.type === 5) {
        rewriteFilter(child.content, context);
      }
    }
  }
}
function parseFilter(node, context) {
  const exp = node.content;
  let inSingle = false;
  let inDouble = false;
  let inTemplateString = false;
  let inRegex = false;
  let curly = 0;
  let square = 0;
  let paren = 0;
  let lastFilterIndex = 0;
  let c, prev, i, expression, filters = [];
  for (i = 0; i < exp.length; i++) {
    prev = c;
    c = exp.charCodeAt(i);
    if (inSingle) {
      if (c === 39 && prev !== 92) inSingle = false;
    } else if (inDouble) {
      if (c === 34 && prev !== 92) inDouble = false;
    } else if (inTemplateString) {
      if (c === 96 && prev !== 92) inTemplateString = false;
    } else if (inRegex) {
      if (c === 47 && prev !== 92) inRegex = false;
    } else if (c === 124 && // pipe
    exp.charCodeAt(i + 1) !== 124 && exp.charCodeAt(i - 1) !== 124 && !curly && !square && !paren) {
      if (expression === void 0) {
        lastFilterIndex = i + 1;
        expression = exp.slice(0, i).trim();
      } else {
        pushFilter();
      }
    } else {
      switch (c) {
        case 34:
          inDouble = true;
          break;
        // "
        case 39:
          inSingle = true;
          break;
        // '
        case 96:
          inTemplateString = true;
          break;
        // `
        case 40:
          paren++;
          break;
        // (
        case 41:
          paren--;
          break;
        // )
        case 91:
          square++;
          break;
        // [
        case 93:
          square--;
          break;
        // ]
        case 123:
          curly++;
          break;
        // {
        case 125:
          curly--;
          break;
      }
      if (c === 47) {
        let j = i - 1;
        let p;
        for (; j >= 0; j--) {
          p = exp.charAt(j);
          if (p !== " ") break;
        }
        if (!p || !validDivisionCharRE.test(p)) {
          inRegex = true;
        }
      }
    }
  }
  if (expression === void 0) {
    expression = exp.slice(0, i).trim();
  } else if (lastFilterIndex !== 0) {
    pushFilter();
  }
  function pushFilter() {
    filters.push(exp.slice(lastFilterIndex, i).trim());
    lastFilterIndex = i + 1;
  }
  if (filters.length) {
    for (i = 0; i < filters.length; i++) {
      expression = wrapFilter(expression, filters[i], context);
    }
    node.content = expression;
    node.ast = void 0;
  }
}
function wrapFilter(exp, filter, context) {
  context.helper(RESOLVE_FILTER);
  const i = filter.indexOf("(");
  if (i < 0) {
    context.filters.add(filter);
    return `${toValidAssetId(filter, "filter")}(${exp})`;
  } else {
    const name = filter.slice(0, i);
    const args = filter.slice(i + 1);
    context.filters.add(name);
    return `${toValidAssetId(name, "filter")}(${exp}${args !== ")" ? "," + args : args}`;
  }
}
const seen = /* @__PURE__ */ new WeakSet();
const transformMemo = (node, context) => {
  if (node.type === 1) {
    const dir = findDir(node, "memo");
    if (!dir || seen.has(node) || context.inSSR) {
      return;
    }
    seen.add(node);
    return () => {
      const codegenNode = node.codegenNode || context.currentNode.codegenNode;
      if (codegenNode && codegenNode.type === 13) {
        if (node.tagType !== 1) {
          convertToBlock(codegenNode, context);
        }
        node.codegenNode = createCallExpression(context.helper(WITH_MEMO), [
          dir.exp,
          createFunctionExpression(void 0, codegenNode),
          `_cache`,
          String(context.cached.length)
        ]);
        context.cached.push(null);
      }
    };
  }
};
const transformVBindShorthand = (node, context) => {
  if (node.type === 1) {
    for (const prop of node.props) {
      if (prop.type === 7 && prop.name === "bind" && (!prop.exp || // #13930 :foo in in-DOM templates will be parsed into :foo="" by browser
      prop.exp.type === 4 && !prop.exp.content.trim()) && prop.arg) {
        const arg = prop.arg;
        if (arg.type !== 4 || !arg.isStatic) {
          context.onError(
            createCompilerError(
              53,
              arg.loc
            )
          );
          prop.exp = createSimpleExpression("", true, arg.loc);
        } else {
          const propName = camelize(arg.content);
          if (validFirstIdentCharRE.test(propName[0]) || // allow hyphen first char for https://github.com/vuejs/language-tools/pull/3424
          propName[0] === "-") {
            prop.exp = createSimpleExpression(propName, false, arg.loc);
          }
        }
      }
    }
  }
};
function getBaseTransformPreset(prefixIdentifiers) {
  return [
    [
      transformVBindShorthand,
      transformOnce,
      transformIf,
      transformMemo,
      transformFor,
      ...[transformFilter],
      ...[],
      transformSlotOutlet,
      transformElement,
      trackSlotScopes,
      transformText
    ],
    {
      on: transformOn$1,
      bind: transformBind,
      model: transformModel$1
    }
  ];
}
function baseCompile(source, options = {}) {
  const onError = options.onError || defaultOnError;
  const isModuleMode = options.mode === "module";
  {
    if (options.prefixIdentifiers === true) {
      onError(createCompilerError(48));
    } else if (isModuleMode) {
      onError(createCompilerError(49));
    }
  }
  const prefixIdentifiers = false;
  if (options.cacheHandlers) {
    onError(createCompilerError(50));
  }
  if (options.scopeId && !isModuleMode) {
    onError(createCompilerError(51));
  }
  const resolvedOptions = extend({}, options, {
    prefixIdentifiers
  });
  const ast = isString$1(source) ? baseParse(source, resolvedOptions) : source;
  const [nodeTransforms, directiveTransforms] = getBaseTransformPreset();
  transform(
    ast,
    extend({}, resolvedOptions, {
      nodeTransforms: [
        ...nodeTransforms,
        ...options.nodeTransforms || []
        // user transforms
      ],
      directiveTransforms: extend(
        {},
        directiveTransforms,
        options.directiveTransforms || {}
        // user transforms
      )
    })
  );
  return generate(ast, resolvedOptions);
}
const BindingTypes = {
  "DATA": "data",
  "PROPS": "props",
  "PROPS_ALIASED": "props-aliased",
  "SETUP_LET": "setup-let",
  "SETUP_CONST": "setup-const",
  "SETUP_REACTIVE_CONST": "setup-reactive-const",
  "SETUP_MAYBE_REF": "setup-maybe-ref",
  "SETUP_REF": "setup-ref",
  "OPTIONS": "options",
  "LITERAL_CONST": "literal-const"
};
const noopDirectiveTransform = () => ({ props: [] });
const V_MODEL_RADIO = /* @__PURE__ */ Symbol(``);
const V_MODEL_CHECKBOX = /* @__PURE__ */ Symbol(
  ``
);
const V_MODEL_TEXT = /* @__PURE__ */ Symbol(``);
const V_MODEL_SELECT = /* @__PURE__ */ Symbol(
  ``
);
const V_MODEL_DYNAMIC = /* @__PURE__ */ Symbol(
  ``
);
const V_ON_WITH_MODIFIERS = /* @__PURE__ */ Symbol(
  ``
);
const V_ON_WITH_KEYS = /* @__PURE__ */ Symbol(
  ``
);
const V_SHOW = /* @__PURE__ */ Symbol(``);
const TRANSITION = /* @__PURE__ */ Symbol(``);
const TRANSITION_GROUP = /* @__PURE__ */ Symbol(
  ``
);
registerRuntimeHelpers({
  [V_MODEL_RADIO]: `vModelRadio`,
  [V_MODEL_CHECKBOX]: `vModelCheckbox`,
  [V_MODEL_TEXT]: `vModelText`,
  [V_MODEL_SELECT]: `vModelSelect`,
  [V_MODEL_DYNAMIC]: `vModelDynamic`,
  [V_ON_WITH_MODIFIERS]: `withModifiers`,
  [V_ON_WITH_KEYS]: `withKeys`,
  [V_SHOW]: `vShow`,
  [TRANSITION]: `Transition`,
  [TRANSITION_GROUP]: `TransitionGroup`
});
let decoder;
function decodeHtmlBrowser(raw, asAttr = false) {
  if (!decoder) {
    decoder = document.createElement("div");
  }
  if (asAttr) {
    decoder.innerHTML = `<div foo="${raw.replace(/"/g, "&quot;")}">`;
    return decoder.children[0].getAttribute("foo");
  } else {
    decoder.innerHTML = raw;
    return decoder.textContent;
  }
}
const parserOptions = {
  parseMode: "html",
  isVoidTag,
  isNativeTag: (tag) => isHTMLTag(tag) || isSVGTag(tag) || isMathMLTag(tag),
  isPreTag: (tag) => tag === "pre",
  isIgnoreNewlineTag: (tag) => tag === "pre" || tag === "textarea",
  decodeEntities: decodeHtmlBrowser,
  isBuiltInComponent: (tag) => {
    if (tag === "Transition" || tag === "transition") {
      return TRANSITION;
    } else if (tag === "TransitionGroup" || tag === "transition-group") {
      return TRANSITION_GROUP;
    }
  },
  // https://html.spec.whatwg.org/multipage/parsing.html#tree-construction-dispatcher
  getNamespace(tag, parent, rootNamespace) {
    let ns = parent ? parent.ns : rootNamespace;
    if (parent && ns === 2) {
      if (parent.tag === "annotation-xml") {
        if (tag === "svg") {
          return 1;
        }
        if (parent.props.some(
          (a) => a.type === 6 && a.name === "encoding" && a.value != null && (a.value.content === "text/html" || a.value.content === "application/xhtml+xml")
        )) {
          ns = 0;
        }
      } else if (/^m(?:[ions]|text)$/.test(parent.tag) && tag !== "mglyph" && tag !== "malignmark") {
        ns = 0;
      }
    } else if (parent && ns === 1) {
      if (parent.tag === "foreignObject" || parent.tag === "desc" || parent.tag === "title") {
        ns = 0;
      }
    }
    if (ns === 0) {
      if (tag === "svg") {
        return 1;
      }
      if (tag === "math") {
        return 2;
      }
    }
    return ns;
  }
};
const transformStyle = (node) => {
  if (node.type === 1) {
    node.props.forEach((p, i) => {
      if (p.type === 6 && p.name === "style" && p.value) {
        node.props[i] = {
          type: 7,
          name: `bind`,
          arg: createSimpleExpression(`style`, true, p.loc),
          exp: parseInlineCSS(p.value.content, p.loc),
          modifiers: [],
          loc: p.loc
        };
      }
    });
  }
};
const parseInlineCSS = (cssText, loc) => {
  const normalized = parseStringStyle(cssText);
  return createSimpleExpression(
    JSON.stringify(normalized),
    false,
    loc,
    3
  );
};
function createDOMCompilerError(code, loc) {
  return createCompilerError(
    code,
    loc
  );
}
const DOMErrorCodes = {
  "X_V_HTML_NO_EXPRESSION": 54,
  "54": "X_V_HTML_NO_EXPRESSION",
  "X_V_HTML_WITH_CHILDREN": 55,
  "55": "X_V_HTML_WITH_CHILDREN",
  "X_V_TEXT_NO_EXPRESSION": 56,
  "56": "X_V_TEXT_NO_EXPRESSION",
  "X_V_TEXT_WITH_CHILDREN": 57,
  "57": "X_V_TEXT_WITH_CHILDREN",
  "X_V_MODEL_ON_INVALID_ELEMENT": 58,
  "58": "X_V_MODEL_ON_INVALID_ELEMENT",
  "X_V_MODEL_ARG_ON_ELEMENT": 59,
  "59": "X_V_MODEL_ARG_ON_ELEMENT",
  "X_V_MODEL_ON_FILE_INPUT_ELEMENT": 60,
  "60": "X_V_MODEL_ON_FILE_INPUT_ELEMENT",
  "X_V_MODEL_UNNECESSARY_VALUE": 61,
  "61": "X_V_MODEL_UNNECESSARY_VALUE",
  "X_V_SHOW_NO_EXPRESSION": 62,
  "62": "X_V_SHOW_NO_EXPRESSION",
  "X_TRANSITION_INVALID_CHILDREN": 63,
  "63": "X_TRANSITION_INVALID_CHILDREN",
  "X_IGNORED_SIDE_EFFECT_TAG": 64,
  "64": "X_IGNORED_SIDE_EFFECT_TAG",
  "__EXTEND_POINT__": 65,
  "65": "__EXTEND_POINT__"
};
const DOMErrorMessages = {
  [54]: `v-html is missing expression.`,
  [55]: `v-html will override element children.`,
  [56]: `v-text is missing expression.`,
  [57]: `v-text will override element children.`,
  [58]: `v-model can only be used on <input>, <textarea> and <select> elements.`,
  [59]: `v-model argument is not supported on plain elements.`,
  [60]: `v-model cannot be used on file inputs since they are read-only. Use a v-on:change listener instead.`,
  [61]: `Unnecessary value binding used alongside v-model. It will interfere with v-model's behavior.`,
  [62]: `v-show is missing expression.`,
  [63]: `<Transition> expects exactly one child element or component.`,
  [64]: `Tags with side effect (<script> and <style>) are ignored in client component templates.`
};
const transformVHtml = (dir, node, context) => {
  const { exp, loc } = dir;
  if (!exp) {
    context.onError(
      createDOMCompilerError(54, loc)
    );
  }
  if (node.children.length) {
    context.onError(
      createDOMCompilerError(55, loc)
    );
    node.children.length = 0;
  }
  return {
    props: [
      createObjectProperty(
        createSimpleExpression(`innerHTML`, true, loc),
        exp || createSimpleExpression("", true)
      )
    ]
  };
};
const transformVText = (dir, node, context) => {
  const { exp, loc } = dir;
  if (!exp) {
    context.onError(
      createDOMCompilerError(56, loc)
    );
  }
  if (node.children.length) {
    context.onError(
      createDOMCompilerError(57, loc)
    );
    node.children.length = 0;
  }
  return {
    props: [
      createObjectProperty(
        createSimpleExpression(`textContent`, true),
        exp ? getConstantType(exp, context) > 0 ? exp : createCallExpression(
          context.helperString(TO_DISPLAY_STRING),
          [exp],
          loc
        ) : createSimpleExpression("", true)
      )
    ]
  };
};
const transformModel = (dir, node, context) => {
  const baseResult = transformModel$1(dir, node, context);
  if (!baseResult.props.length || node.tagType === 1) {
    return baseResult;
  }
  if (dir.arg) {
    context.onError(
      createDOMCompilerError(
        59,
        dir.arg.loc
      )
    );
  }
  const { tag } = node;
  const isCustomElement = context.isCustomElement(tag);
  if (tag === "input" || tag === "textarea" || tag === "select" || isCustomElement) {
    let directiveToUse = V_MODEL_TEXT;
    let isInvalidType = false;
    if (tag === "input" || isCustomElement) {
      const type = findProp(node, `type`);
      if (type) {
        if (type.type === 7) {
          directiveToUse = V_MODEL_DYNAMIC;
        } else if (type.value) {
          switch (type.value.content) {
            case "radio":
              directiveToUse = V_MODEL_RADIO;
              break;
            case "checkbox":
              directiveToUse = V_MODEL_CHECKBOX;
              break;
            case "file":
              isInvalidType = true;
              context.onError(
                createDOMCompilerError(
                  60,
                  dir.loc
                )
              );
              break;
          }
        }
      } else if (hasDynamicKeyVBind(node)) {
        directiveToUse = V_MODEL_DYNAMIC;
      } else ;
    } else if (tag === "select") {
      directiveToUse = V_MODEL_SELECT;
    } else ;
    if (!isInvalidType) {
      baseResult.needRuntime = context.helper(directiveToUse);
    }
  } else {
    context.onError(
      createDOMCompilerError(
        58,
        dir.loc
      )
    );
  }
  baseResult.props = baseResult.props.filter(
    (p) => !(p.key.type === 4 && p.key.content === "modelValue")
  );
  return baseResult;
};
const isEventOptionModifier = /* @__PURE__ */ makeMap(`passive,once,capture`);
const isNonKeyModifier = /* @__PURE__ */ makeMap(
  // event propagation management
  `stop,prevent,self,ctrl,shift,alt,meta,exact,middle`
);
const maybeKeyModifier = /* @__PURE__ */ makeMap("left,right");
const isKeyboardEvent = /* @__PURE__ */ makeMap(`onkeyup,onkeydown,onkeypress`);
const resolveModifiers = (key, modifiers, context, loc) => {
  const keyModifiers = [];
  const nonKeyModifiers = [];
  const eventOptionModifiers = [];
  for (let i = 0; i < modifiers.length; i++) {
    const modifier = modifiers[i].content;
    if (modifier === "native" && checkCompatEnabled(
      "COMPILER_V_ON_NATIVE",
      context
    )) {
      eventOptionModifiers.push(modifier);
    } else if (isEventOptionModifier(modifier)) {
      eventOptionModifiers.push(modifier);
    } else {
      if (maybeKeyModifier(modifier)) {
        if (isStaticExp(key)) {
          if (isKeyboardEvent(key.content.toLowerCase())) {
            keyModifiers.push(modifier);
          } else {
            nonKeyModifiers.push(modifier);
          }
        } else {
          keyModifiers.push(modifier);
          nonKeyModifiers.push(modifier);
        }
      } else {
        if (isNonKeyModifier(modifier)) {
          nonKeyModifiers.push(modifier);
        } else {
          keyModifiers.push(modifier);
        }
      }
    }
  }
  return {
    keyModifiers,
    nonKeyModifiers,
    eventOptionModifiers
  };
};
const transformClick = (key, event) => {
  const isStaticClick = isStaticExp(key) && key.content.toLowerCase() === "onclick";
  return isStaticClick ? createSimpleExpression(event, true) : key.type !== 4 ? createCompoundExpression([
    `(`,
    key,
    `) === "onClick" ? "${event}" : (`,
    key,
    `)`
  ]) : key;
};
const transformOn = (dir, node, context) => {
  return transformOn$1(dir, node, context, (baseResult) => {
    const { modifiers } = dir;
    if (!modifiers.length) return baseResult;
    let { key, value: handlerExp } = baseResult.props[0];
    const { keyModifiers, nonKeyModifiers, eventOptionModifiers } = resolveModifiers(key, modifiers, context, dir.loc);
    if (nonKeyModifiers.includes("right")) {
      key = transformClick(key, `onContextmenu`);
    }
    if (nonKeyModifiers.includes("middle")) {
      key = transformClick(key, `onMouseup`);
    }
    if (nonKeyModifiers.length) {
      handlerExp = createCallExpression(context.helper(V_ON_WITH_MODIFIERS), [
        handlerExp,
        JSON.stringify(nonKeyModifiers)
      ]);
    }
    if (keyModifiers.length && // if event name is dynamic, always wrap with keys guard
    (!isStaticExp(key) || isKeyboardEvent(key.content.toLowerCase()))) {
      handlerExp = createCallExpression(context.helper(V_ON_WITH_KEYS), [
        handlerExp,
        JSON.stringify(keyModifiers)
      ]);
    }
    if (eventOptionModifiers.length) {
      const modifierPostfix = eventOptionModifiers.map(capitalize).join("");
      key = isStaticExp(key) ? createSimpleExpression(`${key.content}${modifierPostfix}`, true) : createCompoundExpression([`(`, key, `) + "${modifierPostfix}"`]);
    }
    return {
      props: [createObjectProperty(key, handlerExp)]
    };
  });
};
const transformShow = (dir, node, context) => {
  const { exp, loc } = dir;
  if (!exp) {
    context.onError(
      createDOMCompilerError(62, loc)
    );
  }
  return {
    props: [],
    needRuntime: context.helper(V_SHOW)
  };
};
const ignoreSideEffectTags = (node, context) => {
  if (node.type === 1 && node.tagType === 0 && (node.tag === "script" || node.tag === "style")) {
    context.removeNode();
  }
};
const DOMNodeTransforms = [
  transformStyle,
  ...[]
];
const DOMDirectiveTransforms = {
  cloak: noopDirectiveTransform,
  html: transformVHtml,
  text: transformVText,
  model: transformModel,
  // override compiler-core
  on: transformOn,
  // override compiler-core
  show: transformShow
};
function compile(src, options = {}) {
  return baseCompile(
    src,
    extend({}, parserOptions, options, {
      nodeTransforms: [
        // ignore <script> and <tag>
        // this is not put inside DOMNodeTransforms because that list is used
        // by compiler-ssr to generate vnode fallback branches
        ignoreSideEffectTags,
        ...DOMNodeTransforms,
        ...options.nodeTransforms || []
      ],
      directiveTransforms: extend(
        {},
        DOMDirectiveTransforms,
        options.directiveTransforms || {}
      ),
      transformHoist: null
    })
  );
}
function parse(template, options = {}) {
  return baseParse(template, extend({}, parserOptions, options));
}
const compilerDom_esmBundler = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BASE_TRANSITION,
  BindingTypes,
  CAMELIZE,
  CAPITALIZE,
  CREATE_BLOCK,
  CREATE_COMMENT,
  CREATE_ELEMENT_BLOCK,
  CREATE_ELEMENT_VNODE,
  CREATE_SLOTS,
  CREATE_STATIC,
  CREATE_TEXT,
  CREATE_VNODE,
  CompilerDeprecationTypes,
  ConstantTypes,
  DOMDirectiveTransforms,
  DOMErrorCodes,
  DOMErrorMessages,
  DOMNodeTransforms,
  ElementTypes,
  ErrorCodes,
  FRAGMENT,
  GUARD_REACTIVE_PROPS,
  IS_MEMO_SAME,
  IS_REF,
  KEEP_ALIVE,
  MERGE_PROPS,
  NORMALIZE_CLASS,
  NORMALIZE_PROPS,
  NORMALIZE_STYLE,
  Namespaces,
  NodeTypes,
  OPEN_BLOCK,
  POP_SCOPE_ID,
  PUSH_SCOPE_ID,
  RENDER_LIST,
  RENDER_SLOT,
  RESOLVE_COMPONENT,
  RESOLVE_DIRECTIVE,
  RESOLVE_DYNAMIC_COMPONENT,
  RESOLVE_FILTER,
  SET_BLOCK_TRACKING,
  SUSPENSE,
  TELEPORT,
  TO_DISPLAY_STRING,
  TO_HANDLERS,
  TO_HANDLER_KEY,
  TRANSITION,
  TRANSITION_GROUP,
  TS_NODE_TYPES,
  UNREF,
  V_MODEL_CHECKBOX,
  V_MODEL_DYNAMIC,
  V_MODEL_RADIO,
  V_MODEL_SELECT,
  V_MODEL_TEXT,
  V_ON_WITH_KEYS,
  V_ON_WITH_MODIFIERS,
  V_SHOW,
  WITH_CTX,
  WITH_DIRECTIVES,
  WITH_MEMO,
  advancePositionWithClone,
  advancePositionWithMutation,
  assert,
  baseCompile,
  baseParse,
  buildDirectiveArgs,
  buildProps,
  buildSlots,
  checkCompatEnabled,
  compile,
  convertToBlock,
  createArrayExpression,
  createAssignmentExpression,
  createBlockStatement,
  createCacheExpression,
  createCallExpression,
  createCompilerError,
  createCompoundExpression,
  createConditionalExpression,
  createDOMCompilerError,
  createForLoopParams,
  createFunctionExpression,
  createIfStatement,
  createInterpolation,
  createObjectExpression,
  createObjectProperty,
  createReturnStatement,
  createRoot,
  createSequenceExpression,
  createSimpleExpression,
  createStructuralDirectiveTransform,
  createTemplateLiteral,
  createTransformContext,
  createVNodeCall,
  errorMessages,
  extractIdentifiers,
  findDir,
  findProp,
  forAliasRE,
  generate,
  generateCodeFrame,
  getBaseTransformPreset,
  getConstantType,
  getMemoedVNodeCall,
  getVNodeBlockHelper,
  getVNodeHelper,
  hasDynamicKeyVBind,
  hasScopeRef,
  helperNameMap,
  injectProp,
  isAllWhitespace,
  isCommentOrWhitespace,
  isCoreComponent,
  isFnExpression,
  isFnExpressionBrowser,
  isFnExpressionNode,
  isFunctionType,
  isInDestructureAssignment,
  isInNewExpression,
  isMemberExpression,
  isMemberExpressionBrowser,
  isMemberExpressionNode,
  isReferencedIdentifier,
  isSimpleIdentifier,
  isSlotOutlet,
  isStaticArgOf,
  isStaticExp,
  isStaticProperty,
  isStaticPropertyKey,
  isTemplateNode,
  isText: isText$1,
  isVPre,
  isVSlot,
  isWhitespaceText,
  locStub,
  noopDirectiveTransform,
  parse,
  parserOptions,
  processExpression,
  processFor,
  processIf,
  processSlotOutlet,
  registerRuntimeHelpers,
  resolveComponentType,
  stringifyExpression,
  toValidAssetId,
  trackSlotScopes,
  trackVForSlotScopes,
  transform,
  transformBind,
  transformElement,
  transformExpression,
  transformModel: transformModel$1,
  transformOn: transformOn$1,
  transformStyle,
  transformVBindShorthand,
  traverseNode,
  unwrapTSNode,
  validFirstIdentCharRE,
  walkBlockDeclarations,
  walkFunctionParams,
  walkIdentifiers,
  warnDeprecation
}, Symbol.toStringTag, { value: "Module" }));
const require$$0 = /* @__PURE__ */ getAugmentedNamespace(compilerDom_esmBundler);
const require$$1 = /* @__PURE__ */ getAugmentedNamespace(runtimeDom_esmBundler);
const require$$2 = /* @__PURE__ */ getAugmentedNamespace(shared_esmBundler);
var hasRequiredVue_cjs_prod;
function requireVue_cjs_prod() {
  if (hasRequiredVue_cjs_prod) return vue_cjs_prod;
  hasRequiredVue_cjs_prod = 1;
  (function(exports$1) {
    Object.defineProperty(exports$1, "__esModule", { value: true });
    var compilerDom = require$$0;
    var runtimeDom = require$$1;
    var shared = require$$2;
    function _interopNamespaceDefault(e) {
      var n = /* @__PURE__ */ Object.create(null);
      if (e) {
        for (var k in e) {
          n[k] = e[k];
        }
      }
      n.default = e;
      return Object.freeze(n);
    }
    var runtimeDom__namespace = /* @__PURE__ */ _interopNamespaceDefault(runtimeDom);
    const compileCache = /* @__PURE__ */ Object.create(null);
    function compileToFunction(template, options) {
      if (!shared.isString(template)) {
        if (template.nodeType) {
          template = template.innerHTML;
        } else {
          return shared.NOOP;
        }
      }
      const key = shared.genCacheKey(template, options);
      const cached = compileCache[key];
      if (cached) {
        return cached;
      }
      if (template[0] === "#") {
        const el = document.querySelector(template);
        template = el ? el.innerHTML : ``;
      }
      const opts = shared.extend(
        {
          hoistStatic: true,
          onError: void 0,
          onWarn: shared.NOOP
        },
        options
      );
      if (!opts.isCustomElement && typeof customElements !== "undefined") {
        opts.isCustomElement = (tag) => !!customElements.get(tag);
      }
      const { code } = compilerDom.compile(template, opts);
      const render = new Function("Vue", code)(runtimeDom__namespace);
      render._rc = true;
      return compileCache[key] = render;
    }
    runtimeDom.registerRuntimeCompiler(compileToFunction);
    exports$1.compile = compileToFunction;
    Object.keys(runtimeDom).forEach(function(k) {
      if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports$1, k)) exports$1[k] = runtimeDom[k];
    });
  })(vue_cjs_prod);
  return vue_cjs_prod;
}
var hasRequiredVue;
function requireVue() {
  if (hasRequiredVue) return vue.exports;
  hasRequiredVue = 1;
  {
    vue.exports = requireVue_cjs_prod();
  }
  return vue.exports;
}
var index_umd = index_umd$1.exports;
var hasRequiredIndex_umd;
function requireIndex_umd() {
  if (hasRequiredIndex_umd) return index_umd$1.exports;
  hasRequiredIndex_umd = 1;
  (function(module, exports$1) {
    (function() {
      var a;
      try {
        if (typeof document < "u") {
          var e = document.createElement("style");
          e.nonce = (a = document.head.querySelector("meta[property=csp-nonce]")) == null ? void 0 : a.content, e.appendChild(document.createTextNode(".mapdiv[data-v-c6aa3e71]{width:100%;height:100%}.advanced-marker-wrapper{display:none}.mapdiv .advanced-marker-wrapper{display:inline-block}.custom-control-wrapper[data-v-ae91c15f]{display:none}.mapdiv .custom-control-wrapper[data-v-ae91c15f]{display:inline-block}.info-window-wrapper[data-v-5660e752]{display:none}.mapdiv .info-window-wrapper[data-v-5660e752]{display:inline-block}.custom-marker-wrapper[data-v-90fe8380]{display:none}.mapdiv .custom-marker-wrapper[data-v-90fe8380]{display:inline-block}")), document.head.appendChild(e);
        }
      } catch (n) {
        console.error("vite-plugin-css-injected-by-js", n);
      }
    })();
    (function(k, l) {
      l(exports$1, requireVue());
    })(index_umd, function(k, l) {
      var pn = Object.defineProperty;
      var mn = (k2, l2, M2) => l2 in k2 ? pn(k2, l2, { enumerable: true, configurable: true, writable: true, value: M2 }) : k2[l2] = M2;
      var ee = (k2, l2, M2) => (mn(k2, typeof l2 != "symbol" ? l2 + "" : l2, M2), M2);
      const M = /* @__PURE__ */ Symbol("map"), A = /* @__PURE__ */ Symbol("api"), te = /* @__PURE__ */ Symbol("marker"), re = /* @__PURE__ */ Symbol("markerCluster"), W = /* @__PURE__ */ Symbol("CustomMarker"), ne = /* @__PURE__ */ Symbol("mapTilesLoaded"), B = ["click", "dblclick", "drag", "dragend", "dragstart", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "rightclick"];
      function Ye(t, e) {
        t.src = e;
      }
      const Je = (t) => {
        var e, r2, n, o = "The Google Maps JavaScript API", s = "google", i = "importLibrary", c = "__ib__", a = document, d = window, p = d[s] || (d[s] = {}), u = p.maps || (p.maps = {}), m = /* @__PURE__ */ new Set(), h = new URLSearchParams(), g = () => e || (e = new Promise(async (f, y) => {
          var v;
          await (r2 = a.createElement("script")), h.set("libraries", [...m] + "");
          for (n in t) h.set(n.replace(/[A-Z]/g, (w) => "_" + w[0].toLowerCase()), t[n]);
          h.set("callback", s + ".maps." + c), Ye(r2, "https://maps.googleapis.com/maps/api/js?" + h), u[c] = f, r2.onerror = () => e = y(Error(o + " could not load.")), r2.nonce = ((v = a.querySelector("script[nonce]")) == null ? void 0 : v.nonce) || "", a.head.append(r2);
        }));
        u[i] ? console.warn(o + " only loads once. Ignoring:", t) : u[i] = (f, ...y) => m.add(f) && g().then(() => u[i](f, ...y));
      }, Qe = (t) => `The setOptions() function should only be called once. The options passed to the additional call (${JSON.stringify(t)}) will be ignored.`, et = (t) => `The google.maps.importLibrary() function is already defined, and @googlemaps/js-api-loader will use the existing function instead of overwriting it. The options passed to setOptions (${JSON.stringify(t)}) will be ignored.`, oe = () => {
      }, nt = () => {
      };
      let se = false;
      function ot(t) {
        if (se) {
          oe(Qe(t));
          return;
        }
        at(t), se = true;
      }
      async function st(t) {
        var e, r2;
        if (!((r2 = (e = window == null ? void 0 : window.google) == null ? void 0 : e.maps) != null && r2.importLibrary)) throw new Error("google.maps.importLibrary is not installed.");
        return await google.maps.importLibrary(t);
      }
      function at(t) {
        var r2, n;
        const e = !!((n = (r2 = window.google) == null ? void 0 : r2.maps) != null && n.importLibrary);
        e ? nt(et(t)) : false, e || Je(t);
      }
      function it(t) {
        return class extends t.OverlayView {
          constructor(n) {
            super();
            ee(this, "element");
            ee(this, "opts");
            const { element: o, ...s } = n;
            this.element = o, this.opts = s, this.opts.map && this.setMap(this.opts.map);
          }
          getPosition() {
            return this.opts.position ? this.opts.position instanceof t.LatLng ? this.opts.position : new t.LatLng(this.opts.position) : null;
          }
          getVisible() {
            if (!this.element) return false;
            const n = this.element;
            return n.style.display !== "none" && n.style.visibility !== "hidden" && (n.style.opacity === "" || Number(n.style.opacity) > 0.01);
          }
          onAdd() {
            if (!this.element) return;
            const n = this.getPanes();
            n && n.overlayMouseTarget.appendChild(this.element);
          }
          draw() {
            if (!this.element) return;
            const n = this.getProjection(), o = n == null ? void 0 : n.fromLatLngToDivPixel(this.getPosition());
            if (o) {
              this.element.style.position = "absolute";
              let s, i;
              switch (this.opts.anchorPoint) {
                case "TOP_CENTER":
                  s = "-50%", i = "-100%";
                  break;
                case "BOTTOM_CENTER":
                  s = "-50%", i = "0";
                  break;
                case "LEFT_CENTER":
                  s = "-100%", i = "-50%";
                  break;
                case "RIGHT_CENTER":
                  s = "0", i = "-50%";
                  break;
                case "TOP_LEFT":
                  s = "-100%", i = "-100%";
                  break;
                case "TOP_RIGHT":
                  s = "0", i = "-100%";
                  break;
                case "BOTTOM_LEFT":
                  s = "-100%", i = "0";
                  break;
                case "BOTTOM_RIGHT":
                  s = "0", i = "0";
                  break;
                default:
                  s = "-50%", i = "-50%";
              }
              const c = o.x + (this.opts.offsetX || 0) + "px", a = o.y + (this.opts.offsetY || 0) + "px";
              this.element.style.transform = `translateX(${s}) translateX(${c}) translateY(${i}) translateY(${a})`, this.opts.zIndex && (this.element.style.zIndex = this.opts.zIndex.toString());
            }
          }
          onRemove() {
            this.element && this.element.remove();
          }
          setOptions(n) {
            const { element: o, ...s } = n;
            this.element = o, this.opts = s, this.draw();
          }
        };
      }
      let ye = false;
      const ve = ["bounds_changed", "center_changed", "click", "contextmenu", "dblclick", "drag", "dragend", "dragstart", "heading_changed", "idle", "isfractionalzoomenabled_changed", "mapcapabilities_changed", "maptypeid_changed", "mousemove", "mouseout", "mouseover", "projection_changed", "renderingtype_changed", "rightclick", "tilesloaded", "tilt_changed", "zoom_changed"], lt = l.defineComponent({ props: { apiPromise: { type: Promise }, apiKey: { type: String, default: "" }, version: { type: String, default: "weekly" }, libraries: { type: Array, default: () => ["places", "marker"] }, region: { type: String, required: false }, language: { type: String, required: false }, backgroundColor: { type: String, required: false }, center: { type: Object, default: () => ({ lat: 0, lng: 0 }) }, clickableIcons: { type: Boolean, required: false, default: void 0 }, colorScheme: { type: String, required: false }, controlSize: { type: Number, required: false }, disableDefaultUi: { type: Boolean, required: false, default: void 0 }, disableDoubleClickZoom: { type: Boolean, required: false, default: void 0 }, draggable: { type: Boolean, required: false, default: void 0 }, draggableCursor: { type: String, required: false }, draggingCursor: { type: String, required: false }, fullscreenControl: { type: Boolean, required: false, default: void 0 }, fullscreenControlPosition: { type: String, required: false }, gestureHandling: { type: String, required: false }, heading: { type: Number, required: false }, isFractionalZoomEnabled: { type: Boolean, required: false, default: void 0 }, keyboardShortcuts: { type: Boolean, required: false, default: void 0 }, mapTypeControl: { type: Boolean, required: false, default: void 0 }, mapTypeControlOptions: { type: Object, required: false }, mapTypeId: { type: [Number, String], required: false }, mapId: { type: String, required: false }, maxZoom: { type: Number, required: false }, minZoom: { type: Number, required: false }, noClear: { type: Boolean, required: false, default: void 0 }, panControl: { type: Boolean, required: false, default: void 0 }, panControlPosition: { type: String, required: false }, restriction: { type: Object, required: false }, rotateControl: { type: Boolean, required: false, default: void 0 }, rotateControlPosition: { type: String, required: false }, scaleControl: { type: Boolean, required: false, default: void 0 }, scaleControlStyle: { type: Number, required: false }, scrollwheel: { type: Boolean, required: false, default: void 0 }, streetView: { type: Object, required: false }, streetViewControl: { type: Boolean, required: false, default: void 0 }, streetViewControlPosition: { type: String, required: false }, styles: { type: Array, required: false }, tilt: { type: Number, required: false }, zoom: { type: Number, required: false }, zoomControl: { type: Boolean, required: false, default: void 0 }, zoomControlPosition: { type: String, required: false }, cameraControl: { type: Boolean, required: false, default: void 0 }, cameraControlPosition: { type: String, required: false } }, emits: ve, setup(t, { emit: e }) {
        const r2 = l.ref(), n = l.ref(false), o = l.ref(), s = l.ref(), i = l.ref(false);
        l.provide(M, o), l.provide(A, s), l.provide(ne, i);
        const c = () => {
          const u = { ...t };
          Object.keys(u).forEach((f) => {
            u[f] === void 0 && delete u[f];
          });
          const h = (f) => {
            var y;
            return f ? { position: (y = s.value) == null ? void 0 : y.ControlPosition[f] } : {};
          }, g = { scaleControlOptions: t.scaleControlStyle ? { style: t.scaleControlStyle } : {}, panControlOptions: h(t.panControlPosition), zoomControlOptions: h(t.zoomControlPosition), rotateControlOptions: h(t.rotateControlPosition), streetViewControlOptions: h(t.streetViewControlPosition), fullscreenControlOptions: h(t.fullscreenControlPosition), cameraControlOptions: h(t.cameraControlPosition), disableDefaultUI: t.disableDefaultUi };
          return { ...u, ...g };
        }, a = l.watch([s, o], ([u, m]) => {
          const h = u, g = m;
          h && g && (h.event.addListenerOnce(g, "tilesloaded", () => {
            i.value = true;
          }), setTimeout(a, 0));
        }, { immediate: true }), d = () => {
          const { apiKey: u, region: m, version: h, language: g, libraries: f } = t;
          ot({ key: u, region: m, v: h, language: g, libraries: f });
        }, p = (u) => {
          const m = u ? u.maps : google.maps;
          s.value = l.markRaw(m), o.value = l.markRaw(new m.Map(r2.value, c()));
          const h = it(s.value);
          s.value[W] = h, ve.forEach((f) => {
            var y;
            (y = o.value) == null || y.addListener(f, (v) => e(f, v));
          }), n.value = true;
          const g = Object.keys(t).filter((f) => !["apiPromise", "apiKey", "version", "libraries", "region", "language", "center", "zoom"].includes(f)).map((f) => l.toRef(t, f));
          l.watch([() => t.center, () => t.zoom, ...g], ([f, y], [v, w]) => {
            var C, S, x;
            const { center: _, zoom: T, ...O } = c();
            (C = o.value) == null || C.setOptions(O), y !== void 0 && y !== w && ((S = o.value) == null || S.setZoom(y));
            const E = !v || f.lng !== v.lng || f.lat !== v.lat;
            f && E && ((x = o.value) == null || x.panTo(f));
          });
        };
        return l.onMounted(() => {
          if (t.apiPromise && t.apiPromise instanceof Promise) t.apiPromise.then(p);
          else {
            ye || (d(), ye = true);
            const u = t.libraries && t.libraries.length > 0 ? t.libraries : ["maps", "marker"];
            Promise.all(u.map((m) => st(m))).then(() => p());
          }
        }), l.onBeforeUnmount(() => {
          var u;
          i.value = false, o.value && ((u = s.value) == null || u.event.clearInstanceListeners(o.value));
        }), { mapRef: r2, ready: n, map: o, api: s, mapTilesLoaded: i };
      } }), D = (t, e) => {
        const r2 = t.__vccOpts || t;
        for (const [n, o] of e) r2[n] = o;
        return r2;
      }, ct = { ref: "mapRef", class: "mapdiv" };
      function ut(t, e, r2, n, o, s) {
        return l.openBlock(), l.createElementBlock("div", null, [l.createElementVNode("div", ct, null, 512), l.renderSlot(t.$slots, "default", l.normalizeProps(l.guardReactiveProps({ ready: t.ready, map: t.map, api: t.api, mapTilesLoaded: t.mapTilesLoaded })), void 0, true)]);
      }
      const dt = D(lt, [["render", ut], ["__scopeId", "data-v-c6aa3e71"]]);
      function ft(t) {
        return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
      }
      var pt = function t(e, r2) {
        if (e === r2) return true;
        if (e && r2 && typeof e == "object" && typeof r2 == "object") {
          if (e.constructor !== r2.constructor) return false;
          var n, o, s;
          if (Array.isArray(e)) {
            if (n = e.length, n != r2.length) return false;
            for (o = n; o-- !== 0; ) if (!t(e[o], r2[o])) return false;
            return true;
          }
          if (e.constructor === RegExp) return e.source === r2.source && e.flags === r2.flags;
          if (e.valueOf !== Object.prototype.valueOf) return e.valueOf() === r2.valueOf();
          if (e.toString !== Object.prototype.toString) return e.toString() === r2.toString();
          if (s = Object.keys(e), n = s.length, n !== Object.keys(r2).length) return false;
          for (o = n; o-- !== 0; ) if (!Object.prototype.hasOwnProperty.call(r2, s[o])) return false;
          for (o = n; o-- !== 0; ) {
            var i = s[o];
            if (!t(e[i], r2[i])) return false;
          }
          return true;
        }
        return e !== e && r2 !== r2;
      };
      const V = ft(pt), we = ["click", "drag", "dragend", "dragstart", "gmp-click"], mt = l.defineComponent({ name: "AdvancedMarker", props: { options: { type: Object, required: true }, pinOptions: { type: Object, required: false } }, emits: we, setup(t, { emit: e, expose: r2, slots: n }) {
        const o = l.ref(), s = l.computed(() => {
          var h;
          return (h = n.content) == null ? void 0 : h.call(n).some((g) => g.type !== l.Comment);
        }), i = l.toRef(t, "options"), c = l.toRef(t, "pinOptions"), a = l.ref(), d = l.inject(M, l.ref()), p = l.inject(A, l.ref()), u = l.inject(re, l.ref()), m = l.computed(() => !!(u.value && p.value && a.value instanceof google.maps.marker.AdvancedMarkerElement));
        return l.watch([d, i, c, o], async (h, [g, f, y, v]) => {
          var C, S, x;
          const w = !V(i.value, f) || !V(c.value, y), _ = o.value !== v, T = w || _ || d.value !== g;
          if (!d.value || !p.value || !T || s.value && !o.value) return;
          const { AdvancedMarkerElement: O, PinElement: E } = p.value.marker;
          if (a.value) {
            const { map: he, content: Q, ...ge } = i.value;
            Object.assign(a.value, { content: s.value ? o.value : c.value ? new E(c.value).element : Q, ...ge }), m.value && ((C = u.value) == null || C.removeMarker(a.value), (S = u.value) == null || S.addMarker(a.value));
          } else s.value ? i.value.content = o.value : c.value && (i.value.content = new E(c.value).element), a.value = l.markRaw(new O(i.value)), m.value ? (x = u.value) == null || x.addMarker(a.value) : a.value.map = d.value, we.forEach((he) => {
            var Q;
            (Q = a.value) == null || Q.addListener(he, (ge) => e(he, ge));
          });
        }, { immediate: true, flush: "post" }), l.onBeforeUnmount(() => {
          var h, g;
          a.value && ((h = p.value) == null || h.event.clearInstanceListeners(a.value), m.value ? (g = u.value) == null || g.removeMarker(a.value) : a.value.map = null);
        }), l.provide(te, a), r2({ marker: a }), { hasCustomSlotContent: s, markerRef: o };
      } }), ht = { key: 0, class: "advanced-marker-wrapper" };
      function gt(t, e, r2, n, o, s) {
        return l.openBlock(), l.createElementBlock(l.Fragment, null, [t.hasCustomSlotContent ? (l.openBlock(), l.createElementBlock("div", ht, [l.createElementVNode("div", l.mergeProps({ ref: "markerRef" }, t.$attrs), [l.renderSlot(t.$slots, "content")], 16)])) : l.createCommentVNode("v-if", true), l.renderSlot(t.$slots, "default")], 64);
      }
      const yt = D(mt, [["render", gt]]), Ee = (t) => t === "Marker", ke = (t) => t === W, $ = (t, e, r2, n) => {
        const o = l.ref(), s = l.inject(M, l.ref()), i = l.inject(A, l.ref()), c = l.inject(re, l.ref()), a = l.computed(() => !!(c.value && i.value && (o.value instanceof i.value.Marker || o.value instanceof i.value[W])));
        return l.watch([s, r2], (d, [p, u]) => {
          var h, g, f;
          const m = !V(r2.value, u) || s.value !== p;
          if (!(!s.value || !i.value || !m)) if (o.value) o.value.setOptions(r2.value), a.value && ((h = c.value) == null || h.removeMarker(o.value), (g = c.value) == null || g.addMarker(o.value));
          else {
            if (Ee(t)) o.value = l.markRaw(new i.value[t](r2.value));
            else if (ke(t)) {
              const y = r2.value;
              y.element && (o.value = l.markRaw(new i.value[t](y)));
            } else o.value = l.markRaw(new i.value[t]({ ...r2.value, map: s.value }));
            o.value && (a.value ? (f = c.value) == null || f.addMarker(o.value) : (Ee(t) || ke(t)) && o.value.setMap(s.value)), e.forEach((y) => {
              var v;
              (v = o.value) == null || v.addListener(y, (w) => n(y, w));
            });
          }
        }, { immediate: true, flush: "post" }), l.onBeforeUnmount(() => {
          var d, p;
          o.value && ((d = i.value) == null || d.event.clearInstanceListeners(o.value), a.value ? (p = c.value) == null || p.removeMarker(o.value) : o.value.setMap(null));
        }), o;
      }, _e = ["animation_changed", "click", "dblclick", "rightclick", "dragstart", "dragend", "drag", "mouseover", "mousedown", "mouseout", "mouseup", "draggable_changed", "clickable_changed", "contextmenu", "cursor_changed", "flat_changed", "zindex_changed", "icon_changed", "position_changed", "shape_changed", "title_changed", "visible_changed"], vt = l.defineComponent({ name: "Marker", props: { options: { type: Object, required: true } }, emits: _e, setup(t, { emit: e, expose: r2, slots: n }) {
        const o = l.toRef(t, "options"), s = $("Marker", _e, o, e);
        return l.provide(te, s), r2({ marker: s }), () => {
          var i;
          return (i = n.default) == null ? void 0 : i.call(n);
        };
      } }), wt = l.defineComponent({ name: "Polyline", props: { options: { type: Object, required: true } }, emits: B, setup(t, { emit: e }) {
        const r2 = l.toRef(t, "options");
        return { polyline: $("Polyline", B, r2, e) };
      }, render: () => null }), Et = l.defineComponent({ name: "Polygon", props: { options: { type: Object, required: true } }, emits: B, setup(t, { emit: e }) {
        const r2 = l.toRef(t, "options");
        return { polygon: $("Polygon", B, r2, e) };
      }, render: () => null }), Ce = B.concat(["bounds_changed"]), kt = l.defineComponent({ name: "Rectangle", props: { options: { type: Object, required: true } }, emits: Ce, setup(t, { emit: e }) {
        const r2 = l.toRef(t, "options");
        return { rectangle: $("Rectangle", Ce, r2, e) };
      }, render: () => null }), be = B.concat(["center_changed", "radius_changed"]), _t = l.defineComponent({ name: "Circle", props: { options: { type: Object, required: true } }, emits: be, setup(t, { emit: e }) {
        const r2 = l.toRef(t, "options");
        return { circle: $("Circle", be, r2, e) };
      }, render: () => null }), Ct = l.defineComponent({ props: { position: { type: String, required: true }, index: { type: Number, default: 1 } }, emits: ["content:loaded"], setup(t, { emit: e }) {
        const r2 = l.ref(null), n = l.inject(M, l.ref()), o = l.inject(A, l.ref()), s = l.inject(ne, l.ref(false)), i = l.watch([s, o, r2], ([d, p, u]) => {
          p && d && u && (c(t.position), e("content:loaded"), setTimeout(i, 0));
        }, { immediate: true }), c = (d) => {
          if (n.value && o.value && r2.value) {
            const p = o.value.ControlPosition[d];
            r2.value.index = t.index, n.value.controls[p].push(r2.value);
          }
        }, a = (d) => {
          if (n.value && o.value) {
            let p = null;
            const u = o.value.ControlPosition[d];
            n.value.controls[u].forEach((m, h) => {
              m === r2.value && (p = h);
            }), p !== null && n.value.controls[u].removeAt(p);
          }
        };
        return l.onBeforeUnmount(() => a(t.position)), l.watch(() => t.position, (d, p) => {
          a(p), c(d);
        }), l.watch(() => t.index, (d) => {
          r2.value && (r2.value.index = d);
        }), { controlRef: r2 };
      } }), bt = { ref: "controlRef", class: "custom-control-wrapper" };
      function Mt(t, e, r2, n, o, s) {
        return l.openBlock(), l.createElementBlock(l.Fragment, null, [l.createCommentVNode(`
    v-show must be used instead of v-if otherwise there
    would be no rendered content pushed to the map controls
  `), l.createElementVNode("div", bt, [l.renderSlot(t.$slots, "default", {}, void 0, true)], 512)], 2112);
      }
      const Ot = D(Ct, [["render", Mt], ["__scopeId", "data-v-ae91c15f"]]), Me = ["closeclick", "content_changed", "domready", "position_changed", "visible", "zindex_changed"], St = l.defineComponent({ inheritAttrs: false, props: { options: { type: Object, default: () => ({}) }, modelValue: { type: Boolean } }, emits: [...Me, "update:modelValue"], setup(t, { slots: e, emit: r2, expose: n }) {
        const o = l.ref(), s = l.ref(), i = l.inject(M, l.ref()), c = l.inject(A, l.ref()), a = l.inject(te, l.ref());
        let d, p = t.modelValue;
        const u = l.computed(() => {
          var f;
          return (f = e.default) == null ? void 0 : f.call(e).some((y) => y.type !== l.Comment);
        }), m = (f) => {
          p = f, r2("update:modelValue", f);
        }, h = (f) => {
          o.value && (o.value.open({ map: i.value, anchor: a.value, ...f }), m(true));
        }, g = () => {
          o.value && (o.value.close(), m(false));
        };
        return l.onMounted(() => {
          l.watch([i, () => t.options], ([f, y], [v, w]) => {
            var T;
            const _ = !V(y, w) || i.value !== v;
            i.value && c.value && _ && (o.value ? (o.value.setOptions({ ...y, content: u.value ? s.value : y.content }), a.value || h()) : (o.value = l.markRaw(new c.value.InfoWindow({ ...y, content: u.value ? s.value : y.content })), a.value && (d = a.value.addListener("click", () => h())), (!a.value || p) && h(), Me.forEach((O) => {
              var E;
              (E = o.value) == null || E.addListener(O, (C) => r2(O, C));
            }), (T = o.value) == null || T.addListener("closeclick", () => m(false))));
          }, { immediate: true, flush: "post" }), l.watch(a, (f, y) => {
            !o.value || f === y || (d && (d.remove(), d = void 0), f && (d = f.addListener("click", () => h())));
          }, { flush: "post" }), l.watch(() => t.modelValue, (f) => {
            f !== p && (f ? h() : g());
          });
        }), l.onBeforeUnmount(() => {
          var f;
          d && d.remove(), o.value && ((f = c.value) == null || f.event.clearInstanceListeners(o.value), g());
        }), n({ infoWindow: o, open: h, close: g }), { infoWindow: o, infoWindowRef: s, hasSlotContent: u, open: h, close: g };
      } }), Tt = { key: 0, class: "info-window-wrapper" };
      function Pt(t, e, r2, n, o, s) {
        return t.hasSlotContent ? (l.openBlock(), l.createElementBlock("div", Tt, [l.createElementVNode("div", l.mergeProps({ ref: "infoWindowRef" }, t.$attrs), [l.renderSlot(t.$slots, "default", {}, void 0, true)], 16)])) : l.createCommentVNode("v-if", true);
      }
      const At = D(St, [["render", Pt], ["__scopeId", "data-v-5660e752"]]);
      var qt = Object.getOwnPropertyNames, Lt = Object.getOwnPropertySymbols, jt = Object.prototype.hasOwnProperty;
      function Oe(t, e) {
        return function(n, o, s) {
          return t(n, o, s) && e(n, o, s);
        };
      }
      function H(t) {
        return function(r2, n, o) {
          if (!r2 || !n || typeof r2 != "object" || typeof n != "object") return t(r2, n, o);
          var s = o.cache, i = s.get(r2), c = s.get(n);
          if (i && c) return i === n && c === r2;
          s.set(r2, n), s.set(n, r2);
          var a = t(r2, n, o);
          return s.delete(r2), s.delete(n), a;
        };
      }
      function Se(t) {
        return qt(t).concat(Lt(t));
      }
      var Rt = Object.hasOwn || function(t, e) {
        return jt.call(t, e);
      };
      function I(t, e) {
        return t === e || !t && !e && t !== t && e !== e;
      }
      var xt = "__v", It = "__o", Nt = "_owner", Te = Object.getOwnPropertyDescriptor, Pe = Object.keys;
      function Bt(t, e, r2) {
        var n = t.length;
        if (e.length !== n) return false;
        for (; n-- > 0; ) if (!r2.equals(t[n], e[n], n, n, t, e, r2)) return false;
        return true;
      }
      function $t(t, e) {
        return I(t.getTime(), e.getTime());
      }
      function Dt(t, e) {
        return t.name === e.name && t.message === e.message && t.cause === e.cause && t.stack === e.stack;
      }
      function Vt(t, e) {
        return t === e;
      }
      function Ae(t, e, r2) {
        var n = t.size;
        if (n !== e.size) return false;
        if (!n) return true;
        for (var o = new Array(n), s = t.entries(), i, c, a = 0; (i = s.next()) && !i.done; ) {
          for (var d = e.entries(), p = false, u = 0; (c = d.next()) && !c.done; ) {
            if (o[u]) {
              u++;
              continue;
            }
            var m = i.value, h = c.value;
            if (r2.equals(m[0], h[0], a, u, t, e, r2) && r2.equals(m[1], h[1], m[0], h[0], t, e, r2)) {
              p = o[u] = true;
              break;
            }
            u++;
          }
          if (!p) return false;
          a++;
        }
        return true;
      }
      var Ut = I;
      function Zt(t, e, r2) {
        var n = Pe(t), o = n.length;
        if (Pe(e).length !== o) return false;
        for (; o-- > 0; ) if (!Le(t, e, r2, n[o])) return false;
        return true;
      }
      function U(t, e, r2) {
        var n = Se(t), o = n.length;
        if (Se(e).length !== o) return false;
        for (var s, i, c; o-- > 0; ) if (s = n[o], !Le(t, e, r2, s) || (i = Te(t, s), c = Te(e, s), (i || c) && (!i || !c || i.configurable !== c.configurable || i.enumerable !== c.enumerable || i.writable !== c.writable))) return false;
        return true;
      }
      function Gt(t, e) {
        return I(t.valueOf(), e.valueOf());
      }
      function Ft(t, e) {
        return t.source === e.source && t.flags === e.flags;
      }
      function qe(t, e, r2) {
        var n = t.size;
        if (n !== e.size) return false;
        if (!n) return true;
        for (var o = new Array(n), s = t.values(), i, c; (i = s.next()) && !i.done; ) {
          for (var a = e.values(), d = false, p = 0; (c = a.next()) && !c.done; ) {
            if (!o[p] && r2.equals(i.value, c.value, i.value, c.value, t, e, r2)) {
              d = o[p] = true;
              break;
            }
            p++;
          }
          if (!d) return false;
        }
        return true;
      }
      function zt(t, e) {
        var r2 = t.length;
        if (e.length !== r2) return false;
        for (; r2-- > 0; ) if (t[r2] !== e[r2]) return false;
        return true;
      }
      function Wt(t, e) {
        return t.hostname === e.hostname && t.pathname === e.pathname && t.protocol === e.protocol && t.port === e.port && t.hash === e.hash && t.username === e.username && t.password === e.password;
      }
      function Le(t, e, r2, n) {
        return (n === Nt || n === It || n === xt) && (t.$$typeof || e.$$typeof) ? true : Rt(e, n) && r2.equals(t[n], e[n], n, n, t, e, r2);
      }
      var Ht = "[object Arguments]", Kt = "[object Boolean]", Xt = "[object Date]", Yt = "[object Error]", Jt = "[object Map]", Qt = "[object Number]", er = "[object Object]", tr = "[object RegExp]", rr = "[object Set]", nr = "[object String]", or = "[object URL]", sr = Array.isArray, je = typeof ArrayBuffer == "function" && ArrayBuffer.isView ? ArrayBuffer.isView : null, Re = Object.assign, ar = Object.prototype.toString.call.bind(Object.prototype.toString);
      function ir(t) {
        var e = t.areArraysEqual, r2 = t.areDatesEqual, n = t.areErrorsEqual, o = t.areFunctionsEqual, s = t.areMapsEqual, i = t.areNumbersEqual, c = t.areObjectsEqual, a = t.arePrimitiveWrappersEqual, d = t.areRegExpsEqual, p = t.areSetsEqual, u = t.areTypedArraysEqual, m = t.areUrlsEqual;
        return function(g, f, y) {
          if (g === f) return true;
          if (g == null || f == null) return false;
          var v = typeof g;
          if (v !== typeof f) return false;
          if (v !== "object") return v === "number" ? i(g, f, y) : v === "function" ? o(g, f, y) : false;
          var w = g.constructor;
          if (w !== f.constructor) return false;
          if (w === Object) return c(g, f, y);
          if (sr(g)) return e(g, f, y);
          if (je != null && je(g)) return u(g, f, y);
          if (w === Date) return r2(g, f, y);
          if (w === RegExp) return d(g, f, y);
          if (w === Map) return s(g, f, y);
          if (w === Set) return p(g, f, y);
          var _ = ar(g);
          return _ === Xt ? r2(g, f, y) : _ === tr ? d(g, f, y) : _ === Jt ? s(g, f, y) : _ === rr ? p(g, f, y) : _ === er ? typeof g.then != "function" && typeof f.then != "function" && c(g, f, y) : _ === or ? m(g, f, y) : _ === Yt ? n(g, f, y) : _ === Ht ? c(g, f, y) : _ === Kt || _ === Qt || _ === nr ? a(g, f, y) : false;
        };
      }
      function lr(t) {
        var e = t.circular, r2 = t.createCustomConfig, n = t.strict, o = { areArraysEqual: n ? U : Bt, areDatesEqual: $t, areErrorsEqual: Dt, areFunctionsEqual: Vt, areMapsEqual: n ? Oe(Ae, U) : Ae, areNumbersEqual: Ut, areObjectsEqual: n ? U : Zt, arePrimitiveWrappersEqual: Gt, areRegExpsEqual: Ft, areSetsEqual: n ? Oe(qe, U) : qe, areTypedArraysEqual: n ? U : zt, areUrlsEqual: Wt };
        if (r2 && (o = Re({}, o, r2(o))), e) {
          var s = H(o.areArraysEqual), i = H(o.areMapsEqual), c = H(o.areObjectsEqual), a = H(o.areSetsEqual);
          o = Re({}, o, { areArraysEqual: s, areMapsEqual: i, areObjectsEqual: c, areSetsEqual: a });
        }
        return o;
      }
      function cr(t) {
        return function(e, r2, n, o, s, i, c) {
          return t(e, r2, c);
        };
      }
      function ur(t) {
        var e = t.circular, r2 = t.comparator, n = t.createState, o = t.equals, s = t.strict;
        if (n) return function(a, d) {
          var p = n(), u = p.cache, m = u === void 0 ? e ? /* @__PURE__ */ new WeakMap() : void 0 : u, h = p.meta;
          return r2(a, d, { cache: m, equals: o, meta: h, strict: s });
        };
        if (e) return function(a, d) {
          return r2(a, d, { cache: /* @__PURE__ */ new WeakMap(), equals: o, meta: void 0, strict: s });
        };
        var i = { cache: void 0, equals: o, meta: void 0, strict: s };
        return function(a, d) {
          return r2(a, d, i);
        };
      }
      var K = q();
      q({ strict: true }), q({ circular: true }), q({ circular: true, strict: true }), q({ createInternalComparator: function() {
        return I;
      } }), q({ strict: true, createInternalComparator: function() {
        return I;
      } }), q({ circular: true, createInternalComparator: function() {
        return I;
      } }), q({ circular: true, createInternalComparator: function() {
        return I;
      }, strict: true });
      function q(t) {
        t === void 0 && (t = {});
        var e = t.circular, r2 = e === void 0 ? false : e, n = t.createInternalComparator, o = t.createState, s = t.strict, i = s === void 0 ? false : s, c = lr(t), a = ir(c), d = n ? n(a) : cr(a);
        return ur({ circular: r2, comparator: a, createState: o, equals: d, strict: i });
      }
      const xe = [Int8Array, Uint8Array, Uint8ClampedArray, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array], ae = 1, Z = 8;
      class ie {
        static from(e) {
          if (!(e instanceof ArrayBuffer)) throw new Error("Data must be an instance of ArrayBuffer.");
          const [r2, n] = new Uint8Array(e, 0, 2);
          if (r2 !== 219) throw new Error("Data does not appear to be in a KDBush format.");
          const o = n >> 4;
          if (o !== ae) throw new Error(`Got v${o} data when expected v${ae}.`);
          const s = xe[n & 15];
          if (!s) throw new Error("Unrecognized array type.");
          const [i] = new Uint16Array(e, 2, 1), [c] = new Uint32Array(e, 4, 1);
          return new ie(c, i, s, e);
        }
        constructor(e, r2 = 64, n = Float64Array, o) {
          if (isNaN(e) || e < 0) throw new Error(`Unpexpected numItems value: ${e}.`);
          this.numItems = +e, this.nodeSize = Math.min(Math.max(+r2, 2), 65535), this.ArrayType = n, this.IndexArrayType = e < 65536 ? Uint16Array : Uint32Array;
          const s = xe.indexOf(this.ArrayType), i = e * 2 * this.ArrayType.BYTES_PER_ELEMENT, c = e * this.IndexArrayType.BYTES_PER_ELEMENT, a = (8 - c % 8) % 8;
          if (s < 0) throw new Error(`Unexpected typed array class: ${n}.`);
          o && o instanceof ArrayBuffer ? (this.data = o, this.ids = new this.IndexArrayType(this.data, Z, e), this.coords = new this.ArrayType(this.data, Z + c + a, e * 2), this._pos = e * 2, this._finished = true) : (this.data = new ArrayBuffer(Z + i + c + a), this.ids = new this.IndexArrayType(this.data, Z, e), this.coords = new this.ArrayType(this.data, Z + c + a, e * 2), this._pos = 0, this._finished = false, new Uint8Array(this.data, 0, 2).set([219, (ae << 4) + s]), new Uint16Array(this.data, 2, 1)[0] = r2, new Uint32Array(this.data, 4, 1)[0] = e);
        }
        add(e, r2) {
          const n = this._pos >> 1;
          return this.ids[n] = n, this.coords[this._pos++] = e, this.coords[this._pos++] = r2, n;
        }
        finish() {
          const e = this._pos >> 1;
          if (e !== this.numItems) throw new Error(`Added ${e} items when expected ${this.numItems}.`);
          return le(this.ids, this.coords, this.nodeSize, 0, this.numItems - 1, 0), this._finished = true, this;
        }
        range(e, r2, n, o) {
          if (!this._finished) throw new Error("Data not yet indexed - call index.finish().");
          const { ids: s, coords: i, nodeSize: c } = this, a = [0, s.length - 1, 0], d = [];
          for (; a.length; ) {
            const p = a.pop() || 0, u = a.pop() || 0, m = a.pop() || 0;
            if (u - m <= c) {
              for (let y = m; y <= u; y++) {
                const v = i[2 * y], w = i[2 * y + 1];
                v >= e && v <= n && w >= r2 && w <= o && d.push(s[y]);
              }
              continue;
            }
            const h = m + u >> 1, g = i[2 * h], f = i[2 * h + 1];
            g >= e && g <= n && f >= r2 && f <= o && d.push(s[h]), (p === 0 ? e <= g : r2 <= f) && (a.push(m), a.push(h - 1), a.push(1 - p)), (p === 0 ? n >= g : o >= f) && (a.push(h + 1), a.push(u), a.push(1 - p));
          }
          return d;
        }
        within(e, r2, n) {
          if (!this._finished) throw new Error("Data not yet indexed - call index.finish().");
          const { ids: o, coords: s, nodeSize: i } = this, c = [0, o.length - 1, 0], a = [], d = n * n;
          for (; c.length; ) {
            const p = c.pop() || 0, u = c.pop() || 0, m = c.pop() || 0;
            if (u - m <= i) {
              for (let y = m; y <= u; y++) Ne(s[2 * y], s[2 * y + 1], e, r2) <= d && a.push(o[y]);
              continue;
            }
            const h = m + u >> 1, g = s[2 * h], f = s[2 * h + 1];
            Ne(g, f, e, r2) <= d && a.push(o[h]), (p === 0 ? e - n <= g : r2 - n <= f) && (c.push(m), c.push(h - 1), c.push(1 - p)), (p === 0 ? e + n >= g : r2 + n >= f) && (c.push(h + 1), c.push(u), c.push(1 - p));
          }
          return a;
        }
      }
      function le(t, e, r2, n, o, s) {
        if (o - n <= r2) return;
        const i = n + o >> 1;
        Ie(t, e, i, n, o, s), le(t, e, r2, n, i - 1, 1 - s), le(t, e, r2, i + 1, o, 1 - s);
      }
      function Ie(t, e, r2, n, o, s) {
        for (; o > n; ) {
          if (o - n > 600) {
            const d = o - n + 1, p = r2 - n + 1, u = Math.log(d), m = 0.5 * Math.exp(2 * u / 3), h = 0.5 * Math.sqrt(u * m * (d - m) / d) * (p - d / 2 < 0 ? -1 : 1), g = Math.max(n, Math.floor(r2 - p * m / d + h)), f = Math.min(o, Math.floor(r2 + (d - p) * m / d + h));
            Ie(t, e, r2, g, f, s);
          }
          const i = e[2 * r2 + s];
          let c = n, a = o;
          for (G(t, e, n, r2), e[2 * o + s] > i && G(t, e, n, o); c < a; ) {
            for (G(t, e, c, a), c++, a--; e[2 * c + s] < i; ) c++;
            for (; e[2 * a + s] > i; ) a--;
          }
          e[2 * n + s] === i ? G(t, e, n, a) : (a++, G(t, e, a, o)), a <= r2 && (n = a + 1), r2 <= a && (o = a - 1);
        }
      }
      function G(t, e, r2, n) {
        ce(t, r2, n), ce(e, 2 * r2, 2 * n), ce(e, 2 * r2 + 1, 2 * n + 1);
      }
      function ce(t, e, r2) {
        const n = t[e];
        t[e] = t[r2], t[r2] = n;
      }
      function Ne(t, e, r2, n) {
        const o = t - r2, s = e - n;
        return o * o + s * s;
      }
      const dr = { minZoom: 0, maxZoom: 16, minPoints: 2, radius: 40, extent: 512, nodeSize: 64, log: false, generateId: false, reduce: null, map: (t) => t }, Be = Math.fround || /* @__PURE__ */ ((t) => (e) => (t[0] = +e, t[0]))(new Float32Array(1)), N = 2, L = 3, ue = 4, j = 5, $e = 6;
      class De {
        constructor(e) {
          this.options = Object.assign(Object.create(dr), e), this.trees = new Array(this.options.maxZoom + 1), this.stride = this.options.reduce ? 7 : 6, this.clusterProps = [];
        }
        load(e) {
          const { log: r2, minZoom: n, maxZoom: o } = this.options;
          r2 && console.time("total time");
          const s = `prepare ${e.length} points`;
          r2 && console.time(s), this.points = e;
          const i = [];
          for (let a = 0; a < e.length; a++) {
            const d = e[a];
            if (!d.geometry) continue;
            const [p, u] = d.geometry.coordinates, m = Be(X(p)), h = Be(Y(u));
            i.push(m, h, 1 / 0, a, -1, 1), this.options.reduce && i.push(0);
          }
          let c = this.trees[o + 1] = this._createTree(i);
          r2 && console.timeEnd(s);
          for (let a = o; a >= n; a--) {
            const d = +Date.now();
            c = this.trees[a] = this._createTree(this._cluster(c, a)), r2 && console.log("z%d: %d clusters in %dms", a, c.numItems, +Date.now() - d);
          }
          return r2 && console.timeEnd("total time"), this;
        }
        getClusters(e, r2) {
          let n = ((e[0] + 180) % 360 + 360) % 360 - 180;
          const o = Math.max(-90, Math.min(90, e[1]));
          let s = e[2] === 180 ? 180 : ((e[2] + 180) % 360 + 360) % 360 - 180;
          const i = Math.max(-90, Math.min(90, e[3]));
          if (e[2] - e[0] >= 360) n = -180, s = 180;
          else if (n > s) {
            const u = this.getClusters([n, o, 180, i], r2), m = this.getClusters([-180, o, s, i], r2);
            return u.concat(m);
          }
          const c = this.trees[this._limitZoom(r2)], a = c.range(X(n), Y(i), X(s), Y(o)), d = c.data, p = [];
          for (const u of a) {
            const m = this.stride * u;
            p.push(d[m + j] > 1 ? Ve(d, m, this.clusterProps) : this.points[d[m + L]]);
          }
          return p;
        }
        getChildren(e) {
          const r2 = this._getOriginId(e), n = this._getOriginZoom(e), o = "No cluster with the specified id.", s = this.trees[n];
          if (!s) throw new Error(o);
          const i = s.data;
          if (r2 * this.stride >= i.length) throw new Error(o);
          const c = this.options.radius / (this.options.extent * Math.pow(2, n - 1)), a = i[r2 * this.stride], d = i[r2 * this.stride + 1], p = s.within(a, d, c), u = [];
          for (const m of p) {
            const h = m * this.stride;
            i[h + ue] === e && u.push(i[h + j] > 1 ? Ve(i, h, this.clusterProps) : this.points[i[h + L]]);
          }
          if (u.length === 0) throw new Error(o);
          return u;
        }
        getLeaves(e, r2, n) {
          r2 = r2 || 10, n = n || 0;
          const o = [];
          return this._appendLeaves(o, e, r2, n, 0), o;
        }
        getTile(e, r2, n) {
          const o = this.trees[this._limitZoom(e)], s = Math.pow(2, e), { extent: i, radius: c } = this.options, a = c / i, d = (n - a) / s, p = (n + 1 + a) / s, u = { features: [] };
          return this._addTileFeatures(o.range((r2 - a) / s, d, (r2 + 1 + a) / s, p), o.data, r2, n, s, u), r2 === 0 && this._addTileFeatures(o.range(1 - a / s, d, 1, p), o.data, s, n, s, u), r2 === s - 1 && this._addTileFeatures(o.range(0, d, a / s, p), o.data, -1, n, s, u), u.features.length ? u : null;
        }
        getClusterExpansionZoom(e) {
          let r2 = this._getOriginZoom(e) - 1;
          for (; r2 <= this.options.maxZoom; ) {
            const n = this.getChildren(e);
            if (r2++, n.length !== 1) break;
            e = n[0].properties.cluster_id;
          }
          return r2;
        }
        _appendLeaves(e, r2, n, o, s) {
          const i = this.getChildren(r2);
          for (const c of i) {
            const a = c.properties;
            if (a && a.cluster ? s + a.point_count <= o ? s += a.point_count : s = this._appendLeaves(e, a.cluster_id, n, o, s) : s < o ? s++ : e.push(c), e.length === n) break;
          }
          return s;
        }
        _createTree(e) {
          const r2 = new ie(e.length / this.stride | 0, this.options.nodeSize, Float32Array);
          for (let n = 0; n < e.length; n += this.stride) r2.add(e[n], e[n + 1]);
          return r2.finish(), r2.data = e, r2;
        }
        _addTileFeatures(e, r2, n, o, s, i) {
          for (const c of e) {
            const a = c * this.stride, d = r2[a + j] > 1;
            let p, u, m;
            if (d) p = Ue(r2, a, this.clusterProps), u = r2[a], m = r2[a + 1];
            else {
              const f = this.points[r2[a + L]];
              p = f.properties;
              const [y, v] = f.geometry.coordinates;
              u = X(y), m = Y(v);
            }
            const h = { type: 1, geometry: [[Math.round(this.options.extent * (u * s - n)), Math.round(this.options.extent * (m * s - o))]], tags: p };
            let g;
            d || this.options.generateId ? g = r2[a + L] : g = this.points[r2[a + L]].id, g !== void 0 && (h.id = g), i.features.push(h);
          }
        }
        _limitZoom(e) {
          return Math.max(this.options.minZoom, Math.min(Math.floor(+e), this.options.maxZoom + 1));
        }
        _cluster(e, r2) {
          const { radius: n, extent: o, reduce: s, minPoints: i } = this.options, c = n / (o * Math.pow(2, r2)), a = e.data, d = [], p = this.stride;
          for (let u = 0; u < a.length; u += p) {
            if (a[u + N] <= r2) continue;
            a[u + N] = r2;
            const m = a[u], h = a[u + 1], g = e.within(a[u], a[u + 1], c), f = a[u + j];
            let y = f;
            for (const v of g) {
              const w = v * p;
              a[w + N] > r2 && (y += a[w + j]);
            }
            if (y > f && y >= i) {
              let v = m * f, w = h * f, _, T = -1;
              const O = ((u / p | 0) << 5) + (r2 + 1) + this.points.length;
              for (const E of g) {
                const C = E * p;
                if (a[C + N] <= r2) continue;
                a[C + N] = r2;
                const S = a[C + j];
                v += a[C] * S, w += a[C + 1] * S, a[C + ue] = O, s && (_ || (_ = this._map(a, u, true), T = this.clusterProps.length, this.clusterProps.push(_)), s(_, this._map(a, C)));
              }
              a[u + ue] = O, d.push(v / y, w / y, 1 / 0, O, -1, y), s && d.push(T);
            } else {
              for (let v = 0; v < p; v++) d.push(a[u + v]);
              if (y > 1) for (const v of g) {
                const w = v * p;
                if (!(a[w + N] <= r2)) {
                  a[w + N] = r2;
                  for (let _ = 0; _ < p; _++) d.push(a[w + _]);
                }
              }
            }
          }
          return d;
        }
        _getOriginId(e) {
          return e - this.points.length >> 5;
        }
        _getOriginZoom(e) {
          return (e - this.points.length) % 32;
        }
        _map(e, r2, n) {
          if (e[r2 + j] > 1) {
            const i = this.clusterProps[e[r2 + $e]];
            return n ? Object.assign({}, i) : i;
          }
          const o = this.points[e[r2 + L]].properties, s = this.options.map(o);
          return n && s === o ? Object.assign({}, s) : s;
        }
      }
      function Ve(t, e, r2) {
        return { type: "Feature", id: t[e + L], properties: Ue(t, e, r2), geometry: { type: "Point", coordinates: [fr(t[e]), pr(t[e + 1])] } };
      }
      function Ue(t, e, r2) {
        const n = t[e + j], o = n >= 1e4 ? `${Math.round(n / 1e3)}k` : n >= 1e3 ? `${Math.round(n / 100) / 10}k` : n, s = t[e + $e], i = s === -1 ? {} : Object.assign({}, r2[s]);
        return Object.assign(i, { cluster: true, cluster_id: t[e + L], point_count: n, point_count_abbreviated: o });
      }
      function X(t) {
        return t / 360 + 0.5;
      }
      function Y(t) {
        const e = Math.sin(t * Math.PI / 180), r2 = 0.5 - 0.25 * Math.log((1 + e) / (1 - e)) / Math.PI;
        return r2 < 0 ? 0 : r2 > 1 ? 1 : r2;
      }
      function fr(t) {
        return (t - 0.5) * 360;
      }
      function pr(t) {
        const e = (180 - t * 360) * Math.PI / 180;
        return 360 * Math.atan(Math.exp(e)) / Math.PI - 90;
      }
      function de(t, e) {
        var r2 = {};
        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r2[n] = t[n]);
        if (t != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(t); o < n.length; o++) e.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[o]) && (r2[n[o]] = t[n[o]]);
        return r2;
      }
      typeof SuppressedError == "function" && SuppressedError;
      class b {
        static isAdvancedMarkerAvailable(e) {
          return google.maps.marker && e.getMapCapabilities().isAdvancedMarkersAvailable === true;
        }
        static isAdvancedMarker(e) {
          return google.maps.marker && e instanceof google.maps.marker.AdvancedMarkerElement;
        }
        static setMap(e, r2) {
          this.isAdvancedMarker(e) ? e.map = r2 : e.setMap(r2);
        }
        static getPosition(e) {
          if (this.isAdvancedMarker(e)) {
            if (e.position) {
              if (e.position instanceof google.maps.LatLng) return e.position;
              if (Number.isFinite(e.position.lat) && Number.isFinite(e.position.lng)) return new google.maps.LatLng(e.position.lat, e.position.lng);
            }
            return new google.maps.LatLng(null);
          }
          return e.getPosition();
        }
        static getVisible(e) {
          return this.isAdvancedMarker(e) ? true : e.getVisible();
        }
      }
      class F {
        constructor({ markers: e, position: r2 }) {
          this.markers = [], e && (this.markers = e), r2 && (r2 instanceof google.maps.LatLng ? this._position = r2 : this._position = new google.maps.LatLng(r2));
        }
        get bounds() {
          if (this.markers.length === 0 && !this._position) return;
          const e = new google.maps.LatLngBounds(this._position, this._position);
          for (const r2 of this.markers) e.extend(b.getPosition(r2));
          return e;
        }
        get position() {
          return this._position || this.bounds.getCenter();
        }
        get count() {
          return this.markers.filter((e) => b.getVisible(e)).length;
        }
        push(e) {
          this.markers.push(e);
        }
        delete() {
          this.marker && (b.setMap(this.marker, null), this.marker = void 0), this.markers.length = 0;
        }
      }
      function P(t, e = "assertion failed") {
        if (t == null) throw Error(e);
      }
      const mr = (t, e, r2, n) => {
        const o = t.getBounds();
        P(o);
        const s = Ze(o, e, n);
        return r2.filter((i) => s.contains(b.getPosition(i)));
      }, Ze = (t, e, r2) => {
        const { northEast: n, southWest: o } = gr(t, e), s = yr({ northEast: n, southWest: o }, r2);
        return vr(s, e);
      }, hr = (t, e, r2) => {
        const n = Ze(t, e, r2), o = n.getNorthEast(), s = n.getSouthWest();
        return [s.lng(), s.lat(), o.lng(), o.lat()];
      }, gr = (t, e) => {
        const r2 = e.fromLatLngToDivPixel(t.getNorthEast()), n = e.fromLatLngToDivPixel(t.getSouthWest());
        return P(r2), P(n), { northEast: r2, southWest: n };
      }, yr = ({ northEast: t, southWest: e }, r2) => (t.x += r2, t.y -= r2, e.x -= r2, e.y += r2, { northEast: t, southWest: e }), vr = ({ northEast: t, southWest: e }, r2) => {
        const n = r2.fromDivPixelToLatLng(e), o = r2.fromDivPixelToLatLng(t);
        return new google.maps.LatLngBounds(n, o);
      };
      class Ge {
        constructor({ maxZoom: e = 16 }) {
          this.maxZoom = e;
        }
        noop({ markers: e }) {
          return Er(e);
        }
      }
      class wr extends Ge {
        constructor(e) {
          var { viewportPadding: r2 = 60 } = e, n = de(e, ["viewportPadding"]);
          super(n), this.viewportPadding = 60, this.viewportPadding = r2;
        }
        calculate({ markers: e, map: r2, mapCanvasProjection: n }) {
          const o = r2.getZoom();
          return P(o), o >= this.maxZoom ? { clusters: this.noop({ markers: e }), changed: false } : { clusters: this.cluster({ markers: mr(r2, n, e, this.viewportPadding), map: r2, mapCanvasProjection: n }) };
        }
      }
      const Er = (t) => t.map((r2) => new F({ position: b.getPosition(r2), markers: [r2] }));
      class kr extends Ge {
        constructor(e) {
          var { maxZoom: r2, radius: n = 60 } = e, o = de(e, ["maxZoom", "radius"]);
          super({ maxZoom: r2 }), this.markers = [], this.clusters = [], this.state = { zoom: -1 }, this.superCluster = new De(Object.assign({ maxZoom: this.maxZoom, radius: n }, o));
        }
        calculate(e) {
          let r2 = false, n = e.map.getZoom();
          P(n), n = Math.round(n);
          const o = { zoom: n };
          if (!K(e.markers, this.markers)) {
            r2 = true, this.markers = [...e.markers];
            const s = this.markers.map((i) => {
              const c = b.getPosition(i);
              return { type: "Feature", geometry: { type: "Point", coordinates: [c.lng(), c.lat()] }, properties: { marker: i } };
            });
            this.superCluster.load(s);
          }
          return r2 || (this.state.zoom <= this.maxZoom || o.zoom <= this.maxZoom) && (r2 = !K(this.state, o)), this.state = o, e.markers.length === 0 ? (this.clusters = [], { clusters: this.clusters, changed: r2 }) : (r2 && (this.clusters = this.cluster(e)), { clusters: this.clusters, changed: r2 });
        }
        cluster({ map: e }) {
          const r2 = e.getZoom();
          return P(r2), this.superCluster.getClusters([-180, -90, 180, 90], Math.round(r2)).map((n) => this.transformCluster(n));
        }
        transformCluster({ geometry: { coordinates: [e, r2] }, properties: n }) {
          if (n.cluster) return new F({ markers: this.superCluster.getLeaves(n.cluster_id, 1 / 0).map((s) => s.properties.marker), position: { lat: r2, lng: e } });
          const o = n.marker;
          return new F({ markers: [o], position: b.getPosition(o) });
        }
      }
      class _r extends wr {
        constructor(e) {
          var { maxZoom: r2, radius: n = 60, viewportPadding: o = 60 } = e, s = de(e, ["maxZoom", "radius", "viewportPadding"]);
          super({ maxZoom: r2, viewportPadding: o }), this.markers = [], this.clusters = [], this.superCluster = new De(Object.assign({ maxZoom: this.maxZoom, radius: n }, s)), this.state = { zoom: -1, view: [0, 0, 0, 0] };
        }
        calculate(e) {
          const r2 = this.getViewportState(e);
          let n = !K(this.state, r2);
          if (!K(e.markers, this.markers)) {
            n = true, this.markers = [...e.markers];
            const o = this.markers.map((s) => {
              const i = b.getPosition(s);
              return { type: "Feature", geometry: { type: "Point", coordinates: [i.lng(), i.lat()] }, properties: { marker: s } };
            });
            this.superCluster.load(o);
          }
          return n && (this.clusters = this.cluster(e), this.state = r2), { clusters: this.clusters, changed: n };
        }
        cluster(e) {
          const r2 = this.getViewportState(e);
          return this.superCluster.getClusters(r2.view, r2.zoom).map((n) => this.transformCluster(n));
        }
        transformCluster({ geometry: { coordinates: [e, r2] }, properties: n }) {
          if (n.cluster) return new F({ markers: this.superCluster.getLeaves(n.cluster_id, 1 / 0).map((s) => s.properties.marker), position: { lat: r2, lng: e } });
          const o = n.marker;
          return new F({ markers: [o], position: b.getPosition(o) });
        }
        getViewportState(e) {
          const r2 = e.map.getZoom(), n = e.map.getBounds();
          return P(r2), P(n), { zoom: Math.round(r2), view: hr(n, e.mapCanvasProjection, this.viewportPadding) };
        }
      }
      class Cr {
        constructor(e, r2) {
          this.markers = { sum: e.length };
          const n = r2.map((s) => s.count), o = n.reduce((s, i) => s + i, 0);
          this.clusters = { count: r2.length, markers: { mean: o / r2.length, sum: o, min: Math.min(...n), max: Math.max(...n) } };
        }
      }
      class br {
        render({ count: e, position: r2 }, n, o) {
          const i = `<svg fill="${e > Math.max(10, n.clusters.markers.mean) ? "#ff0000" : "#0000ff"}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" width="50" height="50">
<circle cx="120" cy="120" opacity=".6" r="70" />
<circle cx="120" cy="120" opacity=".3" r="90" />
<circle cx="120" cy="120" opacity=".2" r="110" />
<text x="50%" y="50%" style="fill:#fff" text-anchor="middle" font-size="50" dominant-baseline="middle" font-family="roboto,arial,sans-serif">${e}</text>
</svg>`, c = `Cluster of ${e} markers`, a = Number(google.maps.Marker.MAX_ZINDEX) + e;
          if (b.isAdvancedMarkerAvailable(o)) {
            const u = new DOMParser().parseFromString(i, "image/svg+xml").documentElement;
            u.setAttribute("transform", "translate(0 25)");
            const m = { map: o, position: r2, zIndex: a, title: c, content: u };
            return new google.maps.marker.AdvancedMarkerElement(m);
          }
          const d = { position: r2, zIndex: a, title: c, icon: { url: `data:image/svg+xml;base64,${btoa(i)}`, anchor: new google.maps.Point(25, 25) } };
          return new google.maps.Marker(d);
        }
      }
      function Mr(t, e) {
        for (let r2 in e.prototype) t.prototype[r2] = e.prototype[r2];
      }
      class fe {
        constructor() {
          Mr(fe, google.maps.OverlayView);
        }
      }
      var R;
      (function(t) {
        t.CLUSTERING_BEGIN = "clusteringbegin", t.CLUSTERING_END = "clusteringend", t.CLUSTER_CLICK = "click", t.GMP_CLICK = "gmp-click";
      })(R || (R = {}));
      const Or = (t, e, r2) => {
        e.bounds && r2.fitBounds(e.bounds);
      };
      class Sr extends fe {
        constructor({ map: e, markers: r2 = [], algorithmOptions: n = {}, algorithm: o = new kr(n), renderer: s = new br(), onClusterClick: i = Or }) {
          super(), this.map = null, this.idleListener = null, this.markers = [...r2], this.clusters = [], this.algorithm = o, this.renderer = s, this.onClusterClick = i, e && this.setMap(e);
        }
        addMarker(e, r2) {
          this.markers.includes(e) || (this.markers.push(e), r2 || this.render());
        }
        addMarkers(e, r2) {
          e.forEach((n) => {
            this.addMarker(n, true);
          }), r2 || this.render();
        }
        removeMarker(e, r2) {
          const n = this.markers.indexOf(e);
          return n === -1 ? false : (b.setMap(e, null), this.markers.splice(n, 1), r2 || this.render(), true);
        }
        removeMarkers(e, r2) {
          let n = false;
          return e.forEach((o) => {
            n = this.removeMarker(o, true) || n;
          }), n && !r2 && this.render(), n;
        }
        clearMarkers(e) {
          this.markers.length = 0, e || this.render();
        }
        render() {
          const e = this.getMap();
          if (e instanceof google.maps.Map && e.getProjection()) {
            google.maps.event.trigger(this, R.CLUSTERING_BEGIN, this);
            const { clusters: r2, changed: n } = this.algorithm.calculate({ markers: this.markers, map: e, mapCanvasProjection: this.getProjection() });
            if (n || n == null) {
              const o = /* @__PURE__ */ new Set();
              for (const i of r2) i.markers.length == 1 && o.add(i.markers[0]);
              const s = [];
              for (const i of this.clusters) i.marker != null && (i.markers.length == 1 ? o.has(i.marker) || b.setMap(i.marker, null) : s.push(i.marker));
              this.clusters = r2, this.renderClusters(), requestAnimationFrame(() => s.forEach((i) => b.setMap(i, null)));
            }
            google.maps.event.trigger(this, R.CLUSTERING_END, this);
          }
        }
        onAdd() {
          const e = this.getMap();
          P(e), this.idleListener = e.addListener("idle", this.render.bind(this)), this.render();
        }
        onRemove() {
          this.idleListener && google.maps.event.removeListener(this.idleListener), this.reset();
        }
        reset() {
          this.markers.forEach((e) => b.setMap(e, null)), this.clusters.forEach((e) => e.delete()), this.clusters = [];
        }
        renderClusters() {
          const e = new Cr(this.markers, this.clusters), r2 = this.getMap();
          this.clusters.forEach((n) => {
            if (n.markers.length === 1) n.marker = n.markers[0];
            else if (n.marker = this.renderer.render(n, e, r2), n.markers.forEach((o) => b.setMap(o, null)), this.onClusterClick) {
              const o = b.isAdvancedMarker(n.marker) ? R.GMP_CLICK : R.CLUSTER_CLICK;
              n.marker.addListener(o, (s) => {
                google.maps.event.trigger(this, R.CLUSTER_CLICK, n), this.onClusterClick(s, n, r2);
              });
            }
            b.setMap(n.marker, r2);
          });
        }
      }
      function pe(t) {
        var e = typeof t;
        return t != null && (e == "object" || e == "function");
      }
      var Tr = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
      const Pr = Tr;
      var Ar = typeof self == "object" && self && self.Object === Object && self, qr = Pr || Ar || Function("return this")();
      const Fe = qr;
      var Lr = function() {
        return Fe.Date.now();
      };
      const me = Lr;
      var jr = /\s/;
      function Rr(t) {
        for (var e = t.length; e-- && jr.test(t.charAt(e)); ) ;
        return e;
      }
      var xr = /^\s+/;
      function Ir(t) {
        return t && t.slice(0, Rr(t) + 1).replace(xr, "");
      }
      var Nr = Fe.Symbol;
      const J = Nr;
      var ze = Object.prototype, Br = ze.hasOwnProperty, $r = ze.toString, z = J ? J.toStringTag : void 0;
      function Dr(t) {
        var e = Br.call(t, z), r2 = t[z];
        try {
          t[z] = void 0;
          var n = true;
        } catch {
        }
        var o = $r.call(t);
        return n && (e ? t[z] = r2 : delete t[z]), o;
      }
      var Vr = Object.prototype, Ur = Vr.toString;
      function Zr(t) {
        return Ur.call(t);
      }
      var Gr = "[object Null]", Fr = "[object Undefined]", We = J ? J.toStringTag : void 0;
      function zr(t) {
        return t == null ? t === void 0 ? Fr : Gr : We && We in Object(t) ? Dr(t) : Zr(t);
      }
      function Wr(t) {
        return t != null && typeof t == "object";
      }
      var Hr = "[object Symbol]";
      function Kr(t) {
        return typeof t == "symbol" || Wr(t) && zr(t) == Hr;
      }
      var He = 0 / 0, Xr = /^[-+]0x[0-9a-f]+$/i, Yr = /^0b[01]+$/i, Jr = /^0o[0-7]+$/i, Qr = parseInt;
      function Ke(t) {
        if (typeof t == "number") return t;
        if (Kr(t)) return He;
        if (pe(t)) {
          var e = typeof t.valueOf == "function" ? t.valueOf() : t;
          t = pe(e) ? e + "" : e;
        }
        if (typeof t != "string") return t === 0 ? t : +t;
        t = Ir(t);
        var r2 = Yr.test(t);
        return r2 || Jr.test(t) ? Qr(t.slice(2), r2 ? 2 : 8) : Xr.test(t) ? He : +t;
      }
      var en = "Expected a function", tn = Math.max, rn = Math.min;
      function nn(t, e, r2) {
        var n, o, s, i, c, a, d = 0, p = false, u = false, m = true;
        if (typeof t != "function") throw new TypeError(en);
        e = Ke(e) || 0, pe(r2) && (p = true, u = "maxWait" in r2, s = u ? tn(Ke(r2.maxWait) || 0, e) : s, m = "trailing" in r2 ? true : m);
        function h(E) {
          var C = n, S = o;
          return n = o = void 0, d = E, i = t.apply(S, C), i;
        }
        function g(E) {
          return d = E, c = setTimeout(v, e), p ? h(E) : i;
        }
        function f(E) {
          var C = E - a, S = E - d, x = e - C;
          return u ? rn(x, s - S) : x;
        }
        function y(E) {
          var C = E - a, S = E - d;
          return a === void 0 || C >= e || C < 0 || u && S >= s;
        }
        function v() {
          var E = me();
          if (y(E)) return w(E);
          c = setTimeout(v, f(E));
        }
        function w(E) {
          return c = void 0, m && n ? h(E) : (n = o = void 0, i);
        }
        function _() {
          c !== void 0 && clearTimeout(c), d = 0, n = a = o = c = void 0;
        }
        function T() {
          return c === void 0 ? i : w(me());
        }
        function O() {
          var E = me(), C = y(E);
          if (n = arguments, o = this, a = E, C) {
            if (c === void 0) return g(a);
            if (u) return clearTimeout(c), c = setTimeout(v, e), h(a);
          }
          return c === void 0 && (c = setTimeout(v, e)), i;
        }
        return O.cancel = _, O.flush = T, O;
      }
      class on extends Sr {
        constructor(r2, n = 10) {
          super(r2);
          ee(this, "debouncedRender");
          this.debouncedRender = nn(() => {
            super.render();
          }, n, { leading: true, trailing: true });
        }
        addMarker(r2, n) {
          super.addMarker(r2, true), n || this.debouncedRender();
        }
        removeMarker(r2, n) {
          const o = super.removeMarker(r2, true);
          return n || this.debouncedRender(), o;
        }
        addMarkers(r2, n) {
          super.addMarkers(r2, true), n || this.debouncedRender();
        }
        removeMarkers(r2, n) {
          const o = super.removeMarkers(r2, true);
          return n || this.debouncedRender(), o;
        }
        clearMarkers(r2) {
          super.clearMarkers(true), r2 || this.debouncedRender();
        }
        render() {
          this.debouncedRender.cancel(), super.render();
        }
        destroy() {
          this.debouncedRender.cancel();
        }
      }
      class sn extends _r {
        calculate(e) {
          return e.markers.length === 0 ? { clusters: [], changed: true } : super.calculate(e);
        }
      }
      const Xe = Object.values(R), an = l.defineComponent({ name: "MarkerCluster", props: { options: { type: Object, default: () => ({}) }, renderDebounceDelay: { type: Number, default: 10 } }, emits: Xe, setup(t, { emit: e, expose: r2, slots: n }) {
        const o = l.ref(), s = l.inject(M, l.ref()), i = l.inject(A, l.ref());
        return l.provide(re, o), l.watch(s, () => {
          s.value && (o.value = l.markRaw(new on({ map: s.value, algorithm: new sn(t.options.algorithmOptions ?? {}), ...t.options }, t.renderDebounceDelay)), Xe.forEach((c) => {
            var a;
            (a = o.value) == null || a.addListener(c, (d) => e(c, d));
          }));
        }, { immediate: true }), l.onBeforeUnmount(() => {
          var c;
          o.value && ((c = i.value) == null || c.event.clearInstanceListeners(o.value), o.value.clearMarkers(true), o.value.setMap(null), o.value.destroy());
        }), r2({ markerCluster: o }), () => {
          var c;
          return (c = n.default) == null ? void 0 : c.call(n);
        };
      } }), ln = l.defineComponent({ inheritAttrs: false, props: { options: { type: Object, required: true } }, setup(t, { slots: e, emit: r2, expose: n }) {
        const o = l.ref(), s = l.computed(() => {
          var a;
          return (a = e.default) == null ? void 0 : a.call(e).some((d) => d.type !== l.Comment);
        }), i = l.computed(() => ({ ...t.options, element: o.value })), c = $(W, [], i, r2);
        return n({ customMarker: c }), { customMarkerRef: o, customMarker: c, hasSlotContent: s };
      } }), cn = { key: 0, class: "custom-marker-wrapper" };
      function un(t, e, r2, n, o, s) {
        return t.hasSlotContent ? (l.openBlock(), l.createElementBlock("div", cn, [l.createElementVNode("div", l.mergeProps({ ref: "customMarkerRef", style: { cursor: t.$attrs.onClick ? "pointer" : void 0 } }, t.$attrs), [l.renderSlot(t.$slots, "default", {}, void 0, true)], 16)])) : l.createCommentVNode("v-if", true);
      }
      const dn = D(ln, [["render", un], ["__scopeId", "data-v-90fe8380"]]), fn = l.defineComponent({ name: "HeatmapLayer", props: { options: { type: Object, default: () => ({}) } }, setup(t) {
        const e = l.ref(), r2 = l.inject(M, l.ref()), n = l.inject(A, l.ref());
        return l.watch([r2, () => t.options], ([o, s], [i, c]) => {
          const a = !V(s, c) || r2.value !== i;
          if (r2.value && n.value && a) {
            let d;
            if (s.data && !(s.data instanceof n.value.MVCArray)) {
              const p = n.value.LatLng, u = s.data.map((m) => m instanceof p || "location" in m && (m.location instanceof p || m.location === null) ? m : "location" in m ? { ...m, location: new p(m.location) } : new p(m));
              d = { ...s, data: u };
            } else d = s;
            e.value ? e.value.setOptions(d) : e.value = l.markRaw(new n.value.visualization.HeatmapLayer({ ...d, map: r2.value }));
          }
        }, { immediate: true }), l.onBeforeUnmount(() => {
          e.value && e.value.setMap(null);
        }), { heatmapLayer: e };
      }, render: () => null });
      k.AdvancedMarker = yt, k.Circle = _t, k.CustomControl = Ot, k.CustomMarker = dn, k.GoogleMap = dt, k.HeatmapLayer = fn, k.InfoWindow = At, k.Marker = vt, k.MarkerCluster = an, k.Polygon = Et, k.Polyline = wt, k.Rectangle = kt, k.apiSymbol = A, k.mapSymbol = M, k.mapTilesLoadedSymbol = ne, Object.defineProperty(k, Symbol.toStringTag, { value: "Module" });
    });
  })(index_umd$1, index_umd$1.exports);
  return index_umd$1.exports;
}
var index_umdExports = requireIndex_umd();
const _sfc_main$j = {
  __name: "DynamicMap",
  props: {
    location: {
      type: Object,
      default: () => {
        return {
          lat: 40.689247,
          lng: -74.044502
        };
      }
    },
    useCNMap: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_DeferredContent = script$4;
      return openBlock(), createBlock(_component_DeferredContent, { class: "w-full h-full" }, {
        default: withCtx(() => [
          __props.useCNMap ? (openBlock(), createBlock(unref(script$1), {
            key: 0,
            ak: unref(BAIDU_MAP_API_KEY),
            height: "100%",
            center: __props.location,
            zoom: 17,
            enableScrollWheelZoom: "",
            mapStyleId: "ee66c61531e8df3c2fd0374e96e58e81"
          }, {
            default: withCtx(() => [
              createVNode(unref(script), {
                position: __props.location,
                icon: "loc_red"
              }, null, 8, ["position"])
            ]),
            _: 1
          }, 8, ["ak", "center"])) : (openBlock(), createBlock(unref(index_umdExports.GoogleMap), {
            key: 1,
            mapId: "DLP_MAP_ID",
            "api-key": unref(GOOGLE_MAP_API_KEY),
            style: { "height": "100%" },
            center: __props.location,
            zoom: 15
          }, {
            default: withCtx(() => [
              createVNode(unref(index_umdExports.AdvancedMarker), {
                options: {
                  position: __props.location
                },
                "pin-options": {
                  background: "#EA4436"
                }
              }, null, 8, ["options"])
            ]),
            _: 1
          }, 8, ["api-key", "center"]))
        ]),
        _: 1
      });
    };
  }
};
const _hoisted_1$h = ["data-cap-i18n-initial-state", "data-cap-i18n-verifying-label", "data-cap-i18n-error-label", "data-cap-i18n-solved-label"];
const ENDPOINT_URL = "/api/captcha/";
const VALIDATE_URL = "/api/captcha/validate";
const _sfc_main$i = {
  __name: "Captcha",
  props: {
    initState: {
      type: String,
      default: ""
    },
    verifyingLabel: {
      type: String,
      default: ""
    },
    errorLabel: {
      type: String,
      default: ""
    },
    solvedLabel: {
      type: String,
      default: ""
    }
  },
  emits: ["validation"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const emits = __emit;
    const captchaRef = ref(null);
    function reset2() {
      captchaRef.value.reset();
    }
    onMounted(() => {
      captchaRef.value.addEventListener("solve", async function(e) {
        try {
          const token = e.detail.token;
          const res = await $fetch(VALIDATE_URL, {
            method: "POST",
            body: {
              token
            }
          });
          if (res.success) {
            emits("validation", token);
          }
        } catch (e2) {
        }
      });
      captchaRef.value.addEventListener("error", () => {
        emits("validation", "");
      });
      captchaRef.value.addEventListener("reset", () => {
        emits("validation", "");
      });
    });
    __expose({
      reset: reset2
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("cap-widget", {
        id: "cap",
        ref_key: "captchaRef",
        ref: captchaRef,
        "data-cap-i18n-initial-state": __props.initState,
        "data-cap-i18n-verifying-label": __props.verifyingLabel,
        "data-cap-i18n-error-label": __props.errorLabel,
        "data-cap-i18n-solved-label": __props.solvedLabel,
        "data-cap-hide-attribution": "true",
        "data-cap-elevation": "flat",
        "data-cap-api-endpoint": ENDPOINT_URL
      }, null, 8, _hoisted_1$h);
    };
  }
};
function assertString(input) {
  if (input === void 0 || input === null) throw new TypeError("Expected a string but received a ".concat(input));
  if (input.constructor.name !== "String") throw new TypeError("Expected a string but received a ".concat(input.constructor.name));
}
function isRegExp(obj) {
  return Object.prototype.toString.call(obj) === "[object RegExp]";
}
function checkHost(host, matches) {
  for (var i = 0; i < matches.length; i++) {
    var match = matches[i];
    if (host === match || isRegExp(match) && match.test(host)) {
      return true;
    }
  }
  return false;
}
function _typeof$1(o) {
  "@babel/helpers - typeof";
  return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$1(o);
}
function isByteLength(str, options) {
  assertString(str);
  var min;
  var max;
  if (_typeof$1(options) === "object") {
    min = options.min || 0;
    max = options.max;
  } else {
    min = arguments[1];
    max = arguments[2];
  }
  var len = encodeURI(str).split(/%..|./).length - 1;
  return len >= min && (typeof max === "undefined" || len <= max);
}
function merge() {
  var obj = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  var defaults = arguments.length > 1 ? arguments[1] : void 0;
  for (var key in defaults) {
    if (typeof obj[key] === "undefined") {
      obj[key] = defaults[key];
    }
  }
  return obj;
}
var default_fqdn_options = {
  require_tld: true,
  allow_underscores: false,
  allow_trailing_dot: false,
  allow_numeric_tld: false,
  allow_wildcard: false,
  ignore_max_length: false
};
function isFQDN(str, options) {
  assertString(str);
  options = merge(options, default_fqdn_options);
  if (options.allow_trailing_dot && str[str.length - 1] === ".") {
    str = str.substring(0, str.length - 1);
  }
  if (options.allow_wildcard === true && str.indexOf("*.") === 0) {
    str = str.substring(2);
  }
  var parts = str.split(".");
  var tld = parts[parts.length - 1];
  if (options.require_tld) {
    if (parts.length < 2) {
      return false;
    }
    if (!options.allow_numeric_tld && !/^([a-z\u00A1-\u00A8\u00AA-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}|xn[a-z0-9-]{2,})$/i.test(tld)) {
      return false;
    }
    if (/\s/.test(tld)) {
      return false;
    }
  }
  if (!options.allow_numeric_tld && /^\d+$/.test(tld)) {
    return false;
  }
  return parts.every(function(part) {
    if (part.length > 63 && !options.ignore_max_length) {
      return false;
    }
    if (!/^[a-z_\u00a1-\uffff0-9-]+$/i.test(part)) {
      return false;
    }
    if (/[\uff01-\uff5e]/.test(part)) {
      return false;
    }
    if (/^-|-$/.test(part)) {
      return false;
    }
    if (!options.allow_underscores && /_/.test(part)) {
      return false;
    }
    return true;
  });
}
function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
}
var IPv4SegmentFormat = "(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])";
var IPv4AddressFormat = "(".concat(IPv4SegmentFormat, "[.]){3}").concat(IPv4SegmentFormat);
var IPv4AddressRegExp = new RegExp("^".concat(IPv4AddressFormat, "$"));
var IPv6SegmentFormat = "(?:[0-9a-fA-F]{1,4})";
var IPv6AddressRegExp = new RegExp("^(" + "(?:".concat(IPv6SegmentFormat, ":){7}(?:").concat(IPv6SegmentFormat, "|:)|") + "(?:".concat(IPv6SegmentFormat, ":){6}(?:").concat(IPv4AddressFormat, "|:").concat(IPv6SegmentFormat, "|:)|") + "(?:".concat(IPv6SegmentFormat, ":){5}(?::").concat(IPv4AddressFormat, "|(:").concat(IPv6SegmentFormat, "){1,2}|:)|") + "(?:".concat(IPv6SegmentFormat, ":){4}(?:(:").concat(IPv6SegmentFormat, "){0,1}:").concat(IPv4AddressFormat, "|(:").concat(IPv6SegmentFormat, "){1,3}|:)|") + "(?:".concat(IPv6SegmentFormat, ":){3}(?:(:").concat(IPv6SegmentFormat, "){0,2}:").concat(IPv4AddressFormat, "|(:").concat(IPv6SegmentFormat, "){1,4}|:)|") + "(?:".concat(IPv6SegmentFormat, ":){2}(?:(:").concat(IPv6SegmentFormat, "){0,3}:").concat(IPv4AddressFormat, "|(:").concat(IPv6SegmentFormat, "){1,5}|:)|") + "(?:".concat(IPv6SegmentFormat, ":){1}(?:(:").concat(IPv6SegmentFormat, "){0,4}:").concat(IPv4AddressFormat, "|(:").concat(IPv6SegmentFormat, "){1,6}|:)|") + "(?::((?::".concat(IPv6SegmentFormat, "){0,5}:").concat(IPv4AddressFormat, "|(?::").concat(IPv6SegmentFormat, "){1,7}|:))") + ")(%[0-9a-zA-Z.]{1,})?$");
function isIP(ipAddress) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  assertString(ipAddress);
  var version = (_typeof(options) === "object" ? options.version : arguments[1]) || "";
  if (!version) {
    return isIP(ipAddress, {
      version: 4
    }) || isIP(ipAddress, {
      version: 6
    });
  }
  if (version.toString() === "4") {
    return IPv4AddressRegExp.test(ipAddress);
  }
  if (version.toString() === "6") {
    return IPv6AddressRegExp.test(ipAddress);
  }
  return false;
}
var default_email_options = {
  allow_display_name: false,
  allow_underscores: false,
  require_display_name: false,
  allow_utf8_local_part: true,
  require_tld: true,
  blacklisted_chars: "",
  ignore_max_length: false,
  host_blacklist: [],
  host_whitelist: []
};
var splitNameAddress = /^([^\x00-\x1F\x7F-\x9F\cX]+)</i;
var emailUserPart = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i;
var gmailUserPart = /^[a-z\d]+$/;
var quotedEmailUser = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i;
var emailUserUtf8Part = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A1-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i;
var quotedEmailUserUtf8 = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;
var defaultMaxEmailLength = 254;
function validateDisplayName(display_name) {
  var display_name_without_quotes = display_name.replace(/^"(.+)"$/, "$1");
  if (!display_name_without_quotes.trim()) {
    return false;
  }
  var contains_illegal = /[\.";<>]/.test(display_name_without_quotes);
  if (contains_illegal) {
    if (display_name_without_quotes === display_name) {
      return false;
    }
    var all_start_with_back_slash = display_name_without_quotes.split('"').length === display_name_without_quotes.split('\\"').length;
    if (!all_start_with_back_slash) {
      return false;
    }
  }
  return true;
}
function isEmail(str, options) {
  assertString(str);
  options = merge(options, default_email_options);
  if (options.require_display_name || options.allow_display_name) {
    var display_email = str.match(splitNameAddress);
    if (display_email) {
      var display_name = display_email[1];
      str = str.replace(display_name, "").replace(/(^<|>$)/g, "");
      if (display_name.endsWith(" ")) {
        display_name = display_name.slice(0, -1);
      }
      if (!validateDisplayName(display_name)) {
        return false;
      }
    } else if (options.require_display_name) {
      return false;
    }
  }
  if (!options.ignore_max_length && str.length > defaultMaxEmailLength) {
    return false;
  }
  var parts = str.split("@");
  var domain = parts.pop();
  var lower_domain = domain.toLowerCase();
  if (options.host_blacklist.length > 0 && checkHost(lower_domain, options.host_blacklist)) {
    return false;
  }
  if (options.host_whitelist.length > 0 && !checkHost(lower_domain, options.host_whitelist)) {
    return false;
  }
  var user = parts.join("@");
  if (options.domain_specific_validation && (lower_domain === "gmail.com" || lower_domain === "googlemail.com")) {
    user = user.toLowerCase();
    var username = user.split("+")[0];
    if (!isByteLength(username.replace(/\./g, ""), {
      min: 6,
      max: 30
    })) {
      return false;
    }
    var _user_parts = username.split(".");
    for (var i = 0; i < _user_parts.length; i++) {
      if (!gmailUserPart.test(_user_parts[i])) {
        return false;
      }
    }
  }
  if (options.ignore_max_length === false && (!isByteLength(user, {
    max: 64
  }) || !isByteLength(domain, {
    max: 254
  }))) {
    return false;
  }
  if (!isFQDN(domain, {
    require_tld: options.require_tld,
    ignore_max_length: options.ignore_max_length,
    allow_underscores: options.allow_underscores
  })) {
    if (!options.allow_ip_domain) {
      return false;
    }
    if (!isIP(domain)) {
      if (!domain.startsWith("[") || !domain.endsWith("]")) {
        return false;
      }
      var noBracketdomain = domain.slice(1, -1);
      if (noBracketdomain.length === 0 || !isIP(noBracketdomain)) {
        return false;
      }
    }
  }
  if (options.blacklisted_chars) {
    if (user.search(new RegExp("[".concat(options.blacklisted_chars, "]+"), "g")) !== -1) return false;
  }
  if (user[0] === '"' && user[user.length - 1] === '"') {
    user = user.slice(1, user.length - 1);
    return options.allow_utf8_local_part ? quotedEmailUserUtf8.test(user) : quotedEmailUser.test(user);
  }
  var pattern = options.allow_utf8_local_part ? emailUserUtf8Part : emailUserPart;
  var user_parts = user.split(".");
  for (var _i = 0; _i < user_parts.length; _i++) {
    if (!pattern.test(user_parts[_i])) {
      return false;
    }
  }
  return true;
}
const _hoisted_1$g = { class: "pt-20 md:pt-25" };
const _hoisted_2$g = { class: "text-center text-primary font-bold text-3xl leading-tight" };
const _hoisted_3$g = { class: "text-center text-surface-500 dark:text-surface-200 font-bold text-xl leading-tight mt-6 px-6" };
const _hoisted_4$e = { class: "flex flex-col-reverse lg:flex-row" };
const _hoisted_5$e = { class: "flex-1 text-surface-700 text-center flex flex-col items-center justify-center mt-10" };
const _hoisted_6$e = {
  key: 0,
  class: "w-full max-w-7xl md:px-20 pb-6 md:pb-12 pt-10"
};
const _hoisted_7$d = { class: "max-w-full overflow-hidden flex flex-col gap-4" };
const _hoisted_8$d = { class: "flex flex-col gap-2 px-4" };
const _hoisted_9$c = { class: "flex flex-col md:flex-row" };
const _hoisted_10$b = { class: "flex flex-1" };
const _hoisted_11$a = { class: "flex-1 text-surface-500 font-medium text-base text-right leading-tight" };
const _hoisted_12$8 = { class: "flex-2 lg:flex-2 text-primary-500 text-base leading-tight text-left whitespace-pre-wrap break-all" };
const _hoisted_13$6 = { class: "pb-10" };
const _hoisted_14$6 = { class: "mt-4 text-sm text-surface-500 dark:text-surface-400" };
const _hoisted_15$5 = {
  key: 0,
  class: "w-60 h-60 md:w-40 md:h-40 lg:w-30 lg:h-30 mx-auto"
};
const _hoisted_16$4 = {
  key: 1,
  class: "w-60 min-h-60 md:w-40 md:min-h-40 lg:w-30 lg:min-h-30 mx-auto flex items-center justify-center p-3"
};
const _hoisted_17$3 = { class: "flex items-center justify-center mx-auto w-60 md:w-40 lg:w-30 px-3 py-1 border border-primary text-primary rounded-sm mt-2" };
const _hoisted_18$2 = { class: "flex-1 mt-10" };
const _hoisted_19$2 = { class: "w-full h-full relative min-h-[300px] lg:min-h-[460px]" };
const _hoisted_20$2 = { class: "absolute w-full h-full" };
const _hoisted_21$2 = { class: "grid grid-cols-2 gap-4" };
const _sfc_main$h = {
  __name: "AppTemplate0CompanyInfo",
  setup(__props) {
    const { locale, t } = useI18n();
    const { appConfig: appConfig2, countryCode: countryCode2 } = useConfig();
    const toast = useToast();
    const dialogVisible = ref(false);
    const isSending = ref(false);
    const captchaRef = ref();
    const token = ref("");
    const cCompanyName = ref("");
    const cName = ref("");
    const cEmail = ref("");
    const cPhoneNumber = ref("");
    const cContent = ref("");
    const location = computed(() => {
      const {
        lat = 40.689247,
        lng = -74.044502
      } = appConfig2.value?.location || {};
      return { lat, lng };
    });
    const socialList = computed(() => {
      const res = [];
      [
        "twitter",
        "facebook",
        "tiktok",
        "youtube",
        "line",
        "redbook",
        "weibo",
        "qq",
        "wechat"
      ].forEach((k) => {
        if (appConfig2.value?.[k]) {
          res.push({
            key: k,
            type: appConfig2.value[k + "Type"],
            value: appConfig2.value[k],
            isCustomIcon: [
              "line",
              "redbook",
              "weibo",
              "qq",
              "wechat"
            ].includes(k)
          });
        }
      });
      return res;
    });
    const infoList = computed(() => {
      const res = [];
      [
        "companyName",
        "companyAddress",
        "postalCode",
        "businessHours",
        "dateOfEstablishment",
        "capital",
        "legalRepresentative",
        "phoneNumber",
        "faxNumber",
        "email",
        "business"
      ].forEach((k) => {
        if (appConfig2.value?.[k]) {
          res.push({
            key: k,
            value: appConfig2.value[k]
          });
        }
      });
      return res;
    });
    const canSend = computed(() => {
      return token.value && !isSending.value && cCompanyName.value && cName.value && cEmail.value && isEmail(cEmail.value) && cPhoneNumber.value && cContent.value;
    });
    function captchaValidation(res) {
      token.value = res;
    }
    function showSend() {
      dialogVisible.value = true;
      cCompanyName.value = "";
      cName.value = "";
      cPhoneNumber.value = "";
      cEmail.value = "";
      cContent.value = "";
    }
    async function sendInfo() {
      if (isSending.value || !canSend.value) {
        return;
      }
      isSending.value = true;
      try {
        const res = await $fetch("/api/contact", {
          method: "POST",
          body: {
            company: cCompanyName.value,
            name: cName.value,
            phone: cPhoneNumber.value,
            email: cEmail.value,
            content: cContent.value,
            token: token.value
          }
        });
        if (res.success) {
          dialogVisible.value = false;
          toast.add({ severity: "success", summary: "Success", detail: t("Contact.sendSuccess"), life: 5e3 });
        } else {
          toast.add({ severity: "error", summary: "Error", detail: t("Contact.sendFailed"), life: 5e3 });
        }
      } catch (e) {
        toast.add({ severity: "error", summary: "Error", detail: t("Contact.sendFailed"), life: 5e3 });
      }
      isSending.value = false;
    }
    return (_ctx, _cache) => {
      const _component_Button = script$2;
      const _component_Image = script$8;
      const _component_DeferredContent = script$4;
      const _component_DynamicMap = _sfc_main$j;
      const _component_InputText = script$f;
      const _component_IftaLabel = script$e;
      const _component_Textarea = script$g;
      const _component_Captcha = _sfc_main$i;
      const _component_Drawer = script$h;
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1$g, [
          createBaseVNode("div", _hoisted_2$g, toDisplayString(_ctx.$t("Contact.title")), 1),
          createBaseVNode("div", _hoisted_3$g, toDisplayString(_ctx.$t("Contact.subtitle")), 1),
          createBaseVNode("div", _hoisted_4$e, [
            createBaseVNode("div", _hoisted_5$e, [
              infoList.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_6$e, [
                createBaseVNode("div", _hoisted_7$d, [
                  createBaseVNode("div", _hoisted_8$d, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(infoList.value, (item) => {
                      return openBlock(), createElementBlock("div", _hoisted_9$c, [
                        createBaseVNode("div", _hoisted_10$b, [
                          createBaseVNode("div", _hoisted_11$a, toDisplayString(_ctx.$t(`Contact.${item.key}`)) + "  ", 1),
                          createBaseVNode("pre", _hoisted_12$8, toDisplayString(item.value?.[unref(locale)]), 1)
                        ])
                      ]);
                    }), 256))
                  ])
                ])
              ])) : createCommentVNode("", true),
              createBaseVNode("div", _hoisted_13$6, [
                createVNode(_component_Button, {
                  label: _ctx.$t("Contact.button"),
                  class: "mt-4 !px-10 rounded-none!",
                  onClick: showSend
                }, null, 8, ["label"]),
                createBaseVNode("div", _hoisted_14$6, toDisplayString(_ctx.$t("Contact.webTime")), 1)
              ]),
              socialList.value.length > 0 ? (openBlock(), createElementBlock("div", {
                key: 1,
                class: normalizeClass(["grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-x-20 md:gap-y-10 mb-10 mx-auto max-w-7xl px-6", [{ "!grid-cols-1": socialList.value.length === 1, "!grid-cols-2": socialList.value.length === 2 }]])
              }, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(socialList.value, (item, i) => {
                  return openBlock(), createElementBlock("div", {
                    key: `social_${i}`,
                    class: "!mx-auto !max-w-md w-full"
                  }, [
                    item.type === "image" ? (openBlock(), createElementBlock("div", _hoisted_15$5, [
                      createVNode(_component_DeferredContent, null, {
                        default: withCtx(() => [
                          createVNode(_component_Image, {
                            src: item.value,
                            alt: item.key,
                            imageClass: "w-fulll h-full object-contain"
                          }, null, 8, ["src", "alt"])
                        ]),
                        _: 2
                      }, 1024)
                    ])) : (openBlock(), createElementBlock("div", _hoisted_16$4, toDisplayString(item.value), 1)),
                    createBaseVNode("div", _hoisted_17$3, [
                      item.isCustomIcon ? (openBlock(), createElementBlock("i", {
                        key: 0,
                        class: normalizeClass(["iconfont !text-2xl", `icon-${item.key}`])
                      }, null, 2)) : (openBlock(), createElementBlock("i", {
                        key: 1,
                        class: normalizeClass(["pi !text-2xl", `pi-${item.key}`])
                      }, null, 2))
                    ])
                  ]);
                }), 128))
              ], 2)) : createCommentVNode("", true)
            ]),
            createBaseVNode("div", _hoisted_18$2, [
              createBaseVNode("div", _hoisted_19$2, [
                createBaseVNode("div", _hoisted_20$2, [
                  createVNode(_component_DynamicMap, {
                    location: location.value,
                    useCNMap: unref(countryCode2) === "CN"
                  }, null, 8, ["location", "useCNMap"])
                ])
              ])
            ])
          ])
        ]),
        createVNode(_component_Drawer, {
          visible: dialogVisible.value,
          "onUpdate:visible": _cache[5] || (_cache[5] = ($event) => dialogVisible.value = $event),
          showCloseIcon: !isSending.value,
          dismissable: !isSending.value,
          header: _ctx.$t("Contact.button"),
          position: "bottom",
          style: { "height": "auto" },
          blockScroll: true,
          "pt:title:class": "text-white",
          "pt:root:class": "!border-none",
          "pt:root:style": "background-image: radial-gradient(circle at right bottom, var(--p-primary-400), var(--p-primary-600))"
        }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_21$2, [
              createVNode(_component_IftaLabel, { class: "w-full" }, {
                default: withCtx(() => [
                  createVNode(_component_InputText, {
                    class: "w-full",
                    disabled: isSending.value,
                    modelValue: cCompanyName.value,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => cCompanyName.value = $event),
                    autocomplete: "off"
                  }, null, 8, ["disabled", "modelValue"]),
                  createBaseVNode("label", null, toDisplayString(_ctx.$t("Contact.yourCompany")), 1)
                ]),
                _: 1
              }),
              createVNode(_component_IftaLabel, { class: "w-full" }, {
                default: withCtx(() => [
                  createVNode(_component_InputText, {
                    class: "w-full",
                    disabled: isSending.value,
                    modelValue: cName.value,
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => cName.value = $event),
                    autocomplete: "off"
                  }, null, 8, ["disabled", "modelValue"]),
                  createBaseVNode("label", null, toDisplayString(_ctx.$t("Contact.yourName")), 1)
                ]),
                _: 1
              }),
              createVNode(_component_IftaLabel, { class: "w-full" }, {
                default: withCtx(() => [
                  createVNode(_component_InputText, {
                    class: "w-full",
                    disabled: isSending.value,
                    modelValue: cEmail.value,
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => cEmail.value = $event),
                    autocomplete: "off",
                    invalid: cEmail.value !== "" && !unref(isEmail)(cEmail.value)
                  }, null, 8, ["disabled", "modelValue", "invalid"]),
                  createBaseVNode("label", null, toDisplayString(_ctx.$t("Contact.yourEmail")), 1)
                ]),
                _: 1
              }),
              createVNode(_component_IftaLabel, { class: "w-full" }, {
                default: withCtx(() => [
                  createVNode(_component_InputText, {
                    class: "w-full",
                    disabled: isSending.value,
                    modelValue: cPhoneNumber.value,
                    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => cPhoneNumber.value = $event),
                    autocomplete: "off"
                  }, null, 8, ["disabled", "modelValue"]),
                  createBaseVNode("label", null, toDisplayString(_ctx.$t("Contact.yourPhoneNumber")), 1)
                ]),
                _: 1
              }),
              createVNode(_component_IftaLabel, { class: "w-full col-span-full" }, {
                default: withCtx(() => [
                  createVNode(_component_Textarea, {
                    rows: "5",
                    class: "w-full",
                    disabled: isSending.value,
                    modelValue: cContent.value,
                    "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => cContent.value = $event),
                    style: { "resize": "none" }
                  }, null, 8, ["disabled", "modelValue"]),
                  createBaseVNode("label", null, toDisplayString(_ctx.$t("Contact.consultationContent")), 1)
                ]),
                _: 1
              }),
              createBaseVNode("div", null, [
                createVNode(_component_Captcha, {
                  ref_key: "captchaRef",
                  ref: captchaRef,
                  initState: _ctx.$t("captcha.initState"),
                  verifyingLabel: _ctx.$t("captcha.verifyingLabel"),
                  errorLabel: _ctx.$t("captcha.errorLabel"),
                  solvedLabel: _ctx.$t("captcha.solvedLabel"),
                  onValidation: captchaValidation
                }, null, 8, ["initState", "verifyingLabel", "errorLabel", "solvedLabel"])
              ]),
              createBaseVNode("div", null, [
                createVNode(_component_Button, {
                  disabled: !canSend.value,
                  label: _ctx.$t("Contact.send"),
                  class: normalizeClass(["w-full! h-[56px] rounded-xl! bg-surface-950! border! border-surface-950! text-white!", [{ "hover:bg-surface-950/80!": canSend.value }]]),
                  icon: "pi pi-send",
                  loading: isSending.value,
                  onClick: sendInfo
                }, null, 8, ["disabled", "label", "class", "loading"])
              ])
            ])
          ]),
          _: 1
        }, 8, ["visible", "showCloseIcon", "dismissable", "header"])
      ], 64);
    };
  }
};
const _hoisted_1$f = { class: "relative min-h-screen lg:min-h-0 flex lg:flex-row flex-col" };
const _hoisted_2$f = { class: "flex lg:flex lg:flex-row flex-col justify-center md:justify-normal h-full flex-1" };
const _hoisted_3$f = { class: "relative flex-1 flex items-center justify-center z-[2]" };
const _hoisted_4$d = { class: "flex items-center justify-center h-full" };
const _hoisted_5$d = { class: "w-full max-w-2xl lg:max-w-3xl px-10 py-34 lg:px-14 xl:px-18 text-center lg:text-left" };
const _hoisted_6$d = { class: "text-4xl xl:text-5xl font-light text-surface-0 lg:text-surface-900 dark:lg:text-surface-200 mb-10 !leading-tight" };
const _hoisted_7$c = { key: 1 };
const _hoisted_8$c = {
  key: 0,
  class: "text-surface-0/90 lg:text-surface-700 dark:lg:text-surface-400 text-xl leading-normal mb-8 max-w-xl lg:max-w-none"
};
const _hoisted_9$b = { class: "absolute lg:relative inset-0 lg:inset-auto flex-1" };
const _hoisted_10$a = { class: "h-full w-full xl:[clip-path:polygon(12%_0,100%_0%,100%_100%,0_100%)]" };
const _hoisted_11$9 = ["src", "poster"];
const _hoisted_12$7 = ["src"];
const _sfc_main$g = {
  __name: "AppTemplate1Hero",
  setup(__props) {
    const { locale } = useI18n();
    const { appModules: appModules2, appConfig: appConfig2 } = useConfig();
    function parseBoldText(text) {
      const lines = text.split("\n");
      const result = [];
      for (const line of lines) {
        const lineResult = [];
        let currentIndex = 0;
        let inBold = false;
        let boldStart = -1;
        for (let i = 0; i < line.length; i++) {
          if (!inBold && line.slice(i, i + 2) === "**") {
            if (i > currentIndex) {
              const normalText = line.slice(currentIndex, i);
              if (normalText) {
                lineResult.push({
                  str: normalText
                });
              }
            }
            inBold = true;
            boldStart = i + 2;
            i++;
            currentIndex = i + 1;
            continue;
          }
          if (inBold && line.slice(i, i + 2) === "**") {
            const boldText = line.slice(boldStart, i);
            if (boldText) {
              lineResult.push({
                str: boldText,
                isBold: true
              });
            }
            inBold = false;
            i++;
            currentIndex = i + 1;
            continue;
          }
        }
        if (currentIndex < line.length) {
          const remainingText = line.slice(currentIndex);
          if (remainingText) {
            lineResult.push({
              str: remainingText
            });
          }
        }
        result.push(lineResult);
      }
      return result;
    }
    const titleInfo = computed(() => {
      if (typeof appConfig2.value?.bannerTitle?.[locale.value] === "string") {
        return parseBoldText(appConfig2.value.bannerTitle[locale.value]);
      }
      return [];
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        _cache[2] || (_cache[2] = createBaseVNode("div", { class: "h-20 xl:hidden" }, null, -1)),
        createBaseVNode("div", _hoisted_1$f, [
          createBaseVNode("div", _hoisted_2$f, [
            createBaseVNode("div", _hoisted_3$f, [
              createBaseVNode("div", _hoisted_4$d, [
                createBaseVNode("div", _hoisted_5$d, [
                  _cache[0] || (_cache[0] = createBaseVNode("div", { class: "h-20" }, null, -1)),
                  createBaseVNode("h1", _hoisted_6$d, [
                    titleInfo.value.length ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(titleInfo.value, (arr, i) => {
                      return openBlock(), createElementBlock("div", {
                        key: `title_${i}`
                      }, [
                        arr.length > 0 ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(arr, (item, j) => {
                          return openBlock(), createElementBlock("span", {
                            key: `title_${i}_${j}`,
                            class: normalizeClass([{ "font-bold": item.isBold }])
                          }, toDisplayString(item.str), 3);
                        }), 128)) : (openBlock(), createElementBlock("br", _hoisted_7$c))
                      ]);
                    }), 128)) : createCommentVNode("", true)
                  ]),
                  unref(appConfig2)?.bannerSubTitle?.[unref(locale)] ? (openBlock(), createElementBlock("p", _hoisted_8$c, toDisplayString(unref(appConfig2).bannerSubTitle[unref(locale)]), 1)) : createCommentVNode("", true)
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_9$b, [
              _cache[1] || (_cache[1] = createBaseVNode("div", { class: "absolute lg:hidden inset-0 bg-surface-900/60 z-[1]" }, null, -1)),
              createBaseVNode("div", _hoisted_10$a, [
                unref(appConfig2)?.bannerVideo && unref(appModules2)?.includes("herov") ? (openBlock(), createElementBlock("video", {
                  key: 0,
                  class: "w-full h-full object-cover",
                  src: unref(appConfig2).bannerVideo,
                  poster: unref(appConfig2)?.bannerPoster,
                  "x5-video-player-type": "h5",
                  autoplay: "",
                  "webkit-playsinline": "",
                  playsinline: "",
                  muted: "",
                  loop: ""
                }, null, 8, _hoisted_11$9)) : (openBlock(), createElementBlock("img", {
                  key: 1,
                  class: "w-full h-full object-cover",
                  src: unref(appConfig2)?.bannerPoster ? unref(appConfig2).bannerPoster : unref(bannerImg)
                }, null, 8, _hoisted_12$7))
              ])
            ])
          ])
        ])
      ], 64);
    };
  }
};
const _hoisted_1$e = { class: "px-6 md:px-12 lg:px-20 pt-20 md:pt-25 text-center" };
const _hoisted_2$e = { class: "flex flex-col gap-6" };
const _hoisted_3$e = { class: "flex flex-col items-center gap-4" };
const _hoisted_4$c = { class: "font-bold text-3xl leading-tight" };
const _hoisted_5$c = { class: "text-primary" };
const _hoisted_6$c = { class: "mb-5 max-w-md mx-auto" };
const _hoisted_7$b = { class: "max-w-md mx-auto flex flex-col gap-5" };
const _hoisted_8$b = { class: "break-all text-surface-900 dark:text-surface-200 text-xl font-medium leading-tight" };
const _hoisted_9$a = { class: "break-all text-surface-500 dark:text-surface-200 leading-normal text-justify" };
const _hoisted_10$9 = {
  key: 1,
  class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
};
const _sfc_main$f = {
  __name: "AppTemplate1ServiceGrid",
  setup(__props) {
    const { locale } = useI18n();
    const { appConfig: appConfig2 } = useConfig();
    const businessList = computed(() => {
      if (appConfig2.value?.businessList && appConfig2.value.businessList.length > 0) {
        return appConfig2.value.businessList;
      }
      return [];
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$e, [
        createBaseVNode("div", _hoisted_2$e, [
          createBaseVNode("div", _hoisted_3$e, [
            createBaseVNode("div", _hoisted_4$c, [
              createBaseVNode("span", _hoisted_5$c, toDisplayString(_ctx.$t("Service.title")), 1)
            ])
          ]),
          businessList.value.length > 0 ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(["grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", [{ "!grid-cols-1": businessList.value.length === 1, "!grid-cols-2": businessList.value.length === 2 }]])
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(businessList.value, (item, i) => {
              return openBlock(), createElementBlock("div", {
                key: `business_${i}`,
                class: "w-full rounded-md p-4"
              }, [
                createBaseVNode("div", _hoisted_6$c, [
                  createBaseVNode("div", {
                    class: "pt-[56.25%] bg-cover bg-no-repeat bg-center rounded-lg bg-surface-0 shadow",
                    style: normalizeStyle({ backgroundImage: `url(${item.icon})` })
                  }, null, 4)
                ]),
                createBaseVNode("div", _hoisted_7$b, [
                  createBaseVNode("div", _hoisted_8$b, toDisplayString(item.title?.[unref(locale)]), 1),
                  createBaseVNode("p", _hoisted_9$a, toDisplayString(item.desc?.[unref(locale)]), 1)
                ])
              ]);
            }), 128))
          ], 2)) : (openBlock(), createElementBlock("div", _hoisted_10$9, [..._cache[0] || (_cache[0] = [
            createStaticVNode('<div class="w-full pt-[40%] bg-gray-300 rounded-md"></div><div class="w-full pt-[40%] bg-gray-300 rounded-md"></div><div class="w-full pt-[40%] bg-gray-300 rounded-md"></div><div class="w-full pt-[40%] bg-gray-300 rounded-md hidden md:block"></div><div class="w-full pt-[40%] bg-gray-300 rounded-md hidden md:block"></div><div class="w-full pt-[40%] bg-gray-300 rounded-md hidden md:block"></div>', 6)
          ])]))
        ])
      ]);
    };
  }
};
const _hoisted_1$d = {
  key: 0,
  class: "px-6 pt-20 md:pt-25 md:px-12 lg:px-20"
};
const _hoisted_2$d = { class: "text-center flex flex-col items-center gap-4" };
const _hoisted_3$d = { class: "text-primary font-bold text-3xl leading-tight mb-5" };
const _hoisted_4$b = { class: "w-full grid grid-cols-1 sm:grid-cols-11 gap-4 max-w-[1280px] mx-auto" };
const _hoisted_5$b = { class: "sm:col-start-2 sm:col-span-9 w-full relative pb-[58%]" };
const _hoisted_6$b = { class: "absolute w-full h-full" };
const _sfc_main$e = {
  __name: "AppTemplate1Map",
  setup(__props) {
    const { appConfig: appConfig2, countryCode: countryCode2 } = useConfig();
    const location = computed(() => {
      const {
        lat = 40.689247,
        lng = -74.044502
      } = appConfig2.value?.location || {};
      return { lat, lng };
    });
    return (_ctx, _cache) => {
      const _component_DynamicMap = _sfc_main$j;
      return location.value ? (openBlock(), createElementBlock("div", _hoisted_1$d, [
        createBaseVNode("div", _hoisted_2$d, [
          createBaseVNode("div", _hoisted_3$d, toDisplayString(_ctx.$t("Address.title")), 1),
          createBaseVNode("div", _hoisted_4$b, [
            createBaseVNode("div", _hoisted_5$b, [
              createBaseVNode("div", _hoisted_6$b, [
                createVNode(_component_DynamicMap, {
                  location: location.value,
                  useCNMap: unref(countryCode2) === "CN"
                }, null, 8, ["location", "useCNMap"])
              ])
            ])
          ])
        ])
      ])) : createCommentVNode("", true);
    };
  }
};
const _hoisted_1$c = { class: "px-6 pt-20 md:pt-25 md:px-12 lg:px-20" };
const _hoisted_2$c = { class: "text-center flex flex-col items-center gap-4" };
const _hoisted_3$c = { class: "text-primary font-bold text-3xl leading-tight" };
const _hoisted_4$a = { class: "text-surface-900 dark:text-surface-200 font-bold text-2xl leading-tight" };
const _hoisted_5$a = {
  key: 0,
  class: "w-full max-w-7xl md:px-20 pb-6 md:pb-12"
};
const _hoisted_6$a = { class: "flex flex-col gap-4" };
const _hoisted_7$a = { class: "flex flex-col gap-4" };
const _hoisted_8$a = { class: "flex flex-col md:flex-row gap-4" };
const _hoisted_9$9 = { class: "flex items-center gap-4 flex-1" };
const _hoisted_10$8 = { class: "w-[180px] text-surface-900 dark:text-surface-200 font-medium text-base leading-tight" };
const _hoisted_11$8 = { class: "flex-1 text-surface-500 dark:text-surface-200 text-base leading-tight text-left whitespace-pre-wrap" };
const _hoisted_12$6 = {
  key: 0,
  class: "w-60 h-60 md:w-40 md:h-40 lg:w-30 lg:h-30 mx-auto"
};
const _hoisted_13$5 = {
  key: 1,
  class: "w-60 min-h-60 md:w-40 md:min-h-40 lg:w-30 lg:min-h-30 mx-auto flex items-center justify-center p-3"
};
const _hoisted_14$5 = { class: "flex items-center justify-center mx-auto w-60 md:w-40 lg:w-30 px-3 py-1 border border-primary text-primary rounded-sm mt-2" };
const _hoisted_15$4 = { class: "grid grid-cols-2 gap-4" };
const _sfc_main$d = {
  __name: "AppTemplate1CompanyInfo",
  setup(__props) {
    const { locale, t } = useI18n();
    const { appConfig: appConfig2 } = useConfig();
    const toast = useToast();
    const dialogVisible = ref(false);
    const isSending = ref(false);
    const captchaRef = ref();
    const token = ref("");
    const cCompanyName = ref("");
    const cName = ref("");
    const cEmail = ref("");
    const cPhoneNumber = ref("");
    const cContent = ref("");
    const infoList = computed(() => {
      const res = [];
      [
        "companyName",
        "companyAddress",
        "postalCode",
        "businessHours",
        "dateOfEstablishment",
        "capital",
        "legalRepresentative",
        "phoneNumber",
        "faxNumber",
        "email",
        "business"
      ].forEach((k) => {
        if (appConfig2.value?.[k]) {
          res.push({
            key: k,
            value: appConfig2.value[k]
          });
        }
      });
      return res;
    });
    const socialList = computed(() => {
      const res = [];
      [
        "twitter",
        "facebook",
        "tiktok",
        "youtube",
        "line",
        "redbook",
        "weibo",
        "qq",
        "wechat"
      ].forEach((k) => {
        if (appConfig2.value?.[k]) {
          res.push({
            key: k,
            type: appConfig2.value[k + "Type"],
            value: appConfig2.value[k],
            isCustomIcon: [
              "line",
              "redbook",
              "weibo",
              "qq",
              "wechat"
            ].includes(k)
          });
        }
      });
      return res;
    });
    const canSend = computed(() => {
      return token.value && !isSending.value && cCompanyName.value && cName.value && cEmail.value && isEmail(cEmail.value) && cPhoneNumber.value && cContent.value;
    });
    function captchaValidation(res) {
      token.value = res;
    }
    function showSend() {
      dialogVisible.value = true;
      cCompanyName.value = "";
      cName.value = "";
      cPhoneNumber.value = "";
      cEmail.value = "";
      cContent.value = "";
    }
    async function sendInfo() {
      if (isSending.value || !canSend.value) {
        return;
      }
      isSending.value = true;
      try {
        const res = await $fetch("/api/contact", {
          method: "POST",
          body: {
            company: cCompanyName.value,
            name: cName.value,
            phone: cPhoneNumber.value,
            email: cEmail.value,
            content: cContent.value,
            token: token.value
          }
        });
        if (res.success) {
          dialogVisible.value = false;
          toast.add({ severity: "success", summary: "Success", detail: t("Contact.sendSuccess"), life: 5e3 });
        } else {
          toast.add({ severity: "error", summary: "Error", detail: t("Contact.sendFailed"), life: 5e3 });
        }
      } catch (e) {
        toast.add({ severity: "error", summary: "Error", detail: t("Contact.sendFailed"), life: 5e3 });
      }
      isSending.value = false;
    }
    return (_ctx, _cache) => {
      const _component_Image = script$8;
      const _component_DeferredContent = script$4;
      const _component_Button = script$2;
      const _component_InputText = script$f;
      const _component_IftaLabel = script$e;
      const _component_Textarea = script$g;
      const _component_Captcha = _sfc_main$i;
      const _component_Drawer = script$h;
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1$c, [
          createBaseVNode("div", _hoisted_2$c, [
            createBaseVNode("div", _hoisted_3$c, toDisplayString(_ctx.$t("Contact.title")), 1),
            createBaseVNode("div", _hoisted_4$a, toDisplayString(_ctx.$t("Contact.subtitle")), 1),
            infoList.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_5$a, [
              createBaseVNode("div", _hoisted_6$a, [
                _cache[7] || (_cache[7] = createBaseVNode("div", { class: "border-t border-[#cbd5e1] dark:border-[#52525b]" }, null, -1)),
                createBaseVNode("div", _hoisted_7$a, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(infoList.value, (item) => {
                    return openBlock(), createElementBlock(Fragment, null, [
                      createBaseVNode("div", _hoisted_8$a, [
                        createBaseVNode("div", _hoisted_9$9, [
                          createBaseVNode("div", _hoisted_10$8, toDisplayString(_ctx.$t(`Contact.${item.key}`)), 1),
                          createBaseVNode("pre", _hoisted_11$8, toDisplayString(item.value?.[unref(locale)]), 1)
                        ])
                      ]),
                      _cache[6] || (_cache[6] = createBaseVNode("div", { class: "border-t border-[#cbd5e1] dark:border-[#52525b]" }, null, -1))
                    ], 64);
                  }), 256))
                ])
              ])
            ])) : createCommentVNode("", true),
            socialList.value.length > 0 ? (openBlock(), createElementBlock("div", {
              key: 1,
              class: normalizeClass(["grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-x-20 md:gap-y-10 mb-10 mx-auto max-w-7xl px-6", [{ "!grid-cols-1": socialList.value.length === 1, "!grid-cols-2": socialList.value.length === 2 }]])
            }, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(socialList.value, (item, i) => {
                return openBlock(), createElementBlock("div", {
                  key: `social_${i}`,
                  class: "!mx-auto !max-w-md w-full"
                }, [
                  item.type === "image" ? (openBlock(), createElementBlock("div", _hoisted_12$6, [
                    createVNode(_component_DeferredContent, null, {
                      default: withCtx(() => [
                        createVNode(_component_Image, {
                          src: item.value,
                          alt: item.key,
                          imageClass: "w-fulll h-full object-contain"
                        }, null, 8, ["src", "alt"])
                      ]),
                      _: 2
                    }, 1024)
                  ])) : (openBlock(), createElementBlock("div", _hoisted_13$5, toDisplayString(item.value), 1)),
                  createBaseVNode("div", _hoisted_14$5, [
                    item.isCustomIcon ? (openBlock(), createElementBlock("i", {
                      key: 0,
                      class: normalizeClass(["iconfont !text-2xl", `icon-${item.key}`])
                    }, null, 2)) : (openBlock(), createElementBlock("i", {
                      key: 1,
                      class: normalizeClass(["pi !text-2xl", `pi-${item.key}`])
                    }, null, 2))
                  ])
                ]);
              }), 128))
            ], 2)) : createCommentVNode("", true),
            createVNode(_component_Button, {
              label: _ctx.$t("Contact.button"),
              rounded: "",
              class: "mt-4 !px-10",
              onClick: showSend
            }, null, 8, ["label"])
          ])
        ]),
        createVNode(_component_Drawer, {
          visible: dialogVisible.value,
          "onUpdate:visible": _cache[5] || (_cache[5] = ($event) => dialogVisible.value = $event),
          showCloseIcon: !isSending.value,
          dismissable: !isSending.value,
          header: _ctx.$t("Contact.button"),
          position: "bottom",
          style: { "height": "auto" },
          blockScroll: true,
          "pt:title:class": "text-white",
          "pt:root:class": "!border-none",
          "pt:root:style": "background-image: radial-gradient(circle at right bottom, var(--p-primary-400), var(--p-primary-600))"
        }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_15$4, [
              createVNode(_component_IftaLabel, { class: "w-full" }, {
                default: withCtx(() => [
                  createVNode(_component_InputText, {
                    class: "w-full",
                    disabled: isSending.value,
                    modelValue: cCompanyName.value,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => cCompanyName.value = $event),
                    modelModifiers: { trim: true },
                    autocomplete: "off"
                  }, null, 8, ["disabled", "modelValue"]),
                  createBaseVNode("label", null, toDisplayString(_ctx.$t("Contact.yourCompany")), 1)
                ]),
                _: 1
              }),
              createVNode(_component_IftaLabel, { class: "w-full" }, {
                default: withCtx(() => [
                  createVNode(_component_InputText, {
                    class: "w-full",
                    disabled: isSending.value,
                    modelValue: cName.value,
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => cName.value = $event),
                    modelModifiers: { trim: true },
                    autocomplete: "off"
                  }, null, 8, ["disabled", "modelValue"]),
                  createBaseVNode("label", null, toDisplayString(_ctx.$t("Contact.yourName")), 1)
                ]),
                _: 1
              }),
              createVNode(_component_IftaLabel, { class: "w-full" }, {
                default: withCtx(() => [
                  createVNode(_component_InputText, {
                    class: "w-full",
                    disabled: isSending.value,
                    invalid: cEmail.value !== "" && !unref(isEmail)(cEmail.value),
                    modelValue: cEmail.value,
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => cEmail.value = $event),
                    modelModifiers: { trim: true },
                    autocomplete: "off"
                  }, null, 8, ["disabled", "invalid", "modelValue"]),
                  createBaseVNode("label", null, toDisplayString(_ctx.$t("Contact.yourEmail")), 1)
                ]),
                _: 1
              }),
              createVNode(_component_IftaLabel, { class: "w-full" }, {
                default: withCtx(() => [
                  createVNode(_component_InputText, {
                    class: "w-full",
                    disabled: isSending.value,
                    modelValue: cPhoneNumber.value,
                    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => cPhoneNumber.value = $event),
                    modelModifiers: { trim: true },
                    autocomplete: "off"
                  }, null, 8, ["disabled", "modelValue"]),
                  createBaseVNode("label", null, toDisplayString(_ctx.$t("Contact.yourPhoneNumber")), 1)
                ]),
                _: 1
              }),
              createVNode(_component_IftaLabel, { class: "w-full col-span-full" }, {
                default: withCtx(() => [
                  createVNode(_component_Textarea, {
                    rows: "5",
                    class: "w-full",
                    disabled: isSending.value,
                    modelValue: cContent.value,
                    "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => cContent.value = $event),
                    modelModifiers: { trim: true },
                    style: { "resize": "none" }
                  }, null, 8, ["disabled", "modelValue"]),
                  createBaseVNode("label", null, toDisplayString(_ctx.$t("Contact.consultationContent")), 1)
                ]),
                _: 1
              }),
              createBaseVNode("div", null, [
                createVNode(_component_Captcha, {
                  ref_key: "captchaRef",
                  ref: captchaRef,
                  initState: _ctx.$t("captcha.initState"),
                  verifyingLabel: _ctx.$t("captcha.verifyingLabel"),
                  errorLabel: _ctx.$t("captcha.errorLabel"),
                  solvedLabel: _ctx.$t("captcha.solvedLabel"),
                  onValidation: captchaValidation
                }, null, 8, ["initState", "verifyingLabel", "errorLabel", "solvedLabel"])
              ]),
              createBaseVNode("div", null, [
                createVNode(_component_Button, {
                  disabled: !canSend.value,
                  label: _ctx.$t("Contact.send"),
                  class: normalizeClass(["!w-full h-[56px] !rounded-xl !bg-surface-950 !border !border-surface-950 !text-white", [{ "hover:!bg-surface-950/80": canSend.value }]]),
                  icon: "pi pi-send",
                  loading: isSending.value,
                  onClick: sendInfo
                }, null, 8, ["disabled", "label", "class", "loading"])
              ])
            ])
          ]),
          _: 1
        }, 8, ["visible", "showCloseIcon", "dismissable", "header"])
      ], 64);
    };
  }
};
const _hoisted_1$b = { class: "relative" };
const _hoisted_2$b = { class: "absolute w-full h-full overflow-hidden" };
const _hoisted_3$b = ["src", "poster"];
const _hoisted_4$9 = ["src"];
const _hoisted_5$9 = { class: "relative flex items-center justify-center w-full h-full bg-gray-900/50 min-h-[48rem] py-20" };
const _hoisted_6$9 = { class: "text-center max-w-5xl mx-auto h-full" };
const _hoisted_7$9 = { class: "text-5xl font-light text-gray-200 leading-tight mb-18 px-16" };
const _hoisted_8$9 = { key: 1 };
const _hoisted_9$8 = {
  key: 0,
  class: "font-normal text-2xl leading-normal md:mt-4 text-gray-300 px-8"
};
const _sfc_main$c = {
  __name: "AppTemplate2Hero",
  setup(__props) {
    const { locale } = useI18n();
    const { appModules: appModules2, appConfig: appConfig2 } = useConfig();
    function parseBoldText(text) {
      const lines = text.split("\n");
      const result = [];
      for (const line of lines) {
        const lineResult = [];
        let currentIndex = 0;
        let inBold = false;
        let boldStart = -1;
        for (let i = 0; i < line.length; i++) {
          if (!inBold && line.slice(i, i + 2) === "**") {
            if (i > currentIndex) {
              const normalText = line.slice(currentIndex, i);
              if (normalText) {
                lineResult.push({
                  str: normalText
                });
              }
            }
            inBold = true;
            boldStart = i + 2;
            i++;
            currentIndex = i + 1;
            continue;
          }
          if (inBold && line.slice(i, i + 2) === "**") {
            const boldText = line.slice(boldStart, i);
            if (boldText) {
              lineResult.push({
                str: boldText,
                isBold: true
              });
            }
            inBold = false;
            i++;
            currentIndex = i + 1;
            continue;
          }
        }
        if (currentIndex < line.length) {
          const remainingText = line.slice(currentIndex);
          if (remainingText) {
            lineResult.push({
              str: remainingText
            });
          }
        }
        result.push(lineResult);
      }
      return result;
    }
    const titleInfo = computed(() => {
      if (typeof appConfig2.value?.bannerTitle?.[locale.value] === "string") {
        return parseBoldText(appConfig2.value.bannerTitle[locale.value]);
      }
      return [];
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$b, [
        createBaseVNode("div", _hoisted_2$b, [
          unref(appConfig2)?.bannerVideo && unref(appModules2)?.includes("herov") ? (openBlock(), createElementBlock("video", {
            key: 0,
            class: "w-full h-full object-cover",
            src: unref(appConfig2).bannerVideo,
            poster: unref(appConfig2)?.bannerPoster,
            "x5-video-player-type": "h5",
            autoplay: "",
            "webkit-playsinline": "",
            playsinline: "",
            muted: "",
            loop: ""
          }, null, 8, _hoisted_3$b)) : (openBlock(), createElementBlock("img", {
            key: 1,
            class: "w-full h-full object-cover",
            src: unref(appConfig2)?.bannerPoster ? unref(appConfig2).bannerPoster : unref(bannerImg)
          }, null, 8, _hoisted_4$9))
        ]),
        createBaseVNode("div", _hoisted_5$9, [
          createBaseVNode("div", _hoisted_6$9, [
            createBaseVNode("h1", _hoisted_7$9, [
              titleInfo.value.length ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(titleInfo.value, (arr, i) => {
                return openBlock(), createElementBlock("div", {
                  key: `title_${i}`
                }, [
                  arr.length > 0 ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(arr, (item, j) => {
                    return openBlock(), createElementBlock("span", {
                      key: `title_${i}_${j}`,
                      class: normalizeClass([{ "font-bold": item.isBold }])
                    }, toDisplayString(item.str), 3);
                  }), 128)) : (openBlock(), createElementBlock("br", _hoisted_8$9))
                ]);
              }), 128)) : createCommentVNode("", true)
            ]),
            unref(appConfig2)?.bannerSubTitle?.[unref(locale)] ? (openBlock(), createElementBlock("p", _hoisted_9$8, toDisplayString(unref(appConfig2).bannerSubTitle[unref(locale)]), 1)) : createCommentVNode("", true)
          ])
        ])
      ]);
    };
  }
};
const _hoisted_1$a = { class: "px-6 md:px-12 lg:px-20 pt-20 md:pt-25 text-center" };
const _hoisted_2$a = { class: "flex flex-col gap-6" };
const _hoisted_3$a = { class: "flex flex-col items-center gap-4" };
const _hoisted_4$8 = { class: "font-bold text-3xl leading-tight" };
const _hoisted_5$8 = { class: "text-primary-500" };
const _hoisted_6$8 = { class: "font-bold" };
const _hoisted_7$8 = { class: "m-0" };
const _hoisted_8$8 = {
  key: 1,
  class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
};
const _sfc_main$b = {
  __name: "AppTemplate2ServiceGrid",
  setup(__props) {
    const { locale } = useI18n();
    const { appConfig: appConfig2 } = useConfig();
    const businessList = computed(() => {
      if (appConfig2.value?.businessList && appConfig2.value.businessList.length > 0) {
        return appConfig2.value.businessList;
      }
      return [];
    });
    return (_ctx, _cache) => {
      const _component_Card = script$i;
      return openBlock(), createElementBlock("div", _hoisted_1$a, [
        createBaseVNode("div", _hoisted_2$a, [
          createBaseVNode("div", _hoisted_3$a, [
            createBaseVNode("div", _hoisted_4$8, [
              createBaseVNode("span", _hoisted_5$8, toDisplayString(_ctx.$t("Service.title")), 1)
            ])
          ]),
          businessList.value.length > 0 ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(["grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5", [{ "!grid-cols-1": businessList.value.length === 1, "!grid-cols-2": businessList.value.length === 2 }]])
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(businessList.value, (item, i) => {
              return openBlock(), createBlock(_component_Card, {
                key: `business_${i}`,
                class: "dark:bg-gray-200! mx-auto max-w-md w-full rounded-none! overflow-hidden"
              }, {
                header: withCtx(() => [
                  createBaseVNode("div", {
                    style: normalizeStyle({ backgroundImage: `url(${item.icon})` }),
                    class: "w-full h-50 bg-cover bg-no-repeat bg-center"
                  }, null, 4)
                ]),
                title: withCtx(() => [
                  createBaseVNode("span", _hoisted_6$8, toDisplayString(item.title?.[unref(locale)]), 1)
                ]),
                content: withCtx(() => [
                  createBaseVNode("p", _hoisted_7$8, toDisplayString(item.desc?.[unref(locale)]), 1)
                ]),
                _: 2
              }, 1024);
            }), 128))
          ], 2)) : (openBlock(), createElementBlock("div", _hoisted_8$8, [..._cache[0] || (_cache[0] = [
            createStaticVNode('<div class="w-full pt-[40%] bg-gray-300 rounded-md"></div><div class="w-full pt-[40%] bg-gray-300 rounded-md"></div><div class="w-full pt-[40%] bg-gray-300 rounded-md"></div><div class="w-full pt-[40%] bg-gray-300 rounded-md hidden md:block"></div><div class="w-full pt-[40%] bg-gray-300 rounded-md hidden md:block"></div><div class="w-full pt-[40%] bg-gray-300 rounded-md hidden md:block"></div>', 6)
          ])]))
        ])
      ]);
    };
  }
};
const _hoisted_1$9 = { class: "relative w-full overflow-hidden" };
const _hoisted_2$9 = { class: "relative w-full min-h-[48rem] overflow-hidden" };
const _hoisted_3$9 = { class: "absolute inset-0 z-0 pointer-events-none" };
const _hoisted_4$7 = ["src", "poster"];
const _hoisted_5$7 = ["src"];
const _hoisted_6$7 = { class: "relative flex items-center justify-center w-full min-h-[48rem] px-4 pb-48" };
const _hoisted_7$7 = { class: "container mx-auto max-w-6xl text-center" };
const _hoisted_8$7 = { class: "text-3xl md:text-4xl xl:text-5xl font-light text-white leading-tight mb-16 max-w-full lg:max-w-[80%] mx-auto" };
const _hoisted_9$7 = { key: 1 };
const _hoisted_10$7 = {
  key: 0,
  class: "font-normal text-lg md:text-xl xl:text-2xl leading-normal md:mt-4 text-white/90 max-w-full lg:max-w-[90%] mx-auto whitespace-pre-wrap"
};
const _hoisted_11$7 = {
  key: 1,
  class: "mt-12 bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
};
const _sfc_main$a = {
  __name: "AppTemplate3Hero",
  setup(__props) {
    const { locale } = useI18n();
    const { appModules: appModules2, appConfig: appConfig2 } = useConfig();
    function parseBoldText(text) {
      const lines = text.split("\n");
      const result = [];
      for (const line of lines) {
        const lineResult = [];
        let currentIndex = 0;
        let inBold = false;
        let boldStart = -1;
        for (let i = 0; i < line.length; i++) {
          if (!inBold && line.slice(i, i + 2) === "**") {
            if (i > currentIndex) {
              const normalText = line.slice(currentIndex, i);
              if (normalText) {
                lineResult.push({
                  str: normalText
                });
              }
            }
            inBold = true;
            boldStart = i + 2;
            i++;
            currentIndex = i + 1;
            continue;
          }
          if (inBold && line.slice(i, i + 2) === "**") {
            const boldText = line.slice(boldStart, i);
            if (boldText) {
              lineResult.push({
                str: boldText,
                isBold: true
              });
            }
            inBold = false;
            i++;
            currentIndex = i + 1;
            continue;
          }
        }
        if (currentIndex < line.length) {
          const remainingText = line.slice(currentIndex);
          if (remainingText) {
            lineResult.push({
              str: remainingText
            });
          }
        }
        result.push(lineResult);
      }
      return result;
    }
    const titleInfo = computed(() => {
      if (typeof appConfig2.value?.bannerTitle?.[locale.value] === "string") {
        return parseBoldText(appConfig2.value.bannerTitle[locale.value]);
      }
      return [];
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$9, [
        createBaseVNode("div", _hoisted_2$9, [
          createBaseVNode("div", _hoisted_3$9, [
            unref(appConfig2)?.bannerVideo && unref(appModules2)?.includes("herov") ? (openBlock(), createElementBlock("video", {
              key: 0,
              class: "w-full h-full object-cover",
              src: unref(appConfig2).bannerVideo,
              poster: unref(appConfig2)?.bannerPoster,
              "x5-video-player-type": "h5",
              autoplay: "",
              "webkit-playsinline": "",
              playsinline: "",
              muted: "",
              loop: ""
            }, null, 8, _hoisted_4$7)) : (openBlock(), createElementBlock("img", {
              key: 1,
              class: "w-full h-full object-cover",
              src: unref(appConfig2)?.bannerPoster ? unref(appConfig2).bannerPoster : unref(bannerImg)
            }, null, 8, _hoisted_5$7)),
            _cache[0] || (_cache[0] = createBaseVNode("div", { class: "absolute inset-0 bg-black/60" }, null, -1))
          ]),
          _cache[1] || (_cache[1] = createBaseVNode("div", { class: "absolute -bottom-[1px] left-0 right-0 pointer-events-none" }, [
            createBaseVNode("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 1440 262",
              class: "w-full h-48",
              preserveAspectRatio: "none"
            }, [
              createBaseVNode("path", {
                d: "M0,129L80,114C160,99,320,68,480,76C640,84,800,126,960,144C1120,162,1280,156,1360,153L1440,150L1440,262L1360,262C1280,262,1120,262,960,262C800,262,640,262,480,262C320,262,160,262,80,262L0,262Z",
                fill: "#f8fafc",
                class: "dark:fill-[#161616]"
              })
            ])
          ], -1)),
          createBaseVNode("div", _hoisted_6$7, [
            createBaseVNode("div", _hoisted_7$7, [
              createBaseVNode("h1", _hoisted_8$7, [
                titleInfo.value.length ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(titleInfo.value, (arr, i) => {
                  return openBlock(), createElementBlock("div", {
                    key: `title_${i}`
                  }, [
                    arr.length > 0 ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(arr, (item, j) => {
                      return openBlock(), createElementBlock("span", {
                        key: `title_${i}_${j}`,
                        class: normalizeClass([{ "font-bold": item.isBold }])
                      }, toDisplayString(item.str), 3);
                    }), 128)) : (openBlock(), createElementBlock("br", _hoisted_9$7))
                  ]);
                }), 128)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                  createTextVNode(toDisplayString(unref(appConfig2)?.bannerTitle?.[unref(locale)]), 1)
                ], 64))
              ]),
              unref(appConfig2)?.bannerSubTitle?.[unref(locale)] ? (openBlock(), createElementBlock("p", _hoisted_10$7, toDisplayString(unref(appConfig2).bannerSubTitle[unref(locale)]), 1)) : createCommentVNode("", true),
              unref(appConfig2)?.bannerButton?.[unref(locale)] ? (openBlock(), createElementBlock("button", _hoisted_11$7, toDisplayString(unref(appConfig2).bannerButton[unref(locale)]), 1)) : createCommentVNode("", true)
            ])
          ])
        ])
      ]);
    };
  }
};
const setInterval = globalThis.setInterval;
const _hoisted_1$8 = { class: "w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-20 md:pt-25" };
const _hoisted_2$8 = { class: "text-3xl font-bold mb-12 text-center text-primary" };
const _hoisted_3$8 = { class: "flex flex-col lg:flex-row rounded-lg overflow-hidden" };
const _hoisted_4$6 = { class: "lg:w-1/3" };
const _hoisted_5$6 = { class: "bg-white dark:bg-gray-800 shadow-md overflow-hidden" };
const _hoisted_6$6 = ["onMouseenter", "onTouchstart"];
const _hoisted_7$6 = { class: "font-semibold" };
const _hoisted_8$6 = {
  key: 0,
  class: "px-6 py-4 flex-1 flex items-center"
};
const _hoisted_9$6 = {
  key: 1,
  class: "px-6 py-4 flex-1 flex items-center"
};
const _hoisted_10$6 = {
  key: 2,
  class: "px-6 py-4 flex-1 flex items-center"
};
const _hoisted_11$6 = { class: "lg:w-2/3" };
const _hoisted_12$5 = { class: "relative overflow-hidden shadow-md h-[400px]" };
const _hoisted_13$4 = { class: "absolute inset-0 bg-gray-200 dark:bg-gray-700" };
const _hoisted_14$4 = ["src"];
const _hoisted_15$3 = {
  key: 1,
  class: "w-full h-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center"
};
const _hoisted_16$3 = { class: "absolute bottom-0 left-0 right-0 bg-black/60 p-6" };
const _hoisted_17$2 = { class: "text-white whitespace-pre-wrap" };
const _sfc_main$9 = {
  __name: "AppTemplate3ServiceGrid",
  setup(__props) {
    const { locale } = useI18n();
    const { appConfig: appConfig2 } = useConfig();
    const hoveredIndex = ref(0);
    let intervalTimer = null;
    const businessList = computed(() => {
      if (appConfig2.value?.businessList && appConfig2.value.businessList.length > 0) {
        return appConfig2.value.businessList;
      }
      return [];
    });
    const startAutoSwitch = () => {
      if (intervalTimer) {
        clearInterval(intervalTimer);
        intervalTimer = null;
      }
      intervalTimer = setInterval(() => {
        if (businessList.value.length > 0) {
          hoveredIndex.value = (hoveredIndex.value + 1) % businessList.value.length;
        }
      }, 3e3);
    };
    const stopAutoSwitch = () => {
      if (intervalTimer) {
        clearInterval(intervalTimer);
        intervalTimer = null;
      }
    };
    onMounted(() => {
      startAutoSwitch();
    });
    onUnmounted(() => {
      stopAutoSwitch();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$8, [
        createBaseVNode("h2", _hoisted_2$8, toDisplayString(_ctx.$t("Service.title")), 1),
        createBaseVNode("div", _hoisted_3$8, [
          createBaseVNode("div", _hoisted_4$6, [
            createBaseVNode("div", _hoisted_5$6, [
              createBaseVNode("div", {
                class: normalizeClass(["divide-x divide-y divide-gray-200 dark:divide-gray-700 flex flex-row lg:flex-col min-h-20 lg:h-[400px] overflow-y-auto", { "max-h-full": businessList.value.length > 7 }]),
                onMouseenter: _cache[0] || (_cache[0] = ($event) => stopAutoSwitch()),
                onMouseleave: _cache[1] || (_cache[1] = ($event) => startAutoSwitch()),
                onTouchstart: _cache[2] || (_cache[2] = ($event) => stopAutoSwitch()),
                onTouchend: _cache[3] || (_cache[3] = ($event) => startAutoSwitch())
              }, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(businessList.value, (item, index) => {
                  return openBlock(), createElementBlock("div", {
                    key: `service_${index}`,
                    class: normalizeClass(["px-6 py-4 cursor-pointer transition-colors duration-300 flex-1 flex items-center", [{ "bg-primary text-white": hoveredIndex.value === index }]]),
                    onMouseenter: ($event) => hoveredIndex.value = index,
                    onTouchstart: ($event) => hoveredIndex.value = index
                  }, [
                    createBaseVNode("h3", _hoisted_7$6, toDisplayString(item.title?.[unref(locale)]), 1)
                  ], 42, _hoisted_6$6);
                }), 128)),
                businessList.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_8$6, [..._cache[4] || (_cache[4] = [
                  createBaseVNode("h3", { class: "font-semibold" }, "Service 1", -1)
                ])])) : createCommentVNode("", true),
                businessList.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_9$6, [..._cache[5] || (_cache[5] = [
                  createBaseVNode("h3", { class: "font-semibold" }, "Service 2", -1)
                ])])) : createCommentVNode("", true),
                businessList.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_10$6, [..._cache[6] || (_cache[6] = [
                  createBaseVNode("h3", { class: "font-semibold" }, "Service 3", -1)
                ])])) : createCommentVNode("", true)
              ], 34)
            ])
          ]),
          createBaseVNode("div", _hoisted_11$6, [
            createBaseVNode("div", _hoisted_12$5, [
              createBaseVNode("div", _hoisted_13$4, [
                businessList.value.length > 0 && businessList.value[hoveredIndex.value]?.icon ? (openBlock(), createElementBlock("img", {
                  key: 0,
                  src: businessList.value[hoveredIndex.value].icon,
                  alt: "Service background",
                  class: "w-full h-full object-cover"
                }, null, 8, _hoisted_14$4)) : (openBlock(), createElementBlock("div", _hoisted_15$3, [..._cache[7] || (_cache[7] = [
                  createBaseVNode("span", { class: "text-gray-500" }, "No image available", -1)
                ])]))
              ]),
              createBaseVNode("div", _hoisted_16$3, [
                createBaseVNode("p", _hoisted_17$2, toDisplayString(businessList.value.length > 0 ? businessList.value[hoveredIndex.value].desc?.[unref(locale)] : "Service description will appear here"), 1)
              ])
            ])
          ])
        ])
      ]);
    };
  }
};
const _hoisted_1$7 = { class: "w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-20 md:pt-25" };
const _hoisted_2$7 = { class: "text-3xl font-bold mb-12 text-center text-primary" };
const _hoisted_3$7 = { class: "bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md" };
const _hoisted_4$5 = { class: "flex flex-col-reverse lg:flex-row gap-8" };
const _hoisted_5$5 = { class: "lg:w-1/2 flex flex-col" };
const _hoisted_6$5 = { class: "text-xl font-semibold mb-6" };
const _hoisted_7$5 = { class: "flex-1 space-y-4 mb-4" };
const _hoisted_8$5 = { class: "block text-gray-700 dark:text-gray-300 mb-2" };
const _hoisted_9$5 = { class: "block text-gray-700 dark:text-gray-300 mb-2" };
const _hoisted_10$5 = { class: "block text-gray-700 dark:text-gray-300 mb-2" };
const _hoisted_11$5 = { class: "block text-gray-700 dark:text-gray-300 mb-2" };
const _hoisted_12$4 = { class: "lg:w-1/2 bg-gradient-to-r from-primary to-primary-700 text-white p-6 rounded-lg" };
const _hoisted_13$3 = {
  key: 0,
  class: "space-y-6"
};
const _hoisted_14$3 = { class: "font-bold text-white text-md mb-2" };
const _hoisted_15$2 = { class: "text-gray-100 text-sm whitespace-pre-wrap break-all" };
const _hoisted_16$2 = {
  key: 1,
  class: "space-y-6"
};
const _sfc_main$8 = {
  __name: "AppTemplate3CompanyInfo",
  setup(__props) {
    const { locale, t } = useI18n();
    const { appConfig: appConfig2 } = useConfig();
    const toast = useToast();
    const isSending = ref(false);
    const captchaRef = ref();
    const token = ref("");
    const cName = ref("");
    const cEmail = ref("");
    const cPhoneNumber = ref("");
    const cContent = ref("");
    function captchaValidation(res) {
      token.value = res;
    }
    const infoList = computed(() => {
      const res = [];
      [
        "companyName",
        "companyAddress",
        "postalCode",
        "businessHours",
        "dateOfEstablishment",
        "capital",
        "legalRepresentative",
        "phoneNumber",
        "faxNumber",
        "email",
        "business"
      ].forEach((k) => {
        if (appConfig2.value?.[k]) {
          res.push({
            key: k,
            value: appConfig2.value[k]
          });
        }
      });
      return res;
    });
    const canSend = computed(() => {
      return token.value && !isSending.value && cName.value && cEmail.value && isEmail(cEmail.value) && cPhoneNumber.value && cContent.value;
    });
    async function sendInfo() {
      if (isSending.value || !canSend.value) {
        return;
      }
      isSending.value = true;
      try {
        const res = await $fetch("/api/contact", {
          method: "POST",
          body: {
            name: cName.value,
            phone: cPhoneNumber.value,
            email: cEmail.value,
            content: cContent.value,
            token: token.value
          }
        });
        if (res.success) {
          toast.add({ severity: "success", summary: "Success", detail: t("Contact.sendSuccess"), life: 5e3 });
          cName.value = "";
          cEmail.value = "";
          cPhoneNumber.value = "";
          cContent.value = "";
          captchaRef.value.reset();
        } else {
          toast.add({ severity: "error", summary: "Error", detail: t("Contact.sendFailed"), life: 5e3 });
        }
      } catch (e) {
        toast.add({ severity: "error", summary: "Error", detail: t("Contact.sendFailed"), life: 5e3 });
      }
      isSending.value = false;
    }
    return (_ctx, _cache) => {
      const _component_InputText = script$f;
      const _component_Textarea = script$g;
      const _component_Captcha = _sfc_main$i;
      const _component_Button = script$2;
      return openBlock(), createElementBlock("div", _hoisted_1$7, [
        createBaseVNode("h2", _hoisted_2$7, toDisplayString(_ctx.$t("Contact.title")), 1),
        createBaseVNode("div", _hoisted_3$7, [
          createBaseVNode("div", _hoisted_4$5, [
            createBaseVNode("div", _hoisted_5$5, [
              createBaseVNode("h3", _hoisted_6$5, toDisplayString(_ctx.$t("Contact.button")), 1),
              createBaseVNode("div", _hoisted_7$5, [
                createBaseVNode("div", null, [
                  createBaseVNode("label", _hoisted_8$5, toDisplayString(_ctx.$t("Contact.yourName")), 1),
                  createVNode(_component_InputText, {
                    type: "text",
                    class: "w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100",
                    disabled: isSending.value,
                    modelValue: cName.value,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => cName.value = $event),
                    autocomplete: "off"
                  }, null, 8, ["disabled", "modelValue"])
                ]),
                createBaseVNode("div", null, [
                  createBaseVNode("label", _hoisted_9$5, toDisplayString(_ctx.$t("Contact.yourEmail")), 1),
                  createVNode(_component_InputText, {
                    type: "email",
                    class: "w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100",
                    disabled: isSending.value,
                    modelValue: cEmail.value,
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => cEmail.value = $event),
                    autocomplete: "off",
                    invalid: cEmail.value !== "" && !unref(isEmail)(cEmail.value)
                  }, null, 8, ["disabled", "modelValue", "invalid"])
                ]),
                createBaseVNode("div", null, [
                  createBaseVNode("label", _hoisted_10$5, toDisplayString(_ctx.$t("Contact.yourPhoneNumber")), 1),
                  createVNode(_component_InputText, {
                    type: "text",
                    class: "w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100",
                    disabled: isSending.value,
                    modelValue: cPhoneNumber.value,
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => cPhoneNumber.value = $event),
                    autocomplete: "off"
                  }, null, 8, ["disabled", "modelValue"])
                ]),
                createBaseVNode("div", null, [
                  createBaseVNode("label", _hoisted_11$5, toDisplayString(_ctx.$t("Contact.consultationContent")), 1),
                  createVNode(_component_Textarea, {
                    rows: "4",
                    class: "w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100",
                    disabled: isSending.value,
                    modelValue: cContent.value,
                    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => cContent.value = $event),
                    style: { "resize": "none" }
                  }, null, 8, ["disabled", "modelValue"])
                ]),
                createBaseVNode("div", null, [
                  createVNode(_component_Captcha, {
                    ref_key: "captchaRef",
                    ref: captchaRef,
                    initState: _ctx.$t("captcha.initState"),
                    verifyingLabel: _ctx.$t("captcha.verifyingLabel"),
                    errorLabel: _ctx.$t("captcha.errorLabel"),
                    solvedLabel: _ctx.$t("captcha.solvedLabel"),
                    onValidation: captchaValidation
                  }, null, 8, ["initState", "verifyingLabel", "errorLabel", "solvedLabel"])
                ])
              ]),
              createBaseVNode("div", null, [
                createVNode(_component_Button, {
                  type: "button",
                  class: "w-full bg-primary hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-md transition-colors cursor-pointer",
                  disabled: !canSend.value || isSending.value,
                  onClick: sendInfo
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.$t("Contact.send")), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])
              ])
            ]),
            createBaseVNode("div", _hoisted_12$4, [
              infoList.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_13$3, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(infoList.value, (item) => {
                  return openBlock(), createElementBlock("div", {
                    key: `info_${item.key}`,
                    class: "flex flex-col"
                  }, [
                    createBaseVNode("div", _hoisted_14$3, toDisplayString(_ctx.$t(`Contact.${item.key}`)), 1),
                    createBaseVNode("div", _hoisted_15$2, toDisplayString(item.value?.[unref(locale)]), 1)
                  ]);
                }), 128))
              ])) : (openBlock(), createElementBlock("div", _hoisted_16$2, [..._cache[4] || (_cache[4] = [
                createStaticVNode('<div class="flex flex-col"><div class="font-bold text-white text-md mb-2">Title Example</div><div class="text-gray-100 text-sm whitespace-pre-wrap break-all">Content Example</div></div><div class="flex flex-col"><div class="font-bold text-white text-md mb-2">Title Example</div><div class="text-gray-100 text-sm whitespace-pre-wrap break-all">Content Example</div></div><div class="flex flex-col"><div class="font-bold text-white text-md mb-2">Title Example</div><div class="text-gray-100 text-sm whitespace-pre-wrap break-all">Content Example</div></div>', 3)
              ])]))
            ])
          ])
        ])
      ]);
    };
  }
};
const _hoisted_1$6 = { class: "relative w-full h-[calc(100vh-80px)] overflow-hidden" };
const _hoisted_2$6 = { class: "absolute inset-0" };
const _hoisted_3$6 = ["src", "poster"];
const _hoisted_4$4 = ["src"];
const _hoisted_5$4 = { class: "relative flex items-center min-h-screen px-6 lg:px-16" };
const _hoisted_6$4 = { class: "max-w-7xl mx-auto w-full" };
const _hoisted_7$4 = { class: "grid lg:grid-cols-2 gap-12 items-center" };
const _hoisted_8$4 = { class: "space-y-8" };
const _hoisted_9$4 = { class: "text-4xl md:text-5xl xl:text-6xl font-bold text-white leading-tight" };
const _hoisted_10$4 = { key: 1 };
const _hoisted_11$4 = {
  key: 0,
  class: "text-lg md:text-xl text-white/80 leading-relaxed max-w-xl"
};
const _sfc_main$7 = {
  __name: "AppTemplate4Hero",
  setup(__props) {
    const { locale } = useI18n();
    const { appModules: appModules2, appConfig: appConfig2 } = useConfig();
    function parseBoldText(text) {
      const lines = text.split("\n");
      const result = [];
      for (const line of lines) {
        const lineResult = [];
        let currentIndex = 0;
        let inBold = false;
        let boldStart = -1;
        for (let i = 0; i < line.length; i++) {
          if (!inBold && line.slice(i, i + 2) === "**") {
            if (i > currentIndex) {
              const normalText = line.slice(currentIndex, i);
              if (normalText) {
                lineResult.push({
                  str: normalText
                });
              }
            }
            inBold = true;
            boldStart = i + 2;
            i++;
            currentIndex = i + 1;
            continue;
          }
          if (inBold && line.slice(i, i + 2) === "**") {
            const boldText = line.slice(boldStart, i);
            if (boldText) {
              lineResult.push({
                str: boldText,
                isBold: true
              });
            }
            inBold = false;
            i++;
            currentIndex = i + 1;
            continue;
          }
        }
        if (currentIndex < line.length) {
          const remainingText = line.slice(currentIndex);
          if (remainingText) {
            lineResult.push({
              str: remainingText
            });
          }
        }
        result.push(lineResult);
      }
      return result;
    }
    const titleInfo = computed(() => {
      if (!appConfig2.value || !appConfig2.value.bannerTitle || !appConfig2.value.bannerTitle[locale.value]) {
        return [];
      }
      return parseBoldText(appConfig2.value.bannerTitle[locale.value]);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$6, [
        createBaseVNode("div", _hoisted_2$6, [
          unref(appConfig2)?.bannerVideo && unref(appModules2)?.includes("herov") ? (openBlock(), createElementBlock("video", {
            key: 0,
            class: "w-full h-full object-cover",
            src: unref(appConfig2).bannerVideo,
            poster: unref(appConfig2)?.bannerPoster,
            "x5-video-player-type": "h5",
            autoplay: "",
            "webkit-playsinline": "",
            playsinline: "",
            muted: "",
            loop: ""
          }, null, 8, _hoisted_3$6)) : (openBlock(), createElementBlock("img", {
            key: 1,
            class: "w-full h-full object-cover",
            src: unref(appConfig2)?.bannerPoster ? unref(appConfig2).bannerPoster : unref(bannerImg),
            alt: "Banner"
          }, null, 8, _hoisted_4$4)),
          _cache[0] || (_cache[0] = createBaseVNode("div", { class: "absolute inset-0 bg-gradient-to-br from-primary/90 via-gray-900/80 to-secondary/90" }, null, -1))
        ]),
        _cache[1] || (_cache[1] = createStaticVNode('<div class="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse"></div><div class="absolute bottom-40 right-20 w-48 h-48 bg-primary/20 rounded-full blur-3xl animate-pulse" style="animation-delay:1s;"></div><div class="absolute top-1/2 left-1/4 w-24 h-24 bg-secondary/30 rounded-full blur-2xl animate-pulse" style="animation-delay:2s;"></div><div class="absolute inset-0 opacity-10"><svg width="100%" height="100%"><defs><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" stroke-width="1"></path></pattern></defs><rect width="100%" height="100%" fill="url(#grid)"></rect></svg></div>', 4)),
        createBaseVNode("div", _hoisted_5$4, [
          createBaseVNode("div", _hoisted_6$4, [
            createBaseVNode("div", _hoisted_7$4, [
              createBaseVNode("div", _hoisted_8$4, [
                createBaseVNode("h1", _hoisted_9$4, [
                  titleInfo.value.length ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(titleInfo.value, (arr, i) => {
                    return openBlock(), createElementBlock("div", {
                      key: `title_${i}`
                    }, [
                      arr.length > 0 ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(arr, (item, j) => {
                        return openBlock(), createElementBlock("span", {
                          key: `title_${i}_${j}`
                        }, [
                          createBaseVNode("span", {
                            class: normalizeClass([{ "text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400": item.isBold }])
                          }, toDisplayString(item.str), 3)
                        ]);
                      }), 128)) : (openBlock(), createElementBlock("br", _hoisted_10$4))
                    ]);
                  }), 128)) : createCommentVNode("", true)
                ]),
                unref(appConfig2)?.bannerSubTitle?.[unref(locale)] ? (openBlock(), createElementBlock("p", _hoisted_11$4, toDisplayString(unref(appConfig2).bannerSubTitle[unref(locale)]), 1)) : createCommentVNode("", true)
              ])
            ])
          ])
        ]),
        _cache[2] || (_cache[2] = createBaseVNode("div", { class: "absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" }, [
          createBaseVNode("div", { class: "w-8 h-12 border-2 border-white/30 rounded-full flex justify-center pt-2" }, [
            createBaseVNode("div", { class: "w-1 h-3 bg-white/60 rounded-full animate-pulse" })
          ])
        ], -1))
      ]);
    };
  }
};
const _hoisted_1$5 = { class: "w-full py-20 md:py-25" };
const _hoisted_2$5 = { class: "max-w-7xl mx-auto px-6 lg:px-8" };
const _hoisted_3$5 = { class: "text-center mb-16" };
const _hoisted_4$3 = { class: "text-3xl font-bold leading-tight text-primary mb-6" };
const _hoisted_5$3 = { class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" };
const _hoisted_6$3 = { class: "relative bg-white dark:bg-gray-900 rounded-2xl shadow-lg dark:shadow-2xl dark:shadow-black/30 overflow-hidden transition-all duration-500 group-hover:shadow-xl dark:group-hover:shadow-primary/20 group-hover:-translate-y-3 group-hover:scale-[1.02] border border-gray-100 dark:border-gray-800" };
const _hoisted_7$3 = { class: "relative h-48 overflow-hidden" };
const _hoisted_8$3 = ["src", "alt"];
const _hoisted_9$3 = {
  key: 1,
  class: "w-full h-full bg-gradient-to-br from-primary/80 to-secondary/80 flex items-center justify-center"
};
const _hoisted_10$3 = { class: "absolute bottom-4 left-4" };
const _hoisted_11$3 = { class: "px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs rounded-full" };
const _hoisted_12$3 = { class: "p-6" };
const _hoisted_13$2 = { class: "text-xl font-bold text-gray-900 dark:text-gray-100 mb-3 group-hover:text-primary transition-colors duration-300" };
const _hoisted_14$2 = { class: "text-gray-700 dark:text-gray-300 leading-relaxed line-clamp-3 mb-4 whitespace-pre-wrap" };
const _sfc_main$6 = {
  __name: "AppTemplate4ServiceGrid",
  setup(__props) {
    const { locale } = useI18n();
    const { appConfig: appConfig2 } = useConfig();
    const businessList = computed(() => {
      if (appConfig2.value?.businessList && appConfig2.value.businessList.length > 0) {
        return appConfig2.value.businessList;
      }
      return [
        { icon: "", title: {}, desc: {} },
        { icon: "", title: {}, desc: {} },
        { icon: "", title: {}, desc: {} },
        { icon: "", title: {}, desc: {} },
        { icon: "", title: {}, desc: {} },
        { icon: "", title: {}, desc: {} }
      ];
    });
    const displayList = computed(() => {
      return businessList.value.slice(0, 6);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$5, [
        createBaseVNode("div", _hoisted_2$5, [
          createBaseVNode("div", _hoisted_3$5, [
            createBaseVNode("h2", _hoisted_4$3, toDisplayString(_ctx.$t("Service.title")), 1)
          ]),
          createBaseVNode("div", _hoisted_5$3, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(displayList.value, (item, index) => {
              return openBlock(), createElementBlock("div", {
                key: `service_${index}`,
                class: "group relative"
              }, [
                _cache[2] || (_cache[2] = createBaseVNode("div", { class: "absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-2xl blur-xl opacity-10 dark:opacity-20 group-hover:opacity-30 dark:group-hover:opacity-50 transition-opacity duration-500" }, null, -1)),
                createBaseVNode("div", _hoisted_6$3, [
                  createBaseVNode("div", _hoisted_7$3, [
                    item.icon ? (openBlock(), createElementBlock("img", {
                      key: 0,
                      src: item.icon,
                      alt: item.title?.[unref(locale)],
                      class: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    }, null, 8, _hoisted_8$3)) : (openBlock(), createElementBlock("div", _hoisted_9$3, [..._cache[0] || (_cache[0] = [
                      createBaseVNode("div", { class: "w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm" }, [
                        createBaseVNode("svg", {
                          class: "w-10 h-10 text-white",
                          fill: "none",
                          stroke: "currentColor",
                          viewBox: "0 0 24 24"
                        }, [
                          createBaseVNode("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "2",
                            d: "M13 10V3L4 14h7v7l9-11h-7z"
                          })
                        ])
                      ], -1)
                    ])])),
                    _cache[1] || (_cache[1] = createBaseVNode("div", { class: "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" }, null, -1)),
                    createBaseVNode("div", _hoisted_10$3, [
                      createBaseVNode("span", _hoisted_11$3, " 0" + toDisplayString(index + 1), 1)
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_12$3, [
                    createBaseVNode("h3", _hoisted_13$2, toDisplayString(item.title?.[unref(locale)] || `服务项目 ${index + 1}`), 1),
                    createBaseVNode("p", _hoisted_14$2, toDisplayString(item.desc?.[unref(locale)] || "专业的服务团队为您提供高质量的解决方案，确保您的需求得到完美满足。"), 1)
                  ])
                ])
              ]);
            }), 128))
          ])
        ])
      ]);
    };
  }
};
const _hoisted_1$4 = { class: "w-full py-20 md:py-25 bg-gray-50 dark:bg-gray-950" };
const _hoisted_2$4 = { class: "max-w-5xl mx-auto px-6 lg:px-8" };
const _hoisted_3$4 = { class: "text-center mb-16" };
const _hoisted_4$2 = { class: "text-3xl font-bold text-primary mb-6" };
const _hoisted_5$2 = { class: "space-y-6" };
const _hoisted_6$2 = ["onClick"];
const _hoisted_7$2 = { class: "flex-1 pr-6" };
const _hoisted_8$2 = { class: "flex flex-wrap items-center gap-3 mb-3" };
const _hoisted_9$2 = { class: "text-xl md:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors" };
const _hoisted_10$2 = { class: "flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-400" };
const _hoisted_11$2 = {
  key: 0,
  class: "flex items-center gap-2"
};
const _hoisted_12$2 = { class: "text-sm" };
const _hoisted_13$1 = { class: "overflow-hidden" };
const _hoisted_14$1 = { class: "px-6 md:px-8 pb-8 border-t border-gray-200 dark:border-gray-800" };
const _hoisted_15$1 = { class: "pt-6" };
const _hoisted_16$1 = { class: "flex items-center gap-3 mb-4" };
const _hoisted_17$1 = { class: "text-lg font-bold text-gray-900 dark:text-white" };
const _hoisted_18$1 = { class: "pl-11" };
const _hoisted_19$1 = { class: "text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-wrap break-all font-sans text-base" };
const _hoisted_20$1 = { class: "pt-6 mt-6 border-t border-gray-200 dark:border-gray-800" };
const _hoisted_21$1 = { class: "flex items-center gap-3 mb-4" };
const _hoisted_22$1 = { class: "text-lg font-bold text-gray-900 dark:text-white" };
const _hoisted_23$1 = { class: "pl-11" };
const _hoisted_24$1 = { class: "text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-wrap break-all font-sans text-base" };
const _sfc_main$5 = {
  __name: "AppTemplate4Job",
  setup(__props) {
    const { locale } = useI18n();
    const { appConfig: appConfig2 } = useConfig();
    const expandedIndex = ref(-1);
    const jobList = computed(() => {
      if (appConfig2.value?.jobList && appConfig2.value.jobList.length > 0) {
        return appConfig2.value.jobList;
      }
      return [
        { name: {}, location: {}, requirement: {}, description: {} },
        { name: {}, location: {}, requirement: {}, description: {} }
      ];
    });
    const displayJobList = computed(() => {
      return jobList.value.slice(0, 5);
    });
    function toggleJob(index) {
      expandedIndex.value = expandedIndex.value === index ? -1 : index;
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$4, [
        createBaseVNode("div", _hoisted_2$4, [
          createBaseVNode("div", _hoisted_3$4, [
            createBaseVNode("h2", _hoisted_4$2, toDisplayString(_ctx.$t("Job.title")), 1)
          ]),
          createBaseVNode("div", _hoisted_5$2, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(displayJobList.value, (item, i) => {
              return openBlock(), createElementBlock("div", {
                key: `job_${i}`,
                class: "group"
              }, [
                createBaseVNode("div", {
                  class: normalizeClass(["relative bg-white dark:bg-gray-900 rounded-2xl shadow-lg dark:shadow-2xl dark:shadow-black/10 overflow-hidden transition-all duration-300 hover:shadow-xl border border-gray-200 dark:border-gray-800", { "ring-2 ring-primary ring-opacity-50": expandedIndex.value === i }])
                }, [
                  createBaseVNode("button", {
                    class: "w-full p-6 md:p-8 text-left flex items-center justify-between",
                    onClick: ($event) => toggleJob(i)
                  }, [
                    createBaseVNode("div", _hoisted_7$2, [
                      createBaseVNode("div", _hoisted_8$2, [
                        createBaseVNode("h3", _hoisted_9$2, toDisplayString(item.name?.[unref(locale)] || "职位名称"), 1)
                      ]),
                      createBaseVNode("div", _hoisted_10$2, [
                        item.location?.[unref(locale)] ? (openBlock(), createElementBlock("div", _hoisted_11$2, [
                          _cache[0] || (_cache[0] = createBaseVNode("svg", {
                            class: "w-4 h-4",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24"
                          }, [
                            createBaseVNode("path", {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              "stroke-width": "2",
                              d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            }),
                            createBaseVNode("path", {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              "stroke-width": "2",
                              d: "M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            })
                          ], -1)),
                          createBaseVNode("span", _hoisted_12$2, toDisplayString(_ctx.$t("Job.jobLocation")) + "：" + toDisplayString(item.location?.[unref(locale)]), 1)
                        ])) : createCommentVNode("", true)
                      ])
                    ]),
                    createBaseVNode("div", {
                      class: normalizeClass(["w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:text-white", { "rotate-180 bg-primary text-white": expandedIndex.value === i }])
                    }, [..._cache[1] || (_cache[1] = [
                      createBaseVNode("svg", {
                        class: "w-5 h-5",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24"
                      }, [
                        createBaseVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d: "M19 9l-7 7-7-7"
                        })
                      ], -1)
                    ])], 2)
                  ], 8, _hoisted_6$2),
                  createVNode(Transition, { name: "job-expand" }, {
                    default: withCtx(() => [
                      withDirectives(createBaseVNode("div", _hoisted_13$1, [
                        createBaseVNode("div", _hoisted_14$1, [
                          createBaseVNode("div", _hoisted_15$1, [
                            createBaseVNode("div", _hoisted_16$1, [
                              _cache[2] || (_cache[2] = createBaseVNode("div", { class: "w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center" }, [
                                createBaseVNode("svg", {
                                  class: "w-4 h-4 text-white",
                                  fill: "none",
                                  stroke: "currentColor",
                                  viewBox: "0 0 24 24"
                                }, [
                                  createBaseVNode("path", {
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "2",
                                    d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                  })
                                ])
                              ], -1)),
                              createBaseVNode("h4", _hoisted_17$1, toDisplayString(_ctx.$t("Job.jobRequirement")), 1)
                            ]),
                            createBaseVNode("div", _hoisted_18$1, [
                              createBaseVNode("pre", _hoisted_19$1, toDisplayString(item.requirement?.[unref(locale)] || "岗位要求内容"), 1)
                            ])
                          ]),
                          createBaseVNode("div", _hoisted_20$1, [
                            createBaseVNode("div", _hoisted_21$1, [
                              _cache[3] || (_cache[3] = createBaseVNode("div", { class: "w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center" }, [
                                createBaseVNode("svg", {
                                  class: "w-4 h-4 text-white",
                                  fill: "none",
                                  stroke: "currentColor",
                                  viewBox: "0 0 24 24"
                                }, [
                                  createBaseVNode("path", {
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "2",
                                    d: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                                  })
                                ])
                              ], -1)),
                              createBaseVNode("h4", _hoisted_22$1, toDisplayString(_ctx.$t("Job.jobDescription")), 1)
                            ]),
                            createBaseVNode("div", _hoisted_23$1, [
                              createBaseVNode("pre", _hoisted_24$1, toDisplayString(item.description?.[unref(locale)] || "职位描述内容"), 1)
                            ])
                          ])
                        ])
                      ], 512), [
                        [vShow, expandedIndex.value === i]
                      ])
                    ]),
                    _: 2
                  }, 1024)
                ], 2)
              ]);
            }), 128))
          ])
        ])
      ]);
    };
  }
};
const __nuxt_component_19 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-e190f53e"]]);
const _hoisted_1$3 = { class: "w-full py-20 md:py-25" };
const _hoisted_2$3 = { class: "max-w-7xl mx-auto px-6 lg:px-8" };
const _hoisted_3$3 = { class: "text-center" };
const _hoisted_4$1 = { class: "text-3xl font-bold text-primary mb-6" };
const _hoisted_5$1 = { class: "grid grid-cols-1 lg:grid-cols-3 gap-8" };
const _hoisted_6$1 = { class: "bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg dark:shadow-2xl dark:shadow-black/20 border border-gray-200 dark:border-gray-800" };
const _hoisted_7$1 = { class: "text-2xl font-bold text-gray-900 dark:text-white mb-6" };
const _hoisted_8$1 = { class: "space-y-4" };
const _hoisted_9$1 = { class: "w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center flex-shrink-0 mt-1" };
const _hoisted_10$1 = {
  class: "w-5 h-5 text-primary",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24"
};
const _hoisted_11$1 = ["d"];
const _hoisted_12$1 = { class: "text-gray-500 dark:text-gray-400 text-sm mb-1" };
const _hoisted_13 = { class: "text-gray-900 dark:text-white whitespace-pre-wrap break-all" };
const _hoisted_14 = { class: "lg:col-span-2 bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50" };
const _hoisted_15 = { class: "text-2xl font-bold text-white mb-6" };
const _hoisted_16 = { class: "grid grid-cols-1 md:grid-cols-2 gap-6" };
const _hoisted_17 = { class: "block text-gray-400 mb-2 text-sm" };
const _hoisted_18 = { class: "block text-gray-400 mb-2 text-sm" };
const _hoisted_19 = { class: "block text-gray-400 mb-2 text-sm" };
const _hoisted_20 = { class: "block text-gray-400 mb-2 text-sm" };
const _hoisted_21 = {
  key: 0,
  class: "mt-8 pt-8 border-t border-gray-200 dark:border-gray-800"
};
const _hoisted_22 = { class: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6" };
const _hoisted_23 = {
  key: 0,
  class: "w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mb-2"
};
const _hoisted_24 = {
  key: 1,
  class: "w-16 h-16 md:w-20 md:h-20 flex items-center justify-center text-gray-700 dark:text-gray-300 text-2xl md:text-3xl font-semibold mb-2"
};
const _hoisted_25 = { class: "flex items-center gap-2" };
const _hoisted_26 = { class: "flex items-center justify-center w-8 h-8 bg-primary/10 dark:bg-primary/20 rounded-lg text-primary" };
const _hoisted_27 = { class: "text-gray-700 dark:text-gray-300 text-sm font-medium capitalize" };
const _sfc_main$4 = {
  __name: "AppTemplate4CompanyInfo",
  setup(__props) {
    const { locale } = useI18n();
    const { appConfig: appConfig2 } = useConfig();
    const cName = ref("");
    const cEmail = ref("");
    const cPhoneNumber = ref("");
    const cContent = ref("");
    const isSending = ref(false);
    const isCaptchaValid = ref(false);
    const captchaRef = ref(null);
    const infoList = computed(() => {
      const res = [];
      [
        "companyName",
        "companyAddress",
        "postalCode",
        "businessHours",
        "dateOfEstablishment",
        "capital",
        "legalRepresentative",
        "phoneNumber",
        "faxNumber",
        "email",
        "business"
      ].forEach((k) => {
        if (appConfig2.value?.[k]) {
          res.push({
            key: k,
            value: appConfig2.value[k]
          });
        }
      });
      return res;
    });
    const socialList = computed(() => {
      const res = [];
      [
        "twitter",
        "facebook",
        "tiktok",
        "youtube",
        "line",
        "redbook",
        "weibo",
        "qq",
        "wechat"
      ].forEach((k) => {
        if (appConfig2.value?.[k]) {
          res.push({
            key: k,
            type: appConfig2.value[k + "Type"],
            value: appConfig2.value[k],
            isCustomIcon: [
              "line",
              "redbook",
              "weibo",
              "qq",
              "wechat"
            ].includes(k)
          });
        }
      });
      return res;
    });
    const canSend = computed(() => {
      return cName.value !== "" && cEmail.value !== "" && isEmail2(cEmail.value) && cContent.value !== "" && isCaptchaValid.value;
    });
    function isEmail2(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }
    function getIconPath(key) {
      const iconMap = {
        companyName: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
        companyAddress: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
        postalCode: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
        businessHours: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
        dateOfEstablishment: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
        capital: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
        legalRepresentative: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
        phoneNumber: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
        faxNumber: "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm2 18H6V4h6v6h6v10z M10 7h2v5h-2zM8 7h2v5H8z",
        email: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
        business: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
      };
      return iconMap[key] || "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z";
    }
    function captchaValidation(result) {
      isCaptchaValid.value = result;
    }
    async function sendInfo() {
      if (!canSend.value) return;
      isSending.value = true;
      setTimeout(() => {
        isSending.value = false;
        cName.value = "";
        cEmail.value = "";
        cPhoneNumber.value = "";
        cContent.value = "";
        isCaptchaValid.value = false;
        if (captchaRef.value) {
          captchaRef.value.reset();
        }
        alert("发送成功！");
      }, 1500);
    }
    return (_ctx, _cache) => {
      const _component_InputText = script$f;
      const _component_Textarea = script$g;
      const _component_Captcha = _sfc_main$i;
      const _component_Button = script$2;
      const _component_Image = script$8;
      const _component_DeferredContent = script$4;
      return openBlock(), createElementBlock("div", _hoisted_1$3, [
        createBaseVNode("div", _hoisted_2$3, [
          createBaseVNode("div", _hoisted_3$3, [
            createBaseVNode("h2", _hoisted_4$1, toDisplayString(_ctx.$t("Contact.title")), 1)
          ]),
          createBaseVNode("div", _hoisted_5$1, [
            createBaseVNode("div", _hoisted_6$1, [
              _cache[5] || (_cache[5] = createBaseVNode("div", { class: "w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-6" }, [
                createBaseVNode("svg", {
                  class: "w-8 h-8 text-white",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24"
                }, [
                  createBaseVNode("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  }),
                  createBaseVNode("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  })
                ])
              ], -1)),
              createBaseVNode("h3", _hoisted_7$1, toDisplayString(_ctx.$t("Contact.desc")), 1),
              createBaseVNode("div", _hoisted_8$1, [
                infoList.value.length > 0 ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(infoList.value, (item) => {
                  return openBlock(), createElementBlock("div", {
                    key: `info_${item.key}`,
                    class: "flex items-start gap-4"
                  }, [
                    createBaseVNode("div", _hoisted_9$1, [
                      (openBlock(), createElementBlock("svg", _hoisted_10$1, [
                        createBaseVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d: getIconPath(item.key)
                        }, null, 8, _hoisted_11$1)
                      ]))
                    ]),
                    createBaseVNode("div", null, [
                      createBaseVNode("div", _hoisted_12$1, toDisplayString(_ctx.$t(`Contact.${item.key}`)), 1),
                      createBaseVNode("div", _hoisted_13, toDisplayString(item.value?.[unref(locale)]), 1)
                    ])
                  ]);
                }), 128)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                  _cache[4] || (_cache[4] = createStaticVNode('<div class="flex items-start gap-4"><div class="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center flex-shrink-0 mt-1"><svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path></svg></div><div><div class="text-gray-500 dark:text-gray-400 text-sm mb-1">Title Example</div><div class="text-gray-900 dark:text-white">Content Example</div></div></div><div class="flex items-start gap-4"><div class="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center flex-shrink-0 mt-1"><svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg></div><div><div class="text-gray-500 dark:text-gray-400 text-sm mb-1">Title Example</div><div class="text-gray-900 dark:text-white">Content Example</div></div></div><div class="flex items-start gap-4"><div class="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center flex-shrink-0 mt-1"><svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg></div><div><div class="text-gray-500 dark:text-gray-400 text-sm mb-1">Title Example</div><div class="text-gray-900 dark:text-white">Content Example</div></div></div>', 3))
                ], 64))
              ])
            ]),
            createBaseVNode("div", _hoisted_14, [
              _cache[6] || (_cache[6] = createBaseVNode("div", { class: "w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mb-6" }, [
                createBaseVNode("svg", {
                  class: "w-8 h-8 text-white",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24"
                }, [
                  createBaseVNode("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  })
                ])
              ], -1)),
              createBaseVNode("h3", _hoisted_15, toDisplayString(_ctx.$t("Contact.button")), 1),
              createBaseVNode("form", {
                onSubmit: withModifiers(sendInfo, ["prevent"]),
                class: "space-y-6"
              }, [
                createBaseVNode("div", _hoisted_16, [
                  createBaseVNode("div", null, [
                    createBaseVNode("label", _hoisted_17, toDisplayString(_ctx.$t("Contact.yourName")), 1),
                    createVNode(_component_InputText, {
                      type: "text",
                      class: "w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100",
                      disabled: isSending.value,
                      modelValue: cName.value,
                      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => cName.value = $event),
                      autocomplete: "off"
                    }, null, 8, ["disabled", "modelValue"])
                  ]),
                  createBaseVNode("div", null, [
                    createBaseVNode("label", _hoisted_18, toDisplayString(_ctx.$t("Contact.yourEmail")), 1),
                    createVNode(_component_InputText, {
                      type: "email",
                      class: "w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100",
                      disabled: isSending.value,
                      modelValue: cEmail.value,
                      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => cEmail.value = $event),
                      autocomplete: "off",
                      invalid: cEmail.value !== "" && !isEmail2(cEmail.value)
                    }, null, 8, ["disabled", "modelValue", "invalid"])
                  ])
                ]),
                createBaseVNode("div", null, [
                  createBaseVNode("label", _hoisted_19, toDisplayString(_ctx.$t("Contact.yourPhoneNumber")), 1),
                  createVNode(_component_InputText, {
                    type: "text",
                    class: "w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100",
                    disabled: isSending.value,
                    modelValue: cPhoneNumber.value,
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => cPhoneNumber.value = $event),
                    autocomplete: "off"
                  }, null, 8, ["disabled", "modelValue"])
                ]),
                createBaseVNode("div", null, [
                  createBaseVNode("label", _hoisted_20, toDisplayString(_ctx.$t("Contact.consultationContent")), 1),
                  createVNode(_component_Textarea, {
                    rows: "4",
                    class: "w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100",
                    disabled: isSending.value,
                    modelValue: cContent.value,
                    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => cContent.value = $event),
                    style: { "resize": "none" }
                  }, null, 8, ["disabled", "modelValue"])
                ]),
                createBaseVNode("div", null, [
                  createVNode(_component_Captcha, {
                    ref_key: "captchaRef",
                    ref: captchaRef,
                    initState: _ctx.$t("captcha.initState"),
                    verifyingLabel: _ctx.$t("captcha.verifyingLabel"),
                    errorLabel: _ctx.$t("captcha.errorLabel"),
                    solvedLabel: _ctx.$t("captcha.solvedLabel"),
                    onValidation: captchaValidation
                  }, null, 8, ["initState", "verifyingLabel", "errorLabel", "solvedLabel"])
                ]),
                createVNode(_component_Button, {
                  type: "submit",
                  class: "w-full py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-xl hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-1",
                  disabled: !canSend.value || isSending.value
                }, {
                  default: withCtx(() => [
                    createBaseVNode("span", null, toDisplayString(_ctx.$t("Contact.send")), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])
              ], 32)
            ])
          ]),
          socialList.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_21, [
            createBaseVNode("div", _hoisted_22, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(socialList.value, (item, i) => {
                return openBlock(), createElementBlock("div", {
                  key: `social_${i}`,
                  class: "group flex flex-col items-center p-4 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                }, [
                  item.type === "image" ? (openBlock(), createElementBlock("div", _hoisted_23, [
                    createVNode(_component_DeferredContent, null, {
                      default: withCtx(() => [
                        createVNode(_component_Image, {
                          src: item.value,
                          alt: item.key,
                          imageClass: "w-full h-full object-contain rounded-xl"
                        }, null, 8, ["src", "alt"])
                      ]),
                      _: 2
                    }, 1024)
                  ])) : (openBlock(), createElementBlock("div", _hoisted_24, toDisplayString(item.value), 1)),
                  createBaseVNode("div", _hoisted_25, [
                    createBaseVNode("div", _hoisted_26, [
                      item.isCustomIcon ? (openBlock(), createElementBlock("i", {
                        key: 0,
                        class: normalizeClass(["iconfont !text-base", `icon-${item.key}`])
                      }, null, 2)) : (openBlock(), createElementBlock("i", {
                        key: 1,
                        class: normalizeClass(["pi !text-base", `pi-${item.key}`])
                      }, null, 2))
                    ]),
                    createBaseVNode("span", _hoisted_27, toDisplayString(item.key), 1)
                  ])
                ]);
              }), 128))
            ])
          ])) : createCommentVNode("", true)
        ])
      ]);
    };
  }
};
const _hoisted_1$2 = { class: "bg-[#161616] dark:bg-surface-0 px-12 py-9 mx-auto w-full" };
const _hoisted_2$2 = { class: "flex max-w-7xl mx-auto justify-between items-center sm:flex-row flex-col gap-2" };
const _hoisted_3$2 = { class: "text-sm text-surface-500 my-3" };
const _sfc_main$3 = {
  __name: "AppFooter",
  setup(__props) {
    const { locale } = useI18n();
    const {
      /*appModules,*/
      appConfig: appConfig2
    } = useConfig();
    const footInfo = computed(() => {
      if (appConfig2.value?.siteFooterInfo?.[locale.value]) {
        return appConfig2.value.siteFooterInfo[locale.value];
      }
      return `Copyright © ${(/* @__PURE__ */ new Date()).getFullYear()} Dorawow`;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        createBaseVNode("div", _hoisted_2$2, [
          _cache[0] || (_cache[0] = createBaseVNode("div", { class: "flex flex-1 my-3 hidden sm:block" }, null, -1)),
          createBaseVNode("div", _hoisted_3$2, toDisplayString(footInfo.value), 1)
        ])
      ]);
    };
  }
};
const _hoisted_1$1 = { class: "bg-[#f8fafc] dark:bg-[#161616] min-h-screen flex flex-col" };
const _hoisted_2$1 = { class: "relative" };
const _hoisted_3$1 = ["id"];
const _hoisted_4 = {
  key: 0,
  class: "h-20"
};
const _hoisted_5 = { class: "relative" };
const _hoisted_6 = ["id"];
const _hoisted_7 = { class: "relative" };
const _hoisted_8 = ["id"];
const _hoisted_9 = { class: "relative" };
const _hoisted_10 = ["id"];
const _hoisted_11 = { class: "relative" };
const _hoisted_12 = ["id"];
const _sfc_main$2 = {
  __name: "ViewHome",
  setup(__props) {
    const { appModules: appModules2, appTemplate: appTemplate2 } = useConfig();
    return (_ctx, _cache) => {
      const _component_AppTopbar = _sfc_main$q;
      const _component_AppTemplate2Topbar = _sfc_main$p;
      const _component_AppTemplate0Hero = _sfc_main$o;
      const _component_AppTemplate0ServiceGrid = _sfc_main$n;
      const _component_AppPortfolio = _sfc_main$m;
      const _component_AppProduct = _sfc_main$l;
      const _component_AppJob = _sfc_main$k;
      const _component_AppTemplate0CompanyInfo = _sfc_main$h;
      const _component_AppTemplate1Hero = _sfc_main$g;
      const _component_AppTemplate1ServiceGrid = _sfc_main$f;
      const _component_AppTemplate1Map = _sfc_main$e;
      const _component_AppTemplate1CompanyInfo = _sfc_main$d;
      const _component_AppTemplate2Hero = _sfc_main$c;
      const _component_AppTemplate2ServiceGrid = _sfc_main$b;
      const _component_AppTemplate3Hero = _sfc_main$a;
      const _component_AppTemplate3ServiceGrid = _sfc_main$9;
      const _component_AppTemplate3CompanyInfo = _sfc_main$8;
      const _component_AppTemplate4Hero = _sfc_main$7;
      const _component_AppTemplate4ServiceGrid = _sfc_main$6;
      const _component_AppTemplate4Job = __nuxt_component_19;
      const _component_AppTemplate4CompanyInfo = _sfc_main$4;
      const _component_AppFooter = _sfc_main$3;
      return openBlock(), createElementBlock(Fragment, null, [
        unref(appTemplate2) !== 2 ? (openBlock(), createBlock(_component_AppTopbar, { key: 0 })) : (openBlock(), createBlock(_component_AppTemplate2Topbar, { key: 1 })),
        createBaseVNode("div", _hoisted_1$1, [
          unref(appTemplate2) === 0 ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            _cache[0] || (_cache[0] = createBaseVNode("div", { class: "h-20" }, null, -1)),
            createVNode(_component_AppTemplate0Hero),
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(appModules2) || [], (item) => {
              return openBlock(), createElementBlock(Fragment, { key: item }, [
                createBaseVNode("div", _hoisted_2$1, [
                  createBaseVNode("div", {
                    id: item,
                    class: "absolute -top-5"
                  }, null, 8, _hoisted_3$1)
                ]),
                item === "service" ? (openBlock(), createBlock(_component_AppTemplate0ServiceGrid, { key: 0 })) : item === "portfolio" ? (openBlock(), createBlock(_component_AppPortfolio, { key: 1 })) : item === "product" ? (openBlock(), createBlock(_component_AppProduct, { key: 2 })) : item === "job" ? (openBlock(), createBlock(_component_AppJob, { key: 3 })) : item === "company" ? (openBlock(), createBlock(_component_AppTemplate0CompanyInfo, { key: 4 })) : createCommentVNode("", true)
              ], 64);
            }), 128)),
            (unref(appModules2) || []).at(-1) !== "company" ? (openBlock(), createElementBlock("div", _hoisted_4)) : createCommentVNode("", true)
          ], 64)) : unref(appTemplate2) === 1 ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
            createVNode(_component_AppTemplate1Hero),
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(appModules2) || [], (item) => {
              return openBlock(), createElementBlock(Fragment, { key: item }, [
                createBaseVNode("div", _hoisted_5, [
                  createBaseVNode("div", {
                    id: item,
                    class: "absolute -top-5"
                  }, null, 8, _hoisted_6)
                ]),
                item === "service" ? (openBlock(), createBlock(_component_AppTemplate1ServiceGrid, { key: 0 })) : item === "portfolio" ? (openBlock(), createBlock(_component_AppPortfolio, { key: 1 })) : item === "product" ? (openBlock(), createBlock(_component_AppProduct, { key: 2 })) : item === "job" ? (openBlock(), createBlock(_component_AppJob, { key: 3 })) : item === "company" ? (openBlock(), createElementBlock(Fragment, { key: 4 }, [
                  createVNode(_component_AppTemplate1Map),
                  createVNode(_component_AppTemplate1CompanyInfo)
                ], 64)) : createCommentVNode("", true)
              ], 64);
            }), 128)),
            _cache[1] || (_cache[1] = createBaseVNode("div", { class: "h-20" }, null, -1))
          ], 64)) : unref(appTemplate2) === 2 ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
            createVNode(_component_AppTemplate2Hero),
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(appModules2) || [], (item) => {
              return openBlock(), createElementBlock(Fragment, { key: item }, [
                createBaseVNode("div", _hoisted_7, [
                  createBaseVNode("div", {
                    id: item,
                    class: "absolute top-15"
                  }, null, 8, _hoisted_8)
                ]),
                item === "service" ? (openBlock(), createBlock(_component_AppTemplate2ServiceGrid, { key: 0 })) : item === "portfolio" ? (openBlock(), createBlock(_component_AppPortfolio, { key: 1 })) : item === "product" ? (openBlock(), createBlock(_component_AppProduct, { key: 2 })) : item === "job" ? (openBlock(), createBlock(_component_AppJob, { key: 3 })) : item === "company" ? (openBlock(), createElementBlock(Fragment, { key: 4 }, [
                  createVNode(_component_AppTemplate1Map),
                  createVNode(_component_AppTemplate1CompanyInfo)
                ], 64)) : createCommentVNode("", true)
              ], 64);
            }), 128)),
            _cache[2] || (_cache[2] = createBaseVNode("div", { class: "h-20" }, null, -1))
          ], 64)) : unref(appTemplate2) === 3 ? (openBlock(), createElementBlock(Fragment, { key: 3 }, [
            _cache[3] || (_cache[3] = createBaseVNode("div", { class: "h-20" }, null, -1)),
            createVNode(_component_AppTemplate3Hero),
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(appModules2) || [], (item) => {
              return openBlock(), createElementBlock(Fragment, { key: item }, [
                createBaseVNode("div", _hoisted_9, [
                  createBaseVNode("div", {
                    id: item,
                    class: "absolute -top-15"
                  }, null, 8, _hoisted_10)
                ]),
                item === "service" ? (openBlock(), createBlock(_component_AppTemplate3ServiceGrid, { key: 0 })) : item === "portfolio" ? (openBlock(), createBlock(_component_AppPortfolio, { key: 1 })) : item === "product" ? (openBlock(), createBlock(_component_AppProduct, { key: 2 })) : item === "job" ? (openBlock(), createBlock(_component_AppJob, { key: 3 })) : item === "company" ? (openBlock(), createElementBlock(Fragment, { key: 4 }, [
                  createVNode(_component_AppTemplate3CompanyInfo),
                  createVNode(_component_AppTemplate1Map)
                ], 64)) : createCommentVNode("", true)
              ], 64);
            }), 128)),
            _cache[4] || (_cache[4] = createBaseVNode("div", { class: "h-20" }, null, -1))
          ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 4 }, [
            _cache[5] || (_cache[5] = createBaseVNode("div", { class: "h-20" }, null, -1)),
            createVNode(_component_AppTemplate4Hero),
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(appModules2) || [], (item) => {
              return openBlock(), createElementBlock(Fragment, { key: item }, [
                createBaseVNode("div", _hoisted_11, [
                  createBaseVNode("div", {
                    id: item,
                    class: "absolute -top-20"
                  }, null, 8, _hoisted_12)
                ]),
                item === "service" ? (openBlock(), createBlock(_component_AppTemplate4ServiceGrid, { key: 0 })) : item === "portfolio" ? (openBlock(), createBlock(_component_AppPortfolio, { key: 1 })) : item === "product" ? (openBlock(), createBlock(_component_AppProduct, { key: 2 })) : item === "job" ? (openBlock(), createBlock(_component_AppTemplate4Job, { key: 3 })) : item === "company" ? (openBlock(), createBlock(_component_AppTemplate4CompanyInfo, { key: 4 })) : createCommentVNode("", true)
              ], 64);
            }), 128))
          ], 64)),
          createVNode(_component_AppFooter)
        ])
      ], 64);
    };
  }
};
const bgImg = "" + new URL("signin-bg.jpg", import.meta.url).href;
const _hoisted_1 = { class: "px-8 md:px-12 lg:px-20 py-12 w-full backdrop-blur-2xl rounded-2xl bg-black/30 border border-black/30" };
const _hoisted_2 = { class: "my-14 flex flex-col gap-4 items-center justify-center" };
const _hoisted_3 = { class: "flex pt-6 justify-between" };
const _sfc_main$1 = {
  __name: "ViewInit",
  emits: ["success"],
  setup(__props, { emit: __emit }) {
    const emits = __emit;
    const activeStep = ref("1");
    const isFetching = ref(false);
    const initedFailed = ref(false);
    function toLogin() {
      emits("success");
    }
    onMounted(async () => {
      isFetching.value = true;
      try {
        const res = await $fetch("/api/init", {
          method: "POST"
        });
        if (res.success) {
          activeStep.value = "2";
        } else {
          initedFailed.value = true;
        }
      } catch (e) {
        initedFailed.value = true;
      }
      isFetching.value = false;
    });
    return (_ctx, _cache) => {
      const _component_Step = script$k;
      const _component_StepList = script$j;
      const _component_ProgressSpinner = script$n;
      const _component_StepPanel = script$m;
      const _component_Button = script$2;
      const _component_StepPanels = script$l;
      const _component_Stepper = script$o;
      return openBlock(), createElementBlock("div", {
        class: "min-h-screen px-6 py-20 lg:px-20 flex items-center justify-center backdrop-blur-3xl !bg-cover !bg-center !bg-no-repeat",
        style: normalizeStyle({ backgroundImage: `url(${unref(bgImg)})` })
      }, [
        createBaseVNode("div", _hoisted_1, [
          createVNode(_component_Stepper, {
            value: activeStep.value,
            linear: ""
          }, {
            default: withCtx(() => [
              createVNode(_component_StepList, { class: "!px-10 lg:!px-0 lg:w-1/2 lg:!mx-auto" }, {
                default: withCtx(() => [
                  createVNode(_component_Step, { value: "1" }, {
                    default: withCtx(() => [..._cache[1] || (_cache[1] = [
                      createTextVNode("站点初始化", -1)
                    ])]),
                    _: 1
                  }),
                  createVNode(_component_Step, { value: "2" }, {
                    default: withCtx(() => [..._cache[2] || (_cache[2] = [
                      createTextVNode("完成", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_StepPanels, null, {
                default: withCtx(() => [
                  createVNode(_component_StepPanel, {
                    value: "1",
                    class: "!bg-transparent"
                  }, {
                    default: withCtx(() => [
                      createBaseVNode("div", _hoisted_2, [
                        isFetching.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                          createVNode(_component_ProgressSpinner),
                          _cache[3] || (_cache[3] = createBaseVNode("div", { class: "text-surface-300" }, " 网站初始化中... ", -1))
                        ], 64)) : initedFailed.value ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                          _cache[4] || (_cache[4] = createBaseVNode("i", { class: "pi pi-exclamation-triangle text-red-500 !text-7xl" }, null, -1)),
                          _cache[5] || (_cache[5] = createBaseVNode("div", { class: "text-red-500" }, " 网站初始化失败，请联系技术人员排查故障。 ", -1))
                        ], 64)) : createCommentVNode("", true)
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_StepPanel, {
                    value: "2",
                    class: "!bg-transparent"
                  }, {
                    default: withCtx(({ activateCallback }) => [
                      _cache[7] || (_cache[7] = createBaseVNode("div", { class: "flex flex-col h-auto" }, [
                        createBaseVNode("div", { class: "text-center p-8 text-surface-300 flex-col flex font-medium my-10" }, " 您的密码已发送至您的电子邮箱。 ")
                      ], -1)),
                      createBaseVNode("div", _hoisted_3, [
                        _cache[6] || (_cache[6] = createBaseVNode("div", null, null, -1)),
                        createVNode(_component_Button, {
                          label: "去登录",
                          icon: "pi pi-user",
                          iconPos: "right",
                          onClick: _cache[0] || (_cache[0] = ($event) => toLogin())
                        })
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["value"])
        ])
      ], 4);
    };
  }
};
const mockStatusData = {
  "status": {
    "inited": true
  },
  "template": 1,
  "theme": {
    "isDark": false,
    "color": "slate"
  },
  "modules": [
    "herov",
    "service",
    "product",
    "job",
    "company"
  ],
  "config": {
    "siteName": "誠達(株)",
    "siteLogo": "https://source.dorawow.com/cd-jp-assets/f36f1a6f9def1a3a83e12f6f1e0496cdcb0fd3f5",
    "bannerTitle": {
      "ja": "**誠達株式会社は、日本を拠点とする国際市場向けの総合サービス企業です。 **",
      "zh-tw": "**誠達株式会社是一家立足日本、面向國際市場的綜合性服務企業。**"
    },
    "bannerSubTitle": {
      "ja": "業務は国際貿易、オンライン教育、民泊（ホテル）運営など多岐にわたります。",
      "zh-tw": "業務涵蓋國際貿易、在線教育、民宿（旅館）運營等多個領域。"
    },
    "dateOfEstablishment": {
      "ja": "2024/12/2",
      "zh-tw": "2024/12/2"
    },
    "location": {
      "lat": 34.6642302,
      "lng": 135.5301721
    },
    "companyAddress": {
      "ja": "大阪市生野区鶴橋一丁目1番33—707号",
      "zh-tw": "大阪市生野区鶴橋一丁目1番33—707号"
    },
    "phoneNumber": {
      "ja": "080-6185-2775",
      "zh-tw": "080-6185-2775"
    },
    "capital": {
      "ja": "3000万",
      "zh-tw": "3000万"
    },
    "businessList": [
      {
        "icon": "https://source.dorawow.com/cd-jp-assets/5e7b6c56d5798a5b4d73774b0671e22810467d60",
        "title": {
          "ja": "国際貿易",
          "zh-tw": "國際貿易"
        },
        "desc": {
          "ja": "日本のローカルサプライチェーンと効率的なロジスティクスシステムを持ち、高品質の日本製品を中国などの海外市場に輸出し、国際ビジネスを拡大し続けています。",
          "zh-tw": "擁有日本本地供應鏈與高效物流體系，致力將優質日本商品輸出至中國等海外市場，持續拓展國際業務。"
        }
      },
      {
        "icon": "https://source.dorawow.com/cd-jp-assets/42010b1f97f2c3920e29db4671686b11efcd7ba3",
        "title": {
          "ja": "オンライン英語教育",
          "zh-tw": "在線英語教育"
        },
        "desc": {
          "ja": "はじめに:プロのオンライン英語教育プラットフォームに接続し、質の高い外国人教師の資格を持ち、教育機関や個人に質の高いオンライン英語教育サービスを提供します。",
          "zh-tw": "對接專業線上英語教育平台，擁有優質外教師資，為教育機構及個人提供高品質線上英語教學服務。"
        }
      },
      {
        "icon": "https://source.dorawow.com/cd-jp-assets/9ff9b759a34f30e5b2c909ce75edcc8f44bbf887",
        "title": {
          "ja": "民泊（旅館）運営",
          "zh-tw": "民宿（旅館）運營"
        },
        "desc": {
          "ja": "鶴橋駅周辺には4つの一戸建て民宿があり、1つは新築中、3つは改装中です。計画と設計を通じて、高品質の宿泊空間を作り、日本の観光市場を開拓し続けています。",
          "zh-tw": "在鶴橋站周邊擁有4處一戸建民宿，1處新建中，3處改建中。透過規劃與設計，打造高品質住宿空間，持續深耕日本旅遊市場。"
        }
      }
    ],
    "siteFooterInfo": {
      "ja": "Copyright © 2026 誠達 (株) All Rights Reserved.",
      "zh-tw": "Copyright © 2026 誠達 (株) All Rights Reserved."
    },
    "companyName": {
      "ja": "誠達株式会社",
      "zh-tw": "誠達株式会社"
    },
    "postalCode": {
      "ja": "〒544-0031",
      "zh-tw": "〒544-0031"
    },
    "businessHours": {
      "ja": "09:00 - 18:00",
      "zh-tw": "09:00 - 18:00"
    },
    "email": {
      "ja": "info@chengdaworld.com",
      "zh-tw": "info@chengdaworld.com"
    },
    "business": {
      "ja": "誠達株式会社は、日本を拠点とする国際市場向けの総合サービス企業です。業務は国際貿易、オンライン教育、民泊（ホテル）運営など多岐にわたります。",
      "zh-tw": "誠達株式会社是一家立足日本、面向國際市場的綜合性服務企業。業務涵蓋國際貿易、在線教育、民宿（旅館）運營等多個領域。"
    },
    "bannerVideo": "https://source.dorawow.com/cd-jp-assets/9cf4d333c486be2c429a27a01ca29f5a5d911703",
    "portfolioList": [],
    "productList": [
      {
        "parameterImg": "https://source.dorawow.com/cd-jp-assets/c7de5a697a4d81501edd372931ecca3048128f78",
        "productImgs": [
          "https://source.dorawow.com/cd-jp-assets/636d78ab771a8f24a8ad29dc7ece5a2b47225bc2"
        ],
        "title": {
          "ja": "国際貿易",
          "zh-tw": "國際貿易"
        },
        "tag": {
          "ja": "",
          "zh-tw": ""
        },
        "price": {},
        "customArg": []
      },
      {
        "parameterImg": "https://source.dorawow.com/cd-jp-assets/a27e4c3977b4c084651b5c1405223a5cec84edb1",
        "productImgs": [
          "https://source.dorawow.com/cd-jp-assets/efcf9cbc6d3821a583f7366b0631bfd72252d2c8",
          "https://source.dorawow.com/cd-jp-assets/c647f1cd2ff4093289c0eb673c5397b7018ed728"
        ],
        "title": {
          "ja": "オンライン英語教育",
          "zh-tw": "在線英語教育"
        },
        "tag": {
          "ja": "",
          "zh-tw": ""
        },
        "price": {
          "ja": 0,
          "zh-tw": 0
        },
        "customArg": []
      }
    ],
    "jobList": [
      {
        "name": {
          "ja": "ハウスキーピング（オペレーションアシスタント）",
          "zh-tw": "內務管理（營運助理）"
        },
        "location": {
          "ja": "大阪市鶴橋周辺",
          "zh-tw": "大阪市鶴橋周邊"
        },
        "requirement": {
          "ja": "• 品行端正で、正直で信頼でき、良好な職業素養を持っている\n• 日本の永住権または日本国籍をお持ちの方が優先\n• 日本語と中国語によるコミュニケーション\n一定の管理とマーケティングに関する経験がある\n• 日本の免許をお持ちの方が優先",
          "zh-tw": "• 品行端正，誠實守信，具備良好的職業素養\n• 持有日本永住身份或日本國籍者優先\n• 熟練使用日語及中文進行溝通\n• 具備一定的管理及市場營銷相關經驗\n• 持有日本駕照者優先"
        },
        "description": {
          "ja": "• 会社の代表者と取締役が日常の運営管理業務を処理するのを支援する\n• 各業務の着地と実行を推進するのに協力する\n• 日本市場の開拓と事業展開に参画",
          "zh-tw": "• 協助公司代表及董事處理日常營運管理工作\n• 協助推進各項業務落地與執行\n• 參與日本市場的開拓與業務拓展"
        }
      }
    ],
    "isLogoTextCustomColor": true,
    "legalRepresentative": {
      "ja": "陳信從",
      "zh-tw": "陳信從"
    },
    "bannerPoster": "https://source.dorawow.com/cd-jp-assets/fcca56c9bd4c29cc34ad4024e7ed17b124cc5357"
  },
  "countryCode": ""
};
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const { setAppModules, setAppTheme, setAppConfig, setAppTemplate, setCountryCode } = useConfig();
    const statusResp = mockStatusData;
    const router = useRouter();
    if (statusResp) {
      const metaObj = {
        link: [],
        meta: []
      };
      setCountryCode(statusResp.countryCode);
      if (statusResp.modules) {
        setAppModules(statusResp.modules);
      }
      if (statusResp.config) {
        if (statusResp.config.siteName) {
          metaObj.title = statusResp.config.siteName;
        }
        if (statusResp.config.siteFavicon) {
          metaObj.link.push({
            rel: "icon",
            href: statusResp.config.siteFavicon
          });
        }
        if (statusResp.config.siteDesc) {
          metaObj.link.push({
            name: "description",
            content: statusResp.config.siteDesc
          });
        }
        if (statusResp.config.siteKeywords) {
          metaObj.link.push({
            name: "keywords",
            content: statusResp.config.siteKeywords
          });
        }
        setAppConfig(statusResp.config);
      }
      if (statusResp.theme) {
        if (!!statusResp.theme.isDark) {
          metaObj.bodyAttrs = {
            class: "app-dark"
          };
        }
        setAppTheme(statusResp.theme);
      }
      setAppTemplate(Number(statusResp.template) || 0);
      useHead(metaObj);
    }
    function toLogin() {
      router.replace({
        path: "/login"
      });
    }
    return (_ctx, _cache) => {
      const _component_Toast = script$p;
      const _component_ViewHome = _sfc_main$2;
      const _component_ViewInit = _sfc_main$1;
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(_component_Toast),
        unref(statusResp) && unref(statusResp).status && unref(statusResp).status.inited ? (openBlock(), createBlock(_component_ViewHome, { key: 0 })) : (openBlock(), createBlock(_component_ViewInit, {
          key: 1,
          onSuccess: toLogin
        }))
      ], 64);
    };
  }
};
export {
  _sfc_main as default
};
