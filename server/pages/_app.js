(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 67:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Button = ({ title , isDark  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        className: `w-fit h-fit text-base py-2 px-5 rounded ${isDark ? "bg-btns-dark text-white" : "border border-btns-light"}`,
        children: title
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);


/***/ }),

/***/ 284:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/styles/globals.css
var globals = __webpack_require__(108);
// EXTERNAL MODULE: ./src/components/Button.tsx
var Button = __webpack_require__(67);
;// CONCATENATED MODULE: ./src/components/HeaderLink.tsx

const HeaderLink = ({ title , isActive  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("button", {
        className: `font-inter text-base ${isActive && "text-links-blue"}`,
        children: title
    });
};
/* harmony default export */ const components_HeaderLink = (HeaderLink);

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./public/icons/logo.svg
/* harmony default export */ const logo = ({"src":"/_next/static/media/logo.8471f4ed.svg","height":44,"width":30,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./src/widgets/HeaderMenu.tsx





const HeaderMenu = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex justify-between items-center w-full h-24 px-8",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex items-center uppercase font w-fit",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        className: "mr-4",
                        src: logo,
                        alt: "Logo"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "text-2xl font-inter",
                        children: "СтройКонтроль"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex items-center gap-x-5",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(components_HeaderLink, {
                        title: "Главная",
                        isActive: true
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(components_HeaderLink, {
                        title: "О нас"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(components_HeaderLink, {
                        title: "Продукция"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(components_HeaderLink, {
                        title: "Процесс"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(components_HeaderLink, {
                        title: "Надёжность"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(components_HeaderLink, {
                        title: "Клинты"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(components_HeaderLink, {
                        title: "Связаться с нами"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                        title: "Заказать демо",
                        isDark: true
                    })
                ]
            })
        ]
    });
};
const getStaticPaths = ()=>{
    return {
        paths: [],
        fallback: false
    };
};
const getStaticProps = async ()=>{
    return {
        props: {}
    };
};
/* harmony default export */ const widgets_HeaderMenu = (HeaderMenu);

;// CONCATENATED MODULE: ./src/layouts/MainLayout.tsx


const MainLayout = ({ children  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "flex flex-col items-center",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex flex-col justify-center items-center w-[1440px]",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(widgets_HeaderMenu, {}),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "flex flex-col justify-center items-center w-[1056px]",
                    children: children
                })
            ]
        })
    });
};
const MainLayout_getStaticPaths = ()=>{
    return {
        paths: [],
        fallback: false
    };
};
const MainLayout_getStaticProps = async ()=>{
    return {
        props: {}
    };
};
/* harmony default export */ const layouts_MainLayout = (MainLayout);

;// CONCATENATED MODULE: ./src/pages/_app.tsx



function App({ Component , pageProps  }) {
    const { getLayout  } = Component;
    if (!getLayout) return /*#__PURE__*/ jsx_runtime_.jsx(layouts_MainLayout, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    });
    return getLayout(/*#__PURE__*/ jsx_runtime_.jsx(Component, {
        ...pageProps
    }));
}


/***/ }),

/***/ 108:
/***/ (() => {



/***/ }),

/***/ 918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [636,675], () => (__webpack_exec__(284)));
module.exports = __webpack_exports__;

})();