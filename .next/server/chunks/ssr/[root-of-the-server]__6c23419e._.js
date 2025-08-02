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
"[project]/src/ai/flows/data:88a72d [app-ssr] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"405e59ce92b3df78ceb45b9c792ff9dddda7d9accf":"markUserOrderAsPaid"},"src/ai/flows/order-flow.ts",""] */ __turbopack_context__.s({
    "markUserOrderAsPaid": (()=>markUserOrderAsPaid)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var markUserOrderAsPaid = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("405e59ce92b3df78ceb45b9c792ff9dddda7d9accf", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "markUserOrderAsPaid"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vb3JkZXItZmxvdy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbid1c2Ugc2VydmVyJztcblxuaW1wb3J0IHsgZ2V0U2hlZXREYXRhLCBhcHBlbmRTaGVldERhdGEsIGdldEhlYWRlcnMsIHVwZGF0ZVNoZWV0RGF0YSwgYmF0Y2hVcGRhdGVTaGVldERhdGEsIGdldEF1dGhlbnRpY2F0ZWRDbGllbnQgfSBmcm9tICdAL3NlcnZpY2VzL3NoZWV0LXNlcnZpY2UnO1xuaW1wb3J0IHsgZ2V0VmVuZG9ycywgdHlwZSBWZW5kb3IgfSBmcm9tICcuL3ZlbmRvci1mbG93JztcbmltcG9ydCB7IHR5cGUgRmluYWxPcmRlciwgdHlwZSBPcmRlckl0ZW0gfSBmcm9tICdAL2NvbXBvbmVudHMvT3JkZXJTdW1tYXJ5JztcbmltcG9ydCB7IFB1Ymxpc2hPcmRlclJlcXVlc3RTY2hlbWEsIHR5cGUgUHVibGlzaE9yZGVyUmVxdWVzdCB9IGZyb20gJ0AvbGliL3NjaGVtYS9vcmRlcic7XG5pbXBvcnQgeyBmb3JtYXQsIHBhcnNlLCBwYXJzZUlTTywgaXNWYWxpZCB9IGZyb20gJ2RhdGUtZm5zJztcblxuY29uc3QgU1BSRUFEU0hFRVRfSUQgPSAnMVpqMmgwY1lscmIybUJhTmdsMS1Qb09LN3RsQ0N3RGNjQVhuNXc2NmhwNGMnO1xuY29uc3QgREFJTFlfT1JERVJTX1NIRUVUX05BTUUgPSAnZGFpbHlfb3JkZXJzJztcbmNvbnN0IE9SREVSX0lURU1TX1NIRUVUX05BTUUgPSAnb3JkZXJfaXRlbXMnO1xuXG5leHBvcnQgdHlwZSBEYWlseU9yZGVyID0ge1xuICAgIGlkOiBzdHJpbmc7XG4gICAgZGF0ZTogc3RyaW5nO1xuICAgIHZlbmRvcklkOiBzdHJpbmc7XG4gICAgdmVuZG9yTmFtZT86IHN0cmluZzsgLy8gT3B0aW9uYWw6IGZvciBkaXNwbGF5IG9uIGFkbWluIHBhZ2VcbiAgICBkZWFkbGluZTogc3RyaW5nO1xufTtcblxuLy8gVGhpcyB0eXBlIGlzIGZvciB0aGUgdXNlci1mYWNpbmcgb3JkZXIgcGFnZVxuZXhwb3J0IHR5cGUgQXZhaWxhYmxlT3JkZXIgPSB7XG4gICAgaWQ6IHN0cmluZzsgLy8gZGFpbHlPcmRlcklkXG4gICAgdmVuZG9yOiBWZW5kb3I7XG4gICAgZGF0ZTogc3RyaW5nO1xuICAgIGRlYWRsaW5lOiBzdHJpbmc7XG59O1xuXG4vLyBIZWxwZXIgdG8gc2FmZWx5IHBhcnNlIHRoZSBvcHRpb25zIHN0cmluZywgd2hpY2ggbWlnaHQgYmUgdmFsaWQgSlNPTiBvciBhIFwia2V5OnZhbHVlXCIgc3RyaW5nLlxuY29uc3Qgc2FmZVBhcnNlT3B0aW9ucyA9IChvcHRpb25zU3RyOiBzdHJpbmcpOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0+IHtcbiAgICBpZiAoIW9wdGlvbnNTdHIgfHwgdHlwZW9mIG9wdGlvbnNTdHIgIT09ICdzdHJpbmcnKSByZXR1cm4ge307XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gRmlyc3QsIHRyeSB0byBwYXJzZSBpdCBhcyBhIHZhbGlkIEpTT04gc3RyaW5nLlxuICAgICAgICAvLyBUaGlzIGhhbmRsZXMgY2FzZXMgbGlrZSAne1wi6aOv6YePXCI6XCLmraPluLhcIixcIui+o+W6plwiOlwi5LiN6L6jXCJ9J1xuICAgICAgICBjb25zdCBwYXJzZWQgPSBKU09OLnBhcnNlKG9wdGlvbnNTdHIpO1xuICAgICAgICBpZiAodHlwZW9mIHBhcnNlZCA9PT0gJ29iamVjdCcgJiYgcGFyc2VkICE9PSBudWxsICYmICFBcnJheS5pc0FycmF5KHBhcnNlZCkpIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJzZWQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIElmIEpTT04ucGFyc2UgZmFpbHMsIGl0J3Mgbm90IGEgSlNPTiBzdHJpbmcuXG4gICAgICAgIC8vIEFzc3VtZSBpdCdzIGEgc2ltcGxlIFwia2V5OnZhbHVlXCIgc3RyaW5nIGxpa2UgXCLpo6/ph4865q2j5bi4XCIuXG4gICAgICAgIC8vIFRoaXMgaXMgYSBmYWxsYmFjayBmb3IgZGF0YSB0aGF0IHdhc24ndCBzdG9yZWQgYXMgSlNPTi5cbiAgICAgICAgY29uc3QgcGFydHMgPSBvcHRpb25zU3RyLnNwbGl0KCc6Jyk7XG4gICAgICAgIGlmIChwYXJ0cy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IHBhcnRzWzBdLnRyaW0oKTtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gcGFydHNbMV0udHJpbSgpO1xuICAgICAgICAgICAgaWYgKGtleSAmJiB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7IFtrZXldOiB2YWx1ZSB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIElmIGl0J3Mgc29tZXRoaW5nIGVsc2Ugd2UgZG9uJ3QgcmVjb2duaXplLCBsb2cgaXQgYW5kIHJldHVybiBlbXB0eS5cbiAgICAgICAgY29uc29sZS53YXJuKGBDb3VsZCBub3QgcGFyc2Ugb3B0aW9ucyBzdHJpbmcgaW50byBhIHZhbGlkIG9iamVjdDogXCIke29wdGlvbnNTdHJ9XCJgKTtcbiAgICB9XG4gICAgLy8gUmV0dXJuIGVtcHR5IG9iamVjdCBpZiBpdCdzIG5vdCBhIHBhcnNhYmxlIEpTT04gb2JqZWN0IG9yIGEgc2ltcGxlIGtleTp2YWx1ZSBwYWlyLlxuICAgIHJldHVybiB7fTtcbn07XG5cblxuLy8gSGVscGVyIGZ1bmN0aW9uIHRvIGZvcm1hdCB0aW1lIGZyb20gU2hlZXRzICh3aGljaCBjYW4gYmUgYSBudW1iZXIpXG5jb25zdCBmb3JtYXRUaW1lID0gKHRpbWVWYWx1ZTogYW55KTogc3RyaW5nID0+IHtcbiAgICBpZiAodHlwZW9mIHRpbWVWYWx1ZSA9PT0gJ3N0cmluZycgJiYgdGltZVZhbHVlLm1hdGNoKC9eXFxkezJ9OlxcZHsyfSg6XFxkezJ9KT8kLykpIHtcbiAgICAgICAgcmV0dXJuIHRpbWVWYWx1ZS5zdWJzdHJpbmcoMCwgNSk7XG4gICAgfVxuICAgIFxuICAgIGlmICh0eXBlb2YgdGltZVZhbHVlID09PSAnbnVtYmVyJyAmJiB0aW1lVmFsdWUgPiAwICYmIHRpbWVWYWx1ZSA8IDEpIHtcbiAgICAgIC8vIEl0J3MgYSB0aW1lIHNlcmlhbCBudW1iZXIgZnJvbSBTaGVldHNcbiAgICAgIGNvbnN0IHRvdGFsU2Vjb25kcyA9IE1hdGgucm91bmQodGltZVZhbHVlICogODY0MDApO1xuICAgICAgY29uc3QgaG91cnMgPSBNYXRoLmZsb29yKHRvdGFsU2Vjb25kcyAvIDM2MDApO1xuICAgICAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IoKHRvdGFsU2Vjb25kcyAlIDM2MDApIC8gNjApO1xuICAgICAgcmV0dXJuIGAke2hvdXJzLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKX06JHttaW51dGVzLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKX1gO1xuICAgIH1cblxuICAgIC8vIFRyeSBwYXJzaW5nIGFzIGEgZGF0ZSBzdHJpbmcgdG8gZXh0cmFjdCB0aW1lXG4gICAgaWYgKHR5cGVvZiB0aW1lVmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBkYXRlID0gcGFyc2VJU08odGltZVZhbHVlKTtcbiAgICAgICAgICAgIGlmIChpc1ZhbGlkKGRhdGUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZvcm1hdChkYXRlLCAnSEg6bW0nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgLy8gSWdub3JlIHBhcnNlIGVycm9ycyBmcm9tIElTT1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjb25zdCB0aW1lTWF0Y2ggPSB0aW1lVmFsdWUubWF0Y2goLyhcXGR7Mn06XFxkezJ9KS8pO1xuICAgICAgICBpZiAodGltZU1hdGNoKSByZXR1cm4gdGltZU1hdGNoWzBdO1xuICAgIH1cbiAgICBcbiAgICAvLyBGYWxsYmFjayBmb3IgdW5leHBlY3RlZCBmb3JtYXRzXG4gICAgcmV0dXJuICcwMDowMCc7IFxufTtcblxuLy8gSGVscGVyIGZ1bmN0aW9uIHRvIGZvcm1hdCBkYXRlIGZyb20gU2hlZXRzICh3aGljaCBjYW4gYmUgYSBudW1iZXIgb3Igc3RyaW5nKVxuY29uc3QgZm9ybWF0RGF0ZSA9IChkYXRlVmFsdWU6IGFueSk6IHN0cmluZyA9PiB7XG4gICAgaWYgKCFkYXRlVmFsdWUpIHJldHVybiBmb3JtYXQobmV3IERhdGUoKSwgJ3l5eXktTU0tZGQnKTsgLy8gUmV0dXJuIHRvZGF5J3MgZGF0ZSBpZiBlbXB0eVxuXG4gICAgbGV0IGRhdGU7XG4gICAgXG4gICAgLy8gSGFuZGxlIFNoZWV0cyBkYXRlIHNlcmlhbCBudW1iZXIgKG51bWJlciBvZiBkYXlzIHNpbmNlIDE4OTktMTItMzApXG4gICAgaWYgKHR5cGVvZiBkYXRlVmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgICAgIGNvbnN0IGV4Y2VsRXBvY2ggPSBuZXcgRGF0ZShEYXRlLlVUQygxODk5LCAxMSwgMzApKTtcbiAgICAgICAgZGF0ZSA9IG5ldyBEYXRlKGV4Y2VsRXBvY2guZ2V0VGltZSgpICsgZGF0ZVZhbHVlICogODY0MDAwMDApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEhhbmRsZSBJU08gc3RyaW5nIGxpa2UgJzIwMjQtMDctMjVUMDA6MDA6MDAuMDAwWicgb3Igc2ltcGxlIHN0cmluZyAnMjAyNC0wNy0yNSdcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgZGF0ZSA9IHBhcnNlSVNPKFN0cmluZyhkYXRlVmFsdWUpKTtcbiAgICAgICAgICAgLy8gSWYgSVNPIHBhcnNpbmcgZmFpbHMsIHRyeSB0aGUgc2ltcGxlIGZvcm1hdFxuICAgICAgICAgICBpZiAoIWlzVmFsaWQoZGF0ZSkpIHtcbiAgICAgICAgICAgICAgIGRhdGUgPSBwYXJzZShTdHJpbmcoZGF0ZVZhbHVlKSwgJ3l5eXktTU0tZGQnLCBuZXcgRGF0ZSgpKTtcbiAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAgZGF0ZSA9IHBhcnNlKFN0cmluZyhkYXRlVmFsdWUpLCAneXl5eS1NTS1kZCcsIG5ldyBEYXRlKCkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8vIElmIGRhdGUgaXMgdmFsaWQsIGZvcm1hdCBpdCwgb3RoZXJ3aXNlIHJldHVybiB0b2RheSdzIGRhdGUgYXMgYSBmYWxsYmFja1xuICAgIHJldHVybiBpc1ZhbGlkKGRhdGUpID8gZm9ybWF0KGRhdGUsICd5eXl5LU1NLWRkJykgOiBmb3JtYXQobmV3IERhdGUoKSwgJ3l5eXktTU0tZGQnKTtcbn07XG5cblxuLyoqXG4gKiBSZXRyaWV2ZXMgYWxsIGF2YWlsYWJsZSBvcmRlcnMgZnJvbSB0aGUgZGFpbHlfb3JkZXJzIHNoZWV0LlxuICogQW55IG9yZGVyIHByZXNlbnQgaXMgY29uc2lkZXJlZCBhdmFpbGFibGUuXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxBdmFpbGFibGVPcmRlcltdPn0gQSBsaXN0IG9mIGF2YWlsYWJsZSB2ZW5kb3JzIGFuZCB0aGVpciBkZWFkbGluZXMuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBdmFpbGFibGVPcmRlcnMoKTogUHJvbWlzZTxBdmFpbGFibGVPcmRlcltdPiB7XG4gICAgY29uc3QgZGFpbHlPcmRlcnNSYW5nZSA9IGAke0RBSUxZX09SREVSU19TSEVFVF9OQU1FfSFBOkRgO1xuICAgIGNvbnN0IFtkYWlseU9yZGVyc0RhdGEsIGFsbFZlbmRvcnNdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGRhaWx5T3JkZXJzUmFuZ2UpLFxuICAgICAgICBnZXRWZW5kb3JzKClcbiAgICBdKTtcblxuICAgIGlmICghZGFpbHlPcmRlcnNEYXRhIHx8IGRhaWx5T3JkZXJzRGF0YS5sZW5ndGggPCAyKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgaGVhZGVyID0gZGFpbHlPcmRlcnNEYXRhWzBdO1xuICAgIGNvbnN0IHJvd3MgPSBkYWlseU9yZGVyc0RhdGEuc2xpY2UoMSk7XG5cbiAgICBjb25zdCBoZWFkZXJNYXAgPSBoZWFkZXIucmVkdWNlKChhY2MsIGgsIGkpID0+IHtcbiAgICAgICAgYWNjW1N0cmluZyhoKV0gPSBpO1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgIH0sIHt9IGFzIFJlY29yZDxzdHJpbmcsIG51bWJlcj4pO1xuXG4gICAgY29uc3QgYWxsVmVuZG9yc01hcCA9IG5ldyBNYXAoYWxsVmVuZG9ycy5tYXAodiA9PiBbdi52ZW5kb3JJZCwgdl0pKTtcblxuICAgIGNvbnN0IGF2YWlsYWJsZU9yZGVyczogQXZhaWxhYmxlT3JkZXJbXSA9IFtdO1xuXG4gICAgZm9yIChjb25zdCByb3cgb2Ygcm93cykge1xuICAgICAgICBpZiAocm93LmV2ZXJ5KGNlbGwgPT4gIWNlbGwpKSBjb250aW51ZTsgLy8gU2tpcCBjb21wbGV0ZWx5IGVtcHR5IHJvd3NcblxuICAgICAgICBjb25zdCBpZCA9IHJvd1toZWFkZXJNYXBbJ2lkJ11dO1xuICAgICAgICBjb25zdCB2ZW5kb3JJZCA9IHJvd1toZWFkZXJNYXBbJ3ZlbmRvcklkJ11dO1xuICAgICAgICBjb25zdCBkYXRlUmF3ID0gcm93W2hlYWRlck1hcFsnZGF0ZSddXTtcbiAgICAgICAgY29uc3QgZGVhZGxpbmVSYXcgPSByb3dbaGVhZGVyTWFwWydkZWFkbGluZSddXTtcblxuICAgICAgICBpZiAoIWlkIHx8ICF2ZW5kb3JJZCkgY29udGludWU7IC8vIFNraXAgcm93cyB3aXRob3V0IGVzc2VudGlhbCBkYXRhXG5cbiAgICAgICAgY29uc3QgdmVuZG9yID0gYWxsVmVuZG9yc01hcC5nZXQodmVuZG9ySWQpO1xuICAgICAgICBpZiAoIXZlbmRvciB8fCAhdmVuZG9yLmlzQWN0aXZlKSBjb250aW51ZTtcblxuICAgICAgICBhdmFpbGFibGVPcmRlcnMucHVzaCh7XG4gICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICB2ZW5kb3IsXG4gICAgICAgICAgICBkYXRlOiBmb3JtYXREYXRlKGRhdGVSYXcpLFxuICAgICAgICAgICAgZGVhZGxpbmU6IGZvcm1hdFRpbWUoZGVhZGxpbmVSYXcpIC8vIEZvcm1hdCB0aGUgZGVhZGxpbmVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGF2YWlsYWJsZU9yZGVycztcbn1cblxuLyoqXG4gKiBSZXRyaWV2ZXMgYWxsIGRhaWx5IG9yZGVycyBmb3IgYWRtaW4gZGlzcGxheS5cbiAqIEByZXR1cm5zIHtQcm9taXNlPERhaWx5T3JkZXJbXT59IEEgbGlzdCBvZiBhbGwgcHVibGlzaGVkIG9yZGVycy5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbERhaWx5T3JkZXJzKCk6IFByb21pc2U8RGFpbHlPcmRlcltdPiB7XG4gICAgY29uc3QgZGFpbHlPcmRlcnNSYW5nZSA9IGAke0RBSUxZX09SREVSU19TSEVFVF9OQU1FfSFBOkRgO1xuICAgICBjb25zdCBbZGFpbHlPcmRlcnNEYXRhLCBhbGxWZW5kb3JzXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgZ2V0U2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCBkYWlseU9yZGVyc1JhbmdlKSxcbiAgICAgICAgZ2V0VmVuZG9ycygpXG4gICAgXSk7XG4gICAgXG4gICAgaWYgKCFkYWlseU9yZGVyc0RhdGEgfHwgZGFpbHlPcmRlcnNEYXRhLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIGNvbnN0IGhlYWRlciA9IGRhaWx5T3JkZXJzRGF0YVswXTtcbiAgICBjb25zdCByb3dzID0gZGFpbHlPcmRlcnNEYXRhLnNsaWNlKDEpO1xuICAgIGNvbnN0IGFsbFZlbmRvcnNNYXAgPSBuZXcgTWFwKGFsbFZlbmRvcnMubWFwKHYgPT4gW3YudmVuZG9ySWQsIHZdKSk7XG4gICAgXG4gICAgY29uc3QgaGVhZGVyTWFwID0gaGVhZGVyLnJlZHVjZSgoYWNjLCBoLCBpKSA9PiB7XG4gICAgICAgIGFjY1tTdHJpbmcoaCldID0gaTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB7fSBhcyBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+KTtcblxuICAgIGNvbnN0IG9yZGVycyA9IHJvd3MubWFwKHJvdyA9PiB7XG4gICAgICAgIGNvbnN0IHZlbmRvcklkID0gcm93W2hlYWRlck1hcFsndmVuZG9ySWQnXV07XG4gICAgICAgIGNvbnN0IHZlbmRvciA9IGFsbFZlbmRvcnNNYXAuZ2V0KHZlbmRvcklkKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZDogcm93W2hlYWRlck1hcFsnaWQnXV0gfHwgJycsXG4gICAgICAgICAgICBkYXRlOiBmb3JtYXREYXRlKHJvd1toZWFkZXJNYXBbJ2RhdGUnXV0pLFxuICAgICAgICAgICAgdmVuZG9ySWQ6IHZlbmRvcklkIHx8ICcnLFxuICAgICAgICAgICAgdmVuZG9yTmFtZTogdmVuZG9yID8gdmVuZG9yLnZlbmRvck5hbWUgOiAn5pyq55+l5bqX5a62JyxcbiAgICAgICAgICAgIGRlYWRsaW5lOiBmb3JtYXRUaW1lKHJvd1toZWFkZXJNYXBbJ2RlYWRsaW5lJ11dKVxuICAgICAgICB9O1xuICAgIH0pLmZpbHRlcihvcmRlciA9PiBvcmRlci5pZCk7IC8vIEZpbHRlciBvdXQgYW55IGVtcHR5IHJvd3NcblxuICAgIC8vIFNvcnQgb3JkZXJzIGJ5IGRhdGUgYW5kIHRoZW4gYnkgZGVhZGxpbmUsIGFzY2VuZGluZyAoY2xvc2VzdCBmaXJzdClcbiAgICBvcmRlcnMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICBjb25zdCBkYXRlQSA9IG5ldyBEYXRlKGAke2EuZGF0ZX1UJHthLmRlYWRsaW5lfWApO1xuICAgICAgICBjb25zdCBkYXRlQiA9IG5ldyBEYXRlKGAke2IuZGF0ZX1UJHtiLmRlYWRsaW5lfWApO1xuICAgICAgICByZXR1cm4gZGF0ZUEuZ2V0VGltZSgpIC0gZGF0ZUIuZ2V0VGltZSgpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG9yZGVycztcbn1cblxuXG4vKipcbiAqIFB1Ymxpc2hlcyBhIG5ldyBvcmRlciBmb3IgYSBzcGVjaWZpYyBkYXRlLCB2ZW5kb3IgYW5kIGRlYWRsaW5lLlxuICogQHBhcmFtIHtQdWJsaXNoT3JkZXJSZXF1ZXN0fSByZXEgLSBUaGUgcmVxdWVzdCBjb250YWluaW5nIGRhdGUsIHZlbmRvcklkIGFuZCBkZWFkbGluZS5cbiAqIEByZXR1cm5zIHtQcm9taXNlPHtzdWNjZXNzOiBib29sZWFufT59IEEgc3VjY2VzcyBmbGFnLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcHVibGlzaE9yZGVyKHJlcTogUHVibGlzaE9yZGVyUmVxdWVzdCk6IFByb21pc2U8eyBzdWNjZXNzOiBib29sZWFuIH0+IHtcbiAgY29uc3QgdmFsaWRhdGlvbiA9IFB1Ymxpc2hPcmRlclJlcXVlc3RTY2hlbWEuc2FmZVBhcnNlKHJlcSk7XG4gIGlmICghdmFsaWRhdGlvbi5zdWNjZXNzKSB7XG4gICAgY29uc3QgZXJyb3JNc2cgPSB2YWxpZGF0aW9uLmVycm9yLmVycm9ycy5tYXAoZSA9PiBgJHtlLnBhdGguam9pbignLicpfTogJHtlLm1lc3NhZ2V9YCkuam9pbignLCAnKTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYOi8uOWFpeizh+aWmeacieiqpDogJHtlcnJvck1zZ31gKTtcbiAgfVxuXG4gIGNvbnN0IGFsbE9yZGVyc1JhbmdlID0gYCR7REFJTFlfT1JERVJTX1NIRUVUX05BTUV9IUEyOkFgO1xuICBjb25zdCBhbGxPcmRlcklkc0RhdGEgPSBhd2FpdCBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGFsbE9yZGVyc1JhbmdlKTtcbiAgICBjb25zdCBsYXN0SWROdW0gPSBhbGxPcmRlcklkc0RhdGEubGVuZ3RoID4gMCBcbiAgICAgICAgPyBNYXRoLm1heCgwLCAuLi5hbGxPcmRlcklkc0RhdGEubWFwKHJvdyA9PiBwYXJzZUludCgocm93WzBdIHx8ICdkbzAnKS5yZXBsYWNlKCdkbycsICcnKSwgMTApKS5maWx0ZXIobnVtID0+ICFpc05hTihudW0pKSlcbiAgICAgICAgOiAwO1xuICBjb25zdCBuZXdJZCA9IGBkbyR7KGxhc3RJZE51bSArIDEpLnRvU3RyaW5nKCkucGFkU3RhcnQoMywgJzAnKX1gO1xuXG4gIGNvbnN0IHZhbHVlcyA9IFtcbiAgICBbbmV3SWQsIHJlcS5kYXRlLCByZXEudmVuZG9ySWQsIHJlcS5kZWFkbGluZV1cbiAgXTtcbiAgXG4gIC8vIEVuc3VyZSBoZWFkZXJzIGV4aXN0XG4gIGNvbnN0IGhlYWRlcnMgPSBhd2FpdCBnZXRIZWFkZXJzKFNQUkVBRFNIRUVUX0lELCBEQUlMWV9PUkRFUlNfU0hFRVRfTkFNRSk7XG4gIGlmIChoZWFkZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgYXdhaXQgdXBkYXRlU2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCBgJHtEQUlMWV9PUkRFUlNfU0hFRVRfTkFNRX0hQTE6RDFgLCBbWydpZCcsICdkYXRlJywgJ3ZlbmRvcklkJywgJ2RlYWRsaW5lJ11dKTtcbiAgfVxuXG4gIGF3YWl0IGFwcGVuZFNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgYCR7REFJTFlfT1JERVJTX1NIRUVUX05BTUV9IUE6RGAsIHZhbHVlcyk7XG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbn1cblxuZXhwb3J0IHR5cGUgVXBkYXRlRGFpbHlPcmRlclJlcXVlc3QgPSB7XG4gICAgb3JkZXJJZDogc3RyaW5nO1xuICAgIHZlbmRvcklkOiBzdHJpbmc7XG4gICAgZGF0ZTogc3RyaW5nO1xuICAgIGRlYWRsaW5lOiBzdHJpbmc7XG59XG5cbi8qKlxuICogVXBkYXRlcyBhbiBleGlzdGluZyBkYWlseSBvcmRlcidzIGRhdGUgYW5kIGRlYWRsaW5lLlxuICogQHBhcmFtIHtVcGRhdGVEYWlseU9yZGVyUmVxdWVzdH0gcmVxIC0gVGhlIHJlcXVlc3QgY29udGFpbmluZyBvcmRlcklkLCBkYXRlIGFuZCBkZWFkbGluZS5cbiAqIEByZXR1cm5zIHtQcm9taXNlPHtzdWNjZXNzOiBib29sZWFufT59IEEgc3VjY2VzcyBmbGFnLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlRGFpbHlPcmRlcihyZXE6IFVwZGF0ZURhaWx5T3JkZXJSZXF1ZXN0KTogUHJvbWlzZTx7IHN1Y2Nlc3M6IGJvb2xlYW4gfT4ge1xuICAgIGNvbnN0IHsgb3JkZXJJZCwgdmVuZG9ySWQsIGRhdGUsIGRlYWRsaW5lIH0gPSByZXE7XG4gICAgXG4gICAgLy8gMS4gRmluZCB0aGUgcm93IG9mIHRoZSBvcmRlciB0byB1cGRhdGVcbiAgICBjb25zdCBhbGxPcmRlcnNEYXRhID0gYXdhaXQgZ2V0U2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCBgJHtEQUlMWV9PUkRFUlNfU0hFRVRfTkFNRX0hQTpBYCk7XG4gICAgY29uc3Qgcm93SW5kZXggPSBhbGxPcmRlcnNEYXRhLmZpbmRJbmRleChyb3cgPT4gcm93WzBdID09PSBvcmRlcklkKTtcbiAgICBcbiAgICBpZiAocm93SW5kZXggPT09IC0xKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihg5om+5LiN5YiwIElEIOeCuiAke29yZGVySWR9IOeahOioguWWruOAgmApO1xuICAgIH1cblxuICAgIC8vICsxIGJlY2F1c2Ugc2hlZXQgcm93cyBhcmUgMS1iYXNlZC5cbiAgICBjb25zdCByb3dUb1VwZGF0ZSA9IHJvd0luZGV4ICsgMTtcbiAgICBcbiAgICAvLyBXZSB1cGRhdGUgZGF0ZSBhbmQgZGVhZGxpbmUuIFZlbmRvcklkIGlzIG5vdCBjaGFuZ2VkLlxuICAgIC8vIFRoZSByYW5nZSBzaG91bGQgYmUgQng6RHggdG8gdXBkYXRlIGRhdGUgYW5kIGRlYWRsaW5lLlxuICAgIGNvbnN0IHVwZGF0ZVJhbmdlID0gYCR7REFJTFlfT1JERVJTX1NIRUVUX05BTUV9IUIke3Jvd1RvVXBkYXRlfTpEJHtyb3dUb1VwZGF0ZX1gO1xuICAgIGF3YWl0IHVwZGF0ZVNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgdXBkYXRlUmFuZ2UsIFtbZGF0ZSwgdmVuZG9ySWQsIGRlYWRsaW5lXV0pO1xuXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xufVxuXG5cbi8qKlxuICogRGVsZXRlcyBhIHB1Ymxpc2hlZCBkYWlseSBvcmRlciBhbmQgaXRzIGFzc29jaWF0ZWQgb3JkZXIgaXRlbXMuXG4gKiBAcGFyYW0ge3N0cmluZ30gZGFpbHlPcmRlcklkIFRoZSBJRCBvZiB0aGUgZGFpbHkgb3JkZXIgdG8gZGVsZXRlLlxuICogQHJldHVybnMge1Byb21pc2U8e3N1Y2Nlc3M6IGJvb2xlYW59Pn0gQSBzdWNjZXNzIGZsYWcuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVEYWlseU9yZGVyKGRhaWx5T3JkZXJJZDogc3RyaW5nKTogUHJvbWlzZTx7IHN1Y2Nlc3M6IGJvb2xlYW4gfT4ge1xuICAvLyAxLiBHZXQgYWxsIGRhdGEgZnJvbSBib3RoIHNoZWV0c1xuICBjb25zdCBbZGFpbHlPcmRlcnNEYXRhV2l0aEhlYWRlciwgb3JkZXJJdGVtc0RhdGFXaXRoSGVhZGVyXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGAke0RBSUxZX09SREVSU19TSEVFVF9OQU1FfSFBOkRgKSxcbiAgICBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGAke09SREVSX0lURU1TX1NIRUVUX05BTUV9IUE6TWApLCAvLyBSZWFkIHVwIHRvIGNvbHVtbiBNXG4gIF0pO1xuXG4gIGlmIChkYWlseU9yZGVyc0RhdGFXaXRoSGVhZGVyLmxlbmd0aCA8IDIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG4gIH1cblxuICBjb25zdCBkYWlseU9yZGVyc0hlYWRlcnMgPSBkYWlseU9yZGVyc0RhdGFXaXRoSGVhZGVyWzBdO1xuICBjb25zdCBkYWlseU9yZGVyc1Jvd3MgPSBkYWlseU9yZGVyc0RhdGFXaXRoSGVhZGVyLnNsaWNlKDEpO1xuICBcbiAgY29uc3Qgb3JkZXJJdGVtc0hlYWRlcnMgPSBvcmRlckl0ZW1zRGF0YVdpdGhIZWFkZXIubGVuZ3RoID4gMCA/IG9yZGVySXRlbXNEYXRhV2l0aEhlYWRlclswXSA6IFtdO1xuICBjb25zdCBvcmRlckl0ZW1zUm93cyA9IG9yZGVySXRlbXNEYXRhV2l0aEhlYWRlci5sZW5ndGggPiAxID8gb3JkZXJJdGVtc0RhdGFXaXRoSGVhZGVyLnNsaWNlKDEpIDogW107XG5cbiAgLy8gMi4gRmlsdGVyIHRoZSByb3dzIHRvIGtlZXAgZm9yIGJvdGggc2hlZXRzXG4gIGNvbnN0IGRhaWx5T3JkZXJzVG9LZWVwID0gZGFpbHlPcmRlcnNSb3dzLmZpbHRlcihyb3cgPT4gcm93WzBdICE9PSBkYWlseU9yZGVySWQpO1xuXG4gIGxldCBvcmRlckl0ZW1zVG9LZWVwID0gb3JkZXJJdGVtc1Jvd3M7XG4gIGlmIChvcmRlckl0ZW1zUm93cy5sZW5ndGggPiAwICYmIG9yZGVySXRlbXNIZWFkZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IG9yZGVySXRlbXNIZWFkZXJNYXAgPSBvcmRlckl0ZW1zSGVhZGVycy5yZWR1Y2UoKGFjYywgaCwgaSkgPT4geyBhY2NbU3RyaW5nKGgpXSA9IGk7IHJldHVybiBhY2M7IH0sIHt9IGFzIFJlY29yZDxzdHJpbmcsIG51bWJlcj4pO1xuICAgICAgY29uc3QgZGFpbHlPcmRlcklkSW5kZXggPSBvcmRlckl0ZW1zSGVhZGVyTWFwWydkYWlseU9yZGVySWQnXTtcbiAgICAgIFxuICAgICAgLy8gRW5zdXJlIHRoZSBkYWlseU9yZGVySWQgY29sdW1uIGV4aXN0cyBiZWZvcmUgZmlsdGVyaW5nXG4gICAgICBpZiAoZGFpbHlPcmRlcklkSW5kZXggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIG9yZGVySXRlbXNUb0tlZXAgPSBvcmRlckl0ZW1zUm93cy5maWx0ZXIoaXRlbVJvdyA9PiBpdGVtUm93W2RhaWx5T3JkZXJJZEluZGV4XSAhPT0gZGFpbHlPcmRlcklkKTtcbiAgICAgIH1cbiAgfVxuXG4gIC8vIDQuIFByZXBhcmUgYmF0Y2ggdXBkYXRlIGRhdGEgdG8gY2xlYXIgYW5kIHJld3JpdGUgYm90aCBzaGVldHNcbiAgYXdhaXQgYmF0Y2hVcGRhdGVTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIFtcbiAgICB7XG4gICAgICByYW5nZTogYCR7REFJTFlfT1JERVJTX1NIRUVUX05BTUV9IUExOkRgLFxuICAgICAgdmFsdWVzOiBbZGFpbHlPcmRlcnNIZWFkZXJzLCAuLi5kYWlseU9yZGVyc1RvS2VlcF0sXG4gICAgfSxcbiAgICB7XG4gICAgICByYW5nZTogYCR7T1JERVJfSVRFTVNfU0hFRVRfTkFNRX0hQTE6TWAsXG4gICAgICB2YWx1ZXM6IG9yZGVySXRlbXNIZWFkZXJzLmxlbmd0aCA+IDAgPyBbb3JkZXJJdGVtc0hlYWRlcnMsIC4uLm9yZGVySXRlbXNUb0tlZXBdIDogW10sXG4gICAgfVxuICBdKTtcblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG59XG5cblxuLyoqXG4gKiBTdWJtaXRzIGFuIG9yZGVyIGFuZCBzYXZlcyBpdCB0byB0aGUgJ29yZGVyX2l0ZW1zJyBzaGVldC5cbiAqIElmIGVkaXRpbmcgYW4gZXhpc3Rpbmcgb3JkZXIsIGl0IGZpcnN0IGRlbGV0ZXMgdGhlIG9sZCBpdGVtcy5cbiAqIEBwYXJhbSB7RmluYWxPcmRlcn0gb3JkZXIgLSBUaGUgY29tcGxldGUgb3JkZXIgZGV0YWlscy5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNFZGl0aW5nIC0gQSBmbGFnIHRvIGluZGljYXRlIGlmIHRoaXMgaXMgYW4gZWRpdC5cbiAqIEByZXR1cm5zIHtQcm9taXNlPHtzdWNjZXNzOiBib29sZWFufT59IEEgc3VjY2VzcyBmbGFnLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc3VibWl0T3JkZXIob3JkZXI6IEZpbmFsT3JkZXIsIGlzRWRpdGluZzogYm9vbGVhbiA9IGZhbHNlKTogUHJvbWlzZTx7IHN1Y2Nlc3M6IGJvb2xlYW4gfT4ge1xuICAgIC8vIElmIGVkaXRpbmcsIGZpcnN0IGRlbGV0ZSBhbGwgZXhpc3RpbmcgaXRlbXMgZm9yIHRoYXQgdXNlciBpbiB0aGF0IGRhaWx5IG9yZGVyXG4gICAgaWYgKGlzRWRpdGluZykge1xuICAgICAgICBhd2FpdCBkZWxldGVVc2VyT3JkZXIoeyB1c2VybmFtZTogb3JkZXIudXNlcm5hbWUsIGRhaWx5T3JkZXJJZDogb3JkZXIuZGFpbHlPcmRlcklkIH0pO1xuICAgIH1cbiAgICBcbiAgICAvLyBUaGVuLCBhcHBlbmQgdGhlIG5ldy91cGRhdGVkIGl0ZW1zXG4gICAgY29uc3QgYWxsSXRlbXNSYW5nZSA9IGAke09SREVSX0lURU1TX1NIRUVUX05BTUV9IUEyOkFgO1xuICAgIGNvbnN0IGFsbEl0ZW1JZHNEYXRhID0gYXdhaXQgZ2V0U2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCBhbGxJdGVtc1JhbmdlKTtcbiAgICBsZXQgbGFzdElkTnVtID0gYWxsSXRlbUlkc0RhdGEubGVuZ3RoID4gMFxuICAgICAgICA/IE1hdGgubWF4KDAsIC4uLmFsbEl0ZW1JZHNEYXRhLm1hcChyb3cgPT4gcGFyc2VJbnQoKHJvd1swXSB8fCAnb2kwJykucmVwbGFjZSgnb2knLCAnJyksIDEwKSkuZmlsdGVyKG51bSA9PiAhaXNOYU4obnVtKSkpXG4gICAgICAgIDogMDtcblxuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKTtcbiAgICBjb25zdCBvcmRlclZhbHVlcyA9IFtdO1xuXG4gICAgZm9yIChjb25zdCBpdGVtIG9mIG9yZGVyLml0ZW1zKSB7XG4gICAgICAgIGxhc3RJZE51bSsrOyAvLyBJbmNyZW1lbnQgSUQgZm9yIGVhY2ggaXRlbSBpbiB0aGUgbG9vcFxuICAgICAgICBjb25zdCBuZXdJZCA9IGBvaSR7bGFzdElkTnVtLnRvU3RyaW5nKCkucGFkU3RhcnQoMywgJzAnKX1gO1xuICAgICAgICBjb25zdCBvcHRpb25zU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoaXRlbS5vcHRpb25zKTtcblxuICAgICAgICBvcmRlclZhbHVlcy5wdXNoKFtcbiAgICAgICAgICAgIG5ld0lkLFxuICAgICAgICAgICAgb3JkZXIuZGFpbHlPcmRlcklkLFxuICAgICAgICAgICAgbm93LFxuICAgICAgICAgICAgb3JkZXIudXNlcm5hbWUsXG4gICAgICAgICAgICBvcmRlci52ZW5kb3JJZCxcbiAgICAgICAgICAgIG9yZGVyLnZlbmRvck5hbWUsXG4gICAgICAgICAgICBpdGVtLm1lbnVJdGVtSWQsXG4gICAgICAgICAgICBpdGVtLm5hbWUsXG4gICAgICAgICAgICBpdGVtLnF1YW50aXR5LFxuICAgICAgICAgICAgaXRlbS5wcmljZSxcbiAgICAgICAgICAgIG9wdGlvbnNTdHJpbmcsXG4gICAgICAgICAgICBvcmRlci5ub3RlcyxcbiAgICAgICAgICAgICdGQUxTRScgLy8gaXNQYWlkXG4gICAgICAgIF0pO1xuICAgIH1cbiAgICBcbiAgICAvLyBFbnN1cmUgaGVhZGVycyBleGlzdFxuICAgIGNvbnN0IGhlYWRlcnMgPSBhd2FpdCBnZXRIZWFkZXJzKFNQUkVBRFNIRUVUX0lELCBPUkRFUl9JVEVNU19TSEVFVF9OQU1FKTtcbiAgICBpZiAoaGVhZGVycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgYXdhaXQgdXBkYXRlU2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCBgJHtPUkRFUl9JVEVNU19TSEVFVF9OQU1FfSFBMTpNMWAsIFtbJ2lkJywgJ2RhaWx5T3JkZXJJZCcsICd0aW1lc3RhbXAnLCAndXNlcm5hbWUnLCAndmVuZG9ySWQnLCAndmVuZG9yTmFtZScsICdtZW51SXRlbUlkJywgJ2l0ZW1OYW1lJywgJ3F1YW50aXR5JywgJ3ByaWNlJywgJ29wdGlvbnMnLCAnbm90ZXMnLCAnaXNQYWlkJ11dKTtcbiAgICB9XG5cbiAgICBpZiAob3JkZXJWYWx1ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBhd2FpdCBhcHBlbmRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGAke09SREVSX0lURU1TX1NIRUVUX05BTUV9IUE6TWAsIG9yZGVyVmFsdWVzKTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xufVxuXG5cbmV4cG9ydCB0eXBlIE9yZGVyRGV0YWlsSXRlbSA9IHtcbiAgICBpZDogc3RyaW5nO1xuICAgIGRhaWx5T3JkZXJJZDogc3RyaW5nO1xuICAgIHRpbWVzdGFtcDogc3RyaW5nO1xuICAgIHVzZXJuYW1lOiBzdHJpbmc7XG4gICAgdmVuZG9ySWQ6IHN0cmluZztcbiAgICB2ZW5kb3JOYW1lOiBzdHJpbmc7XG4gICAgbWVudUl0ZW1JZDogc3RyaW5nO1xuICAgIGl0ZW1OYW1lOiBzdHJpbmc7XG4gICAgcXVhbnRpdHk6IG51bWJlcjtcbiAgICBwcmljZTogbnVtYmVyO1xuICAgIG9wdGlvbnM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz47XG4gICAgbm90ZXM6IHN0cmluZztcbiAgICBpc1BhaWQ6IGJvb2xlYW47XG59O1xuXG4vKipcbiAqIFJldHJpZXZlcyBhbGwgb3JkZXIgaXRlbXMgZm9yIGEgc3BlY2lmaWMgZGFpbHkgb3JkZXIuXG4gKiBAcGFyYW0ge3N0cmluZ30gZGFpbHlPcmRlcklkIFRoZSBJRCBvZiB0aGUgZGFpbHkgb3JkZXIuXG4gKiBAcmV0dXJucyB7UHJvbWlzZTx7b3JkZXJEZXRhaWxzOiBPcmRlckRldGFpbEl0ZW1bXSwgZGFpbHlPcmRlcjogRGFpbHlPcmRlciB8IG51bGx9Pn0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIGxpc3Qgb2Ygb3JkZXIgaXRlbXMgYW5kIHRoZSBkYWlseSBvcmRlciBkZXRhaWxzLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0T3JkZXJEZXRhaWxzQnlEYWlseU9yZGVySWQoZGFpbHlPcmRlcklkOiBzdHJpbmcpOiBQcm9taXNlPHsgb3JkZXJEZXRhaWxzOiBPcmRlckRldGFpbEl0ZW1bXSwgZGFpbHlPcmRlcjogRGFpbHlPcmRlciB8IG51bGwgfT4ge1xuICAgIC8vIDEuIEdldCB0aGUgZGFpbHkgb3JkZXIgZGV0YWlsc1xuICAgIGNvbnN0IGFsbERhaWx5T3JkZXJzID0gYXdhaXQgZ2V0QWxsRGFpbHlPcmRlcnMoKTtcbiAgICBjb25zdCBkYWlseU9yZGVyID0gYWxsRGFpbHlPcmRlcnMuZmluZChvID0+IG8uaWQgPT09IGRhaWx5T3JkZXJJZCk7XG5cbiAgICBpZiAoIWRhaWx5T3JkZXIpIHtcbiAgICAgICAgcmV0dXJuIHsgb3JkZXJEZXRhaWxzOiBbXSwgZGFpbHlPcmRlcjogbnVsbCB9O1xuICAgIH1cblxuICAgIC8vIDIuIEdldCBhbGwgb3JkZXIgaXRlbXNcbiAgICBjb25zdCBvcmRlckl0ZW1zUmFuZ2UgPSBgJHtPUkRFUl9JVEVNU19TSEVFVF9OQU1FfSFBOk1gOyAvLyBFeHRlbmRlZCB0byBjb2x1bW4gTSBmb3IgbmV3IGZpZWxkc1xuICAgIGNvbnN0IG9yZGVySXRlbXNEYXRhID0gYXdhaXQgZ2V0U2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCBvcmRlckl0ZW1zUmFuZ2UpO1xuXG4gICAgaWYgKG9yZGVySXRlbXNEYXRhLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgcmV0dXJuIHsgb3JkZXJEZXRhaWxzOiBbXSwgZGFpbHlPcmRlcjogZGFpbHlPcmRlciB9O1xuICAgIH1cblxuICAgIGNvbnN0IGhlYWRlcnMgPSBvcmRlckl0ZW1zRGF0YVswXS5tYXAoaCA9PiBTdHJpbmcoaCkudHJpbSgpKTtcbiAgICBjb25zdCBoZWFkZXJNYXAgPSBoZWFkZXJzLnJlZHVjZSgoYWNjLCBoZWFkZXIsIGluZGV4KSA9PiB7XG4gICAgICAgIGFjY1toZWFkZXIudHJpbSgpXSA9IGluZGV4O1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgIH0sIHt9IGFzIFJlY29yZDxzdHJpbmcsIG51bWJlcj4pO1xuXG4gICAgLy8gQ2hlY2sgZm9yIHJlcXVpcmVkIGNvbHVtbnNcbiAgICBjb25zdCByZXF1aXJlZENvbHMgPSBbJ2lkJywgJ2RhaWx5T3JkZXJJZCcsICd0aW1lc3RhbXAnLCAndXNlcm5hbWUnLCAndmVuZG9ySWQnLCAndmVuZG9yTmFtZScsICdtZW51SXRlbUlkJywgJ2l0ZW1OYW1lJywgJ3F1YW50aXR5JywgJ3ByaWNlJywgJ29wdGlvbnMnLCAnbm90ZXMnLCAnaXNQYWlkJ107XG4gICAgZm9yIChjb25zdCBjb2wgb2YgcmVxdWlyZWRDb2xzKSB7XG4gICAgICAgIGlmIChoZWFkZXJNYXBbY29sXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvcjogVGhlICcke09SREVSX0lURU1TX1NIRUVUX05BTUV9JyBzaGVldCBpcyBtaXNzaW5nIHRoZSByZXF1aXJlZCBjb2x1bW46ICcke2NvbH0nLmApO1xuICAgICAgICAgICAgcmV0dXJuIHsgb3JkZXJEZXRhaWxzOiBbXSwgZGFpbHlPcmRlcjogZGFpbHlPcmRlciB9O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgcm93cyA9IG9yZGVySXRlbXNEYXRhLnNsaWNlKDEpO1xuXG4gICAgLy8gMy4gRmlsdGVyIGl0ZW1zIHRoYXQgbWF0Y2ggdGhlIGRhaWx5T3JkZXJJZFxuICAgIGNvbnN0IGZpbHRlcmVkSXRlbXMgPSByb3dzLmZpbHRlcihyb3cgPT4gcm93W2hlYWRlck1hcFsnZGFpbHlPcmRlcklkJ11dID09PSBkYWlseU9yZGVySWQpO1xuXG4gICAgLy8gNC4gTWFwIHRvIE9yZGVyRGV0YWlsSXRlbSBvYmplY3RzXG4gICAgY29uc3Qgb3JkZXJEZXRhaWxzOiBPcmRlckRldGFpbEl0ZW1bXSA9IGZpbHRlcmVkSXRlbXMubWFwKHJvdyA9PiAoe1xuICAgICAgICBpZDogcm93W2hlYWRlck1hcFsnaWQnXV0gfHwgJycsXG4gICAgICAgIGRhaWx5T3JkZXJJZDogcm93W2hlYWRlck1hcFsnZGFpbHlPcmRlcklkJ11dIHx8ICcnLFxuICAgICAgICB0aW1lc3RhbXA6IHJvd1toZWFkZXJNYXBbJ3RpbWVzdGFtcCddXSB8fCAnJyxcbiAgICAgICAgdXNlcm5hbWU6IHJvd1toZWFkZXJNYXBbJ3VzZXJuYW1lJ11dIHx8ICdOL0EnLFxuICAgICAgICB2ZW5kb3JJZDogcm93W2hlYWRlck1hcFsndmVuZG9ySWQnXV0gfHwgJycsXG4gICAgICAgIHZlbmRvck5hbWU6IHJvd1toZWFkZXJNYXBbJ3ZlbmRvck5hbWUnXV0gfHwgJycsXG4gICAgICAgIG1lbnVJdGVtSWQ6IHJvd1toZWFkZXJNYXBbJ21lbnVJdGVtSWQnXV0gfHwgJycsXG4gICAgICAgIGl0ZW1OYW1lOiByb3dbaGVhZGVyTWFwWydpdGVtTmFtZSddXSB8fCAnTi9BJyxcbiAgICAgICAgcXVhbnRpdHk6IHBhcnNlSW50KHJvd1toZWFkZXJNYXBbJ3F1YW50aXR5J11dIHx8ICcwJywgMTApLFxuICAgICAgICBwcmljZTogcGFyc2VJbnQocm93W2hlYWRlck1hcFsncHJpY2UnXV0gfHwgJzAnLCAxMCksXG4gICAgICAgIG9wdGlvbnM6IHNhZmVQYXJzZU9wdGlvbnMocm93W2hlYWRlck1hcFsnb3B0aW9ucyddXSB8fCAne30nKSxcbiAgICAgICAgbm90ZXM6IHJvd1toZWFkZXJNYXBbJ25vdGVzJ11dIHx8ICcnLFxuICAgICAgICBpc1BhaWQ6IHJvd1toZWFkZXJNYXBbJ2lzUGFpZCddXSA9PT0gJ1RSVUUnIHx8IHJvd1toZWFkZXJNYXBbJ2lzUGFpZCddXSA9PT0gdHJ1ZSxcbiAgICB9KSk7XG5cbiAgICByZXR1cm4geyBvcmRlckRldGFpbHMsIGRhaWx5T3JkZXIgfTtcbn1cblxuZXhwb3J0IHR5cGUgVXNlck9yZGVyR3JvdXAgPSB7XG4gICAgZGFpbHlPcmRlcjogRGFpbHlPcmRlcjtcbiAgICBpdGVtczogT3JkZXJEZXRhaWxJdGVtW107XG4gICAgdG90YWw6IG51bWJlcjtcbiAgICBub3Rlczogc3RyaW5nO1xufVxuXG4vKipcbiAqIFJldHJpZXZlcyBhbGwgb3JkZXJzIGZvciBhIHNwZWNpZmljIHVzZXIsIGdyb3VwZWQgYnkgZGFpbHkgb3JkZXIuXG4gKiBAcGFyYW0ge3N0cmluZ30gdXNlcm5hbWUgVGhlIHVzZXJuYW1lIHRvIGZldGNoIG9yZGVycyBmb3IuXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxVc2VyT3JkZXJHcm91cFtdPn0gQSBsaXN0IG9mIHRoZSB1c2VyJ3Mgb3JkZXJzLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0T3JkZXJzQnlVc2VybmFtZSh1c2VybmFtZTogc3RyaW5nKTogUHJvbWlzZTxVc2VyT3JkZXJHcm91cFtdPiB7XG4gICAgLy8gMS4gR2V0IGFsbCBkYWlseSBvcmRlcnMgYW5kIGFsbCBvcmRlciBpdGVtc1xuICAgIGNvbnN0IFthbGxEYWlseU9yZGVycywgYWxsT3JkZXJJdGVtc0RhdGFdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICBnZXRBbGxEYWlseU9yZGVycygpLFxuICAgICAgICBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGAke09SREVSX0lURU1TX1NIRUVUX05BTUV9IUE6TWApXG4gICAgXSk7XG5cbiAgICBpZiAoYWxsT3JkZXJJdGVtc0RhdGEubGVuZ3RoIDwgMikge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgY29uc3QgaXRlbXNIZWFkZXJzID0gYWxsT3JkZXJJdGVtc0RhdGFbMF0ubWFwKGggPT4gU3RyaW5nKGgpLnRyaW0oKSk7XG4gICAgY29uc3QgaXRlbXNIZWFkZXJNYXAgPSBpdGVtc0hlYWRlcnMucmVkdWNlKChhY2MsIGhlYWRlciwgaW5kZXgpID0+IHtcbiAgICAgICAgYWNjW2hlYWRlci50cmltKCldID0gaW5kZXg7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30gYXMgUmVjb3JkPHN0cmluZywgbnVtYmVyPik7XG5cbiAgICAvLyBDaGVjayBmb3IgcmVxdWlyZWQgY29sdW1uc1xuICAgIGNvbnN0IHJlcXVpcmVkQ29scyA9IFsndXNlcm5hbWUnLCAnZGFpbHlPcmRlcklkJywgJ2lkJywgJ3RpbWVzdGFtcCcsICd2ZW5kb3JJZCcsICd2ZW5kb3JOYW1lJywgJ21lbnVJdGVtSWQnLCAnaXRlbU5hbWUnLCAncXVhbnRpdHknLCAncHJpY2UnLCAnb3B0aW9ucycsICdub3RlcycsICdpc1BhaWQnXTtcbiAgICBmb3IgKGNvbnN0IGNvbCBvZiByZXF1aXJlZENvbHMpIHtcbiAgICAgICAgaWYgKGl0ZW1zSGVhZGVyTWFwW2NvbF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3I6IFRoZSAnJHtPUkRFUl9JVEVNU19TSEVFVF9OQU1FfScgc2hlZXQgaXMgbWlzc2luZyB0aGUgcmVxdWlyZWQgY29sdW1uOiAnJHtjb2x9Jy5gKTtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIDIuIEZpbHRlciBpdGVtcyBmb3IgdGhlIHNwZWNpZmljIHVzZXJuYW1lXG4gICAgY29uc3QgdXNlckl0ZW1zUm93cyA9IGFsbE9yZGVySXRlbXNEYXRhLnNsaWNlKDEpLmZpbHRlcihyb3cgPT4gcm93W2l0ZW1zSGVhZGVyTWFwWyd1c2VybmFtZSddXSA9PT0gdXNlcm5hbWUpO1xuICAgIFxuICAgIGlmICh1c2VySXRlbXNSb3dzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgY29uc3QgdXNlckl0ZW1zOiBPcmRlckRldGFpbEl0ZW1bXSA9IHVzZXJJdGVtc1Jvd3MubWFwKHJvdyA9PiAoe1xuICAgICAgICBpZDogcm93W2l0ZW1zSGVhZGVyTWFwWydpZCddXSB8fCAnJyxcbiAgICAgICAgZGFpbHlPcmRlcklkOiByb3dbaXRlbXNIZWFkZXJNYXBbJ2RhaWx5T3JkZXJJZCddXSB8fCAnJyxcbiAgICAgICAgdGltZXN0YW1wOiByb3dbaXRlbXNIZWFkZXJNYXBbJ3RpbWVzdGFtcCddXSB8fCAnJyxcbiAgICAgICAgdXNlcm5hbWU6IHJvd1tpdGVtc0hlYWRlck1hcFsndXNlcm5hbWUnXV0gfHwgJ04vQScsXG4gICAgICAgIHZlbmRvcklkOiByb3dbaXRlbXNIZWFkZXJNYXBbJ3ZlbmRvcklkJ11dIHx8ICcnLFxuICAgICAgICB2ZW5kb3JOYW1lOiByb3dbaXRlbXNIZWFkZXJNYXBbJ3ZlbmRvck5hbWUnXV0gfHwgJycsXG4gICAgICAgIG1lbnVJdGVtSWQ6IHJvd1tpdGVtc0hlYWRlck1hcFsnbWVudUl0ZW1JZCddXSB8fCAnJyxcbiAgICAgICAgaXRlbU5hbWU6IHJvd1tpdGVtc0hlYWRlck1hcFsnaXRlbU5hbWUnXV0gfHwgJ04vQScsXG4gICAgICAgIHF1YW50aXR5OiBwYXJzZUludChyb3dbaXRlbXNIZWFkZXJNYXBbJ3F1YW50aXR5J11dIHx8ICcwJywgMTApLFxuICAgICAgICBwcmljZTogcGFyc2VJbnQocm93W2l0ZW1zSGVhZGVyTWFwWydwcmljZSddXSB8fCAnMCcsIDEwKSxcbiAgICAgICAgb3B0aW9uczogc2FmZVBhcnNlT3B0aW9ucyhyb3dbaXRlbXNIZWFkZXJNYXBbJ29wdGlvbnMnXV0gfHwgJ3t9JyksXG4gICAgICAgIG5vdGVzOiByb3dbaXRlbXNIZWFkZXJNYXBbJ25vdGVzJ11dIHx8ICcnLFxuICAgICAgICBpc1BhaWQ6IHJvd1tpdGVtc0hlYWRlck1hcFsnaXNQYWlkJ11dID09PSAnVFJVRScgfHwgcm93W2l0ZW1zSGVhZGVyTWFwWydpc1BhaWQnXV0gPT09IHRydWUsXG4gICAgfSkpO1xuICAgIFxuICAgIC8vIDMuIEdyb3VwIGl0ZW1zIGJ5IGRhaWx5T3JkZXJJZFxuICAgIGNvbnN0IGdyb3VwZWRCeURhaWx5T3JkZXIgPSB1c2VySXRlbXMucmVkdWNlKChhY2MsIGl0ZW0pID0+IHtcbiAgICAgICAgY29uc3Qga2V5ID0gaXRlbS5kYWlseU9yZGVySWQ7XG4gICAgICAgIGlmICghYWNjW2tleV0pIHtcbiAgICAgICAgICAgIGFjY1trZXldID0gW107XG4gICAgICAgIH1cbiAgICAgICAgYWNjW2tleV0ucHVzaChpdGVtKTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB7fSBhcyBSZWNvcmQ8c3RyaW5nLCBPcmRlckRldGFpbEl0ZW1bXT4pO1xuICAgIFxuICAgIFxuICAgIC8vIDQuIEZvcm1hdCB0aGUgZmluYWwgb3V0cHV0XG4gICAgY29uc3QgYWxsRGFpbHlPcmRlcnNNYXAgPSBuZXcgTWFwKGFsbERhaWx5T3JkZXJzLm1hcChvID0+IFtvLmlkLCBvXSkpO1xuICAgIGNvbnN0IHJlc3VsdDogVXNlck9yZGVyR3JvdXBbXSA9IFtdO1xuXG4gICAgZm9yIChjb25zdCBkYWlseU9yZGVySWQgaW4gZ3JvdXBlZEJ5RGFpbHlPcmRlcikge1xuICAgICAgICBjb25zdCBkYWlseU9yZGVyID0gYWxsRGFpbHlPcmRlcnNNYXAuZ2V0KGRhaWx5T3JkZXJJZCk7XG4gICAgICAgIGlmIChkYWlseU9yZGVyKSB7XG4gICAgICAgICAgICBjb25zdCBpdGVtcyA9IGdyb3VwZWRCeURhaWx5T3JkZXJbZGFpbHlPcmRlcklkXTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgIC8vIEFnZ3JlZ2F0ZSBpdGVtcyB3aXRoIHRoZSBzYW1lIG1lbnVJdGVtSWQgYW5kIG9wdGlvbnNcbiAgICAgICAgICAgIGNvbnN0IGFnZ3JlZ2F0ZWRJdGVtc01hcCA9IGl0ZW1zLnJlZHVjZSgoYWNjLCBpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uc1N0cmluZyA9IEpTT04uc3RyaW5naWZ5KGl0ZW0ub3B0aW9ucyB8fCB7fSk7XG4gICAgICAgICAgICAgICAgY29uc3QgYWdncmVnYXRpb25LZXkgPSBgJHtpdGVtLm1lbnVJdGVtSWR9fCR7b3B0aW9uc1N0cmluZ31gO1xuICAgICAgICAgICAgICAgIGlmIChhY2MuaGFzKGFnZ3JlZ2F0aW9uS2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBleGlzdGluZ0l0ZW0gPSBhY2MuZ2V0KGFnZ3JlZ2F0aW9uS2V5KSE7XG4gICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nSXRlbS5xdWFudGl0eSArPSBpdGVtLnF1YW50aXR5O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIENyZWF0ZSBhIGNvcHkgdG8gYXZvaWQgbW9kaWZ5aW5nIHRoZSBvcmlnaW5hbCBhcnJheSBpdGVtc1xuICAgICAgICAgICAgICAgICAgICBhY2Muc2V0KGFnZ3JlZ2F0aW9uS2V5LCB7IC4uLml0ZW0gfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgICAgICB9LCBuZXcgTWFwPHN0cmluZywgT3JkZXJEZXRhaWxJdGVtPigpKTtcblxuICAgICAgICAgICAgY29uc3QgZmluYWxJdGVtcyA9IEFycmF5LmZyb20oYWdncmVnYXRlZEl0ZW1zTWFwLnZhbHVlcygpKTtcbiAgICAgICAgICAgIGNvbnN0IHRvdGFsID0gZmluYWxJdGVtcy5yZWR1Y2UoKHN1bSwgaXRlbSkgPT4gc3VtICsgaXRlbS5wcmljZSAqIGl0ZW0ucXVhbnRpdHksIDApO1xuICAgICAgICAgICAgY29uc3Qgbm90ZXMgPSBpdGVtcy5sZW5ndGggPiAwID8gaXRlbXNbMF0ubm90ZXMgOiAnJzsgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBkYWlseU9yZGVyLFxuICAgICAgICAgICAgICAgIGl0ZW1zOiBmaW5hbEl0ZW1zLFxuICAgICAgICAgICAgICAgIHRvdGFsLFxuICAgICAgICAgICAgICAgIG5vdGVzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLy8gNS4gU29ydCB0aGUgZmluYWwgZ3JvdXBzIGJ5IGRhdGUsIG1vc3QgcmVjZW50IGZpcnN0XG4gICAgcmVzdWx0LnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgY29uc3QgZGF0ZUEgPSBuZXcgRGF0ZShgJHthLmRhaWx5T3JkZXIuZGF0ZX1UJHthLmRhaWx5T3JkZXIuZGVhZGxpbmV9YCk7XG4gICAgICAgIGNvbnN0IGRhdGVCID0gbmV3IERhdGUoYCR7Yi5kYWlseU9yZGVyLmRhdGV9VCR7Yi5kYWlseU9yZGVyLmRlYWRsaW5lfWApO1xuICAgICAgICByZXR1cm4gZGF0ZUIuZ2V0VGltZSgpIC0gZGF0ZUEuZ2V0VGltZSgpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBSZXRyaWV2ZXMgYSB1c2VyJ3Mgc3BlY2lmaWMgb3JkZXIgZm9yIGEgZ2l2ZW4gZGFpbHkgb3JkZXIsIGZvcm1hdHRlZCBmb3IgZWRpdGluZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSB1c2VybmFtZSBUaGUgdXNlcm5hbWUuXG4gKiBAcGFyYW0ge3N0cmluZ30gZGFpbHlPcmRlcklkIFRoZSBJRCBvZiB0aGUgZGFpbHkgb3JkZXIuXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxPcmRlckl0ZW1bXT59IEEgbGlzdCBvZiBvcmRlciBpdGVtcyByZWFkeSBmb3IgdGhlIGNhcnQuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRFeGlzdGluZ09yZGVyRm9yRWRpdCh1c2VybmFtZTogc3RyaW5nLCBkYWlseU9yZGVySWQ6IHN0cmluZyk6IFByb21pc2U8T3JkZXJJdGVtW10+IHtcbiAgY29uc3QgYWxsT3JkZXJJdGVtc0RhdGEgPSBhd2FpdCBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGAke09SREVSX0lURU1TX1NIRUVUX05BTUV9IUE6TWApO1xuICBpZiAoYWxsT3JkZXJJdGVtc0RhdGEubGVuZ3RoIDwgMikge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIGNvbnN0IGl0ZW1zSGVhZGVycyA9IGFsbE9yZGVySXRlbXNEYXRhWzBdLm1hcChoID0+IFN0cmluZyhoKS50cmltKCkpO1xuICBjb25zdCBpdGVtc0hlYWRlck1hcCA9IGl0ZW1zSGVhZGVycy5yZWR1Y2UoKGFjYywgaGVhZGVyLCBpbmRleCkgPT4ge1xuICAgIGFjY1toZWFkZXJdID0gaW5kZXg7XG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30gYXMgUmVjb3JkPHN0cmluZywgbnVtYmVyPik7XG5cbiAgY29uc3QgdXNlckl0ZW1zUm93cyA9IGFsbE9yZGVySXRlbXNEYXRhXG4gICAgLnNsaWNlKDEpXG4gICAgLmZpbHRlcihyb3cgPT4gcm93W2l0ZW1zSGVhZGVyTWFwWyd1c2VybmFtZSddXSA9PT0gdXNlcm5hbWUgJiYgcm93W2l0ZW1zSGVhZGVyTWFwWydkYWlseU9yZGVySWQnXV0gPT09IGRhaWx5T3JkZXJJZCk7XG5cbiAgaWYgKHVzZXJJdGVtc1Jvd3MubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIFxuICAvLyBIZWxwZXIgdG8gcmUtZ2VuZXJhdGUgdGhlIGNvbXBvc2l0ZSBpdGVtIElEIGZvciB0aGUgY2FydFxuICBjb25zdCBnZW5lcmF0ZU9yZGVySXRlbUlkID0gKGl0ZW1JZDogc3RyaW5nLCBvcHRpb25zOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+KSA9PiB7XG4gICAgaWYgKE9iamVjdC5rZXlzKG9wdGlvbnMpLmxlbmd0aCA9PT0gMCkgcmV0dXJuIGl0ZW1JZDtcbiAgICBjb25zdCBzb3J0ZWRTZWxlY3Rpb25zID0gT2JqZWN0LmtleXMob3B0aW9ucykuc29ydCgpLm1hcChrZXkgPT4gYCR7a2V5fToke29wdGlvbnNba2V5XX1gKS5qb2luKCd8Jyk7XG4gICAgcmV0dXJuIGAke2l0ZW1JZH1bJHtzb3J0ZWRTZWxlY3Rpb25zfV1gO1xuICB9XG5cbiAgY29uc3Qgb3JkZXJJdGVtczogT3JkZXJJdGVtW10gPSB1c2VySXRlbXNSb3dzLm1hcChyb3cgPT4ge1xuICAgIGNvbnN0IG9wdGlvbnMgPSBzYWZlUGFyc2VPcHRpb25zKHJvd1tpdGVtc0hlYWRlck1hcFsnb3B0aW9ucyddXSB8fCAne30nKTtcbiAgICBjb25zdCBtZW51SXRlbUlkID0gcm93W2l0ZW1zSGVhZGVyTWFwWydtZW51SXRlbUlkJ11dO1xuICAgIHJldHVybiB7XG4gICAgICBpZDogZ2VuZXJhdGVPcmRlckl0ZW1JZChtZW51SXRlbUlkLCBvcHRpb25zKSxcbiAgICAgIG1lbnVJdGVtSWQ6IG1lbnVJdGVtSWQsXG4gICAgICBuYW1lOiByb3dbaXRlbXNIZWFkZXJNYXBbJ2l0ZW1OYW1lJ11dIHx8ICcnLFxuICAgICAgcHJpY2U6IHBhcnNlSW50KHJvd1tpdGVtc0hlYWRlck1hcFsncHJpY2UnXV0gfHwgJzAnLCAxMCksXG4gICAgICBxdWFudGl0eTogcGFyc2VJbnQocm93W2l0ZW1zSGVhZGVyTWFwWydxdWFudGl0eSddXSB8fCAnMCcsIDEwKSxcbiAgICAgIHZlbmRvck5hbWU6IHJvd1tpdGVtc0hlYWRlck1hcFsndmVuZG9yTmFtZSddXSB8fCAnJyxcbiAgICAgIHZlbmRvcklkOiByb3dbaXRlbXNIZWFkZXJNYXBbJ3ZlbmRvcklkJ11dIHx8ICcnLFxuICAgICAgdXNlcm5hbWU6IHVzZXJuYW1lLFxuICAgICAgb3B0aW9uczogb3B0aW9ucyxcbiAgICAgIG5vdGVzOiByb3dbaXRlbXNIZWFkZXJNYXBbJ25vdGVzJ11dIHx8ICcnLFxuICAgIH07XG4gIH0pO1xuICBcbiAgcmV0dXJuIG9yZGVySXRlbXM7XG59XG5cblxuLyoqXG4gKiBEZWxldGVzIGEgdXNlcidzIGVudGlyZSBvcmRlciBmb3IgYSBzcGVjaWZpYyBkYWlseSBvcmRlci5cbiAqIEBwYXJhbSB7b2JqZWN0fSBwYXJhbXMgLSBUaGUgcGFyYW1ldGVycyBmb3IgZGVsZXRpbmcgdGhlIG9yZGVyLlxuICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtcy51c2VybmFtZSAtIFRoZSB1c2VybmFtZSBvZiB0aGUgdXNlci5cbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXMuZGFpbHlPcmRlcklkIC0gVGhlIElEIG9mIHRoZSBkYWlseSBvcmRlciB0byBkZWxldGUuXG4gKiBAcmV0dXJucyB7UHJvbWlzZTx7c3VjY2VzczogYm9vbGVhbn0+fSBBIHN1Y2Nlc3MgZmxhZy5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVVzZXJPcmRlcih7IHVzZXJuYW1lLCBkYWlseU9yZGVySWQgfTogeyB1c2VybmFtZTogc3RyaW5nLCBkYWlseU9yZGVySWQ6IHN0cmluZyB9KTogUHJvbWlzZTx7IHN1Y2Nlc3M6IGJvb2xlYW4gfT4ge1xuICAgIGNvbnN0IFtvcmRlckl0ZW1zRGF0YVdpdGhIZWFkZXJdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGAke09SREVSX0lURU1TX1NIRUVUX05BTUV9IUE6TWApLFxuICAgIF0pO1xuXG4gICAgaWYgKG9yZGVySXRlbXNEYXRhV2l0aEhlYWRlci5sZW5ndGggPCAyKSB7XG4gICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07IC8vIE5vIGl0ZW1zIHRvIGRlbGV0ZVxuICAgIH1cblxuICAgIGNvbnN0IGl0ZW1zSGVhZGVycyA9IG9yZGVySXRlbXNEYXRhV2l0aEhlYWRlclswXTtcbiAgICBjb25zdCBpdGVtc1Jvd3MgPSBvcmRlckl0ZW1zRGF0YVdpdGhIZWFkZXIuc2xpY2UoMSk7XG4gICAgXG4gICAgY29uc3QgaGVhZGVyTWFwID0gaXRlbXNIZWFkZXJzLnJlZHVjZSgoYWNjLCBoLCBpKSA9PiB7IGFjY1tTdHJpbmcoaCldID0gaTsgcmV0dXJuIGFjYzsgfSwge30gYXMgUmVjb3JkPHN0cmluZywgbnVtYmVyPik7XG4gICAgY29uc3QgZGFpbHlPcmRlcklkSW5kZXggPSBoZWFkZXJNYXBbJ2RhaWx5T3JkZXJJZCddO1xuICAgIGNvbnN0IHVzZXJuYW1lSW5kZXggPSBoZWFkZXJNYXBbJ3VzZXJuYW1lJ107XG5cbiAgICBpZiAoZGFpbHlPcmRlcklkSW5kZXggPT09IHVuZGVmaW5lZCB8fCB1c2VybmFtZUluZGV4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlICdvcmRlcl9pdGVtcycgc2hlZXQgaXMgbWlzc2luZyByZXF1aXJlZCBjb2x1bW5zICdkYWlseU9yZGVySWQnIG9yICd1c2VybmFtZScuXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IGl0ZW1zVG9LZWVwID0gaXRlbXNSb3dzLmZpbHRlcihyb3cgPT4gXG4gICAgICAgICEocm93W2RhaWx5T3JkZXJJZEluZGV4XSA9PT0gZGFpbHlPcmRlcklkICYmIHJvd1t1c2VybmFtZUluZGV4XSA9PT0gdXNlcm5hbWUpXG4gICAgKTtcbiAgICBcbiAgICBhd2FpdCBiYXRjaFVwZGF0ZVNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgW3tcbiAgICAgICAgcmFuZ2U6IGAke09SREVSX0lURU1TX1NIRUVUX05BTUV9IUExOk1gLFxuICAgICAgICB2YWx1ZXM6IFtpdGVtc0hlYWRlcnMsIC4uLml0ZW1zVG9LZWVwXSxcbiAgICB9XSk7XG5cbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG59XG5cbi8qKlxuICogTWFya3MgYSB1c2VyJ3Mgb3JkZXIgZm9yIGEgc3BlY2lmaWMgZGFpbHkgb3JkZXIgYXMgcGFpZCBvciB1bnBhaWQuXG4gKiBAcGFyYW0ge29iamVjdH0gcGFyYW1zIC0gVGhlIHBhcmFtZXRlcnMgZm9yIHRoZSBvcGVyYXRpb24uXG4gKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1zLmRhaWx5T3JkZXJJZCAtIFRoZSBJRCBvZiB0aGUgZGFpbHkgb3JkZXIuXG4gKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1zLnVzZXJuYW1lIC0gVGhlIHVzZXJuYW1lIG9mIHRoZSB1c2VyLlxuICogQHBhcmFtIHtib29sZWFufSBwYXJhbXMuaXNQYWlkIC0gVGhlIG5ldyBwYXltZW50IHN0YXR1cy5cbiAqIEByZXR1cm5zIHtQcm9taXNlPHtzdWNjZXNzOiBib29sZWFufT59IEEgc3VjY2VzcyBmbGFnLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbWFya1VzZXJPcmRlckFzUGFpZCh7IGRhaWx5T3JkZXJJZCwgdXNlcm5hbWUsIGlzUGFpZCB9OiB7IGRhaWx5T3JkZXJJZDogc3RyaW5nLCB1c2VybmFtZTogc3RyaW5nLCBpc1BhaWQ6IGJvb2xlYW4gfSk6IFByb21pc2U8eyBzdWNjZXNzOiBib29sZWFuIH0+IHtcbiAgLy8gMS4gR2V0IGFsbCBvcmRlciBpdGVtcyBkYXRhLlxuICBjb25zdCBhbGxJdGVtc0RhdGEgPSBhd2FpdCBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGAke09SREVSX0lURU1TX1NIRUVUX05BTUV9IUE6TWApO1xuXG4gIGlmIChhbGxJdGVtc0RhdGEubGVuZ3RoIDwgMikge1xuICAgIHRocm93IG5ldyBFcnJvcihcIuaJvuS4jeWIsOioguWWruWTgemgheizh+aWmeOAglwiKTtcbiAgfVxuXG4gIGNvbnN0IGhlYWRlcnMgPSBhbGxJdGVtc0RhdGFbMF07XG4gIGNvbnN0IHJvd3MgPSBhbGxJdGVtc0RhdGEuc2xpY2UoMSk7XG4gIGNvbnN0IGhlYWRlck1hcCA9IGhlYWRlcnMucmVkdWNlKChhY2MsIGgsIGkpID0+IHsgYWNjW1N0cmluZyhoKV0gPSBpOyByZXR1cm4gYWNjOyB9LCB7fSBhcyBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+KTtcbiAgY29uc3QgZGFpbHlPcmRlcklkSW5kZXggPSBoZWFkZXJNYXBbJ2RhaWx5T3JkZXJJZCddO1xuICBjb25zdCB1c2VybmFtZUluZGV4ID0gaGVhZGVyTWFwWyd1c2VybmFtZSddO1xuICBjb25zdCBpc1BhaWRJbmRleCA9IGhlYWRlck1hcFsnaXNQYWlkJ107XG5cbiAgaWYgKGRhaWx5T3JkZXJJZEluZGV4ID09PSB1bmRlZmluZWQgfHwgdXNlcm5hbWVJbmRleCA9PT0gdW5kZWZpbmVkIHx8IGlzUGFpZEluZGV4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSAnb3JkZXJfaXRlbXMnIHNoZWV0IGlzIG1pc3NpbmcgcmVxdWlyZWQgY29sdW1uczogJ2RhaWx5T3JkZXJJZCcsICd1c2VybmFtZScsIG9yICdpc1BhaWQnLlwiKTtcbiAgfVxuICAgIFxuICAvLyAyLiBQcmVwYXJlIGJhdGNoIHVwZGF0ZSBkYXRhXG4gIGNvbnN0IGRhdGFUb1VwZGF0ZSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd3MubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCByb3cgPSByb3dzW2ldO1xuICAgIGlmIChyb3dbZGFpbHlPcmRlcklkSW5kZXhdID09PSBkYWlseU9yZGVySWQgJiYgcm93W3VzZXJuYW1lSW5kZXhdID09PSB1c2VybmFtZSkge1xuICAgICAgLy8gU2hlZXQgcm93cyBhcmUgMS1iYXNlZCwgYW5kIHdlIGhhdmUgYSBoZWFkZXIgcm93LCBzbyBhZGQgMi5cbiAgICAgIGNvbnN0IHJvd0luZGV4ID0gaSArIDI7IFxuICAgICAgZGF0YVRvVXBkYXRlLnB1c2goe1xuICAgICAgICByYW5nZTogYCR7T1JERVJfSVRFTVNfU0hFRVRfTkFNRX0hTSR7cm93SW5kZXh9YCwgLy8gJ00nIGlzIHRoZSBpc1BhaWQgY29sdW1uXG4gICAgICAgIHZhbHVlczogW1tpc1BhaWQgPyAnVFJVRScgOiAnRkFMU0UnXV0sXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvLyAzLiBFeGVjdXRlIGJhdGNoIHVwZGF0ZSBpZiB0aGVyZSdzIGFueXRoaW5nIHRvIHVwZGF0ZVxuICBpZiAoZGF0YVRvVXBkYXRlLmxlbmd0aCA+IDApIHtcbiAgICAvLyBUaGlzIGlzIG5vdCBhIFwidHJ1ZVwiIGJhdGNoIHVwZGF0ZSBpbiBvbmUgQVBJIGNhbGwsIGJ1dCBpdCdzIGJldHRlciB0aGFuIHJlYWRpbmcvd3JpdGluZyB0aGUgd2hvbGUgc2hlZXQuXG4gICAgLy8gQSBzaW5nbGUgYmF0Y2hVcGRhdGUgY2FsbCB3b3VsZCBiZSBtb3JlIGVmZmljaWVudCBpZiB0aGUgQVBJIHN0cnVjdHVyZSBhbGxvd3MgaXQgZWFzaWx5LlxuICAgICBjb25zdCBzaGVldHMgPSBhd2FpdCBnZXRBdXRoZW50aWNhdGVkQ2xpZW50KCk7XG4gICAgIGF3YWl0IHNoZWV0cy5zcHJlYWRzaGVldHMudmFsdWVzLmJhdGNoVXBkYXRlKHtcbiAgICAgICAgc3ByZWFkc2hlZXRJZDogU1BSRUFEU0hFRVRfSUQsXG4gICAgICAgIHJlcXVlc3RCb2R5OiB7XG4gICAgICAgICAgICB2YWx1ZUlucHV0T3B0aW9uOiAnVVNFUl9FTlRFUkVEJyxcbiAgICAgICAgICAgIGRhdGE6IGRhdGFUb1VwZGF0ZSxcbiAgICAgICAgfVxuICAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbn1cblxuZXhwb3J0IHR5cGUgVXBkYXRlVXNlck9yZGVyUmVxdWVzdCA9IHtcbiAgICBkYWlseU9yZGVySWQ6IHN0cmluZztcbiAgICB1c2VybmFtZTogc3RyaW5nO1xuICAgIGl0ZW1zOiBPcmRlckRldGFpbEl0ZW1bXTsgLy8gVGhlIGNvbXBsZXRlIG5ldyBsaXN0IG9mIGl0ZW1zXG59O1xuXG4vKipcbiAqIFVwZGF0ZXMgYSB1c2VyJ3MgZW50aXJlIG9yZGVyIGZvciBhIHNwZWNpZmljIGRhaWx5IG9yZGVyLlxuICogSXQgcmVwbGFjZXMgYWxsIG9mIHRoZSB1c2VyJ3MgcHJldmlvdXMgaXRlbXMgd2l0aCB0aGUgbmV3IGxpc3QgcHJvdmlkZWQuXG4gKiBAcGFyYW0ge1VwZGF0ZVVzZXJPcmRlclJlcXVlc3R9IHJlcSAtIFRoZSByZXF1ZXN0IGNvbnRhaW5pbmcgdGhlIHVzZXIncyB1cGRhdGVkIG9yZGVyLlxuICogQHJldHVybnMge1Byb21pc2U8e3N1Y2Nlc3M6IGJvb2xlYW59Pn0gQSBzdWNjZXNzIGZsYWcuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVVc2VyT3JkZXIocmVxOiBVcGRhdGVVc2VyT3JkZXJSZXF1ZXN0KTogUHJvbWlzZTx7IHN1Y2Nlc3M6IGJvb2xlYW4gfT4ge1xuICAgIGNvbnN0IHsgZGFpbHlPcmRlcklkLCB1c2VybmFtZSwgaXRlbXMgfSA9IHJlcTtcblxuICAgIC8vIDEuIEZpcnN0LCBkZWxldGUgYWxsIGV4aXN0aW5nIGl0ZW1zIGZvciB0aGlzIHVzZXIgaW4gdGhpcyBkYWlseSBvcmRlci5cbiAgICAvLyBUaGlzIHNpbXBsaWZpZXMgdGhlIGxvZ2ljIGJ5IG5vdCBoYXZpbmcgdG8gZmluZCBhbmQgdXBkYXRlIGluZGl2aWR1YWwgcm93cy5cbiAgICBhd2FpdCBkZWxldGVVc2VyT3JkZXIoeyB1c2VybmFtZSwgZGFpbHlPcmRlcklkIH0pO1xuXG4gICAgLy8gMi4gSWYgdGhlIG5ldyBsaXN0IG9mIGl0ZW1zIGlzIGVtcHR5LCB3ZSdyZSBkb25lLlxuICAgIGlmIChpdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xuICAgIH1cblxuICAgIC8vIDMuIEFwcGVuZCB0aGUgbmV3IGxpc3Qgb2YgaXRlbXMgdG8gdGhlIHNoZWV0LlxuICAgIGNvbnN0IGFsbEl0ZW1zUmFuZ2UgPSBgJHtPUkRFUl9JVEVNU19TSEVFVF9OQU1FfSFBMjpBYDtcbiAgICBjb25zdCBhbGxJdGVtSWRzRGF0YSA9IGF3YWl0IGdldFNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgYWxsSXRlbXNSYW5nZSk7XG4gICAgbGV0IGxhc3RJZE51bSA9IGFsbEl0ZW1JZHNEYXRhLmxlbmd0aCA+IDBcbiAgICAgICAgPyBNYXRoLm1heCgwLCAuLi5hbGxJdGVtSWRzRGF0YS5tYXAocm93ID0+IHBhcnNlSW50KChyb3dbMF0gfHwgJ29pMCcpLnJlcGxhY2UoJ29pJywgJycpLCAxMCkpLmZpbHRlcihudW0gPT4gIWlzTmFOKG51bSkpKVxuICAgICAgICA6IDA7XG4gICAgXG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpO1xuICAgIGNvbnN0IG9yZGVyVmFsdWVzID0gW107XG4gICAgY29uc3Qgbm90ZXMgPSBpdGVtc1swXT8ubm90ZXMgfHwgJyc7IC8vIEFzc3VtZSBub3RlcyBhcmUgdGhlIHNhbWUgZm9yIGFsbCBpdGVtc1xuICAgIGNvbnN0IGlzUGFpZCA9IGl0ZW1zWzBdPy5pc1BhaWQgfHwgZmFsc2U7IC8vIEFzc3VtZSBwYXltZW50IHN0YXR1cyBpcyB0aGUgc2FtZVxuXG4gICAgZm9yIChjb25zdCBpdGVtIG9mIGl0ZW1zKSB7XG4gICAgICAgIGxhc3RJZE51bSsrO1xuICAgICAgICBjb25zdCBuZXdJZCA9IGBvaSR7bGFzdElkTnVtLnRvU3RyaW5nKCkucGFkU3RhcnQoMywgJzAnKX1gO1xuICAgICAgICBjb25zdCBvcHRpb25zU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoaXRlbS5vcHRpb25zKTtcblxuICAgICAgICBvcmRlclZhbHVlcy5wdXNoKFtcbiAgICAgICAgICAgIG5ld0lkLFxuICAgICAgICAgICAgZGFpbHlPcmRlcklkLFxuICAgICAgICAgICAgbm93LFxuICAgICAgICAgICAgdXNlcm5hbWUsXG4gICAgICAgICAgICBpdGVtLnZlbmRvcklkLFxuICAgICAgICAgICAgaXRlbS52ZW5kb3JOYW1lLFxuICAgICAgICAgICAgaXRlbS5tZW51SXRlbUlkLFxuICAgICAgICAgICAgaXRlbS5pdGVtTmFtZSxcbiAgICAgICAgICAgIGl0ZW0ucXVhbnRpdHksXG4gICAgICAgICAgICBpdGVtLnByaWNlLFxuICAgICAgICAgICAgb3B0aW9uc1N0cmluZyxcbiAgICAgICAgICAgIG5vdGVzLFxuICAgICAgICAgICAgaXNQYWlkID8gJ1RSVUUnIDogJ0ZBTFNFJ1xuICAgICAgICBdKTtcbiAgICB9XG5cbiAgICBpZiAob3JkZXJWYWx1ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBhd2FpdCBhcHBlbmRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGAke09SREVSX0lURU1TX1NIRUVUX05BTUV9IUE6TWAsIG9yZGVyVmFsdWVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6InVTQXdyQnNCIn0=
}}),
"[project]/src/ai/flows/data:4c780d [app-ssr] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"4066d1b1b4713aa5bd03c1ad83a8c05a727d5e03c3":"updateUserOrder"},"src/ai/flows/order-flow.ts",""] */ __turbopack_context__.s({
    "updateUserOrder": (()=>updateUserOrder)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var updateUserOrder = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("4066d1b1b4713aa5bd03c1ad83a8c05a727d5e03c3", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "updateUserOrder"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vb3JkZXItZmxvdy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbid1c2Ugc2VydmVyJztcblxuaW1wb3J0IHsgZ2V0U2hlZXREYXRhLCBhcHBlbmRTaGVldERhdGEsIGdldEhlYWRlcnMsIHVwZGF0ZVNoZWV0RGF0YSwgYmF0Y2hVcGRhdGVTaGVldERhdGEsIGdldEF1dGhlbnRpY2F0ZWRDbGllbnQgfSBmcm9tICdAL3NlcnZpY2VzL3NoZWV0LXNlcnZpY2UnO1xuaW1wb3J0IHsgZ2V0VmVuZG9ycywgdHlwZSBWZW5kb3IgfSBmcm9tICcuL3ZlbmRvci1mbG93JztcbmltcG9ydCB7IHR5cGUgRmluYWxPcmRlciwgdHlwZSBPcmRlckl0ZW0gfSBmcm9tICdAL2NvbXBvbmVudHMvT3JkZXJTdW1tYXJ5JztcbmltcG9ydCB7IFB1Ymxpc2hPcmRlclJlcXVlc3RTY2hlbWEsIHR5cGUgUHVibGlzaE9yZGVyUmVxdWVzdCB9IGZyb20gJ0AvbGliL3NjaGVtYS9vcmRlcic7XG5pbXBvcnQgeyBmb3JtYXQsIHBhcnNlLCBwYXJzZUlTTywgaXNWYWxpZCB9IGZyb20gJ2RhdGUtZm5zJztcblxuY29uc3QgU1BSRUFEU0hFRVRfSUQgPSAnMVpqMmgwY1lscmIybUJhTmdsMS1Qb09LN3RsQ0N3RGNjQVhuNXc2NmhwNGMnO1xuY29uc3QgREFJTFlfT1JERVJTX1NIRUVUX05BTUUgPSAnZGFpbHlfb3JkZXJzJztcbmNvbnN0IE9SREVSX0lURU1TX1NIRUVUX05BTUUgPSAnb3JkZXJfaXRlbXMnO1xuXG5leHBvcnQgdHlwZSBEYWlseU9yZGVyID0ge1xuICAgIGlkOiBzdHJpbmc7XG4gICAgZGF0ZTogc3RyaW5nO1xuICAgIHZlbmRvcklkOiBzdHJpbmc7XG4gICAgdmVuZG9yTmFtZT86IHN0cmluZzsgLy8gT3B0aW9uYWw6IGZvciBkaXNwbGF5IG9uIGFkbWluIHBhZ2VcbiAgICBkZWFkbGluZTogc3RyaW5nO1xufTtcblxuLy8gVGhpcyB0eXBlIGlzIGZvciB0aGUgdXNlci1mYWNpbmcgb3JkZXIgcGFnZVxuZXhwb3J0IHR5cGUgQXZhaWxhYmxlT3JkZXIgPSB7XG4gICAgaWQ6IHN0cmluZzsgLy8gZGFpbHlPcmRlcklkXG4gICAgdmVuZG9yOiBWZW5kb3I7XG4gICAgZGF0ZTogc3RyaW5nO1xuICAgIGRlYWRsaW5lOiBzdHJpbmc7XG59O1xuXG4vLyBIZWxwZXIgdG8gc2FmZWx5IHBhcnNlIHRoZSBvcHRpb25zIHN0cmluZywgd2hpY2ggbWlnaHQgYmUgdmFsaWQgSlNPTiBvciBhIFwia2V5OnZhbHVlXCIgc3RyaW5nLlxuY29uc3Qgc2FmZVBhcnNlT3B0aW9ucyA9IChvcHRpb25zU3RyOiBzdHJpbmcpOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0+IHtcbiAgICBpZiAoIW9wdGlvbnNTdHIgfHwgdHlwZW9mIG9wdGlvbnNTdHIgIT09ICdzdHJpbmcnKSByZXR1cm4ge307XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gRmlyc3QsIHRyeSB0byBwYXJzZSBpdCBhcyBhIHZhbGlkIEpTT04gc3RyaW5nLlxuICAgICAgICAvLyBUaGlzIGhhbmRsZXMgY2FzZXMgbGlrZSAne1wi6aOv6YePXCI6XCLmraPluLhcIixcIui+o+W6plwiOlwi5LiN6L6jXCJ9J1xuICAgICAgICBjb25zdCBwYXJzZWQgPSBKU09OLnBhcnNlKG9wdGlvbnNTdHIpO1xuICAgICAgICBpZiAodHlwZW9mIHBhcnNlZCA9PT0gJ29iamVjdCcgJiYgcGFyc2VkICE9PSBudWxsICYmICFBcnJheS5pc0FycmF5KHBhcnNlZCkpIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJzZWQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIElmIEpTT04ucGFyc2UgZmFpbHMsIGl0J3Mgbm90IGEgSlNPTiBzdHJpbmcuXG4gICAgICAgIC8vIEFzc3VtZSBpdCdzIGEgc2ltcGxlIFwia2V5OnZhbHVlXCIgc3RyaW5nIGxpa2UgXCLpo6/ph4865q2j5bi4XCIuXG4gICAgICAgIC8vIFRoaXMgaXMgYSBmYWxsYmFjayBmb3IgZGF0YSB0aGF0IHdhc24ndCBzdG9yZWQgYXMgSlNPTi5cbiAgICAgICAgY29uc3QgcGFydHMgPSBvcHRpb25zU3RyLnNwbGl0KCc6Jyk7XG4gICAgICAgIGlmIChwYXJ0cy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IHBhcnRzWzBdLnRyaW0oKTtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gcGFydHNbMV0udHJpbSgpO1xuICAgICAgICAgICAgaWYgKGtleSAmJiB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7IFtrZXldOiB2YWx1ZSB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIElmIGl0J3Mgc29tZXRoaW5nIGVsc2Ugd2UgZG9uJ3QgcmVjb2duaXplLCBsb2cgaXQgYW5kIHJldHVybiBlbXB0eS5cbiAgICAgICAgY29uc29sZS53YXJuKGBDb3VsZCBub3QgcGFyc2Ugb3B0aW9ucyBzdHJpbmcgaW50byBhIHZhbGlkIG9iamVjdDogXCIke29wdGlvbnNTdHJ9XCJgKTtcbiAgICB9XG4gICAgLy8gUmV0dXJuIGVtcHR5IG9iamVjdCBpZiBpdCdzIG5vdCBhIHBhcnNhYmxlIEpTT04gb2JqZWN0IG9yIGEgc2ltcGxlIGtleTp2YWx1ZSBwYWlyLlxuICAgIHJldHVybiB7fTtcbn07XG5cblxuLy8gSGVscGVyIGZ1bmN0aW9uIHRvIGZvcm1hdCB0aW1lIGZyb20gU2hlZXRzICh3aGljaCBjYW4gYmUgYSBudW1iZXIpXG5jb25zdCBmb3JtYXRUaW1lID0gKHRpbWVWYWx1ZTogYW55KTogc3RyaW5nID0+IHtcbiAgICBpZiAodHlwZW9mIHRpbWVWYWx1ZSA9PT0gJ3N0cmluZycgJiYgdGltZVZhbHVlLm1hdGNoKC9eXFxkezJ9OlxcZHsyfSg6XFxkezJ9KT8kLykpIHtcbiAgICAgICAgcmV0dXJuIHRpbWVWYWx1ZS5zdWJzdHJpbmcoMCwgNSk7XG4gICAgfVxuICAgIFxuICAgIGlmICh0eXBlb2YgdGltZVZhbHVlID09PSAnbnVtYmVyJyAmJiB0aW1lVmFsdWUgPiAwICYmIHRpbWVWYWx1ZSA8IDEpIHtcbiAgICAgIC8vIEl0J3MgYSB0aW1lIHNlcmlhbCBudW1iZXIgZnJvbSBTaGVldHNcbiAgICAgIGNvbnN0IHRvdGFsU2Vjb25kcyA9IE1hdGgucm91bmQodGltZVZhbHVlICogODY0MDApO1xuICAgICAgY29uc3QgaG91cnMgPSBNYXRoLmZsb29yKHRvdGFsU2Vjb25kcyAvIDM2MDApO1xuICAgICAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IoKHRvdGFsU2Vjb25kcyAlIDM2MDApIC8gNjApO1xuICAgICAgcmV0dXJuIGAke2hvdXJzLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKX06JHttaW51dGVzLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKX1gO1xuICAgIH1cblxuICAgIC8vIFRyeSBwYXJzaW5nIGFzIGEgZGF0ZSBzdHJpbmcgdG8gZXh0cmFjdCB0aW1lXG4gICAgaWYgKHR5cGVvZiB0aW1lVmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBkYXRlID0gcGFyc2VJU08odGltZVZhbHVlKTtcbiAgICAgICAgICAgIGlmIChpc1ZhbGlkKGRhdGUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZvcm1hdChkYXRlLCAnSEg6bW0nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgLy8gSWdub3JlIHBhcnNlIGVycm9ycyBmcm9tIElTT1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjb25zdCB0aW1lTWF0Y2ggPSB0aW1lVmFsdWUubWF0Y2goLyhcXGR7Mn06XFxkezJ9KS8pO1xuICAgICAgICBpZiAodGltZU1hdGNoKSByZXR1cm4gdGltZU1hdGNoWzBdO1xuICAgIH1cbiAgICBcbiAgICAvLyBGYWxsYmFjayBmb3IgdW5leHBlY3RlZCBmb3JtYXRzXG4gICAgcmV0dXJuICcwMDowMCc7IFxufTtcblxuLy8gSGVscGVyIGZ1bmN0aW9uIHRvIGZvcm1hdCBkYXRlIGZyb20gU2hlZXRzICh3aGljaCBjYW4gYmUgYSBudW1iZXIgb3Igc3RyaW5nKVxuY29uc3QgZm9ybWF0RGF0ZSA9IChkYXRlVmFsdWU6IGFueSk6IHN0cmluZyA9PiB7XG4gICAgaWYgKCFkYXRlVmFsdWUpIHJldHVybiBmb3JtYXQobmV3IERhdGUoKSwgJ3l5eXktTU0tZGQnKTsgLy8gUmV0dXJuIHRvZGF5J3MgZGF0ZSBpZiBlbXB0eVxuXG4gICAgbGV0IGRhdGU7XG4gICAgXG4gICAgLy8gSGFuZGxlIFNoZWV0cyBkYXRlIHNlcmlhbCBudW1iZXIgKG51bWJlciBvZiBkYXlzIHNpbmNlIDE4OTktMTItMzApXG4gICAgaWYgKHR5cGVvZiBkYXRlVmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgICAgIGNvbnN0IGV4Y2VsRXBvY2ggPSBuZXcgRGF0ZShEYXRlLlVUQygxODk5LCAxMSwgMzApKTtcbiAgICAgICAgZGF0ZSA9IG5ldyBEYXRlKGV4Y2VsRXBvY2guZ2V0VGltZSgpICsgZGF0ZVZhbHVlICogODY0MDAwMDApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEhhbmRsZSBJU08gc3RyaW5nIGxpa2UgJzIwMjQtMDctMjVUMDA6MDA6MDAuMDAwWicgb3Igc2ltcGxlIHN0cmluZyAnMjAyNC0wNy0yNSdcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgZGF0ZSA9IHBhcnNlSVNPKFN0cmluZyhkYXRlVmFsdWUpKTtcbiAgICAgICAgICAgLy8gSWYgSVNPIHBhcnNpbmcgZmFpbHMsIHRyeSB0aGUgc2ltcGxlIGZvcm1hdFxuICAgICAgICAgICBpZiAoIWlzVmFsaWQoZGF0ZSkpIHtcbiAgICAgICAgICAgICAgIGRhdGUgPSBwYXJzZShTdHJpbmcoZGF0ZVZhbHVlKSwgJ3l5eXktTU0tZGQnLCBuZXcgRGF0ZSgpKTtcbiAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAgZGF0ZSA9IHBhcnNlKFN0cmluZyhkYXRlVmFsdWUpLCAneXl5eS1NTS1kZCcsIG5ldyBEYXRlKCkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8vIElmIGRhdGUgaXMgdmFsaWQsIGZvcm1hdCBpdCwgb3RoZXJ3aXNlIHJldHVybiB0b2RheSdzIGRhdGUgYXMgYSBmYWxsYmFja1xuICAgIHJldHVybiBpc1ZhbGlkKGRhdGUpID8gZm9ybWF0KGRhdGUsICd5eXl5LU1NLWRkJykgOiBmb3JtYXQobmV3IERhdGUoKSwgJ3l5eXktTU0tZGQnKTtcbn07XG5cblxuLyoqXG4gKiBSZXRyaWV2ZXMgYWxsIGF2YWlsYWJsZSBvcmRlcnMgZnJvbSB0aGUgZGFpbHlfb3JkZXJzIHNoZWV0LlxuICogQW55IG9yZGVyIHByZXNlbnQgaXMgY29uc2lkZXJlZCBhdmFpbGFibGUuXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxBdmFpbGFibGVPcmRlcltdPn0gQSBsaXN0IG9mIGF2YWlsYWJsZSB2ZW5kb3JzIGFuZCB0aGVpciBkZWFkbGluZXMuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBdmFpbGFibGVPcmRlcnMoKTogUHJvbWlzZTxBdmFpbGFibGVPcmRlcltdPiB7XG4gICAgY29uc3QgZGFpbHlPcmRlcnNSYW5nZSA9IGAke0RBSUxZX09SREVSU19TSEVFVF9OQU1FfSFBOkRgO1xuICAgIGNvbnN0IFtkYWlseU9yZGVyc0RhdGEsIGFsbFZlbmRvcnNdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGRhaWx5T3JkZXJzUmFuZ2UpLFxuICAgICAgICBnZXRWZW5kb3JzKClcbiAgICBdKTtcblxuICAgIGlmICghZGFpbHlPcmRlcnNEYXRhIHx8IGRhaWx5T3JkZXJzRGF0YS5sZW5ndGggPCAyKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgaGVhZGVyID0gZGFpbHlPcmRlcnNEYXRhWzBdO1xuICAgIGNvbnN0IHJvd3MgPSBkYWlseU9yZGVyc0RhdGEuc2xpY2UoMSk7XG5cbiAgICBjb25zdCBoZWFkZXJNYXAgPSBoZWFkZXIucmVkdWNlKChhY2MsIGgsIGkpID0+IHtcbiAgICAgICAgYWNjW1N0cmluZyhoKV0gPSBpO1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgIH0sIHt9IGFzIFJlY29yZDxzdHJpbmcsIG51bWJlcj4pO1xuXG4gICAgY29uc3QgYWxsVmVuZG9yc01hcCA9IG5ldyBNYXAoYWxsVmVuZG9ycy5tYXAodiA9PiBbdi52ZW5kb3JJZCwgdl0pKTtcblxuICAgIGNvbnN0IGF2YWlsYWJsZU9yZGVyczogQXZhaWxhYmxlT3JkZXJbXSA9IFtdO1xuXG4gICAgZm9yIChjb25zdCByb3cgb2Ygcm93cykge1xuICAgICAgICBpZiAocm93LmV2ZXJ5KGNlbGwgPT4gIWNlbGwpKSBjb250aW51ZTsgLy8gU2tpcCBjb21wbGV0ZWx5IGVtcHR5IHJvd3NcblxuICAgICAgICBjb25zdCBpZCA9IHJvd1toZWFkZXJNYXBbJ2lkJ11dO1xuICAgICAgICBjb25zdCB2ZW5kb3JJZCA9IHJvd1toZWFkZXJNYXBbJ3ZlbmRvcklkJ11dO1xuICAgICAgICBjb25zdCBkYXRlUmF3ID0gcm93W2hlYWRlck1hcFsnZGF0ZSddXTtcbiAgICAgICAgY29uc3QgZGVhZGxpbmVSYXcgPSByb3dbaGVhZGVyTWFwWydkZWFkbGluZSddXTtcblxuICAgICAgICBpZiAoIWlkIHx8ICF2ZW5kb3JJZCkgY29udGludWU7IC8vIFNraXAgcm93cyB3aXRob3V0IGVzc2VudGlhbCBkYXRhXG5cbiAgICAgICAgY29uc3QgdmVuZG9yID0gYWxsVmVuZG9yc01hcC5nZXQodmVuZG9ySWQpO1xuICAgICAgICBpZiAoIXZlbmRvciB8fCAhdmVuZG9yLmlzQWN0aXZlKSBjb250aW51ZTtcblxuICAgICAgICBhdmFpbGFibGVPcmRlcnMucHVzaCh7XG4gICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICB2ZW5kb3IsXG4gICAgICAgICAgICBkYXRlOiBmb3JtYXREYXRlKGRhdGVSYXcpLFxuICAgICAgICAgICAgZGVhZGxpbmU6IGZvcm1hdFRpbWUoZGVhZGxpbmVSYXcpIC8vIEZvcm1hdCB0aGUgZGVhZGxpbmVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGF2YWlsYWJsZU9yZGVycztcbn1cblxuLyoqXG4gKiBSZXRyaWV2ZXMgYWxsIGRhaWx5IG9yZGVycyBmb3IgYWRtaW4gZGlzcGxheS5cbiAqIEByZXR1cm5zIHtQcm9taXNlPERhaWx5T3JkZXJbXT59IEEgbGlzdCBvZiBhbGwgcHVibGlzaGVkIG9yZGVycy5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbERhaWx5T3JkZXJzKCk6IFByb21pc2U8RGFpbHlPcmRlcltdPiB7XG4gICAgY29uc3QgZGFpbHlPcmRlcnNSYW5nZSA9IGAke0RBSUxZX09SREVSU19TSEVFVF9OQU1FfSFBOkRgO1xuICAgICBjb25zdCBbZGFpbHlPcmRlcnNEYXRhLCBhbGxWZW5kb3JzXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgZ2V0U2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCBkYWlseU9yZGVyc1JhbmdlKSxcbiAgICAgICAgZ2V0VmVuZG9ycygpXG4gICAgXSk7XG4gICAgXG4gICAgaWYgKCFkYWlseU9yZGVyc0RhdGEgfHwgZGFpbHlPcmRlcnNEYXRhLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIGNvbnN0IGhlYWRlciA9IGRhaWx5T3JkZXJzRGF0YVswXTtcbiAgICBjb25zdCByb3dzID0gZGFpbHlPcmRlcnNEYXRhLnNsaWNlKDEpO1xuICAgIGNvbnN0IGFsbFZlbmRvcnNNYXAgPSBuZXcgTWFwKGFsbFZlbmRvcnMubWFwKHYgPT4gW3YudmVuZG9ySWQsIHZdKSk7XG4gICAgXG4gICAgY29uc3QgaGVhZGVyTWFwID0gaGVhZGVyLnJlZHVjZSgoYWNjLCBoLCBpKSA9PiB7XG4gICAgICAgIGFjY1tTdHJpbmcoaCldID0gaTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB7fSBhcyBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+KTtcblxuICAgIGNvbnN0IG9yZGVycyA9IHJvd3MubWFwKHJvdyA9PiB7XG4gICAgICAgIGNvbnN0IHZlbmRvcklkID0gcm93W2hlYWRlck1hcFsndmVuZG9ySWQnXV07XG4gICAgICAgIGNvbnN0IHZlbmRvciA9IGFsbFZlbmRvcnNNYXAuZ2V0KHZlbmRvcklkKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZDogcm93W2hlYWRlck1hcFsnaWQnXV0gfHwgJycsXG4gICAgICAgICAgICBkYXRlOiBmb3JtYXREYXRlKHJvd1toZWFkZXJNYXBbJ2RhdGUnXV0pLFxuICAgICAgICAgICAgdmVuZG9ySWQ6IHZlbmRvcklkIHx8ICcnLFxuICAgICAgICAgICAgdmVuZG9yTmFtZTogdmVuZG9yID8gdmVuZG9yLnZlbmRvck5hbWUgOiAn5pyq55+l5bqX5a62JyxcbiAgICAgICAgICAgIGRlYWRsaW5lOiBmb3JtYXRUaW1lKHJvd1toZWFkZXJNYXBbJ2RlYWRsaW5lJ11dKVxuICAgICAgICB9O1xuICAgIH0pLmZpbHRlcihvcmRlciA9PiBvcmRlci5pZCk7IC8vIEZpbHRlciBvdXQgYW55IGVtcHR5IHJvd3NcblxuICAgIC8vIFNvcnQgb3JkZXJzIGJ5IGRhdGUgYW5kIHRoZW4gYnkgZGVhZGxpbmUsIGFzY2VuZGluZyAoY2xvc2VzdCBmaXJzdClcbiAgICBvcmRlcnMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICBjb25zdCBkYXRlQSA9IG5ldyBEYXRlKGAke2EuZGF0ZX1UJHthLmRlYWRsaW5lfWApO1xuICAgICAgICBjb25zdCBkYXRlQiA9IG5ldyBEYXRlKGAke2IuZGF0ZX1UJHtiLmRlYWRsaW5lfWApO1xuICAgICAgICByZXR1cm4gZGF0ZUEuZ2V0VGltZSgpIC0gZGF0ZUIuZ2V0VGltZSgpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG9yZGVycztcbn1cblxuXG4vKipcbiAqIFB1Ymxpc2hlcyBhIG5ldyBvcmRlciBmb3IgYSBzcGVjaWZpYyBkYXRlLCB2ZW5kb3IgYW5kIGRlYWRsaW5lLlxuICogQHBhcmFtIHtQdWJsaXNoT3JkZXJSZXF1ZXN0fSByZXEgLSBUaGUgcmVxdWVzdCBjb250YWluaW5nIGRhdGUsIHZlbmRvcklkIGFuZCBkZWFkbGluZS5cbiAqIEByZXR1cm5zIHtQcm9taXNlPHtzdWNjZXNzOiBib29sZWFufT59IEEgc3VjY2VzcyBmbGFnLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcHVibGlzaE9yZGVyKHJlcTogUHVibGlzaE9yZGVyUmVxdWVzdCk6IFByb21pc2U8eyBzdWNjZXNzOiBib29sZWFuIH0+IHtcbiAgY29uc3QgdmFsaWRhdGlvbiA9IFB1Ymxpc2hPcmRlclJlcXVlc3RTY2hlbWEuc2FmZVBhcnNlKHJlcSk7XG4gIGlmICghdmFsaWRhdGlvbi5zdWNjZXNzKSB7XG4gICAgY29uc3QgZXJyb3JNc2cgPSB2YWxpZGF0aW9uLmVycm9yLmVycm9ycy5tYXAoZSA9PiBgJHtlLnBhdGguam9pbignLicpfTogJHtlLm1lc3NhZ2V9YCkuam9pbignLCAnKTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYOi8uOWFpeizh+aWmeacieiqpDogJHtlcnJvck1zZ31gKTtcbiAgfVxuXG4gIGNvbnN0IGFsbE9yZGVyc1JhbmdlID0gYCR7REFJTFlfT1JERVJTX1NIRUVUX05BTUV9IUEyOkFgO1xuICBjb25zdCBhbGxPcmRlcklkc0RhdGEgPSBhd2FpdCBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGFsbE9yZGVyc1JhbmdlKTtcbiAgICBjb25zdCBsYXN0SWROdW0gPSBhbGxPcmRlcklkc0RhdGEubGVuZ3RoID4gMCBcbiAgICAgICAgPyBNYXRoLm1heCgwLCAuLi5hbGxPcmRlcklkc0RhdGEubWFwKHJvdyA9PiBwYXJzZUludCgocm93WzBdIHx8ICdkbzAnKS5yZXBsYWNlKCdkbycsICcnKSwgMTApKS5maWx0ZXIobnVtID0+ICFpc05hTihudW0pKSlcbiAgICAgICAgOiAwO1xuICBjb25zdCBuZXdJZCA9IGBkbyR7KGxhc3RJZE51bSArIDEpLnRvU3RyaW5nKCkucGFkU3RhcnQoMywgJzAnKX1gO1xuXG4gIGNvbnN0IHZhbHVlcyA9IFtcbiAgICBbbmV3SWQsIHJlcS5kYXRlLCByZXEudmVuZG9ySWQsIHJlcS5kZWFkbGluZV1cbiAgXTtcbiAgXG4gIC8vIEVuc3VyZSBoZWFkZXJzIGV4aXN0XG4gIGNvbnN0IGhlYWRlcnMgPSBhd2FpdCBnZXRIZWFkZXJzKFNQUkVBRFNIRUVUX0lELCBEQUlMWV9PUkRFUlNfU0hFRVRfTkFNRSk7XG4gIGlmIChoZWFkZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgYXdhaXQgdXBkYXRlU2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCBgJHtEQUlMWV9PUkRFUlNfU0hFRVRfTkFNRX0hQTE6RDFgLCBbWydpZCcsICdkYXRlJywgJ3ZlbmRvcklkJywgJ2RlYWRsaW5lJ11dKTtcbiAgfVxuXG4gIGF3YWl0IGFwcGVuZFNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgYCR7REFJTFlfT1JERVJTX1NIRUVUX05BTUV9IUE6RGAsIHZhbHVlcyk7XG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbn1cblxuZXhwb3J0IHR5cGUgVXBkYXRlRGFpbHlPcmRlclJlcXVlc3QgPSB7XG4gICAgb3JkZXJJZDogc3RyaW5nO1xuICAgIHZlbmRvcklkOiBzdHJpbmc7XG4gICAgZGF0ZTogc3RyaW5nO1xuICAgIGRlYWRsaW5lOiBzdHJpbmc7XG59XG5cbi8qKlxuICogVXBkYXRlcyBhbiBleGlzdGluZyBkYWlseSBvcmRlcidzIGRhdGUgYW5kIGRlYWRsaW5lLlxuICogQHBhcmFtIHtVcGRhdGVEYWlseU9yZGVyUmVxdWVzdH0gcmVxIC0gVGhlIHJlcXVlc3QgY29udGFpbmluZyBvcmRlcklkLCBkYXRlIGFuZCBkZWFkbGluZS5cbiAqIEByZXR1cm5zIHtQcm9taXNlPHtzdWNjZXNzOiBib29sZWFufT59IEEgc3VjY2VzcyBmbGFnLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlRGFpbHlPcmRlcihyZXE6IFVwZGF0ZURhaWx5T3JkZXJSZXF1ZXN0KTogUHJvbWlzZTx7IHN1Y2Nlc3M6IGJvb2xlYW4gfT4ge1xuICAgIGNvbnN0IHsgb3JkZXJJZCwgdmVuZG9ySWQsIGRhdGUsIGRlYWRsaW5lIH0gPSByZXE7XG4gICAgXG4gICAgLy8gMS4gRmluZCB0aGUgcm93IG9mIHRoZSBvcmRlciB0byB1cGRhdGVcbiAgICBjb25zdCBhbGxPcmRlcnNEYXRhID0gYXdhaXQgZ2V0U2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCBgJHtEQUlMWV9PUkRFUlNfU0hFRVRfTkFNRX0hQTpBYCk7XG4gICAgY29uc3Qgcm93SW5kZXggPSBhbGxPcmRlcnNEYXRhLmZpbmRJbmRleChyb3cgPT4gcm93WzBdID09PSBvcmRlcklkKTtcbiAgICBcbiAgICBpZiAocm93SW5kZXggPT09IC0xKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihg5om+5LiN5YiwIElEIOeCuiAke29yZGVySWR9IOeahOioguWWruOAgmApO1xuICAgIH1cblxuICAgIC8vICsxIGJlY2F1c2Ugc2hlZXQgcm93cyBhcmUgMS1iYXNlZC5cbiAgICBjb25zdCByb3dUb1VwZGF0ZSA9IHJvd0luZGV4ICsgMTtcbiAgICBcbiAgICAvLyBXZSB1cGRhdGUgZGF0ZSBhbmQgZGVhZGxpbmUuIFZlbmRvcklkIGlzIG5vdCBjaGFuZ2VkLlxuICAgIC8vIFRoZSByYW5nZSBzaG91bGQgYmUgQng6RHggdG8gdXBkYXRlIGRhdGUgYW5kIGRlYWRsaW5lLlxuICAgIGNvbnN0IHVwZGF0ZVJhbmdlID0gYCR7REFJTFlfT1JERVJTX1NIRUVUX05BTUV9IUIke3Jvd1RvVXBkYXRlfTpEJHtyb3dUb1VwZGF0ZX1gO1xuICAgIGF3YWl0IHVwZGF0ZVNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgdXBkYXRlUmFuZ2UsIFtbZGF0ZSwgdmVuZG9ySWQsIGRlYWRsaW5lXV0pO1xuXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xufVxuXG5cbi8qKlxuICogRGVsZXRlcyBhIHB1Ymxpc2hlZCBkYWlseSBvcmRlciBhbmQgaXRzIGFzc29jaWF0ZWQgb3JkZXIgaXRlbXMuXG4gKiBAcGFyYW0ge3N0cmluZ30gZGFpbHlPcmRlcklkIFRoZSBJRCBvZiB0aGUgZGFpbHkgb3JkZXIgdG8gZGVsZXRlLlxuICogQHJldHVybnMge1Byb21pc2U8e3N1Y2Nlc3M6IGJvb2xlYW59Pn0gQSBzdWNjZXNzIGZsYWcuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVEYWlseU9yZGVyKGRhaWx5T3JkZXJJZDogc3RyaW5nKTogUHJvbWlzZTx7IHN1Y2Nlc3M6IGJvb2xlYW4gfT4ge1xuICAvLyAxLiBHZXQgYWxsIGRhdGEgZnJvbSBib3RoIHNoZWV0c1xuICBjb25zdCBbZGFpbHlPcmRlcnNEYXRhV2l0aEhlYWRlciwgb3JkZXJJdGVtc0RhdGFXaXRoSGVhZGVyXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGAke0RBSUxZX09SREVSU19TSEVFVF9OQU1FfSFBOkRgKSxcbiAgICBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGAke09SREVSX0lURU1TX1NIRUVUX05BTUV9IUE6TWApLCAvLyBSZWFkIHVwIHRvIGNvbHVtbiBNXG4gIF0pO1xuXG4gIGlmIChkYWlseU9yZGVyc0RhdGFXaXRoSGVhZGVyLmxlbmd0aCA8IDIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG4gIH1cblxuICBjb25zdCBkYWlseU9yZGVyc0hlYWRlcnMgPSBkYWlseU9yZGVyc0RhdGFXaXRoSGVhZGVyWzBdO1xuICBjb25zdCBkYWlseU9yZGVyc1Jvd3MgPSBkYWlseU9yZGVyc0RhdGFXaXRoSGVhZGVyLnNsaWNlKDEpO1xuICBcbiAgY29uc3Qgb3JkZXJJdGVtc0hlYWRlcnMgPSBvcmRlckl0ZW1zRGF0YVdpdGhIZWFkZXIubGVuZ3RoID4gMCA/IG9yZGVySXRlbXNEYXRhV2l0aEhlYWRlclswXSA6IFtdO1xuICBjb25zdCBvcmRlckl0ZW1zUm93cyA9IG9yZGVySXRlbXNEYXRhV2l0aEhlYWRlci5sZW5ndGggPiAxID8gb3JkZXJJdGVtc0RhdGFXaXRoSGVhZGVyLnNsaWNlKDEpIDogW107XG5cbiAgLy8gMi4gRmlsdGVyIHRoZSByb3dzIHRvIGtlZXAgZm9yIGJvdGggc2hlZXRzXG4gIGNvbnN0IGRhaWx5T3JkZXJzVG9LZWVwID0gZGFpbHlPcmRlcnNSb3dzLmZpbHRlcihyb3cgPT4gcm93WzBdICE9PSBkYWlseU9yZGVySWQpO1xuXG4gIGxldCBvcmRlckl0ZW1zVG9LZWVwID0gb3JkZXJJdGVtc1Jvd3M7XG4gIGlmIChvcmRlckl0ZW1zUm93cy5sZW5ndGggPiAwICYmIG9yZGVySXRlbXNIZWFkZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IG9yZGVySXRlbXNIZWFkZXJNYXAgPSBvcmRlckl0ZW1zSGVhZGVycy5yZWR1Y2UoKGFjYywgaCwgaSkgPT4geyBhY2NbU3RyaW5nKGgpXSA9IGk7IHJldHVybiBhY2M7IH0sIHt9IGFzIFJlY29yZDxzdHJpbmcsIG51bWJlcj4pO1xuICAgICAgY29uc3QgZGFpbHlPcmRlcklkSW5kZXggPSBvcmRlckl0ZW1zSGVhZGVyTWFwWydkYWlseU9yZGVySWQnXTtcbiAgICAgIFxuICAgICAgLy8gRW5zdXJlIHRoZSBkYWlseU9yZGVySWQgY29sdW1uIGV4aXN0cyBiZWZvcmUgZmlsdGVyaW5nXG4gICAgICBpZiAoZGFpbHlPcmRlcklkSW5kZXggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIG9yZGVySXRlbXNUb0tlZXAgPSBvcmRlckl0ZW1zUm93cy5maWx0ZXIoaXRlbVJvdyA9PiBpdGVtUm93W2RhaWx5T3JkZXJJZEluZGV4XSAhPT0gZGFpbHlPcmRlcklkKTtcbiAgICAgIH1cbiAgfVxuXG4gIC8vIDQuIFByZXBhcmUgYmF0Y2ggdXBkYXRlIGRhdGEgdG8gY2xlYXIgYW5kIHJld3JpdGUgYm90aCBzaGVldHNcbiAgYXdhaXQgYmF0Y2hVcGRhdGVTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIFtcbiAgICB7XG4gICAgICByYW5nZTogYCR7REFJTFlfT1JERVJTX1NIRUVUX05BTUV9IUExOkRgLFxuICAgICAgdmFsdWVzOiBbZGFpbHlPcmRlcnNIZWFkZXJzLCAuLi5kYWlseU9yZGVyc1RvS2VlcF0sXG4gICAgfSxcbiAgICB7XG4gICAgICByYW5nZTogYCR7T1JERVJfSVRFTVNfU0hFRVRfTkFNRX0hQTE6TWAsXG4gICAgICB2YWx1ZXM6IG9yZGVySXRlbXNIZWFkZXJzLmxlbmd0aCA+IDAgPyBbb3JkZXJJdGVtc0hlYWRlcnMsIC4uLm9yZGVySXRlbXNUb0tlZXBdIDogW10sXG4gICAgfVxuICBdKTtcblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG59XG5cblxuLyoqXG4gKiBTdWJtaXRzIGFuIG9yZGVyIGFuZCBzYXZlcyBpdCB0byB0aGUgJ29yZGVyX2l0ZW1zJyBzaGVldC5cbiAqIElmIGVkaXRpbmcgYW4gZXhpc3Rpbmcgb3JkZXIsIGl0IGZpcnN0IGRlbGV0ZXMgdGhlIG9sZCBpdGVtcy5cbiAqIEBwYXJhbSB7RmluYWxPcmRlcn0gb3JkZXIgLSBUaGUgY29tcGxldGUgb3JkZXIgZGV0YWlscy5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNFZGl0aW5nIC0gQSBmbGFnIHRvIGluZGljYXRlIGlmIHRoaXMgaXMgYW4gZWRpdC5cbiAqIEByZXR1cm5zIHtQcm9taXNlPHtzdWNjZXNzOiBib29sZWFufT59IEEgc3VjY2VzcyBmbGFnLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc3VibWl0T3JkZXIob3JkZXI6IEZpbmFsT3JkZXIsIGlzRWRpdGluZzogYm9vbGVhbiA9IGZhbHNlKTogUHJvbWlzZTx7IHN1Y2Nlc3M6IGJvb2xlYW4gfT4ge1xuICAgIC8vIElmIGVkaXRpbmcsIGZpcnN0IGRlbGV0ZSBhbGwgZXhpc3RpbmcgaXRlbXMgZm9yIHRoYXQgdXNlciBpbiB0aGF0IGRhaWx5IG9yZGVyXG4gICAgaWYgKGlzRWRpdGluZykge1xuICAgICAgICBhd2FpdCBkZWxldGVVc2VyT3JkZXIoeyB1c2VybmFtZTogb3JkZXIudXNlcm5hbWUsIGRhaWx5T3JkZXJJZDogb3JkZXIuZGFpbHlPcmRlcklkIH0pO1xuICAgIH1cbiAgICBcbiAgICAvLyBUaGVuLCBhcHBlbmQgdGhlIG5ldy91cGRhdGVkIGl0ZW1zXG4gICAgY29uc3QgYWxsSXRlbXNSYW5nZSA9IGAke09SREVSX0lURU1TX1NIRUVUX05BTUV9IUEyOkFgO1xuICAgIGNvbnN0IGFsbEl0ZW1JZHNEYXRhID0gYXdhaXQgZ2V0U2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCBhbGxJdGVtc1JhbmdlKTtcbiAgICBsZXQgbGFzdElkTnVtID0gYWxsSXRlbUlkc0RhdGEubGVuZ3RoID4gMFxuICAgICAgICA/IE1hdGgubWF4KDAsIC4uLmFsbEl0ZW1JZHNEYXRhLm1hcChyb3cgPT4gcGFyc2VJbnQoKHJvd1swXSB8fCAnb2kwJykucmVwbGFjZSgnb2knLCAnJyksIDEwKSkuZmlsdGVyKG51bSA9PiAhaXNOYU4obnVtKSkpXG4gICAgICAgIDogMDtcblxuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKTtcbiAgICBjb25zdCBvcmRlclZhbHVlcyA9IFtdO1xuXG4gICAgZm9yIChjb25zdCBpdGVtIG9mIG9yZGVyLml0ZW1zKSB7XG4gICAgICAgIGxhc3RJZE51bSsrOyAvLyBJbmNyZW1lbnQgSUQgZm9yIGVhY2ggaXRlbSBpbiB0aGUgbG9vcFxuICAgICAgICBjb25zdCBuZXdJZCA9IGBvaSR7bGFzdElkTnVtLnRvU3RyaW5nKCkucGFkU3RhcnQoMywgJzAnKX1gO1xuICAgICAgICBjb25zdCBvcHRpb25zU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoaXRlbS5vcHRpb25zKTtcblxuICAgICAgICBvcmRlclZhbHVlcy5wdXNoKFtcbiAgICAgICAgICAgIG5ld0lkLFxuICAgICAgICAgICAgb3JkZXIuZGFpbHlPcmRlcklkLFxuICAgICAgICAgICAgbm93LFxuICAgICAgICAgICAgb3JkZXIudXNlcm5hbWUsXG4gICAgICAgICAgICBvcmRlci52ZW5kb3JJZCxcbiAgICAgICAgICAgIG9yZGVyLnZlbmRvck5hbWUsXG4gICAgICAgICAgICBpdGVtLm1lbnVJdGVtSWQsXG4gICAgICAgICAgICBpdGVtLm5hbWUsXG4gICAgICAgICAgICBpdGVtLnF1YW50aXR5LFxuICAgICAgICAgICAgaXRlbS5wcmljZSxcbiAgICAgICAgICAgIG9wdGlvbnNTdHJpbmcsXG4gICAgICAgICAgICBvcmRlci5ub3RlcyxcbiAgICAgICAgICAgICdGQUxTRScgLy8gaXNQYWlkXG4gICAgICAgIF0pO1xuICAgIH1cbiAgICBcbiAgICAvLyBFbnN1cmUgaGVhZGVycyBleGlzdFxuICAgIGNvbnN0IGhlYWRlcnMgPSBhd2FpdCBnZXRIZWFkZXJzKFNQUkVBRFNIRUVUX0lELCBPUkRFUl9JVEVNU19TSEVFVF9OQU1FKTtcbiAgICBpZiAoaGVhZGVycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgYXdhaXQgdXBkYXRlU2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCBgJHtPUkRFUl9JVEVNU19TSEVFVF9OQU1FfSFBMTpNMWAsIFtbJ2lkJywgJ2RhaWx5T3JkZXJJZCcsICd0aW1lc3RhbXAnLCAndXNlcm5hbWUnLCAndmVuZG9ySWQnLCAndmVuZG9yTmFtZScsICdtZW51SXRlbUlkJywgJ2l0ZW1OYW1lJywgJ3F1YW50aXR5JywgJ3ByaWNlJywgJ29wdGlvbnMnLCAnbm90ZXMnLCAnaXNQYWlkJ11dKTtcbiAgICB9XG5cbiAgICBpZiAob3JkZXJWYWx1ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBhd2FpdCBhcHBlbmRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGAke09SREVSX0lURU1TX1NIRUVUX05BTUV9IUE6TWAsIG9yZGVyVmFsdWVzKTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xufVxuXG5cbmV4cG9ydCB0eXBlIE9yZGVyRGV0YWlsSXRlbSA9IHtcbiAgICBpZDogc3RyaW5nO1xuICAgIGRhaWx5T3JkZXJJZDogc3RyaW5nO1xuICAgIHRpbWVzdGFtcDogc3RyaW5nO1xuICAgIHVzZXJuYW1lOiBzdHJpbmc7XG4gICAgdmVuZG9ySWQ6IHN0cmluZztcbiAgICB2ZW5kb3JOYW1lOiBzdHJpbmc7XG4gICAgbWVudUl0ZW1JZDogc3RyaW5nO1xuICAgIGl0ZW1OYW1lOiBzdHJpbmc7XG4gICAgcXVhbnRpdHk6IG51bWJlcjtcbiAgICBwcmljZTogbnVtYmVyO1xuICAgIG9wdGlvbnM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz47XG4gICAgbm90ZXM6IHN0cmluZztcbiAgICBpc1BhaWQ6IGJvb2xlYW47XG59O1xuXG4vKipcbiAqIFJldHJpZXZlcyBhbGwgb3JkZXIgaXRlbXMgZm9yIGEgc3BlY2lmaWMgZGFpbHkgb3JkZXIuXG4gKiBAcGFyYW0ge3N0cmluZ30gZGFpbHlPcmRlcklkIFRoZSBJRCBvZiB0aGUgZGFpbHkgb3JkZXIuXG4gKiBAcmV0dXJucyB7UHJvbWlzZTx7b3JkZXJEZXRhaWxzOiBPcmRlckRldGFpbEl0ZW1bXSwgZGFpbHlPcmRlcjogRGFpbHlPcmRlciB8IG51bGx9Pn0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIGxpc3Qgb2Ygb3JkZXIgaXRlbXMgYW5kIHRoZSBkYWlseSBvcmRlciBkZXRhaWxzLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0T3JkZXJEZXRhaWxzQnlEYWlseU9yZGVySWQoZGFpbHlPcmRlcklkOiBzdHJpbmcpOiBQcm9taXNlPHsgb3JkZXJEZXRhaWxzOiBPcmRlckRldGFpbEl0ZW1bXSwgZGFpbHlPcmRlcjogRGFpbHlPcmRlciB8IG51bGwgfT4ge1xuICAgIC8vIDEuIEdldCB0aGUgZGFpbHkgb3JkZXIgZGV0YWlsc1xuICAgIGNvbnN0IGFsbERhaWx5T3JkZXJzID0gYXdhaXQgZ2V0QWxsRGFpbHlPcmRlcnMoKTtcbiAgICBjb25zdCBkYWlseU9yZGVyID0gYWxsRGFpbHlPcmRlcnMuZmluZChvID0+IG8uaWQgPT09IGRhaWx5T3JkZXJJZCk7XG5cbiAgICBpZiAoIWRhaWx5T3JkZXIpIHtcbiAgICAgICAgcmV0dXJuIHsgb3JkZXJEZXRhaWxzOiBbXSwgZGFpbHlPcmRlcjogbnVsbCB9O1xuICAgIH1cblxuICAgIC8vIDIuIEdldCBhbGwgb3JkZXIgaXRlbXNcbiAgICBjb25zdCBvcmRlckl0ZW1zUmFuZ2UgPSBgJHtPUkRFUl9JVEVNU19TSEVFVF9OQU1FfSFBOk1gOyAvLyBFeHRlbmRlZCB0byBjb2x1bW4gTSBmb3IgbmV3IGZpZWxkc1xuICAgIGNvbnN0IG9yZGVySXRlbXNEYXRhID0gYXdhaXQgZ2V0U2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCBvcmRlckl0ZW1zUmFuZ2UpO1xuXG4gICAgaWYgKG9yZGVySXRlbXNEYXRhLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgcmV0dXJuIHsgb3JkZXJEZXRhaWxzOiBbXSwgZGFpbHlPcmRlcjogZGFpbHlPcmRlciB9O1xuICAgIH1cblxuICAgIGNvbnN0IGhlYWRlcnMgPSBvcmRlckl0ZW1zRGF0YVswXS5tYXAoaCA9PiBTdHJpbmcoaCkudHJpbSgpKTtcbiAgICBjb25zdCBoZWFkZXJNYXAgPSBoZWFkZXJzLnJlZHVjZSgoYWNjLCBoZWFkZXIsIGluZGV4KSA9PiB7XG4gICAgICAgIGFjY1toZWFkZXIudHJpbSgpXSA9IGluZGV4O1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgIH0sIHt9IGFzIFJlY29yZDxzdHJpbmcsIG51bWJlcj4pO1xuXG4gICAgLy8gQ2hlY2sgZm9yIHJlcXVpcmVkIGNvbHVtbnNcbiAgICBjb25zdCByZXF1aXJlZENvbHMgPSBbJ2lkJywgJ2RhaWx5T3JkZXJJZCcsICd0aW1lc3RhbXAnLCAndXNlcm5hbWUnLCAndmVuZG9ySWQnLCAndmVuZG9yTmFtZScsICdtZW51SXRlbUlkJywgJ2l0ZW1OYW1lJywgJ3F1YW50aXR5JywgJ3ByaWNlJywgJ29wdGlvbnMnLCAnbm90ZXMnLCAnaXNQYWlkJ107XG4gICAgZm9yIChjb25zdCBjb2wgb2YgcmVxdWlyZWRDb2xzKSB7XG4gICAgICAgIGlmIChoZWFkZXJNYXBbY29sXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvcjogVGhlICcke09SREVSX0lURU1TX1NIRUVUX05BTUV9JyBzaGVldCBpcyBtaXNzaW5nIHRoZSByZXF1aXJlZCBjb2x1bW46ICcke2NvbH0nLmApO1xuICAgICAgICAgICAgcmV0dXJuIHsgb3JkZXJEZXRhaWxzOiBbXSwgZGFpbHlPcmRlcjogZGFpbHlPcmRlciB9O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgcm93cyA9IG9yZGVySXRlbXNEYXRhLnNsaWNlKDEpO1xuXG4gICAgLy8gMy4gRmlsdGVyIGl0ZW1zIHRoYXQgbWF0Y2ggdGhlIGRhaWx5T3JkZXJJZFxuICAgIGNvbnN0IGZpbHRlcmVkSXRlbXMgPSByb3dzLmZpbHRlcihyb3cgPT4gcm93W2hlYWRlck1hcFsnZGFpbHlPcmRlcklkJ11dID09PSBkYWlseU9yZGVySWQpO1xuXG4gICAgLy8gNC4gTWFwIHRvIE9yZGVyRGV0YWlsSXRlbSBvYmplY3RzXG4gICAgY29uc3Qgb3JkZXJEZXRhaWxzOiBPcmRlckRldGFpbEl0ZW1bXSA9IGZpbHRlcmVkSXRlbXMubWFwKHJvdyA9PiAoe1xuICAgICAgICBpZDogcm93W2hlYWRlck1hcFsnaWQnXV0gfHwgJycsXG4gICAgICAgIGRhaWx5T3JkZXJJZDogcm93W2hlYWRlck1hcFsnZGFpbHlPcmRlcklkJ11dIHx8ICcnLFxuICAgICAgICB0aW1lc3RhbXA6IHJvd1toZWFkZXJNYXBbJ3RpbWVzdGFtcCddXSB8fCAnJyxcbiAgICAgICAgdXNlcm5hbWU6IHJvd1toZWFkZXJNYXBbJ3VzZXJuYW1lJ11dIHx8ICdOL0EnLFxuICAgICAgICB2ZW5kb3JJZDogcm93W2hlYWRlck1hcFsndmVuZG9ySWQnXV0gfHwgJycsXG4gICAgICAgIHZlbmRvck5hbWU6IHJvd1toZWFkZXJNYXBbJ3ZlbmRvck5hbWUnXV0gfHwgJycsXG4gICAgICAgIG1lbnVJdGVtSWQ6IHJvd1toZWFkZXJNYXBbJ21lbnVJdGVtSWQnXV0gfHwgJycsXG4gICAgICAgIGl0ZW1OYW1lOiByb3dbaGVhZGVyTWFwWydpdGVtTmFtZSddXSB8fCAnTi9BJyxcbiAgICAgICAgcXVhbnRpdHk6IHBhcnNlSW50KHJvd1toZWFkZXJNYXBbJ3F1YW50aXR5J11dIHx8ICcwJywgMTApLFxuICAgICAgICBwcmljZTogcGFyc2VJbnQocm93W2hlYWRlck1hcFsncHJpY2UnXV0gfHwgJzAnLCAxMCksXG4gICAgICAgIG9wdGlvbnM6IHNhZmVQYXJzZU9wdGlvbnMocm93W2hlYWRlck1hcFsnb3B0aW9ucyddXSB8fCAne30nKSxcbiAgICAgICAgbm90ZXM6IHJvd1toZWFkZXJNYXBbJ25vdGVzJ11dIHx8ICcnLFxuICAgICAgICBpc1BhaWQ6IHJvd1toZWFkZXJNYXBbJ2lzUGFpZCddXSA9PT0gJ1RSVUUnIHx8IHJvd1toZWFkZXJNYXBbJ2lzUGFpZCddXSA9PT0gdHJ1ZSxcbiAgICB9KSk7XG5cbiAgICByZXR1cm4geyBvcmRlckRldGFpbHMsIGRhaWx5T3JkZXIgfTtcbn1cblxuZXhwb3J0IHR5cGUgVXNlck9yZGVyR3JvdXAgPSB7XG4gICAgZGFpbHlPcmRlcjogRGFpbHlPcmRlcjtcbiAgICBpdGVtczogT3JkZXJEZXRhaWxJdGVtW107XG4gICAgdG90YWw6IG51bWJlcjtcbiAgICBub3Rlczogc3RyaW5nO1xufVxuXG4vKipcbiAqIFJldHJpZXZlcyBhbGwgb3JkZXJzIGZvciBhIHNwZWNpZmljIHVzZXIsIGdyb3VwZWQgYnkgZGFpbHkgb3JkZXIuXG4gKiBAcGFyYW0ge3N0cmluZ30gdXNlcm5hbWUgVGhlIHVzZXJuYW1lIHRvIGZldGNoIG9yZGVycyBmb3IuXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxVc2VyT3JkZXJHcm91cFtdPn0gQSBsaXN0IG9mIHRoZSB1c2VyJ3Mgb3JkZXJzLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0T3JkZXJzQnlVc2VybmFtZSh1c2VybmFtZTogc3RyaW5nKTogUHJvbWlzZTxVc2VyT3JkZXJHcm91cFtdPiB7XG4gICAgLy8gMS4gR2V0IGFsbCBkYWlseSBvcmRlcnMgYW5kIGFsbCBvcmRlciBpdGVtc1xuICAgIGNvbnN0IFthbGxEYWlseU9yZGVycywgYWxsT3JkZXJJdGVtc0RhdGFdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICBnZXRBbGxEYWlseU9yZGVycygpLFxuICAgICAgICBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGAke09SREVSX0lURU1TX1NIRUVUX05BTUV9IUE6TWApXG4gICAgXSk7XG5cbiAgICBpZiAoYWxsT3JkZXJJdGVtc0RhdGEubGVuZ3RoIDwgMikge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgY29uc3QgaXRlbXNIZWFkZXJzID0gYWxsT3JkZXJJdGVtc0RhdGFbMF0ubWFwKGggPT4gU3RyaW5nKGgpLnRyaW0oKSk7XG4gICAgY29uc3QgaXRlbXNIZWFkZXJNYXAgPSBpdGVtc0hlYWRlcnMucmVkdWNlKChhY2MsIGhlYWRlciwgaW5kZXgpID0+IHtcbiAgICAgICAgYWNjW2hlYWRlci50cmltKCldID0gaW5kZXg7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30gYXMgUmVjb3JkPHN0cmluZywgbnVtYmVyPik7XG5cbiAgICAvLyBDaGVjayBmb3IgcmVxdWlyZWQgY29sdW1uc1xuICAgIGNvbnN0IHJlcXVpcmVkQ29scyA9IFsndXNlcm5hbWUnLCAnZGFpbHlPcmRlcklkJywgJ2lkJywgJ3RpbWVzdGFtcCcsICd2ZW5kb3JJZCcsICd2ZW5kb3JOYW1lJywgJ21lbnVJdGVtSWQnLCAnaXRlbU5hbWUnLCAncXVhbnRpdHknLCAncHJpY2UnLCAnb3B0aW9ucycsICdub3RlcycsICdpc1BhaWQnXTtcbiAgICBmb3IgKGNvbnN0IGNvbCBvZiByZXF1aXJlZENvbHMpIHtcbiAgICAgICAgaWYgKGl0ZW1zSGVhZGVyTWFwW2NvbF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3I6IFRoZSAnJHtPUkRFUl9JVEVNU19TSEVFVF9OQU1FfScgc2hlZXQgaXMgbWlzc2luZyB0aGUgcmVxdWlyZWQgY29sdW1uOiAnJHtjb2x9Jy5gKTtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIDIuIEZpbHRlciBpdGVtcyBmb3IgdGhlIHNwZWNpZmljIHVzZXJuYW1lXG4gICAgY29uc3QgdXNlckl0ZW1zUm93cyA9IGFsbE9yZGVySXRlbXNEYXRhLnNsaWNlKDEpLmZpbHRlcihyb3cgPT4gcm93W2l0ZW1zSGVhZGVyTWFwWyd1c2VybmFtZSddXSA9PT0gdXNlcm5hbWUpO1xuICAgIFxuICAgIGlmICh1c2VySXRlbXNSb3dzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgY29uc3QgdXNlckl0ZW1zOiBPcmRlckRldGFpbEl0ZW1bXSA9IHVzZXJJdGVtc1Jvd3MubWFwKHJvdyA9PiAoe1xuICAgICAgICBpZDogcm93W2l0ZW1zSGVhZGVyTWFwWydpZCddXSB8fCAnJyxcbiAgICAgICAgZGFpbHlPcmRlcklkOiByb3dbaXRlbXNIZWFkZXJNYXBbJ2RhaWx5T3JkZXJJZCddXSB8fCAnJyxcbiAgICAgICAgdGltZXN0YW1wOiByb3dbaXRlbXNIZWFkZXJNYXBbJ3RpbWVzdGFtcCddXSB8fCAnJyxcbiAgICAgICAgdXNlcm5hbWU6IHJvd1tpdGVtc0hlYWRlck1hcFsndXNlcm5hbWUnXV0gfHwgJ04vQScsXG4gICAgICAgIHZlbmRvcklkOiByb3dbaXRlbXNIZWFkZXJNYXBbJ3ZlbmRvcklkJ11dIHx8ICcnLFxuICAgICAgICB2ZW5kb3JOYW1lOiByb3dbaXRlbXNIZWFkZXJNYXBbJ3ZlbmRvck5hbWUnXV0gfHwgJycsXG4gICAgICAgIG1lbnVJdGVtSWQ6IHJvd1tpdGVtc0hlYWRlck1hcFsnbWVudUl0ZW1JZCddXSB8fCAnJyxcbiAgICAgICAgaXRlbU5hbWU6IHJvd1tpdGVtc0hlYWRlck1hcFsnaXRlbU5hbWUnXV0gfHwgJ04vQScsXG4gICAgICAgIHF1YW50aXR5OiBwYXJzZUludChyb3dbaXRlbXNIZWFkZXJNYXBbJ3F1YW50aXR5J11dIHx8ICcwJywgMTApLFxuICAgICAgICBwcmljZTogcGFyc2VJbnQocm93W2l0ZW1zSGVhZGVyTWFwWydwcmljZSddXSB8fCAnMCcsIDEwKSxcbiAgICAgICAgb3B0aW9uczogc2FmZVBhcnNlT3B0aW9ucyhyb3dbaXRlbXNIZWFkZXJNYXBbJ29wdGlvbnMnXV0gfHwgJ3t9JyksXG4gICAgICAgIG5vdGVzOiByb3dbaXRlbXNIZWFkZXJNYXBbJ25vdGVzJ11dIHx8ICcnLFxuICAgICAgICBpc1BhaWQ6IHJvd1tpdGVtc0hlYWRlck1hcFsnaXNQYWlkJ11dID09PSAnVFJVRScgfHwgcm93W2l0ZW1zSGVhZGVyTWFwWydpc1BhaWQnXV0gPT09IHRydWUsXG4gICAgfSkpO1xuICAgIFxuICAgIC8vIDMuIEdyb3VwIGl0ZW1zIGJ5IGRhaWx5T3JkZXJJZFxuICAgIGNvbnN0IGdyb3VwZWRCeURhaWx5T3JkZXIgPSB1c2VySXRlbXMucmVkdWNlKChhY2MsIGl0ZW0pID0+IHtcbiAgICAgICAgY29uc3Qga2V5ID0gaXRlbS5kYWlseU9yZGVySWQ7XG4gICAgICAgIGlmICghYWNjW2tleV0pIHtcbiAgICAgICAgICAgIGFjY1trZXldID0gW107XG4gICAgICAgIH1cbiAgICAgICAgYWNjW2tleV0ucHVzaChpdGVtKTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB7fSBhcyBSZWNvcmQ8c3RyaW5nLCBPcmRlckRldGFpbEl0ZW1bXT4pO1xuICAgIFxuICAgIFxuICAgIC8vIDQuIEZvcm1hdCB0aGUgZmluYWwgb3V0cHV0XG4gICAgY29uc3QgYWxsRGFpbHlPcmRlcnNNYXAgPSBuZXcgTWFwKGFsbERhaWx5T3JkZXJzLm1hcChvID0+IFtvLmlkLCBvXSkpO1xuICAgIGNvbnN0IHJlc3VsdDogVXNlck9yZGVyR3JvdXBbXSA9IFtdO1xuXG4gICAgZm9yIChjb25zdCBkYWlseU9yZGVySWQgaW4gZ3JvdXBlZEJ5RGFpbHlPcmRlcikge1xuICAgICAgICBjb25zdCBkYWlseU9yZGVyID0gYWxsRGFpbHlPcmRlcnNNYXAuZ2V0KGRhaWx5T3JkZXJJZCk7XG4gICAgICAgIGlmIChkYWlseU9yZGVyKSB7XG4gICAgICAgICAgICBjb25zdCBpdGVtcyA9IGdyb3VwZWRCeURhaWx5T3JkZXJbZGFpbHlPcmRlcklkXTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgIC8vIEFnZ3JlZ2F0ZSBpdGVtcyB3aXRoIHRoZSBzYW1lIG1lbnVJdGVtSWQgYW5kIG9wdGlvbnNcbiAgICAgICAgICAgIGNvbnN0IGFnZ3JlZ2F0ZWRJdGVtc01hcCA9IGl0ZW1zLnJlZHVjZSgoYWNjLCBpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uc1N0cmluZyA9IEpTT04uc3RyaW5naWZ5KGl0ZW0ub3B0aW9ucyB8fCB7fSk7XG4gICAgICAgICAgICAgICAgY29uc3QgYWdncmVnYXRpb25LZXkgPSBgJHtpdGVtLm1lbnVJdGVtSWR9fCR7b3B0aW9uc1N0cmluZ31gO1xuICAgICAgICAgICAgICAgIGlmIChhY2MuaGFzKGFnZ3JlZ2F0aW9uS2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBleGlzdGluZ0l0ZW0gPSBhY2MuZ2V0KGFnZ3JlZ2F0aW9uS2V5KSE7XG4gICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nSXRlbS5xdWFudGl0eSArPSBpdGVtLnF1YW50aXR5O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIENyZWF0ZSBhIGNvcHkgdG8gYXZvaWQgbW9kaWZ5aW5nIHRoZSBvcmlnaW5hbCBhcnJheSBpdGVtc1xuICAgICAgICAgICAgICAgICAgICBhY2Muc2V0KGFnZ3JlZ2F0aW9uS2V5LCB7IC4uLml0ZW0gfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgICAgICB9LCBuZXcgTWFwPHN0cmluZywgT3JkZXJEZXRhaWxJdGVtPigpKTtcblxuICAgICAgICAgICAgY29uc3QgZmluYWxJdGVtcyA9IEFycmF5LmZyb20oYWdncmVnYXRlZEl0ZW1zTWFwLnZhbHVlcygpKTtcbiAgICAgICAgICAgIGNvbnN0IHRvdGFsID0gZmluYWxJdGVtcy5yZWR1Y2UoKHN1bSwgaXRlbSkgPT4gc3VtICsgaXRlbS5wcmljZSAqIGl0ZW0ucXVhbnRpdHksIDApO1xuICAgICAgICAgICAgY29uc3Qgbm90ZXMgPSBpdGVtcy5sZW5ndGggPiAwID8gaXRlbXNbMF0ubm90ZXMgOiAnJzsgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBkYWlseU9yZGVyLFxuICAgICAgICAgICAgICAgIGl0ZW1zOiBmaW5hbEl0ZW1zLFxuICAgICAgICAgICAgICAgIHRvdGFsLFxuICAgICAgICAgICAgICAgIG5vdGVzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLy8gNS4gU29ydCB0aGUgZmluYWwgZ3JvdXBzIGJ5IGRhdGUsIG1vc3QgcmVjZW50IGZpcnN0XG4gICAgcmVzdWx0LnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgY29uc3QgZGF0ZUEgPSBuZXcgRGF0ZShgJHthLmRhaWx5T3JkZXIuZGF0ZX1UJHthLmRhaWx5T3JkZXIuZGVhZGxpbmV9YCk7XG4gICAgICAgIGNvbnN0IGRhdGVCID0gbmV3IERhdGUoYCR7Yi5kYWlseU9yZGVyLmRhdGV9VCR7Yi5kYWlseU9yZGVyLmRlYWRsaW5lfWApO1xuICAgICAgICByZXR1cm4gZGF0ZUIuZ2V0VGltZSgpIC0gZGF0ZUEuZ2V0VGltZSgpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBSZXRyaWV2ZXMgYSB1c2VyJ3Mgc3BlY2lmaWMgb3JkZXIgZm9yIGEgZ2l2ZW4gZGFpbHkgb3JkZXIsIGZvcm1hdHRlZCBmb3IgZWRpdGluZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSB1c2VybmFtZSBUaGUgdXNlcm5hbWUuXG4gKiBAcGFyYW0ge3N0cmluZ30gZGFpbHlPcmRlcklkIFRoZSBJRCBvZiB0aGUgZGFpbHkgb3JkZXIuXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxPcmRlckl0ZW1bXT59IEEgbGlzdCBvZiBvcmRlciBpdGVtcyByZWFkeSBmb3IgdGhlIGNhcnQuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRFeGlzdGluZ09yZGVyRm9yRWRpdCh1c2VybmFtZTogc3RyaW5nLCBkYWlseU9yZGVySWQ6IHN0cmluZyk6IFByb21pc2U8T3JkZXJJdGVtW10+IHtcbiAgY29uc3QgYWxsT3JkZXJJdGVtc0RhdGEgPSBhd2FpdCBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGAke09SREVSX0lURU1TX1NIRUVUX05BTUV9IUE6TWApO1xuICBpZiAoYWxsT3JkZXJJdGVtc0RhdGEubGVuZ3RoIDwgMikge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIGNvbnN0IGl0ZW1zSGVhZGVycyA9IGFsbE9yZGVySXRlbXNEYXRhWzBdLm1hcChoID0+IFN0cmluZyhoKS50cmltKCkpO1xuICBjb25zdCBpdGVtc0hlYWRlck1hcCA9IGl0ZW1zSGVhZGVycy5yZWR1Y2UoKGFjYywgaGVhZGVyLCBpbmRleCkgPT4ge1xuICAgIGFjY1toZWFkZXJdID0gaW5kZXg7XG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30gYXMgUmVjb3JkPHN0cmluZywgbnVtYmVyPik7XG5cbiAgY29uc3QgdXNlckl0ZW1zUm93cyA9IGFsbE9yZGVySXRlbXNEYXRhXG4gICAgLnNsaWNlKDEpXG4gICAgLmZpbHRlcihyb3cgPT4gcm93W2l0ZW1zSGVhZGVyTWFwWyd1c2VybmFtZSddXSA9PT0gdXNlcm5hbWUgJiYgcm93W2l0ZW1zSGVhZGVyTWFwWydkYWlseU9yZGVySWQnXV0gPT09IGRhaWx5T3JkZXJJZCk7XG5cbiAgaWYgKHVzZXJJdGVtc1Jvd3MubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIFxuICAvLyBIZWxwZXIgdG8gcmUtZ2VuZXJhdGUgdGhlIGNvbXBvc2l0ZSBpdGVtIElEIGZvciB0aGUgY2FydFxuICBjb25zdCBnZW5lcmF0ZU9yZGVySXRlbUlkID0gKGl0ZW1JZDogc3RyaW5nLCBvcHRpb25zOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+KSA9PiB7XG4gICAgaWYgKE9iamVjdC5rZXlzKG9wdGlvbnMpLmxlbmd0aCA9PT0gMCkgcmV0dXJuIGl0ZW1JZDtcbiAgICBjb25zdCBzb3J0ZWRTZWxlY3Rpb25zID0gT2JqZWN0LmtleXMob3B0aW9ucykuc29ydCgpLm1hcChrZXkgPT4gYCR7a2V5fToke29wdGlvbnNba2V5XX1gKS5qb2luKCd8Jyk7XG4gICAgcmV0dXJuIGAke2l0ZW1JZH1bJHtzb3J0ZWRTZWxlY3Rpb25zfV1gO1xuICB9XG5cbiAgY29uc3Qgb3JkZXJJdGVtczogT3JkZXJJdGVtW10gPSB1c2VySXRlbXNSb3dzLm1hcChyb3cgPT4ge1xuICAgIGNvbnN0IG9wdGlvbnMgPSBzYWZlUGFyc2VPcHRpb25zKHJvd1tpdGVtc0hlYWRlck1hcFsnb3B0aW9ucyddXSB8fCAne30nKTtcbiAgICBjb25zdCBtZW51SXRlbUlkID0gcm93W2l0ZW1zSGVhZGVyTWFwWydtZW51SXRlbUlkJ11dO1xuICAgIHJldHVybiB7XG4gICAgICBpZDogZ2VuZXJhdGVPcmRlckl0ZW1JZChtZW51SXRlbUlkLCBvcHRpb25zKSxcbiAgICAgIG1lbnVJdGVtSWQ6IG1lbnVJdGVtSWQsXG4gICAgICBuYW1lOiByb3dbaXRlbXNIZWFkZXJNYXBbJ2l0ZW1OYW1lJ11dIHx8ICcnLFxuICAgICAgcHJpY2U6IHBhcnNlSW50KHJvd1tpdGVtc0hlYWRlck1hcFsncHJpY2UnXV0gfHwgJzAnLCAxMCksXG4gICAgICBxdWFudGl0eTogcGFyc2VJbnQocm93W2l0ZW1zSGVhZGVyTWFwWydxdWFudGl0eSddXSB8fCAnMCcsIDEwKSxcbiAgICAgIHZlbmRvck5hbWU6IHJvd1tpdGVtc0hlYWRlck1hcFsndmVuZG9yTmFtZSddXSB8fCAnJyxcbiAgICAgIHZlbmRvcklkOiByb3dbaXRlbXNIZWFkZXJNYXBbJ3ZlbmRvcklkJ11dIHx8ICcnLFxuICAgICAgdXNlcm5hbWU6IHVzZXJuYW1lLFxuICAgICAgb3B0aW9uczogb3B0aW9ucyxcbiAgICAgIG5vdGVzOiByb3dbaXRlbXNIZWFkZXJNYXBbJ25vdGVzJ11dIHx8ICcnLFxuICAgIH07XG4gIH0pO1xuICBcbiAgcmV0dXJuIG9yZGVySXRlbXM7XG59XG5cblxuLyoqXG4gKiBEZWxldGVzIGEgdXNlcidzIGVudGlyZSBvcmRlciBmb3IgYSBzcGVjaWZpYyBkYWlseSBvcmRlci5cbiAqIEBwYXJhbSB7b2JqZWN0fSBwYXJhbXMgLSBUaGUgcGFyYW1ldGVycyBmb3IgZGVsZXRpbmcgdGhlIG9yZGVyLlxuICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtcy51c2VybmFtZSAtIFRoZSB1c2VybmFtZSBvZiB0aGUgdXNlci5cbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXMuZGFpbHlPcmRlcklkIC0gVGhlIElEIG9mIHRoZSBkYWlseSBvcmRlciB0byBkZWxldGUuXG4gKiBAcmV0dXJucyB7UHJvbWlzZTx7c3VjY2VzczogYm9vbGVhbn0+fSBBIHN1Y2Nlc3MgZmxhZy5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVVzZXJPcmRlcih7IHVzZXJuYW1lLCBkYWlseU9yZGVySWQgfTogeyB1c2VybmFtZTogc3RyaW5nLCBkYWlseU9yZGVySWQ6IHN0cmluZyB9KTogUHJvbWlzZTx7IHN1Y2Nlc3M6IGJvb2xlYW4gfT4ge1xuICAgIGNvbnN0IFtvcmRlckl0ZW1zRGF0YVdpdGhIZWFkZXJdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGAke09SREVSX0lURU1TX1NIRUVUX05BTUV9IUE6TWApLFxuICAgIF0pO1xuXG4gICAgaWYgKG9yZGVySXRlbXNEYXRhV2l0aEhlYWRlci5sZW5ndGggPCAyKSB7XG4gICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07IC8vIE5vIGl0ZW1zIHRvIGRlbGV0ZVxuICAgIH1cblxuICAgIGNvbnN0IGl0ZW1zSGVhZGVycyA9IG9yZGVySXRlbXNEYXRhV2l0aEhlYWRlclswXTtcbiAgICBjb25zdCBpdGVtc1Jvd3MgPSBvcmRlckl0ZW1zRGF0YVdpdGhIZWFkZXIuc2xpY2UoMSk7XG4gICAgXG4gICAgY29uc3QgaGVhZGVyTWFwID0gaXRlbXNIZWFkZXJzLnJlZHVjZSgoYWNjLCBoLCBpKSA9PiB7IGFjY1tTdHJpbmcoaCldID0gaTsgcmV0dXJuIGFjYzsgfSwge30gYXMgUmVjb3JkPHN0cmluZywgbnVtYmVyPik7XG4gICAgY29uc3QgZGFpbHlPcmRlcklkSW5kZXggPSBoZWFkZXJNYXBbJ2RhaWx5T3JkZXJJZCddO1xuICAgIGNvbnN0IHVzZXJuYW1lSW5kZXggPSBoZWFkZXJNYXBbJ3VzZXJuYW1lJ107XG5cbiAgICBpZiAoZGFpbHlPcmRlcklkSW5kZXggPT09IHVuZGVmaW5lZCB8fCB1c2VybmFtZUluZGV4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlICdvcmRlcl9pdGVtcycgc2hlZXQgaXMgbWlzc2luZyByZXF1aXJlZCBjb2x1bW5zICdkYWlseU9yZGVySWQnIG9yICd1c2VybmFtZScuXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IGl0ZW1zVG9LZWVwID0gaXRlbXNSb3dzLmZpbHRlcihyb3cgPT4gXG4gICAgICAgICEocm93W2RhaWx5T3JkZXJJZEluZGV4XSA9PT0gZGFpbHlPcmRlcklkICYmIHJvd1t1c2VybmFtZUluZGV4XSA9PT0gdXNlcm5hbWUpXG4gICAgKTtcbiAgICBcbiAgICBhd2FpdCBiYXRjaFVwZGF0ZVNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgW3tcbiAgICAgICAgcmFuZ2U6IGAke09SREVSX0lURU1TX1NIRUVUX05BTUV9IUExOk1gLFxuICAgICAgICB2YWx1ZXM6IFtpdGVtc0hlYWRlcnMsIC4uLml0ZW1zVG9LZWVwXSxcbiAgICB9XSk7XG5cbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG59XG5cbi8qKlxuICogTWFya3MgYSB1c2VyJ3Mgb3JkZXIgZm9yIGEgc3BlY2lmaWMgZGFpbHkgb3JkZXIgYXMgcGFpZCBvciB1bnBhaWQuXG4gKiBAcGFyYW0ge29iamVjdH0gcGFyYW1zIC0gVGhlIHBhcmFtZXRlcnMgZm9yIHRoZSBvcGVyYXRpb24uXG4gKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1zLmRhaWx5T3JkZXJJZCAtIFRoZSBJRCBvZiB0aGUgZGFpbHkgb3JkZXIuXG4gKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1zLnVzZXJuYW1lIC0gVGhlIHVzZXJuYW1lIG9mIHRoZSB1c2VyLlxuICogQHBhcmFtIHtib29sZWFufSBwYXJhbXMuaXNQYWlkIC0gVGhlIG5ldyBwYXltZW50IHN0YXR1cy5cbiAqIEByZXR1cm5zIHtQcm9taXNlPHtzdWNjZXNzOiBib29sZWFufT59IEEgc3VjY2VzcyBmbGFnLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbWFya1VzZXJPcmRlckFzUGFpZCh7IGRhaWx5T3JkZXJJZCwgdXNlcm5hbWUsIGlzUGFpZCB9OiB7IGRhaWx5T3JkZXJJZDogc3RyaW5nLCB1c2VybmFtZTogc3RyaW5nLCBpc1BhaWQ6IGJvb2xlYW4gfSk6IFByb21pc2U8eyBzdWNjZXNzOiBib29sZWFuIH0+IHtcbiAgLy8gMS4gR2V0IGFsbCBvcmRlciBpdGVtcyBkYXRhLlxuICBjb25zdCBhbGxJdGVtc0RhdGEgPSBhd2FpdCBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGAke09SREVSX0lURU1TX1NIRUVUX05BTUV9IUE6TWApO1xuXG4gIGlmIChhbGxJdGVtc0RhdGEubGVuZ3RoIDwgMikge1xuICAgIHRocm93IG5ldyBFcnJvcihcIuaJvuS4jeWIsOioguWWruWTgemgheizh+aWmeOAglwiKTtcbiAgfVxuXG4gIGNvbnN0IGhlYWRlcnMgPSBhbGxJdGVtc0RhdGFbMF07XG4gIGNvbnN0IHJvd3MgPSBhbGxJdGVtc0RhdGEuc2xpY2UoMSk7XG4gIGNvbnN0IGhlYWRlck1hcCA9IGhlYWRlcnMucmVkdWNlKChhY2MsIGgsIGkpID0+IHsgYWNjW1N0cmluZyhoKV0gPSBpOyByZXR1cm4gYWNjOyB9LCB7fSBhcyBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+KTtcbiAgY29uc3QgZGFpbHlPcmRlcklkSW5kZXggPSBoZWFkZXJNYXBbJ2RhaWx5T3JkZXJJZCddO1xuICBjb25zdCB1c2VybmFtZUluZGV4ID0gaGVhZGVyTWFwWyd1c2VybmFtZSddO1xuICBjb25zdCBpc1BhaWRJbmRleCA9IGhlYWRlck1hcFsnaXNQYWlkJ107XG5cbiAgaWYgKGRhaWx5T3JkZXJJZEluZGV4ID09PSB1bmRlZmluZWQgfHwgdXNlcm5hbWVJbmRleCA9PT0gdW5kZWZpbmVkIHx8IGlzUGFpZEluZGV4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSAnb3JkZXJfaXRlbXMnIHNoZWV0IGlzIG1pc3NpbmcgcmVxdWlyZWQgY29sdW1uczogJ2RhaWx5T3JkZXJJZCcsICd1c2VybmFtZScsIG9yICdpc1BhaWQnLlwiKTtcbiAgfVxuICAgIFxuICAvLyAyLiBQcmVwYXJlIGJhdGNoIHVwZGF0ZSBkYXRhXG4gIGNvbnN0IGRhdGFUb1VwZGF0ZSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd3MubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCByb3cgPSByb3dzW2ldO1xuICAgIGlmIChyb3dbZGFpbHlPcmRlcklkSW5kZXhdID09PSBkYWlseU9yZGVySWQgJiYgcm93W3VzZXJuYW1lSW5kZXhdID09PSB1c2VybmFtZSkge1xuICAgICAgLy8gU2hlZXQgcm93cyBhcmUgMS1iYXNlZCwgYW5kIHdlIGhhdmUgYSBoZWFkZXIgcm93LCBzbyBhZGQgMi5cbiAgICAgIGNvbnN0IHJvd0luZGV4ID0gaSArIDI7IFxuICAgICAgZGF0YVRvVXBkYXRlLnB1c2goe1xuICAgICAgICByYW5nZTogYCR7T1JERVJfSVRFTVNfU0hFRVRfTkFNRX0hTSR7cm93SW5kZXh9YCwgLy8gJ00nIGlzIHRoZSBpc1BhaWQgY29sdW1uXG4gICAgICAgIHZhbHVlczogW1tpc1BhaWQgPyAnVFJVRScgOiAnRkFMU0UnXV0sXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvLyAzLiBFeGVjdXRlIGJhdGNoIHVwZGF0ZSBpZiB0aGVyZSdzIGFueXRoaW5nIHRvIHVwZGF0ZVxuICBpZiAoZGF0YVRvVXBkYXRlLmxlbmd0aCA+IDApIHtcbiAgICAvLyBUaGlzIGlzIG5vdCBhIFwidHJ1ZVwiIGJhdGNoIHVwZGF0ZSBpbiBvbmUgQVBJIGNhbGwsIGJ1dCBpdCdzIGJldHRlciB0aGFuIHJlYWRpbmcvd3JpdGluZyB0aGUgd2hvbGUgc2hlZXQuXG4gICAgLy8gQSBzaW5nbGUgYmF0Y2hVcGRhdGUgY2FsbCB3b3VsZCBiZSBtb3JlIGVmZmljaWVudCBpZiB0aGUgQVBJIHN0cnVjdHVyZSBhbGxvd3MgaXQgZWFzaWx5LlxuICAgICBjb25zdCBzaGVldHMgPSBhd2FpdCBnZXRBdXRoZW50aWNhdGVkQ2xpZW50KCk7XG4gICAgIGF3YWl0IHNoZWV0cy5zcHJlYWRzaGVldHMudmFsdWVzLmJhdGNoVXBkYXRlKHtcbiAgICAgICAgc3ByZWFkc2hlZXRJZDogU1BSRUFEU0hFRVRfSUQsXG4gICAgICAgIHJlcXVlc3RCb2R5OiB7XG4gICAgICAgICAgICB2YWx1ZUlucHV0T3B0aW9uOiAnVVNFUl9FTlRFUkVEJyxcbiAgICAgICAgICAgIGRhdGE6IGRhdGFUb1VwZGF0ZSxcbiAgICAgICAgfVxuICAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbn1cblxuZXhwb3J0IHR5cGUgVXBkYXRlVXNlck9yZGVyUmVxdWVzdCA9IHtcbiAgICBkYWlseU9yZGVySWQ6IHN0cmluZztcbiAgICB1c2VybmFtZTogc3RyaW5nO1xuICAgIGl0ZW1zOiBPcmRlckRldGFpbEl0ZW1bXTsgLy8gVGhlIGNvbXBsZXRlIG5ldyBsaXN0IG9mIGl0ZW1zXG59O1xuXG4vKipcbiAqIFVwZGF0ZXMgYSB1c2VyJ3MgZW50aXJlIG9yZGVyIGZvciBhIHNwZWNpZmljIGRhaWx5IG9yZGVyLlxuICogSXQgcmVwbGFjZXMgYWxsIG9mIHRoZSB1c2VyJ3MgcHJldmlvdXMgaXRlbXMgd2l0aCB0aGUgbmV3IGxpc3QgcHJvdmlkZWQuXG4gKiBAcGFyYW0ge1VwZGF0ZVVzZXJPcmRlclJlcXVlc3R9IHJlcSAtIFRoZSByZXF1ZXN0IGNvbnRhaW5pbmcgdGhlIHVzZXIncyB1cGRhdGVkIG9yZGVyLlxuICogQHJldHVybnMge1Byb21pc2U8e3N1Y2Nlc3M6IGJvb2xlYW59Pn0gQSBzdWNjZXNzIGZsYWcuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVVc2VyT3JkZXIocmVxOiBVcGRhdGVVc2VyT3JkZXJSZXF1ZXN0KTogUHJvbWlzZTx7IHN1Y2Nlc3M6IGJvb2xlYW4gfT4ge1xuICAgIGNvbnN0IHsgZGFpbHlPcmRlcklkLCB1c2VybmFtZSwgaXRlbXMgfSA9IHJlcTtcblxuICAgIC8vIDEuIEZpcnN0LCBkZWxldGUgYWxsIGV4aXN0aW5nIGl0ZW1zIGZvciB0aGlzIHVzZXIgaW4gdGhpcyBkYWlseSBvcmRlci5cbiAgICAvLyBUaGlzIHNpbXBsaWZpZXMgdGhlIGxvZ2ljIGJ5IG5vdCBoYXZpbmcgdG8gZmluZCBhbmQgdXBkYXRlIGluZGl2aWR1YWwgcm93cy5cbiAgICBhd2FpdCBkZWxldGVVc2VyT3JkZXIoeyB1c2VybmFtZSwgZGFpbHlPcmRlcklkIH0pO1xuXG4gICAgLy8gMi4gSWYgdGhlIG5ldyBsaXN0IG9mIGl0ZW1zIGlzIGVtcHR5LCB3ZSdyZSBkb25lLlxuICAgIGlmIChpdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xuICAgIH1cblxuICAgIC8vIDMuIEFwcGVuZCB0aGUgbmV3IGxpc3Qgb2YgaXRlbXMgdG8gdGhlIHNoZWV0LlxuICAgIGNvbnN0IGFsbEl0ZW1zUmFuZ2UgPSBgJHtPUkRFUl9JVEVNU19TSEVFVF9OQU1FfSFBMjpBYDtcbiAgICBjb25zdCBhbGxJdGVtSWRzRGF0YSA9IGF3YWl0IGdldFNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgYWxsSXRlbXNSYW5nZSk7XG4gICAgbGV0IGxhc3RJZE51bSA9IGFsbEl0ZW1JZHNEYXRhLmxlbmd0aCA+IDBcbiAgICAgICAgPyBNYXRoLm1heCgwLCAuLi5hbGxJdGVtSWRzRGF0YS5tYXAocm93ID0+IHBhcnNlSW50KChyb3dbMF0gfHwgJ29pMCcpLnJlcGxhY2UoJ29pJywgJycpLCAxMCkpLmZpbHRlcihudW0gPT4gIWlzTmFOKG51bSkpKVxuICAgICAgICA6IDA7XG4gICAgXG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpO1xuICAgIGNvbnN0IG9yZGVyVmFsdWVzID0gW107XG4gICAgY29uc3Qgbm90ZXMgPSBpdGVtc1swXT8ubm90ZXMgfHwgJyc7IC8vIEFzc3VtZSBub3RlcyBhcmUgdGhlIHNhbWUgZm9yIGFsbCBpdGVtc1xuICAgIGNvbnN0IGlzUGFpZCA9IGl0ZW1zWzBdPy5pc1BhaWQgfHwgZmFsc2U7IC8vIEFzc3VtZSBwYXltZW50IHN0YXR1cyBpcyB0aGUgc2FtZVxuXG4gICAgZm9yIChjb25zdCBpdGVtIG9mIGl0ZW1zKSB7XG4gICAgICAgIGxhc3RJZE51bSsrO1xuICAgICAgICBjb25zdCBuZXdJZCA9IGBvaSR7bGFzdElkTnVtLnRvU3RyaW5nKCkucGFkU3RhcnQoMywgJzAnKX1gO1xuICAgICAgICBjb25zdCBvcHRpb25zU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoaXRlbS5vcHRpb25zKTtcblxuICAgICAgICBvcmRlclZhbHVlcy5wdXNoKFtcbiAgICAgICAgICAgIG5ld0lkLFxuICAgICAgICAgICAgZGFpbHlPcmRlcklkLFxuICAgICAgICAgICAgbm93LFxuICAgICAgICAgICAgdXNlcm5hbWUsXG4gICAgICAgICAgICBpdGVtLnZlbmRvcklkLFxuICAgICAgICAgICAgaXRlbS52ZW5kb3JOYW1lLFxuICAgICAgICAgICAgaXRlbS5tZW51SXRlbUlkLFxuICAgICAgICAgICAgaXRlbS5pdGVtTmFtZSxcbiAgICAgICAgICAgIGl0ZW0ucXVhbnRpdHksXG4gICAgICAgICAgICBpdGVtLnByaWNlLFxuICAgICAgICAgICAgb3B0aW9uc1N0cmluZyxcbiAgICAgICAgICAgIG5vdGVzLFxuICAgICAgICAgICAgaXNQYWlkID8gJ1RSVUUnIDogJ0ZBTFNFJ1xuICAgICAgICBdKTtcbiAgICB9XG5cbiAgICBpZiAob3JkZXJWYWx1ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBhd2FpdCBhcHBlbmRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGAke09SREVSX0lURU1TX1NIRUVUX05BTUV9IUE6TWAsIG9yZGVyVmFsdWVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Im1TQXN2QnNCIn0=
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
"[project]/src/components/ui/table.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Table": (()=>Table),
    "TableBody": (()=>TableBody),
    "TableCaption": (()=>TableCaption),
    "TableCell": (()=>TableCell),
    "TableFooter": (()=>TableFooter),
    "TableHead": (()=>TableHead),
    "TableHeader": (()=>TableHeader),
    "TableRow": (()=>TableRow)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
const Table = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full overflow-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
            ref: ref,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("w-full caption-bottom text-sm", className),
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/table.tsx",
            lineNumber: 10,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.tsx",
        lineNumber: 9,
        columnNumber: 3
    }, this));
Table.displayName = "Table";
const TableHeader = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("[&_tr]:border-b", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.tsx",
        lineNumber: 23,
        columnNumber: 3
    }, this));
TableHeader.displayName = "TableHeader";
const TableBody = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("[&_tr:last-child]:border-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.tsx",
        lineNumber: 31,
        columnNumber: 3
    }, this));
TableBody.displayName = "TableBody";
const TableFooter = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tfoot", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.tsx",
        lineNumber: 43,
        columnNumber: 3
    }, this));
TableFooter.displayName = "TableFooter";
const TableRow = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.tsx",
        lineNumber: 58,
        columnNumber: 3
    }, this));
TableRow.displayName = "TableRow";
const TableHead = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.tsx",
        lineNumber: 73,
        columnNumber: 3
    }, this));
TableHead.displayName = "TableHead";
const TableCell = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("p-4 align-middle [&:has([role=checkbox])]:pr-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.tsx",
        lineNumber: 88,
        columnNumber: 3
    }, this));
TableCell.displayName = "TableCell";
const TableCaption = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("caption", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("mt-4 text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.tsx",
        lineNumber: 100,
        columnNumber: 3
    }, this));
TableCaption.displayName = "TableCaption";
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
"[project]/src/components/ui/switch.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Switch": (()=>Switch)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$switch$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-switch/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const Switch = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$switch$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input", className),
        ...props,
        ref: ref,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$switch$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Thumb"], {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0")
        }, void 0, false, {
            fileName: "[project]/src/components/ui/switch.tsx",
            lineNumber: 20,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/switch.tsx",
        lineNumber: 12,
        columnNumber: 3
    }, this));
Switch.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$switch$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"].displayName;
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
"[project]/src/components/admin/OrderDetailClient.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "OrderDetailClient": (()=>OrderDetailClient)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$data$3a$88a72d__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/ai/flows/data:88a72d [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$data$3a$4c780d__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/ai/flows/data:4c780d [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/tabs.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/table.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-ssr] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sticky$2d$note$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__StickyNote$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sticky-note.js [app-ssr] (ecmascript) <export default as StickyNote>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/square-pen.js [app-ssr] (ecmascript) <export default as Edit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/save.js [app-ssr] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-plus.js [app-ssr] (ecmascript) <export default as PlusCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$minus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MinusCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-minus.js [app-ssr] (ecmascript) <export default as MinusCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/separator.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$switch$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/switch.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/label.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-toast.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/alert-dialog.tsx [app-ssr] (ecmascript)");
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
const optionsToString = (options)=>{
    if (!options || Object.keys(options).length === 0) return '無';
    return Object.entries(options).map(([key, value])=>`${key}: ${value}`).join(', ');
};
function UserOrderCard({ userOrder, onPaymentUpdate, onOrderUpdate }) {
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useToast"])();
    const [isEditing, setIsEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isPending, startTransition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransition"])();
    const [editableItems, setEditableItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Deep copy to prevent direct state mutation
        setEditableItems(JSON.parse(JSON.stringify(userOrder.items)));
    }, [
        userOrder.items
    ]);
    const handlePaymentStatusChange = (username, isPaid)=>{
        const dailyOrderId = editableItems[0]?.dailyOrderId;
        if (!dailyOrderId) return;
        startTransition(async ()=>{
            try {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$data$3a$88a72d__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["markUserOrderAsPaid"])({
                    dailyOrderId,
                    username,
                    isPaid
                });
                onPaymentUpdate(username, isPaid); // Update local state instead of full refetch
                toast({
                    title: "付款狀態已更新",
                    description: `${username} 的訂單已標示為 ${isPaid ? '已付款' : '未付款'}。`
                });
            } catch (error) {
                toast({
                    variant: "destructive",
                    title: "更新失敗",
                    description: error instanceof Error ? error.message : "無法更新付款狀態。"
                });
            }
        });
    };
    const handleQuantityChange = (itemId, newQuantity)=>{
        setEditableItems((currentItems)=>{
            if (newQuantity <= 0) {
                return currentItems.filter((item)=>item.id !== itemId);
            }
            return currentItems.map((item)=>item.id === itemId ? {
                    ...item,
                    quantity: newQuantity
                } : item);
        });
    };
    const handleSaveChanges = ()=>{
        const dailyOrderId = userOrder.items[0]?.dailyOrderId;
        if (!dailyOrderId) return;
        startTransition(async ()=>{
            try {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$data$3a$4c780d__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["updateUserOrder"])({
                    dailyOrderId,
                    username: userOrder.username,
                    items: editableItems
                });
                onOrderUpdate(); // Re-fetch all data after structural changes
                setIsEditing(false);
                toast({
                    title: "訂單已儲存",
                    description: `${userOrder.username} 的訂單已成功更新。`
                });
            } catch (error) {
                toast({
                    variant: "destructive",
                    title: "儲存失敗",
                    description: error instanceof Error ? error.message : "無法儲存訂單變更。"
                });
            }
        });
    };
    const handleCancelEdit = ()=>{
        setEditableItems(JSON.parse(JSON.stringify(userOrder.items)));
        setIsEditing(false);
    };
    const calculatedTotal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return editableItems.reduce((sum, item)=>sum + item.price * item.quantity, 0);
    }, [
        editableItems
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                className: "flex flex-row justify-between items-start",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                children: userOrder.username
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/OrderDetailClient.tsx",
                                lineNumber: 140,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center space-x-2 mt-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$switch$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Switch"], {
                                        id: `payment-status-${userOrder.username}`,
                                        checked: userOrder.isPaid,
                                        onCheckedChange: (checked)=>handlePaymentStatusChange(userOrder.username, checked),
                                        disabled: isPending || isEditing
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/OrderDetailClient.tsx",
                                        lineNumber: 142,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                        htmlFor: `payment-status-${userOrder.username}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                            variant: userOrder.isPaid ? "default" : "secondary",
                                            children: [
                                                isPending && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                    className: "mr-1 h-3 w-3 animate-spin"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/OrderDetailClient.tsx",
                                                    lineNumber: 150,
                                                    columnNumber: 47
                                                }, this),
                                                userOrder.isPaid ? "已付款" : "未付款"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/admin/OrderDetailClient.tsx",
                                            lineNumber: 149,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/OrderDetailClient.tsx",
                                        lineNumber: 148,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/admin/OrderDetailClient.tsx",
                                lineNumber: 141,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/admin/OrderDetailClient.tsx",
                        lineNumber: 139,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-right",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-muted-foreground",
                                        children: "總計"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/OrderDetailClient.tsx",
                                        lineNumber: 158,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xl font-bold",
                                        children: [
                                            "$",
                                            isEditing ? calculatedTotal.toLocaleString() : userOrder.total.toLocaleString()
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/admin/OrderDetailClient.tsx",
                                        lineNumber: 159,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/admin/OrderDetailClient.tsx",
                                lineNumber: 157,
                                columnNumber: 21
                            }, this),
                            !isEditing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                size: "icon",
                                onClick: ()=>setIsEditing(true),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__["Edit"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admin/OrderDetailClient.tsx",
                                    lineNumber: 163,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/OrderDetailClient.tsx",
                                lineNumber: 162,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/admin/OrderDetailClient.tsx",
                        lineNumber: 156,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/admin/OrderDetailClient.tsx",
                lineNumber: 138,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Separator"], {
                        className: "mb-4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/OrderDetailClient.tsx",
                        lineNumber: 169,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: editableItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-5 gap-2 text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "col-span-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-medium",
                                                children: item.itemName
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/OrderDetailClient.tsx",
                                                lineNumber: 174,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-muted-foreground",
                                                children: optionsToString(item.options)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/OrderDetailClient.tsx",
                                                lineNumber: 175,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/admin/OrderDetailClient.tsx",
                                        lineNumber: 173,
                                        columnNumber: 29
                                    }, this),
                                    isEditing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "col-span-1 flex items-center justify-center gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                variant: "ghost",
                                                size: "icon",
                                                className: "h-6 w-6",
                                                onClick: ()=>handleQuantityChange(item.id, item.quantity - 1),
                                                disabled: isPending,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$minus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MinusCircle$3e$__["MinusCircle"], {
                                                    className: "h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/OrderDetailClient.tsx",
                                                    lineNumber: 179,
                                                    columnNumber: 179
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/OrderDetailClient.tsx",
                                                lineNumber: 179,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-bold",
                                                children: item.quantity
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/OrderDetailClient.tsx",
                                                lineNumber: 180,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                variant: "ghost",
                                                size: "icon",
                                                className: "h-6 w-6",
                                                onClick: ()=>handleQuantityChange(item.id, item.quantity + 1),
                                                disabled: isPending,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusCircle$3e$__["PlusCircle"], {
                                                    className: "h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/OrderDetailClient.tsx",
                                                    lineNumber: 181,
                                                    columnNumber: 179
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/OrderDetailClient.tsx",
                                                lineNumber: 181,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/admin/OrderDetailClient.tsx",
                                        lineNumber: 178,
                                        columnNumber: 33
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "col-span-1 text-center",
                                        children: [
                                            "x ",
                                            item.quantity
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/admin/OrderDetailClient.tsx",
                                        lineNumber: 184,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "col-span-1 text-right",
                                        children: [
                                            "$",
                                            item.price
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/admin/OrderDetailClient.tsx",
                                        lineNumber: 186,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, item.id, true, {
                                fileName: "[project]/src/components/admin/OrderDetailClient.tsx",
                                lineNumber: 172,
                                columnNumber: 25
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/OrderDetailClient.tsx",
                        lineNumber: 170,
                        columnNumber: 17
                    }, this),
                    userOrder.notes && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Separator"], {
                                className: "my-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/OrderDetailClient.tsx",
                                lineNumber: 192,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-medium flex items-center gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sticky$2d$note$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__StickyNote$3e$__["StickyNote"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/OrderDetailClient.tsx",
                                                lineNumber: 194,
                                                columnNumber: 82
                                            }, this),
                                            " 備註"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/admin/OrderDetailClient.tsx",
                                        lineNumber: 194,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-muted-foreground pl-1",
                                        children: userOrder.notes
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/OrderDetailClient.tsx",
                                        lineNumber: 195,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/admin/OrderDetailClient.tsx",
                                lineNumber: 193,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/admin/OrderDetailClient.tsx",
                lineNumber: 168,
                columnNumber: 13
            }, this),
            isEditing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardFooter"], {
                className: "flex justify-end gap-2 bg-muted/50 p-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "ghost",
                        onClick: handleCancelEdit,
                        disabled: isPending,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "mr-2 h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/OrderDetailClient.tsx",
                                lineNumber: 203,
                                columnNumber: 25
                            }, this),
                            "取消"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/admin/OrderDetailClient.tsx",
                        lineNumber: 202,
                        columnNumber: 22
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialog"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogTrigger"], {
                                asChild: true,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "default",
                                    disabled: isPending,
                                    children: [
                                        isPending ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                            className: "mr-2 h-4 w-4 animate-spin"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/OrderDetailClient.tsx",
                                            lineNumber: 208,
                                            columnNumber: 46
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                            className: "mr-2 h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/OrderDetailClient.tsx",
                                            lineNumber: 208,
                                            columnNumber: 98
                                        }, this),
                                        "儲存變更"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/admin/OrderDetailClient.tsx",
                                    lineNumber: 207,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/OrderDetailClient.tsx",
                                lineNumber: 206,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogContent"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogHeader"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogTitle"], {
                                                children: "確定要儲存變更嗎?"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/OrderDetailClient.tsx",
                                                lineNumber: 214,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogDescription"], {
                                                children: [
                                                    "此動作將會覆蓋 ",
                                                    userOrder.username,
                                                    " 的原始訂單。此操作無法復原。"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/admin/OrderDetailClient.tsx",
                                                lineNumber: 215,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/admin/OrderDetailClient.tsx",
                                        lineNumber: 213,
                                        columnNumber: 30
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogFooter"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogCancel"], {
                                                children: "取消"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/OrderDetailClient.tsx",
                                                lineNumber: 220,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogAction"], {
                                                onClick: handleSaveChanges,
                                                children: "確定儲存"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/OrderDetailClient.tsx",
                                                lineNumber: 221,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/admin/OrderDetailClient.tsx",
                                        lineNumber: 219,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/admin/OrderDetailClient.tsx",
                                lineNumber: 212,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/admin/OrderDetailClient.tsx",
                        lineNumber: 205,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/admin/OrderDetailClient.tsx",
                lineNumber: 201,
                columnNumber: 17
            }, this)
        ]
    }, userOrder.username, true, {
        fileName: "[project]/src/components/admin/OrderDetailClient.tsx",
        lineNumber: 137,
        columnNumber: 9
    }, this);
}
function OrderDetailClient({ initialOrderDetails }) {
    const [orderDetails, setOrderDetails] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialOrderDetails);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setOrderDetails(initialOrderDetails);
    }, [
        initialOrderDetails
    ]);
    const handlePaymentUpdate = (username, isPaid)=>{
        setOrderDetails((currentDetails)=>{
            return currentDetails.map((item)=>{
                if (item.username === username) {
                    return {
                        ...item,
                        isPaid: isPaid
                    };
                }
                return item;
            });
        });
    };
    const ordersByUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!orderDetails) return [];
        // First, group all items by username
        const groupedByUser = orderDetails.reduce((acc, item)=>{
            if (!acc[item.username]) {
                acc[item.username] = [];
            }
            acc[item.username].push(item);
            return acc;
        }, {});
        // Then, for each user, aggregate their items
        return Object.entries(groupedByUser).map(([username, items])=>{
            const aggregatedItemsMap = items.reduce((acc, item)=>{
                const key = `${item.menuItemId}|${optionsToString(item.options)}`;
                if (acc.has(key)) {
                    acc.get(key).quantity += item.quantity;
                } else {
                    acc.set(key, {
                        ...item
                    });
                }
                return acc;
            }, new Map());
            const aggregatedItems = Array.from(aggregatedItemsMap.values());
            const total = aggregatedItems.reduce((sum, item)=>sum + item.quantity * item.price, 0);
            return {
                username,
                items: aggregatedItems,
                total,
                notes: items.length > 0 ? items[0].notes : '',
                isPaid: items.length > 0 ? items[0].isPaid : false
            };
        });
    }, [
        orderDetails
    ]);
    const ordersByItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!orderDetails) return [];
        // Group by item name and options string first
        const groupedByItem = orderDetails.reduce((acc, item)=>{
            const key = `${item.itemName}|${optionsToString(item.options)}`;
            if (!acc.has(key)) {
                acc.set(key, {
                    itemName: item.itemName,
                    options: optionsToString(item.options),
                    totalQuantity: 0,
                    usersMap: new Map(),
                    price: item.price
                });
            }
            const group = acc.get(key);
            group.totalQuantity += item.quantity;
            // Aggregate quantity per user within the item group
            const currentQty = group.usersMap.get(item.username) || 0;
            group.usersMap.set(item.username, currentQty + item.quantity);
            return acc;
        }, new Map());
        // Convert the map to the final array structure
        return Array.from(groupedByItem.values()).map((group)=>({
                itemName: group.itemName,
                options: group.options,
                totalQuantity: group.totalQuantity,
                price: group.price,
                users: Array.from(group.usersMap.entries()).map(([name, quantity])=>({
                        name,
                        quantity
                    }))
            })).sort((a, b)=>b.totalQuantity - a.totalQuantity);
    }, [
        orderDetails
    ]);
    const totalAmount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>ordersByUser.reduce((sum, user)=>sum + user.total, 0), [
        ordersByUser
    ]);
    const totalItemsCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>orderDetails.reduce((sum, item)=>sum + item.quantity, 0), [
        orderDetails
    ]);
    const handleExport = (view)=>{
        // Add BOM for UTF-8 handling in Excel
        let csvContent = '\uFEFF';
        if (view === 'byUser') {
            csvContent += "訂購人,品項,選項,數量,單價,總價,備註,付款狀態\n";
            ordersByUser.forEach((userOrder)=>{
                userOrder.items.forEach((item)=>{
                    const row = [
                        `"${userOrder.username}"`,
                        `"${item.itemName}"`,
                        `"${optionsToString(item.options)}"`,
                        item.quantity,
                        item.price,
                        item.quantity * item.price,
                        `"${userOrder.notes}"`,
                        userOrder.isPaid ? "是" : "否"
                    ].join(',');
                    csvContent += row + "\n";
                });
            });
        } else {
            csvContent += "品項,選項,總數量,單價,訂購人\n";
            ordersByItem.forEach((itemOrder)=>{
                const usersString = itemOrder.users.map((u)=>`${u.name} (x${u.quantity})`).join('; ');
                const row = [
                    `"${itemOrder.itemName}"`,
                    `"${itemOrder.options}"`,
                    itemOrder.totalQuantity,
                    itemOrder.price,
                    `"${usersString}"`
                ].join(',');
                csvContent += row + "\n";
            });
        }
        const blob = new Blob([
            csvContent
        ], {
            type: 'text/csv;charset=utf-8;'
        });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.setAttribute("href", url);
        link.setAttribute("download", `order_summary_${view}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('byUser');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                className: "mb-6 bg-muted/30",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                            children: "訂單總覽"
                        }, void 0, false, {
                            fileName: "[project]/src/components/admin/OrderDetailClient.tsx",
                            lineNumber: 380,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/OrderDetailClient.tsx",
                        lineNumber: 379,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                        className: "grid grid-cols-2 md:grid-cols-4 gap-4 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-muted-foreground",
                                        children: "總金額"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/OrderDetailClient.tsx",
                                        lineNumber: 384,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-2xl font-bold",
                                        children: [
                                            "$",
                                            totalAmount.toLocaleString()
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/admin/OrderDetailClient.tsx",
                                        lineNumber: 385,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/admin/OrderDetailClient.tsx",
                                lineNumber: 383,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-muted-foreground",
                                        children: "總訂購份數"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/OrderDetailClient.tsx",
                                        lineNumber: 388,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-2xl font-bold",
                                        children: totalItemsCount
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/OrderDetailClient.tsx",
                                        lineNumber: 389,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/admin/OrderDetailClient.tsx",
                                lineNumber: 387,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-muted-foreground",
                                        children: "訂購人數"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/OrderDetailClient.tsx",
                                        lineNumber: 392,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-2xl font-bold",
                                        children: ordersByUser.length
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/OrderDetailClient.tsx",
                                        lineNumber: 393,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/admin/OrderDetailClient.tsx",
                                lineNumber: 391,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-muted-foreground",
                                        children: "品項種類"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/OrderDetailClient.tsx",
                                        lineNumber: 396,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-2xl font-bold",
                                        children: ordersByItem.length
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/OrderDetailClient.tsx",
                                        lineNumber: 397,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/admin/OrderDetailClient.tsx",
                                lineNumber: 395,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/admin/OrderDetailClient.tsx",
                        lineNumber: 382,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/admin/OrderDetailClient.tsx",
                lineNumber: 378,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tabs"], {
                defaultValue: "byUser",
                className: "w-full",
                onValueChange: setActiveTab,
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
                                        lineNumber: 405,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                        value: "byItem",
                                        children: "按品項檢視"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/OrderDetailClient.tsx",
                                        lineNumber: 406,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/admin/OrderDetailClient.tsx",
                                lineNumber: 404,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "default",
                                onClick: ()=>handleExport(activeTab),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                        className: "mr-2 h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/OrderDetailClient.tsx",
                                        lineNumber: 409,
                                        columnNumber: 13
                                    }, this),
                                    "匯出"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/admin/OrderDetailClient.tsx",
                                lineNumber: 408,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/admin/OrderDetailClient.tsx",
                        lineNumber: 403,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsContent"], {
                        value: "byUser",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: ordersByUser.length > 0 ? ordersByUser.map((userOrder)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(UserOrderCard, {
                                    userOrder: userOrder,
                                    onPaymentUpdate: handlePaymentUpdate,
                                    onOrderUpdate: ()=>{
                                        // This re-fetches ALL data from parent when one card is updated.
                                        const parent = document.querySelector('button[data-re-fetch-button]');
                                        parent?.click();
                                    }
                                }, userOrder.username, false, {
                                    fileName: "[project]/src/components/admin/OrderDetailClient.tsx",
                                    lineNumber: 416,
                                    columnNumber: 17
                                }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-center text-muted-foreground py-8",
                                children: "目前沒有任何訂單資料。"
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/OrderDetailClient.tsx",
                                lineNumber: 426,
                                columnNumber: 18
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/admin/OrderDetailClient.tsx",
                            lineNumber: 414,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/OrderDetailClient.tsx",
                        lineNumber: 413,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsContent"], {
                        value: "byItem",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Table"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHeader"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableRow"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                    children: "品項"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/OrderDetailClient.tsx",
                                                    lineNumber: 434,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                    children: "總數量"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/OrderDetailClient.tsx",
                                                    lineNumber: 435,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                    children: "訂購人"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/OrderDetailClient.tsx",
                                                    lineNumber: 436,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/admin/OrderDetailClient.tsx",
                                            lineNumber: 433,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/OrderDetailClient.tsx",
                                        lineNumber: 432,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableBody"], {
                                        children: ordersByItem.length > 0 ? ordersByItem.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableRow"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "font-medium",
                                                                children: item.itemName
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/admin/OrderDetailClient.tsx",
                                                                lineNumber: 443,
                                                                columnNumber: 33
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-muted-foreground",
                                                                children: item.options
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/admin/OrderDetailClient.tsx",
                                                                lineNumber: 444,
                                                                columnNumber: 33
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/admin/OrderDetailClient.tsx",
                                                        lineNumber: 442,
                                                        columnNumber: 29
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                        className: "font-bold text-center",
                                                        children: item.totalQuantity
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/admin/OrderDetailClient.tsx",
                                                        lineNumber: 446,
                                                        columnNumber: 29
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-wrap gap-1",
                                                            children: item.users.map((user)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                                    variant: "secondary",
                                                                    children: [
                                                                        user.name,
                                                                        " (x",
                                                                        user.quantity,
                                                                        ")"
                                                                    ]
                                                                }, user.name, true, {
                                                                    fileName: "[project]/src/components/admin/OrderDetailClient.tsx",
                                                                    lineNumber: 450,
                                                                    columnNumber: 40
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/admin/OrderDetailClient.tsx",
                                                            lineNumber: 448,
                                                            columnNumber: 33
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/admin/OrderDetailClient.tsx",
                                                        lineNumber: 447,
                                                        columnNumber: 29
                                                    }, this)
                                                ]
                                            }, `${item.itemName}-${item.options}`, true, {
                                                fileName: "[project]/src/components/admin/OrderDetailClient.tsx",
                                                lineNumber: 441,
                                                columnNumber: 25
                                            }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableRow"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                colSpan: 3,
                                                className: "text-center text-muted-foreground py-8",
                                                children: "目前沒有任何訂單資料。"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/OrderDetailClient.tsx",
                                                lineNumber: 457,
                                                columnNumber: 29
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/OrderDetailClient.tsx",
                                            lineNumber: 456,
                                            columnNumber: 25
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/OrderDetailClient.tsx",
                                        lineNumber: 439,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/admin/OrderDetailClient.tsx",
                                lineNumber: 431,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/admin/OrderDetailClient.tsx",
                            lineNumber: 430,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/OrderDetailClient.tsx",
                        lineNumber: 429,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/admin/OrderDetailClient.tsx",
                lineNumber: 402,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/admin/OrderDetailClient.tsx",
        lineNumber: 377,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/ai/flows/data:71116c [app-ssr] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"405f8722de7072c86f977981403ecd13e738b1ae5b":"getOrderDetailsByDailyOrderId"},"src/ai/flows/order-flow.ts",""] */ __turbopack_context__.s({
    "getOrderDetailsByDailyOrderId": (()=>getOrderDetailsByDailyOrderId)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var getOrderDetailsByDailyOrderId = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("405f8722de7072c86f977981403ecd13e738b1ae5b", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getOrderDetailsByDailyOrderId"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vb3JkZXItZmxvdy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbid1c2Ugc2VydmVyJztcblxuaW1wb3J0IHsgZ2V0U2hlZXREYXRhLCBhcHBlbmRTaGVldERhdGEsIGdldEhlYWRlcnMsIHVwZGF0ZVNoZWV0RGF0YSwgYmF0Y2hVcGRhdGVTaGVldERhdGEsIGdldEF1dGhlbnRpY2F0ZWRDbGllbnQgfSBmcm9tICdAL3NlcnZpY2VzL3NoZWV0LXNlcnZpY2UnO1xuaW1wb3J0IHsgZ2V0VmVuZG9ycywgdHlwZSBWZW5kb3IgfSBmcm9tICcuL3ZlbmRvci1mbG93JztcbmltcG9ydCB7IHR5cGUgRmluYWxPcmRlciwgdHlwZSBPcmRlckl0ZW0gfSBmcm9tICdAL2NvbXBvbmVudHMvT3JkZXJTdW1tYXJ5JztcbmltcG9ydCB7IFB1Ymxpc2hPcmRlclJlcXVlc3RTY2hlbWEsIHR5cGUgUHVibGlzaE9yZGVyUmVxdWVzdCB9IGZyb20gJ0AvbGliL3NjaGVtYS9vcmRlcic7XG5pbXBvcnQgeyBmb3JtYXQsIHBhcnNlLCBwYXJzZUlTTywgaXNWYWxpZCB9IGZyb20gJ2RhdGUtZm5zJztcblxuY29uc3QgU1BSRUFEU0hFRVRfSUQgPSAnMVpqMmgwY1lscmIybUJhTmdsMS1Qb09LN3RsQ0N3RGNjQVhuNXc2NmhwNGMnO1xuY29uc3QgREFJTFlfT1JERVJTX1NIRUVUX05BTUUgPSAnZGFpbHlfb3JkZXJzJztcbmNvbnN0IE9SREVSX0lURU1TX1NIRUVUX05BTUUgPSAnb3JkZXJfaXRlbXMnO1xuXG5leHBvcnQgdHlwZSBEYWlseU9yZGVyID0ge1xuICAgIGlkOiBzdHJpbmc7XG4gICAgZGF0ZTogc3RyaW5nO1xuICAgIHZlbmRvcklkOiBzdHJpbmc7XG4gICAgdmVuZG9yTmFtZT86IHN0cmluZzsgLy8gT3B0aW9uYWw6IGZvciBkaXNwbGF5IG9uIGFkbWluIHBhZ2VcbiAgICBkZWFkbGluZTogc3RyaW5nO1xufTtcblxuLy8gVGhpcyB0eXBlIGlzIGZvciB0aGUgdXNlci1mYWNpbmcgb3JkZXIgcGFnZVxuZXhwb3J0IHR5cGUgQXZhaWxhYmxlT3JkZXIgPSB7XG4gICAgaWQ6IHN0cmluZzsgLy8gZGFpbHlPcmRlcklkXG4gICAgdmVuZG9yOiBWZW5kb3I7XG4gICAgZGF0ZTogc3RyaW5nO1xuICAgIGRlYWRsaW5lOiBzdHJpbmc7XG59O1xuXG4vLyBIZWxwZXIgdG8gc2FmZWx5IHBhcnNlIHRoZSBvcHRpb25zIHN0cmluZywgd2hpY2ggbWlnaHQgYmUgdmFsaWQgSlNPTiBvciBhIFwia2V5OnZhbHVlXCIgc3RyaW5nLlxuY29uc3Qgc2FmZVBhcnNlT3B0aW9ucyA9IChvcHRpb25zU3RyOiBzdHJpbmcpOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0+IHtcbiAgICBpZiAoIW9wdGlvbnNTdHIgfHwgdHlwZW9mIG9wdGlvbnNTdHIgIT09ICdzdHJpbmcnKSByZXR1cm4ge307XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gRmlyc3QsIHRyeSB0byBwYXJzZSBpdCBhcyBhIHZhbGlkIEpTT04gc3RyaW5nLlxuICAgICAgICAvLyBUaGlzIGhhbmRsZXMgY2FzZXMgbGlrZSAne1wi6aOv6YePXCI6XCLmraPluLhcIixcIui+o+W6plwiOlwi5LiN6L6jXCJ9J1xuICAgICAgICBjb25zdCBwYXJzZWQgPSBKU09OLnBhcnNlKG9wdGlvbnNTdHIpO1xuICAgICAgICBpZiAodHlwZW9mIHBhcnNlZCA9PT0gJ29iamVjdCcgJiYgcGFyc2VkICE9PSBudWxsICYmICFBcnJheS5pc0FycmF5KHBhcnNlZCkpIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJzZWQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIElmIEpTT04ucGFyc2UgZmFpbHMsIGl0J3Mgbm90IGEgSlNPTiBzdHJpbmcuXG4gICAgICAgIC8vIEFzc3VtZSBpdCdzIGEgc2ltcGxlIFwia2V5OnZhbHVlXCIgc3RyaW5nIGxpa2UgXCLpo6/ph4865q2j5bi4XCIuXG4gICAgICAgIC8vIFRoaXMgaXMgYSBmYWxsYmFjayBmb3IgZGF0YSB0aGF0IHdhc24ndCBzdG9yZWQgYXMgSlNPTi5cbiAgICAgICAgY29uc3QgcGFydHMgPSBvcHRpb25zU3RyLnNwbGl0KCc6Jyk7XG4gICAgICAgIGlmIChwYXJ0cy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IHBhcnRzWzBdLnRyaW0oKTtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gcGFydHNbMV0udHJpbSgpO1xuICAgICAgICAgICAgaWYgKGtleSAmJiB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7IFtrZXldOiB2YWx1ZSB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIElmIGl0J3Mgc29tZXRoaW5nIGVsc2Ugd2UgZG9uJ3QgcmVjb2duaXplLCBsb2cgaXQgYW5kIHJldHVybiBlbXB0eS5cbiAgICAgICAgY29uc29sZS53YXJuKGBDb3VsZCBub3QgcGFyc2Ugb3B0aW9ucyBzdHJpbmcgaW50byBhIHZhbGlkIG9iamVjdDogXCIke29wdGlvbnNTdHJ9XCJgKTtcbiAgICB9XG4gICAgLy8gUmV0dXJuIGVtcHR5IG9iamVjdCBpZiBpdCdzIG5vdCBhIHBhcnNhYmxlIEpTT04gb2JqZWN0IG9yIGEgc2ltcGxlIGtleTp2YWx1ZSBwYWlyLlxuICAgIHJldHVybiB7fTtcbn07XG5cblxuLy8gSGVscGVyIGZ1bmN0aW9uIHRvIGZvcm1hdCB0aW1lIGZyb20gU2hlZXRzICh3aGljaCBjYW4gYmUgYSBudW1iZXIpXG5jb25zdCBmb3JtYXRUaW1lID0gKHRpbWVWYWx1ZTogYW55KTogc3RyaW5nID0+IHtcbiAgICBpZiAodHlwZW9mIHRpbWVWYWx1ZSA9PT0gJ3N0cmluZycgJiYgdGltZVZhbHVlLm1hdGNoKC9eXFxkezJ9OlxcZHsyfSg6XFxkezJ9KT8kLykpIHtcbiAgICAgICAgcmV0dXJuIHRpbWVWYWx1ZS5zdWJzdHJpbmcoMCwgNSk7XG4gICAgfVxuICAgIFxuICAgIGlmICh0eXBlb2YgdGltZVZhbHVlID09PSAnbnVtYmVyJyAmJiB0aW1lVmFsdWUgPiAwICYmIHRpbWVWYWx1ZSA8IDEpIHtcbiAgICAgIC8vIEl0J3MgYSB0aW1lIHNlcmlhbCBudW1iZXIgZnJvbSBTaGVldHNcbiAgICAgIGNvbnN0IHRvdGFsU2Vjb25kcyA9IE1hdGgucm91bmQodGltZVZhbHVlICogODY0MDApO1xuICAgICAgY29uc3QgaG91cnMgPSBNYXRoLmZsb29yKHRvdGFsU2Vjb25kcyAvIDM2MDApO1xuICAgICAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IoKHRvdGFsU2Vjb25kcyAlIDM2MDApIC8gNjApO1xuICAgICAgcmV0dXJuIGAke2hvdXJzLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKX06JHttaW51dGVzLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKX1gO1xuICAgIH1cblxuICAgIC8vIFRyeSBwYXJzaW5nIGFzIGEgZGF0ZSBzdHJpbmcgdG8gZXh0cmFjdCB0aW1lXG4gICAgaWYgKHR5cGVvZiB0aW1lVmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBkYXRlID0gcGFyc2VJU08odGltZVZhbHVlKTtcbiAgICAgICAgICAgIGlmIChpc1ZhbGlkKGRhdGUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZvcm1hdChkYXRlLCAnSEg6bW0nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgLy8gSWdub3JlIHBhcnNlIGVycm9ycyBmcm9tIElTT1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjb25zdCB0aW1lTWF0Y2ggPSB0aW1lVmFsdWUubWF0Y2goLyhcXGR7Mn06XFxkezJ9KS8pO1xuICAgICAgICBpZiAodGltZU1hdGNoKSByZXR1cm4gdGltZU1hdGNoWzBdO1xuICAgIH1cbiAgICBcbiAgICAvLyBGYWxsYmFjayBmb3IgdW5leHBlY3RlZCBmb3JtYXRzXG4gICAgcmV0dXJuICcwMDowMCc7IFxufTtcblxuLy8gSGVscGVyIGZ1bmN0aW9uIHRvIGZvcm1hdCBkYXRlIGZyb20gU2hlZXRzICh3aGljaCBjYW4gYmUgYSBudW1iZXIgb3Igc3RyaW5nKVxuY29uc3QgZm9ybWF0RGF0ZSA9IChkYXRlVmFsdWU6IGFueSk6IHN0cmluZyA9PiB7XG4gICAgaWYgKCFkYXRlVmFsdWUpIHJldHVybiBmb3JtYXQobmV3IERhdGUoKSwgJ3l5eXktTU0tZGQnKTsgLy8gUmV0dXJuIHRvZGF5J3MgZGF0ZSBpZiBlbXB0eVxuXG4gICAgbGV0IGRhdGU7XG4gICAgXG4gICAgLy8gSGFuZGxlIFNoZWV0cyBkYXRlIHNlcmlhbCBudW1iZXIgKG51bWJlciBvZiBkYXlzIHNpbmNlIDE4OTktMTItMzApXG4gICAgaWYgKHR5cGVvZiBkYXRlVmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgICAgIGNvbnN0IGV4Y2VsRXBvY2ggPSBuZXcgRGF0ZShEYXRlLlVUQygxODk5LCAxMSwgMzApKTtcbiAgICAgICAgZGF0ZSA9IG5ldyBEYXRlKGV4Y2VsRXBvY2guZ2V0VGltZSgpICsgZGF0ZVZhbHVlICogODY0MDAwMDApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEhhbmRsZSBJU08gc3RyaW5nIGxpa2UgJzIwMjQtMDctMjVUMDA6MDA6MDAuMDAwWicgb3Igc2ltcGxlIHN0cmluZyAnMjAyNC0wNy0yNSdcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgZGF0ZSA9IHBhcnNlSVNPKFN0cmluZyhkYXRlVmFsdWUpKTtcbiAgICAgICAgICAgLy8gSWYgSVNPIHBhcnNpbmcgZmFpbHMsIHRyeSB0aGUgc2ltcGxlIGZvcm1hdFxuICAgICAgICAgICBpZiAoIWlzVmFsaWQoZGF0ZSkpIHtcbiAgICAgICAgICAgICAgIGRhdGUgPSBwYXJzZShTdHJpbmcoZGF0ZVZhbHVlKSwgJ3l5eXktTU0tZGQnLCBuZXcgRGF0ZSgpKTtcbiAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAgZGF0ZSA9IHBhcnNlKFN0cmluZyhkYXRlVmFsdWUpLCAneXl5eS1NTS1kZCcsIG5ldyBEYXRlKCkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8vIElmIGRhdGUgaXMgdmFsaWQsIGZvcm1hdCBpdCwgb3RoZXJ3aXNlIHJldHVybiB0b2RheSdzIGRhdGUgYXMgYSBmYWxsYmFja1xuICAgIHJldHVybiBpc1ZhbGlkKGRhdGUpID8gZm9ybWF0KGRhdGUsICd5eXl5LU1NLWRkJykgOiBmb3JtYXQobmV3IERhdGUoKSwgJ3l5eXktTU0tZGQnKTtcbn07XG5cblxuLyoqXG4gKiBSZXRyaWV2ZXMgYWxsIGF2YWlsYWJsZSBvcmRlcnMgZnJvbSB0aGUgZGFpbHlfb3JkZXJzIHNoZWV0LlxuICogQW55IG9yZGVyIHByZXNlbnQgaXMgY29uc2lkZXJlZCBhdmFpbGFibGUuXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxBdmFpbGFibGVPcmRlcltdPn0gQSBsaXN0IG9mIGF2YWlsYWJsZSB2ZW5kb3JzIGFuZCB0aGVpciBkZWFkbGluZXMuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBdmFpbGFibGVPcmRlcnMoKTogUHJvbWlzZTxBdmFpbGFibGVPcmRlcltdPiB7XG4gICAgY29uc3QgZGFpbHlPcmRlcnNSYW5nZSA9IGAke0RBSUxZX09SREVSU19TSEVFVF9OQU1FfSFBOkRgO1xuICAgIGNvbnN0IFtkYWlseU9yZGVyc0RhdGEsIGFsbFZlbmRvcnNdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGRhaWx5T3JkZXJzUmFuZ2UpLFxuICAgICAgICBnZXRWZW5kb3JzKClcbiAgICBdKTtcblxuICAgIGlmICghZGFpbHlPcmRlcnNEYXRhIHx8IGRhaWx5T3JkZXJzRGF0YS5sZW5ndGggPCAyKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgaGVhZGVyID0gZGFpbHlPcmRlcnNEYXRhWzBdO1xuICAgIGNvbnN0IHJvd3MgPSBkYWlseU9yZGVyc0RhdGEuc2xpY2UoMSk7XG5cbiAgICBjb25zdCBoZWFkZXJNYXAgPSBoZWFkZXIucmVkdWNlKChhY2MsIGgsIGkpID0+IHtcbiAgICAgICAgYWNjW1N0cmluZyhoKV0gPSBpO1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgIH0sIHt9IGFzIFJlY29yZDxzdHJpbmcsIG51bWJlcj4pO1xuXG4gICAgY29uc3QgYWxsVmVuZG9yc01hcCA9IG5ldyBNYXAoYWxsVmVuZG9ycy5tYXAodiA9PiBbdi52ZW5kb3JJZCwgdl0pKTtcblxuICAgIGNvbnN0IGF2YWlsYWJsZU9yZGVyczogQXZhaWxhYmxlT3JkZXJbXSA9IFtdO1xuXG4gICAgZm9yIChjb25zdCByb3cgb2Ygcm93cykge1xuICAgICAgICBpZiAocm93LmV2ZXJ5KGNlbGwgPT4gIWNlbGwpKSBjb250aW51ZTsgLy8gU2tpcCBjb21wbGV0ZWx5IGVtcHR5IHJvd3NcblxuICAgICAgICBjb25zdCBpZCA9IHJvd1toZWFkZXJNYXBbJ2lkJ11dO1xuICAgICAgICBjb25zdCB2ZW5kb3JJZCA9IHJvd1toZWFkZXJNYXBbJ3ZlbmRvcklkJ11dO1xuICAgICAgICBjb25zdCBkYXRlUmF3ID0gcm93W2hlYWRlck1hcFsnZGF0ZSddXTtcbiAgICAgICAgY29uc3QgZGVhZGxpbmVSYXcgPSByb3dbaGVhZGVyTWFwWydkZWFkbGluZSddXTtcblxuICAgICAgICBpZiAoIWlkIHx8ICF2ZW5kb3JJZCkgY29udGludWU7IC8vIFNraXAgcm93cyB3aXRob3V0IGVzc2VudGlhbCBkYXRhXG5cbiAgICAgICAgY29uc3QgdmVuZG9yID0gYWxsVmVuZG9yc01hcC5nZXQodmVuZG9ySWQpO1xuICAgICAgICBpZiAoIXZlbmRvciB8fCAhdmVuZG9yLmlzQWN0aXZlKSBjb250aW51ZTtcblxuICAgICAgICBhdmFpbGFibGVPcmRlcnMucHVzaCh7XG4gICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICB2ZW5kb3IsXG4gICAgICAgICAgICBkYXRlOiBmb3JtYXREYXRlKGRhdGVSYXcpLFxuICAgICAgICAgICAgZGVhZGxpbmU6IGZvcm1hdFRpbWUoZGVhZGxpbmVSYXcpIC8vIEZvcm1hdCB0aGUgZGVhZGxpbmVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGF2YWlsYWJsZU9yZGVycztcbn1cblxuLyoqXG4gKiBSZXRyaWV2ZXMgYWxsIGRhaWx5IG9yZGVycyBmb3IgYWRtaW4gZGlzcGxheS5cbiAqIEByZXR1cm5zIHtQcm9taXNlPERhaWx5T3JkZXJbXT59IEEgbGlzdCBvZiBhbGwgcHVibGlzaGVkIG9yZGVycy5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbERhaWx5T3JkZXJzKCk6IFByb21pc2U8RGFpbHlPcmRlcltdPiB7XG4gICAgY29uc3QgZGFpbHlPcmRlcnNSYW5nZSA9IGAke0RBSUxZX09SREVSU19TSEVFVF9OQU1FfSFBOkRgO1xuICAgICBjb25zdCBbZGFpbHlPcmRlcnNEYXRhLCBhbGxWZW5kb3JzXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgZ2V0U2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCBkYWlseU9yZGVyc1JhbmdlKSxcbiAgICAgICAgZ2V0VmVuZG9ycygpXG4gICAgXSk7XG4gICAgXG4gICAgaWYgKCFkYWlseU9yZGVyc0RhdGEgfHwgZGFpbHlPcmRlcnNEYXRhLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIGNvbnN0IGhlYWRlciA9IGRhaWx5T3JkZXJzRGF0YVswXTtcbiAgICBjb25zdCByb3dzID0gZGFpbHlPcmRlcnNEYXRhLnNsaWNlKDEpO1xuICAgIGNvbnN0IGFsbFZlbmRvcnNNYXAgPSBuZXcgTWFwKGFsbFZlbmRvcnMubWFwKHYgPT4gW3YudmVuZG9ySWQsIHZdKSk7XG4gICAgXG4gICAgY29uc3QgaGVhZGVyTWFwID0gaGVhZGVyLnJlZHVjZSgoYWNjLCBoLCBpKSA9PiB7XG4gICAgICAgIGFjY1tTdHJpbmcoaCldID0gaTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB7fSBhcyBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+KTtcblxuICAgIGNvbnN0IG9yZGVycyA9IHJvd3MubWFwKHJvdyA9PiB7XG4gICAgICAgIGNvbnN0IHZlbmRvcklkID0gcm93W2hlYWRlck1hcFsndmVuZG9ySWQnXV07XG4gICAgICAgIGNvbnN0IHZlbmRvciA9IGFsbFZlbmRvcnNNYXAuZ2V0KHZlbmRvcklkKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZDogcm93W2hlYWRlck1hcFsnaWQnXV0gfHwgJycsXG4gICAgICAgICAgICBkYXRlOiBmb3JtYXREYXRlKHJvd1toZWFkZXJNYXBbJ2RhdGUnXV0pLFxuICAgICAgICAgICAgdmVuZG9ySWQ6IHZlbmRvcklkIHx8ICcnLFxuICAgICAgICAgICAgdmVuZG9yTmFtZTogdmVuZG9yID8gdmVuZG9yLnZlbmRvck5hbWUgOiAn5pyq55+l5bqX5a62JyxcbiAgICAgICAgICAgIGRlYWRsaW5lOiBmb3JtYXRUaW1lKHJvd1toZWFkZXJNYXBbJ2RlYWRsaW5lJ11dKVxuICAgICAgICB9O1xuICAgIH0pLmZpbHRlcihvcmRlciA9PiBvcmRlci5pZCk7IC8vIEZpbHRlciBvdXQgYW55IGVtcHR5IHJvd3NcblxuICAgIC8vIFNvcnQgb3JkZXJzIGJ5IGRhdGUgYW5kIHRoZW4gYnkgZGVhZGxpbmUsIGFzY2VuZGluZyAoY2xvc2VzdCBmaXJzdClcbiAgICBvcmRlcnMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICBjb25zdCBkYXRlQSA9IG5ldyBEYXRlKGAke2EuZGF0ZX1UJHthLmRlYWRsaW5lfWApO1xuICAgICAgICBjb25zdCBkYXRlQiA9IG5ldyBEYXRlKGAke2IuZGF0ZX1UJHtiLmRlYWRsaW5lfWApO1xuICAgICAgICByZXR1cm4gZGF0ZUEuZ2V0VGltZSgpIC0gZGF0ZUIuZ2V0VGltZSgpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG9yZGVycztcbn1cblxuXG4vKipcbiAqIFB1Ymxpc2hlcyBhIG5ldyBvcmRlciBmb3IgYSBzcGVjaWZpYyBkYXRlLCB2ZW5kb3IgYW5kIGRlYWRsaW5lLlxuICogQHBhcmFtIHtQdWJsaXNoT3JkZXJSZXF1ZXN0fSByZXEgLSBUaGUgcmVxdWVzdCBjb250YWluaW5nIGRhdGUsIHZlbmRvcklkIGFuZCBkZWFkbGluZS5cbiAqIEByZXR1cm5zIHtQcm9taXNlPHtzdWNjZXNzOiBib29sZWFufT59IEEgc3VjY2VzcyBmbGFnLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcHVibGlzaE9yZGVyKHJlcTogUHVibGlzaE9yZGVyUmVxdWVzdCk6IFByb21pc2U8eyBzdWNjZXNzOiBib29sZWFuIH0+IHtcbiAgY29uc3QgdmFsaWRhdGlvbiA9IFB1Ymxpc2hPcmRlclJlcXVlc3RTY2hlbWEuc2FmZVBhcnNlKHJlcSk7XG4gIGlmICghdmFsaWRhdGlvbi5zdWNjZXNzKSB7XG4gICAgY29uc3QgZXJyb3JNc2cgPSB2YWxpZGF0aW9uLmVycm9yLmVycm9ycy5tYXAoZSA9PiBgJHtlLnBhdGguam9pbignLicpfTogJHtlLm1lc3NhZ2V9YCkuam9pbignLCAnKTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYOi8uOWFpeizh+aWmeacieiqpDogJHtlcnJvck1zZ31gKTtcbiAgfVxuXG4gIGNvbnN0IGFsbE9yZGVyc1JhbmdlID0gYCR7REFJTFlfT1JERVJTX1NIRUVUX05BTUV9IUEyOkFgO1xuICBjb25zdCBhbGxPcmRlcklkc0RhdGEgPSBhd2FpdCBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGFsbE9yZGVyc1JhbmdlKTtcbiAgICBjb25zdCBsYXN0SWROdW0gPSBhbGxPcmRlcklkc0RhdGEubGVuZ3RoID4gMCBcbiAgICAgICAgPyBNYXRoLm1heCgwLCAuLi5hbGxPcmRlcklkc0RhdGEubWFwKHJvdyA9PiBwYXJzZUludCgocm93WzBdIHx8ICdkbzAnKS5yZXBsYWNlKCdkbycsICcnKSwgMTApKS5maWx0ZXIobnVtID0+ICFpc05hTihudW0pKSlcbiAgICAgICAgOiAwO1xuICBjb25zdCBuZXdJZCA9IGBkbyR7KGxhc3RJZE51bSArIDEpLnRvU3RyaW5nKCkucGFkU3RhcnQoMywgJzAnKX1gO1xuXG4gIGNvbnN0IHZhbHVlcyA9IFtcbiAgICBbbmV3SWQsIHJlcS5kYXRlLCByZXEudmVuZG9ySWQsIHJlcS5kZWFkbGluZV1cbiAgXTtcbiAgXG4gIC8vIEVuc3VyZSBoZWFkZXJzIGV4aXN0XG4gIGNvbnN0IGhlYWRlcnMgPSBhd2FpdCBnZXRIZWFkZXJzKFNQUkVBRFNIRUVUX0lELCBEQUlMWV9PUkRFUlNfU0hFRVRfTkFNRSk7XG4gIGlmIChoZWFkZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgYXdhaXQgdXBkYXRlU2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCBgJHtEQUlMWV9PUkRFUlNfU0hFRVRfTkFNRX0hQTE6RDFgLCBbWydpZCcsICdkYXRlJywgJ3ZlbmRvcklkJywgJ2RlYWRsaW5lJ11dKTtcbiAgfVxuXG4gIGF3YWl0IGFwcGVuZFNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgYCR7REFJTFlfT1JERVJTX1NIRUVUX05BTUV9IUE6RGAsIHZhbHVlcyk7XG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbn1cblxuZXhwb3J0IHR5cGUgVXBkYXRlRGFpbHlPcmRlclJlcXVlc3QgPSB7XG4gICAgb3JkZXJJZDogc3RyaW5nO1xuICAgIHZlbmRvcklkOiBzdHJpbmc7XG4gICAgZGF0ZTogc3RyaW5nO1xuICAgIGRlYWRsaW5lOiBzdHJpbmc7XG59XG5cbi8qKlxuICogVXBkYXRlcyBhbiBleGlzdGluZyBkYWlseSBvcmRlcidzIGRhdGUgYW5kIGRlYWRsaW5lLlxuICogQHBhcmFtIHtVcGRhdGVEYWlseU9yZGVyUmVxdWVzdH0gcmVxIC0gVGhlIHJlcXVlc3QgY29udGFpbmluZyBvcmRlcklkLCBkYXRlIGFuZCBkZWFkbGluZS5cbiAqIEByZXR1cm5zIHtQcm9taXNlPHtzdWNjZXNzOiBib29sZWFufT59IEEgc3VjY2VzcyBmbGFnLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlRGFpbHlPcmRlcihyZXE6IFVwZGF0ZURhaWx5T3JkZXJSZXF1ZXN0KTogUHJvbWlzZTx7IHN1Y2Nlc3M6IGJvb2xlYW4gfT4ge1xuICAgIGNvbnN0IHsgb3JkZXJJZCwgdmVuZG9ySWQsIGRhdGUsIGRlYWRsaW5lIH0gPSByZXE7XG4gICAgXG4gICAgLy8gMS4gRmluZCB0aGUgcm93IG9mIHRoZSBvcmRlciB0byB1cGRhdGVcbiAgICBjb25zdCBhbGxPcmRlcnNEYXRhID0gYXdhaXQgZ2V0U2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCBgJHtEQUlMWV9PUkRFUlNfU0hFRVRfTkFNRX0hQTpBYCk7XG4gICAgY29uc3Qgcm93SW5kZXggPSBhbGxPcmRlcnNEYXRhLmZpbmRJbmRleChyb3cgPT4gcm93WzBdID09PSBvcmRlcklkKTtcbiAgICBcbiAgICBpZiAocm93SW5kZXggPT09IC0xKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihg5om+5LiN5YiwIElEIOeCuiAke29yZGVySWR9IOeahOioguWWruOAgmApO1xuICAgIH1cblxuICAgIC8vICsxIGJlY2F1c2Ugc2hlZXQgcm93cyBhcmUgMS1iYXNlZC5cbiAgICBjb25zdCByb3dUb1VwZGF0ZSA9IHJvd0luZGV4ICsgMTtcbiAgICBcbiAgICAvLyBXZSB1cGRhdGUgZGF0ZSBhbmQgZGVhZGxpbmUuIFZlbmRvcklkIGlzIG5vdCBjaGFuZ2VkLlxuICAgIC8vIFRoZSByYW5nZSBzaG91bGQgYmUgQng6RHggdG8gdXBkYXRlIGRhdGUgYW5kIGRlYWRsaW5lLlxuICAgIGNvbnN0IHVwZGF0ZVJhbmdlID0gYCR7REFJTFlfT1JERVJTX1NIRUVUX05BTUV9IUIke3Jvd1RvVXBkYXRlfTpEJHtyb3dUb1VwZGF0ZX1gO1xuICAgIGF3YWl0IHVwZGF0ZVNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgdXBkYXRlUmFuZ2UsIFtbZGF0ZSwgdmVuZG9ySWQsIGRlYWRsaW5lXV0pO1xuXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xufVxuXG5cbi8qKlxuICogRGVsZXRlcyBhIHB1Ymxpc2hlZCBkYWlseSBvcmRlciBhbmQgaXRzIGFzc29jaWF0ZWQgb3JkZXIgaXRlbXMuXG4gKiBAcGFyYW0ge3N0cmluZ30gZGFpbHlPcmRlcklkIFRoZSBJRCBvZiB0aGUgZGFpbHkgb3JkZXIgdG8gZGVsZXRlLlxuICogQHJldHVybnMge1Byb21pc2U8e3N1Y2Nlc3M6IGJvb2xlYW59Pn0gQSBzdWNjZXNzIGZsYWcuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVEYWlseU9yZGVyKGRhaWx5T3JkZXJJZDogc3RyaW5nKTogUHJvbWlzZTx7IHN1Y2Nlc3M6IGJvb2xlYW4gfT4ge1xuICAvLyAxLiBHZXQgYWxsIGRhdGEgZnJvbSBib3RoIHNoZWV0c1xuICBjb25zdCBbZGFpbHlPcmRlcnNEYXRhV2l0aEhlYWRlciwgb3JkZXJJdGVtc0RhdGFXaXRoSGVhZGVyXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGAke0RBSUxZX09SREVSU19TSEVFVF9OQU1FfSFBOkRgKSxcbiAgICBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGAke09SREVSX0lURU1TX1NIRUVUX05BTUV9IUE6TWApLCAvLyBSZWFkIHVwIHRvIGNvbHVtbiBNXG4gIF0pO1xuXG4gIGlmIChkYWlseU9yZGVyc0RhdGFXaXRoSGVhZGVyLmxlbmd0aCA8IDIpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG4gIH1cblxuICBjb25zdCBkYWlseU9yZGVyc0hlYWRlcnMgPSBkYWlseU9yZGVyc0RhdGFXaXRoSGVhZGVyWzBdO1xuICBjb25zdCBkYWlseU9yZGVyc1Jvd3MgPSBkYWlseU9yZGVyc0RhdGFXaXRoSGVhZGVyLnNsaWNlKDEpO1xuICBcbiAgY29uc3Qgb3JkZXJJdGVtc0hlYWRlcnMgPSBvcmRlckl0ZW1zRGF0YVdpdGhIZWFkZXIubGVuZ3RoID4gMCA/IG9yZGVySXRlbXNEYXRhV2l0aEhlYWRlclswXSA6IFtdO1xuICBjb25zdCBvcmRlckl0ZW1zUm93cyA9IG9yZGVySXRlbXNEYXRhV2l0aEhlYWRlci5sZW5ndGggPiAxID8gb3JkZXJJdGVtc0RhdGFXaXRoSGVhZGVyLnNsaWNlKDEpIDogW107XG5cbiAgLy8gMi4gRmlsdGVyIHRoZSByb3dzIHRvIGtlZXAgZm9yIGJvdGggc2hlZXRzXG4gIGNvbnN0IGRhaWx5T3JkZXJzVG9LZWVwID0gZGFpbHlPcmRlcnNSb3dzLmZpbHRlcihyb3cgPT4gcm93WzBdICE9PSBkYWlseU9yZGVySWQpO1xuXG4gIGxldCBvcmRlckl0ZW1zVG9LZWVwID0gb3JkZXJJdGVtc1Jvd3M7XG4gIGlmIChvcmRlckl0ZW1zUm93cy5sZW5ndGggPiAwICYmIG9yZGVySXRlbXNIZWFkZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IG9yZGVySXRlbXNIZWFkZXJNYXAgPSBvcmRlckl0ZW1zSGVhZGVycy5yZWR1Y2UoKGFjYywgaCwgaSkgPT4geyBhY2NbU3RyaW5nKGgpXSA9IGk7IHJldHVybiBhY2M7IH0sIHt9IGFzIFJlY29yZDxzdHJpbmcsIG51bWJlcj4pO1xuICAgICAgY29uc3QgZGFpbHlPcmRlcklkSW5kZXggPSBvcmRlckl0ZW1zSGVhZGVyTWFwWydkYWlseU9yZGVySWQnXTtcbiAgICAgIFxuICAgICAgLy8gRW5zdXJlIHRoZSBkYWlseU9yZGVySWQgY29sdW1uIGV4aXN0cyBiZWZvcmUgZmlsdGVyaW5nXG4gICAgICBpZiAoZGFpbHlPcmRlcklkSW5kZXggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIG9yZGVySXRlbXNUb0tlZXAgPSBvcmRlckl0ZW1zUm93cy5maWx0ZXIoaXRlbVJvdyA9PiBpdGVtUm93W2RhaWx5T3JkZXJJZEluZGV4XSAhPT0gZGFpbHlPcmRlcklkKTtcbiAgICAgIH1cbiAgfVxuXG4gIC8vIDQuIFByZXBhcmUgYmF0Y2ggdXBkYXRlIGRhdGEgdG8gY2xlYXIgYW5kIHJld3JpdGUgYm90aCBzaGVldHNcbiAgYXdhaXQgYmF0Y2hVcGRhdGVTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIFtcbiAgICB7XG4gICAgICByYW5nZTogYCR7REFJTFlfT1JERVJTX1NIRUVUX05BTUV9IUExOkRgLFxuICAgICAgdmFsdWVzOiBbZGFpbHlPcmRlcnNIZWFkZXJzLCAuLi5kYWlseU9yZGVyc1RvS2VlcF0sXG4gICAgfSxcbiAgICB7XG4gICAgICByYW5nZTogYCR7T1JERVJfSVRFTVNfU0hFRVRfTkFNRX0hQTE6TWAsXG4gICAgICB2YWx1ZXM6IG9yZGVySXRlbXNIZWFkZXJzLmxlbmd0aCA+IDAgPyBbb3JkZXJJdGVtc0hlYWRlcnMsIC4uLm9yZGVySXRlbXNUb0tlZXBdIDogW10sXG4gICAgfVxuICBdKTtcblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG59XG5cblxuLyoqXG4gKiBTdWJtaXRzIGFuIG9yZGVyIGFuZCBzYXZlcyBpdCB0byB0aGUgJ29yZGVyX2l0ZW1zJyBzaGVldC5cbiAqIElmIGVkaXRpbmcgYW4gZXhpc3Rpbmcgb3JkZXIsIGl0IGZpcnN0IGRlbGV0ZXMgdGhlIG9sZCBpdGVtcy5cbiAqIEBwYXJhbSB7RmluYWxPcmRlcn0gb3JkZXIgLSBUaGUgY29tcGxldGUgb3JkZXIgZGV0YWlscy5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNFZGl0aW5nIC0gQSBmbGFnIHRvIGluZGljYXRlIGlmIHRoaXMgaXMgYW4gZWRpdC5cbiAqIEByZXR1cm5zIHtQcm9taXNlPHtzdWNjZXNzOiBib29sZWFufT59IEEgc3VjY2VzcyBmbGFnLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc3VibWl0T3JkZXIob3JkZXI6IEZpbmFsT3JkZXIsIGlzRWRpdGluZzogYm9vbGVhbiA9IGZhbHNlKTogUHJvbWlzZTx7IHN1Y2Nlc3M6IGJvb2xlYW4gfT4ge1xuICAgIC8vIElmIGVkaXRpbmcsIGZpcnN0IGRlbGV0ZSBhbGwgZXhpc3RpbmcgaXRlbXMgZm9yIHRoYXQgdXNlciBpbiB0aGF0IGRhaWx5IG9yZGVyXG4gICAgaWYgKGlzRWRpdGluZykge1xuICAgICAgICBhd2FpdCBkZWxldGVVc2VyT3JkZXIoeyB1c2VybmFtZTogb3JkZXIudXNlcm5hbWUsIGRhaWx5T3JkZXJJZDogb3JkZXIuZGFpbHlPcmRlcklkIH0pO1xuICAgIH1cbiAgICBcbiAgICAvLyBUaGVuLCBhcHBlbmQgdGhlIG5ldy91cGRhdGVkIGl0ZW1zXG4gICAgY29uc3QgYWxsSXRlbXNSYW5nZSA9IGAke09SREVSX0lURU1TX1NIRUVUX05BTUV9IUEyOkFgO1xuICAgIGNvbnN0IGFsbEl0ZW1JZHNEYXRhID0gYXdhaXQgZ2V0U2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCBhbGxJdGVtc1JhbmdlKTtcbiAgICBsZXQgbGFzdElkTnVtID0gYWxsSXRlbUlkc0RhdGEubGVuZ3RoID4gMFxuICAgICAgICA/IE1hdGgubWF4KDAsIC4uLmFsbEl0ZW1JZHNEYXRhLm1hcChyb3cgPT4gcGFyc2VJbnQoKHJvd1swXSB8fCAnb2kwJykucmVwbGFjZSgnb2knLCAnJyksIDEwKSkuZmlsdGVyKG51bSA9PiAhaXNOYU4obnVtKSkpXG4gICAgICAgIDogMDtcblxuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKTtcbiAgICBjb25zdCBvcmRlclZhbHVlcyA9IFtdO1xuXG4gICAgZm9yIChjb25zdCBpdGVtIG9mIG9yZGVyLml0ZW1zKSB7XG4gICAgICAgIGxhc3RJZE51bSsrOyAvLyBJbmNyZW1lbnQgSUQgZm9yIGVhY2ggaXRlbSBpbiB0aGUgbG9vcFxuICAgICAgICBjb25zdCBuZXdJZCA9IGBvaSR7bGFzdElkTnVtLnRvU3RyaW5nKCkucGFkU3RhcnQoMywgJzAnKX1gO1xuICAgICAgICBjb25zdCBvcHRpb25zU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoaXRlbS5vcHRpb25zKTtcblxuICAgICAgICBvcmRlclZhbHVlcy5wdXNoKFtcbiAgICAgICAgICAgIG5ld0lkLFxuICAgICAgICAgICAgb3JkZXIuZGFpbHlPcmRlcklkLFxuICAgICAgICAgICAgbm93LFxuICAgICAgICAgICAgb3JkZXIudXNlcm5hbWUsXG4gICAgICAgICAgICBvcmRlci52ZW5kb3JJZCxcbiAgICAgICAgICAgIG9yZGVyLnZlbmRvck5hbWUsXG4gICAgICAgICAgICBpdGVtLm1lbnVJdGVtSWQsXG4gICAgICAgICAgICBpdGVtLm5hbWUsXG4gICAgICAgICAgICBpdGVtLnF1YW50aXR5LFxuICAgICAgICAgICAgaXRlbS5wcmljZSxcbiAgICAgICAgICAgIG9wdGlvbnNTdHJpbmcsXG4gICAgICAgICAgICBvcmRlci5ub3RlcyxcbiAgICAgICAgICAgICdGQUxTRScgLy8gaXNQYWlkXG4gICAgICAgIF0pO1xuICAgIH1cbiAgICBcbiAgICAvLyBFbnN1cmUgaGVhZGVycyBleGlzdFxuICAgIGNvbnN0IGhlYWRlcnMgPSBhd2FpdCBnZXRIZWFkZXJzKFNQUkVBRFNIRUVUX0lELCBPUkRFUl9JVEVNU19TSEVFVF9OQU1FKTtcbiAgICBpZiAoaGVhZGVycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgYXdhaXQgdXBkYXRlU2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCBgJHtPUkRFUl9JVEVNU19TSEVFVF9OQU1FfSFBMTpNMWAsIFtbJ2lkJywgJ2RhaWx5T3JkZXJJZCcsICd0aW1lc3RhbXAnLCAndXNlcm5hbWUnLCAndmVuZG9ySWQnLCAndmVuZG9yTmFtZScsICdtZW51SXRlbUlkJywgJ2l0ZW1OYW1lJywgJ3F1YW50aXR5JywgJ3ByaWNlJywgJ29wdGlvbnMnLCAnbm90ZXMnLCAnaXNQYWlkJ11dKTtcbiAgICB9XG5cbiAgICBpZiAob3JkZXJWYWx1ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBhd2FpdCBhcHBlbmRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGAke09SREVSX0lURU1TX1NIRUVUX05BTUV9IUE6TWAsIG9yZGVyVmFsdWVzKTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xufVxuXG5cbmV4cG9ydCB0eXBlIE9yZGVyRGV0YWlsSXRlbSA9IHtcbiAgICBpZDogc3RyaW5nO1xuICAgIGRhaWx5T3JkZXJJZDogc3RyaW5nO1xuICAgIHRpbWVzdGFtcDogc3RyaW5nO1xuICAgIHVzZXJuYW1lOiBzdHJpbmc7XG4gICAgdmVuZG9ySWQ6IHN0cmluZztcbiAgICB2ZW5kb3JOYW1lOiBzdHJpbmc7XG4gICAgbWVudUl0ZW1JZDogc3RyaW5nO1xuICAgIGl0ZW1OYW1lOiBzdHJpbmc7XG4gICAgcXVhbnRpdHk6IG51bWJlcjtcbiAgICBwcmljZTogbnVtYmVyO1xuICAgIG9wdGlvbnM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz47XG4gICAgbm90ZXM6IHN0cmluZztcbiAgICBpc1BhaWQ6IGJvb2xlYW47XG59O1xuXG4vKipcbiAqIFJldHJpZXZlcyBhbGwgb3JkZXIgaXRlbXMgZm9yIGEgc3BlY2lmaWMgZGFpbHkgb3JkZXIuXG4gKiBAcGFyYW0ge3N0cmluZ30gZGFpbHlPcmRlcklkIFRoZSBJRCBvZiB0aGUgZGFpbHkgb3JkZXIuXG4gKiBAcmV0dXJucyB7UHJvbWlzZTx7b3JkZXJEZXRhaWxzOiBPcmRlckRldGFpbEl0ZW1bXSwgZGFpbHlPcmRlcjogRGFpbHlPcmRlciB8IG51bGx9Pn0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIGxpc3Qgb2Ygb3JkZXIgaXRlbXMgYW5kIHRoZSBkYWlseSBvcmRlciBkZXRhaWxzLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0T3JkZXJEZXRhaWxzQnlEYWlseU9yZGVySWQoZGFpbHlPcmRlcklkOiBzdHJpbmcpOiBQcm9taXNlPHsgb3JkZXJEZXRhaWxzOiBPcmRlckRldGFpbEl0ZW1bXSwgZGFpbHlPcmRlcjogRGFpbHlPcmRlciB8IG51bGwgfT4ge1xuICAgIC8vIDEuIEdldCB0aGUgZGFpbHkgb3JkZXIgZGV0YWlsc1xuICAgIGNvbnN0IGFsbERhaWx5T3JkZXJzID0gYXdhaXQgZ2V0QWxsRGFpbHlPcmRlcnMoKTtcbiAgICBjb25zdCBkYWlseU9yZGVyID0gYWxsRGFpbHlPcmRlcnMuZmluZChvID0+IG8uaWQgPT09IGRhaWx5T3JkZXJJZCk7XG5cbiAgICBpZiAoIWRhaWx5T3JkZXIpIHtcbiAgICAgICAgcmV0dXJuIHsgb3JkZXJEZXRhaWxzOiBbXSwgZGFpbHlPcmRlcjogbnVsbCB9O1xuICAgIH1cblxuICAgIC8vIDIuIEdldCBhbGwgb3JkZXIgaXRlbXNcbiAgICBjb25zdCBvcmRlckl0ZW1zUmFuZ2UgPSBgJHtPUkRFUl9JVEVNU19TSEVFVF9OQU1FfSFBOk1gOyAvLyBFeHRlbmRlZCB0byBjb2x1bW4gTSBmb3IgbmV3IGZpZWxkc1xuICAgIGNvbnN0IG9yZGVySXRlbXNEYXRhID0gYXdhaXQgZ2V0U2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCBvcmRlckl0ZW1zUmFuZ2UpO1xuXG4gICAgaWYgKG9yZGVySXRlbXNEYXRhLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgcmV0dXJuIHsgb3JkZXJEZXRhaWxzOiBbXSwgZGFpbHlPcmRlcjogZGFpbHlPcmRlciB9O1xuICAgIH1cblxuICAgIGNvbnN0IGhlYWRlcnMgPSBvcmRlckl0ZW1zRGF0YVswXS5tYXAoaCA9PiBTdHJpbmcoaCkudHJpbSgpKTtcbiAgICBjb25zdCBoZWFkZXJNYXAgPSBoZWFkZXJzLnJlZHVjZSgoYWNjLCBoZWFkZXIsIGluZGV4KSA9PiB7XG4gICAgICAgIGFjY1toZWFkZXIudHJpbSgpXSA9IGluZGV4O1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgIH0sIHt9IGFzIFJlY29yZDxzdHJpbmcsIG51bWJlcj4pO1xuXG4gICAgLy8gQ2hlY2sgZm9yIHJlcXVpcmVkIGNvbHVtbnNcbiAgICBjb25zdCByZXF1aXJlZENvbHMgPSBbJ2lkJywgJ2RhaWx5T3JkZXJJZCcsICd0aW1lc3RhbXAnLCAndXNlcm5hbWUnLCAndmVuZG9ySWQnLCAndmVuZG9yTmFtZScsICdtZW51SXRlbUlkJywgJ2l0ZW1OYW1lJywgJ3F1YW50aXR5JywgJ3ByaWNlJywgJ29wdGlvbnMnLCAnbm90ZXMnLCAnaXNQYWlkJ107XG4gICAgZm9yIChjb25zdCBjb2wgb2YgcmVxdWlyZWRDb2xzKSB7XG4gICAgICAgIGlmIChoZWFkZXJNYXBbY29sXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvcjogVGhlICcke09SREVSX0lURU1TX1NIRUVUX05BTUV9JyBzaGVldCBpcyBtaXNzaW5nIHRoZSByZXF1aXJlZCBjb2x1bW46ICcke2NvbH0nLmApO1xuICAgICAgICAgICAgcmV0dXJuIHsgb3JkZXJEZXRhaWxzOiBbXSwgZGFpbHlPcmRlcjogZGFpbHlPcmRlciB9O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgcm93cyA9IG9yZGVySXRlbXNEYXRhLnNsaWNlKDEpO1xuXG4gICAgLy8gMy4gRmlsdGVyIGl0ZW1zIHRoYXQgbWF0Y2ggdGhlIGRhaWx5T3JkZXJJZFxuICAgIGNvbnN0IGZpbHRlcmVkSXRlbXMgPSByb3dzLmZpbHRlcihyb3cgPT4gcm93W2hlYWRlck1hcFsnZGFpbHlPcmRlcklkJ11dID09PSBkYWlseU9yZGVySWQpO1xuXG4gICAgLy8gNC4gTWFwIHRvIE9yZGVyRGV0YWlsSXRlbSBvYmplY3RzXG4gICAgY29uc3Qgb3JkZXJEZXRhaWxzOiBPcmRlckRldGFpbEl0ZW1bXSA9IGZpbHRlcmVkSXRlbXMubWFwKHJvdyA9PiAoe1xuICAgICAgICBpZDogcm93W2hlYWRlck1hcFsnaWQnXV0gfHwgJycsXG4gICAgICAgIGRhaWx5T3JkZXJJZDogcm93W2hlYWRlck1hcFsnZGFpbHlPcmRlcklkJ11dIHx8ICcnLFxuICAgICAgICB0aW1lc3RhbXA6IHJvd1toZWFkZXJNYXBbJ3RpbWVzdGFtcCddXSB8fCAnJyxcbiAgICAgICAgdXNlcm5hbWU6IHJvd1toZWFkZXJNYXBbJ3VzZXJuYW1lJ11dIHx8ICdOL0EnLFxuICAgICAgICB2ZW5kb3JJZDogcm93W2hlYWRlck1hcFsndmVuZG9ySWQnXV0gfHwgJycsXG4gICAgICAgIHZlbmRvck5hbWU6IHJvd1toZWFkZXJNYXBbJ3ZlbmRvck5hbWUnXV0gfHwgJycsXG4gICAgICAgIG1lbnVJdGVtSWQ6IHJvd1toZWFkZXJNYXBbJ21lbnVJdGVtSWQnXV0gfHwgJycsXG4gICAgICAgIGl0ZW1OYW1lOiByb3dbaGVhZGVyTWFwWydpdGVtTmFtZSddXSB8fCAnTi9BJyxcbiAgICAgICAgcXVhbnRpdHk6IHBhcnNlSW50KHJvd1toZWFkZXJNYXBbJ3F1YW50aXR5J11dIHx8ICcwJywgMTApLFxuICAgICAgICBwcmljZTogcGFyc2VJbnQocm93W2hlYWRlck1hcFsncHJpY2UnXV0gfHwgJzAnLCAxMCksXG4gICAgICAgIG9wdGlvbnM6IHNhZmVQYXJzZU9wdGlvbnMocm93W2hlYWRlck1hcFsnb3B0aW9ucyddXSB8fCAne30nKSxcbiAgICAgICAgbm90ZXM6IHJvd1toZWFkZXJNYXBbJ25vdGVzJ11dIHx8ICcnLFxuICAgICAgICBpc1BhaWQ6IHJvd1toZWFkZXJNYXBbJ2lzUGFpZCddXSA9PT0gJ1RSVUUnIHx8IHJvd1toZWFkZXJNYXBbJ2lzUGFpZCddXSA9PT0gdHJ1ZSxcbiAgICB9KSk7XG5cbiAgICByZXR1cm4geyBvcmRlckRldGFpbHMsIGRhaWx5T3JkZXIgfTtcbn1cblxuZXhwb3J0IHR5cGUgVXNlck9yZGVyR3JvdXAgPSB7XG4gICAgZGFpbHlPcmRlcjogRGFpbHlPcmRlcjtcbiAgICBpdGVtczogT3JkZXJEZXRhaWxJdGVtW107XG4gICAgdG90YWw6IG51bWJlcjtcbiAgICBub3Rlczogc3RyaW5nO1xufVxuXG4vKipcbiAqIFJldHJpZXZlcyBhbGwgb3JkZXJzIGZvciBhIHNwZWNpZmljIHVzZXIsIGdyb3VwZWQgYnkgZGFpbHkgb3JkZXIuXG4gKiBAcGFyYW0ge3N0cmluZ30gdXNlcm5hbWUgVGhlIHVzZXJuYW1lIHRvIGZldGNoIG9yZGVycyBmb3IuXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxVc2VyT3JkZXJHcm91cFtdPn0gQSBsaXN0IG9mIHRoZSB1c2VyJ3Mgb3JkZXJzLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0T3JkZXJzQnlVc2VybmFtZSh1c2VybmFtZTogc3RyaW5nKTogUHJvbWlzZTxVc2VyT3JkZXJHcm91cFtdPiB7XG4gICAgLy8gMS4gR2V0IGFsbCBkYWlseSBvcmRlcnMgYW5kIGFsbCBvcmRlciBpdGVtc1xuICAgIGNvbnN0IFthbGxEYWlseU9yZGVycywgYWxsT3JkZXJJdGVtc0RhdGFdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICBnZXRBbGxEYWlseU9yZGVycygpLFxuICAgICAgICBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGAke09SREVSX0lURU1TX1NIRUVUX05BTUV9IUE6TWApXG4gICAgXSk7XG5cbiAgICBpZiAoYWxsT3JkZXJJdGVtc0RhdGEubGVuZ3RoIDwgMikge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgY29uc3QgaXRlbXNIZWFkZXJzID0gYWxsT3JkZXJJdGVtc0RhdGFbMF0ubWFwKGggPT4gU3RyaW5nKGgpLnRyaW0oKSk7XG4gICAgY29uc3QgaXRlbXNIZWFkZXJNYXAgPSBpdGVtc0hlYWRlcnMucmVkdWNlKChhY2MsIGhlYWRlciwgaW5kZXgpID0+IHtcbiAgICAgICAgYWNjW2hlYWRlci50cmltKCldID0gaW5kZXg7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30gYXMgUmVjb3JkPHN0cmluZywgbnVtYmVyPik7XG5cbiAgICAvLyBDaGVjayBmb3IgcmVxdWlyZWQgY29sdW1uc1xuICAgIGNvbnN0IHJlcXVpcmVkQ29scyA9IFsndXNlcm5hbWUnLCAnZGFpbHlPcmRlcklkJywgJ2lkJywgJ3RpbWVzdGFtcCcsICd2ZW5kb3JJZCcsICd2ZW5kb3JOYW1lJywgJ21lbnVJdGVtSWQnLCAnaXRlbU5hbWUnLCAncXVhbnRpdHknLCAncHJpY2UnLCAnb3B0aW9ucycsICdub3RlcycsICdpc1BhaWQnXTtcbiAgICBmb3IgKGNvbnN0IGNvbCBvZiByZXF1aXJlZENvbHMpIHtcbiAgICAgICAgaWYgKGl0ZW1zSGVhZGVyTWFwW2NvbF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3I6IFRoZSAnJHtPUkRFUl9JVEVNU19TSEVFVF9OQU1FfScgc2hlZXQgaXMgbWlzc2luZyB0aGUgcmVxdWlyZWQgY29sdW1uOiAnJHtjb2x9Jy5gKTtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIDIuIEZpbHRlciBpdGVtcyBmb3IgdGhlIHNwZWNpZmljIHVzZXJuYW1lXG4gICAgY29uc3QgdXNlckl0ZW1zUm93cyA9IGFsbE9yZGVySXRlbXNEYXRhLnNsaWNlKDEpLmZpbHRlcihyb3cgPT4gcm93W2l0ZW1zSGVhZGVyTWFwWyd1c2VybmFtZSddXSA9PT0gdXNlcm5hbWUpO1xuICAgIFxuICAgIGlmICh1c2VySXRlbXNSb3dzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgY29uc3QgdXNlckl0ZW1zOiBPcmRlckRldGFpbEl0ZW1bXSA9IHVzZXJJdGVtc1Jvd3MubWFwKHJvdyA9PiAoe1xuICAgICAgICBpZDogcm93W2l0ZW1zSGVhZGVyTWFwWydpZCddXSB8fCAnJyxcbiAgICAgICAgZGFpbHlPcmRlcklkOiByb3dbaXRlbXNIZWFkZXJNYXBbJ2RhaWx5T3JkZXJJZCddXSB8fCAnJyxcbiAgICAgICAgdGltZXN0YW1wOiByb3dbaXRlbXNIZWFkZXJNYXBbJ3RpbWVzdGFtcCddXSB8fCAnJyxcbiAgICAgICAgdXNlcm5hbWU6IHJvd1tpdGVtc0hlYWRlck1hcFsndXNlcm5hbWUnXV0gfHwgJ04vQScsXG4gICAgICAgIHZlbmRvcklkOiByb3dbaXRlbXNIZWFkZXJNYXBbJ3ZlbmRvcklkJ11dIHx8ICcnLFxuICAgICAgICB2ZW5kb3JOYW1lOiByb3dbaXRlbXNIZWFkZXJNYXBbJ3ZlbmRvck5hbWUnXV0gfHwgJycsXG4gICAgICAgIG1lbnVJdGVtSWQ6IHJvd1tpdGVtc0hlYWRlck1hcFsnbWVudUl0ZW1JZCddXSB8fCAnJyxcbiAgICAgICAgaXRlbU5hbWU6IHJvd1tpdGVtc0hlYWRlck1hcFsnaXRlbU5hbWUnXV0gfHwgJ04vQScsXG4gICAgICAgIHF1YW50aXR5OiBwYXJzZUludChyb3dbaXRlbXNIZWFkZXJNYXBbJ3F1YW50aXR5J11dIHx8ICcwJywgMTApLFxuICAgICAgICBwcmljZTogcGFyc2VJbnQocm93W2l0ZW1zSGVhZGVyTWFwWydwcmljZSddXSB8fCAnMCcsIDEwKSxcbiAgICAgICAgb3B0aW9uczogc2FmZVBhcnNlT3B0aW9ucyhyb3dbaXRlbXNIZWFkZXJNYXBbJ29wdGlvbnMnXV0gfHwgJ3t9JyksXG4gICAgICAgIG5vdGVzOiByb3dbaXRlbXNIZWFkZXJNYXBbJ25vdGVzJ11dIHx8ICcnLFxuICAgICAgICBpc1BhaWQ6IHJvd1tpdGVtc0hlYWRlck1hcFsnaXNQYWlkJ11dID09PSAnVFJVRScgfHwgcm93W2l0ZW1zSGVhZGVyTWFwWydpc1BhaWQnXV0gPT09IHRydWUsXG4gICAgfSkpO1xuICAgIFxuICAgIC8vIDMuIEdyb3VwIGl0ZW1zIGJ5IGRhaWx5T3JkZXJJZFxuICAgIGNvbnN0IGdyb3VwZWRCeURhaWx5T3JkZXIgPSB1c2VySXRlbXMucmVkdWNlKChhY2MsIGl0ZW0pID0+IHtcbiAgICAgICAgY29uc3Qga2V5ID0gaXRlbS5kYWlseU9yZGVySWQ7XG4gICAgICAgIGlmICghYWNjW2tleV0pIHtcbiAgICAgICAgICAgIGFjY1trZXldID0gW107XG4gICAgICAgIH1cbiAgICAgICAgYWNjW2tleV0ucHVzaChpdGVtKTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB7fSBhcyBSZWNvcmQ8c3RyaW5nLCBPcmRlckRldGFpbEl0ZW1bXT4pO1xuICAgIFxuICAgIFxuICAgIC8vIDQuIEZvcm1hdCB0aGUgZmluYWwgb3V0cHV0XG4gICAgY29uc3QgYWxsRGFpbHlPcmRlcnNNYXAgPSBuZXcgTWFwKGFsbERhaWx5T3JkZXJzLm1hcChvID0+IFtvLmlkLCBvXSkpO1xuICAgIGNvbnN0IHJlc3VsdDogVXNlck9yZGVyR3JvdXBbXSA9IFtdO1xuXG4gICAgZm9yIChjb25zdCBkYWlseU9yZGVySWQgaW4gZ3JvdXBlZEJ5RGFpbHlPcmRlcikge1xuICAgICAgICBjb25zdCBkYWlseU9yZGVyID0gYWxsRGFpbHlPcmRlcnNNYXAuZ2V0KGRhaWx5T3JkZXJJZCk7XG4gICAgICAgIGlmIChkYWlseU9yZGVyKSB7XG4gICAgICAgICAgICBjb25zdCBpdGVtcyA9IGdyb3VwZWRCeURhaWx5T3JkZXJbZGFpbHlPcmRlcklkXTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgIC8vIEFnZ3JlZ2F0ZSBpdGVtcyB3aXRoIHRoZSBzYW1lIG1lbnVJdGVtSWQgYW5kIG9wdGlvbnNcbiAgICAgICAgICAgIGNvbnN0IGFnZ3JlZ2F0ZWRJdGVtc01hcCA9IGl0ZW1zLnJlZHVjZSgoYWNjLCBpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uc1N0cmluZyA9IEpTT04uc3RyaW5naWZ5KGl0ZW0ub3B0aW9ucyB8fCB7fSk7XG4gICAgICAgICAgICAgICAgY29uc3QgYWdncmVnYXRpb25LZXkgPSBgJHtpdGVtLm1lbnVJdGVtSWR9fCR7b3B0aW9uc1N0cmluZ31gO1xuICAgICAgICAgICAgICAgIGlmIChhY2MuaGFzKGFnZ3JlZ2F0aW9uS2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBleGlzdGluZ0l0ZW0gPSBhY2MuZ2V0KGFnZ3JlZ2F0aW9uS2V5KSE7XG4gICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nSXRlbS5xdWFudGl0eSArPSBpdGVtLnF1YW50aXR5O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIENyZWF0ZSBhIGNvcHkgdG8gYXZvaWQgbW9kaWZ5aW5nIHRoZSBvcmlnaW5hbCBhcnJheSBpdGVtc1xuICAgICAgICAgICAgICAgICAgICBhY2Muc2V0KGFnZ3JlZ2F0aW9uS2V5LCB7IC4uLml0ZW0gfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgICAgICB9LCBuZXcgTWFwPHN0cmluZywgT3JkZXJEZXRhaWxJdGVtPigpKTtcblxuICAgICAgICAgICAgY29uc3QgZmluYWxJdGVtcyA9IEFycmF5LmZyb20oYWdncmVnYXRlZEl0ZW1zTWFwLnZhbHVlcygpKTtcbiAgICAgICAgICAgIGNvbnN0IHRvdGFsID0gZmluYWxJdGVtcy5yZWR1Y2UoKHN1bSwgaXRlbSkgPT4gc3VtICsgaXRlbS5wcmljZSAqIGl0ZW0ucXVhbnRpdHksIDApO1xuICAgICAgICAgICAgY29uc3Qgbm90ZXMgPSBpdGVtcy5sZW5ndGggPiAwID8gaXRlbXNbMF0ubm90ZXMgOiAnJzsgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBkYWlseU9yZGVyLFxuICAgICAgICAgICAgICAgIGl0ZW1zOiBmaW5hbEl0ZW1zLFxuICAgICAgICAgICAgICAgIHRvdGFsLFxuICAgICAgICAgICAgICAgIG5vdGVzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLy8gNS4gU29ydCB0aGUgZmluYWwgZ3JvdXBzIGJ5IGRhdGUsIG1vc3QgcmVjZW50IGZpcnN0XG4gICAgcmVzdWx0LnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgY29uc3QgZGF0ZUEgPSBuZXcgRGF0ZShgJHthLmRhaWx5T3JkZXIuZGF0ZX1UJHthLmRhaWx5T3JkZXIuZGVhZGxpbmV9YCk7XG4gICAgICAgIGNvbnN0IGRhdGVCID0gbmV3IERhdGUoYCR7Yi5kYWlseU9yZGVyLmRhdGV9VCR7Yi5kYWlseU9yZGVyLmRlYWRsaW5lfWApO1xuICAgICAgICByZXR1cm4gZGF0ZUIuZ2V0VGltZSgpIC0gZGF0ZUEuZ2V0VGltZSgpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBSZXRyaWV2ZXMgYSB1c2VyJ3Mgc3BlY2lmaWMgb3JkZXIgZm9yIGEgZ2l2ZW4gZGFpbHkgb3JkZXIsIGZvcm1hdHRlZCBmb3IgZWRpdGluZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSB1c2VybmFtZSBUaGUgdXNlcm5hbWUuXG4gKiBAcGFyYW0ge3N0cmluZ30gZGFpbHlPcmRlcklkIFRoZSBJRCBvZiB0aGUgZGFpbHkgb3JkZXIuXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxPcmRlckl0ZW1bXT59IEEgbGlzdCBvZiBvcmRlciBpdGVtcyByZWFkeSBmb3IgdGhlIGNhcnQuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRFeGlzdGluZ09yZGVyRm9yRWRpdCh1c2VybmFtZTogc3RyaW5nLCBkYWlseU9yZGVySWQ6IHN0cmluZyk6IFByb21pc2U8T3JkZXJJdGVtW10+IHtcbiAgY29uc3QgYWxsT3JkZXJJdGVtc0RhdGEgPSBhd2FpdCBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGAke09SREVSX0lURU1TX1NIRUVUX05BTUV9IUE6TWApO1xuICBpZiAoYWxsT3JkZXJJdGVtc0RhdGEubGVuZ3RoIDwgMikge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIGNvbnN0IGl0ZW1zSGVhZGVycyA9IGFsbE9yZGVySXRlbXNEYXRhWzBdLm1hcChoID0+IFN0cmluZyhoKS50cmltKCkpO1xuICBjb25zdCBpdGVtc0hlYWRlck1hcCA9IGl0ZW1zSGVhZGVycy5yZWR1Y2UoKGFjYywgaGVhZGVyLCBpbmRleCkgPT4ge1xuICAgIGFjY1toZWFkZXJdID0gaW5kZXg7XG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30gYXMgUmVjb3JkPHN0cmluZywgbnVtYmVyPik7XG5cbiAgY29uc3QgdXNlckl0ZW1zUm93cyA9IGFsbE9yZGVySXRlbXNEYXRhXG4gICAgLnNsaWNlKDEpXG4gICAgLmZpbHRlcihyb3cgPT4gcm93W2l0ZW1zSGVhZGVyTWFwWyd1c2VybmFtZSddXSA9PT0gdXNlcm5hbWUgJiYgcm93W2l0ZW1zSGVhZGVyTWFwWydkYWlseU9yZGVySWQnXV0gPT09IGRhaWx5T3JkZXJJZCk7XG5cbiAgaWYgKHVzZXJJdGVtc1Jvd3MubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIFxuICAvLyBIZWxwZXIgdG8gcmUtZ2VuZXJhdGUgdGhlIGNvbXBvc2l0ZSBpdGVtIElEIGZvciB0aGUgY2FydFxuICBjb25zdCBnZW5lcmF0ZU9yZGVySXRlbUlkID0gKGl0ZW1JZDogc3RyaW5nLCBvcHRpb25zOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+KSA9PiB7XG4gICAgaWYgKE9iamVjdC5rZXlzKG9wdGlvbnMpLmxlbmd0aCA9PT0gMCkgcmV0dXJuIGl0ZW1JZDtcbiAgICBjb25zdCBzb3J0ZWRTZWxlY3Rpb25zID0gT2JqZWN0LmtleXMob3B0aW9ucykuc29ydCgpLm1hcChrZXkgPT4gYCR7a2V5fToke29wdGlvbnNba2V5XX1gKS5qb2luKCd8Jyk7XG4gICAgcmV0dXJuIGAke2l0ZW1JZH1bJHtzb3J0ZWRTZWxlY3Rpb25zfV1gO1xuICB9XG5cbiAgY29uc3Qgb3JkZXJJdGVtczogT3JkZXJJdGVtW10gPSB1c2VySXRlbXNSb3dzLm1hcChyb3cgPT4ge1xuICAgIGNvbnN0IG9wdGlvbnMgPSBzYWZlUGFyc2VPcHRpb25zKHJvd1tpdGVtc0hlYWRlck1hcFsnb3B0aW9ucyddXSB8fCAne30nKTtcbiAgICBjb25zdCBtZW51SXRlbUlkID0gcm93W2l0ZW1zSGVhZGVyTWFwWydtZW51SXRlbUlkJ11dO1xuICAgIHJldHVybiB7XG4gICAgICBpZDogZ2VuZXJhdGVPcmRlckl0ZW1JZChtZW51SXRlbUlkLCBvcHRpb25zKSxcbiAgICAgIG1lbnVJdGVtSWQ6IG1lbnVJdGVtSWQsXG4gICAgICBuYW1lOiByb3dbaXRlbXNIZWFkZXJNYXBbJ2l0ZW1OYW1lJ11dIHx8ICcnLFxuICAgICAgcHJpY2U6IHBhcnNlSW50KHJvd1tpdGVtc0hlYWRlck1hcFsncHJpY2UnXV0gfHwgJzAnLCAxMCksXG4gICAgICBxdWFudGl0eTogcGFyc2VJbnQocm93W2l0ZW1zSGVhZGVyTWFwWydxdWFudGl0eSddXSB8fCAnMCcsIDEwKSxcbiAgICAgIHZlbmRvck5hbWU6IHJvd1tpdGVtc0hlYWRlck1hcFsndmVuZG9yTmFtZSddXSB8fCAnJyxcbiAgICAgIHZlbmRvcklkOiByb3dbaXRlbXNIZWFkZXJNYXBbJ3ZlbmRvcklkJ11dIHx8ICcnLFxuICAgICAgdXNlcm5hbWU6IHVzZXJuYW1lLFxuICAgICAgb3B0aW9uczogb3B0aW9ucyxcbiAgICAgIG5vdGVzOiByb3dbaXRlbXNIZWFkZXJNYXBbJ25vdGVzJ11dIHx8ICcnLFxuICAgIH07XG4gIH0pO1xuICBcbiAgcmV0dXJuIG9yZGVySXRlbXM7XG59XG5cblxuLyoqXG4gKiBEZWxldGVzIGEgdXNlcidzIGVudGlyZSBvcmRlciBmb3IgYSBzcGVjaWZpYyBkYWlseSBvcmRlci5cbiAqIEBwYXJhbSB7b2JqZWN0fSBwYXJhbXMgLSBUaGUgcGFyYW1ldGVycyBmb3IgZGVsZXRpbmcgdGhlIG9yZGVyLlxuICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtcy51c2VybmFtZSAtIFRoZSB1c2VybmFtZSBvZiB0aGUgdXNlci5cbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXMuZGFpbHlPcmRlcklkIC0gVGhlIElEIG9mIHRoZSBkYWlseSBvcmRlciB0byBkZWxldGUuXG4gKiBAcmV0dXJucyB7UHJvbWlzZTx7c3VjY2VzczogYm9vbGVhbn0+fSBBIHN1Y2Nlc3MgZmxhZy5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVVzZXJPcmRlcih7IHVzZXJuYW1lLCBkYWlseU9yZGVySWQgfTogeyB1c2VybmFtZTogc3RyaW5nLCBkYWlseU9yZGVySWQ6IHN0cmluZyB9KTogUHJvbWlzZTx7IHN1Y2Nlc3M6IGJvb2xlYW4gfT4ge1xuICAgIGNvbnN0IFtvcmRlckl0ZW1zRGF0YVdpdGhIZWFkZXJdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGAke09SREVSX0lURU1TX1NIRUVUX05BTUV9IUE6TWApLFxuICAgIF0pO1xuXG4gICAgaWYgKG9yZGVySXRlbXNEYXRhV2l0aEhlYWRlci5sZW5ndGggPCAyKSB7XG4gICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07IC8vIE5vIGl0ZW1zIHRvIGRlbGV0ZVxuICAgIH1cblxuICAgIGNvbnN0IGl0ZW1zSGVhZGVycyA9IG9yZGVySXRlbXNEYXRhV2l0aEhlYWRlclswXTtcbiAgICBjb25zdCBpdGVtc1Jvd3MgPSBvcmRlckl0ZW1zRGF0YVdpdGhIZWFkZXIuc2xpY2UoMSk7XG4gICAgXG4gICAgY29uc3QgaGVhZGVyTWFwID0gaXRlbXNIZWFkZXJzLnJlZHVjZSgoYWNjLCBoLCBpKSA9PiB7IGFjY1tTdHJpbmcoaCldID0gaTsgcmV0dXJuIGFjYzsgfSwge30gYXMgUmVjb3JkPHN0cmluZywgbnVtYmVyPik7XG4gICAgY29uc3QgZGFpbHlPcmRlcklkSW5kZXggPSBoZWFkZXJNYXBbJ2RhaWx5T3JkZXJJZCddO1xuICAgIGNvbnN0IHVzZXJuYW1lSW5kZXggPSBoZWFkZXJNYXBbJ3VzZXJuYW1lJ107XG5cbiAgICBpZiAoZGFpbHlPcmRlcklkSW5kZXggPT09IHVuZGVmaW5lZCB8fCB1c2VybmFtZUluZGV4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlICdvcmRlcl9pdGVtcycgc2hlZXQgaXMgbWlzc2luZyByZXF1aXJlZCBjb2x1bW5zICdkYWlseU9yZGVySWQnIG9yICd1c2VybmFtZScuXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IGl0ZW1zVG9LZWVwID0gaXRlbXNSb3dzLmZpbHRlcihyb3cgPT4gXG4gICAgICAgICEocm93W2RhaWx5T3JkZXJJZEluZGV4XSA9PT0gZGFpbHlPcmRlcklkICYmIHJvd1t1c2VybmFtZUluZGV4XSA9PT0gdXNlcm5hbWUpXG4gICAgKTtcbiAgICBcbiAgICBhd2FpdCBiYXRjaFVwZGF0ZVNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgW3tcbiAgICAgICAgcmFuZ2U6IGAke09SREVSX0lURU1TX1NIRUVUX05BTUV9IUExOk1gLFxuICAgICAgICB2YWx1ZXM6IFtpdGVtc0hlYWRlcnMsIC4uLml0ZW1zVG9LZWVwXSxcbiAgICB9XSk7XG5cbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG59XG5cbi8qKlxuICogTWFya3MgYSB1c2VyJ3Mgb3JkZXIgZm9yIGEgc3BlY2lmaWMgZGFpbHkgb3JkZXIgYXMgcGFpZCBvciB1bnBhaWQuXG4gKiBAcGFyYW0ge29iamVjdH0gcGFyYW1zIC0gVGhlIHBhcmFtZXRlcnMgZm9yIHRoZSBvcGVyYXRpb24uXG4gKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1zLmRhaWx5T3JkZXJJZCAtIFRoZSBJRCBvZiB0aGUgZGFpbHkgb3JkZXIuXG4gKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1zLnVzZXJuYW1lIC0gVGhlIHVzZXJuYW1lIG9mIHRoZSB1c2VyLlxuICogQHBhcmFtIHtib29sZWFufSBwYXJhbXMuaXNQYWlkIC0gVGhlIG5ldyBwYXltZW50IHN0YXR1cy5cbiAqIEByZXR1cm5zIHtQcm9taXNlPHtzdWNjZXNzOiBib29sZWFufT59IEEgc3VjY2VzcyBmbGFnLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbWFya1VzZXJPcmRlckFzUGFpZCh7IGRhaWx5T3JkZXJJZCwgdXNlcm5hbWUsIGlzUGFpZCB9OiB7IGRhaWx5T3JkZXJJZDogc3RyaW5nLCB1c2VybmFtZTogc3RyaW5nLCBpc1BhaWQ6IGJvb2xlYW4gfSk6IFByb21pc2U8eyBzdWNjZXNzOiBib29sZWFuIH0+IHtcbiAgLy8gMS4gR2V0IGFsbCBvcmRlciBpdGVtcyBkYXRhLlxuICBjb25zdCBhbGxJdGVtc0RhdGEgPSBhd2FpdCBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGAke09SREVSX0lURU1TX1NIRUVUX05BTUV9IUE6TWApO1xuXG4gIGlmIChhbGxJdGVtc0RhdGEubGVuZ3RoIDwgMikge1xuICAgIHRocm93IG5ldyBFcnJvcihcIuaJvuS4jeWIsOioguWWruWTgemgheizh+aWmeOAglwiKTtcbiAgfVxuXG4gIGNvbnN0IGhlYWRlcnMgPSBhbGxJdGVtc0RhdGFbMF07XG4gIGNvbnN0IHJvd3MgPSBhbGxJdGVtc0RhdGEuc2xpY2UoMSk7XG4gIGNvbnN0IGhlYWRlck1hcCA9IGhlYWRlcnMucmVkdWNlKChhY2MsIGgsIGkpID0+IHsgYWNjW1N0cmluZyhoKV0gPSBpOyByZXR1cm4gYWNjOyB9LCB7fSBhcyBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+KTtcbiAgY29uc3QgZGFpbHlPcmRlcklkSW5kZXggPSBoZWFkZXJNYXBbJ2RhaWx5T3JkZXJJZCddO1xuICBjb25zdCB1c2VybmFtZUluZGV4ID0gaGVhZGVyTWFwWyd1c2VybmFtZSddO1xuICBjb25zdCBpc1BhaWRJbmRleCA9IGhlYWRlck1hcFsnaXNQYWlkJ107XG5cbiAgaWYgKGRhaWx5T3JkZXJJZEluZGV4ID09PSB1bmRlZmluZWQgfHwgdXNlcm5hbWVJbmRleCA9PT0gdW5kZWZpbmVkIHx8IGlzUGFpZEluZGV4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSAnb3JkZXJfaXRlbXMnIHNoZWV0IGlzIG1pc3NpbmcgcmVxdWlyZWQgY29sdW1uczogJ2RhaWx5T3JkZXJJZCcsICd1c2VybmFtZScsIG9yICdpc1BhaWQnLlwiKTtcbiAgfVxuICAgIFxuICAvLyAyLiBQcmVwYXJlIGJhdGNoIHVwZGF0ZSBkYXRhXG4gIGNvbnN0IGRhdGFUb1VwZGF0ZSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd3MubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCByb3cgPSByb3dzW2ldO1xuICAgIGlmIChyb3dbZGFpbHlPcmRlcklkSW5kZXhdID09PSBkYWlseU9yZGVySWQgJiYgcm93W3VzZXJuYW1lSW5kZXhdID09PSB1c2VybmFtZSkge1xuICAgICAgLy8gU2hlZXQgcm93cyBhcmUgMS1iYXNlZCwgYW5kIHdlIGhhdmUgYSBoZWFkZXIgcm93LCBzbyBhZGQgMi5cbiAgICAgIGNvbnN0IHJvd0luZGV4ID0gaSArIDI7IFxuICAgICAgZGF0YVRvVXBkYXRlLnB1c2goe1xuICAgICAgICByYW5nZTogYCR7T1JERVJfSVRFTVNfU0hFRVRfTkFNRX0hTSR7cm93SW5kZXh9YCwgLy8gJ00nIGlzIHRoZSBpc1BhaWQgY29sdW1uXG4gICAgICAgIHZhbHVlczogW1tpc1BhaWQgPyAnVFJVRScgOiAnRkFMU0UnXV0sXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvLyAzLiBFeGVjdXRlIGJhdGNoIHVwZGF0ZSBpZiB0aGVyZSdzIGFueXRoaW5nIHRvIHVwZGF0ZVxuICBpZiAoZGF0YVRvVXBkYXRlLmxlbmd0aCA+IDApIHtcbiAgICAvLyBUaGlzIGlzIG5vdCBhIFwidHJ1ZVwiIGJhdGNoIHVwZGF0ZSBpbiBvbmUgQVBJIGNhbGwsIGJ1dCBpdCdzIGJldHRlciB0aGFuIHJlYWRpbmcvd3JpdGluZyB0aGUgd2hvbGUgc2hlZXQuXG4gICAgLy8gQSBzaW5nbGUgYmF0Y2hVcGRhdGUgY2FsbCB3b3VsZCBiZSBtb3JlIGVmZmljaWVudCBpZiB0aGUgQVBJIHN0cnVjdHVyZSBhbGxvd3MgaXQgZWFzaWx5LlxuICAgICBjb25zdCBzaGVldHMgPSBhd2FpdCBnZXRBdXRoZW50aWNhdGVkQ2xpZW50KCk7XG4gICAgIGF3YWl0IHNoZWV0cy5zcHJlYWRzaGVldHMudmFsdWVzLmJhdGNoVXBkYXRlKHtcbiAgICAgICAgc3ByZWFkc2hlZXRJZDogU1BSRUFEU0hFRVRfSUQsXG4gICAgICAgIHJlcXVlc3RCb2R5OiB7XG4gICAgICAgICAgICB2YWx1ZUlucHV0T3B0aW9uOiAnVVNFUl9FTlRFUkVEJyxcbiAgICAgICAgICAgIGRhdGE6IGRhdGFUb1VwZGF0ZSxcbiAgICAgICAgfVxuICAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbn1cblxuZXhwb3J0IHR5cGUgVXBkYXRlVXNlck9yZGVyUmVxdWVzdCA9IHtcbiAgICBkYWlseU9yZGVySWQ6IHN0cmluZztcbiAgICB1c2VybmFtZTogc3RyaW5nO1xuICAgIGl0ZW1zOiBPcmRlckRldGFpbEl0ZW1bXTsgLy8gVGhlIGNvbXBsZXRlIG5ldyBsaXN0IG9mIGl0ZW1zXG59O1xuXG4vKipcbiAqIFVwZGF0ZXMgYSB1c2VyJ3MgZW50aXJlIG9yZGVyIGZvciBhIHNwZWNpZmljIGRhaWx5IG9yZGVyLlxuICogSXQgcmVwbGFjZXMgYWxsIG9mIHRoZSB1c2VyJ3MgcHJldmlvdXMgaXRlbXMgd2l0aCB0aGUgbmV3IGxpc3QgcHJvdmlkZWQuXG4gKiBAcGFyYW0ge1VwZGF0ZVVzZXJPcmRlclJlcXVlc3R9IHJlcSAtIFRoZSByZXF1ZXN0IGNvbnRhaW5pbmcgdGhlIHVzZXIncyB1cGRhdGVkIG9yZGVyLlxuICogQHJldHVybnMge1Byb21pc2U8e3N1Y2Nlc3M6IGJvb2xlYW59Pn0gQSBzdWNjZXNzIGZsYWcuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVVc2VyT3JkZXIocmVxOiBVcGRhdGVVc2VyT3JkZXJSZXF1ZXN0KTogUHJvbWlzZTx7IHN1Y2Nlc3M6IGJvb2xlYW4gfT4ge1xuICAgIGNvbnN0IHsgZGFpbHlPcmRlcklkLCB1c2VybmFtZSwgaXRlbXMgfSA9IHJlcTtcblxuICAgIC8vIDEuIEZpcnN0LCBkZWxldGUgYWxsIGV4aXN0aW5nIGl0ZW1zIGZvciB0aGlzIHVzZXIgaW4gdGhpcyBkYWlseSBvcmRlci5cbiAgICAvLyBUaGlzIHNpbXBsaWZpZXMgdGhlIGxvZ2ljIGJ5IG5vdCBoYXZpbmcgdG8gZmluZCBhbmQgdXBkYXRlIGluZGl2aWR1YWwgcm93cy5cbiAgICBhd2FpdCBkZWxldGVVc2VyT3JkZXIoeyB1c2VybmFtZSwgZGFpbHlPcmRlcklkIH0pO1xuXG4gICAgLy8gMi4gSWYgdGhlIG5ldyBsaXN0IG9mIGl0ZW1zIGlzIGVtcHR5LCB3ZSdyZSBkb25lLlxuICAgIGlmIChpdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xuICAgIH1cblxuICAgIC8vIDMuIEFwcGVuZCB0aGUgbmV3IGxpc3Qgb2YgaXRlbXMgdG8gdGhlIHNoZWV0LlxuICAgIGNvbnN0IGFsbEl0ZW1zUmFuZ2UgPSBgJHtPUkRFUl9JVEVNU19TSEVFVF9OQU1FfSFBMjpBYDtcbiAgICBjb25zdCBhbGxJdGVtSWRzRGF0YSA9IGF3YWl0IGdldFNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgYWxsSXRlbXNSYW5nZSk7XG4gICAgbGV0IGxhc3RJZE51bSA9IGFsbEl0ZW1JZHNEYXRhLmxlbmd0aCA+IDBcbiAgICAgICAgPyBNYXRoLm1heCgwLCAuLi5hbGxJdGVtSWRzRGF0YS5tYXAocm93ID0+IHBhcnNlSW50KChyb3dbMF0gfHwgJ29pMCcpLnJlcGxhY2UoJ29pJywgJycpLCAxMCkpLmZpbHRlcihudW0gPT4gIWlzTmFOKG51bSkpKVxuICAgICAgICA6IDA7XG4gICAgXG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpO1xuICAgIGNvbnN0IG9yZGVyVmFsdWVzID0gW107XG4gICAgY29uc3Qgbm90ZXMgPSBpdGVtc1swXT8ubm90ZXMgfHwgJyc7IC8vIEFzc3VtZSBub3RlcyBhcmUgdGhlIHNhbWUgZm9yIGFsbCBpdGVtc1xuICAgIGNvbnN0IGlzUGFpZCA9IGl0ZW1zWzBdPy5pc1BhaWQgfHwgZmFsc2U7IC8vIEFzc3VtZSBwYXltZW50IHN0YXR1cyBpcyB0aGUgc2FtZVxuXG4gICAgZm9yIChjb25zdCBpdGVtIG9mIGl0ZW1zKSB7XG4gICAgICAgIGxhc3RJZE51bSsrO1xuICAgICAgICBjb25zdCBuZXdJZCA9IGBvaSR7bGFzdElkTnVtLnRvU3RyaW5nKCkucGFkU3RhcnQoMywgJzAnKX1gO1xuICAgICAgICBjb25zdCBvcHRpb25zU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoaXRlbS5vcHRpb25zKTtcblxuICAgICAgICBvcmRlclZhbHVlcy5wdXNoKFtcbiAgICAgICAgICAgIG5ld0lkLFxuICAgICAgICAgICAgZGFpbHlPcmRlcklkLFxuICAgICAgICAgICAgbm93LFxuICAgICAgICAgICAgdXNlcm5hbWUsXG4gICAgICAgICAgICBpdGVtLnZlbmRvcklkLFxuICAgICAgICAgICAgaXRlbS52ZW5kb3JOYW1lLFxuICAgICAgICAgICAgaXRlbS5tZW51SXRlbUlkLFxuICAgICAgICAgICAgaXRlbS5pdGVtTmFtZSxcbiAgICAgICAgICAgIGl0ZW0ucXVhbnRpdHksXG4gICAgICAgICAgICBpdGVtLnByaWNlLFxuICAgICAgICAgICAgb3B0aW9uc1N0cmluZyxcbiAgICAgICAgICAgIG5vdGVzLFxuICAgICAgICAgICAgaXNQYWlkID8gJ1RSVUUnIDogJ0ZBTFNFJ1xuICAgICAgICBdKTtcbiAgICB9XG5cbiAgICBpZiAob3JkZXJWYWx1ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBhd2FpdCBhcHBlbmRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGAke09SREVSX0lURU1TX1NIRUVUX05BTUV9IUE6TWAsIG9yZGVyVmFsdWVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6ImlUQW9hc0IifQ==
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-ssr] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$data$3a$71116c__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/ai/flows/data:71116c [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
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
            const { orderDetails: fetchedDetails, dailyOrder: fetchedDailyOrder } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$data$3a$71116c__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getOrderDetailsByDailyOrderId"])(dailyOrderId);
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
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "container mx-auto p-4 sm:p-6 lg:p-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-6 flex justify-between items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/admin",
                                className: "flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/orders/[dailyOrderId]/page.tsx",
                                        lineNumber: 52,
                                        columnNumber: 13
                                    }, this),
                                    "返回管理介面"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/orders/[dailyOrderId]/page.tsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                size: "sm",
                                onClick: fetchOrderDetails,
                                disabled: isLoading,
                                "data-re-fetch-button": true,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                        className: `mr-2 h-4 w-4 ${isLoading ? 'animate-spin' : ''}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/orders/[dailyOrderId]/page.tsx",
                                        lineNumber: 56,
                                        columnNumber: 15
                                    }, this),
                                    "重新整理"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/orders/[dailyOrderId]/page.tsx",
                                lineNumber: 55,
                                columnNumber: 12
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/orders/[dailyOrderId]/page.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this),
                    isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center items-center h-64",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                className: "h-8 w-8 animate-spin text-primary"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/orders/[dailyOrderId]/page.tsx",
                                lineNumber: 63,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "ml-4 text-muted-foreground",
                                children: "正在載入訂單詳情..."
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/orders/[dailyOrderId]/page.tsx",
                                lineNumber: 64,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/orders/[dailyOrderId]/page.tsx",
                        lineNumber: 62,
                        columnNumber: 11
                    }, this) : error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center text-destructive bg-destructive/10 p-4 rounded-md",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/orders/[dailyOrderId]/page.tsx",
                            lineNumber: 68,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/orders/[dailyOrderId]/page.tsx",
                        lineNumber: 67,
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
                                lineNumber: 72,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-muted-foreground mb-6",
                                children: [
                                    "檢視 ",
                                    dailyOrder.date,
                                    " 的訂單，於 ",
                                    dailyOrder.deadline,
                                    " 截止。"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/orders/[dailyOrderId]/page.tsx",
                                lineNumber: 73,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$admin$2f$OrderDetailClient$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OrderDetailClient"], {
                                initialOrderDetails: orderDetails
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/orders/[dailyOrderId]/page.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true) : null
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/orders/[dailyOrderId]/page.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/orders/[dailyOrderId]/page.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__6c23419e._.js.map