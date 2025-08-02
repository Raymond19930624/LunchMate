(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/ui/button.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Button": (()=>Button),
    "buttonVariants": (()=>buttonVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
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
const Button = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
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
_c1 = Button;
Button.displayName = "Button";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Button$React.forwardRef");
__turbopack_context__.k.register(_c1, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/SiteHeader.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "SiteHeader": (()=>SiteHeader)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$utensils$2d$crossed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UtensilsCrossed$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/utensils-crossed.js [app-client] (ecmascript) <export default as UtensilsCrossed>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$notebook$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__NotebookText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/notebook-text.js [app-client] (ecmascript) <export default as NotebookText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function SiteHeader() {
    _s();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const username = searchParams.get('username');
    const handleLogout = ()=>{
        router.push('/');
    };
    const showAdminSection = pathname.startsWith('/admin');
    const showUserSection = !showAdminSection && username;
    const onMyOrdersPage = pathname.startsWith('/my-orders');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container flex h-16 max-w-screen-2xl items-center justify-between",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "/",
                    className: "flex items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$utensils$2d$crossed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UtensilsCrossed$3e$__["UtensilsCrossed"], {
                            className: "h-7 w-7 text-accent"
                        }, void 0, false, {
                            fileName: "[project]/src/components/SiteHeader.tsx",
                            lineNumber: 27,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2",
                    children: [
                        showUserSection && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                    className: "h-5 w-5 text-muted-foreground"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SiteHeader.tsx",
                                    lineNumber: 34,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm font-medium text-foreground",
                                    children: decodeURIComponent(username)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SiteHeader.tsx",
                                    lineNumber: 35,
                                    columnNumber: 29
                                }, this),
                                onMyOrdersPage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    size: "sm",
                                    asChild: true,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/order?username=${username}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
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
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    size: "sm",
                                    asChild: true,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/my-orders?username=${username}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$notebook$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__NotebookText$3e$__["NotebookText"], {
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
                        showAdminSection && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm font-medium text-foreground",
                            children: "管理員"
                        }, void 0, false, {
                            fileName: "[project]/src/components/SiteHeader.tsx",
                            lineNumber: 55,
                            columnNumber: 24
                        }, this),
                        (showUserSection || showAdminSection) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "ghost",
                            size: "icon",
                            "aria-label": "登出",
                            onClick: handleLogout,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
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
_s(SiteHeader, "rYHJiAsmDFN6rfejhXKqqxx816k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = SiteHeader;
var _c;
__turbopack_context__.k.register(_c, "SiteHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/card.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Card": (()=>Card),
    "CardContent": (()=>CardContent),
    "CardDescription": (()=>CardDescription),
    "CardFooter": (()=>CardFooter),
    "CardHeader": (()=>CardHeader),
    "CardTitle": (()=>CardTitle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Card = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-lg border bg-card text-card-foreground shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 9,
        columnNumber: 3
    }, this));
_c1 = Card;
Card.displayName = "Card";
const CardHeader = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c2 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-1.5 p-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 24,
        columnNumber: 3
    }, this));
_c3 = CardHeader;
CardHeader.displayName = "CardHeader";
const CardTitle = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c4 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-2xl font-semibold leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 36,
        columnNumber: 3
    }, this));
_c5 = CardTitle;
CardTitle.displayName = "CardTitle";
const CardDescription = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c6 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 51,
        columnNumber: 3
    }, this));
_c7 = CardDescription;
CardDescription.displayName = "CardDescription";
const CardContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c8 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 63,
        columnNumber: 3
    }, this));
_c9 = CardContent;
CardContent.displayName = "CardContent";
const CardFooter = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c10 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 71,
        columnNumber: 3
    }, this));
_c11 = CardFooter;
CardFooter.displayName = "CardFooter";
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
__turbopack_context__.k.register(_c, "Card$React.forwardRef");
__turbopack_context__.k.register(_c1, "Card");
__turbopack_context__.k.register(_c2, "CardHeader$React.forwardRef");
__turbopack_context__.k.register(_c3, "CardHeader");
__turbopack_context__.k.register(_c4, "CardTitle$React.forwardRef");
__turbopack_context__.k.register(_c5, "CardTitle");
__turbopack_context__.k.register(_c6, "CardDescription$React.forwardRef");
__turbopack_context__.k.register(_c7, "CardDescription");
__turbopack_context__.k.register(_c8, "CardContent$React.forwardRef");
__turbopack_context__.k.register(_c9, "CardContent");
__turbopack_context__.k.register(_c10, "CardFooter$React.forwardRef");
__turbopack_context__.k.register(_c11, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/alert-dialog.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-alert-dialog/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const AlertDialog = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"];
const AlertDialogTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"];
const AlertDialogPortal = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"];
const AlertDialogOverlay = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
        ...props,
        ref: ref
    }, void 0, false, {
        fileName: "[project]/src/components/ui/alert-dialog.tsx",
        lineNumber: 19,
        columnNumber: 3
    }, this));
_c = AlertDialogOverlay;
AlertDialogOverlay.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"].displayName;
const AlertDialogContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c1 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AlertDialogPortal, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AlertDialogOverlay, {}, void 0, false, {
                fileName: "[project]/src/components/ui/alert-dialog.tsx",
                lineNumber: 35,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                ref: ref,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", className),
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
_c2 = AlertDialogContent;
AlertDialogContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"].displayName;
const AlertDialogHeader = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-2 text-center sm:text-left", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/alert-dialog.tsx",
        lineNumber: 52,
        columnNumber: 3
    }, this);
_c3 = AlertDialogHeader;
AlertDialogHeader.displayName = "AlertDialogHeader";
const AlertDialogFooter = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/alert-dialog.tsx",
        lineNumber: 66,
        columnNumber: 3
    }, this);
_c4 = AlertDialogFooter;
AlertDialogFooter.displayName = "AlertDialogFooter";
const AlertDialogTitle = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c5 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-lg font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/alert-dialog.tsx",
        lineNumber: 80,
        columnNumber: 3
    }, this));
_c6 = AlertDialogTitle;
AlertDialogTitle.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"].displayName;
const AlertDialogDescription = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c7 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/alert-dialog.tsx",
        lineNumber: 92,
        columnNumber: 3
    }, this));
_c8 = AlertDialogDescription;
AlertDialogDescription.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"].displayName;
const AlertDialogAction = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c9 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Action"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buttonVariants"])(), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/alert-dialog.tsx",
        lineNumber: 105,
        columnNumber: 3
    }, this));
_c10 = AlertDialogAction;
AlertDialogAction.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Action"].displayName;
const AlertDialogCancel = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c11 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cancel"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buttonVariants"])({
            variant: "outline"
        }), "mt-2 sm:mt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/alert-dialog.tsx",
        lineNumber: 117,
        columnNumber: 3
    }, this));
_c12 = AlertDialogCancel;
AlertDialogCancel.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cancel"].displayName;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12;
__turbopack_context__.k.register(_c, "AlertDialogOverlay");
__turbopack_context__.k.register(_c1, "AlertDialogContent$React.forwardRef");
__turbopack_context__.k.register(_c2, "AlertDialogContent");
__turbopack_context__.k.register(_c3, "AlertDialogHeader");
__turbopack_context__.k.register(_c4, "AlertDialogFooter");
__turbopack_context__.k.register(_c5, "AlertDialogTitle$React.forwardRef");
__turbopack_context__.k.register(_c6, "AlertDialogTitle");
__turbopack_context__.k.register(_c7, "AlertDialogDescription$React.forwardRef");
__turbopack_context__.k.register(_c8, "AlertDialogDescription");
__turbopack_context__.k.register(_c9, "AlertDialogAction$React.forwardRef");
__turbopack_context__.k.register(_c10, "AlertDialogAction");
__turbopack_context__.k.register(_c11, "AlertDialogCancel$React.forwardRef");
__turbopack_context__.k.register(_c12, "AlertDialogCancel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/badge.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Badge": (()=>Badge),
    "badgeVariants": (()=>badgeVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/badge.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
_c = Badge;
;
var _c;
__turbopack_context__.k.register(_c, "Badge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/separator.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Separator": (()=>Separator)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-separator/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
const Separator = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className, orientation = "horizontal", decorative = true, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        decorative: decorative,
        orientation: orientation,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("shrink-0 bg-border", orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/separator.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this));
_c1 = Separator;
Separator.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"].displayName;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Separator$React.forwardRef");
__turbopack_context__.k.register(_c1, "Separator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/ai/flows/data:0a1be6 [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"4010724a07593b3b50c8b04bd54a68103bf64a20d5":"getOrdersByUsername"},"src/ai/flows/order-flow.ts",""] */ __turbopack_context__.s({
    "getOrdersByUsername": (()=>getOrdersByUsername)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var getOrdersByUsername = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("4010724a07593b3b50c8b04bd54a68103bf64a20d5", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getOrdersByUsername"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vb3JkZXItZmxvdy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbid1c2Ugc2VydmVyJztcblxuaW1wb3J0IHsgZ2V0U2hlZXREYXRhLCBhcHBlbmRTaGVldERhdGEsIGdldEhlYWRlcnMsIHVwZGF0ZVNoZWV0RGF0YSwgYmF0Y2hVcGRhdGVTaGVldERhdGEgfSBmcm9tICdAL3NlcnZpY2VzL3NoZWV0LXNlcnZpY2UnO1xuaW1wb3J0IHsgZ2V0VmVuZG9ycywgdHlwZSBWZW5kb3IgfSBmcm9tICcuL3ZlbmRvci1mbG93JztcbmltcG9ydCB7IHR5cGUgRmluYWxPcmRlciwgdHlwZSBPcmRlckl0ZW0gfSBmcm9tICdAL2NvbXBvbmVudHMvT3JkZXJTdW1tYXJ5JztcbmltcG9ydCB7IFB1Ymxpc2hPcmRlclJlcXVlc3RTY2hlbWEsIHR5cGUgUHVibGlzaE9yZGVyUmVxdWVzdCB9IGZyb20gJ0AvbGliL3NjaGVtYS9vcmRlcic7XG5pbXBvcnQgeyBmb3JtYXQsIHBhcnNlLCBwYXJzZUlTTywgaXNWYWxpZCB9IGZyb20gJ2RhdGUtZm5zJztcblxuY29uc3QgU1BSRUFEU0hFRVRfSUQgPSAnMVpqMmgwY1lscmIybUJhTmdsMS1Qb09LN3RsQ0N3RGNjQVhuNXc2NmhwNGMnO1xuY29uc3QgREFJTFlfT1JERVJTX1NIRUVUX05BTUUgPSAnZGFpbHlfb3JkZXJzJztcbmNvbnN0IE9SREVSX0lURU1TX1NIRUVUX05BTUUgPSAnb3JkZXJfaXRlbXMnO1xuXG5leHBvcnQgdHlwZSBEYWlseU9yZGVyID0ge1xuICAgIGlkOiBzdHJpbmc7XG4gICAgZGF0ZTogc3RyaW5nO1xuICAgIHZlbmRvcklkOiBzdHJpbmc7XG4gICAgdmVuZG9yTmFtZT86IHN0cmluZzsgLy8gT3B0aW9uYWw6IGZvciBkaXNwbGF5IG9uIGFkbWluIHBhZ2VcbiAgICBkZWFkbGluZTogc3RyaW5nO1xufTtcblxuLy8gVGhpcyB0eXBlIGlzIGZvciB0aGUgdXNlci1mYWNpbmcgb3JkZXIgcGFnZVxuZXhwb3J0IHR5cGUgQXZhaWxhYmxlT3JkZXIgPSB7XG4gICAgaWQ6IHN0cmluZzsgLy8gZGFpbHlPcmRlcklkXG4gICAgdmVuZG9yOiBWZW5kb3I7XG4gICAgZGF0ZTogc3RyaW5nO1xuICAgIGRlYWRsaW5lOiBzdHJpbmc7XG59O1xuXG4vLyBIZWxwZXIgZnVuY3Rpb24gdG8gZm9ybWF0IHRpbWUgZnJvbSBTaGVldHMgKHdoaWNoIGNhbiBiZSBhIG51bWJlcilcbmNvbnN0IGZvcm1hdFRpbWUgPSAodGltZVZhbHVlOiBhbnkpOiBzdHJpbmcgPT4ge1xuICAgIGlmICh0eXBlb2YgdGltZVZhbHVlID09PSAnc3RyaW5nJyAmJiB0aW1lVmFsdWUubWF0Y2goL15cXGR7Mn06XFxkezJ9KDpcXGR7Mn0pPyQvKSkge1xuICAgICAgICByZXR1cm4gdGltZVZhbHVlLnN1YnN0cmluZygwLCA1KTtcbiAgICB9XG4gICAgXG4gICAgaWYgKHR5cGVvZiB0aW1lVmFsdWUgPT09ICdudW1iZXInICYmIHRpbWVWYWx1ZSA+IDAgJiYgdGltZVZhbHVlIDwgMSkge1xuICAgICAgLy8gSXQncyBhIHRpbWUgc2VyaWFsIG51bWJlciBmcm9tIFNoZWV0c1xuICAgICAgY29uc3QgdG90YWxTZWNvbmRzID0gTWF0aC5yb3VuZCh0aW1lVmFsdWUgKiA4NjQwMCk7XG4gICAgICBjb25zdCBob3VycyA9IE1hdGguZmxvb3IodG90YWxTZWNvbmRzIC8gMzYwMCk7XG4gICAgICBjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcigodG90YWxTZWNvbmRzICUgMzYwMCkgLyA2MCk7XG4gICAgICByZXR1cm4gYCR7aG91cnMudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpfToke21pbnV0ZXMudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpfWA7XG4gICAgfVxuXG4gICAgLy8gVHJ5IHBhcnNpbmcgYXMgYSBkYXRlIHN0cmluZyB0byBleHRyYWN0IHRpbWVcbiAgICBpZiAodHlwZW9mIHRpbWVWYWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGUgPSBwYXJzZUlTTyh0aW1lVmFsdWUpO1xuICAgICAgICAgICAgaWYgKGlzVmFsaWQoZGF0ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZm9ybWF0KGRhdGUsICdISDptbScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAvLyBJZ25vcmUgcGFyc2UgZXJyb3JzIGZyb20gSVNPXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHRpbWVNYXRjaCA9IHRpbWVWYWx1ZS5tYXRjaCgvKFxcZHsyfTpcXGR7Mn0pLyk7XG4gICAgICAgIGlmICh0aW1lTWF0Y2gpIHJldHVybiB0aW1lTWF0Y2hbMF07XG4gICAgfVxuICAgIFxuICAgIC8vIEZhbGxiYWNrIGZvciB1bmV4cGVjdGVkIGZvcm1hdHNcbiAgICByZXR1cm4gJzAwOjAwJzsgXG59O1xuXG4vLyBIZWxwZXIgZnVuY3Rpb24gdG8gZm9ybWF0IGRhdGUgZnJvbSBTaGVldHMgKHdoaWNoIGNhbiBiZSBhIG51bWJlciBvciBzdHJpbmcpXG5jb25zdCBmb3JtYXREYXRlID0gKGRhdGVWYWx1ZTogYW55KTogc3RyaW5nID0+IHtcbiAgICBpZiAoIWRhdGVWYWx1ZSkgcmV0dXJuIGZvcm1hdChuZXcgRGF0ZSgpLCAneXl5eS1NTS1kZCcpOyAvLyBSZXR1cm4gdG9kYXkncyBkYXRlIGlmIGVtcHR5XG5cbiAgICBsZXQgZGF0ZTtcbiAgICBcbiAgICAvLyBIYW5kbGUgU2hlZXRzIGRhdGUgc2VyaWFsIG51bWJlciAobnVtYmVyIG9mIGRheXMgc2luY2UgMTg5OS0xMi0zMClcbiAgICBpZiAodHlwZW9mIGRhdGVWYWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgY29uc3QgZXhjZWxFcG9jaCA9IG5ldyBEYXRlKERhdGUuVVRDKDE4OTksIDExLCAzMCkpO1xuICAgICAgICBkYXRlID0gbmV3IERhdGUoZXhjZWxFcG9jaC5nZXRUaW1lKCkgKyBkYXRlVmFsdWUgKiA4NjQwMDAwMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gSGFuZGxlIElTTyBzdHJpbmcgbGlrZSAnMjAyNC0wNy0yNVQwMDowMDowMC4wMDBaJyBvciBzaW1wbGUgc3RyaW5nICcyMDI0LTA3LTI1J1xuICAgICAgICB0cnkge1xuICAgICAgICAgICBkYXRlID0gcGFyc2VJU08oU3RyaW5nKGRhdGVWYWx1ZSkpO1xuICAgICAgICAgICAvLyBJZiBJU08gcGFyc2luZyBmYWlscywgdHJ5IHRoZSBzaW1wbGUgZm9ybWF0XG4gICAgICAgICAgIGlmICghaXNWYWxpZChkYXRlKSkge1xuICAgICAgICAgICAgICAgZGF0ZSA9IHBhcnNlKFN0cmluZyhkYXRlVmFsdWUpLCAneXl5eS1NTS1kZCcsIG5ldyBEYXRlKCkpO1xuICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICAgICBkYXRlID0gcGFyc2UoU3RyaW5nKGRhdGVWYWx1ZSksICd5eXl5LU1NLWRkJywgbmV3IERhdGUoKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLy8gSWYgZGF0ZSBpcyB2YWxpZCwgZm9ybWF0IGl0LCBvdGhlcndpc2UgcmV0dXJuIHRvZGF5J3MgZGF0ZSBhcyBhIGZhbGxiYWNrXG4gICAgcmV0dXJuIGlzVmFsaWQoZGF0ZSkgPyBmb3JtYXQoZGF0ZSwgJ3l5eXktTU0tZGQnKSA6IGZvcm1hdChuZXcgRGF0ZSgpLCAneXl5eS1NTS1kZCcpO1xufTtcblxuXG4vKipcbiAqIFJldHJpZXZlcyBhbGwgYXZhaWxhYmxlIG9yZGVycyBmcm9tIHRoZSBkYWlseV9vcmRlcnMgc2hlZXQuXG4gKiBBbnkgb3JkZXIgcHJlc2VudCBpcyBjb25zaWRlcmVkIGF2YWlsYWJsZS5cbiAqIEByZXR1cm5zIHtQcm9taXNlPEF2YWlsYWJsZU9yZGVyW10+fSBBIGxpc3Qgb2YgYXZhaWxhYmxlIHZlbmRvcnMgYW5kIHRoZWlyIGRlYWRsaW5lcy5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEF2YWlsYWJsZU9yZGVycygpOiBQcm9taXNlPEF2YWlsYWJsZU9yZGVyW10+IHtcbiAgICBjb25zdCBkYWlseU9yZGVyc1JhbmdlID0gYCR7REFJTFlfT1JERVJTX1NIRUVUX05BTUV9IUE6RGA7XG4gICAgY29uc3QgW2RhaWx5T3JkZXJzRGF0YSwgYWxsVmVuZG9yc10gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgIGdldFNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgZGFpbHlPcmRlcnNSYW5nZSksXG4gICAgICAgIGdldFZlbmRvcnMoKVxuICAgIF0pO1xuXG4gICAgaWYgKCFkYWlseU9yZGVyc0RhdGEgfHwgZGFpbHlPcmRlcnNEYXRhLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBoZWFkZXIgPSBkYWlseU9yZGVyc0RhdGFbMF07XG4gICAgY29uc3Qgcm93cyA9IGRhaWx5T3JkZXJzRGF0YS5zbGljZSgxKTtcblxuICAgIGNvbnN0IGhlYWRlck1hcCA9IGhlYWRlci5yZWR1Y2UoKGFjYywgaCwgaSkgPT4ge1xuICAgICAgICBhY2NbU3RyaW5nKGgpXSA9IGk7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30gYXMgUmVjb3JkPHN0cmluZywgbnVtYmVyPik7XG5cbiAgICBjb25zdCBhbGxWZW5kb3JzTWFwID0gbmV3IE1hcChhbGxWZW5kb3JzLm1hcCh2ID0+IFt2LnZlbmRvcklkLCB2XSkpO1xuXG4gICAgY29uc3QgYXZhaWxhYmxlT3JkZXJzOiBBdmFpbGFibGVPcmRlcltdID0gW107XG5cbiAgICBmb3IgKGNvbnN0IHJvdyBvZiByb3dzKSB7XG4gICAgICAgIGlmIChyb3cuZXZlcnkoY2VsbCA9PiAhY2VsbCkpIGNvbnRpbnVlOyAvLyBTa2lwIGNvbXBsZXRlbHkgZW1wdHkgcm93c1xuXG4gICAgICAgIGNvbnN0IGlkID0gcm93W2hlYWRlck1hcFsnaWQnXV07XG4gICAgICAgIGNvbnN0IHZlbmRvcklkID0gcm93W2hlYWRlck1hcFsndmVuZG9ySWQnXV07XG4gICAgICAgIGNvbnN0IGRhdGVSYXcgPSByb3dbaGVhZGVyTWFwWydkYXRlJ11dO1xuICAgICAgICBjb25zdCBkZWFkbGluZVJhdyA9IHJvd1toZWFkZXJNYXBbJ2RlYWRsaW5lJ11dO1xuXG4gICAgICAgIGlmICghaWQgfHwgIXZlbmRvcklkKSBjb250aW51ZTsgLy8gU2tpcCByb3dzIHdpdGhvdXQgZXNzZW50aWFsIGRhdGFcblxuICAgICAgICBjb25zdCB2ZW5kb3IgPSBhbGxWZW5kb3JzTWFwLmdldCh2ZW5kb3JJZCk7XG4gICAgICAgIGlmICghdmVuZG9yIHx8ICF2ZW5kb3IuaXNBY3RpdmUpIGNvbnRpbnVlO1xuXG4gICAgICAgIGF2YWlsYWJsZU9yZGVycy5wdXNoKHtcbiAgICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICAgIHZlbmRvcixcbiAgICAgICAgICAgIGRhdGU6IGZvcm1hdERhdGUoZGF0ZVJhdyksXG4gICAgICAgICAgICBkZWFkbGluZTogZm9ybWF0VGltZShkZWFkbGluZVJhdykgLy8gRm9ybWF0IHRoZSBkZWFkbGluZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXZhaWxhYmxlT3JkZXJzO1xufVxuXG4vKipcbiAqIFJldHJpZXZlcyBhbGwgZGFpbHkgb3JkZXJzIGZvciBhZG1pbiBkaXNwbGF5LlxuICogQHJldHVybnMge1Byb21pc2U8RGFpbHlPcmRlcltdPn0gQSBsaXN0IG9mIGFsbCBwdWJsaXNoZWQgb3JkZXJzLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWxsRGFpbHlPcmRlcnMoKTogUHJvbWlzZTxEYWlseU9yZGVyW10+IHtcbiAgICBjb25zdCBkYWlseU9yZGVyc1JhbmdlID0gYCR7REFJTFlfT1JERVJTX1NIRUVUX05BTUV9IUE6RGA7XG4gICAgIGNvbnN0IFtkYWlseU9yZGVyc0RhdGEsIGFsbFZlbmRvcnNdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGRhaWx5T3JkZXJzUmFuZ2UpLFxuICAgICAgICBnZXRWZW5kb3JzKClcbiAgICBdKTtcbiAgICBcbiAgICBpZiAoIWRhaWx5T3JkZXJzRGF0YSB8fCBkYWlseU9yZGVyc0RhdGEubGVuZ3RoIDwgMikge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgY29uc3QgaGVhZGVyID0gZGFpbHlPcmRlcnNEYXRhWzBdO1xuICAgIGNvbnN0IHJvd3MgPSBkYWlseU9yZGVyc0RhdGEuc2xpY2UoMSk7XG4gICAgY29uc3QgYWxsVmVuZG9yc01hcCA9IG5ldyBNYXAoYWxsVmVuZG9ycy5tYXAodiA9PiBbdi52ZW5kb3JJZCwgdl0pKTtcbiAgICBcbiAgICBjb25zdCBoZWFkZXJNYXAgPSBoZWFkZXIucmVkdWNlKChhY2MsIGgsIGkpID0+IHtcbiAgICAgICAgYWNjW1N0cmluZyhoKV0gPSBpO1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgIH0sIHt9IGFzIFJlY29yZDxzdHJpbmcsIG51bWJlcj4pO1xuXG4gICAgY29uc3Qgb3JkZXJzID0gcm93cy5tYXAocm93ID0+IHtcbiAgICAgICAgY29uc3QgdmVuZG9ySWQgPSByb3dbaGVhZGVyTWFwWyd2ZW5kb3JJZCddXTtcbiAgICAgICAgY29uc3QgdmVuZG9yID0gYWxsVmVuZG9yc01hcC5nZXQodmVuZG9ySWQpO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlkOiByb3dbaGVhZGVyTWFwWydpZCddXSB8fCAnJyxcbiAgICAgICAgICAgIGRhdGU6IGZvcm1hdERhdGUocm93W2hlYWRlck1hcFsnZGF0ZSddXSksXG4gICAgICAgICAgICB2ZW5kb3JJZDogdmVuZG9ySWQgfHwgJycsXG4gICAgICAgICAgICB2ZW5kb3JOYW1lOiB2ZW5kb3IgPyB2ZW5kb3IudmVuZG9yTmFtZSA6ICfmnKrnn6XlupflrrYnLFxuICAgICAgICAgICAgZGVhZGxpbmU6IGZvcm1hdFRpbWUocm93W2hlYWRlck1hcFsnZGVhZGxpbmUnXV0pXG4gICAgICAgIH07XG4gICAgfSkuZmlsdGVyKG9yZGVyID0+IG9yZGVyLmlkKTsgLy8gRmlsdGVyIG91dCBhbnkgZW1wdHkgcm93c1xuXG4gICAgLy8gU29ydCBvcmRlcnMgYnkgZGF0ZSBhbmQgdGhlbiBieSBkZWFkbGluZSwgYXNjZW5kaW5nIChjbG9zZXN0IGZpcnN0KVxuICAgIG9yZGVycy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGVBID0gbmV3IERhdGUoYCR7YS5kYXRlfVQke2EuZGVhZGxpbmV9YCk7XG4gICAgICAgIGNvbnN0IGRhdGVCID0gbmV3IERhdGUoYCR7Yi5kYXRlfVQke2IuZGVhZGxpbmV9YCk7XG4gICAgICAgIHJldHVybiBkYXRlQS5nZXRUaW1lKCkgLSBkYXRlQi5nZXRUaW1lKCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gb3JkZXJzO1xufVxuXG5cbi8qKlxuICogUHVibGlzaGVzIGEgbmV3IG9yZGVyIGZvciBhIHNwZWNpZmljIGRhdGUsIHZlbmRvciBhbmQgZGVhZGxpbmUuXG4gKiBAcGFyYW0ge1B1Ymxpc2hPcmRlclJlcXVlc3R9IHJlcSAtIFRoZSByZXF1ZXN0IGNvbnRhaW5pbmcgZGF0ZSwgdmVuZG9ySWQgYW5kIGRlYWRsaW5lLlxuICogQHJldHVybnMge1Byb21pc2U8e3N1Y2Nlc3M6IGJvb2xlYW59Pn0gQSBzdWNjZXNzIGZsYWcuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwdWJsaXNoT3JkZXIocmVxOiBQdWJsaXNoT3JkZXJSZXF1ZXN0KTogUHJvbWlzZTx7IHN1Y2Nlc3M6IGJvb2xlYW4gfT4ge1xuICBjb25zdCB2YWxpZGF0aW9uID0gUHVibGlzaE9yZGVyUmVxdWVzdFNjaGVtYS5zYWZlUGFyc2UocmVxKTtcbiAgaWYgKCF2YWxpZGF0aW9uLnN1Y2Nlc3MpIHtcbiAgICBjb25zdCBlcnJvck1zZyA9IHZhbGlkYXRpb24uZXJyb3IuZXJyb3JzLm1hcChlID0+IGAke2UucGF0aC5qb2luKCcuJyl9OiAke2UubWVzc2FnZX1gKS5qb2luKCcsICcpO1xuICAgIHRocm93IG5ldyBFcnJvcihg6Ly45YWl6LOH5paZ5pyJ6KqkOiAke2Vycm9yTXNnfWApO1xuICB9XG5cbiAgY29uc3QgYWxsT3JkZXJzUmFuZ2UgPSBgJHtEQUlMWV9PUkRFUlNfU0hFRVRfTkFNRX0hQTI6QWA7XG4gIGNvbnN0IGFsbE9yZGVySWRzRGF0YSA9IGF3YWl0IGdldFNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgYWxsT3JkZXJzUmFuZ2UpO1xuICAgIGNvbnN0IGxhc3RJZE51bSA9IGFsbE9yZGVySWRzRGF0YS5sZW5ndGggPiAwIFxuICAgICAgICA/IE1hdGgubWF4KDAsIC4uLmFsbE9yZGVySWRzRGF0YS5tYXAocm93ID0+IHBhcnNlSW50KChyb3dbMF0gfHwgJ2RvMCcpLnJlcGxhY2UoJ2RvJywgJycpLCAxMCkpLmZpbHRlcihudW0gPT4gIWlzTmFOKG51bSkpKVxuICAgICAgICA6IDA7XG4gIGNvbnN0IG5ld0lkID0gYGRvJHsobGFzdElkTnVtICsgMSkudG9TdHJpbmcoKS5wYWRTdGFydCgzLCAnMCcpfWA7XG5cbiAgY29uc3QgdmFsdWVzID0gW1xuICAgIFtuZXdJZCwgcmVxLmRhdGUsIHJlcS52ZW5kb3JJZCwgcmVxLmRlYWRsaW5lXVxuICBdO1xuICBcbiAgLy8gRW5zdXJlIGhlYWRlcnMgZXhpc3RcbiAgY29uc3QgaGVhZGVycyA9IGF3YWl0IGdldEhlYWRlcnMoU1BSRUFEU0hFRVRfSUQsIERBSUxZX09SREVSU19TSEVFVF9OQU1FKTtcbiAgaWYgKGhlYWRlcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICBhd2FpdCB1cGRhdGVTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGAke0RBSUxZX09SREVSU19TSEVFVF9OQU1FfSFBMTpEMWAsIFtbJ2lkJywgJ2RhdGUnLCAndmVuZG9ySWQnLCAnZGVhZGxpbmUnXV0pO1xuICB9XG5cbiAgYXdhaXQgYXBwZW5kU2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCBgJHtEQUlMWV9PUkRFUlNfU0hFRVRfTkFNRX0hQTpEYCwgdmFsdWVzKTtcbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xufVxuXG5leHBvcnQgdHlwZSBVcGRhdGVEYWlseU9yZGVyUmVxdWVzdCA9IHtcbiAgICBvcmRlcklkOiBzdHJpbmc7XG4gICAgdmVuZG9ySWQ6IHN0cmluZztcbiAgICBkYXRlOiBzdHJpbmc7XG4gICAgZGVhZGxpbmU6IHN0cmluZztcbn1cblxuLyoqXG4gKiBVcGRhdGVzIGFuIGV4aXN0aW5nIGRhaWx5IG9yZGVyJ3MgZGF0ZSBhbmQgZGVhZGxpbmUuXG4gKiBAcGFyYW0ge1VwZGF0ZURhaWx5T3JkZXJSZXF1ZXN0fSByZXEgLSBUaGUgcmVxdWVzdCBjb250YWluaW5nIG9yZGVySWQsIGRhdGUgYW5kIGRlYWRsaW5lLlxuICogQHJldHVybnMge1Byb21pc2U8e3N1Y2Nlc3M6IGJvb2xlYW59Pn0gQSBzdWNjZXNzIGZsYWcuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVEYWlseU9yZGVyKHJlcTogVXBkYXRlRGFpbHlPcmRlclJlcXVlc3QpOiBQcm9taXNlPHsgc3VjY2VzczogYm9vbGVhbiB9PiB7XG4gICAgY29uc3QgeyBvcmRlcklkLCB2ZW5kb3JJZCwgZGF0ZSwgZGVhZGxpbmUgfSA9IHJlcTtcbiAgICBcbiAgICAvLyAxLiBGaW5kIHRoZSByb3cgb2YgdGhlIG9yZGVyIHRvIHVwZGF0ZVxuICAgIGNvbnN0IGFsbE9yZGVyc0RhdGEgPSBhd2FpdCBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGAke0RBSUxZX09SREVSU19TSEVFVF9OQU1FfSFBOkFgKTtcbiAgICBjb25zdCByb3dJbmRleCA9IGFsbE9yZGVyc0RhdGEuZmluZEluZGV4KHJvdyA9PiByb3dbMF0gPT09IG9yZGVySWQpO1xuICAgIFxuICAgIGlmIChyb3dJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGDmib7kuI3liLAgSUQg54K6ICR7b3JkZXJJZH0g55qE6KiC5Zau44CCYCk7XG4gICAgfVxuXG4gICAgLy8gKzEgYmVjYXVzZSBzaGVldCByb3dzIGFyZSAxLWJhc2VkLlxuICAgIGNvbnN0IHJvd1RvVXBkYXRlID0gcm93SW5kZXggKyAxO1xuICAgIFxuICAgIC8vIFdlIHVwZGF0ZSBkYXRlIGFuZCBkZWFkbGluZS4gVmVuZG9ySWQgaXMgbm90IGNoYW5nZWQuXG4gICAgLy8gVGhlIHJhbmdlIHNob3VsZCBiZSBCeDpEeCB0byB1cGRhdGUgZGF0ZSBhbmQgZGVhZGxpbmUuXG4gICAgY29uc3QgdXBkYXRlUmFuZ2UgPSBgJHtEQUlMWV9PUkRFUlNfU0hFRVRfTkFNRX0hQiR7cm93VG9VcGRhdGV9OkQke3Jvd1RvVXBkYXRlfWA7XG4gICAgYXdhaXQgdXBkYXRlU2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCB1cGRhdGVSYW5nZSwgW1tkYXRlLCB2ZW5kb3JJZCwgZGVhZGxpbmVdXSk7XG5cbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG59XG5cblxuLyoqXG4gKiBEZWxldGVzIGEgcHVibGlzaGVkIGRhaWx5IG9yZGVyIGFuZCBpdHMgYXNzb2NpYXRlZCBvcmRlciBpdGVtcy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBkYWlseU9yZGVySWQgVGhlIElEIG9mIHRoZSBkYWlseSBvcmRlciB0byBkZWxldGUuXG4gKiBAcmV0dXJucyB7UHJvbWlzZTx7c3VjY2VzczogYm9vbGVhbn0+fSBBIHN1Y2Nlc3MgZmxhZy5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZURhaWx5T3JkZXIoZGFpbHlPcmRlcklkOiBzdHJpbmcpOiBQcm9taXNlPHsgc3VjY2VzczogYm9vbGVhbiB9PiB7XG4gIC8vIDEuIEdldCBhbGwgZGF0YSBmcm9tIGJvdGggc2hlZXRzXG4gIGNvbnN0IFtkYWlseU9yZGVyc0RhdGFXaXRoSGVhZGVyLCBvcmRlckl0ZW1zRGF0YVdpdGhIZWFkZXJdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgIGdldFNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgYCR7REFJTFlfT1JERVJTX1NIRUVUX05BTUV9IUE6RGApLFxuICAgIGdldFNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgYCR7T1JERVJfSVRFTVNfU0hFRVRfTkFNRX0hQTpNYCksIC8vIFJlYWQgdXAgdG8gY29sdW1uIE1cbiAgXSk7XG5cbiAgaWYgKGRhaWx5T3JkZXJzRGF0YVdpdGhIZWFkZXIubGVuZ3RoIDwgMikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbiAgfVxuXG4gIGNvbnN0IGRhaWx5T3JkZXJzSGVhZGVycyA9IGRhaWx5T3JkZXJzRGF0YVdpdGhIZWFkZXJbMF07XG4gIGNvbnN0IGRhaWx5T3JkZXJzUm93cyA9IGRhaWx5T3JkZXJzRGF0YVdpdGhIZWFkZXIuc2xpY2UoMSk7XG4gIFxuICBjb25zdCBvcmRlckl0ZW1zSGVhZGVycyA9IG9yZGVySXRlbXNEYXRhV2l0aEhlYWRlci5sZW5ndGggPiAwID8gb3JkZXJJdGVtc0RhdGFXaXRoSGVhZGVyWzBdIDogW107XG4gIGNvbnN0IG9yZGVySXRlbXNSb3dzID0gb3JkZXJJdGVtc0RhdGFXaXRoSGVhZGVyLmxlbmd0aCA+IDEgPyBvcmRlckl0ZW1zRGF0YVdpdGhIZWFkZXIuc2xpY2UoMSkgOiBbXTtcblxuICAvLyAyLiBGaWx0ZXIgdGhlIHJvd3MgdG8ga2VlcCBmb3IgYm90aCBzaGVldHNcbiAgY29uc3QgZGFpbHlPcmRlcnNUb0tlZXAgPSBkYWlseU9yZGVyc1Jvd3MuZmlsdGVyKHJvdyA9PiByb3dbMF0gIT09IGRhaWx5T3JkZXJJZCk7XG5cbiAgbGV0IG9yZGVySXRlbXNUb0tlZXAgPSBvcmRlckl0ZW1zUm93cztcbiAgaWYgKG9yZGVySXRlbXNSb3dzLmxlbmd0aCA+IDAgJiYgb3JkZXJJdGVtc0hlYWRlcnMubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3Qgb3JkZXJJdGVtc0hlYWRlck1hcCA9IG9yZGVySXRlbXNIZWFkZXJzLnJlZHVjZSgoYWNjLCBoLCBpKSA9PiB7IGFjY1tTdHJpbmcoaCldID0gaTsgcmV0dXJuIGFjYzsgfSwge30gYXMgUmVjb3JkPHN0cmluZywgbnVtYmVyPik7XG4gICAgICBjb25zdCBkYWlseU9yZGVySWRJbmRleCA9IG9yZGVySXRlbXNIZWFkZXJNYXBbJ2RhaWx5T3JkZXJJZCddO1xuICAgICAgXG4gICAgICAvLyBFbnN1cmUgdGhlIGRhaWx5T3JkZXJJZCBjb2x1bW4gZXhpc3RzIGJlZm9yZSBmaWx0ZXJpbmdcbiAgICAgIGlmIChkYWlseU9yZGVySWRJbmRleCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgb3JkZXJJdGVtc1RvS2VlcCA9IG9yZGVySXRlbXNSb3dzLmZpbHRlcihpdGVtUm93ID0+IGl0ZW1Sb3dbZGFpbHlPcmRlcklkSW5kZXhdICE9PSBkYWlseU9yZGVySWQpO1xuICAgICAgfVxuICB9XG5cbiAgLy8gNC4gUHJlcGFyZSBiYXRjaCB1cGRhdGUgZGF0YSB0byBjbGVhciBhbmQgcmV3cml0ZSBib3RoIHNoZWV0c1xuICBhd2FpdCBiYXRjaFVwZGF0ZVNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgW1xuICAgIHtcbiAgICAgIHJhbmdlOiBgJHtEQUlMWV9PUkRFUlNfU0hFRVRfTkFNRX0hQTE6RGAsXG4gICAgICB2YWx1ZXM6IFtkYWlseU9yZGVyc0hlYWRlcnMsIC4uLmRhaWx5T3JkZXJzVG9LZWVwXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHJhbmdlOiBgJHtPUkRFUl9JVEVNU19TSEVFVF9OQU1FfSFBMTpNYCxcbiAgICAgIHZhbHVlczogb3JkZXJJdGVtc0hlYWRlcnMubGVuZ3RoID4gMCA/IFtvcmRlckl0ZW1zSGVhZGVycywgLi4ub3JkZXJJdGVtc1RvS2VlcF0gOiBbXSxcbiAgICB9XG4gIF0pO1xuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbn1cblxuXG4vKipcbiAqIFN1Ym1pdHMgYW4gb3JkZXIgYW5kIHNhdmVzIGl0IHRvIHRoZSAnb3JkZXJfaXRlbXMnIHNoZWV0LlxuICogSWYgZWRpdGluZyBhbiBleGlzdGluZyBvcmRlciwgaXQgZmlyc3QgZGVsZXRlcyB0aGUgb2xkIGl0ZW1zLlxuICogQHBhcmFtIHtGaW5hbE9yZGVyfSBvcmRlciAtIFRoZSBjb21wbGV0ZSBvcmRlciBkZXRhaWxzLlxuICogQHBhcmFtIHtib29sZWFufSBpc0VkaXRpbmcgLSBBIGZsYWcgdG8gaW5kaWNhdGUgaWYgdGhpcyBpcyBhbiBlZGl0LlxuICogQHJldHVybnMge1Byb21pc2U8e3N1Y2Nlc3M6IGJvb2xlYW59Pn0gQSBzdWNjZXNzIGZsYWcuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzdWJtaXRPcmRlcihvcmRlcjogRmluYWxPcmRlciwgaXNFZGl0aW5nOiBib29sZWFuID0gZmFsc2UpOiBQcm9taXNlPHsgc3VjY2VzczogYm9vbGVhbiB9PiB7XG4gICAgLy8gSWYgZWRpdGluZywgZmlyc3QgZGVsZXRlIGFsbCBleGlzdGluZyBpdGVtcyBmb3IgdGhhdCB1c2VyIGluIHRoYXQgZGFpbHkgb3JkZXJcbiAgICBpZiAoaXNFZGl0aW5nKSB7XG4gICAgICAgIGF3YWl0IGRlbGV0ZVVzZXJPcmRlcih7IHVzZXJuYW1lOiBvcmRlci51c2VybmFtZSwgZGFpbHlPcmRlcklkOiBvcmRlci5kYWlseU9yZGVySWQgfSk7XG4gICAgfVxuICAgIFxuICAgIC8vIFRoZW4sIGFwcGVuZCB0aGUgbmV3L3VwZGF0ZWQgaXRlbXNcbiAgICBjb25zdCBhbGxJdGVtc1JhbmdlID0gYCR7T1JERVJfSVRFTVNfU0hFRVRfTkFNRX0hQTI6QWA7XG4gICAgY29uc3QgYWxsSXRlbUlkc0RhdGEgPSBhd2FpdCBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGFsbEl0ZW1zUmFuZ2UpO1xuICAgIGxldCBsYXN0SWROdW0gPSBhbGxJdGVtSWRzRGF0YS5sZW5ndGggPiAwXG4gICAgICAgID8gTWF0aC5tYXgoMCwgLi4uYWxsSXRlbUlkc0RhdGEubWFwKHJvdyA9PiBwYXJzZUludCgocm93WzBdIHx8ICdvaTAnKS5yZXBsYWNlKCdvaScsICcnKSwgMTApKS5maWx0ZXIobnVtID0+ICFpc05hTihudW0pKSlcbiAgICAgICAgOiAwO1xuXG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpO1xuICAgIGNvbnN0IG9yZGVyVmFsdWVzID0gW107XG5cbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2Ygb3JkZXIuaXRlbXMpIHtcbiAgICAgICAgbGFzdElkTnVtKys7IC8vIEluY3JlbWVudCBJRCBmb3IgZWFjaCBpdGVtIGluIHRoZSBsb29wXG4gICAgICAgIGNvbnN0IG5ld0lkID0gYG9pJHtsYXN0SWROdW0udG9TdHJpbmcoKS5wYWRTdGFydCgzLCAnMCcpfWA7XG4gICAgICAgIGNvbnN0IG9wdGlvbnNTdHJpbmcgPSBPYmplY3QuZW50cmllcyhpdGVtLm9wdGlvbnMpLm1hcCgoW2tleSwgdmFsdWVdKSA9PiBgJHtrZXl9OiR7dmFsdWV9YCkuam9pbignLCAnKTtcblxuICAgICAgICBvcmRlclZhbHVlcy5wdXNoKFtcbiAgICAgICAgICAgIG5ld0lkLFxuICAgICAgICAgICAgb3JkZXIuZGFpbHlPcmRlcklkLFxuICAgICAgICAgICAgbm93LFxuICAgICAgICAgICAgb3JkZXIudXNlcm5hbWUsXG4gICAgICAgICAgICBvcmRlci52ZW5kb3JJZCxcbiAgICAgICAgICAgIG9yZGVyLnZlbmRvck5hbWUsXG4gICAgICAgICAgICBpdGVtLm1lbnVJdGVtSWQsXG4gICAgICAgICAgICBpdGVtLm5hbWUsXG4gICAgICAgICAgICBpdGVtLnF1YW50aXR5LFxuICAgICAgICAgICAgaXRlbS5wcmljZSxcbiAgICAgICAgICAgIG9wdGlvbnNTdHJpbmcsXG4gICAgICAgICAgICBvcmRlci5ub3RlcyxcbiAgICAgICAgICAgICdGQUxTRScgLy8gaXNQYWlkXG4gICAgICAgIF0pO1xuICAgIH1cbiAgICBcbiAgICAvLyBFbnN1cmUgaGVhZGVycyBleGlzdFxuICAgIGNvbnN0IGhlYWRlcnMgPSBhd2FpdCBnZXRIZWFkZXJzKFNQUkVBRFNIRUVUX0lELCBPUkRFUl9JVEVNU19TSEVFVF9OQU1FKTtcbiAgICBpZiAoaGVhZGVycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgYXdhaXQgdXBkYXRlU2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCBgJHtPUkRFUl9JVEVNU19TSEVFVF9OQU1FfSFBMTpNMWAsIFtbJ2lkJywgJ2RhaWx5T3JkZXJJZCcsICd0aW1lc3RhbXAnLCAndXNlcm5hbWUnLCAndmVuZG9ySWQnLCAndmVuZG9yTmFtZScsICdtZW51SXRlbUlkJywgJ2l0ZW1OYW1lJywgJ3F1YW50aXR5JywgJ3ByaWNlJywgJ29wdGlvbnMnLCAnbm90ZXMnLCAnaXNQYWlkJ11dKTtcbiAgICB9XG5cbiAgICBpZiAob3JkZXJWYWx1ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBhd2FpdCBhcHBlbmRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGAke09SREVSX0lURU1TX1NIRUVUX05BTUV9IUE6TWAsIG9yZGVyVmFsdWVzKTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xufVxuXG5cbmV4cG9ydCB0eXBlIE9yZGVyRGV0YWlsSXRlbSA9IHtcbiAgICBpZDogc3RyaW5nO1xuICAgIGRhaWx5T3JkZXJJZDogc3RyaW5nO1xuICAgIHRpbWVzdGFtcDogc3RyaW5nO1xuICAgIHVzZXJuYW1lOiBzdHJpbmc7XG4gICAgdmVuZG9ySWQ6IHN0cmluZztcbiAgICB2ZW5kb3JOYW1lOiBzdHJpbmc7XG4gICAgbWVudUl0ZW1JZDogc3RyaW5nO1xuICAgIGl0ZW1OYW1lOiBzdHJpbmc7XG4gICAgcXVhbnRpdHk6IG51bWJlcjtcbiAgICBwcmljZTogbnVtYmVyO1xuICAgIG9wdGlvbnM6IHN0cmluZztcbiAgICBub3Rlczogc3RyaW5nO1xuICAgIGlzUGFpZDogYm9vbGVhbjtcbn07XG5cbi8qKlxuICogUmV0cmlldmVzIGFsbCBvcmRlciBpdGVtcyBmb3IgYSBzcGVjaWZpYyBkYWlseSBvcmRlci5cbiAqIEBwYXJhbSB7c3RyaW5nfSBkYWlseU9yZGVySWQgVGhlIElEIG9mIHRoZSBkYWlseSBvcmRlci5cbiAqIEByZXR1cm5zIHtQcm9taXNlPHtvcmRlckRldGFpbHM6IE9yZGVyRGV0YWlsSXRlbVtdLCBkYWlseU9yZGVyOiBEYWlseU9yZGVyIHwgbnVsbH0+fSBBbiBvYmplY3QgY29udGFpbmluZyB0aGUgbGlzdCBvZiBvcmRlciBpdGVtcyBhbmQgdGhlIGRhaWx5IG9yZGVyIGRldGFpbHMuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRPcmRlckRldGFpbHNCeURhaWx5T3JkZXJJZChkYWlseU9yZGVySWQ6IHN0cmluZyk6IFByb21pc2U8eyBvcmRlckRldGFpbHM6IE9yZGVyRGV0YWlsSXRlbVtdLCBkYWlseU9yZGVyOiBEYWlseU9yZGVyIHwgbnVsbCB9PiB7XG4gICAgLy8gMS4gR2V0IHRoZSBkYWlseSBvcmRlciBkZXRhaWxzXG4gICAgY29uc3QgYWxsRGFpbHlPcmRlcnMgPSBhd2FpdCBnZXRBbGxEYWlseU9yZGVycygpO1xuICAgIGNvbnN0IGRhaWx5T3JkZXIgPSBhbGxEYWlseU9yZGVycy5maW5kKG8gPT4gby5pZCA9PT0gZGFpbHlPcmRlcklkKTtcblxuICAgIGlmICghZGFpbHlPcmRlcikge1xuICAgICAgICByZXR1cm4geyBvcmRlckRldGFpbHM6IFtdLCBkYWlseU9yZGVyOiBudWxsIH07XG4gICAgfVxuXG4gICAgLy8gMi4gR2V0IGFsbCBvcmRlciBpdGVtc1xuICAgIGNvbnN0IG9yZGVySXRlbXNSYW5nZSA9IGAke09SREVSX0lURU1TX1NIRUVUX05BTUV9IUE6TWA7IC8vIEV4dGVuZGVkIHRvIGNvbHVtbiBNIGZvciBuZXcgZmllbGRzXG4gICAgY29uc3Qgb3JkZXJJdGVtc0RhdGEgPSBhd2FpdCBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIG9yZGVySXRlbXNSYW5nZSk7XG5cbiAgICBpZiAob3JkZXJJdGVtc0RhdGEubGVuZ3RoIDwgMikge1xuICAgICAgICByZXR1cm4geyBvcmRlckRldGFpbHM6IFtdLCBkYWlseU9yZGVyOiBkYWlseU9yZGVyIH07XG4gICAgfVxuXG4gICAgY29uc3QgaGVhZGVycyA9IG9yZGVySXRlbXNEYXRhWzBdLm1hcChoID0+IFN0cmluZyhoKS50cmltKCkpO1xuICAgIGNvbnN0IGhlYWRlck1hcCA9IGhlYWRlcnMucmVkdWNlKChhY2MsIGhlYWRlciwgaW5kZXgpID0+IHtcbiAgICAgICAgYWNjW2hlYWRlci50cmltKCldID0gaW5kZXg7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30gYXMgUmVjb3JkPHN0cmluZywgbnVtYmVyPik7XG5cbiAgICAvLyBDaGVjayBmb3IgcmVxdWlyZWQgY29sdW1uc1xuICAgIGNvbnN0IHJlcXVpcmVkQ29scyA9IFsnaWQnLCAnZGFpbHlPcmRlcklkJywgJ3RpbWVzdGFtcCcsICd1c2VybmFtZScsICd2ZW5kb3JJZCcsICd2ZW5kb3JOYW1lJywgJ21lbnVJdGVtSWQnLCAnaXRlbU5hbWUnLCAncXVhbnRpdHknLCAncHJpY2UnLCAnb3B0aW9ucycsICdub3RlcycsICdpc1BhaWQnXTtcbiAgICBmb3IgKGNvbnN0IGNvbCBvZiByZXF1aXJlZENvbHMpIHtcbiAgICAgICAgaWYgKGhlYWRlck1hcFtjb2xdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yOiBUaGUgJyR7T1JERVJfSVRFTVNfU0hFRVRfTkFNRX0nIHNoZWV0IGlzIG1pc3NpbmcgdGhlIHJlcXVpcmVkIGNvbHVtbjogJyR7Y29sfScuYCk7XG4gICAgICAgICAgICByZXR1cm4geyBvcmRlckRldGFpbHM6IFtdLCBkYWlseU9yZGVyOiBkYWlseU9yZGVyIH07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCByb3dzID0gb3JkZXJJdGVtc0RhdGEuc2xpY2UoMSk7XG5cbiAgICAvLyAzLiBGaWx0ZXIgaXRlbXMgdGhhdCBtYXRjaCB0aGUgZGFpbHlPcmRlcklkXG4gICAgY29uc3QgZmlsdGVyZWRJdGVtcyA9IHJvd3MuZmlsdGVyKHJvdyA9PiByb3dbaGVhZGVyTWFwWydkYWlseU9yZGVySWQnXV0gPT09IGRhaWx5T3JkZXJJZCk7XG5cbiAgICAvLyA0LiBNYXAgdG8gT3JkZXJEZXRhaWxJdGVtIG9iamVjdHNcbiAgICBjb25zdCBvcmRlckRldGFpbHM6IE9yZGVyRGV0YWlsSXRlbVtdID0gZmlsdGVyZWRJdGVtcy5tYXAocm93ID0+ICh7XG4gICAgICAgIGlkOiByb3dbaGVhZGVyTWFwWydpZCddXSB8fCAnJyxcbiAgICAgICAgZGFpbHlPcmRlcklkOiByb3dbaGVhZGVyTWFwWydkYWlseU9yZGVySWQnXV0gfHwgJycsXG4gICAgICAgIHRpbWVzdGFtcDogcm93W2hlYWRlck1hcFsndGltZXN0YW1wJ11dIHx8ICcnLFxuICAgICAgICB1c2VybmFtZTogcm93W2hlYWRlck1hcFsndXNlcm5hbWUnXV0gfHwgJ04vQScsXG4gICAgICAgIHZlbmRvcklkOiByb3dbaGVhZGVyTWFwWyd2ZW5kb3JJZCddXSB8fCAnJyxcbiAgICAgICAgdmVuZG9yTmFtZTogcm93W2hlYWRlck1hcFsndmVuZG9yTmFtZSddXSB8fCAnJyxcbiAgICAgICAgbWVudUl0ZW1JZDogcm93W2hlYWRlck1hcFsnbWVudUl0ZW1JZCddXSB8fCAnJyxcbiAgICAgICAgaXRlbU5hbWU6IHJvd1toZWFkZXJNYXBbJ2l0ZW1OYW1lJ11dIHx8ICdOL0EnLFxuICAgICAgICBxdWFudGl0eTogcGFyc2VJbnQocm93W2hlYWRlck1hcFsncXVhbnRpdHknXV0gfHwgJzAnLCAxMCksXG4gICAgICAgIHByaWNlOiBwYXJzZUludChyb3dbaGVhZGVyTWFwWydwcmljZSddXSB8fCAnMCcsIDEwKSxcbiAgICAgICAgb3B0aW9uczogcm93W2hlYWRlck1hcFsnb3B0aW9ucyddXSB8fCAnJyxcbiAgICAgICAgbm90ZXM6IHJvd1toZWFkZXJNYXBbJ25vdGVzJ11dIHx8ICcnLFxuICAgICAgICBpc1BhaWQ6IHJvd1toZWFkZXJNYXBbJ2lzUGFpZCddXSA9PT0gJ1RSVUUnIHx8IHJvd1toZWFkZXJNYXBbJ2lzUGFpZCddXSA9PT0gdHJ1ZSxcbiAgICB9KSk7XG5cbiAgICByZXR1cm4geyBvcmRlckRldGFpbHMsIGRhaWx5T3JkZXIgfTtcbn1cblxuZXhwb3J0IHR5cGUgVXNlck9yZGVyR3JvdXAgPSB7XG4gICAgZGFpbHlPcmRlcjogRGFpbHlPcmRlcjtcbiAgICBpdGVtczogT3JkZXJEZXRhaWxJdGVtW107XG4gICAgdG90YWw6IG51bWJlcjtcbiAgICBub3Rlczogc3RyaW5nO1xufVxuXG4vKipcbiAqIFJldHJpZXZlcyBhbGwgb3JkZXJzIGZvciBhIHNwZWNpZmljIHVzZXIsIGdyb3VwZWQgYnkgZGFpbHkgb3JkZXIuXG4gKiBAcGFyYW0ge3N0cmluZ30gdXNlcm5hbWUgVGhlIHVzZXJuYW1lIHRvIGZldGNoIG9yZGVycyBmb3IuXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxVc2VyT3JkZXJHcm91cFtdPn0gQSBsaXN0IG9mIHRoZSB1c2VyJ3Mgb3JkZXJzLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0T3JkZXJzQnlVc2VybmFtZSh1c2VybmFtZTogc3RyaW5nKTogUHJvbWlzZTxVc2VyT3JkZXJHcm91cFtdPiB7XG4gICAgLy8gMS4gR2V0IGFsbCBkYWlseSBvcmRlcnMgYW5kIGFsbCBvcmRlciBpdGVtc1xuICAgIGNvbnN0IFthbGxEYWlseU9yZGVycywgYWxsT3JkZXJJdGVtc0RhdGFdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICBnZXRBbGxEYWlseU9yZGVycygpLFxuICAgICAgICBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGAke09SREVSX0lURU1TX1NIRUVUX05BTUV9IUE6TWApXG4gICAgXSk7XG5cbiAgICBpZiAoYWxsT3JkZXJJdGVtc0RhdGEubGVuZ3RoIDwgMikge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgY29uc3QgaXRlbXNIZWFkZXJzID0gYWxsT3JkZXJJdGVtc0RhdGFbMF0ubWFwKGggPT4gU3RyaW5nKGgpLnRyaW0oKSk7XG4gICAgY29uc3QgaXRlbXNIZWFkZXJNYXAgPSBpdGVtc0hlYWRlcnMucmVkdWNlKChhY2MsIGhlYWRlciwgaW5kZXgpID0+IHtcbiAgICAgICAgYWNjW2hlYWRlci50cmltKCldID0gaW5kZXg7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30gYXMgUmVjb3JkPHN0cmluZywgbnVtYmVyPik7XG5cbiAgICAvLyBDaGVjayBmb3IgcmVxdWlyZWQgY29sdW1uc1xuICAgIGNvbnN0IHJlcXVpcmVkQ29scyA9IFsndXNlcm5hbWUnLCAnZGFpbHlPcmRlcklkJywgJ2lkJywgJ3RpbWVzdGFtcCcsICd2ZW5kb3JJZCcsICd2ZW5kb3JOYW1lJywgJ21lbnVJdGVtSWQnLCAnaXRlbU5hbWUnLCAncXVhbnRpdHknLCAncHJpY2UnLCAnb3B0aW9ucycsICdub3RlcycsICdpc1BhaWQnXTtcbiAgICBmb3IgKGNvbnN0IGNvbCBvZiByZXF1aXJlZENvbHMpIHtcbiAgICAgICAgaWYgKGl0ZW1zSGVhZGVyTWFwW2NvbF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3I6IFRoZSAnJHtPUkRFUl9JVEVNU19TSEVFVF9OQU1FfScgc2hlZXQgaXMgbWlzc2luZyB0aGUgcmVxdWlyZWQgY29sdW1uOiAnJHtjb2x9Jy5gKTtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIDIuIEZpbHRlciBpdGVtcyBmb3IgdGhlIHNwZWNpZmljIHVzZXJuYW1lXG4gICAgY29uc3QgdXNlckl0ZW1zUm93cyA9IGFsbE9yZGVySXRlbXNEYXRhLnNsaWNlKDEpLmZpbHRlcihyb3cgPT4gcm93W2l0ZW1zSGVhZGVyTWFwWyd1c2VybmFtZSddXSA9PT0gdXNlcm5hbWUpO1xuICAgIFxuICAgIGlmICh1c2VySXRlbXNSb3dzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgY29uc3QgdXNlckl0ZW1zOiBPcmRlckRldGFpbEl0ZW1bXSA9IHVzZXJJdGVtc1Jvd3MubWFwKHJvdyA9PiAoe1xuICAgICAgICBpZDogcm93W2l0ZW1zSGVhZGVyTWFwWydpZCddXSB8fCAnJyxcbiAgICAgICAgZGFpbHlPcmRlcklkOiByb3dbaXRlbXNIZWFkZXJNYXBbJ2RhaWx5T3JkZXJJZCddXSB8fCAnJyxcbiAgICAgICAgdGltZXN0YW1wOiByb3dbaXRlbXNIZWFkZXJNYXBbJ3RpbWVzdGFtcCddXSB8fCAnJyxcbiAgICAgICAgdXNlcm5hbWU6IHJvd1tpdGVtc0hlYWRlck1hcFsndXNlcm5hbWUnXV0gfHwgJ04vQScsXG4gICAgICAgIHZlbmRvcklkOiByb3dbaXRlbXNIZWFkZXJNYXBbJ3ZlbmRvcklkJ11dIHx8ICcnLFxuICAgICAgICB2ZW5kb3JOYW1lOiByb3dbaXRlbXNIZWFkZXJNYXBbJ3ZlbmRvck5hbWUnXV0gfHwgJycsXG4gICAgICAgIG1lbnVJdGVtSWQ6IHJvd1tpdGVtc0hlYWRlck1hcFsnbWVudUl0ZW1JZCddXSB8fCAnJyxcbiAgICAgICAgaXRlbU5hbWU6IHJvd1tpdGVtc0hlYWRlck1hcFsnaXRlbU5hbWUnXV0gfHwgJ04vQScsXG4gICAgICAgIHF1YW50aXR5OiBwYXJzZUludChyb3dbaXRlbXNIZWFkZXJNYXBbJ3F1YW50aXR5J11dIHx8ICcwJywgMTApLFxuICAgICAgICBwcmljZTogcGFyc2VJbnQocm93W2l0ZW1zSGVhZGVyTWFwWydwcmljZSddXSB8fCAnMCcsIDEwKSxcbiAgICAgICAgb3B0aW9uczogcm93W2l0ZW1zSGVhZGVyTWFwWydvcHRpb25zJ11dIHx8ICcnLFxuICAgICAgICBub3Rlczogcm93W2l0ZW1zSGVhZGVyTWFwWydub3RlcyddXSB8fCAnJyxcbiAgICAgICAgaXNQYWlkOiByb3dbaXRlbXNIZWFkZXJNYXBbJ2lzUGFpZCddXSA9PT0gJ1RSVUUnIHx8IHJvd1tpdGVtc0hlYWRlck1hcFsnaXNQYWlkJ11dID09PSB0cnVlLFxuICAgIH0pKTtcbiAgICBcbiAgICAvLyAzLiBHcm91cCBpdGVtcyBieSBkYWlseU9yZGVySWRcbiAgICBjb25zdCBncm91cGVkQnlEYWlseU9yZGVyID0gdXNlckl0ZW1zLnJlZHVjZSgoYWNjLCBpdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IGtleSA9IGl0ZW0uZGFpbHlPcmRlcklkO1xuICAgICAgICBpZiAoIWFjY1trZXldKSB7XG4gICAgICAgICAgICBhY2Nba2V5XSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIGFjY1trZXldLnB1c2goaXRlbSk7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30gYXMgUmVjb3JkPHN0cmluZywgT3JkZXJEZXRhaWxJdGVtW10+KTtcbiAgICBcbiAgICBcbiAgICAvLyA0LiBGb3JtYXQgdGhlIGZpbmFsIG91dHB1dFxuICAgIGNvbnN0IGFsbERhaWx5T3JkZXJzTWFwID0gbmV3IE1hcChhbGxEYWlseU9yZGVycy5tYXAobyA9PiBbby5pZCwgb10pKTtcbiAgICBjb25zdCByZXN1bHQ6IFVzZXJPcmRlckdyb3VwW10gPSBbXTtcblxuICAgIGZvciAoY29uc3QgZGFpbHlPcmRlcklkIGluIGdyb3VwZWRCeURhaWx5T3JkZXIpIHtcbiAgICAgICAgY29uc3QgZGFpbHlPcmRlciA9IGFsbERhaWx5T3JkZXJzTWFwLmdldChkYWlseU9yZGVySWQpO1xuICAgICAgICBpZiAoZGFpbHlPcmRlcikge1xuICAgICAgICAgICAgY29uc3QgaXRlbXMgPSBncm91cGVkQnlEYWlseU9yZGVyW2RhaWx5T3JkZXJJZF07XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAvLyBBZ2dyZWdhdGUgaXRlbXMgd2l0aCB0aGUgc2FtZSBtZW51SXRlbUlkIGFuZCBvcHRpb25zXG4gICAgICAgICAgICBjb25zdCBhZ2dyZWdhdGVkSXRlbXMgPSBpdGVtcy5yZWR1Y2UoKGFjYywgaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFnZ3JlZ2F0aW9uS2V5ID0gYCR7aXRlbS5tZW51SXRlbUlkfXwke2l0ZW0ub3B0aW9uc31gO1xuICAgICAgICAgICAgICAgIGlmIChhY2NbYWdncmVnYXRpb25LZXldKSB7XG4gICAgICAgICAgICAgICAgICAgIGFjY1thZ2dyZWdhdGlvbktleV0ucXVhbnRpdHkgKz0gaXRlbS5xdWFudGl0eTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBhY2NbYWdncmVnYXRpb25LZXldID0geyAuLi5pdGVtIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgICAgICB9LCB7fSBhcyBSZWNvcmQ8c3RyaW5nLCBPcmRlckRldGFpbEl0ZW0+KTtcblxuICAgICAgICAgICAgY29uc3QgZmluYWxJdGVtcyA9IE9iamVjdC52YWx1ZXMoYWdncmVnYXRlZEl0ZW1zKTtcbiAgICAgICAgICAgIGNvbnN0IHRvdGFsID0gZmluYWxJdGVtcy5yZWR1Y2UoKHN1bSwgaXRlbSkgPT4gc3VtICsgaXRlbS5wcmljZSAqIGl0ZW0ucXVhbnRpdHksIDApO1xuICAgICAgICAgICAgY29uc3Qgbm90ZXMgPSBpdGVtcy5sZW5ndGggPiAwID8gaXRlbXNbMF0ubm90ZXMgOiAnJzsgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBkYWlseU9yZGVyLFxuICAgICAgICAgICAgICAgIGl0ZW1zOiBmaW5hbEl0ZW1zLFxuICAgICAgICAgICAgICAgIHRvdGFsLFxuICAgICAgICAgICAgICAgIG5vdGVzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLy8gNS4gU29ydCB0aGUgZmluYWwgZ3JvdXBzIGJ5IGRhdGUsIG1vc3QgcmVjZW50IGZpcnN0XG4gICAgcmVzdWx0LnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgY29uc3QgZGF0ZUEgPSBuZXcgRGF0ZShgJHthLmRhaWx5T3JkZXIuZGF0ZX1UJHthLmRhaWx5T3JkZXIuZGVhZGxpbmV9YCk7XG4gICAgICAgIGNvbnN0IGRhdGVCID0gbmV3IERhdGUoYCR7Yi5kYWlseU9yZGVyLmRhdGV9VCR7Yi5kYWlseU9yZGVyLmRlYWRsaW5lfWApO1xuICAgICAgICByZXR1cm4gZGF0ZUIuZ2V0VGltZSgpIC0gZGF0ZUEuZ2V0VGltZSgpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBSZXRyaWV2ZXMgYSB1c2VyJ3Mgc3BlY2lmaWMgb3JkZXIgZm9yIGEgZ2l2ZW4gZGFpbHkgb3JkZXIsIGZvcm1hdHRlZCBmb3IgZWRpdGluZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSB1c2VybmFtZSBUaGUgdXNlcm5hbWUuXG4gKiBAcGFyYW0ge3N0cmluZ30gZGFpbHlPcmRlcklkIFRoZSBJRCBvZiB0aGUgZGFpbHkgb3JkZXIuXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxPcmRlckl0ZW1bXT59IEEgbGlzdCBvZiBvcmRlciBpdGVtcyByZWFkeSBmb3IgdGhlIGNhcnQuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRFeGlzdGluZ09yZGVyRm9yRWRpdCh1c2VybmFtZTogc3RyaW5nLCBkYWlseU9yZGVySWQ6IHN0cmluZyk6IFByb21pc2U8T3JkZXJJdGVtW10+IHtcbiAgY29uc3QgYWxsT3JkZXJJdGVtc0RhdGEgPSBhd2FpdCBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGAke09SREVSX0lURU1TX1NIRUVUX05BTUV9IUE6TWApO1xuICBpZiAoYWxsT3JkZXJJdGVtc0RhdGEubGVuZ3RoIDwgMikge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIGNvbnN0IGl0ZW1zSGVhZGVycyA9IGFsbE9yZGVySXRlbXNEYXRhWzBdLm1hcChoID0+IFN0cmluZyhoKS50cmltKCkpO1xuICBjb25zdCBpdGVtc0hlYWRlck1hcCA9IGl0ZW1zSGVhZGVycy5yZWR1Y2UoKGFjYywgaGVhZGVyLCBpbmRleCkgPT4ge1xuICAgIGFjY1toZWFkZXJdID0gaW5kZXg7XG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30gYXMgUmVjb3JkPHN0cmluZywgbnVtYmVyPik7XG5cbiAgY29uc3QgdXNlckl0ZW1zUm93cyA9IGFsbE9yZGVySXRlbXNEYXRhXG4gICAgLnNsaWNlKDEpXG4gICAgLmZpbHRlcihyb3cgPT4gcm93W2l0ZW1zSGVhZGVyTWFwWyd1c2VybmFtZSddXSA9PT0gdXNlcm5hbWUgJiYgcm93W2l0ZW1zSGVhZGVyTWFwWydkYWlseU9yZGVySWQnXV0gPT09IGRhaWx5T3JkZXJJZCk7XG5cbiAgaWYgKHVzZXJJdGVtc1Jvd3MubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIFxuICAvLyBIZWxwZXIgdG8gcmUtZ2VuZXJhdGUgdGhlIGNvbXBvc2l0ZSBpdGVtIElEIGZvciB0aGUgY2FydFxuICBjb25zdCBnZW5lcmF0ZU9yZGVySXRlbUlkID0gKGl0ZW1JZDogc3RyaW5nLCBvcHRpb25zOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+KSA9PiB7XG4gICAgaWYgKE9iamVjdC5rZXlzKG9wdGlvbnMpLmxlbmd0aCA9PT0gMCkgcmV0dXJuIGl0ZW1JZDtcbiAgICBjb25zdCBzb3J0ZWRTZWxlY3Rpb25zID0gT2JqZWN0LmtleXMob3B0aW9ucykuc29ydCgpLm1hcChrZXkgPT4gYCR7a2V5fToke29wdGlvbnNba2V5XX1gKS5qb2luKCd8Jyk7XG4gICAgcmV0dXJuIGAke2l0ZW1JZH1bJHtzb3J0ZWRTZWxlY3Rpb25zfV1gO1xuICB9XG5cbiAgLy8gSGVscGVyIHRvIHBhcnNlIHRoZSBvcHRpb25zIHN0cmluZyBiYWNrIGludG8gYW4gb2JqZWN0XG4gIGNvbnN0IHBhcnNlT3B0aW9uc1N0cmluZyA9IChvcHRpb25zU3RyOiBzdHJpbmcpOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0+IHtcbiAgICAgIGlmICghb3B0aW9uc1N0cikgcmV0dXJuIHt9O1xuICAgICAgcmV0dXJuIG9wdGlvbnNTdHIuc3BsaXQoJywnKS5yZWR1Y2UoKGFjYywgcGFpcikgPT4ge1xuICAgICAgICAgIGNvbnN0IFtrZXksIHZhbHVlXSA9IHBhaXIuc3BsaXQoJzonKTtcbiAgICAgICAgICBpZiAoa2V5ICYmIHZhbHVlKSB7XG4gICAgICAgICAgICAgIGFjY1trZXkudHJpbSgpXSA9IHZhbHVlLnRyaW0oKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH0sIHt9IGFzIFJlY29yZDxzdHJpbmcsIHN0cmluZz4pO1xuICB9XG5cbiAgY29uc3Qgb3JkZXJJdGVtczogT3JkZXJJdGVtW10gPSB1c2VySXRlbXNSb3dzLm1hcChyb3cgPT4ge1xuICAgIGNvbnN0IG9wdGlvbnMgPSBwYXJzZU9wdGlvbnNTdHJpbmcocm93W2l0ZW1zSGVhZGVyTWFwWydvcHRpb25zJ11dIHx8ICcnKTtcbiAgICBjb25zdCBtZW51SXRlbUlkID0gcm93W2l0ZW1zSGVhZGVyTWFwWydtZW51SXRlbUlkJ11dO1xuICAgIHJldHVybiB7XG4gICAgICBpZDogZ2VuZXJhdGVPcmRlckl0ZW1JZChtZW51SXRlbUlkLCBvcHRpb25zKSxcbiAgICAgIG1lbnVJdGVtSWQ6IG1lbnVJdGVtSWQsXG4gICAgICBuYW1lOiByb3dbaXRlbXNIZWFkZXJNYXBbJ2l0ZW1OYW1lJ11dIHx8ICcnLFxuICAgICAgcHJpY2U6IHBhcnNlSW50KHJvd1tpdGVtc0hlYWRlck1hcFsncHJpY2UnXV0gfHwgJzAnLCAxMCksXG4gICAgICBxdWFudGl0eTogcGFyc2VJbnQocm93W2l0ZW1zSGVhZGVyTWFwWydxdWFudGl0eSddXSB8fCAnMCcsIDEwKSxcbiAgICAgIHZlbmRvck5hbWU6IHJvd1tpdGVtc0hlYWRlck1hcFsndmVuZG9yTmFtZSddXSB8fCAnJyxcbiAgICAgIHZlbmRvcklkOiByb3dbaXRlbXNIZWFkZXJNYXBbJ3ZlbmRvcklkJ11dIHx8ICcnLFxuICAgICAgdXNlcm5hbWU6IHVzZXJuYW1lLFxuICAgICAgb3B0aW9uczogb3B0aW9ucyxcbiAgICAgIG5vdGVzOiByb3dbaXRlbXNIZWFkZXJNYXBbJ25vdGVzJ11dIHx8ICcnLFxuICAgIH07XG4gIH0pO1xuICBcbiAgcmV0dXJuIG9yZGVySXRlbXM7XG59XG5cblxuLyoqXG4gKiBEZWxldGVzIGEgdXNlcidzIGVudGlyZSBvcmRlciBmb3IgYSBzcGVjaWZpYyBkYWlseSBvcmRlci5cbiAqIEBwYXJhbSB7b2JqZWN0fSBwYXJhbXMgLSBUaGUgcGFyYW1ldGVycyBmb3IgZGVsZXRpbmcgdGhlIG9yZGVyLlxuICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtcy51c2VybmFtZSAtIFRoZSB1c2VybmFtZSBvZiB0aGUgdXNlci5cbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXMuZGFpbHlPcmRlcklkIC0gVGhlIElEIG9mIHRoZSBkYWlseSBvcmRlciB0byBkZWxldGUuXG4gKiBAcmV0dXJucyB7UHJvbWlzZTx7c3VjY2VzczogYm9vbGVhbn0+fSBBIHN1Y2Nlc3MgZmxhZy5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVVzZXJPcmRlcih7IHVzZXJuYW1lLCBkYWlseU9yZGVySWQgfTogeyB1c2VybmFtZTogc3RyaW5nLCBkYWlseU9yZGVySWQ6IHN0cmluZyB9KTogUHJvbWlzZTx7IHN1Y2Nlc3M6IGJvb2xlYW4gfT4ge1xuICAgIGNvbnN0IFtvcmRlckl0ZW1zRGF0YVdpdGhIZWFkZXJdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGAke09SREVSX0lURU1TX1NIRUVUX05BTUV9IUE6TWApLFxuICAgIF0pO1xuXG4gICAgaWYgKG9yZGVySXRlbXNEYXRhV2l0aEhlYWRlci5sZW5ndGggPCAyKSB7XG4gICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07IC8vIE5vIGl0ZW1zIHRvIGRlbGV0ZVxuICAgIH1cblxuICAgIGNvbnN0IGl0ZW1zSGVhZGVycyA9IG9yZGVySXRlbXNEYXRhV2l0aEhlYWRlclswXTtcbiAgICBjb25zdCBpdGVtc1Jvd3MgPSBvcmRlckl0ZW1zRGF0YVdpdGhIZWFkZXIuc2xpY2UoMSk7XG4gICAgXG4gICAgY29uc3QgaGVhZGVyTWFwID0gaXRlbXNIZWFkZXJzLnJlZHVjZSgoYWNjLCBoLCBpKSA9PiB7IGFjY1tTdHJpbmcoaCldID0gaTsgcmV0dXJuIGFjYzsgfSwge30gYXMgUmVjb3JkPHN0cmluZywgbnVtYmVyPik7XG4gICAgY29uc3QgZGFpbHlPcmRlcklkSW5kZXggPSBoZWFkZXJNYXBbJ2RhaWx5T3JkZXJJZCddO1xuICAgIGNvbnN0IHVzZXJuYW1lSW5kZXggPSBoZWFkZXJNYXBbJ3VzZXJuYW1lJ107XG5cbiAgICBpZiAoZGFpbHlPcmRlcklkSW5kZXggPT09IHVuZGVmaW5lZCB8fCB1c2VybmFtZUluZGV4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlICdvcmRlcl9pdGVtcycgc2hlZXQgaXMgbWlzc2luZyByZXF1aXJlZCBjb2x1bW5zICdkYWlseU9yZGVySWQnIG9yICd1c2VybmFtZScuXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IGl0ZW1zVG9LZWVwID0gaXRlbXNSb3dzLmZpbHRlcihyb3cgPT4gXG4gICAgICAgICEocm93W2RhaWx5T3JkZXJJZEluZGV4XSA9PT0gZGFpbHlPcmRlcklkICYmIHJvd1t1c2VybmFtZUluZGV4XSA9PT0gdXNlcm5hbWUpXG4gICAgKTtcbiAgICBcbiAgICBhd2FpdCBiYXRjaFVwZGF0ZVNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgW3tcbiAgICAgICAgcmFuZ2U6IGAke09SREVSX0lURU1TX1NIRUVUX05BTUV9IUExOk1gLFxuICAgICAgICB2YWx1ZXM6IFtpdGVtc0hlYWRlcnMsIC4uLml0ZW1zVG9LZWVwXSxcbiAgICB9XSk7XG5cbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6InVTQTJjc0IifQ==
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/ai/flows/data:e2fc54 [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"40b087eb00f00f9014e8a4c4941ed162f1e96eda17":"deleteUserOrder"},"src/ai/flows/order-flow.ts",""] */ __turbopack_context__.s({
    "deleteUserOrder": (()=>deleteUserOrder)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var deleteUserOrder = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40b087eb00f00f9014e8a4c4941ed162f1e96eda17", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "deleteUserOrder"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vb3JkZXItZmxvdy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbid1c2Ugc2VydmVyJztcblxuaW1wb3J0IHsgZ2V0U2hlZXREYXRhLCBhcHBlbmRTaGVldERhdGEsIGdldEhlYWRlcnMsIHVwZGF0ZVNoZWV0RGF0YSwgYmF0Y2hVcGRhdGVTaGVldERhdGEgfSBmcm9tICdAL3NlcnZpY2VzL3NoZWV0LXNlcnZpY2UnO1xuaW1wb3J0IHsgZ2V0VmVuZG9ycywgdHlwZSBWZW5kb3IgfSBmcm9tICcuL3ZlbmRvci1mbG93JztcbmltcG9ydCB7IHR5cGUgRmluYWxPcmRlciwgdHlwZSBPcmRlckl0ZW0gfSBmcm9tICdAL2NvbXBvbmVudHMvT3JkZXJTdW1tYXJ5JztcbmltcG9ydCB7IFB1Ymxpc2hPcmRlclJlcXVlc3RTY2hlbWEsIHR5cGUgUHVibGlzaE9yZGVyUmVxdWVzdCB9IGZyb20gJ0AvbGliL3NjaGVtYS9vcmRlcic7XG5pbXBvcnQgeyBmb3JtYXQsIHBhcnNlLCBwYXJzZUlTTywgaXNWYWxpZCB9IGZyb20gJ2RhdGUtZm5zJztcblxuY29uc3QgU1BSRUFEU0hFRVRfSUQgPSAnMVpqMmgwY1lscmIybUJhTmdsMS1Qb09LN3RsQ0N3RGNjQVhuNXc2NmhwNGMnO1xuY29uc3QgREFJTFlfT1JERVJTX1NIRUVUX05BTUUgPSAnZGFpbHlfb3JkZXJzJztcbmNvbnN0IE9SREVSX0lURU1TX1NIRUVUX05BTUUgPSAnb3JkZXJfaXRlbXMnO1xuXG5leHBvcnQgdHlwZSBEYWlseU9yZGVyID0ge1xuICAgIGlkOiBzdHJpbmc7XG4gICAgZGF0ZTogc3RyaW5nO1xuICAgIHZlbmRvcklkOiBzdHJpbmc7XG4gICAgdmVuZG9yTmFtZT86IHN0cmluZzsgLy8gT3B0aW9uYWw6IGZvciBkaXNwbGF5IG9uIGFkbWluIHBhZ2VcbiAgICBkZWFkbGluZTogc3RyaW5nO1xufTtcblxuLy8gVGhpcyB0eXBlIGlzIGZvciB0aGUgdXNlci1mYWNpbmcgb3JkZXIgcGFnZVxuZXhwb3J0IHR5cGUgQXZhaWxhYmxlT3JkZXIgPSB7XG4gICAgaWQ6IHN0cmluZzsgLy8gZGFpbHlPcmRlcklkXG4gICAgdmVuZG9yOiBWZW5kb3I7XG4gICAgZGF0ZTogc3RyaW5nO1xuICAgIGRlYWRsaW5lOiBzdHJpbmc7XG59O1xuXG4vLyBIZWxwZXIgZnVuY3Rpb24gdG8gZm9ybWF0IHRpbWUgZnJvbSBTaGVldHMgKHdoaWNoIGNhbiBiZSBhIG51bWJlcilcbmNvbnN0IGZvcm1hdFRpbWUgPSAodGltZVZhbHVlOiBhbnkpOiBzdHJpbmcgPT4ge1xuICAgIGlmICh0eXBlb2YgdGltZVZhbHVlID09PSAnc3RyaW5nJyAmJiB0aW1lVmFsdWUubWF0Y2goL15cXGR7Mn06XFxkezJ9KDpcXGR7Mn0pPyQvKSkge1xuICAgICAgICByZXR1cm4gdGltZVZhbHVlLnN1YnN0cmluZygwLCA1KTtcbiAgICB9XG4gICAgXG4gICAgaWYgKHR5cGVvZiB0aW1lVmFsdWUgPT09ICdudW1iZXInICYmIHRpbWVWYWx1ZSA+IDAgJiYgdGltZVZhbHVlIDwgMSkge1xuICAgICAgLy8gSXQncyBhIHRpbWUgc2VyaWFsIG51bWJlciBmcm9tIFNoZWV0c1xuICAgICAgY29uc3QgdG90YWxTZWNvbmRzID0gTWF0aC5yb3VuZCh0aW1lVmFsdWUgKiA4NjQwMCk7XG4gICAgICBjb25zdCBob3VycyA9IE1hdGguZmxvb3IodG90YWxTZWNvbmRzIC8gMzYwMCk7XG4gICAgICBjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcigodG90YWxTZWNvbmRzICUgMzYwMCkgLyA2MCk7XG4gICAgICByZXR1cm4gYCR7aG91cnMudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpfToke21pbnV0ZXMudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpfWA7XG4gICAgfVxuXG4gICAgLy8gVHJ5IHBhcnNpbmcgYXMgYSBkYXRlIHN0cmluZyB0byBleHRyYWN0IHRpbWVcbiAgICBpZiAodHlwZW9mIHRpbWVWYWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGUgPSBwYXJzZUlTTyh0aW1lVmFsdWUpO1xuICAgICAgICAgICAgaWYgKGlzVmFsaWQoZGF0ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZm9ybWF0KGRhdGUsICdISDptbScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAvLyBJZ25vcmUgcGFyc2UgZXJyb3JzIGZyb20gSVNPXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHRpbWVNYXRjaCA9IHRpbWVWYWx1ZS5tYXRjaCgvKFxcZHsyfTpcXGR7Mn0pLyk7XG4gICAgICAgIGlmICh0aW1lTWF0Y2gpIHJldHVybiB0aW1lTWF0Y2hbMF07XG4gICAgfVxuICAgIFxuICAgIC8vIEZhbGxiYWNrIGZvciB1bmV4cGVjdGVkIGZvcm1hdHNcbiAgICByZXR1cm4gJzAwOjAwJzsgXG59O1xuXG4vLyBIZWxwZXIgZnVuY3Rpb24gdG8gZm9ybWF0IGRhdGUgZnJvbSBTaGVldHMgKHdoaWNoIGNhbiBiZSBhIG51bWJlciBvciBzdHJpbmcpXG5jb25zdCBmb3JtYXREYXRlID0gKGRhdGVWYWx1ZTogYW55KTogc3RyaW5nID0+IHtcbiAgICBpZiAoIWRhdGVWYWx1ZSkgcmV0dXJuIGZvcm1hdChuZXcgRGF0ZSgpLCAneXl5eS1NTS1kZCcpOyAvLyBSZXR1cm4gdG9kYXkncyBkYXRlIGlmIGVtcHR5XG5cbiAgICBsZXQgZGF0ZTtcbiAgICBcbiAgICAvLyBIYW5kbGUgU2hlZXRzIGRhdGUgc2VyaWFsIG51bWJlciAobnVtYmVyIG9mIGRheXMgc2luY2UgMTg5OS0xMi0zMClcbiAgICBpZiAodHlwZW9mIGRhdGVWYWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgY29uc3QgZXhjZWxFcG9jaCA9IG5ldyBEYXRlKERhdGUuVVRDKDE4OTksIDExLCAzMCkpO1xuICAgICAgICBkYXRlID0gbmV3IERhdGUoZXhjZWxFcG9jaC5nZXRUaW1lKCkgKyBkYXRlVmFsdWUgKiA4NjQwMDAwMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gSGFuZGxlIElTTyBzdHJpbmcgbGlrZSAnMjAyNC0wNy0yNVQwMDowMDowMC4wMDBaJyBvciBzaW1wbGUgc3RyaW5nICcyMDI0LTA3LTI1J1xuICAgICAgICB0cnkge1xuICAgICAgICAgICBkYXRlID0gcGFyc2VJU08oU3RyaW5nKGRhdGVWYWx1ZSkpO1xuICAgICAgICAgICAvLyBJZiBJU08gcGFyc2luZyBmYWlscywgdHJ5IHRoZSBzaW1wbGUgZm9ybWF0XG4gICAgICAgICAgIGlmICghaXNWYWxpZChkYXRlKSkge1xuICAgICAgICAgICAgICAgZGF0ZSA9IHBhcnNlKFN0cmluZyhkYXRlVmFsdWUpLCAneXl5eS1NTS1kZCcsIG5ldyBEYXRlKCkpO1xuICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICAgICBkYXRlID0gcGFyc2UoU3RyaW5nKGRhdGVWYWx1ZSksICd5eXl5LU1NLWRkJywgbmV3IERhdGUoKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLy8gSWYgZGF0ZSBpcyB2YWxpZCwgZm9ybWF0IGl0LCBvdGhlcndpc2UgcmV0dXJuIHRvZGF5J3MgZGF0ZSBhcyBhIGZhbGxiYWNrXG4gICAgcmV0dXJuIGlzVmFsaWQoZGF0ZSkgPyBmb3JtYXQoZGF0ZSwgJ3l5eXktTU0tZGQnKSA6IGZvcm1hdChuZXcgRGF0ZSgpLCAneXl5eS1NTS1kZCcpO1xufTtcblxuXG4vKipcbiAqIFJldHJpZXZlcyBhbGwgYXZhaWxhYmxlIG9yZGVycyBmcm9tIHRoZSBkYWlseV9vcmRlcnMgc2hlZXQuXG4gKiBBbnkgb3JkZXIgcHJlc2VudCBpcyBjb25zaWRlcmVkIGF2YWlsYWJsZS5cbiAqIEByZXR1cm5zIHtQcm9taXNlPEF2YWlsYWJsZU9yZGVyW10+fSBBIGxpc3Qgb2YgYXZhaWxhYmxlIHZlbmRvcnMgYW5kIHRoZWlyIGRlYWRsaW5lcy5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEF2YWlsYWJsZU9yZGVycygpOiBQcm9taXNlPEF2YWlsYWJsZU9yZGVyW10+IHtcbiAgICBjb25zdCBkYWlseU9yZGVyc1JhbmdlID0gYCR7REFJTFlfT1JERVJTX1NIRUVUX05BTUV9IUE6RGA7XG4gICAgY29uc3QgW2RhaWx5T3JkZXJzRGF0YSwgYWxsVmVuZG9yc10gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgIGdldFNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgZGFpbHlPcmRlcnNSYW5nZSksXG4gICAgICAgIGdldFZlbmRvcnMoKVxuICAgIF0pO1xuXG4gICAgaWYgKCFkYWlseU9yZGVyc0RhdGEgfHwgZGFpbHlPcmRlcnNEYXRhLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBoZWFkZXIgPSBkYWlseU9yZGVyc0RhdGFbMF07XG4gICAgY29uc3Qgcm93cyA9IGRhaWx5T3JkZXJzRGF0YS5zbGljZSgxKTtcblxuICAgIGNvbnN0IGhlYWRlck1hcCA9IGhlYWRlci5yZWR1Y2UoKGFjYywgaCwgaSkgPT4ge1xuICAgICAgICBhY2NbU3RyaW5nKGgpXSA9IGk7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30gYXMgUmVjb3JkPHN0cmluZywgbnVtYmVyPik7XG5cbiAgICBjb25zdCBhbGxWZW5kb3JzTWFwID0gbmV3IE1hcChhbGxWZW5kb3JzLm1hcCh2ID0+IFt2LnZlbmRvcklkLCB2XSkpO1xuXG4gICAgY29uc3QgYXZhaWxhYmxlT3JkZXJzOiBBdmFpbGFibGVPcmRlcltdID0gW107XG5cbiAgICBmb3IgKGNvbnN0IHJvdyBvZiByb3dzKSB7XG4gICAgICAgIGlmIChyb3cuZXZlcnkoY2VsbCA9PiAhY2VsbCkpIGNvbnRpbnVlOyAvLyBTa2lwIGNvbXBsZXRlbHkgZW1wdHkgcm93c1xuXG4gICAgICAgIGNvbnN0IGlkID0gcm93W2hlYWRlck1hcFsnaWQnXV07XG4gICAgICAgIGNvbnN0IHZlbmRvcklkID0gcm93W2hlYWRlck1hcFsndmVuZG9ySWQnXV07XG4gICAgICAgIGNvbnN0IGRhdGVSYXcgPSByb3dbaGVhZGVyTWFwWydkYXRlJ11dO1xuICAgICAgICBjb25zdCBkZWFkbGluZVJhdyA9IHJvd1toZWFkZXJNYXBbJ2RlYWRsaW5lJ11dO1xuXG4gICAgICAgIGlmICghaWQgfHwgIXZlbmRvcklkKSBjb250aW51ZTsgLy8gU2tpcCByb3dzIHdpdGhvdXQgZXNzZW50aWFsIGRhdGFcblxuICAgICAgICBjb25zdCB2ZW5kb3IgPSBhbGxWZW5kb3JzTWFwLmdldCh2ZW5kb3JJZCk7XG4gICAgICAgIGlmICghdmVuZG9yIHx8ICF2ZW5kb3IuaXNBY3RpdmUpIGNvbnRpbnVlO1xuXG4gICAgICAgIGF2YWlsYWJsZU9yZGVycy5wdXNoKHtcbiAgICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICAgIHZlbmRvcixcbiAgICAgICAgICAgIGRhdGU6IGZvcm1hdERhdGUoZGF0ZVJhdyksXG4gICAgICAgICAgICBkZWFkbGluZTogZm9ybWF0VGltZShkZWFkbGluZVJhdykgLy8gRm9ybWF0IHRoZSBkZWFkbGluZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXZhaWxhYmxlT3JkZXJzO1xufVxuXG4vKipcbiAqIFJldHJpZXZlcyBhbGwgZGFpbHkgb3JkZXJzIGZvciBhZG1pbiBkaXNwbGF5LlxuICogQHJldHVybnMge1Byb21pc2U8RGFpbHlPcmRlcltdPn0gQSBsaXN0IG9mIGFsbCBwdWJsaXNoZWQgb3JkZXJzLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWxsRGFpbHlPcmRlcnMoKTogUHJvbWlzZTxEYWlseU9yZGVyW10+IHtcbiAgICBjb25zdCBkYWlseU9yZGVyc1JhbmdlID0gYCR7REFJTFlfT1JERVJTX1NIRUVUX05BTUV9IUE6RGA7XG4gICAgIGNvbnN0IFtkYWlseU9yZGVyc0RhdGEsIGFsbFZlbmRvcnNdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGRhaWx5T3JkZXJzUmFuZ2UpLFxuICAgICAgICBnZXRWZW5kb3JzKClcbiAgICBdKTtcbiAgICBcbiAgICBpZiAoIWRhaWx5T3JkZXJzRGF0YSB8fCBkYWlseU9yZGVyc0RhdGEubGVuZ3RoIDwgMikge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgY29uc3QgaGVhZGVyID0gZGFpbHlPcmRlcnNEYXRhWzBdO1xuICAgIGNvbnN0IHJvd3MgPSBkYWlseU9yZGVyc0RhdGEuc2xpY2UoMSk7XG4gICAgY29uc3QgYWxsVmVuZG9yc01hcCA9IG5ldyBNYXAoYWxsVmVuZG9ycy5tYXAodiA9PiBbdi52ZW5kb3JJZCwgdl0pKTtcbiAgICBcbiAgICBjb25zdCBoZWFkZXJNYXAgPSBoZWFkZXIucmVkdWNlKChhY2MsIGgsIGkpID0+IHtcbiAgICAgICAgYWNjW1N0cmluZyhoKV0gPSBpO1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgIH0sIHt9IGFzIFJlY29yZDxzdHJpbmcsIG51bWJlcj4pO1xuXG4gICAgY29uc3Qgb3JkZXJzID0gcm93cy5tYXAocm93ID0+IHtcbiAgICAgICAgY29uc3QgdmVuZG9ySWQgPSByb3dbaGVhZGVyTWFwWyd2ZW5kb3JJZCddXTtcbiAgICAgICAgY29uc3QgdmVuZG9yID0gYWxsVmVuZG9yc01hcC5nZXQodmVuZG9ySWQpO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlkOiByb3dbaGVhZGVyTWFwWydpZCddXSB8fCAnJyxcbiAgICAgICAgICAgIGRhdGU6IGZvcm1hdERhdGUocm93W2hlYWRlck1hcFsnZGF0ZSddXSksXG4gICAgICAgICAgICB2ZW5kb3JJZDogdmVuZG9ySWQgfHwgJycsXG4gICAgICAgICAgICB2ZW5kb3JOYW1lOiB2ZW5kb3IgPyB2ZW5kb3IudmVuZG9yTmFtZSA6ICfmnKrnn6XlupflrrYnLFxuICAgICAgICAgICAgZGVhZGxpbmU6IGZvcm1hdFRpbWUocm93W2hlYWRlck1hcFsnZGVhZGxpbmUnXV0pXG4gICAgICAgIH07XG4gICAgfSkuZmlsdGVyKG9yZGVyID0+IG9yZGVyLmlkKTsgLy8gRmlsdGVyIG91dCBhbnkgZW1wdHkgcm93c1xuXG4gICAgLy8gU29ydCBvcmRlcnMgYnkgZGF0ZSBhbmQgdGhlbiBieSBkZWFkbGluZSwgYXNjZW5kaW5nIChjbG9zZXN0IGZpcnN0KVxuICAgIG9yZGVycy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGVBID0gbmV3IERhdGUoYCR7YS5kYXRlfVQke2EuZGVhZGxpbmV9YCk7XG4gICAgICAgIGNvbnN0IGRhdGVCID0gbmV3IERhdGUoYCR7Yi5kYXRlfVQke2IuZGVhZGxpbmV9YCk7XG4gICAgICAgIHJldHVybiBkYXRlQS5nZXRUaW1lKCkgLSBkYXRlQi5nZXRUaW1lKCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gb3JkZXJzO1xufVxuXG5cbi8qKlxuICogUHVibGlzaGVzIGEgbmV3IG9yZGVyIGZvciBhIHNwZWNpZmljIGRhdGUsIHZlbmRvciBhbmQgZGVhZGxpbmUuXG4gKiBAcGFyYW0ge1B1Ymxpc2hPcmRlclJlcXVlc3R9IHJlcSAtIFRoZSByZXF1ZXN0IGNvbnRhaW5pbmcgZGF0ZSwgdmVuZG9ySWQgYW5kIGRlYWRsaW5lLlxuICogQHJldHVybnMge1Byb21pc2U8e3N1Y2Nlc3M6IGJvb2xlYW59Pn0gQSBzdWNjZXNzIGZsYWcuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwdWJsaXNoT3JkZXIocmVxOiBQdWJsaXNoT3JkZXJSZXF1ZXN0KTogUHJvbWlzZTx7IHN1Y2Nlc3M6IGJvb2xlYW4gfT4ge1xuICBjb25zdCB2YWxpZGF0aW9uID0gUHVibGlzaE9yZGVyUmVxdWVzdFNjaGVtYS5zYWZlUGFyc2UocmVxKTtcbiAgaWYgKCF2YWxpZGF0aW9uLnN1Y2Nlc3MpIHtcbiAgICBjb25zdCBlcnJvck1zZyA9IHZhbGlkYXRpb24uZXJyb3IuZXJyb3JzLm1hcChlID0+IGAke2UucGF0aC5qb2luKCcuJyl9OiAke2UubWVzc2FnZX1gKS5qb2luKCcsICcpO1xuICAgIHRocm93IG5ldyBFcnJvcihg6Ly45YWl6LOH5paZ5pyJ6KqkOiAke2Vycm9yTXNnfWApO1xuICB9XG5cbiAgY29uc3QgYWxsT3JkZXJzUmFuZ2UgPSBgJHtEQUlMWV9PUkRFUlNfU0hFRVRfTkFNRX0hQTI6QWA7XG4gIGNvbnN0IGFsbE9yZGVySWRzRGF0YSA9IGF3YWl0IGdldFNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgYWxsT3JkZXJzUmFuZ2UpO1xuICAgIGNvbnN0IGxhc3RJZE51bSA9IGFsbE9yZGVySWRzRGF0YS5sZW5ndGggPiAwIFxuICAgICAgICA/IE1hdGgubWF4KDAsIC4uLmFsbE9yZGVySWRzRGF0YS5tYXAocm93ID0+IHBhcnNlSW50KChyb3dbMF0gfHwgJ2RvMCcpLnJlcGxhY2UoJ2RvJywgJycpLCAxMCkpLmZpbHRlcihudW0gPT4gIWlzTmFOKG51bSkpKVxuICAgICAgICA6IDA7XG4gIGNvbnN0IG5ld0lkID0gYGRvJHsobGFzdElkTnVtICsgMSkudG9TdHJpbmcoKS5wYWRTdGFydCgzLCAnMCcpfWA7XG5cbiAgY29uc3QgdmFsdWVzID0gW1xuICAgIFtuZXdJZCwgcmVxLmRhdGUsIHJlcS52ZW5kb3JJZCwgcmVxLmRlYWRsaW5lXVxuICBdO1xuICBcbiAgLy8gRW5zdXJlIGhlYWRlcnMgZXhpc3RcbiAgY29uc3QgaGVhZGVycyA9IGF3YWl0IGdldEhlYWRlcnMoU1BSRUFEU0hFRVRfSUQsIERBSUxZX09SREVSU19TSEVFVF9OQU1FKTtcbiAgaWYgKGhlYWRlcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICBhd2FpdCB1cGRhdGVTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGAke0RBSUxZX09SREVSU19TSEVFVF9OQU1FfSFBMTpEMWAsIFtbJ2lkJywgJ2RhdGUnLCAndmVuZG9ySWQnLCAnZGVhZGxpbmUnXV0pO1xuICB9XG5cbiAgYXdhaXQgYXBwZW5kU2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCBgJHtEQUlMWV9PUkRFUlNfU0hFRVRfTkFNRX0hQTpEYCwgdmFsdWVzKTtcbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xufVxuXG5leHBvcnQgdHlwZSBVcGRhdGVEYWlseU9yZGVyUmVxdWVzdCA9IHtcbiAgICBvcmRlcklkOiBzdHJpbmc7XG4gICAgdmVuZG9ySWQ6IHN0cmluZztcbiAgICBkYXRlOiBzdHJpbmc7XG4gICAgZGVhZGxpbmU6IHN0cmluZztcbn1cblxuLyoqXG4gKiBVcGRhdGVzIGFuIGV4aXN0aW5nIGRhaWx5IG9yZGVyJ3MgZGF0ZSBhbmQgZGVhZGxpbmUuXG4gKiBAcGFyYW0ge1VwZGF0ZURhaWx5T3JkZXJSZXF1ZXN0fSByZXEgLSBUaGUgcmVxdWVzdCBjb250YWluaW5nIG9yZGVySWQsIGRhdGUgYW5kIGRlYWRsaW5lLlxuICogQHJldHVybnMge1Byb21pc2U8e3N1Y2Nlc3M6IGJvb2xlYW59Pn0gQSBzdWNjZXNzIGZsYWcuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVEYWlseU9yZGVyKHJlcTogVXBkYXRlRGFpbHlPcmRlclJlcXVlc3QpOiBQcm9taXNlPHsgc3VjY2VzczogYm9vbGVhbiB9PiB7XG4gICAgY29uc3QgeyBvcmRlcklkLCB2ZW5kb3JJZCwgZGF0ZSwgZGVhZGxpbmUgfSA9IHJlcTtcbiAgICBcbiAgICAvLyAxLiBGaW5kIHRoZSByb3cgb2YgdGhlIG9yZGVyIHRvIHVwZGF0ZVxuICAgIGNvbnN0IGFsbE9yZGVyc0RhdGEgPSBhd2FpdCBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGAke0RBSUxZX09SREVSU19TSEVFVF9OQU1FfSFBOkFgKTtcbiAgICBjb25zdCByb3dJbmRleCA9IGFsbE9yZGVyc0RhdGEuZmluZEluZGV4KHJvdyA9PiByb3dbMF0gPT09IG9yZGVySWQpO1xuICAgIFxuICAgIGlmIChyb3dJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGDmib7kuI3liLAgSUQg54K6ICR7b3JkZXJJZH0g55qE6KiC5Zau44CCYCk7XG4gICAgfVxuXG4gICAgLy8gKzEgYmVjYXVzZSBzaGVldCByb3dzIGFyZSAxLWJhc2VkLlxuICAgIGNvbnN0IHJvd1RvVXBkYXRlID0gcm93SW5kZXggKyAxO1xuICAgIFxuICAgIC8vIFdlIHVwZGF0ZSBkYXRlIGFuZCBkZWFkbGluZS4gVmVuZG9ySWQgaXMgbm90IGNoYW5nZWQuXG4gICAgLy8gVGhlIHJhbmdlIHNob3VsZCBiZSBCeDpEeCB0byB1cGRhdGUgZGF0ZSBhbmQgZGVhZGxpbmUuXG4gICAgY29uc3QgdXBkYXRlUmFuZ2UgPSBgJHtEQUlMWV9PUkRFUlNfU0hFRVRfTkFNRX0hQiR7cm93VG9VcGRhdGV9OkQke3Jvd1RvVXBkYXRlfWA7XG4gICAgYXdhaXQgdXBkYXRlU2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCB1cGRhdGVSYW5nZSwgW1tkYXRlLCB2ZW5kb3JJZCwgZGVhZGxpbmVdXSk7XG5cbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG59XG5cblxuLyoqXG4gKiBEZWxldGVzIGEgcHVibGlzaGVkIGRhaWx5IG9yZGVyIGFuZCBpdHMgYXNzb2NpYXRlZCBvcmRlciBpdGVtcy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBkYWlseU9yZGVySWQgVGhlIElEIG9mIHRoZSBkYWlseSBvcmRlciB0byBkZWxldGUuXG4gKiBAcmV0dXJucyB7UHJvbWlzZTx7c3VjY2VzczogYm9vbGVhbn0+fSBBIHN1Y2Nlc3MgZmxhZy5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZURhaWx5T3JkZXIoZGFpbHlPcmRlcklkOiBzdHJpbmcpOiBQcm9taXNlPHsgc3VjY2VzczogYm9vbGVhbiB9PiB7XG4gIC8vIDEuIEdldCBhbGwgZGF0YSBmcm9tIGJvdGggc2hlZXRzXG4gIGNvbnN0IFtkYWlseU9yZGVyc0RhdGFXaXRoSGVhZGVyLCBvcmRlckl0ZW1zRGF0YVdpdGhIZWFkZXJdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgIGdldFNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgYCR7REFJTFlfT1JERVJTX1NIRUVUX05BTUV9IUE6RGApLFxuICAgIGdldFNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgYCR7T1JERVJfSVRFTVNfU0hFRVRfTkFNRX0hQTpNYCksIC8vIFJlYWQgdXAgdG8gY29sdW1uIE1cbiAgXSk7XG5cbiAgaWYgKGRhaWx5T3JkZXJzRGF0YVdpdGhIZWFkZXIubGVuZ3RoIDwgMikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbiAgfVxuXG4gIGNvbnN0IGRhaWx5T3JkZXJzSGVhZGVycyA9IGRhaWx5T3JkZXJzRGF0YVdpdGhIZWFkZXJbMF07XG4gIGNvbnN0IGRhaWx5T3JkZXJzUm93cyA9IGRhaWx5T3JkZXJzRGF0YVdpdGhIZWFkZXIuc2xpY2UoMSk7XG4gIFxuICBjb25zdCBvcmRlckl0ZW1zSGVhZGVycyA9IG9yZGVySXRlbXNEYXRhV2l0aEhlYWRlci5sZW5ndGggPiAwID8gb3JkZXJJdGVtc0RhdGFXaXRoSGVhZGVyWzBdIDogW107XG4gIGNvbnN0IG9yZGVySXRlbXNSb3dzID0gb3JkZXJJdGVtc0RhdGFXaXRoSGVhZGVyLmxlbmd0aCA+IDEgPyBvcmRlckl0ZW1zRGF0YVdpdGhIZWFkZXIuc2xpY2UoMSkgOiBbXTtcblxuICAvLyAyLiBGaWx0ZXIgdGhlIHJvd3MgdG8ga2VlcCBmb3IgYm90aCBzaGVldHNcbiAgY29uc3QgZGFpbHlPcmRlcnNUb0tlZXAgPSBkYWlseU9yZGVyc1Jvd3MuZmlsdGVyKHJvdyA9PiByb3dbMF0gIT09IGRhaWx5T3JkZXJJZCk7XG5cbiAgbGV0IG9yZGVySXRlbXNUb0tlZXAgPSBvcmRlckl0ZW1zUm93cztcbiAgaWYgKG9yZGVySXRlbXNSb3dzLmxlbmd0aCA+IDAgJiYgb3JkZXJJdGVtc0hlYWRlcnMubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3Qgb3JkZXJJdGVtc0hlYWRlck1hcCA9IG9yZGVySXRlbXNIZWFkZXJzLnJlZHVjZSgoYWNjLCBoLCBpKSA9PiB7IGFjY1tTdHJpbmcoaCldID0gaTsgcmV0dXJuIGFjYzsgfSwge30gYXMgUmVjb3JkPHN0cmluZywgbnVtYmVyPik7XG4gICAgICBjb25zdCBkYWlseU9yZGVySWRJbmRleCA9IG9yZGVySXRlbXNIZWFkZXJNYXBbJ2RhaWx5T3JkZXJJZCddO1xuICAgICAgXG4gICAgICAvLyBFbnN1cmUgdGhlIGRhaWx5T3JkZXJJZCBjb2x1bW4gZXhpc3RzIGJlZm9yZSBmaWx0ZXJpbmdcbiAgICAgIGlmIChkYWlseU9yZGVySWRJbmRleCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgb3JkZXJJdGVtc1RvS2VlcCA9IG9yZGVySXRlbXNSb3dzLmZpbHRlcihpdGVtUm93ID0+IGl0ZW1Sb3dbZGFpbHlPcmRlcklkSW5kZXhdICE9PSBkYWlseU9yZGVySWQpO1xuICAgICAgfVxuICB9XG5cbiAgLy8gNC4gUHJlcGFyZSBiYXRjaCB1cGRhdGUgZGF0YSB0byBjbGVhciBhbmQgcmV3cml0ZSBib3RoIHNoZWV0c1xuICBhd2FpdCBiYXRjaFVwZGF0ZVNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgW1xuICAgIHtcbiAgICAgIHJhbmdlOiBgJHtEQUlMWV9PUkRFUlNfU0hFRVRfTkFNRX0hQTE6RGAsXG4gICAgICB2YWx1ZXM6IFtkYWlseU9yZGVyc0hlYWRlcnMsIC4uLmRhaWx5T3JkZXJzVG9LZWVwXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHJhbmdlOiBgJHtPUkRFUl9JVEVNU19TSEVFVF9OQU1FfSFBMTpNYCxcbiAgICAgIHZhbHVlczogb3JkZXJJdGVtc0hlYWRlcnMubGVuZ3RoID4gMCA/IFtvcmRlckl0ZW1zSGVhZGVycywgLi4ub3JkZXJJdGVtc1RvS2VlcF0gOiBbXSxcbiAgICB9XG4gIF0pO1xuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbn1cblxuXG4vKipcbiAqIFN1Ym1pdHMgYW4gb3JkZXIgYW5kIHNhdmVzIGl0IHRvIHRoZSAnb3JkZXJfaXRlbXMnIHNoZWV0LlxuICogSWYgZWRpdGluZyBhbiBleGlzdGluZyBvcmRlciwgaXQgZmlyc3QgZGVsZXRlcyB0aGUgb2xkIGl0ZW1zLlxuICogQHBhcmFtIHtGaW5hbE9yZGVyfSBvcmRlciAtIFRoZSBjb21wbGV0ZSBvcmRlciBkZXRhaWxzLlxuICogQHBhcmFtIHtib29sZWFufSBpc0VkaXRpbmcgLSBBIGZsYWcgdG8gaW5kaWNhdGUgaWYgdGhpcyBpcyBhbiBlZGl0LlxuICogQHJldHVybnMge1Byb21pc2U8e3N1Y2Nlc3M6IGJvb2xlYW59Pn0gQSBzdWNjZXNzIGZsYWcuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzdWJtaXRPcmRlcihvcmRlcjogRmluYWxPcmRlciwgaXNFZGl0aW5nOiBib29sZWFuID0gZmFsc2UpOiBQcm9taXNlPHsgc3VjY2VzczogYm9vbGVhbiB9PiB7XG4gICAgLy8gSWYgZWRpdGluZywgZmlyc3QgZGVsZXRlIGFsbCBleGlzdGluZyBpdGVtcyBmb3IgdGhhdCB1c2VyIGluIHRoYXQgZGFpbHkgb3JkZXJcbiAgICBpZiAoaXNFZGl0aW5nKSB7XG4gICAgICAgIGF3YWl0IGRlbGV0ZVVzZXJPcmRlcih7IHVzZXJuYW1lOiBvcmRlci51c2VybmFtZSwgZGFpbHlPcmRlcklkOiBvcmRlci5kYWlseU9yZGVySWQgfSk7XG4gICAgfVxuICAgIFxuICAgIC8vIFRoZW4sIGFwcGVuZCB0aGUgbmV3L3VwZGF0ZWQgaXRlbXNcbiAgICBjb25zdCBhbGxJdGVtc1JhbmdlID0gYCR7T1JERVJfSVRFTVNfU0hFRVRfTkFNRX0hQTI6QWA7XG4gICAgY29uc3QgYWxsSXRlbUlkc0RhdGEgPSBhd2FpdCBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGFsbEl0ZW1zUmFuZ2UpO1xuICAgIGxldCBsYXN0SWROdW0gPSBhbGxJdGVtSWRzRGF0YS5sZW5ndGggPiAwXG4gICAgICAgID8gTWF0aC5tYXgoMCwgLi4uYWxsSXRlbUlkc0RhdGEubWFwKHJvdyA9PiBwYXJzZUludCgocm93WzBdIHx8ICdvaTAnKS5yZXBsYWNlKCdvaScsICcnKSwgMTApKS5maWx0ZXIobnVtID0+ICFpc05hTihudW0pKSlcbiAgICAgICAgOiAwO1xuXG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpO1xuICAgIGNvbnN0IG9yZGVyVmFsdWVzID0gW107XG5cbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2Ygb3JkZXIuaXRlbXMpIHtcbiAgICAgICAgbGFzdElkTnVtKys7IC8vIEluY3JlbWVudCBJRCBmb3IgZWFjaCBpdGVtIGluIHRoZSBsb29wXG4gICAgICAgIGNvbnN0IG5ld0lkID0gYG9pJHtsYXN0SWROdW0udG9TdHJpbmcoKS5wYWRTdGFydCgzLCAnMCcpfWA7XG4gICAgICAgIGNvbnN0IG9wdGlvbnNTdHJpbmcgPSBPYmplY3QuZW50cmllcyhpdGVtLm9wdGlvbnMpLm1hcCgoW2tleSwgdmFsdWVdKSA9PiBgJHtrZXl9OiR7dmFsdWV9YCkuam9pbignLCAnKTtcblxuICAgICAgICBvcmRlclZhbHVlcy5wdXNoKFtcbiAgICAgICAgICAgIG5ld0lkLFxuICAgICAgICAgICAgb3JkZXIuZGFpbHlPcmRlcklkLFxuICAgICAgICAgICAgbm93LFxuICAgICAgICAgICAgb3JkZXIudXNlcm5hbWUsXG4gICAgICAgICAgICBvcmRlci52ZW5kb3JJZCxcbiAgICAgICAgICAgIG9yZGVyLnZlbmRvck5hbWUsXG4gICAgICAgICAgICBpdGVtLm1lbnVJdGVtSWQsXG4gICAgICAgICAgICBpdGVtLm5hbWUsXG4gICAgICAgICAgICBpdGVtLnF1YW50aXR5LFxuICAgICAgICAgICAgaXRlbS5wcmljZSxcbiAgICAgICAgICAgIG9wdGlvbnNTdHJpbmcsXG4gICAgICAgICAgICBvcmRlci5ub3RlcyxcbiAgICAgICAgICAgICdGQUxTRScgLy8gaXNQYWlkXG4gICAgICAgIF0pO1xuICAgIH1cbiAgICBcbiAgICAvLyBFbnN1cmUgaGVhZGVycyBleGlzdFxuICAgIGNvbnN0IGhlYWRlcnMgPSBhd2FpdCBnZXRIZWFkZXJzKFNQUkVBRFNIRUVUX0lELCBPUkRFUl9JVEVNU19TSEVFVF9OQU1FKTtcbiAgICBpZiAoaGVhZGVycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgYXdhaXQgdXBkYXRlU2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCBgJHtPUkRFUl9JVEVNU19TSEVFVF9OQU1FfSFBMTpNMWAsIFtbJ2lkJywgJ2RhaWx5T3JkZXJJZCcsICd0aW1lc3RhbXAnLCAndXNlcm5hbWUnLCAndmVuZG9ySWQnLCAndmVuZG9yTmFtZScsICdtZW51SXRlbUlkJywgJ2l0ZW1OYW1lJywgJ3F1YW50aXR5JywgJ3ByaWNlJywgJ29wdGlvbnMnLCAnbm90ZXMnLCAnaXNQYWlkJ11dKTtcbiAgICB9XG5cbiAgICBpZiAob3JkZXJWYWx1ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBhd2FpdCBhcHBlbmRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGAke09SREVSX0lURU1TX1NIRUVUX05BTUV9IUE6TWAsIG9yZGVyVmFsdWVzKTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xufVxuXG5cbmV4cG9ydCB0eXBlIE9yZGVyRGV0YWlsSXRlbSA9IHtcbiAgICBpZDogc3RyaW5nO1xuICAgIGRhaWx5T3JkZXJJZDogc3RyaW5nO1xuICAgIHRpbWVzdGFtcDogc3RyaW5nO1xuICAgIHVzZXJuYW1lOiBzdHJpbmc7XG4gICAgdmVuZG9ySWQ6IHN0cmluZztcbiAgICB2ZW5kb3JOYW1lOiBzdHJpbmc7XG4gICAgbWVudUl0ZW1JZDogc3RyaW5nO1xuICAgIGl0ZW1OYW1lOiBzdHJpbmc7XG4gICAgcXVhbnRpdHk6IG51bWJlcjtcbiAgICBwcmljZTogbnVtYmVyO1xuICAgIG9wdGlvbnM6IHN0cmluZztcbiAgICBub3Rlczogc3RyaW5nO1xuICAgIGlzUGFpZDogYm9vbGVhbjtcbn07XG5cbi8qKlxuICogUmV0cmlldmVzIGFsbCBvcmRlciBpdGVtcyBmb3IgYSBzcGVjaWZpYyBkYWlseSBvcmRlci5cbiAqIEBwYXJhbSB7c3RyaW5nfSBkYWlseU9yZGVySWQgVGhlIElEIG9mIHRoZSBkYWlseSBvcmRlci5cbiAqIEByZXR1cm5zIHtQcm9taXNlPHtvcmRlckRldGFpbHM6IE9yZGVyRGV0YWlsSXRlbVtdLCBkYWlseU9yZGVyOiBEYWlseU9yZGVyIHwgbnVsbH0+fSBBbiBvYmplY3QgY29udGFpbmluZyB0aGUgbGlzdCBvZiBvcmRlciBpdGVtcyBhbmQgdGhlIGRhaWx5IG9yZGVyIGRldGFpbHMuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRPcmRlckRldGFpbHNCeURhaWx5T3JkZXJJZChkYWlseU9yZGVySWQ6IHN0cmluZyk6IFByb21pc2U8eyBvcmRlckRldGFpbHM6IE9yZGVyRGV0YWlsSXRlbVtdLCBkYWlseU9yZGVyOiBEYWlseU9yZGVyIHwgbnVsbCB9PiB7XG4gICAgLy8gMS4gR2V0IHRoZSBkYWlseSBvcmRlciBkZXRhaWxzXG4gICAgY29uc3QgYWxsRGFpbHlPcmRlcnMgPSBhd2FpdCBnZXRBbGxEYWlseU9yZGVycygpO1xuICAgIGNvbnN0IGRhaWx5T3JkZXIgPSBhbGxEYWlseU9yZGVycy5maW5kKG8gPT4gby5pZCA9PT0gZGFpbHlPcmRlcklkKTtcblxuICAgIGlmICghZGFpbHlPcmRlcikge1xuICAgICAgICByZXR1cm4geyBvcmRlckRldGFpbHM6IFtdLCBkYWlseU9yZGVyOiBudWxsIH07XG4gICAgfVxuXG4gICAgLy8gMi4gR2V0IGFsbCBvcmRlciBpdGVtc1xuICAgIGNvbnN0IG9yZGVySXRlbXNSYW5nZSA9IGAke09SREVSX0lURU1TX1NIRUVUX05BTUV9IUE6TWA7IC8vIEV4dGVuZGVkIHRvIGNvbHVtbiBNIGZvciBuZXcgZmllbGRzXG4gICAgY29uc3Qgb3JkZXJJdGVtc0RhdGEgPSBhd2FpdCBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIG9yZGVySXRlbXNSYW5nZSk7XG5cbiAgICBpZiAob3JkZXJJdGVtc0RhdGEubGVuZ3RoIDwgMikge1xuICAgICAgICByZXR1cm4geyBvcmRlckRldGFpbHM6IFtdLCBkYWlseU9yZGVyOiBkYWlseU9yZGVyIH07XG4gICAgfVxuXG4gICAgY29uc3QgaGVhZGVycyA9IG9yZGVySXRlbXNEYXRhWzBdLm1hcChoID0+IFN0cmluZyhoKS50cmltKCkpO1xuICAgIGNvbnN0IGhlYWRlck1hcCA9IGhlYWRlcnMucmVkdWNlKChhY2MsIGhlYWRlciwgaW5kZXgpID0+IHtcbiAgICAgICAgYWNjW2hlYWRlci50cmltKCldID0gaW5kZXg7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30gYXMgUmVjb3JkPHN0cmluZywgbnVtYmVyPik7XG5cbiAgICAvLyBDaGVjayBmb3IgcmVxdWlyZWQgY29sdW1uc1xuICAgIGNvbnN0IHJlcXVpcmVkQ29scyA9IFsnaWQnLCAnZGFpbHlPcmRlcklkJywgJ3RpbWVzdGFtcCcsICd1c2VybmFtZScsICd2ZW5kb3JJZCcsICd2ZW5kb3JOYW1lJywgJ21lbnVJdGVtSWQnLCAnaXRlbU5hbWUnLCAncXVhbnRpdHknLCAncHJpY2UnLCAnb3B0aW9ucycsICdub3RlcycsICdpc1BhaWQnXTtcbiAgICBmb3IgKGNvbnN0IGNvbCBvZiByZXF1aXJlZENvbHMpIHtcbiAgICAgICAgaWYgKGhlYWRlck1hcFtjb2xdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yOiBUaGUgJyR7T1JERVJfSVRFTVNfU0hFRVRfTkFNRX0nIHNoZWV0IGlzIG1pc3NpbmcgdGhlIHJlcXVpcmVkIGNvbHVtbjogJyR7Y29sfScuYCk7XG4gICAgICAgICAgICByZXR1cm4geyBvcmRlckRldGFpbHM6IFtdLCBkYWlseU9yZGVyOiBkYWlseU9yZGVyIH07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCByb3dzID0gb3JkZXJJdGVtc0RhdGEuc2xpY2UoMSk7XG5cbiAgICAvLyAzLiBGaWx0ZXIgaXRlbXMgdGhhdCBtYXRjaCB0aGUgZGFpbHlPcmRlcklkXG4gICAgY29uc3QgZmlsdGVyZWRJdGVtcyA9IHJvd3MuZmlsdGVyKHJvdyA9PiByb3dbaGVhZGVyTWFwWydkYWlseU9yZGVySWQnXV0gPT09IGRhaWx5T3JkZXJJZCk7XG5cbiAgICAvLyA0LiBNYXAgdG8gT3JkZXJEZXRhaWxJdGVtIG9iamVjdHNcbiAgICBjb25zdCBvcmRlckRldGFpbHM6IE9yZGVyRGV0YWlsSXRlbVtdID0gZmlsdGVyZWRJdGVtcy5tYXAocm93ID0+ICh7XG4gICAgICAgIGlkOiByb3dbaGVhZGVyTWFwWydpZCddXSB8fCAnJyxcbiAgICAgICAgZGFpbHlPcmRlcklkOiByb3dbaGVhZGVyTWFwWydkYWlseU9yZGVySWQnXV0gfHwgJycsXG4gICAgICAgIHRpbWVzdGFtcDogcm93W2hlYWRlck1hcFsndGltZXN0YW1wJ11dIHx8ICcnLFxuICAgICAgICB1c2VybmFtZTogcm93W2hlYWRlck1hcFsndXNlcm5hbWUnXV0gfHwgJ04vQScsXG4gICAgICAgIHZlbmRvcklkOiByb3dbaGVhZGVyTWFwWyd2ZW5kb3JJZCddXSB8fCAnJyxcbiAgICAgICAgdmVuZG9yTmFtZTogcm93W2hlYWRlck1hcFsndmVuZG9yTmFtZSddXSB8fCAnJyxcbiAgICAgICAgbWVudUl0ZW1JZDogcm93W2hlYWRlck1hcFsnbWVudUl0ZW1JZCddXSB8fCAnJyxcbiAgICAgICAgaXRlbU5hbWU6IHJvd1toZWFkZXJNYXBbJ2l0ZW1OYW1lJ11dIHx8ICdOL0EnLFxuICAgICAgICBxdWFudGl0eTogcGFyc2VJbnQocm93W2hlYWRlck1hcFsncXVhbnRpdHknXV0gfHwgJzAnLCAxMCksXG4gICAgICAgIHByaWNlOiBwYXJzZUludChyb3dbaGVhZGVyTWFwWydwcmljZSddXSB8fCAnMCcsIDEwKSxcbiAgICAgICAgb3B0aW9uczogcm93W2hlYWRlck1hcFsnb3B0aW9ucyddXSB8fCAnJyxcbiAgICAgICAgbm90ZXM6IHJvd1toZWFkZXJNYXBbJ25vdGVzJ11dIHx8ICcnLFxuICAgICAgICBpc1BhaWQ6IHJvd1toZWFkZXJNYXBbJ2lzUGFpZCddXSA9PT0gJ1RSVUUnIHx8IHJvd1toZWFkZXJNYXBbJ2lzUGFpZCddXSA9PT0gdHJ1ZSxcbiAgICB9KSk7XG5cbiAgICByZXR1cm4geyBvcmRlckRldGFpbHMsIGRhaWx5T3JkZXIgfTtcbn1cblxuZXhwb3J0IHR5cGUgVXNlck9yZGVyR3JvdXAgPSB7XG4gICAgZGFpbHlPcmRlcjogRGFpbHlPcmRlcjtcbiAgICBpdGVtczogT3JkZXJEZXRhaWxJdGVtW107XG4gICAgdG90YWw6IG51bWJlcjtcbiAgICBub3Rlczogc3RyaW5nO1xufVxuXG4vKipcbiAqIFJldHJpZXZlcyBhbGwgb3JkZXJzIGZvciBhIHNwZWNpZmljIHVzZXIsIGdyb3VwZWQgYnkgZGFpbHkgb3JkZXIuXG4gKiBAcGFyYW0ge3N0cmluZ30gdXNlcm5hbWUgVGhlIHVzZXJuYW1lIHRvIGZldGNoIG9yZGVycyBmb3IuXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxVc2VyT3JkZXJHcm91cFtdPn0gQSBsaXN0IG9mIHRoZSB1c2VyJ3Mgb3JkZXJzLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0T3JkZXJzQnlVc2VybmFtZSh1c2VybmFtZTogc3RyaW5nKTogUHJvbWlzZTxVc2VyT3JkZXJHcm91cFtdPiB7XG4gICAgLy8gMS4gR2V0IGFsbCBkYWlseSBvcmRlcnMgYW5kIGFsbCBvcmRlciBpdGVtc1xuICAgIGNvbnN0IFthbGxEYWlseU9yZGVycywgYWxsT3JkZXJJdGVtc0RhdGFdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICBnZXRBbGxEYWlseU9yZGVycygpLFxuICAgICAgICBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGAke09SREVSX0lURU1TX1NIRUVUX05BTUV9IUE6TWApXG4gICAgXSk7XG5cbiAgICBpZiAoYWxsT3JkZXJJdGVtc0RhdGEubGVuZ3RoIDwgMikge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgY29uc3QgaXRlbXNIZWFkZXJzID0gYWxsT3JkZXJJdGVtc0RhdGFbMF0ubWFwKGggPT4gU3RyaW5nKGgpLnRyaW0oKSk7XG4gICAgY29uc3QgaXRlbXNIZWFkZXJNYXAgPSBpdGVtc0hlYWRlcnMucmVkdWNlKChhY2MsIGhlYWRlciwgaW5kZXgpID0+IHtcbiAgICAgICAgYWNjW2hlYWRlci50cmltKCldID0gaW5kZXg7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30gYXMgUmVjb3JkPHN0cmluZywgbnVtYmVyPik7XG5cbiAgICAvLyBDaGVjayBmb3IgcmVxdWlyZWQgY29sdW1uc1xuICAgIGNvbnN0IHJlcXVpcmVkQ29scyA9IFsndXNlcm5hbWUnLCAnZGFpbHlPcmRlcklkJywgJ2lkJywgJ3RpbWVzdGFtcCcsICd2ZW5kb3JJZCcsICd2ZW5kb3JOYW1lJywgJ21lbnVJdGVtSWQnLCAnaXRlbU5hbWUnLCAncXVhbnRpdHknLCAncHJpY2UnLCAnb3B0aW9ucycsICdub3RlcycsICdpc1BhaWQnXTtcbiAgICBmb3IgKGNvbnN0IGNvbCBvZiByZXF1aXJlZENvbHMpIHtcbiAgICAgICAgaWYgKGl0ZW1zSGVhZGVyTWFwW2NvbF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3I6IFRoZSAnJHtPUkRFUl9JVEVNU19TSEVFVF9OQU1FfScgc2hlZXQgaXMgbWlzc2luZyB0aGUgcmVxdWlyZWQgY29sdW1uOiAnJHtjb2x9Jy5gKTtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIDIuIEZpbHRlciBpdGVtcyBmb3IgdGhlIHNwZWNpZmljIHVzZXJuYW1lXG4gICAgY29uc3QgdXNlckl0ZW1zUm93cyA9IGFsbE9yZGVySXRlbXNEYXRhLnNsaWNlKDEpLmZpbHRlcihyb3cgPT4gcm93W2l0ZW1zSGVhZGVyTWFwWyd1c2VybmFtZSddXSA9PT0gdXNlcm5hbWUpO1xuICAgIFxuICAgIGlmICh1c2VySXRlbXNSb3dzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgY29uc3QgdXNlckl0ZW1zOiBPcmRlckRldGFpbEl0ZW1bXSA9IHVzZXJJdGVtc1Jvd3MubWFwKHJvdyA9PiAoe1xuICAgICAgICBpZDogcm93W2l0ZW1zSGVhZGVyTWFwWydpZCddXSB8fCAnJyxcbiAgICAgICAgZGFpbHlPcmRlcklkOiByb3dbaXRlbXNIZWFkZXJNYXBbJ2RhaWx5T3JkZXJJZCddXSB8fCAnJyxcbiAgICAgICAgdGltZXN0YW1wOiByb3dbaXRlbXNIZWFkZXJNYXBbJ3RpbWVzdGFtcCddXSB8fCAnJyxcbiAgICAgICAgdXNlcm5hbWU6IHJvd1tpdGVtc0hlYWRlck1hcFsndXNlcm5hbWUnXV0gfHwgJ04vQScsXG4gICAgICAgIHZlbmRvcklkOiByb3dbaXRlbXNIZWFkZXJNYXBbJ3ZlbmRvcklkJ11dIHx8ICcnLFxuICAgICAgICB2ZW5kb3JOYW1lOiByb3dbaXRlbXNIZWFkZXJNYXBbJ3ZlbmRvck5hbWUnXV0gfHwgJycsXG4gICAgICAgIG1lbnVJdGVtSWQ6IHJvd1tpdGVtc0hlYWRlck1hcFsnbWVudUl0ZW1JZCddXSB8fCAnJyxcbiAgICAgICAgaXRlbU5hbWU6IHJvd1tpdGVtc0hlYWRlck1hcFsnaXRlbU5hbWUnXV0gfHwgJ04vQScsXG4gICAgICAgIHF1YW50aXR5OiBwYXJzZUludChyb3dbaXRlbXNIZWFkZXJNYXBbJ3F1YW50aXR5J11dIHx8ICcwJywgMTApLFxuICAgICAgICBwcmljZTogcGFyc2VJbnQocm93W2l0ZW1zSGVhZGVyTWFwWydwcmljZSddXSB8fCAnMCcsIDEwKSxcbiAgICAgICAgb3B0aW9uczogcm93W2l0ZW1zSGVhZGVyTWFwWydvcHRpb25zJ11dIHx8ICcnLFxuICAgICAgICBub3Rlczogcm93W2l0ZW1zSGVhZGVyTWFwWydub3RlcyddXSB8fCAnJyxcbiAgICAgICAgaXNQYWlkOiByb3dbaXRlbXNIZWFkZXJNYXBbJ2lzUGFpZCddXSA9PT0gJ1RSVUUnIHx8IHJvd1tpdGVtc0hlYWRlck1hcFsnaXNQYWlkJ11dID09PSB0cnVlLFxuICAgIH0pKTtcbiAgICBcbiAgICAvLyAzLiBHcm91cCBpdGVtcyBieSBkYWlseU9yZGVySWRcbiAgICBjb25zdCBncm91cGVkQnlEYWlseU9yZGVyID0gdXNlckl0ZW1zLnJlZHVjZSgoYWNjLCBpdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IGtleSA9IGl0ZW0uZGFpbHlPcmRlcklkO1xuICAgICAgICBpZiAoIWFjY1trZXldKSB7XG4gICAgICAgICAgICBhY2Nba2V5XSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIGFjY1trZXldLnB1c2goaXRlbSk7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30gYXMgUmVjb3JkPHN0cmluZywgT3JkZXJEZXRhaWxJdGVtW10+KTtcbiAgICBcbiAgICBcbiAgICAvLyA0LiBGb3JtYXQgdGhlIGZpbmFsIG91dHB1dFxuICAgIGNvbnN0IGFsbERhaWx5T3JkZXJzTWFwID0gbmV3IE1hcChhbGxEYWlseU9yZGVycy5tYXAobyA9PiBbby5pZCwgb10pKTtcbiAgICBjb25zdCByZXN1bHQ6IFVzZXJPcmRlckdyb3VwW10gPSBbXTtcblxuICAgIGZvciAoY29uc3QgZGFpbHlPcmRlcklkIGluIGdyb3VwZWRCeURhaWx5T3JkZXIpIHtcbiAgICAgICAgY29uc3QgZGFpbHlPcmRlciA9IGFsbERhaWx5T3JkZXJzTWFwLmdldChkYWlseU9yZGVySWQpO1xuICAgICAgICBpZiAoZGFpbHlPcmRlcikge1xuICAgICAgICAgICAgY29uc3QgaXRlbXMgPSBncm91cGVkQnlEYWlseU9yZGVyW2RhaWx5T3JkZXJJZF07XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAvLyBBZ2dyZWdhdGUgaXRlbXMgd2l0aCB0aGUgc2FtZSBtZW51SXRlbUlkIGFuZCBvcHRpb25zXG4gICAgICAgICAgICBjb25zdCBhZ2dyZWdhdGVkSXRlbXMgPSBpdGVtcy5yZWR1Y2UoKGFjYywgaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFnZ3JlZ2F0aW9uS2V5ID0gYCR7aXRlbS5tZW51SXRlbUlkfXwke2l0ZW0ub3B0aW9uc31gO1xuICAgICAgICAgICAgICAgIGlmIChhY2NbYWdncmVnYXRpb25LZXldKSB7XG4gICAgICAgICAgICAgICAgICAgIGFjY1thZ2dyZWdhdGlvbktleV0ucXVhbnRpdHkgKz0gaXRlbS5xdWFudGl0eTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBhY2NbYWdncmVnYXRpb25LZXldID0geyAuLi5pdGVtIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgICAgICB9LCB7fSBhcyBSZWNvcmQ8c3RyaW5nLCBPcmRlckRldGFpbEl0ZW0+KTtcblxuICAgICAgICAgICAgY29uc3QgZmluYWxJdGVtcyA9IE9iamVjdC52YWx1ZXMoYWdncmVnYXRlZEl0ZW1zKTtcbiAgICAgICAgICAgIGNvbnN0IHRvdGFsID0gZmluYWxJdGVtcy5yZWR1Y2UoKHN1bSwgaXRlbSkgPT4gc3VtICsgaXRlbS5wcmljZSAqIGl0ZW0ucXVhbnRpdHksIDApO1xuICAgICAgICAgICAgY29uc3Qgbm90ZXMgPSBpdGVtcy5sZW5ndGggPiAwID8gaXRlbXNbMF0ubm90ZXMgOiAnJzsgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBkYWlseU9yZGVyLFxuICAgICAgICAgICAgICAgIGl0ZW1zOiBmaW5hbEl0ZW1zLFxuICAgICAgICAgICAgICAgIHRvdGFsLFxuICAgICAgICAgICAgICAgIG5vdGVzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLy8gNS4gU29ydCB0aGUgZmluYWwgZ3JvdXBzIGJ5IGRhdGUsIG1vc3QgcmVjZW50IGZpcnN0XG4gICAgcmVzdWx0LnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgY29uc3QgZGF0ZUEgPSBuZXcgRGF0ZShgJHthLmRhaWx5T3JkZXIuZGF0ZX1UJHthLmRhaWx5T3JkZXIuZGVhZGxpbmV9YCk7XG4gICAgICAgIGNvbnN0IGRhdGVCID0gbmV3IERhdGUoYCR7Yi5kYWlseU9yZGVyLmRhdGV9VCR7Yi5kYWlseU9yZGVyLmRlYWRsaW5lfWApO1xuICAgICAgICByZXR1cm4gZGF0ZUIuZ2V0VGltZSgpIC0gZGF0ZUEuZ2V0VGltZSgpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBSZXRyaWV2ZXMgYSB1c2VyJ3Mgc3BlY2lmaWMgb3JkZXIgZm9yIGEgZ2l2ZW4gZGFpbHkgb3JkZXIsIGZvcm1hdHRlZCBmb3IgZWRpdGluZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSB1c2VybmFtZSBUaGUgdXNlcm5hbWUuXG4gKiBAcGFyYW0ge3N0cmluZ30gZGFpbHlPcmRlcklkIFRoZSBJRCBvZiB0aGUgZGFpbHkgb3JkZXIuXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxPcmRlckl0ZW1bXT59IEEgbGlzdCBvZiBvcmRlciBpdGVtcyByZWFkeSBmb3IgdGhlIGNhcnQuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRFeGlzdGluZ09yZGVyRm9yRWRpdCh1c2VybmFtZTogc3RyaW5nLCBkYWlseU9yZGVySWQ6IHN0cmluZyk6IFByb21pc2U8T3JkZXJJdGVtW10+IHtcbiAgY29uc3QgYWxsT3JkZXJJdGVtc0RhdGEgPSBhd2FpdCBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGAke09SREVSX0lURU1TX1NIRUVUX05BTUV9IUE6TWApO1xuICBpZiAoYWxsT3JkZXJJdGVtc0RhdGEubGVuZ3RoIDwgMikge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIGNvbnN0IGl0ZW1zSGVhZGVycyA9IGFsbE9yZGVySXRlbXNEYXRhWzBdLm1hcChoID0+IFN0cmluZyhoKS50cmltKCkpO1xuICBjb25zdCBpdGVtc0hlYWRlck1hcCA9IGl0ZW1zSGVhZGVycy5yZWR1Y2UoKGFjYywgaGVhZGVyLCBpbmRleCkgPT4ge1xuICAgIGFjY1toZWFkZXJdID0gaW5kZXg7XG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30gYXMgUmVjb3JkPHN0cmluZywgbnVtYmVyPik7XG5cbiAgY29uc3QgdXNlckl0ZW1zUm93cyA9IGFsbE9yZGVySXRlbXNEYXRhXG4gICAgLnNsaWNlKDEpXG4gICAgLmZpbHRlcihyb3cgPT4gcm93W2l0ZW1zSGVhZGVyTWFwWyd1c2VybmFtZSddXSA9PT0gdXNlcm5hbWUgJiYgcm93W2l0ZW1zSGVhZGVyTWFwWydkYWlseU9yZGVySWQnXV0gPT09IGRhaWx5T3JkZXJJZCk7XG5cbiAgaWYgKHVzZXJJdGVtc1Jvd3MubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIFxuICAvLyBIZWxwZXIgdG8gcmUtZ2VuZXJhdGUgdGhlIGNvbXBvc2l0ZSBpdGVtIElEIGZvciB0aGUgY2FydFxuICBjb25zdCBnZW5lcmF0ZU9yZGVySXRlbUlkID0gKGl0ZW1JZDogc3RyaW5nLCBvcHRpb25zOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+KSA9PiB7XG4gICAgaWYgKE9iamVjdC5rZXlzKG9wdGlvbnMpLmxlbmd0aCA9PT0gMCkgcmV0dXJuIGl0ZW1JZDtcbiAgICBjb25zdCBzb3J0ZWRTZWxlY3Rpb25zID0gT2JqZWN0LmtleXMob3B0aW9ucykuc29ydCgpLm1hcChrZXkgPT4gYCR7a2V5fToke29wdGlvbnNba2V5XX1gKS5qb2luKCd8Jyk7XG4gICAgcmV0dXJuIGAke2l0ZW1JZH1bJHtzb3J0ZWRTZWxlY3Rpb25zfV1gO1xuICB9XG5cbiAgLy8gSGVscGVyIHRvIHBhcnNlIHRoZSBvcHRpb25zIHN0cmluZyBiYWNrIGludG8gYW4gb2JqZWN0XG4gIGNvbnN0IHBhcnNlT3B0aW9uc1N0cmluZyA9IChvcHRpb25zU3RyOiBzdHJpbmcpOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0+IHtcbiAgICAgIGlmICghb3B0aW9uc1N0cikgcmV0dXJuIHt9O1xuICAgICAgcmV0dXJuIG9wdGlvbnNTdHIuc3BsaXQoJywnKS5yZWR1Y2UoKGFjYywgcGFpcikgPT4ge1xuICAgICAgICAgIGNvbnN0IFtrZXksIHZhbHVlXSA9IHBhaXIuc3BsaXQoJzonKTtcbiAgICAgICAgICBpZiAoa2V5ICYmIHZhbHVlKSB7XG4gICAgICAgICAgICAgIGFjY1trZXkudHJpbSgpXSA9IHZhbHVlLnRyaW0oKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH0sIHt9IGFzIFJlY29yZDxzdHJpbmcsIHN0cmluZz4pO1xuICB9XG5cbiAgY29uc3Qgb3JkZXJJdGVtczogT3JkZXJJdGVtW10gPSB1c2VySXRlbXNSb3dzLm1hcChyb3cgPT4ge1xuICAgIGNvbnN0IG9wdGlvbnMgPSBwYXJzZU9wdGlvbnNTdHJpbmcocm93W2l0ZW1zSGVhZGVyTWFwWydvcHRpb25zJ11dIHx8ICcnKTtcbiAgICBjb25zdCBtZW51SXRlbUlkID0gcm93W2l0ZW1zSGVhZGVyTWFwWydtZW51SXRlbUlkJ11dO1xuICAgIHJldHVybiB7XG4gICAgICBpZDogZ2VuZXJhdGVPcmRlckl0ZW1JZChtZW51SXRlbUlkLCBvcHRpb25zKSxcbiAgICAgIG1lbnVJdGVtSWQ6IG1lbnVJdGVtSWQsXG4gICAgICBuYW1lOiByb3dbaXRlbXNIZWFkZXJNYXBbJ2l0ZW1OYW1lJ11dIHx8ICcnLFxuICAgICAgcHJpY2U6IHBhcnNlSW50KHJvd1tpdGVtc0hlYWRlck1hcFsncHJpY2UnXV0gfHwgJzAnLCAxMCksXG4gICAgICBxdWFudGl0eTogcGFyc2VJbnQocm93W2l0ZW1zSGVhZGVyTWFwWydxdWFudGl0eSddXSB8fCAnMCcsIDEwKSxcbiAgICAgIHZlbmRvck5hbWU6IHJvd1tpdGVtc0hlYWRlck1hcFsndmVuZG9yTmFtZSddXSB8fCAnJyxcbiAgICAgIHZlbmRvcklkOiByb3dbaXRlbXNIZWFkZXJNYXBbJ3ZlbmRvcklkJ11dIHx8ICcnLFxuICAgICAgdXNlcm5hbWU6IHVzZXJuYW1lLFxuICAgICAgb3B0aW9uczogb3B0aW9ucyxcbiAgICAgIG5vdGVzOiByb3dbaXRlbXNIZWFkZXJNYXBbJ25vdGVzJ11dIHx8ICcnLFxuICAgIH07XG4gIH0pO1xuICBcbiAgcmV0dXJuIG9yZGVySXRlbXM7XG59XG5cblxuLyoqXG4gKiBEZWxldGVzIGEgdXNlcidzIGVudGlyZSBvcmRlciBmb3IgYSBzcGVjaWZpYyBkYWlseSBvcmRlci5cbiAqIEBwYXJhbSB7b2JqZWN0fSBwYXJhbXMgLSBUaGUgcGFyYW1ldGVycyBmb3IgZGVsZXRpbmcgdGhlIG9yZGVyLlxuICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtcy51c2VybmFtZSAtIFRoZSB1c2VybmFtZSBvZiB0aGUgdXNlci5cbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXMuZGFpbHlPcmRlcklkIC0gVGhlIElEIG9mIHRoZSBkYWlseSBvcmRlciB0byBkZWxldGUuXG4gKiBAcmV0dXJucyB7UHJvbWlzZTx7c3VjY2VzczogYm9vbGVhbn0+fSBBIHN1Y2Nlc3MgZmxhZy5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVVzZXJPcmRlcih7IHVzZXJuYW1lLCBkYWlseU9yZGVySWQgfTogeyB1c2VybmFtZTogc3RyaW5nLCBkYWlseU9yZGVySWQ6IHN0cmluZyB9KTogUHJvbWlzZTx7IHN1Y2Nlc3M6IGJvb2xlYW4gfT4ge1xuICAgIGNvbnN0IFtvcmRlckl0ZW1zRGF0YVdpdGhIZWFkZXJdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGAke09SREVSX0lURU1TX1NIRUVUX05BTUV9IUE6TWApLFxuICAgIF0pO1xuXG4gICAgaWYgKG9yZGVySXRlbXNEYXRhV2l0aEhlYWRlci5sZW5ndGggPCAyKSB7XG4gICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07IC8vIE5vIGl0ZW1zIHRvIGRlbGV0ZVxuICAgIH1cblxuICAgIGNvbnN0IGl0ZW1zSGVhZGVycyA9IG9yZGVySXRlbXNEYXRhV2l0aEhlYWRlclswXTtcbiAgICBjb25zdCBpdGVtc1Jvd3MgPSBvcmRlckl0ZW1zRGF0YVdpdGhIZWFkZXIuc2xpY2UoMSk7XG4gICAgXG4gICAgY29uc3QgaGVhZGVyTWFwID0gaXRlbXNIZWFkZXJzLnJlZHVjZSgoYWNjLCBoLCBpKSA9PiB7IGFjY1tTdHJpbmcoaCldID0gaTsgcmV0dXJuIGFjYzsgfSwge30gYXMgUmVjb3JkPHN0cmluZywgbnVtYmVyPik7XG4gICAgY29uc3QgZGFpbHlPcmRlcklkSW5kZXggPSBoZWFkZXJNYXBbJ2RhaWx5T3JkZXJJZCddO1xuICAgIGNvbnN0IHVzZXJuYW1lSW5kZXggPSBoZWFkZXJNYXBbJ3VzZXJuYW1lJ107XG5cbiAgICBpZiAoZGFpbHlPcmRlcklkSW5kZXggPT09IHVuZGVmaW5lZCB8fCB1c2VybmFtZUluZGV4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlICdvcmRlcl9pdGVtcycgc2hlZXQgaXMgbWlzc2luZyByZXF1aXJlZCBjb2x1bW5zICdkYWlseU9yZGVySWQnIG9yICd1c2VybmFtZScuXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IGl0ZW1zVG9LZWVwID0gaXRlbXNSb3dzLmZpbHRlcihyb3cgPT4gXG4gICAgICAgICEocm93W2RhaWx5T3JkZXJJZEluZGV4XSA9PT0gZGFpbHlPcmRlcklkICYmIHJvd1t1c2VybmFtZUluZGV4XSA9PT0gdXNlcm5hbWUpXG4gICAgKTtcbiAgICBcbiAgICBhd2FpdCBiYXRjaFVwZGF0ZVNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgW3tcbiAgICAgICAgcmFuZ2U6IGAke09SREVSX0lURU1TX1NIRUVUX05BTUV9IUExOk1gLFxuICAgICAgICB2YWx1ZXM6IFtpdGVtc0hlYWRlcnMsIC4uLml0ZW1zVG9LZWVwXSxcbiAgICB9XSk7XG5cbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Im1TQTJuQnNCIn0=
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/textarea.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Textarea": (()=>Textarea)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Textarea = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm', className),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/textarea.tsx",
        lineNumber: 8,
        columnNumber: 7
    }, this);
});
_c1 = Textarea;
Textarea.displayName = 'Textarea';
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Textarea$React.forwardRef");
__turbopack_context__.k.register(_c1, "Textarea");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/label.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Label": (()=>Label)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-label/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const labelVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
const Label = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(labelVariants(), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/label.tsx",
        lineNumber: 18,
        columnNumber: 3
    }, this));
_c1 = Label;
Label.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"].displayName;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Label$React.forwardRef");
__turbopack_context__.k.register(_c1, "Label");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/OrderSummary.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "OrderSummary": (()=>OrderSummary)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/separator.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/textarea.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MinusCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-minus.js [app-client] (ecmascript) <export default as MinusCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$notebook$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__NotebookPen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/notebook-pen.js [app-client] (ecmascript) <export default as NotebookPen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-plus.js [app-client] (ecmascript) <export default as PlusCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-cart.js [app-client] (ecmascript) <export default as ShoppingCart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/square-pen.js [app-client] (ecmascript) <export default as Edit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
function OrderSummary({ order, username, onUpdateQuantity, onSubmit, disabled = false, isEditing = false }) {
    _s();
    const [notes, setNotes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    // When the component receives an existing order for editing, update the notes field.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OrderSummary.useEffect": ()=>{
            if (isEditing && order.length > 0 && order[0].notes) {
                setNotes(order[0].notes);
            }
        }
    }["OrderSummary.useEffect"], [
        isEditing,
        order
    ]);
    const total = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OrderSummary.useMemo[total]": ()=>{
            return order.reduce({
                "OrderSummary.useMemo[total]": (sum, item)=>sum + item.price * item.quantity
            }["OrderSummary.useMemo[total]"], 0);
        }
    }["OrderSummary.useMemo[total]"], [
        order
    ]);
    const vendorName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OrderSummary.useMemo[vendorName]": ()=>{
            return order.length > 0 ? order[0].vendorName : "";
        }
    }["OrderSummary.useMemo[vendorName]"], [
        order
    ]);
    const vendorId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OrderSummary.useMemo[vendorId]": ()=>{
            return order.length > 0 ? order[0].vendorId : "";
        }
    }["OrderSummary.useMemo[vendorId]"], [
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("shadow-xl bg-background/80 backdrop-blur-sm transform transition-all duration-300 lg:-rotate-1 lg:hover:rotate-0", disabled && "bg-muted/80 lg:rotate-0"),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                className: "pb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    isEditing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__["Edit"], {
                                        className: "h-7 w-7 text-accent"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/OrderSummary.tsx",
                                        lineNumber: 84,
                                        columnNumber: 30
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$notebook$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__NotebookPen$3e$__["NotebookPen"], {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-7 w-7 text-accent", disabled && "text-muted-foreground")
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/OrderSummary.tsx",
                                        lineNumber: 84,
                                        columnNumber: 73
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
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
                            username && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                    vendorName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                children: order.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center justify-center text-center text-muted-foreground py-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"], {
                            className: "h-12 w-12 mb-4"
                        }, void 0, false, {
                            fileName: "[project]/src/components/OrderSummary.tsx",
                            lineNumber: 94,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-body",
                            children: "您的訂單是空的。"
                        }, void 0, false, {
                            fileName: "[project]/src/components/OrderSummary.tsx",
                            lineNumber: 95,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-h-60 overflow-y-auto pr-2 space-y-4",
                            children: order.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start justify-between font-body text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-medium",
                                                    children: item.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/OrderSummary.tsx",
                                                    lineNumber: 104,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-muted-foreground",
                                                    children: Object.entries(item.options).map(([key, value])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "ghost",
                                                    size: "icon",
                                                    className: "h-7 w-7",
                                                    onClick: ()=>onUpdateQuantity(item.id, item.quantity - 1),
                                                    "aria-label": `減少 ${item.name} 數量`,
                                                    disabled: disabled,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MinusCircle$3e$__["MinusCircle"], {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "w-6 text-center font-mono",
                                                    children: item.quantity
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/OrderSummary.tsx",
                                                    lineNumber: 116,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "ghost",
                                                    size: "icon",
                                                    className: "h-7 w-7",
                                                    onClick: ()=>onUpdateQuantity(item.id, item.quantity + 1),
                                                    "aria-label": `增加 ${item.name} 數量`,
                                                    disabled: disabled,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusCircle$3e$__["PlusCircle"], {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "ghost",
                                                    size: "icon",
                                                    className: "h-7 w-7 text-destructive/70 hover:text-destructive",
                                                    onClick: ()=>onUpdateQuantity(item.id, 0),
                                                    "aria-label": `移除 ${item.name}`,
                                                    disabled: disabled,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {}, void 0, false, {
                            fileName: "[project]/src/components/OrderSummary.tsx",
                            lineNumber: 127,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                    htmlFor: "order-notes",
                                    children: "訂單備註 (選填)"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/OrderSummary.tsx",
                                    lineNumber: 129,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {}, void 0, false, {
                            fileName: "[project]/src/components/OrderSummary.tsx",
                            lineNumber: 132,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between font-bold text-lg font-headline",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "總計"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/OrderSummary.tsx",
                                    lineNumber: 134,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardFooter"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
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
_s(OrderSummary, "FVZmL5ba+MQm0ueJbvnEaLYR/ng=");
_c = OrderSummary;
var _c;
__turbopack_context__.k.register(_c, "OrderSummary");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/select.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-select/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-client] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const Select = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"];
const SelectGroup = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"];
const SelectValue = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Value"];
const SelectTrigger = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
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
_c1 = SelectTrigger;
SelectTrigger.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"].displayName;
const SelectScrollUpButton = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollUpButton"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex cursor-default items-center justify-center py-1", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
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
_c2 = SelectScrollUpButton;
SelectScrollUpButton.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollUpButton"].displayName;
const SelectScrollDownButton = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollDownButton"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex cursor-default items-center justify-center py-1", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
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
_c3 = SelectScrollDownButton;
SelectScrollDownButton.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollDownButton"].displayName;
const SelectContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c4 = ({ className, children, position = "popper", ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
            ref: ref,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
            position: position,
            ...props,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollUpButton, {}, void 0, false, {
                    fileName: "[project]/src/components/ui/select.tsx",
                    lineNumber: 86,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Viewport"], {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
                    children: children
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/select.tsx",
                    lineNumber: 87,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollDownButton, {}, void 0, false, {
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
_c5 = SelectContent;
SelectContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"].displayName;
const SelectLabel = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c6 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("py-1.5 pl-8 pr-2 text-sm font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 106,
        columnNumber: 3
    }, this));
_c7 = SelectLabel;
SelectLabel.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"].displayName;
const SelectItem = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c8 = ({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemText"], {
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
_c9 = SelectItem;
SelectItem.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"].displayName;
const SelectSeparator = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c10 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("-mx-1 my-1 h-px bg-muted", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 141,
        columnNumber: 3
    }, this));
_c11 = SelectSeparator;
SelectSeparator.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"].displayName;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
__turbopack_context__.k.register(_c, "SelectTrigger$React.forwardRef");
__turbopack_context__.k.register(_c1, "SelectTrigger");
__turbopack_context__.k.register(_c2, "SelectScrollUpButton");
__turbopack_context__.k.register(_c3, "SelectScrollDownButton");
__turbopack_context__.k.register(_c4, "SelectContent$React.forwardRef");
__turbopack_context__.k.register(_c5, "SelectContent");
__turbopack_context__.k.register(_c6, "SelectLabel$React.forwardRef");
__turbopack_context__.k.register(_c7, "SelectLabel");
__turbopack_context__.k.register(_c8, "SelectItem$React.forwardRef");
__turbopack_context__.k.register(_c9, "SelectItem");
__turbopack_context__.k.register(_c10, "SelectSeparator$React.forwardRef");
__turbopack_context__.k.register(_c11, "SelectSeparator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/ai/flows/data:5563d8 [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"60d3c7fd04147818c0059b0825992570c612535cab":"submitOrder"},"src/ai/flows/order-flow.ts",""] */ __turbopack_context__.s({
    "submitOrder": (()=>submitOrder)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var submitOrder = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("60d3c7fd04147818c0059b0825992570c612535cab", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "submitOrder"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vb3JkZXItZmxvdy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbid1c2Ugc2VydmVyJztcblxuaW1wb3J0IHsgZ2V0U2hlZXREYXRhLCBhcHBlbmRTaGVldERhdGEsIGdldEhlYWRlcnMsIHVwZGF0ZVNoZWV0RGF0YSwgYmF0Y2hVcGRhdGVTaGVldERhdGEgfSBmcm9tICdAL3NlcnZpY2VzL3NoZWV0LXNlcnZpY2UnO1xuaW1wb3J0IHsgZ2V0VmVuZG9ycywgdHlwZSBWZW5kb3IgfSBmcm9tICcuL3ZlbmRvci1mbG93JztcbmltcG9ydCB7IHR5cGUgRmluYWxPcmRlciwgdHlwZSBPcmRlckl0ZW0gfSBmcm9tICdAL2NvbXBvbmVudHMvT3JkZXJTdW1tYXJ5JztcbmltcG9ydCB7IFB1Ymxpc2hPcmRlclJlcXVlc3RTY2hlbWEsIHR5cGUgUHVibGlzaE9yZGVyUmVxdWVzdCB9IGZyb20gJ0AvbGliL3NjaGVtYS9vcmRlcic7XG5pbXBvcnQgeyBmb3JtYXQsIHBhcnNlLCBwYXJzZUlTTywgaXNWYWxpZCB9IGZyb20gJ2RhdGUtZm5zJztcblxuY29uc3QgU1BSRUFEU0hFRVRfSUQgPSAnMVpqMmgwY1lscmIybUJhTmdsMS1Qb09LN3RsQ0N3RGNjQVhuNXc2NmhwNGMnO1xuY29uc3QgREFJTFlfT1JERVJTX1NIRUVUX05BTUUgPSAnZGFpbHlfb3JkZXJzJztcbmNvbnN0IE9SREVSX0lURU1TX1NIRUVUX05BTUUgPSAnb3JkZXJfaXRlbXMnO1xuXG5leHBvcnQgdHlwZSBEYWlseU9yZGVyID0ge1xuICAgIGlkOiBzdHJpbmc7XG4gICAgZGF0ZTogc3RyaW5nO1xuICAgIHZlbmRvcklkOiBzdHJpbmc7XG4gICAgdmVuZG9yTmFtZT86IHN0cmluZzsgLy8gT3B0aW9uYWw6IGZvciBkaXNwbGF5IG9uIGFkbWluIHBhZ2VcbiAgICBkZWFkbGluZTogc3RyaW5nO1xufTtcblxuLy8gVGhpcyB0eXBlIGlzIGZvciB0aGUgdXNlci1mYWNpbmcgb3JkZXIgcGFnZVxuZXhwb3J0IHR5cGUgQXZhaWxhYmxlT3JkZXIgPSB7XG4gICAgaWQ6IHN0cmluZzsgLy8gZGFpbHlPcmRlcklkXG4gICAgdmVuZG9yOiBWZW5kb3I7XG4gICAgZGF0ZTogc3RyaW5nO1xuICAgIGRlYWRsaW5lOiBzdHJpbmc7XG59O1xuXG4vLyBIZWxwZXIgZnVuY3Rpb24gdG8gZm9ybWF0IHRpbWUgZnJvbSBTaGVldHMgKHdoaWNoIGNhbiBiZSBhIG51bWJlcilcbmNvbnN0IGZvcm1hdFRpbWUgPSAodGltZVZhbHVlOiBhbnkpOiBzdHJpbmcgPT4ge1xuICAgIGlmICh0eXBlb2YgdGltZVZhbHVlID09PSAnc3RyaW5nJyAmJiB0aW1lVmFsdWUubWF0Y2goL15cXGR7Mn06XFxkezJ9KDpcXGR7Mn0pPyQvKSkge1xuICAgICAgICByZXR1cm4gdGltZVZhbHVlLnN1YnN0cmluZygwLCA1KTtcbiAgICB9XG4gICAgXG4gICAgaWYgKHR5cGVvZiB0aW1lVmFsdWUgPT09ICdudW1iZXInICYmIHRpbWVWYWx1ZSA+IDAgJiYgdGltZVZhbHVlIDwgMSkge1xuICAgICAgLy8gSXQncyBhIHRpbWUgc2VyaWFsIG51bWJlciBmcm9tIFNoZWV0c1xuICAgICAgY29uc3QgdG90YWxTZWNvbmRzID0gTWF0aC5yb3VuZCh0aW1lVmFsdWUgKiA4NjQwMCk7XG4gICAgICBjb25zdCBob3VycyA9IE1hdGguZmxvb3IodG90YWxTZWNvbmRzIC8gMzYwMCk7XG4gICAgICBjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcigodG90YWxTZWNvbmRzICUgMzYwMCkgLyA2MCk7XG4gICAgICByZXR1cm4gYCR7aG91cnMudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpfToke21pbnV0ZXMudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpfWA7XG4gICAgfVxuXG4gICAgLy8gVHJ5IHBhcnNpbmcgYXMgYSBkYXRlIHN0cmluZyB0byBleHRyYWN0IHRpbWVcbiAgICBpZiAodHlwZW9mIHRpbWVWYWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGUgPSBwYXJzZUlTTyh0aW1lVmFsdWUpO1xuICAgICAgICAgICAgaWYgKGlzVmFsaWQoZGF0ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZm9ybWF0KGRhdGUsICdISDptbScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAvLyBJZ25vcmUgcGFyc2UgZXJyb3JzIGZyb20gSVNPXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHRpbWVNYXRjaCA9IHRpbWVWYWx1ZS5tYXRjaCgvKFxcZHsyfTpcXGR7Mn0pLyk7XG4gICAgICAgIGlmICh0aW1lTWF0Y2gpIHJldHVybiB0aW1lTWF0Y2hbMF07XG4gICAgfVxuICAgIFxuICAgIC8vIEZhbGxiYWNrIGZvciB1bmV4cGVjdGVkIGZvcm1hdHNcbiAgICByZXR1cm4gJzAwOjAwJzsgXG59O1xuXG4vLyBIZWxwZXIgZnVuY3Rpb24gdG8gZm9ybWF0IGRhdGUgZnJvbSBTaGVldHMgKHdoaWNoIGNhbiBiZSBhIG51bWJlciBvciBzdHJpbmcpXG5jb25zdCBmb3JtYXREYXRlID0gKGRhdGVWYWx1ZTogYW55KTogc3RyaW5nID0+IHtcbiAgICBpZiAoIWRhdGVWYWx1ZSkgcmV0dXJuIGZvcm1hdChuZXcgRGF0ZSgpLCAneXl5eS1NTS1kZCcpOyAvLyBSZXR1cm4gdG9kYXkncyBkYXRlIGlmIGVtcHR5XG5cbiAgICBsZXQgZGF0ZTtcbiAgICBcbiAgICAvLyBIYW5kbGUgU2hlZXRzIGRhdGUgc2VyaWFsIG51bWJlciAobnVtYmVyIG9mIGRheXMgc2luY2UgMTg5OS0xMi0zMClcbiAgICBpZiAodHlwZW9mIGRhdGVWYWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgY29uc3QgZXhjZWxFcG9jaCA9IG5ldyBEYXRlKERhdGUuVVRDKDE4OTksIDExLCAzMCkpO1xuICAgICAgICBkYXRlID0gbmV3IERhdGUoZXhjZWxFcG9jaC5nZXRUaW1lKCkgKyBkYXRlVmFsdWUgKiA4NjQwMDAwMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gSGFuZGxlIElTTyBzdHJpbmcgbGlrZSAnMjAyNC0wNy0yNVQwMDowMDowMC4wMDBaJyBvciBzaW1wbGUgc3RyaW5nICcyMDI0LTA3LTI1J1xuICAgICAgICB0cnkge1xuICAgICAgICAgICBkYXRlID0gcGFyc2VJU08oU3RyaW5nKGRhdGVWYWx1ZSkpO1xuICAgICAgICAgICAvLyBJZiBJU08gcGFyc2luZyBmYWlscywgdHJ5IHRoZSBzaW1wbGUgZm9ybWF0XG4gICAgICAgICAgIGlmICghaXNWYWxpZChkYXRlKSkge1xuICAgICAgICAgICAgICAgZGF0ZSA9IHBhcnNlKFN0cmluZyhkYXRlVmFsdWUpLCAneXl5eS1NTS1kZCcsIG5ldyBEYXRlKCkpO1xuICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICAgICBkYXRlID0gcGFyc2UoU3RyaW5nKGRhdGVWYWx1ZSksICd5eXl5LU1NLWRkJywgbmV3IERhdGUoKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLy8gSWYgZGF0ZSBpcyB2YWxpZCwgZm9ybWF0IGl0LCBvdGhlcndpc2UgcmV0dXJuIHRvZGF5J3MgZGF0ZSBhcyBhIGZhbGxiYWNrXG4gICAgcmV0dXJuIGlzVmFsaWQoZGF0ZSkgPyBmb3JtYXQoZGF0ZSwgJ3l5eXktTU0tZGQnKSA6IGZvcm1hdChuZXcgRGF0ZSgpLCAneXl5eS1NTS1kZCcpO1xufTtcblxuXG4vKipcbiAqIFJldHJpZXZlcyBhbGwgYXZhaWxhYmxlIG9yZGVycyBmcm9tIHRoZSBkYWlseV9vcmRlcnMgc2hlZXQuXG4gKiBBbnkgb3JkZXIgcHJlc2VudCBpcyBjb25zaWRlcmVkIGF2YWlsYWJsZS5cbiAqIEByZXR1cm5zIHtQcm9taXNlPEF2YWlsYWJsZU9yZGVyW10+fSBBIGxpc3Qgb2YgYXZhaWxhYmxlIHZlbmRvcnMgYW5kIHRoZWlyIGRlYWRsaW5lcy5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEF2YWlsYWJsZU9yZGVycygpOiBQcm9taXNlPEF2YWlsYWJsZU9yZGVyW10+IHtcbiAgICBjb25zdCBkYWlseU9yZGVyc1JhbmdlID0gYCR7REFJTFlfT1JERVJTX1NIRUVUX05BTUV9IUE6RGA7XG4gICAgY29uc3QgW2RhaWx5T3JkZXJzRGF0YSwgYWxsVmVuZG9yc10gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgIGdldFNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgZGFpbHlPcmRlcnNSYW5nZSksXG4gICAgICAgIGdldFZlbmRvcnMoKVxuICAgIF0pO1xuXG4gICAgaWYgKCFkYWlseU9yZGVyc0RhdGEgfHwgZGFpbHlPcmRlcnNEYXRhLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBoZWFkZXIgPSBkYWlseU9yZGVyc0RhdGFbMF07XG4gICAgY29uc3Qgcm93cyA9IGRhaWx5T3JkZXJzRGF0YS5zbGljZSgxKTtcblxuICAgIGNvbnN0IGhlYWRlck1hcCA9IGhlYWRlci5yZWR1Y2UoKGFjYywgaCwgaSkgPT4ge1xuICAgICAgICBhY2NbU3RyaW5nKGgpXSA9IGk7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30gYXMgUmVjb3JkPHN0cmluZywgbnVtYmVyPik7XG5cbiAgICBjb25zdCBhbGxWZW5kb3JzTWFwID0gbmV3IE1hcChhbGxWZW5kb3JzLm1hcCh2ID0+IFt2LnZlbmRvcklkLCB2XSkpO1xuXG4gICAgY29uc3QgYXZhaWxhYmxlT3JkZXJzOiBBdmFpbGFibGVPcmRlcltdID0gW107XG5cbiAgICBmb3IgKGNvbnN0IHJvdyBvZiByb3dzKSB7XG4gICAgICAgIGlmIChyb3cuZXZlcnkoY2VsbCA9PiAhY2VsbCkpIGNvbnRpbnVlOyAvLyBTa2lwIGNvbXBsZXRlbHkgZW1wdHkgcm93c1xuXG4gICAgICAgIGNvbnN0IGlkID0gcm93W2hlYWRlck1hcFsnaWQnXV07XG4gICAgICAgIGNvbnN0IHZlbmRvcklkID0gcm93W2hlYWRlck1hcFsndmVuZG9ySWQnXV07XG4gICAgICAgIGNvbnN0IGRhdGVSYXcgPSByb3dbaGVhZGVyTWFwWydkYXRlJ11dO1xuICAgICAgICBjb25zdCBkZWFkbGluZVJhdyA9IHJvd1toZWFkZXJNYXBbJ2RlYWRsaW5lJ11dO1xuXG4gICAgICAgIGlmICghaWQgfHwgIXZlbmRvcklkKSBjb250aW51ZTsgLy8gU2tpcCByb3dzIHdpdGhvdXQgZXNzZW50aWFsIGRhdGFcblxuICAgICAgICBjb25zdCB2ZW5kb3IgPSBhbGxWZW5kb3JzTWFwLmdldCh2ZW5kb3JJZCk7XG4gICAgICAgIGlmICghdmVuZG9yIHx8ICF2ZW5kb3IuaXNBY3RpdmUpIGNvbnRpbnVlO1xuXG4gICAgICAgIGF2YWlsYWJsZU9yZGVycy5wdXNoKHtcbiAgICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICAgIHZlbmRvcixcbiAgICAgICAgICAgIGRhdGU6IGZvcm1hdERhdGUoZGF0ZVJhdyksXG4gICAgICAgICAgICBkZWFkbGluZTogZm9ybWF0VGltZShkZWFkbGluZVJhdykgLy8gRm9ybWF0IHRoZSBkZWFkbGluZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXZhaWxhYmxlT3JkZXJzO1xufVxuXG4vKipcbiAqIFJldHJpZXZlcyBhbGwgZGFpbHkgb3JkZXJzIGZvciBhZG1pbiBkaXNwbGF5LlxuICogQHJldHVybnMge1Byb21pc2U8RGFpbHlPcmRlcltdPn0gQSBsaXN0IG9mIGFsbCBwdWJsaXNoZWQgb3JkZXJzLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWxsRGFpbHlPcmRlcnMoKTogUHJvbWlzZTxEYWlseU9yZGVyW10+IHtcbiAgICBjb25zdCBkYWlseU9yZGVyc1JhbmdlID0gYCR7REFJTFlfT1JERVJTX1NIRUVUX05BTUV9IUE6RGA7XG4gICAgIGNvbnN0IFtkYWlseU9yZGVyc0RhdGEsIGFsbFZlbmRvcnNdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGRhaWx5T3JkZXJzUmFuZ2UpLFxuICAgICAgICBnZXRWZW5kb3JzKClcbiAgICBdKTtcbiAgICBcbiAgICBpZiAoIWRhaWx5T3JkZXJzRGF0YSB8fCBkYWlseU9yZGVyc0RhdGEubGVuZ3RoIDwgMikge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgY29uc3QgaGVhZGVyID0gZGFpbHlPcmRlcnNEYXRhWzBdO1xuICAgIGNvbnN0IHJvd3MgPSBkYWlseU9yZGVyc0RhdGEuc2xpY2UoMSk7XG4gICAgY29uc3QgYWxsVmVuZG9yc01hcCA9IG5ldyBNYXAoYWxsVmVuZG9ycy5tYXAodiA9PiBbdi52ZW5kb3JJZCwgdl0pKTtcbiAgICBcbiAgICBjb25zdCBoZWFkZXJNYXAgPSBoZWFkZXIucmVkdWNlKChhY2MsIGgsIGkpID0+IHtcbiAgICAgICAgYWNjW1N0cmluZyhoKV0gPSBpO1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgIH0sIHt9IGFzIFJlY29yZDxzdHJpbmcsIG51bWJlcj4pO1xuXG4gICAgY29uc3Qgb3JkZXJzID0gcm93cy5tYXAocm93ID0+IHtcbiAgICAgICAgY29uc3QgdmVuZG9ySWQgPSByb3dbaGVhZGVyTWFwWyd2ZW5kb3JJZCddXTtcbiAgICAgICAgY29uc3QgdmVuZG9yID0gYWxsVmVuZG9yc01hcC5nZXQodmVuZG9ySWQpO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlkOiByb3dbaGVhZGVyTWFwWydpZCddXSB8fCAnJyxcbiAgICAgICAgICAgIGRhdGU6IGZvcm1hdERhdGUocm93W2hlYWRlck1hcFsnZGF0ZSddXSksXG4gICAgICAgICAgICB2ZW5kb3JJZDogdmVuZG9ySWQgfHwgJycsXG4gICAgICAgICAgICB2ZW5kb3JOYW1lOiB2ZW5kb3IgPyB2ZW5kb3IudmVuZG9yTmFtZSA6ICfmnKrnn6XlupflrrYnLFxuICAgICAgICAgICAgZGVhZGxpbmU6IGZvcm1hdFRpbWUocm93W2hlYWRlck1hcFsnZGVhZGxpbmUnXV0pXG4gICAgICAgIH07XG4gICAgfSkuZmlsdGVyKG9yZGVyID0+IG9yZGVyLmlkKTsgLy8gRmlsdGVyIG91dCBhbnkgZW1wdHkgcm93c1xuXG4gICAgLy8gU29ydCBvcmRlcnMgYnkgZGF0ZSBhbmQgdGhlbiBieSBkZWFkbGluZSwgYXNjZW5kaW5nIChjbG9zZXN0IGZpcnN0KVxuICAgIG9yZGVycy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGVBID0gbmV3IERhdGUoYCR7YS5kYXRlfVQke2EuZGVhZGxpbmV9YCk7XG4gICAgICAgIGNvbnN0IGRhdGVCID0gbmV3IERhdGUoYCR7Yi5kYXRlfVQke2IuZGVhZGxpbmV9YCk7XG4gICAgICAgIHJldHVybiBkYXRlQS5nZXRUaW1lKCkgLSBkYXRlQi5nZXRUaW1lKCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gb3JkZXJzO1xufVxuXG5cbi8qKlxuICogUHVibGlzaGVzIGEgbmV3IG9yZGVyIGZvciBhIHNwZWNpZmljIGRhdGUsIHZlbmRvciBhbmQgZGVhZGxpbmUuXG4gKiBAcGFyYW0ge1B1Ymxpc2hPcmRlclJlcXVlc3R9IHJlcSAtIFRoZSByZXF1ZXN0IGNvbnRhaW5pbmcgZGF0ZSwgdmVuZG9ySWQgYW5kIGRlYWRsaW5lLlxuICogQHJldHVybnMge1Byb21pc2U8e3N1Y2Nlc3M6IGJvb2xlYW59Pn0gQSBzdWNjZXNzIGZsYWcuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwdWJsaXNoT3JkZXIocmVxOiBQdWJsaXNoT3JkZXJSZXF1ZXN0KTogUHJvbWlzZTx7IHN1Y2Nlc3M6IGJvb2xlYW4gfT4ge1xuICBjb25zdCB2YWxpZGF0aW9uID0gUHVibGlzaE9yZGVyUmVxdWVzdFNjaGVtYS5zYWZlUGFyc2UocmVxKTtcbiAgaWYgKCF2YWxpZGF0aW9uLnN1Y2Nlc3MpIHtcbiAgICBjb25zdCBlcnJvck1zZyA9IHZhbGlkYXRpb24uZXJyb3IuZXJyb3JzLm1hcChlID0+IGAke2UucGF0aC5qb2luKCcuJyl9OiAke2UubWVzc2FnZX1gKS5qb2luKCcsICcpO1xuICAgIHRocm93IG5ldyBFcnJvcihg6Ly45YWl6LOH5paZ5pyJ6KqkOiAke2Vycm9yTXNnfWApO1xuICB9XG5cbiAgY29uc3QgYWxsT3JkZXJzUmFuZ2UgPSBgJHtEQUlMWV9PUkRFUlNfU0hFRVRfTkFNRX0hQTI6QWA7XG4gIGNvbnN0IGFsbE9yZGVySWRzRGF0YSA9IGF3YWl0IGdldFNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgYWxsT3JkZXJzUmFuZ2UpO1xuICAgIGNvbnN0IGxhc3RJZE51bSA9IGFsbE9yZGVySWRzRGF0YS5sZW5ndGggPiAwIFxuICAgICAgICA/IE1hdGgubWF4KDAsIC4uLmFsbE9yZGVySWRzRGF0YS5tYXAocm93ID0+IHBhcnNlSW50KChyb3dbMF0gfHwgJ2RvMCcpLnJlcGxhY2UoJ2RvJywgJycpLCAxMCkpLmZpbHRlcihudW0gPT4gIWlzTmFOKG51bSkpKVxuICAgICAgICA6IDA7XG4gIGNvbnN0IG5ld0lkID0gYGRvJHsobGFzdElkTnVtICsgMSkudG9TdHJpbmcoKS5wYWRTdGFydCgzLCAnMCcpfWA7XG5cbiAgY29uc3QgdmFsdWVzID0gW1xuICAgIFtuZXdJZCwgcmVxLmRhdGUsIHJlcS52ZW5kb3JJZCwgcmVxLmRlYWRsaW5lXVxuICBdO1xuICBcbiAgLy8gRW5zdXJlIGhlYWRlcnMgZXhpc3RcbiAgY29uc3QgaGVhZGVycyA9IGF3YWl0IGdldEhlYWRlcnMoU1BSRUFEU0hFRVRfSUQsIERBSUxZX09SREVSU19TSEVFVF9OQU1FKTtcbiAgaWYgKGhlYWRlcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICBhd2FpdCB1cGRhdGVTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGAke0RBSUxZX09SREVSU19TSEVFVF9OQU1FfSFBMTpEMWAsIFtbJ2lkJywgJ2RhdGUnLCAndmVuZG9ySWQnLCAnZGVhZGxpbmUnXV0pO1xuICB9XG5cbiAgYXdhaXQgYXBwZW5kU2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCBgJHtEQUlMWV9PUkRFUlNfU0hFRVRfTkFNRX0hQTpEYCwgdmFsdWVzKTtcbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xufVxuXG5leHBvcnQgdHlwZSBVcGRhdGVEYWlseU9yZGVyUmVxdWVzdCA9IHtcbiAgICBvcmRlcklkOiBzdHJpbmc7XG4gICAgdmVuZG9ySWQ6IHN0cmluZztcbiAgICBkYXRlOiBzdHJpbmc7XG4gICAgZGVhZGxpbmU6IHN0cmluZztcbn1cblxuLyoqXG4gKiBVcGRhdGVzIGFuIGV4aXN0aW5nIGRhaWx5IG9yZGVyJ3MgZGF0ZSBhbmQgZGVhZGxpbmUuXG4gKiBAcGFyYW0ge1VwZGF0ZURhaWx5T3JkZXJSZXF1ZXN0fSByZXEgLSBUaGUgcmVxdWVzdCBjb250YWluaW5nIG9yZGVySWQsIGRhdGUgYW5kIGRlYWRsaW5lLlxuICogQHJldHVybnMge1Byb21pc2U8e3N1Y2Nlc3M6IGJvb2xlYW59Pn0gQSBzdWNjZXNzIGZsYWcuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVEYWlseU9yZGVyKHJlcTogVXBkYXRlRGFpbHlPcmRlclJlcXVlc3QpOiBQcm9taXNlPHsgc3VjY2VzczogYm9vbGVhbiB9PiB7XG4gICAgY29uc3QgeyBvcmRlcklkLCB2ZW5kb3JJZCwgZGF0ZSwgZGVhZGxpbmUgfSA9IHJlcTtcbiAgICBcbiAgICAvLyAxLiBGaW5kIHRoZSByb3cgb2YgdGhlIG9yZGVyIHRvIHVwZGF0ZVxuICAgIGNvbnN0IGFsbE9yZGVyc0RhdGEgPSBhd2FpdCBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGAke0RBSUxZX09SREVSU19TSEVFVF9OQU1FfSFBOkFgKTtcbiAgICBjb25zdCByb3dJbmRleCA9IGFsbE9yZGVyc0RhdGEuZmluZEluZGV4KHJvdyA9PiByb3dbMF0gPT09IG9yZGVySWQpO1xuICAgIFxuICAgIGlmIChyb3dJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGDmib7kuI3liLAgSUQg54K6ICR7b3JkZXJJZH0g55qE6KiC5Zau44CCYCk7XG4gICAgfVxuXG4gICAgLy8gKzEgYmVjYXVzZSBzaGVldCByb3dzIGFyZSAxLWJhc2VkLlxuICAgIGNvbnN0IHJvd1RvVXBkYXRlID0gcm93SW5kZXggKyAxO1xuICAgIFxuICAgIC8vIFdlIHVwZGF0ZSBkYXRlIGFuZCBkZWFkbGluZS4gVmVuZG9ySWQgaXMgbm90IGNoYW5nZWQuXG4gICAgLy8gVGhlIHJhbmdlIHNob3VsZCBiZSBCeDpEeCB0byB1cGRhdGUgZGF0ZSBhbmQgZGVhZGxpbmUuXG4gICAgY29uc3QgdXBkYXRlUmFuZ2UgPSBgJHtEQUlMWV9PUkRFUlNfU0hFRVRfTkFNRX0hQiR7cm93VG9VcGRhdGV9OkQke3Jvd1RvVXBkYXRlfWA7XG4gICAgYXdhaXQgdXBkYXRlU2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCB1cGRhdGVSYW5nZSwgW1tkYXRlLCB2ZW5kb3JJZCwgZGVhZGxpbmVdXSk7XG5cbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG59XG5cblxuLyoqXG4gKiBEZWxldGVzIGEgcHVibGlzaGVkIGRhaWx5IG9yZGVyIGFuZCBpdHMgYXNzb2NpYXRlZCBvcmRlciBpdGVtcy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBkYWlseU9yZGVySWQgVGhlIElEIG9mIHRoZSBkYWlseSBvcmRlciB0byBkZWxldGUuXG4gKiBAcmV0dXJucyB7UHJvbWlzZTx7c3VjY2VzczogYm9vbGVhbn0+fSBBIHN1Y2Nlc3MgZmxhZy5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZURhaWx5T3JkZXIoZGFpbHlPcmRlcklkOiBzdHJpbmcpOiBQcm9taXNlPHsgc3VjY2VzczogYm9vbGVhbiB9PiB7XG4gIC8vIDEuIEdldCBhbGwgZGF0YSBmcm9tIGJvdGggc2hlZXRzXG4gIGNvbnN0IFtkYWlseU9yZGVyc0RhdGFXaXRoSGVhZGVyLCBvcmRlckl0ZW1zRGF0YVdpdGhIZWFkZXJdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgIGdldFNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgYCR7REFJTFlfT1JERVJTX1NIRUVUX05BTUV9IUE6RGApLFxuICAgIGdldFNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgYCR7T1JERVJfSVRFTVNfU0hFRVRfTkFNRX0hQTpNYCksIC8vIFJlYWQgdXAgdG8gY29sdW1uIE1cbiAgXSk7XG5cbiAgaWYgKGRhaWx5T3JkZXJzRGF0YVdpdGhIZWFkZXIubGVuZ3RoIDwgMikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbiAgfVxuXG4gIGNvbnN0IGRhaWx5T3JkZXJzSGVhZGVycyA9IGRhaWx5T3JkZXJzRGF0YVdpdGhIZWFkZXJbMF07XG4gIGNvbnN0IGRhaWx5T3JkZXJzUm93cyA9IGRhaWx5T3JkZXJzRGF0YVdpdGhIZWFkZXIuc2xpY2UoMSk7XG4gIFxuICBjb25zdCBvcmRlckl0ZW1zSGVhZGVycyA9IG9yZGVySXRlbXNEYXRhV2l0aEhlYWRlci5sZW5ndGggPiAwID8gb3JkZXJJdGVtc0RhdGFXaXRoSGVhZGVyWzBdIDogW107XG4gIGNvbnN0IG9yZGVySXRlbXNSb3dzID0gb3JkZXJJdGVtc0RhdGFXaXRoSGVhZGVyLmxlbmd0aCA+IDEgPyBvcmRlckl0ZW1zRGF0YVdpdGhIZWFkZXIuc2xpY2UoMSkgOiBbXTtcblxuICAvLyAyLiBGaWx0ZXIgdGhlIHJvd3MgdG8ga2VlcCBmb3IgYm90aCBzaGVldHNcbiAgY29uc3QgZGFpbHlPcmRlcnNUb0tlZXAgPSBkYWlseU9yZGVyc1Jvd3MuZmlsdGVyKHJvdyA9PiByb3dbMF0gIT09IGRhaWx5T3JkZXJJZCk7XG5cbiAgbGV0IG9yZGVySXRlbXNUb0tlZXAgPSBvcmRlckl0ZW1zUm93cztcbiAgaWYgKG9yZGVySXRlbXNSb3dzLmxlbmd0aCA+IDAgJiYgb3JkZXJJdGVtc0hlYWRlcnMubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3Qgb3JkZXJJdGVtc0hlYWRlck1hcCA9IG9yZGVySXRlbXNIZWFkZXJzLnJlZHVjZSgoYWNjLCBoLCBpKSA9PiB7IGFjY1tTdHJpbmcoaCldID0gaTsgcmV0dXJuIGFjYzsgfSwge30gYXMgUmVjb3JkPHN0cmluZywgbnVtYmVyPik7XG4gICAgICBjb25zdCBkYWlseU9yZGVySWRJbmRleCA9IG9yZGVySXRlbXNIZWFkZXJNYXBbJ2RhaWx5T3JkZXJJZCddO1xuICAgICAgXG4gICAgICAvLyBFbnN1cmUgdGhlIGRhaWx5T3JkZXJJZCBjb2x1bW4gZXhpc3RzIGJlZm9yZSBmaWx0ZXJpbmdcbiAgICAgIGlmIChkYWlseU9yZGVySWRJbmRleCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgb3JkZXJJdGVtc1RvS2VlcCA9IG9yZGVySXRlbXNSb3dzLmZpbHRlcihpdGVtUm93ID0+IGl0ZW1Sb3dbZGFpbHlPcmRlcklkSW5kZXhdICE9PSBkYWlseU9yZGVySWQpO1xuICAgICAgfVxuICB9XG5cbiAgLy8gNC4gUHJlcGFyZSBiYXRjaCB1cGRhdGUgZGF0YSB0byBjbGVhciBhbmQgcmV3cml0ZSBib3RoIHNoZWV0c1xuICBhd2FpdCBiYXRjaFVwZGF0ZVNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgW1xuICAgIHtcbiAgICAgIHJhbmdlOiBgJHtEQUlMWV9PUkRFUlNfU0hFRVRfTkFNRX0hQTE6RGAsXG4gICAgICB2YWx1ZXM6IFtkYWlseU9yZGVyc0hlYWRlcnMsIC4uLmRhaWx5T3JkZXJzVG9LZWVwXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHJhbmdlOiBgJHtPUkRFUl9JVEVNU19TSEVFVF9OQU1FfSFBMTpNYCxcbiAgICAgIHZhbHVlczogb3JkZXJJdGVtc0hlYWRlcnMubGVuZ3RoID4gMCA/IFtvcmRlckl0ZW1zSGVhZGVycywgLi4ub3JkZXJJdGVtc1RvS2VlcF0gOiBbXSxcbiAgICB9XG4gIF0pO1xuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbn1cblxuXG4vKipcbiAqIFN1Ym1pdHMgYW4gb3JkZXIgYW5kIHNhdmVzIGl0IHRvIHRoZSAnb3JkZXJfaXRlbXMnIHNoZWV0LlxuICogSWYgZWRpdGluZyBhbiBleGlzdGluZyBvcmRlciwgaXQgZmlyc3QgZGVsZXRlcyB0aGUgb2xkIGl0ZW1zLlxuICogQHBhcmFtIHtGaW5hbE9yZGVyfSBvcmRlciAtIFRoZSBjb21wbGV0ZSBvcmRlciBkZXRhaWxzLlxuICogQHBhcmFtIHtib29sZWFufSBpc0VkaXRpbmcgLSBBIGZsYWcgdG8gaW5kaWNhdGUgaWYgdGhpcyBpcyBhbiBlZGl0LlxuICogQHJldHVybnMge1Byb21pc2U8e3N1Y2Nlc3M6IGJvb2xlYW59Pn0gQSBzdWNjZXNzIGZsYWcuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzdWJtaXRPcmRlcihvcmRlcjogRmluYWxPcmRlciwgaXNFZGl0aW5nOiBib29sZWFuID0gZmFsc2UpOiBQcm9taXNlPHsgc3VjY2VzczogYm9vbGVhbiB9PiB7XG4gICAgLy8gSWYgZWRpdGluZywgZmlyc3QgZGVsZXRlIGFsbCBleGlzdGluZyBpdGVtcyBmb3IgdGhhdCB1c2VyIGluIHRoYXQgZGFpbHkgb3JkZXJcbiAgICBpZiAoaXNFZGl0aW5nKSB7XG4gICAgICAgIGF3YWl0IGRlbGV0ZVVzZXJPcmRlcih7IHVzZXJuYW1lOiBvcmRlci51c2VybmFtZSwgZGFpbHlPcmRlcklkOiBvcmRlci5kYWlseU9yZGVySWQgfSk7XG4gICAgfVxuICAgIFxuICAgIC8vIFRoZW4sIGFwcGVuZCB0aGUgbmV3L3VwZGF0ZWQgaXRlbXNcbiAgICBjb25zdCBhbGxJdGVtc1JhbmdlID0gYCR7T1JERVJfSVRFTVNfU0hFRVRfTkFNRX0hQTI6QWA7XG4gICAgY29uc3QgYWxsSXRlbUlkc0RhdGEgPSBhd2FpdCBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGFsbEl0ZW1zUmFuZ2UpO1xuICAgIGxldCBsYXN0SWROdW0gPSBhbGxJdGVtSWRzRGF0YS5sZW5ndGggPiAwXG4gICAgICAgID8gTWF0aC5tYXgoMCwgLi4uYWxsSXRlbUlkc0RhdGEubWFwKHJvdyA9PiBwYXJzZUludCgocm93WzBdIHx8ICdvaTAnKS5yZXBsYWNlKCdvaScsICcnKSwgMTApKS5maWx0ZXIobnVtID0+ICFpc05hTihudW0pKSlcbiAgICAgICAgOiAwO1xuXG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpO1xuICAgIGNvbnN0IG9yZGVyVmFsdWVzID0gW107XG5cbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2Ygb3JkZXIuaXRlbXMpIHtcbiAgICAgICAgbGFzdElkTnVtKys7IC8vIEluY3JlbWVudCBJRCBmb3IgZWFjaCBpdGVtIGluIHRoZSBsb29wXG4gICAgICAgIGNvbnN0IG5ld0lkID0gYG9pJHtsYXN0SWROdW0udG9TdHJpbmcoKS5wYWRTdGFydCgzLCAnMCcpfWA7XG4gICAgICAgIGNvbnN0IG9wdGlvbnNTdHJpbmcgPSBPYmplY3QuZW50cmllcyhpdGVtLm9wdGlvbnMpLm1hcCgoW2tleSwgdmFsdWVdKSA9PiBgJHtrZXl9OiR7dmFsdWV9YCkuam9pbignLCAnKTtcblxuICAgICAgICBvcmRlclZhbHVlcy5wdXNoKFtcbiAgICAgICAgICAgIG5ld0lkLFxuICAgICAgICAgICAgb3JkZXIuZGFpbHlPcmRlcklkLFxuICAgICAgICAgICAgbm93LFxuICAgICAgICAgICAgb3JkZXIudXNlcm5hbWUsXG4gICAgICAgICAgICBvcmRlci52ZW5kb3JJZCxcbiAgICAgICAgICAgIG9yZGVyLnZlbmRvck5hbWUsXG4gICAgICAgICAgICBpdGVtLm1lbnVJdGVtSWQsXG4gICAgICAgICAgICBpdGVtLm5hbWUsXG4gICAgICAgICAgICBpdGVtLnF1YW50aXR5LFxuICAgICAgICAgICAgaXRlbS5wcmljZSxcbiAgICAgICAgICAgIG9wdGlvbnNTdHJpbmcsXG4gICAgICAgICAgICBvcmRlci5ub3RlcyxcbiAgICAgICAgICAgICdGQUxTRScgLy8gaXNQYWlkXG4gICAgICAgIF0pO1xuICAgIH1cbiAgICBcbiAgICAvLyBFbnN1cmUgaGVhZGVycyBleGlzdFxuICAgIGNvbnN0IGhlYWRlcnMgPSBhd2FpdCBnZXRIZWFkZXJzKFNQUkVBRFNIRUVUX0lELCBPUkRFUl9JVEVNU19TSEVFVF9OQU1FKTtcbiAgICBpZiAoaGVhZGVycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgYXdhaXQgdXBkYXRlU2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCBgJHtPUkRFUl9JVEVNU19TSEVFVF9OQU1FfSFBMTpNMWAsIFtbJ2lkJywgJ2RhaWx5T3JkZXJJZCcsICd0aW1lc3RhbXAnLCAndXNlcm5hbWUnLCAndmVuZG9ySWQnLCAndmVuZG9yTmFtZScsICdtZW51SXRlbUlkJywgJ2l0ZW1OYW1lJywgJ3F1YW50aXR5JywgJ3ByaWNlJywgJ29wdGlvbnMnLCAnbm90ZXMnLCAnaXNQYWlkJ11dKTtcbiAgICB9XG5cbiAgICBpZiAob3JkZXJWYWx1ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBhd2FpdCBhcHBlbmRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGAke09SREVSX0lURU1TX1NIRUVUX05BTUV9IUE6TWAsIG9yZGVyVmFsdWVzKTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xufVxuXG5cbmV4cG9ydCB0eXBlIE9yZGVyRGV0YWlsSXRlbSA9IHtcbiAgICBpZDogc3RyaW5nO1xuICAgIGRhaWx5T3JkZXJJZDogc3RyaW5nO1xuICAgIHRpbWVzdGFtcDogc3RyaW5nO1xuICAgIHVzZXJuYW1lOiBzdHJpbmc7XG4gICAgdmVuZG9ySWQ6IHN0cmluZztcbiAgICB2ZW5kb3JOYW1lOiBzdHJpbmc7XG4gICAgbWVudUl0ZW1JZDogc3RyaW5nO1xuICAgIGl0ZW1OYW1lOiBzdHJpbmc7XG4gICAgcXVhbnRpdHk6IG51bWJlcjtcbiAgICBwcmljZTogbnVtYmVyO1xuICAgIG9wdGlvbnM6IHN0cmluZztcbiAgICBub3Rlczogc3RyaW5nO1xuICAgIGlzUGFpZDogYm9vbGVhbjtcbn07XG5cbi8qKlxuICogUmV0cmlldmVzIGFsbCBvcmRlciBpdGVtcyBmb3IgYSBzcGVjaWZpYyBkYWlseSBvcmRlci5cbiAqIEBwYXJhbSB7c3RyaW5nfSBkYWlseU9yZGVySWQgVGhlIElEIG9mIHRoZSBkYWlseSBvcmRlci5cbiAqIEByZXR1cm5zIHtQcm9taXNlPHtvcmRlckRldGFpbHM6IE9yZGVyRGV0YWlsSXRlbVtdLCBkYWlseU9yZGVyOiBEYWlseU9yZGVyIHwgbnVsbH0+fSBBbiBvYmplY3QgY29udGFpbmluZyB0aGUgbGlzdCBvZiBvcmRlciBpdGVtcyBhbmQgdGhlIGRhaWx5IG9yZGVyIGRldGFpbHMuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRPcmRlckRldGFpbHNCeURhaWx5T3JkZXJJZChkYWlseU9yZGVySWQ6IHN0cmluZyk6IFByb21pc2U8eyBvcmRlckRldGFpbHM6IE9yZGVyRGV0YWlsSXRlbVtdLCBkYWlseU9yZGVyOiBEYWlseU9yZGVyIHwgbnVsbCB9PiB7XG4gICAgLy8gMS4gR2V0IHRoZSBkYWlseSBvcmRlciBkZXRhaWxzXG4gICAgY29uc3QgYWxsRGFpbHlPcmRlcnMgPSBhd2FpdCBnZXRBbGxEYWlseU9yZGVycygpO1xuICAgIGNvbnN0IGRhaWx5T3JkZXIgPSBhbGxEYWlseU9yZGVycy5maW5kKG8gPT4gby5pZCA9PT0gZGFpbHlPcmRlcklkKTtcblxuICAgIGlmICghZGFpbHlPcmRlcikge1xuICAgICAgICByZXR1cm4geyBvcmRlckRldGFpbHM6IFtdLCBkYWlseU9yZGVyOiBudWxsIH07XG4gICAgfVxuXG4gICAgLy8gMi4gR2V0IGFsbCBvcmRlciBpdGVtc1xuICAgIGNvbnN0IG9yZGVySXRlbXNSYW5nZSA9IGAke09SREVSX0lURU1TX1NIRUVUX05BTUV9IUE6TWA7IC8vIEV4dGVuZGVkIHRvIGNvbHVtbiBNIGZvciBuZXcgZmllbGRzXG4gICAgY29uc3Qgb3JkZXJJdGVtc0RhdGEgPSBhd2FpdCBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIG9yZGVySXRlbXNSYW5nZSk7XG5cbiAgICBpZiAob3JkZXJJdGVtc0RhdGEubGVuZ3RoIDwgMikge1xuICAgICAgICByZXR1cm4geyBvcmRlckRldGFpbHM6IFtdLCBkYWlseU9yZGVyOiBkYWlseU9yZGVyIH07XG4gICAgfVxuXG4gICAgY29uc3QgaGVhZGVycyA9IG9yZGVySXRlbXNEYXRhWzBdLm1hcChoID0+IFN0cmluZyhoKS50cmltKCkpO1xuICAgIGNvbnN0IGhlYWRlck1hcCA9IGhlYWRlcnMucmVkdWNlKChhY2MsIGhlYWRlciwgaW5kZXgpID0+IHtcbiAgICAgICAgYWNjW2hlYWRlci50cmltKCldID0gaW5kZXg7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30gYXMgUmVjb3JkPHN0cmluZywgbnVtYmVyPik7XG5cbiAgICAvLyBDaGVjayBmb3IgcmVxdWlyZWQgY29sdW1uc1xuICAgIGNvbnN0IHJlcXVpcmVkQ29scyA9IFsnaWQnLCAnZGFpbHlPcmRlcklkJywgJ3RpbWVzdGFtcCcsICd1c2VybmFtZScsICd2ZW5kb3JJZCcsICd2ZW5kb3JOYW1lJywgJ21lbnVJdGVtSWQnLCAnaXRlbU5hbWUnLCAncXVhbnRpdHknLCAncHJpY2UnLCAnb3B0aW9ucycsICdub3RlcycsICdpc1BhaWQnXTtcbiAgICBmb3IgKGNvbnN0IGNvbCBvZiByZXF1aXJlZENvbHMpIHtcbiAgICAgICAgaWYgKGhlYWRlck1hcFtjb2xdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yOiBUaGUgJyR7T1JERVJfSVRFTVNfU0hFRVRfTkFNRX0nIHNoZWV0IGlzIG1pc3NpbmcgdGhlIHJlcXVpcmVkIGNvbHVtbjogJyR7Y29sfScuYCk7XG4gICAgICAgICAgICByZXR1cm4geyBvcmRlckRldGFpbHM6IFtdLCBkYWlseU9yZGVyOiBkYWlseU9yZGVyIH07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCByb3dzID0gb3JkZXJJdGVtc0RhdGEuc2xpY2UoMSk7XG5cbiAgICAvLyAzLiBGaWx0ZXIgaXRlbXMgdGhhdCBtYXRjaCB0aGUgZGFpbHlPcmRlcklkXG4gICAgY29uc3QgZmlsdGVyZWRJdGVtcyA9IHJvd3MuZmlsdGVyKHJvdyA9PiByb3dbaGVhZGVyTWFwWydkYWlseU9yZGVySWQnXV0gPT09IGRhaWx5T3JkZXJJZCk7XG5cbiAgICAvLyA0LiBNYXAgdG8gT3JkZXJEZXRhaWxJdGVtIG9iamVjdHNcbiAgICBjb25zdCBvcmRlckRldGFpbHM6IE9yZGVyRGV0YWlsSXRlbVtdID0gZmlsdGVyZWRJdGVtcy5tYXAocm93ID0+ICh7XG4gICAgICAgIGlkOiByb3dbaGVhZGVyTWFwWydpZCddXSB8fCAnJyxcbiAgICAgICAgZGFpbHlPcmRlcklkOiByb3dbaGVhZGVyTWFwWydkYWlseU9yZGVySWQnXV0gfHwgJycsXG4gICAgICAgIHRpbWVzdGFtcDogcm93W2hlYWRlck1hcFsndGltZXN0YW1wJ11dIHx8ICcnLFxuICAgICAgICB1c2VybmFtZTogcm93W2hlYWRlck1hcFsndXNlcm5hbWUnXV0gfHwgJ04vQScsXG4gICAgICAgIHZlbmRvcklkOiByb3dbaGVhZGVyTWFwWyd2ZW5kb3JJZCddXSB8fCAnJyxcbiAgICAgICAgdmVuZG9yTmFtZTogcm93W2hlYWRlck1hcFsndmVuZG9yTmFtZSddXSB8fCAnJyxcbiAgICAgICAgbWVudUl0ZW1JZDogcm93W2hlYWRlck1hcFsnbWVudUl0ZW1JZCddXSB8fCAnJyxcbiAgICAgICAgaXRlbU5hbWU6IHJvd1toZWFkZXJNYXBbJ2l0ZW1OYW1lJ11dIHx8ICdOL0EnLFxuICAgICAgICBxdWFudGl0eTogcGFyc2VJbnQocm93W2hlYWRlck1hcFsncXVhbnRpdHknXV0gfHwgJzAnLCAxMCksXG4gICAgICAgIHByaWNlOiBwYXJzZUludChyb3dbaGVhZGVyTWFwWydwcmljZSddXSB8fCAnMCcsIDEwKSxcbiAgICAgICAgb3B0aW9uczogcm93W2hlYWRlck1hcFsnb3B0aW9ucyddXSB8fCAnJyxcbiAgICAgICAgbm90ZXM6IHJvd1toZWFkZXJNYXBbJ25vdGVzJ11dIHx8ICcnLFxuICAgICAgICBpc1BhaWQ6IHJvd1toZWFkZXJNYXBbJ2lzUGFpZCddXSA9PT0gJ1RSVUUnIHx8IHJvd1toZWFkZXJNYXBbJ2lzUGFpZCddXSA9PT0gdHJ1ZSxcbiAgICB9KSk7XG5cbiAgICByZXR1cm4geyBvcmRlckRldGFpbHMsIGRhaWx5T3JkZXIgfTtcbn1cblxuZXhwb3J0IHR5cGUgVXNlck9yZGVyR3JvdXAgPSB7XG4gICAgZGFpbHlPcmRlcjogRGFpbHlPcmRlcjtcbiAgICBpdGVtczogT3JkZXJEZXRhaWxJdGVtW107XG4gICAgdG90YWw6IG51bWJlcjtcbiAgICBub3Rlczogc3RyaW5nO1xufVxuXG4vKipcbiAqIFJldHJpZXZlcyBhbGwgb3JkZXJzIGZvciBhIHNwZWNpZmljIHVzZXIsIGdyb3VwZWQgYnkgZGFpbHkgb3JkZXIuXG4gKiBAcGFyYW0ge3N0cmluZ30gdXNlcm5hbWUgVGhlIHVzZXJuYW1lIHRvIGZldGNoIG9yZGVycyBmb3IuXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxVc2VyT3JkZXJHcm91cFtdPn0gQSBsaXN0IG9mIHRoZSB1c2VyJ3Mgb3JkZXJzLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0T3JkZXJzQnlVc2VybmFtZSh1c2VybmFtZTogc3RyaW5nKTogUHJvbWlzZTxVc2VyT3JkZXJHcm91cFtdPiB7XG4gICAgLy8gMS4gR2V0IGFsbCBkYWlseSBvcmRlcnMgYW5kIGFsbCBvcmRlciBpdGVtc1xuICAgIGNvbnN0IFthbGxEYWlseU9yZGVycywgYWxsT3JkZXJJdGVtc0RhdGFdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICBnZXRBbGxEYWlseU9yZGVycygpLFxuICAgICAgICBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGAke09SREVSX0lURU1TX1NIRUVUX05BTUV9IUE6TWApXG4gICAgXSk7XG5cbiAgICBpZiAoYWxsT3JkZXJJdGVtc0RhdGEubGVuZ3RoIDwgMikge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgY29uc3QgaXRlbXNIZWFkZXJzID0gYWxsT3JkZXJJdGVtc0RhdGFbMF0ubWFwKGggPT4gU3RyaW5nKGgpLnRyaW0oKSk7XG4gICAgY29uc3QgaXRlbXNIZWFkZXJNYXAgPSBpdGVtc0hlYWRlcnMucmVkdWNlKChhY2MsIGhlYWRlciwgaW5kZXgpID0+IHtcbiAgICAgICAgYWNjW2hlYWRlci50cmltKCldID0gaW5kZXg7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30gYXMgUmVjb3JkPHN0cmluZywgbnVtYmVyPik7XG5cbiAgICAvLyBDaGVjayBmb3IgcmVxdWlyZWQgY29sdW1uc1xuICAgIGNvbnN0IHJlcXVpcmVkQ29scyA9IFsndXNlcm5hbWUnLCAnZGFpbHlPcmRlcklkJywgJ2lkJywgJ3RpbWVzdGFtcCcsICd2ZW5kb3JJZCcsICd2ZW5kb3JOYW1lJywgJ21lbnVJdGVtSWQnLCAnaXRlbU5hbWUnLCAncXVhbnRpdHknLCAncHJpY2UnLCAnb3B0aW9ucycsICdub3RlcycsICdpc1BhaWQnXTtcbiAgICBmb3IgKGNvbnN0IGNvbCBvZiByZXF1aXJlZENvbHMpIHtcbiAgICAgICAgaWYgKGl0ZW1zSGVhZGVyTWFwW2NvbF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3I6IFRoZSAnJHtPUkRFUl9JVEVNU19TSEVFVF9OQU1FfScgc2hlZXQgaXMgbWlzc2luZyB0aGUgcmVxdWlyZWQgY29sdW1uOiAnJHtjb2x9Jy5gKTtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIDIuIEZpbHRlciBpdGVtcyBmb3IgdGhlIHNwZWNpZmljIHVzZXJuYW1lXG4gICAgY29uc3QgdXNlckl0ZW1zUm93cyA9IGFsbE9yZGVySXRlbXNEYXRhLnNsaWNlKDEpLmZpbHRlcihyb3cgPT4gcm93W2l0ZW1zSGVhZGVyTWFwWyd1c2VybmFtZSddXSA9PT0gdXNlcm5hbWUpO1xuICAgIFxuICAgIGlmICh1c2VySXRlbXNSb3dzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgY29uc3QgdXNlckl0ZW1zOiBPcmRlckRldGFpbEl0ZW1bXSA9IHVzZXJJdGVtc1Jvd3MubWFwKHJvdyA9PiAoe1xuICAgICAgICBpZDogcm93W2l0ZW1zSGVhZGVyTWFwWydpZCddXSB8fCAnJyxcbiAgICAgICAgZGFpbHlPcmRlcklkOiByb3dbaXRlbXNIZWFkZXJNYXBbJ2RhaWx5T3JkZXJJZCddXSB8fCAnJyxcbiAgICAgICAgdGltZXN0YW1wOiByb3dbaXRlbXNIZWFkZXJNYXBbJ3RpbWVzdGFtcCddXSB8fCAnJyxcbiAgICAgICAgdXNlcm5hbWU6IHJvd1tpdGVtc0hlYWRlck1hcFsndXNlcm5hbWUnXV0gfHwgJ04vQScsXG4gICAgICAgIHZlbmRvcklkOiByb3dbaXRlbXNIZWFkZXJNYXBbJ3ZlbmRvcklkJ11dIHx8ICcnLFxuICAgICAgICB2ZW5kb3JOYW1lOiByb3dbaXRlbXNIZWFkZXJNYXBbJ3ZlbmRvck5hbWUnXV0gfHwgJycsXG4gICAgICAgIG1lbnVJdGVtSWQ6IHJvd1tpdGVtc0hlYWRlck1hcFsnbWVudUl0ZW1JZCddXSB8fCAnJyxcbiAgICAgICAgaXRlbU5hbWU6IHJvd1tpdGVtc0hlYWRlck1hcFsnaXRlbU5hbWUnXV0gfHwgJ04vQScsXG4gICAgICAgIHF1YW50aXR5OiBwYXJzZUludChyb3dbaXRlbXNIZWFkZXJNYXBbJ3F1YW50aXR5J11dIHx8ICcwJywgMTApLFxuICAgICAgICBwcmljZTogcGFyc2VJbnQocm93W2l0ZW1zSGVhZGVyTWFwWydwcmljZSddXSB8fCAnMCcsIDEwKSxcbiAgICAgICAgb3B0aW9uczogcm93W2l0ZW1zSGVhZGVyTWFwWydvcHRpb25zJ11dIHx8ICcnLFxuICAgICAgICBub3Rlczogcm93W2l0ZW1zSGVhZGVyTWFwWydub3RlcyddXSB8fCAnJyxcbiAgICAgICAgaXNQYWlkOiByb3dbaXRlbXNIZWFkZXJNYXBbJ2lzUGFpZCddXSA9PT0gJ1RSVUUnIHx8IHJvd1tpdGVtc0hlYWRlck1hcFsnaXNQYWlkJ11dID09PSB0cnVlLFxuICAgIH0pKTtcbiAgICBcbiAgICAvLyAzLiBHcm91cCBpdGVtcyBieSBkYWlseU9yZGVySWRcbiAgICBjb25zdCBncm91cGVkQnlEYWlseU9yZGVyID0gdXNlckl0ZW1zLnJlZHVjZSgoYWNjLCBpdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IGtleSA9IGl0ZW0uZGFpbHlPcmRlcklkO1xuICAgICAgICBpZiAoIWFjY1trZXldKSB7XG4gICAgICAgICAgICBhY2Nba2V5XSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIGFjY1trZXldLnB1c2goaXRlbSk7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30gYXMgUmVjb3JkPHN0cmluZywgT3JkZXJEZXRhaWxJdGVtW10+KTtcbiAgICBcbiAgICBcbiAgICAvLyA0LiBGb3JtYXQgdGhlIGZpbmFsIG91dHB1dFxuICAgIGNvbnN0IGFsbERhaWx5T3JkZXJzTWFwID0gbmV3IE1hcChhbGxEYWlseU9yZGVycy5tYXAobyA9PiBbby5pZCwgb10pKTtcbiAgICBjb25zdCByZXN1bHQ6IFVzZXJPcmRlckdyb3VwW10gPSBbXTtcblxuICAgIGZvciAoY29uc3QgZGFpbHlPcmRlcklkIGluIGdyb3VwZWRCeURhaWx5T3JkZXIpIHtcbiAgICAgICAgY29uc3QgZGFpbHlPcmRlciA9IGFsbERhaWx5T3JkZXJzTWFwLmdldChkYWlseU9yZGVySWQpO1xuICAgICAgICBpZiAoZGFpbHlPcmRlcikge1xuICAgICAgICAgICAgY29uc3QgaXRlbXMgPSBncm91cGVkQnlEYWlseU9yZGVyW2RhaWx5T3JkZXJJZF07XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAvLyBBZ2dyZWdhdGUgaXRlbXMgd2l0aCB0aGUgc2FtZSBtZW51SXRlbUlkIGFuZCBvcHRpb25zXG4gICAgICAgICAgICBjb25zdCBhZ2dyZWdhdGVkSXRlbXMgPSBpdGVtcy5yZWR1Y2UoKGFjYywgaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFnZ3JlZ2F0aW9uS2V5ID0gYCR7aXRlbS5tZW51SXRlbUlkfXwke2l0ZW0ub3B0aW9uc31gO1xuICAgICAgICAgICAgICAgIGlmIChhY2NbYWdncmVnYXRpb25LZXldKSB7XG4gICAgICAgICAgICAgICAgICAgIGFjY1thZ2dyZWdhdGlvbktleV0ucXVhbnRpdHkgKz0gaXRlbS5xdWFudGl0eTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBhY2NbYWdncmVnYXRpb25LZXldID0geyAuLi5pdGVtIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgICAgICB9LCB7fSBhcyBSZWNvcmQ8c3RyaW5nLCBPcmRlckRldGFpbEl0ZW0+KTtcblxuICAgICAgICAgICAgY29uc3QgZmluYWxJdGVtcyA9IE9iamVjdC52YWx1ZXMoYWdncmVnYXRlZEl0ZW1zKTtcbiAgICAgICAgICAgIGNvbnN0IHRvdGFsID0gZmluYWxJdGVtcy5yZWR1Y2UoKHN1bSwgaXRlbSkgPT4gc3VtICsgaXRlbS5wcmljZSAqIGl0ZW0ucXVhbnRpdHksIDApO1xuICAgICAgICAgICAgY29uc3Qgbm90ZXMgPSBpdGVtcy5sZW5ndGggPiAwID8gaXRlbXNbMF0ubm90ZXMgOiAnJzsgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBkYWlseU9yZGVyLFxuICAgICAgICAgICAgICAgIGl0ZW1zOiBmaW5hbEl0ZW1zLFxuICAgICAgICAgICAgICAgIHRvdGFsLFxuICAgICAgICAgICAgICAgIG5vdGVzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLy8gNS4gU29ydCB0aGUgZmluYWwgZ3JvdXBzIGJ5IGRhdGUsIG1vc3QgcmVjZW50IGZpcnN0XG4gICAgcmVzdWx0LnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgY29uc3QgZGF0ZUEgPSBuZXcgRGF0ZShgJHthLmRhaWx5T3JkZXIuZGF0ZX1UJHthLmRhaWx5T3JkZXIuZGVhZGxpbmV9YCk7XG4gICAgICAgIGNvbnN0IGRhdGVCID0gbmV3IERhdGUoYCR7Yi5kYWlseU9yZGVyLmRhdGV9VCR7Yi5kYWlseU9yZGVyLmRlYWRsaW5lfWApO1xuICAgICAgICByZXR1cm4gZGF0ZUIuZ2V0VGltZSgpIC0gZGF0ZUEuZ2V0VGltZSgpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBSZXRyaWV2ZXMgYSB1c2VyJ3Mgc3BlY2lmaWMgb3JkZXIgZm9yIGEgZ2l2ZW4gZGFpbHkgb3JkZXIsIGZvcm1hdHRlZCBmb3IgZWRpdGluZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSB1c2VybmFtZSBUaGUgdXNlcm5hbWUuXG4gKiBAcGFyYW0ge3N0cmluZ30gZGFpbHlPcmRlcklkIFRoZSBJRCBvZiB0aGUgZGFpbHkgb3JkZXIuXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxPcmRlckl0ZW1bXT59IEEgbGlzdCBvZiBvcmRlciBpdGVtcyByZWFkeSBmb3IgdGhlIGNhcnQuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRFeGlzdGluZ09yZGVyRm9yRWRpdCh1c2VybmFtZTogc3RyaW5nLCBkYWlseU9yZGVySWQ6IHN0cmluZyk6IFByb21pc2U8T3JkZXJJdGVtW10+IHtcbiAgY29uc3QgYWxsT3JkZXJJdGVtc0RhdGEgPSBhd2FpdCBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGAke09SREVSX0lURU1TX1NIRUVUX05BTUV9IUE6TWApO1xuICBpZiAoYWxsT3JkZXJJdGVtc0RhdGEubGVuZ3RoIDwgMikge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIGNvbnN0IGl0ZW1zSGVhZGVycyA9IGFsbE9yZGVySXRlbXNEYXRhWzBdLm1hcChoID0+IFN0cmluZyhoKS50cmltKCkpO1xuICBjb25zdCBpdGVtc0hlYWRlck1hcCA9IGl0ZW1zSGVhZGVycy5yZWR1Y2UoKGFjYywgaGVhZGVyLCBpbmRleCkgPT4ge1xuICAgIGFjY1toZWFkZXJdID0gaW5kZXg7XG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30gYXMgUmVjb3JkPHN0cmluZywgbnVtYmVyPik7XG5cbiAgY29uc3QgdXNlckl0ZW1zUm93cyA9IGFsbE9yZGVySXRlbXNEYXRhXG4gICAgLnNsaWNlKDEpXG4gICAgLmZpbHRlcihyb3cgPT4gcm93W2l0ZW1zSGVhZGVyTWFwWyd1c2VybmFtZSddXSA9PT0gdXNlcm5hbWUgJiYgcm93W2l0ZW1zSGVhZGVyTWFwWydkYWlseU9yZGVySWQnXV0gPT09IGRhaWx5T3JkZXJJZCk7XG5cbiAgaWYgKHVzZXJJdGVtc1Jvd3MubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIFxuICAvLyBIZWxwZXIgdG8gcmUtZ2VuZXJhdGUgdGhlIGNvbXBvc2l0ZSBpdGVtIElEIGZvciB0aGUgY2FydFxuICBjb25zdCBnZW5lcmF0ZU9yZGVySXRlbUlkID0gKGl0ZW1JZDogc3RyaW5nLCBvcHRpb25zOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+KSA9PiB7XG4gICAgaWYgKE9iamVjdC5rZXlzKG9wdGlvbnMpLmxlbmd0aCA9PT0gMCkgcmV0dXJuIGl0ZW1JZDtcbiAgICBjb25zdCBzb3J0ZWRTZWxlY3Rpb25zID0gT2JqZWN0LmtleXMob3B0aW9ucykuc29ydCgpLm1hcChrZXkgPT4gYCR7a2V5fToke29wdGlvbnNba2V5XX1gKS5qb2luKCd8Jyk7XG4gICAgcmV0dXJuIGAke2l0ZW1JZH1bJHtzb3J0ZWRTZWxlY3Rpb25zfV1gO1xuICB9XG5cbiAgLy8gSGVscGVyIHRvIHBhcnNlIHRoZSBvcHRpb25zIHN0cmluZyBiYWNrIGludG8gYW4gb2JqZWN0XG4gIGNvbnN0IHBhcnNlT3B0aW9uc1N0cmluZyA9IChvcHRpb25zU3RyOiBzdHJpbmcpOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0+IHtcbiAgICAgIGlmICghb3B0aW9uc1N0cikgcmV0dXJuIHt9O1xuICAgICAgcmV0dXJuIG9wdGlvbnNTdHIuc3BsaXQoJywnKS5yZWR1Y2UoKGFjYywgcGFpcikgPT4ge1xuICAgICAgICAgIGNvbnN0IFtrZXksIHZhbHVlXSA9IHBhaXIuc3BsaXQoJzonKTtcbiAgICAgICAgICBpZiAoa2V5ICYmIHZhbHVlKSB7XG4gICAgICAgICAgICAgIGFjY1trZXkudHJpbSgpXSA9IHZhbHVlLnRyaW0oKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH0sIHt9IGFzIFJlY29yZDxzdHJpbmcsIHN0cmluZz4pO1xuICB9XG5cbiAgY29uc3Qgb3JkZXJJdGVtczogT3JkZXJJdGVtW10gPSB1c2VySXRlbXNSb3dzLm1hcChyb3cgPT4ge1xuICAgIGNvbnN0IG9wdGlvbnMgPSBwYXJzZU9wdGlvbnNTdHJpbmcocm93W2l0ZW1zSGVhZGVyTWFwWydvcHRpb25zJ11dIHx8ICcnKTtcbiAgICBjb25zdCBtZW51SXRlbUlkID0gcm93W2l0ZW1zSGVhZGVyTWFwWydtZW51SXRlbUlkJ11dO1xuICAgIHJldHVybiB7XG4gICAgICBpZDogZ2VuZXJhdGVPcmRlckl0ZW1JZChtZW51SXRlbUlkLCBvcHRpb25zKSxcbiAgICAgIG1lbnVJdGVtSWQ6IG1lbnVJdGVtSWQsXG4gICAgICBuYW1lOiByb3dbaXRlbXNIZWFkZXJNYXBbJ2l0ZW1OYW1lJ11dIHx8ICcnLFxuICAgICAgcHJpY2U6IHBhcnNlSW50KHJvd1tpdGVtc0hlYWRlck1hcFsncHJpY2UnXV0gfHwgJzAnLCAxMCksXG4gICAgICBxdWFudGl0eTogcGFyc2VJbnQocm93W2l0ZW1zSGVhZGVyTWFwWydxdWFudGl0eSddXSB8fCAnMCcsIDEwKSxcbiAgICAgIHZlbmRvck5hbWU6IHJvd1tpdGVtc0hlYWRlck1hcFsndmVuZG9yTmFtZSddXSB8fCAnJyxcbiAgICAgIHZlbmRvcklkOiByb3dbaXRlbXNIZWFkZXJNYXBbJ3ZlbmRvcklkJ11dIHx8ICcnLFxuICAgICAgdXNlcm5hbWU6IHVzZXJuYW1lLFxuICAgICAgb3B0aW9uczogb3B0aW9ucyxcbiAgICAgIG5vdGVzOiByb3dbaXRlbXNIZWFkZXJNYXBbJ25vdGVzJ11dIHx8ICcnLFxuICAgIH07XG4gIH0pO1xuICBcbiAgcmV0dXJuIG9yZGVySXRlbXM7XG59XG5cblxuLyoqXG4gKiBEZWxldGVzIGEgdXNlcidzIGVudGlyZSBvcmRlciBmb3IgYSBzcGVjaWZpYyBkYWlseSBvcmRlci5cbiAqIEBwYXJhbSB7b2JqZWN0fSBwYXJhbXMgLSBUaGUgcGFyYW1ldGVycyBmb3IgZGVsZXRpbmcgdGhlIG9yZGVyLlxuICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtcy51c2VybmFtZSAtIFRoZSB1c2VybmFtZSBvZiB0aGUgdXNlci5cbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXMuZGFpbHlPcmRlcklkIC0gVGhlIElEIG9mIHRoZSBkYWlseSBvcmRlciB0byBkZWxldGUuXG4gKiBAcmV0dXJucyB7UHJvbWlzZTx7c3VjY2VzczogYm9vbGVhbn0+fSBBIHN1Y2Nlc3MgZmxhZy5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVVzZXJPcmRlcih7IHVzZXJuYW1lLCBkYWlseU9yZGVySWQgfTogeyB1c2VybmFtZTogc3RyaW5nLCBkYWlseU9yZGVySWQ6IHN0cmluZyB9KTogUHJvbWlzZTx7IHN1Y2Nlc3M6IGJvb2xlYW4gfT4ge1xuICAgIGNvbnN0IFtvcmRlckl0ZW1zRGF0YVdpdGhIZWFkZXJdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGAke09SREVSX0lURU1TX1NIRUVUX05BTUV9IUE6TWApLFxuICAgIF0pO1xuXG4gICAgaWYgKG9yZGVySXRlbXNEYXRhV2l0aEhlYWRlci5sZW5ndGggPCAyKSB7XG4gICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07IC8vIE5vIGl0ZW1zIHRvIGRlbGV0ZVxuICAgIH1cblxuICAgIGNvbnN0IGl0ZW1zSGVhZGVycyA9IG9yZGVySXRlbXNEYXRhV2l0aEhlYWRlclswXTtcbiAgICBjb25zdCBpdGVtc1Jvd3MgPSBvcmRlckl0ZW1zRGF0YVdpdGhIZWFkZXIuc2xpY2UoMSk7XG4gICAgXG4gICAgY29uc3QgaGVhZGVyTWFwID0gaXRlbXNIZWFkZXJzLnJlZHVjZSgoYWNjLCBoLCBpKSA9PiB7IGFjY1tTdHJpbmcoaCldID0gaTsgcmV0dXJuIGFjYzsgfSwge30gYXMgUmVjb3JkPHN0cmluZywgbnVtYmVyPik7XG4gICAgY29uc3QgZGFpbHlPcmRlcklkSW5kZXggPSBoZWFkZXJNYXBbJ2RhaWx5T3JkZXJJZCddO1xuICAgIGNvbnN0IHVzZXJuYW1lSW5kZXggPSBoZWFkZXJNYXBbJ3VzZXJuYW1lJ107XG5cbiAgICBpZiAoZGFpbHlPcmRlcklkSW5kZXggPT09IHVuZGVmaW5lZCB8fCB1c2VybmFtZUluZGV4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlICdvcmRlcl9pdGVtcycgc2hlZXQgaXMgbWlzc2luZyByZXF1aXJlZCBjb2x1bW5zICdkYWlseU9yZGVySWQnIG9yICd1c2VybmFtZScuXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IGl0ZW1zVG9LZWVwID0gaXRlbXNSb3dzLmZpbHRlcihyb3cgPT4gXG4gICAgICAgICEocm93W2RhaWx5T3JkZXJJZEluZGV4XSA9PT0gZGFpbHlPcmRlcklkICYmIHJvd1t1c2VybmFtZUluZGV4XSA9PT0gdXNlcm5hbWUpXG4gICAgKTtcbiAgICBcbiAgICBhd2FpdCBiYXRjaFVwZGF0ZVNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgW3tcbiAgICAgICAgcmFuZ2U6IGAke09SREVSX0lURU1TX1NIRUVUX05BTUV9IUExOk1gLFxuICAgICAgICB2YWx1ZXM6IFtpdGVtc0hlYWRlcnMsIC4uLml0ZW1zVG9LZWVwXSxcbiAgICB9XSk7XG5cbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IitSQTZUc0IifQ==
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/OrderClient.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "OrderClient": (()=>OrderClient),
    "isDeadlinePassed": (()=>isDeadlinePassed)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$OrderSummary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/OrderSummary.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-toast.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$utensils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Utensils$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/utensils.js [app-client] (ecmascript) <export default as Utensils>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MinusCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-minus.js [app-client] (ecmascript) <export default as MinusCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-plus.js [app-client] (ecmascript) <export default as PlusCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-cart.js [app-client] (ecmascript) <export default as ShoppingCart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ban$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ban$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ban.js [app-client] (ecmascript) <export default as Ban>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarClock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar-clock.js [app-client] (ecmascript) <export default as CalendarClock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/select.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$data$3a$5563d8__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/ai/flows/data:5563d8 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parse$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/parse.mjs [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
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
const isDeadlinePassed = (date, deadline)=>{
    if (!date || !deadline || typeof deadline !== 'string' || !deadline.match(/^\d{2}:\d{2}$/)) {
        return false; // Not enough info or invalid format, assume not passed
    }
    try {
        const deadlineDateTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parse$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["parse"])(`${date} ${deadline}`, 'yyyy-MM-dd HH:mm', new Date());
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
    _s();
    const [selections, setSelections] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "MenuItemCard.useState": ()=>{
            const defaults = {};
            item.options?.forEach({
                "MenuItemCard.useState": (group)=>{
                    const defaultChoice = group.choices.find({
                        "MenuItemCard.useState": (c)=>c.isDefault
                    }["MenuItemCard.useState"]) || group.choices[0];
                    if (defaultChoice) {
                        defaults[group.name] = defaultChoice.name;
                    }
                }
            }["MenuItemCard.useState"]);
            return defaults;
        }
    }["MenuItemCard.useState"]);
    const [quantity, setQuantity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: "flex flex-col transition-shadow hover:shadow-xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                className: "pb-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                        className: "font-headline text-xl",
                        children: item.name
                    }, void 0, false, {
                        fileName: "[project]/src/components/OrderClient.tsx",
                        lineNumber: 127,
                        columnNumber: 17
                    }, this),
                    item.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                className: "flex-grow space-y-3 pt-2",
                children: item.options?.map((group)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                htmlFor: `${item.id}-${group.name}`,
                                className: "text-xs text-muted-foreground",
                                children: group.name
                            }, void 0, false, {
                                fileName: "[project]/src/components/OrderClient.tsx",
                                lineNumber: 135,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                value: selections[group.name],
                                onValueChange: (value)=>handleSelectionChange(group.name, value),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                        id: `${item.id}-${group.name}`,
                                        className: "h-9",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                        children: group.choices.map((choice)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardFooter"], {
                className: "flex items-center justify-between bg-muted/50 p-3 mt-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                size: "icon",
                                className: "h-8 w-8 rounded-full",
                                onClick: ()=>handleQuantityChange(-1),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MinusCircle$3e$__["MinusCircle"], {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "w-6 text-center font-bold text-lg",
                                children: quantity
                            }, void 0, false, {
                                fileName: "[project]/src/components/OrderClient.tsx",
                                lineNumber: 159,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                size: "icon",
                                className: "h-8 w-8 rounded-full",
                                onClick: ()=>handleQuantityChange(1),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusCircle$3e$__["PlusCircle"], {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: handleAddToCart,
                                size: "sm",
                                className: "px-3 gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"], {
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
_s(MenuItemCard, "RARIGa0axwK7oDX2Lki0DwT4RGs=");
_c = MenuItemCard;
function OrderClient({ availableOrders, menus, initialOrderItems }) {
    _s1();
    const [selectedOrder, setSelectedOrder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [order, setOrder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const username = searchParams.get('username') || '匿名';
    const editingOrderId = searchParams.get('edit');
    // Hydration-safe state for deadline checking
    const [isPastDeadline, setIsPastDeadline] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // This effect runs once on mount to set the initial order, aggregating if needed.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OrderClient.useEffect": ()=>{
            if (initialOrderItems && initialOrderItems.length > 0) {
                setOrder(aggregateOrderItems(initialOrderItems));
            }
        }
    }["OrderClient.useEffect"], [
        initialOrderItems
    ]);
    // Set initial selected order and calculate deadline status on client
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OrderClient.useEffect": ()=>{
            if (editingOrderId) {
                const orderToEdit = availableOrders.find({
                    "OrderClient.useEffect.orderToEdit": (o)=>o.id === editingOrderId
                }["OrderClient.useEffect.orderToEdit"]);
                if (orderToEdit) {
                    setSelectedOrder(orderToEdit);
                }
            } else if (availableOrders.length > 0 && !selectedOrder) {
                setSelectedOrder(availableOrders[0]);
            }
        }
    }["OrderClient.useEffect"], [
        availableOrders,
        selectedOrder,
        editingOrderId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OrderClient.useEffect": ()=>{
            if (selectedOrder) {
                setIsPastDeadline(isDeadlinePassed(selectedOrder.date, selectedOrder.deadline));
            }
        }
    }["OrderClient.useEffect"], [
        selectedOrder
    ]);
    const handleSelectOrder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "OrderClient.useCallback[handleSelectOrder]": (orderToSelect)=>{
            if (order.length > 0 && selectedOrder?.vendor.vendorId !== orderToSelect.vendor.vendorId) {
                toast({
                    variant: "destructive",
                    title: "尚有未完成訂單",
                    description: "切換店家將會清空目前的訂單，請先完成或取消訂單。"
                });
                return;
            }
            setSelectedOrder(orderToSelect);
        }
    }["OrderClient.useCallback[handleSelectOrder]"], [
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
    const handleUpdateQuantity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "OrderClient.useCallback[handleUpdateQuantity]": (itemId, quantity)=>{
            setOrder({
                "OrderClient.useCallback[handleUpdateQuantity]": (prevOrder)=>{
                    if (quantity <= 0) {
                        return prevOrder.filter({
                            "OrderClient.useCallback[handleUpdateQuantity]": (item)=>item.id !== itemId
                        }["OrderClient.useCallback[handleUpdateQuantity]"]);
                    }
                    return prevOrder.map({
                        "OrderClient.useCallback[handleUpdateQuantity]": (item)=>item.id === itemId ? {
                                ...item,
                                quantity
                            } : item
                    }["OrderClient.useCallback[handleUpdateQuantity]"]);
                }
            }["OrderClient.useCallback[handleUpdateQuantity]"]);
        }
    }["OrderClient.useCallback[handleUpdateQuantity]"], []);
    const handleSubmitOrder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "OrderClient.useCallback[handleSubmitOrder]": async (finalOrder)=>{
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
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$data$3a$5563d8__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["submitOrder"])({
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
        }
    }["OrderClient.useCallback[handleSubmitOrder]"], [
        toast,
        selectedOrder,
        editingOrderId
    ]);
    const selectedMenu = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OrderClient.useMemo[selectedMenu]": ()=>{
            if (!selectedOrder) return [];
            return menus[selectedOrder.vendor.vendorId] || [];
        }
    }["OrderClient.useMemo[selectedMenu]"], [
        selectedOrder,
        menus
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container mx-auto max-w-screen-xl p-4 sm:p-6 lg:p-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 lg:grid-cols-3 lg:gap-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "lg:col-span-2 space-y-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "font-headline text-2xl font-bold mb-4",
                                    children: "已發布訂單"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/OrderClient.tsx",
                                    lineNumber: 287,
                                    columnNumber: 13
                                }, this),
                                availableOrders.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4",
                                    children: availableOrders.map((currentOrder)=>{
                                        // Client-side check for deadline
                                        const passed = isDeadlinePassed(currentOrder.date, currentOrder.deadline);
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                            onClick: ()=>handleSelectOrder(currentOrder),
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative cursor-pointer transition-all duration-200 hover:shadow-lg hover:-translate-y-1 h-full", selectedOrder?.vendor.vendorId === currentOrder.vendor.vendorId && "ring-2 ring-primary shadow-lg", passed && "bg-muted/60"),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute top-0 right-0 text-xs pointer-events-none transform -translate-y-1/2", passed ? "bg-destructive text-destructive-foreground" : "bg-green-600 text-destructive-foreground"),
                                                    children: passed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ban$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ban$3e$__["Ban"], {
                                                                className: "mr-1 h-3 w-3"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/OrderClient.tsx",
                                                                lineNumber: 309,
                                                                columnNumber: 36
                                                            }, this),
                                                            "已截止"
                                                        ]
                                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                            className: "font-headline pr-4",
                                                            children: currentOrder.vendor.vendorName
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/OrderClient.tsx",
                                                            lineNumber: 312,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
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
                                                currentOrder.deadline && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardFooter"], {
                                                    className: "text-xs text-muted-foreground pt-0",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-1.5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarClock$3e$__["CalendarClock"], {
                                                                className: "h-3.5 w-3.5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/OrderClient.tsx",
                                                                lineNumber: 318,
                                                                columnNumber: 35
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                    className: "flex flex-col items-center justify-center p-12 text-center text-muted-foreground bg-secondary/30",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$utensils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Utensils$3e$__["Utensils"], {
                                            className: "h-16 w-16 mb-4 text-primary"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/OrderClient.tsx",
                                            lineNumber: 328,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-headline text-xl font-bold mb-2",
                                            children: "今天沒有訂餐"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/OrderClient.tsx",
                                            lineNumber: 329,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                        selectedOrder && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
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
                                isPastDeadline ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                    className: "flex flex-col items-center justify-center p-12 text-center text-destructive bg-destructive/10 border-destructive/50",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ban$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ban$3e$__["Ban"], {
                                            className: "h-16 w-16 mb-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/OrderClient.tsx",
                                            lineNumber: 341,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-headline text-xl font-bold mb-2",
                                            children: "今日訂購已截止"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/OrderClient.tsx",
                                            lineNumber: 342,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6",
                                    children: selectedMenu.length > 0 ? selectedMenu.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MenuItemCard, {
                                            item: item,
                                            vendorName: selectedOrder.vendor.vendorName,
                                            vendorId: selectedOrder.vendor.vendorId,
                                            onAddToOrder: handleAddToOrder
                                        }, item.id, false, {
                                            fileName: "[project]/src/components/OrderClient.tsx",
                                            lineNumber: 348,
                                            columnNumber: 23
                                        }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                    className: "pt-8 lg:pt-0",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:sticky lg:top-24",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$OrderSummary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrderSummary"], {
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
_s1(OrderClient, "QOed4L9gr6BSDyNcoLc/qbOgyjE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c1 = OrderClient;
var _c, _c1;
__turbopack_context__.k.register(_c, "MenuItemCard");
__turbopack_context__.k.register(_c1, "OrderClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/my-orders/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>MyOrdersPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SiteHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SiteHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/alert-dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/separator.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$data$3a$0a1be6__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/ai/flows/data:0a1be6 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$data$3a$e2fc54__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/ai/flows/data:e2fc54 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$OrderClient$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/OrderClient.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-toast.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarClock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar-clock.js [app-client] (ecmascript) <export default as CalendarClock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ban$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ban$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ban.js [app-client] (ecmascript) <export default as Ban>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$inbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Inbox$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/inbox.js [app-client] (ecmascript) <export default as Inbox>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/square-pen.js [app-client] (ecmascript) <export default as Edit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
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
function MyOrdersContent() {
    _s();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const username = searchParams.get('username');
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const [orders, setOrders] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isPending, startTransition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"])();
    const fetchOrders = async ()=>{
        if (!username) {
            setError("缺少使用者名稱，無法查詢訂單。");
            setIsLoading(false);
            return;
        }
        setIsLoading(true);
        setError(null);
        try {
            const fetchedOrders = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$data$3a$0a1be6__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getOrdersByUsername"])(decodeURIComponent(username));
            setOrders(fetchedOrders);
        } catch (e) {
            console.error("Failed to fetch orders:", e);
            setError("無法載入訂單資料，請稍後再試。");
        } finally{
            setIsLoading(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MyOrdersContent.useEffect": ()=>{
            fetchOrders();
        }
    }["MyOrdersContent.useEffect"], [
        username
    ]);
    const handleCancelOrder = (dailyOrderId)=>{
        if (!username) return;
        startTransition(async ()=>{
            try {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$data$3a$e2fc54__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deleteUserOrder"])({
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
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-center items-center h-64",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                    className: "h-8 w-8 animate-spin text-primary"
                }, void 0, false, {
                    fileName: "[project]/src/app/my-orders/page.tsx",
                    lineNumber: 87,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center text-destructive bg-destructive/10 p-4 rounded-md",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center text-muted-foreground bg-secondary/30 p-12 rounded-lg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$inbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Inbox$3e$__["Inbox"], {
                    className: "h-16 w-16 mx-auto mb-4 text-primary"
                }, void 0, false, {
                    fileName: "[project]/src/app/my-orders/page.tsx",
                    lineNumber: 104,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "font-headline text-xl font-bold mb-2",
                    children: "沒有訂單紀錄"
                }, void 0, false, {
                    fileName: "[project]/src/app/my-orders/page.tsx",
                    lineNumber: 105,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: orders.map(({ dailyOrder, items, total, notes })=>{
            const deadlinePassed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$OrderClient$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDeadlinePassed"])(dailyOrder.date, dailyOrder.deadline);
            const optionsString = (options)=>{
                if (!options || Object.keys(options).length === 0) return '';
                return Object.entries(options).map(([key, value])=>`${key}: ${value}`).join(', ');
            };
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: "shadow-lg transition-shadow hover:shadow-xl overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-2 bg-accent"
                    }, void 0, false, {
                        fileName: "[project]/src/app/my-orders/page.tsx",
                        lineNumber: 123,
                        columnNumber: 14
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-start gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                            className: "font-headline text-2xl mb-1",
                                            children: dailyOrder.vendorName
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/my-orders/page.tsx",
                                            lineNumber: 127,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                            className: "flex items-center gap-1.5 text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarClock$3e$__["CalendarClock"], {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center shrink-0",
                                    children: deadlinePassed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                        variant: "outline",
                                        className: "border-destructive text-destructive",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ban$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ban$3e$__["Ban"], {
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
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialog"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogTrigger"], {
                                                        asChild: true,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                            variant: "ghost",
                                                            size: "icon",
                                                            className: "text-blue-600 h-8 w-8 hover:bg-blue-100 hover:text-blue-700",
                                                            "aria-label": "編輯訂單",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__["Edit"], {
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
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogContent"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogHeader"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogTitle"], {
                                                                        children: "確定要編輯嗎？"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/my-orders/page.tsx",
                                                                        lineNumber: 148,
                                                                        columnNumber: 41
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogDescription"], {
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
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogFooter"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogCancel"], {
                                                                        children: "取消"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/my-orders/page.tsx",
                                                                        lineNumber: 154,
                                                                        columnNumber: 41
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogAction"], {
                                                                        asChild: true,
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialog"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogTrigger"], {
                                                        asChild: true,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                            variant: "ghost",
                                                            size: "icon",
                                                            className: "text-destructive h-8 w-8 hover:bg-destructive/10",
                                                            "aria-label": "取消訂單",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
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
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogContent"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogHeader"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogTitle"], {
                                                                        children: "確定要取消這筆訂單嗎？"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/my-orders/page.tsx",
                                                                        lineNumber: 171,
                                                                        columnNumber: 41
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogDescription"], {
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
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogFooter"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogCancel"], {
                                                                        children: "再想想"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/my-orders/page.tsx",
                                                                        lineNumber: 177,
                                                                        columnNumber: 41
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogAction"], {
                                                                        variant: "destructive",
                                                                        onClick: ()=>handleCancelOrder(dailyOrder.id),
                                                                        disabled: isPending,
                                                                        children: [
                                                                            isPending ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {}, void 0, false, {
                                fileName: "[project]/src/app/my-orders/page.tsx",
                                lineNumber: 196,
                                columnNumber: 16
                            }, this),
                            items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-4 gap-4 items-start font-body text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "col-span-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-medium",
                                                    children: item.itemName
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/my-orders/page.tsx",
                                                    lineNumber: 200,
                                                    columnNumber: 30
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                            notes && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {}, void 0, false, {
                                        fileName: "[project]/src/app/my-orders/page.tsx",
                                        lineNumber: 213,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-medium",
                                                children: "備註"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/my-orders/page.tsx",
                                                lineNumber: 215,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardFooter"], {
                        className: "bg-muted/50 p-4 flex justify-end items-baseline",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm mr-2 text-muted-foreground",
                                children: "總計"
                            }, void 0, false, {
                                fileName: "[project]/src/app/my-orders/page.tsx",
                                lineNumber: 222,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
_s(MyOrdersContent, "p7MKh/SAYWO1y08pjh0NhF6rjJ8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"]
    ];
});
_c = MyOrdersContent;
function MyOrdersPage() {
    _s1();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const username = searchParams.get('username');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MyOrdersPage.useEffect": ()=>{
            if (!username) {
                router.push('/');
            }
        }
    }["MyOrdersPage.useEffect"], [
        username,
        router
    ]);
    if (!username) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex min-h-screen items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-background font-body text-foreground",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SiteHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiteHeader"], {}, void 0, false, {
                fileName: "[project]/src/app/my-orders/page.tsx",
                lineNumber: 254,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "container mx-auto max-w-2xl p-4 sm:p-6 lg:p-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "font-headline text-3xl font-bold mb-6",
                        children: "我的訂單"
                    }, void 0, false, {
                        fileName: "[project]/src/app/my-orders/page.tsx",
                        lineNumber: 256,
                        columnNumber: 18
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
                        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-center items-center h-64",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
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
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MyOrdersContent, {}, void 0, false, {
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
_s1(MyOrdersPage, "8i1PHtDhDf9NMpKTkROQKKwA/RI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c1 = MyOrdersPage;
var _c, _c1;
__turbopack_context__.k.register(_c, "MyOrdersContent");
__turbopack_context__.k.register(_c1, "MyOrdersPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_1e12af4a._.js.map