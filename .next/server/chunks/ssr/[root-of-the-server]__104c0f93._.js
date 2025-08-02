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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript) <export default as ArrowLeft>");
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
    const onMyOrdersPage = pathname.startsWith('/my-orders');
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
                            lineNumber: 27,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-headline text-2xl font-bold text-foreground",
                            children: "餓了嗎？"
                        }, void 0, false, {
                            fileName: "[project]/src/components/SiteHeader.tsx",
                            lineNumber: 28,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/SiteHeader.tsx",
                    lineNumber: 26,
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
                                    lineNumber: 34,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm font-medium text-foreground",
                                    children: decodeURIComponent(username)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SiteHeader.tsx",
                                    lineNumber: 35,
                                    columnNumber: 29
                                }, this),
                                onMyOrdersPage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    size: "sm",
                                    asChild: true,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/order?username=${username}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                                className: "mr-2 h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SiteHeader.tsx",
                                                lineNumber: 40,
                                                columnNumber: 41
                                            }, this),
                                            "返回點餐"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/SiteHeader.tsx",
                                        lineNumber: 39,
                                        columnNumber: 37
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SiteHeader.tsx",
                                    lineNumber: 38,
                                    columnNumber: 33
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
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
                                                lineNumber: 47,
                                                columnNumber: 41
                                            }, this),
                                            "我的訂單"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/SiteHeader.tsx",
                                        lineNumber: 46,
                                        columnNumber: 37
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SiteHeader.tsx",
                                    lineNumber: 45,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true),
                        showAdminSection && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm font-medium text-foreground",
                            children: "管理者"
                        }, void 0, false, {
                            fileName: "[project]/src/components/SiteHeader.tsx",
                            lineNumber: 55,
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
                                lineNumber: 60,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/SiteHeader.tsx",
                            lineNumber: 59,
                            columnNumber: 26
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/SiteHeader.tsx",
                    lineNumber: 31,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/SiteHeader.tsx",
            lineNumber: 25,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/SiteHeader.tsx",
        lineNumber: 24,
        columnNumber: 9
    }, this);
}
}}),
"[project]/src/components/ui/card.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Card": (()=>Card),
    "CardContent": (()=>CardContent),
    "CardDescription": (()=>CardDescription),
    "CardFooter": (()=>CardFooter),
    "CardHeader": (()=>CardHeader),
    "CardTitle": (()=>CardTitle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
const Card = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("rounded-lg border bg-card text-card-foreground shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 9,
        columnNumber: 3
    }, this));
Card.displayName = "Card";
const CardHeader = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-1.5 p-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 24,
        columnNumber: 3
    }, this));
CardHeader.displayName = "CardHeader";
const CardTitle = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-2xl font-semibold leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 36,
        columnNumber: 3
    }, this));
CardTitle.displayName = "CardTitle";
const CardDescription = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 51,
        columnNumber: 3
    }, this));
CardDescription.displayName = "CardDescription";
const CardContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 63,
        columnNumber: 3
    }, this));
CardContent.displayName = "CardContent";
const CardFooter = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex items-center p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 71,
        columnNumber: 3
    }, this));
CardFooter.displayName = "CardFooter";
;
}}),
"[project]/src/components/ui/alert-dialog.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "AlertDialog": (()=>AlertDialog),
    "AlertDialogAction": (()=>AlertDialogAction),
    "AlertDialogCancel": (()=>AlertDialogCancel),
    "AlertDialogContent": (()=>AlertDialogContent),
    "AlertDialogDescription": (()=>AlertDialogDescription),
    "AlertDialogFooter": (()=>AlertDialogFooter),
    "AlertDialogHeader": (()=>AlertDialogHeader),
    "AlertDialogOverlay": (()=>AlertDialogOverlay),
    "AlertDialogPortal": (()=>AlertDialogPortal),
    "AlertDialogTitle": (()=>AlertDialogTitle),
    "AlertDialogTrigger": (()=>AlertDialogTrigger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-alert-dialog/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const AlertDialog = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"];
const AlertDialogTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"];
const AlertDialogPortal = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"];
const AlertDialogOverlay = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Overlay"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
        ...props,
        ref: ref
    }, void 0, false, {
        fileName: "[project]/src/components/ui/alert-dialog.tsx",
        lineNumber: 19,
        columnNumber: 3
    }, this));
AlertDialogOverlay.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Overlay"].displayName;
const AlertDialogContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AlertDialogPortal, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AlertDialogOverlay, {}, void 0, false, {
                fileName: "[project]/src/components/ui/alert-dialog.tsx",
                lineNumber: 35,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
                ref: ref,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", className),
                ...props
            }, void 0, false, {
                fileName: "[project]/src/components/ui/alert-dialog.tsx",
                lineNumber: 36,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/alert-dialog.tsx",
        lineNumber: 34,
        columnNumber: 3
    }, this));
AlertDialogContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"].displayName;
const AlertDialogHeader = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-2 text-center sm:text-left", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/alert-dialog.tsx",
        lineNumber: 52,
        columnNumber: 3
    }, this);
AlertDialogHeader.displayName = "AlertDialogHeader";
const AlertDialogFooter = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/alert-dialog.tsx",
        lineNumber: 66,
        columnNumber: 3
    }, this);
AlertDialogFooter.displayName = "AlertDialogFooter";
const AlertDialogTitle = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Title"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-lg font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/alert-dialog.tsx",
        lineNumber: 80,
        columnNumber: 3
    }, this));
AlertDialogTitle.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Title"].displayName;
const AlertDialogDescription = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Description"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/alert-dialog.tsx",
        lineNumber: 92,
        columnNumber: 3
    }, this));
AlertDialogDescription.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Description"].displayName;
const AlertDialogAction = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Action"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buttonVariants"])(), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/alert-dialog.tsx",
        lineNumber: 105,
        columnNumber: 3
    }, this));
AlertDialogAction.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Action"].displayName;
const AlertDialogCancel = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Cancel"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buttonVariants"])({
            variant: "outline"
        }), "mt-2 sm:mt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/alert-dialog.tsx",
        lineNumber: 117,
        columnNumber: 3
    }, this));
AlertDialogCancel.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Cancel"].displayName;
;
}}),
"[project]/src/components/ui/badge.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Badge": (()=>Badge),
    "badgeVariants": (()=>badgeVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
            secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
            destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
            outline: "text-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Badge({ className, variant, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/badge.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
;
}}),
"[project]/src/components/ui/separator.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Separator": (()=>Separator)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-separator/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const Separator = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, orientation = "horizontal", decorative = true, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        decorative: decorative,
        orientation: orientation,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("shrink-0 bg-border", orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/separator.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this));
Separator.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"].displayName;
;
}}),
"[project]/src/ai/flows/data:2761b3 [app-ssr] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"4010724a07593b3b50c8b04bd54a68103bf64a20d5":"getOrdersByUsername"},"src/ai/flows/order-flow.ts",""] */ __turbopack_context__.s({
    "getOrdersByUsername": (()=>getOrdersByUsername)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var getOrdersByUsername = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("4010724a07593b3b50c8b04bd54a68103bf64a20d5", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getOrdersByUsername"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vb3JkZXItZmxvdy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbid1c2Ugc2VydmVyJztcblxuaW1wb3J0IHsgZ2V0U2hlZXREYXRhLCBhcHBlbmRTaGVldERhdGEsIGdldEhlYWRlcnMsIHVwZGF0ZVNoZWV0RGF0YSwgYmF0Y2hVcGRhdGVTaGVldERhdGEsIGdldEF1dGhlbnRpY2F0ZWRDbGllbnQgfSBmcm9tICdAL3NlcnZpY2VzL3NoZWV0LXNlcnZpY2UnO1xuaW1wb3J0IHsgZ2V0VmVuZG9ycywgdHlwZSBWZW5kb3IgfSBmcm9tICcuL3ZlbmRvci1mbG93JztcbmltcG9ydCB7IHR5cGUgRmluYWxPcmRlciwgdHlwZSBPcmRlckl0ZW0gfSBmcm9tICdAL2NvbXBvbmVudHMvT3JkZXJTdW1tYXJ5JztcbmltcG9ydCB7IFB1Ymxpc2hPcmRlclJlcXVlc3RTY2hlbWEsIHR5cGUgUHVibGlzaE9yZGVyUmVxdWVzdCB9IGZyb20gJ0AvbGliL3NjaGVtYS9vcmRlcic7XG5pbXBvcnQgeyBmb3JtYXQsIHBhcnNlLCBwYXJzZUlTTywgaXNWYWxpZCB9IGZyb20gJ2RhdGUtZm5zJztcblxuY29uc3QgU1BSRUFEU0hFRVRfSUQgPSAnMVpqMmgwY1lscmIybUJhTmdsMS1Qb09LN3RsQ0N3RGNjQVhuNXc2NmhwNGMnO1xuY29uc3QgREFJTFlfT1JERVJTX1NIRUVUX05BTUUgPSAnZGFpbHlfb3JkZXJzJztcbmNvbnN0IE9SREVSX0lURU1TX1NIRUVUX05BTUUgPSAnb3JkZXJfaXRlbXMnO1xuXG5leHBvcnQgdHlwZSBEYWlseU9yZGVyID0ge1xuICAgIGlkOiBzdHJpbmc7XG4gICAgZGF0ZTogc3RyaW5nO1xuICAgIHZlbmRvcklkOiBzdHJpbmc7XG4gICAgdmVuZG9yTmFtZT86IHN0cmluZzsgLy8gT3B0aW9uYWw6IGZvciBkaXNwbGF5IG9uIGFkbWluIHBhZ2VcbiAgICBkZWFkbGluZTogc3RyaW5nO1xufTtcblxuLy8gVGhpcyB0eXBlIGlzIGZvciB0aGUgdXNlci1mYWNpbmcgb3JkZXIgcGFnZVxuZXhwb3J0IHR5cGUgQXZhaWxhYmxlT3JkZXIgPSB7XG4gICAgaWQ6IHN0cmluZzsgLy8gZGFpbHlPcmRlcklkXG4gICAgdmVuZG9yOiBWZW5kb3I7XG4gICAgZGF0ZTogc3RyaW5nO1xuICAgIGRlYWRsaW5lOiBzdHJpbmc7XG59O1xuXG4vLyBIZWxwZXIgdG8gc2FmZWx5IHBhcnNlIHRoZSBvcHRpb25zIHN0cmluZywgd2hpY2ggbWlnaHQgYmUgdmFsaWQgSlNPTiBvciBhIFwia2V5OnZhbHVlXCIgc3RyaW5nLlxuY29uc3Qgc2FmZVBhcnNlT3B0aW9ucyA9IChvcHRpb25zU3RyOiBzdHJpbmcpOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0+IHtcbiAgICBpZiAoIW9wdGlvbnNTdHIgfHwgdHlwZW9mIG9wdGlvbnNTdHIgIT09ICdzdHJpbmcnKSByZXR1cm4ge307XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gRmlyc3QsIHRyeSB0byBwYXJzZSBpdCBhcyBhIHZhbGlkIEpTT04gc3RyaW5nLlxuICAgICAgICAvLyBUaGlzIGhhbmRsZXMgY2FzZXMgbGlrZSAne1wi6aOv6YePXCI6XCLmraPluLhcIixcIui+o+W6plwiOlwi5LiN6L6jXCJ9J1xuICAgICAgICBjb25zdCBwYXJzZWQgPSBKU09OLnBhcnNlKG9wdGlvbnNTdHIpO1xuICAgICAgICBpZiAodHlwZW9mIHBhcnNlZCA9PT0gJ29iamVjdCcgJiYgcGFyc2VkICE9PSBudWxsICYmICFBcnJheS5pc0FycmF5KHBhcnNlZCkpIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJzZWQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIElmIEpTT04ucGFyc2UgZmFpbHMsIGl0J3Mgbm90IGEgSlNPTiBzdHJpbmcuXG4gICAgICAgIC8vIEFzc3VtZSBpdCdzIGEgc2ltcGxlIFwia2V5OnZhbHVlXCIgc3RyaW5nIGxpa2UgXCLpo6/ph4865q2j5bi4XCIuXG4gICAgICAgIC8vIFRoaXMgaXMgYSBmYWxsYmFjayBmb3IgZGF0YSB0aGF0IHdhc24ndCBzdG9yZWQgYXMgSlNPTi5cbiAgICAgICAgY29uc3QgcGFydHMgPSBvcHRpb25zU3RyLnNwbGl0KCc6Jyk7XG4gICAgICAgIGlmIChwYXJ0cy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IHBhcnRzWzBdLnRyaW0oKTtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gcGFydHNbMV0udHJpbSgpO1xuICAgICAgICAgICAgaWYgKGtleSAmJiB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7IFtrZXldOiB2YWx1ZSB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIElmIGl0J3Mgc29tZXRoaW5nIGVsc2Ugd2UgZG9uJ3QgcmVjb2duaXplLCBsb2cgaXQgYW5kIHJldHVybiBlbXB0eS5cbiAgICAgICAgY29uc29sZS53YXJuKGBDb3VsZCBub3QgcGFyc2Ugb3B0aW9ucyBzdHJpbmcgaW50byBhIHZhbGlkIG9iamVjdDogXCIke29wdGlvbnNTdHJ9XCJgKTtcbiAgICB9XG4gICAgLy8gUmV0dXJuIGVtcHR5IG9iamVjdCBpZiBpdCdzIG5vdCBhIHBhcnNhYmxlIEpTT04gb2JqZWN0IG9yIGEgc2ltcGxlIGtleTp2YWx1ZSBwYWlyLlxuICAgIHJldHVybiB7fTtcbn07XG5cblxuLy8gSGVscGVyIGZ1bmN0aW9uIHRvIGZvcm1hdCB0aW1lIGZyb20gU2hlZXRzICh3aGljaCBjYW4gYmUgYSBudW1iZXIpXG5jb25zdCBmb3JtYXRUaW1lID0gKHRpbWVWYWx1ZTogYW55KTogc3RyaW5nID0+IHtcbiAgICBpZiAodHlwZW9mIHRpbWVWYWx1ZSA9PT0gJ3N0cmluZycgJiYgdGltZVZhbHVlLm1hdGNoKC9eXFxkezJ9OlxcZHsyfSg6XFxkezJ9KT8kLykpIHtcbiAgICAgICAgcmV0dXJuIHRpbWVWYWx1ZS5zdWJzdHJpbmcoMCwgNSk7XG4gICAgfVxuICAgIFxuICAgIGlmICh0eXBlb2YgdGltZVZhbHVlID09PSAnbnVtYmVyJyAmJiB0aW1lVmFsdWUgPiAwICYmIHRpbWVWYWx1ZSA8IDEpIHtcbiAgICAgIC8vIEl0J3MgYSB0aW1lIHNlcmlhbCBudW1iZXIgZnJvbSBTaGVldHNcbiAgICAgIGNvbnN0IHRvdGFsU2Vjb25kcyA9IE1hdGgucm91bmQodGltZVZhbHVlICogODY0MDApO1xuICAgICAgY29uc3QgaG91cnMgPSBNYXRoLmZsb29yKHRvdGFsU2Vjb25kcyAvIDM2MDApO1xuICAgICAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IoKHRvdGFsU2Vjb25kcyAlIDM2MDApIC8gNjApO1xuICAgICAgcmV0dXJuIGAke2hvdXJzLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKX06JHttaW51dGVzLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKX1gO1xuICAgIH1cblxuICAgIC8vIFRyeSBwYXJzaW5nIGFzIGEgZGF0ZSBzdHJpbmcgdG8gZXh0cmFjdCB0aW1lXG4gICAgaWYgKHR5cGVvZiB0aW1lVmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBkYXRlID0gcGFyc2VJU08odGltZVZhbHVlKTtcbiAgICAgICAgICAgIGlmIChpc1ZhbGlkKGRhdGUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZvcm1hdChkYXRlLCAnSEg6bW0nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgLy8gSWdub3JlIHBhcnNlIGVycm9ycyBmcm9tIElTT1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjb25zdCB0aW1lTWF0Y2ggPSB0aW1lVmFsdWUubWF0Y2goLyhcXGR7Mn06XFxkezJ9KS8pO1xuICAgICAgICBpZiAodGltZU1hdGNoKSByZXR1cm4gdGltZU1hdGNoWzBdO1xuICAgIH1cbiAgICBcbiAgICAvLyBGYWxsYmFjayBmb3IgdW5leHBlY3RlZCBmb3JtYXRzXG4gICAgcmV0dXJuICcwMDowMCc7IFxufTtcblxuLy8gSGVscGVyIGZ1bmN0aW9uIHRvIGZvcm1hdCBkYXRlIGZyb20gU2hlZXRzICh3aGljaCBjYW4gYmUgYSBudW1iZXIgb3Igc3RyaW5nKVxuY29uc3QgZm9ybWF0RGF0ZSA9IChkYXRlVmFsdWU6IGFueSk6IHN0cmluZyA9PiB7XG4gICAgaWYgKCFkYXRlVmFsdWUpIHJldHVybiBmb3JtYXQobmV3IERhdGUoKSwgJ3l5eXktTU0tZGQnKTsgLy8gUmV0dXJuIHRvZGF5J3MgZGF0ZSBpZiBlbXB0eVxuXG4gICAgbGV0IGRhdGU7XG4gICAgXG4gICAgLy8gSGFuZGxlIFNoZWV0cyBkYXRlIHNlcmlhbCBudW1iZXIgKG51bWJlciBvZiBkYXlzIHNpbmNlIDE4OTktMTItMzApXG4gICAgaWYgKHR5cGVvZiBkYXRlVmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgICAgIGNvbnN0IGV4Y2VsRXBvY2ggPSBuZXcgRGF0ZShEYXRlLlVUQygxODk5LCAxMSwgMzApKTtcbiAgICAgICAgZGF0ZSA9IG5ldyBEYXRlKGV4Y2VsRXBvY2guZ2V0VGltZSgpICsgZGF0ZVZhbHVlICogODY0MDAwMDApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEhhbmRsZSBJU08gc3RyaW5nIGxpa2UgJzIwMjQtMDctMjVUMDA6MDA6MDAuMDAwWicgb3Igc2ltcGxlIHN0cmluZyAnMjAyNC0wNy0yNSdcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgZGF0ZSA9IHBhcnNlSVNPKFN0cmluZyhkYXRlVmFsdWUpKTtcbiAgICAgICAgICAgLy8gSWYgSVNPIHBhcnNpbmcgZmFpbHMsIHRyeSB0aGUgc2ltcGxlIGZvcm1hdFxuICAgICAgICAgICBpZiAoIWlzVmFsaWQoZGF0ZSkpIHtcbiAgICAgICAgICAgICAgIGRhdGUgPSBwYXJzZShTdHJpbmcoZGF0ZVZhbHVlKSwgJ3l5eXktTU0tZGQnLCBuZXcgRGF0ZSgpKTtcbiAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAgZGF0ZSA9IHBhcnNlKFN0cmluZyhkYXRlVmFsdWUpLCAneXl5eS1NTS1kZCcsIG5ldyBEYXRlKCkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8vIElmIGRhdGUgaXMgdmFsaWQsIGZvcm1hdCBpdCwgb3RoZXJ3aXNlIHJldHVybiB0b2RheSdzIGRhdGUgYXMgYSBmYWxsYmFja1xuICAgIHJldHVybiBpc1ZhbGlkKGRhdGUpID8gZm9ybWF0KGRhdGUsICd5eXl5LU1NLWRkJykgOiBmb3JtYXQobmV3IERhdGUoKSwgJ3l5eXktTU0tZGQnKTtcbn07XG5cblxuLyoqXG4gKiBSZXRyaWV2ZXMgYWxsIGF2YWlsYWJsZSBvcmRlcnMgZnJvbSB0aGUgZGFpbHlfb3JkZXJzIHNoZWV0LlxuICogQW55IG9yZGVyIHByZXNlbnQgaXMgY29uc2lkZXJlZCBhdmFpbGFibGUuXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxBdmFpbGFibGVPcmRlcltdPn0gQSBsaXN0IG9mIGF2YWlsYWJsZSB2ZW5kb3JzIGFuZCB0aGVpciBkZWFkbGluZXMuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBdmFpbGFibGVPcmRlcnMoKTogUHJvbWlzZTxBdmFpbGFibGVPcmRlcltdPiB7XG4gICAgY29uc3QgZGFpbHlPcmRlcnNSYW5nZSA9IGAke0RBSUxZX09SREVSU19TSEVFVF9OQU1FfSFBOkRgO1xuICAgIGNvbnN0IFtkYWlseU9yZGVyc0RhdGEsIGFsbFZlbmRvcnNdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGRhaWx5T3JkZXJzUmFuZ2UpLFxuICAgICAgICBnZXRWZW5kb3JzKClcbiAgICBdKTtcblxuICAgIGlmICghZGFpbHlPcmRlcnNEYXRhIHx8IGRhaWx5T3JkZXJzRGF0YS5sZW5ndGggPCAyKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgaGVhZGVyID0gZGFpbHlPcmRlcnNEYXRhWzBdO1xuICAgIGNvbnN0IHJvd3MgPSBkYWlseU9yZGVyc0RhdGEuc2xpY2UoMSk7XG5cbiAgICBjb25zdCBoZWFkZXJNYXAgPSBoZWFkZXIucmVkdWNlKChhY2MsIGgsIGkpID0+IHtcbiAgICAgICAgYWNjW1N0cmluZyhoKV0gPSBpO1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgIH0sIHt9IGFzIFJlY29yZDxzdHJpbmcsIG51bWJlcj4pO1xuXG4gICAgY29uc3QgYWxsVmVuZG9yc01hcCA9IG5ldyBNYXAoYWxsVmVuZG9ycy5tYXAodiA9PiBbdi52ZW5kb3JJZCwgdl0pKTtcblxuICAgIGNvbnN0IGF2YWlsYWJsZU9yZGVyczogQXZhaWxhYmxlT3JkZXJbXSA9IFtdO1xuXG4gICAgZm9yIChjb25zdCByb3cgb2Ygcm93cykge1xuICAgICAgICBpZiAocm93LmV2ZXJ5KGNlbGwgPT4gIWNlbGwpKSBjb250aW51ZTsgLy8gU2tpcCBjb21wbGV0ZWx5IGVtcHR5IHJvd3NcblxuICAgICAgICBjb25zdCBpZCA9IHJvd1toZWFkZXJNYXBbJ2lkJ11dO1xuICAgICAgICBjb25zdCB2ZW5kb3JJZCA9IHJvd1toZWFkZXJNYXBbJ3ZlbmRvcklkJ11dO1xuICAgICAgICBjb25zdCBkYXRlUmF3ID0gcm93W2hlYWRlck1hcFsnZGF0ZSddXTtcbiAgICAgICAgY29uc3QgZGVhZGxpbmVSYXcgPSByb3dbaGVhZGVyTWFwWydkZWFkbGluZSddXTtcblxuICAgICAgICBpZiAoIWlkIHx8ICF2ZW5kb3JJZCkgY29udGludWU7IC8vIFNraXAgcm93cyB3aXRob3V0IGVzc2VudGlhbCBkYXRhXG5cbiAgICAgICAgY29uc3QgdmVuZG9yID0gYWxsVmVuZG9yc01hcC5nZXQodmVuZG9ySWQpO1xuICAgICAgICBpZiAoIXZlbmRvciB8fCAhdmVuZG9yLmlzQWN0aXZlKSBjb250aW51ZTtcblxuICAgICAgICBhdmFpbGFibGVPcmRlcnMucHVzaCh7XG4gICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICB2ZW5kb3IsXG4gICAgICAgICAgICBkYXRlOiBmb3JtYXREYXRlKGRhdGVSYXcpLFxuICAgICAgICAgICAgZGVhZGxpbmU6IGZvcm1hdFRpbWUoZGVhZGxpbmVSYXcpIC8vIEZvcm1hdCB0aGUgZGVhZGxpbmVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGF2YWlsYWJsZU9yZGVycztcbn1cblxuLyoqXG4gKiBSZXRyaWV2ZXMgYWxsIGRhaWx5IG9yZGVycyBmb3IgYWRtaW4gZGlzcGxheS5cbiAqIEByZXR1cm5zIHtQcm9taXNlPERhaWx5T3JkZXJbXT59IEEgbGlzdCBvZiBhbGwgcHVibGlzaGVkIG9yZGVycy5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbERhaWx5T3JkZXJzKCk6IFByb21pc2U8RGFpbHlPcmRlcltdPiB7XG4gICAgY29uc3QgZGFpbHlPcmRlcnNSYW5nZSA9IGAke0RBSUxZX09SREVSU19TSEVFVF9OQU1FfSFBOkRgO1xuICAgICBjb25zdCBbZGFpbHlPcmRlcnNEYXRhLCBhbGxWZW5kb3JzXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgZ2V0U2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCBkYWlseU9yZGVyc1JhbmdlKSxcbiAgICAgICAgZ2V0VmVuZG9ycygpXG4gICAgXSk7XG4gICAgXG4gICAgaWYgKCFkYWlseU9yZGVyc0RhdGEgfHwgZGFpbHlPcmRlcnNEYXRhLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIGNvbnN0IGhlYWRlciA9IGRhaWx5T3JkZXJzRGF0YVswXTtcbiAgICBjb25zdCByb3dzID0gZGFpbHlPcmRlcnNEYXRhLnNsaWNlKDEpO1xuICAgIGNvbnN0IGFsbFZlbmRvcnNNYXAgPSBuZXcgTWFwKGFsbFZlbmRvcnMubWFwKHYgPT4gW3YudmVuZG9ySWQsIHZdKSk7XG4gICAgXG4gICAgY29uc3QgaGVhZGVyTWFwID0gaGVhZGVyLnJlZHVjZSgoYWNjLCBoLCBpKSA9PiB7XG4gICAgICAgIGFjY1tTdHJpbmcoaCldID0gaTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB7fSBhcyBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+KTtcblxuICAgIGNvbnN0IG9yZGVycyA9IHJvd3MubWFwKHJvdyA9PiB7XG4gICAgICAgIGNvbnN0IHZlbmRvcklkID0gcm93W2hlYWRlck1hcFsndmVuZG9ySWQnXV07XG4gICAgICAgIGNvbnN0IHZlbmRvciA9IGFsbFZlbmRvcnNNYXAuZ2V0KHZlbmRvcklkKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZDogcm93W2hlYWRlck1hcFsnaWQnXV0gfHwgJycsXG4gICAgICAgICAgICBkYXRlOiBmb3JtYXREYXRlKHJvd1toZWFkZXJNYXBbJ2RhdGUnXV0pLFxuICAgICAgICAgICAgdmVuZG9ySWQ6IHZlbmRvcklkIHx8ICcnLFxuICAgICAgICAgICAgdmVuZG9yTmFtZTogdmVuZG9yID8gdmVuZG9yLnZlbmRvck5hbWUgOiAn5pyq55+l5bqX5a62JyxcbiAgICAgICAgICAgIGRlYWRsaW5lOiBmb3JtYXRUaW1lKHJvd1toZWFkZXJNYXBbJ2RlYWRsaW5lJ11dKVxuICAgICAgICB9O1xuICAgIH0pLmZpbHRlcihvcmRlciA9PiBvcmRlci5pZCk7IC8vIEZpbHRlciBvdXQgYW55IGVtcHR5IHJvd3NcblxuICAgIC8vIFNvcnQgb3JkZXJzIGJ5IGRhdGUgYW5kIHRoZW4gYnkgZGVhZGxpbmUsIGFzY2VuZGluZyAoY2xvc2VzdCBmaXJzdClcbiAgICBvcmRlcnMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICBjb25zdCBkYXRlQSA9IG5ldyBEYXRlKGAke2EuZGF0ZX1UJHthLmRlYWRsaW5lfWApO1xuICAgICAgICBjb25zdCBkYXRlQiA9IG5ldyBEYXRlKGAke2IuZGF0ZX1UJHtiLmRlYWRsaW5lfWApO1xuICAgICAgICByZXR1cm4gZGF0ZUEuZ2V0VGltZSgpIC0gZGF0ZUIuZ2V0VGltZSgpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG9yZGVycztcbn1cblxuXG4vKipcbiAqIFB1Ymxpc2hlcyBhIG5ldyBvcmRlciBmb3IgYSBzcGVjaWZpYyBkYXRlLCB2ZW5kb3IgYW5kIGRlYWRsaW5lLlxuICogQHBhcmFtIHtQdWJsaXNoT3JkZXJSZXF1ZXN0fSByZXEgLSBUaGUgcmVxdWVzdCBjb250YWluaW5nIGRhdGUsIHZlbmRvcklkIGFuZCBkZWFkbGluZS5cbiAqIEByZXR1cm5zIHtQcm9taXNlPHtzdWNjZXNzOiBib29sZWFufT59IEEgc3VjY2VzcyBmbGFnLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcHVibGlzaE9yZGVyKHJlcTogUHVibGlzaE9yZGVyUmVxdWVzdCk6IFByb21pc2U8eyBzdWNjZXNzOiBib29sZWFuIH0+IHtcbiAgY29uc3QgdmFsaWRhdGlvbiA9IFB1Ymxpc2hPcmRlclJlcXVlc3RTY2hlbWEuc2FmZVBhcnNlKHJlcSk7XG4gIGlmICghdmFsaWRhdGlvbi5zdWNjZXNzKSB7XG4gICAgY29uc3QgZXJyb3JNc2cgPSB2YWxpZGF0aW9uLmVycm9yLmVycm9ycy5tYXAoZSA9PiBgJHtlLnBhdGguam9pbignLicpfTogJHtlLm1lc3NhZ2V9YCkuam9pbignLCAnKTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYOi8uOWFpeizh+aWmeacieiqpDogJHtlcnJvck1zZ31gKTtcbiAgfVxuXG4gIGNvbnN0IGFsbE9yZGVyc1JhbmdlID0gYCR7REFJTFlfT1JERVJTX1NIRUVUX05BTUV9IUEyOkFgO1xuICBjb25zdCBhbGxPcmRlcklkc0RhdGEgPSBhd2FpdCBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGFsbE9yZGVyc1JhbmdlKTtcbiAgICBjb25zdCBsYXN0SWROdW0gPSBhbGxPcmRlcklkc0RhdGEubGVuZ3RoID4gMCBcbiAgICAgICAgPyBNYXRoLm1heCgwLCAuLi5hbGxPcmRlcklkc0RhdGEubWFwKHJvdyA9PiBwYXJzZUludCgocm93WzBdIHx8ICdkbzAnKS5yZXBsYWNlKCdkbycsICcnKSwgMTApKS5maWx0ZXIobnVtID0+ICFpc05hTihudW0pKSlcbiAgICAgICAgOiAwO1xuICBjb25zdCBuZXdJZCA9IGBkbyR7KGxhc3RJZE51bSArIDEpLnRvU3RyaW5nKCkucGFkU3RhcnQoMywgJzAnKX1gO1xuXG4gIGNvbnN0IHZhbHVlcyA9IFtcbiAgICBbbmV3SWQsIHJlcS5kYXRlLCByZXEudmVuZG9ySWQsIHJlcS5kZWFkbGluZV1cbiAgXTtcbiAgXG4gIC8vIEVuc3VyZSBoZWFkZXJzIGV4aXN0XG4gIGNvbnN0IGhlYWRlcnMgPSBhd2FpdCBnZXRIZWFkZXJzKFNQUkVBRFNIRUVUX0lELCBEQUlMWV9PUkRFUlNfU0hFRVRfTkFNRSk7XG4gIGlmIChoZWFkZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgYXdhaXQgdXBkYXRlU2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCBgJHtEQUlMWV9PUkRFUlNfU0hFRVRfTkFNRX0hQTE6RDFgLCBbWydpZCcsICdkYXRlJywgJ3ZlbmRvcklkJywgJ2RlYWRsaW5lJ11dKTtcbiAgfVxuXG4gIGF3YWl0IGFwcGVuZFNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgYCR7REFJTFlfT1JERVJTX1NIRUVUX05BTUV9IUE6RGAsIHZhbHVlcyk7XG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbn1cblxuZXhwb3J0IHR5cGUgVXBkYXRlRGFpbHlPcmRlclJlcXVlc3QgPSB7XG4gICAgb3JkZXJJZDogc3RyaW5nO1xuICAgIHZlbmRvcklkOiBzdHJpbmc7XG4gICAgZGF0ZTogc3RyaW5nO1xuICAgIGRlYWRsaW5lOiBzdHJpbmc7XG59XG5cbi8qKlxuICogVXBkYXRlcyBhbiBleGlzdGluZyBkYWlseSBvcmRlcidzIGRhdGUgYW5kIGRlYWRsaW5lLlxuICogQHBhcmFtIHtVcGRhdGVEYWlseU9yZGVyUmVxdWVzdH0gcmVxIC0gVGhlIHJlcXVlc3QgY29udGFpbmluZyBvcmRlcklkLCBkYXRlIGFuZCBkZWFkbGluZS5cbiAqIEByZXR1cm5zIHtQcm9taXNlPHtzdWNjZXNzOiBib29sZWFufT59IEEgc3VjY2VzcyBmbGFnLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlRGFpbHlPcmRlcihyZXE6IFVwZGF0ZURhaWx5T3JkZXJSZXF1ZXN0KTogUHJvbWlzZTx7IHN1Y2Nlc3M6IGJvb2xlYW4gfT4ge1xuICAgIGNvbnN0IHsgb3JkZXJJZCwgdmVuZG9ySWQsIGRhdGUsIGRlYWRsaW5lIH0gPSByZXE7XG4gICAgXG4gICAgLy8gMS4gRmluZCB0aGUgcm93IG9mIHRoZSBvcmRlciB0byB1cGRhdGVcbiAgICBjb25zdCBhbGxPcmRlcnNEYXRhID0gYXdhaXQgZ2V0U2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCBgJHtEQUlMWV9PUkRFUlNfU0hFRVRfTkFNRX0hQTpBYCk7XG4gICAgY29uc3Qgcm93SW5kZXggPSBhbGxPcmRlcnNEYXRhLmZpbmRJbmRleChyb3cgPT4gcm93WzBdID09PSBvcmRlcklkKTtcbiAgICBcbiAgICBpZiAocm93SW5kZXggPT09IC0xKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihg5om+5LiN5YiwIElEIOeCuiAke29yZGVySWR9IOeahOioguWWruOAgmApO1xuICAgIH1cblxuICAgIC8vICsxIGJlY2F1c2Ugc2hlZXQgcm93cyBhcmUgMS1iYXNlZC5cbiAgICBjb25zdCByb3dUb1VwZGF0ZSA9IHJvd0luZGV4ICsgMTtcbiAgICBcbiAgICAvLyBXZSB1cGRhdGUgZGF0ZSBhbmQgZGVhZGxpbmUuIFZlbmRvcklkIGlzIG5vdCBjaGFuZ2VkLlxuICAgIC8vIFRoZSByYW5nZSBzaG91bGQgYmUgQng6RHggdG8gdXBkYXRlIGRhdGUgYW5kIGRlYWRsaW5lLlxuICAgIGNvbnN0IHVwZGF0ZVJhbmdlID0gYCR7REFJTFlfT1JERVJTX1NIRUVUX05BTUV9IUIke3Jvd1RvVXBkYXRlfTpEJHtyb3dUb1VwZGF0ZX1gO1xuICAgIGF3YWl0IHVwZGF0ZVNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgdXBkYXRlUmFuZ2UsIFtbZGF0ZSwgdmVuZG9ySWQsIGRlYWRsaW5lXV0pO1xuXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xufVxuXG5cbi8qKlxuICogRGVsZXRlcyBhIHB1Ymxpc2hlZCBkYWlseSBvcmRlciBhbmQgaXRzIGFzc29jaWF0ZWQgb3JkZXIgaXRlbXMuXG4gKiBAcGFyYW0ge3N0cmluZ30gZGFpbHlPcmRlcklkIFRoZSBJRCBvZiB0aGUgZGFpbHkgb3JkZXIgdG8gZGVsZXRlLlxuICogQHJldHVybnMge1Byb21pc2U8e3N1Y2Nlc3M6IGJvb2xlYW59Pn0gQSBzdWNjZXNzIGZsYWcuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVEYWlseU9yZGVyKGRhaWx5T3JkZXJJZDogc3RyaW5nKTogUHJvbWlzZTx7IHN1Y2Nlc3M6IGJvb2xlYW4gfT4ge1xuICAvLyAxLiBHZXQgYWxsIGRhdGEgZnJvbSBib3RoIHNoZWV0c1xuICBjb25zdCBbZGFpbHlPcmRlcnNEYXRhV2l0aEhlYWRlciwgb3JkZXJJdGVtc0RhdGFXaXRoSGVhZGVyXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGAke0RBSUxZX09SREVSU19TSEVFVF9OQU1FfSFBOkRgKSxcbiAgICBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGAke09SREVSX0lURU1TX1NIRUVUX05BTUV9IUE6TWApLCAvLyBSZWFkIHVwIHRvIGNvbHVtbiBNXG4gIF0pO1xuXG4gIGlmIChkYWlseU9yZGVyc0RhdGFXaXRoSGVhZGVyLmxlbmd0aCA8IDIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG4gIH1cblxuICBjb25zdCBkYWlseU9yZGVyc0hlYWRlcnMgPSBkYWlseU9yZGVyc0RhdGFXaXRoSGVhZGVyWzBdO1xuICBjb25zdCBkYWlseU9yZGVyc1Jvd3MgPSBkYWlseU9yZGVyc0RhdGFXaXRoSGVhZGVyLnNsaWNlKDEpO1xuICBcbiAgY29uc3Qgb3JkZXJJdGVtc0hlYWRlcnMgPSBvcmRlckl0ZW1zRGF0YVdpdGhIZWFkZXIubGVuZ3RoID4gMCA/IG9yZGVySXRlbXNEYXRhV2l0aEhlYWRlclswXSA6IFtdO1xuICBjb25zdCBvcmRlckl0ZW1zUm93cyA9IG9yZGVySXRlbXNEYXRhV2l0aEhlYWRlci5sZW5ndGggPiAxID8gb3JkZXJJdGVtc0RhdGFXaXRoSGVhZGVyLnNsaWNlKDEpIDogW107XG5cbiAgLy8gMi4gRmlsdGVyIHRoZSByb3dzIHRvIGtlZXAgZm9yIGJvdGggc2hlZXRzXG4gIGNvbnN0IGRhaWx5T3JkZXJzVG9LZWVwID0gZGFpbHlPcmRlcnNSb3dzLmZpbHRlcihyb3cgPT4gcm93WzBdICE9PSBkYWlseU9yZGVySWQpO1xuXG4gIGxldCBvcmRlckl0ZW1zVG9LZWVwID0gb3JkZXJJdGVtc1Jvd3M7XG4gIGlmIChvcmRlckl0ZW1zUm93cy5sZW5ndGggPiAwICYmIG9yZGVySXRlbXNIZWFkZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IG9yZGVySXRlbXNIZWFkZXJNYXAgPSBvcmRlckl0ZW1zSGVhZGVycy5yZWR1Y2UoKGFjYywgaCwgaSkgPT4geyBhY2NbU3RyaW5nKGgpXSA9IGk7IHJldHVybiBhY2M7IH0sIHt9IGFzIFJlY29yZDxzdHJpbmcsIG51bWJlcj4pO1xuICAgICAgY29uc3QgZGFpbHlPcmRlcklkSW5kZXggPSBvcmRlckl0ZW1zSGVhZGVyTWFwWydkYWlseU9yZGVySWQnXTtcbiAgICAgIFxuICAgICAgLy8gRW5zdXJlIHRoZSBkYWlseU9yZGVySWQgY29sdW1uIGV4aXN0cyBiZWZvcmUgZmlsdGVyaW5nXG4gICAgICBpZiAoZGFpbHlPcmRlcklkSW5kZXggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIG9yZGVySXRlbXNUb0tlZXAgPSBvcmRlckl0ZW1zUm93cy5maWx0ZXIoaXRlbVJvdyA9PiBpdGVtUm93W2RhaWx5T3JkZXJJZEluZGV4XSAhPT0gZGFpbHlPcmRlcklkKTtcbiAgICAgIH1cbiAgfVxuXG4gIC8vIDQuIFByZXBhcmUgYmF0Y2ggdXBkYXRlIGRhdGEgdG8gY2xlYXIgYW5kIHJld3JpdGUgYm90aCBzaGVldHNcbiAgYXdhaXQgYmF0Y2hVcGRhdGVTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIFtcbiAgICB7XG4gICAgICByYW5nZTogYCR7REFJTFlfT1JERVJTX1NIRUVUX05BTUV9IUExOkRgLFxuICAgICAgdmFsdWVzOiBbZGFpbHlPcmRlcnNIZWFkZXJzLCAuLi5kYWlseU9yZGVyc1RvS2VlcF0sXG4gICAgfSxcbiAgICB7XG4gICAgICByYW5nZTogYCR7T1JERVJfSVRFTVNfU0hFRVRfTkFNRX0hQTE6TWAsXG4gICAgICB2YWx1ZXM6IG9yZGVySXRlbXNIZWFkZXJzLmxlbmd0aCA+IDAgPyBbb3JkZXJJdGVtc0hlYWRlcnMsIC4uLm9yZGVySXRlbXNUb0tlZXBdIDogW10sXG4gICAgfVxuICBdKTtcblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG59XG5cblxuLyoqXG4gKiBTdWJtaXRzIGFuIG9yZGVyIGFuZCBzYXZlcyBpdCB0byB0aGUgJ29yZGVyX2l0ZW1zJyBzaGVldC5cbiAqIElmIGVkaXRpbmcgYW4gZXhpc3Rpbmcgb3JkZXIsIGl0IGZpcnN0IGRlbGV0ZXMgdGhlIG9sZCBpdGVtcy5cbiAqIEBwYXJhbSB7RmluYWxPcmRlcn0gb3JkZXIgLSBUaGUgY29tcGxldGUgb3JkZXIgZGV0YWlscy5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNFZGl0aW5nIC0gQSBmbGFnIHRvIGluZGljYXRlIGlmIHRoaXMgaXMgYW4gZWRpdC5cbiAqIEByZXR1cm5zIHtQcm9taXNlPHtzdWNjZXNzOiBib29sZWFufT59IEEgc3VjY2VzcyBmbGFnLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc3VibWl0T3JkZXIob3JkZXI6IEZpbmFsT3JkZXIsIGlzRWRpdGluZzogYm9vbGVhbiA9IGZhbHNlKTogUHJvbWlzZTx7IHN1Y2Nlc3M6IGJvb2xlYW4gfT4ge1xuICAgIC8vIElmIGVkaXRpbmcsIGZpcnN0IGRlbGV0ZSBhbGwgZXhpc3RpbmcgaXRlbXMgZm9yIHRoYXQgdXNlciBpbiB0aGF0IGRhaWx5IG9yZGVyXG4gICAgaWYgKGlzRWRpdGluZykge1xuICAgICAgICBhd2FpdCBkZWxldGVVc2VyT3JkZXIoeyB1c2VybmFtZTogb3JkZXIudXNlcm5hbWUsIGRhaWx5T3JkZXJJZDogb3JkZXIuZGFpbHlPcmRlcklkIH0pO1xuICAgIH1cbiAgICBcbiAgICAvLyBUaGVuLCBhcHBlbmQgdGhlIG5ldy91cGRhdGVkIGl0ZW1zXG4gICAgY29uc3QgYWxsSXRlbXNSYW5nZSA9IGAke09SREVSX0lURU1TX1NIRUVUX05BTUV9IUEyOkFgO1xuICAgIGNvbnN0IGFsbEl0ZW1JZHNEYXRhID0gYXdhaXQgZ2V0U2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCBhbGxJdGVtc1JhbmdlKTtcbiAgICBsZXQgbGFzdElkTnVtID0gYWxsSXRlbUlkc0RhdGEubGVuZ3RoID4gMFxuICAgICAgICA/IE1hdGgubWF4KDAsIC4uLmFsbEl0ZW1JZHNEYXRhLm1hcChyb3cgPT4gcGFyc2VJbnQoKHJvd1swXSB8fCAnb2kwJykucmVwbGFjZSgnb2knLCAnJyksIDEwKSkuZmlsdGVyKG51bSA9PiAhaXNOYU4obnVtKSkpXG4gICAgICAgIDogMDtcblxuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKTtcbiAgICBjb25zdCBvcmRlclZhbHVlcyA9IFtdO1xuXG4gICAgZm9yIChjb25zdCBpdGVtIG9mIG9yZGVyLml0ZW1zKSB7XG4gICAgICAgIGxhc3RJZE51bSsrOyAvLyBJbmNyZW1lbnQgSUQgZm9yIGVhY2ggaXRlbSBpbiB0aGUgbG9vcFxuICAgICAgICBjb25zdCBuZXdJZCA9IGBvaSR7bGFzdElkTnVtLnRvU3RyaW5nKCkucGFkU3RhcnQoMywgJzAnKX1gO1xuICAgICAgICBjb25zdCBvcHRpb25zU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoaXRlbS5vcHRpb25zKTtcblxuICAgICAgICBvcmRlclZhbHVlcy5wdXNoKFtcbiAgICAgICAgICAgIG5ld0lkLFxuICAgICAgICAgICAgb3JkZXIuZGFpbHlPcmRlcklkLFxuICAgICAgICAgICAgbm93LFxuICAgICAgICAgICAgb3JkZXIudXNlcm5hbWUsXG4gICAgICAgICAgICBvcmRlci52ZW5kb3JJZCxcbiAgICAgICAgICAgIG9yZGVyLnZlbmRvck5hbWUsXG4gICAgICAgICAgICBpdGVtLm1lbnVJdGVtSWQsXG4gICAgICAgICAgICBpdGVtLm5hbWUsXG4gICAgICAgICAgICBpdGVtLnF1YW50aXR5LFxuICAgICAgICAgICAgaXRlbS5wcmljZSxcbiAgICAgICAgICAgIG9wdGlvbnNTdHJpbmcsXG4gICAgICAgICAgICBvcmRlci5ub3RlcyxcbiAgICAgICAgICAgICdGQUxTRScgLy8gaXNQYWlkXG4gICAgICAgIF0pO1xuICAgIH1cbiAgICBcbiAgICAvLyBFbnN1cmUgaGVhZGVycyBleGlzdFxuICAgIGNvbnN0IGhlYWRlcnMgPSBhd2FpdCBnZXRIZWFkZXJzKFNQUkVBRFNIRUVUX0lELCBPUkRFUl9JVEVNU19TSEVFVF9OQU1FKTtcbiAgICBpZiAoaGVhZGVycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgYXdhaXQgdXBkYXRlU2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCBgJHtPUkRFUl9JVEVNU19TSEVFVF9OQU1FfSFBMTpNMWAsIFtbJ2lkJywgJ2RhaWx5T3JkZXJJZCcsICd0aW1lc3RhbXAnLCAndXNlcm5hbWUnLCAndmVuZG9ySWQnLCAndmVuZG9yTmFtZScsICdtZW51SXRlbUlkJywgJ2l0ZW1OYW1lJywgJ3F1YW50aXR5JywgJ3ByaWNlJywgJ29wdGlvbnMnLCAnbm90ZXMnLCAnaXNQYWlkJ11dKTtcbiAgICB9XG5cbiAgICBpZiAob3JkZXJWYWx1ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBhd2FpdCBhcHBlbmRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGAke09SREVSX0lURU1TX1NIRUVUX05BTUV9IUE6TWAsIG9yZGVyVmFsdWVzKTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xufVxuXG5cbmV4cG9ydCB0eXBlIE9yZGVyRGV0YWlsSXRlbSA9IHtcbiAgICBpZDogc3RyaW5nO1xuICAgIGRhaWx5T3JkZXJJZDogc3RyaW5nO1xuICAgIHRpbWVzdGFtcDogc3RyaW5nO1xuICAgIHVzZXJuYW1lOiBzdHJpbmc7XG4gICAgdmVuZG9ySWQ6IHN0cmluZztcbiAgICB2ZW5kb3JOYW1lOiBzdHJpbmc7XG4gICAgbWVudUl0ZW1JZDogc3RyaW5nO1xuICAgIGl0ZW1OYW1lOiBzdHJpbmc7XG4gICAgcXVhbnRpdHk6IG51bWJlcjtcbiAgICBwcmljZTogbnVtYmVyO1xuICAgIG9wdGlvbnM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz47XG4gICAgbm90ZXM6IHN0cmluZztcbiAgICBpc1BhaWQ6IGJvb2xlYW47XG59O1xuXG4vKipcbiAqIFJldHJpZXZlcyBhbGwgb3JkZXIgaXRlbXMgZm9yIGEgc3BlY2lmaWMgZGFpbHkgb3JkZXIuXG4gKiBAcGFyYW0ge3N0cmluZ30gZGFpbHlPcmRlcklkIFRoZSBJRCBvZiB0aGUgZGFpbHkgb3JkZXIuXG4gKiBAcmV0dXJucyB7UHJvbWlzZTx7b3JkZXJEZXRhaWxzOiBPcmRlckRldGFpbEl0ZW1bXSwgZGFpbHlPcmRlcjogRGFpbHlPcmRlciB8IG51bGx9Pn0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIGxpc3Qgb2Ygb3JkZXIgaXRlbXMgYW5kIHRoZSBkYWlseSBvcmRlciBkZXRhaWxzLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0T3JkZXJEZXRhaWxzQnlEYWlseU9yZGVySWQoZGFpbHlPcmRlcklkOiBzdHJpbmcpOiBQcm9taXNlPHsgb3JkZXJEZXRhaWxzOiBPcmRlckRldGFpbEl0ZW1bXSwgZGFpbHlPcmRlcjogRGFpbHlPcmRlciB8IG51bGwgfT4ge1xuICAgIC8vIDEuIEdldCB0aGUgZGFpbHkgb3JkZXIgZGV0YWlsc1xuICAgIGNvbnN0IGFsbERhaWx5T3JkZXJzID0gYXdhaXQgZ2V0QWxsRGFpbHlPcmRlcnMoKTtcbiAgICBjb25zdCBkYWlseU9yZGVyID0gYWxsRGFpbHlPcmRlcnMuZmluZChvID0+IG8uaWQgPT09IGRhaWx5T3JkZXJJZCk7XG5cbiAgICBpZiAoIWRhaWx5T3JkZXIpIHtcbiAgICAgICAgcmV0dXJuIHsgb3JkZXJEZXRhaWxzOiBbXSwgZGFpbHlPcmRlcjogbnVsbCB9O1xuICAgIH1cblxuICAgIC8vIDIuIEdldCBhbGwgb3JkZXIgaXRlbXNcbiAgICBjb25zdCBvcmRlckl0ZW1zUmFuZ2UgPSBgJHtPUkRFUl9JVEVNU19TSEVFVF9OQU1FfSFBOk1gOyAvLyBFeHRlbmRlZCB0byBjb2x1bW4gTSBmb3IgbmV3IGZpZWxkc1xuICAgIGNvbnN0IG9yZGVySXRlbXNEYXRhID0gYXdhaXQgZ2V0U2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCBvcmRlckl0ZW1zUmFuZ2UpO1xuXG4gICAgaWYgKG9yZGVySXRlbXNEYXRhLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgcmV0dXJuIHsgb3JkZXJEZXRhaWxzOiBbXSwgZGFpbHlPcmRlcjogZGFpbHlPcmRlciB9O1xuICAgIH1cblxuICAgIGNvbnN0IGhlYWRlcnMgPSBvcmRlckl0ZW1zRGF0YVswXS5tYXAoaCA9PiBTdHJpbmcoaCkudHJpbSgpKTtcbiAgICBjb25zdCBoZWFkZXJNYXAgPSBoZWFkZXJzLnJlZHVjZSgoYWNjLCBoZWFkZXIsIGluZGV4KSA9PiB7XG4gICAgICAgIGFjY1toZWFkZXIudHJpbSgpXSA9IGluZGV4O1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgIH0sIHt9IGFzIFJlY29yZDxzdHJpbmcsIG51bWJlcj4pO1xuXG4gICAgLy8gQ2hlY2sgZm9yIHJlcXVpcmVkIGNvbHVtbnNcbiAgICBjb25zdCByZXF1aXJlZENvbHMgPSBbJ2lkJywgJ2RhaWx5T3JkZXJJZCcsICd0aW1lc3RhbXAnLCAndXNlcm5hbWUnLCAndmVuZG9ySWQnLCAndmVuZG9yTmFtZScsICdtZW51SXRlbUlkJywgJ2l0ZW1OYW1lJywgJ3F1YW50aXR5JywgJ3ByaWNlJywgJ29wdGlvbnMnLCAnbm90ZXMnLCAnaXNQYWlkJ107XG4gICAgZm9yIChjb25zdCBjb2wgb2YgcmVxdWlyZWRDb2xzKSB7XG4gICAgICAgIGlmIChoZWFkZXJNYXBbY29sXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvcjogVGhlICcke09SREVSX0lURU1TX1NIRUVUX05BTUV9JyBzaGVldCBpcyBtaXNzaW5nIHRoZSByZXF1aXJlZCBjb2x1bW46ICcke2NvbH0nLmApO1xuICAgICAgICAgICAgcmV0dXJuIHsgb3JkZXJEZXRhaWxzOiBbXSwgZGFpbHlPcmRlcjogZGFpbHlPcmRlciB9O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgcm93cyA9IG9yZGVySXRlbXNEYXRhLnNsaWNlKDEpO1xuXG4gICAgLy8gMy4gRmlsdGVyIGl0ZW1zIHRoYXQgbWF0Y2ggdGhlIGRhaWx5T3JkZXJJZFxuICAgIGNvbnN0IGZpbHRlcmVkSXRlbXMgPSByb3dzLmZpbHRlcihyb3cgPT4gcm93W2hlYWRlck1hcFsnZGFpbHlPcmRlcklkJ11dID09PSBkYWlseU9yZGVySWQpO1xuXG4gICAgLy8gNC4gTWFwIHRvIE9yZGVyRGV0YWlsSXRlbSBvYmplY3RzXG4gICAgY29uc3Qgb3JkZXJEZXRhaWxzOiBPcmRlckRldGFpbEl0ZW1bXSA9IGZpbHRlcmVkSXRlbXMubWFwKHJvdyA9PiAoe1xuICAgICAgICBpZDogcm93W2hlYWRlck1hcFsnaWQnXV0gfHwgJycsXG4gICAgICAgIGRhaWx5T3JkZXJJZDogcm93W2hlYWRlck1hcFsnZGFpbHlPcmRlcklkJ11dIHx8ICcnLFxuICAgICAgICB0aW1lc3RhbXA6IHJvd1toZWFkZXJNYXBbJ3RpbWVzdGFtcCddXSB8fCAnJyxcbiAgICAgICAgdXNlcm5hbWU6IHJvd1toZWFkZXJNYXBbJ3VzZXJuYW1lJ11dIHx8ICdOL0EnLFxuICAgICAgICB2ZW5kb3JJZDogcm93W2hlYWRlck1hcFsndmVuZG9ySWQnXV0gfHwgJycsXG4gICAgICAgIHZlbmRvck5hbWU6IHJvd1toZWFkZXJNYXBbJ3ZlbmRvck5hbWUnXV0gfHwgJycsXG4gICAgICAgIG1lbnVJdGVtSWQ6IHJvd1toZWFkZXJNYXBbJ21lbnVJdGVtSWQnXV0gfHwgJycsXG4gICAgICAgIGl0ZW1OYW1lOiByb3dbaGVhZGVyTWFwWydpdGVtTmFtZSddXSB8fCAnTi9BJyxcbiAgICAgICAgcXVhbnRpdHk6IHBhcnNlSW50KHJvd1toZWFkZXJNYXBbJ3F1YW50aXR5J11dIHx8ICcwJywgMTApLFxuICAgICAgICBwcmljZTogcGFyc2VJbnQocm93W2hlYWRlck1hcFsncHJpY2UnXV0gfHwgJzAnLCAxMCksXG4gICAgICAgIG9wdGlvbnM6IHNhZmVQYXJzZU9wdGlvbnMocm93W2hlYWRlck1hcFsnb3B0aW9ucyddXSB8fCAne30nKSxcbiAgICAgICAgbm90ZXM6IHJvd1toZWFkZXJNYXBbJ25vdGVzJ11dIHx8ICcnLFxuICAgICAgICBpc1BhaWQ6IHJvd1toZWFkZXJNYXBbJ2lzUGFpZCddXSA9PT0gJ1RSVUUnIHx8IHJvd1toZWFkZXJNYXBbJ2lzUGFpZCddXSA9PT0gdHJ1ZSxcbiAgICB9KSk7XG5cbiAgICByZXR1cm4geyBvcmRlckRldGFpbHMsIGRhaWx5T3JkZXIgfTtcbn1cblxuZXhwb3J0IHR5cGUgVXNlck9yZGVyR3JvdXAgPSB7XG4gICAgZGFpbHlPcmRlcjogRGFpbHlPcmRlcjtcbiAgICBpdGVtczogT3JkZXJEZXRhaWxJdGVtW107XG4gICAgdG90YWw6IG51bWJlcjtcbiAgICBub3Rlczogc3RyaW5nO1xufVxuXG4vKipcbiAqIFJldHJpZXZlcyBhbGwgb3JkZXJzIGZvciBhIHNwZWNpZmljIHVzZXIsIGdyb3VwZWQgYnkgZGFpbHkgb3JkZXIuXG4gKiBAcGFyYW0ge3N0cmluZ30gdXNlcm5hbWUgVGhlIHVzZXJuYW1lIHRvIGZldGNoIG9yZGVycyBmb3IuXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxVc2VyT3JkZXJHcm91cFtdPn0gQSBsaXN0IG9mIHRoZSB1c2VyJ3Mgb3JkZXJzLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0T3JkZXJzQnlVc2VybmFtZSh1c2VybmFtZTogc3RyaW5nKTogUHJvbWlzZTxVc2VyT3JkZXJHcm91cFtdPiB7XG4gICAgLy8gMS4gR2V0IGFsbCBkYWlseSBvcmRlcnMgYW5kIGFsbCBvcmRlciBpdGVtc1xuICAgIGNvbnN0IFthbGxEYWlseU9yZGVycywgYWxsT3JkZXJJdGVtc0RhdGFdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICBnZXRBbGxEYWlseU9yZGVycygpLFxuICAgICAgICBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGAke09SREVSX0lURU1TX1NIRUVUX05BTUV9IUE6TWApXG4gICAgXSk7XG5cbiAgICBpZiAoYWxsT3JkZXJJdGVtc0RhdGEubGVuZ3RoIDwgMikge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgY29uc3QgaXRlbXNIZWFkZXJzID0gYWxsT3JkZXJJdGVtc0RhdGFbMF0ubWFwKGggPT4gU3RyaW5nKGgpLnRyaW0oKSk7XG4gICAgY29uc3QgaXRlbXNIZWFkZXJNYXAgPSBpdGVtc0hlYWRlcnMucmVkdWNlKChhY2MsIGhlYWRlciwgaW5kZXgpID0+IHtcbiAgICAgICAgYWNjW2hlYWRlci50cmltKCldID0gaW5kZXg7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30gYXMgUmVjb3JkPHN0cmluZywgbnVtYmVyPik7XG5cbiAgICAvLyBDaGVjayBmb3IgcmVxdWlyZWQgY29sdW1uc1xuICAgIGNvbnN0IHJlcXVpcmVkQ29scyA9IFsndXNlcm5hbWUnLCAnZGFpbHlPcmRlcklkJywgJ2lkJywgJ3RpbWVzdGFtcCcsICd2ZW5kb3JJZCcsICd2ZW5kb3JOYW1lJywgJ21lbnVJdGVtSWQnLCAnaXRlbU5hbWUnLCAncXVhbnRpdHknLCAncHJpY2UnLCAnb3B0aW9ucycsICdub3RlcycsICdpc1BhaWQnXTtcbiAgICBmb3IgKGNvbnN0IGNvbCBvZiByZXF1aXJlZENvbHMpIHtcbiAgICAgICAgaWYgKGl0ZW1zSGVhZGVyTWFwW2NvbF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3I6IFRoZSAnJHtPUkRFUl9JVEVNU19TSEVFVF9OQU1FfScgc2hlZXQgaXMgbWlzc2luZyB0aGUgcmVxdWlyZWQgY29sdW1uOiAnJHtjb2x9Jy5gKTtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIDIuIEZpbHRlciBpdGVtcyBmb3IgdGhlIHNwZWNpZmljIHVzZXJuYW1lXG4gICAgY29uc3QgdXNlckl0ZW1zUm93cyA9IGFsbE9yZGVySXRlbXNEYXRhLnNsaWNlKDEpLmZpbHRlcihyb3cgPT4gcm93W2l0ZW1zSGVhZGVyTWFwWyd1c2VybmFtZSddXSA9PT0gdXNlcm5hbWUpO1xuICAgIFxuICAgIGlmICh1c2VySXRlbXNSb3dzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgY29uc3QgdXNlckl0ZW1zOiBPcmRlckRldGFpbEl0ZW1bXSA9IHVzZXJJdGVtc1Jvd3MubWFwKHJvdyA9PiAoe1xuICAgICAgICBpZDogcm93W2l0ZW1zSGVhZGVyTWFwWydpZCddXSB8fCAnJyxcbiAgICAgICAgZGFpbHlPcmRlcklkOiByb3dbaXRlbXNIZWFkZXJNYXBbJ2RhaWx5T3JkZXJJZCddXSB8fCAnJyxcbiAgICAgICAgdGltZXN0YW1wOiByb3dbaXRlbXNIZWFkZXJNYXBbJ3RpbWVzdGFtcCddXSB8fCAnJyxcbiAgICAgICAgdXNlcm5hbWU6IHJvd1tpdGVtc0hlYWRlck1hcFsndXNlcm5hbWUnXV0gfHwgJ04vQScsXG4gICAgICAgIHZlbmRvcklkOiByb3dbaXRlbXNIZWFkZXJNYXBbJ3ZlbmRvcklkJ11dIHx8ICcnLFxuICAgICAgICB2ZW5kb3JOYW1lOiByb3dbaXRlbXNIZWFkZXJNYXBbJ3ZlbmRvck5hbWUnXV0gfHwgJycsXG4gICAgICAgIG1lbnVJdGVtSWQ6IHJvd1tpdGVtc0hlYWRlck1hcFsnbWVudUl0ZW1JZCddXSB8fCAnJyxcbiAgICAgICAgaXRlbU5hbWU6IHJvd1tpdGVtc0hlYWRlck1hcFsnaXRlbU5hbWUnXV0gfHwgJ04vQScsXG4gICAgICAgIHF1YW50aXR5OiBwYXJzZUludChyb3dbaXRlbXNIZWFkZXJNYXBbJ3F1YW50aXR5J11dIHx8ICcwJywgMTApLFxuICAgICAgICBwcmljZTogcGFyc2VJbnQocm93W2l0ZW1zSGVhZGVyTWFwWydwcmljZSddXSB8fCAnMCcsIDEwKSxcbiAgICAgICAgb3B0aW9uczogc2FmZVBhcnNlT3B0aW9ucyhyb3dbaXRlbXNIZWFkZXJNYXBbJ29wdGlvbnMnXV0gfHwgJ3t9JyksXG4gICAgICAgIG5vdGVzOiByb3dbaXRlbXNIZWFkZXJNYXBbJ25vdGVzJ11dIHx8ICcnLFxuICAgICAgICBpc1BhaWQ6IHJvd1tpdGVtc0hlYWRlck1hcFsnaXNQYWlkJ11dID09PSAnVFJVRScgfHwgcm93W2l0ZW1zSGVhZGVyTWFwWydpc1BhaWQnXV0gPT09IHRydWUsXG4gICAgfSkpO1xuICAgIFxuICAgIC8vIDMuIEdyb3VwIGl0ZW1zIGJ5IGRhaWx5T3JkZXJJZFxuICAgIGNvbnN0IGdyb3VwZWRCeURhaWx5T3JkZXIgPSB1c2VySXRlbXMucmVkdWNlKChhY2MsIGl0ZW0pID0+IHtcbiAgICAgICAgY29uc3Qga2V5ID0gaXRlbS5kYWlseU9yZGVySWQ7XG4gICAgICAgIGlmICghYWNjW2tleV0pIHtcbiAgICAgICAgICAgIGFjY1trZXldID0gW107XG4gICAgICAgIH1cbiAgICAgICAgYWNjW2tleV0ucHVzaChpdGVtKTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB7fSBhcyBSZWNvcmQ8c3RyaW5nLCBPcmRlckRldGFpbEl0ZW1bXT4pO1xuICAgIFxuICAgIFxuICAgIC8vIDQuIEZvcm1hdCB0aGUgZmluYWwgb3V0cHV0XG4gICAgY29uc3QgYWxsRGFpbHlPcmRlcnNNYXAgPSBuZXcgTWFwKGFsbERhaWx5T3JkZXJzLm1hcChvID0+IFtvLmlkLCBvXSkpO1xuICAgIGNvbnN0IHJlc3VsdDogVXNlck9yZGVyR3JvdXBbXSA9IFtdO1xuXG4gICAgZm9yIChjb25zdCBkYWlseU9yZGVySWQgaW4gZ3JvdXBlZEJ5RGFpbHlPcmRlcikge1xuICAgICAgICBjb25zdCBkYWlseU9yZGVyID0gYWxsRGFpbHlPcmRlcnNNYXAuZ2V0KGRhaWx5T3JkZXJJZCk7XG4gICAgICAgIGlmIChkYWlseU9yZGVyKSB7XG4gICAgICAgICAgICBjb25zdCBpdGVtcyA9IGdyb3VwZWRCeURhaWx5T3JkZXJbZGFpbHlPcmRlcklkXTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgIC8vIEFnZ3JlZ2F0ZSBpdGVtcyB3aXRoIHRoZSBzYW1lIG1lbnVJdGVtSWQgYW5kIG9wdGlvbnNcbiAgICAgICAgICAgIGNvbnN0IGFnZ3JlZ2F0ZWRJdGVtc01hcCA9IGl0ZW1zLnJlZHVjZSgoYWNjLCBpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uc1N0cmluZyA9IEpTT04uc3RyaW5naWZ5KGl0ZW0ub3B0aW9ucyB8fCB7fSk7XG4gICAgICAgICAgICAgICAgY29uc3QgYWdncmVnYXRpb25LZXkgPSBgJHtpdGVtLm1lbnVJdGVtSWR9fCR7b3B0aW9uc1N0cmluZ31gO1xuICAgICAgICAgICAgICAgIGlmIChhY2MuaGFzKGFnZ3JlZ2F0aW9uS2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBleGlzdGluZ0l0ZW0gPSBhY2MuZ2V0KGFnZ3JlZ2F0aW9uS2V5KSE7XG4gICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nSXRlbS5xdWFudGl0eSArPSBpdGVtLnF1YW50aXR5O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIENyZWF0ZSBhIGNvcHkgdG8gYXZvaWQgbW9kaWZ5aW5nIHRoZSBvcmlnaW5hbCBhcnJheSBpdGVtc1xuICAgICAgICAgICAgICAgICAgICBhY2Muc2V0KGFnZ3JlZ2F0aW9uS2V5LCB7IC4uLml0ZW0gfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgICAgICB9LCBuZXcgTWFwPHN0cmluZywgT3JkZXJEZXRhaWxJdGVtPigpKTtcblxuICAgICAgICAgICAgY29uc3QgZmluYWxJdGVtcyA9IEFycmF5LmZyb20oYWdncmVnYXRlZEl0ZW1zTWFwLnZhbHVlcygpKTtcbiAgICAgICAgICAgIGNvbnN0IHRvdGFsID0gZmluYWxJdGVtcy5yZWR1Y2UoKHN1bSwgaXRlbSkgPT4gc3VtICsgaXRlbS5wcmljZSAqIGl0ZW0ucXVhbnRpdHksIDApO1xuICAgICAgICAgICAgY29uc3Qgbm90ZXMgPSBpdGVtcy5sZW5ndGggPiAwID8gaXRlbXNbMF0ubm90ZXMgOiAnJzsgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBkYWlseU9yZGVyLFxuICAgICAgICAgICAgICAgIGl0ZW1zOiBmaW5hbEl0ZW1zLFxuICAgICAgICAgICAgICAgIHRvdGFsLFxuICAgICAgICAgICAgICAgIG5vdGVzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLy8gNS4gU29ydCB0aGUgZmluYWwgZ3JvdXBzIGJ5IGRhdGUsIG1vc3QgcmVjZW50IGZpcnN0XG4gICAgcmVzdWx0LnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgY29uc3QgZGF0ZUEgPSBuZXcgRGF0ZShgJHthLmRhaWx5T3JkZXIuZGF0ZX1UJHthLmRhaWx5T3JkZXIuZGVhZGxpbmV9YCk7XG4gICAgICAgIGNvbnN0IGRhdGVCID0gbmV3IERhdGUoYCR7Yi5kYWlseU9yZGVyLmRhdGV9VCR7Yi5kYWlseU9yZGVyLmRlYWRsaW5lfWApO1xuICAgICAgICByZXR1cm4gZGF0ZUIuZ2V0VGltZSgpIC0gZGF0ZUEuZ2V0VGltZSgpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBSZXRyaWV2ZXMgYSB1c2VyJ3Mgc3BlY2lmaWMgb3JkZXIgZm9yIGEgZ2l2ZW4gZGFpbHkgb3JkZXIsIGZvcm1hdHRlZCBmb3IgZWRpdGluZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSB1c2VybmFtZSBUaGUgdXNlcm5hbWUuXG4gKiBAcGFyYW0ge3N0cmluZ30gZGFpbHlPcmRlcklkIFRoZSBJRCBvZiB0aGUgZGFpbHkgb3JkZXIuXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxPcmRlckl0ZW1bXT59IEEgbGlzdCBvZiBvcmRlciBpdGVtcyByZWFkeSBmb3IgdGhlIGNhcnQuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRFeGlzdGluZ09yZGVyRm9yRWRpdCh1c2VybmFtZTogc3RyaW5nLCBkYWlseU9yZGVySWQ6IHN0cmluZyk6IFByb21pc2U8T3JkZXJJdGVtW10+IHtcbiAgY29uc3QgYWxsT3JkZXJJdGVtc0RhdGEgPSBhd2FpdCBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGAke09SREVSX0lURU1TX1NIRUVUX05BTUV9IUE6TWApO1xuICBpZiAoYWxsT3JkZXJJdGVtc0RhdGEubGVuZ3RoIDwgMikge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIGNvbnN0IGl0ZW1zSGVhZGVycyA9IGFsbE9yZGVySXRlbXNEYXRhWzBdLm1hcChoID0+IFN0cmluZyhoKS50cmltKCkpO1xuICBjb25zdCBpdGVtc0hlYWRlck1hcCA9IGl0ZW1zSGVhZGVycy5yZWR1Y2UoKGFjYywgaGVhZGVyLCBpbmRleCkgPT4ge1xuICAgIGFjY1toZWFkZXJdID0gaW5kZXg7XG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30gYXMgUmVjb3JkPHN0cmluZywgbnVtYmVyPik7XG5cbiAgY29uc3QgdXNlckl0ZW1zUm93cyA9IGFsbE9yZGVySXRlbXNEYXRhXG4gICAgLnNsaWNlKDEpXG4gICAgLmZpbHRlcihyb3cgPT4gcm93W2l0ZW1zSGVhZGVyTWFwWyd1c2VybmFtZSddXSA9PT0gdXNlcm5hbWUgJiYgcm93W2l0ZW1zSGVhZGVyTWFwWydkYWlseU9yZGVySWQnXV0gPT09IGRhaWx5T3JkZXJJZCk7XG5cbiAgaWYgKHVzZXJJdGVtc1Jvd3MubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIFxuICAvLyBIZWxwZXIgdG8gcmUtZ2VuZXJhdGUgdGhlIGNvbXBvc2l0ZSBpdGVtIElEIGZvciB0aGUgY2FydFxuICBjb25zdCBnZW5lcmF0ZU9yZGVySXRlbUlkID0gKGl0ZW1JZDogc3RyaW5nLCBvcHRpb25zOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+KSA9PiB7XG4gICAgaWYgKE9iamVjdC5rZXlzKG9wdGlvbnMpLmxlbmd0aCA9PT0gMCkgcmV0dXJuIGl0ZW1JZDtcbiAgICBjb25zdCBzb3J0ZWRTZWxlY3Rpb25zID0gT2JqZWN0LmtleXMob3B0aW9ucykuc29ydCgpLm1hcChrZXkgPT4gYCR7a2V5fToke29wdGlvbnNba2V5XX1gKS5qb2luKCd8Jyk7XG4gICAgcmV0dXJuIGAke2l0ZW1JZH1bJHtzb3J0ZWRTZWxlY3Rpb25zfV1gO1xuICB9XG5cbiAgY29uc3Qgb3JkZXJJdGVtczogT3JkZXJJdGVtW10gPSB1c2VySXRlbXNSb3dzLm1hcChyb3cgPT4ge1xuICAgIGNvbnN0IG9wdGlvbnMgPSBzYWZlUGFyc2VPcHRpb25zKHJvd1tpdGVtc0hlYWRlck1hcFsnb3B0aW9ucyddXSB8fCAne30nKTtcbiAgICBjb25zdCBtZW51SXRlbUlkID0gcm93W2l0ZW1zSGVhZGVyTWFwWydtZW51SXRlbUlkJ11dO1xuICAgIHJldHVybiB7XG4gICAgICBpZDogZ2VuZXJhdGVPcmRlckl0ZW1JZChtZW51SXRlbUlkLCBvcHRpb25zKSxcbiAgICAgIG1lbnVJdGVtSWQ6IG1lbnVJdGVtSWQsXG4gICAgICBuYW1lOiByb3dbaXRlbXNIZWFkZXJNYXBbJ2l0ZW1OYW1lJ11dIHx8ICcnLFxuICAgICAgcHJpY2U6IHBhcnNlSW50KHJvd1tpdGVtc0hlYWRlck1hcFsncHJpY2UnXV0gfHwgJzAnLCAxMCksXG4gICAgICBxdWFudGl0eTogcGFyc2VJbnQocm93W2l0ZW1zSGVhZGVyTWFwWydxdWFudGl0eSddXSB8fCAnMCcsIDEwKSxcbiAgICAgIHZlbmRvck5hbWU6IHJvd1tpdGVtc0hlYWRlck1hcFsndmVuZG9yTmFtZSddXSB8fCAnJyxcbiAgICAgIHZlbmRvcklkOiByb3dbaXRlbXNIZWFkZXJNYXBbJ3ZlbmRvcklkJ11dIHx8ICcnLFxuICAgICAgdXNlcm5hbWU6IHVzZXJuYW1lLFxuICAgICAgb3B0aW9uczogb3B0aW9ucyxcbiAgICAgIG5vdGVzOiByb3dbaXRlbXNIZWFkZXJNYXBbJ25vdGVzJ11dIHx8ICcnLFxuICAgIH07XG4gIH0pO1xuICBcbiAgcmV0dXJuIG9yZGVySXRlbXM7XG59XG5cblxuLyoqXG4gKiBEZWxldGVzIGEgdXNlcidzIGVudGlyZSBvcmRlciBmb3IgYSBzcGVjaWZpYyBkYWlseSBvcmRlci5cbiAqIEBwYXJhbSB7b2JqZWN0fSBwYXJhbXMgLSBUaGUgcGFyYW1ldGVycyBmb3IgZGVsZXRpbmcgdGhlIG9yZGVyLlxuICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtcy51c2VybmFtZSAtIFRoZSB1c2VybmFtZSBvZiB0aGUgdXNlci5cbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXMuZGFpbHlPcmRlcklkIC0gVGhlIElEIG9mIHRoZSBkYWlseSBvcmRlciB0byBkZWxldGUuXG4gKiBAcmV0dXJucyB7UHJvbWlzZTx7c3VjY2VzczogYm9vbGVhbn0+fSBBIHN1Y2Nlc3MgZmxhZy5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVVzZXJPcmRlcih7IHVzZXJuYW1lLCBkYWlseU9yZGVySWQgfTogeyB1c2VybmFtZTogc3RyaW5nLCBkYWlseU9yZGVySWQ6IHN0cmluZyB9KTogUHJvbWlzZTx7IHN1Y2Nlc3M6IGJvb2xlYW4gfT4ge1xuICAgIGNvbnN0IFtvcmRlckl0ZW1zRGF0YVdpdGhIZWFkZXJdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGAke09SREVSX0lURU1TX1NIRUVUX05BTUV9IUE6TWApLFxuICAgIF0pO1xuXG4gICAgaWYgKG9yZGVySXRlbXNEYXRhV2l0aEhlYWRlci5sZW5ndGggPCAyKSB7XG4gICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07IC8vIE5vIGl0ZW1zIHRvIGRlbGV0ZVxuICAgIH1cblxuICAgIGNvbnN0IGl0ZW1zSGVhZGVycyA9IG9yZGVySXRlbXNEYXRhV2l0aEhlYWRlclswXTtcbiAgICBjb25zdCBpdGVtc1Jvd3MgPSBvcmRlckl0ZW1zRGF0YVdpdGhIZWFkZXIuc2xpY2UoMSk7XG4gICAgXG4gICAgY29uc3QgaGVhZGVyTWFwID0gaXRlbXNIZWFkZXJzLnJlZHVjZSgoYWNjLCBoLCBpKSA9PiB7IGFjY1tTdHJpbmcoaCldID0gaTsgcmV0dXJuIGFjYzsgfSwge30gYXMgUmVjb3JkPHN0cmluZywgbnVtYmVyPik7XG4gICAgY29uc3QgZGFpbHlPcmRlcklkSW5kZXggPSBoZWFkZXJNYXBbJ2RhaWx5T3JkZXJJZCddO1xuICAgIGNvbnN0IHVzZXJuYW1lSW5kZXggPSBoZWFkZXJNYXBbJ3VzZXJuYW1lJ107XG5cbiAgICBpZiAoZGFpbHlPcmRlcklkSW5kZXggPT09IHVuZGVmaW5lZCB8fCB1c2VybmFtZUluZGV4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlICdvcmRlcl9pdGVtcycgc2hlZXQgaXMgbWlzc2luZyByZXF1aXJlZCBjb2x1bW5zICdkYWlseU9yZGVySWQnIG9yICd1c2VybmFtZScuXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IGl0ZW1zVG9LZWVwID0gaXRlbXNSb3dzLmZpbHRlcihyb3cgPT4gXG4gICAgICAgICEocm93W2RhaWx5T3JkZXJJZEluZGV4XSA9PT0gZGFpbHlPcmRlcklkICYmIHJvd1t1c2VybmFtZUluZGV4XSA9PT0gdXNlcm5hbWUpXG4gICAgKTtcbiAgICBcbiAgICBhd2FpdCBiYXRjaFVwZGF0ZVNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgW3tcbiAgICAgICAgcmFuZ2U6IGAke09SREVSX0lURU1TX1NIRUVUX05BTUV9IUExOk1gLFxuICAgICAgICB2YWx1ZXM6IFtpdGVtc0hlYWRlcnMsIC4uLml0ZW1zVG9LZWVwXSxcbiAgICB9XSk7XG5cbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG59XG5cbi8qKlxuICogTWFya3MgYSB1c2VyJ3Mgb3JkZXIgZm9yIGEgc3BlY2lmaWMgZGFpbHkgb3JkZXIgYXMgcGFpZCBvciB1bnBhaWQuXG4gKiBAcGFyYW0ge29iamVjdH0gcGFyYW1zIC0gVGhlIHBhcmFtZXRlcnMgZm9yIHRoZSBvcGVyYXRpb24uXG4gKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1zLmRhaWx5T3JkZXJJZCAtIFRoZSBJRCBvZiB0aGUgZGFpbHkgb3JkZXIuXG4gKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1zLnVzZXJuYW1lIC0gVGhlIHVzZXJuYW1lIG9mIHRoZSB1c2VyLlxuICogQHBhcmFtIHtib29sZWFufSBwYXJhbXMuaXNQYWlkIC0gVGhlIG5ldyBwYXltZW50IHN0YXR1cy5cbiAqIEByZXR1cm5zIHtQcm9taXNlPHtzdWNjZXNzOiBib29sZWFufT59IEEgc3VjY2VzcyBmbGFnLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbWFya1VzZXJPcmRlckFzUGFpZCh7IGRhaWx5T3JkZXJJZCwgdXNlcm5hbWUsIGlzUGFpZCB9OiB7IGRhaWx5T3JkZXJJZDogc3RyaW5nLCB1c2VybmFtZTogc3RyaW5nLCBpc1BhaWQ6IGJvb2xlYW4gfSk6IFByb21pc2U8eyBzdWNjZXNzOiBib29sZWFuIH0+IHtcbiAgLy8gMS4gR2V0IGFsbCBvcmRlciBpdGVtcyBkYXRhLlxuICBjb25zdCBhbGxJdGVtc0RhdGEgPSBhd2FpdCBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGAke09SREVSX0lURU1TX1NIRUVUX05BTUV9IUE6TWApO1xuXG4gIGlmIChhbGxJdGVtc0RhdGEubGVuZ3RoIDwgMikge1xuICAgIHRocm93IG5ldyBFcnJvcihcIuaJvuS4jeWIsOioguWWruWTgemgheizh+aWmeOAglwiKTtcbiAgfVxuXG4gIGNvbnN0IGhlYWRlcnMgPSBhbGxJdGVtc0RhdGFbMF07XG4gIGNvbnN0IHJvd3MgPSBhbGxJdGVtc0RhdGEuc2xpY2UoMSk7XG4gIGNvbnN0IGhlYWRlck1hcCA9IGhlYWRlcnMucmVkdWNlKChhY2MsIGgsIGkpID0+IHsgYWNjW1N0cmluZyhoKV0gPSBpOyByZXR1cm4gYWNjOyB9LCB7fSBhcyBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+KTtcbiAgY29uc3QgZGFpbHlPcmRlcklkSW5kZXggPSBoZWFkZXJNYXBbJ2RhaWx5T3JkZXJJZCddO1xuICBjb25zdCB1c2VybmFtZUluZGV4ID0gaGVhZGVyTWFwWyd1c2VybmFtZSddO1xuICBjb25zdCBpc1BhaWRJbmRleCA9IGhlYWRlck1hcFsnaXNQYWlkJ107XG5cbiAgaWYgKGRhaWx5T3JkZXJJZEluZGV4ID09PSB1bmRlZmluZWQgfHwgdXNlcm5hbWVJbmRleCA9PT0gdW5kZWZpbmVkIHx8IGlzUGFpZEluZGV4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSAnb3JkZXJfaXRlbXMnIHNoZWV0IGlzIG1pc3NpbmcgcmVxdWlyZWQgY29sdW1uczogJ2RhaWx5T3JkZXJJZCcsICd1c2VybmFtZScsIG9yICdpc1BhaWQnLlwiKTtcbiAgfVxuICAgIFxuICAvLyAyLiBQcmVwYXJlIGJhdGNoIHVwZGF0ZSBkYXRhXG4gIGNvbnN0IGRhdGFUb1VwZGF0ZSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd3MubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCByb3cgPSByb3dzW2ldO1xuICAgIGlmIChyb3dbZGFpbHlPcmRlcklkSW5kZXhdID09PSBkYWlseU9yZGVySWQgJiYgcm93W3VzZXJuYW1lSW5kZXhdID09PSB1c2VybmFtZSkge1xuICAgICAgLy8gU2hlZXQgcm93cyBhcmUgMS1iYXNlZCwgYW5kIHdlIGhhdmUgYSBoZWFkZXIgcm93LCBzbyBhZGQgMi5cbiAgICAgIGNvbnN0IHJvd0luZGV4ID0gaSArIDI7IFxuICAgICAgZGF0YVRvVXBkYXRlLnB1c2goe1xuICAgICAgICByYW5nZTogYCR7T1JERVJfSVRFTVNfU0hFRVRfTkFNRX0hTSR7cm93SW5kZXh9YCwgLy8gJ00nIGlzIHRoZSBpc1BhaWQgY29sdW1uXG4gICAgICAgIHZhbHVlczogW1tpc1BhaWQgPyAnVFJVRScgOiAnRkFMU0UnXV0sXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvLyAzLiBFeGVjdXRlIGJhdGNoIHVwZGF0ZSBpZiB0aGVyZSdzIGFueXRoaW5nIHRvIHVwZGF0ZVxuICBpZiAoZGF0YVRvVXBkYXRlLmxlbmd0aCA+IDApIHtcbiAgICAvLyBUaGlzIGlzIG5vdCBhIFwidHJ1ZVwiIGJhdGNoIHVwZGF0ZSBpbiBvbmUgQVBJIGNhbGwsIGJ1dCBpdCdzIGJldHRlciB0aGFuIHJlYWRpbmcvd3JpdGluZyB0aGUgd2hvbGUgc2hlZXQuXG4gICAgLy8gQSBzaW5nbGUgYmF0Y2hVcGRhdGUgY2FsbCB3b3VsZCBiZSBtb3JlIGVmZmljaWVudCBpZiB0aGUgQVBJIHN0cnVjdHVyZSBhbGxvd3MgaXQgZWFzaWx5LlxuICAgICBjb25zdCBzaGVldHMgPSBhd2FpdCBnZXRBdXRoZW50aWNhdGVkQ2xpZW50KCk7XG4gICAgIGF3YWl0IHNoZWV0cy5zcHJlYWRzaGVldHMudmFsdWVzLmJhdGNoVXBkYXRlKHtcbiAgICAgICAgc3ByZWFkc2hlZXRJZDogU1BSRUFEU0hFRVRfSUQsXG4gICAgICAgIHJlcXVlc3RCb2R5OiB7XG4gICAgICAgICAgICB2YWx1ZUlucHV0T3B0aW9uOiAnVVNFUl9FTlRFUkVEJyxcbiAgICAgICAgICAgIGRhdGE6IGRhdGFUb1VwZGF0ZSxcbiAgICAgICAgfVxuICAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbn1cblxuZXhwb3J0IHR5cGUgVXBkYXRlVXNlck9yZGVyUmVxdWVzdCA9IHtcbiAgICBkYWlseU9yZGVySWQ6IHN0cmluZztcbiAgICB1c2VybmFtZTogc3RyaW5nO1xuICAgIGl0ZW1zOiBPcmRlckRldGFpbEl0ZW1bXTsgLy8gVGhlIGNvbXBsZXRlIG5ldyBsaXN0IG9mIGl0ZW1zXG59O1xuXG4vKipcbiAqIFVwZGF0ZXMgYSB1c2VyJ3MgZW50aXJlIG9yZGVyIGZvciBhIHNwZWNpZmljIGRhaWx5IG9yZGVyLlxuICogSXQgcmVwbGFjZXMgYWxsIG9mIHRoZSB1c2VyJ3MgcHJldmlvdXMgaXRlbXMgd2l0aCB0aGUgbmV3IGxpc3QgcHJvdmlkZWQuXG4gKiBAcGFyYW0ge1VwZGF0ZVVzZXJPcmRlclJlcXVlc3R9IHJlcSAtIFRoZSByZXF1ZXN0IGNvbnRhaW5pbmcgdGhlIHVzZXIncyB1cGRhdGVkIG9yZGVyLlxuICogQHJldHVybnMge1Byb21pc2U8e3N1Y2Nlc3M6IGJvb2xlYW59Pn0gQSBzdWNjZXNzIGZsYWcuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVVc2VyT3JkZXIocmVxOiBVcGRhdGVVc2VyT3JkZXJSZXF1ZXN0KTogUHJvbWlzZTx7IHN1Y2Nlc3M6IGJvb2xlYW4gfT4ge1xuICAgIGNvbnN0IHsgZGFpbHlPcmRlcklkLCB1c2VybmFtZSwgaXRlbXMgfSA9IHJlcTtcblxuICAgIC8vIDEuIEZpcnN0LCBkZWxldGUgYWxsIGV4aXN0aW5nIGl0ZW1zIGZvciB0aGlzIHVzZXIgaW4gdGhpcyBkYWlseSBvcmRlci5cbiAgICAvLyBUaGlzIHNpbXBsaWZpZXMgdGhlIGxvZ2ljIGJ5IG5vdCBoYXZpbmcgdG8gZmluZCBhbmQgdXBkYXRlIGluZGl2aWR1YWwgcm93cy5cbiAgICBhd2FpdCBkZWxldGVVc2VyT3JkZXIoeyB1c2VybmFtZSwgZGFpbHlPcmRlcklkIH0pO1xuXG4gICAgLy8gMi4gSWYgdGhlIG5ldyBsaXN0IG9mIGl0ZW1zIGlzIGVtcHR5LCB3ZSdyZSBkb25lLlxuICAgIGlmIChpdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xuICAgIH1cblxuICAgIC8vIDMuIEFwcGVuZCB0aGUgbmV3IGxpc3Qgb2YgaXRlbXMgdG8gdGhlIHNoZWV0LlxuICAgIGNvbnN0IGFsbEl0ZW1zUmFuZ2UgPSBgJHtPUkRFUl9JVEVNU19TSEVFVF9OQU1FfSFBMjpBYDtcbiAgICBjb25zdCBhbGxJdGVtSWRzRGF0YSA9IGF3YWl0IGdldFNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgYWxsSXRlbXNSYW5nZSk7XG4gICAgbGV0IGxhc3RJZE51bSA9IGFsbEl0ZW1JZHNEYXRhLmxlbmd0aCA+IDBcbiAgICAgICAgPyBNYXRoLm1heCgwLCAuLi5hbGxJdGVtSWRzRGF0YS5tYXAocm93ID0+IHBhcnNlSW50KChyb3dbMF0gfHwgJ29pMCcpLnJlcGxhY2UoJ29pJywgJycpLCAxMCkpLmZpbHRlcihudW0gPT4gIWlzTmFOKG51bSkpKVxuICAgICAgICA6IDA7XG4gICAgXG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpO1xuICAgIGNvbnN0IG9yZGVyVmFsdWVzID0gW107XG4gICAgY29uc3Qgbm90ZXMgPSBpdGVtc1swXT8ubm90ZXMgfHwgJyc7IC8vIEFzc3VtZSBub3RlcyBhcmUgdGhlIHNhbWUgZm9yIGFsbCBpdGVtc1xuICAgIGNvbnN0IGlzUGFpZCA9IGl0ZW1zWzBdPy5pc1BhaWQgfHwgZmFsc2U7IC8vIEFzc3VtZSBwYXltZW50IHN0YXR1cyBpcyB0aGUgc2FtZVxuXG4gICAgZm9yIChjb25zdCBpdGVtIG9mIGl0ZW1zKSB7XG4gICAgICAgIGxhc3RJZE51bSsrO1xuICAgICAgICBjb25zdCBuZXdJZCA9IGBvaSR7bGFzdElkTnVtLnRvU3RyaW5nKCkucGFkU3RhcnQoMywgJzAnKX1gO1xuICAgICAgICBjb25zdCBvcHRpb25zU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoaXRlbS5vcHRpb25zKTtcblxuICAgICAgICBvcmRlclZhbHVlcy5wdXNoKFtcbiAgICAgICAgICAgIG5ld0lkLFxuICAgICAgICAgICAgZGFpbHlPcmRlcklkLFxuICAgICAgICAgICAgbm93LFxuICAgICAgICAgICAgdXNlcm5hbWUsXG4gICAgICAgICAgICBpdGVtLnZlbmRvcklkLFxuICAgICAgICAgICAgaXRlbS52ZW5kb3JOYW1lLFxuICAgICAgICAgICAgaXRlbS5tZW51SXRlbUlkLFxuICAgICAgICAgICAgaXRlbS5pdGVtTmFtZSxcbiAgICAgICAgICAgIGl0ZW0ucXVhbnRpdHksXG4gICAgICAgICAgICBpdGVtLnByaWNlLFxuICAgICAgICAgICAgb3B0aW9uc1N0cmluZyxcbiAgICAgICAgICAgIG5vdGVzLFxuICAgICAgICAgICAgaXNQYWlkID8gJ1RSVUUnIDogJ0ZBTFNFJ1xuICAgICAgICBdKTtcbiAgICB9XG5cbiAgICBpZiAob3JkZXJWYWx1ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBhd2FpdCBhcHBlbmRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGAke09SREVSX0lURU1TX1NIRUVUX05BTUV9IUE6TWAsIG9yZGVyVmFsdWVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6InVTQXllc0IifQ==
}}),
"[project]/src/ai/flows/data:30d1a7 [app-ssr] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"40b087eb00f00f9014e8a4c4941ed162f1e96eda17":"deleteUserOrder"},"src/ai/flows/order-flow.ts",""] */ __turbopack_context__.s({
    "deleteUserOrder": (()=>deleteUserOrder)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var deleteUserOrder = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("40b087eb00f00f9014e8a4c4941ed162f1e96eda17", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "deleteUserOrder"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vb3JkZXItZmxvdy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbid1c2Ugc2VydmVyJztcblxuaW1wb3J0IHsgZ2V0U2hlZXREYXRhLCBhcHBlbmRTaGVldERhdGEsIGdldEhlYWRlcnMsIHVwZGF0ZVNoZWV0RGF0YSwgYmF0Y2hVcGRhdGVTaGVldERhdGEsIGdldEF1dGhlbnRpY2F0ZWRDbGllbnQgfSBmcm9tICdAL3NlcnZpY2VzL3NoZWV0LXNlcnZpY2UnO1xuaW1wb3J0IHsgZ2V0VmVuZG9ycywgdHlwZSBWZW5kb3IgfSBmcm9tICcuL3ZlbmRvci1mbG93JztcbmltcG9ydCB7IHR5cGUgRmluYWxPcmRlciwgdHlwZSBPcmRlckl0ZW0gfSBmcm9tICdAL2NvbXBvbmVudHMvT3JkZXJTdW1tYXJ5JztcbmltcG9ydCB7IFB1Ymxpc2hPcmRlclJlcXVlc3RTY2hlbWEsIHR5cGUgUHVibGlzaE9yZGVyUmVxdWVzdCB9IGZyb20gJ0AvbGliL3NjaGVtYS9vcmRlcic7XG5pbXBvcnQgeyBmb3JtYXQsIHBhcnNlLCBwYXJzZUlTTywgaXNWYWxpZCB9IGZyb20gJ2RhdGUtZm5zJztcblxuY29uc3QgU1BSRUFEU0hFRVRfSUQgPSAnMVpqMmgwY1lscmIybUJhTmdsMS1Qb09LN3RsQ0N3RGNjQVhuNXc2NmhwNGMnO1xuY29uc3QgREFJTFlfT1JERVJTX1NIRUVUX05BTUUgPSAnZGFpbHlfb3JkZXJzJztcbmNvbnN0IE9SREVSX0lURU1TX1NIRUVUX05BTUUgPSAnb3JkZXJfaXRlbXMnO1xuXG5leHBvcnQgdHlwZSBEYWlseU9yZGVyID0ge1xuICAgIGlkOiBzdHJpbmc7XG4gICAgZGF0ZTogc3RyaW5nO1xuICAgIHZlbmRvcklkOiBzdHJpbmc7XG4gICAgdmVuZG9yTmFtZT86IHN0cmluZzsgLy8gT3B0aW9uYWw6IGZvciBkaXNwbGF5IG9uIGFkbWluIHBhZ2VcbiAgICBkZWFkbGluZTogc3RyaW5nO1xufTtcblxuLy8gVGhpcyB0eXBlIGlzIGZvciB0aGUgdXNlci1mYWNpbmcgb3JkZXIgcGFnZVxuZXhwb3J0IHR5cGUgQXZhaWxhYmxlT3JkZXIgPSB7XG4gICAgaWQ6IHN0cmluZzsgLy8gZGFpbHlPcmRlcklkXG4gICAgdmVuZG9yOiBWZW5kb3I7XG4gICAgZGF0ZTogc3RyaW5nO1xuICAgIGRlYWRsaW5lOiBzdHJpbmc7XG59O1xuXG4vLyBIZWxwZXIgdG8gc2FmZWx5IHBhcnNlIHRoZSBvcHRpb25zIHN0cmluZywgd2hpY2ggbWlnaHQgYmUgdmFsaWQgSlNPTiBvciBhIFwia2V5OnZhbHVlXCIgc3RyaW5nLlxuY29uc3Qgc2FmZVBhcnNlT3B0aW9ucyA9IChvcHRpb25zU3RyOiBzdHJpbmcpOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0+IHtcbiAgICBpZiAoIW9wdGlvbnNTdHIgfHwgdHlwZW9mIG9wdGlvbnNTdHIgIT09ICdzdHJpbmcnKSByZXR1cm4ge307XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gRmlyc3QsIHRyeSB0byBwYXJzZSBpdCBhcyBhIHZhbGlkIEpTT04gc3RyaW5nLlxuICAgICAgICAvLyBUaGlzIGhhbmRsZXMgY2FzZXMgbGlrZSAne1wi6aOv6YePXCI6XCLmraPluLhcIixcIui+o+W6plwiOlwi5LiN6L6jXCJ9J1xuICAgICAgICBjb25zdCBwYXJzZWQgPSBKU09OLnBhcnNlKG9wdGlvbnNTdHIpO1xuICAgICAgICBpZiAodHlwZW9mIHBhcnNlZCA9PT0gJ29iamVjdCcgJiYgcGFyc2VkICE9PSBudWxsICYmICFBcnJheS5pc0FycmF5KHBhcnNlZCkpIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJzZWQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIElmIEpTT04ucGFyc2UgZmFpbHMsIGl0J3Mgbm90IGEgSlNPTiBzdHJpbmcuXG4gICAgICAgIC8vIEFzc3VtZSBpdCdzIGEgc2ltcGxlIFwia2V5OnZhbHVlXCIgc3RyaW5nIGxpa2UgXCLpo6/ph4865q2j5bi4XCIuXG4gICAgICAgIC8vIFRoaXMgaXMgYSBmYWxsYmFjayBmb3IgZGF0YSB0aGF0IHdhc24ndCBzdG9yZWQgYXMgSlNPTi5cbiAgICAgICAgY29uc3QgcGFydHMgPSBvcHRpb25zU3RyLnNwbGl0KCc6Jyk7XG4gICAgICAgIGlmIChwYXJ0cy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IHBhcnRzWzBdLnRyaW0oKTtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gcGFydHNbMV0udHJpbSgpO1xuICAgICAgICAgICAgaWYgKGtleSAmJiB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7IFtrZXldOiB2YWx1ZSB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIElmIGl0J3Mgc29tZXRoaW5nIGVsc2Ugd2UgZG9uJ3QgcmVjb2duaXplLCBsb2cgaXQgYW5kIHJldHVybiBlbXB0eS5cbiAgICAgICAgY29uc29sZS53YXJuKGBDb3VsZCBub3QgcGFyc2Ugb3B0aW9ucyBzdHJpbmcgaW50byBhIHZhbGlkIG9iamVjdDogXCIke29wdGlvbnNTdHJ9XCJgKTtcbiAgICB9XG4gICAgLy8gUmV0dXJuIGVtcHR5IG9iamVjdCBpZiBpdCdzIG5vdCBhIHBhcnNhYmxlIEpTT04gb2JqZWN0IG9yIGEgc2ltcGxlIGtleTp2YWx1ZSBwYWlyLlxuICAgIHJldHVybiB7fTtcbn07XG5cblxuLy8gSGVscGVyIGZ1bmN0aW9uIHRvIGZvcm1hdCB0aW1lIGZyb20gU2hlZXRzICh3aGljaCBjYW4gYmUgYSBudW1iZXIpXG5jb25zdCBmb3JtYXRUaW1lID0gKHRpbWVWYWx1ZTogYW55KTogc3RyaW5nID0+IHtcbiAgICBpZiAodHlwZW9mIHRpbWVWYWx1ZSA9PT0gJ3N0cmluZycgJiYgdGltZVZhbHVlLm1hdGNoKC9eXFxkezJ9OlxcZHsyfSg6XFxkezJ9KT8kLykpIHtcbiAgICAgICAgcmV0dXJuIHRpbWVWYWx1ZS5zdWJzdHJpbmcoMCwgNSk7XG4gICAgfVxuICAgIFxuICAgIGlmICh0eXBlb2YgdGltZVZhbHVlID09PSAnbnVtYmVyJyAmJiB0aW1lVmFsdWUgPiAwICYmIHRpbWVWYWx1ZSA8IDEpIHtcbiAgICAgIC8vIEl0J3MgYSB0aW1lIHNlcmlhbCBudW1iZXIgZnJvbSBTaGVldHNcbiAgICAgIGNvbnN0IHRvdGFsU2Vjb25kcyA9IE1hdGgucm91bmQodGltZVZhbHVlICogODY0MDApO1xuICAgICAgY29uc3QgaG91cnMgPSBNYXRoLmZsb29yKHRvdGFsU2Vjb25kcyAvIDM2MDApO1xuICAgICAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IoKHRvdGFsU2Vjb25kcyAlIDM2MDApIC8gNjApO1xuICAgICAgcmV0dXJuIGAke2hvdXJzLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKX06JHttaW51dGVzLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKX1gO1xuICAgIH1cblxuICAgIC8vIFRyeSBwYXJzaW5nIGFzIGEgZGF0ZSBzdHJpbmcgdG8gZXh0cmFjdCB0aW1lXG4gICAgaWYgKHR5cGVvZiB0aW1lVmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBkYXRlID0gcGFyc2VJU08odGltZVZhbHVlKTtcbiAgICAgICAgICAgIGlmIChpc1ZhbGlkKGRhdGUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZvcm1hdChkYXRlLCAnSEg6bW0nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgLy8gSWdub3JlIHBhcnNlIGVycm9ycyBmcm9tIElTT1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjb25zdCB0aW1lTWF0Y2ggPSB0aW1lVmFsdWUubWF0Y2goLyhcXGR7Mn06XFxkezJ9KS8pO1xuICAgICAgICBpZiAodGltZU1hdGNoKSByZXR1cm4gdGltZU1hdGNoWzBdO1xuICAgIH1cbiAgICBcbiAgICAvLyBGYWxsYmFjayBmb3IgdW5leHBlY3RlZCBmb3JtYXRzXG4gICAgcmV0dXJuICcwMDowMCc7IFxufTtcblxuLy8gSGVscGVyIGZ1bmN0aW9uIHRvIGZvcm1hdCBkYXRlIGZyb20gU2hlZXRzICh3aGljaCBjYW4gYmUgYSBudW1iZXIgb3Igc3RyaW5nKVxuY29uc3QgZm9ybWF0RGF0ZSA9IChkYXRlVmFsdWU6IGFueSk6IHN0cmluZyA9PiB7XG4gICAgaWYgKCFkYXRlVmFsdWUpIHJldHVybiBmb3JtYXQobmV3IERhdGUoKSwgJ3l5eXktTU0tZGQnKTsgLy8gUmV0dXJuIHRvZGF5J3MgZGF0ZSBpZiBlbXB0eVxuXG4gICAgbGV0IGRhdGU7XG4gICAgXG4gICAgLy8gSGFuZGxlIFNoZWV0cyBkYXRlIHNlcmlhbCBudW1iZXIgKG51bWJlciBvZiBkYXlzIHNpbmNlIDE4OTktMTItMzApXG4gICAgaWYgKHR5cGVvZiBkYXRlVmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgICAgIGNvbnN0IGV4Y2VsRXBvY2ggPSBuZXcgRGF0ZShEYXRlLlVUQygxODk5LCAxMSwgMzApKTtcbiAgICAgICAgZGF0ZSA9IG5ldyBEYXRlKGV4Y2VsRXBvY2guZ2V0VGltZSgpICsgZGF0ZVZhbHVlICogODY0MDAwMDApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEhhbmRsZSBJU08gc3RyaW5nIGxpa2UgJzIwMjQtMDctMjVUMDA6MDA6MDAuMDAwWicgb3Igc2ltcGxlIHN0cmluZyAnMjAyNC0wNy0yNSdcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgZGF0ZSA9IHBhcnNlSVNPKFN0cmluZyhkYXRlVmFsdWUpKTtcbiAgICAgICAgICAgLy8gSWYgSVNPIHBhcnNpbmcgZmFpbHMsIHRyeSB0aGUgc2ltcGxlIGZvcm1hdFxuICAgICAgICAgICBpZiAoIWlzVmFsaWQoZGF0ZSkpIHtcbiAgICAgICAgICAgICAgIGRhdGUgPSBwYXJzZShTdHJpbmcoZGF0ZVZhbHVlKSwgJ3l5eXktTU0tZGQnLCBuZXcgRGF0ZSgpKTtcbiAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAgZGF0ZSA9IHBhcnNlKFN0cmluZyhkYXRlVmFsdWUpLCAneXl5eS1NTS1kZCcsIG5ldyBEYXRlKCkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8vIElmIGRhdGUgaXMgdmFsaWQsIGZvcm1hdCBpdCwgb3RoZXJ3aXNlIHJldHVybiB0b2RheSdzIGRhdGUgYXMgYSBmYWxsYmFja1xuICAgIHJldHVybiBpc1ZhbGlkKGRhdGUpID8gZm9ybWF0KGRhdGUsICd5eXl5LU1NLWRkJykgOiBmb3JtYXQobmV3IERhdGUoKSwgJ3l5eXktTU0tZGQnKTtcbn07XG5cblxuLyoqXG4gKiBSZXRyaWV2ZXMgYWxsIGF2YWlsYWJsZSBvcmRlcnMgZnJvbSB0aGUgZGFpbHlfb3JkZXJzIHNoZWV0LlxuICogQW55IG9yZGVyIHByZXNlbnQgaXMgY29uc2lkZXJlZCBhdmFpbGFibGUuXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxBdmFpbGFibGVPcmRlcltdPn0gQSBsaXN0IG9mIGF2YWlsYWJsZSB2ZW5kb3JzIGFuZCB0aGVpciBkZWFkbGluZXMuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBdmFpbGFibGVPcmRlcnMoKTogUHJvbWlzZTxBdmFpbGFibGVPcmRlcltdPiB7XG4gICAgY29uc3QgZGFpbHlPcmRlcnNSYW5nZSA9IGAke0RBSUxZX09SREVSU19TSEVFVF9OQU1FfSFBOkRgO1xuICAgIGNvbnN0IFtkYWlseU9yZGVyc0RhdGEsIGFsbFZlbmRvcnNdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGRhaWx5T3JkZXJzUmFuZ2UpLFxuICAgICAgICBnZXRWZW5kb3JzKClcbiAgICBdKTtcblxuICAgIGlmICghZGFpbHlPcmRlcnNEYXRhIHx8IGRhaWx5T3JkZXJzRGF0YS5sZW5ndGggPCAyKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgaGVhZGVyID0gZGFpbHlPcmRlcnNEYXRhWzBdO1xuICAgIGNvbnN0IHJvd3MgPSBkYWlseU9yZGVyc0RhdGEuc2xpY2UoMSk7XG5cbiAgICBjb25zdCBoZWFkZXJNYXAgPSBoZWFkZXIucmVkdWNlKChhY2MsIGgsIGkpID0+IHtcbiAgICAgICAgYWNjW1N0cmluZyhoKV0gPSBpO1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgIH0sIHt9IGFzIFJlY29yZDxzdHJpbmcsIG51bWJlcj4pO1xuXG4gICAgY29uc3QgYWxsVmVuZG9yc01hcCA9IG5ldyBNYXAoYWxsVmVuZG9ycy5tYXAodiA9PiBbdi52ZW5kb3JJZCwgdl0pKTtcblxuICAgIGNvbnN0IGF2YWlsYWJsZU9yZGVyczogQXZhaWxhYmxlT3JkZXJbXSA9IFtdO1xuXG4gICAgZm9yIChjb25zdCByb3cgb2Ygcm93cykge1xuICAgICAgICBpZiAocm93LmV2ZXJ5KGNlbGwgPT4gIWNlbGwpKSBjb250aW51ZTsgLy8gU2tpcCBjb21wbGV0ZWx5IGVtcHR5IHJvd3NcblxuICAgICAgICBjb25zdCBpZCA9IHJvd1toZWFkZXJNYXBbJ2lkJ11dO1xuICAgICAgICBjb25zdCB2ZW5kb3JJZCA9IHJvd1toZWFkZXJNYXBbJ3ZlbmRvcklkJ11dO1xuICAgICAgICBjb25zdCBkYXRlUmF3ID0gcm93W2hlYWRlck1hcFsnZGF0ZSddXTtcbiAgICAgICAgY29uc3QgZGVhZGxpbmVSYXcgPSByb3dbaGVhZGVyTWFwWydkZWFkbGluZSddXTtcblxuICAgICAgICBpZiAoIWlkIHx8ICF2ZW5kb3JJZCkgY29udGludWU7IC8vIFNraXAgcm93cyB3aXRob3V0IGVzc2VudGlhbCBkYXRhXG5cbiAgICAgICAgY29uc3QgdmVuZG9yID0gYWxsVmVuZG9yc01hcC5nZXQodmVuZG9ySWQpO1xuICAgICAgICBpZiAoIXZlbmRvciB8fCAhdmVuZG9yLmlzQWN0aXZlKSBjb250aW51ZTtcblxuICAgICAgICBhdmFpbGFibGVPcmRlcnMucHVzaCh7XG4gICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICB2ZW5kb3IsXG4gICAgICAgICAgICBkYXRlOiBmb3JtYXREYXRlKGRhdGVSYXcpLFxuICAgICAgICAgICAgZGVhZGxpbmU6IGZvcm1hdFRpbWUoZGVhZGxpbmVSYXcpIC8vIEZvcm1hdCB0aGUgZGVhZGxpbmVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGF2YWlsYWJsZU9yZGVycztcbn1cblxuLyoqXG4gKiBSZXRyaWV2ZXMgYWxsIGRhaWx5IG9yZGVycyBmb3IgYWRtaW4gZGlzcGxheS5cbiAqIEByZXR1cm5zIHtQcm9taXNlPERhaWx5T3JkZXJbXT59IEEgbGlzdCBvZiBhbGwgcHVibGlzaGVkIG9yZGVycy5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbERhaWx5T3JkZXJzKCk6IFByb21pc2U8RGFpbHlPcmRlcltdPiB7XG4gICAgY29uc3QgZGFpbHlPcmRlcnNSYW5nZSA9IGAke0RBSUxZX09SREVSU19TSEVFVF9OQU1FfSFBOkRgO1xuICAgICBjb25zdCBbZGFpbHlPcmRlcnNEYXRhLCBhbGxWZW5kb3JzXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgZ2V0U2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCBkYWlseU9yZGVyc1JhbmdlKSxcbiAgICAgICAgZ2V0VmVuZG9ycygpXG4gICAgXSk7XG4gICAgXG4gICAgaWYgKCFkYWlseU9yZGVyc0RhdGEgfHwgZGFpbHlPcmRlcnNEYXRhLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIGNvbnN0IGhlYWRlciA9IGRhaWx5T3JkZXJzRGF0YVswXTtcbiAgICBjb25zdCByb3dzID0gZGFpbHlPcmRlcnNEYXRhLnNsaWNlKDEpO1xuICAgIGNvbnN0IGFsbFZlbmRvcnNNYXAgPSBuZXcgTWFwKGFsbFZlbmRvcnMubWFwKHYgPT4gW3YudmVuZG9ySWQsIHZdKSk7XG4gICAgXG4gICAgY29uc3QgaGVhZGVyTWFwID0gaGVhZGVyLnJlZHVjZSgoYWNjLCBoLCBpKSA9PiB7XG4gICAgICAgIGFjY1tTdHJpbmcoaCldID0gaTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB7fSBhcyBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+KTtcblxuICAgIGNvbnN0IG9yZGVycyA9IHJvd3MubWFwKHJvdyA9PiB7XG4gICAgICAgIGNvbnN0IHZlbmRvcklkID0gcm93W2hlYWRlck1hcFsndmVuZG9ySWQnXV07XG4gICAgICAgIGNvbnN0IHZlbmRvciA9IGFsbFZlbmRvcnNNYXAuZ2V0KHZlbmRvcklkKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZDogcm93W2hlYWRlck1hcFsnaWQnXV0gfHwgJycsXG4gICAgICAgICAgICBkYXRlOiBmb3JtYXREYXRlKHJvd1toZWFkZXJNYXBbJ2RhdGUnXV0pLFxuICAgICAgICAgICAgdmVuZG9ySWQ6IHZlbmRvcklkIHx8ICcnLFxuICAgICAgICAgICAgdmVuZG9yTmFtZTogdmVuZG9yID8gdmVuZG9yLnZlbmRvck5hbWUgOiAn5pyq55+l5bqX5a62JyxcbiAgICAgICAgICAgIGRlYWRsaW5lOiBmb3JtYXRUaW1lKHJvd1toZWFkZXJNYXBbJ2RlYWRsaW5lJ11dKVxuICAgICAgICB9O1xuICAgIH0pLmZpbHRlcihvcmRlciA9PiBvcmRlci5pZCk7IC8vIEZpbHRlciBvdXQgYW55IGVtcHR5IHJvd3NcblxuICAgIC8vIFNvcnQgb3JkZXJzIGJ5IGRhdGUgYW5kIHRoZW4gYnkgZGVhZGxpbmUsIGFzY2VuZGluZyAoY2xvc2VzdCBmaXJzdClcbiAgICBvcmRlcnMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICBjb25zdCBkYXRlQSA9IG5ldyBEYXRlKGAke2EuZGF0ZX1UJHthLmRlYWRsaW5lfWApO1xuICAgICAgICBjb25zdCBkYXRlQiA9IG5ldyBEYXRlKGAke2IuZGF0ZX1UJHtiLmRlYWRsaW5lfWApO1xuICAgICAgICByZXR1cm4gZGF0ZUEuZ2V0VGltZSgpIC0gZGF0ZUIuZ2V0VGltZSgpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG9yZGVycztcbn1cblxuXG4vKipcbiAqIFB1Ymxpc2hlcyBhIG5ldyBvcmRlciBmb3IgYSBzcGVjaWZpYyBkYXRlLCB2ZW5kb3IgYW5kIGRlYWRsaW5lLlxuICogQHBhcmFtIHtQdWJsaXNoT3JkZXJSZXF1ZXN0fSByZXEgLSBUaGUgcmVxdWVzdCBjb250YWluaW5nIGRhdGUsIHZlbmRvcklkIGFuZCBkZWFkbGluZS5cbiAqIEByZXR1cm5zIHtQcm9taXNlPHtzdWNjZXNzOiBib29sZWFufT59IEEgc3VjY2VzcyBmbGFnLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcHVibGlzaE9yZGVyKHJlcTogUHVibGlzaE9yZGVyUmVxdWVzdCk6IFByb21pc2U8eyBzdWNjZXNzOiBib29sZWFuIH0+IHtcbiAgY29uc3QgdmFsaWRhdGlvbiA9IFB1Ymxpc2hPcmRlclJlcXVlc3RTY2hlbWEuc2FmZVBhcnNlKHJlcSk7XG4gIGlmICghdmFsaWRhdGlvbi5zdWNjZXNzKSB7XG4gICAgY29uc3QgZXJyb3JNc2cgPSB2YWxpZGF0aW9uLmVycm9yLmVycm9ycy5tYXAoZSA9PiBgJHtlLnBhdGguam9pbignLicpfTogJHtlLm1lc3NhZ2V9YCkuam9pbignLCAnKTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYOi8uOWFpeizh+aWmeacieiqpDogJHtlcnJvck1zZ31gKTtcbiAgfVxuXG4gIGNvbnN0IGFsbE9yZGVyc1JhbmdlID0gYCR7REFJTFlfT1JERVJTX1NIRUVUX05BTUV9IUEyOkFgO1xuICBjb25zdCBhbGxPcmRlcklkc0RhdGEgPSBhd2FpdCBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGFsbE9yZGVyc1JhbmdlKTtcbiAgICBjb25zdCBsYXN0SWROdW0gPSBhbGxPcmRlcklkc0RhdGEubGVuZ3RoID4gMCBcbiAgICAgICAgPyBNYXRoLm1heCgwLCAuLi5hbGxPcmRlcklkc0RhdGEubWFwKHJvdyA9PiBwYXJzZUludCgocm93WzBdIHx8ICdkbzAnKS5yZXBsYWNlKCdkbycsICcnKSwgMTApKS5maWx0ZXIobnVtID0+ICFpc05hTihudW0pKSlcbiAgICAgICAgOiAwO1xuICBjb25zdCBuZXdJZCA9IGBkbyR7KGxhc3RJZE51bSArIDEpLnRvU3RyaW5nKCkucGFkU3RhcnQoMywgJzAnKX1gO1xuXG4gIGNvbnN0IHZhbHVlcyA9IFtcbiAgICBbbmV3SWQsIHJlcS5kYXRlLCByZXEudmVuZG9ySWQsIHJlcS5kZWFkbGluZV1cbiAgXTtcbiAgXG4gIC8vIEVuc3VyZSBoZWFkZXJzIGV4aXN0XG4gIGNvbnN0IGhlYWRlcnMgPSBhd2FpdCBnZXRIZWFkZXJzKFNQUkVBRFNIRUVUX0lELCBEQUlMWV9PUkRFUlNfU0hFRVRfTkFNRSk7XG4gIGlmIChoZWFkZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgYXdhaXQgdXBkYXRlU2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCBgJHtEQUlMWV9PUkRFUlNfU0hFRVRfTkFNRX0hQTE6RDFgLCBbWydpZCcsICdkYXRlJywgJ3ZlbmRvcklkJywgJ2RlYWRsaW5lJ11dKTtcbiAgfVxuXG4gIGF3YWl0IGFwcGVuZFNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgYCR7REFJTFlfT1JERVJTX1NIRUVUX05BTUV9IUE6RGAsIHZhbHVlcyk7XG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbn1cblxuZXhwb3J0IHR5cGUgVXBkYXRlRGFpbHlPcmRlclJlcXVlc3QgPSB7XG4gICAgb3JkZXJJZDogc3RyaW5nO1xuICAgIHZlbmRvcklkOiBzdHJpbmc7XG4gICAgZGF0ZTogc3RyaW5nO1xuICAgIGRlYWRsaW5lOiBzdHJpbmc7XG59XG5cbi8qKlxuICogVXBkYXRlcyBhbiBleGlzdGluZyBkYWlseSBvcmRlcidzIGRhdGUgYW5kIGRlYWRsaW5lLlxuICogQHBhcmFtIHtVcGRhdGVEYWlseU9yZGVyUmVxdWVzdH0gcmVxIC0gVGhlIHJlcXVlc3QgY29udGFpbmluZyBvcmRlcklkLCBkYXRlIGFuZCBkZWFkbGluZS5cbiAqIEByZXR1cm5zIHtQcm9taXNlPHtzdWNjZXNzOiBib29sZWFufT59IEEgc3VjY2VzcyBmbGFnLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlRGFpbHlPcmRlcihyZXE6IFVwZGF0ZURhaWx5T3JkZXJSZXF1ZXN0KTogUHJvbWlzZTx7IHN1Y2Nlc3M6IGJvb2xlYW4gfT4ge1xuICAgIGNvbnN0IHsgb3JkZXJJZCwgdmVuZG9ySWQsIGRhdGUsIGRlYWRsaW5lIH0gPSByZXE7XG4gICAgXG4gICAgLy8gMS4gRmluZCB0aGUgcm93IG9mIHRoZSBvcmRlciB0byB1cGRhdGVcbiAgICBjb25zdCBhbGxPcmRlcnNEYXRhID0gYXdhaXQgZ2V0U2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCBgJHtEQUlMWV9PUkRFUlNfU0hFRVRfTkFNRX0hQTpBYCk7XG4gICAgY29uc3Qgcm93SW5kZXggPSBhbGxPcmRlcnNEYXRhLmZpbmRJbmRleChyb3cgPT4gcm93WzBdID09PSBvcmRlcklkKTtcbiAgICBcbiAgICBpZiAocm93SW5kZXggPT09IC0xKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihg5om+5LiN5YiwIElEIOeCuiAke29yZGVySWR9IOeahOioguWWruOAgmApO1xuICAgIH1cblxuICAgIC8vICsxIGJlY2F1c2Ugc2hlZXQgcm93cyBhcmUgMS1iYXNlZC5cbiAgICBjb25zdCByb3dUb1VwZGF0ZSA9IHJvd0luZGV4ICsgMTtcbiAgICBcbiAgICAvLyBXZSB1cGRhdGUgZGF0ZSBhbmQgZGVhZGxpbmUuIFZlbmRvcklkIGlzIG5vdCBjaGFuZ2VkLlxuICAgIC8vIFRoZSByYW5nZSBzaG91bGQgYmUgQng6RHggdG8gdXBkYXRlIGRhdGUgYW5kIGRlYWRsaW5lLlxuICAgIGNvbnN0IHVwZGF0ZVJhbmdlID0gYCR7REFJTFlfT1JERVJTX1NIRUVUX05BTUV9IUIke3Jvd1RvVXBkYXRlfTpEJHtyb3dUb1VwZGF0ZX1gO1xuICAgIGF3YWl0IHVwZGF0ZVNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgdXBkYXRlUmFuZ2UsIFtbZGF0ZSwgdmVuZG9ySWQsIGRlYWRsaW5lXV0pO1xuXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xufVxuXG5cbi8qKlxuICogRGVsZXRlcyBhIHB1Ymxpc2hlZCBkYWlseSBvcmRlciBhbmQgaXRzIGFzc29jaWF0ZWQgb3JkZXIgaXRlbXMuXG4gKiBAcGFyYW0ge3N0cmluZ30gZGFpbHlPcmRlcklkIFRoZSBJRCBvZiB0aGUgZGFpbHkgb3JkZXIgdG8gZGVsZXRlLlxuICogQHJldHVybnMge1Byb21pc2U8e3N1Y2Nlc3M6IGJvb2xlYW59Pn0gQSBzdWNjZXNzIGZsYWcuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVEYWlseU9yZGVyKGRhaWx5T3JkZXJJZDogc3RyaW5nKTogUHJvbWlzZTx7IHN1Y2Nlc3M6IGJvb2xlYW4gfT4ge1xuICAvLyAxLiBHZXQgYWxsIGRhdGEgZnJvbSBib3RoIHNoZWV0c1xuICBjb25zdCBbZGFpbHlPcmRlcnNEYXRhV2l0aEhlYWRlciwgb3JkZXJJdGVtc0RhdGFXaXRoSGVhZGVyXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGAke0RBSUxZX09SREVSU19TSEVFVF9OQU1FfSFBOkRgKSxcbiAgICBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGAke09SREVSX0lURU1TX1NIRUVUX05BTUV9IUE6TWApLCAvLyBSZWFkIHVwIHRvIGNvbHVtbiBNXG4gIF0pO1xuXG4gIGlmIChkYWlseU9yZGVyc0RhdGFXaXRoSGVhZGVyLmxlbmd0aCA8IDIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG4gIH1cblxuICBjb25zdCBkYWlseU9yZGVyc0hlYWRlcnMgPSBkYWlseU9yZGVyc0RhdGFXaXRoSGVhZGVyWzBdO1xuICBjb25zdCBkYWlseU9yZGVyc1Jvd3MgPSBkYWlseU9yZGVyc0RhdGFXaXRoSGVhZGVyLnNsaWNlKDEpO1xuICBcbiAgY29uc3Qgb3JkZXJJdGVtc0hlYWRlcnMgPSBvcmRlckl0ZW1zRGF0YVdpdGhIZWFkZXIubGVuZ3RoID4gMCA/IG9yZGVySXRlbXNEYXRhV2l0aEhlYWRlclswXSA6IFtdO1xuICBjb25zdCBvcmRlckl0ZW1zUm93cyA9IG9yZGVySXRlbXNEYXRhV2l0aEhlYWRlci5sZW5ndGggPiAxID8gb3JkZXJJdGVtc0RhdGFXaXRoSGVhZGVyLnNsaWNlKDEpIDogW107XG5cbiAgLy8gMi4gRmlsdGVyIHRoZSByb3dzIHRvIGtlZXAgZm9yIGJvdGggc2hlZXRzXG4gIGNvbnN0IGRhaWx5T3JkZXJzVG9LZWVwID0gZGFpbHlPcmRlcnNSb3dzLmZpbHRlcihyb3cgPT4gcm93WzBdICE9PSBkYWlseU9yZGVySWQpO1xuXG4gIGxldCBvcmRlckl0ZW1zVG9LZWVwID0gb3JkZXJJdGVtc1Jvd3M7XG4gIGlmIChvcmRlckl0ZW1zUm93cy5sZW5ndGggPiAwICYmIG9yZGVySXRlbXNIZWFkZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IG9yZGVySXRlbXNIZWFkZXJNYXAgPSBvcmRlckl0ZW1zSGVhZGVycy5yZWR1Y2UoKGFjYywgaCwgaSkgPT4geyBhY2NbU3RyaW5nKGgpXSA9IGk7IHJldHVybiBhY2M7IH0sIHt9IGFzIFJlY29yZDxzdHJpbmcsIG51bWJlcj4pO1xuICAgICAgY29uc3QgZGFpbHlPcmRlcklkSW5kZXggPSBvcmRlckl0ZW1zSGVhZGVyTWFwWydkYWlseU9yZGVySWQnXTtcbiAgICAgIFxuICAgICAgLy8gRW5zdXJlIHRoZSBkYWlseU9yZGVySWQgY29sdW1uIGV4aXN0cyBiZWZvcmUgZmlsdGVyaW5nXG4gICAgICBpZiAoZGFpbHlPcmRlcklkSW5kZXggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIG9yZGVySXRlbXNUb0tlZXAgPSBvcmRlckl0ZW1zUm93cy5maWx0ZXIoaXRlbVJvdyA9PiBpdGVtUm93W2RhaWx5T3JkZXJJZEluZGV4XSAhPT0gZGFpbHlPcmRlcklkKTtcbiAgICAgIH1cbiAgfVxuXG4gIC8vIDQuIFByZXBhcmUgYmF0Y2ggdXBkYXRlIGRhdGEgdG8gY2xlYXIgYW5kIHJld3JpdGUgYm90aCBzaGVldHNcbiAgYXdhaXQgYmF0Y2hVcGRhdGVTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIFtcbiAgICB7XG4gICAgICByYW5nZTogYCR7REFJTFlfT1JERVJTX1NIRUVUX05BTUV9IUExOkRgLFxuICAgICAgdmFsdWVzOiBbZGFpbHlPcmRlcnNIZWFkZXJzLCAuLi5kYWlseU9yZGVyc1RvS2VlcF0sXG4gICAgfSxcbiAgICB7XG4gICAgICByYW5nZTogYCR7T1JERVJfSVRFTVNfU0hFRVRfTkFNRX0hQTE6TWAsXG4gICAgICB2YWx1ZXM6IG9yZGVySXRlbXNIZWFkZXJzLmxlbmd0aCA+IDAgPyBbb3JkZXJJdGVtc0hlYWRlcnMsIC4uLm9yZGVySXRlbXNUb0tlZXBdIDogW10sXG4gICAgfVxuICBdKTtcblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG59XG5cblxuLyoqXG4gKiBTdWJtaXRzIGFuIG9yZGVyIGFuZCBzYXZlcyBpdCB0byB0aGUgJ29yZGVyX2l0ZW1zJyBzaGVldC5cbiAqIElmIGVkaXRpbmcgYW4gZXhpc3Rpbmcgb3JkZXIsIGl0IGZpcnN0IGRlbGV0ZXMgdGhlIG9sZCBpdGVtcy5cbiAqIEBwYXJhbSB7RmluYWxPcmRlcn0gb3JkZXIgLSBUaGUgY29tcGxldGUgb3JkZXIgZGV0YWlscy5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNFZGl0aW5nIC0gQSBmbGFnIHRvIGluZGljYXRlIGlmIHRoaXMgaXMgYW4gZWRpdC5cbiAqIEByZXR1cm5zIHtQcm9taXNlPHtzdWNjZXNzOiBib29sZWFufT59IEEgc3VjY2VzcyBmbGFnLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc3VibWl0T3JkZXIob3JkZXI6IEZpbmFsT3JkZXIsIGlzRWRpdGluZzogYm9vbGVhbiA9IGZhbHNlKTogUHJvbWlzZTx7IHN1Y2Nlc3M6IGJvb2xlYW4gfT4ge1xuICAgIC8vIElmIGVkaXRpbmcsIGZpcnN0IGRlbGV0ZSBhbGwgZXhpc3RpbmcgaXRlbXMgZm9yIHRoYXQgdXNlciBpbiB0aGF0IGRhaWx5IG9yZGVyXG4gICAgaWYgKGlzRWRpdGluZykge1xuICAgICAgICBhd2FpdCBkZWxldGVVc2VyT3JkZXIoeyB1c2VybmFtZTogb3JkZXIudXNlcm5hbWUsIGRhaWx5T3JkZXJJZDogb3JkZXIuZGFpbHlPcmRlcklkIH0pO1xuICAgIH1cbiAgICBcbiAgICAvLyBUaGVuLCBhcHBlbmQgdGhlIG5ldy91cGRhdGVkIGl0ZW1zXG4gICAgY29uc3QgYWxsSXRlbXNSYW5nZSA9IGAke09SREVSX0lURU1TX1NIRUVUX05BTUV9IUEyOkFgO1xuICAgIGNvbnN0IGFsbEl0ZW1JZHNEYXRhID0gYXdhaXQgZ2V0U2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCBhbGxJdGVtc1JhbmdlKTtcbiAgICBsZXQgbGFzdElkTnVtID0gYWxsSXRlbUlkc0RhdGEubGVuZ3RoID4gMFxuICAgICAgICA/IE1hdGgubWF4KDAsIC4uLmFsbEl0ZW1JZHNEYXRhLm1hcChyb3cgPT4gcGFyc2VJbnQoKHJvd1swXSB8fCAnb2kwJykucmVwbGFjZSgnb2knLCAnJyksIDEwKSkuZmlsdGVyKG51bSA9PiAhaXNOYU4obnVtKSkpXG4gICAgICAgIDogMDtcblxuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKTtcbiAgICBjb25zdCBvcmRlclZhbHVlcyA9IFtdO1xuXG4gICAgZm9yIChjb25zdCBpdGVtIG9mIG9yZGVyLml0ZW1zKSB7XG4gICAgICAgIGxhc3RJZE51bSsrOyAvLyBJbmNyZW1lbnQgSUQgZm9yIGVhY2ggaXRlbSBpbiB0aGUgbG9vcFxuICAgICAgICBjb25zdCBuZXdJZCA9IGBvaSR7bGFzdElkTnVtLnRvU3RyaW5nKCkucGFkU3RhcnQoMywgJzAnKX1gO1xuICAgICAgICBjb25zdCBvcHRpb25zU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoaXRlbS5vcHRpb25zKTtcblxuICAgICAgICBvcmRlclZhbHVlcy5wdXNoKFtcbiAgICAgICAgICAgIG5ld0lkLFxuICAgICAgICAgICAgb3JkZXIuZGFpbHlPcmRlcklkLFxuICAgICAgICAgICAgbm93LFxuICAgICAgICAgICAgb3JkZXIudXNlcm5hbWUsXG4gICAgICAgICAgICBvcmRlci52ZW5kb3JJZCxcbiAgICAgICAgICAgIG9yZGVyLnZlbmRvck5hbWUsXG4gICAgICAgICAgICBpdGVtLm1lbnVJdGVtSWQsXG4gICAgICAgICAgICBpdGVtLm5hbWUsXG4gICAgICAgICAgICBpdGVtLnF1YW50aXR5LFxuICAgICAgICAgICAgaXRlbS5wcmljZSxcbiAgICAgICAgICAgIG9wdGlvbnNTdHJpbmcsXG4gICAgICAgICAgICBvcmRlci5ub3RlcyxcbiAgICAgICAgICAgICdGQUxTRScgLy8gaXNQYWlkXG4gICAgICAgIF0pO1xuICAgIH1cbiAgICBcbiAgICAvLyBFbnN1cmUgaGVhZGVycyBleGlzdFxuICAgIGNvbnN0IGhlYWRlcnMgPSBhd2FpdCBnZXRIZWFkZXJzKFNQUkVBRFNIRUVUX0lELCBPUkRFUl9JVEVNU19TSEVFVF9OQU1FKTtcbiAgICBpZiAoaGVhZGVycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgYXdhaXQgdXBkYXRlU2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCBgJHtPUkRFUl9JVEVNU19TSEVFVF9OQU1FfSFBMTpNMWAsIFtbJ2lkJywgJ2RhaWx5T3JkZXJJZCcsICd0aW1lc3RhbXAnLCAndXNlcm5hbWUnLCAndmVuZG9ySWQnLCAndmVuZG9yTmFtZScsICdtZW51SXRlbUlkJywgJ2l0ZW1OYW1lJywgJ3F1YW50aXR5JywgJ3ByaWNlJywgJ29wdGlvbnMnLCAnbm90ZXMnLCAnaXNQYWlkJ11dKTtcbiAgICB9XG5cbiAgICBpZiAob3JkZXJWYWx1ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBhd2FpdCBhcHBlbmRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGAke09SREVSX0lURU1TX1NIRUVUX05BTUV9IUE6TWAsIG9yZGVyVmFsdWVzKTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xufVxuXG5cbmV4cG9ydCB0eXBlIE9yZGVyRGV0YWlsSXRlbSA9IHtcbiAgICBpZDogc3RyaW5nO1xuICAgIGRhaWx5T3JkZXJJZDogc3RyaW5nO1xuICAgIHRpbWVzdGFtcDogc3RyaW5nO1xuICAgIHVzZXJuYW1lOiBzdHJpbmc7XG4gICAgdmVuZG9ySWQ6IHN0cmluZztcbiAgICB2ZW5kb3JOYW1lOiBzdHJpbmc7XG4gICAgbWVudUl0ZW1JZDogc3RyaW5nO1xuICAgIGl0ZW1OYW1lOiBzdHJpbmc7XG4gICAgcXVhbnRpdHk6IG51bWJlcjtcbiAgICBwcmljZTogbnVtYmVyO1xuICAgIG9wdGlvbnM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz47XG4gICAgbm90ZXM6IHN0cmluZztcbiAgICBpc1BhaWQ6IGJvb2xlYW47XG59O1xuXG4vKipcbiAqIFJldHJpZXZlcyBhbGwgb3JkZXIgaXRlbXMgZm9yIGEgc3BlY2lmaWMgZGFpbHkgb3JkZXIuXG4gKiBAcGFyYW0ge3N0cmluZ30gZGFpbHlPcmRlcklkIFRoZSBJRCBvZiB0aGUgZGFpbHkgb3JkZXIuXG4gKiBAcmV0dXJucyB7UHJvbWlzZTx7b3JkZXJEZXRhaWxzOiBPcmRlckRldGFpbEl0ZW1bXSwgZGFpbHlPcmRlcjogRGFpbHlPcmRlciB8IG51bGx9Pn0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIGxpc3Qgb2Ygb3JkZXIgaXRlbXMgYW5kIHRoZSBkYWlseSBvcmRlciBkZXRhaWxzLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0T3JkZXJEZXRhaWxzQnlEYWlseU9yZGVySWQoZGFpbHlPcmRlcklkOiBzdHJpbmcpOiBQcm9taXNlPHsgb3JkZXJEZXRhaWxzOiBPcmRlckRldGFpbEl0ZW1bXSwgZGFpbHlPcmRlcjogRGFpbHlPcmRlciB8IG51bGwgfT4ge1xuICAgIC8vIDEuIEdldCB0aGUgZGFpbHkgb3JkZXIgZGV0YWlsc1xuICAgIGNvbnN0IGFsbERhaWx5T3JkZXJzID0gYXdhaXQgZ2V0QWxsRGFpbHlPcmRlcnMoKTtcbiAgICBjb25zdCBkYWlseU9yZGVyID0gYWxsRGFpbHlPcmRlcnMuZmluZChvID0+IG8uaWQgPT09IGRhaWx5T3JkZXJJZCk7XG5cbiAgICBpZiAoIWRhaWx5T3JkZXIpIHtcbiAgICAgICAgcmV0dXJuIHsgb3JkZXJEZXRhaWxzOiBbXSwgZGFpbHlPcmRlcjogbnVsbCB9O1xuICAgIH1cblxuICAgIC8vIDIuIEdldCBhbGwgb3JkZXIgaXRlbXNcbiAgICBjb25zdCBvcmRlckl0ZW1zUmFuZ2UgPSBgJHtPUkRFUl9JVEVNU19TSEVFVF9OQU1FfSFBOk1gOyAvLyBFeHRlbmRlZCB0byBjb2x1bW4gTSBmb3IgbmV3IGZpZWxkc1xuICAgIGNvbnN0IG9yZGVySXRlbXNEYXRhID0gYXdhaXQgZ2V0U2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCBvcmRlckl0ZW1zUmFuZ2UpO1xuXG4gICAgaWYgKG9yZGVySXRlbXNEYXRhLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgcmV0dXJuIHsgb3JkZXJEZXRhaWxzOiBbXSwgZGFpbHlPcmRlcjogZGFpbHlPcmRlciB9O1xuICAgIH1cblxuICAgIGNvbnN0IGhlYWRlcnMgPSBvcmRlckl0ZW1zRGF0YVswXS5tYXAoaCA9PiBTdHJpbmcoaCkudHJpbSgpKTtcbiAgICBjb25zdCBoZWFkZXJNYXAgPSBoZWFkZXJzLnJlZHVjZSgoYWNjLCBoZWFkZXIsIGluZGV4KSA9PiB7XG4gICAgICAgIGFjY1toZWFkZXIudHJpbSgpXSA9IGluZGV4O1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgIH0sIHt9IGFzIFJlY29yZDxzdHJpbmcsIG51bWJlcj4pO1xuXG4gICAgLy8gQ2hlY2sgZm9yIHJlcXVpcmVkIGNvbHVtbnNcbiAgICBjb25zdCByZXF1aXJlZENvbHMgPSBbJ2lkJywgJ2RhaWx5T3JkZXJJZCcsICd0aW1lc3RhbXAnLCAndXNlcm5hbWUnLCAndmVuZG9ySWQnLCAndmVuZG9yTmFtZScsICdtZW51SXRlbUlkJywgJ2l0ZW1OYW1lJywgJ3F1YW50aXR5JywgJ3ByaWNlJywgJ29wdGlvbnMnLCAnbm90ZXMnLCAnaXNQYWlkJ107XG4gICAgZm9yIChjb25zdCBjb2wgb2YgcmVxdWlyZWRDb2xzKSB7XG4gICAgICAgIGlmIChoZWFkZXJNYXBbY29sXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvcjogVGhlICcke09SREVSX0lURU1TX1NIRUVUX05BTUV9JyBzaGVldCBpcyBtaXNzaW5nIHRoZSByZXF1aXJlZCBjb2x1bW46ICcke2NvbH0nLmApO1xuICAgICAgICAgICAgcmV0dXJuIHsgb3JkZXJEZXRhaWxzOiBbXSwgZGFpbHlPcmRlcjogZGFpbHlPcmRlciB9O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgcm93cyA9IG9yZGVySXRlbXNEYXRhLnNsaWNlKDEpO1xuXG4gICAgLy8gMy4gRmlsdGVyIGl0ZW1zIHRoYXQgbWF0Y2ggdGhlIGRhaWx5T3JkZXJJZFxuICAgIGNvbnN0IGZpbHRlcmVkSXRlbXMgPSByb3dzLmZpbHRlcihyb3cgPT4gcm93W2hlYWRlck1hcFsnZGFpbHlPcmRlcklkJ11dID09PSBkYWlseU9yZGVySWQpO1xuXG4gICAgLy8gNC4gTWFwIHRvIE9yZGVyRGV0YWlsSXRlbSBvYmplY3RzXG4gICAgY29uc3Qgb3JkZXJEZXRhaWxzOiBPcmRlckRldGFpbEl0ZW1bXSA9IGZpbHRlcmVkSXRlbXMubWFwKHJvdyA9PiAoe1xuICAgICAgICBpZDogcm93W2hlYWRlck1hcFsnaWQnXV0gfHwgJycsXG4gICAgICAgIGRhaWx5T3JkZXJJZDogcm93W2hlYWRlck1hcFsnZGFpbHlPcmRlcklkJ11dIHx8ICcnLFxuICAgICAgICB0aW1lc3RhbXA6IHJvd1toZWFkZXJNYXBbJ3RpbWVzdGFtcCddXSB8fCAnJyxcbiAgICAgICAgdXNlcm5hbWU6IHJvd1toZWFkZXJNYXBbJ3VzZXJuYW1lJ11dIHx8ICdOL0EnLFxuICAgICAgICB2ZW5kb3JJZDogcm93W2hlYWRlck1hcFsndmVuZG9ySWQnXV0gfHwgJycsXG4gICAgICAgIHZlbmRvck5hbWU6IHJvd1toZWFkZXJNYXBbJ3ZlbmRvck5hbWUnXV0gfHwgJycsXG4gICAgICAgIG1lbnVJdGVtSWQ6IHJvd1toZWFkZXJNYXBbJ21lbnVJdGVtSWQnXV0gfHwgJycsXG4gICAgICAgIGl0ZW1OYW1lOiByb3dbaGVhZGVyTWFwWydpdGVtTmFtZSddXSB8fCAnTi9BJyxcbiAgICAgICAgcXVhbnRpdHk6IHBhcnNlSW50KHJvd1toZWFkZXJNYXBbJ3F1YW50aXR5J11dIHx8ICcwJywgMTApLFxuICAgICAgICBwcmljZTogcGFyc2VJbnQocm93W2hlYWRlck1hcFsncHJpY2UnXV0gfHwgJzAnLCAxMCksXG4gICAgICAgIG9wdGlvbnM6IHNhZmVQYXJzZU9wdGlvbnMocm93W2hlYWRlck1hcFsnb3B0aW9ucyddXSB8fCAne30nKSxcbiAgICAgICAgbm90ZXM6IHJvd1toZWFkZXJNYXBbJ25vdGVzJ11dIHx8ICcnLFxuICAgICAgICBpc1BhaWQ6IHJvd1toZWFkZXJNYXBbJ2lzUGFpZCddXSA9PT0gJ1RSVUUnIHx8IHJvd1toZWFkZXJNYXBbJ2lzUGFpZCddXSA9PT0gdHJ1ZSxcbiAgICB9KSk7XG5cbiAgICByZXR1cm4geyBvcmRlckRldGFpbHMsIGRhaWx5T3JkZXIgfTtcbn1cblxuZXhwb3J0IHR5cGUgVXNlck9yZGVyR3JvdXAgPSB7XG4gICAgZGFpbHlPcmRlcjogRGFpbHlPcmRlcjtcbiAgICBpdGVtczogT3JkZXJEZXRhaWxJdGVtW107XG4gICAgdG90YWw6IG51bWJlcjtcbiAgICBub3Rlczogc3RyaW5nO1xufVxuXG4vKipcbiAqIFJldHJpZXZlcyBhbGwgb3JkZXJzIGZvciBhIHNwZWNpZmljIHVzZXIsIGdyb3VwZWQgYnkgZGFpbHkgb3JkZXIuXG4gKiBAcGFyYW0ge3N0cmluZ30gdXNlcm5hbWUgVGhlIHVzZXJuYW1lIHRvIGZldGNoIG9yZGVycyBmb3IuXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxVc2VyT3JkZXJHcm91cFtdPn0gQSBsaXN0IG9mIHRoZSB1c2VyJ3Mgb3JkZXJzLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0T3JkZXJzQnlVc2VybmFtZSh1c2VybmFtZTogc3RyaW5nKTogUHJvbWlzZTxVc2VyT3JkZXJHcm91cFtdPiB7XG4gICAgLy8gMS4gR2V0IGFsbCBkYWlseSBvcmRlcnMgYW5kIGFsbCBvcmRlciBpdGVtc1xuICAgIGNvbnN0IFthbGxEYWlseU9yZGVycywgYWxsT3JkZXJJdGVtc0RhdGFdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICBnZXRBbGxEYWlseU9yZGVycygpLFxuICAgICAgICBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGAke09SREVSX0lURU1TX1NIRUVUX05BTUV9IUE6TWApXG4gICAgXSk7XG5cbiAgICBpZiAoYWxsT3JkZXJJdGVtc0RhdGEubGVuZ3RoIDwgMikge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgY29uc3QgaXRlbXNIZWFkZXJzID0gYWxsT3JkZXJJdGVtc0RhdGFbMF0ubWFwKGggPT4gU3RyaW5nKGgpLnRyaW0oKSk7XG4gICAgY29uc3QgaXRlbXNIZWFkZXJNYXAgPSBpdGVtc0hlYWRlcnMucmVkdWNlKChhY2MsIGhlYWRlciwgaW5kZXgpID0+IHtcbiAgICAgICAgYWNjW2hlYWRlci50cmltKCldID0gaW5kZXg7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30gYXMgUmVjb3JkPHN0cmluZywgbnVtYmVyPik7XG5cbiAgICAvLyBDaGVjayBmb3IgcmVxdWlyZWQgY29sdW1uc1xuICAgIGNvbnN0IHJlcXVpcmVkQ29scyA9IFsndXNlcm5hbWUnLCAnZGFpbHlPcmRlcklkJywgJ2lkJywgJ3RpbWVzdGFtcCcsICd2ZW5kb3JJZCcsICd2ZW5kb3JOYW1lJywgJ21lbnVJdGVtSWQnLCAnaXRlbU5hbWUnLCAncXVhbnRpdHknLCAncHJpY2UnLCAnb3B0aW9ucycsICdub3RlcycsICdpc1BhaWQnXTtcbiAgICBmb3IgKGNvbnN0IGNvbCBvZiByZXF1aXJlZENvbHMpIHtcbiAgICAgICAgaWYgKGl0ZW1zSGVhZGVyTWFwW2NvbF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3I6IFRoZSAnJHtPUkRFUl9JVEVNU19TSEVFVF9OQU1FfScgc2hlZXQgaXMgbWlzc2luZyB0aGUgcmVxdWlyZWQgY29sdW1uOiAnJHtjb2x9Jy5gKTtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIDIuIEZpbHRlciBpdGVtcyBmb3IgdGhlIHNwZWNpZmljIHVzZXJuYW1lXG4gICAgY29uc3QgdXNlckl0ZW1zUm93cyA9IGFsbE9yZGVySXRlbXNEYXRhLnNsaWNlKDEpLmZpbHRlcihyb3cgPT4gcm93W2l0ZW1zSGVhZGVyTWFwWyd1c2VybmFtZSddXSA9PT0gdXNlcm5hbWUpO1xuICAgIFxuICAgIGlmICh1c2VySXRlbXNSb3dzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgY29uc3QgdXNlckl0ZW1zOiBPcmRlckRldGFpbEl0ZW1bXSA9IHVzZXJJdGVtc1Jvd3MubWFwKHJvdyA9PiAoe1xuICAgICAgICBpZDogcm93W2l0ZW1zSGVhZGVyTWFwWydpZCddXSB8fCAnJyxcbiAgICAgICAgZGFpbHlPcmRlcklkOiByb3dbaXRlbXNIZWFkZXJNYXBbJ2RhaWx5T3JkZXJJZCddXSB8fCAnJyxcbiAgICAgICAgdGltZXN0YW1wOiByb3dbaXRlbXNIZWFkZXJNYXBbJ3RpbWVzdGFtcCddXSB8fCAnJyxcbiAgICAgICAgdXNlcm5hbWU6IHJvd1tpdGVtc0hlYWRlck1hcFsndXNlcm5hbWUnXV0gfHwgJ04vQScsXG4gICAgICAgIHZlbmRvcklkOiByb3dbaXRlbXNIZWFkZXJNYXBbJ3ZlbmRvcklkJ11dIHx8ICcnLFxuICAgICAgICB2ZW5kb3JOYW1lOiByb3dbaXRlbXNIZWFkZXJNYXBbJ3ZlbmRvck5hbWUnXV0gfHwgJycsXG4gICAgICAgIG1lbnVJdGVtSWQ6IHJvd1tpdGVtc0hlYWRlck1hcFsnbWVudUl0ZW1JZCddXSB8fCAnJyxcbiAgICAgICAgaXRlbU5hbWU6IHJvd1tpdGVtc0hlYWRlck1hcFsnaXRlbU5hbWUnXV0gfHwgJ04vQScsXG4gICAgICAgIHF1YW50aXR5OiBwYXJzZUludChyb3dbaXRlbXNIZWFkZXJNYXBbJ3F1YW50aXR5J11dIHx8ICcwJywgMTApLFxuICAgICAgICBwcmljZTogcGFyc2VJbnQocm93W2l0ZW1zSGVhZGVyTWFwWydwcmljZSddXSB8fCAnMCcsIDEwKSxcbiAgICAgICAgb3B0aW9uczogc2FmZVBhcnNlT3B0aW9ucyhyb3dbaXRlbXNIZWFkZXJNYXBbJ29wdGlvbnMnXV0gfHwgJ3t9JyksXG4gICAgICAgIG5vdGVzOiByb3dbaXRlbXNIZWFkZXJNYXBbJ25vdGVzJ11dIHx8ICcnLFxuICAgICAgICBpc1BhaWQ6IHJvd1tpdGVtc0hlYWRlck1hcFsnaXNQYWlkJ11dID09PSAnVFJVRScgfHwgcm93W2l0ZW1zSGVhZGVyTWFwWydpc1BhaWQnXV0gPT09IHRydWUsXG4gICAgfSkpO1xuICAgIFxuICAgIC8vIDMuIEdyb3VwIGl0ZW1zIGJ5IGRhaWx5T3JkZXJJZFxuICAgIGNvbnN0IGdyb3VwZWRCeURhaWx5T3JkZXIgPSB1c2VySXRlbXMucmVkdWNlKChhY2MsIGl0ZW0pID0+IHtcbiAgICAgICAgY29uc3Qga2V5ID0gaXRlbS5kYWlseU9yZGVySWQ7XG4gICAgICAgIGlmICghYWNjW2tleV0pIHtcbiAgICAgICAgICAgIGFjY1trZXldID0gW107XG4gICAgICAgIH1cbiAgICAgICAgYWNjW2tleV0ucHVzaChpdGVtKTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB7fSBhcyBSZWNvcmQ8c3RyaW5nLCBPcmRlckRldGFpbEl0ZW1bXT4pO1xuICAgIFxuICAgIFxuICAgIC8vIDQuIEZvcm1hdCB0aGUgZmluYWwgb3V0cHV0XG4gICAgY29uc3QgYWxsRGFpbHlPcmRlcnNNYXAgPSBuZXcgTWFwKGFsbERhaWx5T3JkZXJzLm1hcChvID0+IFtvLmlkLCBvXSkpO1xuICAgIGNvbnN0IHJlc3VsdDogVXNlck9yZGVyR3JvdXBbXSA9IFtdO1xuXG4gICAgZm9yIChjb25zdCBkYWlseU9yZGVySWQgaW4gZ3JvdXBlZEJ5RGFpbHlPcmRlcikge1xuICAgICAgICBjb25zdCBkYWlseU9yZGVyID0gYWxsRGFpbHlPcmRlcnNNYXAuZ2V0KGRhaWx5T3JkZXJJZCk7XG4gICAgICAgIGlmIChkYWlseU9yZGVyKSB7XG4gICAgICAgICAgICBjb25zdCBpdGVtcyA9IGdyb3VwZWRCeURhaWx5T3JkZXJbZGFpbHlPcmRlcklkXTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgIC8vIEFnZ3JlZ2F0ZSBpdGVtcyB3aXRoIHRoZSBzYW1lIG1lbnVJdGVtSWQgYW5kIG9wdGlvbnNcbiAgICAgICAgICAgIGNvbnN0IGFnZ3JlZ2F0ZWRJdGVtc01hcCA9IGl0ZW1zLnJlZHVjZSgoYWNjLCBpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uc1N0cmluZyA9IEpTT04uc3RyaW5naWZ5KGl0ZW0ub3B0aW9ucyB8fCB7fSk7XG4gICAgICAgICAgICAgICAgY29uc3QgYWdncmVnYXRpb25LZXkgPSBgJHtpdGVtLm1lbnVJdGVtSWR9fCR7b3B0aW9uc1N0cmluZ31gO1xuICAgICAgICAgICAgICAgIGlmIChhY2MuaGFzKGFnZ3JlZ2F0aW9uS2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBleGlzdGluZ0l0ZW0gPSBhY2MuZ2V0KGFnZ3JlZ2F0aW9uS2V5KSE7XG4gICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nSXRlbS5xdWFudGl0eSArPSBpdGVtLnF1YW50aXR5O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIENyZWF0ZSBhIGNvcHkgdG8gYXZvaWQgbW9kaWZ5aW5nIHRoZSBvcmlnaW5hbCBhcnJheSBpdGVtc1xuICAgICAgICAgICAgICAgICAgICBhY2Muc2V0KGFnZ3JlZ2F0aW9uS2V5LCB7IC4uLml0ZW0gfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgICAgICB9LCBuZXcgTWFwPHN0cmluZywgT3JkZXJEZXRhaWxJdGVtPigpKTtcblxuICAgICAgICAgICAgY29uc3QgZmluYWxJdGVtcyA9IEFycmF5LmZyb20oYWdncmVnYXRlZEl0ZW1zTWFwLnZhbHVlcygpKTtcbiAgICAgICAgICAgIGNvbnN0IHRvdGFsID0gZmluYWxJdGVtcy5yZWR1Y2UoKHN1bSwgaXRlbSkgPT4gc3VtICsgaXRlbS5wcmljZSAqIGl0ZW0ucXVhbnRpdHksIDApO1xuICAgICAgICAgICAgY29uc3Qgbm90ZXMgPSBpdGVtcy5sZW5ndGggPiAwID8gaXRlbXNbMF0ubm90ZXMgOiAnJzsgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBkYWlseU9yZGVyLFxuICAgICAgICAgICAgICAgIGl0ZW1zOiBmaW5hbEl0ZW1zLFxuICAgICAgICAgICAgICAgIHRvdGFsLFxuICAgICAgICAgICAgICAgIG5vdGVzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLy8gNS4gU29ydCB0aGUgZmluYWwgZ3JvdXBzIGJ5IGRhdGUsIG1vc3QgcmVjZW50IGZpcnN0XG4gICAgcmVzdWx0LnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgY29uc3QgZGF0ZUEgPSBuZXcgRGF0ZShgJHthLmRhaWx5T3JkZXIuZGF0ZX1UJHthLmRhaWx5T3JkZXIuZGVhZGxpbmV9YCk7XG4gICAgICAgIGNvbnN0IGRhdGVCID0gbmV3IERhdGUoYCR7Yi5kYWlseU9yZGVyLmRhdGV9VCR7Yi5kYWlseU9yZGVyLmRlYWRsaW5lfWApO1xuICAgICAgICByZXR1cm4gZGF0ZUIuZ2V0VGltZSgpIC0gZGF0ZUEuZ2V0VGltZSgpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBSZXRyaWV2ZXMgYSB1c2VyJ3Mgc3BlY2lmaWMgb3JkZXIgZm9yIGEgZ2l2ZW4gZGFpbHkgb3JkZXIsIGZvcm1hdHRlZCBmb3IgZWRpdGluZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSB1c2VybmFtZSBUaGUgdXNlcm5hbWUuXG4gKiBAcGFyYW0ge3N0cmluZ30gZGFpbHlPcmRlcklkIFRoZSBJRCBvZiB0aGUgZGFpbHkgb3JkZXIuXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxPcmRlckl0ZW1bXT59IEEgbGlzdCBvZiBvcmRlciBpdGVtcyByZWFkeSBmb3IgdGhlIGNhcnQuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRFeGlzdGluZ09yZGVyRm9yRWRpdCh1c2VybmFtZTogc3RyaW5nLCBkYWlseU9yZGVySWQ6IHN0cmluZyk6IFByb21pc2U8T3JkZXJJdGVtW10+IHtcbiAgY29uc3QgYWxsT3JkZXJJdGVtc0RhdGEgPSBhd2FpdCBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGAke09SREVSX0lURU1TX1NIRUVUX05BTUV9IUE6TWApO1xuICBpZiAoYWxsT3JkZXJJdGVtc0RhdGEubGVuZ3RoIDwgMikge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIGNvbnN0IGl0ZW1zSGVhZGVycyA9IGFsbE9yZGVySXRlbXNEYXRhWzBdLm1hcChoID0+IFN0cmluZyhoKS50cmltKCkpO1xuICBjb25zdCBpdGVtc0hlYWRlck1hcCA9IGl0ZW1zSGVhZGVycy5yZWR1Y2UoKGFjYywgaGVhZGVyLCBpbmRleCkgPT4ge1xuICAgIGFjY1toZWFkZXJdID0gaW5kZXg7XG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30gYXMgUmVjb3JkPHN0cmluZywgbnVtYmVyPik7XG5cbiAgY29uc3QgdXNlckl0ZW1zUm93cyA9IGFsbE9yZGVySXRlbXNEYXRhXG4gICAgLnNsaWNlKDEpXG4gICAgLmZpbHRlcihyb3cgPT4gcm93W2l0ZW1zSGVhZGVyTWFwWyd1c2VybmFtZSddXSA9PT0gdXNlcm5hbWUgJiYgcm93W2l0ZW1zSGVhZGVyTWFwWydkYWlseU9yZGVySWQnXV0gPT09IGRhaWx5T3JkZXJJZCk7XG5cbiAgaWYgKHVzZXJJdGVtc1Jvd3MubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIFxuICAvLyBIZWxwZXIgdG8gcmUtZ2VuZXJhdGUgdGhlIGNvbXBvc2l0ZSBpdGVtIElEIGZvciB0aGUgY2FydFxuICBjb25zdCBnZW5lcmF0ZU9yZGVySXRlbUlkID0gKGl0ZW1JZDogc3RyaW5nLCBvcHRpb25zOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+KSA9PiB7XG4gICAgaWYgKE9iamVjdC5rZXlzKG9wdGlvbnMpLmxlbmd0aCA9PT0gMCkgcmV0dXJuIGl0ZW1JZDtcbiAgICBjb25zdCBzb3J0ZWRTZWxlY3Rpb25zID0gT2JqZWN0LmtleXMob3B0aW9ucykuc29ydCgpLm1hcChrZXkgPT4gYCR7a2V5fToke29wdGlvbnNba2V5XX1gKS5qb2luKCd8Jyk7XG4gICAgcmV0dXJuIGAke2l0ZW1JZH1bJHtzb3J0ZWRTZWxlY3Rpb25zfV1gO1xuICB9XG5cbiAgY29uc3Qgb3JkZXJJdGVtczogT3JkZXJJdGVtW10gPSB1c2VySXRlbXNSb3dzLm1hcChyb3cgPT4ge1xuICAgIGNvbnN0IG9wdGlvbnMgPSBzYWZlUGFyc2VPcHRpb25zKHJvd1tpdGVtc0hlYWRlck1hcFsnb3B0aW9ucyddXSB8fCAne30nKTtcbiAgICBjb25zdCBtZW51SXRlbUlkID0gcm93W2l0ZW1zSGVhZGVyTWFwWydtZW51SXRlbUlkJ11dO1xuICAgIHJldHVybiB7XG4gICAgICBpZDogZ2VuZXJhdGVPcmRlckl0ZW1JZChtZW51SXRlbUlkLCBvcHRpb25zKSxcbiAgICAgIG1lbnVJdGVtSWQ6IG1lbnVJdGVtSWQsXG4gICAgICBuYW1lOiByb3dbaXRlbXNIZWFkZXJNYXBbJ2l0ZW1OYW1lJ11dIHx8ICcnLFxuICAgICAgcHJpY2U6IHBhcnNlSW50KHJvd1tpdGVtc0hlYWRlck1hcFsncHJpY2UnXV0gfHwgJzAnLCAxMCksXG4gICAgICBxdWFudGl0eTogcGFyc2VJbnQocm93W2l0ZW1zSGVhZGVyTWFwWydxdWFudGl0eSddXSB8fCAnMCcsIDEwKSxcbiAgICAgIHZlbmRvck5hbWU6IHJvd1tpdGVtc0hlYWRlck1hcFsndmVuZG9yTmFtZSddXSB8fCAnJyxcbiAgICAgIHZlbmRvcklkOiByb3dbaXRlbXNIZWFkZXJNYXBbJ3ZlbmRvcklkJ11dIHx8ICcnLFxuICAgICAgdXNlcm5hbWU6IHVzZXJuYW1lLFxuICAgICAgb3B0aW9uczogb3B0aW9ucyxcbiAgICAgIG5vdGVzOiByb3dbaXRlbXNIZWFkZXJNYXBbJ25vdGVzJ11dIHx8ICcnLFxuICAgIH07XG4gIH0pO1xuICBcbiAgcmV0dXJuIG9yZGVySXRlbXM7XG59XG5cblxuLyoqXG4gKiBEZWxldGVzIGEgdXNlcidzIGVudGlyZSBvcmRlciBmb3IgYSBzcGVjaWZpYyBkYWlseSBvcmRlci5cbiAqIEBwYXJhbSB7b2JqZWN0fSBwYXJhbXMgLSBUaGUgcGFyYW1ldGVycyBmb3IgZGVsZXRpbmcgdGhlIG9yZGVyLlxuICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtcy51c2VybmFtZSAtIFRoZSB1c2VybmFtZSBvZiB0aGUgdXNlci5cbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXMuZGFpbHlPcmRlcklkIC0gVGhlIElEIG9mIHRoZSBkYWlseSBvcmRlciB0byBkZWxldGUuXG4gKiBAcmV0dXJucyB7UHJvbWlzZTx7c3VjY2VzczogYm9vbGVhbn0+fSBBIHN1Y2Nlc3MgZmxhZy5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVVzZXJPcmRlcih7IHVzZXJuYW1lLCBkYWlseU9yZGVySWQgfTogeyB1c2VybmFtZTogc3RyaW5nLCBkYWlseU9yZGVySWQ6IHN0cmluZyB9KTogUHJvbWlzZTx7IHN1Y2Nlc3M6IGJvb2xlYW4gfT4ge1xuICAgIGNvbnN0IFtvcmRlckl0ZW1zRGF0YVdpdGhIZWFkZXJdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGAke09SREVSX0lURU1TX1NIRUVUX05BTUV9IUE6TWApLFxuICAgIF0pO1xuXG4gICAgaWYgKG9yZGVySXRlbXNEYXRhV2l0aEhlYWRlci5sZW5ndGggPCAyKSB7XG4gICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07IC8vIE5vIGl0ZW1zIHRvIGRlbGV0ZVxuICAgIH1cblxuICAgIGNvbnN0IGl0ZW1zSGVhZGVycyA9IG9yZGVySXRlbXNEYXRhV2l0aEhlYWRlclswXTtcbiAgICBjb25zdCBpdGVtc1Jvd3MgPSBvcmRlckl0ZW1zRGF0YVdpdGhIZWFkZXIuc2xpY2UoMSk7XG4gICAgXG4gICAgY29uc3QgaGVhZGVyTWFwID0gaXRlbXNIZWFkZXJzLnJlZHVjZSgoYWNjLCBoLCBpKSA9PiB7IGFjY1tTdHJpbmcoaCldID0gaTsgcmV0dXJuIGFjYzsgfSwge30gYXMgUmVjb3JkPHN0cmluZywgbnVtYmVyPik7XG4gICAgY29uc3QgZGFpbHlPcmRlcklkSW5kZXggPSBoZWFkZXJNYXBbJ2RhaWx5T3JkZXJJZCddO1xuICAgIGNvbnN0IHVzZXJuYW1lSW5kZXggPSBoZWFkZXJNYXBbJ3VzZXJuYW1lJ107XG5cbiAgICBpZiAoZGFpbHlPcmRlcklkSW5kZXggPT09IHVuZGVmaW5lZCB8fCB1c2VybmFtZUluZGV4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlICdvcmRlcl9pdGVtcycgc2hlZXQgaXMgbWlzc2luZyByZXF1aXJlZCBjb2x1bW5zICdkYWlseU9yZGVySWQnIG9yICd1c2VybmFtZScuXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IGl0ZW1zVG9LZWVwID0gaXRlbXNSb3dzLmZpbHRlcihyb3cgPT4gXG4gICAgICAgICEocm93W2RhaWx5T3JkZXJJZEluZGV4XSA9PT0gZGFpbHlPcmRlcklkICYmIHJvd1t1c2VybmFtZUluZGV4XSA9PT0gdXNlcm5hbWUpXG4gICAgKTtcbiAgICBcbiAgICBhd2FpdCBiYXRjaFVwZGF0ZVNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgW3tcbiAgICAgICAgcmFuZ2U6IGAke09SREVSX0lURU1TX1NIRUVUX05BTUV9IUExOk1gLFxuICAgICAgICB2YWx1ZXM6IFtpdGVtc0hlYWRlcnMsIC4uLml0ZW1zVG9LZWVwXSxcbiAgICB9XSk7XG5cbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG59XG5cbi8qKlxuICogTWFya3MgYSB1c2VyJ3Mgb3JkZXIgZm9yIGEgc3BlY2lmaWMgZGFpbHkgb3JkZXIgYXMgcGFpZCBvciB1bnBhaWQuXG4gKiBAcGFyYW0ge29iamVjdH0gcGFyYW1zIC0gVGhlIHBhcmFtZXRlcnMgZm9yIHRoZSBvcGVyYXRpb24uXG4gKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1zLmRhaWx5T3JkZXJJZCAtIFRoZSBJRCBvZiB0aGUgZGFpbHkgb3JkZXIuXG4gKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1zLnVzZXJuYW1lIC0gVGhlIHVzZXJuYW1lIG9mIHRoZSB1c2VyLlxuICogQHBhcmFtIHtib29sZWFufSBwYXJhbXMuaXNQYWlkIC0gVGhlIG5ldyBwYXltZW50IHN0YXR1cy5cbiAqIEByZXR1cm5zIHtQcm9taXNlPHtzdWNjZXNzOiBib29sZWFufT59IEEgc3VjY2VzcyBmbGFnLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbWFya1VzZXJPcmRlckFzUGFpZCh7IGRhaWx5T3JkZXJJZCwgdXNlcm5hbWUsIGlzUGFpZCB9OiB7IGRhaWx5T3JkZXJJZDogc3RyaW5nLCB1c2VybmFtZTogc3RyaW5nLCBpc1BhaWQ6IGJvb2xlYW4gfSk6IFByb21pc2U8eyBzdWNjZXNzOiBib29sZWFuIH0+IHtcbiAgLy8gMS4gR2V0IGFsbCBvcmRlciBpdGVtcyBkYXRhLlxuICBjb25zdCBhbGxJdGVtc0RhdGEgPSBhd2FpdCBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGAke09SREVSX0lURU1TX1NIRUVUX05BTUV9IUE6TWApO1xuXG4gIGlmIChhbGxJdGVtc0RhdGEubGVuZ3RoIDwgMikge1xuICAgIHRocm93IG5ldyBFcnJvcihcIuaJvuS4jeWIsOioguWWruWTgemgheizh+aWmeOAglwiKTtcbiAgfVxuXG4gIGNvbnN0IGhlYWRlcnMgPSBhbGxJdGVtc0RhdGFbMF07XG4gIGNvbnN0IHJvd3MgPSBhbGxJdGVtc0RhdGEuc2xpY2UoMSk7XG4gIGNvbnN0IGhlYWRlck1hcCA9IGhlYWRlcnMucmVkdWNlKChhY2MsIGgsIGkpID0+IHsgYWNjW1N0cmluZyhoKV0gPSBpOyByZXR1cm4gYWNjOyB9LCB7fSBhcyBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+KTtcbiAgY29uc3QgZGFpbHlPcmRlcklkSW5kZXggPSBoZWFkZXJNYXBbJ2RhaWx5T3JkZXJJZCddO1xuICBjb25zdCB1c2VybmFtZUluZGV4ID0gaGVhZGVyTWFwWyd1c2VybmFtZSddO1xuICBjb25zdCBpc1BhaWRJbmRleCA9IGhlYWRlck1hcFsnaXNQYWlkJ107XG5cbiAgaWYgKGRhaWx5T3JkZXJJZEluZGV4ID09PSB1bmRlZmluZWQgfHwgdXNlcm5hbWVJbmRleCA9PT0gdW5kZWZpbmVkIHx8IGlzUGFpZEluZGV4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSAnb3JkZXJfaXRlbXMnIHNoZWV0IGlzIG1pc3NpbmcgcmVxdWlyZWQgY29sdW1uczogJ2RhaWx5T3JkZXJJZCcsICd1c2VybmFtZScsIG9yICdpc1BhaWQnLlwiKTtcbiAgfVxuICAgIFxuICAvLyAyLiBQcmVwYXJlIGJhdGNoIHVwZGF0ZSBkYXRhXG4gIGNvbnN0IGRhdGFUb1VwZGF0ZSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd3MubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCByb3cgPSByb3dzW2ldO1xuICAgIGlmIChyb3dbZGFpbHlPcmRlcklkSW5kZXhdID09PSBkYWlseU9yZGVySWQgJiYgcm93W3VzZXJuYW1lSW5kZXhdID09PSB1c2VybmFtZSkge1xuICAgICAgLy8gU2hlZXQgcm93cyBhcmUgMS1iYXNlZCwgYW5kIHdlIGhhdmUgYSBoZWFkZXIgcm93LCBzbyBhZGQgMi5cbiAgICAgIGNvbnN0IHJvd0luZGV4ID0gaSArIDI7IFxuICAgICAgZGF0YVRvVXBkYXRlLnB1c2goe1xuICAgICAgICByYW5nZTogYCR7T1JERVJfSVRFTVNfU0hFRVRfTkFNRX0hTSR7cm93SW5kZXh9YCwgLy8gJ00nIGlzIHRoZSBpc1BhaWQgY29sdW1uXG4gICAgICAgIHZhbHVlczogW1tpc1BhaWQgPyAnVFJVRScgOiAnRkFMU0UnXV0sXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvLyAzLiBFeGVjdXRlIGJhdGNoIHVwZGF0ZSBpZiB0aGVyZSdzIGFueXRoaW5nIHRvIHVwZGF0ZVxuICBpZiAoZGF0YVRvVXBkYXRlLmxlbmd0aCA+IDApIHtcbiAgICAvLyBUaGlzIGlzIG5vdCBhIFwidHJ1ZVwiIGJhdGNoIHVwZGF0ZSBpbiBvbmUgQVBJIGNhbGwsIGJ1dCBpdCdzIGJldHRlciB0aGFuIHJlYWRpbmcvd3JpdGluZyB0aGUgd2hvbGUgc2hlZXQuXG4gICAgLy8gQSBzaW5nbGUgYmF0Y2hVcGRhdGUgY2FsbCB3b3VsZCBiZSBtb3JlIGVmZmljaWVudCBpZiB0aGUgQVBJIHN0cnVjdHVyZSBhbGxvd3MgaXQgZWFzaWx5LlxuICAgICBjb25zdCBzaGVldHMgPSBhd2FpdCBnZXRBdXRoZW50aWNhdGVkQ2xpZW50KCk7XG4gICAgIGF3YWl0IHNoZWV0cy5zcHJlYWRzaGVldHMudmFsdWVzLmJhdGNoVXBkYXRlKHtcbiAgICAgICAgc3ByZWFkc2hlZXRJZDogU1BSRUFEU0hFRVRfSUQsXG4gICAgICAgIHJlcXVlc3RCb2R5OiB7XG4gICAgICAgICAgICB2YWx1ZUlucHV0T3B0aW9uOiAnVVNFUl9FTlRFUkVEJyxcbiAgICAgICAgICAgIGRhdGE6IGRhdGFUb1VwZGF0ZSxcbiAgICAgICAgfVxuICAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbn1cblxuZXhwb3J0IHR5cGUgVXBkYXRlVXNlck9yZGVyUmVxdWVzdCA9IHtcbiAgICBkYWlseU9yZGVySWQ6IHN0cmluZztcbiAgICB1c2VybmFtZTogc3RyaW5nO1xuICAgIGl0ZW1zOiBPcmRlckRldGFpbEl0ZW1bXTsgLy8gVGhlIGNvbXBsZXRlIG5ldyBsaXN0IG9mIGl0ZW1zXG59O1xuXG4vKipcbiAqIFVwZGF0ZXMgYSB1c2VyJ3MgZW50aXJlIG9yZGVyIGZvciBhIHNwZWNpZmljIGRhaWx5IG9yZGVyLlxuICogSXQgcmVwbGFjZXMgYWxsIG9mIHRoZSB1c2VyJ3MgcHJldmlvdXMgaXRlbXMgd2l0aCB0aGUgbmV3IGxpc3QgcHJvdmlkZWQuXG4gKiBAcGFyYW0ge1VwZGF0ZVVzZXJPcmRlclJlcXVlc3R9IHJlcSAtIFRoZSByZXF1ZXN0IGNvbnRhaW5pbmcgdGhlIHVzZXIncyB1cGRhdGVkIG9yZGVyLlxuICogQHJldHVybnMge1Byb21pc2U8e3N1Y2Nlc3M6IGJvb2xlYW59Pn0gQSBzdWNjZXNzIGZsYWcuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVVc2VyT3JkZXIocmVxOiBVcGRhdGVVc2VyT3JkZXJSZXF1ZXN0KTogUHJvbWlzZTx7IHN1Y2Nlc3M6IGJvb2xlYW4gfT4ge1xuICAgIGNvbnN0IHsgZGFpbHlPcmRlcklkLCB1c2VybmFtZSwgaXRlbXMgfSA9IHJlcTtcblxuICAgIC8vIDEuIEZpcnN0LCBkZWxldGUgYWxsIGV4aXN0aW5nIGl0ZW1zIGZvciB0aGlzIHVzZXIgaW4gdGhpcyBkYWlseSBvcmRlci5cbiAgICAvLyBUaGlzIHNpbXBsaWZpZXMgdGhlIGxvZ2ljIGJ5IG5vdCBoYXZpbmcgdG8gZmluZCBhbmQgdXBkYXRlIGluZGl2aWR1YWwgcm93cy5cbiAgICBhd2FpdCBkZWxldGVVc2VyT3JkZXIoeyB1c2VybmFtZSwgZGFpbHlPcmRlcklkIH0pO1xuXG4gICAgLy8gMi4gSWYgdGhlIG5ldyBsaXN0IG9mIGl0ZW1zIGlzIGVtcHR5LCB3ZSdyZSBkb25lLlxuICAgIGlmIChpdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xuICAgIH1cblxuICAgIC8vIDMuIEFwcGVuZCB0aGUgbmV3IGxpc3Qgb2YgaXRlbXMgdG8gdGhlIHNoZWV0LlxuICAgIGNvbnN0IGFsbEl0ZW1zUmFuZ2UgPSBgJHtPUkRFUl9JVEVNU19TSEVFVF9OQU1FfSFBMjpBYDtcbiAgICBjb25zdCBhbGxJdGVtSWRzRGF0YSA9IGF3YWl0IGdldFNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgYWxsSXRlbXNSYW5nZSk7XG4gICAgbGV0IGxhc3RJZE51bSA9IGFsbEl0ZW1JZHNEYXRhLmxlbmd0aCA+IDBcbiAgICAgICAgPyBNYXRoLm1heCgwLCAuLi5hbGxJdGVtSWRzRGF0YS5tYXAocm93ID0+IHBhcnNlSW50KChyb3dbMF0gfHwgJ29pMCcpLnJlcGxhY2UoJ29pJywgJycpLCAxMCkpLmZpbHRlcihudW0gPT4gIWlzTmFOKG51bSkpKVxuICAgICAgICA6IDA7XG4gICAgXG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpO1xuICAgIGNvbnN0IG9yZGVyVmFsdWVzID0gW107XG4gICAgY29uc3Qgbm90ZXMgPSBpdGVtc1swXT8ubm90ZXMgfHwgJyc7IC8vIEFzc3VtZSBub3RlcyBhcmUgdGhlIHNhbWUgZm9yIGFsbCBpdGVtc1xuICAgIGNvbnN0IGlzUGFpZCA9IGl0ZW1zWzBdPy5pc1BhaWQgfHwgZmFsc2U7IC8vIEFzc3VtZSBwYXltZW50IHN0YXR1cyBpcyB0aGUgc2FtZVxuXG4gICAgZm9yIChjb25zdCBpdGVtIG9mIGl0ZW1zKSB7XG4gICAgICAgIGxhc3RJZE51bSsrO1xuICAgICAgICBjb25zdCBuZXdJZCA9IGBvaSR7bGFzdElkTnVtLnRvU3RyaW5nKCkucGFkU3RhcnQoMywgJzAnKX1gO1xuICAgICAgICBjb25zdCBvcHRpb25zU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoaXRlbS5vcHRpb25zKTtcblxuICAgICAgICBvcmRlclZhbHVlcy5wdXNoKFtcbiAgICAgICAgICAgIG5ld0lkLFxuICAgICAgICAgICAgZGFpbHlPcmRlcklkLFxuICAgICAgICAgICAgbm93LFxuICAgICAgICAgICAgdXNlcm5hbWUsXG4gICAgICAgICAgICBpdGVtLnZlbmRvcklkLFxuICAgICAgICAgICAgaXRlbS52ZW5kb3JOYW1lLFxuICAgICAgICAgICAgaXRlbS5tZW51SXRlbUlkLFxuICAgICAgICAgICAgaXRlbS5pdGVtTmFtZSxcbiAgICAgICAgICAgIGl0ZW0ucXVhbnRpdHksXG4gICAgICAgICAgICBpdGVtLnByaWNlLFxuICAgICAgICAgICAgb3B0aW9uc1N0cmluZyxcbiAgICAgICAgICAgIG5vdGVzLFxuICAgICAgICAgICAgaXNQYWlkID8gJ1RSVUUnIDogJ0ZBTFNFJ1xuICAgICAgICBdKTtcbiAgICB9XG5cbiAgICBpZiAob3JkZXJWYWx1ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBhd2FpdCBhcHBlbmRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGAke09SREVSX0lURU1TX1NIRUVUX05BTUV9IUE6TWAsIG9yZGVyVmFsdWVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Im1TQWdwQnNCIn0=
}}),
"[project]/src/components/ui/textarea.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Textarea": (()=>Textarea)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
const Textarea = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm', className),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/textarea.tsx",
        lineNumber: 8,
        columnNumber: 7
    }, this);
});
Textarea.displayName = 'Textarea';
;
}}),
"[project]/src/components/ui/label.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Label": (()=>Label)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-label/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const labelVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
const Label = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(labelVariants(), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/label.tsx",
        lineNumber: 18,
        columnNumber: 3
    }, this));
Label.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"].displayName;
;
}}),
"[project]/src/components/OrderSummary.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "OrderSummary": (()=>OrderSummary)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/separator.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/textarea.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/label.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$minus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MinusCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-minus.js [app-ssr] (ecmascript) <export default as MinusCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$notebook$2d$pen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__NotebookPen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/notebook-pen.js [app-ssr] (ecmascript) <export default as NotebookPen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-plus.js [app-ssr] (ecmascript) <export default as PlusCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-cart.js [app-ssr] (ecmascript) <export default as ShoppingCart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/square-pen.js [app-ssr] (ecmascript) <export default as Edit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
function OrderSummary({ order, username, onUpdateQuantity, onSubmit, disabled = false, isEditing = false }) {
    const [notes, setNotes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    // When the component receives an existing order for editing, update the notes field.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isEditing && order.length > 0 && order[0].notes) {
            setNotes(order[0].notes);
        }
    }, [
        isEditing,
        order
    ]);
    const total = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return order.reduce((sum, item)=>sum + item.price * item.quantity, 0);
    }, [
        order
    ]);
    const vendorName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return order.length > 0 ? order[0].vendorName : "";
    }, [
        order
    ]);
    const vendorId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return order.length > 0 ? order[0].vendorId : "";
    }, [
        order
    ]);
    const handleSubmit = ()=>{
        if (disabled) return;
        const finalOrder = {
            username,
            vendorId,
            vendorName,
            notes,
            items: order.map(({ vendorName, vendorId, username, ...item })=>({
                    ...item,
                    notes: notes
                })) // ensure notes are consistent for all items
        };
        onSubmit(finalOrder);
        setNotes('');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("shadow-xl bg-background/80 backdrop-blur-sm transform transition-all duration-300 lg:-rotate-1 lg:hover:rotate-0", disabled && "bg-muted/80 lg:rotate-0"),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                className: "pb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    isEditing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__["Edit"], {
                                        className: "h-7 w-7 text-accent"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/OrderSummary.tsx",
                                        lineNumber: 84,
                                        columnNumber: 30
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$notebook$2d$pen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__NotebookPen$3e$__["NotebookPen"], {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("h-7 w-7 text-accent", disabled && "text-muted-foreground")
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/OrderSummary.tsx",
                                        lineNumber: 84,
                                        columnNumber: 73
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                        className: "font-headline text-2xl",
                                        children: isEditing ? '修改訂單' : '我的訂單'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/OrderSummary.tsx",
                                        lineNumber: 85,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/OrderSummary.tsx",
                                lineNumber: 83,
                                columnNumber: 13
                            }, this),
                            username && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-body text-sm font-medium text-muted-foreground",
                                children: [
                                    "訂購人: ",
                                    username
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/OrderSummary.tsx",
                                lineNumber: 87,
                                columnNumber: 26
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/OrderSummary.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this),
                    vendorName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardDescription"], {
                        children: [
                            "店家: ",
                            vendorName
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/OrderSummary.tsx",
                        lineNumber: 89,
                        columnNumber: 24
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/OrderSummary.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                children: order.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center justify-center text-center text-muted-foreground py-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"], {
                            className: "h-12 w-12 mb-4"
                        }, void 0, false, {
                            fileName: "[project]/src/components/OrderSummary.tsx",
                            lineNumber: 94,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-body",
                            children: "您的訂單是空的。"
                        }, void 0, false, {
                            fileName: "[project]/src/components/OrderSummary.tsx",
                            lineNumber: 95,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-body text-sm",
                            children: disabled ? "此店家已截止訂購。" : "快去挑選想吃的餐點吧！"
                        }, void 0, false, {
                            fileName: "[project]/src/components/OrderSummary.tsx",
                            lineNumber: 96,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/OrderSummary.tsx",
                    lineNumber: 93,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-h-60 overflow-y-auto pr-2 space-y-4",
                            children: order.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start justify-between font-body text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-medium",
                                                    children: item.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/OrderSummary.tsx",
                                                    lineNumber: 104,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-muted-foreground",
                                                    children: Object.entries(item.options).map(([key, value])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "mr-2",
                                                            children: [
                                                                key,
                                                                ": ",
                                                                value
                                                            ]
                                                        }, key, true, {
                                                            fileName: "[project]/src/components/OrderSummary.tsx",
                                                            lineNumber: 107,
                                                            columnNumber: 29
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/OrderSummary.tsx",
                                                    lineNumber: 105,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-muted-foreground",
                                                    children: [
                                                        "$",
                                                        item.price
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/OrderSummary.tsx",
                                                    lineNumber: 110,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/OrderSummary.tsx",
                                            lineNumber: 103,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "ghost",
                                                    size: "icon",
                                                    className: "h-7 w-7",
                                                    onClick: ()=>onUpdateQuantity(item.id, item.quantity - 1),
                                                    "aria-label": `減少 ${item.name} 數量`,
                                                    disabled: disabled,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$minus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MinusCircle$3e$__["MinusCircle"], {
                                                        className: "h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/OrderSummary.tsx",
                                                        lineNumber: 114,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/OrderSummary.tsx",
                                                    lineNumber: 113,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "w-6 text-center font-mono",
                                                    children: item.quantity
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/OrderSummary.tsx",
                                                    lineNumber: 116,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "ghost",
                                                    size: "icon",
                                                    className: "h-7 w-7",
                                                    onClick: ()=>onUpdateQuantity(item.id, item.quantity + 1),
                                                    "aria-label": `增加 ${item.name} 數量`,
                                                    disabled: disabled,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusCircle$3e$__["PlusCircle"], {
                                                        className: "h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/OrderSummary.tsx",
                                                        lineNumber: 118,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/OrderSummary.tsx",
                                                    lineNumber: 117,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "ghost",
                                                    size: "icon",
                                                    className: "h-7 w-7 text-destructive/70 hover:text-destructive",
                                                    onClick: ()=>onUpdateQuantity(item.id, 0),
                                                    "aria-label": `移除 ${item.name}`,
                                                    disabled: disabled,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                        className: "h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/OrderSummary.tsx",
                                                        lineNumber: 121,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/OrderSummary.tsx",
                                                    lineNumber: 120,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/OrderSummary.tsx",
                                            lineNumber: 112,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, item.id, true, {
                                    fileName: "[project]/src/components/OrderSummary.tsx",
                                    lineNumber: 102,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/OrderSummary.tsx",
                            lineNumber: 100,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Separator"], {}, void 0, false, {
                            fileName: "[project]/src/components/OrderSummary.tsx",
                            lineNumber: 127,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                    htmlFor: "order-notes",
                                    children: "訂單備註 (選填)"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/OrderSummary.tsx",
                                    lineNumber: 129,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Textarea"], {
                                    id: "order-notes",
                                    value: notes,
                                    onChange: (e)=>setNotes(e.target.value),
                                    placeholder: "例如: 不要辣、餐具一份",
                                    disabled: disabled
                                }, void 0, false, {
                                    fileName: "[project]/src/components/OrderSummary.tsx",
                                    lineNumber: 130,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/OrderSummary.tsx",
                            lineNumber: 128,
                            columnNumber: 14
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Separator"], {}, void 0, false, {
                            fileName: "[project]/src/components/OrderSummary.tsx",
                            lineNumber: 132,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between font-bold text-lg font-headline",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "總計"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/OrderSummary.tsx",
                                    lineNumber: 134,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        "$",
                                        total.toLocaleString()
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/OrderSummary.tsx",
                                    lineNumber: 135,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/OrderSummary.tsx",
                            lineNumber: 133,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/OrderSummary.tsx",
                    lineNumber: 99,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/OrderSummary.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardFooter"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                    className: "w-full bg-accent text-accent-foreground hover:bg-accent/90 text-base py-6",
                    disabled: order.length === 0 || disabled,
                    onClick: handleSubmit,
                    children: disabled ? "已截止" : isEditing ? '確認修改' : '送出訂單'
                }, void 0, false, {
                    fileName: "[project]/src/components/OrderSummary.tsx",
                    lineNumber: 141,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/OrderSummary.tsx",
                lineNumber: 140,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/OrderSummary.tsx",
        lineNumber: 80,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/components/ui/select.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Select": (()=>Select),
    "SelectContent": (()=>SelectContent),
    "SelectGroup": (()=>SelectGroup),
    "SelectItem": (()=>SelectItem),
    "SelectLabel": (()=>SelectLabel),
    "SelectScrollDownButton": (()=>SelectScrollDownButton),
    "SelectScrollUpButton": (()=>SelectScrollUpButton),
    "SelectSeparator": (()=>SelectSeparator),
    "SelectTrigger": (()=>SelectTrigger),
    "SelectValue": (()=>SelectValue)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-select/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-ssr] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const Select = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"];
const SelectGroup = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Group"];
const SelectValue = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Value"];
const SelectTrigger = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                    className: "h-4 w-4 opacity-50"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/select.tsx",
                    lineNumber: 30,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/select.tsx",
                lineNumber: 29,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 20,
        columnNumber: 3
    }, this));
SelectTrigger.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"].displayName;
const SelectScrollUpButton = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollUpButton"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex cursor-default items-center justify-center py-1", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/select.tsx",
            lineNumber: 48,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 40,
        columnNumber: 3
    }, this));
SelectScrollUpButton.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollUpButton"].displayName;
const SelectScrollDownButton = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollDownButton"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex cursor-default items-center justify-center py-1", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/select.tsx",
            lineNumber: 65,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 57,
        columnNumber: 3
    }, this));
SelectScrollDownButton.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollDownButton"].displayName;
const SelectContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, children, position = "popper", ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
            ref: ref,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
            position: position,
            ...props,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Viewport"], {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("p-1 max-h-60", position === "popper" && "min-w-[var(--radix-select-trigger-width)]"),
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/ui/select.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ui/select.tsx",
            lineNumber: 76,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 75,
        columnNumber: 3
    }, this));
SelectContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"].displayName;
const SelectLabel = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("py-1.5 pl-8 pr-2 text-sm font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 105,
        columnNumber: 3
    }, this));
SelectLabel.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"].displayName;
const SelectItem = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Item"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                        className: "h-4 w-4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/select.tsx",
                        lineNumber: 127,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/select.tsx",
                    lineNumber: 126,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/select.tsx",
                lineNumber: 125,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ItemText"], {
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/ui/select.tsx",
                lineNumber: 131,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 117,
        columnNumber: 3
    }, this));
SelectItem.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Item"].displayName;
const SelectSeparator = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Separator"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("-mx-1 my-1 h-px bg-muted", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 140,
        columnNumber: 3
    }, this));
SelectSeparator.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Separator"].displayName;
;
}}),
"[project]/src/ai/flows/data:58150a [app-ssr] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"60d3c7fd04147818c0059b0825992570c612535cab":"submitOrder"},"src/ai/flows/order-flow.ts",""] */ __turbopack_context__.s({
    "submitOrder": (()=>submitOrder)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var submitOrder = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("60d3c7fd04147818c0059b0825992570c612535cab", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "submitOrder"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vb3JkZXItZmxvdy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbid1c2Ugc2VydmVyJztcblxuaW1wb3J0IHsgZ2V0U2hlZXREYXRhLCBhcHBlbmRTaGVldERhdGEsIGdldEhlYWRlcnMsIHVwZGF0ZVNoZWV0RGF0YSwgYmF0Y2hVcGRhdGVTaGVldERhdGEsIGdldEF1dGhlbnRpY2F0ZWRDbGllbnQgfSBmcm9tICdAL3NlcnZpY2VzL3NoZWV0LXNlcnZpY2UnO1xuaW1wb3J0IHsgZ2V0VmVuZG9ycywgdHlwZSBWZW5kb3IgfSBmcm9tICcuL3ZlbmRvci1mbG93JztcbmltcG9ydCB7IHR5cGUgRmluYWxPcmRlciwgdHlwZSBPcmRlckl0ZW0gfSBmcm9tICdAL2NvbXBvbmVudHMvT3JkZXJTdW1tYXJ5JztcbmltcG9ydCB7IFB1Ymxpc2hPcmRlclJlcXVlc3RTY2hlbWEsIHR5cGUgUHVibGlzaE9yZGVyUmVxdWVzdCB9IGZyb20gJ0AvbGliL3NjaGVtYS9vcmRlcic7XG5pbXBvcnQgeyBmb3JtYXQsIHBhcnNlLCBwYXJzZUlTTywgaXNWYWxpZCB9IGZyb20gJ2RhdGUtZm5zJztcblxuY29uc3QgU1BSRUFEU0hFRVRfSUQgPSAnMVpqMmgwY1lscmIybUJhTmdsMS1Qb09LN3RsQ0N3RGNjQVhuNXc2NmhwNGMnO1xuY29uc3QgREFJTFlfT1JERVJTX1NIRUVUX05BTUUgPSAnZGFpbHlfb3JkZXJzJztcbmNvbnN0IE9SREVSX0lURU1TX1NIRUVUX05BTUUgPSAnb3JkZXJfaXRlbXMnO1xuXG5leHBvcnQgdHlwZSBEYWlseU9yZGVyID0ge1xuICAgIGlkOiBzdHJpbmc7XG4gICAgZGF0ZTogc3RyaW5nO1xuICAgIHZlbmRvcklkOiBzdHJpbmc7XG4gICAgdmVuZG9yTmFtZT86IHN0cmluZzsgLy8gT3B0aW9uYWw6IGZvciBkaXNwbGF5IG9uIGFkbWluIHBhZ2VcbiAgICBkZWFkbGluZTogc3RyaW5nO1xufTtcblxuLy8gVGhpcyB0eXBlIGlzIGZvciB0aGUgdXNlci1mYWNpbmcgb3JkZXIgcGFnZVxuZXhwb3J0IHR5cGUgQXZhaWxhYmxlT3JkZXIgPSB7XG4gICAgaWQ6IHN0cmluZzsgLy8gZGFpbHlPcmRlcklkXG4gICAgdmVuZG9yOiBWZW5kb3I7XG4gICAgZGF0ZTogc3RyaW5nO1xuICAgIGRlYWRsaW5lOiBzdHJpbmc7XG59O1xuXG4vLyBIZWxwZXIgdG8gc2FmZWx5IHBhcnNlIHRoZSBvcHRpb25zIHN0cmluZywgd2hpY2ggbWlnaHQgYmUgdmFsaWQgSlNPTiBvciBhIFwia2V5OnZhbHVlXCIgc3RyaW5nLlxuY29uc3Qgc2FmZVBhcnNlT3B0aW9ucyA9IChvcHRpb25zU3RyOiBzdHJpbmcpOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0+IHtcbiAgICBpZiAoIW9wdGlvbnNTdHIgfHwgdHlwZW9mIG9wdGlvbnNTdHIgIT09ICdzdHJpbmcnKSByZXR1cm4ge307XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gRmlyc3QsIHRyeSB0byBwYXJzZSBpdCBhcyBhIHZhbGlkIEpTT04gc3RyaW5nLlxuICAgICAgICAvLyBUaGlzIGhhbmRsZXMgY2FzZXMgbGlrZSAne1wi6aOv6YePXCI6XCLmraPluLhcIixcIui+o+W6plwiOlwi5LiN6L6jXCJ9J1xuICAgICAgICBjb25zdCBwYXJzZWQgPSBKU09OLnBhcnNlKG9wdGlvbnNTdHIpO1xuICAgICAgICBpZiAodHlwZW9mIHBhcnNlZCA9PT0gJ29iamVjdCcgJiYgcGFyc2VkICE9PSBudWxsICYmICFBcnJheS5pc0FycmF5KHBhcnNlZCkpIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJzZWQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIElmIEpTT04ucGFyc2UgZmFpbHMsIGl0J3Mgbm90IGEgSlNPTiBzdHJpbmcuXG4gICAgICAgIC8vIEFzc3VtZSBpdCdzIGEgc2ltcGxlIFwia2V5OnZhbHVlXCIgc3RyaW5nIGxpa2UgXCLpo6/ph4865q2j5bi4XCIuXG4gICAgICAgIC8vIFRoaXMgaXMgYSBmYWxsYmFjayBmb3IgZGF0YSB0aGF0IHdhc24ndCBzdG9yZWQgYXMgSlNPTi5cbiAgICAgICAgY29uc3QgcGFydHMgPSBvcHRpb25zU3RyLnNwbGl0KCc6Jyk7XG4gICAgICAgIGlmIChwYXJ0cy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IHBhcnRzWzBdLnRyaW0oKTtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gcGFydHNbMV0udHJpbSgpO1xuICAgICAgICAgICAgaWYgKGtleSAmJiB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7IFtrZXldOiB2YWx1ZSB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIElmIGl0J3Mgc29tZXRoaW5nIGVsc2Ugd2UgZG9uJ3QgcmVjb2duaXplLCBsb2cgaXQgYW5kIHJldHVybiBlbXB0eS5cbiAgICAgICAgY29uc29sZS53YXJuKGBDb3VsZCBub3QgcGFyc2Ugb3B0aW9ucyBzdHJpbmcgaW50byBhIHZhbGlkIG9iamVjdDogXCIke29wdGlvbnNTdHJ9XCJgKTtcbiAgICB9XG4gICAgLy8gUmV0dXJuIGVtcHR5IG9iamVjdCBpZiBpdCdzIG5vdCBhIHBhcnNhYmxlIEpTT04gb2JqZWN0IG9yIGEgc2ltcGxlIGtleTp2YWx1ZSBwYWlyLlxuICAgIHJldHVybiB7fTtcbn07XG5cblxuLy8gSGVscGVyIGZ1bmN0aW9uIHRvIGZvcm1hdCB0aW1lIGZyb20gU2hlZXRzICh3aGljaCBjYW4gYmUgYSBudW1iZXIpXG5jb25zdCBmb3JtYXRUaW1lID0gKHRpbWVWYWx1ZTogYW55KTogc3RyaW5nID0+IHtcbiAgICBpZiAodHlwZW9mIHRpbWVWYWx1ZSA9PT0gJ3N0cmluZycgJiYgdGltZVZhbHVlLm1hdGNoKC9eXFxkezJ9OlxcZHsyfSg6XFxkezJ9KT8kLykpIHtcbiAgICAgICAgcmV0dXJuIHRpbWVWYWx1ZS5zdWJzdHJpbmcoMCwgNSk7XG4gICAgfVxuICAgIFxuICAgIGlmICh0eXBlb2YgdGltZVZhbHVlID09PSAnbnVtYmVyJyAmJiB0aW1lVmFsdWUgPiAwICYmIHRpbWVWYWx1ZSA8IDEpIHtcbiAgICAgIC8vIEl0J3MgYSB0aW1lIHNlcmlhbCBudW1iZXIgZnJvbSBTaGVldHNcbiAgICAgIGNvbnN0IHRvdGFsU2Vjb25kcyA9IE1hdGgucm91bmQodGltZVZhbHVlICogODY0MDApO1xuICAgICAgY29uc3QgaG91cnMgPSBNYXRoLmZsb29yKHRvdGFsU2Vjb25kcyAvIDM2MDApO1xuICAgICAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IoKHRvdGFsU2Vjb25kcyAlIDM2MDApIC8gNjApO1xuICAgICAgcmV0dXJuIGAke2hvdXJzLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKX06JHttaW51dGVzLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKX1gO1xuICAgIH1cblxuICAgIC8vIFRyeSBwYXJzaW5nIGFzIGEgZGF0ZSBzdHJpbmcgdG8gZXh0cmFjdCB0aW1lXG4gICAgaWYgKHR5cGVvZiB0aW1lVmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBkYXRlID0gcGFyc2VJU08odGltZVZhbHVlKTtcbiAgICAgICAgICAgIGlmIChpc1ZhbGlkKGRhdGUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZvcm1hdChkYXRlLCAnSEg6bW0nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgLy8gSWdub3JlIHBhcnNlIGVycm9ycyBmcm9tIElTT1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjb25zdCB0aW1lTWF0Y2ggPSB0aW1lVmFsdWUubWF0Y2goLyhcXGR7Mn06XFxkezJ9KS8pO1xuICAgICAgICBpZiAodGltZU1hdGNoKSByZXR1cm4gdGltZU1hdGNoWzBdO1xuICAgIH1cbiAgICBcbiAgICAvLyBGYWxsYmFjayBmb3IgdW5leHBlY3RlZCBmb3JtYXRzXG4gICAgcmV0dXJuICcwMDowMCc7IFxufTtcblxuLy8gSGVscGVyIGZ1bmN0aW9uIHRvIGZvcm1hdCBkYXRlIGZyb20gU2hlZXRzICh3aGljaCBjYW4gYmUgYSBudW1iZXIgb3Igc3RyaW5nKVxuY29uc3QgZm9ybWF0RGF0ZSA9IChkYXRlVmFsdWU6IGFueSk6IHN0cmluZyA9PiB7XG4gICAgaWYgKCFkYXRlVmFsdWUpIHJldHVybiBmb3JtYXQobmV3IERhdGUoKSwgJ3l5eXktTU0tZGQnKTsgLy8gUmV0dXJuIHRvZGF5J3MgZGF0ZSBpZiBlbXB0eVxuXG4gICAgbGV0IGRhdGU7XG4gICAgXG4gICAgLy8gSGFuZGxlIFNoZWV0cyBkYXRlIHNlcmlhbCBudW1iZXIgKG51bWJlciBvZiBkYXlzIHNpbmNlIDE4OTktMTItMzApXG4gICAgaWYgKHR5cGVvZiBkYXRlVmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgICAgIGNvbnN0IGV4Y2VsRXBvY2ggPSBuZXcgRGF0ZShEYXRlLlVUQygxODk5LCAxMSwgMzApKTtcbiAgICAgICAgZGF0ZSA9IG5ldyBEYXRlKGV4Y2VsRXBvY2guZ2V0VGltZSgpICsgZGF0ZVZhbHVlICogODY0MDAwMDApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEhhbmRsZSBJU08gc3RyaW5nIGxpa2UgJzIwMjQtMDctMjVUMDA6MDA6MDAuMDAwWicgb3Igc2ltcGxlIHN0cmluZyAnMjAyNC0wNy0yNSdcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgZGF0ZSA9IHBhcnNlSVNPKFN0cmluZyhkYXRlVmFsdWUpKTtcbiAgICAgICAgICAgLy8gSWYgSVNPIHBhcnNpbmcgZmFpbHMsIHRyeSB0aGUgc2ltcGxlIGZvcm1hdFxuICAgICAgICAgICBpZiAoIWlzVmFsaWQoZGF0ZSkpIHtcbiAgICAgICAgICAgICAgIGRhdGUgPSBwYXJzZShTdHJpbmcoZGF0ZVZhbHVlKSwgJ3l5eXktTU0tZGQnLCBuZXcgRGF0ZSgpKTtcbiAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAgZGF0ZSA9IHBhcnNlKFN0cmluZyhkYXRlVmFsdWUpLCAneXl5eS1NTS1kZCcsIG5ldyBEYXRlKCkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8vIElmIGRhdGUgaXMgdmFsaWQsIGZvcm1hdCBpdCwgb3RoZXJ3aXNlIHJldHVybiB0b2RheSdzIGRhdGUgYXMgYSBmYWxsYmFja1xuICAgIHJldHVybiBpc1ZhbGlkKGRhdGUpID8gZm9ybWF0KGRhdGUsICd5eXl5LU1NLWRkJykgOiBmb3JtYXQobmV3IERhdGUoKSwgJ3l5eXktTU0tZGQnKTtcbn07XG5cblxuLyoqXG4gKiBSZXRyaWV2ZXMgYWxsIGF2YWlsYWJsZSBvcmRlcnMgZnJvbSB0aGUgZGFpbHlfb3JkZXJzIHNoZWV0LlxuICogQW55IG9yZGVyIHByZXNlbnQgaXMgY29uc2lkZXJlZCBhdmFpbGFibGUuXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxBdmFpbGFibGVPcmRlcltdPn0gQSBsaXN0IG9mIGF2YWlsYWJsZSB2ZW5kb3JzIGFuZCB0aGVpciBkZWFkbGluZXMuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBdmFpbGFibGVPcmRlcnMoKTogUHJvbWlzZTxBdmFpbGFibGVPcmRlcltdPiB7XG4gICAgY29uc3QgZGFpbHlPcmRlcnNSYW5nZSA9IGAke0RBSUxZX09SREVSU19TSEVFVF9OQU1FfSFBOkRgO1xuICAgIGNvbnN0IFtkYWlseU9yZGVyc0RhdGEsIGFsbFZlbmRvcnNdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGRhaWx5T3JkZXJzUmFuZ2UpLFxuICAgICAgICBnZXRWZW5kb3JzKClcbiAgICBdKTtcblxuICAgIGlmICghZGFpbHlPcmRlcnNEYXRhIHx8IGRhaWx5T3JkZXJzRGF0YS5sZW5ndGggPCAyKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgaGVhZGVyID0gZGFpbHlPcmRlcnNEYXRhWzBdO1xuICAgIGNvbnN0IHJvd3MgPSBkYWlseU9yZGVyc0RhdGEuc2xpY2UoMSk7XG5cbiAgICBjb25zdCBoZWFkZXJNYXAgPSBoZWFkZXIucmVkdWNlKChhY2MsIGgsIGkpID0+IHtcbiAgICAgICAgYWNjW1N0cmluZyhoKV0gPSBpO1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgIH0sIHt9IGFzIFJlY29yZDxzdHJpbmcsIG51bWJlcj4pO1xuXG4gICAgY29uc3QgYWxsVmVuZG9yc01hcCA9IG5ldyBNYXAoYWxsVmVuZG9ycy5tYXAodiA9PiBbdi52ZW5kb3JJZCwgdl0pKTtcblxuICAgIGNvbnN0IGF2YWlsYWJsZU9yZGVyczogQXZhaWxhYmxlT3JkZXJbXSA9IFtdO1xuXG4gICAgZm9yIChjb25zdCByb3cgb2Ygcm93cykge1xuICAgICAgICBpZiAocm93LmV2ZXJ5KGNlbGwgPT4gIWNlbGwpKSBjb250aW51ZTsgLy8gU2tpcCBjb21wbGV0ZWx5IGVtcHR5IHJvd3NcblxuICAgICAgICBjb25zdCBpZCA9IHJvd1toZWFkZXJNYXBbJ2lkJ11dO1xuICAgICAgICBjb25zdCB2ZW5kb3JJZCA9IHJvd1toZWFkZXJNYXBbJ3ZlbmRvcklkJ11dO1xuICAgICAgICBjb25zdCBkYXRlUmF3ID0gcm93W2hlYWRlck1hcFsnZGF0ZSddXTtcbiAgICAgICAgY29uc3QgZGVhZGxpbmVSYXcgPSByb3dbaGVhZGVyTWFwWydkZWFkbGluZSddXTtcblxuICAgICAgICBpZiAoIWlkIHx8ICF2ZW5kb3JJZCkgY29udGludWU7IC8vIFNraXAgcm93cyB3aXRob3V0IGVzc2VudGlhbCBkYXRhXG5cbiAgICAgICAgY29uc3QgdmVuZG9yID0gYWxsVmVuZG9yc01hcC5nZXQodmVuZG9ySWQpO1xuICAgICAgICBpZiAoIXZlbmRvciB8fCAhdmVuZG9yLmlzQWN0aXZlKSBjb250aW51ZTtcblxuICAgICAgICBhdmFpbGFibGVPcmRlcnMucHVzaCh7XG4gICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICB2ZW5kb3IsXG4gICAgICAgICAgICBkYXRlOiBmb3JtYXREYXRlKGRhdGVSYXcpLFxuICAgICAgICAgICAgZGVhZGxpbmU6IGZvcm1hdFRpbWUoZGVhZGxpbmVSYXcpIC8vIEZvcm1hdCB0aGUgZGVhZGxpbmVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGF2YWlsYWJsZU9yZGVycztcbn1cblxuLyoqXG4gKiBSZXRyaWV2ZXMgYWxsIGRhaWx5IG9yZGVycyBmb3IgYWRtaW4gZGlzcGxheS5cbiAqIEByZXR1cm5zIHtQcm9taXNlPERhaWx5T3JkZXJbXT59IEEgbGlzdCBvZiBhbGwgcHVibGlzaGVkIG9yZGVycy5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbERhaWx5T3JkZXJzKCk6IFByb21pc2U8RGFpbHlPcmRlcltdPiB7XG4gICAgY29uc3QgZGFpbHlPcmRlcnNSYW5nZSA9IGAke0RBSUxZX09SREVSU19TSEVFVF9OQU1FfSFBOkRgO1xuICAgICBjb25zdCBbZGFpbHlPcmRlcnNEYXRhLCBhbGxWZW5kb3JzXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgZ2V0U2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCBkYWlseU9yZGVyc1JhbmdlKSxcbiAgICAgICAgZ2V0VmVuZG9ycygpXG4gICAgXSk7XG4gICAgXG4gICAgaWYgKCFkYWlseU9yZGVyc0RhdGEgfHwgZGFpbHlPcmRlcnNEYXRhLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIGNvbnN0IGhlYWRlciA9IGRhaWx5T3JkZXJzRGF0YVswXTtcbiAgICBjb25zdCByb3dzID0gZGFpbHlPcmRlcnNEYXRhLnNsaWNlKDEpO1xuICAgIGNvbnN0IGFsbFZlbmRvcnNNYXAgPSBuZXcgTWFwKGFsbFZlbmRvcnMubWFwKHYgPT4gW3YudmVuZG9ySWQsIHZdKSk7XG4gICAgXG4gICAgY29uc3QgaGVhZGVyTWFwID0gaGVhZGVyLnJlZHVjZSgoYWNjLCBoLCBpKSA9PiB7XG4gICAgICAgIGFjY1tTdHJpbmcoaCldID0gaTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB7fSBhcyBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+KTtcblxuICAgIGNvbnN0IG9yZGVycyA9IHJvd3MubWFwKHJvdyA9PiB7XG4gICAgICAgIGNvbnN0IHZlbmRvcklkID0gcm93W2hlYWRlck1hcFsndmVuZG9ySWQnXV07XG4gICAgICAgIGNvbnN0IHZlbmRvciA9IGFsbFZlbmRvcnNNYXAuZ2V0KHZlbmRvcklkKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZDogcm93W2hlYWRlck1hcFsnaWQnXV0gfHwgJycsXG4gICAgICAgICAgICBkYXRlOiBmb3JtYXREYXRlKHJvd1toZWFkZXJNYXBbJ2RhdGUnXV0pLFxuICAgICAgICAgICAgdmVuZG9ySWQ6IHZlbmRvcklkIHx8ICcnLFxuICAgICAgICAgICAgdmVuZG9yTmFtZTogdmVuZG9yID8gdmVuZG9yLnZlbmRvck5hbWUgOiAn5pyq55+l5bqX5a62JyxcbiAgICAgICAgICAgIGRlYWRsaW5lOiBmb3JtYXRUaW1lKHJvd1toZWFkZXJNYXBbJ2RlYWRsaW5lJ11dKVxuICAgICAgICB9O1xuICAgIH0pLmZpbHRlcihvcmRlciA9PiBvcmRlci5pZCk7IC8vIEZpbHRlciBvdXQgYW55IGVtcHR5IHJvd3NcblxuICAgIC8vIFNvcnQgb3JkZXJzIGJ5IGRhdGUgYW5kIHRoZW4gYnkgZGVhZGxpbmUsIGFzY2VuZGluZyAoY2xvc2VzdCBmaXJzdClcbiAgICBvcmRlcnMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICBjb25zdCBkYXRlQSA9IG5ldyBEYXRlKGAke2EuZGF0ZX1UJHthLmRlYWRsaW5lfWApO1xuICAgICAgICBjb25zdCBkYXRlQiA9IG5ldyBEYXRlKGAke2IuZGF0ZX1UJHtiLmRlYWRsaW5lfWApO1xuICAgICAgICByZXR1cm4gZGF0ZUEuZ2V0VGltZSgpIC0gZGF0ZUIuZ2V0VGltZSgpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG9yZGVycztcbn1cblxuXG4vKipcbiAqIFB1Ymxpc2hlcyBhIG5ldyBvcmRlciBmb3IgYSBzcGVjaWZpYyBkYXRlLCB2ZW5kb3IgYW5kIGRlYWRsaW5lLlxuICogQHBhcmFtIHtQdWJsaXNoT3JkZXJSZXF1ZXN0fSByZXEgLSBUaGUgcmVxdWVzdCBjb250YWluaW5nIGRhdGUsIHZlbmRvcklkIGFuZCBkZWFkbGluZS5cbiAqIEByZXR1cm5zIHtQcm9taXNlPHtzdWNjZXNzOiBib29sZWFufT59IEEgc3VjY2VzcyBmbGFnLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcHVibGlzaE9yZGVyKHJlcTogUHVibGlzaE9yZGVyUmVxdWVzdCk6IFByb21pc2U8eyBzdWNjZXNzOiBib29sZWFuIH0+IHtcbiAgY29uc3QgdmFsaWRhdGlvbiA9IFB1Ymxpc2hPcmRlclJlcXVlc3RTY2hlbWEuc2FmZVBhcnNlKHJlcSk7XG4gIGlmICghdmFsaWRhdGlvbi5zdWNjZXNzKSB7XG4gICAgY29uc3QgZXJyb3JNc2cgPSB2YWxpZGF0aW9uLmVycm9yLmVycm9ycy5tYXAoZSA9PiBgJHtlLnBhdGguam9pbignLicpfTogJHtlLm1lc3NhZ2V9YCkuam9pbignLCAnKTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYOi8uOWFpeizh+aWmeacieiqpDogJHtlcnJvck1zZ31gKTtcbiAgfVxuXG4gIGNvbnN0IGFsbE9yZGVyc1JhbmdlID0gYCR7REFJTFlfT1JERVJTX1NIRUVUX05BTUV9IUEyOkFgO1xuICBjb25zdCBhbGxPcmRlcklkc0RhdGEgPSBhd2FpdCBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGFsbE9yZGVyc1JhbmdlKTtcbiAgICBjb25zdCBsYXN0SWROdW0gPSBhbGxPcmRlcklkc0RhdGEubGVuZ3RoID4gMCBcbiAgICAgICAgPyBNYXRoLm1heCgwLCAuLi5hbGxPcmRlcklkc0RhdGEubWFwKHJvdyA9PiBwYXJzZUludCgocm93WzBdIHx8ICdkbzAnKS5yZXBsYWNlKCdkbycsICcnKSwgMTApKS5maWx0ZXIobnVtID0+ICFpc05hTihudW0pKSlcbiAgICAgICAgOiAwO1xuICBjb25zdCBuZXdJZCA9IGBkbyR7KGxhc3RJZE51bSArIDEpLnRvU3RyaW5nKCkucGFkU3RhcnQoMywgJzAnKX1gO1xuXG4gIGNvbnN0IHZhbHVlcyA9IFtcbiAgICBbbmV3SWQsIHJlcS5kYXRlLCByZXEudmVuZG9ySWQsIHJlcS5kZWFkbGluZV1cbiAgXTtcbiAgXG4gIC8vIEVuc3VyZSBoZWFkZXJzIGV4aXN0XG4gIGNvbnN0IGhlYWRlcnMgPSBhd2FpdCBnZXRIZWFkZXJzKFNQUkVBRFNIRUVUX0lELCBEQUlMWV9PUkRFUlNfU0hFRVRfTkFNRSk7XG4gIGlmIChoZWFkZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgYXdhaXQgdXBkYXRlU2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCBgJHtEQUlMWV9PUkRFUlNfU0hFRVRfTkFNRX0hQTE6RDFgLCBbWydpZCcsICdkYXRlJywgJ3ZlbmRvcklkJywgJ2RlYWRsaW5lJ11dKTtcbiAgfVxuXG4gIGF3YWl0IGFwcGVuZFNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgYCR7REFJTFlfT1JERVJTX1NIRUVUX05BTUV9IUE6RGAsIHZhbHVlcyk7XG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbn1cblxuZXhwb3J0IHR5cGUgVXBkYXRlRGFpbHlPcmRlclJlcXVlc3QgPSB7XG4gICAgb3JkZXJJZDogc3RyaW5nO1xuICAgIHZlbmRvcklkOiBzdHJpbmc7XG4gICAgZGF0ZTogc3RyaW5nO1xuICAgIGRlYWRsaW5lOiBzdHJpbmc7XG59XG5cbi8qKlxuICogVXBkYXRlcyBhbiBleGlzdGluZyBkYWlseSBvcmRlcidzIGRhdGUgYW5kIGRlYWRsaW5lLlxuICogQHBhcmFtIHtVcGRhdGVEYWlseU9yZGVyUmVxdWVzdH0gcmVxIC0gVGhlIHJlcXVlc3QgY29udGFpbmluZyBvcmRlcklkLCBkYXRlIGFuZCBkZWFkbGluZS5cbiAqIEByZXR1cm5zIHtQcm9taXNlPHtzdWNjZXNzOiBib29sZWFufT59IEEgc3VjY2VzcyBmbGFnLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlRGFpbHlPcmRlcihyZXE6IFVwZGF0ZURhaWx5T3JkZXJSZXF1ZXN0KTogUHJvbWlzZTx7IHN1Y2Nlc3M6IGJvb2xlYW4gfT4ge1xuICAgIGNvbnN0IHsgb3JkZXJJZCwgdmVuZG9ySWQsIGRhdGUsIGRlYWRsaW5lIH0gPSByZXE7XG4gICAgXG4gICAgLy8gMS4gRmluZCB0aGUgcm93IG9mIHRoZSBvcmRlciB0byB1cGRhdGVcbiAgICBjb25zdCBhbGxPcmRlcnNEYXRhID0gYXdhaXQgZ2V0U2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCBgJHtEQUlMWV9PUkRFUlNfU0hFRVRfTkFNRX0hQTpBYCk7XG4gICAgY29uc3Qgcm93SW5kZXggPSBhbGxPcmRlcnNEYXRhLmZpbmRJbmRleChyb3cgPT4gcm93WzBdID09PSBvcmRlcklkKTtcbiAgICBcbiAgICBpZiAocm93SW5kZXggPT09IC0xKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihg5om+5LiN5YiwIElEIOeCuiAke29yZGVySWR9IOeahOioguWWruOAgmApO1xuICAgIH1cblxuICAgIC8vICsxIGJlY2F1c2Ugc2hlZXQgcm93cyBhcmUgMS1iYXNlZC5cbiAgICBjb25zdCByb3dUb1VwZGF0ZSA9IHJvd0luZGV4ICsgMTtcbiAgICBcbiAgICAvLyBXZSB1cGRhdGUgZGF0ZSBhbmQgZGVhZGxpbmUuIFZlbmRvcklkIGlzIG5vdCBjaGFuZ2VkLlxuICAgIC8vIFRoZSByYW5nZSBzaG91bGQgYmUgQng6RHggdG8gdXBkYXRlIGRhdGUgYW5kIGRlYWRsaW5lLlxuICAgIGNvbnN0IHVwZGF0ZVJhbmdlID0gYCR7REFJTFlfT1JERVJTX1NIRUVUX05BTUV9IUIke3Jvd1RvVXBkYXRlfTpEJHtyb3dUb1VwZGF0ZX1gO1xuICAgIGF3YWl0IHVwZGF0ZVNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgdXBkYXRlUmFuZ2UsIFtbZGF0ZSwgdmVuZG9ySWQsIGRlYWRsaW5lXV0pO1xuXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xufVxuXG5cbi8qKlxuICogRGVsZXRlcyBhIHB1Ymxpc2hlZCBkYWlseSBvcmRlciBhbmQgaXRzIGFzc29jaWF0ZWQgb3JkZXIgaXRlbXMuXG4gKiBAcGFyYW0ge3N0cmluZ30gZGFpbHlPcmRlcklkIFRoZSBJRCBvZiB0aGUgZGFpbHkgb3JkZXIgdG8gZGVsZXRlLlxuICogQHJldHVybnMge1Byb21pc2U8e3N1Y2Nlc3M6IGJvb2xlYW59Pn0gQSBzdWNjZXNzIGZsYWcuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVEYWlseU9yZGVyKGRhaWx5T3JkZXJJZDogc3RyaW5nKTogUHJvbWlzZTx7IHN1Y2Nlc3M6IGJvb2xlYW4gfT4ge1xuICAvLyAxLiBHZXQgYWxsIGRhdGEgZnJvbSBib3RoIHNoZWV0c1xuICBjb25zdCBbZGFpbHlPcmRlcnNEYXRhV2l0aEhlYWRlciwgb3JkZXJJdGVtc0RhdGFXaXRoSGVhZGVyXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGAke0RBSUxZX09SREVSU19TSEVFVF9OQU1FfSFBOkRgKSxcbiAgICBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGAke09SREVSX0lURU1TX1NIRUVUX05BTUV9IUE6TWApLCAvLyBSZWFkIHVwIHRvIGNvbHVtbiBNXG4gIF0pO1xuXG4gIGlmIChkYWlseU9yZGVyc0RhdGFXaXRoSGVhZGVyLmxlbmd0aCA8IDIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG4gIH1cblxuICBjb25zdCBkYWlseU9yZGVyc0hlYWRlcnMgPSBkYWlseU9yZGVyc0RhdGFXaXRoSGVhZGVyWzBdO1xuICBjb25zdCBkYWlseU9yZGVyc1Jvd3MgPSBkYWlseU9yZGVyc0RhdGFXaXRoSGVhZGVyLnNsaWNlKDEpO1xuICBcbiAgY29uc3Qgb3JkZXJJdGVtc0hlYWRlcnMgPSBvcmRlckl0ZW1zRGF0YVdpdGhIZWFkZXIubGVuZ3RoID4gMCA/IG9yZGVySXRlbXNEYXRhV2l0aEhlYWRlclswXSA6IFtdO1xuICBjb25zdCBvcmRlckl0ZW1zUm93cyA9IG9yZGVySXRlbXNEYXRhV2l0aEhlYWRlci5sZW5ndGggPiAxID8gb3JkZXJJdGVtc0RhdGFXaXRoSGVhZGVyLnNsaWNlKDEpIDogW107XG5cbiAgLy8gMi4gRmlsdGVyIHRoZSByb3dzIHRvIGtlZXAgZm9yIGJvdGggc2hlZXRzXG4gIGNvbnN0IGRhaWx5T3JkZXJzVG9LZWVwID0gZGFpbHlPcmRlcnNSb3dzLmZpbHRlcihyb3cgPT4gcm93WzBdICE9PSBkYWlseU9yZGVySWQpO1xuXG4gIGxldCBvcmRlckl0ZW1zVG9LZWVwID0gb3JkZXJJdGVtc1Jvd3M7XG4gIGlmIChvcmRlckl0ZW1zUm93cy5sZW5ndGggPiAwICYmIG9yZGVySXRlbXNIZWFkZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IG9yZGVySXRlbXNIZWFkZXJNYXAgPSBvcmRlckl0ZW1zSGVhZGVycy5yZWR1Y2UoKGFjYywgaCwgaSkgPT4geyBhY2NbU3RyaW5nKGgpXSA9IGk7IHJldHVybiBhY2M7IH0sIHt9IGFzIFJlY29yZDxzdHJpbmcsIG51bWJlcj4pO1xuICAgICAgY29uc3QgZGFpbHlPcmRlcklkSW5kZXggPSBvcmRlckl0ZW1zSGVhZGVyTWFwWydkYWlseU9yZGVySWQnXTtcbiAgICAgIFxuICAgICAgLy8gRW5zdXJlIHRoZSBkYWlseU9yZGVySWQgY29sdW1uIGV4aXN0cyBiZWZvcmUgZmlsdGVyaW5nXG4gICAgICBpZiAoZGFpbHlPcmRlcklkSW5kZXggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIG9yZGVySXRlbXNUb0tlZXAgPSBvcmRlckl0ZW1zUm93cy5maWx0ZXIoaXRlbVJvdyA9PiBpdGVtUm93W2RhaWx5T3JkZXJJZEluZGV4XSAhPT0gZGFpbHlPcmRlcklkKTtcbiAgICAgIH1cbiAgfVxuXG4gIC8vIDQuIFByZXBhcmUgYmF0Y2ggdXBkYXRlIGRhdGEgdG8gY2xlYXIgYW5kIHJld3JpdGUgYm90aCBzaGVldHNcbiAgYXdhaXQgYmF0Y2hVcGRhdGVTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIFtcbiAgICB7XG4gICAgICByYW5nZTogYCR7REFJTFlfT1JERVJTX1NIRUVUX05BTUV9IUExOkRgLFxuICAgICAgdmFsdWVzOiBbZGFpbHlPcmRlcnNIZWFkZXJzLCAuLi5kYWlseU9yZGVyc1RvS2VlcF0sXG4gICAgfSxcbiAgICB7XG4gICAgICByYW5nZTogYCR7T1JERVJfSVRFTVNfU0hFRVRfTkFNRX0hQTE6TWAsXG4gICAgICB2YWx1ZXM6IG9yZGVySXRlbXNIZWFkZXJzLmxlbmd0aCA+IDAgPyBbb3JkZXJJdGVtc0hlYWRlcnMsIC4uLm9yZGVySXRlbXNUb0tlZXBdIDogW10sXG4gICAgfVxuICBdKTtcblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG59XG5cblxuLyoqXG4gKiBTdWJtaXRzIGFuIG9yZGVyIGFuZCBzYXZlcyBpdCB0byB0aGUgJ29yZGVyX2l0ZW1zJyBzaGVldC5cbiAqIElmIGVkaXRpbmcgYW4gZXhpc3Rpbmcgb3JkZXIsIGl0IGZpcnN0IGRlbGV0ZXMgdGhlIG9sZCBpdGVtcy5cbiAqIEBwYXJhbSB7RmluYWxPcmRlcn0gb3JkZXIgLSBUaGUgY29tcGxldGUgb3JkZXIgZGV0YWlscy5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNFZGl0aW5nIC0gQSBmbGFnIHRvIGluZGljYXRlIGlmIHRoaXMgaXMgYW4gZWRpdC5cbiAqIEByZXR1cm5zIHtQcm9taXNlPHtzdWNjZXNzOiBib29sZWFufT59IEEgc3VjY2VzcyBmbGFnLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc3VibWl0T3JkZXIob3JkZXI6IEZpbmFsT3JkZXIsIGlzRWRpdGluZzogYm9vbGVhbiA9IGZhbHNlKTogUHJvbWlzZTx7IHN1Y2Nlc3M6IGJvb2xlYW4gfT4ge1xuICAgIC8vIElmIGVkaXRpbmcsIGZpcnN0IGRlbGV0ZSBhbGwgZXhpc3RpbmcgaXRlbXMgZm9yIHRoYXQgdXNlciBpbiB0aGF0IGRhaWx5IG9yZGVyXG4gICAgaWYgKGlzRWRpdGluZykge1xuICAgICAgICBhd2FpdCBkZWxldGVVc2VyT3JkZXIoeyB1c2VybmFtZTogb3JkZXIudXNlcm5hbWUsIGRhaWx5T3JkZXJJZDogb3JkZXIuZGFpbHlPcmRlcklkIH0pO1xuICAgIH1cbiAgICBcbiAgICAvLyBUaGVuLCBhcHBlbmQgdGhlIG5ldy91cGRhdGVkIGl0ZW1zXG4gICAgY29uc3QgYWxsSXRlbXNSYW5nZSA9IGAke09SREVSX0lURU1TX1NIRUVUX05BTUV9IUEyOkFgO1xuICAgIGNvbnN0IGFsbEl0ZW1JZHNEYXRhID0gYXdhaXQgZ2V0U2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCBhbGxJdGVtc1JhbmdlKTtcbiAgICBsZXQgbGFzdElkTnVtID0gYWxsSXRlbUlkc0RhdGEubGVuZ3RoID4gMFxuICAgICAgICA/IE1hdGgubWF4KDAsIC4uLmFsbEl0ZW1JZHNEYXRhLm1hcChyb3cgPT4gcGFyc2VJbnQoKHJvd1swXSB8fCAnb2kwJykucmVwbGFjZSgnb2knLCAnJyksIDEwKSkuZmlsdGVyKG51bSA9PiAhaXNOYU4obnVtKSkpXG4gICAgICAgIDogMDtcblxuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKTtcbiAgICBjb25zdCBvcmRlclZhbHVlcyA9IFtdO1xuXG4gICAgZm9yIChjb25zdCBpdGVtIG9mIG9yZGVyLml0ZW1zKSB7XG4gICAgICAgIGxhc3RJZE51bSsrOyAvLyBJbmNyZW1lbnQgSUQgZm9yIGVhY2ggaXRlbSBpbiB0aGUgbG9vcFxuICAgICAgICBjb25zdCBuZXdJZCA9IGBvaSR7bGFzdElkTnVtLnRvU3RyaW5nKCkucGFkU3RhcnQoMywgJzAnKX1gO1xuICAgICAgICBjb25zdCBvcHRpb25zU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoaXRlbS5vcHRpb25zKTtcblxuICAgICAgICBvcmRlclZhbHVlcy5wdXNoKFtcbiAgICAgICAgICAgIG5ld0lkLFxuICAgICAgICAgICAgb3JkZXIuZGFpbHlPcmRlcklkLFxuICAgICAgICAgICAgbm93LFxuICAgICAgICAgICAgb3JkZXIudXNlcm5hbWUsXG4gICAgICAgICAgICBvcmRlci52ZW5kb3JJZCxcbiAgICAgICAgICAgIG9yZGVyLnZlbmRvck5hbWUsXG4gICAgICAgICAgICBpdGVtLm1lbnVJdGVtSWQsXG4gICAgICAgICAgICBpdGVtLm5hbWUsXG4gICAgICAgICAgICBpdGVtLnF1YW50aXR5LFxuICAgICAgICAgICAgaXRlbS5wcmljZSxcbiAgICAgICAgICAgIG9wdGlvbnNTdHJpbmcsXG4gICAgICAgICAgICBvcmRlci5ub3RlcyxcbiAgICAgICAgICAgICdGQUxTRScgLy8gaXNQYWlkXG4gICAgICAgIF0pO1xuICAgIH1cbiAgICBcbiAgICAvLyBFbnN1cmUgaGVhZGVycyBleGlzdFxuICAgIGNvbnN0IGhlYWRlcnMgPSBhd2FpdCBnZXRIZWFkZXJzKFNQUkVBRFNIRUVUX0lELCBPUkRFUl9JVEVNU19TSEVFVF9OQU1FKTtcbiAgICBpZiAoaGVhZGVycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgYXdhaXQgdXBkYXRlU2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCBgJHtPUkRFUl9JVEVNU19TSEVFVF9OQU1FfSFBMTpNMWAsIFtbJ2lkJywgJ2RhaWx5T3JkZXJJZCcsICd0aW1lc3RhbXAnLCAndXNlcm5hbWUnLCAndmVuZG9ySWQnLCAndmVuZG9yTmFtZScsICdtZW51SXRlbUlkJywgJ2l0ZW1OYW1lJywgJ3F1YW50aXR5JywgJ3ByaWNlJywgJ29wdGlvbnMnLCAnbm90ZXMnLCAnaXNQYWlkJ11dKTtcbiAgICB9XG5cbiAgICBpZiAob3JkZXJWYWx1ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBhd2FpdCBhcHBlbmRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGAke09SREVSX0lURU1TX1NIRUVUX05BTUV9IUE6TWAsIG9yZGVyVmFsdWVzKTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xufVxuXG5cbmV4cG9ydCB0eXBlIE9yZGVyRGV0YWlsSXRlbSA9IHtcbiAgICBpZDogc3RyaW5nO1xuICAgIGRhaWx5T3JkZXJJZDogc3RyaW5nO1xuICAgIHRpbWVzdGFtcDogc3RyaW5nO1xuICAgIHVzZXJuYW1lOiBzdHJpbmc7XG4gICAgdmVuZG9ySWQ6IHN0cmluZztcbiAgICB2ZW5kb3JOYW1lOiBzdHJpbmc7XG4gICAgbWVudUl0ZW1JZDogc3RyaW5nO1xuICAgIGl0ZW1OYW1lOiBzdHJpbmc7XG4gICAgcXVhbnRpdHk6IG51bWJlcjtcbiAgICBwcmljZTogbnVtYmVyO1xuICAgIG9wdGlvbnM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz47XG4gICAgbm90ZXM6IHN0cmluZztcbiAgICBpc1BhaWQ6IGJvb2xlYW47XG59O1xuXG4vKipcbiAqIFJldHJpZXZlcyBhbGwgb3JkZXIgaXRlbXMgZm9yIGEgc3BlY2lmaWMgZGFpbHkgb3JkZXIuXG4gKiBAcGFyYW0ge3N0cmluZ30gZGFpbHlPcmRlcklkIFRoZSBJRCBvZiB0aGUgZGFpbHkgb3JkZXIuXG4gKiBAcmV0dXJucyB7UHJvbWlzZTx7b3JkZXJEZXRhaWxzOiBPcmRlckRldGFpbEl0ZW1bXSwgZGFpbHlPcmRlcjogRGFpbHlPcmRlciB8IG51bGx9Pn0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIGxpc3Qgb2Ygb3JkZXIgaXRlbXMgYW5kIHRoZSBkYWlseSBvcmRlciBkZXRhaWxzLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0T3JkZXJEZXRhaWxzQnlEYWlseU9yZGVySWQoZGFpbHlPcmRlcklkOiBzdHJpbmcpOiBQcm9taXNlPHsgb3JkZXJEZXRhaWxzOiBPcmRlckRldGFpbEl0ZW1bXSwgZGFpbHlPcmRlcjogRGFpbHlPcmRlciB8IG51bGwgfT4ge1xuICAgIC8vIDEuIEdldCB0aGUgZGFpbHkgb3JkZXIgZGV0YWlsc1xuICAgIGNvbnN0IGFsbERhaWx5T3JkZXJzID0gYXdhaXQgZ2V0QWxsRGFpbHlPcmRlcnMoKTtcbiAgICBjb25zdCBkYWlseU9yZGVyID0gYWxsRGFpbHlPcmRlcnMuZmluZChvID0+IG8uaWQgPT09IGRhaWx5T3JkZXJJZCk7XG5cbiAgICBpZiAoIWRhaWx5T3JkZXIpIHtcbiAgICAgICAgcmV0dXJuIHsgb3JkZXJEZXRhaWxzOiBbXSwgZGFpbHlPcmRlcjogbnVsbCB9O1xuICAgIH1cblxuICAgIC8vIDIuIEdldCBhbGwgb3JkZXIgaXRlbXNcbiAgICBjb25zdCBvcmRlckl0ZW1zUmFuZ2UgPSBgJHtPUkRFUl9JVEVNU19TSEVFVF9OQU1FfSFBOk1gOyAvLyBFeHRlbmRlZCB0byBjb2x1bW4gTSBmb3IgbmV3IGZpZWxkc1xuICAgIGNvbnN0IG9yZGVySXRlbXNEYXRhID0gYXdhaXQgZ2V0U2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCBvcmRlckl0ZW1zUmFuZ2UpO1xuXG4gICAgaWYgKG9yZGVySXRlbXNEYXRhLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgcmV0dXJuIHsgb3JkZXJEZXRhaWxzOiBbXSwgZGFpbHlPcmRlcjogZGFpbHlPcmRlciB9O1xuICAgIH1cblxuICAgIGNvbnN0IGhlYWRlcnMgPSBvcmRlckl0ZW1zRGF0YVswXS5tYXAoaCA9PiBTdHJpbmcoaCkudHJpbSgpKTtcbiAgICBjb25zdCBoZWFkZXJNYXAgPSBoZWFkZXJzLnJlZHVjZSgoYWNjLCBoZWFkZXIsIGluZGV4KSA9PiB7XG4gICAgICAgIGFjY1toZWFkZXIudHJpbSgpXSA9IGluZGV4O1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgIH0sIHt9IGFzIFJlY29yZDxzdHJpbmcsIG51bWJlcj4pO1xuXG4gICAgLy8gQ2hlY2sgZm9yIHJlcXVpcmVkIGNvbHVtbnNcbiAgICBjb25zdCByZXF1aXJlZENvbHMgPSBbJ2lkJywgJ2RhaWx5T3JkZXJJZCcsICd0aW1lc3RhbXAnLCAndXNlcm5hbWUnLCAndmVuZG9ySWQnLCAndmVuZG9yTmFtZScsICdtZW51SXRlbUlkJywgJ2l0ZW1OYW1lJywgJ3F1YW50aXR5JywgJ3ByaWNlJywgJ29wdGlvbnMnLCAnbm90ZXMnLCAnaXNQYWlkJ107XG4gICAgZm9yIChjb25zdCBjb2wgb2YgcmVxdWlyZWRDb2xzKSB7XG4gICAgICAgIGlmIChoZWFkZXJNYXBbY29sXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvcjogVGhlICcke09SREVSX0lURU1TX1NIRUVUX05BTUV9JyBzaGVldCBpcyBtaXNzaW5nIHRoZSByZXF1aXJlZCBjb2x1bW46ICcke2NvbH0nLmApO1xuICAgICAgICAgICAgcmV0dXJuIHsgb3JkZXJEZXRhaWxzOiBbXSwgZGFpbHlPcmRlcjogZGFpbHlPcmRlciB9O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgcm93cyA9IG9yZGVySXRlbXNEYXRhLnNsaWNlKDEpO1xuXG4gICAgLy8gMy4gRmlsdGVyIGl0ZW1zIHRoYXQgbWF0Y2ggdGhlIGRhaWx5T3JkZXJJZFxuICAgIGNvbnN0IGZpbHRlcmVkSXRlbXMgPSByb3dzLmZpbHRlcihyb3cgPT4gcm93W2hlYWRlck1hcFsnZGFpbHlPcmRlcklkJ11dID09PSBkYWlseU9yZGVySWQpO1xuXG4gICAgLy8gNC4gTWFwIHRvIE9yZGVyRGV0YWlsSXRlbSBvYmplY3RzXG4gICAgY29uc3Qgb3JkZXJEZXRhaWxzOiBPcmRlckRldGFpbEl0ZW1bXSA9IGZpbHRlcmVkSXRlbXMubWFwKHJvdyA9PiAoe1xuICAgICAgICBpZDogcm93W2hlYWRlck1hcFsnaWQnXV0gfHwgJycsXG4gICAgICAgIGRhaWx5T3JkZXJJZDogcm93W2hlYWRlck1hcFsnZGFpbHlPcmRlcklkJ11dIHx8ICcnLFxuICAgICAgICB0aW1lc3RhbXA6IHJvd1toZWFkZXJNYXBbJ3RpbWVzdGFtcCddXSB8fCAnJyxcbiAgICAgICAgdXNlcm5hbWU6IHJvd1toZWFkZXJNYXBbJ3VzZXJuYW1lJ11dIHx8ICdOL0EnLFxuICAgICAgICB2ZW5kb3JJZDogcm93W2hlYWRlck1hcFsndmVuZG9ySWQnXV0gfHwgJycsXG4gICAgICAgIHZlbmRvck5hbWU6IHJvd1toZWFkZXJNYXBbJ3ZlbmRvck5hbWUnXV0gfHwgJycsXG4gICAgICAgIG1lbnVJdGVtSWQ6IHJvd1toZWFkZXJNYXBbJ21lbnVJdGVtSWQnXV0gfHwgJycsXG4gICAgICAgIGl0ZW1OYW1lOiByb3dbaGVhZGVyTWFwWydpdGVtTmFtZSddXSB8fCAnTi9BJyxcbiAgICAgICAgcXVhbnRpdHk6IHBhcnNlSW50KHJvd1toZWFkZXJNYXBbJ3F1YW50aXR5J11dIHx8ICcwJywgMTApLFxuICAgICAgICBwcmljZTogcGFyc2VJbnQocm93W2hlYWRlck1hcFsncHJpY2UnXV0gfHwgJzAnLCAxMCksXG4gICAgICAgIG9wdGlvbnM6IHNhZmVQYXJzZU9wdGlvbnMocm93W2hlYWRlck1hcFsnb3B0aW9ucyddXSB8fCAne30nKSxcbiAgICAgICAgbm90ZXM6IHJvd1toZWFkZXJNYXBbJ25vdGVzJ11dIHx8ICcnLFxuICAgICAgICBpc1BhaWQ6IHJvd1toZWFkZXJNYXBbJ2lzUGFpZCddXSA9PT0gJ1RSVUUnIHx8IHJvd1toZWFkZXJNYXBbJ2lzUGFpZCddXSA9PT0gdHJ1ZSxcbiAgICB9KSk7XG5cbiAgICByZXR1cm4geyBvcmRlckRldGFpbHMsIGRhaWx5T3JkZXIgfTtcbn1cblxuZXhwb3J0IHR5cGUgVXNlck9yZGVyR3JvdXAgPSB7XG4gICAgZGFpbHlPcmRlcjogRGFpbHlPcmRlcjtcbiAgICBpdGVtczogT3JkZXJEZXRhaWxJdGVtW107XG4gICAgdG90YWw6IG51bWJlcjtcbiAgICBub3Rlczogc3RyaW5nO1xufVxuXG4vKipcbiAqIFJldHJpZXZlcyBhbGwgb3JkZXJzIGZvciBhIHNwZWNpZmljIHVzZXIsIGdyb3VwZWQgYnkgZGFpbHkgb3JkZXIuXG4gKiBAcGFyYW0ge3N0cmluZ30gdXNlcm5hbWUgVGhlIHVzZXJuYW1lIHRvIGZldGNoIG9yZGVycyBmb3IuXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxVc2VyT3JkZXJHcm91cFtdPn0gQSBsaXN0IG9mIHRoZSB1c2VyJ3Mgb3JkZXJzLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0T3JkZXJzQnlVc2VybmFtZSh1c2VybmFtZTogc3RyaW5nKTogUHJvbWlzZTxVc2VyT3JkZXJHcm91cFtdPiB7XG4gICAgLy8gMS4gR2V0IGFsbCBkYWlseSBvcmRlcnMgYW5kIGFsbCBvcmRlciBpdGVtc1xuICAgIGNvbnN0IFthbGxEYWlseU9yZGVycywgYWxsT3JkZXJJdGVtc0RhdGFdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICBnZXRBbGxEYWlseU9yZGVycygpLFxuICAgICAgICBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGAke09SREVSX0lURU1TX1NIRUVUX05BTUV9IUE6TWApXG4gICAgXSk7XG5cbiAgICBpZiAoYWxsT3JkZXJJdGVtc0RhdGEubGVuZ3RoIDwgMikge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgY29uc3QgaXRlbXNIZWFkZXJzID0gYWxsT3JkZXJJdGVtc0RhdGFbMF0ubWFwKGggPT4gU3RyaW5nKGgpLnRyaW0oKSk7XG4gICAgY29uc3QgaXRlbXNIZWFkZXJNYXAgPSBpdGVtc0hlYWRlcnMucmVkdWNlKChhY2MsIGhlYWRlciwgaW5kZXgpID0+IHtcbiAgICAgICAgYWNjW2hlYWRlci50cmltKCldID0gaW5kZXg7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30gYXMgUmVjb3JkPHN0cmluZywgbnVtYmVyPik7XG5cbiAgICAvLyBDaGVjayBmb3IgcmVxdWlyZWQgY29sdW1uc1xuICAgIGNvbnN0IHJlcXVpcmVkQ29scyA9IFsndXNlcm5hbWUnLCAnZGFpbHlPcmRlcklkJywgJ2lkJywgJ3RpbWVzdGFtcCcsICd2ZW5kb3JJZCcsICd2ZW5kb3JOYW1lJywgJ21lbnVJdGVtSWQnLCAnaXRlbU5hbWUnLCAncXVhbnRpdHknLCAncHJpY2UnLCAnb3B0aW9ucycsICdub3RlcycsICdpc1BhaWQnXTtcbiAgICBmb3IgKGNvbnN0IGNvbCBvZiByZXF1aXJlZENvbHMpIHtcbiAgICAgICAgaWYgKGl0ZW1zSGVhZGVyTWFwW2NvbF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3I6IFRoZSAnJHtPUkRFUl9JVEVNU19TSEVFVF9OQU1FfScgc2hlZXQgaXMgbWlzc2luZyB0aGUgcmVxdWlyZWQgY29sdW1uOiAnJHtjb2x9Jy5gKTtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIDIuIEZpbHRlciBpdGVtcyBmb3IgdGhlIHNwZWNpZmljIHVzZXJuYW1lXG4gICAgY29uc3QgdXNlckl0ZW1zUm93cyA9IGFsbE9yZGVySXRlbXNEYXRhLnNsaWNlKDEpLmZpbHRlcihyb3cgPT4gcm93W2l0ZW1zSGVhZGVyTWFwWyd1c2VybmFtZSddXSA9PT0gdXNlcm5hbWUpO1xuICAgIFxuICAgIGlmICh1c2VySXRlbXNSb3dzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgY29uc3QgdXNlckl0ZW1zOiBPcmRlckRldGFpbEl0ZW1bXSA9IHVzZXJJdGVtc1Jvd3MubWFwKHJvdyA9PiAoe1xuICAgICAgICBpZDogcm93W2l0ZW1zSGVhZGVyTWFwWydpZCddXSB8fCAnJyxcbiAgICAgICAgZGFpbHlPcmRlcklkOiByb3dbaXRlbXNIZWFkZXJNYXBbJ2RhaWx5T3JkZXJJZCddXSB8fCAnJyxcbiAgICAgICAgdGltZXN0YW1wOiByb3dbaXRlbXNIZWFkZXJNYXBbJ3RpbWVzdGFtcCddXSB8fCAnJyxcbiAgICAgICAgdXNlcm5hbWU6IHJvd1tpdGVtc0hlYWRlck1hcFsndXNlcm5hbWUnXV0gfHwgJ04vQScsXG4gICAgICAgIHZlbmRvcklkOiByb3dbaXRlbXNIZWFkZXJNYXBbJ3ZlbmRvcklkJ11dIHx8ICcnLFxuICAgICAgICB2ZW5kb3JOYW1lOiByb3dbaXRlbXNIZWFkZXJNYXBbJ3ZlbmRvck5hbWUnXV0gfHwgJycsXG4gICAgICAgIG1lbnVJdGVtSWQ6IHJvd1tpdGVtc0hlYWRlck1hcFsnbWVudUl0ZW1JZCddXSB8fCAnJyxcbiAgICAgICAgaXRlbU5hbWU6IHJvd1tpdGVtc0hlYWRlck1hcFsnaXRlbU5hbWUnXV0gfHwgJ04vQScsXG4gICAgICAgIHF1YW50aXR5OiBwYXJzZUludChyb3dbaXRlbXNIZWFkZXJNYXBbJ3F1YW50aXR5J11dIHx8ICcwJywgMTApLFxuICAgICAgICBwcmljZTogcGFyc2VJbnQocm93W2l0ZW1zSGVhZGVyTWFwWydwcmljZSddXSB8fCAnMCcsIDEwKSxcbiAgICAgICAgb3B0aW9uczogc2FmZVBhcnNlT3B0aW9ucyhyb3dbaXRlbXNIZWFkZXJNYXBbJ29wdGlvbnMnXV0gfHwgJ3t9JyksXG4gICAgICAgIG5vdGVzOiByb3dbaXRlbXNIZWFkZXJNYXBbJ25vdGVzJ11dIHx8ICcnLFxuICAgICAgICBpc1BhaWQ6IHJvd1tpdGVtc0hlYWRlck1hcFsnaXNQYWlkJ11dID09PSAnVFJVRScgfHwgcm93W2l0ZW1zSGVhZGVyTWFwWydpc1BhaWQnXV0gPT09IHRydWUsXG4gICAgfSkpO1xuICAgIFxuICAgIC8vIDMuIEdyb3VwIGl0ZW1zIGJ5IGRhaWx5T3JkZXJJZFxuICAgIGNvbnN0IGdyb3VwZWRCeURhaWx5T3JkZXIgPSB1c2VySXRlbXMucmVkdWNlKChhY2MsIGl0ZW0pID0+IHtcbiAgICAgICAgY29uc3Qga2V5ID0gaXRlbS5kYWlseU9yZGVySWQ7XG4gICAgICAgIGlmICghYWNjW2tleV0pIHtcbiAgICAgICAgICAgIGFjY1trZXldID0gW107XG4gICAgICAgIH1cbiAgICAgICAgYWNjW2tleV0ucHVzaChpdGVtKTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB7fSBhcyBSZWNvcmQ8c3RyaW5nLCBPcmRlckRldGFpbEl0ZW1bXT4pO1xuICAgIFxuICAgIFxuICAgIC8vIDQuIEZvcm1hdCB0aGUgZmluYWwgb3V0cHV0XG4gICAgY29uc3QgYWxsRGFpbHlPcmRlcnNNYXAgPSBuZXcgTWFwKGFsbERhaWx5T3JkZXJzLm1hcChvID0+IFtvLmlkLCBvXSkpO1xuICAgIGNvbnN0IHJlc3VsdDogVXNlck9yZGVyR3JvdXBbXSA9IFtdO1xuXG4gICAgZm9yIChjb25zdCBkYWlseU9yZGVySWQgaW4gZ3JvdXBlZEJ5RGFpbHlPcmRlcikge1xuICAgICAgICBjb25zdCBkYWlseU9yZGVyID0gYWxsRGFpbHlPcmRlcnNNYXAuZ2V0KGRhaWx5T3JkZXJJZCk7XG4gICAgICAgIGlmIChkYWlseU9yZGVyKSB7XG4gICAgICAgICAgICBjb25zdCBpdGVtcyA9IGdyb3VwZWRCeURhaWx5T3JkZXJbZGFpbHlPcmRlcklkXTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgIC8vIEFnZ3JlZ2F0ZSBpdGVtcyB3aXRoIHRoZSBzYW1lIG1lbnVJdGVtSWQgYW5kIG9wdGlvbnNcbiAgICAgICAgICAgIGNvbnN0IGFnZ3JlZ2F0ZWRJdGVtc01hcCA9IGl0ZW1zLnJlZHVjZSgoYWNjLCBpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uc1N0cmluZyA9IEpTT04uc3RyaW5naWZ5KGl0ZW0ub3B0aW9ucyB8fCB7fSk7XG4gICAgICAgICAgICAgICAgY29uc3QgYWdncmVnYXRpb25LZXkgPSBgJHtpdGVtLm1lbnVJdGVtSWR9fCR7b3B0aW9uc1N0cmluZ31gO1xuICAgICAgICAgICAgICAgIGlmIChhY2MuaGFzKGFnZ3JlZ2F0aW9uS2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBleGlzdGluZ0l0ZW0gPSBhY2MuZ2V0KGFnZ3JlZ2F0aW9uS2V5KSE7XG4gICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nSXRlbS5xdWFudGl0eSArPSBpdGVtLnF1YW50aXR5O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIENyZWF0ZSBhIGNvcHkgdG8gYXZvaWQgbW9kaWZ5aW5nIHRoZSBvcmlnaW5hbCBhcnJheSBpdGVtc1xuICAgICAgICAgICAgICAgICAgICBhY2Muc2V0KGFnZ3JlZ2F0aW9uS2V5LCB7IC4uLml0ZW0gfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgICAgICB9LCBuZXcgTWFwPHN0cmluZywgT3JkZXJEZXRhaWxJdGVtPigpKTtcblxuICAgICAgICAgICAgY29uc3QgZmluYWxJdGVtcyA9IEFycmF5LmZyb20oYWdncmVnYXRlZEl0ZW1zTWFwLnZhbHVlcygpKTtcbiAgICAgICAgICAgIGNvbnN0IHRvdGFsID0gZmluYWxJdGVtcy5yZWR1Y2UoKHN1bSwgaXRlbSkgPT4gc3VtICsgaXRlbS5wcmljZSAqIGl0ZW0ucXVhbnRpdHksIDApO1xuICAgICAgICAgICAgY29uc3Qgbm90ZXMgPSBpdGVtcy5sZW5ndGggPiAwID8gaXRlbXNbMF0ubm90ZXMgOiAnJzsgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBkYWlseU9yZGVyLFxuICAgICAgICAgICAgICAgIGl0ZW1zOiBmaW5hbEl0ZW1zLFxuICAgICAgICAgICAgICAgIHRvdGFsLFxuICAgICAgICAgICAgICAgIG5vdGVzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLy8gNS4gU29ydCB0aGUgZmluYWwgZ3JvdXBzIGJ5IGRhdGUsIG1vc3QgcmVjZW50IGZpcnN0XG4gICAgcmVzdWx0LnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgY29uc3QgZGF0ZUEgPSBuZXcgRGF0ZShgJHthLmRhaWx5T3JkZXIuZGF0ZX1UJHthLmRhaWx5T3JkZXIuZGVhZGxpbmV9YCk7XG4gICAgICAgIGNvbnN0IGRhdGVCID0gbmV3IERhdGUoYCR7Yi5kYWlseU9yZGVyLmRhdGV9VCR7Yi5kYWlseU9yZGVyLmRlYWRsaW5lfWApO1xuICAgICAgICByZXR1cm4gZGF0ZUIuZ2V0VGltZSgpIC0gZGF0ZUEuZ2V0VGltZSgpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBSZXRyaWV2ZXMgYSB1c2VyJ3Mgc3BlY2lmaWMgb3JkZXIgZm9yIGEgZ2l2ZW4gZGFpbHkgb3JkZXIsIGZvcm1hdHRlZCBmb3IgZWRpdGluZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSB1c2VybmFtZSBUaGUgdXNlcm5hbWUuXG4gKiBAcGFyYW0ge3N0cmluZ30gZGFpbHlPcmRlcklkIFRoZSBJRCBvZiB0aGUgZGFpbHkgb3JkZXIuXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxPcmRlckl0ZW1bXT59IEEgbGlzdCBvZiBvcmRlciBpdGVtcyByZWFkeSBmb3IgdGhlIGNhcnQuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRFeGlzdGluZ09yZGVyRm9yRWRpdCh1c2VybmFtZTogc3RyaW5nLCBkYWlseU9yZGVySWQ6IHN0cmluZyk6IFByb21pc2U8T3JkZXJJdGVtW10+IHtcbiAgY29uc3QgYWxsT3JkZXJJdGVtc0RhdGEgPSBhd2FpdCBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGAke09SREVSX0lURU1TX1NIRUVUX05BTUV9IUE6TWApO1xuICBpZiAoYWxsT3JkZXJJdGVtc0RhdGEubGVuZ3RoIDwgMikge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIGNvbnN0IGl0ZW1zSGVhZGVycyA9IGFsbE9yZGVySXRlbXNEYXRhWzBdLm1hcChoID0+IFN0cmluZyhoKS50cmltKCkpO1xuICBjb25zdCBpdGVtc0hlYWRlck1hcCA9IGl0ZW1zSGVhZGVycy5yZWR1Y2UoKGFjYywgaGVhZGVyLCBpbmRleCkgPT4ge1xuICAgIGFjY1toZWFkZXJdID0gaW5kZXg7XG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30gYXMgUmVjb3JkPHN0cmluZywgbnVtYmVyPik7XG5cbiAgY29uc3QgdXNlckl0ZW1zUm93cyA9IGFsbE9yZGVySXRlbXNEYXRhXG4gICAgLnNsaWNlKDEpXG4gICAgLmZpbHRlcihyb3cgPT4gcm93W2l0ZW1zSGVhZGVyTWFwWyd1c2VybmFtZSddXSA9PT0gdXNlcm5hbWUgJiYgcm93W2l0ZW1zSGVhZGVyTWFwWydkYWlseU9yZGVySWQnXV0gPT09IGRhaWx5T3JkZXJJZCk7XG5cbiAgaWYgKHVzZXJJdGVtc1Jvd3MubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIFxuICAvLyBIZWxwZXIgdG8gcmUtZ2VuZXJhdGUgdGhlIGNvbXBvc2l0ZSBpdGVtIElEIGZvciB0aGUgY2FydFxuICBjb25zdCBnZW5lcmF0ZU9yZGVySXRlbUlkID0gKGl0ZW1JZDogc3RyaW5nLCBvcHRpb25zOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+KSA9PiB7XG4gICAgaWYgKE9iamVjdC5rZXlzKG9wdGlvbnMpLmxlbmd0aCA9PT0gMCkgcmV0dXJuIGl0ZW1JZDtcbiAgICBjb25zdCBzb3J0ZWRTZWxlY3Rpb25zID0gT2JqZWN0LmtleXMob3B0aW9ucykuc29ydCgpLm1hcChrZXkgPT4gYCR7a2V5fToke29wdGlvbnNba2V5XX1gKS5qb2luKCd8Jyk7XG4gICAgcmV0dXJuIGAke2l0ZW1JZH1bJHtzb3J0ZWRTZWxlY3Rpb25zfV1gO1xuICB9XG5cbiAgY29uc3Qgb3JkZXJJdGVtczogT3JkZXJJdGVtW10gPSB1c2VySXRlbXNSb3dzLm1hcChyb3cgPT4ge1xuICAgIGNvbnN0IG9wdGlvbnMgPSBzYWZlUGFyc2VPcHRpb25zKHJvd1tpdGVtc0hlYWRlck1hcFsnb3B0aW9ucyddXSB8fCAne30nKTtcbiAgICBjb25zdCBtZW51SXRlbUlkID0gcm93W2l0ZW1zSGVhZGVyTWFwWydtZW51SXRlbUlkJ11dO1xuICAgIHJldHVybiB7XG4gICAgICBpZDogZ2VuZXJhdGVPcmRlckl0ZW1JZChtZW51SXRlbUlkLCBvcHRpb25zKSxcbiAgICAgIG1lbnVJdGVtSWQ6IG1lbnVJdGVtSWQsXG4gICAgICBuYW1lOiByb3dbaXRlbXNIZWFkZXJNYXBbJ2l0ZW1OYW1lJ11dIHx8ICcnLFxuICAgICAgcHJpY2U6IHBhcnNlSW50KHJvd1tpdGVtc0hlYWRlck1hcFsncHJpY2UnXV0gfHwgJzAnLCAxMCksXG4gICAgICBxdWFudGl0eTogcGFyc2VJbnQocm93W2l0ZW1zSGVhZGVyTWFwWydxdWFudGl0eSddXSB8fCAnMCcsIDEwKSxcbiAgICAgIHZlbmRvck5hbWU6IHJvd1tpdGVtc0hlYWRlck1hcFsndmVuZG9yTmFtZSddXSB8fCAnJyxcbiAgICAgIHZlbmRvcklkOiByb3dbaXRlbXNIZWFkZXJNYXBbJ3ZlbmRvcklkJ11dIHx8ICcnLFxuICAgICAgdXNlcm5hbWU6IHVzZXJuYW1lLFxuICAgICAgb3B0aW9uczogb3B0aW9ucyxcbiAgICAgIG5vdGVzOiByb3dbaXRlbXNIZWFkZXJNYXBbJ25vdGVzJ11dIHx8ICcnLFxuICAgIH07XG4gIH0pO1xuICBcbiAgcmV0dXJuIG9yZGVySXRlbXM7XG59XG5cblxuLyoqXG4gKiBEZWxldGVzIGEgdXNlcidzIGVudGlyZSBvcmRlciBmb3IgYSBzcGVjaWZpYyBkYWlseSBvcmRlci5cbiAqIEBwYXJhbSB7b2JqZWN0fSBwYXJhbXMgLSBUaGUgcGFyYW1ldGVycyBmb3IgZGVsZXRpbmcgdGhlIG9yZGVyLlxuICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtcy51c2VybmFtZSAtIFRoZSB1c2VybmFtZSBvZiB0aGUgdXNlci5cbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXMuZGFpbHlPcmRlcklkIC0gVGhlIElEIG9mIHRoZSBkYWlseSBvcmRlciB0byBkZWxldGUuXG4gKiBAcmV0dXJucyB7UHJvbWlzZTx7c3VjY2VzczogYm9vbGVhbn0+fSBBIHN1Y2Nlc3MgZmxhZy5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVVzZXJPcmRlcih7IHVzZXJuYW1lLCBkYWlseU9yZGVySWQgfTogeyB1c2VybmFtZTogc3RyaW5nLCBkYWlseU9yZGVySWQ6IHN0cmluZyB9KTogUHJvbWlzZTx7IHN1Y2Nlc3M6IGJvb2xlYW4gfT4ge1xuICAgIGNvbnN0IFtvcmRlckl0ZW1zRGF0YVdpdGhIZWFkZXJdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGAke09SREVSX0lURU1TX1NIRUVUX05BTUV9IUE6TWApLFxuICAgIF0pO1xuXG4gICAgaWYgKG9yZGVySXRlbXNEYXRhV2l0aEhlYWRlci5sZW5ndGggPCAyKSB7XG4gICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07IC8vIE5vIGl0ZW1zIHRvIGRlbGV0ZVxuICAgIH1cblxuICAgIGNvbnN0IGl0ZW1zSGVhZGVycyA9IG9yZGVySXRlbXNEYXRhV2l0aEhlYWRlclswXTtcbiAgICBjb25zdCBpdGVtc1Jvd3MgPSBvcmRlckl0ZW1zRGF0YVdpdGhIZWFkZXIuc2xpY2UoMSk7XG4gICAgXG4gICAgY29uc3QgaGVhZGVyTWFwID0gaXRlbXNIZWFkZXJzLnJlZHVjZSgoYWNjLCBoLCBpKSA9PiB7IGFjY1tTdHJpbmcoaCldID0gaTsgcmV0dXJuIGFjYzsgfSwge30gYXMgUmVjb3JkPHN0cmluZywgbnVtYmVyPik7XG4gICAgY29uc3QgZGFpbHlPcmRlcklkSW5kZXggPSBoZWFkZXJNYXBbJ2RhaWx5T3JkZXJJZCddO1xuICAgIGNvbnN0IHVzZXJuYW1lSW5kZXggPSBoZWFkZXJNYXBbJ3VzZXJuYW1lJ107XG5cbiAgICBpZiAoZGFpbHlPcmRlcklkSW5kZXggPT09IHVuZGVmaW5lZCB8fCB1c2VybmFtZUluZGV4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlICdvcmRlcl9pdGVtcycgc2hlZXQgaXMgbWlzc2luZyByZXF1aXJlZCBjb2x1bW5zICdkYWlseU9yZGVySWQnIG9yICd1c2VybmFtZScuXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IGl0ZW1zVG9LZWVwID0gaXRlbXNSb3dzLmZpbHRlcihyb3cgPT4gXG4gICAgICAgICEocm93W2RhaWx5T3JkZXJJZEluZGV4XSA9PT0gZGFpbHlPcmRlcklkICYmIHJvd1t1c2VybmFtZUluZGV4XSA9PT0gdXNlcm5hbWUpXG4gICAgKTtcbiAgICBcbiAgICBhd2FpdCBiYXRjaFVwZGF0ZVNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgW3tcbiAgICAgICAgcmFuZ2U6IGAke09SREVSX0lURU1TX1NIRUVUX05BTUV9IUExOk1gLFxuICAgICAgICB2YWx1ZXM6IFtpdGVtc0hlYWRlcnMsIC4uLml0ZW1zVG9LZWVwXSxcbiAgICB9XSk7XG5cbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG59XG5cbi8qKlxuICogTWFya3MgYSB1c2VyJ3Mgb3JkZXIgZm9yIGEgc3BlY2lmaWMgZGFpbHkgb3JkZXIgYXMgcGFpZCBvciB1bnBhaWQuXG4gKiBAcGFyYW0ge29iamVjdH0gcGFyYW1zIC0gVGhlIHBhcmFtZXRlcnMgZm9yIHRoZSBvcGVyYXRpb24uXG4gKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1zLmRhaWx5T3JkZXJJZCAtIFRoZSBJRCBvZiB0aGUgZGFpbHkgb3JkZXIuXG4gKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1zLnVzZXJuYW1lIC0gVGhlIHVzZXJuYW1lIG9mIHRoZSB1c2VyLlxuICogQHBhcmFtIHtib29sZWFufSBwYXJhbXMuaXNQYWlkIC0gVGhlIG5ldyBwYXltZW50IHN0YXR1cy5cbiAqIEByZXR1cm5zIHtQcm9taXNlPHtzdWNjZXNzOiBib29sZWFufT59IEEgc3VjY2VzcyBmbGFnLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbWFya1VzZXJPcmRlckFzUGFpZCh7IGRhaWx5T3JkZXJJZCwgdXNlcm5hbWUsIGlzUGFpZCB9OiB7IGRhaWx5T3JkZXJJZDogc3RyaW5nLCB1c2VybmFtZTogc3RyaW5nLCBpc1BhaWQ6IGJvb2xlYW4gfSk6IFByb21pc2U8eyBzdWNjZXNzOiBib29sZWFuIH0+IHtcbiAgLy8gMS4gR2V0IGFsbCBvcmRlciBpdGVtcyBkYXRhLlxuICBjb25zdCBhbGxJdGVtc0RhdGEgPSBhd2FpdCBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGAke09SREVSX0lURU1TX1NIRUVUX05BTUV9IUE6TWApO1xuXG4gIGlmIChhbGxJdGVtc0RhdGEubGVuZ3RoIDwgMikge1xuICAgIHRocm93IG5ldyBFcnJvcihcIuaJvuS4jeWIsOioguWWruWTgemgheizh+aWmeOAglwiKTtcbiAgfVxuXG4gIGNvbnN0IGhlYWRlcnMgPSBhbGxJdGVtc0RhdGFbMF07XG4gIGNvbnN0IHJvd3MgPSBhbGxJdGVtc0RhdGEuc2xpY2UoMSk7XG4gIGNvbnN0IGhlYWRlck1hcCA9IGhlYWRlcnMucmVkdWNlKChhY2MsIGgsIGkpID0+IHsgYWNjW1N0cmluZyhoKV0gPSBpOyByZXR1cm4gYWNjOyB9LCB7fSBhcyBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+KTtcbiAgY29uc3QgZGFpbHlPcmRlcklkSW5kZXggPSBoZWFkZXJNYXBbJ2RhaWx5T3JkZXJJZCddO1xuICBjb25zdCB1c2VybmFtZUluZGV4ID0gaGVhZGVyTWFwWyd1c2VybmFtZSddO1xuICBjb25zdCBpc1BhaWRJbmRleCA9IGhlYWRlck1hcFsnaXNQYWlkJ107XG5cbiAgaWYgKGRhaWx5T3JkZXJJZEluZGV4ID09PSB1bmRlZmluZWQgfHwgdXNlcm5hbWVJbmRleCA9PT0gdW5kZWZpbmVkIHx8IGlzUGFpZEluZGV4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSAnb3JkZXJfaXRlbXMnIHNoZWV0IGlzIG1pc3NpbmcgcmVxdWlyZWQgY29sdW1uczogJ2RhaWx5T3JkZXJJZCcsICd1c2VybmFtZScsIG9yICdpc1BhaWQnLlwiKTtcbiAgfVxuICAgIFxuICAvLyAyLiBQcmVwYXJlIGJhdGNoIHVwZGF0ZSBkYXRhXG4gIGNvbnN0IGRhdGFUb1VwZGF0ZSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd3MubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCByb3cgPSByb3dzW2ldO1xuICAgIGlmIChyb3dbZGFpbHlPcmRlcklkSW5kZXhdID09PSBkYWlseU9yZGVySWQgJiYgcm93W3VzZXJuYW1lSW5kZXhdID09PSB1c2VybmFtZSkge1xuICAgICAgLy8gU2hlZXQgcm93cyBhcmUgMS1iYXNlZCwgYW5kIHdlIGhhdmUgYSBoZWFkZXIgcm93LCBzbyBhZGQgMi5cbiAgICAgIGNvbnN0IHJvd0luZGV4ID0gaSArIDI7IFxuICAgICAgZGF0YVRvVXBkYXRlLnB1c2goe1xuICAgICAgICByYW5nZTogYCR7T1JERVJfSVRFTVNfU0hFRVRfTkFNRX0hTSR7cm93SW5kZXh9YCwgLy8gJ00nIGlzIHRoZSBpc1BhaWQgY29sdW1uXG4gICAgICAgIHZhbHVlczogW1tpc1BhaWQgPyAnVFJVRScgOiAnRkFMU0UnXV0sXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvLyAzLiBFeGVjdXRlIGJhdGNoIHVwZGF0ZSBpZiB0aGVyZSdzIGFueXRoaW5nIHRvIHVwZGF0ZVxuICBpZiAoZGF0YVRvVXBkYXRlLmxlbmd0aCA+IDApIHtcbiAgICAvLyBUaGlzIGlzIG5vdCBhIFwidHJ1ZVwiIGJhdGNoIHVwZGF0ZSBpbiBvbmUgQVBJIGNhbGwsIGJ1dCBpdCdzIGJldHRlciB0aGFuIHJlYWRpbmcvd3JpdGluZyB0aGUgd2hvbGUgc2hlZXQuXG4gICAgLy8gQSBzaW5nbGUgYmF0Y2hVcGRhdGUgY2FsbCB3b3VsZCBiZSBtb3JlIGVmZmljaWVudCBpZiB0aGUgQVBJIHN0cnVjdHVyZSBhbGxvd3MgaXQgZWFzaWx5LlxuICAgICBjb25zdCBzaGVldHMgPSBhd2FpdCBnZXRBdXRoZW50aWNhdGVkQ2xpZW50KCk7XG4gICAgIGF3YWl0IHNoZWV0cy5zcHJlYWRzaGVldHMudmFsdWVzLmJhdGNoVXBkYXRlKHtcbiAgICAgICAgc3ByZWFkc2hlZXRJZDogU1BSRUFEU0hFRVRfSUQsXG4gICAgICAgIHJlcXVlc3RCb2R5OiB7XG4gICAgICAgICAgICB2YWx1ZUlucHV0T3B0aW9uOiAnVVNFUl9FTlRFUkVEJyxcbiAgICAgICAgICAgIGRhdGE6IGRhdGFUb1VwZGF0ZSxcbiAgICAgICAgfVxuICAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbn1cblxuZXhwb3J0IHR5cGUgVXBkYXRlVXNlck9yZGVyUmVxdWVzdCA9IHtcbiAgICBkYWlseU9yZGVySWQ6IHN0cmluZztcbiAgICB1c2VybmFtZTogc3RyaW5nO1xuICAgIGl0ZW1zOiBPcmRlckRldGFpbEl0ZW1bXTsgLy8gVGhlIGNvbXBsZXRlIG5ldyBsaXN0IG9mIGl0ZW1zXG59O1xuXG4vKipcbiAqIFVwZGF0ZXMgYSB1c2VyJ3MgZW50aXJlIG9yZGVyIGZvciBhIHNwZWNpZmljIGRhaWx5IG9yZGVyLlxuICogSXQgcmVwbGFjZXMgYWxsIG9mIHRoZSB1c2VyJ3MgcHJldmlvdXMgaXRlbXMgd2l0aCB0aGUgbmV3IGxpc3QgcHJvdmlkZWQuXG4gKiBAcGFyYW0ge1VwZGF0ZVVzZXJPcmRlclJlcXVlc3R9IHJlcSAtIFRoZSByZXF1ZXN0IGNvbnRhaW5pbmcgdGhlIHVzZXIncyB1cGRhdGVkIG9yZGVyLlxuICogQHJldHVybnMge1Byb21pc2U8e3N1Y2Nlc3M6IGJvb2xlYW59Pn0gQSBzdWNjZXNzIGZsYWcuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVVc2VyT3JkZXIocmVxOiBVcGRhdGVVc2VyT3JkZXJSZXF1ZXN0KTogUHJvbWlzZTx7IHN1Y2Nlc3M6IGJvb2xlYW4gfT4ge1xuICAgIGNvbnN0IHsgZGFpbHlPcmRlcklkLCB1c2VybmFtZSwgaXRlbXMgfSA9IHJlcTtcblxuICAgIC8vIDEuIEZpcnN0LCBkZWxldGUgYWxsIGV4aXN0aW5nIGl0ZW1zIGZvciB0aGlzIHVzZXIgaW4gdGhpcyBkYWlseSBvcmRlci5cbiAgICAvLyBUaGlzIHNpbXBsaWZpZXMgdGhlIGxvZ2ljIGJ5IG5vdCBoYXZpbmcgdG8gZmluZCBhbmQgdXBkYXRlIGluZGl2aWR1YWwgcm93cy5cbiAgICBhd2FpdCBkZWxldGVVc2VyT3JkZXIoeyB1c2VybmFtZSwgZGFpbHlPcmRlcklkIH0pO1xuXG4gICAgLy8gMi4gSWYgdGhlIG5ldyBsaXN0IG9mIGl0ZW1zIGlzIGVtcHR5LCB3ZSdyZSBkb25lLlxuICAgIGlmIChpdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xuICAgIH1cblxuICAgIC8vIDMuIEFwcGVuZCB0aGUgbmV3IGxpc3Qgb2YgaXRlbXMgdG8gdGhlIHNoZWV0LlxuICAgIGNvbnN0IGFsbEl0ZW1zUmFuZ2UgPSBgJHtPUkRFUl9JVEVNU19TSEVFVF9OQU1FfSFBMjpBYDtcbiAgICBjb25zdCBhbGxJdGVtSWRzRGF0YSA9IGF3YWl0IGdldFNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgYWxsSXRlbXNSYW5nZSk7XG4gICAgbGV0IGxhc3RJZE51bSA9IGFsbEl0ZW1JZHNEYXRhLmxlbmd0aCA+IDBcbiAgICAgICAgPyBNYXRoLm1heCgwLCAuLi5hbGxJdGVtSWRzRGF0YS5tYXAocm93ID0+IHBhcnNlSW50KChyb3dbMF0gfHwgJ29pMCcpLnJlcGxhY2UoJ29pJywgJycpLCAxMCkpLmZpbHRlcihudW0gPT4gIWlzTmFOKG51bSkpKVxuICAgICAgICA6IDA7XG4gICAgXG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpO1xuICAgIGNvbnN0IG9yZGVyVmFsdWVzID0gW107XG4gICAgY29uc3Qgbm90ZXMgPSBpdGVtc1swXT8ubm90ZXMgfHwgJyc7IC8vIEFzc3VtZSBub3RlcyBhcmUgdGhlIHNhbWUgZm9yIGFsbCBpdGVtc1xuICAgIGNvbnN0IGlzUGFpZCA9IGl0ZW1zWzBdPy5pc1BhaWQgfHwgZmFsc2U7IC8vIEFzc3VtZSBwYXltZW50IHN0YXR1cyBpcyB0aGUgc2FtZVxuXG4gICAgZm9yIChjb25zdCBpdGVtIG9mIGl0ZW1zKSB7XG4gICAgICAgIGxhc3RJZE51bSsrO1xuICAgICAgICBjb25zdCBuZXdJZCA9IGBvaSR7bGFzdElkTnVtLnRvU3RyaW5nKCkucGFkU3RhcnQoMywgJzAnKX1gO1xuICAgICAgICBjb25zdCBvcHRpb25zU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoaXRlbS5vcHRpb25zKTtcblxuICAgICAgICBvcmRlclZhbHVlcy5wdXNoKFtcbiAgICAgICAgICAgIG5ld0lkLFxuICAgICAgICAgICAgZGFpbHlPcmRlcklkLFxuICAgICAgICAgICAgbm93LFxuICAgICAgICAgICAgdXNlcm5hbWUsXG4gICAgICAgICAgICBpdGVtLnZlbmRvcklkLFxuICAgICAgICAgICAgaXRlbS52ZW5kb3JOYW1lLFxuICAgICAgICAgICAgaXRlbS5tZW51SXRlbUlkLFxuICAgICAgICAgICAgaXRlbS5pdGVtTmFtZSxcbiAgICAgICAgICAgIGl0ZW0ucXVhbnRpdHksXG4gICAgICAgICAgICBpdGVtLnByaWNlLFxuICAgICAgICAgICAgb3B0aW9uc1N0cmluZyxcbiAgICAgICAgICAgIG5vdGVzLFxuICAgICAgICAgICAgaXNQYWlkID8gJ1RSVUUnIDogJ0ZBTFNFJ1xuICAgICAgICBdKTtcbiAgICB9XG5cbiAgICBpZiAob3JkZXJWYWx1ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBhd2FpdCBhcHBlbmRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGAke09SREVSX0lURU1TX1NIRUVUX05BTUV9IUE6TWAsIG9yZGVyVmFsdWVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IitSQTJWc0IifQ==
}}),
"[project]/src/components/OrderClient.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "OrderClient": (()=>OrderClient),
    "isDeadlinePassed": (()=>isDeadlinePassed)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$OrderSummary$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/OrderSummary.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-toast.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$utensils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Utensils$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/utensils.js [app-ssr] (ecmascript) <export default as Utensils>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$minus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MinusCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-minus.js [app-ssr] (ecmascript) <export default as MinusCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-plus.js [app-ssr] (ecmascript) <export default as PlusCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-cart.js [app-ssr] (ecmascript) <export default as ShoppingCart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ban$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Ban$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ban.js [app-ssr] (ecmascript) <export default as Ban>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-ssr] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarClock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar-clock.js [app-ssr] (ecmascript) <export default as CalendarClock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/label.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/select.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$data$3a$58150a__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/ai/flows/data:58150a [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parse$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/parse.mjs [app-ssr] (ecmascript) <locals>");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const isDeadlinePassed = (date, deadline)=>{
    if (!date || !deadline || typeof deadline !== 'string' || !deadline.match(/^\d{2}:\d{2}$/)) {
        return false; // Not enough info or invalid format, assume not passed
    }
    try {
        const deadlineDateTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parse$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["parse"])(`${date} ${deadline}`, 'yyyy-MM-dd HH:mm', new Date());
        if (isNaN(deadlineDateTime.getTime())) {
            console.error("Invalid date/time for deadline:", date, deadline);
            return false;
        }
        return new Date() > deadlineDateTime;
    } catch (error) {
        console.error("Error parsing deadline:", error);
        return false; // If parsing fails, assume not passed
    }
};
// Helper function to aggregate order items
const aggregateOrderItems = (items)=>{
    if (!items || items.length === 0) return [];
    const aggregated = {};
    for (const item of items){
        if (aggregated[item.id]) {
            aggregated[item.id].quantity += item.quantity;
        } else {
            aggregated[item.id] = {
                ...item
            };
        }
    }
    return Object.values(aggregated);
};
// Component for a single menu item card
function MenuItemCard({ item, vendorName, vendorId, onAddToOrder }) {
    const [selections, setSelections] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>{
        const defaults = {};
        item.options?.forEach((group)=>{
            const defaultChoice = group.choices.find((c)=>c.isDefault) || group.choices[0];
            if (defaultChoice) {
                defaults[group.name] = defaultChoice.name;
            }
        });
        return defaults;
    });
    const [quantity, setQuantity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const handleSelectionChange = (groupName, value)=>{
        setSelections((prev)=>({
                ...prev,
                [groupName]: value
            }));
    };
    const handleQuantityChange = (amount)=>{
        setQuantity((prev)=>Math.max(1, prev + amount));
    };
    const handleAddToCart = ()=>{
        let finalPrice = item.price;
        const selectedOptionDetails = {};
        item.options?.forEach((group)=>{
            const selectedChoiceName = selections[group.name];
            const choice = group.choices.find((c)=>c.name === selectedChoiceName);
            if (choice) {
                finalPrice += choice.priceDelta;
                selectedOptionDetails[group.name] = choice.name;
            }
        });
        // Helper to generate a unique ID for an order item based on its selections
        const generateOrderItemId = (itemId, selections)=>{
            if (Object.keys(selections).length === 0) return itemId;
            const sortedSelections = Object.keys(selections).sort().map((key)=>`${key}:${selections[key]}`).join('|');
            return `${itemId}[${sortedSelections}]`;
        };
        const orderDetail = {
            id: generateOrderItemId(item.id, selectedOptionDetails),
            menuItemId: item.id,
            name: item.name,
            price: finalPrice,
            quantity: quantity,
            vendorName: vendorName,
            vendorId: vendorId,
            username: '',
            options: selectedOptionDetails,
            notes: '' // Notes will be set in summary
        };
        onAddToOrder(orderDetail);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
        className: "flex flex-col transition-shadow hover:shadow-xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                className: "pb-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                        className: "font-headline text-xl",
                        children: item.name
                    }, void 0, false, {
                        fileName: "[project]/src/components/OrderClient.tsx",
                        lineNumber: 127,
                        columnNumber: 17
                    }, this),
                    item.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardDescription"], {
                        className: "font-body pt-1 text-xs",
                        children: item.description
                    }, void 0, false, {
                        fileName: "[project]/src/components/OrderClient.tsx",
                        lineNumber: 129,
                        columnNumber: 19
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/OrderClient.tsx",
                lineNumber: 126,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                className: "flex-grow space-y-3 pt-2",
                children: item.options?.map((group)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                htmlFor: `${item.id}-${group.name}`,
                                className: "text-xs text-muted-foreground",
                                children: group.name
                            }, void 0, false, {
                                fileName: "[project]/src/components/OrderClient.tsx",
                                lineNumber: 135,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                                value: selections[group.name],
                                onValueChange: (value)=>handleSelectionChange(group.name, value),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                        id: `${item.id}-${group.name}`,
                                        className: "h-9",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectValue"], {
                                            placeholder: `選擇${group.name}`
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/OrderClient.tsx",
                                            lineNumber: 141,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/OrderClient.tsx",
                                        lineNumber: 140,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectContent"], {
                                        children: group.choices.map((choice)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: choice.name,
                                                children: [
                                                    choice.name,
                                                    choice.priceDelta !== 0 && ` (${choice.priceDelta > 0 ? '+' : ''}$${choice.priceDelta})`
                                                ]
                                            }, choice.id, true, {
                                                fileName: "[project]/src/components/OrderClient.tsx",
                                                lineNumber: 145,
                                                columnNumber: 37
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/OrderClient.tsx",
                                        lineNumber: 143,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/OrderClient.tsx",
                                lineNumber: 136,
                                columnNumber: 25
                            }, this)
                        ]
                    }, group.name, true, {
                        fileName: "[project]/src/components/OrderClient.tsx",
                        lineNumber: 134,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/OrderClient.tsx",
                lineNumber: 132,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardFooter"], {
                className: "flex items-center justify-between bg-muted/50 p-3 mt-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-bold text-lg",
                        children: [
                            "$",
                            item.price
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/OrderClient.tsx",
                        lineNumber: 156,
                        columnNumber: 18
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                size: "icon",
                                className: "h-8 w-8 rounded-full",
                                onClick: ()=>handleQuantityChange(-1),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$minus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MinusCircle$3e$__["MinusCircle"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/OrderClient.tsx",
                                    lineNumber: 158,
                                    columnNumber: 133
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/OrderClient.tsx",
                                lineNumber: 158,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "w-6 text-center font-bold text-lg",
                                children: quantity
                            }, void 0, false, {
                                fileName: "[project]/src/components/OrderClient.tsx",
                                lineNumber: 159,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                size: "icon",
                                className: "h-8 w-8 rounded-full",
                                onClick: ()=>handleQuantityChange(1),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusCircle$3e$__["PlusCircle"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/OrderClient.tsx",
                                    lineNumber: 160,
                                    columnNumber: 132
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/OrderClient.tsx",
                                lineNumber: 160,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: handleAddToCart,
                                size: "sm",
                                className: "px-3 gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/OrderClient.tsx",
                                        lineNumber: 162,
                                        columnNumber: 25
                                    }, this),
                                    "加入"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/OrderClient.tsx",
                                lineNumber: 161,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/OrderClient.tsx",
                        lineNumber: 157,
                        columnNumber: 18
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/OrderClient.tsx",
                lineNumber: 155,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/OrderClient.tsx",
        lineNumber: 125,
        columnNumber: 9
    }, this);
}
function OrderClient({ availableOrders, menus, initialOrderItems }) {
    const [selectedOrder, setSelectedOrder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [order, setOrder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useToast"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const username = searchParams.get('username') || '匿名';
    const editingOrderId = searchParams.get('edit');
    // Hydration-safe state for deadline checking
    const [isPastDeadline, setIsPastDeadline] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // This effect runs once on mount to set the initial order, aggregating if needed.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (initialOrderItems && initialOrderItems.length > 0) {
            setOrder(aggregateOrderItems(initialOrderItems));
        }
    }, [
        initialOrderItems
    ]);
    // Set initial selected order and calculate deadline status on client
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // If we're in editing mode, there will only be one availableOrder. Select it.
        if (editingOrderId && availableOrders.length === 1) {
            setSelectedOrder(availableOrders[0]);
        } else if (availableOrders.length > 0 && !selectedOrder) {
            setSelectedOrder(availableOrders[0]);
        }
    }, [
        availableOrders,
        selectedOrder,
        editingOrderId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (selectedOrder) {
            setIsPastDeadline(isDeadlinePassed(selectedOrder.date, selectedOrder.deadline));
        }
    }, [
        selectedOrder
    ]);
    const handleSelectOrder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((orderToSelect)=>{
        // Disable switching if in editing mode
        if (editingOrderId) return;
        if (order.length > 0 && selectedOrder?.vendor.vendorId !== orderToSelect.vendor.vendorId) {
            toast({
                variant: "destructive",
                title: "尚有未完成訂單",
                description: "切換店家將會清空目前的訂單，請先完成或取消訂單。"
            });
            return;
        }
        setSelectedOrder(orderToSelect);
    }, [
        order.length,
        selectedOrder?.vendor.vendorId,
        toast,
        editingOrderId
    ]);
    const handleAddToOrder = (orderDetail)=>{
        setOrder((prevOrder)=>{
            const existingItem = prevOrder.find((oi)=>oi.id === orderDetail.id);
            if (existingItem) {
                return prevOrder.map((oi)=>oi.id === orderDetail.id ? {
                        ...oi,
                        quantity: oi.quantity + orderDetail.quantity
                    } : oi);
            }
            return [
                ...prevOrder,
                {
                    ...orderDetail,
                    username: decodeURIComponent(username)
                }
            ];
        });
        toast({
            title: "已加入訂單",
            description: `${orderDetail.quantity} 份 ${orderDetail.name} 已新增至您的訂單。`
        });
    };
    const handleUpdateQuantity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((itemId, quantity)=>{
        setOrder((prevOrder)=>{
            if (quantity <= 0) {
                return prevOrder.filter((item)=>item.id !== itemId);
            }
            return prevOrder.map((item)=>item.id === itemId ? {
                    ...item,
                    quantity
                } : item);
        });
    }, []);
    const handleSubmitOrder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (finalOrder)=>{
        if (finalOrder.items.length === 0) {
            toast({
                variant: "destructive",
                title: "訂單是空的",
                description: "請先選擇餐點再送出訂單。"
            });
            return;
        }
        if (!selectedOrder) {
            toast({
                variant: "destructive",
                title: "錯誤",
                description: "請選擇一個有效的訂單"
            });
            return;
        }
        try {
            const isEditing = !!editingOrderId;
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$data$3a$58150a__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["submitOrder"])({
                ...finalOrder,
                dailyOrderId: selectedOrder.id
            }, isEditing);
            toast({
                title: "訂單已送出！",
                description: "感謝您的訂購，餐點稍後為您送上！"
            });
            setOrder([]);
        } catch (error) {
            toast({
                variant: "destructive",
                title: "訂單送出失敗",
                description: error instanceof Error ? error.message : "發生未知錯誤，請聯繫管理員。"
            });
        }
    }, [
        toast,
        selectedOrder,
        editingOrderId
    ]);
    const selectedMenu = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!selectedOrder) return [];
        return menus[selectedOrder.vendor.vendorId] || [];
    }, [
        selectedOrder,
        menus
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container mx-auto max-w-screen-xl p-4 sm:p-6 lg:p-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 lg:grid-cols-3 lg:gap-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "lg:col-span-2 space-y-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "font-headline text-2xl font-bold mb-4",
                                    children: editingOrderId ? "正在修改訂單" : "已發布訂單"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/OrderClient.tsx",
                                    lineNumber: 288,
                                    columnNumber: 14
                                }, this),
                                availableOrders.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4",
                                    children: availableOrders.map((currentOrder)=>{
                                        // Client-side check for deadline
                                        const passed = isDeadlinePassed(currentOrder.date, currentOrder.deadline);
                                        const isSelected = selectedOrder?.vendor.vendorId === currentOrder.vendor.vendorId;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                            onClick: ()=>handleSelectOrder(currentOrder),
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative transition-all duration-200 h-full", editingOrderId ? "ring-2 ring-primary shadow-lg" : "cursor-pointer hover:shadow-lg hover:-translate-y-1", isSelected && !editingOrderId && "ring-2 ring-primary shadow-lg", passed && "bg-muted/60"),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("absolute top-0 right-0 text-xs pointer-events-none transform -translate-y-1/2", passed ? "bg-destructive text-destructive-foreground" : "bg-green-600 text-destructive-foreground"),
                                                    children: passed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ban$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Ban$3e$__["Ban"], {
                                                                className: "mr-1 h-3 w-3"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/OrderClient.tsx",
                                                                lineNumber: 313,
                                                                columnNumber: 36
                                                            }, this),
                                                            "已截止"
                                                        ]
                                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                                className: "mr-1 h-3 w-3"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/OrderClient.tsx",
                                                                lineNumber: 313,
                                                                columnNumber: 78
                                                            }, this),
                                                            "可訂購"
                                                        ]
                                                    }, void 0, true)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/OrderClient.tsx",
                                                    lineNumber: 307,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                            className: "font-headline pr-4",
                                                            children: currentOrder.vendor.vendorName
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/OrderClient.tsx",
                                                            lineNumber: 316,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardDescription"], {
                                                            className: "font-body",
                                                            children: currentOrder.vendor.description
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/OrderClient.tsx",
                                                            lineNumber: 317,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/OrderClient.tsx",
                                                    lineNumber: 315,
                                                    columnNumber: 25
                                                }, this),
                                                currentOrder.deadline && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardFooter"], {
                                                    className: "text-xs text-muted-foreground pt-0",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-1.5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarClock$3e$__["CalendarClock"], {
                                                                className: "h-3.5 w-3.5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/OrderClient.tsx",
                                                                lineNumber: 322,
                                                                columnNumber: 35
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    currentOrder.date,
                                                                    " ",
                                                                    currentOrder.deadline,
                                                                    " 截止"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/OrderClient.tsx",
                                                                lineNumber: 323,
                                                                columnNumber: 35
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/OrderClient.tsx",
                                                        lineNumber: 321,
                                                        columnNumber: 31
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/OrderClient.tsx",
                                                    lineNumber: 320,
                                                    columnNumber: 27
                                                }, this)
                                            ]
                                        }, currentOrder.vendor.vendorId, true, {
                                            fileName: "[project]/src/components/OrderClient.tsx",
                                            lineNumber: 297,
                                            columnNumber: 21
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/components/OrderClient.tsx",
                                    lineNumber: 290,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                    className: "flex flex-col items-center justify-center p-12 text-center text-muted-foreground bg-secondary/30",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$utensils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Utensils$3e$__["Utensils"], {
                                            className: "h-16 w-16 mb-4 text-primary"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/OrderClient.tsx",
                                            lineNumber: 332,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-headline text-xl font-bold mb-2",
                                            children: editingOrderId ? "找不到此訂單" : "今天沒有訂餐"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/OrderClient.tsx",
                                            lineNumber: 333,
                                            columnNumber: 18
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-body text-sm",
                                            children: editingOrderId ? "這筆訂單可能已被刪除或不存在。" : "老闆今天沒上班，明天再來看看吧！"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/OrderClient.tsx",
                                            lineNumber: 334,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/OrderClient.tsx",
                                    lineNumber: 331,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/OrderClient.tsx",
                            lineNumber: 287,
                            columnNumber: 11
                        }, this),
                        selectedOrder && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "font-headline text-2xl font-bold mb-4",
                                    children: [
                                        selectedOrder.vendor.vendorName,
                                        " 菜單"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/OrderClient.tsx",
                                    lineNumber: 342,
                                    columnNumber: 15
                                }, this),
                                isPastDeadline ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                    className: "flex flex-col items-center justify-center p-12 text-center text-destructive bg-destructive/10 border-destructive/50",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ban$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Ban$3e$__["Ban"], {
                                            className: "h-16 w-16 mb-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/OrderClient.tsx",
                                            lineNumber: 345,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-headline text-xl font-bold mb-2",
                                            children: "今日訂購已截止"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/OrderClient.tsx",
                                            lineNumber: 346,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-body text-sm",
                                            children: "此店家的訂購時間已過，明天請早！"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/OrderClient.tsx",
                                            lineNumber: 347,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/OrderClient.tsx",
                                    lineNumber: 344,
                                    columnNumber: 18
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6",
                                    children: selectedMenu.length > 0 ? selectedMenu.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MenuItemCard, {
                                            item: item,
                                            vendorName: selectedOrder.vendor.vendorName,
                                            vendorId: selectedOrder.vendor.vendorId,
                                            onAddToOrder: handleAddToOrder
                                        }, item.id, false, {
                                            fileName: "[project]/src/components/OrderClient.tsx",
                                            lineNumber: 352,
                                            columnNumber: 23
                                        }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-muted-foreground col-span-full",
                                        children: "這個店家還沒有任何菜單品項，請管理員新增。"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/OrderClient.tsx",
                                        lineNumber: 360,
                                        columnNumber: 23
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/OrderClient.tsx",
                                    lineNumber: 350,
                                    columnNumber: 18
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/OrderClient.tsx",
                            lineNumber: 341,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/OrderClient.tsx",
                    lineNumber: 285,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                    className: "pt-8 lg:pt-0",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:sticky lg:top-24",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$OrderSummary$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OrderSummary"], {
                            order: order,
                            username: decodeURIComponent(username),
                            onUpdateQuantity: handleUpdateQuantity,
                            onSubmit: handleSubmitOrder,
                            disabled: isPastDeadline,
                            isEditing: !!editingOrderId
                        }, void 0, false, {
                            fileName: "[project]/src/components/OrderClient.tsx",
                            lineNumber: 371,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/OrderClient.tsx",
                        lineNumber: 370,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/OrderClient.tsx",
                    lineNumber: 369,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/OrderClient.tsx",
            lineNumber: 284,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/OrderClient.tsx",
        lineNumber: 283,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/app/my-orders/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>MyOrdersPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SiteHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SiteHeader.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/alert-dialog.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/separator.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$data$3a$2761b3__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/ai/flows/data:2761b3 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$data$3a$30d1a7__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/ai/flows/data:30d1a7 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$OrderClient$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/OrderClient.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-toast.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarClock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar-clock.js [app-ssr] (ecmascript) <export default as CalendarClock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ban$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Ban$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ban.js [app-ssr] (ecmascript) <export default as Ban>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$inbox$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Inbox$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/inbox.js [app-ssr] (ecmascript) <export default as Inbox>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/square-pen.js [app-ssr] (ecmascript) <export default as Edit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript) <export default as Trash2>");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function MyOrdersContent() {
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const username = searchParams.get('username');
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useToast"])();
    const [orders, setOrders] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isPending, startTransition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransition"])();
    const fetchOrders = async ()=>{
        if (!username) {
            setError("缺少使用者名稱，無法查詢訂單。");
            setIsLoading(false);
            return;
        }
        setIsLoading(true);
        setError(null);
        try {
            const fetchedOrders = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$data$3a$2761b3__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getOrdersByUsername"])(decodeURIComponent(username));
            setOrders(fetchedOrders);
        } catch (e) {
            console.error("Failed to fetch orders:", e);
            setError("無法載入訂單資料，請稍後再試。");
        } finally{
            setIsLoading(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchOrders();
    }, [
        username
    ]);
    const handleCancelOrder = (dailyOrderId)=>{
        if (!username) return;
        startTransition(async ()=>{
            try {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$data$3a$30d1a7__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deleteUserOrder"])({
                    username: decodeURIComponent(username),
                    dailyOrderId
                });
                toast({
                    title: "訂單已取消",
                    description: "您的該筆訂單已被成功取消。"
                });
                fetchOrders(); // Re-fetch orders to update the list
            } catch (e) {
                console.error("Failed to cancel order:", e);
                toast({
                    variant: "destructive",
                    title: "取消訂單失敗",
                    description: e instanceof Error ? e.message : "發生未知錯誤，請稍後再試。"
                });
            }
        });
    };
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-center items-center h-64",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                    className: "h-8 w-8 animate-spin text-primary"
                }, void 0, false, {
                    fileName: "[project]/src/app/my-orders/page.tsx",
                    lineNumber: 87,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "ml-4 text-muted-foreground",
                    children: "正在查詢您的訂單..."
                }, void 0, false, {
                    fileName: "[project]/src/app/my-orders/page.tsx",
                    lineNumber: 88,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/my-orders/page.tsx",
            lineNumber: 86,
            columnNumber: 7
        }, this);
    }
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center text-destructive bg-destructive/10 p-4 rounded-md",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: error
            }, void 0, false, {
                fileName: "[project]/src/app/my-orders/page.tsx",
                lineNumber: 96,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/my-orders/page.tsx",
            lineNumber: 95,
            columnNumber: 7
        }, this);
    }
    if (orders.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center text-muted-foreground bg-secondary/30 p-12 rounded-lg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$inbox$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Inbox$3e$__["Inbox"], {
                    className: "h-16 w-16 mx-auto mb-4 text-primary"
                }, void 0, false, {
                    fileName: "[project]/src/app/my-orders/page.tsx",
                    lineNumber: 104,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "font-headline text-xl font-bold mb-2",
                    children: "沒有訂單紀錄"
                }, void 0, false, {
                    fileName: "[project]/src/app/my-orders/page.tsx",
                    lineNumber: 105,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "font-body text-sm",
                    children: "您目前沒有任何訂單，快去點餐吧！"
                }, void 0, false, {
                    fileName: "[project]/src/app/my-orders/page.tsx",
                    lineNumber: 106,
                    columnNumber: 13
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/my-orders/page.tsx",
            lineNumber: 103,
            columnNumber: 9
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: orders.map(({ dailyOrder, items, total, notes })=>{
            const deadlinePassed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$OrderClient$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isDeadlinePassed"])(dailyOrder.date, dailyOrder.deadline);
            const optionsString = (options)=>{
                if (!options || typeof options !== 'object' || Object.keys(options).length === 0) return '';
                return Object.entries(options).map(([key, value])=>`${key}：${value}`).join(', ');
            };
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                className: "shadow-lg transition-shadow hover:shadow-xl overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-2 bg-accent"
                    }, void 0, false, {
                        fileName: "[project]/src/app/my-orders/page.tsx",
                        lineNumber: 123,
                        columnNumber: 14
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-start gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                            className: "font-headline text-2xl mb-1",
                                            children: dailyOrder.vendorName
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/my-orders/page.tsx",
                                            lineNumber: 127,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardDescription"], {
                                            className: "flex items-center gap-1.5 text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarClock$3e$__["CalendarClock"], {
                                                    className: "h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/my-orders/page.tsx",
                                                    lineNumber: 129,
                                                    columnNumber: 25
                                                }, this),
                                                dailyOrder.date,
                                                " ",
                                                dailyOrder.deadline,
                                                " 截止"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/my-orders/page.tsx",
                                            lineNumber: 128,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/my-orders/page.tsx",
                                    lineNumber: 126,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center shrink-0",
                                    children: deadlinePassed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                        variant: "outline",
                                        className: "border-destructive text-destructive",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ban$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Ban$3e$__["Ban"], {
                                                className: "mr-1.5 h-3.5 w-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/my-orders/page.tsx",
                                                lineNumber: 136,
                                                columnNumber: 28
                                            }, this),
                                            "已截止"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/my-orders/page.tsx",
                                        lineNumber: 135,
                                        columnNumber: 25
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                variant: "ghost",
                                                size: "icon",
                                                className: "text-blue-600 h-8 w-8 hover:bg-blue-100 hover:text-blue-700",
                                                "aria-label": "編輯訂單",
                                                asChild: true,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: `/order?username=${encodeURIComponent(username || '')}&edit=${dailyOrder.id}`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__["Edit"], {
                                                        className: "h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/my-orders/page.tsx",
                                                        lineNumber: 142,
                                                        columnNumber: 37
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/my-orders/page.tsx",
                                                    lineNumber: 141,
                                                    columnNumber: 33
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/my-orders/page.tsx",
                                                lineNumber: 140,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialog"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogTrigger"], {
                                                        asChild: true,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                            variant: "ghost",
                                                            size: "icon",
                                                            className: "text-destructive h-8 w-8 hover:bg-destructive/10",
                                                            "aria-label": "取消訂單",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                className: "h-4 w-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/my-orders/page.tsx",
                                                                lineNumber: 148,
                                                                columnNumber: 41
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/my-orders/page.tsx",
                                                            lineNumber: 147,
                                                            columnNumber: 37
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/my-orders/page.tsx",
                                                        lineNumber: 146,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogContent"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogHeader"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogTitle"], {
                                                                        children: "確定要取消這筆訂單嗎？"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/my-orders/page.tsx",
                                                                        lineNumber: 153,
                                                                        columnNumber: 41
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogDescription"], {
                                                                        children: [
                                                                            "此動作將會取消您在「",
                                                                            dailyOrder.vendorName,
                                                                            "」的這筆訂單，確定後將無法復原。"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/my-orders/page.tsx",
                                                                        lineNumber: 154,
                                                                        columnNumber: 41
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/my-orders/page.tsx",
                                                                lineNumber: 152,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogFooter"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogCancel"], {
                                                                        children: "再想想"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/my-orders/page.tsx",
                                                                        lineNumber: 159,
                                                                        columnNumber: 41
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogAction"], {
                                                                        variant: "destructive",
                                                                        onClick: ()=>handleCancelOrder(dailyOrder.id),
                                                                        disabled: isPending,
                                                                        children: [
                                                                            isPending ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                                                className: "mr-2 h-4 w-4 animate-spin"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/my-orders/page.tsx",
                                                                                lineNumber: 165,
                                                                                columnNumber: 57
                                                                            }, this) : null,
                                                                            "確定取消"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/my-orders/page.tsx",
                                                                        lineNumber: 160,
                                                                        columnNumber: 41
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/my-orders/page.tsx",
                                                                lineNumber: 158,
                                                                columnNumber: 37
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/my-orders/page.tsx",
                                                        lineNumber: 151,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/my-orders/page.tsx",
                                                lineNumber: 145,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/my-orders/page.tsx",
                                        lineNumber: 139,
                                        columnNumber: 25
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/my-orders/page.tsx",
                                    lineNumber: 133,
                                    columnNumber: 20
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/my-orders/page.tsx",
                            lineNumber: 125,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/my-orders/page.tsx",
                        lineNumber: 124,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Separator"], {}, void 0, false, {
                                fileName: "[project]/src/app/my-orders/page.tsx",
                                lineNumber: 178,
                                columnNumber: 16
                            }, this),
                            items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-4 gap-4 items-start font-body text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "col-span-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-medium",
                                                    children: item.itemName
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/my-orders/page.tsx",
                                                    lineNumber: 182,
                                                    columnNumber: 30
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-muted-foreground",
                                                    children: optionsString(item.options)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/my-orders/page.tsx",
                                                    lineNumber: 183,
                                                    columnNumber: 30
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/my-orders/page.tsx",
                                            lineNumber: 181,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-muted-foreground",
                                                    children: "x "
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/my-orders/page.tsx",
                                                    lineNumber: 186,
                                                    columnNumber: 29
                                                }, this),
                                                item.quantity
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/my-orders/page.tsx",
                                            lineNumber: 185,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-right font-medium",
                                            children: [
                                                "$",
                                                item.price * item.quantity
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/my-orders/page.tsx",
                                            lineNumber: 188,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, item.id, true, {
                                    fileName: "[project]/src/app/my-orders/page.tsx",
                                    lineNumber: 180,
                                    columnNumber: 21
                                }, this)),
                            notes && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Separator"], {}, void 0, false, {
                                        fileName: "[project]/src/app/my-orders/page.tsx",
                                        lineNumber: 195,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-medium",
                                                children: "備註"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/my-orders/page.tsx",
                                                lineNumber: 197,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-muted-foreground",
                                                children: notes
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/my-orders/page.tsx",
                                                lineNumber: 198,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/my-orders/page.tsx",
                                        lineNumber: 196,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/my-orders/page.tsx",
                        lineNumber: 177,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardFooter"], {
                        className: "bg-muted/50 p-4 flex justify-end items-baseline",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm mr-2 text-muted-foreground",
                                children: "總計"
                            }, void 0, false, {
                                fileName: "[project]/src/app/my-orders/page.tsx",
                                lineNumber: 204,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-headline text-2xl font-bold",
                                children: [
                                    "$",
                                    total
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/my-orders/page.tsx",
                                lineNumber: 205,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/my-orders/page.tsx",
                        lineNumber: 203,
                        columnNumber: 13
                    }, this)
                ]
            }, dailyOrder.id, true, {
                fileName: "[project]/src/app/my-orders/page.tsx",
                lineNumber: 122,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/src/app/my-orders/page.tsx",
        lineNumber: 112,
        columnNumber: 5
    }, this);
}
function MyOrdersPage() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const username = searchParams.get('username');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!username) {
            router.push('/');
        }
    }, [
        username,
        router
    ]);
    if (!username) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex min-h-screen items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                className: "h-8 w-8 animate-spin text-primary"
            }, void 0, false, {
                fileName: "[project]/src/app/my-orders/page.tsx",
                lineNumber: 229,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/my-orders/page.tsx",
            lineNumber: 228,
            columnNumber: 14
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-background font-body text-foreground",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SiteHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SiteHeader"], {}, void 0, false, {
                fileName: "[project]/src/app/my-orders/page.tsx",
                lineNumber: 236,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "container mx-auto max-w-2xl p-4 sm:p-6 lg:p-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "font-headline text-3xl font-bold mb-6",
                        children: "我的訂單"
                    }, void 0, false, {
                        fileName: "[project]/src/app/my-orders/page.tsx",
                        lineNumber: 238,
                        columnNumber: 18
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Suspense"], {
                        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-center items-center h-64",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                className: "h-8 w-8 animate-spin text-primary"
                            }, void 0, false, {
                                fileName: "[project]/src/app/my-orders/page.tsx",
                                lineNumber: 241,
                                columnNumber: 25
                            }, void 0)
                        }, void 0, false, {
                            fileName: "[project]/src/app/my-orders/page.tsx",
                            lineNumber: 240,
                            columnNumber: 21
                        }, void 0),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MyOrdersContent, {}, void 0, false, {
                            fileName: "[project]/src/app/my-orders/page.tsx",
                            lineNumber: 244,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/my-orders/page.tsx",
                        lineNumber: 239,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/my-orders/page.tsx",
                lineNumber: 237,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/my-orders/page.tsx",
        lineNumber: 235,
        columnNumber: 9
    }, this);
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__104c0f93._.js.map