module.exports = {

"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Button": (()=>Button),
    "buttonVariants": (()=>buttonVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/button.tsx",
        lineNumber: 46,
        columnNumber: 7
    }, this);
});
Button.displayName = "Button";
;
}}),
"[project]/src/components/SiteHeader.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "SiteHeader": (()=>SiteHeader)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-ssr] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$utensils$2d$crossed$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UtensilsCrossed$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/utensils-crossed.js [app-ssr] (ecmascript) <export default as UtensilsCrossed>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-out.js [app-ssr] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$notebook$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__NotebookText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/notebook-text.js [app-ssr] (ecmascript) <export default as NotebookText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function SiteHeader() {
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const username = searchParams.get('username');
    const handleLogout = ()=>{
        router.push('/');
    };
    const showAdminSection = pathname.startsWith('/admin');
    const showUserSection = !showAdminSection && username;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container flex h-16 max-w-screen-2xl items-center justify-between",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "/",
                    className: "flex items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$utensils$2d$crossed$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UtensilsCrossed$3e$__["UtensilsCrossed"], {
                            className: "h-7 w-7 text-accent"
                        }, void 0, false, {
                            fileName: "[project]/src/components/SiteHeader.tsx",
                            lineNumber: 26,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-headline text-2xl font-bold text-foreground",
                            children: "餓了嗎？"
                        }, void 0, false, {
                            fileName: "[project]/src/components/SiteHeader.tsx",
                            lineNumber: 27,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/SiteHeader.tsx",
                    lineNumber: 25,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2",
                    children: [
                        showUserSection && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                    className: "h-5 w-5 text-muted-foreground"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SiteHeader.tsx",
                                    lineNumber: 33,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm font-medium text-foreground",
                                    children: decodeURIComponent(username)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SiteHeader.tsx",
                                    lineNumber: 34,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    size: "sm",
                                    asChild: true,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/my-orders?username=${username}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$notebook$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__NotebookText$3e$__["NotebookText"], {
                                                className: "mr-2 h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SiteHeader.tsx",
                                                lineNumber: 37,
                                                columnNumber: 37
                                            }, this),
                                            "我的訂單"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/SiteHeader.tsx",
                                        lineNumber: 36,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SiteHeader.tsx",
                                    lineNumber: 35,
                                    columnNumber: 30
                                }, this)
                            ]
                        }, void 0, true),
                        showAdminSection && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm font-medium text-foreground",
                            children: "管理員"
                        }, void 0, false, {
                            fileName: "[project]/src/components/SiteHeader.tsx",
                            lineNumber: 44,
                            columnNumber: 24
                        }, this),
                        (showUserSection || showAdminSection) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "ghost",
                            size: "icon",
                            "aria-label": "登出",
                            onClick: handleLogout,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                className: "h-5 w-5 text-muted-foreground"
                            }, void 0, false, {
                                fileName: "[project]/src/components/SiteHeader.tsx",
                                lineNumber: 49,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/SiteHeader.tsx",
                            lineNumber: 48,
                            columnNumber: 26
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/SiteHeader.tsx",
                    lineNumber: 30,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/SiteHeader.tsx",
            lineNumber: 24,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/SiteHeader.tsx",
        lineNumber: 23,
        columnNumber: 9
    }, this);
}
}}),
"[project]/src/components/ui/tabs.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Tabs": (()=>Tabs),
    "TabsContent": (()=>TabsContent),
    "TabsList": (()=>TabsList),
    "TabsTrigger": (()=>TabsTrigger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-tabs/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const Tabs = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"];
const TabsList = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["List"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/tabs.tsx",
        lineNumber: 14,
        columnNumber: 3
    }, this));
TabsList.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["List"].displayName;
const TabsTrigger = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/tabs.tsx",
        lineNumber: 29,
        columnNumber: 3
    }, this));
TabsTrigger.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"].displayName;
const TabsContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/tabs.tsx",
        lineNumber: 44,
        columnNumber: 3
    }, this));
TabsContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"].displayName;
;
}}),
"[project]/src/components/admin/OrderDetailClient.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "OrderDetailClient": (()=>OrderDetailClient)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/tabs.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-ssr] (ecmascript) <export default as Download>");
"use client";
;
;
;
;
;
function OrderDetailClient({ initialOrderDetails }) {
    const [orderDetails, setOrderDetails] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialOrderDetails);
    // Placeholder functions for future implementation
    const handleMarkAsPaid = (username)=>{
        console.log(`Marking ${username} as paid.`);
    // TODO: Implement actual logic
    };
    const handleExport = (view)=>{
        console.log(`Exporting view: ${view}`);
    // TODO: Implement actual logic
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tabs"], {
            defaultValue: "byUser",
            className: "w-full",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center mb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsList"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                    value: "byUser",
                                    children: "按訂購人檢視"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admin/OrderDetailClient.tsx",
                                    lineNumber: 33,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                    value: "byItem",
                                    children: "按品項檢視"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admin/OrderDetailClient.tsx",
                                    lineNumber: 34,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/admin/OrderDetailClient.tsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "outline",
                            onClick: ()=>handleExport('byUser'),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                    className: "mr-2 h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admin/OrderDetailClient.tsx",
                                    lineNumber: 37,
                                    columnNumber: 13
                                }, this),
                                "匯出"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/admin/OrderDetailClient.tsx",
                            lineNumber: 36,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/admin/OrderDetailClient.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsContent"], {
                    value: "byUser",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "按訂購人檢視的功能將在此處實作。"
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/OrderDetailClient.tsx",
                        lineNumber: 42,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/admin/OrderDetailClient.tsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsContent"], {
                    value: "byItem",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "按品項檢視的功能將在此處實作。"
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/OrderDetailClient.tsx",
                        lineNumber: 46,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/admin/OrderDetailClient.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/admin/OrderDetailClient.tsx",
            lineNumber: 30,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/admin/OrderDetailClient.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/ai/flows/data:ebe32f [app-ssr] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"405f8722de7072c86f977981403ecd13e738b1ae5b":"getOrderDetailsByDailyOrderId"},"src/ai/flows/order-flow.ts",""] */ __turbopack_context__.s({
    "getOrderDetailsByDailyOrderId": (()=>getOrderDetailsByDailyOrderId)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var getOrderDetailsByDailyOrderId = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("405f8722de7072c86f977981403ecd13e738b1ae5b", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getOrderDetailsByDailyOrderId"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vb3JkZXItZmxvdy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbid1c2Ugc2VydmVyJztcblxuaW1wb3J0IHsgZ2V0U2hlZXREYXRhLCBhcHBlbmRTaGVldERhdGEsIGdldEhlYWRlcnMsIHVwZGF0ZVNoZWV0RGF0YSwgYmF0Y2hVcGRhdGVTaGVldERhdGEgfSBmcm9tICdAL3NlcnZpY2VzL3NoZWV0LXNlcnZpY2UnO1xuaW1wb3J0IHsgZ2V0VmVuZG9ycywgdHlwZSBWZW5kb3IgfSBmcm9tICcuL3ZlbmRvci1mbG93JztcbmltcG9ydCB7IHR5cGUgRmluYWxPcmRlciB9IGZyb20gJ0AvY29tcG9uZW50cy9PcmRlclN1bW1hcnknO1xuaW1wb3J0IHsgUHVibGlzaE9yZGVyUmVxdWVzdFNjaGVtYSwgdHlwZSBQdWJsaXNoT3JkZXJSZXF1ZXN0IH0gZnJvbSAnQC9saWIvc2NoZW1hL29yZGVyJztcbmltcG9ydCB7IGZvcm1hdCwgcGFyc2UsIHBhcnNlSVNPLCBpc1ZhbGlkIH0gZnJvbSAnZGF0ZS1mbnMnO1xuXG5jb25zdCBTUFJFQURTSEVFVF9JRCA9ICcxWmoyaDBjWWxyYjJtQmFOZ2wxLVBvT0s3dGxDQ3dEY2NBWG41dzY2aHA0Yyc7XG5jb25zdCBEQUlMWV9PUkRFUlNfU0hFRVRfTkFNRSA9ICdkYWlseV9vcmRlcnMnO1xuY29uc3QgT1JERVJfSVRFTVNfU0hFRVRfTkFNRSA9ICdvcmRlcl9pdGVtcyc7XG5cbmV4cG9ydCB0eXBlIERhaWx5T3JkZXIgPSB7XG4gICAgaWQ6IHN0cmluZztcbiAgICBkYXRlOiBzdHJpbmc7XG4gICAgdmVuZG9ySWQ6IHN0cmluZztcbiAgICB2ZW5kb3JOYW1lPzogc3RyaW5nOyAvLyBPcHRpb25hbDogZm9yIGRpc3BsYXkgb24gYWRtaW4gcGFnZVxuICAgIGRlYWRsaW5lOiBzdHJpbmc7XG59O1xuXG4vLyBUaGlzIHR5cGUgaXMgZm9yIHRoZSB1c2VyLWZhY2luZyBvcmRlciBwYWdlXG5leHBvcnQgdHlwZSBBdmFpbGFibGVPcmRlciA9IHtcbiAgICBpZDogc3RyaW5nOyAvLyBkYWlseU9yZGVySWRcbiAgICB2ZW5kb3I6IFZlbmRvcjtcbiAgICBkYXRlOiBzdHJpbmc7XG4gICAgZGVhZGxpbmU6IHN0cmluZztcbn07XG5cbi8vIEhlbHBlciBmdW5jdGlvbiB0byBmb3JtYXQgdGltZSBmcm9tIFNoZWV0cyAod2hpY2ggY2FuIGJlIGEgbnVtYmVyKVxuY29uc3QgZm9ybWF0VGltZSA9ICh0aW1lVmFsdWU6IGFueSk6IHN0cmluZyA9PiB7XG4gICAgaWYgKHR5cGVvZiB0aW1lVmFsdWUgPT09ICdzdHJpbmcnICYmIHRpbWVWYWx1ZS5tYXRjaCgvXlxcZHsyfTpcXGR7Mn0oOlxcZHsyfSk/JC8pKSB7XG4gICAgICAgIHJldHVybiB0aW1lVmFsdWUuc3Vic3RyaW5nKDAsIDUpO1xuICAgIH1cbiAgICBcbiAgICBpZiAodHlwZW9mIHRpbWVWYWx1ZSA9PT0gJ251bWJlcicgJiYgdGltZVZhbHVlID4gMCAmJiB0aW1lVmFsdWUgPCAxKSB7XG4gICAgICAvLyBJdCdzIGEgdGltZSBzZXJpYWwgbnVtYmVyIGZyb20gU2hlZXRzXG4gICAgICBjb25zdCB0b3RhbFNlY29uZHMgPSBNYXRoLnJvdW5kKHRpbWVWYWx1ZSAqIDg2NDAwKTtcbiAgICAgIGNvbnN0IGhvdXJzID0gTWF0aC5mbG9vcih0b3RhbFNlY29uZHMgLyAzNjAwKTtcbiAgICAgIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKCh0b3RhbFNlY29uZHMgJSAzNjAwKSAvIDYwKTtcbiAgICAgIHJldHVybiBgJHtob3Vycy50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyl9OiR7bWludXRlcy50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyl9YDtcbiAgICB9XG5cbiAgICAvLyBUcnkgcGFyc2luZyBhcyBhIGRhdGUgc3RyaW5nIHRvIGV4dHJhY3QgdGltZVxuICAgIGlmICh0eXBlb2YgdGltZVZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgZGF0ZSA9IHBhcnNlSVNPKHRpbWVWYWx1ZSk7XG4gICAgICAgICAgICBpZiAoaXNWYWxpZChkYXRlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmb3JtYXQoZGF0ZSwgJ0hIOm1tJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIC8vIElnbm9yZSBwYXJzZSBlcnJvcnMgZnJvbSBJU09cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY29uc3QgdGltZU1hdGNoID0gdGltZVZhbHVlLm1hdGNoKC8oXFxkezJ9OlxcZHsyfSkvKTtcbiAgICAgICAgaWYgKHRpbWVNYXRjaCkgcmV0dXJuIHRpbWVNYXRjaFswXTtcbiAgICB9XG4gICAgXG4gICAgLy8gRmFsbGJhY2sgZm9yIHVuZXhwZWN0ZWQgZm9ybWF0c1xuICAgIHJldHVybiAnMDA6MDAnOyBcbn07XG5cbi8vIEhlbHBlciBmdW5jdGlvbiB0byBmb3JtYXQgZGF0ZSBmcm9tIFNoZWV0cyAod2hpY2ggY2FuIGJlIGEgbnVtYmVyIG9yIHN0cmluZylcbmNvbnN0IGZvcm1hdERhdGUgPSAoZGF0ZVZhbHVlOiBhbnkpOiBzdHJpbmcgPT4ge1xuICAgIGlmICghZGF0ZVZhbHVlKSByZXR1cm4gZm9ybWF0KG5ldyBEYXRlKCksICd5eXl5LU1NLWRkJyk7IC8vIFJldHVybiB0b2RheSdzIGRhdGUgaWYgZW1wdHlcblxuICAgIGxldCBkYXRlO1xuICAgIFxuICAgIC8vIEhhbmRsZSBTaGVldHMgZGF0ZSBzZXJpYWwgbnVtYmVyIChudW1iZXIgb2YgZGF5cyBzaW5jZSAxODk5LTEyLTMwKVxuICAgIGlmICh0eXBlb2YgZGF0ZVZhbHVlID09PSAnbnVtYmVyJykge1xuICAgICAgICBjb25zdCBleGNlbEVwb2NoID0gbmV3IERhdGUoRGF0ZS5VVEMoMTg5OSwgMTEsIDMwKSk7XG4gICAgICAgIGRhdGUgPSBuZXcgRGF0ZShleGNlbEVwb2NoLmdldFRpbWUoKSArIGRhdGVWYWx1ZSAqIDg2NDAwMDAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBIYW5kbGUgSVNPIHN0cmluZyBsaWtlICcyMDI0LTA3LTI1VDAwOjAwOjAwLjAwMFonIG9yIHNpbXBsZSBzdHJpbmcgJzIwMjQtMDctMjUnXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgIGRhdGUgPSBwYXJzZUlTTyhTdHJpbmcoZGF0ZVZhbHVlKSk7XG4gICAgICAgICAgIC8vIElmIElTTyBwYXJzaW5nIGZhaWxzLCB0cnkgdGhlIHNpbXBsZSBmb3JtYXRcbiAgICAgICAgICAgaWYgKCFpc1ZhbGlkKGRhdGUpKSB7XG4gICAgICAgICAgICAgICBkYXRlID0gcGFyc2UoU3RyaW5nKGRhdGVWYWx1ZSksICd5eXl5LU1NLWRkJywgbmV3IERhdGUoKSk7XG4gICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgIGRhdGUgPSBwYXJzZShTdHJpbmcoZGF0ZVZhbHVlKSwgJ3l5eXktTU0tZGQnLCBuZXcgRGF0ZSgpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvLyBJZiBkYXRlIGlzIHZhbGlkLCBmb3JtYXQgaXQsIG90aGVyd2lzZSByZXR1cm4gdG9kYXkncyBkYXRlIGFzIGEgZmFsbGJhY2tcbiAgICByZXR1cm4gaXNWYWxpZChkYXRlKSA/IGZvcm1hdChkYXRlLCAneXl5eS1NTS1kZCcpIDogZm9ybWF0KG5ldyBEYXRlKCksICd5eXl5LU1NLWRkJyk7XG59O1xuXG5cbi8qKlxuICogUmV0cmlldmVzIGFsbCBhdmFpbGFibGUgb3JkZXJzIGZyb20gdGhlIGRhaWx5X29yZGVycyBzaGVldC5cbiAqIEFueSBvcmRlciBwcmVzZW50IGlzIGNvbnNpZGVyZWQgYXZhaWxhYmxlLlxuICogQHJldHVybnMge1Byb21pc2U8QXZhaWxhYmxlT3JkZXJbXT59IEEgbGlzdCBvZiBhdmFpbGFibGUgdmVuZG9ycyBhbmQgdGhlaXIgZGVhZGxpbmVzLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QXZhaWxhYmxlT3JkZXJzKCk6IFByb21pc2U8QXZhaWxhYmxlT3JkZXJbXT4ge1xuICAgIGNvbnN0IGRhaWx5T3JkZXJzUmFuZ2UgPSBgJHtEQUlMWV9PUkRFUlNfU0hFRVRfTkFNRX0hQTpEYDtcbiAgICBjb25zdCBbZGFpbHlPcmRlcnNEYXRhLCBhbGxWZW5kb3JzXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgZ2V0U2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCBkYWlseU9yZGVyc1JhbmdlKSxcbiAgICAgICAgZ2V0VmVuZG9ycygpXG4gICAgXSk7XG5cbiAgICBpZiAoIWRhaWx5T3JkZXJzRGF0YSB8fCBkYWlseU9yZGVyc0RhdGEubGVuZ3RoIDwgMikge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGhlYWRlciA9IGRhaWx5T3JkZXJzRGF0YVswXTtcbiAgICBjb25zdCByb3dzID0gZGFpbHlPcmRlcnNEYXRhLnNsaWNlKDEpO1xuXG4gICAgY29uc3QgaGVhZGVyTWFwID0gaGVhZGVyLnJlZHVjZSgoYWNjLCBoLCBpKSA9PiB7XG4gICAgICAgIGFjY1tTdHJpbmcoaCldID0gaTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB7fSBhcyBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+KTtcblxuICAgIGNvbnN0IGFsbFZlbmRvcnNNYXAgPSBuZXcgTWFwKGFsbFZlbmRvcnMubWFwKHYgPT4gW3YudmVuZG9ySWQsIHZdKSk7XG5cbiAgICBjb25zdCBhdmFpbGFibGVPcmRlcnM6IEF2YWlsYWJsZU9yZGVyW10gPSBbXTtcblxuICAgIGZvciAoY29uc3Qgcm93IG9mIHJvd3MpIHtcbiAgICAgICAgaWYgKHJvdy5ldmVyeShjZWxsID0+ICFjZWxsKSkgY29udGludWU7IC8vIFNraXAgY29tcGxldGVseSBlbXB0eSByb3dzXG5cbiAgICAgICAgY29uc3QgaWQgPSByb3dbaGVhZGVyTWFwWydpZCddXTtcbiAgICAgICAgY29uc3QgdmVuZG9ySWQgPSByb3dbaGVhZGVyTWFwWyd2ZW5kb3JJZCddXTtcbiAgICAgICAgY29uc3QgZGF0ZVJhdyA9IHJvd1toZWFkZXJNYXBbJ2RhdGUnXV07XG4gICAgICAgIGNvbnN0IGRlYWRsaW5lUmF3ID0gcm93W2hlYWRlck1hcFsnZGVhZGxpbmUnXV07XG5cbiAgICAgICAgaWYgKCFpZCB8fCAhdmVuZG9ySWQpIGNvbnRpbnVlOyAvLyBTa2lwIHJvd3Mgd2l0aG91dCBlc3NlbnRpYWwgZGF0YVxuXG4gICAgICAgIGNvbnN0IHZlbmRvciA9IGFsbFZlbmRvcnNNYXAuZ2V0KHZlbmRvcklkKTtcbiAgICAgICAgaWYgKCF2ZW5kb3IgfHwgIXZlbmRvci5pc0FjdGl2ZSkgY29udGludWU7XG5cbiAgICAgICAgYXZhaWxhYmxlT3JkZXJzLnB1c2goe1xuICAgICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgICAgdmVuZG9yLFxuICAgICAgICAgICAgZGF0ZTogZm9ybWF0RGF0ZShkYXRlUmF3KSxcbiAgICAgICAgICAgIGRlYWRsaW5lOiBmb3JtYXRUaW1lKGRlYWRsaW5lUmF3KSAvLyBGb3JtYXQgdGhlIGRlYWRsaW5lXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhdmFpbGFibGVPcmRlcnM7XG59XG5cbi8qKlxuICogUmV0cmlldmVzIGFsbCBkYWlseSBvcmRlcnMgZm9yIGFkbWluIGRpc3BsYXkuXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxEYWlseU9yZGVyW10+fSBBIGxpc3Qgb2YgYWxsIHB1Ymxpc2hlZCBvcmRlcnMuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxEYWlseU9yZGVycygpOiBQcm9taXNlPERhaWx5T3JkZXJbXT4ge1xuICAgIGNvbnN0IGRhaWx5T3JkZXJzUmFuZ2UgPSBgJHtEQUlMWV9PUkRFUlNfU0hFRVRfTkFNRX0hQTpEYDtcbiAgICAgY29uc3QgW2RhaWx5T3JkZXJzRGF0YSwgYWxsVmVuZG9yc10gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgIGdldFNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgZGFpbHlPcmRlcnNSYW5nZSksXG4gICAgICAgIGdldFZlbmRvcnMoKVxuICAgIF0pO1xuICAgIFxuICAgIGlmICghZGFpbHlPcmRlcnNEYXRhIHx8IGRhaWx5T3JkZXJzRGF0YS5sZW5ndGggPCAyKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICBjb25zdCBoZWFkZXIgPSBkYWlseU9yZGVyc0RhdGFbMF07XG4gICAgY29uc3Qgcm93cyA9IGRhaWx5T3JkZXJzRGF0YS5zbGljZSgxKTtcbiAgICBjb25zdCBhbGxWZW5kb3JzTWFwID0gbmV3IE1hcChhbGxWZW5kb3JzLm1hcCh2ID0+IFt2LnZlbmRvcklkLCB2XSkpO1xuICAgIFxuICAgIGNvbnN0IGhlYWRlck1hcCA9IGhlYWRlci5yZWR1Y2UoKGFjYywgaCwgaSkgPT4ge1xuICAgICAgICBhY2NbU3RyaW5nKGgpXSA9IGk7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30gYXMgUmVjb3JkPHN0cmluZywgbnVtYmVyPik7XG5cbiAgICBjb25zdCBvcmRlcnMgPSByb3dzLm1hcChyb3cgPT4ge1xuICAgICAgICBjb25zdCB2ZW5kb3JJZCA9IHJvd1toZWFkZXJNYXBbJ3ZlbmRvcklkJ11dO1xuICAgICAgICBjb25zdCB2ZW5kb3IgPSBhbGxWZW5kb3JzTWFwLmdldCh2ZW5kb3JJZCk7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaWQ6IHJvd1toZWFkZXJNYXBbJ2lkJ11dIHx8ICcnLFxuICAgICAgICAgICAgZGF0ZTogZm9ybWF0RGF0ZShyb3dbaGVhZGVyTWFwWydkYXRlJ11dKSxcbiAgICAgICAgICAgIHZlbmRvcklkOiB2ZW5kb3JJZCB8fCAnJyxcbiAgICAgICAgICAgIHZlbmRvck5hbWU6IHZlbmRvciA/IHZlbmRvci52ZW5kb3JOYW1lIDogJ+acquefpeW6l+WuticsXG4gICAgICAgICAgICBkZWFkbGluZTogZm9ybWF0VGltZShyb3dbaGVhZGVyTWFwWydkZWFkbGluZSddXSlcbiAgICAgICAgfTtcbiAgICB9KS5maWx0ZXIob3JkZXIgPT4gb3JkZXIuaWQpOyAvLyBGaWx0ZXIgb3V0IGFueSBlbXB0eSByb3dzXG5cbiAgICAvLyBTb3J0IG9yZGVycyBieSBkYXRlIGFuZCB0aGVuIGJ5IGRlYWRsaW5lLCBhc2NlbmRpbmcgKGNsb3Nlc3QgZmlyc3QpXG4gICAgb3JkZXJzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgY29uc3QgZGF0ZUEgPSBuZXcgRGF0ZShgJHthLmRhdGV9VCR7YS5kZWFkbGluZX1gKTtcbiAgICAgICAgY29uc3QgZGF0ZUIgPSBuZXcgRGF0ZShgJHtiLmRhdGV9VCR7Yi5kZWFkbGluZX1gKTtcbiAgICAgICAgcmV0dXJuIGRhdGVBLmdldFRpbWUoKSAtIGRhdGVCLmdldFRpbWUoKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBvcmRlcnM7XG59XG5cblxuLyoqXG4gKiBQdWJsaXNoZXMgYSBuZXcgb3JkZXIgZm9yIGEgc3BlY2lmaWMgZGF0ZSwgdmVuZG9yIGFuZCBkZWFkbGluZS5cbiAqIEBwYXJhbSB7UHVibGlzaE9yZGVyUmVxdWVzdH0gcmVxIC0gVGhlIHJlcXVlc3QgY29udGFpbmluZyBkYXRlLCB2ZW5kb3JJZCBhbmQgZGVhZGxpbmUuXG4gKiBAcmV0dXJucyB7UHJvbWlzZTx7c3VjY2VzczogYm9vbGVhbn0+fSBBIHN1Y2Nlc3MgZmxhZy5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHB1Ymxpc2hPcmRlcihyZXE6IFB1Ymxpc2hPcmRlclJlcXVlc3QpOiBQcm9taXNlPHsgc3VjY2VzczogYm9vbGVhbiB9PiB7XG4gIGNvbnN0IHZhbGlkYXRpb24gPSBQdWJsaXNoT3JkZXJSZXF1ZXN0U2NoZW1hLnNhZmVQYXJzZShyZXEpO1xuICBpZiAoIXZhbGlkYXRpb24uc3VjY2Vzcykge1xuICAgIGNvbnN0IGVycm9yTXNnID0gdmFsaWRhdGlvbi5lcnJvci5lcnJvcnMubWFwKGUgPT4gYCR7ZS5wYXRoLmpvaW4oJy4nKX06ICR7ZS5tZXNzYWdlfWApLmpvaW4oJywgJyk7XG4gICAgdGhyb3cgbmV3IEVycm9yKGDovLjlhaXos4fmlpnmnInoqqQ6ICR7ZXJyb3JNc2d9YCk7XG4gIH1cblxuICBjb25zdCBhbGxPcmRlcnNSYW5nZSA9IGAke0RBSUxZX09SREVSU19TSEVFVF9OQU1FfSFBMjpBYDtcbiAgY29uc3QgYWxsT3JkZXJJZHNEYXRhID0gYXdhaXQgZ2V0U2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCBhbGxPcmRlcnNSYW5nZSk7XG4gICAgY29uc3QgbGFzdElkTnVtID0gYWxsT3JkZXJJZHNEYXRhLmxlbmd0aCA+IDAgXG4gICAgICAgID8gTWF0aC5tYXgoMCwgLi4uYWxsT3JkZXJJZHNEYXRhLm1hcChyb3cgPT4gcGFyc2VJbnQoKHJvd1swXSB8fCAnZG8wJykucmVwbGFjZSgnZG8nLCAnJyksIDEwKSkuZmlsdGVyKG51bSA9PiAhaXNOYU4obnVtKSkpXG4gICAgICAgIDogMDtcbiAgY29uc3QgbmV3SWQgPSBgZG8keyhsYXN0SWROdW0gKyAxKS50b1N0cmluZygpLnBhZFN0YXJ0KDMsICcwJyl9YDtcblxuICBjb25zdCB2YWx1ZXMgPSBbXG4gICAgW25ld0lkLCByZXEuZGF0ZSwgcmVxLnZlbmRvcklkLCByZXEuZGVhZGxpbmVdXG4gIF07XG4gIFxuICAvLyBFbnN1cmUgaGVhZGVycyBleGlzdFxuICBjb25zdCBoZWFkZXJzID0gYXdhaXQgZ2V0SGVhZGVycyhTUFJFQURTSEVFVF9JRCwgREFJTFlfT1JERVJTX1NIRUVUX05BTUUpO1xuICBpZiAoaGVhZGVycy5sZW5ndGggPT09IDApIHtcbiAgICAgIGF3YWl0IHVwZGF0ZVNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgYCR7REFJTFlfT1JERVJTX1NIRUVUX05BTUV9IUExOkQxYCwgW1snaWQnLCAnZGF0ZScsICd2ZW5kb3JJZCcsICdkZWFkbGluZSddXSk7XG4gIH1cblxuICBhd2FpdCBhcHBlbmRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGAke0RBSUxZX09SREVSU19TSEVFVF9OQU1FfSFBOkRgLCB2YWx1ZXMpO1xuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG59XG5cbmV4cG9ydCB0eXBlIFVwZGF0ZURhaWx5T3JkZXJSZXF1ZXN0ID0ge1xuICAgIG9yZGVySWQ6IHN0cmluZztcbiAgICB2ZW5kb3JJZDogc3RyaW5nO1xuICAgIGRhdGU6IHN0cmluZztcbiAgICBkZWFkbGluZTogc3RyaW5nO1xufVxuXG4vKipcbiAqIFVwZGF0ZXMgYW4gZXhpc3RpbmcgZGFpbHkgb3JkZXIncyBkYXRlIGFuZCBkZWFkbGluZS5cbiAqIEBwYXJhbSB7VXBkYXRlRGFpbHlPcmRlclJlcXVlc3R9IHJlcSAtIFRoZSByZXF1ZXN0IGNvbnRhaW5pbmcgb3JkZXJJZCwgZGF0ZSBhbmQgZGVhZGxpbmUuXG4gKiBAcmV0dXJucyB7UHJvbWlzZTx7c3VjY2VzczogYm9vbGVhbn0+fSBBIHN1Y2Nlc3MgZmxhZy5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZURhaWx5T3JkZXIocmVxOiBVcGRhdGVEYWlseU9yZGVyUmVxdWVzdCk6IFByb21pc2U8eyBzdWNjZXNzOiBib29sZWFuIH0+IHtcbiAgICBjb25zdCB7IG9yZGVySWQsIHZlbmRvcklkLCBkYXRlLCBkZWFkbGluZSB9ID0gcmVxO1xuICAgIFxuICAgIC8vIDEuIEZpbmQgdGhlIHJvdyBvZiB0aGUgb3JkZXIgdG8gdXBkYXRlXG4gICAgY29uc3QgYWxsT3JkZXJzRGF0YSA9IGF3YWl0IGdldFNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgYCR7REFJTFlfT1JERVJTX1NIRUVUX05BTUV9IUE6QWApO1xuICAgIGNvbnN0IHJvd0luZGV4ID0gYWxsT3JkZXJzRGF0YS5maW5kSW5kZXgocm93ID0+IHJvd1swXSA9PT0gb3JkZXJJZCk7XG4gICAgXG4gICAgaWYgKHJvd0luZGV4ID09PSAtMSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYOaJvuS4jeWIsCBJRCDngrogJHtvcmRlcklkfSDnmoToqILllq7jgIJgKTtcbiAgICB9XG5cbiAgICAvLyArMSBiZWNhdXNlIHNoZWV0IHJvd3MgYXJlIDEtYmFzZWQuXG4gICAgY29uc3Qgcm93VG9VcGRhdGUgPSByb3dJbmRleCArIDE7XG4gICAgXG4gICAgLy8gV2UgdXBkYXRlIGRhdGUgYW5kIGRlYWRsaW5lLiBWZW5kb3JJZCBpcyBub3QgY2hhbmdlZC5cbiAgICAvLyBUaGUgcmFuZ2Ugc2hvdWxkIGJlIEJ4OkR4IHRvIHVwZGF0ZSBkYXRlIGFuZCBkZWFkbGluZS5cbiAgICBjb25zdCB1cGRhdGVSYW5nZSA9IGAke0RBSUxZX09SREVSU19TSEVFVF9OQU1FfSFCJHtyb3dUb1VwZGF0ZX06RCR7cm93VG9VcGRhdGV9YDtcbiAgICBhd2FpdCB1cGRhdGVTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIHVwZGF0ZVJhbmdlLCBbW2RhdGUsIHZlbmRvcklkLCBkZWFkbGluZV1dKTtcblxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbn1cblxuXG4vKipcbiAqIERlbGV0ZXMgYSBwdWJsaXNoZWQgZGFpbHkgb3JkZXIgYW5kIGl0cyBhc3NvY2lhdGVkIG9yZGVyIGl0ZW1zLlxuICogQHBhcmFtIHtzdHJpbmd9IGRhaWx5T3JkZXJJZCBUaGUgSUQgb2YgdGhlIGRhaWx5IG9yZGVyIHRvIGRlbGV0ZS5cbiAqIEByZXR1cm5zIHtQcm9taXNlPHtzdWNjZXNzOiBib29sZWFufT59IEEgc3VjY2VzcyBmbGFnLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlRGFpbHlPcmRlcihkYWlseU9yZGVySWQ6IHN0cmluZyk6IFByb21pc2U8eyBzdWNjZXNzOiBib29sZWFuIH0+IHtcbiAgLy8gMS4gR2V0IGFsbCBkYXRhIGZyb20gYm90aCBzaGVldHNcbiAgY29uc3QgW2RhaWx5T3JkZXJzRGF0YVdpdGhIZWFkZXIsIG9yZGVySXRlbXNEYXRhV2l0aEhlYWRlcl0gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgZ2V0U2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCBgJHtEQUlMWV9PUkRFUlNfU0hFRVRfTkFNRX0hQTpEYCksXG4gICAgZ2V0U2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCBgJHtPUkRFUl9JVEVNU19TSEVFVF9OQU1FfSFBOk1gKSwgLy8gUmVhZCB1cCB0byBjb2x1bW4gTVxuICBdKTtcblxuICBpZiAoZGFpbHlPcmRlcnNEYXRhV2l0aEhlYWRlci5sZW5ndGggPCAyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xuICB9XG5cbiAgY29uc3QgZGFpbHlPcmRlcnNIZWFkZXJzID0gZGFpbHlPcmRlcnNEYXRhV2l0aEhlYWRlclswXTtcbiAgY29uc3QgZGFpbHlPcmRlcnNSb3dzID0gZGFpbHlPcmRlcnNEYXRhV2l0aEhlYWRlci5zbGljZSgxKTtcbiAgXG4gIGNvbnN0IG9yZGVySXRlbXNIZWFkZXJzID0gb3JkZXJJdGVtc0RhdGFXaXRoSGVhZGVyLmxlbmd0aCA+IDAgPyBvcmRlckl0ZW1zRGF0YVdpdGhIZWFkZXJbMF0gOiBbXTtcbiAgY29uc3Qgb3JkZXJJdGVtc1Jvd3MgPSBvcmRlckl0ZW1zRGF0YVdpdGhIZWFkZXIubGVuZ3RoID4gMSA/IG9yZGVySXRlbXNEYXRhV2l0aEhlYWRlci5zbGljZSgxKSA6IFtdO1xuXG4gIC8vIDIuIEZpbHRlciB0aGUgcm93cyB0byBrZWVwIGZvciBib3RoIHNoZWV0c1xuICBjb25zdCBkYWlseU9yZGVyc1RvS2VlcCA9IGRhaWx5T3JkZXJzUm93cy5maWx0ZXIocm93ID0+IHJvd1swXSAhPT0gZGFpbHlPcmRlcklkKTtcblxuICBsZXQgb3JkZXJJdGVtc1RvS2VlcCA9IG9yZGVySXRlbXNSb3dzO1xuICBpZiAob3JkZXJJdGVtc1Jvd3MubGVuZ3RoID4gMCAmJiBvcmRlckl0ZW1zSGVhZGVycy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBvcmRlckl0ZW1zSGVhZGVyTWFwID0gb3JkZXJJdGVtc0hlYWRlcnMucmVkdWNlKChhY2MsIGgsIGkpID0+IHsgYWNjW1N0cmluZyhoKV0gPSBpOyByZXR1cm4gYWNjOyB9LCB7fSBhcyBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+KTtcbiAgICAgIGNvbnN0IGRhaWx5T3JkZXJJZEluZGV4ID0gb3JkZXJJdGVtc0hlYWRlck1hcFsnZGFpbHlPcmRlcklkJ107XG4gICAgICBcbiAgICAgIC8vIEVuc3VyZSB0aGUgZGFpbHlPcmRlcklkIGNvbHVtbiBleGlzdHMgYmVmb3JlIGZpbHRlcmluZ1xuICAgICAgaWYgKGRhaWx5T3JkZXJJZEluZGV4ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBvcmRlckl0ZW1zVG9LZWVwID0gb3JkZXJJdGVtc1Jvd3MuZmlsdGVyKGl0ZW1Sb3cgPT4gaXRlbVJvd1tkYWlseU9yZGVySWRJbmRleF0gIT09IGRhaWx5T3JkZXJJZCk7XG4gICAgICB9XG4gIH1cblxuICAvLyA0LiBQcmVwYXJlIGJhdGNoIHVwZGF0ZSBkYXRhIHRvIGNsZWFyIGFuZCByZXdyaXRlIGJvdGggc2hlZXRzXG4gIGF3YWl0IGJhdGNoVXBkYXRlU2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCBbXG4gICAge1xuICAgICAgcmFuZ2U6IGAke0RBSUxZX09SREVSU19TSEVFVF9OQU1FfSFBMTpEYCxcbiAgICAgIHZhbHVlczogW2RhaWx5T3JkZXJzSGVhZGVycywgLi4uZGFpbHlPcmRlcnNUb0tlZXBdLFxuICAgIH0sXG4gICAge1xuICAgICAgcmFuZ2U6IGAke09SREVSX0lURU1TX1NIRUVUX05BTUV9IUExOk1gLFxuICAgICAgdmFsdWVzOiBvcmRlckl0ZW1zSGVhZGVycy5sZW5ndGggPiAwID8gW29yZGVySXRlbXNIZWFkZXJzLCAuLi5vcmRlckl0ZW1zVG9LZWVwXSA6IFtdLFxuICAgIH1cbiAgXSk7XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xufVxuXG5cbi8qKlxuICogU3VibWl0cyBhbiBvcmRlciBhbmQgc2F2ZXMgaXQgdG8gdGhlICdvcmRlcl9pdGVtcycgc2hlZXQuXG4gKiBAcGFyYW0ge0ZpbmFsT3JkZXJ9IG9yZGVyIC0gVGhlIGNvbXBsZXRlIG9yZGVyIGRldGFpbHMuXG4gKiBAcmV0dXJucyB7UHJvbWlzZTx7c3VjY2VzczogYm9vbGVhbn0+fSBBIHN1Y2Nlc3MgZmxhZy5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHN1Ym1pdE9yZGVyKG9yZGVyOiBGaW5hbE9yZGVyKTogUHJvbWlzZTx7IHN1Y2Nlc3M6IGJvb2xlYW4gfT4ge1xuICAgIGNvbnN0IGFsbEl0ZW1zUmFuZ2UgPSBgJHtPUkRFUl9JVEVNU19TSEVFVF9OQU1FfSFBMjpBYDtcbiAgICBjb25zdCBhbGxJdGVtSWRzRGF0YSA9IGF3YWl0IGdldFNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgYWxsSXRlbXNSYW5nZSk7XG4gICAgbGV0IGxhc3RJZE51bSA9IGFsbEl0ZW1JZHNEYXRhLmxlbmd0aCA+IDBcbiAgICAgICAgPyBNYXRoLm1heCgwLCAuLi5hbGxJdGVtSWRzRGF0YS5tYXAocm93ID0+IHBhcnNlSW50KChyb3dbMF0gfHwgJ29pMCcpLnJlcGxhY2UoJ29pJywgJycpLCAxMCkpLmZpbHRlcihudW0gPT4gIWlzTmFOKG51bSkpKVxuICAgICAgICA6IDA7XG5cbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCk7XG4gICAgY29uc3Qgb3JkZXJWYWx1ZXMgPSBbXTtcblxuICAgIGZvciAoY29uc3QgaXRlbSBvZiBvcmRlci5pdGVtcykge1xuICAgICAgICBsYXN0SWROdW0rKztcbiAgICAgICAgY29uc3QgbmV3SWQgPSBgb2kke2xhc3RJZE51bS50b1N0cmluZygpLnBhZFN0YXJ0KDMsICcwJyl9YDtcbiAgICAgICAgY29uc3Qgb3B0aW9uc1N0cmluZyA9IE9iamVjdC5lbnRyaWVzKGl0ZW0ub3B0aW9ucykubWFwKChba2V5LCB2YWx1ZV0pID0+IGAke2tleX06JHt2YWx1ZX1gKS5qb2luKCcsICcpO1xuXG4gICAgICAgIG9yZGVyVmFsdWVzLnB1c2goW1xuICAgICAgICAgICAgbmV3SWQsXG4gICAgICAgICAgICBvcmRlci5kYWlseU9yZGVySWQsXG4gICAgICAgICAgICBub3csXG4gICAgICAgICAgICBvcmRlci51c2VybmFtZSxcbiAgICAgICAgICAgIG9yZGVyLnZlbmRvcklkLFxuICAgICAgICAgICAgb3JkZXIudmVuZG9yTmFtZSxcbiAgICAgICAgICAgIGl0ZW0ubWVudUl0ZW1JZCxcbiAgICAgICAgICAgIGl0ZW0ubmFtZSxcbiAgICAgICAgICAgIGl0ZW0ucXVhbnRpdHksXG4gICAgICAgICAgICBpdGVtLnByaWNlLFxuICAgICAgICAgICAgb3B0aW9uc1N0cmluZyxcbiAgICAgICAgICAgIG9yZGVyLm5vdGVzLFxuICAgICAgICAgICAgJ0ZBTFNFJyAvLyBpc1BhaWRcbiAgICAgICAgXSk7XG4gICAgfVxuICAgIFxuICAgIC8vIEVuc3VyZSBoZWFkZXJzIGV4aXN0XG4gICAgY29uc3QgaGVhZGVycyA9IGF3YWl0IGdldEhlYWRlcnMoU1BSRUFEU0hFRVRfSUQsIE9SREVSX0lURU1TX1NIRUVUX05BTUUpO1xuICAgIGlmIChoZWFkZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBhd2FpdCB1cGRhdGVTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGAke09SREVSX0lURU1TX1NIRUVUX05BTUV9IUExOk0xYCwgW1snaWQnLCAnZGFpbHlPcmRlcklkJywgJ3RpbWVzdGFtcCcsICd1c2VybmFtZScsICd2ZW5kb3JJZCcsICd2ZW5kb3JOYW1lJywgJ21lbnVJdGVtSWQnLCAnaXRlbU5hbWUnLCAncXVhbnRpdHknLCAncHJpY2UnLCAnb3B0aW9ucycsICdub3RlcycsICdpc1BhaWQnXV0pO1xuICAgIH1cblxuICAgIGlmIChvcmRlclZhbHVlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGF3YWl0IGFwcGVuZFNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgYCR7T1JERVJfSVRFTVNfU0hFRVRfTkFNRX0hQTpNYCwgb3JkZXJWYWx1ZXMpO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG59XG5cblxuZXhwb3J0IHR5cGUgT3JkZXJEZXRhaWxJdGVtID0ge1xuICAgIGlkOiBzdHJpbmc7XG4gICAgZGFpbHlPcmRlcklkOiBzdHJpbmc7XG4gICAgdGltZXN0YW1wOiBzdHJpbmc7XG4gICAgdXNlcm5hbWU6IHN0cmluZztcbiAgICB2ZW5kb3JJZDogc3RyaW5nO1xuICAgIHZlbmRvck5hbWU6IHN0cmluZztcbiAgICBtZW51SXRlbUlkOiBzdHJpbmc7XG4gICAgaXRlbU5hbWU6IHN0cmluZztcbiAgICBxdWFudGl0eTogbnVtYmVyO1xuICAgIHByaWNlOiBudW1iZXI7XG4gICAgb3B0aW9uczogc3RyaW5nO1xuICAgIG5vdGVzOiBzdHJpbmc7XG4gICAgaXNQYWlkOiBib29sZWFuO1xufTtcblxuLyoqXG4gKiBSZXRyaWV2ZXMgYWxsIG9yZGVyIGl0ZW1zIGZvciBhIHNwZWNpZmljIGRhaWx5IG9yZGVyLlxuICogQHBhcmFtIHtzdHJpbmd9IGRhaWx5T3JkZXJJZCBUaGUgSUQgb2YgdGhlIGRhaWx5IG9yZGVyLlxuICogQHJldHVybnMge1Byb21pc2U8e29yZGVyRGV0YWlsczogT3JkZXJEZXRhaWxJdGVtW10sIGRhaWx5T3JkZXI6IERhaWx5T3JkZXIgfCBudWxsfT59IEFuIG9iamVjdCBjb250YWluaW5nIHRoZSBsaXN0IG9mIG9yZGVyIGl0ZW1zIGFuZCB0aGUgZGFpbHkgb3JkZXIgZGV0YWlscy5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE9yZGVyRGV0YWlsc0J5RGFpbHlPcmRlcklkKGRhaWx5T3JkZXJJZDogc3RyaW5nKTogUHJvbWlzZTx7IG9yZGVyRGV0YWlsczogT3JkZXJEZXRhaWxJdGVtW10sIGRhaWx5T3JkZXI6IERhaWx5T3JkZXIgfCBudWxsIH0+IHtcbiAgICAvLyAxLiBHZXQgdGhlIGRhaWx5IG9yZGVyIGRldGFpbHNcbiAgICBjb25zdCBhbGxEYWlseU9yZGVycyA9IGF3YWl0IGdldEFsbERhaWx5T3JkZXJzKCk7XG4gICAgY29uc3QgZGFpbHlPcmRlciA9IGFsbERhaWx5T3JkZXJzLmZpbmQobyA9PiBvLmlkID09PSBkYWlseU9yZGVySWQpO1xuXG4gICAgaWYgKCFkYWlseU9yZGVyKSB7XG4gICAgICAgIHJldHVybiB7IG9yZGVyRGV0YWlsczogW10sIGRhaWx5T3JkZXI6IG51bGwgfTtcbiAgICB9XG5cbiAgICAvLyAyLiBHZXQgYWxsIG9yZGVyIGl0ZW1zXG4gICAgY29uc3Qgb3JkZXJJdGVtc1JhbmdlID0gYCR7T1JERVJfSVRFTVNfU0hFRVRfTkFNRX0hQTpNYDsgLy8gRXh0ZW5kZWQgdG8gY29sdW1uIE0gZm9yIG5ldyBmaWVsZHNcbiAgICBjb25zdCBvcmRlckl0ZW1zRGF0YSA9IGF3YWl0IGdldFNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgb3JkZXJJdGVtc1JhbmdlKTtcblxuICAgIGlmIChvcmRlckl0ZW1zRGF0YS5sZW5ndGggPCAyKSB7XG4gICAgICAgIHJldHVybiB7IG9yZGVyRGV0YWlsczogW10sIGRhaWx5T3JkZXI6IGRhaWx5T3JkZXIgfTtcbiAgICB9XG5cbiAgICBjb25zdCBoZWFkZXJzID0gb3JkZXJJdGVtc0RhdGFbMF0ubWFwKGggPT4gU3RyaW5nKGgpLnRyaW0oKSk7XG4gICAgY29uc3QgaGVhZGVyTWFwID0gaGVhZGVycy5yZWR1Y2UoKGFjYywgaGVhZGVyLCBpbmRleCkgPT4ge1xuICAgICAgICBhY2NbaGVhZGVyLnRyaW0oKV0gPSBpbmRleDtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB7fSBhcyBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+KTtcblxuICAgIC8vIENoZWNrIGZvciByZXF1aXJlZCBjb2x1bW5zXG4gICAgY29uc3QgcmVxdWlyZWRDb2xzID0gWydpZCcsICdkYWlseU9yZGVySWQnLCAndGltZXN0YW1wJywgJ3VzZXJuYW1lJywgJ3ZlbmRvcklkJywgJ3ZlbmRvck5hbWUnLCAnbWVudUl0ZW1JZCcsICdpdGVtTmFtZScsICdxdWFudGl0eScsICdwcmljZScsICdvcHRpb25zJywgJ25vdGVzJywgJ2lzUGFpZCddO1xuICAgIGZvciAoY29uc3QgY29sIG9mIHJlcXVpcmVkQ29scykge1xuICAgICAgICBpZiAoaGVhZGVyTWFwW2NvbF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3I6IFRoZSAnJHtPUkRFUl9JVEVNU19TSEVFVF9OQU1FfScgc2hlZXQgaXMgbWlzc2luZyB0aGUgcmVxdWlyZWQgY29sdW1uOiAnJHtjb2x9Jy5gKTtcbiAgICAgICAgICAgIHJldHVybiB7IG9yZGVyRGV0YWlsczogW10sIGRhaWx5T3JkZXI6IGRhaWx5T3JkZXIgfTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHJvd3MgPSBvcmRlckl0ZW1zRGF0YS5zbGljZSgxKTtcblxuICAgIC8vIDMuIEZpbHRlciBpdGVtcyB0aGF0IG1hdGNoIHRoZSBkYWlseU9yZGVySWRcbiAgICBjb25zdCBmaWx0ZXJlZEl0ZW1zID0gcm93cy5maWx0ZXIocm93ID0+IHJvd1toZWFkZXJNYXBbJ2RhaWx5T3JkZXJJZCddXSA9PT0gZGFpbHlPcmRlcklkKTtcblxuICAgIC8vIDQuIE1hcCB0byBPcmRlckRldGFpbEl0ZW0gb2JqZWN0c1xuICAgIGNvbnN0IG9yZGVyRGV0YWlsczogT3JkZXJEZXRhaWxJdGVtW10gPSBmaWx0ZXJlZEl0ZW1zLm1hcChyb3cgPT4gKHtcbiAgICAgICAgaWQ6IHJvd1toZWFkZXJNYXBbJ2lkJ11dIHx8ICcnLFxuICAgICAgICBkYWlseU9yZGVySWQ6IHJvd1toZWFkZXJNYXBbJ2RhaWx5T3JkZXJJZCddXSB8fCAnJyxcbiAgICAgICAgdGltZXN0YW1wOiByb3dbaGVhZGVyTWFwWyd0aW1lc3RhbXAnXV0gfHwgJycsXG4gICAgICAgIHVzZXJuYW1lOiByb3dbaGVhZGVyTWFwWyd1c2VybmFtZSddXSB8fCAnTi9BJyxcbiAgICAgICAgdmVuZG9ySWQ6IHJvd1toZWFkZXJNYXBbJ3ZlbmRvcklkJ11dIHx8ICcnLFxuICAgICAgICB2ZW5kb3JOYW1lOiByb3dbaGVhZGVyTWFwWyd2ZW5kb3JOYW1lJ11dIHx8ICcnLFxuICAgICAgICBtZW51SXRlbUlkOiByb3dbaGVhZGVyTWFwWydtZW51SXRlbUlkJ11dIHx8ICcnLFxuICAgICAgICBpdGVtTmFtZTogcm93W2hlYWRlck1hcFsnaXRlbU5hbWUnXV0gfHwgJ04vQScsXG4gICAgICAgIHF1YW50aXR5OiBwYXJzZUludChyb3dbaGVhZGVyTWFwWydxdWFudGl0eSddXSB8fCAnMCcsIDEwKSxcbiAgICAgICAgcHJpY2U6IHBhcnNlSW50KHJvd1toZWFkZXJNYXBbJ3ByaWNlJ11dIHx8ICcwJywgMTApLFxuICAgICAgICBvcHRpb25zOiByb3dbaGVhZGVyTWFwWydvcHRpb25zJ11dIHx8ICcnLFxuICAgICAgICBub3Rlczogcm93W2hlYWRlck1hcFsnbm90ZXMnXV0gfHwgJycsXG4gICAgICAgIGlzUGFpZDogcm93W2hlYWRlck1hcFsnaXNQYWlkJ11dID09PSAnVFJVRScgfHwgcm93W2hlYWRlck1hcFsnaXNQYWlkJ11dID09PSB0cnVlLFxuICAgIH0pKTtcblxuICAgIHJldHVybiB7IG9yZGVyRGV0YWlscywgZGFpbHlPcmRlciB9O1xufVxuXG5leHBvcnQgdHlwZSBVc2VyT3JkZXJHcm91cCA9IHtcbiAgICBkYWlseU9yZGVyOiBEYWlseU9yZGVyO1xuICAgIGl0ZW1zOiBPcmRlckRldGFpbEl0ZW1bXTtcbiAgICB0b3RhbDogbnVtYmVyO1xuICAgIG5vdGVzOiBzdHJpbmc7XG59XG5cbi8qKlxuICogUmV0cmlldmVzIGFsbCBvcmRlcnMgZm9yIGEgc3BlY2lmaWMgdXNlciwgZ3JvdXBlZCBieSBkYWlseSBvcmRlci5cbiAqIEBwYXJhbSB7c3RyaW5nfSB1c2VybmFtZSBUaGUgdXNlcm5hbWUgdG8gZmV0Y2ggb3JkZXJzIGZvci5cbiAqIEByZXR1cm5zIHtQcm9taXNlPFVzZXJPcmRlckdyb3VwW10+fSBBIGxpc3Qgb2YgdGhlIHVzZXIncyBvcmRlcnMuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRPcmRlcnNCeVVzZXJuYW1lKHVzZXJuYW1lOiBzdHJpbmcpOiBQcm9taXNlPFVzZXJPcmRlckdyb3VwW10+IHtcbiAgICAvLyAxLiBHZXQgYWxsIGRhaWx5IG9yZGVycyBhbmQgYWxsIG9yZGVyIGl0ZW1zXG4gICAgY29uc3QgW2FsbERhaWx5T3JkZXJzLCBhbGxPcmRlckl0ZW1zRGF0YV0gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgIGdldEFsbERhaWx5T3JkZXJzKCksXG4gICAgICAgIGdldFNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgYCR7T1JERVJfSVRFTVNfU0hFRVRfTkFNRX0hQTpNYClcbiAgICBdKTtcblxuICAgIGlmIChhbGxPcmRlckl0ZW1zRGF0YS5sZW5ndGggPCAyKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICBjb25zdCBpdGVtc0hlYWRlcnMgPSBhbGxPcmRlckl0ZW1zRGF0YVswXS5tYXAoaCA9PiBTdHJpbmcoaCkudHJpbSgpKTtcbiAgICBjb25zdCBpdGVtc0hlYWRlck1hcCA9IGl0ZW1zSGVhZGVycy5yZWR1Y2UoKGFjYywgaGVhZGVyLCBpbmRleCkgPT4ge1xuICAgICAgICBhY2NbaGVhZGVyLnRyaW0oKV0gPSBpbmRleDtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB7fSBhcyBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+KTtcblxuICAgIC8vIENoZWNrIGZvciByZXF1aXJlZCBjb2x1bW5zXG4gICAgY29uc3QgcmVxdWlyZWRDb2xzID0gWyd1c2VybmFtZScsICdkYWlseU9yZGVySWQnLCAnaWQnLCAndGltZXN0YW1wJywgJ3ZlbmRvcklkJywgJ3ZlbmRvck5hbWUnLCAnbWVudUl0ZW1JZCcsICdpdGVtTmFtZScsICdxdWFudGl0eScsICdwcmljZScsICdvcHRpb25zJywgJ25vdGVzJywgJ2lzUGFpZCddO1xuICAgIGZvciAoY29uc3QgY29sIG9mIHJlcXVpcmVkQ29scykge1xuICAgICAgICBpZiAoaXRlbXNIZWFkZXJNYXBbY29sXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvcjogVGhlICcke09SREVSX0lURU1TX1NIRUVUX05BTUV9JyBzaGVldCBpcyBtaXNzaW5nIHRoZSByZXF1aXJlZCBjb2x1bW46ICcke2NvbH0nLmApO1xuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gMi4gRmlsdGVyIGl0ZW1zIGZvciB0aGUgc3BlY2lmaWMgdXNlcm5hbWVcbiAgICBjb25zdCB1c2VySXRlbXNSb3dzID0gYWxsT3JkZXJJdGVtc0RhdGEuc2xpY2UoMSkuZmlsdGVyKHJvdyA9PiByb3dbaXRlbXNIZWFkZXJNYXBbJ3VzZXJuYW1lJ11dID09PSB1c2VybmFtZSk7XG4gICAgXG4gICAgaWYgKHVzZXJJdGVtc1Jvd3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICBjb25zdCB1c2VySXRlbXM6IE9yZGVyRGV0YWlsSXRlbVtdID0gdXNlckl0ZW1zUm93cy5tYXAocm93ID0+ICh7XG4gICAgICAgIGlkOiByb3dbaXRlbXNIZWFkZXJNYXBbJ2lkJ11dIHx8ICcnLFxuICAgICAgICBkYWlseU9yZGVySWQ6IHJvd1tpdGVtc0hlYWRlck1hcFsnZGFpbHlPcmRlcklkJ11dIHx8ICcnLFxuICAgICAgICB0aW1lc3RhbXA6IHJvd1tpdGVtc0hlYWRlck1hcFsndGltZXN0YW1wJ11dIHx8ICcnLFxuICAgICAgICB1c2VybmFtZTogcm93W2l0ZW1zSGVhZGVyTWFwWyd1c2VybmFtZSddXSB8fCAnTi9BJyxcbiAgICAgICAgdmVuZG9ySWQ6IHJvd1tpdGVtc0hlYWRlck1hcFsndmVuZG9ySWQnXV0gfHwgJycsXG4gICAgICAgIHZlbmRvck5hbWU6IHJvd1tpdGVtc0hlYWRlck1hcFsndmVuZG9yTmFtZSddXSB8fCAnJyxcbiAgICAgICAgbWVudUl0ZW1JZDogcm93W2l0ZW1zSGVhZGVyTWFwWydtZW51SXRlbUlkJ11dIHx8ICcnLFxuICAgICAgICBpdGVtTmFtZTogcm93W2l0ZW1zSGVhZGVyTWFwWydpdGVtTmFtZSddXSB8fCAnTi9BJyxcbiAgICAgICAgcXVhbnRpdHk6IHBhcnNlSW50KHJvd1tpdGVtc0hlYWRlck1hcFsncXVhbnRpdHknXV0gfHwgJzAnLCAxMCksXG4gICAgICAgIHByaWNlOiBwYXJzZUludChyb3dbaXRlbXNIZWFkZXJNYXBbJ3ByaWNlJ11dIHx8ICcwJywgMTApLFxuICAgICAgICBvcHRpb25zOiByb3dbaXRlbXNIZWFkZXJNYXBbJ29wdGlvbnMnXV0gfHwgJycsXG4gICAgICAgIG5vdGVzOiByb3dbaXRlbXNIZWFkZXJNYXBbJ25vdGVzJ11dIHx8ICcnLFxuICAgICAgICBpc1BhaWQ6IHJvd1tpdGVtc0hlYWRlck1hcFsnaXNQYWlkJ11dID09PSAnVFJVRScgfHwgcm93W2l0ZW1zSGVhZGVyTWFwWydpc1BhaWQnXV0gPT09IHRydWUsXG4gICAgfSkpO1xuICAgIFxuICAgIC8vIDMuIEdyb3VwIGl0ZW1zIGJ5IGRhaWx5T3JkZXJJZFxuICAgIGNvbnN0IGdyb3VwZWRCeURhaWx5T3JkZXIgPSB1c2VySXRlbXMucmVkdWNlKChhY2MsIGl0ZW0pID0+IHtcbiAgICAgICAgY29uc3Qga2V5ID0gaXRlbS5kYWlseU9yZGVySWQ7XG4gICAgICAgIGlmICghYWNjW2tleV0pIHtcbiAgICAgICAgICAgIGFjY1trZXldID0gW107XG4gICAgICAgIH1cbiAgICAgICAgYWNjW2tleV0ucHVzaChpdGVtKTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB7fSBhcyBSZWNvcmQ8c3RyaW5nLCBPcmRlckRldGFpbEl0ZW1bXT4pO1xuICAgIFxuICAgIFxuICAgIC8vIDQuIEZvcm1hdCB0aGUgZmluYWwgb3V0cHV0XG4gICAgY29uc3QgYWxsRGFpbHlPcmRlcnNNYXAgPSBuZXcgTWFwKGFsbERhaWx5T3JkZXJzLm1hcChvID0+IFtvLmlkLCBvXSkpO1xuICAgIGNvbnN0IHJlc3VsdDogVXNlck9yZGVyR3JvdXBbXSA9IFtdO1xuXG4gICAgZm9yIChjb25zdCBkYWlseU9yZGVySWQgaW4gZ3JvdXBlZEJ5RGFpbHlPcmRlcikge1xuICAgICAgICBjb25zdCBkYWlseU9yZGVyID0gYWxsRGFpbHlPcmRlcnNNYXAuZ2V0KGRhaWx5T3JkZXJJZCk7XG4gICAgICAgIGlmIChkYWlseU9yZGVyKSB7XG4gICAgICAgICAgICBjb25zdCBpdGVtcyA9IGdyb3VwZWRCeURhaWx5T3JkZXJbZGFpbHlPcmRlcklkXTtcbiAgICAgICAgICAgIGNvbnN0IHRvdGFsID0gaXRlbXMucmVkdWNlKChzdW0sIGl0ZW0pID0+IHN1bSArIGl0ZW0ucHJpY2UgKiBpdGVtLnF1YW50aXR5LCAwKTtcbiAgICAgICAgICAgIC8vIEFzc3VtZSBub3RlcyBhcmUgdGhlIHNhbWUgZm9yIGFsbCBpdGVtcyBpbiBhIHNpbmdsZSB1c2VyIG9yZGVyIHN1Ym1pc3Npb25cbiAgICAgICAgICAgIGNvbnN0IG5vdGVzID0gaXRlbXMubGVuZ3RoID4gMCA/IGl0ZW1zWzBdLm5vdGVzIDogJyc7IFxuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgZGFpbHlPcmRlcixcbiAgICAgICAgICAgICAgICBpdGVtcyxcbiAgICAgICAgICAgICAgICB0b3RhbCxcbiAgICAgICAgICAgICAgICBub3RlcyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8vIDUuIFNvcnQgdGhlIGZpbmFsIGdyb3VwcyBieSBkYXRlLCBtb3N0IHJlY2VudCBmaXJzdFxuICAgIHJlc3VsdC5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGVBID0gbmV3IERhdGUoYCR7YS5kYWlseU9yZGVyLmRhdGV9VCR7YS5kYWlseU9yZGVyLmRlYWRsaW5lfWApO1xuICAgICAgICBjb25zdCBkYXRlQiA9IG5ldyBEYXRlKGAke2IuZGFpbHlPcmRlci5kYXRlfVQke2IuZGFpbHlPcmRlci5kZWFkbGluZX1gKTtcbiAgICAgICAgcmV0dXJuIGRhdGVCLmdldFRpbWUoKSAtIGRhdGVBLmdldFRpbWUoKTtcbiAgICB9KTtcblxuICAgIHJldHVybiByZXN1bHQ7XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6ImlUQThYc0IifQ==
}}),
"[project]/src/app/admin/orders/[dailyOrderId]/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>OrderDetailPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SiteHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SiteHeader.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$admin$2f$OrderDetailClient$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/admin/OrderDetailClient.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$data$3a$ebe32f__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/ai/flows/data:ebe32f [app-ssr] (ecmascript) <text/javascript>");
"use client";
;
;
;
;
;
;
;
;
function OrderDetailPage() {
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const dailyOrderId = params.dailyOrderId;
    const [orderDetails, setOrderDetails] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [dailyOrder, setDailyOrder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const fetchOrderDetails = async ()=>{
        if (!dailyOrderId) return;
        setIsLoading(true);
        setError(null);
        try {
            const { orderDetails: fetchedDetails, dailyOrder: fetchedDailyOrder } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$data$3a$ebe32f__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getOrderDetailsByDailyOrderId"])(dailyOrderId);
            if (!fetchedDailyOrder) {
                setError("找不到指定的訂單。");
            } else {
                setOrderDetails(fetchedDetails);
                setDailyOrder(fetchedDailyOrder);
            }
        } catch (e) {
            console.error("Failed to fetch order details:", e);
            setError("無法載入訂單資料，請稍後再試。");
        } finally{
            setIsLoading(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchOrderDetails();
    }, [
        dailyOrderId
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-background font-body text-foreground",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SiteHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SiteHeader"], {}, void 0, false, {
                fileName: "[project]/src/app/admin/orders/[dailyOrderId]/page.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "container mx-auto p-4 sm:p-6 lg:p-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/admin",
                            className: "flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/orders/[dailyOrderId]/page.tsx",
                                    lineNumber: 51,
                                    columnNumber: 13
                                }, this),
                                "返回管理介面"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/orders/[dailyOrderId]/page.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/orders/[dailyOrderId]/page.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this),
                    isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center items-center h-64",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                className: "h-8 w-8 animate-spin text-primary"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/orders/[dailyOrderId]/page.tsx",
                                lineNumber: 58,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "ml-4 text-muted-foreground",
                                children: "正在載入訂單詳情..."
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/orders/[dailyOrderId]/page.tsx",
                                lineNumber: 59,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/orders/[dailyOrderId]/page.tsx",
                        lineNumber: 57,
                        columnNumber: 11
                    }, this) : error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center text-destructive bg-destructive/10 p-4 rounded-md",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/orders/[dailyOrderId]/page.tsx",
                            lineNumber: 63,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/orders/[dailyOrderId]/page.tsx",
                        lineNumber: 62,
                        columnNumber: 11
                    }, this) : dailyOrder ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "font-headline text-3xl font-bold mb-2",
                                children: [
                                    "訂單詳情：",
                                    dailyOrder.vendorName
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/orders/[dailyOrderId]/page.tsx",
                                lineNumber: 67,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-muted-foreground mb-6",
                                children: [
                                    "檢視 ",
                                    dailyOrder.date,
                                    " 的訂單，截止時間為 ",
                                    dailyOrder.deadline,
                                    "。"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/orders/[dailyOrderId]/page.tsx",
                                lineNumber: 68,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$admin$2f$OrderDetailClient$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OrderDetailClient"], {
                                initialOrderDetails: orderDetails
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/orders/[dailyOrderId]/page.tsx",
                                lineNumber: 69,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true) : null
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/orders/[dailyOrderId]/page.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/orders/[dailyOrderId]/page.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__242820ad._.js.map