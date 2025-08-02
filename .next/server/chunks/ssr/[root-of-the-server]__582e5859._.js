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
                            children: "管理員"
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
"[project]/src/ai/flows/data:be091d [app-ssr] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"4010724a07593b3b50c8b04bd54a68103bf64a20d5":"getOrdersByUsername"},"src/ai/flows/order-flow.ts",""] */ __turbopack_context__.s({
    "getOrdersByUsername": (()=>getOrdersByUsername)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var getOrdersByUsername = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("4010724a07593b3b50c8b04bd54a68103bf64a20d5", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getOrdersByUsername"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vb3JkZXItZmxvdy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbid1c2Ugc2VydmVyJztcblxuaW1wb3J0IHsgZ2V0U2hlZXREYXRhLCBhcHBlbmRTaGVldERhdGEsIGdldEhlYWRlcnMsIHVwZGF0ZVNoZWV0RGF0YSwgYmF0Y2hVcGRhdGVTaGVldERhdGEgfSBmcm9tICdAL3NlcnZpY2VzL3NoZWV0LXNlcnZpY2UnO1xuaW1wb3J0IHsgZ2V0VmVuZG9ycywgdHlwZSBWZW5kb3IgfSBmcm9tICcuL3ZlbmRvci1mbG93JztcbmltcG9ydCB7IHR5cGUgRmluYWxPcmRlciwgdHlwZSBPcmRlckl0ZW0gfSBmcm9tICdAL2NvbXBvbmVudHMvT3JkZXJTdW1tYXJ5JztcbmltcG9ydCB7IFB1Ymxpc2hPcmRlclJlcXVlc3RTY2hlbWEsIHR5cGUgUHVibGlzaE9yZGVyUmVxdWVzdCB9IGZyb20gJ0AvbGliL3NjaGVtYS9vcmRlcic7XG5pbXBvcnQgeyBmb3JtYXQsIHBhcnNlLCBwYXJzZUlTTywgaXNWYWxpZCB9IGZyb20gJ2RhdGUtZm5zJztcblxuY29uc3QgU1BSRUFEU0hFRVRfSUQgPSAnMVpqMmgwY1lscmIybUJhTmdsMS1Qb09LN3RsQ0N3RGNjQVhuNXc2NmhwNGMnO1xuY29uc3QgREFJTFlfT1JERVJTX1NIRUVUX05BTUUgPSAnZGFpbHlfb3JkZXJzJztcbmNvbnN0IE9SREVSX0lURU1TX1NIRUVUX05BTUUgPSAnb3JkZXJfaXRlbXMnO1xuXG5leHBvcnQgdHlwZSBEYWlseU9yZGVyID0ge1xuICAgIGlkOiBzdHJpbmc7XG4gICAgZGF0ZTogc3RyaW5nO1xuICAgIHZlbmRvcklkOiBzdHJpbmc7XG4gICAgdmVuZG9yTmFtZT86IHN0cmluZzsgLy8gT3B0aW9uYWw6IGZvciBkaXNwbGF5IG9uIGFkbWluIHBhZ2VcbiAgICBkZWFkbGluZTogc3RyaW5nO1xufTtcblxuLy8gVGhpcyB0eXBlIGlzIGZvciB0aGUgdXNlci1mYWNpbmcgb3JkZXIgcGFnZVxuZXhwb3J0IHR5cGUgQXZhaWxhYmxlT3JkZXIgPSB7XG4gICAgaWQ6IHN0cmluZzsgLy8gZGFpbHlPcmRlcklkXG4gICAgdmVuZG9yOiBWZW5kb3I7XG4gICAgZGF0ZTogc3RyaW5nO1xuICAgIGRlYWRsaW5lOiBzdHJpbmc7XG59O1xuXG4vLyBIZWxwZXIgdG8gc2FmZWx5IHBhcnNlIHRoZSBvcHRpb25zIHN0cmluZywgd2hpY2ggbWlnaHQgbm90IGJlIHZhbGlkIEpTT05cbmNvbnN0IHNhZmVQYXJzZU9wdGlvbnMgPSAob3B0aW9uc1N0cjogc3RyaW5nKTogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9PiB7XG4gICAgaWYgKCFvcHRpb25zU3RyKSByZXR1cm4ge307XG4gICAgdHJ5IHtcbiAgICAgIC8vIEZpcnN0LCBjaGVjayBpZiBpdCdzIGFscmVhZHkgYSBKU09OIHN0cmluZ1xuICAgICAgaWYgKG9wdGlvbnNTdHIudHJpbSgpLnN0YXJ0c1dpdGgoJ3snKSkge1xuICAgICAgICAgIGNvbnN0IHBhcnNlZCA9IEpTT04ucGFyc2Uob3B0aW9uc1N0cik7XG4gICAgICAgICAgcmV0dXJuIHR5cGVvZiBwYXJzZWQgPT09ICdvYmplY3QnICYmIHBhcnNlZCAhPT0gbnVsbCA/IHBhcnNlZCA6IHt9O1xuICAgICAgfVxuICAgICAgLy8gSWYgaXQncyBub3QgYSBKU09OIHN0cmluZywgaXQgbWlnaHQgYmUgaW4gdGhlIFwia2V5OnZhbHVlLGtleTI6dmFsdWUyXCIgZm9ybWF0XG4gICAgICAvLyB3aGljaCB3ZSBjYW4ndCByZWxpYWJseSBwYXJzZSBiYWNrIHRvIGEgc3RydWN0dXJlZCBvYmplY3QgaGVyZS5cbiAgICAgIC8vIEZvciBub3csIGlmIGl0J3Mgbm90IGEgdmFsaWQgSlNPTiwgd2UgcmV0dXJuIGFuIGVtcHR5IG9iamVjdCB0byBwcmV2ZW50IGNyYXNoZXMuXG4gICAgICByZXR1cm4ge307XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS53YXJuKGBDb3VsZCBub3QgcGFyc2Ugb3B0aW9ucyBzdHJpbmc6IFwiJHtvcHRpb25zU3RyfVwiYCwgZSk7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxufVxuXG5cbi8vIEhlbHBlciBmdW5jdGlvbiB0byBmb3JtYXQgdGltZSBmcm9tIFNoZWV0cyAod2hpY2ggY2FuIGJlIGEgbnVtYmVyKVxuY29uc3QgZm9ybWF0VGltZSA9ICh0aW1lVmFsdWU6IGFueSk6IHN0cmluZyA9PiB7XG4gICAgaWYgKHR5cGVvZiB0aW1lVmFsdWUgPT09ICdzdHJpbmcnICYmIHRpbWVWYWx1ZS5tYXRjaCgvXlxcZHsyfTpcXGR7Mn0oOlxcZHsyfSk/JC8pKSB7XG4gICAgICAgIHJldHVybiB0aW1lVmFsdWUuc3Vic3RyaW5nKDAsIDUpO1xuICAgIH1cbiAgICBcbiAgICBpZiAodHlwZW9mIHRpbWVWYWx1ZSA9PT0gJ251bWJlcicgJiYgdGltZVZhbHVlID4gMCAmJiB0aW1lVmFsdWUgPCAxKSB7XG4gICAgICAvLyBJdCdzIGEgdGltZSBzZXJpYWwgbnVtYmVyIGZyb20gU2hlZXRzXG4gICAgICBjb25zdCB0b3RhbFNlY29uZHMgPSBNYXRoLnJvdW5kKHRpbWVWYWx1ZSAqIDg2NDAwKTtcbiAgICAgIGNvbnN0IGhvdXJzID0gTWF0aC5mbG9vcih0b3RhbFNlY29uZHMgLyAzNjAwKTtcbiAgICAgIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKCh0b3RhbFNlY29uZHMgJSAzNjAwKSAvIDYwKTtcbiAgICAgIHJldHVybiBgJHtob3Vycy50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyl9OiR7bWludXRlcy50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyl9YDtcbiAgICB9XG5cbiAgICAvLyBUcnkgcGFyc2luZyBhcyBhIGRhdGUgc3RyaW5nIHRvIGV4dHJhY3QgdGltZVxuICAgIGlmICh0eXBlb2YgdGltZVZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgZGF0ZSA9IHBhcnNlSVNPKHRpbWVWYWx1ZSk7XG4gICAgICAgICAgICBpZiAoaXNWYWxpZChkYXRlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmb3JtYXQoZGF0ZSwgJ0hIOm1tJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIC8vIElnbm9yZSBwYXJzZSBlcnJvcnMgZnJvbSBJU09cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY29uc3QgdGltZU1hdGNoID0gdGltZVZhbHVlLm1hdGNoKC8oXFxkezJ9OlxcZHsyfSkvKTtcbiAgICAgICAgaWYgKHRpbWVNYXRjaCkgcmV0dXJuIHRpbWVNYXRjaFswXTtcbiAgICB9XG4gICAgXG4gICAgLy8gRmFsbGJhY2sgZm9yIHVuZXhwZWN0ZWQgZm9ybWF0c1xuICAgIHJldHVybiAnMDA6MDAnOyBcbn07XG5cbi8vIEhlbHBlciBmdW5jdGlvbiB0byBmb3JtYXQgZGF0ZSBmcm9tIFNoZWV0cyAod2hpY2ggY2FuIGJlIGEgbnVtYmVyIG9yIHN0cmluZylcbmNvbnN0IGZvcm1hdERhdGUgPSAoZGF0ZVZhbHVlOiBhbnkpOiBzdHJpbmcgPT4ge1xuICAgIGlmICghZGF0ZVZhbHVlKSByZXR1cm4gZm9ybWF0KG5ldyBEYXRlKCksICd5eXl5LU1NLWRkJyk7IC8vIFJldHVybiB0b2RheSdzIGRhdGUgaWYgZW1wdHlcblxuICAgIGxldCBkYXRlO1xuICAgIFxuICAgIC8vIEhhbmRsZSBTaGVldHMgZGF0ZSBzZXJpYWwgbnVtYmVyIChudW1iZXIgb2YgZGF5cyBzaW5jZSAxODk5LTEyLTMwKVxuICAgIGlmICh0eXBlb2YgZGF0ZVZhbHVlID09PSAnbnVtYmVyJykge1xuICAgICAgICBjb25zdCBleGNlbEVwb2NoID0gbmV3IERhdGUoRGF0ZS5VVEMoMTg5OSwgMTEsIDMwKSk7XG4gICAgICAgIGRhdGUgPSBuZXcgRGF0ZShleGNlbEVwb2NoLmdldFRpbWUoKSArIGRhdGVWYWx1ZSAqIDg2NDAwMDAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBIYW5kbGUgSVNPIHN0cmluZyBsaWtlICcyMDI0LTA3LTI1VDAwOjAwOjAwLjAwMFonIG9yIHNpbXBsZSBzdHJpbmcgJzIwMjQtMDctMjUnXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgIGRhdGUgPSBwYXJzZUlTTyhTdHJpbmcoZGF0ZVZhbHVlKSk7XG4gICAgICAgICAgIC8vIElmIElTTyBwYXJzaW5nIGZhaWxzLCB0cnkgdGhlIHNpbXBsZSBmb3JtYXRcbiAgICAgICAgICAgaWYgKCFpc1ZhbGlkKGRhdGUpKSB7XG4gICAgICAgICAgICAgICBkYXRlID0gcGFyc2UoU3RyaW5nKGRhdGVWYWx1ZSksICd5eXl5LU1NLWRkJywgbmV3IERhdGUoKSk7XG4gICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgIGRhdGUgPSBwYXJzZShTdHJpbmcoZGF0ZVZhbHVlKSwgJ3l5eXktTU0tZGQnLCBuZXcgRGF0ZSgpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvLyBJZiBkYXRlIGlzIHZhbGlkLCBmb3JtYXQgaXQsIG90aGVyd2lzZSByZXR1cm4gdG9kYXkncyBkYXRlIGFzIGEgZmFsbGJhY2tcbiAgICByZXR1cm4gaXNWYWxpZChkYXRlKSA/IGZvcm1hdChkYXRlLCAneXl5eS1NTS1kZCcpIDogZm9ybWF0KG5ldyBEYXRlKCksICd5eXl5LU1NLWRkJyk7XG59O1xuXG5cbi8qKlxuICogUmV0cmlldmVzIGFsbCBhdmFpbGFibGUgb3JkZXJzIGZyb20gdGhlIGRhaWx5X29yZGVycyBzaGVldC5cbiAqIEFueSBvcmRlciBwcmVzZW50IGlzIGNvbnNpZGVyZWQgYXZhaWxhYmxlLlxuICogQHJldHVybnMge1Byb21pc2U8QXZhaWxhYmxlT3JkZXJbXT59IEEgbGlzdCBvZiBhdmFpbGFibGUgdmVuZG9ycyBhbmQgdGhlaXIgZGVhZGxpbmVzLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QXZhaWxhYmxlT3JkZXJzKCk6IFByb21pc2U8QXZhaWxhYmxlT3JkZXJbXT4ge1xuICAgIGNvbnN0IGRhaWx5T3JkZXJzUmFuZ2UgPSBgJHtEQUlMWV9PUkRFUlNfU0hFRVRfTkFNRX0hQTpEYDtcbiAgICBjb25zdCBbZGFpbHlPcmRlcnNEYXRhLCBhbGxWZW5kb3JzXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgZ2V0U2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCBkYWlseU9yZGVyc1JhbmdlKSxcbiAgICAgICAgZ2V0VmVuZG9ycygpXG4gICAgXSk7XG5cbiAgICBpZiAoIWRhaWx5T3JkZXJzRGF0YSB8fCBkYWlseU9yZGVyc0RhdGEubGVuZ3RoIDwgMikge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGhlYWRlciA9IGRhaWx5T3JkZXJzRGF0YVswXTtcbiAgICBjb25zdCByb3dzID0gZGFpbHlPcmRlcnNEYXRhLnNsaWNlKDEpO1xuXG4gICAgY29uc3QgaGVhZGVyTWFwID0gaGVhZGVyLnJlZHVjZSgoYWNjLCBoLCBpKSA9PiB7XG4gICAgICAgIGFjY1tTdHJpbmcoaCldID0gaTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB7fSBhcyBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+KTtcblxuICAgIGNvbnN0IGFsbFZlbmRvcnNNYXAgPSBuZXcgTWFwKGFsbFZlbmRvcnMubWFwKHYgPT4gW3YudmVuZG9ySWQsIHZdKSk7XG5cbiAgICBjb25zdCBhdmFpbGFibGVPcmRlcnM6IEF2YWlsYWJsZU9yZGVyW10gPSBbXTtcblxuICAgIGZvciAoY29uc3Qgcm93IG9mIHJvd3MpIHtcbiAgICAgICAgaWYgKHJvdy5ldmVyeShjZWxsID0+ICFjZWxsKSkgY29udGludWU7IC8vIFNraXAgY29tcGxldGVseSBlbXB0eSByb3dzXG5cbiAgICAgICAgY29uc3QgaWQgPSByb3dbaGVhZGVyTWFwWydpZCddXTtcbiAgICAgICAgY29uc3QgdmVuZG9ySWQgPSByb3dbaGVhZGVyTWFwWyd2ZW5kb3JJZCddXTtcbiAgICAgICAgY29uc3QgZGF0ZVJhdyA9IHJvd1toZWFkZXJNYXBbJ2RhdGUnXV07XG4gICAgICAgIGNvbnN0IGRlYWRsaW5lUmF3ID0gcm93W2hlYWRlck1hcFsnZGVhZGxpbmUnXV07XG5cbiAgICAgICAgaWYgKCFpZCB8fCAhdmVuZG9ySWQpIGNvbnRpbnVlOyAvLyBTa2lwIHJvd3Mgd2l0aG91dCBlc3NlbnRpYWwgZGF0YVxuXG4gICAgICAgIGNvbnN0IHZlbmRvciA9IGFsbFZlbmRvcnNNYXAuZ2V0KHZlbmRvcklkKTtcbiAgICAgICAgaWYgKCF2ZW5kb3IgfHwgIXZlbmRvci5pc0FjdGl2ZSkgY29udGludWU7XG5cbiAgICAgICAgYXZhaWxhYmxlT3JkZXJzLnB1c2goe1xuICAgICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgICAgdmVuZG9yLFxuICAgICAgICAgICAgZGF0ZTogZm9ybWF0RGF0ZShkYXRlUmF3KSxcbiAgICAgICAgICAgIGRlYWRsaW5lOiBmb3JtYXRUaW1lKGRlYWRsaW5lUmF3KSAvLyBGb3JtYXQgdGhlIGRlYWRsaW5lXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhdmFpbGFibGVPcmRlcnM7XG59XG5cbi8qKlxuICogUmV0cmlldmVzIGFsbCBkYWlseSBvcmRlcnMgZm9yIGFkbWluIGRpc3BsYXkuXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxEYWlseU9yZGVyW10+fSBBIGxpc3Qgb2YgYWxsIHB1Ymxpc2hlZCBvcmRlcnMuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxEYWlseU9yZGVycygpOiBQcm9taXNlPERhaWx5T3JkZXJbXT4ge1xuICAgIGNvbnN0IGRhaWx5T3JkZXJzUmFuZ2UgPSBgJHtEQUlMWV9PUkRFUlNfU0hFRVRfTkFNRX0hQTpEYDtcbiAgICAgY29uc3QgW2RhaWx5T3JkZXJzRGF0YSwgYWxsVmVuZG9yc10gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgIGdldFNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgZGFpbHlPcmRlcnNSYW5nZSksXG4gICAgICAgIGdldFZlbmRvcnMoKVxuICAgIF0pO1xuICAgIFxuICAgIGlmICghZGFpbHlPcmRlcnNEYXRhIHx8IGRhaWx5T3JkZXJzRGF0YS5sZW5ndGggPCAyKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICBjb25zdCBoZWFkZXIgPSBkYWlseU9yZGVyc0RhdGFbMF07XG4gICAgY29uc3Qgcm93cyA9IGRhaWx5T3JkZXJzRGF0YS5zbGljZSgxKTtcbiAgICBjb25zdCBhbGxWZW5kb3JzTWFwID0gbmV3IE1hcChhbGxWZW5kb3JzLm1hcCh2ID0+IFt2LnZlbmRvcklkLCB2XSkpO1xuICAgIFxuICAgIGNvbnN0IGhlYWRlck1hcCA9IGhlYWRlci5yZWR1Y2UoKGFjYywgaCwgaSkgPT4ge1xuICAgICAgICBhY2NbU3RyaW5nKGgpXSA9IGk7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30gYXMgUmVjb3JkPHN0cmluZywgbnVtYmVyPik7XG5cbiAgICBjb25zdCBvcmRlcnMgPSByb3dzLm1hcChyb3cgPT4ge1xuICAgICAgICBjb25zdCB2ZW5kb3JJZCA9IHJvd1toZWFkZXJNYXBbJ3ZlbmRvcklkJ11dO1xuICAgICAgICBjb25zdCB2ZW5kb3IgPSBhbGxWZW5kb3JzTWFwLmdldCh2ZW5kb3JJZCk7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaWQ6IHJvd1toZWFkZXJNYXBbJ2lkJ11dIHx8ICcnLFxuICAgICAgICAgICAgZGF0ZTogZm9ybWF0RGF0ZShyb3dbaGVhZGVyTWFwWydkYXRlJ11dKSxcbiAgICAgICAgICAgIHZlbmRvcklkOiB2ZW5kb3JJZCB8fCAnJyxcbiAgICAgICAgICAgIHZlbmRvck5hbWU6IHZlbmRvciA/IHZlbmRvci52ZW5kb3JOYW1lIDogJ+acquefpeW6l+WuticsXG4gICAgICAgICAgICBkZWFkbGluZTogZm9ybWF0VGltZShyb3dbaGVhZGVyTWFwWydkZWFkbGluZSddXSlcbiAgICAgICAgfTtcbiAgICB9KS5maWx0ZXIob3JkZXIgPT4gb3JkZXIuaWQpOyAvLyBGaWx0ZXIgb3V0IGFueSBlbXB0eSByb3dzXG5cbiAgICAvLyBTb3J0IG9yZGVycyBieSBkYXRlIGFuZCB0aGVuIGJ5IGRlYWRsaW5lLCBhc2NlbmRpbmcgKGNsb3Nlc3QgZmlyc3QpXG4gICAgb3JkZXJzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgY29uc3QgZGF0ZUEgPSBuZXcgRGF0ZShgJHthLmRhdGV9VCR7YS5kZWFkbGluZX1gKTtcbiAgICAgICAgY29uc3QgZGF0ZUIgPSBuZXcgRGF0ZShgJHtiLmRhdGV9VCR7Yi5kZWFkbGluZX1gKTtcbiAgICAgICAgcmV0dXJuIGRhdGVBLmdldFRpbWUoKSAtIGRhdGVCLmdldFRpbWUoKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBvcmRlcnM7XG59XG5cblxuLyoqXG4gKiBQdWJsaXNoZXMgYSBuZXcgb3JkZXIgZm9yIGEgc3BlY2lmaWMgZGF0ZSwgdmVuZG9yIGFuZCBkZWFkbGluZS5cbiAqIEBwYXJhbSB7UHVibGlzaE9yZGVyUmVxdWVzdH0gcmVxIC0gVGhlIHJlcXVlc3QgY29udGFpbmluZyBkYXRlLCB2ZW5kb3JJZCBhbmQgZGVhZGxpbmUuXG4gKiBAcmV0dXJucyB7UHJvbWlzZTx7c3VjY2VzczogYm9vbGVhbn0+fSBBIHN1Y2Nlc3MgZmxhZy5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHB1Ymxpc2hPcmRlcihyZXE6IFB1Ymxpc2hPcmRlclJlcXVlc3QpOiBQcm9taXNlPHsgc3VjY2VzczogYm9vbGVhbiB9PiB7XG4gIGNvbnN0IHZhbGlkYXRpb24gPSBQdWJsaXNoT3JkZXJSZXF1ZXN0U2NoZW1hLnNhZmVQYXJzZShyZXEpO1xuICBpZiAoIXZhbGlkYXRpb24uc3VjY2Vzcykge1xuICAgIGNvbnN0IGVycm9yTXNnID0gdmFsaWRhdGlvbi5lcnJvci5lcnJvcnMubWFwKGUgPT4gYCR7ZS5wYXRoLmpvaW4oJy4nKX06ICR7ZS5tZXNzYWdlfWApLmpvaW4oJywgJyk7XG4gICAgdGhyb3cgbmV3IEVycm9yKGDovLjlhaXos4fmlpnmnInoqqQ6ICR7ZXJyb3JNc2d9YCk7XG4gIH1cblxuICBjb25zdCBhbGxPcmRlcnNSYW5nZSA9IGAke0RBSUxZX09SREVSU19TSEVFVF9OQU1FfSFBMjpBYDtcbiAgY29uc3QgYWxsT3JkZXJJZHNEYXRhID0gYXdhaXQgZ2V0U2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCBhbGxPcmRlcnNSYW5nZSk7XG4gICAgY29uc3QgbGFzdElkTnVtID0gYWxsT3JkZXJJZHNEYXRhLmxlbmd0aCA+IDAgXG4gICAgICAgID8gTWF0aC5tYXgoMCwgLi4uYWxsT3JkZXJJZHNEYXRhLm1hcChyb3cgPT4gcGFyc2VJbnQoKHJvd1swXSB8fCAnZG8wJykucmVwbGFjZSgnZG8nLCAnJyksIDEwKSkuZmlsdGVyKG51bSA9PiAhaXNOYU4obnVtKSkpXG4gICAgICAgIDogMDtcbiAgY29uc3QgbmV3SWQgPSBgZG8keyhsYXN0SWROdW0gKyAxKS50b1N0cmluZygpLnBhZFN0YXJ0KDMsICcwJyl9YDtcblxuICBjb25zdCB2YWx1ZXMgPSBbXG4gICAgW25ld0lkLCByZXEuZGF0ZSwgcmVxLnZlbmRvcklkLCByZXEuZGVhZGxpbmVdXG4gIF07XG4gIFxuICAvLyBFbnN1cmUgaGVhZGVycyBleGlzdFxuICBjb25zdCBoZWFkZXJzID0gYXdhaXQgZ2V0SGVhZGVycyhTUFJFQURTSEVFVF9JRCwgREFJTFlfT1JERVJTX1NIRUVUX05BTUUpO1xuICBpZiAoaGVhZGVycy5sZW5ndGggPT09IDApIHtcbiAgICAgIGF3YWl0IHVwZGF0ZVNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgYCR7REFJTFlfT1JERVJTX1NIRUVUX05BTUV9IUExOkQxYCwgW1snaWQnLCAnZGF0ZScsICd2ZW5kb3JJZCcsICdkZWFkbGluZSddXSk7XG4gIH1cblxuICBhd2FpdCBhcHBlbmRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGAke0RBSUxZX09SREVSU19TSEVFVF9OQU1FfSFBOkRgLCB2YWx1ZXMpO1xuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG59XG5cbmV4cG9ydCB0eXBlIFVwZGF0ZURhaWx5T3JkZXJSZXF1ZXN0ID0ge1xuICAgIG9yZGVySWQ6IHN0cmluZztcbiAgICB2ZW5kb3JJZDogc3RyaW5nO1xuICAgIGRhdGU6IHN0cmluZztcbiAgICBkZWFkbGluZTogc3RyaW5nO1xufVxuXG4vKipcbiAqIFVwZGF0ZXMgYW4gZXhpc3RpbmcgZGFpbHkgb3JkZXIncyBkYXRlIGFuZCBkZWFkbGluZS5cbiAqIEBwYXJhbSB7VXBkYXRlRGFpbHlPcmRlclJlcXVlc3R9IHJlcSAtIFRoZSByZXF1ZXN0IGNvbnRhaW5pbmcgb3JkZXJJZCwgZGF0ZSBhbmQgZGVhZGxpbmUuXG4gKiBAcmV0dXJucyB7UHJvbWlzZTx7c3VjY2VzczogYm9vbGVhbn0+fSBBIHN1Y2Nlc3MgZmxhZy5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZURhaWx5T3JkZXIocmVxOiBVcGRhdGVEYWlseU9yZGVyUmVxdWVzdCk6IFByb21pc2U8eyBzdWNjZXNzOiBib29sZWFuIH0+IHtcbiAgICBjb25zdCB7IG9yZGVySWQsIHZlbmRvcklkLCBkYXRlLCBkZWFkbGluZSB9ID0gcmVxO1xuICAgIFxuICAgIC8vIDEuIEZpbmQgdGhlIHJvdyBvZiB0aGUgb3JkZXIgdG8gdXBkYXRlXG4gICAgY29uc3QgYWxsT3JkZXJzRGF0YSA9IGF3YWl0IGdldFNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgYCR7REFJTFlfT1JERVJTX1NIRUVUX05BTUV9IUE6QWApO1xuICAgIGNvbnN0IHJvd0luZGV4ID0gYWxsT3JkZXJzRGF0YS5maW5kSW5kZXgocm93ID0+IHJvd1swXSA9PT0gb3JkZXJJZCk7XG4gICAgXG4gICAgaWYgKHJvd0luZGV4ID09PSAtMSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYOaJvuS4jeWIsCBJRCDngrogJHtvcmRlcklkfSDnmoToqILllq7jgIJgKTtcbiAgICB9XG5cbiAgICAvLyArMSBiZWNhdXNlIHNoZWV0IHJvd3MgYXJlIDEtYmFzZWQuXG4gICAgY29uc3Qgcm93VG9VcGRhdGUgPSByb3dJbmRleCArIDE7XG4gICAgXG4gICAgLy8gV2UgdXBkYXRlIGRhdGUgYW5kIGRlYWRsaW5lLiBWZW5kb3JJZCBpcyBub3QgY2hhbmdlZC5cbiAgICAvLyBUaGUgcmFuZ2Ugc2hvdWxkIGJlIEJ4OkR4IHRvIHVwZGF0ZSBkYXRlIGFuZCBkZWFkbGluZS5cbiAgICBjb25zdCB1cGRhdGVSYW5nZSA9IGAke0RBSUxZX09SREVSU19TSEVFVF9OQU1FfSFCJHtyb3dUb1VwZGF0ZX06RCR7cm93VG9VcGRhdGV9YDtcbiAgICBhd2FpdCB1cGRhdGVTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIHVwZGF0ZVJhbmdlLCBbW2RhdGUsIHZlbmRvcklkLCBkZWFkbGluZV1dKTtcblxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbn1cblxuXG4vKipcbiAqIERlbGV0ZXMgYSBwdWJsaXNoZWQgZGFpbHkgb3JkZXIgYW5kIGl0cyBhc3NvY2lhdGVkIG9yZGVyIGl0ZW1zLlxuICogQHBhcmFtIHtzdHJpbmd9IGRhaWx5T3JkZXJJZCBUaGUgSUQgb2YgdGhlIGRhaWx5IG9yZGVyIHRvIGRlbGV0ZS5cbiAqIEByZXR1cm5zIHtQcm9taXNlPHtzdWNjZXNzOiBib29sZWFufT59IEEgc3VjY2VzcyBmbGFnLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlRGFpbHlPcmRlcihkYWlseU9yZGVySWQ6IHN0cmluZyk6IFByb21pc2U8eyBzdWNjZXNzOiBib29sZWFuIH0+IHtcbiAgLy8gMS4gR2V0IGFsbCBkYXRhIGZyb20gYm90aCBzaGVldHNcbiAgY29uc3QgW2RhaWx5T3JkZXJzRGF0YVdpdGhIZWFkZXIsIG9yZGVySXRlbXNEYXRhV2l0aEhlYWRlcl0gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgZ2V0U2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCBgJHtEQUlMWV9PUkRFUlNfU0hFRVRfTkFNRX0hQTpEYCksXG4gICAgZ2V0U2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCBgJHtPUkRFUl9JVEVNU19TSEVFVF9OQU1FfSFBOk1gKSwgLy8gUmVhZCB1cCB0byBjb2x1bW4gTVxuICBdKTtcblxuICBpZiAoZGFpbHlPcmRlcnNEYXRhV2l0aEhlYWRlci5sZW5ndGggPCAyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xuICB9XG5cbiAgY29uc3QgZGFpbHlPcmRlcnNIZWFkZXJzID0gZGFpbHlPcmRlcnNEYXRhV2l0aEhlYWRlclswXTtcbiAgY29uc3QgZGFpbHlPcmRlcnNSb3dzID0gZGFpbHlPcmRlcnNEYXRhV2l0aEhlYWRlci5zbGljZSgxKTtcbiAgXG4gIGNvbnN0IG9yZGVySXRlbXNIZWFkZXJzID0gb3JkZXJJdGVtc0RhdGFXaXRoSGVhZGVyLmxlbmd0aCA+IDAgPyBvcmRlckl0ZW1zRGF0YVdpdGhIZWFkZXJbMF0gOiBbXTtcbiAgY29uc3Qgb3JkZXJJdGVtc1Jvd3MgPSBvcmRlckl0ZW1zRGF0YVdpdGhIZWFkZXIubGVuZ3RoID4gMSA/IG9yZGVySXRlbXNEYXRhV2l0aEhlYWRlci5zbGljZSgxKSA6IFtdO1xuXG4gIC8vIDIuIEZpbHRlciB0aGUgcm93cyB0byBrZWVwIGZvciBib3RoIHNoZWV0c1xuICBjb25zdCBkYWlseU9yZGVyc1RvS2VlcCA9IGRhaWx5T3JkZXJzUm93cy5maWx0ZXIocm93ID0+IHJvd1swXSAhPT0gZGFpbHlPcmRlcklkKTtcblxuICBsZXQgb3JkZXJJdGVtc1RvS2VlcCA9IG9yZGVySXRlbXNSb3dzO1xuICBpZiAob3JkZXJJdGVtc1Jvd3MubGVuZ3RoID4gMCAmJiBvcmRlckl0ZW1zSGVhZGVycy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBvcmRlckl0ZW1zSGVhZGVyTWFwID0gb3JkZXJJdGVtc0hlYWRlcnMucmVkdWNlKChhY2MsIGgsIGkpID0+IHsgYWNjW1N0cmluZyhoKV0gPSBpOyByZXR1cm4gYWNjOyB9LCB7fSBhcyBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+KTtcbiAgICAgIGNvbnN0IGRhaWx5T3JkZXJJZEluZGV4ID0gb3JkZXJJdGVtc0hlYWRlck1hcFsnZGFpbHlPcmRlcklkJ107XG4gICAgICBcbiAgICAgIC8vIEVuc3VyZSB0aGUgZGFpbHlPcmRlcklkIGNvbHVtbiBleGlzdHMgYmVmb3JlIGZpbHRlcmluZ1xuICAgICAgaWYgKGRhaWx5T3JkZXJJZEluZGV4ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBvcmRlckl0ZW1zVG9LZWVwID0gb3JkZXJJdGVtc1Jvd3MuZmlsdGVyKGl0ZW1Sb3cgPT4gaXRlbVJvd1tkYWlseU9yZGVySWRJbmRleF0gIT09IGRhaWx5T3JkZXJJZCk7XG4gICAgICB9XG4gIH1cblxuICAvLyA0LiBQcmVwYXJlIGJhdGNoIHVwZGF0ZSBkYXRhIHRvIGNsZWFyIGFuZCByZXdyaXRlIGJvdGggc2hlZXRzXG4gIGF3YWl0IGJhdGNoVXBkYXRlU2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCBbXG4gICAge1xuICAgICAgcmFuZ2U6IGAke0RBSUxZX09SREVSU19TSEVFVF9OQU1FfSFBMTpEYCxcbiAgICAgIHZhbHVlczogW2RhaWx5T3JkZXJzSGVhZGVycywgLi4uZGFpbHlPcmRlcnNUb0tlZXBdLFxuICAgIH0sXG4gICAge1xuICAgICAgcmFuZ2U6IGAke09SREVSX0lURU1TX1NIRUVUX05BTUV9IUExOk1gLFxuICAgICAgdmFsdWVzOiBvcmRlckl0ZW1zSGVhZGVycy5sZW5ndGggPiAwID8gW29yZGVySXRlbXNIZWFkZXJzLCAuLi5vcmRlckl0ZW1zVG9LZWVwXSA6IFtdLFxuICAgIH1cbiAgXSk7XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xufVxuXG5cbi8qKlxuICogU3VibWl0cyBhbiBvcmRlciBhbmQgc2F2ZXMgaXQgdG8gdGhlICdvcmRlcl9pdGVtcycgc2hlZXQuXG4gKiBJZiBlZGl0aW5nIGFuIGV4aXN0aW5nIG9yZGVyLCBpdCBmaXJzdCBkZWxldGVzIHRoZSBvbGQgaXRlbXMuXG4gKiBAcGFyYW0ge0ZpbmFsT3JkZXJ9IG9yZGVyIC0gVGhlIGNvbXBsZXRlIG9yZGVyIGRldGFpbHMuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGlzRWRpdGluZyAtIEEgZmxhZyB0byBpbmRpY2F0ZSBpZiB0aGlzIGlzIGFuIGVkaXQuXG4gKiBAcmV0dXJucyB7UHJvbWlzZTx7c3VjY2VzczogYm9vbGVhbn0+fSBBIHN1Y2Nlc3MgZmxhZy5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHN1Ym1pdE9yZGVyKG9yZGVyOiBGaW5hbE9yZGVyLCBpc0VkaXRpbmc6IGJvb2xlYW4gPSBmYWxzZSk6IFByb21pc2U8eyBzdWNjZXNzOiBib29sZWFuIH0+IHtcbiAgICAvLyBJZiBlZGl0aW5nLCBmaXJzdCBkZWxldGUgYWxsIGV4aXN0aW5nIGl0ZW1zIGZvciB0aGF0IHVzZXIgaW4gdGhhdCBkYWlseSBvcmRlclxuICAgIGlmIChpc0VkaXRpbmcpIHtcbiAgICAgICAgYXdhaXQgZGVsZXRlVXNlck9yZGVyKHsgdXNlcm5hbWU6IG9yZGVyLnVzZXJuYW1lLCBkYWlseU9yZGVySWQ6IG9yZGVyLmRhaWx5T3JkZXJJZCB9KTtcbiAgICB9XG4gICAgXG4gICAgLy8gVGhlbiwgYXBwZW5kIHRoZSBuZXcvdXBkYXRlZCBpdGVtc1xuICAgIGNvbnN0IGFsbEl0ZW1zUmFuZ2UgPSBgJHtPUkRFUl9JVEVNU19TSEVFVF9OQU1FfSFBMjpBYDtcbiAgICBjb25zdCBhbGxJdGVtSWRzRGF0YSA9IGF3YWl0IGdldFNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgYWxsSXRlbXNSYW5nZSk7XG4gICAgbGV0IGxhc3RJZE51bSA9IGFsbEl0ZW1JZHNEYXRhLmxlbmd0aCA+IDBcbiAgICAgICAgPyBNYXRoLm1heCgwLCAuLi5hbGxJdGVtSWRzRGF0YS5tYXAocm93ID0+IHBhcnNlSW50KChyb3dbMF0gfHwgJ29pMCcpLnJlcGxhY2UoJ29pJywgJycpLCAxMCkpLmZpbHRlcihudW0gPT4gIWlzTmFOKG51bSkpKVxuICAgICAgICA6IDA7XG5cbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCk7XG4gICAgY29uc3Qgb3JkZXJWYWx1ZXMgPSBbXTtcblxuICAgIGZvciAoY29uc3QgaXRlbSBvZiBvcmRlci5pdGVtcykge1xuICAgICAgICBsYXN0SWROdW0rKzsgLy8gSW5jcmVtZW50IElEIGZvciBlYWNoIGl0ZW0gaW4gdGhlIGxvb3BcbiAgICAgICAgY29uc3QgbmV3SWQgPSBgb2kke2xhc3RJZE51bS50b1N0cmluZygpLnBhZFN0YXJ0KDMsICcwJyl9YDtcbiAgICAgICAgY29uc3Qgb3B0aW9uc1N0cmluZyA9IEpTT04uc3RyaW5naWZ5KGl0ZW0ub3B0aW9ucyk7XG5cbiAgICAgICAgb3JkZXJWYWx1ZXMucHVzaChbXG4gICAgICAgICAgICBuZXdJZCxcbiAgICAgICAgICAgIG9yZGVyLmRhaWx5T3JkZXJJZCxcbiAgICAgICAgICAgIG5vdyxcbiAgICAgICAgICAgIG9yZGVyLnVzZXJuYW1lLFxuICAgICAgICAgICAgb3JkZXIudmVuZG9ySWQsXG4gICAgICAgICAgICBvcmRlci52ZW5kb3JOYW1lLFxuICAgICAgICAgICAgaXRlbS5tZW51SXRlbUlkLFxuICAgICAgICAgICAgaXRlbS5uYW1lLFxuICAgICAgICAgICAgaXRlbS5xdWFudGl0eSxcbiAgICAgICAgICAgIGl0ZW0ucHJpY2UsXG4gICAgICAgICAgICBvcHRpb25zU3RyaW5nLFxuICAgICAgICAgICAgb3JkZXIubm90ZXMsXG4gICAgICAgICAgICAnRkFMU0UnIC8vIGlzUGFpZFxuICAgICAgICBdKTtcbiAgICB9XG4gICAgXG4gICAgLy8gRW5zdXJlIGhlYWRlcnMgZXhpc3RcbiAgICBjb25zdCBoZWFkZXJzID0gYXdhaXQgZ2V0SGVhZGVycyhTUFJFQURTSEVFVF9JRCwgT1JERVJfSVRFTVNfU0hFRVRfTkFNRSk7XG4gICAgaWYgKGhlYWRlcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGF3YWl0IHVwZGF0ZVNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgYCR7T1JERVJfSVRFTVNfU0hFRVRfTkFNRX0hQTE6TTFgLCBbWydpZCcsICdkYWlseU9yZGVySWQnLCAndGltZXN0YW1wJywgJ3VzZXJuYW1lJywgJ3ZlbmRvcklkJywgJ3ZlbmRvck5hbWUnLCAnbWVudUl0ZW1JZCcsICdpdGVtTmFtZScsICdxdWFudGl0eScsICdwcmljZScsICdvcHRpb25zJywgJ25vdGVzJywgJ2lzUGFpZCddXSk7XG4gICAgfVxuXG4gICAgaWYgKG9yZGVyVmFsdWVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgYXdhaXQgYXBwZW5kU2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCBgJHtPUkRFUl9JVEVNU19TSEVFVF9OQU1FfSFBOk1gLCBvcmRlclZhbHVlcyk7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbn1cblxuXG5leHBvcnQgdHlwZSBPcmRlckRldGFpbEl0ZW0gPSB7XG4gICAgaWQ6IHN0cmluZztcbiAgICBkYWlseU9yZGVySWQ6IHN0cmluZztcbiAgICB0aW1lc3RhbXA6IHN0cmluZztcbiAgICB1c2VybmFtZTogc3RyaW5nO1xuICAgIHZlbmRvcklkOiBzdHJpbmc7XG4gICAgdmVuZG9yTmFtZTogc3RyaW5nO1xuICAgIG1lbnVJdGVtSWQ6IHN0cmluZztcbiAgICBpdGVtTmFtZTogc3RyaW5nO1xuICAgIHF1YW50aXR5OiBudW1iZXI7XG4gICAgcHJpY2U6IG51bWJlcjtcbiAgICBvcHRpb25zOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+O1xuICAgIG5vdGVzOiBzdHJpbmc7XG4gICAgaXNQYWlkOiBib29sZWFuO1xufTtcblxuLyoqXG4gKiBSZXRyaWV2ZXMgYWxsIG9yZGVyIGl0ZW1zIGZvciBhIHNwZWNpZmljIGRhaWx5IG9yZGVyLlxuICogQHBhcmFtIHtzdHJpbmd9IGRhaWx5T3JkZXJJZCBUaGUgSUQgb2YgdGhlIGRhaWx5IG9yZGVyLlxuICogQHJldHVybnMge1Byb21pc2U8e29yZGVyRGV0YWlsczogT3JkZXJEZXRhaWxJdGVtW10sIGRhaWx5T3JkZXI6IERhaWx5T3JkZXIgfCBudWxsfT59IEFuIG9iamVjdCBjb250YWluaW5nIHRoZSBsaXN0IG9mIG9yZGVyIGl0ZW1zIGFuZCB0aGUgZGFpbHkgb3JkZXIgZGV0YWlscy5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE9yZGVyRGV0YWlsc0J5RGFpbHlPcmRlcklkKGRhaWx5T3JkZXJJZDogc3RyaW5nKTogUHJvbWlzZTx7IG9yZGVyRGV0YWlsczogT3JkZXJEZXRhaWxJdGVtW10sIGRhaWx5T3JkZXI6IERhaWx5T3JkZXIgfCBudWxsIH0+IHtcbiAgICAvLyAxLiBHZXQgdGhlIGRhaWx5IG9yZGVyIGRldGFpbHNcbiAgICBjb25zdCBhbGxEYWlseU9yZGVycyA9IGF3YWl0IGdldEFsbERhaWx5T3JkZXJzKCk7XG4gICAgY29uc3QgZGFpbHlPcmRlciA9IGFsbERhaWx5T3JkZXJzLmZpbmQobyA9PiBvLmlkID09PSBkYWlseU9yZGVySWQpO1xuXG4gICAgaWYgKCFkYWlseU9yZGVyKSB7XG4gICAgICAgIHJldHVybiB7IG9yZGVyRGV0YWlsczogW10sIGRhaWx5T3JkZXI6IG51bGwgfTtcbiAgICB9XG5cbiAgICAvLyAyLiBHZXQgYWxsIG9yZGVyIGl0ZW1zXG4gICAgY29uc3Qgb3JkZXJJdGVtc1JhbmdlID0gYCR7T1JERVJfSVRFTVNfU0hFRVRfTkFNRX0hQTpNYDsgLy8gRXh0ZW5kZWQgdG8gY29sdW1uIE0gZm9yIG5ldyBmaWVsZHNcbiAgICBjb25zdCBvcmRlckl0ZW1zRGF0YSA9IGF3YWl0IGdldFNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgb3JkZXJJdGVtc1JhbmdlKTtcblxuICAgIGlmIChvcmRlckl0ZW1zRGF0YS5sZW5ndGggPCAyKSB7XG4gICAgICAgIHJldHVybiB7IG9yZGVyRGV0YWlsczogW10sIGRhaWx5T3JkZXI6IGRhaWx5T3JkZXIgfTtcbiAgICB9XG5cbiAgICBjb25zdCBoZWFkZXJzID0gb3JkZXJJdGVtc0RhdGFbMF0ubWFwKGggPT4gU3RyaW5nKGgpLnRyaW0oKSk7XG4gICAgY29uc3QgaGVhZGVyTWFwID0gaGVhZGVycy5yZWR1Y2UoKGFjYywgaGVhZGVyLCBpbmRleCkgPT4ge1xuICAgICAgICBhY2NbaGVhZGVyLnRyaW0oKV0gPSBpbmRleDtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB7fSBhcyBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+KTtcblxuICAgIC8vIENoZWNrIGZvciByZXF1aXJlZCBjb2x1bW5zXG4gICAgY29uc3QgcmVxdWlyZWRDb2xzID0gWydpZCcsICdkYWlseU9yZGVySWQnLCAndGltZXN0YW1wJywgJ3VzZXJuYW1lJywgJ3ZlbmRvcklkJywgJ3ZlbmRvck5hbWUnLCAnbWVudUl0ZW1JZCcsICdpdGVtTmFtZScsICdxdWFudGl0eScsICdwcmljZScsICdvcHRpb25zJywgJ25vdGVzJywgJ2lzUGFpZCddO1xuICAgIGZvciAoY29uc3QgY29sIG9mIHJlcXVpcmVkQ29scykge1xuICAgICAgICBpZiAoaGVhZGVyTWFwW2NvbF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3I6IFRoZSAnJHtPUkRFUl9JVEVNU19TSEVFVF9OQU1FfScgc2hlZXQgaXMgbWlzc2luZyB0aGUgcmVxdWlyZWQgY29sdW1uOiAnJHtjb2x9Jy5gKTtcbiAgICAgICAgICAgIHJldHVybiB7IG9yZGVyRGV0YWlsczogW10sIGRhaWx5T3JkZXI6IGRhaWx5T3JkZXIgfTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHJvd3MgPSBvcmRlckl0ZW1zRGF0YS5zbGljZSgxKTtcblxuICAgIC8vIDMuIEZpbHRlciBpdGVtcyB0aGF0IG1hdGNoIHRoZSBkYWlseU9yZGVySWRcbiAgICBjb25zdCBmaWx0ZXJlZEl0ZW1zID0gcm93cy5maWx0ZXIocm93ID0+IHJvd1toZWFkZXJNYXBbJ2RhaWx5T3JkZXJJZCddXSA9PT0gZGFpbHlPcmRlcklkKTtcblxuICAgIC8vIDQuIE1hcCB0byBPcmRlckRldGFpbEl0ZW0gb2JqZWN0c1xuICAgIGNvbnN0IG9yZGVyRGV0YWlsczogT3JkZXJEZXRhaWxJdGVtW10gPSBmaWx0ZXJlZEl0ZW1zLm1hcChyb3cgPT4gKHtcbiAgICAgICAgaWQ6IHJvd1toZWFkZXJNYXBbJ2lkJ11dIHx8ICcnLFxuICAgICAgICBkYWlseU9yZGVySWQ6IHJvd1toZWFkZXJNYXBbJ2RhaWx5T3JkZXJJZCddXSB8fCAnJyxcbiAgICAgICAgdGltZXN0YW1wOiByb3dbaGVhZGVyTWFwWyd0aW1lc3RhbXAnXV0gfHwgJycsXG4gICAgICAgIHVzZXJuYW1lOiByb3dbaGVhZGVyTWFwWyd1c2VybmFtZSddXSB8fCAnTi9BJyxcbiAgICAgICAgdmVuZG9ySWQ6IHJvd1toZWFkZXJNYXBbJ3ZlbmRvcklkJ11dIHx8ICcnLFxuICAgICAgICB2ZW5kb3JOYW1lOiByb3dbaGVhZGVyTWFwWyd2ZW5kb3JOYW1lJ11dIHx8ICcnLFxuICAgICAgICBtZW51SXRlbUlkOiByb3dbaGVhZGVyTWFwWydtZW51SXRlbUlkJ11dIHx8ICcnLFxuICAgICAgICBpdGVtTmFtZTogcm93W2hlYWRlck1hcFsnaXRlbU5hbWUnXV0gfHwgJ04vQScsXG4gICAgICAgIHF1YW50aXR5OiBwYXJzZUludChyb3dbaGVhZGVyTWFwWydxdWFudGl0eSddXSB8fCAnMCcsIDEwKSxcbiAgICAgICAgcHJpY2U6IHBhcnNlSW50KHJvd1toZWFkZXJNYXBbJ3ByaWNlJ11dIHx8ICcwJywgMTApLFxuICAgICAgICBvcHRpb25zOiBzYWZlUGFyc2VPcHRpb25zKHJvd1toZWFkZXJNYXBbJ29wdGlvbnMnXV0gfHwgJ3t9JyksXG4gICAgICAgIG5vdGVzOiByb3dbaGVhZGVyTWFwWydub3RlcyddXSB8fCAnJyxcbiAgICAgICAgaXNQYWlkOiByb3dbaGVhZGVyTWFwWydpc1BhaWQnXV0gPT09ICdUUlVFJyB8fCByb3dbaGVhZGVyTWFwWydpc1BhaWQnXV0gPT09IHRydWUsXG4gICAgfSkpO1xuXG4gICAgcmV0dXJuIHsgb3JkZXJEZXRhaWxzLCBkYWlseU9yZGVyIH07XG59XG5cbmV4cG9ydCB0eXBlIFVzZXJPcmRlckdyb3VwID0ge1xuICAgIGRhaWx5T3JkZXI6IERhaWx5T3JkZXI7XG4gICAgaXRlbXM6IE9yZGVyRGV0YWlsSXRlbVtdO1xuICAgIHRvdGFsOiBudW1iZXI7XG4gICAgbm90ZXM6IHN0cmluZztcbn1cblxuLyoqXG4gKiBSZXRyaWV2ZXMgYWxsIG9yZGVycyBmb3IgYSBzcGVjaWZpYyB1c2VyLCBncm91cGVkIGJ5IGRhaWx5IG9yZGVyLlxuICogQHBhcmFtIHtzdHJpbmd9IHVzZXJuYW1lIFRoZSB1c2VybmFtZSB0byBmZXRjaCBvcmRlcnMgZm9yLlxuICogQHJldHVybnMge1Byb21pc2U8VXNlck9yZGVyR3JvdXBbXT59IEEgbGlzdCBvZiB0aGUgdXNlcidzIG9yZGVycy5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE9yZGVyc0J5VXNlcm5hbWUodXNlcm5hbWU6IHN0cmluZyk6IFByb21pc2U8VXNlck9yZGVyR3JvdXBbXT4ge1xuICAgIC8vIDEuIEdldCBhbGwgZGFpbHkgb3JkZXJzIGFuZCBhbGwgb3JkZXIgaXRlbXNcbiAgICBjb25zdCBbYWxsRGFpbHlPcmRlcnMsIGFsbE9yZGVySXRlbXNEYXRhXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgZ2V0QWxsRGFpbHlPcmRlcnMoKSxcbiAgICAgICAgZ2V0U2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCBgJHtPUkRFUl9JVEVNU19TSEVFVF9OQU1FfSFBOk1gKVxuICAgIF0pO1xuXG4gICAgaWYgKGFsbE9yZGVySXRlbXNEYXRhLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIGNvbnN0IGl0ZW1zSGVhZGVycyA9IGFsbE9yZGVySXRlbXNEYXRhWzBdLm1hcChoID0+IFN0cmluZyhoKS50cmltKCkpO1xuICAgIGNvbnN0IGl0ZW1zSGVhZGVyTWFwID0gaXRlbXNIZWFkZXJzLnJlZHVjZSgoYWNjLCBoZWFkZXIsIGluZGV4KSA9PiB7XG4gICAgICAgIGFjY1toZWFkZXIudHJpbSgpXSA9IGluZGV4O1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgIH0sIHt9IGFzIFJlY29yZDxzdHJpbmcsIG51bWJlcj4pO1xuXG4gICAgLy8gQ2hlY2sgZm9yIHJlcXVpcmVkIGNvbHVtbnNcbiAgICBjb25zdCByZXF1aXJlZENvbHMgPSBbJ3VzZXJuYW1lJywgJ2RhaWx5T3JkZXJJZCcsICdpZCcsICd0aW1lc3RhbXAnLCAndmVuZG9ySWQnLCAndmVuZG9yTmFtZScsICdtZW51SXRlbUlkJywgJ2l0ZW1OYW1lJywgJ3F1YW50aXR5JywgJ3ByaWNlJywgJ29wdGlvbnMnLCAnbm90ZXMnLCAnaXNQYWlkJ107XG4gICAgZm9yIChjb25zdCBjb2wgb2YgcmVxdWlyZWRDb2xzKSB7XG4gICAgICAgIGlmIChpdGVtc0hlYWRlck1hcFtjb2xdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yOiBUaGUgJyR7T1JERVJfSVRFTVNfU0hFRVRfTkFNRX0nIHNoZWV0IGlzIG1pc3NpbmcgdGhlIHJlcXVpcmVkIGNvbHVtbjogJyR7Y29sfScuYCk7XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyAyLiBGaWx0ZXIgaXRlbXMgZm9yIHRoZSBzcGVjaWZpYyB1c2VybmFtZVxuICAgIGNvbnN0IHVzZXJJdGVtc1Jvd3MgPSBhbGxPcmRlckl0ZW1zRGF0YS5zbGljZSgxKS5maWx0ZXIocm93ID0+IHJvd1tpdGVtc0hlYWRlck1hcFsndXNlcm5hbWUnXV0gPT09IHVzZXJuYW1lKTtcbiAgICBcbiAgICBpZiAodXNlckl0ZW1zUm93cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIGNvbnN0IHVzZXJJdGVtczogT3JkZXJEZXRhaWxJdGVtW10gPSB1c2VySXRlbXNSb3dzLm1hcChyb3cgPT4gKHtcbiAgICAgICAgaWQ6IHJvd1tpdGVtc0hlYWRlck1hcFsnaWQnXV0gfHwgJycsXG4gICAgICAgIGRhaWx5T3JkZXJJZDogcm93W2l0ZW1zSGVhZGVyTWFwWydkYWlseU9yZGVySWQnXV0gfHwgJycsXG4gICAgICAgIHRpbWVzdGFtcDogcm93W2l0ZW1zSGVhZGVyTWFwWyd0aW1lc3RhbXAnXV0gfHwgJycsXG4gICAgICAgIHVzZXJuYW1lOiByb3dbaXRlbXNIZWFkZXJNYXBbJ3VzZXJuYW1lJ11dIHx8ICdOL0EnLFxuICAgICAgICB2ZW5kb3JJZDogcm93W2l0ZW1zSGVhZGVyTWFwWyd2ZW5kb3JJZCddXSB8fCAnJyxcbiAgICAgICAgdmVuZG9yTmFtZTogcm93W2l0ZW1zSGVhZGVyTWFwWyd2ZW5kb3JOYW1lJ11dIHx8ICcnLFxuICAgICAgICBtZW51SXRlbUlkOiByb3dbaXRlbXNIZWFkZXJNYXBbJ21lbnVJdGVtSWQnXV0gfHwgJycsXG4gICAgICAgIGl0ZW1OYW1lOiByb3dbaXRlbXNIZWFkZXJNYXBbJ2l0ZW1OYW1lJ11dIHx8ICdOL0EnLFxuICAgICAgICBxdWFudGl0eTogcGFyc2VJbnQocm93W2l0ZW1zSGVhZGVyTWFwWydxdWFudGl0eSddXSB8fCAnMCcsIDEwKSxcbiAgICAgICAgcHJpY2U6IHBhcnNlSW50KHJvd1tpdGVtc0hlYWRlck1hcFsncHJpY2UnXV0gfHwgJzAnLCAxMCksXG4gICAgICAgIG9wdGlvbnM6IHNhZmVQYXJzZU9wdGlvbnMocm93W2l0ZW1zSGVhZGVyTWFwWydvcHRpb25zJ11dIHx8ICd7fScpLFxuICAgICAgICBub3Rlczogcm93W2l0ZW1zSGVhZGVyTWFwWydub3RlcyddXSB8fCAnJyxcbiAgICAgICAgaXNQYWlkOiByb3dbaXRlbXNIZWFkZXJNYXBbJ2lzUGFpZCddXSA9PT0gJ1RSVUUnIHx8IHJvd1tpdGVtc0hlYWRlck1hcFsnaXNQYWlkJ11dID09PSB0cnVlLFxuICAgIH0pKTtcbiAgICBcbiAgICAvLyAzLiBHcm91cCBpdGVtcyBieSBkYWlseU9yZGVySWRcbiAgICBjb25zdCBncm91cGVkQnlEYWlseU9yZGVyID0gdXNlckl0ZW1zLnJlZHVjZSgoYWNjLCBpdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IGtleSA9IGl0ZW0uZGFpbHlPcmRlcklkO1xuICAgICAgICBpZiAoIWFjY1trZXldKSB7XG4gICAgICAgICAgICBhY2Nba2V5XSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIGFjY1trZXldLnB1c2goaXRlbSk7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30gYXMgUmVjb3JkPHN0cmluZywgT3JkZXJEZXRhaWxJdGVtW10+KTtcbiAgICBcbiAgICBcbiAgICAvLyA0LiBGb3JtYXQgdGhlIGZpbmFsIG91dHB1dFxuICAgIGNvbnN0IGFsbERhaWx5T3JkZXJzTWFwID0gbmV3IE1hcChhbGxEYWlseU9yZGVycy5tYXAobyA9PiBbby5pZCwgb10pKTtcbiAgICBjb25zdCByZXN1bHQ6IFVzZXJPcmRlckdyb3VwW10gPSBbXTtcblxuICAgIGZvciAoY29uc3QgZGFpbHlPcmRlcklkIGluIGdyb3VwZWRCeURhaWx5T3JkZXIpIHtcbiAgICAgICAgY29uc3QgZGFpbHlPcmRlciA9IGFsbERhaWx5T3JkZXJzTWFwLmdldChkYWlseU9yZGVySWQpO1xuICAgICAgICBpZiAoZGFpbHlPcmRlcikge1xuICAgICAgICAgICAgY29uc3QgaXRlbXMgPSBncm91cGVkQnlEYWlseU9yZGVyW2RhaWx5T3JkZXJJZF07XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAvLyBBZ2dyZWdhdGUgaXRlbXMgd2l0aCB0aGUgc2FtZSBtZW51SXRlbUlkIGFuZCBvcHRpb25zXG4gICAgICAgICAgICBjb25zdCBhZ2dyZWdhdGVkSXRlbXMgPSBpdGVtcy5yZWR1Y2UoKGFjYywgaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbnNTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShpdGVtLm9wdGlvbnMgfHwge30pO1xuICAgICAgICAgICAgICAgIGNvbnN0IGFnZ3JlZ2F0aW9uS2V5ID0gYCR7aXRlbS5tZW51SXRlbUlkfXwke29wdGlvbnNTdHJpbmd9YDtcbiAgICAgICAgICAgICAgICBpZiAoYWNjW2FnZ3JlZ2F0aW9uS2V5XSkge1xuICAgICAgICAgICAgICAgICAgICBhY2NbYWdncmVnYXRpb25LZXldLnF1YW50aXR5ICs9IGl0ZW0ucXVhbnRpdHk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYWNjW2FnZ3JlZ2F0aW9uS2V5XSA9IHsgLi4uaXRlbSB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgICAgfSwge30gYXMgUmVjb3JkPHN0cmluZywgT3JkZXJEZXRhaWxJdGVtPik7XG5cbiAgICAgICAgICAgIGNvbnN0IGZpbmFsSXRlbXMgPSBPYmplY3QudmFsdWVzKGFnZ3JlZ2F0ZWRJdGVtcyk7XG4gICAgICAgICAgICBjb25zdCB0b3RhbCA9IGZpbmFsSXRlbXMucmVkdWNlKChzdW0sIGl0ZW0pID0+IHN1bSArIGl0ZW0ucHJpY2UgKiBpdGVtLnF1YW50aXR5LCAwKTtcbiAgICAgICAgICAgIGNvbnN0IG5vdGVzID0gaXRlbXMubGVuZ3RoID4gMCA/IGl0ZW1zWzBdLm5vdGVzIDogJyc7IFxuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgZGFpbHlPcmRlcixcbiAgICAgICAgICAgICAgICBpdGVtczogZmluYWxJdGVtcyxcbiAgICAgICAgICAgICAgICB0b3RhbCxcbiAgICAgICAgICAgICAgICBub3RlcyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8vIDUuIFNvcnQgdGhlIGZpbmFsIGdyb3VwcyBieSBkYXRlLCBtb3N0IHJlY2VudCBmaXJzdFxuICAgIHJlc3VsdC5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGVBID0gbmV3IERhdGUoYCR7YS5kYWlseU9yZGVyLmRhdGV9VCR7YS5kYWlseU9yZGVyLmRlYWRsaW5lfWApO1xuICAgICAgICBjb25zdCBkYXRlQiA9IG5ldyBEYXRlKGAke2IuZGFpbHlPcmRlci5kYXRlfVQke2IuZGFpbHlPcmRlci5kZWFkbGluZX1gKTtcbiAgICAgICAgcmV0dXJuIGRhdGVCLmdldFRpbWUoKSAtIGRhdGVBLmdldFRpbWUoKTtcbiAgICB9KTtcblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogUmV0cmlldmVzIGEgdXNlcidzIHNwZWNpZmljIG9yZGVyIGZvciBhIGdpdmVuIGRhaWx5IG9yZGVyLCBmb3JtYXR0ZWQgZm9yIGVkaXRpbmcuXG4gKiBAcGFyYW0ge3N0cmluZ30gdXNlcm5hbWUgVGhlIHVzZXJuYW1lLlxuICogQHBhcmFtIHtzdHJpbmd9IGRhaWx5T3JkZXJJZCBUaGUgSUQgb2YgdGhlIGRhaWx5IG9yZGVyLlxuICogQHJldHVybnMge1Byb21pc2U8T3JkZXJJdGVtW10+fSBBIGxpc3Qgb2Ygb3JkZXIgaXRlbXMgcmVhZHkgZm9yIHRoZSBjYXJ0LlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RXhpc3RpbmdPcmRlckZvckVkaXQodXNlcm5hbWU6IHN0cmluZywgZGFpbHlPcmRlcklkOiBzdHJpbmcpOiBQcm9taXNlPE9yZGVySXRlbVtdPiB7XG4gIGNvbnN0IGFsbE9yZGVySXRlbXNEYXRhID0gYXdhaXQgZ2V0U2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCBgJHtPUkRFUl9JVEVNU19TSEVFVF9OQU1FfSFBOk1gKTtcbiAgaWYgKGFsbE9yZGVySXRlbXNEYXRhLmxlbmd0aCA8IDIpIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICBjb25zdCBpdGVtc0hlYWRlcnMgPSBhbGxPcmRlckl0ZW1zRGF0YVswXS5tYXAoaCA9PiBTdHJpbmcoaCkudHJpbSgpKTtcbiAgY29uc3QgaXRlbXNIZWFkZXJNYXAgPSBpdGVtc0hlYWRlcnMucmVkdWNlKChhY2MsIGhlYWRlciwgaW5kZXgpID0+IHtcbiAgICBhY2NbaGVhZGVyXSA9IGluZGV4O1xuICAgIHJldHVybiBhY2M7XG4gIH0sIHt9IGFzIFJlY29yZDxzdHJpbmcsIG51bWJlcj4pO1xuXG4gIGNvbnN0IHVzZXJJdGVtc1Jvd3MgPSBhbGxPcmRlckl0ZW1zRGF0YVxuICAgIC5zbGljZSgxKVxuICAgIC5maWx0ZXIocm93ID0+IHJvd1tpdGVtc0hlYWRlck1hcFsndXNlcm5hbWUnXV0gPT09IHVzZXJuYW1lICYmIHJvd1tpdGVtc0hlYWRlck1hcFsnZGFpbHlPcmRlcklkJ11dID09PSBkYWlseU9yZGVySWQpO1xuXG4gIGlmICh1c2VySXRlbXNSb3dzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICBcbiAgLy8gSGVscGVyIHRvIHJlLWdlbmVyYXRlIHRoZSBjb21wb3NpdGUgaXRlbSBJRCBmb3IgdGhlIGNhcnRcbiAgY29uc3QgZ2VuZXJhdGVPcmRlckl0ZW1JZCA9IChpdGVtSWQ6IHN0cmluZywgb3B0aW9uczogUmVjb3JkPHN0cmluZywgc3RyaW5nPikgPT4ge1xuICAgIGlmIChPYmplY3Qua2V5cyhvcHRpb25zKS5sZW5ndGggPT09IDApIHJldHVybiBpdGVtSWQ7XG4gICAgY29uc3Qgc29ydGVkU2VsZWN0aW9ucyA9IE9iamVjdC5rZXlzKG9wdGlvbnMpLnNvcnQoKS5tYXAoa2V5ID0+IGAke2tleX06JHtvcHRpb25zW2tleV19YCkuam9pbignfCcpO1xuICAgIHJldHVybiBgJHtpdGVtSWR9WyR7c29ydGVkU2VsZWN0aW9uc31dYDtcbiAgfVxuXG4gIGNvbnN0IG9yZGVySXRlbXM6IE9yZGVySXRlbVtdID0gdXNlckl0ZW1zUm93cy5tYXAocm93ID0+IHtcbiAgICBjb25zdCBvcHRpb25zID0gc2FmZVBhcnNlT3B0aW9ucyhyb3dbaXRlbXNIZWFkZXJNYXBbJ29wdGlvbnMnXV0gfHwgJ3t9Jyk7XG4gICAgY29uc3QgbWVudUl0ZW1JZCA9IHJvd1tpdGVtc0hlYWRlck1hcFsnbWVudUl0ZW1JZCddXTtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IGdlbmVyYXRlT3JkZXJJdGVtSWQobWVudUl0ZW1JZCwgb3B0aW9ucyksXG4gICAgICBtZW51SXRlbUlkOiBtZW51SXRlbUlkLFxuICAgICAgbmFtZTogcm93W2l0ZW1zSGVhZGVyTWFwWydpdGVtTmFtZSddXSB8fCAnJyxcbiAgICAgIHByaWNlOiBwYXJzZUludChyb3dbaXRlbXNIZWFkZXJNYXBbJ3ByaWNlJ11dIHx8ICcwJywgMTApLFxuICAgICAgcXVhbnRpdHk6IHBhcnNlSW50KHJvd1tpdGVtc0hlYWRlck1hcFsncXVhbnRpdHknXV0gfHwgJzAnLCAxMCksXG4gICAgICB2ZW5kb3JOYW1lOiByb3dbaXRlbXNIZWFkZXJNYXBbJ3ZlbmRvck5hbWUnXV0gfHwgJycsXG4gICAgICB2ZW5kb3JJZDogcm93W2l0ZW1zSGVhZGVyTWFwWyd2ZW5kb3JJZCddXSB8fCAnJyxcbiAgICAgIHVzZXJuYW1lOiB1c2VybmFtZSxcbiAgICAgIG9wdGlvbnM6IG9wdGlvbnMsXG4gICAgICBub3Rlczogcm93W2l0ZW1zSGVhZGVyTWFwWydub3RlcyddXSB8fCAnJyxcbiAgICB9O1xuICB9KTtcbiAgXG4gIHJldHVybiBvcmRlckl0ZW1zO1xufVxuXG5cbi8qKlxuICogRGVsZXRlcyBhIHVzZXIncyBlbnRpcmUgb3JkZXIgZm9yIGEgc3BlY2lmaWMgZGFpbHkgb3JkZXIuXG4gKiBAcGFyYW0ge29iamVjdH0gcGFyYW1zIC0gVGhlIHBhcmFtZXRlcnMgZm9yIGRlbGV0aW5nIHRoZSBvcmRlci5cbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXMudXNlcm5hbWUgLSBUaGUgdXNlcm5hbWUgb2YgdGhlIHVzZXIuXG4gKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1zLmRhaWx5T3JkZXJJZCAtIFRoZSBJRCBvZiB0aGUgZGFpbHkgb3JkZXIgdG8gZGVsZXRlLlxuICogQHJldHVybnMge1Byb21pc2U8e3N1Y2Nlc3M6IGJvb2xlYW59Pn0gQSBzdWNjZXNzIGZsYWcuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVVc2VyT3JkZXIoeyB1c2VybmFtZSwgZGFpbHlPcmRlcklkIH06IHsgdXNlcm5hbWU6IHN0cmluZywgZGFpbHlPcmRlcklkOiBzdHJpbmcgfSk6IFByb21pc2U8eyBzdWNjZXNzOiBib29sZWFuIH0+IHtcbiAgICBjb25zdCBbb3JkZXJJdGVtc0RhdGFXaXRoSGVhZGVyXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgZ2V0U2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCBgJHtPUkRFUl9JVEVNU19TSEVFVF9OQU1FfSFBOk1gKSxcbiAgICBdKTtcblxuICAgIGlmIChvcmRlckl0ZW1zRGF0YVdpdGhIZWFkZXIubGVuZ3RoIDwgMikge1xuICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9OyAvLyBObyBpdGVtcyB0byBkZWxldGVcbiAgICB9XG5cbiAgICBjb25zdCBpdGVtc0hlYWRlcnMgPSBvcmRlckl0ZW1zRGF0YVdpdGhIZWFkZXJbMF07XG4gICAgY29uc3QgaXRlbXNSb3dzID0gb3JkZXJJdGVtc0RhdGFXaXRoSGVhZGVyLnNsaWNlKDEpO1xuICAgIFxuICAgIGNvbnN0IGhlYWRlck1hcCA9IGl0ZW1zSGVhZGVycy5yZWR1Y2UoKGFjYywgaCwgaSkgPT4geyBhY2NbU3RyaW5nKGgpXSA9IGk7IHJldHVybiBhY2M7IH0sIHt9IGFzIFJlY29yZDxzdHJpbmcsIG51bWJlcj4pO1xuICAgIGNvbnN0IGRhaWx5T3JkZXJJZEluZGV4ID0gaGVhZGVyTWFwWydkYWlseU9yZGVySWQnXTtcbiAgICBjb25zdCB1c2VybmFtZUluZGV4ID0gaGVhZGVyTWFwWyd1c2VybmFtZSddO1xuXG4gICAgaWYgKGRhaWx5T3JkZXJJZEluZGV4ID09PSB1bmRlZmluZWQgfHwgdXNlcm5hbWVJbmRleCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSAnb3JkZXJfaXRlbXMnIHNoZWV0IGlzIG1pc3NpbmcgcmVxdWlyZWQgY29sdW1ucyAnZGFpbHlPcmRlcklkJyBvciAndXNlcm5hbWUnLlwiKTtcbiAgICB9XG5cbiAgICBjb25zdCBpdGVtc1RvS2VlcCA9IGl0ZW1zUm93cy5maWx0ZXIocm93ID0+IFxuICAgICAgICAhKHJvd1tkYWlseU9yZGVySWRJbmRleF0gPT09IGRhaWx5T3JkZXJJZCAmJiByb3dbdXNlcm5hbWVJbmRleF0gPT09IHVzZXJuYW1lKVxuICAgICk7XG4gICAgXG4gICAgYXdhaXQgYmF0Y2hVcGRhdGVTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIFt7XG4gICAgICAgIHJhbmdlOiBgJHtPUkRFUl9JVEVNU19TSEVFVF9OQU1FfSFBMTpNYCxcbiAgICAgICAgdmFsdWVzOiBbaXRlbXNIZWFkZXJzLCAuLi5pdGVtc1RvS2VlcF0sXG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJ1U0ErZHNCIn0=
}}),
"[project]/src/ai/flows/data:765375 [app-ssr] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"40b087eb00f00f9014e8a4c4941ed162f1e96eda17":"deleteUserOrder"},"src/ai/flows/order-flow.ts",""] */ __turbopack_context__.s({
    "deleteUserOrder": (()=>deleteUserOrder)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var deleteUserOrder = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("40b087eb00f00f9014e8a4c4941ed162f1e96eda17", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "deleteUserOrder"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vb3JkZXItZmxvdy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbid1c2Ugc2VydmVyJztcblxuaW1wb3J0IHsgZ2V0U2hlZXREYXRhLCBhcHBlbmRTaGVldERhdGEsIGdldEhlYWRlcnMsIHVwZGF0ZVNoZWV0RGF0YSwgYmF0Y2hVcGRhdGVTaGVldERhdGEgfSBmcm9tICdAL3NlcnZpY2VzL3NoZWV0LXNlcnZpY2UnO1xuaW1wb3J0IHsgZ2V0VmVuZG9ycywgdHlwZSBWZW5kb3IgfSBmcm9tICcuL3ZlbmRvci1mbG93JztcbmltcG9ydCB7IHR5cGUgRmluYWxPcmRlciwgdHlwZSBPcmRlckl0ZW0gfSBmcm9tICdAL2NvbXBvbmVudHMvT3JkZXJTdW1tYXJ5JztcbmltcG9ydCB7IFB1Ymxpc2hPcmRlclJlcXVlc3RTY2hlbWEsIHR5cGUgUHVibGlzaE9yZGVyUmVxdWVzdCB9IGZyb20gJ0AvbGliL3NjaGVtYS9vcmRlcic7XG5pbXBvcnQgeyBmb3JtYXQsIHBhcnNlLCBwYXJzZUlTTywgaXNWYWxpZCB9IGZyb20gJ2RhdGUtZm5zJztcblxuY29uc3QgU1BSRUFEU0hFRVRfSUQgPSAnMVpqMmgwY1lscmIybUJhTmdsMS1Qb09LN3RsQ0N3RGNjQVhuNXc2NmhwNGMnO1xuY29uc3QgREFJTFlfT1JERVJTX1NIRUVUX05BTUUgPSAnZGFpbHlfb3JkZXJzJztcbmNvbnN0IE9SREVSX0lURU1TX1NIRUVUX05BTUUgPSAnb3JkZXJfaXRlbXMnO1xuXG5leHBvcnQgdHlwZSBEYWlseU9yZGVyID0ge1xuICAgIGlkOiBzdHJpbmc7XG4gICAgZGF0ZTogc3RyaW5nO1xuICAgIHZlbmRvcklkOiBzdHJpbmc7XG4gICAgdmVuZG9yTmFtZT86IHN0cmluZzsgLy8gT3B0aW9uYWw6IGZvciBkaXNwbGF5IG9uIGFkbWluIHBhZ2VcbiAgICBkZWFkbGluZTogc3RyaW5nO1xufTtcblxuLy8gVGhpcyB0eXBlIGlzIGZvciB0aGUgdXNlci1mYWNpbmcgb3JkZXIgcGFnZVxuZXhwb3J0IHR5cGUgQXZhaWxhYmxlT3JkZXIgPSB7XG4gICAgaWQ6IHN0cmluZzsgLy8gZGFpbHlPcmRlcklkXG4gICAgdmVuZG9yOiBWZW5kb3I7XG4gICAgZGF0ZTogc3RyaW5nO1xuICAgIGRlYWRsaW5lOiBzdHJpbmc7XG59O1xuXG4vLyBIZWxwZXIgdG8gc2FmZWx5IHBhcnNlIHRoZSBvcHRpb25zIHN0cmluZywgd2hpY2ggbWlnaHQgbm90IGJlIHZhbGlkIEpTT05cbmNvbnN0IHNhZmVQYXJzZU9wdGlvbnMgPSAob3B0aW9uc1N0cjogc3RyaW5nKTogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9PiB7XG4gICAgaWYgKCFvcHRpb25zU3RyKSByZXR1cm4ge307XG4gICAgdHJ5IHtcbiAgICAgIC8vIEZpcnN0LCBjaGVjayBpZiBpdCdzIGFscmVhZHkgYSBKU09OIHN0cmluZ1xuICAgICAgaWYgKG9wdGlvbnNTdHIudHJpbSgpLnN0YXJ0c1dpdGgoJ3snKSkge1xuICAgICAgICAgIGNvbnN0IHBhcnNlZCA9IEpTT04ucGFyc2Uob3B0aW9uc1N0cik7XG4gICAgICAgICAgcmV0dXJuIHR5cGVvZiBwYXJzZWQgPT09ICdvYmplY3QnICYmIHBhcnNlZCAhPT0gbnVsbCA/IHBhcnNlZCA6IHt9O1xuICAgICAgfVxuICAgICAgLy8gSWYgaXQncyBub3QgYSBKU09OIHN0cmluZywgaXQgbWlnaHQgYmUgaW4gdGhlIFwia2V5OnZhbHVlLGtleTI6dmFsdWUyXCIgZm9ybWF0XG4gICAgICAvLyB3aGljaCB3ZSBjYW4ndCByZWxpYWJseSBwYXJzZSBiYWNrIHRvIGEgc3RydWN0dXJlZCBvYmplY3QgaGVyZS5cbiAgICAgIC8vIEZvciBub3csIGlmIGl0J3Mgbm90IGEgdmFsaWQgSlNPTiwgd2UgcmV0dXJuIGFuIGVtcHR5IG9iamVjdCB0byBwcmV2ZW50IGNyYXNoZXMuXG4gICAgICByZXR1cm4ge307XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS53YXJuKGBDb3VsZCBub3QgcGFyc2Ugb3B0aW9ucyBzdHJpbmc6IFwiJHtvcHRpb25zU3RyfVwiYCwgZSk7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxufVxuXG5cbi8vIEhlbHBlciBmdW5jdGlvbiB0byBmb3JtYXQgdGltZSBmcm9tIFNoZWV0cyAod2hpY2ggY2FuIGJlIGEgbnVtYmVyKVxuY29uc3QgZm9ybWF0VGltZSA9ICh0aW1lVmFsdWU6IGFueSk6IHN0cmluZyA9PiB7XG4gICAgaWYgKHR5cGVvZiB0aW1lVmFsdWUgPT09ICdzdHJpbmcnICYmIHRpbWVWYWx1ZS5tYXRjaCgvXlxcZHsyfTpcXGR7Mn0oOlxcZHsyfSk/JC8pKSB7XG4gICAgICAgIHJldHVybiB0aW1lVmFsdWUuc3Vic3RyaW5nKDAsIDUpO1xuICAgIH1cbiAgICBcbiAgICBpZiAodHlwZW9mIHRpbWVWYWx1ZSA9PT0gJ251bWJlcicgJiYgdGltZVZhbHVlID4gMCAmJiB0aW1lVmFsdWUgPCAxKSB7XG4gICAgICAvLyBJdCdzIGEgdGltZSBzZXJpYWwgbnVtYmVyIGZyb20gU2hlZXRzXG4gICAgICBjb25zdCB0b3RhbFNlY29uZHMgPSBNYXRoLnJvdW5kKHRpbWVWYWx1ZSAqIDg2NDAwKTtcbiAgICAgIGNvbnN0IGhvdXJzID0gTWF0aC5mbG9vcih0b3RhbFNlY29uZHMgLyAzNjAwKTtcbiAgICAgIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKCh0b3RhbFNlY29uZHMgJSAzNjAwKSAvIDYwKTtcbiAgICAgIHJldHVybiBgJHtob3Vycy50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyl9OiR7bWludXRlcy50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyl9YDtcbiAgICB9XG5cbiAgICAvLyBUcnkgcGFyc2luZyBhcyBhIGRhdGUgc3RyaW5nIHRvIGV4dHJhY3QgdGltZVxuICAgIGlmICh0eXBlb2YgdGltZVZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgZGF0ZSA9IHBhcnNlSVNPKHRpbWVWYWx1ZSk7XG4gICAgICAgICAgICBpZiAoaXNWYWxpZChkYXRlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmb3JtYXQoZGF0ZSwgJ0hIOm1tJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIC8vIElnbm9yZSBwYXJzZSBlcnJvcnMgZnJvbSBJU09cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY29uc3QgdGltZU1hdGNoID0gdGltZVZhbHVlLm1hdGNoKC8oXFxkezJ9OlxcZHsyfSkvKTtcbiAgICAgICAgaWYgKHRpbWVNYXRjaCkgcmV0dXJuIHRpbWVNYXRjaFswXTtcbiAgICB9XG4gICAgXG4gICAgLy8gRmFsbGJhY2sgZm9yIHVuZXhwZWN0ZWQgZm9ybWF0c1xuICAgIHJldHVybiAnMDA6MDAnOyBcbn07XG5cbi8vIEhlbHBlciBmdW5jdGlvbiB0byBmb3JtYXQgZGF0ZSBmcm9tIFNoZWV0cyAod2hpY2ggY2FuIGJlIGEgbnVtYmVyIG9yIHN0cmluZylcbmNvbnN0IGZvcm1hdERhdGUgPSAoZGF0ZVZhbHVlOiBhbnkpOiBzdHJpbmcgPT4ge1xuICAgIGlmICghZGF0ZVZhbHVlKSByZXR1cm4gZm9ybWF0KG5ldyBEYXRlKCksICd5eXl5LU1NLWRkJyk7IC8vIFJldHVybiB0b2RheSdzIGRhdGUgaWYgZW1wdHlcblxuICAgIGxldCBkYXRlO1xuICAgIFxuICAgIC8vIEhhbmRsZSBTaGVldHMgZGF0ZSBzZXJpYWwgbnVtYmVyIChudW1iZXIgb2YgZGF5cyBzaW5jZSAxODk5LTEyLTMwKVxuICAgIGlmICh0eXBlb2YgZGF0ZVZhbHVlID09PSAnbnVtYmVyJykge1xuICAgICAgICBjb25zdCBleGNlbEVwb2NoID0gbmV3IERhdGUoRGF0ZS5VVEMoMTg5OSwgMTEsIDMwKSk7XG4gICAgICAgIGRhdGUgPSBuZXcgRGF0ZShleGNlbEVwb2NoLmdldFRpbWUoKSArIGRhdGVWYWx1ZSAqIDg2NDAwMDAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBIYW5kbGUgSVNPIHN0cmluZyBsaWtlICcyMDI0LTA3LTI1VDAwOjAwOjAwLjAwMFonIG9yIHNpbXBsZSBzdHJpbmcgJzIwMjQtMDctMjUnXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgIGRhdGUgPSBwYXJzZUlTTyhTdHJpbmcoZGF0ZVZhbHVlKSk7XG4gICAgICAgICAgIC8vIElmIElTTyBwYXJzaW5nIGZhaWxzLCB0cnkgdGhlIHNpbXBsZSBmb3JtYXRcbiAgICAgICAgICAgaWYgKCFpc1ZhbGlkKGRhdGUpKSB7XG4gICAgICAgICAgICAgICBkYXRlID0gcGFyc2UoU3RyaW5nKGRhdGVWYWx1ZSksICd5eXl5LU1NLWRkJywgbmV3IERhdGUoKSk7XG4gICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgIGRhdGUgPSBwYXJzZShTdHJpbmcoZGF0ZVZhbHVlKSwgJ3l5eXktTU0tZGQnLCBuZXcgRGF0ZSgpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvLyBJZiBkYXRlIGlzIHZhbGlkLCBmb3JtYXQgaXQsIG90aGVyd2lzZSByZXR1cm4gdG9kYXkncyBkYXRlIGFzIGEgZmFsbGJhY2tcbiAgICByZXR1cm4gaXNWYWxpZChkYXRlKSA/IGZvcm1hdChkYXRlLCAneXl5eS1NTS1kZCcpIDogZm9ybWF0KG5ldyBEYXRlKCksICd5eXl5LU1NLWRkJyk7XG59O1xuXG5cbi8qKlxuICogUmV0cmlldmVzIGFsbCBhdmFpbGFibGUgb3JkZXJzIGZyb20gdGhlIGRhaWx5X29yZGVycyBzaGVldC5cbiAqIEFueSBvcmRlciBwcmVzZW50IGlzIGNvbnNpZGVyZWQgYXZhaWxhYmxlLlxuICogQHJldHVybnMge1Byb21pc2U8QXZhaWxhYmxlT3JkZXJbXT59IEEgbGlzdCBvZiBhdmFpbGFibGUgdmVuZG9ycyBhbmQgdGhlaXIgZGVhZGxpbmVzLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QXZhaWxhYmxlT3JkZXJzKCk6IFByb21pc2U8QXZhaWxhYmxlT3JkZXJbXT4ge1xuICAgIGNvbnN0IGRhaWx5T3JkZXJzUmFuZ2UgPSBgJHtEQUlMWV9PUkRFUlNfU0hFRVRfTkFNRX0hQTpEYDtcbiAgICBjb25zdCBbZGFpbHlPcmRlcnNEYXRhLCBhbGxWZW5kb3JzXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgZ2V0U2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCBkYWlseU9yZGVyc1JhbmdlKSxcbiAgICAgICAgZ2V0VmVuZG9ycygpXG4gICAgXSk7XG5cbiAgICBpZiAoIWRhaWx5T3JkZXJzRGF0YSB8fCBkYWlseU9yZGVyc0RhdGEubGVuZ3RoIDwgMikge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGhlYWRlciA9IGRhaWx5T3JkZXJzRGF0YVswXTtcbiAgICBjb25zdCByb3dzID0gZGFpbHlPcmRlcnNEYXRhLnNsaWNlKDEpO1xuXG4gICAgY29uc3QgaGVhZGVyTWFwID0gaGVhZGVyLnJlZHVjZSgoYWNjLCBoLCBpKSA9PiB7XG4gICAgICAgIGFjY1tTdHJpbmcoaCldID0gaTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB7fSBhcyBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+KTtcblxuICAgIGNvbnN0IGFsbFZlbmRvcnNNYXAgPSBuZXcgTWFwKGFsbFZlbmRvcnMubWFwKHYgPT4gW3YudmVuZG9ySWQsIHZdKSk7XG5cbiAgICBjb25zdCBhdmFpbGFibGVPcmRlcnM6IEF2YWlsYWJsZU9yZGVyW10gPSBbXTtcblxuICAgIGZvciAoY29uc3Qgcm93IG9mIHJvd3MpIHtcbiAgICAgICAgaWYgKHJvdy5ldmVyeShjZWxsID0+ICFjZWxsKSkgY29udGludWU7IC8vIFNraXAgY29tcGxldGVseSBlbXB0eSByb3dzXG5cbiAgICAgICAgY29uc3QgaWQgPSByb3dbaGVhZGVyTWFwWydpZCddXTtcbiAgICAgICAgY29uc3QgdmVuZG9ySWQgPSByb3dbaGVhZGVyTWFwWyd2ZW5kb3JJZCddXTtcbiAgICAgICAgY29uc3QgZGF0ZVJhdyA9IHJvd1toZWFkZXJNYXBbJ2RhdGUnXV07XG4gICAgICAgIGNvbnN0IGRlYWRsaW5lUmF3ID0gcm93W2hlYWRlck1hcFsnZGVhZGxpbmUnXV07XG5cbiAgICAgICAgaWYgKCFpZCB8fCAhdmVuZG9ySWQpIGNvbnRpbnVlOyAvLyBTa2lwIHJvd3Mgd2l0aG91dCBlc3NlbnRpYWwgZGF0YVxuXG4gICAgICAgIGNvbnN0IHZlbmRvciA9IGFsbFZlbmRvcnNNYXAuZ2V0KHZlbmRvcklkKTtcbiAgICAgICAgaWYgKCF2ZW5kb3IgfHwgIXZlbmRvci5pc0FjdGl2ZSkgY29udGludWU7XG5cbiAgICAgICAgYXZhaWxhYmxlT3JkZXJzLnB1c2goe1xuICAgICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgICAgdmVuZG9yLFxuICAgICAgICAgICAgZGF0ZTogZm9ybWF0RGF0ZShkYXRlUmF3KSxcbiAgICAgICAgICAgIGRlYWRsaW5lOiBmb3JtYXRUaW1lKGRlYWRsaW5lUmF3KSAvLyBGb3JtYXQgdGhlIGRlYWRsaW5lXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhdmFpbGFibGVPcmRlcnM7XG59XG5cbi8qKlxuICogUmV0cmlldmVzIGFsbCBkYWlseSBvcmRlcnMgZm9yIGFkbWluIGRpc3BsYXkuXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxEYWlseU9yZGVyW10+fSBBIGxpc3Qgb2YgYWxsIHB1Ymxpc2hlZCBvcmRlcnMuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxEYWlseU9yZGVycygpOiBQcm9taXNlPERhaWx5T3JkZXJbXT4ge1xuICAgIGNvbnN0IGRhaWx5T3JkZXJzUmFuZ2UgPSBgJHtEQUlMWV9PUkRFUlNfU0hFRVRfTkFNRX0hQTpEYDtcbiAgICAgY29uc3QgW2RhaWx5T3JkZXJzRGF0YSwgYWxsVmVuZG9yc10gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgIGdldFNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgZGFpbHlPcmRlcnNSYW5nZSksXG4gICAgICAgIGdldFZlbmRvcnMoKVxuICAgIF0pO1xuICAgIFxuICAgIGlmICghZGFpbHlPcmRlcnNEYXRhIHx8IGRhaWx5T3JkZXJzRGF0YS5sZW5ndGggPCAyKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICBjb25zdCBoZWFkZXIgPSBkYWlseU9yZGVyc0RhdGFbMF07XG4gICAgY29uc3Qgcm93cyA9IGRhaWx5T3JkZXJzRGF0YS5zbGljZSgxKTtcbiAgICBjb25zdCBhbGxWZW5kb3JzTWFwID0gbmV3IE1hcChhbGxWZW5kb3JzLm1hcCh2ID0+IFt2LnZlbmRvcklkLCB2XSkpO1xuICAgIFxuICAgIGNvbnN0IGhlYWRlck1hcCA9IGhlYWRlci5yZWR1Y2UoKGFjYywgaCwgaSkgPT4ge1xuICAgICAgICBhY2NbU3RyaW5nKGgpXSA9IGk7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30gYXMgUmVjb3JkPHN0cmluZywgbnVtYmVyPik7XG5cbiAgICBjb25zdCBvcmRlcnMgPSByb3dzLm1hcChyb3cgPT4ge1xuICAgICAgICBjb25zdCB2ZW5kb3JJZCA9IHJvd1toZWFkZXJNYXBbJ3ZlbmRvcklkJ11dO1xuICAgICAgICBjb25zdCB2ZW5kb3IgPSBhbGxWZW5kb3JzTWFwLmdldCh2ZW5kb3JJZCk7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaWQ6IHJvd1toZWFkZXJNYXBbJ2lkJ11dIHx8ICcnLFxuICAgICAgICAgICAgZGF0ZTogZm9ybWF0RGF0ZShyb3dbaGVhZGVyTWFwWydkYXRlJ11dKSxcbiAgICAgICAgICAgIHZlbmRvcklkOiB2ZW5kb3JJZCB8fCAnJyxcbiAgICAgICAgICAgIHZlbmRvck5hbWU6IHZlbmRvciA/IHZlbmRvci52ZW5kb3JOYW1lIDogJ+acquefpeW6l+WuticsXG4gICAgICAgICAgICBkZWFkbGluZTogZm9ybWF0VGltZShyb3dbaGVhZGVyTWFwWydkZWFkbGluZSddXSlcbiAgICAgICAgfTtcbiAgICB9KS5maWx0ZXIob3JkZXIgPT4gb3JkZXIuaWQpOyAvLyBGaWx0ZXIgb3V0IGFueSBlbXB0eSByb3dzXG5cbiAgICAvLyBTb3J0IG9yZGVycyBieSBkYXRlIGFuZCB0aGVuIGJ5IGRlYWRsaW5lLCBhc2NlbmRpbmcgKGNsb3Nlc3QgZmlyc3QpXG4gICAgb3JkZXJzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgY29uc3QgZGF0ZUEgPSBuZXcgRGF0ZShgJHthLmRhdGV9VCR7YS5kZWFkbGluZX1gKTtcbiAgICAgICAgY29uc3QgZGF0ZUIgPSBuZXcgRGF0ZShgJHtiLmRhdGV9VCR7Yi5kZWFkbGluZX1gKTtcbiAgICAgICAgcmV0dXJuIGRhdGVBLmdldFRpbWUoKSAtIGRhdGVCLmdldFRpbWUoKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBvcmRlcnM7XG59XG5cblxuLyoqXG4gKiBQdWJsaXNoZXMgYSBuZXcgb3JkZXIgZm9yIGEgc3BlY2lmaWMgZGF0ZSwgdmVuZG9yIGFuZCBkZWFkbGluZS5cbiAqIEBwYXJhbSB7UHVibGlzaE9yZGVyUmVxdWVzdH0gcmVxIC0gVGhlIHJlcXVlc3QgY29udGFpbmluZyBkYXRlLCB2ZW5kb3JJZCBhbmQgZGVhZGxpbmUuXG4gKiBAcmV0dXJucyB7UHJvbWlzZTx7c3VjY2VzczogYm9vbGVhbn0+fSBBIHN1Y2Nlc3MgZmxhZy5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHB1Ymxpc2hPcmRlcihyZXE6IFB1Ymxpc2hPcmRlclJlcXVlc3QpOiBQcm9taXNlPHsgc3VjY2VzczogYm9vbGVhbiB9PiB7XG4gIGNvbnN0IHZhbGlkYXRpb24gPSBQdWJsaXNoT3JkZXJSZXF1ZXN0U2NoZW1hLnNhZmVQYXJzZShyZXEpO1xuICBpZiAoIXZhbGlkYXRpb24uc3VjY2Vzcykge1xuICAgIGNvbnN0IGVycm9yTXNnID0gdmFsaWRhdGlvbi5lcnJvci5lcnJvcnMubWFwKGUgPT4gYCR7ZS5wYXRoLmpvaW4oJy4nKX06ICR7ZS5tZXNzYWdlfWApLmpvaW4oJywgJyk7XG4gICAgdGhyb3cgbmV3IEVycm9yKGDovLjlhaXos4fmlpnmnInoqqQ6ICR7ZXJyb3JNc2d9YCk7XG4gIH1cblxuICBjb25zdCBhbGxPcmRlcnNSYW5nZSA9IGAke0RBSUxZX09SREVSU19TSEVFVF9OQU1FfSFBMjpBYDtcbiAgY29uc3QgYWxsT3JkZXJJZHNEYXRhID0gYXdhaXQgZ2V0U2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCBhbGxPcmRlcnNSYW5nZSk7XG4gICAgY29uc3QgbGFzdElkTnVtID0gYWxsT3JkZXJJZHNEYXRhLmxlbmd0aCA+IDAgXG4gICAgICAgID8gTWF0aC5tYXgoMCwgLi4uYWxsT3JkZXJJZHNEYXRhLm1hcChyb3cgPT4gcGFyc2VJbnQoKHJvd1swXSB8fCAnZG8wJykucmVwbGFjZSgnZG8nLCAnJyksIDEwKSkuZmlsdGVyKG51bSA9PiAhaXNOYU4obnVtKSkpXG4gICAgICAgIDogMDtcbiAgY29uc3QgbmV3SWQgPSBgZG8keyhsYXN0SWROdW0gKyAxKS50b1N0cmluZygpLnBhZFN0YXJ0KDMsICcwJyl9YDtcblxuICBjb25zdCB2YWx1ZXMgPSBbXG4gICAgW25ld0lkLCByZXEuZGF0ZSwgcmVxLnZlbmRvcklkLCByZXEuZGVhZGxpbmVdXG4gIF07XG4gIFxuICAvLyBFbnN1cmUgaGVhZGVycyBleGlzdFxuICBjb25zdCBoZWFkZXJzID0gYXdhaXQgZ2V0SGVhZGVycyhTUFJFQURTSEVFVF9JRCwgREFJTFlfT1JERVJTX1NIRUVUX05BTUUpO1xuICBpZiAoaGVhZGVycy5sZW5ndGggPT09IDApIHtcbiAgICAgIGF3YWl0IHVwZGF0ZVNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgYCR7REFJTFlfT1JERVJTX1NIRUVUX05BTUV9IUExOkQxYCwgW1snaWQnLCAnZGF0ZScsICd2ZW5kb3JJZCcsICdkZWFkbGluZSddXSk7XG4gIH1cblxuICBhd2FpdCBhcHBlbmRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGAke0RBSUxZX09SREVSU19TSEVFVF9OQU1FfSFBOkRgLCB2YWx1ZXMpO1xuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG59XG5cbmV4cG9ydCB0eXBlIFVwZGF0ZURhaWx5T3JkZXJSZXF1ZXN0ID0ge1xuICAgIG9yZGVySWQ6IHN0cmluZztcbiAgICB2ZW5kb3JJZDogc3RyaW5nO1xuICAgIGRhdGU6IHN0cmluZztcbiAgICBkZWFkbGluZTogc3RyaW5nO1xufVxuXG4vKipcbiAqIFVwZGF0ZXMgYW4gZXhpc3RpbmcgZGFpbHkgb3JkZXIncyBkYXRlIGFuZCBkZWFkbGluZS5cbiAqIEBwYXJhbSB7VXBkYXRlRGFpbHlPcmRlclJlcXVlc3R9IHJlcSAtIFRoZSByZXF1ZXN0IGNvbnRhaW5pbmcgb3JkZXJJZCwgZGF0ZSBhbmQgZGVhZGxpbmUuXG4gKiBAcmV0dXJucyB7UHJvbWlzZTx7c3VjY2VzczogYm9vbGVhbn0+fSBBIHN1Y2Nlc3MgZmxhZy5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZURhaWx5T3JkZXIocmVxOiBVcGRhdGVEYWlseU9yZGVyUmVxdWVzdCk6IFByb21pc2U8eyBzdWNjZXNzOiBib29sZWFuIH0+IHtcbiAgICBjb25zdCB7IG9yZGVySWQsIHZlbmRvcklkLCBkYXRlLCBkZWFkbGluZSB9ID0gcmVxO1xuICAgIFxuICAgIC8vIDEuIEZpbmQgdGhlIHJvdyBvZiB0aGUgb3JkZXIgdG8gdXBkYXRlXG4gICAgY29uc3QgYWxsT3JkZXJzRGF0YSA9IGF3YWl0IGdldFNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgYCR7REFJTFlfT1JERVJTX1NIRUVUX05BTUV9IUE6QWApO1xuICAgIGNvbnN0IHJvd0luZGV4ID0gYWxsT3JkZXJzRGF0YS5maW5kSW5kZXgocm93ID0+IHJvd1swXSA9PT0gb3JkZXJJZCk7XG4gICAgXG4gICAgaWYgKHJvd0luZGV4ID09PSAtMSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYOaJvuS4jeWIsCBJRCDngrogJHtvcmRlcklkfSDnmoToqILllq7jgIJgKTtcbiAgICB9XG5cbiAgICAvLyArMSBiZWNhdXNlIHNoZWV0IHJvd3MgYXJlIDEtYmFzZWQuXG4gICAgY29uc3Qgcm93VG9VcGRhdGUgPSByb3dJbmRleCArIDE7XG4gICAgXG4gICAgLy8gV2UgdXBkYXRlIGRhdGUgYW5kIGRlYWRsaW5lLiBWZW5kb3JJZCBpcyBub3QgY2hhbmdlZC5cbiAgICAvLyBUaGUgcmFuZ2Ugc2hvdWxkIGJlIEJ4OkR4IHRvIHVwZGF0ZSBkYXRlIGFuZCBkZWFkbGluZS5cbiAgICBjb25zdCB1cGRhdGVSYW5nZSA9IGAke0RBSUxZX09SREVSU19TSEVFVF9OQU1FfSFCJHtyb3dUb1VwZGF0ZX06RCR7cm93VG9VcGRhdGV9YDtcbiAgICBhd2FpdCB1cGRhdGVTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIHVwZGF0ZVJhbmdlLCBbW2RhdGUsIHZlbmRvcklkLCBkZWFkbGluZV1dKTtcblxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbn1cblxuXG4vKipcbiAqIERlbGV0ZXMgYSBwdWJsaXNoZWQgZGFpbHkgb3JkZXIgYW5kIGl0cyBhc3NvY2lhdGVkIG9yZGVyIGl0ZW1zLlxuICogQHBhcmFtIHtzdHJpbmd9IGRhaWx5T3JkZXJJZCBUaGUgSUQgb2YgdGhlIGRhaWx5IG9yZGVyIHRvIGRlbGV0ZS5cbiAqIEByZXR1cm5zIHtQcm9taXNlPHtzdWNjZXNzOiBib29sZWFufT59IEEgc3VjY2VzcyBmbGFnLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlRGFpbHlPcmRlcihkYWlseU9yZGVySWQ6IHN0cmluZyk6IFByb21pc2U8eyBzdWNjZXNzOiBib29sZWFuIH0+IHtcbiAgLy8gMS4gR2V0IGFsbCBkYXRhIGZyb20gYm90aCBzaGVldHNcbiAgY29uc3QgW2RhaWx5T3JkZXJzRGF0YVdpdGhIZWFkZXIsIG9yZGVySXRlbXNEYXRhV2l0aEhlYWRlcl0gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgZ2V0U2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCBgJHtEQUlMWV9PUkRFUlNfU0hFRVRfTkFNRX0hQTpEYCksXG4gICAgZ2V0U2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCBgJHtPUkRFUl9JVEVNU19TSEVFVF9OQU1FfSFBOk1gKSwgLy8gUmVhZCB1cCB0byBjb2x1bW4gTVxuICBdKTtcblxuICBpZiAoZGFpbHlPcmRlcnNEYXRhV2l0aEhlYWRlci5sZW5ndGggPCAyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xuICB9XG5cbiAgY29uc3QgZGFpbHlPcmRlcnNIZWFkZXJzID0gZGFpbHlPcmRlcnNEYXRhV2l0aEhlYWRlclswXTtcbiAgY29uc3QgZGFpbHlPcmRlcnNSb3dzID0gZGFpbHlPcmRlcnNEYXRhV2l0aEhlYWRlci5zbGljZSgxKTtcbiAgXG4gIGNvbnN0IG9yZGVySXRlbXNIZWFkZXJzID0gb3JkZXJJdGVtc0RhdGFXaXRoSGVhZGVyLmxlbmd0aCA+IDAgPyBvcmRlckl0ZW1zRGF0YVdpdGhIZWFkZXJbMF0gOiBbXTtcbiAgY29uc3Qgb3JkZXJJdGVtc1Jvd3MgPSBvcmRlckl0ZW1zRGF0YVdpdGhIZWFkZXIubGVuZ3RoID4gMSA/IG9yZGVySXRlbXNEYXRhV2l0aEhlYWRlci5zbGljZSgxKSA6IFtdO1xuXG4gIC8vIDIuIEZpbHRlciB0aGUgcm93cyB0byBrZWVwIGZvciBib3RoIHNoZWV0c1xuICBjb25zdCBkYWlseU9yZGVyc1RvS2VlcCA9IGRhaWx5T3JkZXJzUm93cy5maWx0ZXIocm93ID0+IHJvd1swXSAhPT0gZGFpbHlPcmRlcklkKTtcblxuICBsZXQgb3JkZXJJdGVtc1RvS2VlcCA9IG9yZGVySXRlbXNSb3dzO1xuICBpZiAob3JkZXJJdGVtc1Jvd3MubGVuZ3RoID4gMCAmJiBvcmRlckl0ZW1zSGVhZGVycy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBvcmRlckl0ZW1zSGVhZGVyTWFwID0gb3JkZXJJdGVtc0hlYWRlcnMucmVkdWNlKChhY2MsIGgsIGkpID0+IHsgYWNjW1N0cmluZyhoKV0gPSBpOyByZXR1cm4gYWNjOyB9LCB7fSBhcyBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+KTtcbiAgICAgIGNvbnN0IGRhaWx5T3JkZXJJZEluZGV4ID0gb3JkZXJJdGVtc0hlYWRlck1hcFsnZGFpbHlPcmRlcklkJ107XG4gICAgICBcbiAgICAgIC8vIEVuc3VyZSB0aGUgZGFpbHlPcmRlcklkIGNvbHVtbiBleGlzdHMgYmVmb3JlIGZpbHRlcmluZ1xuICAgICAgaWYgKGRhaWx5T3JkZXJJZEluZGV4ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBvcmRlckl0ZW1zVG9LZWVwID0gb3JkZXJJdGVtc1Jvd3MuZmlsdGVyKGl0ZW1Sb3cgPT4gaXRlbVJvd1tkYWlseU9yZGVySWRJbmRleF0gIT09IGRhaWx5T3JkZXJJZCk7XG4gICAgICB9XG4gIH1cblxuICAvLyA0LiBQcmVwYXJlIGJhdGNoIHVwZGF0ZSBkYXRhIHRvIGNsZWFyIGFuZCByZXdyaXRlIGJvdGggc2hlZXRzXG4gIGF3YWl0IGJhdGNoVXBkYXRlU2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCBbXG4gICAge1xuICAgICAgcmFuZ2U6IGAke0RBSUxZX09SREVSU19TSEVFVF9OQU1FfSFBMTpEYCxcbiAgICAgIHZhbHVlczogW2RhaWx5T3JkZXJzSGVhZGVycywgLi4uZGFpbHlPcmRlcnNUb0tlZXBdLFxuICAgIH0sXG4gICAge1xuICAgICAgcmFuZ2U6IGAke09SREVSX0lURU1TX1NIRUVUX05BTUV9IUExOk1gLFxuICAgICAgdmFsdWVzOiBvcmRlckl0ZW1zSGVhZGVycy5sZW5ndGggPiAwID8gW29yZGVySXRlbXNIZWFkZXJzLCAuLi5vcmRlckl0ZW1zVG9LZWVwXSA6IFtdLFxuICAgIH1cbiAgXSk7XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xufVxuXG5cbi8qKlxuICogU3VibWl0cyBhbiBvcmRlciBhbmQgc2F2ZXMgaXQgdG8gdGhlICdvcmRlcl9pdGVtcycgc2hlZXQuXG4gKiBJZiBlZGl0aW5nIGFuIGV4aXN0aW5nIG9yZGVyLCBpdCBmaXJzdCBkZWxldGVzIHRoZSBvbGQgaXRlbXMuXG4gKiBAcGFyYW0ge0ZpbmFsT3JkZXJ9IG9yZGVyIC0gVGhlIGNvbXBsZXRlIG9yZGVyIGRldGFpbHMuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGlzRWRpdGluZyAtIEEgZmxhZyB0byBpbmRpY2F0ZSBpZiB0aGlzIGlzIGFuIGVkaXQuXG4gKiBAcmV0dXJucyB7UHJvbWlzZTx7c3VjY2VzczogYm9vbGVhbn0+fSBBIHN1Y2Nlc3MgZmxhZy5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHN1Ym1pdE9yZGVyKG9yZGVyOiBGaW5hbE9yZGVyLCBpc0VkaXRpbmc6IGJvb2xlYW4gPSBmYWxzZSk6IFByb21pc2U8eyBzdWNjZXNzOiBib29sZWFuIH0+IHtcbiAgICAvLyBJZiBlZGl0aW5nLCBmaXJzdCBkZWxldGUgYWxsIGV4aXN0aW5nIGl0ZW1zIGZvciB0aGF0IHVzZXIgaW4gdGhhdCBkYWlseSBvcmRlclxuICAgIGlmIChpc0VkaXRpbmcpIHtcbiAgICAgICAgYXdhaXQgZGVsZXRlVXNlck9yZGVyKHsgdXNlcm5hbWU6IG9yZGVyLnVzZXJuYW1lLCBkYWlseU9yZGVySWQ6IG9yZGVyLmRhaWx5T3JkZXJJZCB9KTtcbiAgICB9XG4gICAgXG4gICAgLy8gVGhlbiwgYXBwZW5kIHRoZSBuZXcvdXBkYXRlZCBpdGVtc1xuICAgIGNvbnN0IGFsbEl0ZW1zUmFuZ2UgPSBgJHtPUkRFUl9JVEVNU19TSEVFVF9OQU1FfSFBMjpBYDtcbiAgICBjb25zdCBhbGxJdGVtSWRzRGF0YSA9IGF3YWl0IGdldFNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgYWxsSXRlbXNSYW5nZSk7XG4gICAgbGV0IGxhc3RJZE51bSA9IGFsbEl0ZW1JZHNEYXRhLmxlbmd0aCA+IDBcbiAgICAgICAgPyBNYXRoLm1heCgwLCAuLi5hbGxJdGVtSWRzRGF0YS5tYXAocm93ID0+IHBhcnNlSW50KChyb3dbMF0gfHwgJ29pMCcpLnJlcGxhY2UoJ29pJywgJycpLCAxMCkpLmZpbHRlcihudW0gPT4gIWlzTmFOKG51bSkpKVxuICAgICAgICA6IDA7XG5cbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCk7XG4gICAgY29uc3Qgb3JkZXJWYWx1ZXMgPSBbXTtcblxuICAgIGZvciAoY29uc3QgaXRlbSBvZiBvcmRlci5pdGVtcykge1xuICAgICAgICBsYXN0SWROdW0rKzsgLy8gSW5jcmVtZW50IElEIGZvciBlYWNoIGl0ZW0gaW4gdGhlIGxvb3BcbiAgICAgICAgY29uc3QgbmV3SWQgPSBgb2kke2xhc3RJZE51bS50b1N0cmluZygpLnBhZFN0YXJ0KDMsICcwJyl9YDtcbiAgICAgICAgY29uc3Qgb3B0aW9uc1N0cmluZyA9IEpTT04uc3RyaW5naWZ5KGl0ZW0ub3B0aW9ucyk7XG5cbiAgICAgICAgb3JkZXJWYWx1ZXMucHVzaChbXG4gICAgICAgICAgICBuZXdJZCxcbiAgICAgICAgICAgIG9yZGVyLmRhaWx5T3JkZXJJZCxcbiAgICAgICAgICAgIG5vdyxcbiAgICAgICAgICAgIG9yZGVyLnVzZXJuYW1lLFxuICAgICAgICAgICAgb3JkZXIudmVuZG9ySWQsXG4gICAgICAgICAgICBvcmRlci52ZW5kb3JOYW1lLFxuICAgICAgICAgICAgaXRlbS5tZW51SXRlbUlkLFxuICAgICAgICAgICAgaXRlbS5uYW1lLFxuICAgICAgICAgICAgaXRlbS5xdWFudGl0eSxcbiAgICAgICAgICAgIGl0ZW0ucHJpY2UsXG4gICAgICAgICAgICBvcHRpb25zU3RyaW5nLFxuICAgICAgICAgICAgb3JkZXIubm90ZXMsXG4gICAgICAgICAgICAnRkFMU0UnIC8vIGlzUGFpZFxuICAgICAgICBdKTtcbiAgICB9XG4gICAgXG4gICAgLy8gRW5zdXJlIGhlYWRlcnMgZXhpc3RcbiAgICBjb25zdCBoZWFkZXJzID0gYXdhaXQgZ2V0SGVhZGVycyhTUFJFQURTSEVFVF9JRCwgT1JERVJfSVRFTVNfU0hFRVRfTkFNRSk7XG4gICAgaWYgKGhlYWRlcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGF3YWl0IHVwZGF0ZVNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgYCR7T1JERVJfSVRFTVNfU0hFRVRfTkFNRX0hQTE6TTFgLCBbWydpZCcsICdkYWlseU9yZGVySWQnLCAndGltZXN0YW1wJywgJ3VzZXJuYW1lJywgJ3ZlbmRvcklkJywgJ3ZlbmRvck5hbWUnLCAnbWVudUl0ZW1JZCcsICdpdGVtTmFtZScsICdxdWFudGl0eScsICdwcmljZScsICdvcHRpb25zJywgJ25vdGVzJywgJ2lzUGFpZCddXSk7XG4gICAgfVxuXG4gICAgaWYgKG9yZGVyVmFsdWVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgYXdhaXQgYXBwZW5kU2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCBgJHtPUkRFUl9JVEVNU19TSEVFVF9OQU1FfSFBOk1gLCBvcmRlclZhbHVlcyk7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbn1cblxuXG5leHBvcnQgdHlwZSBPcmRlckRldGFpbEl0ZW0gPSB7XG4gICAgaWQ6IHN0cmluZztcbiAgICBkYWlseU9yZGVySWQ6IHN0cmluZztcbiAgICB0aW1lc3RhbXA6IHN0cmluZztcbiAgICB1c2VybmFtZTogc3RyaW5nO1xuICAgIHZlbmRvcklkOiBzdHJpbmc7XG4gICAgdmVuZG9yTmFtZTogc3RyaW5nO1xuICAgIG1lbnVJdGVtSWQ6IHN0cmluZztcbiAgICBpdGVtTmFtZTogc3RyaW5nO1xuICAgIHF1YW50aXR5OiBudW1iZXI7XG4gICAgcHJpY2U6IG51bWJlcjtcbiAgICBvcHRpb25zOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+O1xuICAgIG5vdGVzOiBzdHJpbmc7XG4gICAgaXNQYWlkOiBib29sZWFuO1xufTtcblxuLyoqXG4gKiBSZXRyaWV2ZXMgYWxsIG9yZGVyIGl0ZW1zIGZvciBhIHNwZWNpZmljIGRhaWx5IG9yZGVyLlxuICogQHBhcmFtIHtzdHJpbmd9IGRhaWx5T3JkZXJJZCBUaGUgSUQgb2YgdGhlIGRhaWx5IG9yZGVyLlxuICogQHJldHVybnMge1Byb21pc2U8e29yZGVyRGV0YWlsczogT3JkZXJEZXRhaWxJdGVtW10sIGRhaWx5T3JkZXI6IERhaWx5T3JkZXIgfCBudWxsfT59IEFuIG9iamVjdCBjb250YWluaW5nIHRoZSBsaXN0IG9mIG9yZGVyIGl0ZW1zIGFuZCB0aGUgZGFpbHkgb3JkZXIgZGV0YWlscy5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE9yZGVyRGV0YWlsc0J5RGFpbHlPcmRlcklkKGRhaWx5T3JkZXJJZDogc3RyaW5nKTogUHJvbWlzZTx7IG9yZGVyRGV0YWlsczogT3JkZXJEZXRhaWxJdGVtW10sIGRhaWx5T3JkZXI6IERhaWx5T3JkZXIgfCBudWxsIH0+IHtcbiAgICAvLyAxLiBHZXQgdGhlIGRhaWx5IG9yZGVyIGRldGFpbHNcbiAgICBjb25zdCBhbGxEYWlseU9yZGVycyA9IGF3YWl0IGdldEFsbERhaWx5T3JkZXJzKCk7XG4gICAgY29uc3QgZGFpbHlPcmRlciA9IGFsbERhaWx5T3JkZXJzLmZpbmQobyA9PiBvLmlkID09PSBkYWlseU9yZGVySWQpO1xuXG4gICAgaWYgKCFkYWlseU9yZGVyKSB7XG4gICAgICAgIHJldHVybiB7IG9yZGVyRGV0YWlsczogW10sIGRhaWx5T3JkZXI6IG51bGwgfTtcbiAgICB9XG5cbiAgICAvLyAyLiBHZXQgYWxsIG9yZGVyIGl0ZW1zXG4gICAgY29uc3Qgb3JkZXJJdGVtc1JhbmdlID0gYCR7T1JERVJfSVRFTVNfU0hFRVRfTkFNRX0hQTpNYDsgLy8gRXh0ZW5kZWQgdG8gY29sdW1uIE0gZm9yIG5ldyBmaWVsZHNcbiAgICBjb25zdCBvcmRlckl0ZW1zRGF0YSA9IGF3YWl0IGdldFNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgb3JkZXJJdGVtc1JhbmdlKTtcblxuICAgIGlmIChvcmRlckl0ZW1zRGF0YS5sZW5ndGggPCAyKSB7XG4gICAgICAgIHJldHVybiB7IG9yZGVyRGV0YWlsczogW10sIGRhaWx5T3JkZXI6IGRhaWx5T3JkZXIgfTtcbiAgICB9XG5cbiAgICBjb25zdCBoZWFkZXJzID0gb3JkZXJJdGVtc0RhdGFbMF0ubWFwKGggPT4gU3RyaW5nKGgpLnRyaW0oKSk7XG4gICAgY29uc3QgaGVhZGVyTWFwID0gaGVhZGVycy5yZWR1Y2UoKGFjYywgaGVhZGVyLCBpbmRleCkgPT4ge1xuICAgICAgICBhY2NbaGVhZGVyLnRyaW0oKV0gPSBpbmRleDtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB7fSBhcyBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+KTtcblxuICAgIC8vIENoZWNrIGZvciByZXF1aXJlZCBjb2x1bW5zXG4gICAgY29uc3QgcmVxdWlyZWRDb2xzID0gWydpZCcsICdkYWlseU9yZGVySWQnLCAndGltZXN0YW1wJywgJ3VzZXJuYW1lJywgJ3ZlbmRvcklkJywgJ3ZlbmRvck5hbWUnLCAnbWVudUl0ZW1JZCcsICdpdGVtTmFtZScsICdxdWFudGl0eScsICdwcmljZScsICdvcHRpb25zJywgJ25vdGVzJywgJ2lzUGFpZCddO1xuICAgIGZvciAoY29uc3QgY29sIG9mIHJlcXVpcmVkQ29scykge1xuICAgICAgICBpZiAoaGVhZGVyTWFwW2NvbF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3I6IFRoZSAnJHtPUkRFUl9JVEVNU19TSEVFVF9OQU1FfScgc2hlZXQgaXMgbWlzc2luZyB0aGUgcmVxdWlyZWQgY29sdW1uOiAnJHtjb2x9Jy5gKTtcbiAgICAgICAgICAgIHJldHVybiB7IG9yZGVyRGV0YWlsczogW10sIGRhaWx5T3JkZXI6IGRhaWx5T3JkZXIgfTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHJvd3MgPSBvcmRlckl0ZW1zRGF0YS5zbGljZSgxKTtcblxuICAgIC8vIDMuIEZpbHRlciBpdGVtcyB0aGF0IG1hdGNoIHRoZSBkYWlseU9yZGVySWRcbiAgICBjb25zdCBmaWx0ZXJlZEl0ZW1zID0gcm93cy5maWx0ZXIocm93ID0+IHJvd1toZWFkZXJNYXBbJ2RhaWx5T3JkZXJJZCddXSA9PT0gZGFpbHlPcmRlcklkKTtcblxuICAgIC8vIDQuIE1hcCB0byBPcmRlckRldGFpbEl0ZW0gb2JqZWN0c1xuICAgIGNvbnN0IG9yZGVyRGV0YWlsczogT3JkZXJEZXRhaWxJdGVtW10gPSBmaWx0ZXJlZEl0ZW1zLm1hcChyb3cgPT4gKHtcbiAgICAgICAgaWQ6IHJvd1toZWFkZXJNYXBbJ2lkJ11dIHx8ICcnLFxuICAgICAgICBkYWlseU9yZGVySWQ6IHJvd1toZWFkZXJNYXBbJ2RhaWx5T3JkZXJJZCddXSB8fCAnJyxcbiAgICAgICAgdGltZXN0YW1wOiByb3dbaGVhZGVyTWFwWyd0aW1lc3RhbXAnXV0gfHwgJycsXG4gICAgICAgIHVzZXJuYW1lOiByb3dbaGVhZGVyTWFwWyd1c2VybmFtZSddXSB8fCAnTi9BJyxcbiAgICAgICAgdmVuZG9ySWQ6IHJvd1toZWFkZXJNYXBbJ3ZlbmRvcklkJ11dIHx8ICcnLFxuICAgICAgICB2ZW5kb3JOYW1lOiByb3dbaGVhZGVyTWFwWyd2ZW5kb3JOYW1lJ11dIHx8ICcnLFxuICAgICAgICBtZW51SXRlbUlkOiByb3dbaGVhZGVyTWFwWydtZW51SXRlbUlkJ11dIHx8ICcnLFxuICAgICAgICBpdGVtTmFtZTogcm93W2hlYWRlck1hcFsnaXRlbU5hbWUnXV0gfHwgJ04vQScsXG4gICAgICAgIHF1YW50aXR5OiBwYXJzZUludChyb3dbaGVhZGVyTWFwWydxdWFudGl0eSddXSB8fCAnMCcsIDEwKSxcbiAgICAgICAgcHJpY2U6IHBhcnNlSW50KHJvd1toZWFkZXJNYXBbJ3ByaWNlJ11dIHx8ICcwJywgMTApLFxuICAgICAgICBvcHRpb25zOiBzYWZlUGFyc2VPcHRpb25zKHJvd1toZWFkZXJNYXBbJ29wdGlvbnMnXV0gfHwgJ3t9JyksXG4gICAgICAgIG5vdGVzOiByb3dbaGVhZGVyTWFwWydub3RlcyddXSB8fCAnJyxcbiAgICAgICAgaXNQYWlkOiByb3dbaGVhZGVyTWFwWydpc1BhaWQnXV0gPT09ICdUUlVFJyB8fCByb3dbaGVhZGVyTWFwWydpc1BhaWQnXV0gPT09IHRydWUsXG4gICAgfSkpO1xuXG4gICAgcmV0dXJuIHsgb3JkZXJEZXRhaWxzLCBkYWlseU9yZGVyIH07XG59XG5cbmV4cG9ydCB0eXBlIFVzZXJPcmRlckdyb3VwID0ge1xuICAgIGRhaWx5T3JkZXI6IERhaWx5T3JkZXI7XG4gICAgaXRlbXM6IE9yZGVyRGV0YWlsSXRlbVtdO1xuICAgIHRvdGFsOiBudW1iZXI7XG4gICAgbm90ZXM6IHN0cmluZztcbn1cblxuLyoqXG4gKiBSZXRyaWV2ZXMgYWxsIG9yZGVycyBmb3IgYSBzcGVjaWZpYyB1c2VyLCBncm91cGVkIGJ5IGRhaWx5IG9yZGVyLlxuICogQHBhcmFtIHtzdHJpbmd9IHVzZXJuYW1lIFRoZSB1c2VybmFtZSB0byBmZXRjaCBvcmRlcnMgZm9yLlxuICogQHJldHVybnMge1Byb21pc2U8VXNlck9yZGVyR3JvdXBbXT59IEEgbGlzdCBvZiB0aGUgdXNlcidzIG9yZGVycy5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE9yZGVyc0J5VXNlcm5hbWUodXNlcm5hbWU6IHN0cmluZyk6IFByb21pc2U8VXNlck9yZGVyR3JvdXBbXT4ge1xuICAgIC8vIDEuIEdldCBhbGwgZGFpbHkgb3JkZXJzIGFuZCBhbGwgb3JkZXIgaXRlbXNcbiAgICBjb25zdCBbYWxsRGFpbHlPcmRlcnMsIGFsbE9yZGVySXRlbXNEYXRhXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgZ2V0QWxsRGFpbHlPcmRlcnMoKSxcbiAgICAgICAgZ2V0U2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCBgJHtPUkRFUl9JVEVNU19TSEVFVF9OQU1FfSFBOk1gKVxuICAgIF0pO1xuXG4gICAgaWYgKGFsbE9yZGVySXRlbXNEYXRhLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIGNvbnN0IGl0ZW1zSGVhZGVycyA9IGFsbE9yZGVySXRlbXNEYXRhWzBdLm1hcChoID0+IFN0cmluZyhoKS50cmltKCkpO1xuICAgIGNvbnN0IGl0ZW1zSGVhZGVyTWFwID0gaXRlbXNIZWFkZXJzLnJlZHVjZSgoYWNjLCBoZWFkZXIsIGluZGV4KSA9PiB7XG4gICAgICAgIGFjY1toZWFkZXIudHJpbSgpXSA9IGluZGV4O1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgIH0sIHt9IGFzIFJlY29yZDxzdHJpbmcsIG51bWJlcj4pO1xuXG4gICAgLy8gQ2hlY2sgZm9yIHJlcXVpcmVkIGNvbHVtbnNcbiAgICBjb25zdCByZXF1aXJlZENvbHMgPSBbJ3VzZXJuYW1lJywgJ2RhaWx5T3JkZXJJZCcsICdpZCcsICd0aW1lc3RhbXAnLCAndmVuZG9ySWQnLCAndmVuZG9yTmFtZScsICdtZW51SXRlbUlkJywgJ2l0ZW1OYW1lJywgJ3F1YW50aXR5JywgJ3ByaWNlJywgJ29wdGlvbnMnLCAnbm90ZXMnLCAnaXNQYWlkJ107XG4gICAgZm9yIChjb25zdCBjb2wgb2YgcmVxdWlyZWRDb2xzKSB7XG4gICAgICAgIGlmIChpdGVtc0hlYWRlck1hcFtjb2xdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yOiBUaGUgJyR7T1JERVJfSVRFTVNfU0hFRVRfTkFNRX0nIHNoZWV0IGlzIG1pc3NpbmcgdGhlIHJlcXVpcmVkIGNvbHVtbjogJyR7Y29sfScuYCk7XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyAyLiBGaWx0ZXIgaXRlbXMgZm9yIHRoZSBzcGVjaWZpYyB1c2VybmFtZVxuICAgIGNvbnN0IHVzZXJJdGVtc1Jvd3MgPSBhbGxPcmRlckl0ZW1zRGF0YS5zbGljZSgxKS5maWx0ZXIocm93ID0+IHJvd1tpdGVtc0hlYWRlck1hcFsndXNlcm5hbWUnXV0gPT09IHVzZXJuYW1lKTtcbiAgICBcbiAgICBpZiAodXNlckl0ZW1zUm93cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIGNvbnN0IHVzZXJJdGVtczogT3JkZXJEZXRhaWxJdGVtW10gPSB1c2VySXRlbXNSb3dzLm1hcChyb3cgPT4gKHtcbiAgICAgICAgaWQ6IHJvd1tpdGVtc0hlYWRlck1hcFsnaWQnXV0gfHwgJycsXG4gICAgICAgIGRhaWx5T3JkZXJJZDogcm93W2l0ZW1zSGVhZGVyTWFwWydkYWlseU9yZGVySWQnXV0gfHwgJycsXG4gICAgICAgIHRpbWVzdGFtcDogcm93W2l0ZW1zSGVhZGVyTWFwWyd0aW1lc3RhbXAnXV0gfHwgJycsXG4gICAgICAgIHVzZXJuYW1lOiByb3dbaXRlbXNIZWFkZXJNYXBbJ3VzZXJuYW1lJ11dIHx8ICdOL0EnLFxuICAgICAgICB2ZW5kb3JJZDogcm93W2l0ZW1zSGVhZGVyTWFwWyd2ZW5kb3JJZCddXSB8fCAnJyxcbiAgICAgICAgdmVuZG9yTmFtZTogcm93W2l0ZW1zSGVhZGVyTWFwWyd2ZW5kb3JOYW1lJ11dIHx8ICcnLFxuICAgICAgICBtZW51SXRlbUlkOiByb3dbaXRlbXNIZWFkZXJNYXBbJ21lbnVJdGVtSWQnXV0gfHwgJycsXG4gICAgICAgIGl0ZW1OYW1lOiByb3dbaXRlbXNIZWFkZXJNYXBbJ2l0ZW1OYW1lJ11dIHx8ICdOL0EnLFxuICAgICAgICBxdWFudGl0eTogcGFyc2VJbnQocm93W2l0ZW1zSGVhZGVyTWFwWydxdWFudGl0eSddXSB8fCAnMCcsIDEwKSxcbiAgICAgICAgcHJpY2U6IHBhcnNlSW50KHJvd1tpdGVtc0hlYWRlck1hcFsncHJpY2UnXV0gfHwgJzAnLCAxMCksXG4gICAgICAgIG9wdGlvbnM6IHNhZmVQYXJzZU9wdGlvbnMocm93W2l0ZW1zSGVhZGVyTWFwWydvcHRpb25zJ11dIHx8ICd7fScpLFxuICAgICAgICBub3Rlczogcm93W2l0ZW1zSGVhZGVyTWFwWydub3RlcyddXSB8fCAnJyxcbiAgICAgICAgaXNQYWlkOiByb3dbaXRlbXNIZWFkZXJNYXBbJ2lzUGFpZCddXSA9PT0gJ1RSVUUnIHx8IHJvd1tpdGVtc0hlYWRlck1hcFsnaXNQYWlkJ11dID09PSB0cnVlLFxuICAgIH0pKTtcbiAgICBcbiAgICAvLyAzLiBHcm91cCBpdGVtcyBieSBkYWlseU9yZGVySWRcbiAgICBjb25zdCBncm91cGVkQnlEYWlseU9yZGVyID0gdXNlckl0ZW1zLnJlZHVjZSgoYWNjLCBpdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IGtleSA9IGl0ZW0uZGFpbHlPcmRlcklkO1xuICAgICAgICBpZiAoIWFjY1trZXldKSB7XG4gICAgICAgICAgICBhY2Nba2V5XSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIGFjY1trZXldLnB1c2goaXRlbSk7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30gYXMgUmVjb3JkPHN0cmluZywgT3JkZXJEZXRhaWxJdGVtW10+KTtcbiAgICBcbiAgICBcbiAgICAvLyA0LiBGb3JtYXQgdGhlIGZpbmFsIG91dHB1dFxuICAgIGNvbnN0IGFsbERhaWx5T3JkZXJzTWFwID0gbmV3IE1hcChhbGxEYWlseU9yZGVycy5tYXAobyA9PiBbby5pZCwgb10pKTtcbiAgICBjb25zdCByZXN1bHQ6IFVzZXJPcmRlckdyb3VwW10gPSBbXTtcblxuICAgIGZvciAoY29uc3QgZGFpbHlPcmRlcklkIGluIGdyb3VwZWRCeURhaWx5T3JkZXIpIHtcbiAgICAgICAgY29uc3QgZGFpbHlPcmRlciA9IGFsbERhaWx5T3JkZXJzTWFwLmdldChkYWlseU9yZGVySWQpO1xuICAgICAgICBpZiAoZGFpbHlPcmRlcikge1xuICAgICAgICAgICAgY29uc3QgaXRlbXMgPSBncm91cGVkQnlEYWlseU9yZGVyW2RhaWx5T3JkZXJJZF07XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAvLyBBZ2dyZWdhdGUgaXRlbXMgd2l0aCB0aGUgc2FtZSBtZW51SXRlbUlkIGFuZCBvcHRpb25zXG4gICAgICAgICAgICBjb25zdCBhZ2dyZWdhdGVkSXRlbXMgPSBpdGVtcy5yZWR1Y2UoKGFjYywgaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbnNTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShpdGVtLm9wdGlvbnMgfHwge30pO1xuICAgICAgICAgICAgICAgIGNvbnN0IGFnZ3JlZ2F0aW9uS2V5ID0gYCR7aXRlbS5tZW51SXRlbUlkfXwke29wdGlvbnNTdHJpbmd9YDtcbiAgICAgICAgICAgICAgICBpZiAoYWNjW2FnZ3JlZ2F0aW9uS2V5XSkge1xuICAgICAgICAgICAgICAgICAgICBhY2NbYWdncmVnYXRpb25LZXldLnF1YW50aXR5ICs9IGl0ZW0ucXVhbnRpdHk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYWNjW2FnZ3JlZ2F0aW9uS2V5XSA9IHsgLi4uaXRlbSB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgICAgfSwge30gYXMgUmVjb3JkPHN0cmluZywgT3JkZXJEZXRhaWxJdGVtPik7XG5cbiAgICAgICAgICAgIGNvbnN0IGZpbmFsSXRlbXMgPSBPYmplY3QudmFsdWVzKGFnZ3JlZ2F0ZWRJdGVtcyk7XG4gICAgICAgICAgICBjb25zdCB0b3RhbCA9IGZpbmFsSXRlbXMucmVkdWNlKChzdW0sIGl0ZW0pID0+IHN1bSArIGl0ZW0ucHJpY2UgKiBpdGVtLnF1YW50aXR5LCAwKTtcbiAgICAgICAgICAgIGNvbnN0IG5vdGVzID0gaXRlbXMubGVuZ3RoID4gMCA/IGl0ZW1zWzBdLm5vdGVzIDogJyc7IFxuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgZGFpbHlPcmRlcixcbiAgICAgICAgICAgICAgICBpdGVtczogZmluYWxJdGVtcyxcbiAgICAgICAgICAgICAgICB0b3RhbCxcbiAgICAgICAgICAgICAgICBub3RlcyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8vIDUuIFNvcnQgdGhlIGZpbmFsIGdyb3VwcyBieSBkYXRlLCBtb3N0IHJlY2VudCBmaXJzdFxuICAgIHJlc3VsdC5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGVBID0gbmV3IERhdGUoYCR7YS5kYWlseU9yZGVyLmRhdGV9VCR7YS5kYWlseU9yZGVyLmRlYWRsaW5lfWApO1xuICAgICAgICBjb25zdCBkYXRlQiA9IG5ldyBEYXRlKGAke2IuZGFpbHlPcmRlci5kYXRlfVQke2IuZGFpbHlPcmRlci5kZWFkbGluZX1gKTtcbiAgICAgICAgcmV0dXJuIGRhdGVCLmdldFRpbWUoKSAtIGRhdGVBLmdldFRpbWUoKTtcbiAgICB9KTtcblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogUmV0cmlldmVzIGEgdXNlcidzIHNwZWNpZmljIG9yZGVyIGZvciBhIGdpdmVuIGRhaWx5IG9yZGVyLCBmb3JtYXR0ZWQgZm9yIGVkaXRpbmcuXG4gKiBAcGFyYW0ge3N0cmluZ30gdXNlcm5hbWUgVGhlIHVzZXJuYW1lLlxuICogQHBhcmFtIHtzdHJpbmd9IGRhaWx5T3JkZXJJZCBUaGUgSUQgb2YgdGhlIGRhaWx5IG9yZGVyLlxuICogQHJldHVybnMge1Byb21pc2U8T3JkZXJJdGVtW10+fSBBIGxpc3Qgb2Ygb3JkZXIgaXRlbXMgcmVhZHkgZm9yIHRoZSBjYXJ0LlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RXhpc3RpbmdPcmRlckZvckVkaXQodXNlcm5hbWU6IHN0cmluZywgZGFpbHlPcmRlcklkOiBzdHJpbmcpOiBQcm9taXNlPE9yZGVySXRlbVtdPiB7XG4gIGNvbnN0IGFsbE9yZGVySXRlbXNEYXRhID0gYXdhaXQgZ2V0U2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCBgJHtPUkRFUl9JVEVNU19TSEVFVF9OQU1FfSFBOk1gKTtcbiAgaWYgKGFsbE9yZGVySXRlbXNEYXRhLmxlbmd0aCA8IDIpIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICBjb25zdCBpdGVtc0hlYWRlcnMgPSBhbGxPcmRlckl0ZW1zRGF0YVswXS5tYXAoaCA9PiBTdHJpbmcoaCkudHJpbSgpKTtcbiAgY29uc3QgaXRlbXNIZWFkZXJNYXAgPSBpdGVtc0hlYWRlcnMucmVkdWNlKChhY2MsIGhlYWRlciwgaW5kZXgpID0+IHtcbiAgICBhY2NbaGVhZGVyXSA9IGluZGV4O1xuICAgIHJldHVybiBhY2M7XG4gIH0sIHt9IGFzIFJlY29yZDxzdHJpbmcsIG51bWJlcj4pO1xuXG4gIGNvbnN0IHVzZXJJdGVtc1Jvd3MgPSBhbGxPcmRlckl0ZW1zRGF0YVxuICAgIC5zbGljZSgxKVxuICAgIC5maWx0ZXIocm93ID0+IHJvd1tpdGVtc0hlYWRlck1hcFsndXNlcm5hbWUnXV0gPT09IHVzZXJuYW1lICYmIHJvd1tpdGVtc0hlYWRlck1hcFsnZGFpbHlPcmRlcklkJ11dID09PSBkYWlseU9yZGVySWQpO1xuXG4gIGlmICh1c2VySXRlbXNSb3dzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICBcbiAgLy8gSGVscGVyIHRvIHJlLWdlbmVyYXRlIHRoZSBjb21wb3NpdGUgaXRlbSBJRCBmb3IgdGhlIGNhcnRcbiAgY29uc3QgZ2VuZXJhdGVPcmRlckl0ZW1JZCA9IChpdGVtSWQ6IHN0cmluZywgb3B0aW9uczogUmVjb3JkPHN0cmluZywgc3RyaW5nPikgPT4ge1xuICAgIGlmIChPYmplY3Qua2V5cyhvcHRpb25zKS5sZW5ndGggPT09IDApIHJldHVybiBpdGVtSWQ7XG4gICAgY29uc3Qgc29ydGVkU2VsZWN0aW9ucyA9IE9iamVjdC5rZXlzKG9wdGlvbnMpLnNvcnQoKS5tYXAoa2V5ID0+IGAke2tleX06JHtvcHRpb25zW2tleV19YCkuam9pbignfCcpO1xuICAgIHJldHVybiBgJHtpdGVtSWR9WyR7c29ydGVkU2VsZWN0aW9uc31dYDtcbiAgfVxuXG4gIGNvbnN0IG9yZGVySXRlbXM6IE9yZGVySXRlbVtdID0gdXNlckl0ZW1zUm93cy5tYXAocm93ID0+IHtcbiAgICBjb25zdCBvcHRpb25zID0gc2FmZVBhcnNlT3B0aW9ucyhyb3dbaXRlbXNIZWFkZXJNYXBbJ29wdGlvbnMnXV0gfHwgJ3t9Jyk7XG4gICAgY29uc3QgbWVudUl0ZW1JZCA9IHJvd1tpdGVtc0hlYWRlck1hcFsnbWVudUl0ZW1JZCddXTtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IGdlbmVyYXRlT3JkZXJJdGVtSWQobWVudUl0ZW1JZCwgb3B0aW9ucyksXG4gICAgICBtZW51SXRlbUlkOiBtZW51SXRlbUlkLFxuICAgICAgbmFtZTogcm93W2l0ZW1zSGVhZGVyTWFwWydpdGVtTmFtZSddXSB8fCAnJyxcbiAgICAgIHByaWNlOiBwYXJzZUludChyb3dbaXRlbXNIZWFkZXJNYXBbJ3ByaWNlJ11dIHx8ICcwJywgMTApLFxuICAgICAgcXVhbnRpdHk6IHBhcnNlSW50KHJvd1tpdGVtc0hlYWRlck1hcFsncXVhbnRpdHknXV0gfHwgJzAnLCAxMCksXG4gICAgICB2ZW5kb3JOYW1lOiByb3dbaXRlbXNIZWFkZXJNYXBbJ3ZlbmRvck5hbWUnXV0gfHwgJycsXG4gICAgICB2ZW5kb3JJZDogcm93W2l0ZW1zSGVhZGVyTWFwWyd2ZW5kb3JJZCddXSB8fCAnJyxcbiAgICAgIHVzZXJuYW1lOiB1c2VybmFtZSxcbiAgICAgIG9wdGlvbnM6IG9wdGlvbnMsXG4gICAgICBub3Rlczogcm93W2l0ZW1zSGVhZGVyTWFwWydub3RlcyddXSB8fCAnJyxcbiAgICB9O1xuICB9KTtcbiAgXG4gIHJldHVybiBvcmRlckl0ZW1zO1xufVxuXG5cbi8qKlxuICogRGVsZXRlcyBhIHVzZXIncyBlbnRpcmUgb3JkZXIgZm9yIGEgc3BlY2lmaWMgZGFpbHkgb3JkZXIuXG4gKiBAcGFyYW0ge29iamVjdH0gcGFyYW1zIC0gVGhlIHBhcmFtZXRlcnMgZm9yIGRlbGV0aW5nIHRoZSBvcmRlci5cbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXMudXNlcm5hbWUgLSBUaGUgdXNlcm5hbWUgb2YgdGhlIHVzZXIuXG4gKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1zLmRhaWx5T3JkZXJJZCAtIFRoZSBJRCBvZiB0aGUgZGFpbHkgb3JkZXIgdG8gZGVsZXRlLlxuICogQHJldHVybnMge1Byb21pc2U8e3N1Y2Nlc3M6IGJvb2xlYW59Pn0gQSBzdWNjZXNzIGZsYWcuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVVc2VyT3JkZXIoeyB1c2VybmFtZSwgZGFpbHlPcmRlcklkIH06IHsgdXNlcm5hbWU6IHN0cmluZywgZGFpbHlPcmRlcklkOiBzdHJpbmcgfSk6IFByb21pc2U8eyBzdWNjZXNzOiBib29sZWFuIH0+IHtcbiAgICBjb25zdCBbb3JkZXJJdGVtc0RhdGFXaXRoSGVhZGVyXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgZ2V0U2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCBgJHtPUkRFUl9JVEVNU19TSEVFVF9OQU1FfSFBOk1gKSxcbiAgICBdKTtcblxuICAgIGlmIChvcmRlckl0ZW1zRGF0YVdpdGhIZWFkZXIubGVuZ3RoIDwgMikge1xuICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9OyAvLyBObyBpdGVtcyB0byBkZWxldGVcbiAgICB9XG5cbiAgICBjb25zdCBpdGVtc0hlYWRlcnMgPSBvcmRlckl0ZW1zRGF0YVdpdGhIZWFkZXJbMF07XG4gICAgY29uc3QgaXRlbXNSb3dzID0gb3JkZXJJdGVtc0RhdGFXaXRoSGVhZGVyLnNsaWNlKDEpO1xuICAgIFxuICAgIGNvbnN0IGhlYWRlck1hcCA9IGl0ZW1zSGVhZGVycy5yZWR1Y2UoKGFjYywgaCwgaSkgPT4geyBhY2NbU3RyaW5nKGgpXSA9IGk7IHJldHVybiBhY2M7IH0sIHt9IGFzIFJlY29yZDxzdHJpbmcsIG51bWJlcj4pO1xuICAgIGNvbnN0IGRhaWx5T3JkZXJJZEluZGV4ID0gaGVhZGVyTWFwWydkYWlseU9yZGVySWQnXTtcbiAgICBjb25zdCB1c2VybmFtZUluZGV4ID0gaGVhZGVyTWFwWyd1c2VybmFtZSddO1xuXG4gICAgaWYgKGRhaWx5T3JkZXJJZEluZGV4ID09PSB1bmRlZmluZWQgfHwgdXNlcm5hbWVJbmRleCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSAnb3JkZXJfaXRlbXMnIHNoZWV0IGlzIG1pc3NpbmcgcmVxdWlyZWQgY29sdW1ucyAnZGFpbHlPcmRlcklkJyBvciAndXNlcm5hbWUnLlwiKTtcbiAgICB9XG5cbiAgICBjb25zdCBpdGVtc1RvS2VlcCA9IGl0ZW1zUm93cy5maWx0ZXIocm93ID0+IFxuICAgICAgICAhKHJvd1tkYWlseU9yZGVySWRJbmRleF0gPT09IGRhaWx5T3JkZXJJZCAmJiByb3dbdXNlcm5hbWVJbmRleF0gPT09IHVzZXJuYW1lKVxuICAgICk7XG4gICAgXG4gICAgYXdhaXQgYmF0Y2hVcGRhdGVTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIFt7XG4gICAgICAgIHJhbmdlOiBgJHtPUkRFUl9JVEVNU19TSEVFVF9OQU1FfSFBMTpNYCxcbiAgICAgICAgdmFsdWVzOiBbaXRlbXNIZWFkZXJzLCAuLi5pdGVtc1RvS2VlcF0sXG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJtU0Fvb0JzQiJ9
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
                                                            children: value
                                                        }, key, false, {
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
                    lineNumber: 29,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/select.tsx",
                lineNumber: 28,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 19,
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
            lineNumber: 47,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 39,
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
            lineNumber: 64,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 56,
        columnNumber: 3
    }, this));
SelectScrollDownButton.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollDownButton"].displayName;
const SelectContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, children, position = "popper", ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
            ref: ref,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
            position: position,
            ...props,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollUpButton, {}, void 0, false, {
                    fileName: "[project]/src/components/ui/select.tsx",
                    lineNumber: 86,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Viewport"], {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
                    children: children
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/select.tsx",
                    lineNumber: 87,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollDownButton, {}, void 0, false, {
                    fileName: "[project]/src/components/ui/select.tsx",
                    lineNumber: 96,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/select.tsx",
            lineNumber: 75,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 74,
        columnNumber: 3
    }, this));
SelectContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"].displayName;
const SelectLabel = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("py-1.5 pl-8 pr-2 text-sm font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 106,
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
                        lineNumber: 128,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/select.tsx",
                    lineNumber: 127,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/select.tsx",
                lineNumber: 126,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ItemText"], {
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/ui/select.tsx",
                lineNumber: 132,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 118,
        columnNumber: 3
    }, this));
SelectItem.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Item"].displayName;
const SelectSeparator = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Separator"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("-mx-1 my-1 h-px bg-muted", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 141,
        columnNumber: 3
    }, this));
SelectSeparator.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Separator"].displayName;
;
}}),
"[project]/src/ai/flows/data:6aa58c [app-ssr] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"60d3c7fd04147818c0059b0825992570c612535cab":"submitOrder"},"src/ai/flows/order-flow.ts",""] */ __turbopack_context__.s({
    "submitOrder": (()=>submitOrder)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var submitOrder = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("60d3c7fd04147818c0059b0825992570c612535cab", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "submitOrder"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vb3JkZXItZmxvdy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbid1c2Ugc2VydmVyJztcblxuaW1wb3J0IHsgZ2V0U2hlZXREYXRhLCBhcHBlbmRTaGVldERhdGEsIGdldEhlYWRlcnMsIHVwZGF0ZVNoZWV0RGF0YSwgYmF0Y2hVcGRhdGVTaGVldERhdGEgfSBmcm9tICdAL3NlcnZpY2VzL3NoZWV0LXNlcnZpY2UnO1xuaW1wb3J0IHsgZ2V0VmVuZG9ycywgdHlwZSBWZW5kb3IgfSBmcm9tICcuL3ZlbmRvci1mbG93JztcbmltcG9ydCB7IHR5cGUgRmluYWxPcmRlciwgdHlwZSBPcmRlckl0ZW0gfSBmcm9tICdAL2NvbXBvbmVudHMvT3JkZXJTdW1tYXJ5JztcbmltcG9ydCB7IFB1Ymxpc2hPcmRlclJlcXVlc3RTY2hlbWEsIHR5cGUgUHVibGlzaE9yZGVyUmVxdWVzdCB9IGZyb20gJ0AvbGliL3NjaGVtYS9vcmRlcic7XG5pbXBvcnQgeyBmb3JtYXQsIHBhcnNlLCBwYXJzZUlTTywgaXNWYWxpZCB9IGZyb20gJ2RhdGUtZm5zJztcblxuY29uc3QgU1BSRUFEU0hFRVRfSUQgPSAnMVpqMmgwY1lscmIybUJhTmdsMS1Qb09LN3RsQ0N3RGNjQVhuNXc2NmhwNGMnO1xuY29uc3QgREFJTFlfT1JERVJTX1NIRUVUX05BTUUgPSAnZGFpbHlfb3JkZXJzJztcbmNvbnN0IE9SREVSX0lURU1TX1NIRUVUX05BTUUgPSAnb3JkZXJfaXRlbXMnO1xuXG5leHBvcnQgdHlwZSBEYWlseU9yZGVyID0ge1xuICAgIGlkOiBzdHJpbmc7XG4gICAgZGF0ZTogc3RyaW5nO1xuICAgIHZlbmRvcklkOiBzdHJpbmc7XG4gICAgdmVuZG9yTmFtZT86IHN0cmluZzsgLy8gT3B0aW9uYWw6IGZvciBkaXNwbGF5IG9uIGFkbWluIHBhZ2VcbiAgICBkZWFkbGluZTogc3RyaW5nO1xufTtcblxuLy8gVGhpcyB0eXBlIGlzIGZvciB0aGUgdXNlci1mYWNpbmcgb3JkZXIgcGFnZVxuZXhwb3J0IHR5cGUgQXZhaWxhYmxlT3JkZXIgPSB7XG4gICAgaWQ6IHN0cmluZzsgLy8gZGFpbHlPcmRlcklkXG4gICAgdmVuZG9yOiBWZW5kb3I7XG4gICAgZGF0ZTogc3RyaW5nO1xuICAgIGRlYWRsaW5lOiBzdHJpbmc7XG59O1xuXG4vLyBIZWxwZXIgdG8gc2FmZWx5IHBhcnNlIHRoZSBvcHRpb25zIHN0cmluZywgd2hpY2ggbWlnaHQgbm90IGJlIHZhbGlkIEpTT05cbmNvbnN0IHNhZmVQYXJzZU9wdGlvbnMgPSAob3B0aW9uc1N0cjogc3RyaW5nKTogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9PiB7XG4gICAgaWYgKCFvcHRpb25zU3RyKSByZXR1cm4ge307XG4gICAgdHJ5IHtcbiAgICAgIC8vIEZpcnN0LCBjaGVjayBpZiBpdCdzIGFscmVhZHkgYSBKU09OIHN0cmluZ1xuICAgICAgaWYgKG9wdGlvbnNTdHIudHJpbSgpLnN0YXJ0c1dpdGgoJ3snKSkge1xuICAgICAgICAgIGNvbnN0IHBhcnNlZCA9IEpTT04ucGFyc2Uob3B0aW9uc1N0cik7XG4gICAgICAgICAgcmV0dXJuIHR5cGVvZiBwYXJzZWQgPT09ICdvYmplY3QnICYmIHBhcnNlZCAhPT0gbnVsbCA/IHBhcnNlZCA6IHt9O1xuICAgICAgfVxuICAgICAgLy8gSWYgaXQncyBub3QgYSBKU09OIHN0cmluZywgaXQgbWlnaHQgYmUgaW4gdGhlIFwia2V5OnZhbHVlLGtleTI6dmFsdWUyXCIgZm9ybWF0XG4gICAgICAvLyB3aGljaCB3ZSBjYW4ndCByZWxpYWJseSBwYXJzZSBiYWNrIHRvIGEgc3RydWN0dXJlZCBvYmplY3QgaGVyZS5cbiAgICAgIC8vIEZvciBub3csIGlmIGl0J3Mgbm90IGEgdmFsaWQgSlNPTiwgd2UgcmV0dXJuIGFuIGVtcHR5IG9iamVjdCB0byBwcmV2ZW50IGNyYXNoZXMuXG4gICAgICByZXR1cm4ge307XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS53YXJuKGBDb3VsZCBub3QgcGFyc2Ugb3B0aW9ucyBzdHJpbmc6IFwiJHtvcHRpb25zU3RyfVwiYCwgZSk7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxufVxuXG5cbi8vIEhlbHBlciBmdW5jdGlvbiB0byBmb3JtYXQgdGltZSBmcm9tIFNoZWV0cyAod2hpY2ggY2FuIGJlIGEgbnVtYmVyKVxuY29uc3QgZm9ybWF0VGltZSA9ICh0aW1lVmFsdWU6IGFueSk6IHN0cmluZyA9PiB7XG4gICAgaWYgKHR5cGVvZiB0aW1lVmFsdWUgPT09ICdzdHJpbmcnICYmIHRpbWVWYWx1ZS5tYXRjaCgvXlxcZHsyfTpcXGR7Mn0oOlxcZHsyfSk/JC8pKSB7XG4gICAgICAgIHJldHVybiB0aW1lVmFsdWUuc3Vic3RyaW5nKDAsIDUpO1xuICAgIH1cbiAgICBcbiAgICBpZiAodHlwZW9mIHRpbWVWYWx1ZSA9PT0gJ251bWJlcicgJiYgdGltZVZhbHVlID4gMCAmJiB0aW1lVmFsdWUgPCAxKSB7XG4gICAgICAvLyBJdCdzIGEgdGltZSBzZXJpYWwgbnVtYmVyIGZyb20gU2hlZXRzXG4gICAgICBjb25zdCB0b3RhbFNlY29uZHMgPSBNYXRoLnJvdW5kKHRpbWVWYWx1ZSAqIDg2NDAwKTtcbiAgICAgIGNvbnN0IGhvdXJzID0gTWF0aC5mbG9vcih0b3RhbFNlY29uZHMgLyAzNjAwKTtcbiAgICAgIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKCh0b3RhbFNlY29uZHMgJSAzNjAwKSAvIDYwKTtcbiAgICAgIHJldHVybiBgJHtob3Vycy50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyl9OiR7bWludXRlcy50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyl9YDtcbiAgICB9XG5cbiAgICAvLyBUcnkgcGFyc2luZyBhcyBhIGRhdGUgc3RyaW5nIHRvIGV4dHJhY3QgdGltZVxuICAgIGlmICh0eXBlb2YgdGltZVZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgZGF0ZSA9IHBhcnNlSVNPKHRpbWVWYWx1ZSk7XG4gICAgICAgICAgICBpZiAoaXNWYWxpZChkYXRlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmb3JtYXQoZGF0ZSwgJ0hIOm1tJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIC8vIElnbm9yZSBwYXJzZSBlcnJvcnMgZnJvbSBJU09cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY29uc3QgdGltZU1hdGNoID0gdGltZVZhbHVlLm1hdGNoKC8oXFxkezJ9OlxcZHsyfSkvKTtcbiAgICAgICAgaWYgKHRpbWVNYXRjaCkgcmV0dXJuIHRpbWVNYXRjaFswXTtcbiAgICB9XG4gICAgXG4gICAgLy8gRmFsbGJhY2sgZm9yIHVuZXhwZWN0ZWQgZm9ybWF0c1xuICAgIHJldHVybiAnMDA6MDAnOyBcbn07XG5cbi8vIEhlbHBlciBmdW5jdGlvbiB0byBmb3JtYXQgZGF0ZSBmcm9tIFNoZWV0cyAod2hpY2ggY2FuIGJlIGEgbnVtYmVyIG9yIHN0cmluZylcbmNvbnN0IGZvcm1hdERhdGUgPSAoZGF0ZVZhbHVlOiBhbnkpOiBzdHJpbmcgPT4ge1xuICAgIGlmICghZGF0ZVZhbHVlKSByZXR1cm4gZm9ybWF0KG5ldyBEYXRlKCksICd5eXl5LU1NLWRkJyk7IC8vIFJldHVybiB0b2RheSdzIGRhdGUgaWYgZW1wdHlcblxuICAgIGxldCBkYXRlO1xuICAgIFxuICAgIC8vIEhhbmRsZSBTaGVldHMgZGF0ZSBzZXJpYWwgbnVtYmVyIChudW1iZXIgb2YgZGF5cyBzaW5jZSAxODk5LTEyLTMwKVxuICAgIGlmICh0eXBlb2YgZGF0ZVZhbHVlID09PSAnbnVtYmVyJykge1xuICAgICAgICBjb25zdCBleGNlbEVwb2NoID0gbmV3IERhdGUoRGF0ZS5VVEMoMTg5OSwgMTEsIDMwKSk7XG4gICAgICAgIGRhdGUgPSBuZXcgRGF0ZShleGNlbEVwb2NoLmdldFRpbWUoKSArIGRhdGVWYWx1ZSAqIDg2NDAwMDAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBIYW5kbGUgSVNPIHN0cmluZyBsaWtlICcyMDI0LTA3LTI1VDAwOjAwOjAwLjAwMFonIG9yIHNpbXBsZSBzdHJpbmcgJzIwMjQtMDctMjUnXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgIGRhdGUgPSBwYXJzZUlTTyhTdHJpbmcoZGF0ZVZhbHVlKSk7XG4gICAgICAgICAgIC8vIElmIElTTyBwYXJzaW5nIGZhaWxzLCB0cnkgdGhlIHNpbXBsZSBmb3JtYXRcbiAgICAgICAgICAgaWYgKCFpc1ZhbGlkKGRhdGUpKSB7XG4gICAgICAgICAgICAgICBkYXRlID0gcGFyc2UoU3RyaW5nKGRhdGVWYWx1ZSksICd5eXl5LU1NLWRkJywgbmV3IERhdGUoKSk7XG4gICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgIGRhdGUgPSBwYXJzZShTdHJpbmcoZGF0ZVZhbHVlKSwgJ3l5eXktTU0tZGQnLCBuZXcgRGF0ZSgpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvLyBJZiBkYXRlIGlzIHZhbGlkLCBmb3JtYXQgaXQsIG90aGVyd2lzZSByZXR1cm4gdG9kYXkncyBkYXRlIGFzIGEgZmFsbGJhY2tcbiAgICByZXR1cm4gaXNWYWxpZChkYXRlKSA/IGZvcm1hdChkYXRlLCAneXl5eS1NTS1kZCcpIDogZm9ybWF0KG5ldyBEYXRlKCksICd5eXl5LU1NLWRkJyk7XG59O1xuXG5cbi8qKlxuICogUmV0cmlldmVzIGFsbCBhdmFpbGFibGUgb3JkZXJzIGZyb20gdGhlIGRhaWx5X29yZGVycyBzaGVldC5cbiAqIEFueSBvcmRlciBwcmVzZW50IGlzIGNvbnNpZGVyZWQgYXZhaWxhYmxlLlxuICogQHJldHVybnMge1Byb21pc2U8QXZhaWxhYmxlT3JkZXJbXT59IEEgbGlzdCBvZiBhdmFpbGFibGUgdmVuZG9ycyBhbmQgdGhlaXIgZGVhZGxpbmVzLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QXZhaWxhYmxlT3JkZXJzKCk6IFByb21pc2U8QXZhaWxhYmxlT3JkZXJbXT4ge1xuICAgIGNvbnN0IGRhaWx5T3JkZXJzUmFuZ2UgPSBgJHtEQUlMWV9PUkRFUlNfU0hFRVRfTkFNRX0hQTpEYDtcbiAgICBjb25zdCBbZGFpbHlPcmRlcnNEYXRhLCBhbGxWZW5kb3JzXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgZ2V0U2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCBkYWlseU9yZGVyc1JhbmdlKSxcbiAgICAgICAgZ2V0VmVuZG9ycygpXG4gICAgXSk7XG5cbiAgICBpZiAoIWRhaWx5T3JkZXJzRGF0YSB8fCBkYWlseU9yZGVyc0RhdGEubGVuZ3RoIDwgMikge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGhlYWRlciA9IGRhaWx5T3JkZXJzRGF0YVswXTtcbiAgICBjb25zdCByb3dzID0gZGFpbHlPcmRlcnNEYXRhLnNsaWNlKDEpO1xuXG4gICAgY29uc3QgaGVhZGVyTWFwID0gaGVhZGVyLnJlZHVjZSgoYWNjLCBoLCBpKSA9PiB7XG4gICAgICAgIGFjY1tTdHJpbmcoaCldID0gaTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB7fSBhcyBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+KTtcblxuICAgIGNvbnN0IGFsbFZlbmRvcnNNYXAgPSBuZXcgTWFwKGFsbFZlbmRvcnMubWFwKHYgPT4gW3YudmVuZG9ySWQsIHZdKSk7XG5cbiAgICBjb25zdCBhdmFpbGFibGVPcmRlcnM6IEF2YWlsYWJsZU9yZGVyW10gPSBbXTtcblxuICAgIGZvciAoY29uc3Qgcm93IG9mIHJvd3MpIHtcbiAgICAgICAgaWYgKHJvdy5ldmVyeShjZWxsID0+ICFjZWxsKSkgY29udGludWU7IC8vIFNraXAgY29tcGxldGVseSBlbXB0eSByb3dzXG5cbiAgICAgICAgY29uc3QgaWQgPSByb3dbaGVhZGVyTWFwWydpZCddXTtcbiAgICAgICAgY29uc3QgdmVuZG9ySWQgPSByb3dbaGVhZGVyTWFwWyd2ZW5kb3JJZCddXTtcbiAgICAgICAgY29uc3QgZGF0ZVJhdyA9IHJvd1toZWFkZXJNYXBbJ2RhdGUnXV07XG4gICAgICAgIGNvbnN0IGRlYWRsaW5lUmF3ID0gcm93W2hlYWRlck1hcFsnZGVhZGxpbmUnXV07XG5cbiAgICAgICAgaWYgKCFpZCB8fCAhdmVuZG9ySWQpIGNvbnRpbnVlOyAvLyBTa2lwIHJvd3Mgd2l0aG91dCBlc3NlbnRpYWwgZGF0YVxuXG4gICAgICAgIGNvbnN0IHZlbmRvciA9IGFsbFZlbmRvcnNNYXAuZ2V0KHZlbmRvcklkKTtcbiAgICAgICAgaWYgKCF2ZW5kb3IgfHwgIXZlbmRvci5pc0FjdGl2ZSkgY29udGludWU7XG5cbiAgICAgICAgYXZhaWxhYmxlT3JkZXJzLnB1c2goe1xuICAgICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgICAgdmVuZG9yLFxuICAgICAgICAgICAgZGF0ZTogZm9ybWF0RGF0ZShkYXRlUmF3KSxcbiAgICAgICAgICAgIGRlYWRsaW5lOiBmb3JtYXRUaW1lKGRlYWRsaW5lUmF3KSAvLyBGb3JtYXQgdGhlIGRlYWRsaW5lXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhdmFpbGFibGVPcmRlcnM7XG59XG5cbi8qKlxuICogUmV0cmlldmVzIGFsbCBkYWlseSBvcmRlcnMgZm9yIGFkbWluIGRpc3BsYXkuXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxEYWlseU9yZGVyW10+fSBBIGxpc3Qgb2YgYWxsIHB1Ymxpc2hlZCBvcmRlcnMuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxEYWlseU9yZGVycygpOiBQcm9taXNlPERhaWx5T3JkZXJbXT4ge1xuICAgIGNvbnN0IGRhaWx5T3JkZXJzUmFuZ2UgPSBgJHtEQUlMWV9PUkRFUlNfU0hFRVRfTkFNRX0hQTpEYDtcbiAgICAgY29uc3QgW2RhaWx5T3JkZXJzRGF0YSwgYWxsVmVuZG9yc10gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgIGdldFNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgZGFpbHlPcmRlcnNSYW5nZSksXG4gICAgICAgIGdldFZlbmRvcnMoKVxuICAgIF0pO1xuICAgIFxuICAgIGlmICghZGFpbHlPcmRlcnNEYXRhIHx8IGRhaWx5T3JkZXJzRGF0YS5sZW5ndGggPCAyKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICBjb25zdCBoZWFkZXIgPSBkYWlseU9yZGVyc0RhdGFbMF07XG4gICAgY29uc3Qgcm93cyA9IGRhaWx5T3JkZXJzRGF0YS5zbGljZSgxKTtcbiAgICBjb25zdCBhbGxWZW5kb3JzTWFwID0gbmV3IE1hcChhbGxWZW5kb3JzLm1hcCh2ID0+IFt2LnZlbmRvcklkLCB2XSkpO1xuICAgIFxuICAgIGNvbnN0IGhlYWRlck1hcCA9IGhlYWRlci5yZWR1Y2UoKGFjYywgaCwgaSkgPT4ge1xuICAgICAgICBhY2NbU3RyaW5nKGgpXSA9IGk7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30gYXMgUmVjb3JkPHN0cmluZywgbnVtYmVyPik7XG5cbiAgICBjb25zdCBvcmRlcnMgPSByb3dzLm1hcChyb3cgPT4ge1xuICAgICAgICBjb25zdCB2ZW5kb3JJZCA9IHJvd1toZWFkZXJNYXBbJ3ZlbmRvcklkJ11dO1xuICAgICAgICBjb25zdCB2ZW5kb3IgPSBhbGxWZW5kb3JzTWFwLmdldCh2ZW5kb3JJZCk7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaWQ6IHJvd1toZWFkZXJNYXBbJ2lkJ11dIHx8ICcnLFxuICAgICAgICAgICAgZGF0ZTogZm9ybWF0RGF0ZShyb3dbaGVhZGVyTWFwWydkYXRlJ11dKSxcbiAgICAgICAgICAgIHZlbmRvcklkOiB2ZW5kb3JJZCB8fCAnJyxcbiAgICAgICAgICAgIHZlbmRvck5hbWU6IHZlbmRvciA/IHZlbmRvci52ZW5kb3JOYW1lIDogJ+acquefpeW6l+WuticsXG4gICAgICAgICAgICBkZWFkbGluZTogZm9ybWF0VGltZShyb3dbaGVhZGVyTWFwWydkZWFkbGluZSddXSlcbiAgICAgICAgfTtcbiAgICB9KS5maWx0ZXIob3JkZXIgPT4gb3JkZXIuaWQpOyAvLyBGaWx0ZXIgb3V0IGFueSBlbXB0eSByb3dzXG5cbiAgICAvLyBTb3J0IG9yZGVycyBieSBkYXRlIGFuZCB0aGVuIGJ5IGRlYWRsaW5lLCBhc2NlbmRpbmcgKGNsb3Nlc3QgZmlyc3QpXG4gICAgb3JkZXJzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgY29uc3QgZGF0ZUEgPSBuZXcgRGF0ZShgJHthLmRhdGV9VCR7YS5kZWFkbGluZX1gKTtcbiAgICAgICAgY29uc3QgZGF0ZUIgPSBuZXcgRGF0ZShgJHtiLmRhdGV9VCR7Yi5kZWFkbGluZX1gKTtcbiAgICAgICAgcmV0dXJuIGRhdGVBLmdldFRpbWUoKSAtIGRhdGVCLmdldFRpbWUoKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBvcmRlcnM7XG59XG5cblxuLyoqXG4gKiBQdWJsaXNoZXMgYSBuZXcgb3JkZXIgZm9yIGEgc3BlY2lmaWMgZGF0ZSwgdmVuZG9yIGFuZCBkZWFkbGluZS5cbiAqIEBwYXJhbSB7UHVibGlzaE9yZGVyUmVxdWVzdH0gcmVxIC0gVGhlIHJlcXVlc3QgY29udGFpbmluZyBkYXRlLCB2ZW5kb3JJZCBhbmQgZGVhZGxpbmUuXG4gKiBAcmV0dXJucyB7UHJvbWlzZTx7c3VjY2VzczogYm9vbGVhbn0+fSBBIHN1Y2Nlc3MgZmxhZy5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHB1Ymxpc2hPcmRlcihyZXE6IFB1Ymxpc2hPcmRlclJlcXVlc3QpOiBQcm9taXNlPHsgc3VjY2VzczogYm9vbGVhbiB9PiB7XG4gIGNvbnN0IHZhbGlkYXRpb24gPSBQdWJsaXNoT3JkZXJSZXF1ZXN0U2NoZW1hLnNhZmVQYXJzZShyZXEpO1xuICBpZiAoIXZhbGlkYXRpb24uc3VjY2Vzcykge1xuICAgIGNvbnN0IGVycm9yTXNnID0gdmFsaWRhdGlvbi5lcnJvci5lcnJvcnMubWFwKGUgPT4gYCR7ZS5wYXRoLmpvaW4oJy4nKX06ICR7ZS5tZXNzYWdlfWApLmpvaW4oJywgJyk7XG4gICAgdGhyb3cgbmV3IEVycm9yKGDovLjlhaXos4fmlpnmnInoqqQ6ICR7ZXJyb3JNc2d9YCk7XG4gIH1cblxuICBjb25zdCBhbGxPcmRlcnNSYW5nZSA9IGAke0RBSUxZX09SREVSU19TSEVFVF9OQU1FfSFBMjpBYDtcbiAgY29uc3QgYWxsT3JkZXJJZHNEYXRhID0gYXdhaXQgZ2V0U2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCBhbGxPcmRlcnNSYW5nZSk7XG4gICAgY29uc3QgbGFzdElkTnVtID0gYWxsT3JkZXJJZHNEYXRhLmxlbmd0aCA+IDAgXG4gICAgICAgID8gTWF0aC5tYXgoMCwgLi4uYWxsT3JkZXJJZHNEYXRhLm1hcChyb3cgPT4gcGFyc2VJbnQoKHJvd1swXSB8fCAnZG8wJykucmVwbGFjZSgnZG8nLCAnJyksIDEwKSkuZmlsdGVyKG51bSA9PiAhaXNOYU4obnVtKSkpXG4gICAgICAgIDogMDtcbiAgY29uc3QgbmV3SWQgPSBgZG8keyhsYXN0SWROdW0gKyAxKS50b1N0cmluZygpLnBhZFN0YXJ0KDMsICcwJyl9YDtcblxuICBjb25zdCB2YWx1ZXMgPSBbXG4gICAgW25ld0lkLCByZXEuZGF0ZSwgcmVxLnZlbmRvcklkLCByZXEuZGVhZGxpbmVdXG4gIF07XG4gIFxuICAvLyBFbnN1cmUgaGVhZGVycyBleGlzdFxuICBjb25zdCBoZWFkZXJzID0gYXdhaXQgZ2V0SGVhZGVycyhTUFJFQURTSEVFVF9JRCwgREFJTFlfT1JERVJTX1NIRUVUX05BTUUpO1xuICBpZiAoaGVhZGVycy5sZW5ndGggPT09IDApIHtcbiAgICAgIGF3YWl0IHVwZGF0ZVNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgYCR7REFJTFlfT1JERVJTX1NIRUVUX05BTUV9IUExOkQxYCwgW1snaWQnLCAnZGF0ZScsICd2ZW5kb3JJZCcsICdkZWFkbGluZSddXSk7XG4gIH1cblxuICBhd2FpdCBhcHBlbmRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGAke0RBSUxZX09SREVSU19TSEVFVF9OQU1FfSFBOkRgLCB2YWx1ZXMpO1xuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG59XG5cbmV4cG9ydCB0eXBlIFVwZGF0ZURhaWx5T3JkZXJSZXF1ZXN0ID0ge1xuICAgIG9yZGVySWQ6IHN0cmluZztcbiAgICB2ZW5kb3JJZDogc3RyaW5nO1xuICAgIGRhdGU6IHN0cmluZztcbiAgICBkZWFkbGluZTogc3RyaW5nO1xufVxuXG4vKipcbiAqIFVwZGF0ZXMgYW4gZXhpc3RpbmcgZGFpbHkgb3JkZXIncyBkYXRlIGFuZCBkZWFkbGluZS5cbiAqIEBwYXJhbSB7VXBkYXRlRGFpbHlPcmRlclJlcXVlc3R9IHJlcSAtIFRoZSByZXF1ZXN0IGNvbnRhaW5pbmcgb3JkZXJJZCwgZGF0ZSBhbmQgZGVhZGxpbmUuXG4gKiBAcmV0dXJucyB7UHJvbWlzZTx7c3VjY2VzczogYm9vbGVhbn0+fSBBIHN1Y2Nlc3MgZmxhZy5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZURhaWx5T3JkZXIocmVxOiBVcGRhdGVEYWlseU9yZGVyUmVxdWVzdCk6IFByb21pc2U8eyBzdWNjZXNzOiBib29sZWFuIH0+IHtcbiAgICBjb25zdCB7IG9yZGVySWQsIHZlbmRvcklkLCBkYXRlLCBkZWFkbGluZSB9ID0gcmVxO1xuICAgIFxuICAgIC8vIDEuIEZpbmQgdGhlIHJvdyBvZiB0aGUgb3JkZXIgdG8gdXBkYXRlXG4gICAgY29uc3QgYWxsT3JkZXJzRGF0YSA9IGF3YWl0IGdldFNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgYCR7REFJTFlfT1JERVJTX1NIRUVUX05BTUV9IUE6QWApO1xuICAgIGNvbnN0IHJvd0luZGV4ID0gYWxsT3JkZXJzRGF0YS5maW5kSW5kZXgocm93ID0+IHJvd1swXSA9PT0gb3JkZXJJZCk7XG4gICAgXG4gICAgaWYgKHJvd0luZGV4ID09PSAtMSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYOaJvuS4jeWIsCBJRCDngrogJHtvcmRlcklkfSDnmoToqILllq7jgIJgKTtcbiAgICB9XG5cbiAgICAvLyArMSBiZWNhdXNlIHNoZWV0IHJvd3MgYXJlIDEtYmFzZWQuXG4gICAgY29uc3Qgcm93VG9VcGRhdGUgPSByb3dJbmRleCArIDE7XG4gICAgXG4gICAgLy8gV2UgdXBkYXRlIGRhdGUgYW5kIGRlYWRsaW5lLiBWZW5kb3JJZCBpcyBub3QgY2hhbmdlZC5cbiAgICAvLyBUaGUgcmFuZ2Ugc2hvdWxkIGJlIEJ4OkR4IHRvIHVwZGF0ZSBkYXRlIGFuZCBkZWFkbGluZS5cbiAgICBjb25zdCB1cGRhdGVSYW5nZSA9IGAke0RBSUxZX09SREVSU19TSEVFVF9OQU1FfSFCJHtyb3dUb1VwZGF0ZX06RCR7cm93VG9VcGRhdGV9YDtcbiAgICBhd2FpdCB1cGRhdGVTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIHVwZGF0ZVJhbmdlLCBbW2RhdGUsIHZlbmRvcklkLCBkZWFkbGluZV1dKTtcblxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbn1cblxuXG4vKipcbiAqIERlbGV0ZXMgYSBwdWJsaXNoZWQgZGFpbHkgb3JkZXIgYW5kIGl0cyBhc3NvY2lhdGVkIG9yZGVyIGl0ZW1zLlxuICogQHBhcmFtIHtzdHJpbmd9IGRhaWx5T3JkZXJJZCBUaGUgSUQgb2YgdGhlIGRhaWx5IG9yZGVyIHRvIGRlbGV0ZS5cbiAqIEByZXR1cm5zIHtQcm9taXNlPHtzdWNjZXNzOiBib29sZWFufT59IEEgc3VjY2VzcyBmbGFnLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlRGFpbHlPcmRlcihkYWlseU9yZGVySWQ6IHN0cmluZyk6IFByb21pc2U8eyBzdWNjZXNzOiBib29sZWFuIH0+IHtcbiAgLy8gMS4gR2V0IGFsbCBkYXRhIGZyb20gYm90aCBzaGVldHNcbiAgY29uc3QgW2RhaWx5T3JkZXJzRGF0YVdpdGhIZWFkZXIsIG9yZGVySXRlbXNEYXRhV2l0aEhlYWRlcl0gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgZ2V0U2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCBgJHtEQUlMWV9PUkRFUlNfU0hFRVRfTkFNRX0hQTpEYCksXG4gICAgZ2V0U2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCBgJHtPUkRFUl9JVEVNU19TSEVFVF9OQU1FfSFBOk1gKSwgLy8gUmVhZCB1cCB0byBjb2x1bW4gTVxuICBdKTtcblxuICBpZiAoZGFpbHlPcmRlcnNEYXRhV2l0aEhlYWRlci5sZW5ndGggPCAyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xuICB9XG5cbiAgY29uc3QgZGFpbHlPcmRlcnNIZWFkZXJzID0gZGFpbHlPcmRlcnNEYXRhV2l0aEhlYWRlclswXTtcbiAgY29uc3QgZGFpbHlPcmRlcnNSb3dzID0gZGFpbHlPcmRlcnNEYXRhV2l0aEhlYWRlci5zbGljZSgxKTtcbiAgXG4gIGNvbnN0IG9yZGVySXRlbXNIZWFkZXJzID0gb3JkZXJJdGVtc0RhdGFXaXRoSGVhZGVyLmxlbmd0aCA+IDAgPyBvcmRlckl0ZW1zRGF0YVdpdGhIZWFkZXJbMF0gOiBbXTtcbiAgY29uc3Qgb3JkZXJJdGVtc1Jvd3MgPSBvcmRlckl0ZW1zRGF0YVdpdGhIZWFkZXIubGVuZ3RoID4gMSA/IG9yZGVySXRlbXNEYXRhV2l0aEhlYWRlci5zbGljZSgxKSA6IFtdO1xuXG4gIC8vIDIuIEZpbHRlciB0aGUgcm93cyB0byBrZWVwIGZvciBib3RoIHNoZWV0c1xuICBjb25zdCBkYWlseU9yZGVyc1RvS2VlcCA9IGRhaWx5T3JkZXJzUm93cy5maWx0ZXIocm93ID0+IHJvd1swXSAhPT0gZGFpbHlPcmRlcklkKTtcblxuICBsZXQgb3JkZXJJdGVtc1RvS2VlcCA9IG9yZGVySXRlbXNSb3dzO1xuICBpZiAob3JkZXJJdGVtc1Jvd3MubGVuZ3RoID4gMCAmJiBvcmRlckl0ZW1zSGVhZGVycy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBvcmRlckl0ZW1zSGVhZGVyTWFwID0gb3JkZXJJdGVtc0hlYWRlcnMucmVkdWNlKChhY2MsIGgsIGkpID0+IHsgYWNjW1N0cmluZyhoKV0gPSBpOyByZXR1cm4gYWNjOyB9LCB7fSBhcyBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+KTtcbiAgICAgIGNvbnN0IGRhaWx5T3JkZXJJZEluZGV4ID0gb3JkZXJJdGVtc0hlYWRlck1hcFsnZGFpbHlPcmRlcklkJ107XG4gICAgICBcbiAgICAgIC8vIEVuc3VyZSB0aGUgZGFpbHlPcmRlcklkIGNvbHVtbiBleGlzdHMgYmVmb3JlIGZpbHRlcmluZ1xuICAgICAgaWYgKGRhaWx5T3JkZXJJZEluZGV4ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBvcmRlckl0ZW1zVG9LZWVwID0gb3JkZXJJdGVtc1Jvd3MuZmlsdGVyKGl0ZW1Sb3cgPT4gaXRlbVJvd1tkYWlseU9yZGVySWRJbmRleF0gIT09IGRhaWx5T3JkZXJJZCk7XG4gICAgICB9XG4gIH1cblxuICAvLyA0LiBQcmVwYXJlIGJhdGNoIHVwZGF0ZSBkYXRhIHRvIGNsZWFyIGFuZCByZXdyaXRlIGJvdGggc2hlZXRzXG4gIGF3YWl0IGJhdGNoVXBkYXRlU2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCBbXG4gICAge1xuICAgICAgcmFuZ2U6IGAke0RBSUxZX09SREVSU19TSEVFVF9OQU1FfSFBMTpEYCxcbiAgICAgIHZhbHVlczogW2RhaWx5T3JkZXJzSGVhZGVycywgLi4uZGFpbHlPcmRlcnNUb0tlZXBdLFxuICAgIH0sXG4gICAge1xuICAgICAgcmFuZ2U6IGAke09SREVSX0lURU1TX1NIRUVUX05BTUV9IUExOk1gLFxuICAgICAgdmFsdWVzOiBvcmRlckl0ZW1zSGVhZGVycy5sZW5ndGggPiAwID8gW29yZGVySXRlbXNIZWFkZXJzLCAuLi5vcmRlckl0ZW1zVG9LZWVwXSA6IFtdLFxuICAgIH1cbiAgXSk7XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xufVxuXG5cbi8qKlxuICogU3VibWl0cyBhbiBvcmRlciBhbmQgc2F2ZXMgaXQgdG8gdGhlICdvcmRlcl9pdGVtcycgc2hlZXQuXG4gKiBJZiBlZGl0aW5nIGFuIGV4aXN0aW5nIG9yZGVyLCBpdCBmaXJzdCBkZWxldGVzIHRoZSBvbGQgaXRlbXMuXG4gKiBAcGFyYW0ge0ZpbmFsT3JkZXJ9IG9yZGVyIC0gVGhlIGNvbXBsZXRlIG9yZGVyIGRldGFpbHMuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGlzRWRpdGluZyAtIEEgZmxhZyB0byBpbmRpY2F0ZSBpZiB0aGlzIGlzIGFuIGVkaXQuXG4gKiBAcmV0dXJucyB7UHJvbWlzZTx7c3VjY2VzczogYm9vbGVhbn0+fSBBIHN1Y2Nlc3MgZmxhZy5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHN1Ym1pdE9yZGVyKG9yZGVyOiBGaW5hbE9yZGVyLCBpc0VkaXRpbmc6IGJvb2xlYW4gPSBmYWxzZSk6IFByb21pc2U8eyBzdWNjZXNzOiBib29sZWFuIH0+IHtcbiAgICAvLyBJZiBlZGl0aW5nLCBmaXJzdCBkZWxldGUgYWxsIGV4aXN0aW5nIGl0ZW1zIGZvciB0aGF0IHVzZXIgaW4gdGhhdCBkYWlseSBvcmRlclxuICAgIGlmIChpc0VkaXRpbmcpIHtcbiAgICAgICAgYXdhaXQgZGVsZXRlVXNlck9yZGVyKHsgdXNlcm5hbWU6IG9yZGVyLnVzZXJuYW1lLCBkYWlseU9yZGVySWQ6IG9yZGVyLmRhaWx5T3JkZXJJZCB9KTtcbiAgICB9XG4gICAgXG4gICAgLy8gVGhlbiwgYXBwZW5kIHRoZSBuZXcvdXBkYXRlZCBpdGVtc1xuICAgIGNvbnN0IGFsbEl0ZW1zUmFuZ2UgPSBgJHtPUkRFUl9JVEVNU19TSEVFVF9OQU1FfSFBMjpBYDtcbiAgICBjb25zdCBhbGxJdGVtSWRzRGF0YSA9IGF3YWl0IGdldFNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgYWxsSXRlbXNSYW5nZSk7XG4gICAgbGV0IGxhc3RJZE51bSA9IGFsbEl0ZW1JZHNEYXRhLmxlbmd0aCA+IDBcbiAgICAgICAgPyBNYXRoLm1heCgwLCAuLi5hbGxJdGVtSWRzRGF0YS5tYXAocm93ID0+IHBhcnNlSW50KChyb3dbMF0gfHwgJ29pMCcpLnJlcGxhY2UoJ29pJywgJycpLCAxMCkpLmZpbHRlcihudW0gPT4gIWlzTmFOKG51bSkpKVxuICAgICAgICA6IDA7XG5cbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCk7XG4gICAgY29uc3Qgb3JkZXJWYWx1ZXMgPSBbXTtcblxuICAgIGZvciAoY29uc3QgaXRlbSBvZiBvcmRlci5pdGVtcykge1xuICAgICAgICBsYXN0SWROdW0rKzsgLy8gSW5jcmVtZW50IElEIGZvciBlYWNoIGl0ZW0gaW4gdGhlIGxvb3BcbiAgICAgICAgY29uc3QgbmV3SWQgPSBgb2kke2xhc3RJZE51bS50b1N0cmluZygpLnBhZFN0YXJ0KDMsICcwJyl9YDtcbiAgICAgICAgY29uc3Qgb3B0aW9uc1N0cmluZyA9IEpTT04uc3RyaW5naWZ5KGl0ZW0ub3B0aW9ucyk7XG5cbiAgICAgICAgb3JkZXJWYWx1ZXMucHVzaChbXG4gICAgICAgICAgICBuZXdJZCxcbiAgICAgICAgICAgIG9yZGVyLmRhaWx5T3JkZXJJZCxcbiAgICAgICAgICAgIG5vdyxcbiAgICAgICAgICAgIG9yZGVyLnVzZXJuYW1lLFxuICAgICAgICAgICAgb3JkZXIudmVuZG9ySWQsXG4gICAgICAgICAgICBvcmRlci52ZW5kb3JOYW1lLFxuICAgICAgICAgICAgaXRlbS5tZW51SXRlbUlkLFxuICAgICAgICAgICAgaXRlbS5uYW1lLFxuICAgICAgICAgICAgaXRlbS5xdWFudGl0eSxcbiAgICAgICAgICAgIGl0ZW0ucHJpY2UsXG4gICAgICAgICAgICBvcHRpb25zU3RyaW5nLFxuICAgICAgICAgICAgb3JkZXIubm90ZXMsXG4gICAgICAgICAgICAnRkFMU0UnIC8vIGlzUGFpZFxuICAgICAgICBdKTtcbiAgICB9XG4gICAgXG4gICAgLy8gRW5zdXJlIGhlYWRlcnMgZXhpc3RcbiAgICBjb25zdCBoZWFkZXJzID0gYXdhaXQgZ2V0SGVhZGVycyhTUFJFQURTSEVFVF9JRCwgT1JERVJfSVRFTVNfU0hFRVRfTkFNRSk7XG4gICAgaWYgKGhlYWRlcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGF3YWl0IHVwZGF0ZVNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgYCR7T1JERVJfSVRFTVNfU0hFRVRfTkFNRX0hQTE6TTFgLCBbWydpZCcsICdkYWlseU9yZGVySWQnLCAndGltZXN0YW1wJywgJ3VzZXJuYW1lJywgJ3ZlbmRvcklkJywgJ3ZlbmRvck5hbWUnLCAnbWVudUl0ZW1JZCcsICdpdGVtTmFtZScsICdxdWFudGl0eScsICdwcmljZScsICdvcHRpb25zJywgJ25vdGVzJywgJ2lzUGFpZCddXSk7XG4gICAgfVxuXG4gICAgaWYgKG9yZGVyVmFsdWVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgYXdhaXQgYXBwZW5kU2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCBgJHtPUkRFUl9JVEVNU19TSEVFVF9OQU1FfSFBOk1gLCBvcmRlclZhbHVlcyk7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbn1cblxuXG5leHBvcnQgdHlwZSBPcmRlckRldGFpbEl0ZW0gPSB7XG4gICAgaWQ6IHN0cmluZztcbiAgICBkYWlseU9yZGVySWQ6IHN0cmluZztcbiAgICB0aW1lc3RhbXA6IHN0cmluZztcbiAgICB1c2VybmFtZTogc3RyaW5nO1xuICAgIHZlbmRvcklkOiBzdHJpbmc7XG4gICAgdmVuZG9yTmFtZTogc3RyaW5nO1xuICAgIG1lbnVJdGVtSWQ6IHN0cmluZztcbiAgICBpdGVtTmFtZTogc3RyaW5nO1xuICAgIHF1YW50aXR5OiBudW1iZXI7XG4gICAgcHJpY2U6IG51bWJlcjtcbiAgICBvcHRpb25zOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+O1xuICAgIG5vdGVzOiBzdHJpbmc7XG4gICAgaXNQYWlkOiBib29sZWFuO1xufTtcblxuLyoqXG4gKiBSZXRyaWV2ZXMgYWxsIG9yZGVyIGl0ZW1zIGZvciBhIHNwZWNpZmljIGRhaWx5IG9yZGVyLlxuICogQHBhcmFtIHtzdHJpbmd9IGRhaWx5T3JkZXJJZCBUaGUgSUQgb2YgdGhlIGRhaWx5IG9yZGVyLlxuICogQHJldHVybnMge1Byb21pc2U8e29yZGVyRGV0YWlsczogT3JkZXJEZXRhaWxJdGVtW10sIGRhaWx5T3JkZXI6IERhaWx5T3JkZXIgfCBudWxsfT59IEFuIG9iamVjdCBjb250YWluaW5nIHRoZSBsaXN0IG9mIG9yZGVyIGl0ZW1zIGFuZCB0aGUgZGFpbHkgb3JkZXIgZGV0YWlscy5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE9yZGVyRGV0YWlsc0J5RGFpbHlPcmRlcklkKGRhaWx5T3JkZXJJZDogc3RyaW5nKTogUHJvbWlzZTx7IG9yZGVyRGV0YWlsczogT3JkZXJEZXRhaWxJdGVtW10sIGRhaWx5T3JkZXI6IERhaWx5T3JkZXIgfCBudWxsIH0+IHtcbiAgICAvLyAxLiBHZXQgdGhlIGRhaWx5IG9yZGVyIGRldGFpbHNcbiAgICBjb25zdCBhbGxEYWlseU9yZGVycyA9IGF3YWl0IGdldEFsbERhaWx5T3JkZXJzKCk7XG4gICAgY29uc3QgZGFpbHlPcmRlciA9IGFsbERhaWx5T3JkZXJzLmZpbmQobyA9PiBvLmlkID09PSBkYWlseU9yZGVySWQpO1xuXG4gICAgaWYgKCFkYWlseU9yZGVyKSB7XG4gICAgICAgIHJldHVybiB7IG9yZGVyRGV0YWlsczogW10sIGRhaWx5T3JkZXI6IG51bGwgfTtcbiAgICB9XG5cbiAgICAvLyAyLiBHZXQgYWxsIG9yZGVyIGl0ZW1zXG4gICAgY29uc3Qgb3JkZXJJdGVtc1JhbmdlID0gYCR7T1JERVJfSVRFTVNfU0hFRVRfTkFNRX0hQTpNYDsgLy8gRXh0ZW5kZWQgdG8gY29sdW1uIE0gZm9yIG5ldyBmaWVsZHNcbiAgICBjb25zdCBvcmRlckl0ZW1zRGF0YSA9IGF3YWl0IGdldFNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgb3JkZXJJdGVtc1JhbmdlKTtcblxuICAgIGlmIChvcmRlckl0ZW1zRGF0YS5sZW5ndGggPCAyKSB7XG4gICAgICAgIHJldHVybiB7IG9yZGVyRGV0YWlsczogW10sIGRhaWx5T3JkZXI6IGRhaWx5T3JkZXIgfTtcbiAgICB9XG5cbiAgICBjb25zdCBoZWFkZXJzID0gb3JkZXJJdGVtc0RhdGFbMF0ubWFwKGggPT4gU3RyaW5nKGgpLnRyaW0oKSk7XG4gICAgY29uc3QgaGVhZGVyTWFwID0gaGVhZGVycy5yZWR1Y2UoKGFjYywgaGVhZGVyLCBpbmRleCkgPT4ge1xuICAgICAgICBhY2NbaGVhZGVyLnRyaW0oKV0gPSBpbmRleDtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB7fSBhcyBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+KTtcblxuICAgIC8vIENoZWNrIGZvciByZXF1aXJlZCBjb2x1bW5zXG4gICAgY29uc3QgcmVxdWlyZWRDb2xzID0gWydpZCcsICdkYWlseU9yZGVySWQnLCAndGltZXN0YW1wJywgJ3VzZXJuYW1lJywgJ3ZlbmRvcklkJywgJ3ZlbmRvck5hbWUnLCAnbWVudUl0ZW1JZCcsICdpdGVtTmFtZScsICdxdWFudGl0eScsICdwcmljZScsICdvcHRpb25zJywgJ25vdGVzJywgJ2lzUGFpZCddO1xuICAgIGZvciAoY29uc3QgY29sIG9mIHJlcXVpcmVkQ29scykge1xuICAgICAgICBpZiAoaGVhZGVyTWFwW2NvbF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3I6IFRoZSAnJHtPUkRFUl9JVEVNU19TSEVFVF9OQU1FfScgc2hlZXQgaXMgbWlzc2luZyB0aGUgcmVxdWlyZWQgY29sdW1uOiAnJHtjb2x9Jy5gKTtcbiAgICAgICAgICAgIHJldHVybiB7IG9yZGVyRGV0YWlsczogW10sIGRhaWx5T3JkZXI6IGRhaWx5T3JkZXIgfTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHJvd3MgPSBvcmRlckl0ZW1zRGF0YS5zbGljZSgxKTtcblxuICAgIC8vIDMuIEZpbHRlciBpdGVtcyB0aGF0IG1hdGNoIHRoZSBkYWlseU9yZGVySWRcbiAgICBjb25zdCBmaWx0ZXJlZEl0ZW1zID0gcm93cy5maWx0ZXIocm93ID0+IHJvd1toZWFkZXJNYXBbJ2RhaWx5T3JkZXJJZCddXSA9PT0gZGFpbHlPcmRlcklkKTtcblxuICAgIC8vIDQuIE1hcCB0byBPcmRlckRldGFpbEl0ZW0gb2JqZWN0c1xuICAgIGNvbnN0IG9yZGVyRGV0YWlsczogT3JkZXJEZXRhaWxJdGVtW10gPSBmaWx0ZXJlZEl0ZW1zLm1hcChyb3cgPT4gKHtcbiAgICAgICAgaWQ6IHJvd1toZWFkZXJNYXBbJ2lkJ11dIHx8ICcnLFxuICAgICAgICBkYWlseU9yZGVySWQ6IHJvd1toZWFkZXJNYXBbJ2RhaWx5T3JkZXJJZCddXSB8fCAnJyxcbiAgICAgICAgdGltZXN0YW1wOiByb3dbaGVhZGVyTWFwWyd0aW1lc3RhbXAnXV0gfHwgJycsXG4gICAgICAgIHVzZXJuYW1lOiByb3dbaGVhZGVyTWFwWyd1c2VybmFtZSddXSB8fCAnTi9BJyxcbiAgICAgICAgdmVuZG9ySWQ6IHJvd1toZWFkZXJNYXBbJ3ZlbmRvcklkJ11dIHx8ICcnLFxuICAgICAgICB2ZW5kb3JOYW1lOiByb3dbaGVhZGVyTWFwWyd2ZW5kb3JOYW1lJ11dIHx8ICcnLFxuICAgICAgICBtZW51SXRlbUlkOiByb3dbaGVhZGVyTWFwWydtZW51SXRlbUlkJ11dIHx8ICcnLFxuICAgICAgICBpdGVtTmFtZTogcm93W2hlYWRlck1hcFsnaXRlbU5hbWUnXV0gfHwgJ04vQScsXG4gICAgICAgIHF1YW50aXR5OiBwYXJzZUludChyb3dbaGVhZGVyTWFwWydxdWFudGl0eSddXSB8fCAnMCcsIDEwKSxcbiAgICAgICAgcHJpY2U6IHBhcnNlSW50KHJvd1toZWFkZXJNYXBbJ3ByaWNlJ11dIHx8ICcwJywgMTApLFxuICAgICAgICBvcHRpb25zOiBzYWZlUGFyc2VPcHRpb25zKHJvd1toZWFkZXJNYXBbJ29wdGlvbnMnXV0gfHwgJ3t9JyksXG4gICAgICAgIG5vdGVzOiByb3dbaGVhZGVyTWFwWydub3RlcyddXSB8fCAnJyxcbiAgICAgICAgaXNQYWlkOiByb3dbaGVhZGVyTWFwWydpc1BhaWQnXV0gPT09ICdUUlVFJyB8fCByb3dbaGVhZGVyTWFwWydpc1BhaWQnXV0gPT09IHRydWUsXG4gICAgfSkpO1xuXG4gICAgcmV0dXJuIHsgb3JkZXJEZXRhaWxzLCBkYWlseU9yZGVyIH07XG59XG5cbmV4cG9ydCB0eXBlIFVzZXJPcmRlckdyb3VwID0ge1xuICAgIGRhaWx5T3JkZXI6IERhaWx5T3JkZXI7XG4gICAgaXRlbXM6IE9yZGVyRGV0YWlsSXRlbVtdO1xuICAgIHRvdGFsOiBudW1iZXI7XG4gICAgbm90ZXM6IHN0cmluZztcbn1cblxuLyoqXG4gKiBSZXRyaWV2ZXMgYWxsIG9yZGVycyBmb3IgYSBzcGVjaWZpYyB1c2VyLCBncm91cGVkIGJ5IGRhaWx5IG9yZGVyLlxuICogQHBhcmFtIHtzdHJpbmd9IHVzZXJuYW1lIFRoZSB1c2VybmFtZSB0byBmZXRjaCBvcmRlcnMgZm9yLlxuICogQHJldHVybnMge1Byb21pc2U8VXNlck9yZGVyR3JvdXBbXT59IEEgbGlzdCBvZiB0aGUgdXNlcidzIG9yZGVycy5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE9yZGVyc0J5VXNlcm5hbWUodXNlcm5hbWU6IHN0cmluZyk6IFByb21pc2U8VXNlck9yZGVyR3JvdXBbXT4ge1xuICAgIC8vIDEuIEdldCBhbGwgZGFpbHkgb3JkZXJzIGFuZCBhbGwgb3JkZXIgaXRlbXNcbiAgICBjb25zdCBbYWxsRGFpbHlPcmRlcnMsIGFsbE9yZGVySXRlbXNEYXRhXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgZ2V0QWxsRGFpbHlPcmRlcnMoKSxcbiAgICAgICAgZ2V0U2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCBgJHtPUkRFUl9JVEVNU19TSEVFVF9OQU1FfSFBOk1gKVxuICAgIF0pO1xuXG4gICAgaWYgKGFsbE9yZGVySXRlbXNEYXRhLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIGNvbnN0IGl0ZW1zSGVhZGVycyA9IGFsbE9yZGVySXRlbXNEYXRhWzBdLm1hcChoID0+IFN0cmluZyhoKS50cmltKCkpO1xuICAgIGNvbnN0IGl0ZW1zSGVhZGVyTWFwID0gaXRlbXNIZWFkZXJzLnJlZHVjZSgoYWNjLCBoZWFkZXIsIGluZGV4KSA9PiB7XG4gICAgICAgIGFjY1toZWFkZXIudHJpbSgpXSA9IGluZGV4O1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgIH0sIHt9IGFzIFJlY29yZDxzdHJpbmcsIG51bWJlcj4pO1xuXG4gICAgLy8gQ2hlY2sgZm9yIHJlcXVpcmVkIGNvbHVtbnNcbiAgICBjb25zdCByZXF1aXJlZENvbHMgPSBbJ3VzZXJuYW1lJywgJ2RhaWx5T3JkZXJJZCcsICdpZCcsICd0aW1lc3RhbXAnLCAndmVuZG9ySWQnLCAndmVuZG9yTmFtZScsICdtZW51SXRlbUlkJywgJ2l0ZW1OYW1lJywgJ3F1YW50aXR5JywgJ3ByaWNlJywgJ29wdGlvbnMnLCAnbm90ZXMnLCAnaXNQYWlkJ107XG4gICAgZm9yIChjb25zdCBjb2wgb2YgcmVxdWlyZWRDb2xzKSB7XG4gICAgICAgIGlmIChpdGVtc0hlYWRlck1hcFtjb2xdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yOiBUaGUgJyR7T1JERVJfSVRFTVNfU0hFRVRfTkFNRX0nIHNoZWV0IGlzIG1pc3NpbmcgdGhlIHJlcXVpcmVkIGNvbHVtbjogJyR7Y29sfScuYCk7XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyAyLiBGaWx0ZXIgaXRlbXMgZm9yIHRoZSBzcGVjaWZpYyB1c2VybmFtZVxuICAgIGNvbnN0IHVzZXJJdGVtc1Jvd3MgPSBhbGxPcmRlckl0ZW1zRGF0YS5zbGljZSgxKS5maWx0ZXIocm93ID0+IHJvd1tpdGVtc0hlYWRlck1hcFsndXNlcm5hbWUnXV0gPT09IHVzZXJuYW1lKTtcbiAgICBcbiAgICBpZiAodXNlckl0ZW1zUm93cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIGNvbnN0IHVzZXJJdGVtczogT3JkZXJEZXRhaWxJdGVtW10gPSB1c2VySXRlbXNSb3dzLm1hcChyb3cgPT4gKHtcbiAgICAgICAgaWQ6IHJvd1tpdGVtc0hlYWRlck1hcFsnaWQnXV0gfHwgJycsXG4gICAgICAgIGRhaWx5T3JkZXJJZDogcm93W2l0ZW1zSGVhZGVyTWFwWydkYWlseU9yZGVySWQnXV0gfHwgJycsXG4gICAgICAgIHRpbWVzdGFtcDogcm93W2l0ZW1zSGVhZGVyTWFwWyd0aW1lc3RhbXAnXV0gfHwgJycsXG4gICAgICAgIHVzZXJuYW1lOiByb3dbaXRlbXNIZWFkZXJNYXBbJ3VzZXJuYW1lJ11dIHx8ICdOL0EnLFxuICAgICAgICB2ZW5kb3JJZDogcm93W2l0ZW1zSGVhZGVyTWFwWyd2ZW5kb3JJZCddXSB8fCAnJyxcbiAgICAgICAgdmVuZG9yTmFtZTogcm93W2l0ZW1zSGVhZGVyTWFwWyd2ZW5kb3JOYW1lJ11dIHx8ICcnLFxuICAgICAgICBtZW51SXRlbUlkOiByb3dbaXRlbXNIZWFkZXJNYXBbJ21lbnVJdGVtSWQnXV0gfHwgJycsXG4gICAgICAgIGl0ZW1OYW1lOiByb3dbaXRlbXNIZWFkZXJNYXBbJ2l0ZW1OYW1lJ11dIHx8ICdOL0EnLFxuICAgICAgICBxdWFudGl0eTogcGFyc2VJbnQocm93W2l0ZW1zSGVhZGVyTWFwWydxdWFudGl0eSddXSB8fCAnMCcsIDEwKSxcbiAgICAgICAgcHJpY2U6IHBhcnNlSW50KHJvd1tpdGVtc0hlYWRlck1hcFsncHJpY2UnXV0gfHwgJzAnLCAxMCksXG4gICAgICAgIG9wdGlvbnM6IHNhZmVQYXJzZU9wdGlvbnMocm93W2l0ZW1zSGVhZGVyTWFwWydvcHRpb25zJ11dIHx8ICd7fScpLFxuICAgICAgICBub3Rlczogcm93W2l0ZW1zSGVhZGVyTWFwWydub3RlcyddXSB8fCAnJyxcbiAgICAgICAgaXNQYWlkOiByb3dbaXRlbXNIZWFkZXJNYXBbJ2lzUGFpZCddXSA9PT0gJ1RSVUUnIHx8IHJvd1tpdGVtc0hlYWRlck1hcFsnaXNQYWlkJ11dID09PSB0cnVlLFxuICAgIH0pKTtcbiAgICBcbiAgICAvLyAzLiBHcm91cCBpdGVtcyBieSBkYWlseU9yZGVySWRcbiAgICBjb25zdCBncm91cGVkQnlEYWlseU9yZGVyID0gdXNlckl0ZW1zLnJlZHVjZSgoYWNjLCBpdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IGtleSA9IGl0ZW0uZGFpbHlPcmRlcklkO1xuICAgICAgICBpZiAoIWFjY1trZXldKSB7XG4gICAgICAgICAgICBhY2Nba2V5XSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIGFjY1trZXldLnB1c2goaXRlbSk7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30gYXMgUmVjb3JkPHN0cmluZywgT3JkZXJEZXRhaWxJdGVtW10+KTtcbiAgICBcbiAgICBcbiAgICAvLyA0LiBGb3JtYXQgdGhlIGZpbmFsIG91dHB1dFxuICAgIGNvbnN0IGFsbERhaWx5T3JkZXJzTWFwID0gbmV3IE1hcChhbGxEYWlseU9yZGVycy5tYXAobyA9PiBbby5pZCwgb10pKTtcbiAgICBjb25zdCByZXN1bHQ6IFVzZXJPcmRlckdyb3VwW10gPSBbXTtcblxuICAgIGZvciAoY29uc3QgZGFpbHlPcmRlcklkIGluIGdyb3VwZWRCeURhaWx5T3JkZXIpIHtcbiAgICAgICAgY29uc3QgZGFpbHlPcmRlciA9IGFsbERhaWx5T3JkZXJzTWFwLmdldChkYWlseU9yZGVySWQpO1xuICAgICAgICBpZiAoZGFpbHlPcmRlcikge1xuICAgICAgICAgICAgY29uc3QgaXRlbXMgPSBncm91cGVkQnlEYWlseU9yZGVyW2RhaWx5T3JkZXJJZF07XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAvLyBBZ2dyZWdhdGUgaXRlbXMgd2l0aCB0aGUgc2FtZSBtZW51SXRlbUlkIGFuZCBvcHRpb25zXG4gICAgICAgICAgICBjb25zdCBhZ2dyZWdhdGVkSXRlbXMgPSBpdGVtcy5yZWR1Y2UoKGFjYywgaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbnNTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShpdGVtLm9wdGlvbnMgfHwge30pO1xuICAgICAgICAgICAgICAgIGNvbnN0IGFnZ3JlZ2F0aW9uS2V5ID0gYCR7aXRlbS5tZW51SXRlbUlkfXwke29wdGlvbnNTdHJpbmd9YDtcbiAgICAgICAgICAgICAgICBpZiAoYWNjW2FnZ3JlZ2F0aW9uS2V5XSkge1xuICAgICAgICAgICAgICAgICAgICBhY2NbYWdncmVnYXRpb25LZXldLnF1YW50aXR5ICs9IGl0ZW0ucXVhbnRpdHk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYWNjW2FnZ3JlZ2F0aW9uS2V5XSA9IHsgLi4uaXRlbSB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgICAgfSwge30gYXMgUmVjb3JkPHN0cmluZywgT3JkZXJEZXRhaWxJdGVtPik7XG5cbiAgICAgICAgICAgIGNvbnN0IGZpbmFsSXRlbXMgPSBPYmplY3QudmFsdWVzKGFnZ3JlZ2F0ZWRJdGVtcyk7XG4gICAgICAgICAgICBjb25zdCB0b3RhbCA9IGZpbmFsSXRlbXMucmVkdWNlKChzdW0sIGl0ZW0pID0+IHN1bSArIGl0ZW0ucHJpY2UgKiBpdGVtLnF1YW50aXR5LCAwKTtcbiAgICAgICAgICAgIGNvbnN0IG5vdGVzID0gaXRlbXMubGVuZ3RoID4gMCA/IGl0ZW1zWzBdLm5vdGVzIDogJyc7IFxuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgZGFpbHlPcmRlcixcbiAgICAgICAgICAgICAgICBpdGVtczogZmluYWxJdGVtcyxcbiAgICAgICAgICAgICAgICB0b3RhbCxcbiAgICAgICAgICAgICAgICBub3RlcyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8vIDUuIFNvcnQgdGhlIGZpbmFsIGdyb3VwcyBieSBkYXRlLCBtb3N0IHJlY2VudCBmaXJzdFxuICAgIHJlc3VsdC5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGVBID0gbmV3IERhdGUoYCR7YS5kYWlseU9yZGVyLmRhdGV9VCR7YS5kYWlseU9yZGVyLmRlYWRsaW5lfWApO1xuICAgICAgICBjb25zdCBkYXRlQiA9IG5ldyBEYXRlKGAke2IuZGFpbHlPcmRlci5kYXRlfVQke2IuZGFpbHlPcmRlci5kZWFkbGluZX1gKTtcbiAgICAgICAgcmV0dXJuIGRhdGVCLmdldFRpbWUoKSAtIGRhdGVBLmdldFRpbWUoKTtcbiAgICB9KTtcblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogUmV0cmlldmVzIGEgdXNlcidzIHNwZWNpZmljIG9yZGVyIGZvciBhIGdpdmVuIGRhaWx5IG9yZGVyLCBmb3JtYXR0ZWQgZm9yIGVkaXRpbmcuXG4gKiBAcGFyYW0ge3N0cmluZ30gdXNlcm5hbWUgVGhlIHVzZXJuYW1lLlxuICogQHBhcmFtIHtzdHJpbmd9IGRhaWx5T3JkZXJJZCBUaGUgSUQgb2YgdGhlIGRhaWx5IG9yZGVyLlxuICogQHJldHVybnMge1Byb21pc2U8T3JkZXJJdGVtW10+fSBBIGxpc3Qgb2Ygb3JkZXIgaXRlbXMgcmVhZHkgZm9yIHRoZSBjYXJ0LlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RXhpc3RpbmdPcmRlckZvckVkaXQodXNlcm5hbWU6IHN0cmluZywgZGFpbHlPcmRlcklkOiBzdHJpbmcpOiBQcm9taXNlPE9yZGVySXRlbVtdPiB7XG4gIGNvbnN0IGFsbE9yZGVySXRlbXNEYXRhID0gYXdhaXQgZ2V0U2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCBgJHtPUkRFUl9JVEVNU19TSEVFVF9OQU1FfSFBOk1gKTtcbiAgaWYgKGFsbE9yZGVySXRlbXNEYXRhLmxlbmd0aCA8IDIpIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICBjb25zdCBpdGVtc0hlYWRlcnMgPSBhbGxPcmRlckl0ZW1zRGF0YVswXS5tYXAoaCA9PiBTdHJpbmcoaCkudHJpbSgpKTtcbiAgY29uc3QgaXRlbXNIZWFkZXJNYXAgPSBpdGVtc0hlYWRlcnMucmVkdWNlKChhY2MsIGhlYWRlciwgaW5kZXgpID0+IHtcbiAgICBhY2NbaGVhZGVyXSA9IGluZGV4O1xuICAgIHJldHVybiBhY2M7XG4gIH0sIHt9IGFzIFJlY29yZDxzdHJpbmcsIG51bWJlcj4pO1xuXG4gIGNvbnN0IHVzZXJJdGVtc1Jvd3MgPSBhbGxPcmRlckl0ZW1zRGF0YVxuICAgIC5zbGljZSgxKVxuICAgIC5maWx0ZXIocm93ID0+IHJvd1tpdGVtc0hlYWRlck1hcFsndXNlcm5hbWUnXV0gPT09IHVzZXJuYW1lICYmIHJvd1tpdGVtc0hlYWRlck1hcFsnZGFpbHlPcmRlcklkJ11dID09PSBkYWlseU9yZGVySWQpO1xuXG4gIGlmICh1c2VySXRlbXNSb3dzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICBcbiAgLy8gSGVscGVyIHRvIHJlLWdlbmVyYXRlIHRoZSBjb21wb3NpdGUgaXRlbSBJRCBmb3IgdGhlIGNhcnRcbiAgY29uc3QgZ2VuZXJhdGVPcmRlckl0ZW1JZCA9IChpdGVtSWQ6IHN0cmluZywgb3B0aW9uczogUmVjb3JkPHN0cmluZywgc3RyaW5nPikgPT4ge1xuICAgIGlmIChPYmplY3Qua2V5cyhvcHRpb25zKS5sZW5ndGggPT09IDApIHJldHVybiBpdGVtSWQ7XG4gICAgY29uc3Qgc29ydGVkU2VsZWN0aW9ucyA9IE9iamVjdC5rZXlzKG9wdGlvbnMpLnNvcnQoKS5tYXAoa2V5ID0+IGAke2tleX06JHtvcHRpb25zW2tleV19YCkuam9pbignfCcpO1xuICAgIHJldHVybiBgJHtpdGVtSWR9WyR7c29ydGVkU2VsZWN0aW9uc31dYDtcbiAgfVxuXG4gIGNvbnN0IG9yZGVySXRlbXM6IE9yZGVySXRlbVtdID0gdXNlckl0ZW1zUm93cy5tYXAocm93ID0+IHtcbiAgICBjb25zdCBvcHRpb25zID0gc2FmZVBhcnNlT3B0aW9ucyhyb3dbaXRlbXNIZWFkZXJNYXBbJ29wdGlvbnMnXV0gfHwgJ3t9Jyk7XG4gICAgY29uc3QgbWVudUl0ZW1JZCA9IHJvd1tpdGVtc0hlYWRlck1hcFsnbWVudUl0ZW1JZCddXTtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IGdlbmVyYXRlT3JkZXJJdGVtSWQobWVudUl0ZW1JZCwgb3B0aW9ucyksXG4gICAgICBtZW51SXRlbUlkOiBtZW51SXRlbUlkLFxuICAgICAgbmFtZTogcm93W2l0ZW1zSGVhZGVyTWFwWydpdGVtTmFtZSddXSB8fCAnJyxcbiAgICAgIHByaWNlOiBwYXJzZUludChyb3dbaXRlbXNIZWFkZXJNYXBbJ3ByaWNlJ11dIHx8ICcwJywgMTApLFxuICAgICAgcXVhbnRpdHk6IHBhcnNlSW50KHJvd1tpdGVtc0hlYWRlck1hcFsncXVhbnRpdHknXV0gfHwgJzAnLCAxMCksXG4gICAgICB2ZW5kb3JOYW1lOiByb3dbaXRlbXNIZWFkZXJNYXBbJ3ZlbmRvck5hbWUnXV0gfHwgJycsXG4gICAgICB2ZW5kb3JJZDogcm93W2l0ZW1zSGVhZGVyTWFwWyd2ZW5kb3JJZCddXSB8fCAnJyxcbiAgICAgIHVzZXJuYW1lOiB1c2VybmFtZSxcbiAgICAgIG9wdGlvbnM6IG9wdGlvbnMsXG4gICAgICBub3Rlczogcm93W2l0ZW1zSGVhZGVyTWFwWydub3RlcyddXSB8fCAnJyxcbiAgICB9O1xuICB9KTtcbiAgXG4gIHJldHVybiBvcmRlckl0ZW1zO1xufVxuXG5cbi8qKlxuICogRGVsZXRlcyBhIHVzZXIncyBlbnRpcmUgb3JkZXIgZm9yIGEgc3BlY2lmaWMgZGFpbHkgb3JkZXIuXG4gKiBAcGFyYW0ge29iamVjdH0gcGFyYW1zIC0gVGhlIHBhcmFtZXRlcnMgZm9yIGRlbGV0aW5nIHRoZSBvcmRlci5cbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXMudXNlcm5hbWUgLSBUaGUgdXNlcm5hbWUgb2YgdGhlIHVzZXIuXG4gKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1zLmRhaWx5T3JkZXJJZCAtIFRoZSBJRCBvZiB0aGUgZGFpbHkgb3JkZXIgdG8gZGVsZXRlLlxuICogQHJldHVybnMge1Byb21pc2U8e3N1Y2Nlc3M6IGJvb2xlYW59Pn0gQSBzdWNjZXNzIGZsYWcuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVVc2VyT3JkZXIoeyB1c2VybmFtZSwgZGFpbHlPcmRlcklkIH06IHsgdXNlcm5hbWU6IHN0cmluZywgZGFpbHlPcmRlcklkOiBzdHJpbmcgfSk6IFByb21pc2U8eyBzdWNjZXNzOiBib29sZWFuIH0+IHtcbiAgICBjb25zdCBbb3JkZXJJdGVtc0RhdGFXaXRoSGVhZGVyXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgZ2V0U2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCBgJHtPUkRFUl9JVEVNU19TSEVFVF9OQU1FfSFBOk1gKSxcbiAgICBdKTtcblxuICAgIGlmIChvcmRlckl0ZW1zRGF0YVdpdGhIZWFkZXIubGVuZ3RoIDwgMikge1xuICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9OyAvLyBObyBpdGVtcyB0byBkZWxldGVcbiAgICB9XG5cbiAgICBjb25zdCBpdGVtc0hlYWRlcnMgPSBvcmRlckl0ZW1zRGF0YVdpdGhIZWFkZXJbMF07XG4gICAgY29uc3QgaXRlbXNSb3dzID0gb3JkZXJJdGVtc0RhdGFXaXRoSGVhZGVyLnNsaWNlKDEpO1xuICAgIFxuICAgIGNvbnN0IGhlYWRlck1hcCA9IGl0ZW1zSGVhZGVycy5yZWR1Y2UoKGFjYywgaCwgaSkgPT4geyBhY2NbU3RyaW5nKGgpXSA9IGk7IHJldHVybiBhY2M7IH0sIHt9IGFzIFJlY29yZDxzdHJpbmcsIG51bWJlcj4pO1xuICAgIGNvbnN0IGRhaWx5T3JkZXJJZEluZGV4ID0gaGVhZGVyTWFwWydkYWlseU9yZGVySWQnXTtcbiAgICBjb25zdCB1c2VybmFtZUluZGV4ID0gaGVhZGVyTWFwWyd1c2VybmFtZSddO1xuXG4gICAgaWYgKGRhaWx5T3JkZXJJZEluZGV4ID09PSB1bmRlZmluZWQgfHwgdXNlcm5hbWVJbmRleCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSAnb3JkZXJfaXRlbXMnIHNoZWV0IGlzIG1pc3NpbmcgcmVxdWlyZWQgY29sdW1ucyAnZGFpbHlPcmRlcklkJyBvciAndXNlcm5hbWUnLlwiKTtcbiAgICB9XG5cbiAgICBjb25zdCBpdGVtc1RvS2VlcCA9IGl0ZW1zUm93cy5maWx0ZXIocm93ID0+IFxuICAgICAgICAhKHJvd1tkYWlseU9yZGVySWRJbmRleF0gPT09IGRhaWx5T3JkZXJJZCAmJiByb3dbdXNlcm5hbWVJbmRleF0gPT09IHVzZXJuYW1lKVxuICAgICk7XG4gICAgXG4gICAgYXdhaXQgYmF0Y2hVcGRhdGVTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIFt7XG4gICAgICAgIHJhbmdlOiBgJHtPUkRFUl9JVEVNU19TSEVFVF9OQU1FfSFBMTpNYCxcbiAgICAgICAgdmFsdWVzOiBbaXRlbXNIZWFkZXJzLCAuLi5pdGVtc1RvS2VlcF0sXG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIrUkFpVnNCIn0=
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$data$3a$6aa58c__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/ai/flows/data:6aa58c [app-ssr] (ecmascript) <text/javascript>");
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
        if (editingOrderId) {
            const orderToEdit = availableOrders.find((o)=>o.id === editingOrderId);
            if (orderToEdit) {
                setSelectedOrder(orderToEdit);
            }
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
        toast
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
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$data$3a$6aa58c__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["submitOrder"])({
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
                                    children: "已發布訂單"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/OrderClient.tsx",
                                    lineNumber: 287,
                                    columnNumber: 13
                                }, this),
                                availableOrders.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4",
                                    children: availableOrders.map((currentOrder)=>{
                                        // Client-side check for deadline
                                        const passed = isDeadlinePassed(currentOrder.date, currentOrder.deadline);
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                            onClick: ()=>handleSelectOrder(currentOrder),
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative cursor-pointer transition-all duration-200 hover:shadow-lg hover:-translate-y-1 h-full", selectedOrder?.vendor.vendorId === currentOrder.vendor.vendorId && "ring-2 ring-primary shadow-lg", passed && "bg-muted/60"),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("absolute top-0 right-0 text-xs pointer-events-none transform -translate-y-1/2", passed ? "bg-destructive text-destructive-foreground" : "bg-green-600 text-destructive-foreground"),
                                                    children: passed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ban$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Ban$3e$__["Ban"], {
                                                                className: "mr-1 h-3 w-3"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/OrderClient.tsx",
                                                                lineNumber: 309,
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
                                                                lineNumber: 309,
                                                                columnNumber: 78
                                                            }, this),
                                                            "可訂購"
                                                        ]
                                                    }, void 0, true)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/OrderClient.tsx",
                                                    lineNumber: 303,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                            className: "font-headline pr-4",
                                                            children: currentOrder.vendor.vendorName
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/OrderClient.tsx",
                                                            lineNumber: 312,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardDescription"], {
                                                            className: "font-body",
                                                            children: currentOrder.vendor.description
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/OrderClient.tsx",
                                                            lineNumber: 313,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/OrderClient.tsx",
                                                    lineNumber: 311,
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
                                                                lineNumber: 318,
                                                                columnNumber: 35
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    currentOrder.date,
                                                                    " 截止: ",
                                                                    currentOrder.deadline
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/OrderClient.tsx",
                                                                lineNumber: 319,
                                                                columnNumber: 35
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/OrderClient.tsx",
                                                        lineNumber: 317,
                                                        columnNumber: 31
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/OrderClient.tsx",
                                                    lineNumber: 316,
                                                    columnNumber: 27
                                                }, this)
                                            ]
                                        }, currentOrder.vendor.vendorId, true, {
                                            fileName: "[project]/src/components/OrderClient.tsx",
                                            lineNumber: 294,
                                            columnNumber: 21
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/components/OrderClient.tsx",
                                    lineNumber: 289,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                    className: "flex flex-col items-center justify-center p-12 text-center text-muted-foreground bg-secondary/30",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$utensils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Utensils$3e$__["Utensils"], {
                                            className: "h-16 w-16 mb-4 text-primary"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/OrderClient.tsx",
                                            lineNumber: 328,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-headline text-xl font-bold mb-2",
                                            children: "今天沒有訂餐"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/OrderClient.tsx",
                                            lineNumber: 329,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-body text-sm",
                                            children: "老闆今天沒上班，明天再來看看吧！"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/OrderClient.tsx",
                                            lineNumber: 330,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/OrderClient.tsx",
                                    lineNumber: 327,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/OrderClient.tsx",
                            lineNumber: 286,
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
                                    lineNumber: 338,
                                    columnNumber: 15
                                }, this),
                                isPastDeadline ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                    className: "flex flex-col items-center justify-center p-12 text-center text-destructive bg-destructive/10 border-destructive/50",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ban$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Ban$3e$__["Ban"], {
                                            className: "h-16 w-16 mb-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/OrderClient.tsx",
                                            lineNumber: 341,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-headline text-xl font-bold mb-2",
                                            children: "今日訂購已截止"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/OrderClient.tsx",
                                            lineNumber: 342,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-body text-sm",
                                            children: "此店家的訂購時間已過，明天請早！"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/OrderClient.tsx",
                                            lineNumber: 343,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/OrderClient.tsx",
                                    lineNumber: 340,
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
                                            lineNumber: 348,
                                            columnNumber: 23
                                        }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-muted-foreground col-span-full",
                                        children: "這個店家還沒有任何菜單品項，請管理員新增。"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/OrderClient.tsx",
                                        lineNumber: 356,
                                        columnNumber: 23
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/OrderClient.tsx",
                                    lineNumber: 346,
                                    columnNumber: 18
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/OrderClient.tsx",
                            lineNumber: 337,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/OrderClient.tsx",
                    lineNumber: 284,
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
                            lineNumber: 367,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/OrderClient.tsx",
                        lineNumber: 366,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/OrderClient.tsx",
                    lineNumber: 365,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/OrderClient.tsx",
            lineNumber: 283,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/OrderClient.tsx",
        lineNumber: 282,
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$data$3a$be091d__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/ai/flows/data:be091d [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$data$3a$765375__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/ai/flows/data:765375 [app-ssr] (ecmascript) <text/javascript>");
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
            const fetchedOrders = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$data$3a$be091d__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getOrdersByUsername"])(decodeURIComponent(username));
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
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$data$3a$765375__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deleteUserOrder"])({
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialog"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogTrigger"], {
                                                        asChild: true,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                            variant: "ghost",
                                                            size: "icon",
                                                            className: "text-blue-600 h-8 w-8 hover:bg-blue-100 hover:text-blue-700",
                                                            "aria-label": "編輯訂單",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__["Edit"], {
                                                                className: "h-4 w-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/my-orders/page.tsx",
                                                                lineNumber: 143,
                                                                columnNumber: 41
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/my-orders/page.tsx",
                                                            lineNumber: 142,
                                                            columnNumber: 37
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/my-orders/page.tsx",
                                                        lineNumber: 141,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogContent"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogHeader"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogTitle"], {
                                                                        children: "確定要編輯嗎？"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/my-orders/page.tsx",
                                                                        lineNumber: 148,
                                                                        columnNumber: 41
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogDescription"], {
                                                                        children: "系統將會帶您回到點餐頁面，並將您這次的訂單內容重新載入，方便您進行修改。"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/my-orders/page.tsx",
                                                                        lineNumber: 149,
                                                                        columnNumber: 41
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/my-orders/page.tsx",
                                                                lineNumber: 147,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogFooter"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogCancel"], {
                                                                        children: "取消"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/my-orders/page.tsx",
                                                                        lineNumber: 154,
                                                                        columnNumber: 41
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogAction"], {
                                                                        asChild: true,
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                            href: `/order?username=${encodeURIComponent(username || '')}&edit=${dailyOrder.id}`,
                                                                            children: "確定，前往編輯"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/my-orders/page.tsx",
                                                                            lineNumber: 156,
                                                                            columnNumber: 46
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/my-orders/page.tsx",
                                                                        lineNumber: 155,
                                                                        columnNumber: 41
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/my-orders/page.tsx",
                                                                lineNumber: 153,
                                                                columnNumber: 37
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/my-orders/page.tsx",
                                                        lineNumber: 146,
                                                        columnNumber: 34
                                                    }, this)
                                                ]
                                            }, void 0, true, {
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
                                                                lineNumber: 166,
                                                                columnNumber: 41
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/my-orders/page.tsx",
                                                            lineNumber: 165,
                                                            columnNumber: 37
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/my-orders/page.tsx",
                                                        lineNumber: 164,
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
                                                                        lineNumber: 171,
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
                                                                        lineNumber: 172,
                                                                        columnNumber: 41
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/my-orders/page.tsx",
                                                                lineNumber: 170,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogFooter"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogCancel"], {
                                                                        children: "再想想"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/my-orders/page.tsx",
                                                                        lineNumber: 177,
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
                                                                                lineNumber: 183,
                                                                                columnNumber: 57
                                                                            }, this) : null,
                                                                            "確定取消"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/my-orders/page.tsx",
                                                                        lineNumber: 178,
                                                                        columnNumber: 41
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/my-orders/page.tsx",
                                                                lineNumber: 176,
                                                                columnNumber: 37
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/my-orders/page.tsx",
                                                        lineNumber: 169,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/my-orders/page.tsx",
                                                lineNumber: 163,
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
                                lineNumber: 196,
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
                                                    lineNumber: 200,
                                                    columnNumber: 30
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-muted-foreground",
                                                    children: optionsString(item.options)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/my-orders/page.tsx",
                                                    lineNumber: 201,
                                                    columnNumber: 30
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/my-orders/page.tsx",
                                            lineNumber: 199,
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
                                                    lineNumber: 204,
                                                    columnNumber: 29
                                                }, this),
                                                item.quantity
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/my-orders/page.tsx",
                                            lineNumber: 203,
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
                                            lineNumber: 206,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, item.id, true, {
                                    fileName: "[project]/src/app/my-orders/page.tsx",
                                    lineNumber: 198,
                                    columnNumber: 21
                                }, this)),
                            notes && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Separator"], {}, void 0, false, {
                                        fileName: "[project]/src/app/my-orders/page.tsx",
                                        lineNumber: 213,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-medium",
                                                children: "備註"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/my-orders/page.tsx",
                                                lineNumber: 215,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-muted-foreground",
                                                children: notes
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/my-orders/page.tsx",
                                                lineNumber: 216,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/my-orders/page.tsx",
                                        lineNumber: 214,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/my-orders/page.tsx",
                        lineNumber: 195,
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
                                lineNumber: 222,
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
                                lineNumber: 223,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/my-orders/page.tsx",
                        lineNumber: 221,
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
                lineNumber: 247,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/my-orders/page.tsx",
            lineNumber: 246,
            columnNumber: 14
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-background font-body text-foreground",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SiteHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SiteHeader"], {}, void 0, false, {
                fileName: "[project]/src/app/my-orders/page.tsx",
                lineNumber: 254,
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
                        lineNumber: 256,
                        columnNumber: 18
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Suspense"], {
                        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-center items-center h-64",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                className: "h-8 w-8 animate-spin text-primary"
                            }, void 0, false, {
                                fileName: "[project]/src/app/my-orders/page.tsx",
                                lineNumber: 259,
                                columnNumber: 25
                            }, void 0)
                        }, void 0, false, {
                            fileName: "[project]/src/app/my-orders/page.tsx",
                            lineNumber: 258,
                            columnNumber: 21
                        }, void 0),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MyOrdersContent, {}, void 0, false, {
                            fileName: "[project]/src/app/my-orders/page.tsx",
                            lineNumber: 262,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/my-orders/page.tsx",
                        lineNumber: 257,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/my-orders/page.tsx",
                lineNumber: 255,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/my-orders/page.tsx",
        lineNumber: 253,
        columnNumber: 9
    }, this);
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__582e5859._.js.map