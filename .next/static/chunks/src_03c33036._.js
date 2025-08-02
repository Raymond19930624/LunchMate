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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
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
    // Determine if we should show user info and logout button
    const showUserSection = username || pathname.startsWith('/admin');
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
                            lineNumber: 24,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-headline text-2xl font-bold text-foreground",
                            children: "餓了嗎？"
                        }, void 0, false, {
                            fileName: "[project]/src/components/SiteHeader.tsx",
                            lineNumber: 25,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/SiteHeader.tsx",
                    lineNumber: 23,
                    columnNumber: 17
                }, this),
                showUserSection && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2",
                    children: [
                        username ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                    className: "h-5 w-5 text-muted-foreground"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SiteHeader.tsx",
                                    lineNumber: 32,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm font-medium text-foreground",
                                    children: decodeURIComponent(username)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SiteHeader.tsx",
                                    lineNumber: 33,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm font-medium text-foreground",
                            children: "管理員"
                        }, void 0, false, {
                            fileName: "[project]/src/components/SiteHeader.tsx",
                            lineNumber: 36,
                            columnNumber: 28
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "ghost",
                            size: "icon",
                            "aria-label": "登出",
                            onClick: handleLogout,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                className: "h-5 w-5 text-muted-foreground"
                            }, void 0, false, {
                                fileName: "[project]/src/components/SiteHeader.tsx",
                                lineNumber: 39,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/SiteHeader.tsx",
                            lineNumber: 38,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/SiteHeader.tsx",
                    lineNumber: 29,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/SiteHeader.tsx",
            lineNumber: 22,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/SiteHeader.tsx",
        lineNumber: 21,
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
"[project]/src/components/ui/input.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Input": (()=>Input)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Input = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className, type, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/input.tsx",
        lineNumber: 8,
        columnNumber: 7
    }, this);
});
_c1 = Input;
Input.displayName = "Input";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Input$React.forwardRef");
__turbopack_context__.k.register(_c1, "Input");
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
"[project]/src/components/ui/form.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Form": (()=>Form),
    "FormControl": (()=>FormControl),
    "FormDescription": (()=>FormDescription),
    "FormField": (()=>FormField),
    "FormItem": (()=>FormItem),
    "FormLabel": (()=>FormLabel),
    "FormMessage": (()=>FormMessage),
    "useFormField": (()=>useFormField)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/label.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const Form = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormProvider"];
const FormFieldContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({});
const FormField = ({ ...props })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormFieldContext.Provider, {
        value: {
            name: props.name
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Controller"], {
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/form.tsx",
            lineNumber: 39,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/form.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
};
_c = FormField;
const useFormField = ()=>{
    _s();
    const fieldContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(FormFieldContext);
    const itemContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(FormItemContext);
    const { getFieldState, formState } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormContext"])();
    const fieldState = getFieldState(fieldContext.name, formState);
    if (!fieldContext) {
        throw new Error("useFormField should be used within <FormField>");
    }
    const { id } = itemContext;
    return {
        id,
        name: fieldContext.name,
        formItemId: `${id}-form-item`,
        formDescriptionId: `${id}-form-item-description`,
        formMessageId: `${id}-form-item-message`,
        ...fieldState
    };
};
_s(useFormField, "eRzki+X5SldVDcAh3BokmSZW9NU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormContext"]
    ];
});
const FormItemContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({});
const FormItem = /*#__PURE__*/ _s1((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c1 = _s1(({ className, ...props }, ref)=>{
    _s1();
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormItemContext.Provider, {
        value: {
            id
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: ref,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("space-y-2", className),
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/form.tsx",
            lineNumber: 83,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/form.tsx",
        lineNumber: 82,
        columnNumber: 5
    }, this);
}, "WhsuKpSQZEWeFcB7gWlfDRQktoQ=")), "WhsuKpSQZEWeFcB7gWlfDRQktoQ=");
_c2 = FormItem;
FormItem.displayName = "FormItem";
const FormLabel = /*#__PURE__*/ _s2((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c3 = _s2(({ className, ...props }, ref)=>{
    _s2();
    const { error, formItemId } = useFormField();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(error && "text-destructive", className),
        htmlFor: formItemId,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/form.tsx",
        lineNumber: 96,
        columnNumber: 5
    }, this);
}, "Z4R+rKjylfAcqmbRnqWEg1TfTcg=", false, function() {
    return [
        useFormField
    ];
})), "Z4R+rKjylfAcqmbRnqWEg1TfTcg=", false, function() {
    return [
        useFormField
    ];
});
_c4 = FormLabel;
FormLabel.displayName = "FormLabel";
const FormControl = /*#__PURE__*/ _s3((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c5 = _s3(({ ...props }, ref)=>{
    _s3();
    const { error, formItemId, formDescriptionId, formMessageId } = useFormField();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"], {
        ref: ref,
        id: formItemId,
        "aria-describedby": !error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`,
        "aria-invalid": !!error,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/form.tsx",
        lineNumber: 113,
        columnNumber: 5
    }, this);
}, "mI3rlmONcPPBVtOc6UefMrXAJ6w=", false, function() {
    return [
        useFormField
    ];
})), "mI3rlmONcPPBVtOc6UefMrXAJ6w=", false, function() {
    return [
        useFormField
    ];
});
_c6 = FormControl;
FormControl.displayName = "FormControl";
const FormDescription = /*#__PURE__*/ _s4((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c7 = _s4(({ className, ...props }, ref)=>{
    _s4();
    const { formDescriptionId } = useFormField();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        ref: ref,
        id: formDescriptionId,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/form.tsx",
        lineNumber: 135,
        columnNumber: 5
    }, this);
}, "573aRXA8dloSrMaQM9SdAF4A9NI=", false, function() {
    return [
        useFormField
    ];
})), "573aRXA8dloSrMaQM9SdAF4A9NI=", false, function() {
    return [
        useFormField
    ];
});
_c8 = FormDescription;
FormDescription.displayName = "FormDescription";
const FormMessage = /*#__PURE__*/ _s5((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c9 = _s5(({ className, children, ...props }, ref)=>{
    _s5();
    const { error, formMessageId } = useFormField();
    const body = error ? String(error?.message ?? "") : children;
    if (!body) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        ref: ref,
        id: formMessageId,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm font-medium text-destructive", className),
        ...props,
        children: body
    }, void 0, false, {
        fileName: "[project]/src/components/ui/form.tsx",
        lineNumber: 157,
        columnNumber: 5
    }, this);
}, "WONNS8VCMr8LShuUovb8QgOmMVY=", false, function() {
    return [
        useFormField
    ];
})), "WONNS8VCMr8LShuUovb8QgOmMVY=", false, function() {
    return [
        useFormField
    ];
});
_c10 = FormMessage;
FormMessage.displayName = "FormMessage";
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10;
__turbopack_context__.k.register(_c, "FormField");
__turbopack_context__.k.register(_c1, "FormItem$React.forwardRef");
__turbopack_context__.k.register(_c2, "FormItem");
__turbopack_context__.k.register(_c3, "FormLabel$React.forwardRef");
__turbopack_context__.k.register(_c4, "FormLabel");
__turbopack_context__.k.register(_c5, "FormControl$React.forwardRef");
__turbopack_context__.k.register(_c6, "FormControl");
__turbopack_context__.k.register(_c7, "FormDescription$React.forwardRef");
__turbopack_context__.k.register(_c8, "FormDescription");
__turbopack_context__.k.register(_c9, "FormMessage$React.forwardRef");
__turbopack_context__.k.register(_c10, "FormMessage");
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
"[project]/src/components/ui/checkbox.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Checkbox": (()=>Checkbox)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$checkbox$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-checkbox/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const Checkbox = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$checkbox$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$checkbox$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Indicator"], {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center justify-center text-current"),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                className: "h-4 w-4"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/checkbox.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ui/checkbox.tsx",
            lineNumber: 21,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/checkbox.tsx",
        lineNumber: 13,
        columnNumber: 3
    }, this));
_c1 = Checkbox;
Checkbox.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$checkbox$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"].displayName;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Checkbox$React.forwardRef");
__turbopack_context__.k.register(_c1, "Checkbox");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/ai/flows/data:087252 [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"40a07cd863198c77f598c8ed541dd16aa8d2fca557":"addMenuItem"},"src/ai/flows/menu-flow.ts",""] */ __turbopack_context__.s({
    "addMenuItem": (()=>addMenuItem)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var addMenuItem = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40a07cd863198c77f598c8ed541dd16aa8d2fca557", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "addMenuItem"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vbWVudS1mbG93LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuJ3VzZSBzZXJ2ZXInO1xuLyoqXG4gKiBAZmlsZU92ZXJ2aWV3IEZsb3cgZm9yIGhhbmRsaW5nIG1lbnUgZGF0YSBmcm9tIEdvb2dsZSBTaGVldHMuXG4gKi9cbmltcG9ydCB7IGdldFNoZWV0RGF0YSwgYXBwZW5kU2hlZXREYXRhLCBjbGVhclNoZWV0RGF0YSwgdXBkYXRlU2hlZXREYXRhLCBiYXRjaFVwZGF0ZVNoZWV0RGF0YSB9IGZyb20gJ0Avc2VydmljZXMvc2hlZXQtc2VydmljZSc7XG5pbXBvcnQgeyB0eXBlIEFkZE1lbnVJdGVtUmVxdWVzdCwgQWRkTWVudUl0ZW1SZXF1ZXN0U2NoZW1hIH0gZnJvbSAnQC9saWIvc2NoZW1hL21lbnUnO1xuXG4vLyBUaGUgSUQgb2YgeW91ciBHb29nbGUgU2hlZXRcbmNvbnN0IFNQUkVBRFNIRUVUX0lEID0gJzFaajJoMGNZbHJiMm1CYU5nbDEtUG9PSzd0bENDd0RjY0FYbjV3NjZocDRjJztcbmNvbnN0IE1FTlVfU0hFRVRfTkFNRSA9ICdtZW51cyc7XG5jb25zdCBNRU5VX09QVElPTlNfU0hFRVRfTkFNRSA9ICdtZW51X29wdGlvbnMnO1xuXG5leHBvcnQgdHlwZSBNZW51T3B0aW9uQ2hvaWNlID0ge1xuICBpZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIHByaWNlRGVsdGE6IG51bWJlcjtcbiAgaXNEZWZhdWx0OiBib29sZWFuO1xufVxuXG5leHBvcnQgdHlwZSBNZW51T3B0aW9uR3JvdXAgPSB7XG4gIG5hbWU6IHN0cmluZztcbiAgY2hvaWNlczogTWVudU9wdGlvbkNob2ljZVtdO1xufVxuXG5leHBvcnQgdHlwZSBNZW51SXRlbSA9IHtcbiAgaWQ6IHN0cmluZztcbiAgdmVuZG9ySWQ6IHN0cmluZztcbiAgbmFtZTpzdHJpbmc7XG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICBwcmljZTogbnVtYmVyO1xuICBpc0FjdGl2ZTogYm9vbGVhbjtcbiAgb3B0aW9ucz86IE1lbnVPcHRpb25Hcm91cFtdO1xufTtcblxuLyoqXG4gKiBSZXRyaWV2ZXMgYWxsIG1lbnUgaXRlbXMgZm9yIGEgZ2l2ZW4gdmVuZG9yIGZyb20gdGhlICdtZW51cycgc2hlZXQsIGluY2x1ZGluZyB0aGVpciBvcHRpb25zLlxuICogQHBhcmFtIHtzdHJpbmd9IHZlbmRvcklkIFRoZSBJRCBvZiB0aGUgdmVuZG9yLlxuICogQHJldHVybnMge1Byb21pc2U8TWVudUl0ZW1bXT59IEEgbGlzdCBvZiBtZW51IGl0ZW1zIHdpdGggdGhlaXIgb3B0aW9ucy5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE1lbnVzQnlWZW5kb3JJZCh2ZW5kb3JJZDogc3RyaW5nKTogUHJvbWlzZTxNZW51SXRlbVtdPiB7XG4gIHRyeSB7XG4gICAgY29uc3QgW21lbnVTaGVldERhdGEsIG9wdGlvbnNTaGVldERhdGFdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGAke01FTlVfU0hFRVRfTkFNRX0hQTpGYCksXG4gICAgICAgIGdldFNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgYCR7TUVOVV9PUFRJT05TX1NIRUVUX05BTUV9IUE6RmApXG4gICAgXSk7XG4gICAgXG4gICAgLy8gSWYgdGhlcmUncyBubyBkYXRhIG9yIG9ubHkgYSBoZWFkZXIgcm93LCByZXR1cm4gYW4gZW1wdHkgYXJyYXkuXG4gICAgaWYgKCFtZW51U2hlZXREYXRhIHx8IG1lbnVTaGVldERhdGEubGVuZ3RoIDwgMikge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIGNvbnN0IG1lbnVIZWFkZXJzID0gbWVudVNoZWV0RGF0YVswXS5tYXAoaCA9PiBTdHJpbmcoaCkudHJpbSgpKTtcbiAgICBjb25zdCBtZW51Um93cyA9IG1lbnVTaGVldERhdGEuc2xpY2UoMSk7XG5cbiAgICBjb25zdCBtZW51SGVhZGVyTWFwID0gbWVudUhlYWRlcnMucmVkdWNlKChhY2MsIGhlYWRlciwgaW5kZXgpID0+IHtcbiAgICAgICAgYWNjW2hlYWRlci50cmltKCldID0gaW5kZXg7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30gYXMgUmVjb3JkPHN0cmluZywgbnVtYmVyPik7XG4gICAgXG4gICAgLy8gQWRkIHZhbGlkYXRpb24gdG8gZW5zdXJlIGFsbCByZXF1aXJlZCBjb2x1bW5zIGV4aXN0XG4gICAgY29uc3QgcmVxdWlyZWRNZW51Q29sdW1ucyA9IFsnaWQnLCAndmVuZG9ySWQnLCAnbmFtZScsICdwcmljZScsICdpc0FjdGl2ZSddO1xuICAgIGZvciAoY29uc3QgY29sIG9mIHJlcXVpcmVkTWVudUNvbHVtbnMpIHtcbiAgICAgICAgaWYgKG1lbnVIZWFkZXJNYXBbY29sXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvcjogVGhlICcke01FTlVfU0hFRVRfTkFNRX0nIHNoZWV0IGlzIG1pc3NpbmcgdGhlIHJlcXVpcmVkIGNvbHVtbjogJyR7Y29sfScuYCk7XG4gICAgICAgICAgICByZXR1cm4gW107IC8vIFJldHVybiBlbXB0eSBhcnJheSB0byBwcmV2ZW50IGNyYXNoXG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGNvbnN0IGFsbEl0ZW1zOiBNZW51SXRlbVtdID0gbWVudVJvd3NcbiAgICAgIC5tYXAocm93ID0+IHtcbiAgICAgICAgLy8gU2tpcCBlbXB0eSByb3dzIHRvIHByZXZlbnQgZXJyb3JzXG4gICAgICAgIGlmICghcm93IHx8IHJvdy5ldmVyeShjZWxsID0+ICFjZWxsKSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGlkID0gcm93W21lbnVIZWFkZXJNYXBbJ2lkJ11dO1xuICAgICAgICBjb25zdCByb3dWZW5kb3JJZCA9IHJvd1ttZW51SGVhZGVyTWFwWyd2ZW5kb3JJZCddXTtcbiAgICAgICAgY29uc3QgbmFtZSA9IHJvd1ttZW51SGVhZGVyTWFwWyduYW1lJ11dO1xuICAgICAgICBjb25zdCBwcmljZSA9IHBhcnNlSW50KHJvd1ttZW51SGVhZGVyTWFwWydwcmljZSddXSB8fCAnMCcsIDEwKTtcbiAgICAgICAgXG4gICAgICAgIC8vIFN0cmljdGVyIHZhbGlkYXRpb246IGVuc3VyZSBlc3NlbnRpYWwgZmllbGRzIGV4aXN0IGFuZCBtYXRjaCB2ZW5kb3JJZFxuICAgICAgICBpZiAoIWlkIHx8ICFuYW1lIHx8IGlzTmFOKHByaWNlKSB8fCByb3dWZW5kb3JJZCAhPT0gdmVuZG9ySWQpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICAgIHZlbmRvcklkOiByb3dWZW5kb3JJZCxcbiAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogcm93W21lbnVIZWFkZXJNYXBbJ2Rlc2NyaXB0aW9uJ11dIHx8ICcnLFxuICAgICAgICAgICAgcHJpY2U6IHByaWNlLFxuICAgICAgICAgICAgaXNBY3RpdmU6IHJvd1ttZW51SGVhZGVyTWFwWydpc0FjdGl2ZSddXSA9PT0gJ1RSVUUnIHx8IHJvd1ttZW51SGVhZGVyTWFwWydpc0FjdGl2ZSddXSA9PT0gdHJ1ZSxcbiAgICAgICAgICAgIG9wdGlvbnM6IFtdLFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmZpbHRlcihCb29sZWFuKSBhcyBNZW51SXRlbVtdOyAvLyBGaWx0ZXIgb3V0IG51bGwgdmFsdWVzXG4gICAgICBcbiAgICBpZiAob3B0aW9uc1NoZWV0RGF0YSAmJiBvcHRpb25zU2hlZXREYXRhLmxlbmd0aCA+IDEpIHtcbiAgICAgIGNvbnN0IG9wdGlvbnNIZWFkZXJzID0gb3B0aW9uc1NoZWV0RGF0YVswXS5tYXAoaCA9PiBTdHJpbmcoaCkudHJpbSgpKTtcbiAgICAgIGNvbnN0IG9wdGlvbnNSb3dzID0gb3B0aW9uc1NoZWV0RGF0YS5zbGljZSgxKTtcbiAgICAgIGNvbnN0IG9wdGlvbnNIZWFkZXJNYXAgPSBvcHRpb25zSGVhZGVycy5yZWR1Y2UoKGFjYywgaGVhZGVyLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGFjY1toZWFkZXIudHJpbSgpXSA9IGluZGV4O1xuICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICB9LCB7fSBhcyBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+KTtcblxuICAgICAgLy8gVmFsaWRhdGUgcmVxdWlyZWQgb3B0aW9uIGNvbHVtbnNcbiAgICAgIGNvbnN0IHJlcXVpcmVkT3B0aW9uQ29sdW1ucyA9IFsnaWQnLCAnbWVudUl0ZW1JZCcsICdncm91cE5hbWUnLCAnY2hvaWNlTmFtZScsICdwcmljZURlbHRhJywgJ2lzRGVmYXVsdCddO1xuICAgICAgIGZvciAoY29uc3QgY29sIG9mIHJlcXVpcmVkT3B0aW9uQ29sdW1ucykge1xuICAgICAgICBpZiAob3B0aW9uc0hlYWRlck1hcFtjb2xdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yOiBUaGUgJyR7TUVOVV9PUFRJT05TX1NIRUVUX05BTUV9JyBzaGVldCBpcyBtaXNzaW5nIHRoZSByZXF1aXJlZCBjb2x1bW46ICcke2NvbH0nLmApO1xuICAgICAgICAgICAgLy8gQ29udGludWUgd2l0aG91dCBvcHRpb25zLCBidXQgZG9uJ3QgY3Jhc2hcbiAgICAgICAgICAgIHJldHVybiBhbGxJdGVtcztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBhbGxPcHRpb25zID0gb3B0aW9uc1Jvd3MubWFwKHJvdyA9PiAoe1xuICAgICAgICBpZDogcm93W29wdGlvbnNIZWFkZXJNYXBbJ2lkJ11dIHx8ICcnLFxuICAgICAgICBtZW51SXRlbUlkOiByb3dbb3B0aW9uc0hlYWRlck1hcFsnbWVudUl0ZW1JZCddXSB8fCAnJyxcbiAgICAgICAgZ3JvdXBOYW1lOiByb3dbb3B0aW9uc0hlYWRlck1hcFsnZ3JvdXBOYW1lJ11dIHx8ICcnLFxuICAgICAgICBjaG9pY2VOYW1lOiByb3dbb3B0aW9uc0hlYWRlck1hcFsnY2hvaWNlTmFtZSddXSB8fCAnJyxcbiAgICAgICAgcHJpY2VEZWx0YTogcGFyc2VJbnQocm93W29wdGlvbnNIZWFkZXJNYXBbJ3ByaWNlRGVsdGEnXV0gfHwgJzAnLCAxMCksXG4gICAgICAgIGlzRGVmYXVsdDogcm93W29wdGlvbnNIZWFkZXJNYXBbJ2lzRGVmYXVsdCddXSA9PT0gJ1RSVUUnIHx8IHJvd1tvcHRpb25zSGVhZGVyTWFwWydpc0RlZmF1bHQnXV0gPT09IHRydWUsXG4gICAgICB9KSk7XG5cbiAgICAgIC8vIEdyb3VwIG9wdGlvbnMgYnkgbWVudSBpdGVtIElEXG4gICAgICBjb25zdCBvcHRpb25zQnlNZW51SXRlbSA9IGFsbE9wdGlvbnMucmVkdWNlKChhY2MsIG9wdGlvbikgPT4ge1xuICAgICAgICBpZiAoIWFjY1tvcHRpb24ubWVudUl0ZW1JZF0pIHtcbiAgICAgICAgICBhY2Nbb3B0aW9uLm1lbnVJdGVtSWRdID0gW107XG4gICAgICAgIH1cbiAgICAgICAgYWNjW29wdGlvbi5tZW51SXRlbUlkXS5wdXNoKG9wdGlvbik7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgICB9LCB7fSBhcyBSZWNvcmQ8c3RyaW5nLCB0eXBlb2YgYWxsT3B0aW9ucz4pO1xuXG5cbiAgICAgIC8vIEF0dGFjaCBvcHRpb25zIHRvIG1lbnUgaXRlbXNcbiAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBhbGxJdGVtcykge1xuICAgICAgICBpZiAob3B0aW9uc0J5TWVudUl0ZW1baXRlbS5pZF0pIHtcbiAgICAgICAgICBjb25zdCBpdGVtT3B0aW9ucyA9IG9wdGlvbnNCeU1lbnVJdGVtW2l0ZW0uaWRdO1xuICAgICAgICAgIGNvbnN0IGdyb3VwcyA9IGl0ZW1PcHRpb25zLnJlZHVjZSgoYWNjLCBvcHRpb24pID0+IHtcbiAgICAgICAgICAgIGlmICghYWNjW29wdGlvbi5ncm91cE5hbWVdKSB7XG4gICAgICAgICAgICAgIGFjY1tvcHRpb24uZ3JvdXBOYW1lXSA9IHsgbmFtZTogb3B0aW9uLmdyb3VwTmFtZSwgY2hvaWNlczogW10gfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFjY1tvcHRpb24uZ3JvdXBOYW1lXS5jaG9pY2VzLnB1c2goe1xuICAgICAgICAgICAgICBpZDogb3B0aW9uLmlkLFxuICAgICAgICAgICAgICBuYW1lOiBvcHRpb24uY2hvaWNlTmFtZSxcbiAgICAgICAgICAgICAgcHJpY2VEZWx0YTogb3B0aW9uLnByaWNlRGVsdGEsXG4gICAgICAgICAgICAgIGlzRGVmYXVsdDogb3B0aW9uLmlzRGVmYXVsdCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgICB9LCB7fSBhcyBSZWNvcmQ8c3RyaW5nLCBNZW51T3B0aW9uR3JvdXA+KTtcbiAgICAgICAgICBpdGVtLm9wdGlvbnMgPSBPYmplY3QudmFsdWVzKGdyb3Vwcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIGFsbEl0ZW1zO1xuXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIuiugOWPluiPnOWWruWkseaVlzpcIiwgZXJyb3IpO1xuICAgIHJldHVybiBbXTsgLy8gRW5zdXJlIGFuIGVtcHR5IGFycmF5IGlzIHJldHVybmVkIG9uIGFueSBlcnJvclxuICB9XG59XG5cbi8qKlxuICogQWRkcyBhIG5ldyBtZW51IGl0ZW0gYWxvbmcgd2l0aCBpdHMgb3B0aW9ucyB0byB0aGUgcmVzcGVjdGl2ZSBzaGVldHMuXG4gKiBAcGFyYW0ge0FkZE1lbnVJdGVtUmVxdWVzdH0gaXRlbSAtIFRoZSBtZW51IGl0ZW0gZGF0YSB0byBhZGQuXG4gKiBAcmV0dXJucyB7UHJvbWlzZTx7c3VjY2VzczogYm9vbGVhbiwgbWVudUl0ZW1JZDogc3RyaW5nfT59IEEgc3VjY2VzcyBmbGFnIGFuZCB0aGUgbmV3IG1lbnUgaXRlbSdzIElELlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkTWVudUl0ZW0oaXRlbTogQWRkTWVudUl0ZW1SZXF1ZXN0KTogUHJvbWlzZTx7IHN1Y2Nlc3M6IGJvb2xlYW47IG1lbnVJdGVtSWQ6IHN0cmluZyB9PiB7XG4gIGNvbnN0IHZhbGlkYXRpb24gPSBBZGRNZW51SXRlbVJlcXVlc3RTY2hlbWEuc2FmZVBhcnNlKGl0ZW0pO1xuICBpZiAoIXZhbGlkYXRpb24uc3VjY2Vzcykge1xuICAgICAgY29uc3QgZXJyb3JNc2cgPSB2YWxpZGF0aW9uLmVycm9yLmVycm9ycy5tYXAoZSA9PiBgJHtlLnBhdGguam9pbignLicpfTogJHtlLm1lc3NhZ2V9YCkuam9pbignLCAnKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcihg6Ly45YWl6LOH5paZ5pyJ6KqkOiAke2Vycm9yTXNnfWApO1xuICB9XG4gIFxuICAvLyBDaGVjayBmb3IgZHVwbGljYXRlIG1lbnUgaXRlbSBuYW1lIGZvciB0aGUgc2FtZSB2ZW5kb3JcbiAgY29uc3QgZXhpc3RpbmdNZW51cyA9IGF3YWl0IGdldE1lbnVzQnlWZW5kb3JJZChpdGVtLnZlbmRvcklkKTtcbiAgaWYgKGV4aXN0aW5nTWVudXMuc29tZShtZW51ID0+IG1lbnUubmFtZS50cmltKCkudG9Mb3dlckNhc2UoKSA9PT0gaXRlbS5uYW1lLnRyaW0oKS50b0xvd2VyQ2FzZSgpKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIuipsuW6l+WutuW3suacieebuOWQjOWQjeeoseeahOWTgemgheOAglwiKTtcbiAgfVxuXG4gIC8vIDEuIEFkZCB0aGUgbWVudSBpdGVtIGZpcnN0IHRvIGdldCBhbiBJRFxuICBjb25zdCBhbGxNZW51c1JhbmdlID0gYCR7TUVOVV9TSEVFVF9OQU1FfSFBMjpBYDtcbiAgY29uc3QgYWxsTWVudUlkc0RhdGEgPSBhd2FpdCBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGFsbE1lbnVzUmFuZ2UpO1xuICBjb25zdCBsYXN0SWROdW0gPSBhbGxNZW51SWRzRGF0YS5sZW5ndGggPiAwIFxuICAgICAgPyBNYXRoLm1heCgwLCAuLi5hbGxNZW51SWRzRGF0YS5tYXAocm93ID0+IHBhcnNlSW50KChyb3dbMF0gfHwgJ20wJykucmVwbGFjZSgnbScsICcnKSwgMTApKS5maWx0ZXIobnVtID0+ICFpc05hTihudW0pKSlcbiAgICAgIDogMDtcbiAgY29uc3QgbmV3TWVudUlkID0gYG0keyhsYXN0SWROdW0gKyAxKS50b1N0cmluZygpLnBhZFN0YXJ0KDMsICcwJyl9YDtcbiAgXG4gIGNvbnN0IG1lbnVWYWx1ZXMgPSBbXG4gICAgW25ld01lbnVJZCwgaXRlbS52ZW5kb3JJZCwgaXRlbS5uYW1lLCBpdGVtLnByaWNlLCAnVFJVRScsIGl0ZW0uZGVzY3JpcHRpb24gfHwgJyddLFxuICBdO1xuICBhd2FpdCBhcHBlbmRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGAke01FTlVfU0hFRVRfTkFNRX0hQTpGYCwgbWVudVZhbHVlcyk7XG5cbiAgLy8gMi4gQWRkIG9wdGlvbnMgaWYgYW55XG4gIGlmIChpdGVtLm9wdGlvbkdyb3VwcyAmJiBpdGVtLm9wdGlvbkdyb3Vwcy5sZW5ndGggPiAwKSB7XG4gICAgY29uc3QgYWxsT3B0aW9uc1JhbmdlID0gYCR7TUVOVV9PUFRJT05TX1NIRUVUX05BTUV9IUEyOkFgO1xuICAgIGNvbnN0IGFsbE9wdGlvbklkc0RhdGEgPSBhd2FpdCBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGFsbE9wdGlvbnNSYW5nZSk7XG4gICAgbGV0IGxhc3RPcHRpb25JZE51bSA9IGFsbE9wdGlvbklkc0RhdGEubGVuZ3RoID4gMCBcbiAgICAgICAgPyBNYXRoLm1heCgwLCAuLi5hbGxPcHRpb25JZHNEYXRhLm1hcChyb3cgPT4gcGFyc2VJbnQoKHJvd1swXSB8fCAnbzAnKS5yZXBsYWNlKCdvJywgJycpLCAxMCkpLmZpbHRlcihudW0gPT4gIWlzTmFOKG51bSkpKVxuICAgICAgICA6IDA7XG5cbiAgICBjb25zdCBvcHRpb25zVmFsdWVzID0gW107XG4gICAgZm9yIChjb25zdCBncm91cCBvZiBpdGVtLm9wdGlvbkdyb3Vwcykge1xuICAgICAgY29uc3QgY2hvaWNlcyA9IGdyb3VwLmNob2ljZXMuc3BsaXQoJywnKS5tYXAoYyA9PiBjLnRyaW0oKSk7XG4gICAgICBjb25zdCBwcmljZURlbHRhcyA9IChncm91cC5wcmljZURlbHRhcyB8fCAnJykuc3BsaXQoJywnKS5tYXAocCA9PiBwYXJzZUludChwLnRyaW0oKSwgMTApKTtcbiAgICAgIGNvbnN0IGRlZmF1bHRDaG9pY2UgPSBjaG9pY2VzWzBdOyAvLyBUaGUgZmlyc3QgY2hvaWNlIGlzIHRoZSBkZWZhdWx0XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hvaWNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBjaG9pY2VOYW1lID0gY2hvaWNlc1tpXTtcbiAgICAgICAgaWYgKCFjaG9pY2VOYW1lKSBjb250aW51ZTtcbiAgICAgICAgXG4gICAgICAgIGxhc3RPcHRpb25JZE51bSsrO1xuICAgICAgICBjb25zdCBuZXdPcHRpb25JZCA9IGBvJHtsYXN0T3B0aW9uSWROdW0udG9TdHJpbmcoKS5wYWRTdGFydCgzLCAnMCcpfWA7XG4gICAgICAgIGNvbnN0IHByaWNlRGVsdGEgPSAhaXNOYU4ocHJpY2VEZWx0YXNbaV0pID8gcHJpY2VEZWx0YXNbaV0gOiAwO1xuICAgICAgICBjb25zdCBpc0RlZmF1bHQgPSBjaG9pY2VOYW1lID09PSBkZWZhdWx0Q2hvaWNlO1xuXG4gICAgICAgIG9wdGlvbnNWYWx1ZXMucHVzaChbXG4gICAgICAgICAgbmV3T3B0aW9uSWQsXG4gICAgICAgICAgbmV3TWVudUlkLFxuICAgICAgICAgIGdyb3VwLmdyb3VwTmFtZSxcbiAgICAgICAgICBjaG9pY2VOYW1lLFxuICAgICAgICAgIHByaWNlRGVsdGEsXG4gICAgICAgICAgaXNEZWZhdWx0ID8gJ1RSVUUnIDogJ0ZBTFNFJ1xuICAgICAgICBdKTtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgaWYgKG9wdGlvbnNWYWx1ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBhd2FpdCBhcHBlbmRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGAke01FTlVfT1BUSU9OU19TSEVFVF9OQU1FfSFBOkZgLCBvcHRpb25zVmFsdWVzKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZW51SXRlbUlkOiBuZXdNZW51SWQgfTtcbn1cblxuZXhwb3J0IHR5cGUgVXBkYXRlTWVudUl0ZW1SZXF1ZXN0ID0ge1xuICAgIGlkOiBzdHJpbmc7IC8vIEV4aXN0aW5nIG1lbnUgaXRlbSBJRFxuICAgIHZlbmRvcklkOiBzdHJpbmc7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICAgIHByaWNlOiBudW1iZXI7XG4gICAgb3B0aW9uR3JvdXBzPzogQWRkTWVudUl0ZW1SZXF1ZXN0WydvcHRpb25Hcm91cHMnXTtcbn1cblxuLyoqXG4gKiBVcGRhdGVzIGFuIGV4aXN0aW5nIG1lbnUgaXRlbSBhbmQgaXRzIG9wdGlvbnMuXG4gKiBAcGFyYW0ge1VwZGF0ZU1lbnVJdGVtUmVxdWVzdH0gaXRlbSAtIFRoZSBtZW51IGl0ZW0gZGF0YSB0byB1cGRhdGUuXG4gKiBAcmV0dXJucyB7UHJvbWlzZTx7c3VjY2VzczogYm9vbGVhbn0+fSBBIHN1Y2Nlc3MgZmxhZy5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZU1lbnVJdGVtKGl0ZW06IFVwZGF0ZU1lbnVJdGVtUmVxdWVzdCk6IFByb21pc2U8eyBzdWNjZXNzOiBib29sZWFuIH0+IHtcbiAgICAvLyBDaGVjayBmb3IgZHVwbGljYXRlIG1lbnUgaXRlbSBuYW1lXG4gICAgY29uc3QgZXhpc3RpbmdNZW51cyA9IGF3YWl0IGdldE1lbnVzQnlWZW5kb3JJZChpdGVtLnZlbmRvcklkKTtcbiAgICBpZiAoZXhpc3RpbmdNZW51cy5zb21lKG1lbnUgPT4gbWVudS5pZCAhPT0gaXRlbS5pZCAmJiBtZW51Lm5hbWUudHJpbSgpLnRvTG93ZXJDYXNlKCkgPT09IGl0ZW0ubmFtZS50cmltKCkudG9Mb3dlckNhc2UoKSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwi6Kmy5bqX5a625bey5pyJ55u45ZCM5ZCN56ix55qE5ZOB6aCF44CCXCIpO1xuICAgIH1cblxuICAgIC8vIDEuIEZpbmQgYW5kIHVwZGF0ZSB0aGUgbWVudSBpdGVtJ3MgYmFzaWMgaW5mbyAobmFtZSwgcHJpY2UpXG4gICAgY29uc3QgbWVudVJhbmdlID0gYCR7TUVOVV9TSEVFVF9OQU1FfSFBMjpGYDtcbiAgICBjb25zdCBtZW51RGF0YSA9IGF3YWl0IGdldFNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgbWVudVJhbmdlKTtcbiAgICBjb25zdCByb3dJbmRleCA9IG1lbnVEYXRhLmZpbmRJbmRleChyb3cgPT4gcm93WzBdID09PSBpdGVtLmlkKTtcblxuICAgIGlmIChyb3dJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGDmib7kuI3liLAgSUQg54K6ICR7aXRlbS5pZH0g55qE6I+c5Zau5ZOB6aCF44CCYCk7XG4gICAgfVxuICAgIGNvbnN0IHJvd1RvVXBkYXRlID0gcm93SW5kZXggKyAyOyAvLyArMiBmb3IgMS1iYXNlZCBpbmRleCBhbmQgaGVhZGVyXG4gICAgY29uc3QgdXBkYXRlTWVudVJhbmdlID0gYCR7TUVOVV9TSEVFVF9OQU1FfSFDJHtyb3dUb1VwZGF0ZX06RiR7cm93VG9VcGRhdGV9YDtcbiAgICBhd2FpdCB1cGRhdGVTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIHVwZGF0ZU1lbnVSYW5nZSwgW1tpdGVtLm5hbWUsIGl0ZW0ucHJpY2UsICdUUlVFJywgaXRlbS5kZXNjcmlwdGlvbiB8fCAnJ11dKTtcblxuICAgIC8vIDIuIFJlYWQgYWxsIGV4aXN0aW5nIG9wdGlvbnNcbiAgICBjb25zdCBtZW51T3B0aW9uc0RhdGFXaXRoSGVhZGVyID0gYXdhaXQgZ2V0U2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCBgJHtNRU5VX09QVElPTlNfU0hFRVRfTkFNRX0hQTpGYCk7XG4gICAgY29uc3Qgb3B0aW9uc0hlYWRlcnMgPSBtZW51T3B0aW9uc0RhdGFXaXRoSGVhZGVyLmxlbmd0aCA+IDAgPyBtZW51T3B0aW9uc0RhdGFXaXRoSGVhZGVyWzBdIDogW107XG4gICAgY29uc3Qgb3B0aW9uc1Jvd3MgPSBtZW51T3B0aW9uc0RhdGFXaXRoSGVhZGVyLmxlbmd0aCA+IDEgPyBtZW51T3B0aW9uc0RhdGFXaXRoSGVhZGVyLnNsaWNlKDEpIDogW107XG5cbiAgICAvLyAzLiBGaWx0ZXIgb3V0IGFsbCBvbGQgb3B0aW9ucyBmb3IgdGhlIGN1cnJlbnQgbWVudSBpdGVtXG4gICAgY29uc3Qgb3RoZXJJdGVtc09wdGlvbnMgPSBvcHRpb25zUm93cy5maWx0ZXIocm93ID0+IHJvd1sxXSAhPT0gaXRlbS5pZCk7XG4gICAgXG4gICAgLy8gNC4gQ3JlYXRlIG5ldyBvcHRpb24gcm93cyBmcm9tIHRoZSByZXF1ZXN0XG4gICAgbGV0IGxhc3RPcHRpb25JZE51bSA9IG9wdGlvbnNSb3dzLmxlbmd0aCA+IDBcbiAgICAgICAgPyBNYXRoLm1heCgwLCAuLi5vcHRpb25zUm93cy5tYXAocm93ID0+IHBhcnNlSW50KChyb3dbMF0gfHwgJ28wJykucmVwbGFjZSgnbycsICcnKSwgMTApKS5maWx0ZXIobnVtID0+ICFpc05hTihudW0pKSlcbiAgICAgICAgOiAwO1xuXG4gICAgY29uc3QgbmV3T3B0aW9uc1ZhbHVlcyA9IFtdO1xuICAgIGlmIChpdGVtLm9wdGlvbkdyb3Vwcykge1xuICAgICAgICBmb3IgKGNvbnN0IGdyb3VwIG9mIGl0ZW0ub3B0aW9uR3JvdXBzKSB7XG4gICAgICAgICAgICBjb25zdCBjaG9pY2VzID0gZ3JvdXAuY2hvaWNlcy5zcGxpdCgnLCcpLm1hcChjID0+IGMudHJpbSgpKTtcbiAgICAgICAgICAgIGNvbnN0IHByaWNlRGVsdGFzID0gKGdyb3VwLnByaWNlRGVsdGFzIHx8ICcnKS5zcGxpdCgnLCcpLm1hcChwID0+IHBhcnNlSW50KHAudHJpbSgpLCAxMCkpO1xuICAgICAgICAgICAgY29uc3QgZGVmYXVsdENob2ljZSA9IGNob2ljZXNbMF07IC8vIFRoZSBmaXJzdCBjaG9pY2UgaXMgdGhlIGRlZmF1bHRcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaG9pY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hvaWNlTmFtZSA9IGNob2ljZXNbaV07XG4gICAgICAgICAgICAgICAgaWYgKCFjaG9pY2VOYW1lKSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBsYXN0T3B0aW9uSWROdW0rKztcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdPcHRpb25JZCA9IGBvJHtsYXN0T3B0aW9uSWROdW0udG9TdHJpbmcoKS5wYWRTdGFydCgzLCAnMCcpfWA7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJpY2VEZWx0YSA9ICFpc05hTihwcmljZURlbHRhc1tpXSkgPyBwcmljZURlbHRhc1tpXSA6IDA7XG4gICAgICAgICAgICAgICAgY29uc3QgaXNEZWZhdWx0ID0gY2hvaWNlTmFtZSA9PT0gZGVmYXVsdENob2ljZTtcblxuICAgICAgICAgICAgICAgIG5ld09wdGlvbnNWYWx1ZXMucHVzaChbXG4gICAgICAgICAgICAgICAgICAgIG5ld09wdGlvbklkLFxuICAgICAgICAgICAgICAgICAgICBpdGVtLmlkLCAvLyBVc2UgZXhpc3RpbmcgbWVudSBpdGVtIElEXG4gICAgICAgICAgICAgICAgICAgIGdyb3VwLmdyb3VwTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgY2hvaWNlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgcHJpY2VEZWx0YSxcbiAgICAgICAgICAgICAgICAgICAgaXNEZWZhdWx0ID8gJ1RSVUUnIDogJ0ZBTFNFJ1xuICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gNS4gQ29tYmluZSBvbGQgb3B0aW9ucyAoZnJvbSBvdGhlciBpdGVtcykgYW5kIG5ldyBvcHRpb25zIGZvciB0aGlzIGl0ZW1cbiAgICBjb25zdCBmaW5hbE9wdGlvbnMgPSBbLi4ub3RoZXJJdGVtc09wdGlvbnMsIC4uLm5ld09wdGlvbnNWYWx1ZXNdO1xuICAgIFxuICAgIGNvbnN0IGZpbmFsVmFsdWVzID0gZmluYWxPcHRpb25zLmxlbmd0aCA+IDAgPyBbb3B0aW9uc0hlYWRlcnMsIC4uLmZpbmFsT3B0aW9uc10gOiBbb3B0aW9uc0hlYWRlcnNdO1xuXG5cbiAgICAvLyA2LiBCYXRjaCB1cGRhdGUgdGhlIG9wdGlvbnMgc2hlZXRcbiAgICBhd2FpdCBiYXRjaFVwZGF0ZVNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgW1xuICAgICAgICB7XG4gICAgICAgICAgICByYW5nZTogYCR7TUVOVV9PUFRJT05TX1NIRUVUX05BTUV9IUExOkZgLFxuICAgICAgICAgICAgdmFsdWVzOiBmaW5hbFZhbHVlcyxcbiAgICAgICAgfVxuICAgIF0pO1xuXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xufVxuXG5cbmV4cG9ydCB0eXBlIERlbGV0ZU1lbnVJdGVtUmVxdWVzdCA9IHtcbiAgICBpZDogc3RyaW5nO1xufTtcblxuLyoqXG4gKiBEZWxldGVzIGEgbWVudSBpdGVtIGZyb20gdGhlICdtZW51cycgc2hlZXQgYnkgaXRzIElELlxuICogVGhpcyBpcyBhIFwiaGFyZCBkZWxldGVcIiBvcGVyYXRpb24uIEl0IHJlYWRzIGFsbCBkYXRhLCBmaWx0ZXJzIG91dCB0aGVcbiAqIGl0ZW0gdG8gYmUgZGVsZXRlZCBhbmQgaXRzIG9wdGlvbnMsIGNsZWFycyB0aGUgc2hlZXRzLCBhbmQgd3JpdGVzIHRoZVxuICogZmlsdGVyZWQgZGF0YSBiYWNrLlxuICogQHBhcmFtIHtEZWxldGVNZW51SXRlbVJlcXVlc3R9IHJlcSAtIFRoZSByZXF1ZXN0IGNvbnRhaW5pbmcgdGhlIGl0ZW0gSUQgdG8gZGVsZXRlLlxuICogQHJldHVybnMge1Byb21pc2U8e3N1Y2Nlc3M6IGJvb2xlYW59Pn0gQSBzdWNjZXNzIGZsYWcuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVNZW51SXRlbShyZXE6IERlbGV0ZU1lbnVJdGVtUmVxdWVzdCk6IFByb21pc2U8eyBzdWNjZXNzOiBib29sZWFuIH0+IHtcbiAgLy8gMS4gR2V0IGFsbCBkYXRhIGZyb20gdGhlIHR3byBzaGVldHMsIGluY2x1ZGluZyBoZWFkZXJzLlxuICBjb25zdCBbbWVudXNEYXRhV2l0aEhlYWRlciwgbWVudU9wdGlvbnNEYXRhV2l0aEhlYWRlcl0gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgZ2V0U2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCBgJHtNRU5VX1NIRUVUX05BTUV9IUE6RmApLFxuICAgIGdldFNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgYCR7TUVOVV9PUFRJT05TX1NIRUVUX05BTUV9IUE6RmApLFxuICBdKTtcblxuICBjb25zdCBtZW51SGVhZGVycyA9IG1lbnVzRGF0YVdpdGhIZWFkZXIubGVuZ3RoID4gMCA/IG1lbnVzRGF0YVdpdGhIZWFkZXJbMF0gOiBbXTtcbiAgY29uc3QgbWVudVJvd3MgPSBtZW51c0RhdGFXaXRoSGVhZGVyLmxlbmd0aCA+IDEgPyBtZW51c0RhdGFXaXRoSGVhZGVyLnNsaWNlKDEpIDogW107XG5cbiAgY29uc3Qgb3B0aW9uc0hlYWRlcnMgPSBtZW51T3B0aW9uc0RhdGFXaXRoSGVhZGVyLmxlbmd0aCA+IDAgPyBtZW51T3B0aW9uc0RhdGFXaXRoSGVhZGVyWzBdIDogW107XG4gIGNvbnN0IG9wdGlvbnNSb3dzID0gbWVudU9wdGlvbnNEYXRhV2l0aEhlYWRlci5sZW5ndGggPiAxID8gbWVudU9wdGlvbnNEYXRhV2l0aEhlYWRlci5zbGljZSgxKSA6IFtdO1xuXG4gIC8vIDIuIEZpbHRlciBkYXRhIHRvIGtlZXAuXG4gIGNvbnN0IG1lbnVzVG9LZWVwID0gbWVudVJvd3MuZmlsdGVyKHJvdyA9PiByb3dbMF0gIT09IHJlcS5pZCk7XG4gIGNvbnN0IG1lbnVPcHRpb25zVG9LZWVwID0gb3B0aW9uc1Jvd3MuZmlsdGVyKHJvdyA9PiByb3dbMV0gIT09IHJlcS5pZCk7XG5cbiAgLy8gMy4gUHJlcGFyZSBiYXRjaCB1cGRhdGUgZGF0YSAoY2xlYXIgYW5kIHdyaXRlKS5cbiAgLy8gV2Ugd3JpdGUgYmFjayB0aGUgaGVhZGVycyBwbHVzIHRoZSBmaWx0ZXJlZCBkYXRhLlxuICBjb25zdCBiYXRjaERhdGEgPSBbXG4gICAge1xuICAgICAgcmFuZ2U6IGAke01FTlVfU0hFRVRfTkFNRX0hQTE6RmAsXG4gICAgICB2YWx1ZXM6IG1lbnVIZWFkZXJzLmxlbmd0aCA+IDAgPyBbbWVudUhlYWRlcnMsIC4uLm1lbnVzVG9LZWVwXSA6IG1lbnVzVG9LZWVwLFxuICAgIH0sXG4gICAge1xuICAgICAgcmFuZ2U6IGAke01FTlVfT1BUSU9OU19TSEVFVF9OQU1FfSFBMTpGYCxcbiAgICAgIHZhbHVlczogb3B0aW9uc0hlYWRlcnMubGVuZ3RoID4gMCA/IFtvcHRpb25zSGVhZGVycywgLi4ubWVudU9wdGlvbnNUb0tlZXBdIDogbWVudU9wdGlvbnNUb0tlZXAsXG4gICAgfSxcbiAgXTtcblxuICAvLyA0LiBFeGVjdXRlIGJhdGNoIHVwZGF0ZS5cbiAgYXdhaXQgYmF0Y2hVcGRhdGVTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGJhdGNoRGF0YSk7XG4gIFxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG59XG5cbmV4cG9ydCB0eXBlIEJhdGNoRGVsZXRlTWVudUl0ZW1zUmVxdWVzdCA9IHtcbiAgICBpZHM6IHN0cmluZ1tdO1xufTtcblxuLyoqXG4gKiBEZWxldGVzIG11bHRpcGxlIG1lbnUgaXRlbXMgYW5kIHRoZWlyIGFzc29jaWF0ZWQgb3B0aW9ucyBpbiBhIHNpbmdsZSBiYXRjaCBvcGVyYXRpb24uXG4gKiBAcGFyYW0ge0JhdGNoRGVsZXRlTWVudUl0ZW1zUmVxdWVzdH0gcmVxIC0gVGhlIHJlcXVlc3QgY29udGFpbmluZyB0aGUgYXJyYXkgb2YgaXRlbSBJRHMgdG8gZGVsZXRlLlxuICogQHJldHVybnMge1Byb21pc2U8e3N1Y2Nlc3M6IGJvb2xlYW59Pn0gQSBzdWNjZXNzIGZsYWcuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBiYXRjaERlbGV0ZU1lbnVJdGVtcyhyZXE6IEJhdGNoRGVsZXRlTWVudUl0ZW1zUmVxdWVzdCk6IFByb21pc2U8eyBzdWNjZXNzOiBib29sZWFuIH0+IHtcbiAgaWYgKCFyZXEuaWRzIHx8IHJlcS5pZHMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9OyAvLyBOb3RoaW5nIHRvIGRlbGV0ZVxuICB9XG5cbiAgLy8gMS4gR2V0IGFsbCBkYXRhIGZyb20gdGhlIHR3byBzaGVldHMsIGluY2x1ZGluZyBoZWFkZXJzLlxuICBjb25zdCBbbWVudXNEYXRhV2l0aEhlYWRlciwgbWVudU9wdGlvbnNEYXRhV2l0aEhlYWRlcl0gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgZ2V0U2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCBgJHtNRU5VX1NIRUVUX05BTUV9IUE6RmApLFxuICAgIGdldFNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgYCR7TUVOVV9PUFRJT05TX1NIRUVUX05BTUV9IUE6RmApLFxuICBdKTtcblxuICBjb25zdCBtZW51SGVhZGVycyA9IG1lbnVzRGF0YVdpdGhIZWFkZXIubGVuZ3RoID4gMCA/IG1lbnVzRGF0YVdpdGhIZWFkZXJbMF0gOiBbXTtcbiAgY29uc3QgbWVudVJvd3MgPSBtZW51c0RhdGFXaXRoSGVhZGVyLmxlbmd0aCA+IDEgPyBtZW51c0RhdGFXaXRoSGVhZGVyLnNsaWNlKDEpIDogW107XG5cbiAgY29uc3Qgb3B0aW9uc0hlYWRlcnMgPSBtZW51T3B0aW9uc0RhdGFXaXRoSGVhZGVyLmxlbmd0aCA+IDAgPyBtZW51T3B0aW9uc0RhdGFXaXRoSGVhZGVyWzBdIDogW107XG4gIGNvbnN0IG9wdGlvbnNSb3dzID0gbWVudU9wdGlvbnNEYXRhV2l0aEhlYWRlci5sZW5ndGggPiAxID8gbWVudU9wdGlvbnNEYXRhV2l0aEhlYWRlci5zbGljZSgxKSA6IFtdO1xuXG4gIC8vIDIuIEZpbHRlciBkYXRhIHRvIGtlZXAuXG4gIGNvbnN0IGlkc1RvRGVsZXRlU2V0ID0gbmV3IFNldChyZXEuaWRzKTtcbiAgY29uc3QgbWVudXNUb0tlZXAgPSBtZW51Um93cy5maWx0ZXIocm93ID0+ICFpZHNUb0RlbGV0ZVNldC5oYXMocm93WzBdKSk7XG4gIGNvbnN0IG1lbnVPcHRpb25zVG9LZWVwID0gb3B0aW9uc1Jvd3MuZmlsdGVyKHJvdyA9PiAhaWRzVG9EZWxldGVTZXQuaGFzKHJvd1sxXSkpO1xuXG4gIC8vIDMuIFByZXBhcmUgYmF0Y2ggdXBkYXRlIGRhdGEgKGNsZWFyIGFuZCB3cml0ZSkuXG4gIC8vIFdlIHdyaXRlIGJhY2sgdGhlIGhlYWRlcnMgcGx1cyB0aGUgZmlsdGVyZWQgZGF0YS5cbiAgY29uc3QgYmF0Y2hEYXRhID0gW1xuICAgIHtcbiAgICAgIHJhbmdlOiBgJHtNRU5VX1NIRUVUX05BTUV9IUExOkZgLFxuICAgICAgdmFsdWVzOiBtZW51SGVhZGVycy5sZW5ndGggPiAwID8gW21lbnVIZWFkZXJzLCAuLi5tZW51c1RvS2VlcF0gOiBbXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHJhbmdlOiBgJHtNRU5VX09QVElPTlNfU0hFRVRfTkFNRX0hQTE6RmAsXG4gICAgICB2YWx1ZXM6IG9wdGlvbnNIZWFkZXJzLmxlbmd0aCA+IDAgPyBbb3B0aW9uc0hlYWRlcnMsIC4uLm1lbnVPcHRpb25zVG9LZWVwXSA6IFtdLFxuICAgIH0sXG4gIF07XG5cbiAgLy8gNC4gRXhlY3V0ZSBiYXRjaCB1cGRhdGUuXG4gIGF3YWl0IGJhdGNoVXBkYXRlU2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCBiYXRjaERhdGEpO1xuICBcbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xufVxuXG4vKipcbiAqIER1cGxpY2F0ZXMgYSBtZW51IGl0ZW0gYW5kIGFsbCBpdHMgYXNzb2NpYXRlZCBvcHRpb25zLlxuICogQHBhcmFtIHtzdHJpbmd9IG1lbnVJdGVtSWQgLSBUaGUgSUQgb2YgdGhlIG1lbnUgaXRlbSB0byBkdXBsaWNhdGUuXG4gKiBAcmV0dXJucyB7UHJvbWlzZTx7c3VjY2VzczogYm9vbGVhbn0+fSBBIHN1Y2Nlc3MgZmxhZy5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGR1cGxpY2F0ZU1lbnVJdGVtKG1lbnVJdGVtSWQ6IHN0cmluZyk6IFByb21pc2U8eyBzdWNjZXNzOiBib29sZWFuIH0+IHtcbiAgLy8gMS4gRmV0Y2ggYWxsIGV4aXN0aW5nIGRhdGFcbiAgY29uc3QgW1xuICAgIG1lbnVzRGF0YVdpdGhIZWFkZXIsXG4gICAgbWVudU9wdGlvbnNEYXRhV2l0aEhlYWRlcixcbiAgXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGAke01FTlVfU0hFRVRfTkFNRX0hQTpGYCksXG4gICAgZ2V0U2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCBgJHtNRU5VX09QVElPTlNfU0hFRVRfTkFNRX0hQTpGYCksXG4gIF0pO1xuXG4gIGNvbnN0IG1lbnVSb3dzID0gbWVudXNEYXRhV2l0aEhlYWRlci5sZW5ndGggPiAxID8gbWVudXNEYXRhV2l0aEhlYWRlci5zbGljZSgxKSA6IFtdO1xuICBjb25zdCBvcHRpb25zUm93cyA9IG1lbnVPcHRpb25zRGF0YVdpdGhIZWFkZXIubGVuZ3RoID4gMSA/IG1lbnVPcHRpb25zRGF0YVdpdGhIZWFkZXIuc2xpY2UoMSkgOiBbXTtcblxuICAvLyAyLiBGaW5kIHRoZSBvcmlnaW5hbCBpdGVtIGFuZCBvcHRpb25zXG4gIGNvbnN0IG9yaWdpbmFsTWVudVJvdyA9IG1lbnVSb3dzLmZpbmQocm93ID0+IHJvd1swXSA9PT0gbWVudUl0ZW1JZCk7XG4gIGlmICghb3JpZ2luYWxNZW51Um93KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGDmib7kuI3liLAgSUQg54K6ICR7bWVudUl0ZW1JZH0g55qE6I+c5Zau5ZOB6aCF44CCYCk7XG4gIH1cblxuICBjb25zdCBvcmlnaW5hbE9wdGlvbnMgPSBvcHRpb25zUm93cy5maWx0ZXIocm93ID0+IHJvd1sxXSA9PT0gbWVudUl0ZW1JZCk7XG5cbiAgLy8gMy4gR2VuZXJhdGUgbmV3IG1lbnUgaXRlbSBpbmZvXG4gIGxldCBuZXdNZW51TmFtZSA9IGAke29yaWdpbmFsTWVudVJvd1syXX0gLSDlia/mnKxgO1xuICBsZXQgc3VmZml4ID0gMjtcbiAgd2hpbGUgKG1lbnVSb3dzLnNvbWUocm93ID0+IHJvd1syXSA9PT0gbmV3TWVudU5hbWUgJiYgcm93WzFdID09PSBvcmlnaW5hbE1lbnVSb3dbMV0pKSB7XG4gICAgbmV3TWVudU5hbWUgPSBgJHtvcmlnaW5hbE1lbnVSb3dbMl19IC0g5Ymv5pysICR7c3VmZml4fWA7XG4gICAgc3VmZml4Kys7XG4gIH1cbiAgXG4gIGxldCBsYXN0TWVudUlkTnVtID0gbWVudVJvd3MubGVuZ3RoID4gMCA/IE1hdGgubWF4KDAsIC4uLm1lbnVSb3dzLm1hcChyb3cgPT4gcGFyc2VJbnQoKHJvd1swXSB8fCAnbTAnKS5yZXBsYWNlKCdtJywgJycpLCAxMCkpLmZpbHRlcihudW0gPT4gIWlzTmFOKG51bSkpKSA6IDA7XG4gIGNvbnN0IG5ld01lbnVJZCA9IGBtJHsobGFzdE1lbnVJZE51bSArIDEpLnRvU3RyaW5nKCkucGFkU3RhcnQoMywgJzAnKX1gO1xuICBcbiAgY29uc3QgbmV3TWVudURhdGEgPSBbW1xuICAgICAgbmV3TWVudUlkLFxuICAgICAgb3JpZ2luYWxNZW51Um93WzFdLCAvLyB2ZW5kb3JJZFxuICAgICAgbmV3TWVudU5hbWUsXG4gICAgICBvcmlnaW5hbE1lbnVSb3dbM10sIC8vIHByaWNlXG4gICAgICBvcmlnaW5hbE1lbnVSb3dbNF0sIC8vIGlzQWN0aXZlXG4gICAgICBvcmlnaW5hbE1lbnVSb3dbNV0sIC8vIGRlc2NyaXB0aW9uXG4gIF1dO1xuXG4gIC8vIDQuIEdlbmVyYXRlIG5ldyBvcHRpb25zXG4gIGxldCBsYXN0T3B0aW9uSWROdW0gPSBvcHRpb25zUm93cy5sZW5ndGggPiAwID8gTWF0aC5tYXgoMCwgLi4ub3B0aW9uc1Jvd3MubWFwKHJvdyA9PiBwYXJzZUludCgocm93WzBdIHx8ICdvMCcpLnJlcGxhY2UoJ28nLCAnJyksIDEwKSkuZmlsdGVyKG51bSA9PiAhaXNOYU4obnVtKSkpIDogMDtcbiAgXG4gIGNvbnN0IG5ld09wdGlvbnNEYXRhID0gW107XG4gIGZvciAoY29uc3Qgb3B0aW9uUm93IG9mIG9yaWdpbmFsT3B0aW9ucykge1xuICAgIGxhc3RPcHRpb25JZE51bSsrO1xuICAgIGNvbnN0IG5ld09wdGlvbklkID0gYG8ke2xhc3RPcHRpb25JZE51bS50b1N0cmluZygpLnBhZFN0YXJ0KDMsICcwJyl9YDtcbiAgICBuZXdPcHRpb25zRGF0YS5wdXNoKFtcbiAgICAgIG5ld09wdGlvbklkLFxuICAgICAgbmV3TWVudUlkLCAvLyBMaW5rIHRvIHRoZSBuZXcgbWVudSBpdGVtXG4gICAgICBvcHRpb25Sb3dbMl0sIC8vIGdyb3VwTmFtZVxuICAgICAgb3B0aW9uUm93WzNdLCAvLyBjaG9pY2VOYW1lXG4gICAgICBvcHRpb25Sb3dbNF0sIC8vIHByaWNlRGVsdGFcbiAgICAgIG9wdGlvblJvd1s1XSwgLy8gaXNEZWZhdWx0XG4gICAgXSk7XG4gIH1cblxuICAvLyA1LiBBcHBlbmQgYWxsIG5ldyBkYXRhIHRvIHNoZWV0c1xuICBhd2FpdCBhcHBlbmRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGAke01FTlVfU0hFRVRfTkFNRX0hQTpGYCwgbmV3TWVudURhdGEpO1xuICBpZiAobmV3T3B0aW9uc0RhdGEubGVuZ3RoID4gMCkge1xuICAgIGF3YWl0IGFwcGVuZFNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgYCR7TUVOVV9PUFRJT05TX1NIRUVUX05BTUV9IUE6RmAsIG5ld09wdGlvbnNEYXRhKTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbn1cblxuXG4vLyAtLS0gTWVudSBPcHRpb24gRmxvd3MgLS0tXG5cbmV4cG9ydCB0eXBlIEFkZE1lbnVPcHRpb25SZXF1ZXN0ID0ge1xuICBtZW51SXRlbUlkOiBzdHJpbmc7XG4gIGdyb3VwTmFtZTogc3RyaW5nO1xuICBjaG9pY2VOYW1lOiBzdHJpbmc7XG4gIHByaWNlRGVsdGE6IG51bWJlcjtcbiAgaXNEZWZhdWx0OiBib29sZWFuO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkTWVudU9wdGlvbihyZXE6IEFkZE1lbnVPcHRpb25SZXF1ZXN0KTogUHJvbWlzZTx7IHN1Y2Nlc3M6IGJvb2xlYW4gfT4ge1xuICAvLyBJZiB0aGUgbmV3IG9wdGlvbiBpcyBkZWZhdWx0LCB1bnNldCBvdGhlciBkZWZhdWx0cyBpbiB0aGUgc2FtZSBncm91cC5cbiAgaWYgKHJlcS5pc0RlZmF1bHQpIHtcbiAgICBhd2FpdCBzZXRNZW51T3B0aW9uRGVmYXVsdCh7IG1lbnVJdGVtSWQ6IHJlcS5tZW51SXRlbUlkLCBncm91cE5hbWU6IHJlcS5ncm91cE5hbWUsIG9wdGlvbklkOiAnJyB9KTsgLy8gUGFzcyBlbXB0eSBvcHRpb25JZCB0byB1bnNldCBhbGwsIG5ldyBvbmUgd2lsbCBiZSBzZXRcbiAgfVxuXG4gIGNvbnN0IHJhbmdlID0gYCR7TUVOVV9PUFRJT05TX1NIRUVUX05BTUV9IUE6RmA7XG4gIGNvbnN0IGFsbE9wdGlvbnNSYW5nZSA9IGAke01FTlVfT1BUSU9OU19TSEVFVF9OQU1FfSFBMjpBYDtcbiAgXG4gIGNvbnN0IGFsbE9wdGlvbklkc0RhdGEgPSBhd2FpdCBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGFsbE9wdGlvbnNSYW5nZSk7XG4gIGNvbnN0IGxhc3RJZE51bSA9IGFsbE9wdGlvbklkc0RhdGEubGVuZ3RoID4gMCBcbiAgICAgID8gTWF0aC5tYXgoMCwgLi4uYWxsT3B0aW9uSWRzRGF0YS5tYXAocm93ID0+IHBhcnNlSW50KChyb3dbMF0gfHwgJ28wJykucmVwbGFjZSgnbycsICcnKSwgMTApKS5maWx0ZXIobnVtID0+ICFpc05hTihudW0pKSlcbiAgICAgIDogMDtcblxuICBjb25zdCBuZXdJZCA9IGBvJHsobGFzdElkTnVtICsgMSkudG9TdHJpbmcoKS5wYWRTdGFydCgzLCAnMCcpfWA7XG4gIFxuICBjb25zdCB2YWx1ZXMgPSBbW1xuICAgIG5ld0lkLCBcbiAgICByZXEubWVudUl0ZW1JZCwgXG4gICAgcmVxLmdyb3VwTmFtZSwgXG4gICAgcmVxLmNob2ljZU5hbWUsIFxuICAgIHJlcS5wcmljZURlbHRhLCBcbiAgICByZXEuaXNEZWZhdWx0ID8gJ1RSVUUnIDogJ0ZBTFNFJ1xuICBdXTtcblxuICBhd2FpdCBhcHBlbmRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIHJhbmdlLCB2YWx1ZXMpO1xuXG4gIC8vIElmIHRoZSBuZXcgb3B0aW9uIHdhcyBzZXQgdG8gZGVmYXVsdCwgZW5zdXJlIGl0IGlzIG5vdyB0aGUgb25seSBkZWZhdWx0IG9uZVxuICBpZihyZXEuaXNEZWZhdWx0KSB7XG4gICAgICBhd2FpdCBzZXRNZW51T3B0aW9uRGVmYXVsdCh7IG9wdGlvbklkOiBuZXdJZCwgbWVudUl0ZW1JZDogcmVxLm1lbnVJdGVtSWQsIGdyb3VwTmFtZTogcmVxLmdyb3VwTmFtZSB9KTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbn1cblxuXG5leHBvcnQgdHlwZSBEZWxldGVNZW51T3B0aW9uUmVxdWVzdCA9IHtcbiAgb3B0aW9uSWQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZU1lbnVPcHRpb24ocmVxOiBEZWxldGVNZW51T3B0aW9uUmVxdWVzdCk6IFByb21pc2U8eyBzdWNjZXNzOiBib29sZWFuIH0+IHtcbiAgY29uc3QgcmFuZ2UgPSBgJHtNRU5VX09QVElPTlNfU0hFRVRfTkFNRX0hQTI6RmA7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIHJhbmdlKTtcblxuICBpZiAoIWRhdGEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIuaJvuS4jeWIsOiPnOWWrumBuOmgheizh+aWmeOAglwiKTtcbiAgfVxuICBcbiAgY29uc3Qgcm93SW5kZXggPSBkYXRhLmZpbmRJbmRleChyb3cgPT4gcm93WzBdID09PSByZXEub3B0aW9uSWQpO1xuICBcbiAgaWYgKHJvd0luZGV4ID09PSAtMSkge1xuICAgICAgY29uc29sZS5sb2coYOaJvuS4jeWIsCBJRCDngrogJHtyZXEub3B0aW9uSWR9IOeahOiPnOWWrumBuOmgheOAgmApO1xuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UgfTsgLy8gSXRlbSBub3QgZm91bmRcbiAgfVxuXG4gIGNvbnN0IHJvd1RvRGVsZXRlID0gcm93SW5kZXggKyAyOyBcbiAgLy8gVGhpcyBpcyBub3QgYSBncmVhdCB3YXkgdG8gXCJkZWxldGVcIiBhIHJvdy4gQSBiZXR0ZXIgd2F5IGlzIHRvIHJlYWQgYWxsLCBmaWx0ZXIsIGNsZWFyLCBhbmQgd3JpdGUgYmFjay5cbiAgLy8gRm9yIG5vdywgbGV0J3MganVzdCBjbGVhciB0aGUgc3BlY2lmaWMgcm93LlxuICBjb25zdCBjbGVhclJhbmdlID0gYCR7TUVOVV9PUFRJT05TX1NIRUVUX05BTUV9IUEke3Jvd1RvRGVsZXRlfTpGJHtyb3dUb0RlbGV0ZX1gO1xuXG4gIGF3YWl0IGNsZWFyU2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCBjbGVhclJhbmdlKTtcbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xufVxuXG5leHBvcnQgdHlwZSBTZXRNZW51T3B0aW9uRGVmYXVsdFJlcXVlc3QgPSB7XG4gIG9wdGlvbklkOiBzdHJpbmc7IC8vIFRoZSBvcHRpb24gdG8gc2V0IGFzIGRlZmF1bHQuIElmIGVtcHR5LCBhbGwgb3B0aW9ucyBpbiBncm91cCB3aWxsIGJlIHVuc2V0LlxuICBtZW51SXRlbUlkOiBzdHJpbmc7XG4gIGdyb3VwTmFtZTogc3RyaW5nO1xufVxuXG4vKipcbiAqIFNldHMgYSBzcGVjaWZpYyBvcHRpb24gYXMgdGhlIGRlZmF1bHQgZm9yIGl0cyBncm91cCwgdW5zZXR0aW5nIGFueSBwcmV2aW91cyBkZWZhdWx0LlxuICogQHBhcmFtIHJlcSBUaGUgcmVxdWVzdCBjb250YWluaW5nIG9wdGlvbiwgbWVudSBpdGVtLCBhbmQgZ3JvdXAgaWRlbnRpZmllcnMuXG4gKiBAcmV0dXJucyBBIHN1Y2Nlc3MgZmxhZy5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNldE1lbnVPcHRpb25EZWZhdWx0KHJlcTogU2V0TWVudU9wdGlvbkRlZmF1bHRSZXF1ZXN0KTogUHJvbWlzZTx7IHN1Y2Nlc3M6IGJvb2xlYW4gfT4ge1xuICAgIGNvbnN0IHsgb3B0aW9uSWQsIG1lbnVJdGVtSWQsIGdyb3VwTmFtZSB9ID0gcmVxO1xuICAgIGNvbnN0IHJhbmdlID0gYCR7TUVOVV9PUFRJT05TX1NIRUVUX05BTUV9IUEyOkZgO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIHJhbmdlKTtcblxuICAgIGlmICghZGF0YSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCLmib7kuI3liLDoj5zllq7pgbjpoIXos4fmlpnjgIJcIik7XG4gICAgfVxuXG4gICAgY29uc3QgdXBkYXRlcyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCByb3cgPSBkYXRhW2ldO1xuICAgICAgICAvLyBDaGVjayBpZiB0aGUgb3B0aW9uIGJlbG9uZ3MgdG8gdGhlIHNhbWUgbWVudSBpdGVtIGFuZCBncm91cFxuICAgICAgICBpZiAocm93WzFdID09PSBtZW51SXRlbUlkICYmIHJvd1syXSA9PT0gZ3JvdXBOYW1lKSB7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50T3B0aW9uSWQgPSByb3dbMF07XG4gICAgICAgICAgICBjb25zdCBpc0N1cnJlbnRseURlZmF1bHQgPSByb3dbNV0gPT09ICdUUlVFJztcbiAgICAgICAgICAgIGNvbnN0IHNob3VsZEJlRGVmYXVsdCA9IGN1cnJlbnRPcHRpb25JZCA9PT0gb3B0aW9uSWQ7XG5cbiAgICAgICAgICAgIC8vIElmIHRoaXMgcm93IG5lZWRzIHRvIGNoYW5nZSBpdHMgZGVmYXVsdCBzdGF0dXNcbiAgICAgICAgICAgIGlmIChpc0N1cnJlbnRseURlZmF1bHQgIT09IHNob3VsZEJlRGVmYXVsdCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJvd1RvVXBkYXRlID0gaSArIDI7IC8vICsyIGJlY2F1c2Ugc2hlZXQgaXMgMS1pbmRleGVkIGFuZCB3ZSBza2lwcGVkIGhlYWRlclxuICAgICAgICAgICAgICAgIHVwZGF0ZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIHJhbmdlOiBgJHtNRU5VX09QVElPTlNfU0hFRVRfTkFNRX0hRiR7cm93VG9VcGRhdGV9YCxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzOiBbW3Nob3VsZEJlRGVmYXVsdCA/ICdUUlVFJyA6ICdGQUxTRSddXSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmICh1cGRhdGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIC8vIE5vdGU6IFRoaXMgY2FuIGJlIHNsb3cgaWYgdGhlcmUgYXJlIG1hbnkgdXBkYXRlcy4gQmF0Y2hpbmcgd291bGQgYmUgYmV0dGVyLlxuICAgICAgZm9yIChjb25zdCB1cGRhdGUgb2YgdXBkYXRlcykge1xuICAgICAgICAgIGF3YWl0IHVwZGF0ZVNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgdXBkYXRlLnJhbmdlLCB1cGRhdGUudmFsdWVzKTtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI4UkEwS3NCIn0=
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/ai/flows/data:fafdee [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"40c94c095377187d2ed2463238dddbeb5912ed8b69":"deleteMenuItem"},"src/ai/flows/menu-flow.ts",""] */ __turbopack_context__.s({
    "deleteMenuItem": (()=>deleteMenuItem)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var deleteMenuItem = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40c94c095377187d2ed2463238dddbeb5912ed8b69", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "deleteMenuItem"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vbWVudS1mbG93LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuJ3VzZSBzZXJ2ZXInO1xuLyoqXG4gKiBAZmlsZU92ZXJ2aWV3IEZsb3cgZm9yIGhhbmRsaW5nIG1lbnUgZGF0YSBmcm9tIEdvb2dsZSBTaGVldHMuXG4gKi9cbmltcG9ydCB7IGdldFNoZWV0RGF0YSwgYXBwZW5kU2hlZXREYXRhLCBjbGVhclNoZWV0RGF0YSwgdXBkYXRlU2hlZXREYXRhLCBiYXRjaFVwZGF0ZVNoZWV0RGF0YSB9IGZyb20gJ0Avc2VydmljZXMvc2hlZXQtc2VydmljZSc7XG5pbXBvcnQgeyB0eXBlIEFkZE1lbnVJdGVtUmVxdWVzdCwgQWRkTWVudUl0ZW1SZXF1ZXN0U2NoZW1hIH0gZnJvbSAnQC9saWIvc2NoZW1hL21lbnUnO1xuXG4vLyBUaGUgSUQgb2YgeW91ciBHb29nbGUgU2hlZXRcbmNvbnN0IFNQUkVBRFNIRUVUX0lEID0gJzFaajJoMGNZbHJiMm1CYU5nbDEtUG9PSzd0bENDd0RjY0FYbjV3NjZocDRjJztcbmNvbnN0IE1FTlVfU0hFRVRfTkFNRSA9ICdtZW51cyc7XG5jb25zdCBNRU5VX09QVElPTlNfU0hFRVRfTkFNRSA9ICdtZW51X29wdGlvbnMnO1xuXG5leHBvcnQgdHlwZSBNZW51T3B0aW9uQ2hvaWNlID0ge1xuICBpZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIHByaWNlRGVsdGE6IG51bWJlcjtcbiAgaXNEZWZhdWx0OiBib29sZWFuO1xufVxuXG5leHBvcnQgdHlwZSBNZW51T3B0aW9uR3JvdXAgPSB7XG4gIG5hbWU6IHN0cmluZztcbiAgY2hvaWNlczogTWVudU9wdGlvbkNob2ljZVtdO1xufVxuXG5leHBvcnQgdHlwZSBNZW51SXRlbSA9IHtcbiAgaWQ6IHN0cmluZztcbiAgdmVuZG9ySWQ6IHN0cmluZztcbiAgbmFtZTpzdHJpbmc7XG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICBwcmljZTogbnVtYmVyO1xuICBpc0FjdGl2ZTogYm9vbGVhbjtcbiAgb3B0aW9ucz86IE1lbnVPcHRpb25Hcm91cFtdO1xufTtcblxuLyoqXG4gKiBSZXRyaWV2ZXMgYWxsIG1lbnUgaXRlbXMgZm9yIGEgZ2l2ZW4gdmVuZG9yIGZyb20gdGhlICdtZW51cycgc2hlZXQsIGluY2x1ZGluZyB0aGVpciBvcHRpb25zLlxuICogQHBhcmFtIHtzdHJpbmd9IHZlbmRvcklkIFRoZSBJRCBvZiB0aGUgdmVuZG9yLlxuICogQHJldHVybnMge1Byb21pc2U8TWVudUl0ZW1bXT59IEEgbGlzdCBvZiBtZW51IGl0ZW1zIHdpdGggdGhlaXIgb3B0aW9ucy5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE1lbnVzQnlWZW5kb3JJZCh2ZW5kb3JJZDogc3RyaW5nKTogUHJvbWlzZTxNZW51SXRlbVtdPiB7XG4gIHRyeSB7XG4gICAgY29uc3QgW21lbnVTaGVldERhdGEsIG9wdGlvbnNTaGVldERhdGFdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGAke01FTlVfU0hFRVRfTkFNRX0hQTpGYCksXG4gICAgICAgIGdldFNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgYCR7TUVOVV9PUFRJT05TX1NIRUVUX05BTUV9IUE6RmApXG4gICAgXSk7XG4gICAgXG4gICAgLy8gSWYgdGhlcmUncyBubyBkYXRhIG9yIG9ubHkgYSBoZWFkZXIgcm93LCByZXR1cm4gYW4gZW1wdHkgYXJyYXkuXG4gICAgaWYgKCFtZW51U2hlZXREYXRhIHx8IG1lbnVTaGVldERhdGEubGVuZ3RoIDwgMikge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIGNvbnN0IG1lbnVIZWFkZXJzID0gbWVudVNoZWV0RGF0YVswXS5tYXAoaCA9PiBTdHJpbmcoaCkudHJpbSgpKTtcbiAgICBjb25zdCBtZW51Um93cyA9IG1lbnVTaGVldERhdGEuc2xpY2UoMSk7XG5cbiAgICBjb25zdCBtZW51SGVhZGVyTWFwID0gbWVudUhlYWRlcnMucmVkdWNlKChhY2MsIGhlYWRlciwgaW5kZXgpID0+IHtcbiAgICAgICAgYWNjW2hlYWRlci50cmltKCldID0gaW5kZXg7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30gYXMgUmVjb3JkPHN0cmluZywgbnVtYmVyPik7XG4gICAgXG4gICAgLy8gQWRkIHZhbGlkYXRpb24gdG8gZW5zdXJlIGFsbCByZXF1aXJlZCBjb2x1bW5zIGV4aXN0XG4gICAgY29uc3QgcmVxdWlyZWRNZW51Q29sdW1ucyA9IFsnaWQnLCAndmVuZG9ySWQnLCAnbmFtZScsICdwcmljZScsICdpc0FjdGl2ZSddO1xuICAgIGZvciAoY29uc3QgY29sIG9mIHJlcXVpcmVkTWVudUNvbHVtbnMpIHtcbiAgICAgICAgaWYgKG1lbnVIZWFkZXJNYXBbY29sXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvcjogVGhlICcke01FTlVfU0hFRVRfTkFNRX0nIHNoZWV0IGlzIG1pc3NpbmcgdGhlIHJlcXVpcmVkIGNvbHVtbjogJyR7Y29sfScuYCk7XG4gICAgICAgICAgICByZXR1cm4gW107IC8vIFJldHVybiBlbXB0eSBhcnJheSB0byBwcmV2ZW50IGNyYXNoXG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGNvbnN0IGFsbEl0ZW1zOiBNZW51SXRlbVtdID0gbWVudVJvd3NcbiAgICAgIC5tYXAocm93ID0+IHtcbiAgICAgICAgLy8gU2tpcCBlbXB0eSByb3dzIHRvIHByZXZlbnQgZXJyb3JzXG4gICAgICAgIGlmICghcm93IHx8IHJvdy5ldmVyeShjZWxsID0+ICFjZWxsKSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGlkID0gcm93W21lbnVIZWFkZXJNYXBbJ2lkJ11dO1xuICAgICAgICBjb25zdCByb3dWZW5kb3JJZCA9IHJvd1ttZW51SGVhZGVyTWFwWyd2ZW5kb3JJZCddXTtcbiAgICAgICAgY29uc3QgbmFtZSA9IHJvd1ttZW51SGVhZGVyTWFwWyduYW1lJ11dO1xuICAgICAgICBjb25zdCBwcmljZSA9IHBhcnNlSW50KHJvd1ttZW51SGVhZGVyTWFwWydwcmljZSddXSB8fCAnMCcsIDEwKTtcbiAgICAgICAgXG4gICAgICAgIC8vIFN0cmljdGVyIHZhbGlkYXRpb246IGVuc3VyZSBlc3NlbnRpYWwgZmllbGRzIGV4aXN0IGFuZCBtYXRjaCB2ZW5kb3JJZFxuICAgICAgICBpZiAoIWlkIHx8ICFuYW1lIHx8IGlzTmFOKHByaWNlKSB8fCByb3dWZW5kb3JJZCAhPT0gdmVuZG9ySWQpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICAgIHZlbmRvcklkOiByb3dWZW5kb3JJZCxcbiAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogcm93W21lbnVIZWFkZXJNYXBbJ2Rlc2NyaXB0aW9uJ11dIHx8ICcnLFxuICAgICAgICAgICAgcHJpY2U6IHByaWNlLFxuICAgICAgICAgICAgaXNBY3RpdmU6IHJvd1ttZW51SGVhZGVyTWFwWydpc0FjdGl2ZSddXSA9PT0gJ1RSVUUnIHx8IHJvd1ttZW51SGVhZGVyTWFwWydpc0FjdGl2ZSddXSA9PT0gdHJ1ZSxcbiAgICAgICAgICAgIG9wdGlvbnM6IFtdLFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmZpbHRlcihCb29sZWFuKSBhcyBNZW51SXRlbVtdOyAvLyBGaWx0ZXIgb3V0IG51bGwgdmFsdWVzXG4gICAgICBcbiAgICBpZiAob3B0aW9uc1NoZWV0RGF0YSAmJiBvcHRpb25zU2hlZXREYXRhLmxlbmd0aCA+IDEpIHtcbiAgICAgIGNvbnN0IG9wdGlvbnNIZWFkZXJzID0gb3B0aW9uc1NoZWV0RGF0YVswXS5tYXAoaCA9PiBTdHJpbmcoaCkudHJpbSgpKTtcbiAgICAgIGNvbnN0IG9wdGlvbnNSb3dzID0gb3B0aW9uc1NoZWV0RGF0YS5zbGljZSgxKTtcbiAgICAgIGNvbnN0IG9wdGlvbnNIZWFkZXJNYXAgPSBvcHRpb25zSGVhZGVycy5yZWR1Y2UoKGFjYywgaGVhZGVyLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGFjY1toZWFkZXIudHJpbSgpXSA9IGluZGV4O1xuICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICB9LCB7fSBhcyBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+KTtcblxuICAgICAgLy8gVmFsaWRhdGUgcmVxdWlyZWQgb3B0aW9uIGNvbHVtbnNcbiAgICAgIGNvbnN0IHJlcXVpcmVkT3B0aW9uQ29sdW1ucyA9IFsnaWQnLCAnbWVudUl0ZW1JZCcsICdncm91cE5hbWUnLCAnY2hvaWNlTmFtZScsICdwcmljZURlbHRhJywgJ2lzRGVmYXVsdCddO1xuICAgICAgIGZvciAoY29uc3QgY29sIG9mIHJlcXVpcmVkT3B0aW9uQ29sdW1ucykge1xuICAgICAgICBpZiAob3B0aW9uc0hlYWRlck1hcFtjb2xdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yOiBUaGUgJyR7TUVOVV9PUFRJT05TX1NIRUVUX05BTUV9JyBzaGVldCBpcyBtaXNzaW5nIHRoZSByZXF1aXJlZCBjb2x1bW46ICcke2NvbH0nLmApO1xuICAgICAgICAgICAgLy8gQ29udGludWUgd2l0aG91dCBvcHRpb25zLCBidXQgZG9uJ3QgY3Jhc2hcbiAgICAgICAgICAgIHJldHVybiBhbGxJdGVtcztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBhbGxPcHRpb25zID0gb3B0aW9uc1Jvd3MubWFwKHJvdyA9PiAoe1xuICAgICAgICBpZDogcm93W29wdGlvbnNIZWFkZXJNYXBbJ2lkJ11dIHx8ICcnLFxuICAgICAgICBtZW51SXRlbUlkOiByb3dbb3B0aW9uc0hlYWRlck1hcFsnbWVudUl0ZW1JZCddXSB8fCAnJyxcbiAgICAgICAgZ3JvdXBOYW1lOiByb3dbb3B0aW9uc0hlYWRlck1hcFsnZ3JvdXBOYW1lJ11dIHx8ICcnLFxuICAgICAgICBjaG9pY2VOYW1lOiByb3dbb3B0aW9uc0hlYWRlck1hcFsnY2hvaWNlTmFtZSddXSB8fCAnJyxcbiAgICAgICAgcHJpY2VEZWx0YTogcGFyc2VJbnQocm93W29wdGlvbnNIZWFkZXJNYXBbJ3ByaWNlRGVsdGEnXV0gfHwgJzAnLCAxMCksXG4gICAgICAgIGlzRGVmYXVsdDogcm93W29wdGlvbnNIZWFkZXJNYXBbJ2lzRGVmYXVsdCddXSA9PT0gJ1RSVUUnIHx8IHJvd1tvcHRpb25zSGVhZGVyTWFwWydpc0RlZmF1bHQnXV0gPT09IHRydWUsXG4gICAgICB9KSk7XG5cbiAgICAgIC8vIEdyb3VwIG9wdGlvbnMgYnkgbWVudSBpdGVtIElEXG4gICAgICBjb25zdCBvcHRpb25zQnlNZW51SXRlbSA9IGFsbE9wdGlvbnMucmVkdWNlKChhY2MsIG9wdGlvbikgPT4ge1xuICAgICAgICBpZiAoIWFjY1tvcHRpb24ubWVudUl0ZW1JZF0pIHtcbiAgICAgICAgICBhY2Nbb3B0aW9uLm1lbnVJdGVtSWRdID0gW107XG4gICAgICAgIH1cbiAgICAgICAgYWNjW29wdGlvbi5tZW51SXRlbUlkXS5wdXNoKG9wdGlvbik7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgICB9LCB7fSBhcyBSZWNvcmQ8c3RyaW5nLCB0eXBlb2YgYWxsT3B0aW9ucz4pO1xuXG5cbiAgICAgIC8vIEF0dGFjaCBvcHRpb25zIHRvIG1lbnUgaXRlbXNcbiAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBhbGxJdGVtcykge1xuICAgICAgICBpZiAob3B0aW9uc0J5TWVudUl0ZW1baXRlbS5pZF0pIHtcbiAgICAgICAgICBjb25zdCBpdGVtT3B0aW9ucyA9IG9wdGlvbnNCeU1lbnVJdGVtW2l0ZW0uaWRdO1xuICAgICAgICAgIGNvbnN0IGdyb3VwcyA9IGl0ZW1PcHRpb25zLnJlZHVjZSgoYWNjLCBvcHRpb24pID0+IHtcbiAgICAgICAgICAgIGlmICghYWNjW29wdGlvbi5ncm91cE5hbWVdKSB7XG4gICAgICAgICAgICAgIGFjY1tvcHRpb24uZ3JvdXBOYW1lXSA9IHsgbmFtZTogb3B0aW9uLmdyb3VwTmFtZSwgY2hvaWNlczogW10gfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFjY1tvcHRpb24uZ3JvdXBOYW1lXS5jaG9pY2VzLnB1c2goe1xuICAgICAgICAgICAgICBpZDogb3B0aW9uLmlkLFxuICAgICAgICAgICAgICBuYW1lOiBvcHRpb24uY2hvaWNlTmFtZSxcbiAgICAgICAgICAgICAgcHJpY2VEZWx0YTogb3B0aW9uLnByaWNlRGVsdGEsXG4gICAgICAgICAgICAgIGlzRGVmYXVsdDogb3B0aW9uLmlzRGVmYXVsdCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgICB9LCB7fSBhcyBSZWNvcmQ8c3RyaW5nLCBNZW51T3B0aW9uR3JvdXA+KTtcbiAgICAgICAgICBpdGVtLm9wdGlvbnMgPSBPYmplY3QudmFsdWVzKGdyb3Vwcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIGFsbEl0ZW1zO1xuXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIuiugOWPluiPnOWWruWkseaVlzpcIiwgZXJyb3IpO1xuICAgIHJldHVybiBbXTsgLy8gRW5zdXJlIGFuIGVtcHR5IGFycmF5IGlzIHJldHVybmVkIG9uIGFueSBlcnJvclxuICB9XG59XG5cbi8qKlxuICogQWRkcyBhIG5ldyBtZW51IGl0ZW0gYWxvbmcgd2l0aCBpdHMgb3B0aW9ucyB0byB0aGUgcmVzcGVjdGl2ZSBzaGVldHMuXG4gKiBAcGFyYW0ge0FkZE1lbnVJdGVtUmVxdWVzdH0gaXRlbSAtIFRoZSBtZW51IGl0ZW0gZGF0YSB0byBhZGQuXG4gKiBAcmV0dXJucyB7UHJvbWlzZTx7c3VjY2VzczogYm9vbGVhbiwgbWVudUl0ZW1JZDogc3RyaW5nfT59IEEgc3VjY2VzcyBmbGFnIGFuZCB0aGUgbmV3IG1lbnUgaXRlbSdzIElELlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkTWVudUl0ZW0oaXRlbTogQWRkTWVudUl0ZW1SZXF1ZXN0KTogUHJvbWlzZTx7IHN1Y2Nlc3M6IGJvb2xlYW47IG1lbnVJdGVtSWQ6IHN0cmluZyB9PiB7XG4gIGNvbnN0IHZhbGlkYXRpb24gPSBBZGRNZW51SXRlbVJlcXVlc3RTY2hlbWEuc2FmZVBhcnNlKGl0ZW0pO1xuICBpZiAoIXZhbGlkYXRpb24uc3VjY2Vzcykge1xuICAgICAgY29uc3QgZXJyb3JNc2cgPSB2YWxpZGF0aW9uLmVycm9yLmVycm9ycy5tYXAoZSA9PiBgJHtlLnBhdGguam9pbignLicpfTogJHtlLm1lc3NhZ2V9YCkuam9pbignLCAnKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcihg6Ly45YWl6LOH5paZ5pyJ6KqkOiAke2Vycm9yTXNnfWApO1xuICB9XG4gIFxuICAvLyBDaGVjayBmb3IgZHVwbGljYXRlIG1lbnUgaXRlbSBuYW1lIGZvciB0aGUgc2FtZSB2ZW5kb3JcbiAgY29uc3QgZXhpc3RpbmdNZW51cyA9IGF3YWl0IGdldE1lbnVzQnlWZW5kb3JJZChpdGVtLnZlbmRvcklkKTtcbiAgaWYgKGV4aXN0aW5nTWVudXMuc29tZShtZW51ID0+IG1lbnUubmFtZS50cmltKCkudG9Mb3dlckNhc2UoKSA9PT0gaXRlbS5uYW1lLnRyaW0oKS50b0xvd2VyQ2FzZSgpKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIuipsuW6l+WutuW3suacieebuOWQjOWQjeeoseeahOWTgemgheOAglwiKTtcbiAgfVxuXG4gIC8vIDEuIEFkZCB0aGUgbWVudSBpdGVtIGZpcnN0IHRvIGdldCBhbiBJRFxuICBjb25zdCBhbGxNZW51c1JhbmdlID0gYCR7TUVOVV9TSEVFVF9OQU1FfSFBMjpBYDtcbiAgY29uc3QgYWxsTWVudUlkc0RhdGEgPSBhd2FpdCBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGFsbE1lbnVzUmFuZ2UpO1xuICBjb25zdCBsYXN0SWROdW0gPSBhbGxNZW51SWRzRGF0YS5sZW5ndGggPiAwIFxuICAgICAgPyBNYXRoLm1heCgwLCAuLi5hbGxNZW51SWRzRGF0YS5tYXAocm93ID0+IHBhcnNlSW50KChyb3dbMF0gfHwgJ20wJykucmVwbGFjZSgnbScsICcnKSwgMTApKS5maWx0ZXIobnVtID0+ICFpc05hTihudW0pKSlcbiAgICAgIDogMDtcbiAgY29uc3QgbmV3TWVudUlkID0gYG0keyhsYXN0SWROdW0gKyAxKS50b1N0cmluZygpLnBhZFN0YXJ0KDMsICcwJyl9YDtcbiAgXG4gIGNvbnN0IG1lbnVWYWx1ZXMgPSBbXG4gICAgW25ld01lbnVJZCwgaXRlbS52ZW5kb3JJZCwgaXRlbS5uYW1lLCBpdGVtLnByaWNlLCAnVFJVRScsIGl0ZW0uZGVzY3JpcHRpb24gfHwgJyddLFxuICBdO1xuICBhd2FpdCBhcHBlbmRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGAke01FTlVfU0hFRVRfTkFNRX0hQTpGYCwgbWVudVZhbHVlcyk7XG5cbiAgLy8gMi4gQWRkIG9wdGlvbnMgaWYgYW55XG4gIGlmIChpdGVtLm9wdGlvbkdyb3VwcyAmJiBpdGVtLm9wdGlvbkdyb3Vwcy5sZW5ndGggPiAwKSB7XG4gICAgY29uc3QgYWxsT3B0aW9uc1JhbmdlID0gYCR7TUVOVV9PUFRJT05TX1NIRUVUX05BTUV9IUEyOkFgO1xuICAgIGNvbnN0IGFsbE9wdGlvbklkc0RhdGEgPSBhd2FpdCBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGFsbE9wdGlvbnNSYW5nZSk7XG4gICAgbGV0IGxhc3RPcHRpb25JZE51bSA9IGFsbE9wdGlvbklkc0RhdGEubGVuZ3RoID4gMCBcbiAgICAgICAgPyBNYXRoLm1heCgwLCAuLi5hbGxPcHRpb25JZHNEYXRhLm1hcChyb3cgPT4gcGFyc2VJbnQoKHJvd1swXSB8fCAnbzAnKS5yZXBsYWNlKCdvJywgJycpLCAxMCkpLmZpbHRlcihudW0gPT4gIWlzTmFOKG51bSkpKVxuICAgICAgICA6IDA7XG5cbiAgICBjb25zdCBvcHRpb25zVmFsdWVzID0gW107XG4gICAgZm9yIChjb25zdCBncm91cCBvZiBpdGVtLm9wdGlvbkdyb3Vwcykge1xuICAgICAgY29uc3QgY2hvaWNlcyA9IGdyb3VwLmNob2ljZXMuc3BsaXQoJywnKS5tYXAoYyA9PiBjLnRyaW0oKSk7XG4gICAgICBjb25zdCBwcmljZURlbHRhcyA9IChncm91cC5wcmljZURlbHRhcyB8fCAnJykuc3BsaXQoJywnKS5tYXAocCA9PiBwYXJzZUludChwLnRyaW0oKSwgMTApKTtcbiAgICAgIGNvbnN0IGRlZmF1bHRDaG9pY2UgPSBjaG9pY2VzWzBdOyAvLyBUaGUgZmlyc3QgY2hvaWNlIGlzIHRoZSBkZWZhdWx0XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hvaWNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBjaG9pY2VOYW1lID0gY2hvaWNlc1tpXTtcbiAgICAgICAgaWYgKCFjaG9pY2VOYW1lKSBjb250aW51ZTtcbiAgICAgICAgXG4gICAgICAgIGxhc3RPcHRpb25JZE51bSsrO1xuICAgICAgICBjb25zdCBuZXdPcHRpb25JZCA9IGBvJHtsYXN0T3B0aW9uSWROdW0udG9TdHJpbmcoKS5wYWRTdGFydCgzLCAnMCcpfWA7XG4gICAgICAgIGNvbnN0IHByaWNlRGVsdGEgPSAhaXNOYU4ocHJpY2VEZWx0YXNbaV0pID8gcHJpY2VEZWx0YXNbaV0gOiAwO1xuICAgICAgICBjb25zdCBpc0RlZmF1bHQgPSBjaG9pY2VOYW1lID09PSBkZWZhdWx0Q2hvaWNlO1xuXG4gICAgICAgIG9wdGlvbnNWYWx1ZXMucHVzaChbXG4gICAgICAgICAgbmV3T3B0aW9uSWQsXG4gICAgICAgICAgbmV3TWVudUlkLFxuICAgICAgICAgIGdyb3VwLmdyb3VwTmFtZSxcbiAgICAgICAgICBjaG9pY2VOYW1lLFxuICAgICAgICAgIHByaWNlRGVsdGEsXG4gICAgICAgICAgaXNEZWZhdWx0ID8gJ1RSVUUnIDogJ0ZBTFNFJ1xuICAgICAgICBdKTtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgaWYgKG9wdGlvbnNWYWx1ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBhd2FpdCBhcHBlbmRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGAke01FTlVfT1BUSU9OU19TSEVFVF9OQU1FfSFBOkZgLCBvcHRpb25zVmFsdWVzKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZW51SXRlbUlkOiBuZXdNZW51SWQgfTtcbn1cblxuZXhwb3J0IHR5cGUgVXBkYXRlTWVudUl0ZW1SZXF1ZXN0ID0ge1xuICAgIGlkOiBzdHJpbmc7IC8vIEV4aXN0aW5nIG1lbnUgaXRlbSBJRFxuICAgIHZlbmRvcklkOiBzdHJpbmc7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICAgIHByaWNlOiBudW1iZXI7XG4gICAgb3B0aW9uR3JvdXBzPzogQWRkTWVudUl0ZW1SZXF1ZXN0WydvcHRpb25Hcm91cHMnXTtcbn1cblxuLyoqXG4gKiBVcGRhdGVzIGFuIGV4aXN0aW5nIG1lbnUgaXRlbSBhbmQgaXRzIG9wdGlvbnMuXG4gKiBAcGFyYW0ge1VwZGF0ZU1lbnVJdGVtUmVxdWVzdH0gaXRlbSAtIFRoZSBtZW51IGl0ZW0gZGF0YSB0byB1cGRhdGUuXG4gKiBAcmV0dXJucyB7UHJvbWlzZTx7c3VjY2VzczogYm9vbGVhbn0+fSBBIHN1Y2Nlc3MgZmxhZy5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZU1lbnVJdGVtKGl0ZW06IFVwZGF0ZU1lbnVJdGVtUmVxdWVzdCk6IFByb21pc2U8eyBzdWNjZXNzOiBib29sZWFuIH0+IHtcbiAgICAvLyBDaGVjayBmb3IgZHVwbGljYXRlIG1lbnUgaXRlbSBuYW1lXG4gICAgY29uc3QgZXhpc3RpbmdNZW51cyA9IGF3YWl0IGdldE1lbnVzQnlWZW5kb3JJZChpdGVtLnZlbmRvcklkKTtcbiAgICBpZiAoZXhpc3RpbmdNZW51cy5zb21lKG1lbnUgPT4gbWVudS5pZCAhPT0gaXRlbS5pZCAmJiBtZW51Lm5hbWUudHJpbSgpLnRvTG93ZXJDYXNlKCkgPT09IGl0ZW0ubmFtZS50cmltKCkudG9Mb3dlckNhc2UoKSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwi6Kmy5bqX5a625bey5pyJ55u45ZCM5ZCN56ix55qE5ZOB6aCF44CCXCIpO1xuICAgIH1cblxuICAgIC8vIDEuIEZpbmQgYW5kIHVwZGF0ZSB0aGUgbWVudSBpdGVtJ3MgYmFzaWMgaW5mbyAobmFtZSwgcHJpY2UpXG4gICAgY29uc3QgbWVudVJhbmdlID0gYCR7TUVOVV9TSEVFVF9OQU1FfSFBMjpGYDtcbiAgICBjb25zdCBtZW51RGF0YSA9IGF3YWl0IGdldFNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgbWVudVJhbmdlKTtcbiAgICBjb25zdCByb3dJbmRleCA9IG1lbnVEYXRhLmZpbmRJbmRleChyb3cgPT4gcm93WzBdID09PSBpdGVtLmlkKTtcblxuICAgIGlmIChyb3dJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGDmib7kuI3liLAgSUQg54K6ICR7aXRlbS5pZH0g55qE6I+c5Zau5ZOB6aCF44CCYCk7XG4gICAgfVxuICAgIGNvbnN0IHJvd1RvVXBkYXRlID0gcm93SW5kZXggKyAyOyAvLyArMiBmb3IgMS1iYXNlZCBpbmRleCBhbmQgaGVhZGVyXG4gICAgY29uc3QgdXBkYXRlTWVudVJhbmdlID0gYCR7TUVOVV9TSEVFVF9OQU1FfSFDJHtyb3dUb1VwZGF0ZX06RiR7cm93VG9VcGRhdGV9YDtcbiAgICBhd2FpdCB1cGRhdGVTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIHVwZGF0ZU1lbnVSYW5nZSwgW1tpdGVtLm5hbWUsIGl0ZW0ucHJpY2UsICdUUlVFJywgaXRlbS5kZXNjcmlwdGlvbiB8fCAnJ11dKTtcblxuICAgIC8vIDIuIFJlYWQgYWxsIGV4aXN0aW5nIG9wdGlvbnNcbiAgICBjb25zdCBtZW51T3B0aW9uc0RhdGFXaXRoSGVhZGVyID0gYXdhaXQgZ2V0U2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCBgJHtNRU5VX09QVElPTlNfU0hFRVRfTkFNRX0hQTpGYCk7XG4gICAgY29uc3Qgb3B0aW9uc0hlYWRlcnMgPSBtZW51T3B0aW9uc0RhdGFXaXRoSGVhZGVyLmxlbmd0aCA+IDAgPyBtZW51T3B0aW9uc0RhdGFXaXRoSGVhZGVyWzBdIDogW107XG4gICAgY29uc3Qgb3B0aW9uc1Jvd3MgPSBtZW51T3B0aW9uc0RhdGFXaXRoSGVhZGVyLmxlbmd0aCA+IDEgPyBtZW51T3B0aW9uc0RhdGFXaXRoSGVhZGVyLnNsaWNlKDEpIDogW107XG5cbiAgICAvLyAzLiBGaWx0ZXIgb3V0IGFsbCBvbGQgb3B0aW9ucyBmb3IgdGhlIGN1cnJlbnQgbWVudSBpdGVtXG4gICAgY29uc3Qgb3RoZXJJdGVtc09wdGlvbnMgPSBvcHRpb25zUm93cy5maWx0ZXIocm93ID0+IHJvd1sxXSAhPT0gaXRlbS5pZCk7XG4gICAgXG4gICAgLy8gNC4gQ3JlYXRlIG5ldyBvcHRpb24gcm93cyBmcm9tIHRoZSByZXF1ZXN0XG4gICAgbGV0IGxhc3RPcHRpb25JZE51bSA9IG9wdGlvbnNSb3dzLmxlbmd0aCA+IDBcbiAgICAgICAgPyBNYXRoLm1heCgwLCAuLi5vcHRpb25zUm93cy5tYXAocm93ID0+IHBhcnNlSW50KChyb3dbMF0gfHwgJ28wJykucmVwbGFjZSgnbycsICcnKSwgMTApKS5maWx0ZXIobnVtID0+ICFpc05hTihudW0pKSlcbiAgICAgICAgOiAwO1xuXG4gICAgY29uc3QgbmV3T3B0aW9uc1ZhbHVlcyA9IFtdO1xuICAgIGlmIChpdGVtLm9wdGlvbkdyb3Vwcykge1xuICAgICAgICBmb3IgKGNvbnN0IGdyb3VwIG9mIGl0ZW0ub3B0aW9uR3JvdXBzKSB7XG4gICAgICAgICAgICBjb25zdCBjaG9pY2VzID0gZ3JvdXAuY2hvaWNlcy5zcGxpdCgnLCcpLm1hcChjID0+IGMudHJpbSgpKTtcbiAgICAgICAgICAgIGNvbnN0IHByaWNlRGVsdGFzID0gKGdyb3VwLnByaWNlRGVsdGFzIHx8ICcnKS5zcGxpdCgnLCcpLm1hcChwID0+IHBhcnNlSW50KHAudHJpbSgpLCAxMCkpO1xuICAgICAgICAgICAgY29uc3QgZGVmYXVsdENob2ljZSA9IGNob2ljZXNbMF07IC8vIFRoZSBmaXJzdCBjaG9pY2UgaXMgdGhlIGRlZmF1bHRcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaG9pY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hvaWNlTmFtZSA9IGNob2ljZXNbaV07XG4gICAgICAgICAgICAgICAgaWYgKCFjaG9pY2VOYW1lKSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBsYXN0T3B0aW9uSWROdW0rKztcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdPcHRpb25JZCA9IGBvJHtsYXN0T3B0aW9uSWROdW0udG9TdHJpbmcoKS5wYWRTdGFydCgzLCAnMCcpfWA7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJpY2VEZWx0YSA9ICFpc05hTihwcmljZURlbHRhc1tpXSkgPyBwcmljZURlbHRhc1tpXSA6IDA7XG4gICAgICAgICAgICAgICAgY29uc3QgaXNEZWZhdWx0ID0gY2hvaWNlTmFtZSA9PT0gZGVmYXVsdENob2ljZTtcblxuICAgICAgICAgICAgICAgIG5ld09wdGlvbnNWYWx1ZXMucHVzaChbXG4gICAgICAgICAgICAgICAgICAgIG5ld09wdGlvbklkLFxuICAgICAgICAgICAgICAgICAgICBpdGVtLmlkLCAvLyBVc2UgZXhpc3RpbmcgbWVudSBpdGVtIElEXG4gICAgICAgICAgICAgICAgICAgIGdyb3VwLmdyb3VwTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgY2hvaWNlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgcHJpY2VEZWx0YSxcbiAgICAgICAgICAgICAgICAgICAgaXNEZWZhdWx0ID8gJ1RSVUUnIDogJ0ZBTFNFJ1xuICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gNS4gQ29tYmluZSBvbGQgb3B0aW9ucyAoZnJvbSBvdGhlciBpdGVtcykgYW5kIG5ldyBvcHRpb25zIGZvciB0aGlzIGl0ZW1cbiAgICBjb25zdCBmaW5hbE9wdGlvbnMgPSBbLi4ub3RoZXJJdGVtc09wdGlvbnMsIC4uLm5ld09wdGlvbnNWYWx1ZXNdO1xuICAgIFxuICAgIGNvbnN0IGZpbmFsVmFsdWVzID0gZmluYWxPcHRpb25zLmxlbmd0aCA+IDAgPyBbb3B0aW9uc0hlYWRlcnMsIC4uLmZpbmFsT3B0aW9uc10gOiBbb3B0aW9uc0hlYWRlcnNdO1xuXG5cbiAgICAvLyA2LiBCYXRjaCB1cGRhdGUgdGhlIG9wdGlvbnMgc2hlZXRcbiAgICBhd2FpdCBiYXRjaFVwZGF0ZVNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgW1xuICAgICAgICB7XG4gICAgICAgICAgICByYW5nZTogYCR7TUVOVV9PUFRJT05TX1NIRUVUX05BTUV9IUExOkZgLFxuICAgICAgICAgICAgdmFsdWVzOiBmaW5hbFZhbHVlcyxcbiAgICAgICAgfVxuICAgIF0pO1xuXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xufVxuXG5cbmV4cG9ydCB0eXBlIERlbGV0ZU1lbnVJdGVtUmVxdWVzdCA9IHtcbiAgICBpZDogc3RyaW5nO1xufTtcblxuLyoqXG4gKiBEZWxldGVzIGEgbWVudSBpdGVtIGZyb20gdGhlICdtZW51cycgc2hlZXQgYnkgaXRzIElELlxuICogVGhpcyBpcyBhIFwiaGFyZCBkZWxldGVcIiBvcGVyYXRpb24uIEl0IHJlYWRzIGFsbCBkYXRhLCBmaWx0ZXJzIG91dCB0aGVcbiAqIGl0ZW0gdG8gYmUgZGVsZXRlZCBhbmQgaXRzIG9wdGlvbnMsIGNsZWFycyB0aGUgc2hlZXRzLCBhbmQgd3JpdGVzIHRoZVxuICogZmlsdGVyZWQgZGF0YSBiYWNrLlxuICogQHBhcmFtIHtEZWxldGVNZW51SXRlbVJlcXVlc3R9IHJlcSAtIFRoZSByZXF1ZXN0IGNvbnRhaW5pbmcgdGhlIGl0ZW0gSUQgdG8gZGVsZXRlLlxuICogQHJldHVybnMge1Byb21pc2U8e3N1Y2Nlc3M6IGJvb2xlYW59Pn0gQSBzdWNjZXNzIGZsYWcuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVNZW51SXRlbShyZXE6IERlbGV0ZU1lbnVJdGVtUmVxdWVzdCk6IFByb21pc2U8eyBzdWNjZXNzOiBib29sZWFuIH0+IHtcbiAgLy8gMS4gR2V0IGFsbCBkYXRhIGZyb20gdGhlIHR3byBzaGVldHMsIGluY2x1ZGluZyBoZWFkZXJzLlxuICBjb25zdCBbbWVudXNEYXRhV2l0aEhlYWRlciwgbWVudU9wdGlvbnNEYXRhV2l0aEhlYWRlcl0gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgZ2V0U2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCBgJHtNRU5VX1NIRUVUX05BTUV9IUE6RmApLFxuICAgIGdldFNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgYCR7TUVOVV9PUFRJT05TX1NIRUVUX05BTUV9IUE6RmApLFxuICBdKTtcblxuICBjb25zdCBtZW51SGVhZGVycyA9IG1lbnVzRGF0YVdpdGhIZWFkZXIubGVuZ3RoID4gMCA/IG1lbnVzRGF0YVdpdGhIZWFkZXJbMF0gOiBbXTtcbiAgY29uc3QgbWVudVJvd3MgPSBtZW51c0RhdGFXaXRoSGVhZGVyLmxlbmd0aCA+IDEgPyBtZW51c0RhdGFXaXRoSGVhZGVyLnNsaWNlKDEpIDogW107XG5cbiAgY29uc3Qgb3B0aW9uc0hlYWRlcnMgPSBtZW51T3B0aW9uc0RhdGFXaXRoSGVhZGVyLmxlbmd0aCA+IDAgPyBtZW51T3B0aW9uc0RhdGFXaXRoSGVhZGVyWzBdIDogW107XG4gIGNvbnN0IG9wdGlvbnNSb3dzID0gbWVudU9wdGlvbnNEYXRhV2l0aEhlYWRlci5sZW5ndGggPiAxID8gbWVudU9wdGlvbnNEYXRhV2l0aEhlYWRlci5zbGljZSgxKSA6IFtdO1xuXG4gIC8vIDIuIEZpbHRlciBkYXRhIHRvIGtlZXAuXG4gIGNvbnN0IG1lbnVzVG9LZWVwID0gbWVudVJvd3MuZmlsdGVyKHJvdyA9PiByb3dbMF0gIT09IHJlcS5pZCk7XG4gIGNvbnN0IG1lbnVPcHRpb25zVG9LZWVwID0gb3B0aW9uc1Jvd3MuZmlsdGVyKHJvdyA9PiByb3dbMV0gIT09IHJlcS5pZCk7XG5cbiAgLy8gMy4gUHJlcGFyZSBiYXRjaCB1cGRhdGUgZGF0YSAoY2xlYXIgYW5kIHdyaXRlKS5cbiAgLy8gV2Ugd3JpdGUgYmFjayB0aGUgaGVhZGVycyBwbHVzIHRoZSBmaWx0ZXJlZCBkYXRhLlxuICBjb25zdCBiYXRjaERhdGEgPSBbXG4gICAge1xuICAgICAgcmFuZ2U6IGAke01FTlVfU0hFRVRfTkFNRX0hQTE6RmAsXG4gICAgICB2YWx1ZXM6IG1lbnVIZWFkZXJzLmxlbmd0aCA+IDAgPyBbbWVudUhlYWRlcnMsIC4uLm1lbnVzVG9LZWVwXSA6IG1lbnVzVG9LZWVwLFxuICAgIH0sXG4gICAge1xuICAgICAgcmFuZ2U6IGAke01FTlVfT1BUSU9OU19TSEVFVF9OQU1FfSFBMTpGYCxcbiAgICAgIHZhbHVlczogb3B0aW9uc0hlYWRlcnMubGVuZ3RoID4gMCA/IFtvcHRpb25zSGVhZGVycywgLi4ubWVudU9wdGlvbnNUb0tlZXBdIDogbWVudU9wdGlvbnNUb0tlZXAsXG4gICAgfSxcbiAgXTtcblxuICAvLyA0LiBFeGVjdXRlIGJhdGNoIHVwZGF0ZS5cbiAgYXdhaXQgYmF0Y2hVcGRhdGVTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGJhdGNoRGF0YSk7XG4gIFxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG59XG5cbmV4cG9ydCB0eXBlIEJhdGNoRGVsZXRlTWVudUl0ZW1zUmVxdWVzdCA9IHtcbiAgICBpZHM6IHN0cmluZ1tdO1xufTtcblxuLyoqXG4gKiBEZWxldGVzIG11bHRpcGxlIG1lbnUgaXRlbXMgYW5kIHRoZWlyIGFzc29jaWF0ZWQgb3B0aW9ucyBpbiBhIHNpbmdsZSBiYXRjaCBvcGVyYXRpb24uXG4gKiBAcGFyYW0ge0JhdGNoRGVsZXRlTWVudUl0ZW1zUmVxdWVzdH0gcmVxIC0gVGhlIHJlcXVlc3QgY29udGFpbmluZyB0aGUgYXJyYXkgb2YgaXRlbSBJRHMgdG8gZGVsZXRlLlxuICogQHJldHVybnMge1Byb21pc2U8e3N1Y2Nlc3M6IGJvb2xlYW59Pn0gQSBzdWNjZXNzIGZsYWcuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBiYXRjaERlbGV0ZU1lbnVJdGVtcyhyZXE6IEJhdGNoRGVsZXRlTWVudUl0ZW1zUmVxdWVzdCk6IFByb21pc2U8eyBzdWNjZXNzOiBib29sZWFuIH0+IHtcbiAgaWYgKCFyZXEuaWRzIHx8IHJlcS5pZHMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9OyAvLyBOb3RoaW5nIHRvIGRlbGV0ZVxuICB9XG5cbiAgLy8gMS4gR2V0IGFsbCBkYXRhIGZyb20gdGhlIHR3byBzaGVldHMsIGluY2x1ZGluZyBoZWFkZXJzLlxuICBjb25zdCBbbWVudXNEYXRhV2l0aEhlYWRlciwgbWVudU9wdGlvbnNEYXRhV2l0aEhlYWRlcl0gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgZ2V0U2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCBgJHtNRU5VX1NIRUVUX05BTUV9IUE6RmApLFxuICAgIGdldFNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgYCR7TUVOVV9PUFRJT05TX1NIRUVUX05BTUV9IUE6RmApLFxuICBdKTtcblxuICBjb25zdCBtZW51SGVhZGVycyA9IG1lbnVzRGF0YVdpdGhIZWFkZXIubGVuZ3RoID4gMCA/IG1lbnVzRGF0YVdpdGhIZWFkZXJbMF0gOiBbXTtcbiAgY29uc3QgbWVudVJvd3MgPSBtZW51c0RhdGFXaXRoSGVhZGVyLmxlbmd0aCA+IDEgPyBtZW51c0RhdGFXaXRoSGVhZGVyLnNsaWNlKDEpIDogW107XG5cbiAgY29uc3Qgb3B0aW9uc0hlYWRlcnMgPSBtZW51T3B0aW9uc0RhdGFXaXRoSGVhZGVyLmxlbmd0aCA+IDAgPyBtZW51T3B0aW9uc0RhdGFXaXRoSGVhZGVyWzBdIDogW107XG4gIGNvbnN0IG9wdGlvbnNSb3dzID0gbWVudU9wdGlvbnNEYXRhV2l0aEhlYWRlci5sZW5ndGggPiAxID8gbWVudU9wdGlvbnNEYXRhV2l0aEhlYWRlci5zbGljZSgxKSA6IFtdO1xuXG4gIC8vIDIuIEZpbHRlciBkYXRhIHRvIGtlZXAuXG4gIGNvbnN0IGlkc1RvRGVsZXRlU2V0ID0gbmV3IFNldChyZXEuaWRzKTtcbiAgY29uc3QgbWVudXNUb0tlZXAgPSBtZW51Um93cy5maWx0ZXIocm93ID0+ICFpZHNUb0RlbGV0ZVNldC5oYXMocm93WzBdKSk7XG4gIGNvbnN0IG1lbnVPcHRpb25zVG9LZWVwID0gb3B0aW9uc1Jvd3MuZmlsdGVyKHJvdyA9PiAhaWRzVG9EZWxldGVTZXQuaGFzKHJvd1sxXSkpO1xuXG4gIC8vIDMuIFByZXBhcmUgYmF0Y2ggdXBkYXRlIGRhdGEgKGNsZWFyIGFuZCB3cml0ZSkuXG4gIC8vIFdlIHdyaXRlIGJhY2sgdGhlIGhlYWRlcnMgcGx1cyB0aGUgZmlsdGVyZWQgZGF0YS5cbiAgY29uc3QgYmF0Y2hEYXRhID0gW1xuICAgIHtcbiAgICAgIHJhbmdlOiBgJHtNRU5VX1NIRUVUX05BTUV9IUExOkZgLFxuICAgICAgdmFsdWVzOiBtZW51SGVhZGVycy5sZW5ndGggPiAwID8gW21lbnVIZWFkZXJzLCAuLi5tZW51c1RvS2VlcF0gOiBbXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHJhbmdlOiBgJHtNRU5VX09QVElPTlNfU0hFRVRfTkFNRX0hQTE6RmAsXG4gICAgICB2YWx1ZXM6IG9wdGlvbnNIZWFkZXJzLmxlbmd0aCA+IDAgPyBbb3B0aW9uc0hlYWRlcnMsIC4uLm1lbnVPcHRpb25zVG9LZWVwXSA6IFtdLFxuICAgIH0sXG4gIF07XG5cbiAgLy8gNC4gRXhlY3V0ZSBiYXRjaCB1cGRhdGUuXG4gIGF3YWl0IGJhdGNoVXBkYXRlU2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCBiYXRjaERhdGEpO1xuICBcbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xufVxuXG4vKipcbiAqIER1cGxpY2F0ZXMgYSBtZW51IGl0ZW0gYW5kIGFsbCBpdHMgYXNzb2NpYXRlZCBvcHRpb25zLlxuICogQHBhcmFtIHtzdHJpbmd9IG1lbnVJdGVtSWQgLSBUaGUgSUQgb2YgdGhlIG1lbnUgaXRlbSB0byBkdXBsaWNhdGUuXG4gKiBAcmV0dXJucyB7UHJvbWlzZTx7c3VjY2VzczogYm9vbGVhbn0+fSBBIHN1Y2Nlc3MgZmxhZy5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGR1cGxpY2F0ZU1lbnVJdGVtKG1lbnVJdGVtSWQ6IHN0cmluZyk6IFByb21pc2U8eyBzdWNjZXNzOiBib29sZWFuIH0+IHtcbiAgLy8gMS4gRmV0Y2ggYWxsIGV4aXN0aW5nIGRhdGFcbiAgY29uc3QgW1xuICAgIG1lbnVzRGF0YVdpdGhIZWFkZXIsXG4gICAgbWVudU9wdGlvbnNEYXRhV2l0aEhlYWRlcixcbiAgXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGAke01FTlVfU0hFRVRfTkFNRX0hQTpGYCksXG4gICAgZ2V0U2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCBgJHtNRU5VX09QVElPTlNfU0hFRVRfTkFNRX0hQTpGYCksXG4gIF0pO1xuXG4gIGNvbnN0IG1lbnVSb3dzID0gbWVudXNEYXRhV2l0aEhlYWRlci5sZW5ndGggPiAxID8gbWVudXNEYXRhV2l0aEhlYWRlci5zbGljZSgxKSA6IFtdO1xuICBjb25zdCBvcHRpb25zUm93cyA9IG1lbnVPcHRpb25zRGF0YVdpdGhIZWFkZXIubGVuZ3RoID4gMSA/IG1lbnVPcHRpb25zRGF0YVdpdGhIZWFkZXIuc2xpY2UoMSkgOiBbXTtcblxuICAvLyAyLiBGaW5kIHRoZSBvcmlnaW5hbCBpdGVtIGFuZCBvcHRpb25zXG4gIGNvbnN0IG9yaWdpbmFsTWVudVJvdyA9IG1lbnVSb3dzLmZpbmQocm93ID0+IHJvd1swXSA9PT0gbWVudUl0ZW1JZCk7XG4gIGlmICghb3JpZ2luYWxNZW51Um93KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGDmib7kuI3liLAgSUQg54K6ICR7bWVudUl0ZW1JZH0g55qE6I+c5Zau5ZOB6aCF44CCYCk7XG4gIH1cblxuICBjb25zdCBvcmlnaW5hbE9wdGlvbnMgPSBvcHRpb25zUm93cy5maWx0ZXIocm93ID0+IHJvd1sxXSA9PT0gbWVudUl0ZW1JZCk7XG5cbiAgLy8gMy4gR2VuZXJhdGUgbmV3IG1lbnUgaXRlbSBpbmZvXG4gIGxldCBuZXdNZW51TmFtZSA9IGAke29yaWdpbmFsTWVudVJvd1syXX0gLSDlia/mnKxgO1xuICBsZXQgc3VmZml4ID0gMjtcbiAgd2hpbGUgKG1lbnVSb3dzLnNvbWUocm93ID0+IHJvd1syXSA9PT0gbmV3TWVudU5hbWUgJiYgcm93WzFdID09PSBvcmlnaW5hbE1lbnVSb3dbMV0pKSB7XG4gICAgbmV3TWVudU5hbWUgPSBgJHtvcmlnaW5hbE1lbnVSb3dbMl19IC0g5Ymv5pysICR7c3VmZml4fWA7XG4gICAgc3VmZml4Kys7XG4gIH1cbiAgXG4gIGxldCBsYXN0TWVudUlkTnVtID0gbWVudVJvd3MubGVuZ3RoID4gMCA/IE1hdGgubWF4KDAsIC4uLm1lbnVSb3dzLm1hcChyb3cgPT4gcGFyc2VJbnQoKHJvd1swXSB8fCAnbTAnKS5yZXBsYWNlKCdtJywgJycpLCAxMCkpLmZpbHRlcihudW0gPT4gIWlzTmFOKG51bSkpKSA6IDA7XG4gIGNvbnN0IG5ld01lbnVJZCA9IGBtJHsobGFzdE1lbnVJZE51bSArIDEpLnRvU3RyaW5nKCkucGFkU3RhcnQoMywgJzAnKX1gO1xuICBcbiAgY29uc3QgbmV3TWVudURhdGEgPSBbW1xuICAgICAgbmV3TWVudUlkLFxuICAgICAgb3JpZ2luYWxNZW51Um93WzFdLCAvLyB2ZW5kb3JJZFxuICAgICAgbmV3TWVudU5hbWUsXG4gICAgICBvcmlnaW5hbE1lbnVSb3dbM10sIC8vIHByaWNlXG4gICAgICBvcmlnaW5hbE1lbnVSb3dbNF0sIC8vIGlzQWN0aXZlXG4gICAgICBvcmlnaW5hbE1lbnVSb3dbNV0sIC8vIGRlc2NyaXB0aW9uXG4gIF1dO1xuXG4gIC8vIDQuIEdlbmVyYXRlIG5ldyBvcHRpb25zXG4gIGxldCBsYXN0T3B0aW9uSWROdW0gPSBvcHRpb25zUm93cy5sZW5ndGggPiAwID8gTWF0aC5tYXgoMCwgLi4ub3B0aW9uc1Jvd3MubWFwKHJvdyA9PiBwYXJzZUludCgocm93WzBdIHx8ICdvMCcpLnJlcGxhY2UoJ28nLCAnJyksIDEwKSkuZmlsdGVyKG51bSA9PiAhaXNOYU4obnVtKSkpIDogMDtcbiAgXG4gIGNvbnN0IG5ld09wdGlvbnNEYXRhID0gW107XG4gIGZvciAoY29uc3Qgb3B0aW9uUm93IG9mIG9yaWdpbmFsT3B0aW9ucykge1xuICAgIGxhc3RPcHRpb25JZE51bSsrO1xuICAgIGNvbnN0IG5ld09wdGlvbklkID0gYG8ke2xhc3RPcHRpb25JZE51bS50b1N0cmluZygpLnBhZFN0YXJ0KDMsICcwJyl9YDtcbiAgICBuZXdPcHRpb25zRGF0YS5wdXNoKFtcbiAgICAgIG5ld09wdGlvbklkLFxuICAgICAgbmV3TWVudUlkLCAvLyBMaW5rIHRvIHRoZSBuZXcgbWVudSBpdGVtXG4gICAgICBvcHRpb25Sb3dbMl0sIC8vIGdyb3VwTmFtZVxuICAgICAgb3B0aW9uUm93WzNdLCAvLyBjaG9pY2VOYW1lXG4gICAgICBvcHRpb25Sb3dbNF0sIC8vIHByaWNlRGVsdGFcbiAgICAgIG9wdGlvblJvd1s1XSwgLy8gaXNEZWZhdWx0XG4gICAgXSk7XG4gIH1cblxuICAvLyA1LiBBcHBlbmQgYWxsIG5ldyBkYXRhIHRvIHNoZWV0c1xuICBhd2FpdCBhcHBlbmRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGAke01FTlVfU0hFRVRfTkFNRX0hQTpGYCwgbmV3TWVudURhdGEpO1xuICBpZiAobmV3T3B0aW9uc0RhdGEubGVuZ3RoID4gMCkge1xuICAgIGF3YWl0IGFwcGVuZFNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgYCR7TUVOVV9PUFRJT05TX1NIRUVUX05BTUV9IUE6RmAsIG5ld09wdGlvbnNEYXRhKTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbn1cblxuXG4vLyAtLS0gTWVudSBPcHRpb24gRmxvd3MgLS0tXG5cbmV4cG9ydCB0eXBlIEFkZE1lbnVPcHRpb25SZXF1ZXN0ID0ge1xuICBtZW51SXRlbUlkOiBzdHJpbmc7XG4gIGdyb3VwTmFtZTogc3RyaW5nO1xuICBjaG9pY2VOYW1lOiBzdHJpbmc7XG4gIHByaWNlRGVsdGE6IG51bWJlcjtcbiAgaXNEZWZhdWx0OiBib29sZWFuO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkTWVudU9wdGlvbihyZXE6IEFkZE1lbnVPcHRpb25SZXF1ZXN0KTogUHJvbWlzZTx7IHN1Y2Nlc3M6IGJvb2xlYW4gfT4ge1xuICAvLyBJZiB0aGUgbmV3IG9wdGlvbiBpcyBkZWZhdWx0LCB1bnNldCBvdGhlciBkZWZhdWx0cyBpbiB0aGUgc2FtZSBncm91cC5cbiAgaWYgKHJlcS5pc0RlZmF1bHQpIHtcbiAgICBhd2FpdCBzZXRNZW51T3B0aW9uRGVmYXVsdCh7IG1lbnVJdGVtSWQ6IHJlcS5tZW51SXRlbUlkLCBncm91cE5hbWU6IHJlcS5ncm91cE5hbWUsIG9wdGlvbklkOiAnJyB9KTsgLy8gUGFzcyBlbXB0eSBvcHRpb25JZCB0byB1bnNldCBhbGwsIG5ldyBvbmUgd2lsbCBiZSBzZXRcbiAgfVxuXG4gIGNvbnN0IHJhbmdlID0gYCR7TUVOVV9PUFRJT05TX1NIRUVUX05BTUV9IUE6RmA7XG4gIGNvbnN0IGFsbE9wdGlvbnNSYW5nZSA9IGAke01FTlVfT1BUSU9OU19TSEVFVF9OQU1FfSFBMjpBYDtcbiAgXG4gIGNvbnN0IGFsbE9wdGlvbklkc0RhdGEgPSBhd2FpdCBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGFsbE9wdGlvbnNSYW5nZSk7XG4gIGNvbnN0IGxhc3RJZE51bSA9IGFsbE9wdGlvbklkc0RhdGEubGVuZ3RoID4gMCBcbiAgICAgID8gTWF0aC5tYXgoMCwgLi4uYWxsT3B0aW9uSWRzRGF0YS5tYXAocm93ID0+IHBhcnNlSW50KChyb3dbMF0gfHwgJ28wJykucmVwbGFjZSgnbycsICcnKSwgMTApKS5maWx0ZXIobnVtID0+ICFpc05hTihudW0pKSlcbiAgICAgIDogMDtcblxuICBjb25zdCBuZXdJZCA9IGBvJHsobGFzdElkTnVtICsgMSkudG9TdHJpbmcoKS5wYWRTdGFydCgzLCAnMCcpfWA7XG4gIFxuICBjb25zdCB2YWx1ZXMgPSBbW1xuICAgIG5ld0lkLCBcbiAgICByZXEubWVudUl0ZW1JZCwgXG4gICAgcmVxLmdyb3VwTmFtZSwgXG4gICAgcmVxLmNob2ljZU5hbWUsIFxuICAgIHJlcS5wcmljZURlbHRhLCBcbiAgICByZXEuaXNEZWZhdWx0ID8gJ1RSVUUnIDogJ0ZBTFNFJ1xuICBdXTtcblxuICBhd2FpdCBhcHBlbmRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIHJhbmdlLCB2YWx1ZXMpO1xuXG4gIC8vIElmIHRoZSBuZXcgb3B0aW9uIHdhcyBzZXQgdG8gZGVmYXVsdCwgZW5zdXJlIGl0IGlzIG5vdyB0aGUgb25seSBkZWZhdWx0IG9uZVxuICBpZihyZXEuaXNEZWZhdWx0KSB7XG4gICAgICBhd2FpdCBzZXRNZW51T3B0aW9uRGVmYXVsdCh7IG9wdGlvbklkOiBuZXdJZCwgbWVudUl0ZW1JZDogcmVxLm1lbnVJdGVtSWQsIGdyb3VwTmFtZTogcmVxLmdyb3VwTmFtZSB9KTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbn1cblxuXG5leHBvcnQgdHlwZSBEZWxldGVNZW51T3B0aW9uUmVxdWVzdCA9IHtcbiAgb3B0aW9uSWQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZU1lbnVPcHRpb24ocmVxOiBEZWxldGVNZW51T3B0aW9uUmVxdWVzdCk6IFByb21pc2U8eyBzdWNjZXNzOiBib29sZWFuIH0+IHtcbiAgY29uc3QgcmFuZ2UgPSBgJHtNRU5VX09QVElPTlNfU0hFRVRfTkFNRX0hQTI6RmA7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIHJhbmdlKTtcblxuICBpZiAoIWRhdGEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIuaJvuS4jeWIsOiPnOWWrumBuOmgheizh+aWmeOAglwiKTtcbiAgfVxuICBcbiAgY29uc3Qgcm93SW5kZXggPSBkYXRhLmZpbmRJbmRleChyb3cgPT4gcm93WzBdID09PSByZXEub3B0aW9uSWQpO1xuICBcbiAgaWYgKHJvd0luZGV4ID09PSAtMSkge1xuICAgICAgY29uc29sZS5sb2coYOaJvuS4jeWIsCBJRCDngrogJHtyZXEub3B0aW9uSWR9IOeahOiPnOWWrumBuOmgheOAgmApO1xuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UgfTsgLy8gSXRlbSBub3QgZm91bmRcbiAgfVxuXG4gIGNvbnN0IHJvd1RvRGVsZXRlID0gcm93SW5kZXggKyAyOyBcbiAgLy8gVGhpcyBpcyBub3QgYSBncmVhdCB3YXkgdG8gXCJkZWxldGVcIiBhIHJvdy4gQSBiZXR0ZXIgd2F5IGlzIHRvIHJlYWQgYWxsLCBmaWx0ZXIsIGNsZWFyLCBhbmQgd3JpdGUgYmFjay5cbiAgLy8gRm9yIG5vdywgbGV0J3MganVzdCBjbGVhciB0aGUgc3BlY2lmaWMgcm93LlxuICBjb25zdCBjbGVhclJhbmdlID0gYCR7TUVOVV9PUFRJT05TX1NIRUVUX05BTUV9IUEke3Jvd1RvRGVsZXRlfTpGJHtyb3dUb0RlbGV0ZX1gO1xuXG4gIGF3YWl0IGNsZWFyU2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCBjbGVhclJhbmdlKTtcbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xufVxuXG5leHBvcnQgdHlwZSBTZXRNZW51T3B0aW9uRGVmYXVsdFJlcXVlc3QgPSB7XG4gIG9wdGlvbklkOiBzdHJpbmc7IC8vIFRoZSBvcHRpb24gdG8gc2V0IGFzIGRlZmF1bHQuIElmIGVtcHR5LCBhbGwgb3B0aW9ucyBpbiBncm91cCB3aWxsIGJlIHVuc2V0LlxuICBtZW51SXRlbUlkOiBzdHJpbmc7XG4gIGdyb3VwTmFtZTogc3RyaW5nO1xufVxuXG4vKipcbiAqIFNldHMgYSBzcGVjaWZpYyBvcHRpb24gYXMgdGhlIGRlZmF1bHQgZm9yIGl0cyBncm91cCwgdW5zZXR0aW5nIGFueSBwcmV2aW91cyBkZWZhdWx0LlxuICogQHBhcmFtIHJlcSBUaGUgcmVxdWVzdCBjb250YWluaW5nIG9wdGlvbiwgbWVudSBpdGVtLCBhbmQgZ3JvdXAgaWRlbnRpZmllcnMuXG4gKiBAcmV0dXJucyBBIHN1Y2Nlc3MgZmxhZy5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNldE1lbnVPcHRpb25EZWZhdWx0KHJlcTogU2V0TWVudU9wdGlvbkRlZmF1bHRSZXF1ZXN0KTogUHJvbWlzZTx7IHN1Y2Nlc3M6IGJvb2xlYW4gfT4ge1xuICAgIGNvbnN0IHsgb3B0aW9uSWQsIG1lbnVJdGVtSWQsIGdyb3VwTmFtZSB9ID0gcmVxO1xuICAgIGNvbnN0IHJhbmdlID0gYCR7TUVOVV9PUFRJT05TX1NIRUVUX05BTUV9IUEyOkZgO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIHJhbmdlKTtcblxuICAgIGlmICghZGF0YSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCLmib7kuI3liLDoj5zllq7pgbjpoIXos4fmlpnjgIJcIik7XG4gICAgfVxuXG4gICAgY29uc3QgdXBkYXRlcyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCByb3cgPSBkYXRhW2ldO1xuICAgICAgICAvLyBDaGVjayBpZiB0aGUgb3B0aW9uIGJlbG9uZ3MgdG8gdGhlIHNhbWUgbWVudSBpdGVtIGFuZCBncm91cFxuICAgICAgICBpZiAocm93WzFdID09PSBtZW51SXRlbUlkICYmIHJvd1syXSA9PT0gZ3JvdXBOYW1lKSB7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50T3B0aW9uSWQgPSByb3dbMF07XG4gICAgICAgICAgICBjb25zdCBpc0N1cnJlbnRseURlZmF1bHQgPSByb3dbNV0gPT09ICdUUlVFJztcbiAgICAgICAgICAgIGNvbnN0IHNob3VsZEJlRGVmYXVsdCA9IGN1cnJlbnRPcHRpb25JZCA9PT0gb3B0aW9uSWQ7XG5cbiAgICAgICAgICAgIC8vIElmIHRoaXMgcm93IG5lZWRzIHRvIGNoYW5nZSBpdHMgZGVmYXVsdCBzdGF0dXNcbiAgICAgICAgICAgIGlmIChpc0N1cnJlbnRseURlZmF1bHQgIT09IHNob3VsZEJlRGVmYXVsdCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJvd1RvVXBkYXRlID0gaSArIDI7IC8vICsyIGJlY2F1c2Ugc2hlZXQgaXMgMS1pbmRleGVkIGFuZCB3ZSBza2lwcGVkIGhlYWRlclxuICAgICAgICAgICAgICAgIHVwZGF0ZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIHJhbmdlOiBgJHtNRU5VX09QVElPTlNfU0hFRVRfTkFNRX0hRiR7cm93VG9VcGRhdGV9YCxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzOiBbW3Nob3VsZEJlRGVmYXVsdCA/ICdUUlVFJyA6ICdGQUxTRSddXSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmICh1cGRhdGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIC8vIE5vdGU6IFRoaXMgY2FuIGJlIHNsb3cgaWYgdGhlcmUgYXJlIG1hbnkgdXBkYXRlcy4gQmF0Y2hpbmcgd291bGQgYmUgYmV0dGVyLlxuICAgICAgZm9yIChjb25zdCB1cGRhdGUgb2YgdXBkYXRlcykge1xuICAgICAgICAgIGF3YWl0IHVwZGF0ZVNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgdXBkYXRlLnJhbmdlLCB1cGRhdGUudmFsdWVzKTtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJpU0FzVnNCIn0=
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/ai/flows/data:4a714a [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"40dfee3107286cb3b684d1c0f08025db31158a006e":"updateMenuItem"},"src/ai/flows/menu-flow.ts",""] */ __turbopack_context__.s({
    "updateMenuItem": (()=>updateMenuItem)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var updateMenuItem = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40dfee3107286cb3b684d1c0f08025db31158a006e", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "updateMenuItem"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vbWVudS1mbG93LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuJ3VzZSBzZXJ2ZXInO1xuLyoqXG4gKiBAZmlsZU92ZXJ2aWV3IEZsb3cgZm9yIGhhbmRsaW5nIG1lbnUgZGF0YSBmcm9tIEdvb2dsZSBTaGVldHMuXG4gKi9cbmltcG9ydCB7IGdldFNoZWV0RGF0YSwgYXBwZW5kU2hlZXREYXRhLCBjbGVhclNoZWV0RGF0YSwgdXBkYXRlU2hlZXREYXRhLCBiYXRjaFVwZGF0ZVNoZWV0RGF0YSB9IGZyb20gJ0Avc2VydmljZXMvc2hlZXQtc2VydmljZSc7XG5pbXBvcnQgeyB0eXBlIEFkZE1lbnVJdGVtUmVxdWVzdCwgQWRkTWVudUl0ZW1SZXF1ZXN0U2NoZW1hIH0gZnJvbSAnQC9saWIvc2NoZW1hL21lbnUnO1xuXG4vLyBUaGUgSUQgb2YgeW91ciBHb29nbGUgU2hlZXRcbmNvbnN0IFNQUkVBRFNIRUVUX0lEID0gJzFaajJoMGNZbHJiMm1CYU5nbDEtUG9PSzd0bENDd0RjY0FYbjV3NjZocDRjJztcbmNvbnN0IE1FTlVfU0hFRVRfTkFNRSA9ICdtZW51cyc7XG5jb25zdCBNRU5VX09QVElPTlNfU0hFRVRfTkFNRSA9ICdtZW51X29wdGlvbnMnO1xuXG5leHBvcnQgdHlwZSBNZW51T3B0aW9uQ2hvaWNlID0ge1xuICBpZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIHByaWNlRGVsdGE6IG51bWJlcjtcbiAgaXNEZWZhdWx0OiBib29sZWFuO1xufVxuXG5leHBvcnQgdHlwZSBNZW51T3B0aW9uR3JvdXAgPSB7XG4gIG5hbWU6IHN0cmluZztcbiAgY2hvaWNlczogTWVudU9wdGlvbkNob2ljZVtdO1xufVxuXG5leHBvcnQgdHlwZSBNZW51SXRlbSA9IHtcbiAgaWQ6IHN0cmluZztcbiAgdmVuZG9ySWQ6IHN0cmluZztcbiAgbmFtZTpzdHJpbmc7XG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICBwcmljZTogbnVtYmVyO1xuICBpc0FjdGl2ZTogYm9vbGVhbjtcbiAgb3B0aW9ucz86IE1lbnVPcHRpb25Hcm91cFtdO1xufTtcblxuLyoqXG4gKiBSZXRyaWV2ZXMgYWxsIG1lbnUgaXRlbXMgZm9yIGEgZ2l2ZW4gdmVuZG9yIGZyb20gdGhlICdtZW51cycgc2hlZXQsIGluY2x1ZGluZyB0aGVpciBvcHRpb25zLlxuICogQHBhcmFtIHtzdHJpbmd9IHZlbmRvcklkIFRoZSBJRCBvZiB0aGUgdmVuZG9yLlxuICogQHJldHVybnMge1Byb21pc2U8TWVudUl0ZW1bXT59IEEgbGlzdCBvZiBtZW51IGl0ZW1zIHdpdGggdGhlaXIgb3B0aW9ucy5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE1lbnVzQnlWZW5kb3JJZCh2ZW5kb3JJZDogc3RyaW5nKTogUHJvbWlzZTxNZW51SXRlbVtdPiB7XG4gIHRyeSB7XG4gICAgY29uc3QgW21lbnVTaGVldERhdGEsIG9wdGlvbnNTaGVldERhdGFdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGAke01FTlVfU0hFRVRfTkFNRX0hQTpGYCksXG4gICAgICAgIGdldFNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgYCR7TUVOVV9PUFRJT05TX1NIRUVUX05BTUV9IUE6RmApXG4gICAgXSk7XG4gICAgXG4gICAgLy8gSWYgdGhlcmUncyBubyBkYXRhIG9yIG9ubHkgYSBoZWFkZXIgcm93LCByZXR1cm4gYW4gZW1wdHkgYXJyYXkuXG4gICAgaWYgKCFtZW51U2hlZXREYXRhIHx8IG1lbnVTaGVldERhdGEubGVuZ3RoIDwgMikge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIGNvbnN0IG1lbnVIZWFkZXJzID0gbWVudVNoZWV0RGF0YVswXS5tYXAoaCA9PiBTdHJpbmcoaCkudHJpbSgpKTtcbiAgICBjb25zdCBtZW51Um93cyA9IG1lbnVTaGVldERhdGEuc2xpY2UoMSk7XG5cbiAgICBjb25zdCBtZW51SGVhZGVyTWFwID0gbWVudUhlYWRlcnMucmVkdWNlKChhY2MsIGhlYWRlciwgaW5kZXgpID0+IHtcbiAgICAgICAgYWNjW2hlYWRlci50cmltKCldID0gaW5kZXg7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30gYXMgUmVjb3JkPHN0cmluZywgbnVtYmVyPik7XG4gICAgXG4gICAgLy8gQWRkIHZhbGlkYXRpb24gdG8gZW5zdXJlIGFsbCByZXF1aXJlZCBjb2x1bW5zIGV4aXN0XG4gICAgY29uc3QgcmVxdWlyZWRNZW51Q29sdW1ucyA9IFsnaWQnLCAndmVuZG9ySWQnLCAnbmFtZScsICdwcmljZScsICdpc0FjdGl2ZSddO1xuICAgIGZvciAoY29uc3QgY29sIG9mIHJlcXVpcmVkTWVudUNvbHVtbnMpIHtcbiAgICAgICAgaWYgKG1lbnVIZWFkZXJNYXBbY29sXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvcjogVGhlICcke01FTlVfU0hFRVRfTkFNRX0nIHNoZWV0IGlzIG1pc3NpbmcgdGhlIHJlcXVpcmVkIGNvbHVtbjogJyR7Y29sfScuYCk7XG4gICAgICAgICAgICByZXR1cm4gW107IC8vIFJldHVybiBlbXB0eSBhcnJheSB0byBwcmV2ZW50IGNyYXNoXG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGNvbnN0IGFsbEl0ZW1zOiBNZW51SXRlbVtdID0gbWVudVJvd3NcbiAgICAgIC5tYXAocm93ID0+IHtcbiAgICAgICAgLy8gU2tpcCBlbXB0eSByb3dzIHRvIHByZXZlbnQgZXJyb3JzXG4gICAgICAgIGlmICghcm93IHx8IHJvdy5ldmVyeShjZWxsID0+ICFjZWxsKSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGlkID0gcm93W21lbnVIZWFkZXJNYXBbJ2lkJ11dO1xuICAgICAgICBjb25zdCByb3dWZW5kb3JJZCA9IHJvd1ttZW51SGVhZGVyTWFwWyd2ZW5kb3JJZCddXTtcbiAgICAgICAgY29uc3QgbmFtZSA9IHJvd1ttZW51SGVhZGVyTWFwWyduYW1lJ11dO1xuICAgICAgICBjb25zdCBwcmljZSA9IHBhcnNlSW50KHJvd1ttZW51SGVhZGVyTWFwWydwcmljZSddXSB8fCAnMCcsIDEwKTtcbiAgICAgICAgXG4gICAgICAgIC8vIFN0cmljdGVyIHZhbGlkYXRpb246IGVuc3VyZSBlc3NlbnRpYWwgZmllbGRzIGV4aXN0IGFuZCBtYXRjaCB2ZW5kb3JJZFxuICAgICAgICBpZiAoIWlkIHx8ICFuYW1lIHx8IGlzTmFOKHByaWNlKSB8fCByb3dWZW5kb3JJZCAhPT0gdmVuZG9ySWQpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICAgIHZlbmRvcklkOiByb3dWZW5kb3JJZCxcbiAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogcm93W21lbnVIZWFkZXJNYXBbJ2Rlc2NyaXB0aW9uJ11dIHx8ICcnLFxuICAgICAgICAgICAgcHJpY2U6IHByaWNlLFxuICAgICAgICAgICAgaXNBY3RpdmU6IHJvd1ttZW51SGVhZGVyTWFwWydpc0FjdGl2ZSddXSA9PT0gJ1RSVUUnIHx8IHJvd1ttZW51SGVhZGVyTWFwWydpc0FjdGl2ZSddXSA9PT0gdHJ1ZSxcbiAgICAgICAgICAgIG9wdGlvbnM6IFtdLFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmZpbHRlcihCb29sZWFuKSBhcyBNZW51SXRlbVtdOyAvLyBGaWx0ZXIgb3V0IG51bGwgdmFsdWVzXG4gICAgICBcbiAgICBpZiAob3B0aW9uc1NoZWV0RGF0YSAmJiBvcHRpb25zU2hlZXREYXRhLmxlbmd0aCA+IDEpIHtcbiAgICAgIGNvbnN0IG9wdGlvbnNIZWFkZXJzID0gb3B0aW9uc1NoZWV0RGF0YVswXS5tYXAoaCA9PiBTdHJpbmcoaCkudHJpbSgpKTtcbiAgICAgIGNvbnN0IG9wdGlvbnNSb3dzID0gb3B0aW9uc1NoZWV0RGF0YS5zbGljZSgxKTtcbiAgICAgIGNvbnN0IG9wdGlvbnNIZWFkZXJNYXAgPSBvcHRpb25zSGVhZGVycy5yZWR1Y2UoKGFjYywgaGVhZGVyLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGFjY1toZWFkZXIudHJpbSgpXSA9IGluZGV4O1xuICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICB9LCB7fSBhcyBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+KTtcblxuICAgICAgLy8gVmFsaWRhdGUgcmVxdWlyZWQgb3B0aW9uIGNvbHVtbnNcbiAgICAgIGNvbnN0IHJlcXVpcmVkT3B0aW9uQ29sdW1ucyA9IFsnaWQnLCAnbWVudUl0ZW1JZCcsICdncm91cE5hbWUnLCAnY2hvaWNlTmFtZScsICdwcmljZURlbHRhJywgJ2lzRGVmYXVsdCddO1xuICAgICAgIGZvciAoY29uc3QgY29sIG9mIHJlcXVpcmVkT3B0aW9uQ29sdW1ucykge1xuICAgICAgICBpZiAob3B0aW9uc0hlYWRlck1hcFtjb2xdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yOiBUaGUgJyR7TUVOVV9PUFRJT05TX1NIRUVUX05BTUV9JyBzaGVldCBpcyBtaXNzaW5nIHRoZSByZXF1aXJlZCBjb2x1bW46ICcke2NvbH0nLmApO1xuICAgICAgICAgICAgLy8gQ29udGludWUgd2l0aG91dCBvcHRpb25zLCBidXQgZG9uJ3QgY3Jhc2hcbiAgICAgICAgICAgIHJldHVybiBhbGxJdGVtcztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBhbGxPcHRpb25zID0gb3B0aW9uc1Jvd3MubWFwKHJvdyA9PiAoe1xuICAgICAgICBpZDogcm93W29wdGlvbnNIZWFkZXJNYXBbJ2lkJ11dIHx8ICcnLFxuICAgICAgICBtZW51SXRlbUlkOiByb3dbb3B0aW9uc0hlYWRlck1hcFsnbWVudUl0ZW1JZCddXSB8fCAnJyxcbiAgICAgICAgZ3JvdXBOYW1lOiByb3dbb3B0aW9uc0hlYWRlck1hcFsnZ3JvdXBOYW1lJ11dIHx8ICcnLFxuICAgICAgICBjaG9pY2VOYW1lOiByb3dbb3B0aW9uc0hlYWRlck1hcFsnY2hvaWNlTmFtZSddXSB8fCAnJyxcbiAgICAgICAgcHJpY2VEZWx0YTogcGFyc2VJbnQocm93W29wdGlvbnNIZWFkZXJNYXBbJ3ByaWNlRGVsdGEnXV0gfHwgJzAnLCAxMCksXG4gICAgICAgIGlzRGVmYXVsdDogcm93W29wdGlvbnNIZWFkZXJNYXBbJ2lzRGVmYXVsdCddXSA9PT0gJ1RSVUUnIHx8IHJvd1tvcHRpb25zSGVhZGVyTWFwWydpc0RlZmF1bHQnXV0gPT09IHRydWUsXG4gICAgICB9KSk7XG5cbiAgICAgIC8vIEdyb3VwIG9wdGlvbnMgYnkgbWVudSBpdGVtIElEXG4gICAgICBjb25zdCBvcHRpb25zQnlNZW51SXRlbSA9IGFsbE9wdGlvbnMucmVkdWNlKChhY2MsIG9wdGlvbikgPT4ge1xuICAgICAgICBpZiAoIWFjY1tvcHRpb24ubWVudUl0ZW1JZF0pIHtcbiAgICAgICAgICBhY2Nbb3B0aW9uLm1lbnVJdGVtSWRdID0gW107XG4gICAgICAgIH1cbiAgICAgICAgYWNjW29wdGlvbi5tZW51SXRlbUlkXS5wdXNoKG9wdGlvbik7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgICB9LCB7fSBhcyBSZWNvcmQ8c3RyaW5nLCB0eXBlb2YgYWxsT3B0aW9ucz4pO1xuXG5cbiAgICAgIC8vIEF0dGFjaCBvcHRpb25zIHRvIG1lbnUgaXRlbXNcbiAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBhbGxJdGVtcykge1xuICAgICAgICBpZiAob3B0aW9uc0J5TWVudUl0ZW1baXRlbS5pZF0pIHtcbiAgICAgICAgICBjb25zdCBpdGVtT3B0aW9ucyA9IG9wdGlvbnNCeU1lbnVJdGVtW2l0ZW0uaWRdO1xuICAgICAgICAgIGNvbnN0IGdyb3VwcyA9IGl0ZW1PcHRpb25zLnJlZHVjZSgoYWNjLCBvcHRpb24pID0+IHtcbiAgICAgICAgICAgIGlmICghYWNjW29wdGlvbi5ncm91cE5hbWVdKSB7XG4gICAgICAgICAgICAgIGFjY1tvcHRpb24uZ3JvdXBOYW1lXSA9IHsgbmFtZTogb3B0aW9uLmdyb3VwTmFtZSwgY2hvaWNlczogW10gfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFjY1tvcHRpb24uZ3JvdXBOYW1lXS5jaG9pY2VzLnB1c2goe1xuICAgICAgICAgICAgICBpZDogb3B0aW9uLmlkLFxuICAgICAgICAgICAgICBuYW1lOiBvcHRpb24uY2hvaWNlTmFtZSxcbiAgICAgICAgICAgICAgcHJpY2VEZWx0YTogb3B0aW9uLnByaWNlRGVsdGEsXG4gICAgICAgICAgICAgIGlzRGVmYXVsdDogb3B0aW9uLmlzRGVmYXVsdCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgICB9LCB7fSBhcyBSZWNvcmQ8c3RyaW5nLCBNZW51T3B0aW9uR3JvdXA+KTtcbiAgICAgICAgICBpdGVtLm9wdGlvbnMgPSBPYmplY3QudmFsdWVzKGdyb3Vwcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIGFsbEl0ZW1zO1xuXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIuiugOWPluiPnOWWruWkseaVlzpcIiwgZXJyb3IpO1xuICAgIHJldHVybiBbXTsgLy8gRW5zdXJlIGFuIGVtcHR5IGFycmF5IGlzIHJldHVybmVkIG9uIGFueSBlcnJvclxuICB9XG59XG5cbi8qKlxuICogQWRkcyBhIG5ldyBtZW51IGl0ZW0gYWxvbmcgd2l0aCBpdHMgb3B0aW9ucyB0byB0aGUgcmVzcGVjdGl2ZSBzaGVldHMuXG4gKiBAcGFyYW0ge0FkZE1lbnVJdGVtUmVxdWVzdH0gaXRlbSAtIFRoZSBtZW51IGl0ZW0gZGF0YSB0byBhZGQuXG4gKiBAcmV0dXJucyB7UHJvbWlzZTx7c3VjY2VzczogYm9vbGVhbiwgbWVudUl0ZW1JZDogc3RyaW5nfT59IEEgc3VjY2VzcyBmbGFnIGFuZCB0aGUgbmV3IG1lbnUgaXRlbSdzIElELlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkTWVudUl0ZW0oaXRlbTogQWRkTWVudUl0ZW1SZXF1ZXN0KTogUHJvbWlzZTx7IHN1Y2Nlc3M6IGJvb2xlYW47IG1lbnVJdGVtSWQ6IHN0cmluZyB9PiB7XG4gIGNvbnN0IHZhbGlkYXRpb24gPSBBZGRNZW51SXRlbVJlcXVlc3RTY2hlbWEuc2FmZVBhcnNlKGl0ZW0pO1xuICBpZiAoIXZhbGlkYXRpb24uc3VjY2Vzcykge1xuICAgICAgY29uc3QgZXJyb3JNc2cgPSB2YWxpZGF0aW9uLmVycm9yLmVycm9ycy5tYXAoZSA9PiBgJHtlLnBhdGguam9pbignLicpfTogJHtlLm1lc3NhZ2V9YCkuam9pbignLCAnKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcihg6Ly45YWl6LOH5paZ5pyJ6KqkOiAke2Vycm9yTXNnfWApO1xuICB9XG4gIFxuICAvLyBDaGVjayBmb3IgZHVwbGljYXRlIG1lbnUgaXRlbSBuYW1lIGZvciB0aGUgc2FtZSB2ZW5kb3JcbiAgY29uc3QgZXhpc3RpbmdNZW51cyA9IGF3YWl0IGdldE1lbnVzQnlWZW5kb3JJZChpdGVtLnZlbmRvcklkKTtcbiAgaWYgKGV4aXN0aW5nTWVudXMuc29tZShtZW51ID0+IG1lbnUubmFtZS50cmltKCkudG9Mb3dlckNhc2UoKSA9PT0gaXRlbS5uYW1lLnRyaW0oKS50b0xvd2VyQ2FzZSgpKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIuipsuW6l+WutuW3suacieebuOWQjOWQjeeoseeahOWTgemgheOAglwiKTtcbiAgfVxuXG4gIC8vIDEuIEFkZCB0aGUgbWVudSBpdGVtIGZpcnN0IHRvIGdldCBhbiBJRFxuICBjb25zdCBhbGxNZW51c1JhbmdlID0gYCR7TUVOVV9TSEVFVF9OQU1FfSFBMjpBYDtcbiAgY29uc3QgYWxsTWVudUlkc0RhdGEgPSBhd2FpdCBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGFsbE1lbnVzUmFuZ2UpO1xuICBjb25zdCBsYXN0SWROdW0gPSBhbGxNZW51SWRzRGF0YS5sZW5ndGggPiAwIFxuICAgICAgPyBNYXRoLm1heCgwLCAuLi5hbGxNZW51SWRzRGF0YS5tYXAocm93ID0+IHBhcnNlSW50KChyb3dbMF0gfHwgJ20wJykucmVwbGFjZSgnbScsICcnKSwgMTApKS5maWx0ZXIobnVtID0+ICFpc05hTihudW0pKSlcbiAgICAgIDogMDtcbiAgY29uc3QgbmV3TWVudUlkID0gYG0keyhsYXN0SWROdW0gKyAxKS50b1N0cmluZygpLnBhZFN0YXJ0KDMsICcwJyl9YDtcbiAgXG4gIGNvbnN0IG1lbnVWYWx1ZXMgPSBbXG4gICAgW25ld01lbnVJZCwgaXRlbS52ZW5kb3JJZCwgaXRlbS5uYW1lLCBpdGVtLnByaWNlLCAnVFJVRScsIGl0ZW0uZGVzY3JpcHRpb24gfHwgJyddLFxuICBdO1xuICBhd2FpdCBhcHBlbmRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGAke01FTlVfU0hFRVRfTkFNRX0hQTpGYCwgbWVudVZhbHVlcyk7XG5cbiAgLy8gMi4gQWRkIG9wdGlvbnMgaWYgYW55XG4gIGlmIChpdGVtLm9wdGlvbkdyb3VwcyAmJiBpdGVtLm9wdGlvbkdyb3Vwcy5sZW5ndGggPiAwKSB7XG4gICAgY29uc3QgYWxsT3B0aW9uc1JhbmdlID0gYCR7TUVOVV9PUFRJT05TX1NIRUVUX05BTUV9IUEyOkFgO1xuICAgIGNvbnN0IGFsbE9wdGlvbklkc0RhdGEgPSBhd2FpdCBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGFsbE9wdGlvbnNSYW5nZSk7XG4gICAgbGV0IGxhc3RPcHRpb25JZE51bSA9IGFsbE9wdGlvbklkc0RhdGEubGVuZ3RoID4gMCBcbiAgICAgICAgPyBNYXRoLm1heCgwLCAuLi5hbGxPcHRpb25JZHNEYXRhLm1hcChyb3cgPT4gcGFyc2VJbnQoKHJvd1swXSB8fCAnbzAnKS5yZXBsYWNlKCdvJywgJycpLCAxMCkpLmZpbHRlcihudW0gPT4gIWlzTmFOKG51bSkpKVxuICAgICAgICA6IDA7XG5cbiAgICBjb25zdCBvcHRpb25zVmFsdWVzID0gW107XG4gICAgZm9yIChjb25zdCBncm91cCBvZiBpdGVtLm9wdGlvbkdyb3Vwcykge1xuICAgICAgY29uc3QgY2hvaWNlcyA9IGdyb3VwLmNob2ljZXMuc3BsaXQoJywnKS5tYXAoYyA9PiBjLnRyaW0oKSk7XG4gICAgICBjb25zdCBwcmljZURlbHRhcyA9IChncm91cC5wcmljZURlbHRhcyB8fCAnJykuc3BsaXQoJywnKS5tYXAocCA9PiBwYXJzZUludChwLnRyaW0oKSwgMTApKTtcbiAgICAgIGNvbnN0IGRlZmF1bHRDaG9pY2UgPSBjaG9pY2VzWzBdOyAvLyBUaGUgZmlyc3QgY2hvaWNlIGlzIHRoZSBkZWZhdWx0XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hvaWNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBjaG9pY2VOYW1lID0gY2hvaWNlc1tpXTtcbiAgICAgICAgaWYgKCFjaG9pY2VOYW1lKSBjb250aW51ZTtcbiAgICAgICAgXG4gICAgICAgIGxhc3RPcHRpb25JZE51bSsrO1xuICAgICAgICBjb25zdCBuZXdPcHRpb25JZCA9IGBvJHtsYXN0T3B0aW9uSWROdW0udG9TdHJpbmcoKS5wYWRTdGFydCgzLCAnMCcpfWA7XG4gICAgICAgIGNvbnN0IHByaWNlRGVsdGEgPSAhaXNOYU4ocHJpY2VEZWx0YXNbaV0pID8gcHJpY2VEZWx0YXNbaV0gOiAwO1xuICAgICAgICBjb25zdCBpc0RlZmF1bHQgPSBjaG9pY2VOYW1lID09PSBkZWZhdWx0Q2hvaWNlO1xuXG4gICAgICAgIG9wdGlvbnNWYWx1ZXMucHVzaChbXG4gICAgICAgICAgbmV3T3B0aW9uSWQsXG4gICAgICAgICAgbmV3TWVudUlkLFxuICAgICAgICAgIGdyb3VwLmdyb3VwTmFtZSxcbiAgICAgICAgICBjaG9pY2VOYW1lLFxuICAgICAgICAgIHByaWNlRGVsdGEsXG4gICAgICAgICAgaXNEZWZhdWx0ID8gJ1RSVUUnIDogJ0ZBTFNFJ1xuICAgICAgICBdKTtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgaWYgKG9wdGlvbnNWYWx1ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBhd2FpdCBhcHBlbmRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGAke01FTlVfT1BUSU9OU19TSEVFVF9OQU1FfSFBOkZgLCBvcHRpb25zVmFsdWVzKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZW51SXRlbUlkOiBuZXdNZW51SWQgfTtcbn1cblxuZXhwb3J0IHR5cGUgVXBkYXRlTWVudUl0ZW1SZXF1ZXN0ID0ge1xuICAgIGlkOiBzdHJpbmc7IC8vIEV4aXN0aW5nIG1lbnUgaXRlbSBJRFxuICAgIHZlbmRvcklkOiBzdHJpbmc7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICAgIHByaWNlOiBudW1iZXI7XG4gICAgb3B0aW9uR3JvdXBzPzogQWRkTWVudUl0ZW1SZXF1ZXN0WydvcHRpb25Hcm91cHMnXTtcbn1cblxuLyoqXG4gKiBVcGRhdGVzIGFuIGV4aXN0aW5nIG1lbnUgaXRlbSBhbmQgaXRzIG9wdGlvbnMuXG4gKiBAcGFyYW0ge1VwZGF0ZU1lbnVJdGVtUmVxdWVzdH0gaXRlbSAtIFRoZSBtZW51IGl0ZW0gZGF0YSB0byB1cGRhdGUuXG4gKiBAcmV0dXJucyB7UHJvbWlzZTx7c3VjY2VzczogYm9vbGVhbn0+fSBBIHN1Y2Nlc3MgZmxhZy5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZU1lbnVJdGVtKGl0ZW06IFVwZGF0ZU1lbnVJdGVtUmVxdWVzdCk6IFByb21pc2U8eyBzdWNjZXNzOiBib29sZWFuIH0+IHtcbiAgICAvLyBDaGVjayBmb3IgZHVwbGljYXRlIG1lbnUgaXRlbSBuYW1lXG4gICAgY29uc3QgZXhpc3RpbmdNZW51cyA9IGF3YWl0IGdldE1lbnVzQnlWZW5kb3JJZChpdGVtLnZlbmRvcklkKTtcbiAgICBpZiAoZXhpc3RpbmdNZW51cy5zb21lKG1lbnUgPT4gbWVudS5pZCAhPT0gaXRlbS5pZCAmJiBtZW51Lm5hbWUudHJpbSgpLnRvTG93ZXJDYXNlKCkgPT09IGl0ZW0ubmFtZS50cmltKCkudG9Mb3dlckNhc2UoKSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwi6Kmy5bqX5a625bey5pyJ55u45ZCM5ZCN56ix55qE5ZOB6aCF44CCXCIpO1xuICAgIH1cblxuICAgIC8vIDEuIEZpbmQgYW5kIHVwZGF0ZSB0aGUgbWVudSBpdGVtJ3MgYmFzaWMgaW5mbyAobmFtZSwgcHJpY2UpXG4gICAgY29uc3QgbWVudVJhbmdlID0gYCR7TUVOVV9TSEVFVF9OQU1FfSFBMjpGYDtcbiAgICBjb25zdCBtZW51RGF0YSA9IGF3YWl0IGdldFNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgbWVudVJhbmdlKTtcbiAgICBjb25zdCByb3dJbmRleCA9IG1lbnVEYXRhLmZpbmRJbmRleChyb3cgPT4gcm93WzBdID09PSBpdGVtLmlkKTtcblxuICAgIGlmIChyb3dJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGDmib7kuI3liLAgSUQg54K6ICR7aXRlbS5pZH0g55qE6I+c5Zau5ZOB6aCF44CCYCk7XG4gICAgfVxuICAgIGNvbnN0IHJvd1RvVXBkYXRlID0gcm93SW5kZXggKyAyOyAvLyArMiBmb3IgMS1iYXNlZCBpbmRleCBhbmQgaGVhZGVyXG4gICAgY29uc3QgdXBkYXRlTWVudVJhbmdlID0gYCR7TUVOVV9TSEVFVF9OQU1FfSFDJHtyb3dUb1VwZGF0ZX06RiR7cm93VG9VcGRhdGV9YDtcbiAgICBhd2FpdCB1cGRhdGVTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIHVwZGF0ZU1lbnVSYW5nZSwgW1tpdGVtLm5hbWUsIGl0ZW0ucHJpY2UsICdUUlVFJywgaXRlbS5kZXNjcmlwdGlvbiB8fCAnJ11dKTtcblxuICAgIC8vIDIuIFJlYWQgYWxsIGV4aXN0aW5nIG9wdGlvbnNcbiAgICBjb25zdCBtZW51T3B0aW9uc0RhdGFXaXRoSGVhZGVyID0gYXdhaXQgZ2V0U2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCBgJHtNRU5VX09QVElPTlNfU0hFRVRfTkFNRX0hQTpGYCk7XG4gICAgY29uc3Qgb3B0aW9uc0hlYWRlcnMgPSBtZW51T3B0aW9uc0RhdGFXaXRoSGVhZGVyLmxlbmd0aCA+IDAgPyBtZW51T3B0aW9uc0RhdGFXaXRoSGVhZGVyWzBdIDogW107XG4gICAgY29uc3Qgb3B0aW9uc1Jvd3MgPSBtZW51T3B0aW9uc0RhdGFXaXRoSGVhZGVyLmxlbmd0aCA+IDEgPyBtZW51T3B0aW9uc0RhdGFXaXRoSGVhZGVyLnNsaWNlKDEpIDogW107XG5cbiAgICAvLyAzLiBGaWx0ZXIgb3V0IGFsbCBvbGQgb3B0aW9ucyBmb3IgdGhlIGN1cnJlbnQgbWVudSBpdGVtXG4gICAgY29uc3Qgb3RoZXJJdGVtc09wdGlvbnMgPSBvcHRpb25zUm93cy5maWx0ZXIocm93ID0+IHJvd1sxXSAhPT0gaXRlbS5pZCk7XG4gICAgXG4gICAgLy8gNC4gQ3JlYXRlIG5ldyBvcHRpb24gcm93cyBmcm9tIHRoZSByZXF1ZXN0XG4gICAgbGV0IGxhc3RPcHRpb25JZE51bSA9IG9wdGlvbnNSb3dzLmxlbmd0aCA+IDBcbiAgICAgICAgPyBNYXRoLm1heCgwLCAuLi5vcHRpb25zUm93cy5tYXAocm93ID0+IHBhcnNlSW50KChyb3dbMF0gfHwgJ28wJykucmVwbGFjZSgnbycsICcnKSwgMTApKS5maWx0ZXIobnVtID0+ICFpc05hTihudW0pKSlcbiAgICAgICAgOiAwO1xuXG4gICAgY29uc3QgbmV3T3B0aW9uc1ZhbHVlcyA9IFtdO1xuICAgIGlmIChpdGVtLm9wdGlvbkdyb3Vwcykge1xuICAgICAgICBmb3IgKGNvbnN0IGdyb3VwIG9mIGl0ZW0ub3B0aW9uR3JvdXBzKSB7XG4gICAgICAgICAgICBjb25zdCBjaG9pY2VzID0gZ3JvdXAuY2hvaWNlcy5zcGxpdCgnLCcpLm1hcChjID0+IGMudHJpbSgpKTtcbiAgICAgICAgICAgIGNvbnN0IHByaWNlRGVsdGFzID0gKGdyb3VwLnByaWNlRGVsdGFzIHx8ICcnKS5zcGxpdCgnLCcpLm1hcChwID0+IHBhcnNlSW50KHAudHJpbSgpLCAxMCkpO1xuICAgICAgICAgICAgY29uc3QgZGVmYXVsdENob2ljZSA9IGNob2ljZXNbMF07IC8vIFRoZSBmaXJzdCBjaG9pY2UgaXMgdGhlIGRlZmF1bHRcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaG9pY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hvaWNlTmFtZSA9IGNob2ljZXNbaV07XG4gICAgICAgICAgICAgICAgaWYgKCFjaG9pY2VOYW1lKSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBsYXN0T3B0aW9uSWROdW0rKztcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdPcHRpb25JZCA9IGBvJHtsYXN0T3B0aW9uSWROdW0udG9TdHJpbmcoKS5wYWRTdGFydCgzLCAnMCcpfWA7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJpY2VEZWx0YSA9ICFpc05hTihwcmljZURlbHRhc1tpXSkgPyBwcmljZURlbHRhc1tpXSA6IDA7XG4gICAgICAgICAgICAgICAgY29uc3QgaXNEZWZhdWx0ID0gY2hvaWNlTmFtZSA9PT0gZGVmYXVsdENob2ljZTtcblxuICAgICAgICAgICAgICAgIG5ld09wdGlvbnNWYWx1ZXMucHVzaChbXG4gICAgICAgICAgICAgICAgICAgIG5ld09wdGlvbklkLFxuICAgICAgICAgICAgICAgICAgICBpdGVtLmlkLCAvLyBVc2UgZXhpc3RpbmcgbWVudSBpdGVtIElEXG4gICAgICAgICAgICAgICAgICAgIGdyb3VwLmdyb3VwTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgY2hvaWNlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgcHJpY2VEZWx0YSxcbiAgICAgICAgICAgICAgICAgICAgaXNEZWZhdWx0ID8gJ1RSVUUnIDogJ0ZBTFNFJ1xuICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gNS4gQ29tYmluZSBvbGQgb3B0aW9ucyAoZnJvbSBvdGhlciBpdGVtcykgYW5kIG5ldyBvcHRpb25zIGZvciB0aGlzIGl0ZW1cbiAgICBjb25zdCBmaW5hbE9wdGlvbnMgPSBbLi4ub3RoZXJJdGVtc09wdGlvbnMsIC4uLm5ld09wdGlvbnNWYWx1ZXNdO1xuICAgIFxuICAgIGNvbnN0IGZpbmFsVmFsdWVzID0gZmluYWxPcHRpb25zLmxlbmd0aCA+IDAgPyBbb3B0aW9uc0hlYWRlcnMsIC4uLmZpbmFsT3B0aW9uc10gOiBbb3B0aW9uc0hlYWRlcnNdO1xuXG5cbiAgICAvLyA2LiBCYXRjaCB1cGRhdGUgdGhlIG9wdGlvbnMgc2hlZXRcbiAgICBhd2FpdCBiYXRjaFVwZGF0ZVNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgW1xuICAgICAgICB7XG4gICAgICAgICAgICByYW5nZTogYCR7TUVOVV9PUFRJT05TX1NIRUVUX05BTUV9IUExOkZgLFxuICAgICAgICAgICAgdmFsdWVzOiBmaW5hbFZhbHVlcyxcbiAgICAgICAgfVxuICAgIF0pO1xuXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xufVxuXG5cbmV4cG9ydCB0eXBlIERlbGV0ZU1lbnVJdGVtUmVxdWVzdCA9IHtcbiAgICBpZDogc3RyaW5nO1xufTtcblxuLyoqXG4gKiBEZWxldGVzIGEgbWVudSBpdGVtIGZyb20gdGhlICdtZW51cycgc2hlZXQgYnkgaXRzIElELlxuICogVGhpcyBpcyBhIFwiaGFyZCBkZWxldGVcIiBvcGVyYXRpb24uIEl0IHJlYWRzIGFsbCBkYXRhLCBmaWx0ZXJzIG91dCB0aGVcbiAqIGl0ZW0gdG8gYmUgZGVsZXRlZCBhbmQgaXRzIG9wdGlvbnMsIGNsZWFycyB0aGUgc2hlZXRzLCBhbmQgd3JpdGVzIHRoZVxuICogZmlsdGVyZWQgZGF0YSBiYWNrLlxuICogQHBhcmFtIHtEZWxldGVNZW51SXRlbVJlcXVlc3R9IHJlcSAtIFRoZSByZXF1ZXN0IGNvbnRhaW5pbmcgdGhlIGl0ZW0gSUQgdG8gZGVsZXRlLlxuICogQHJldHVybnMge1Byb21pc2U8e3N1Y2Nlc3M6IGJvb2xlYW59Pn0gQSBzdWNjZXNzIGZsYWcuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVNZW51SXRlbShyZXE6IERlbGV0ZU1lbnVJdGVtUmVxdWVzdCk6IFByb21pc2U8eyBzdWNjZXNzOiBib29sZWFuIH0+IHtcbiAgLy8gMS4gR2V0IGFsbCBkYXRhIGZyb20gdGhlIHR3byBzaGVldHMsIGluY2x1ZGluZyBoZWFkZXJzLlxuICBjb25zdCBbbWVudXNEYXRhV2l0aEhlYWRlciwgbWVudU9wdGlvbnNEYXRhV2l0aEhlYWRlcl0gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgZ2V0U2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCBgJHtNRU5VX1NIRUVUX05BTUV9IUE6RmApLFxuICAgIGdldFNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgYCR7TUVOVV9PUFRJT05TX1NIRUVUX05BTUV9IUE6RmApLFxuICBdKTtcblxuICBjb25zdCBtZW51SGVhZGVycyA9IG1lbnVzRGF0YVdpdGhIZWFkZXIubGVuZ3RoID4gMCA/IG1lbnVzRGF0YVdpdGhIZWFkZXJbMF0gOiBbXTtcbiAgY29uc3QgbWVudVJvd3MgPSBtZW51c0RhdGFXaXRoSGVhZGVyLmxlbmd0aCA+IDEgPyBtZW51c0RhdGFXaXRoSGVhZGVyLnNsaWNlKDEpIDogW107XG5cbiAgY29uc3Qgb3B0aW9uc0hlYWRlcnMgPSBtZW51T3B0aW9uc0RhdGFXaXRoSGVhZGVyLmxlbmd0aCA+IDAgPyBtZW51T3B0aW9uc0RhdGFXaXRoSGVhZGVyWzBdIDogW107XG4gIGNvbnN0IG9wdGlvbnNSb3dzID0gbWVudU9wdGlvbnNEYXRhV2l0aEhlYWRlci5sZW5ndGggPiAxID8gbWVudU9wdGlvbnNEYXRhV2l0aEhlYWRlci5zbGljZSgxKSA6IFtdO1xuXG4gIC8vIDIuIEZpbHRlciBkYXRhIHRvIGtlZXAuXG4gIGNvbnN0IG1lbnVzVG9LZWVwID0gbWVudVJvd3MuZmlsdGVyKHJvdyA9PiByb3dbMF0gIT09IHJlcS5pZCk7XG4gIGNvbnN0IG1lbnVPcHRpb25zVG9LZWVwID0gb3B0aW9uc1Jvd3MuZmlsdGVyKHJvdyA9PiByb3dbMV0gIT09IHJlcS5pZCk7XG5cbiAgLy8gMy4gUHJlcGFyZSBiYXRjaCB1cGRhdGUgZGF0YSAoY2xlYXIgYW5kIHdyaXRlKS5cbiAgLy8gV2Ugd3JpdGUgYmFjayB0aGUgaGVhZGVycyBwbHVzIHRoZSBmaWx0ZXJlZCBkYXRhLlxuICBjb25zdCBiYXRjaERhdGEgPSBbXG4gICAge1xuICAgICAgcmFuZ2U6IGAke01FTlVfU0hFRVRfTkFNRX0hQTE6RmAsXG4gICAgICB2YWx1ZXM6IG1lbnVIZWFkZXJzLmxlbmd0aCA+IDAgPyBbbWVudUhlYWRlcnMsIC4uLm1lbnVzVG9LZWVwXSA6IG1lbnVzVG9LZWVwLFxuICAgIH0sXG4gICAge1xuICAgICAgcmFuZ2U6IGAke01FTlVfT1BUSU9OU19TSEVFVF9OQU1FfSFBMTpGYCxcbiAgICAgIHZhbHVlczogb3B0aW9uc0hlYWRlcnMubGVuZ3RoID4gMCA/IFtvcHRpb25zSGVhZGVycywgLi4ubWVudU9wdGlvbnNUb0tlZXBdIDogbWVudU9wdGlvbnNUb0tlZXAsXG4gICAgfSxcbiAgXTtcblxuICAvLyA0LiBFeGVjdXRlIGJhdGNoIHVwZGF0ZS5cbiAgYXdhaXQgYmF0Y2hVcGRhdGVTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGJhdGNoRGF0YSk7XG4gIFxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG59XG5cbmV4cG9ydCB0eXBlIEJhdGNoRGVsZXRlTWVudUl0ZW1zUmVxdWVzdCA9IHtcbiAgICBpZHM6IHN0cmluZ1tdO1xufTtcblxuLyoqXG4gKiBEZWxldGVzIG11bHRpcGxlIG1lbnUgaXRlbXMgYW5kIHRoZWlyIGFzc29jaWF0ZWQgb3B0aW9ucyBpbiBhIHNpbmdsZSBiYXRjaCBvcGVyYXRpb24uXG4gKiBAcGFyYW0ge0JhdGNoRGVsZXRlTWVudUl0ZW1zUmVxdWVzdH0gcmVxIC0gVGhlIHJlcXVlc3QgY29udGFpbmluZyB0aGUgYXJyYXkgb2YgaXRlbSBJRHMgdG8gZGVsZXRlLlxuICogQHJldHVybnMge1Byb21pc2U8e3N1Y2Nlc3M6IGJvb2xlYW59Pn0gQSBzdWNjZXNzIGZsYWcuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBiYXRjaERlbGV0ZU1lbnVJdGVtcyhyZXE6IEJhdGNoRGVsZXRlTWVudUl0ZW1zUmVxdWVzdCk6IFByb21pc2U8eyBzdWNjZXNzOiBib29sZWFuIH0+IHtcbiAgaWYgKCFyZXEuaWRzIHx8IHJlcS5pZHMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9OyAvLyBOb3RoaW5nIHRvIGRlbGV0ZVxuICB9XG5cbiAgLy8gMS4gR2V0IGFsbCBkYXRhIGZyb20gdGhlIHR3byBzaGVldHMsIGluY2x1ZGluZyBoZWFkZXJzLlxuICBjb25zdCBbbWVudXNEYXRhV2l0aEhlYWRlciwgbWVudU9wdGlvbnNEYXRhV2l0aEhlYWRlcl0gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgZ2V0U2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCBgJHtNRU5VX1NIRUVUX05BTUV9IUE6RmApLFxuICAgIGdldFNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgYCR7TUVOVV9PUFRJT05TX1NIRUVUX05BTUV9IUE6RmApLFxuICBdKTtcblxuICBjb25zdCBtZW51SGVhZGVycyA9IG1lbnVzRGF0YVdpdGhIZWFkZXIubGVuZ3RoID4gMCA/IG1lbnVzRGF0YVdpdGhIZWFkZXJbMF0gOiBbXTtcbiAgY29uc3QgbWVudVJvd3MgPSBtZW51c0RhdGFXaXRoSGVhZGVyLmxlbmd0aCA+IDEgPyBtZW51c0RhdGFXaXRoSGVhZGVyLnNsaWNlKDEpIDogW107XG5cbiAgY29uc3Qgb3B0aW9uc0hlYWRlcnMgPSBtZW51T3B0aW9uc0RhdGFXaXRoSGVhZGVyLmxlbmd0aCA+IDAgPyBtZW51T3B0aW9uc0RhdGFXaXRoSGVhZGVyWzBdIDogW107XG4gIGNvbnN0IG9wdGlvbnNSb3dzID0gbWVudU9wdGlvbnNEYXRhV2l0aEhlYWRlci5sZW5ndGggPiAxID8gbWVudU9wdGlvbnNEYXRhV2l0aEhlYWRlci5zbGljZSgxKSA6IFtdO1xuXG4gIC8vIDIuIEZpbHRlciBkYXRhIHRvIGtlZXAuXG4gIGNvbnN0IGlkc1RvRGVsZXRlU2V0ID0gbmV3IFNldChyZXEuaWRzKTtcbiAgY29uc3QgbWVudXNUb0tlZXAgPSBtZW51Um93cy5maWx0ZXIocm93ID0+ICFpZHNUb0RlbGV0ZVNldC5oYXMocm93WzBdKSk7XG4gIGNvbnN0IG1lbnVPcHRpb25zVG9LZWVwID0gb3B0aW9uc1Jvd3MuZmlsdGVyKHJvdyA9PiAhaWRzVG9EZWxldGVTZXQuaGFzKHJvd1sxXSkpO1xuXG4gIC8vIDMuIFByZXBhcmUgYmF0Y2ggdXBkYXRlIGRhdGEgKGNsZWFyIGFuZCB3cml0ZSkuXG4gIC8vIFdlIHdyaXRlIGJhY2sgdGhlIGhlYWRlcnMgcGx1cyB0aGUgZmlsdGVyZWQgZGF0YS5cbiAgY29uc3QgYmF0Y2hEYXRhID0gW1xuICAgIHtcbiAgICAgIHJhbmdlOiBgJHtNRU5VX1NIRUVUX05BTUV9IUExOkZgLFxuICAgICAgdmFsdWVzOiBtZW51SGVhZGVycy5sZW5ndGggPiAwID8gW21lbnVIZWFkZXJzLCAuLi5tZW51c1RvS2VlcF0gOiBbXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHJhbmdlOiBgJHtNRU5VX09QVElPTlNfU0hFRVRfTkFNRX0hQTE6RmAsXG4gICAgICB2YWx1ZXM6IG9wdGlvbnNIZWFkZXJzLmxlbmd0aCA+IDAgPyBbb3B0aW9uc0hlYWRlcnMsIC4uLm1lbnVPcHRpb25zVG9LZWVwXSA6IFtdLFxuICAgIH0sXG4gIF07XG5cbiAgLy8gNC4gRXhlY3V0ZSBiYXRjaCB1cGRhdGUuXG4gIGF3YWl0IGJhdGNoVXBkYXRlU2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCBiYXRjaERhdGEpO1xuICBcbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xufVxuXG4vKipcbiAqIER1cGxpY2F0ZXMgYSBtZW51IGl0ZW0gYW5kIGFsbCBpdHMgYXNzb2NpYXRlZCBvcHRpb25zLlxuICogQHBhcmFtIHtzdHJpbmd9IG1lbnVJdGVtSWQgLSBUaGUgSUQgb2YgdGhlIG1lbnUgaXRlbSB0byBkdXBsaWNhdGUuXG4gKiBAcmV0dXJucyB7UHJvbWlzZTx7c3VjY2VzczogYm9vbGVhbn0+fSBBIHN1Y2Nlc3MgZmxhZy5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGR1cGxpY2F0ZU1lbnVJdGVtKG1lbnVJdGVtSWQ6IHN0cmluZyk6IFByb21pc2U8eyBzdWNjZXNzOiBib29sZWFuIH0+IHtcbiAgLy8gMS4gRmV0Y2ggYWxsIGV4aXN0aW5nIGRhdGFcbiAgY29uc3QgW1xuICAgIG1lbnVzRGF0YVdpdGhIZWFkZXIsXG4gICAgbWVudU9wdGlvbnNEYXRhV2l0aEhlYWRlcixcbiAgXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGAke01FTlVfU0hFRVRfTkFNRX0hQTpGYCksXG4gICAgZ2V0U2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCBgJHtNRU5VX09QVElPTlNfU0hFRVRfTkFNRX0hQTpGYCksXG4gIF0pO1xuXG4gIGNvbnN0IG1lbnVSb3dzID0gbWVudXNEYXRhV2l0aEhlYWRlci5sZW5ndGggPiAxID8gbWVudXNEYXRhV2l0aEhlYWRlci5zbGljZSgxKSA6IFtdO1xuICBjb25zdCBvcHRpb25zUm93cyA9IG1lbnVPcHRpb25zRGF0YVdpdGhIZWFkZXIubGVuZ3RoID4gMSA/IG1lbnVPcHRpb25zRGF0YVdpdGhIZWFkZXIuc2xpY2UoMSkgOiBbXTtcblxuICAvLyAyLiBGaW5kIHRoZSBvcmlnaW5hbCBpdGVtIGFuZCBvcHRpb25zXG4gIGNvbnN0IG9yaWdpbmFsTWVudVJvdyA9IG1lbnVSb3dzLmZpbmQocm93ID0+IHJvd1swXSA9PT0gbWVudUl0ZW1JZCk7XG4gIGlmICghb3JpZ2luYWxNZW51Um93KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGDmib7kuI3liLAgSUQg54K6ICR7bWVudUl0ZW1JZH0g55qE6I+c5Zau5ZOB6aCF44CCYCk7XG4gIH1cblxuICBjb25zdCBvcmlnaW5hbE9wdGlvbnMgPSBvcHRpb25zUm93cy5maWx0ZXIocm93ID0+IHJvd1sxXSA9PT0gbWVudUl0ZW1JZCk7XG5cbiAgLy8gMy4gR2VuZXJhdGUgbmV3IG1lbnUgaXRlbSBpbmZvXG4gIGxldCBuZXdNZW51TmFtZSA9IGAke29yaWdpbmFsTWVudVJvd1syXX0gLSDlia/mnKxgO1xuICBsZXQgc3VmZml4ID0gMjtcbiAgd2hpbGUgKG1lbnVSb3dzLnNvbWUocm93ID0+IHJvd1syXSA9PT0gbmV3TWVudU5hbWUgJiYgcm93WzFdID09PSBvcmlnaW5hbE1lbnVSb3dbMV0pKSB7XG4gICAgbmV3TWVudU5hbWUgPSBgJHtvcmlnaW5hbE1lbnVSb3dbMl19IC0g5Ymv5pysICR7c3VmZml4fWA7XG4gICAgc3VmZml4Kys7XG4gIH1cbiAgXG4gIGxldCBsYXN0TWVudUlkTnVtID0gbWVudVJvd3MubGVuZ3RoID4gMCA/IE1hdGgubWF4KDAsIC4uLm1lbnVSb3dzLm1hcChyb3cgPT4gcGFyc2VJbnQoKHJvd1swXSB8fCAnbTAnKS5yZXBsYWNlKCdtJywgJycpLCAxMCkpLmZpbHRlcihudW0gPT4gIWlzTmFOKG51bSkpKSA6IDA7XG4gIGNvbnN0IG5ld01lbnVJZCA9IGBtJHsobGFzdE1lbnVJZE51bSArIDEpLnRvU3RyaW5nKCkucGFkU3RhcnQoMywgJzAnKX1gO1xuICBcbiAgY29uc3QgbmV3TWVudURhdGEgPSBbW1xuICAgICAgbmV3TWVudUlkLFxuICAgICAgb3JpZ2luYWxNZW51Um93WzFdLCAvLyB2ZW5kb3JJZFxuICAgICAgbmV3TWVudU5hbWUsXG4gICAgICBvcmlnaW5hbE1lbnVSb3dbM10sIC8vIHByaWNlXG4gICAgICBvcmlnaW5hbE1lbnVSb3dbNF0sIC8vIGlzQWN0aXZlXG4gICAgICBvcmlnaW5hbE1lbnVSb3dbNV0sIC8vIGRlc2NyaXB0aW9uXG4gIF1dO1xuXG4gIC8vIDQuIEdlbmVyYXRlIG5ldyBvcHRpb25zXG4gIGxldCBsYXN0T3B0aW9uSWROdW0gPSBvcHRpb25zUm93cy5sZW5ndGggPiAwID8gTWF0aC5tYXgoMCwgLi4ub3B0aW9uc1Jvd3MubWFwKHJvdyA9PiBwYXJzZUludCgocm93WzBdIHx8ICdvMCcpLnJlcGxhY2UoJ28nLCAnJyksIDEwKSkuZmlsdGVyKG51bSA9PiAhaXNOYU4obnVtKSkpIDogMDtcbiAgXG4gIGNvbnN0IG5ld09wdGlvbnNEYXRhID0gW107XG4gIGZvciAoY29uc3Qgb3B0aW9uUm93IG9mIG9yaWdpbmFsT3B0aW9ucykge1xuICAgIGxhc3RPcHRpb25JZE51bSsrO1xuICAgIGNvbnN0IG5ld09wdGlvbklkID0gYG8ke2xhc3RPcHRpb25JZE51bS50b1N0cmluZygpLnBhZFN0YXJ0KDMsICcwJyl9YDtcbiAgICBuZXdPcHRpb25zRGF0YS5wdXNoKFtcbiAgICAgIG5ld09wdGlvbklkLFxuICAgICAgbmV3TWVudUlkLCAvLyBMaW5rIHRvIHRoZSBuZXcgbWVudSBpdGVtXG4gICAgICBvcHRpb25Sb3dbMl0sIC8vIGdyb3VwTmFtZVxuICAgICAgb3B0aW9uUm93WzNdLCAvLyBjaG9pY2VOYW1lXG4gICAgICBvcHRpb25Sb3dbNF0sIC8vIHByaWNlRGVsdGFcbiAgICAgIG9wdGlvblJvd1s1XSwgLy8gaXNEZWZhdWx0XG4gICAgXSk7XG4gIH1cblxuICAvLyA1LiBBcHBlbmQgYWxsIG5ldyBkYXRhIHRvIHNoZWV0c1xuICBhd2FpdCBhcHBlbmRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGAke01FTlVfU0hFRVRfTkFNRX0hQTpGYCwgbmV3TWVudURhdGEpO1xuICBpZiAobmV3T3B0aW9uc0RhdGEubGVuZ3RoID4gMCkge1xuICAgIGF3YWl0IGFwcGVuZFNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgYCR7TUVOVV9PUFRJT05TX1NIRUVUX05BTUV9IUE6RmAsIG5ld09wdGlvbnNEYXRhKTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbn1cblxuXG4vLyAtLS0gTWVudSBPcHRpb24gRmxvd3MgLS0tXG5cbmV4cG9ydCB0eXBlIEFkZE1lbnVPcHRpb25SZXF1ZXN0ID0ge1xuICBtZW51SXRlbUlkOiBzdHJpbmc7XG4gIGdyb3VwTmFtZTogc3RyaW5nO1xuICBjaG9pY2VOYW1lOiBzdHJpbmc7XG4gIHByaWNlRGVsdGE6IG51bWJlcjtcbiAgaXNEZWZhdWx0OiBib29sZWFuO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkTWVudU9wdGlvbihyZXE6IEFkZE1lbnVPcHRpb25SZXF1ZXN0KTogUHJvbWlzZTx7IHN1Y2Nlc3M6IGJvb2xlYW4gfT4ge1xuICAvLyBJZiB0aGUgbmV3IG9wdGlvbiBpcyBkZWZhdWx0LCB1bnNldCBvdGhlciBkZWZhdWx0cyBpbiB0aGUgc2FtZSBncm91cC5cbiAgaWYgKHJlcS5pc0RlZmF1bHQpIHtcbiAgICBhd2FpdCBzZXRNZW51T3B0aW9uRGVmYXVsdCh7IG1lbnVJdGVtSWQ6IHJlcS5tZW51SXRlbUlkLCBncm91cE5hbWU6IHJlcS5ncm91cE5hbWUsIG9wdGlvbklkOiAnJyB9KTsgLy8gUGFzcyBlbXB0eSBvcHRpb25JZCB0byB1bnNldCBhbGwsIG5ldyBvbmUgd2lsbCBiZSBzZXRcbiAgfVxuXG4gIGNvbnN0IHJhbmdlID0gYCR7TUVOVV9PUFRJT05TX1NIRUVUX05BTUV9IUE6RmA7XG4gIGNvbnN0IGFsbE9wdGlvbnNSYW5nZSA9IGAke01FTlVfT1BUSU9OU19TSEVFVF9OQU1FfSFBMjpBYDtcbiAgXG4gIGNvbnN0IGFsbE9wdGlvbklkc0RhdGEgPSBhd2FpdCBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGFsbE9wdGlvbnNSYW5nZSk7XG4gIGNvbnN0IGxhc3RJZE51bSA9IGFsbE9wdGlvbklkc0RhdGEubGVuZ3RoID4gMCBcbiAgICAgID8gTWF0aC5tYXgoMCwgLi4uYWxsT3B0aW9uSWRzRGF0YS5tYXAocm93ID0+IHBhcnNlSW50KChyb3dbMF0gfHwgJ28wJykucmVwbGFjZSgnbycsICcnKSwgMTApKS5maWx0ZXIobnVtID0+ICFpc05hTihudW0pKSlcbiAgICAgIDogMDtcblxuICBjb25zdCBuZXdJZCA9IGBvJHsobGFzdElkTnVtICsgMSkudG9TdHJpbmcoKS5wYWRTdGFydCgzLCAnMCcpfWA7XG4gIFxuICBjb25zdCB2YWx1ZXMgPSBbW1xuICAgIG5ld0lkLCBcbiAgICByZXEubWVudUl0ZW1JZCwgXG4gICAgcmVxLmdyb3VwTmFtZSwgXG4gICAgcmVxLmNob2ljZU5hbWUsIFxuICAgIHJlcS5wcmljZURlbHRhLCBcbiAgICByZXEuaXNEZWZhdWx0ID8gJ1RSVUUnIDogJ0ZBTFNFJ1xuICBdXTtcblxuICBhd2FpdCBhcHBlbmRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIHJhbmdlLCB2YWx1ZXMpO1xuXG4gIC8vIElmIHRoZSBuZXcgb3B0aW9uIHdhcyBzZXQgdG8gZGVmYXVsdCwgZW5zdXJlIGl0IGlzIG5vdyB0aGUgb25seSBkZWZhdWx0IG9uZVxuICBpZihyZXEuaXNEZWZhdWx0KSB7XG4gICAgICBhd2FpdCBzZXRNZW51T3B0aW9uRGVmYXVsdCh7IG9wdGlvbklkOiBuZXdJZCwgbWVudUl0ZW1JZDogcmVxLm1lbnVJdGVtSWQsIGdyb3VwTmFtZTogcmVxLmdyb3VwTmFtZSB9KTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbn1cblxuXG5leHBvcnQgdHlwZSBEZWxldGVNZW51T3B0aW9uUmVxdWVzdCA9IHtcbiAgb3B0aW9uSWQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZU1lbnVPcHRpb24ocmVxOiBEZWxldGVNZW51T3B0aW9uUmVxdWVzdCk6IFByb21pc2U8eyBzdWNjZXNzOiBib29sZWFuIH0+IHtcbiAgY29uc3QgcmFuZ2UgPSBgJHtNRU5VX09QVElPTlNfU0hFRVRfTkFNRX0hQTI6RmA7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIHJhbmdlKTtcblxuICBpZiAoIWRhdGEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIuaJvuS4jeWIsOiPnOWWrumBuOmgheizh+aWmeOAglwiKTtcbiAgfVxuICBcbiAgY29uc3Qgcm93SW5kZXggPSBkYXRhLmZpbmRJbmRleChyb3cgPT4gcm93WzBdID09PSByZXEub3B0aW9uSWQpO1xuICBcbiAgaWYgKHJvd0luZGV4ID09PSAtMSkge1xuICAgICAgY29uc29sZS5sb2coYOaJvuS4jeWIsCBJRCDngrogJHtyZXEub3B0aW9uSWR9IOeahOiPnOWWrumBuOmgheOAgmApO1xuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UgfTsgLy8gSXRlbSBub3QgZm91bmRcbiAgfVxuXG4gIGNvbnN0IHJvd1RvRGVsZXRlID0gcm93SW5kZXggKyAyOyBcbiAgLy8gVGhpcyBpcyBub3QgYSBncmVhdCB3YXkgdG8gXCJkZWxldGVcIiBhIHJvdy4gQSBiZXR0ZXIgd2F5IGlzIHRvIHJlYWQgYWxsLCBmaWx0ZXIsIGNsZWFyLCBhbmQgd3JpdGUgYmFjay5cbiAgLy8gRm9yIG5vdywgbGV0J3MganVzdCBjbGVhciB0aGUgc3BlY2lmaWMgcm93LlxuICBjb25zdCBjbGVhclJhbmdlID0gYCR7TUVOVV9PUFRJT05TX1NIRUVUX05BTUV9IUEke3Jvd1RvRGVsZXRlfTpGJHtyb3dUb0RlbGV0ZX1gO1xuXG4gIGF3YWl0IGNsZWFyU2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCBjbGVhclJhbmdlKTtcbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xufVxuXG5leHBvcnQgdHlwZSBTZXRNZW51T3B0aW9uRGVmYXVsdFJlcXVlc3QgPSB7XG4gIG9wdGlvbklkOiBzdHJpbmc7IC8vIFRoZSBvcHRpb24gdG8gc2V0IGFzIGRlZmF1bHQuIElmIGVtcHR5LCBhbGwgb3B0aW9ucyBpbiBncm91cCB3aWxsIGJlIHVuc2V0LlxuICBtZW51SXRlbUlkOiBzdHJpbmc7XG4gIGdyb3VwTmFtZTogc3RyaW5nO1xufVxuXG4vKipcbiAqIFNldHMgYSBzcGVjaWZpYyBvcHRpb24gYXMgdGhlIGRlZmF1bHQgZm9yIGl0cyBncm91cCwgdW5zZXR0aW5nIGFueSBwcmV2aW91cyBkZWZhdWx0LlxuICogQHBhcmFtIHJlcSBUaGUgcmVxdWVzdCBjb250YWluaW5nIG9wdGlvbiwgbWVudSBpdGVtLCBhbmQgZ3JvdXAgaWRlbnRpZmllcnMuXG4gKiBAcmV0dXJucyBBIHN1Y2Nlc3MgZmxhZy5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNldE1lbnVPcHRpb25EZWZhdWx0KHJlcTogU2V0TWVudU9wdGlvbkRlZmF1bHRSZXF1ZXN0KTogUHJvbWlzZTx7IHN1Y2Nlc3M6IGJvb2xlYW4gfT4ge1xuICAgIGNvbnN0IHsgb3B0aW9uSWQsIG1lbnVJdGVtSWQsIGdyb3VwTmFtZSB9ID0gcmVxO1xuICAgIGNvbnN0IHJhbmdlID0gYCR7TUVOVV9PUFRJT05TX1NIRUVUX05BTUV9IUEyOkZgO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIHJhbmdlKTtcblxuICAgIGlmICghZGF0YSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCLmib7kuI3liLDoj5zllq7pgbjpoIXos4fmlpnjgIJcIik7XG4gICAgfVxuXG4gICAgY29uc3QgdXBkYXRlcyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCByb3cgPSBkYXRhW2ldO1xuICAgICAgICAvLyBDaGVjayBpZiB0aGUgb3B0aW9uIGJlbG9uZ3MgdG8gdGhlIHNhbWUgbWVudSBpdGVtIGFuZCBncm91cFxuICAgICAgICBpZiAocm93WzFdID09PSBtZW51SXRlbUlkICYmIHJvd1syXSA9PT0gZ3JvdXBOYW1lKSB7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50T3B0aW9uSWQgPSByb3dbMF07XG4gICAgICAgICAgICBjb25zdCBpc0N1cnJlbnRseURlZmF1bHQgPSByb3dbNV0gPT09ICdUUlVFJztcbiAgICAgICAgICAgIGNvbnN0IHNob3VsZEJlRGVmYXVsdCA9IGN1cnJlbnRPcHRpb25JZCA9PT0gb3B0aW9uSWQ7XG5cbiAgICAgICAgICAgIC8vIElmIHRoaXMgcm93IG5lZWRzIHRvIGNoYW5nZSBpdHMgZGVmYXVsdCBzdGF0dXNcbiAgICAgICAgICAgIGlmIChpc0N1cnJlbnRseURlZmF1bHQgIT09IHNob3VsZEJlRGVmYXVsdCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJvd1RvVXBkYXRlID0gaSArIDI7IC8vICsyIGJlY2F1c2Ugc2hlZXQgaXMgMS1pbmRleGVkIGFuZCB3ZSBza2lwcGVkIGhlYWRlclxuICAgICAgICAgICAgICAgIHVwZGF0ZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIHJhbmdlOiBgJHtNRU5VX09QVElPTlNfU0hFRVRfTkFNRX0hRiR7cm93VG9VcGRhdGV9YCxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzOiBbW3Nob3VsZEJlRGVmYXVsdCA/ICdUUlVFJyA6ICdGQUxTRSddXSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmICh1cGRhdGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIC8vIE5vdGU6IFRoaXMgY2FuIGJlIHNsb3cgaWYgdGhlcmUgYXJlIG1hbnkgdXBkYXRlcy4gQmF0Y2hpbmcgd291bGQgYmUgYmV0dGVyLlxuICAgICAgZm9yIChjb25zdCB1cGRhdGUgb2YgdXBkYXRlcykge1xuICAgICAgICAgIGF3YWl0IHVwZGF0ZVNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgdXBkYXRlLnJhbmdlLCB1cGRhdGUudmFsdWVzKTtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJpU0E0UHNCIn0=
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/ai/flows/data:0188c5 [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"402d1b34833cfecb6e35b0ab750b065ed380b682ef":"duplicateMenuItem"},"src/ai/flows/menu-flow.ts",""] */ __turbopack_context__.s({
    "duplicateMenuItem": (()=>duplicateMenuItem)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var duplicateMenuItem = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("402d1b34833cfecb6e35b0ab750b065ed380b682ef", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "duplicateMenuItem"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vbWVudS1mbG93LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuJ3VzZSBzZXJ2ZXInO1xuLyoqXG4gKiBAZmlsZU92ZXJ2aWV3IEZsb3cgZm9yIGhhbmRsaW5nIG1lbnUgZGF0YSBmcm9tIEdvb2dsZSBTaGVldHMuXG4gKi9cbmltcG9ydCB7IGdldFNoZWV0RGF0YSwgYXBwZW5kU2hlZXREYXRhLCBjbGVhclNoZWV0RGF0YSwgdXBkYXRlU2hlZXREYXRhLCBiYXRjaFVwZGF0ZVNoZWV0RGF0YSB9IGZyb20gJ0Avc2VydmljZXMvc2hlZXQtc2VydmljZSc7XG5pbXBvcnQgeyB0eXBlIEFkZE1lbnVJdGVtUmVxdWVzdCwgQWRkTWVudUl0ZW1SZXF1ZXN0U2NoZW1hIH0gZnJvbSAnQC9saWIvc2NoZW1hL21lbnUnO1xuXG4vLyBUaGUgSUQgb2YgeW91ciBHb29nbGUgU2hlZXRcbmNvbnN0IFNQUkVBRFNIRUVUX0lEID0gJzFaajJoMGNZbHJiMm1CYU5nbDEtUG9PSzd0bENDd0RjY0FYbjV3NjZocDRjJztcbmNvbnN0IE1FTlVfU0hFRVRfTkFNRSA9ICdtZW51cyc7XG5jb25zdCBNRU5VX09QVElPTlNfU0hFRVRfTkFNRSA9ICdtZW51X29wdGlvbnMnO1xuXG5leHBvcnQgdHlwZSBNZW51T3B0aW9uQ2hvaWNlID0ge1xuICBpZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIHByaWNlRGVsdGE6IG51bWJlcjtcbiAgaXNEZWZhdWx0OiBib29sZWFuO1xufVxuXG5leHBvcnQgdHlwZSBNZW51T3B0aW9uR3JvdXAgPSB7XG4gIG5hbWU6IHN0cmluZztcbiAgY2hvaWNlczogTWVudU9wdGlvbkNob2ljZVtdO1xufVxuXG5leHBvcnQgdHlwZSBNZW51SXRlbSA9IHtcbiAgaWQ6IHN0cmluZztcbiAgdmVuZG9ySWQ6IHN0cmluZztcbiAgbmFtZTpzdHJpbmc7XG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICBwcmljZTogbnVtYmVyO1xuICBpc0FjdGl2ZTogYm9vbGVhbjtcbiAgb3B0aW9ucz86IE1lbnVPcHRpb25Hcm91cFtdO1xufTtcblxuLyoqXG4gKiBSZXRyaWV2ZXMgYWxsIG1lbnUgaXRlbXMgZm9yIGEgZ2l2ZW4gdmVuZG9yIGZyb20gdGhlICdtZW51cycgc2hlZXQsIGluY2x1ZGluZyB0aGVpciBvcHRpb25zLlxuICogQHBhcmFtIHtzdHJpbmd9IHZlbmRvcklkIFRoZSBJRCBvZiB0aGUgdmVuZG9yLlxuICogQHJldHVybnMge1Byb21pc2U8TWVudUl0ZW1bXT59IEEgbGlzdCBvZiBtZW51IGl0ZW1zIHdpdGggdGhlaXIgb3B0aW9ucy5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE1lbnVzQnlWZW5kb3JJZCh2ZW5kb3JJZDogc3RyaW5nKTogUHJvbWlzZTxNZW51SXRlbVtdPiB7XG4gIHRyeSB7XG4gICAgY29uc3QgW21lbnVTaGVldERhdGEsIG9wdGlvbnNTaGVldERhdGFdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGAke01FTlVfU0hFRVRfTkFNRX0hQTpGYCksXG4gICAgICAgIGdldFNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgYCR7TUVOVV9PUFRJT05TX1NIRUVUX05BTUV9IUE6RmApXG4gICAgXSk7XG4gICAgXG4gICAgLy8gSWYgdGhlcmUncyBubyBkYXRhIG9yIG9ubHkgYSBoZWFkZXIgcm93LCByZXR1cm4gYW4gZW1wdHkgYXJyYXkuXG4gICAgaWYgKCFtZW51U2hlZXREYXRhIHx8IG1lbnVTaGVldERhdGEubGVuZ3RoIDwgMikge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIGNvbnN0IG1lbnVIZWFkZXJzID0gbWVudVNoZWV0RGF0YVswXS5tYXAoaCA9PiBTdHJpbmcoaCkudHJpbSgpKTtcbiAgICBjb25zdCBtZW51Um93cyA9IG1lbnVTaGVldERhdGEuc2xpY2UoMSk7XG5cbiAgICBjb25zdCBtZW51SGVhZGVyTWFwID0gbWVudUhlYWRlcnMucmVkdWNlKChhY2MsIGhlYWRlciwgaW5kZXgpID0+IHtcbiAgICAgICAgYWNjW2hlYWRlci50cmltKCldID0gaW5kZXg7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30gYXMgUmVjb3JkPHN0cmluZywgbnVtYmVyPik7XG4gICAgXG4gICAgLy8gQWRkIHZhbGlkYXRpb24gdG8gZW5zdXJlIGFsbCByZXF1aXJlZCBjb2x1bW5zIGV4aXN0XG4gICAgY29uc3QgcmVxdWlyZWRNZW51Q29sdW1ucyA9IFsnaWQnLCAndmVuZG9ySWQnLCAnbmFtZScsICdwcmljZScsICdpc0FjdGl2ZSddO1xuICAgIGZvciAoY29uc3QgY29sIG9mIHJlcXVpcmVkTWVudUNvbHVtbnMpIHtcbiAgICAgICAgaWYgKG1lbnVIZWFkZXJNYXBbY29sXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvcjogVGhlICcke01FTlVfU0hFRVRfTkFNRX0nIHNoZWV0IGlzIG1pc3NpbmcgdGhlIHJlcXVpcmVkIGNvbHVtbjogJyR7Y29sfScuYCk7XG4gICAgICAgICAgICByZXR1cm4gW107IC8vIFJldHVybiBlbXB0eSBhcnJheSB0byBwcmV2ZW50IGNyYXNoXG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGNvbnN0IGFsbEl0ZW1zOiBNZW51SXRlbVtdID0gbWVudVJvd3NcbiAgICAgIC5tYXAocm93ID0+IHtcbiAgICAgICAgLy8gU2tpcCBlbXB0eSByb3dzIHRvIHByZXZlbnQgZXJyb3JzXG4gICAgICAgIGlmICghcm93IHx8IHJvdy5ldmVyeShjZWxsID0+ICFjZWxsKSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGlkID0gcm93W21lbnVIZWFkZXJNYXBbJ2lkJ11dO1xuICAgICAgICBjb25zdCByb3dWZW5kb3JJZCA9IHJvd1ttZW51SGVhZGVyTWFwWyd2ZW5kb3JJZCddXTtcbiAgICAgICAgY29uc3QgbmFtZSA9IHJvd1ttZW51SGVhZGVyTWFwWyduYW1lJ11dO1xuICAgICAgICBjb25zdCBwcmljZSA9IHBhcnNlSW50KHJvd1ttZW51SGVhZGVyTWFwWydwcmljZSddXSB8fCAnMCcsIDEwKTtcbiAgICAgICAgXG4gICAgICAgIC8vIFN0cmljdGVyIHZhbGlkYXRpb246IGVuc3VyZSBlc3NlbnRpYWwgZmllbGRzIGV4aXN0IGFuZCBtYXRjaCB2ZW5kb3JJZFxuICAgICAgICBpZiAoIWlkIHx8ICFuYW1lIHx8IGlzTmFOKHByaWNlKSB8fCByb3dWZW5kb3JJZCAhPT0gdmVuZG9ySWQpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICAgIHZlbmRvcklkOiByb3dWZW5kb3JJZCxcbiAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogcm93W21lbnVIZWFkZXJNYXBbJ2Rlc2NyaXB0aW9uJ11dIHx8ICcnLFxuICAgICAgICAgICAgcHJpY2U6IHByaWNlLFxuICAgICAgICAgICAgaXNBY3RpdmU6IHJvd1ttZW51SGVhZGVyTWFwWydpc0FjdGl2ZSddXSA9PT0gJ1RSVUUnIHx8IHJvd1ttZW51SGVhZGVyTWFwWydpc0FjdGl2ZSddXSA9PT0gdHJ1ZSxcbiAgICAgICAgICAgIG9wdGlvbnM6IFtdLFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmZpbHRlcihCb29sZWFuKSBhcyBNZW51SXRlbVtdOyAvLyBGaWx0ZXIgb3V0IG51bGwgdmFsdWVzXG4gICAgICBcbiAgICBpZiAob3B0aW9uc1NoZWV0RGF0YSAmJiBvcHRpb25zU2hlZXREYXRhLmxlbmd0aCA+IDEpIHtcbiAgICAgIGNvbnN0IG9wdGlvbnNIZWFkZXJzID0gb3B0aW9uc1NoZWV0RGF0YVswXS5tYXAoaCA9PiBTdHJpbmcoaCkudHJpbSgpKTtcbiAgICAgIGNvbnN0IG9wdGlvbnNSb3dzID0gb3B0aW9uc1NoZWV0RGF0YS5zbGljZSgxKTtcbiAgICAgIGNvbnN0IG9wdGlvbnNIZWFkZXJNYXAgPSBvcHRpb25zSGVhZGVycy5yZWR1Y2UoKGFjYywgaGVhZGVyLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGFjY1toZWFkZXIudHJpbSgpXSA9IGluZGV4O1xuICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICB9LCB7fSBhcyBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+KTtcblxuICAgICAgLy8gVmFsaWRhdGUgcmVxdWlyZWQgb3B0aW9uIGNvbHVtbnNcbiAgICAgIGNvbnN0IHJlcXVpcmVkT3B0aW9uQ29sdW1ucyA9IFsnaWQnLCAnbWVudUl0ZW1JZCcsICdncm91cE5hbWUnLCAnY2hvaWNlTmFtZScsICdwcmljZURlbHRhJywgJ2lzRGVmYXVsdCddO1xuICAgICAgIGZvciAoY29uc3QgY29sIG9mIHJlcXVpcmVkT3B0aW9uQ29sdW1ucykge1xuICAgICAgICBpZiAob3B0aW9uc0hlYWRlck1hcFtjb2xdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yOiBUaGUgJyR7TUVOVV9PUFRJT05TX1NIRUVUX05BTUV9JyBzaGVldCBpcyBtaXNzaW5nIHRoZSByZXF1aXJlZCBjb2x1bW46ICcke2NvbH0nLmApO1xuICAgICAgICAgICAgLy8gQ29udGludWUgd2l0aG91dCBvcHRpb25zLCBidXQgZG9uJ3QgY3Jhc2hcbiAgICAgICAgICAgIHJldHVybiBhbGxJdGVtcztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBhbGxPcHRpb25zID0gb3B0aW9uc1Jvd3MubWFwKHJvdyA9PiAoe1xuICAgICAgICBpZDogcm93W29wdGlvbnNIZWFkZXJNYXBbJ2lkJ11dIHx8ICcnLFxuICAgICAgICBtZW51SXRlbUlkOiByb3dbb3B0aW9uc0hlYWRlck1hcFsnbWVudUl0ZW1JZCddXSB8fCAnJyxcbiAgICAgICAgZ3JvdXBOYW1lOiByb3dbb3B0aW9uc0hlYWRlck1hcFsnZ3JvdXBOYW1lJ11dIHx8ICcnLFxuICAgICAgICBjaG9pY2VOYW1lOiByb3dbb3B0aW9uc0hlYWRlck1hcFsnY2hvaWNlTmFtZSddXSB8fCAnJyxcbiAgICAgICAgcHJpY2VEZWx0YTogcGFyc2VJbnQocm93W29wdGlvbnNIZWFkZXJNYXBbJ3ByaWNlRGVsdGEnXV0gfHwgJzAnLCAxMCksXG4gICAgICAgIGlzRGVmYXVsdDogcm93W29wdGlvbnNIZWFkZXJNYXBbJ2lzRGVmYXVsdCddXSA9PT0gJ1RSVUUnIHx8IHJvd1tvcHRpb25zSGVhZGVyTWFwWydpc0RlZmF1bHQnXV0gPT09IHRydWUsXG4gICAgICB9KSk7XG5cbiAgICAgIC8vIEdyb3VwIG9wdGlvbnMgYnkgbWVudSBpdGVtIElEXG4gICAgICBjb25zdCBvcHRpb25zQnlNZW51SXRlbSA9IGFsbE9wdGlvbnMucmVkdWNlKChhY2MsIG9wdGlvbikgPT4ge1xuICAgICAgICBpZiAoIWFjY1tvcHRpb24ubWVudUl0ZW1JZF0pIHtcbiAgICAgICAgICBhY2Nbb3B0aW9uLm1lbnVJdGVtSWRdID0gW107XG4gICAgICAgIH1cbiAgICAgICAgYWNjW29wdGlvbi5tZW51SXRlbUlkXS5wdXNoKG9wdGlvbik7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgICB9LCB7fSBhcyBSZWNvcmQ8c3RyaW5nLCB0eXBlb2YgYWxsT3B0aW9ucz4pO1xuXG5cbiAgICAgIC8vIEF0dGFjaCBvcHRpb25zIHRvIG1lbnUgaXRlbXNcbiAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBhbGxJdGVtcykge1xuICAgICAgICBpZiAob3B0aW9uc0J5TWVudUl0ZW1baXRlbS5pZF0pIHtcbiAgICAgICAgICBjb25zdCBpdGVtT3B0aW9ucyA9IG9wdGlvbnNCeU1lbnVJdGVtW2l0ZW0uaWRdO1xuICAgICAgICAgIGNvbnN0IGdyb3VwcyA9IGl0ZW1PcHRpb25zLnJlZHVjZSgoYWNjLCBvcHRpb24pID0+IHtcbiAgICAgICAgICAgIGlmICghYWNjW29wdGlvbi5ncm91cE5hbWVdKSB7XG4gICAgICAgICAgICAgIGFjY1tvcHRpb24uZ3JvdXBOYW1lXSA9IHsgbmFtZTogb3B0aW9uLmdyb3VwTmFtZSwgY2hvaWNlczogW10gfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFjY1tvcHRpb24uZ3JvdXBOYW1lXS5jaG9pY2VzLnB1c2goe1xuICAgICAgICAgICAgICBpZDogb3B0aW9uLmlkLFxuICAgICAgICAgICAgICBuYW1lOiBvcHRpb24uY2hvaWNlTmFtZSxcbiAgICAgICAgICAgICAgcHJpY2VEZWx0YTogb3B0aW9uLnByaWNlRGVsdGEsXG4gICAgICAgICAgICAgIGlzRGVmYXVsdDogb3B0aW9uLmlzRGVmYXVsdCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgICB9LCB7fSBhcyBSZWNvcmQ8c3RyaW5nLCBNZW51T3B0aW9uR3JvdXA+KTtcbiAgICAgICAgICBpdGVtLm9wdGlvbnMgPSBPYmplY3QudmFsdWVzKGdyb3Vwcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIGFsbEl0ZW1zO1xuXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIuiugOWPluiPnOWWruWkseaVlzpcIiwgZXJyb3IpO1xuICAgIHJldHVybiBbXTsgLy8gRW5zdXJlIGFuIGVtcHR5IGFycmF5IGlzIHJldHVybmVkIG9uIGFueSBlcnJvclxuICB9XG59XG5cbi8qKlxuICogQWRkcyBhIG5ldyBtZW51IGl0ZW0gYWxvbmcgd2l0aCBpdHMgb3B0aW9ucyB0byB0aGUgcmVzcGVjdGl2ZSBzaGVldHMuXG4gKiBAcGFyYW0ge0FkZE1lbnVJdGVtUmVxdWVzdH0gaXRlbSAtIFRoZSBtZW51IGl0ZW0gZGF0YSB0byBhZGQuXG4gKiBAcmV0dXJucyB7UHJvbWlzZTx7c3VjY2VzczogYm9vbGVhbiwgbWVudUl0ZW1JZDogc3RyaW5nfT59IEEgc3VjY2VzcyBmbGFnIGFuZCB0aGUgbmV3IG1lbnUgaXRlbSdzIElELlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkTWVudUl0ZW0oaXRlbTogQWRkTWVudUl0ZW1SZXF1ZXN0KTogUHJvbWlzZTx7IHN1Y2Nlc3M6IGJvb2xlYW47IG1lbnVJdGVtSWQ6IHN0cmluZyB9PiB7XG4gIGNvbnN0IHZhbGlkYXRpb24gPSBBZGRNZW51SXRlbVJlcXVlc3RTY2hlbWEuc2FmZVBhcnNlKGl0ZW0pO1xuICBpZiAoIXZhbGlkYXRpb24uc3VjY2Vzcykge1xuICAgICAgY29uc3QgZXJyb3JNc2cgPSB2YWxpZGF0aW9uLmVycm9yLmVycm9ycy5tYXAoZSA9PiBgJHtlLnBhdGguam9pbignLicpfTogJHtlLm1lc3NhZ2V9YCkuam9pbignLCAnKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcihg6Ly45YWl6LOH5paZ5pyJ6KqkOiAke2Vycm9yTXNnfWApO1xuICB9XG4gIFxuICAvLyBDaGVjayBmb3IgZHVwbGljYXRlIG1lbnUgaXRlbSBuYW1lIGZvciB0aGUgc2FtZSB2ZW5kb3JcbiAgY29uc3QgZXhpc3RpbmdNZW51cyA9IGF3YWl0IGdldE1lbnVzQnlWZW5kb3JJZChpdGVtLnZlbmRvcklkKTtcbiAgaWYgKGV4aXN0aW5nTWVudXMuc29tZShtZW51ID0+IG1lbnUubmFtZS50cmltKCkudG9Mb3dlckNhc2UoKSA9PT0gaXRlbS5uYW1lLnRyaW0oKS50b0xvd2VyQ2FzZSgpKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIuipsuW6l+WutuW3suacieebuOWQjOWQjeeoseeahOWTgemgheOAglwiKTtcbiAgfVxuXG4gIC8vIDEuIEFkZCB0aGUgbWVudSBpdGVtIGZpcnN0IHRvIGdldCBhbiBJRFxuICBjb25zdCBhbGxNZW51c1JhbmdlID0gYCR7TUVOVV9TSEVFVF9OQU1FfSFBMjpBYDtcbiAgY29uc3QgYWxsTWVudUlkc0RhdGEgPSBhd2FpdCBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGFsbE1lbnVzUmFuZ2UpO1xuICBjb25zdCBsYXN0SWROdW0gPSBhbGxNZW51SWRzRGF0YS5sZW5ndGggPiAwIFxuICAgICAgPyBNYXRoLm1heCgwLCAuLi5hbGxNZW51SWRzRGF0YS5tYXAocm93ID0+IHBhcnNlSW50KChyb3dbMF0gfHwgJ20wJykucmVwbGFjZSgnbScsICcnKSwgMTApKS5maWx0ZXIobnVtID0+ICFpc05hTihudW0pKSlcbiAgICAgIDogMDtcbiAgY29uc3QgbmV3TWVudUlkID0gYG0keyhsYXN0SWROdW0gKyAxKS50b1N0cmluZygpLnBhZFN0YXJ0KDMsICcwJyl9YDtcbiAgXG4gIGNvbnN0IG1lbnVWYWx1ZXMgPSBbXG4gICAgW25ld01lbnVJZCwgaXRlbS52ZW5kb3JJZCwgaXRlbS5uYW1lLCBpdGVtLnByaWNlLCAnVFJVRScsIGl0ZW0uZGVzY3JpcHRpb24gfHwgJyddLFxuICBdO1xuICBhd2FpdCBhcHBlbmRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGAke01FTlVfU0hFRVRfTkFNRX0hQTpGYCwgbWVudVZhbHVlcyk7XG5cbiAgLy8gMi4gQWRkIG9wdGlvbnMgaWYgYW55XG4gIGlmIChpdGVtLm9wdGlvbkdyb3VwcyAmJiBpdGVtLm9wdGlvbkdyb3Vwcy5sZW5ndGggPiAwKSB7XG4gICAgY29uc3QgYWxsT3B0aW9uc1JhbmdlID0gYCR7TUVOVV9PUFRJT05TX1NIRUVUX05BTUV9IUEyOkFgO1xuICAgIGNvbnN0IGFsbE9wdGlvbklkc0RhdGEgPSBhd2FpdCBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGFsbE9wdGlvbnNSYW5nZSk7XG4gICAgbGV0IGxhc3RPcHRpb25JZE51bSA9IGFsbE9wdGlvbklkc0RhdGEubGVuZ3RoID4gMCBcbiAgICAgICAgPyBNYXRoLm1heCgwLCAuLi5hbGxPcHRpb25JZHNEYXRhLm1hcChyb3cgPT4gcGFyc2VJbnQoKHJvd1swXSB8fCAnbzAnKS5yZXBsYWNlKCdvJywgJycpLCAxMCkpLmZpbHRlcihudW0gPT4gIWlzTmFOKG51bSkpKVxuICAgICAgICA6IDA7XG5cbiAgICBjb25zdCBvcHRpb25zVmFsdWVzID0gW107XG4gICAgZm9yIChjb25zdCBncm91cCBvZiBpdGVtLm9wdGlvbkdyb3Vwcykge1xuICAgICAgY29uc3QgY2hvaWNlcyA9IGdyb3VwLmNob2ljZXMuc3BsaXQoJywnKS5tYXAoYyA9PiBjLnRyaW0oKSk7XG4gICAgICBjb25zdCBwcmljZURlbHRhcyA9IChncm91cC5wcmljZURlbHRhcyB8fCAnJykuc3BsaXQoJywnKS5tYXAocCA9PiBwYXJzZUludChwLnRyaW0oKSwgMTApKTtcbiAgICAgIGNvbnN0IGRlZmF1bHRDaG9pY2UgPSBjaG9pY2VzWzBdOyAvLyBUaGUgZmlyc3QgY2hvaWNlIGlzIHRoZSBkZWZhdWx0XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hvaWNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBjaG9pY2VOYW1lID0gY2hvaWNlc1tpXTtcbiAgICAgICAgaWYgKCFjaG9pY2VOYW1lKSBjb250aW51ZTtcbiAgICAgICAgXG4gICAgICAgIGxhc3RPcHRpb25JZE51bSsrO1xuICAgICAgICBjb25zdCBuZXdPcHRpb25JZCA9IGBvJHtsYXN0T3B0aW9uSWROdW0udG9TdHJpbmcoKS5wYWRTdGFydCgzLCAnMCcpfWA7XG4gICAgICAgIGNvbnN0IHByaWNlRGVsdGEgPSAhaXNOYU4ocHJpY2VEZWx0YXNbaV0pID8gcHJpY2VEZWx0YXNbaV0gOiAwO1xuICAgICAgICBjb25zdCBpc0RlZmF1bHQgPSBjaG9pY2VOYW1lID09PSBkZWZhdWx0Q2hvaWNlO1xuXG4gICAgICAgIG9wdGlvbnNWYWx1ZXMucHVzaChbXG4gICAgICAgICAgbmV3T3B0aW9uSWQsXG4gICAgICAgICAgbmV3TWVudUlkLFxuICAgICAgICAgIGdyb3VwLmdyb3VwTmFtZSxcbiAgICAgICAgICBjaG9pY2VOYW1lLFxuICAgICAgICAgIHByaWNlRGVsdGEsXG4gICAgICAgICAgaXNEZWZhdWx0ID8gJ1RSVUUnIDogJ0ZBTFNFJ1xuICAgICAgICBdKTtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgaWYgKG9wdGlvbnNWYWx1ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBhd2FpdCBhcHBlbmRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGAke01FTlVfT1BUSU9OU19TSEVFVF9OQU1FfSFBOkZgLCBvcHRpb25zVmFsdWVzKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZW51SXRlbUlkOiBuZXdNZW51SWQgfTtcbn1cblxuZXhwb3J0IHR5cGUgVXBkYXRlTWVudUl0ZW1SZXF1ZXN0ID0ge1xuICAgIGlkOiBzdHJpbmc7IC8vIEV4aXN0aW5nIG1lbnUgaXRlbSBJRFxuICAgIHZlbmRvcklkOiBzdHJpbmc7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICAgIHByaWNlOiBudW1iZXI7XG4gICAgb3B0aW9uR3JvdXBzPzogQWRkTWVudUl0ZW1SZXF1ZXN0WydvcHRpb25Hcm91cHMnXTtcbn1cblxuLyoqXG4gKiBVcGRhdGVzIGFuIGV4aXN0aW5nIG1lbnUgaXRlbSBhbmQgaXRzIG9wdGlvbnMuXG4gKiBAcGFyYW0ge1VwZGF0ZU1lbnVJdGVtUmVxdWVzdH0gaXRlbSAtIFRoZSBtZW51IGl0ZW0gZGF0YSB0byB1cGRhdGUuXG4gKiBAcmV0dXJucyB7UHJvbWlzZTx7c3VjY2VzczogYm9vbGVhbn0+fSBBIHN1Y2Nlc3MgZmxhZy5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZU1lbnVJdGVtKGl0ZW06IFVwZGF0ZU1lbnVJdGVtUmVxdWVzdCk6IFByb21pc2U8eyBzdWNjZXNzOiBib29sZWFuIH0+IHtcbiAgICAvLyBDaGVjayBmb3IgZHVwbGljYXRlIG1lbnUgaXRlbSBuYW1lXG4gICAgY29uc3QgZXhpc3RpbmdNZW51cyA9IGF3YWl0IGdldE1lbnVzQnlWZW5kb3JJZChpdGVtLnZlbmRvcklkKTtcbiAgICBpZiAoZXhpc3RpbmdNZW51cy5zb21lKG1lbnUgPT4gbWVudS5pZCAhPT0gaXRlbS5pZCAmJiBtZW51Lm5hbWUudHJpbSgpLnRvTG93ZXJDYXNlKCkgPT09IGl0ZW0ubmFtZS50cmltKCkudG9Mb3dlckNhc2UoKSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwi6Kmy5bqX5a625bey5pyJ55u45ZCM5ZCN56ix55qE5ZOB6aCF44CCXCIpO1xuICAgIH1cblxuICAgIC8vIDEuIEZpbmQgYW5kIHVwZGF0ZSB0aGUgbWVudSBpdGVtJ3MgYmFzaWMgaW5mbyAobmFtZSwgcHJpY2UpXG4gICAgY29uc3QgbWVudVJhbmdlID0gYCR7TUVOVV9TSEVFVF9OQU1FfSFBMjpGYDtcbiAgICBjb25zdCBtZW51RGF0YSA9IGF3YWl0IGdldFNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgbWVudVJhbmdlKTtcbiAgICBjb25zdCByb3dJbmRleCA9IG1lbnVEYXRhLmZpbmRJbmRleChyb3cgPT4gcm93WzBdID09PSBpdGVtLmlkKTtcblxuICAgIGlmIChyb3dJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGDmib7kuI3liLAgSUQg54K6ICR7aXRlbS5pZH0g55qE6I+c5Zau5ZOB6aCF44CCYCk7XG4gICAgfVxuICAgIGNvbnN0IHJvd1RvVXBkYXRlID0gcm93SW5kZXggKyAyOyAvLyArMiBmb3IgMS1iYXNlZCBpbmRleCBhbmQgaGVhZGVyXG4gICAgY29uc3QgdXBkYXRlTWVudVJhbmdlID0gYCR7TUVOVV9TSEVFVF9OQU1FfSFDJHtyb3dUb1VwZGF0ZX06RiR7cm93VG9VcGRhdGV9YDtcbiAgICBhd2FpdCB1cGRhdGVTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIHVwZGF0ZU1lbnVSYW5nZSwgW1tpdGVtLm5hbWUsIGl0ZW0ucHJpY2UsICdUUlVFJywgaXRlbS5kZXNjcmlwdGlvbiB8fCAnJ11dKTtcblxuICAgIC8vIDIuIFJlYWQgYWxsIGV4aXN0aW5nIG9wdGlvbnNcbiAgICBjb25zdCBtZW51T3B0aW9uc0RhdGFXaXRoSGVhZGVyID0gYXdhaXQgZ2V0U2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCBgJHtNRU5VX09QVElPTlNfU0hFRVRfTkFNRX0hQTpGYCk7XG4gICAgY29uc3Qgb3B0aW9uc0hlYWRlcnMgPSBtZW51T3B0aW9uc0RhdGFXaXRoSGVhZGVyLmxlbmd0aCA+IDAgPyBtZW51T3B0aW9uc0RhdGFXaXRoSGVhZGVyWzBdIDogW107XG4gICAgY29uc3Qgb3B0aW9uc1Jvd3MgPSBtZW51T3B0aW9uc0RhdGFXaXRoSGVhZGVyLmxlbmd0aCA+IDEgPyBtZW51T3B0aW9uc0RhdGFXaXRoSGVhZGVyLnNsaWNlKDEpIDogW107XG5cbiAgICAvLyAzLiBGaWx0ZXIgb3V0IGFsbCBvbGQgb3B0aW9ucyBmb3IgdGhlIGN1cnJlbnQgbWVudSBpdGVtXG4gICAgY29uc3Qgb3RoZXJJdGVtc09wdGlvbnMgPSBvcHRpb25zUm93cy5maWx0ZXIocm93ID0+IHJvd1sxXSAhPT0gaXRlbS5pZCk7XG4gICAgXG4gICAgLy8gNC4gQ3JlYXRlIG5ldyBvcHRpb24gcm93cyBmcm9tIHRoZSByZXF1ZXN0XG4gICAgbGV0IGxhc3RPcHRpb25JZE51bSA9IG9wdGlvbnNSb3dzLmxlbmd0aCA+IDBcbiAgICAgICAgPyBNYXRoLm1heCgwLCAuLi5vcHRpb25zUm93cy5tYXAocm93ID0+IHBhcnNlSW50KChyb3dbMF0gfHwgJ28wJykucmVwbGFjZSgnbycsICcnKSwgMTApKS5maWx0ZXIobnVtID0+ICFpc05hTihudW0pKSlcbiAgICAgICAgOiAwO1xuXG4gICAgY29uc3QgbmV3T3B0aW9uc1ZhbHVlcyA9IFtdO1xuICAgIGlmIChpdGVtLm9wdGlvbkdyb3Vwcykge1xuICAgICAgICBmb3IgKGNvbnN0IGdyb3VwIG9mIGl0ZW0ub3B0aW9uR3JvdXBzKSB7XG4gICAgICAgICAgICBjb25zdCBjaG9pY2VzID0gZ3JvdXAuY2hvaWNlcy5zcGxpdCgnLCcpLm1hcChjID0+IGMudHJpbSgpKTtcbiAgICAgICAgICAgIGNvbnN0IHByaWNlRGVsdGFzID0gKGdyb3VwLnByaWNlRGVsdGFzIHx8ICcnKS5zcGxpdCgnLCcpLm1hcChwID0+IHBhcnNlSW50KHAudHJpbSgpLCAxMCkpO1xuICAgICAgICAgICAgY29uc3QgZGVmYXVsdENob2ljZSA9IGNob2ljZXNbMF07IC8vIFRoZSBmaXJzdCBjaG9pY2UgaXMgdGhlIGRlZmF1bHRcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaG9pY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hvaWNlTmFtZSA9IGNob2ljZXNbaV07XG4gICAgICAgICAgICAgICAgaWYgKCFjaG9pY2VOYW1lKSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBsYXN0T3B0aW9uSWROdW0rKztcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdPcHRpb25JZCA9IGBvJHtsYXN0T3B0aW9uSWROdW0udG9TdHJpbmcoKS5wYWRTdGFydCgzLCAnMCcpfWA7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJpY2VEZWx0YSA9ICFpc05hTihwcmljZURlbHRhc1tpXSkgPyBwcmljZURlbHRhc1tpXSA6IDA7XG4gICAgICAgICAgICAgICAgY29uc3QgaXNEZWZhdWx0ID0gY2hvaWNlTmFtZSA9PT0gZGVmYXVsdENob2ljZTtcblxuICAgICAgICAgICAgICAgIG5ld09wdGlvbnNWYWx1ZXMucHVzaChbXG4gICAgICAgICAgICAgICAgICAgIG5ld09wdGlvbklkLFxuICAgICAgICAgICAgICAgICAgICBpdGVtLmlkLCAvLyBVc2UgZXhpc3RpbmcgbWVudSBpdGVtIElEXG4gICAgICAgICAgICAgICAgICAgIGdyb3VwLmdyb3VwTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgY2hvaWNlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgcHJpY2VEZWx0YSxcbiAgICAgICAgICAgICAgICAgICAgaXNEZWZhdWx0ID8gJ1RSVUUnIDogJ0ZBTFNFJ1xuICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gNS4gQ29tYmluZSBvbGQgb3B0aW9ucyAoZnJvbSBvdGhlciBpdGVtcykgYW5kIG5ldyBvcHRpb25zIGZvciB0aGlzIGl0ZW1cbiAgICBjb25zdCBmaW5hbE9wdGlvbnMgPSBbLi4ub3RoZXJJdGVtc09wdGlvbnMsIC4uLm5ld09wdGlvbnNWYWx1ZXNdO1xuICAgIFxuICAgIGNvbnN0IGZpbmFsVmFsdWVzID0gZmluYWxPcHRpb25zLmxlbmd0aCA+IDAgPyBbb3B0aW9uc0hlYWRlcnMsIC4uLmZpbmFsT3B0aW9uc10gOiBbb3B0aW9uc0hlYWRlcnNdO1xuXG5cbiAgICAvLyA2LiBCYXRjaCB1cGRhdGUgdGhlIG9wdGlvbnMgc2hlZXRcbiAgICBhd2FpdCBiYXRjaFVwZGF0ZVNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgW1xuICAgICAgICB7XG4gICAgICAgICAgICByYW5nZTogYCR7TUVOVV9PUFRJT05TX1NIRUVUX05BTUV9IUExOkZgLFxuICAgICAgICAgICAgdmFsdWVzOiBmaW5hbFZhbHVlcyxcbiAgICAgICAgfVxuICAgIF0pO1xuXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xufVxuXG5cbmV4cG9ydCB0eXBlIERlbGV0ZU1lbnVJdGVtUmVxdWVzdCA9IHtcbiAgICBpZDogc3RyaW5nO1xufTtcblxuLyoqXG4gKiBEZWxldGVzIGEgbWVudSBpdGVtIGZyb20gdGhlICdtZW51cycgc2hlZXQgYnkgaXRzIElELlxuICogVGhpcyBpcyBhIFwiaGFyZCBkZWxldGVcIiBvcGVyYXRpb24uIEl0IHJlYWRzIGFsbCBkYXRhLCBmaWx0ZXJzIG91dCB0aGVcbiAqIGl0ZW0gdG8gYmUgZGVsZXRlZCBhbmQgaXRzIG9wdGlvbnMsIGNsZWFycyB0aGUgc2hlZXRzLCBhbmQgd3JpdGVzIHRoZVxuICogZmlsdGVyZWQgZGF0YSBiYWNrLlxuICogQHBhcmFtIHtEZWxldGVNZW51SXRlbVJlcXVlc3R9IHJlcSAtIFRoZSByZXF1ZXN0IGNvbnRhaW5pbmcgdGhlIGl0ZW0gSUQgdG8gZGVsZXRlLlxuICogQHJldHVybnMge1Byb21pc2U8e3N1Y2Nlc3M6IGJvb2xlYW59Pn0gQSBzdWNjZXNzIGZsYWcuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVNZW51SXRlbShyZXE6IERlbGV0ZU1lbnVJdGVtUmVxdWVzdCk6IFByb21pc2U8eyBzdWNjZXNzOiBib29sZWFuIH0+IHtcbiAgLy8gMS4gR2V0IGFsbCBkYXRhIGZyb20gdGhlIHR3byBzaGVldHMsIGluY2x1ZGluZyBoZWFkZXJzLlxuICBjb25zdCBbbWVudXNEYXRhV2l0aEhlYWRlciwgbWVudU9wdGlvbnNEYXRhV2l0aEhlYWRlcl0gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgZ2V0U2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCBgJHtNRU5VX1NIRUVUX05BTUV9IUE6RmApLFxuICAgIGdldFNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgYCR7TUVOVV9PUFRJT05TX1NIRUVUX05BTUV9IUE6RmApLFxuICBdKTtcblxuICBjb25zdCBtZW51SGVhZGVycyA9IG1lbnVzRGF0YVdpdGhIZWFkZXIubGVuZ3RoID4gMCA/IG1lbnVzRGF0YVdpdGhIZWFkZXJbMF0gOiBbXTtcbiAgY29uc3QgbWVudVJvd3MgPSBtZW51c0RhdGFXaXRoSGVhZGVyLmxlbmd0aCA+IDEgPyBtZW51c0RhdGFXaXRoSGVhZGVyLnNsaWNlKDEpIDogW107XG5cbiAgY29uc3Qgb3B0aW9uc0hlYWRlcnMgPSBtZW51T3B0aW9uc0RhdGFXaXRoSGVhZGVyLmxlbmd0aCA+IDAgPyBtZW51T3B0aW9uc0RhdGFXaXRoSGVhZGVyWzBdIDogW107XG4gIGNvbnN0IG9wdGlvbnNSb3dzID0gbWVudU9wdGlvbnNEYXRhV2l0aEhlYWRlci5sZW5ndGggPiAxID8gbWVudU9wdGlvbnNEYXRhV2l0aEhlYWRlci5zbGljZSgxKSA6IFtdO1xuXG4gIC8vIDIuIEZpbHRlciBkYXRhIHRvIGtlZXAuXG4gIGNvbnN0IG1lbnVzVG9LZWVwID0gbWVudVJvd3MuZmlsdGVyKHJvdyA9PiByb3dbMF0gIT09IHJlcS5pZCk7XG4gIGNvbnN0IG1lbnVPcHRpb25zVG9LZWVwID0gb3B0aW9uc1Jvd3MuZmlsdGVyKHJvdyA9PiByb3dbMV0gIT09IHJlcS5pZCk7XG5cbiAgLy8gMy4gUHJlcGFyZSBiYXRjaCB1cGRhdGUgZGF0YSAoY2xlYXIgYW5kIHdyaXRlKS5cbiAgLy8gV2Ugd3JpdGUgYmFjayB0aGUgaGVhZGVycyBwbHVzIHRoZSBmaWx0ZXJlZCBkYXRhLlxuICBjb25zdCBiYXRjaERhdGEgPSBbXG4gICAge1xuICAgICAgcmFuZ2U6IGAke01FTlVfU0hFRVRfTkFNRX0hQTE6RmAsXG4gICAgICB2YWx1ZXM6IG1lbnVIZWFkZXJzLmxlbmd0aCA+IDAgPyBbbWVudUhlYWRlcnMsIC4uLm1lbnVzVG9LZWVwXSA6IG1lbnVzVG9LZWVwLFxuICAgIH0sXG4gICAge1xuICAgICAgcmFuZ2U6IGAke01FTlVfT1BUSU9OU19TSEVFVF9OQU1FfSFBMTpGYCxcbiAgICAgIHZhbHVlczogb3B0aW9uc0hlYWRlcnMubGVuZ3RoID4gMCA/IFtvcHRpb25zSGVhZGVycywgLi4ubWVudU9wdGlvbnNUb0tlZXBdIDogbWVudU9wdGlvbnNUb0tlZXAsXG4gICAgfSxcbiAgXTtcblxuICAvLyA0LiBFeGVjdXRlIGJhdGNoIHVwZGF0ZS5cbiAgYXdhaXQgYmF0Y2hVcGRhdGVTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGJhdGNoRGF0YSk7XG4gIFxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG59XG5cbmV4cG9ydCB0eXBlIEJhdGNoRGVsZXRlTWVudUl0ZW1zUmVxdWVzdCA9IHtcbiAgICBpZHM6IHN0cmluZ1tdO1xufTtcblxuLyoqXG4gKiBEZWxldGVzIG11bHRpcGxlIG1lbnUgaXRlbXMgYW5kIHRoZWlyIGFzc29jaWF0ZWQgb3B0aW9ucyBpbiBhIHNpbmdsZSBiYXRjaCBvcGVyYXRpb24uXG4gKiBAcGFyYW0ge0JhdGNoRGVsZXRlTWVudUl0ZW1zUmVxdWVzdH0gcmVxIC0gVGhlIHJlcXVlc3QgY29udGFpbmluZyB0aGUgYXJyYXkgb2YgaXRlbSBJRHMgdG8gZGVsZXRlLlxuICogQHJldHVybnMge1Byb21pc2U8e3N1Y2Nlc3M6IGJvb2xlYW59Pn0gQSBzdWNjZXNzIGZsYWcuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBiYXRjaERlbGV0ZU1lbnVJdGVtcyhyZXE6IEJhdGNoRGVsZXRlTWVudUl0ZW1zUmVxdWVzdCk6IFByb21pc2U8eyBzdWNjZXNzOiBib29sZWFuIH0+IHtcbiAgaWYgKCFyZXEuaWRzIHx8IHJlcS5pZHMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9OyAvLyBOb3RoaW5nIHRvIGRlbGV0ZVxuICB9XG5cbiAgLy8gMS4gR2V0IGFsbCBkYXRhIGZyb20gdGhlIHR3byBzaGVldHMsIGluY2x1ZGluZyBoZWFkZXJzLlxuICBjb25zdCBbbWVudXNEYXRhV2l0aEhlYWRlciwgbWVudU9wdGlvbnNEYXRhV2l0aEhlYWRlcl0gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgZ2V0U2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCBgJHtNRU5VX1NIRUVUX05BTUV9IUE6RmApLFxuICAgIGdldFNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgYCR7TUVOVV9PUFRJT05TX1NIRUVUX05BTUV9IUE6RmApLFxuICBdKTtcblxuICBjb25zdCBtZW51SGVhZGVycyA9IG1lbnVzRGF0YVdpdGhIZWFkZXIubGVuZ3RoID4gMCA/IG1lbnVzRGF0YVdpdGhIZWFkZXJbMF0gOiBbXTtcbiAgY29uc3QgbWVudVJvd3MgPSBtZW51c0RhdGFXaXRoSGVhZGVyLmxlbmd0aCA+IDEgPyBtZW51c0RhdGFXaXRoSGVhZGVyLnNsaWNlKDEpIDogW107XG5cbiAgY29uc3Qgb3B0aW9uc0hlYWRlcnMgPSBtZW51T3B0aW9uc0RhdGFXaXRoSGVhZGVyLmxlbmd0aCA+IDAgPyBtZW51T3B0aW9uc0RhdGFXaXRoSGVhZGVyWzBdIDogW107XG4gIGNvbnN0IG9wdGlvbnNSb3dzID0gbWVudU9wdGlvbnNEYXRhV2l0aEhlYWRlci5sZW5ndGggPiAxID8gbWVudU9wdGlvbnNEYXRhV2l0aEhlYWRlci5zbGljZSgxKSA6IFtdO1xuXG4gIC8vIDIuIEZpbHRlciBkYXRhIHRvIGtlZXAuXG4gIGNvbnN0IGlkc1RvRGVsZXRlU2V0ID0gbmV3IFNldChyZXEuaWRzKTtcbiAgY29uc3QgbWVudXNUb0tlZXAgPSBtZW51Um93cy5maWx0ZXIocm93ID0+ICFpZHNUb0RlbGV0ZVNldC5oYXMocm93WzBdKSk7XG4gIGNvbnN0IG1lbnVPcHRpb25zVG9LZWVwID0gb3B0aW9uc1Jvd3MuZmlsdGVyKHJvdyA9PiAhaWRzVG9EZWxldGVTZXQuaGFzKHJvd1sxXSkpO1xuXG4gIC8vIDMuIFByZXBhcmUgYmF0Y2ggdXBkYXRlIGRhdGEgKGNsZWFyIGFuZCB3cml0ZSkuXG4gIC8vIFdlIHdyaXRlIGJhY2sgdGhlIGhlYWRlcnMgcGx1cyB0aGUgZmlsdGVyZWQgZGF0YS5cbiAgY29uc3QgYmF0Y2hEYXRhID0gW1xuICAgIHtcbiAgICAgIHJhbmdlOiBgJHtNRU5VX1NIRUVUX05BTUV9IUExOkZgLFxuICAgICAgdmFsdWVzOiBtZW51SGVhZGVycy5sZW5ndGggPiAwID8gW21lbnVIZWFkZXJzLCAuLi5tZW51c1RvS2VlcF0gOiBbXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHJhbmdlOiBgJHtNRU5VX09QVElPTlNfU0hFRVRfTkFNRX0hQTE6RmAsXG4gICAgICB2YWx1ZXM6IG9wdGlvbnNIZWFkZXJzLmxlbmd0aCA+IDAgPyBbb3B0aW9uc0hlYWRlcnMsIC4uLm1lbnVPcHRpb25zVG9LZWVwXSA6IFtdLFxuICAgIH0sXG4gIF07XG5cbiAgLy8gNC4gRXhlY3V0ZSBiYXRjaCB1cGRhdGUuXG4gIGF3YWl0IGJhdGNoVXBkYXRlU2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCBiYXRjaERhdGEpO1xuICBcbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xufVxuXG4vKipcbiAqIER1cGxpY2F0ZXMgYSBtZW51IGl0ZW0gYW5kIGFsbCBpdHMgYXNzb2NpYXRlZCBvcHRpb25zLlxuICogQHBhcmFtIHtzdHJpbmd9IG1lbnVJdGVtSWQgLSBUaGUgSUQgb2YgdGhlIG1lbnUgaXRlbSB0byBkdXBsaWNhdGUuXG4gKiBAcmV0dXJucyB7UHJvbWlzZTx7c3VjY2VzczogYm9vbGVhbn0+fSBBIHN1Y2Nlc3MgZmxhZy5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGR1cGxpY2F0ZU1lbnVJdGVtKG1lbnVJdGVtSWQ6IHN0cmluZyk6IFByb21pc2U8eyBzdWNjZXNzOiBib29sZWFuIH0+IHtcbiAgLy8gMS4gRmV0Y2ggYWxsIGV4aXN0aW5nIGRhdGFcbiAgY29uc3QgW1xuICAgIG1lbnVzRGF0YVdpdGhIZWFkZXIsXG4gICAgbWVudU9wdGlvbnNEYXRhV2l0aEhlYWRlcixcbiAgXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGAke01FTlVfU0hFRVRfTkFNRX0hQTpGYCksXG4gICAgZ2V0U2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCBgJHtNRU5VX09QVElPTlNfU0hFRVRfTkFNRX0hQTpGYCksXG4gIF0pO1xuXG4gIGNvbnN0IG1lbnVSb3dzID0gbWVudXNEYXRhV2l0aEhlYWRlci5sZW5ndGggPiAxID8gbWVudXNEYXRhV2l0aEhlYWRlci5zbGljZSgxKSA6IFtdO1xuICBjb25zdCBvcHRpb25zUm93cyA9IG1lbnVPcHRpb25zRGF0YVdpdGhIZWFkZXIubGVuZ3RoID4gMSA/IG1lbnVPcHRpb25zRGF0YVdpdGhIZWFkZXIuc2xpY2UoMSkgOiBbXTtcblxuICAvLyAyLiBGaW5kIHRoZSBvcmlnaW5hbCBpdGVtIGFuZCBvcHRpb25zXG4gIGNvbnN0IG9yaWdpbmFsTWVudVJvdyA9IG1lbnVSb3dzLmZpbmQocm93ID0+IHJvd1swXSA9PT0gbWVudUl0ZW1JZCk7XG4gIGlmICghb3JpZ2luYWxNZW51Um93KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGDmib7kuI3liLAgSUQg54K6ICR7bWVudUl0ZW1JZH0g55qE6I+c5Zau5ZOB6aCF44CCYCk7XG4gIH1cblxuICBjb25zdCBvcmlnaW5hbE9wdGlvbnMgPSBvcHRpb25zUm93cy5maWx0ZXIocm93ID0+IHJvd1sxXSA9PT0gbWVudUl0ZW1JZCk7XG5cbiAgLy8gMy4gR2VuZXJhdGUgbmV3IG1lbnUgaXRlbSBpbmZvXG4gIGxldCBuZXdNZW51TmFtZSA9IGAke29yaWdpbmFsTWVudVJvd1syXX0gLSDlia/mnKxgO1xuICBsZXQgc3VmZml4ID0gMjtcbiAgd2hpbGUgKG1lbnVSb3dzLnNvbWUocm93ID0+IHJvd1syXSA9PT0gbmV3TWVudU5hbWUgJiYgcm93WzFdID09PSBvcmlnaW5hbE1lbnVSb3dbMV0pKSB7XG4gICAgbmV3TWVudU5hbWUgPSBgJHtvcmlnaW5hbE1lbnVSb3dbMl19IC0g5Ymv5pysICR7c3VmZml4fWA7XG4gICAgc3VmZml4Kys7XG4gIH1cbiAgXG4gIGxldCBsYXN0TWVudUlkTnVtID0gbWVudVJvd3MubGVuZ3RoID4gMCA/IE1hdGgubWF4KDAsIC4uLm1lbnVSb3dzLm1hcChyb3cgPT4gcGFyc2VJbnQoKHJvd1swXSB8fCAnbTAnKS5yZXBsYWNlKCdtJywgJycpLCAxMCkpLmZpbHRlcihudW0gPT4gIWlzTmFOKG51bSkpKSA6IDA7XG4gIGNvbnN0IG5ld01lbnVJZCA9IGBtJHsobGFzdE1lbnVJZE51bSArIDEpLnRvU3RyaW5nKCkucGFkU3RhcnQoMywgJzAnKX1gO1xuICBcbiAgY29uc3QgbmV3TWVudURhdGEgPSBbW1xuICAgICAgbmV3TWVudUlkLFxuICAgICAgb3JpZ2luYWxNZW51Um93WzFdLCAvLyB2ZW5kb3JJZFxuICAgICAgbmV3TWVudU5hbWUsXG4gICAgICBvcmlnaW5hbE1lbnVSb3dbM10sIC8vIHByaWNlXG4gICAgICBvcmlnaW5hbE1lbnVSb3dbNF0sIC8vIGlzQWN0aXZlXG4gICAgICBvcmlnaW5hbE1lbnVSb3dbNV0sIC8vIGRlc2NyaXB0aW9uXG4gIF1dO1xuXG4gIC8vIDQuIEdlbmVyYXRlIG5ldyBvcHRpb25zXG4gIGxldCBsYXN0T3B0aW9uSWROdW0gPSBvcHRpb25zUm93cy5sZW5ndGggPiAwID8gTWF0aC5tYXgoMCwgLi4ub3B0aW9uc1Jvd3MubWFwKHJvdyA9PiBwYXJzZUludCgocm93WzBdIHx8ICdvMCcpLnJlcGxhY2UoJ28nLCAnJyksIDEwKSkuZmlsdGVyKG51bSA9PiAhaXNOYU4obnVtKSkpIDogMDtcbiAgXG4gIGNvbnN0IG5ld09wdGlvbnNEYXRhID0gW107XG4gIGZvciAoY29uc3Qgb3B0aW9uUm93IG9mIG9yaWdpbmFsT3B0aW9ucykge1xuICAgIGxhc3RPcHRpb25JZE51bSsrO1xuICAgIGNvbnN0IG5ld09wdGlvbklkID0gYG8ke2xhc3RPcHRpb25JZE51bS50b1N0cmluZygpLnBhZFN0YXJ0KDMsICcwJyl9YDtcbiAgICBuZXdPcHRpb25zRGF0YS5wdXNoKFtcbiAgICAgIG5ld09wdGlvbklkLFxuICAgICAgbmV3TWVudUlkLCAvLyBMaW5rIHRvIHRoZSBuZXcgbWVudSBpdGVtXG4gICAgICBvcHRpb25Sb3dbMl0sIC8vIGdyb3VwTmFtZVxuICAgICAgb3B0aW9uUm93WzNdLCAvLyBjaG9pY2VOYW1lXG4gICAgICBvcHRpb25Sb3dbNF0sIC8vIHByaWNlRGVsdGFcbiAgICAgIG9wdGlvblJvd1s1XSwgLy8gaXNEZWZhdWx0XG4gICAgXSk7XG4gIH1cblxuICAvLyA1LiBBcHBlbmQgYWxsIG5ldyBkYXRhIHRvIHNoZWV0c1xuICBhd2FpdCBhcHBlbmRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGAke01FTlVfU0hFRVRfTkFNRX0hQTpGYCwgbmV3TWVudURhdGEpO1xuICBpZiAobmV3T3B0aW9uc0RhdGEubGVuZ3RoID4gMCkge1xuICAgIGF3YWl0IGFwcGVuZFNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgYCR7TUVOVV9PUFRJT05TX1NIRUVUX05BTUV9IUE6RmAsIG5ld09wdGlvbnNEYXRhKTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbn1cblxuXG4vLyAtLS0gTWVudSBPcHRpb24gRmxvd3MgLS0tXG5cbmV4cG9ydCB0eXBlIEFkZE1lbnVPcHRpb25SZXF1ZXN0ID0ge1xuICBtZW51SXRlbUlkOiBzdHJpbmc7XG4gIGdyb3VwTmFtZTogc3RyaW5nO1xuICBjaG9pY2VOYW1lOiBzdHJpbmc7XG4gIHByaWNlRGVsdGE6IG51bWJlcjtcbiAgaXNEZWZhdWx0OiBib29sZWFuO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkTWVudU9wdGlvbihyZXE6IEFkZE1lbnVPcHRpb25SZXF1ZXN0KTogUHJvbWlzZTx7IHN1Y2Nlc3M6IGJvb2xlYW4gfT4ge1xuICAvLyBJZiB0aGUgbmV3IG9wdGlvbiBpcyBkZWZhdWx0LCB1bnNldCBvdGhlciBkZWZhdWx0cyBpbiB0aGUgc2FtZSBncm91cC5cbiAgaWYgKHJlcS5pc0RlZmF1bHQpIHtcbiAgICBhd2FpdCBzZXRNZW51T3B0aW9uRGVmYXVsdCh7IG1lbnVJdGVtSWQ6IHJlcS5tZW51SXRlbUlkLCBncm91cE5hbWU6IHJlcS5ncm91cE5hbWUsIG9wdGlvbklkOiAnJyB9KTsgLy8gUGFzcyBlbXB0eSBvcHRpb25JZCB0byB1bnNldCBhbGwsIG5ldyBvbmUgd2lsbCBiZSBzZXRcbiAgfVxuXG4gIGNvbnN0IHJhbmdlID0gYCR7TUVOVV9PUFRJT05TX1NIRUVUX05BTUV9IUE6RmA7XG4gIGNvbnN0IGFsbE9wdGlvbnNSYW5nZSA9IGAke01FTlVfT1BUSU9OU19TSEVFVF9OQU1FfSFBMjpBYDtcbiAgXG4gIGNvbnN0IGFsbE9wdGlvbklkc0RhdGEgPSBhd2FpdCBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGFsbE9wdGlvbnNSYW5nZSk7XG4gIGNvbnN0IGxhc3RJZE51bSA9IGFsbE9wdGlvbklkc0RhdGEubGVuZ3RoID4gMCBcbiAgICAgID8gTWF0aC5tYXgoMCwgLi4uYWxsT3B0aW9uSWRzRGF0YS5tYXAocm93ID0+IHBhcnNlSW50KChyb3dbMF0gfHwgJ28wJykucmVwbGFjZSgnbycsICcnKSwgMTApKS5maWx0ZXIobnVtID0+ICFpc05hTihudW0pKSlcbiAgICAgIDogMDtcblxuICBjb25zdCBuZXdJZCA9IGBvJHsobGFzdElkTnVtICsgMSkudG9TdHJpbmcoKS5wYWRTdGFydCgzLCAnMCcpfWA7XG4gIFxuICBjb25zdCB2YWx1ZXMgPSBbW1xuICAgIG5ld0lkLCBcbiAgICByZXEubWVudUl0ZW1JZCwgXG4gICAgcmVxLmdyb3VwTmFtZSwgXG4gICAgcmVxLmNob2ljZU5hbWUsIFxuICAgIHJlcS5wcmljZURlbHRhLCBcbiAgICByZXEuaXNEZWZhdWx0ID8gJ1RSVUUnIDogJ0ZBTFNFJ1xuICBdXTtcblxuICBhd2FpdCBhcHBlbmRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIHJhbmdlLCB2YWx1ZXMpO1xuXG4gIC8vIElmIHRoZSBuZXcgb3B0aW9uIHdhcyBzZXQgdG8gZGVmYXVsdCwgZW5zdXJlIGl0IGlzIG5vdyB0aGUgb25seSBkZWZhdWx0IG9uZVxuICBpZihyZXEuaXNEZWZhdWx0KSB7XG4gICAgICBhd2FpdCBzZXRNZW51T3B0aW9uRGVmYXVsdCh7IG9wdGlvbklkOiBuZXdJZCwgbWVudUl0ZW1JZDogcmVxLm1lbnVJdGVtSWQsIGdyb3VwTmFtZTogcmVxLmdyb3VwTmFtZSB9KTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbn1cblxuXG5leHBvcnQgdHlwZSBEZWxldGVNZW51T3B0aW9uUmVxdWVzdCA9IHtcbiAgb3B0aW9uSWQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZU1lbnVPcHRpb24ocmVxOiBEZWxldGVNZW51T3B0aW9uUmVxdWVzdCk6IFByb21pc2U8eyBzdWNjZXNzOiBib29sZWFuIH0+IHtcbiAgY29uc3QgcmFuZ2UgPSBgJHtNRU5VX09QVElPTlNfU0hFRVRfTkFNRX0hQTI6RmA7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIHJhbmdlKTtcblxuICBpZiAoIWRhdGEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIuaJvuS4jeWIsOiPnOWWrumBuOmgheizh+aWmeOAglwiKTtcbiAgfVxuICBcbiAgY29uc3Qgcm93SW5kZXggPSBkYXRhLmZpbmRJbmRleChyb3cgPT4gcm93WzBdID09PSByZXEub3B0aW9uSWQpO1xuICBcbiAgaWYgKHJvd0luZGV4ID09PSAtMSkge1xuICAgICAgY29uc29sZS5sb2coYOaJvuS4jeWIsCBJRCDngrogJHtyZXEub3B0aW9uSWR9IOeahOiPnOWWrumBuOmgheOAgmApO1xuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UgfTsgLy8gSXRlbSBub3QgZm91bmRcbiAgfVxuXG4gIGNvbnN0IHJvd1RvRGVsZXRlID0gcm93SW5kZXggKyAyOyBcbiAgLy8gVGhpcyBpcyBub3QgYSBncmVhdCB3YXkgdG8gXCJkZWxldGVcIiBhIHJvdy4gQSBiZXR0ZXIgd2F5IGlzIHRvIHJlYWQgYWxsLCBmaWx0ZXIsIGNsZWFyLCBhbmQgd3JpdGUgYmFjay5cbiAgLy8gRm9yIG5vdywgbGV0J3MganVzdCBjbGVhciB0aGUgc3BlY2lmaWMgcm93LlxuICBjb25zdCBjbGVhclJhbmdlID0gYCR7TUVOVV9PUFRJT05TX1NIRUVUX05BTUV9IUEke3Jvd1RvRGVsZXRlfTpGJHtyb3dUb0RlbGV0ZX1gO1xuXG4gIGF3YWl0IGNsZWFyU2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCBjbGVhclJhbmdlKTtcbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xufVxuXG5leHBvcnQgdHlwZSBTZXRNZW51T3B0aW9uRGVmYXVsdFJlcXVlc3QgPSB7XG4gIG9wdGlvbklkOiBzdHJpbmc7IC8vIFRoZSBvcHRpb24gdG8gc2V0IGFzIGRlZmF1bHQuIElmIGVtcHR5LCBhbGwgb3B0aW9ucyBpbiBncm91cCB3aWxsIGJlIHVuc2V0LlxuICBtZW51SXRlbUlkOiBzdHJpbmc7XG4gIGdyb3VwTmFtZTogc3RyaW5nO1xufVxuXG4vKipcbiAqIFNldHMgYSBzcGVjaWZpYyBvcHRpb24gYXMgdGhlIGRlZmF1bHQgZm9yIGl0cyBncm91cCwgdW5zZXR0aW5nIGFueSBwcmV2aW91cyBkZWZhdWx0LlxuICogQHBhcmFtIHJlcSBUaGUgcmVxdWVzdCBjb250YWluaW5nIG9wdGlvbiwgbWVudSBpdGVtLCBhbmQgZ3JvdXAgaWRlbnRpZmllcnMuXG4gKiBAcmV0dXJucyBBIHN1Y2Nlc3MgZmxhZy5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNldE1lbnVPcHRpb25EZWZhdWx0KHJlcTogU2V0TWVudU9wdGlvbkRlZmF1bHRSZXF1ZXN0KTogUHJvbWlzZTx7IHN1Y2Nlc3M6IGJvb2xlYW4gfT4ge1xuICAgIGNvbnN0IHsgb3B0aW9uSWQsIG1lbnVJdGVtSWQsIGdyb3VwTmFtZSB9ID0gcmVxO1xuICAgIGNvbnN0IHJhbmdlID0gYCR7TUVOVV9PUFRJT05TX1NIRUVUX05BTUV9IUEyOkZgO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIHJhbmdlKTtcblxuICAgIGlmICghZGF0YSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCLmib7kuI3liLDoj5zllq7pgbjpoIXos4fmlpnjgIJcIik7XG4gICAgfVxuXG4gICAgY29uc3QgdXBkYXRlcyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCByb3cgPSBkYXRhW2ldO1xuICAgICAgICAvLyBDaGVjayBpZiB0aGUgb3B0aW9uIGJlbG9uZ3MgdG8gdGhlIHNhbWUgbWVudSBpdGVtIGFuZCBncm91cFxuICAgICAgICBpZiAocm93WzFdID09PSBtZW51SXRlbUlkICYmIHJvd1syXSA9PT0gZ3JvdXBOYW1lKSB7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50T3B0aW9uSWQgPSByb3dbMF07XG4gICAgICAgICAgICBjb25zdCBpc0N1cnJlbnRseURlZmF1bHQgPSByb3dbNV0gPT09ICdUUlVFJztcbiAgICAgICAgICAgIGNvbnN0IHNob3VsZEJlRGVmYXVsdCA9IGN1cnJlbnRPcHRpb25JZCA9PT0gb3B0aW9uSWQ7XG5cbiAgICAgICAgICAgIC8vIElmIHRoaXMgcm93IG5lZWRzIHRvIGNoYW5nZSBpdHMgZGVmYXVsdCBzdGF0dXNcbiAgICAgICAgICAgIGlmIChpc0N1cnJlbnRseURlZmF1bHQgIT09IHNob3VsZEJlRGVmYXVsdCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJvd1RvVXBkYXRlID0gaSArIDI7IC8vICsyIGJlY2F1c2Ugc2hlZXQgaXMgMS1pbmRleGVkIGFuZCB3ZSBza2lwcGVkIGhlYWRlclxuICAgICAgICAgICAgICAgIHVwZGF0ZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIHJhbmdlOiBgJHtNRU5VX09QVElPTlNfU0hFRVRfTkFNRX0hRiR7cm93VG9VcGRhdGV9YCxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzOiBbW3Nob3VsZEJlRGVmYXVsdCA/ICdUUlVFJyA6ICdGQUxTRSddXSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmICh1cGRhdGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIC8vIE5vdGU6IFRoaXMgY2FuIGJlIHNsb3cgaWYgdGhlcmUgYXJlIG1hbnkgdXBkYXRlcy4gQmF0Y2hpbmcgd291bGQgYmUgYmV0dGVyLlxuICAgICAgZm9yIChjb25zdCB1cGRhdGUgb2YgdXBkYXRlcykge1xuICAgICAgICAgIGF3YWl0IHVwZGF0ZVNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgdXBkYXRlLnJhbmdlLCB1cGRhdGUudmFsdWVzKTtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJvU0FpYnNCIn0=
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/ai/flows/data:21d56e [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"40e33b135334bc767883b397f1b6ec842f3de11f23":"batchDeleteMenuItems"},"src/ai/flows/menu-flow.ts",""] */ __turbopack_context__.s({
    "batchDeleteMenuItems": (()=>batchDeleteMenuItems)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var batchDeleteMenuItems = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40e33b135334bc767883b397f1b6ec842f3de11f23", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "batchDeleteMenuItems"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vbWVudS1mbG93LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuJ3VzZSBzZXJ2ZXInO1xuLyoqXG4gKiBAZmlsZU92ZXJ2aWV3IEZsb3cgZm9yIGhhbmRsaW5nIG1lbnUgZGF0YSBmcm9tIEdvb2dsZSBTaGVldHMuXG4gKi9cbmltcG9ydCB7IGdldFNoZWV0RGF0YSwgYXBwZW5kU2hlZXREYXRhLCBjbGVhclNoZWV0RGF0YSwgdXBkYXRlU2hlZXREYXRhLCBiYXRjaFVwZGF0ZVNoZWV0RGF0YSB9IGZyb20gJ0Avc2VydmljZXMvc2hlZXQtc2VydmljZSc7XG5pbXBvcnQgeyB0eXBlIEFkZE1lbnVJdGVtUmVxdWVzdCwgQWRkTWVudUl0ZW1SZXF1ZXN0U2NoZW1hIH0gZnJvbSAnQC9saWIvc2NoZW1hL21lbnUnO1xuXG4vLyBUaGUgSUQgb2YgeW91ciBHb29nbGUgU2hlZXRcbmNvbnN0IFNQUkVBRFNIRUVUX0lEID0gJzFaajJoMGNZbHJiMm1CYU5nbDEtUG9PSzd0bENDd0RjY0FYbjV3NjZocDRjJztcbmNvbnN0IE1FTlVfU0hFRVRfTkFNRSA9ICdtZW51cyc7XG5jb25zdCBNRU5VX09QVElPTlNfU0hFRVRfTkFNRSA9ICdtZW51X29wdGlvbnMnO1xuXG5leHBvcnQgdHlwZSBNZW51T3B0aW9uQ2hvaWNlID0ge1xuICBpZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIHByaWNlRGVsdGE6IG51bWJlcjtcbiAgaXNEZWZhdWx0OiBib29sZWFuO1xufVxuXG5leHBvcnQgdHlwZSBNZW51T3B0aW9uR3JvdXAgPSB7XG4gIG5hbWU6IHN0cmluZztcbiAgY2hvaWNlczogTWVudU9wdGlvbkNob2ljZVtdO1xufVxuXG5leHBvcnQgdHlwZSBNZW51SXRlbSA9IHtcbiAgaWQ6IHN0cmluZztcbiAgdmVuZG9ySWQ6IHN0cmluZztcbiAgbmFtZTpzdHJpbmc7XG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICBwcmljZTogbnVtYmVyO1xuICBpc0FjdGl2ZTogYm9vbGVhbjtcbiAgb3B0aW9ucz86IE1lbnVPcHRpb25Hcm91cFtdO1xufTtcblxuLyoqXG4gKiBSZXRyaWV2ZXMgYWxsIG1lbnUgaXRlbXMgZm9yIGEgZ2l2ZW4gdmVuZG9yIGZyb20gdGhlICdtZW51cycgc2hlZXQsIGluY2x1ZGluZyB0aGVpciBvcHRpb25zLlxuICogQHBhcmFtIHtzdHJpbmd9IHZlbmRvcklkIFRoZSBJRCBvZiB0aGUgdmVuZG9yLlxuICogQHJldHVybnMge1Byb21pc2U8TWVudUl0ZW1bXT59IEEgbGlzdCBvZiBtZW51IGl0ZW1zIHdpdGggdGhlaXIgb3B0aW9ucy5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE1lbnVzQnlWZW5kb3JJZCh2ZW5kb3JJZDogc3RyaW5nKTogUHJvbWlzZTxNZW51SXRlbVtdPiB7XG4gIHRyeSB7XG4gICAgY29uc3QgW21lbnVTaGVldERhdGEsIG9wdGlvbnNTaGVldERhdGFdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGAke01FTlVfU0hFRVRfTkFNRX0hQTpGYCksXG4gICAgICAgIGdldFNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgYCR7TUVOVV9PUFRJT05TX1NIRUVUX05BTUV9IUE6RmApXG4gICAgXSk7XG4gICAgXG4gICAgLy8gSWYgdGhlcmUncyBubyBkYXRhIG9yIG9ubHkgYSBoZWFkZXIgcm93LCByZXR1cm4gYW4gZW1wdHkgYXJyYXkuXG4gICAgaWYgKCFtZW51U2hlZXREYXRhIHx8IG1lbnVTaGVldERhdGEubGVuZ3RoIDwgMikge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIGNvbnN0IG1lbnVIZWFkZXJzID0gbWVudVNoZWV0RGF0YVswXS5tYXAoaCA9PiBTdHJpbmcoaCkudHJpbSgpKTtcbiAgICBjb25zdCBtZW51Um93cyA9IG1lbnVTaGVldERhdGEuc2xpY2UoMSk7XG5cbiAgICBjb25zdCBtZW51SGVhZGVyTWFwID0gbWVudUhlYWRlcnMucmVkdWNlKChhY2MsIGhlYWRlciwgaW5kZXgpID0+IHtcbiAgICAgICAgYWNjW2hlYWRlci50cmltKCldID0gaW5kZXg7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30gYXMgUmVjb3JkPHN0cmluZywgbnVtYmVyPik7XG4gICAgXG4gICAgLy8gQWRkIHZhbGlkYXRpb24gdG8gZW5zdXJlIGFsbCByZXF1aXJlZCBjb2x1bW5zIGV4aXN0XG4gICAgY29uc3QgcmVxdWlyZWRNZW51Q29sdW1ucyA9IFsnaWQnLCAndmVuZG9ySWQnLCAnbmFtZScsICdwcmljZScsICdpc0FjdGl2ZSddO1xuICAgIGZvciAoY29uc3QgY29sIG9mIHJlcXVpcmVkTWVudUNvbHVtbnMpIHtcbiAgICAgICAgaWYgKG1lbnVIZWFkZXJNYXBbY29sXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvcjogVGhlICcke01FTlVfU0hFRVRfTkFNRX0nIHNoZWV0IGlzIG1pc3NpbmcgdGhlIHJlcXVpcmVkIGNvbHVtbjogJyR7Y29sfScuYCk7XG4gICAgICAgICAgICByZXR1cm4gW107IC8vIFJldHVybiBlbXB0eSBhcnJheSB0byBwcmV2ZW50IGNyYXNoXG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGNvbnN0IGFsbEl0ZW1zOiBNZW51SXRlbVtdID0gbWVudVJvd3NcbiAgICAgIC5tYXAocm93ID0+IHtcbiAgICAgICAgLy8gU2tpcCBlbXB0eSByb3dzIHRvIHByZXZlbnQgZXJyb3JzXG4gICAgICAgIGlmICghcm93IHx8IHJvdy5ldmVyeShjZWxsID0+ICFjZWxsKSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGlkID0gcm93W21lbnVIZWFkZXJNYXBbJ2lkJ11dO1xuICAgICAgICBjb25zdCByb3dWZW5kb3JJZCA9IHJvd1ttZW51SGVhZGVyTWFwWyd2ZW5kb3JJZCddXTtcbiAgICAgICAgY29uc3QgbmFtZSA9IHJvd1ttZW51SGVhZGVyTWFwWyduYW1lJ11dO1xuICAgICAgICBjb25zdCBwcmljZSA9IHBhcnNlSW50KHJvd1ttZW51SGVhZGVyTWFwWydwcmljZSddXSB8fCAnMCcsIDEwKTtcbiAgICAgICAgXG4gICAgICAgIC8vIFN0cmljdGVyIHZhbGlkYXRpb246IGVuc3VyZSBlc3NlbnRpYWwgZmllbGRzIGV4aXN0IGFuZCBtYXRjaCB2ZW5kb3JJZFxuICAgICAgICBpZiAoIWlkIHx8ICFuYW1lIHx8IGlzTmFOKHByaWNlKSB8fCByb3dWZW5kb3JJZCAhPT0gdmVuZG9ySWQpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICAgIHZlbmRvcklkOiByb3dWZW5kb3JJZCxcbiAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogcm93W21lbnVIZWFkZXJNYXBbJ2Rlc2NyaXB0aW9uJ11dIHx8ICcnLFxuICAgICAgICAgICAgcHJpY2U6IHByaWNlLFxuICAgICAgICAgICAgaXNBY3RpdmU6IHJvd1ttZW51SGVhZGVyTWFwWydpc0FjdGl2ZSddXSA9PT0gJ1RSVUUnIHx8IHJvd1ttZW51SGVhZGVyTWFwWydpc0FjdGl2ZSddXSA9PT0gdHJ1ZSxcbiAgICAgICAgICAgIG9wdGlvbnM6IFtdLFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmZpbHRlcihCb29sZWFuKSBhcyBNZW51SXRlbVtdOyAvLyBGaWx0ZXIgb3V0IG51bGwgdmFsdWVzXG4gICAgICBcbiAgICBpZiAob3B0aW9uc1NoZWV0RGF0YSAmJiBvcHRpb25zU2hlZXREYXRhLmxlbmd0aCA+IDEpIHtcbiAgICAgIGNvbnN0IG9wdGlvbnNIZWFkZXJzID0gb3B0aW9uc1NoZWV0RGF0YVswXS5tYXAoaCA9PiBTdHJpbmcoaCkudHJpbSgpKTtcbiAgICAgIGNvbnN0IG9wdGlvbnNSb3dzID0gb3B0aW9uc1NoZWV0RGF0YS5zbGljZSgxKTtcbiAgICAgIGNvbnN0IG9wdGlvbnNIZWFkZXJNYXAgPSBvcHRpb25zSGVhZGVycy5yZWR1Y2UoKGFjYywgaGVhZGVyLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGFjY1toZWFkZXIudHJpbSgpXSA9IGluZGV4O1xuICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICB9LCB7fSBhcyBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+KTtcblxuICAgICAgLy8gVmFsaWRhdGUgcmVxdWlyZWQgb3B0aW9uIGNvbHVtbnNcbiAgICAgIGNvbnN0IHJlcXVpcmVkT3B0aW9uQ29sdW1ucyA9IFsnaWQnLCAnbWVudUl0ZW1JZCcsICdncm91cE5hbWUnLCAnY2hvaWNlTmFtZScsICdwcmljZURlbHRhJywgJ2lzRGVmYXVsdCddO1xuICAgICAgIGZvciAoY29uc3QgY29sIG9mIHJlcXVpcmVkT3B0aW9uQ29sdW1ucykge1xuICAgICAgICBpZiAob3B0aW9uc0hlYWRlck1hcFtjb2xdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yOiBUaGUgJyR7TUVOVV9PUFRJT05TX1NIRUVUX05BTUV9JyBzaGVldCBpcyBtaXNzaW5nIHRoZSByZXF1aXJlZCBjb2x1bW46ICcke2NvbH0nLmApO1xuICAgICAgICAgICAgLy8gQ29udGludWUgd2l0aG91dCBvcHRpb25zLCBidXQgZG9uJ3QgY3Jhc2hcbiAgICAgICAgICAgIHJldHVybiBhbGxJdGVtcztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBhbGxPcHRpb25zID0gb3B0aW9uc1Jvd3MubWFwKHJvdyA9PiAoe1xuICAgICAgICBpZDogcm93W29wdGlvbnNIZWFkZXJNYXBbJ2lkJ11dIHx8ICcnLFxuICAgICAgICBtZW51SXRlbUlkOiByb3dbb3B0aW9uc0hlYWRlck1hcFsnbWVudUl0ZW1JZCddXSB8fCAnJyxcbiAgICAgICAgZ3JvdXBOYW1lOiByb3dbb3B0aW9uc0hlYWRlck1hcFsnZ3JvdXBOYW1lJ11dIHx8ICcnLFxuICAgICAgICBjaG9pY2VOYW1lOiByb3dbb3B0aW9uc0hlYWRlck1hcFsnY2hvaWNlTmFtZSddXSB8fCAnJyxcbiAgICAgICAgcHJpY2VEZWx0YTogcGFyc2VJbnQocm93W29wdGlvbnNIZWFkZXJNYXBbJ3ByaWNlRGVsdGEnXV0gfHwgJzAnLCAxMCksXG4gICAgICAgIGlzRGVmYXVsdDogcm93W29wdGlvbnNIZWFkZXJNYXBbJ2lzRGVmYXVsdCddXSA9PT0gJ1RSVUUnIHx8IHJvd1tvcHRpb25zSGVhZGVyTWFwWydpc0RlZmF1bHQnXV0gPT09IHRydWUsXG4gICAgICB9KSk7XG5cbiAgICAgIC8vIEdyb3VwIG9wdGlvbnMgYnkgbWVudSBpdGVtIElEXG4gICAgICBjb25zdCBvcHRpb25zQnlNZW51SXRlbSA9IGFsbE9wdGlvbnMucmVkdWNlKChhY2MsIG9wdGlvbikgPT4ge1xuICAgICAgICBpZiAoIWFjY1tvcHRpb24ubWVudUl0ZW1JZF0pIHtcbiAgICAgICAgICBhY2Nbb3B0aW9uLm1lbnVJdGVtSWRdID0gW107XG4gICAgICAgIH1cbiAgICAgICAgYWNjW29wdGlvbi5tZW51SXRlbUlkXS5wdXNoKG9wdGlvbik7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgICB9LCB7fSBhcyBSZWNvcmQ8c3RyaW5nLCB0eXBlb2YgYWxsT3B0aW9ucz4pO1xuXG5cbiAgICAgIC8vIEF0dGFjaCBvcHRpb25zIHRvIG1lbnUgaXRlbXNcbiAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBhbGxJdGVtcykge1xuICAgICAgICBpZiAob3B0aW9uc0J5TWVudUl0ZW1baXRlbS5pZF0pIHtcbiAgICAgICAgICBjb25zdCBpdGVtT3B0aW9ucyA9IG9wdGlvbnNCeU1lbnVJdGVtW2l0ZW0uaWRdO1xuICAgICAgICAgIGNvbnN0IGdyb3VwcyA9IGl0ZW1PcHRpb25zLnJlZHVjZSgoYWNjLCBvcHRpb24pID0+IHtcbiAgICAgICAgICAgIGlmICghYWNjW29wdGlvbi5ncm91cE5hbWVdKSB7XG4gICAgICAgICAgICAgIGFjY1tvcHRpb24uZ3JvdXBOYW1lXSA9IHsgbmFtZTogb3B0aW9uLmdyb3VwTmFtZSwgY2hvaWNlczogW10gfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFjY1tvcHRpb24uZ3JvdXBOYW1lXS5jaG9pY2VzLnB1c2goe1xuICAgICAgICAgICAgICBpZDogb3B0aW9uLmlkLFxuICAgICAgICAgICAgICBuYW1lOiBvcHRpb24uY2hvaWNlTmFtZSxcbiAgICAgICAgICAgICAgcHJpY2VEZWx0YTogb3B0aW9uLnByaWNlRGVsdGEsXG4gICAgICAgICAgICAgIGlzRGVmYXVsdDogb3B0aW9uLmlzRGVmYXVsdCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgICB9LCB7fSBhcyBSZWNvcmQ8c3RyaW5nLCBNZW51T3B0aW9uR3JvdXA+KTtcbiAgICAgICAgICBpdGVtLm9wdGlvbnMgPSBPYmplY3QudmFsdWVzKGdyb3Vwcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIGFsbEl0ZW1zO1xuXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIuiugOWPluiPnOWWruWkseaVlzpcIiwgZXJyb3IpO1xuICAgIHJldHVybiBbXTsgLy8gRW5zdXJlIGFuIGVtcHR5IGFycmF5IGlzIHJldHVybmVkIG9uIGFueSBlcnJvclxuICB9XG59XG5cbi8qKlxuICogQWRkcyBhIG5ldyBtZW51IGl0ZW0gYWxvbmcgd2l0aCBpdHMgb3B0aW9ucyB0byB0aGUgcmVzcGVjdGl2ZSBzaGVldHMuXG4gKiBAcGFyYW0ge0FkZE1lbnVJdGVtUmVxdWVzdH0gaXRlbSAtIFRoZSBtZW51IGl0ZW0gZGF0YSB0byBhZGQuXG4gKiBAcmV0dXJucyB7UHJvbWlzZTx7c3VjY2VzczogYm9vbGVhbiwgbWVudUl0ZW1JZDogc3RyaW5nfT59IEEgc3VjY2VzcyBmbGFnIGFuZCB0aGUgbmV3IG1lbnUgaXRlbSdzIElELlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkTWVudUl0ZW0oaXRlbTogQWRkTWVudUl0ZW1SZXF1ZXN0KTogUHJvbWlzZTx7IHN1Y2Nlc3M6IGJvb2xlYW47IG1lbnVJdGVtSWQ6IHN0cmluZyB9PiB7XG4gIGNvbnN0IHZhbGlkYXRpb24gPSBBZGRNZW51SXRlbVJlcXVlc3RTY2hlbWEuc2FmZVBhcnNlKGl0ZW0pO1xuICBpZiAoIXZhbGlkYXRpb24uc3VjY2Vzcykge1xuICAgICAgY29uc3QgZXJyb3JNc2cgPSB2YWxpZGF0aW9uLmVycm9yLmVycm9ycy5tYXAoZSA9PiBgJHtlLnBhdGguam9pbignLicpfTogJHtlLm1lc3NhZ2V9YCkuam9pbignLCAnKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcihg6Ly45YWl6LOH5paZ5pyJ6KqkOiAke2Vycm9yTXNnfWApO1xuICB9XG4gIFxuICAvLyBDaGVjayBmb3IgZHVwbGljYXRlIG1lbnUgaXRlbSBuYW1lIGZvciB0aGUgc2FtZSB2ZW5kb3JcbiAgY29uc3QgZXhpc3RpbmdNZW51cyA9IGF3YWl0IGdldE1lbnVzQnlWZW5kb3JJZChpdGVtLnZlbmRvcklkKTtcbiAgaWYgKGV4aXN0aW5nTWVudXMuc29tZShtZW51ID0+IG1lbnUubmFtZS50cmltKCkudG9Mb3dlckNhc2UoKSA9PT0gaXRlbS5uYW1lLnRyaW0oKS50b0xvd2VyQ2FzZSgpKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIuipsuW6l+WutuW3suacieebuOWQjOWQjeeoseeahOWTgemgheOAglwiKTtcbiAgfVxuXG4gIC8vIDEuIEFkZCB0aGUgbWVudSBpdGVtIGZpcnN0IHRvIGdldCBhbiBJRFxuICBjb25zdCBhbGxNZW51c1JhbmdlID0gYCR7TUVOVV9TSEVFVF9OQU1FfSFBMjpBYDtcbiAgY29uc3QgYWxsTWVudUlkc0RhdGEgPSBhd2FpdCBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGFsbE1lbnVzUmFuZ2UpO1xuICBjb25zdCBsYXN0SWROdW0gPSBhbGxNZW51SWRzRGF0YS5sZW5ndGggPiAwIFxuICAgICAgPyBNYXRoLm1heCgwLCAuLi5hbGxNZW51SWRzRGF0YS5tYXAocm93ID0+IHBhcnNlSW50KChyb3dbMF0gfHwgJ20wJykucmVwbGFjZSgnbScsICcnKSwgMTApKS5maWx0ZXIobnVtID0+ICFpc05hTihudW0pKSlcbiAgICAgIDogMDtcbiAgY29uc3QgbmV3TWVudUlkID0gYG0keyhsYXN0SWROdW0gKyAxKS50b1N0cmluZygpLnBhZFN0YXJ0KDMsICcwJyl9YDtcbiAgXG4gIGNvbnN0IG1lbnVWYWx1ZXMgPSBbXG4gICAgW25ld01lbnVJZCwgaXRlbS52ZW5kb3JJZCwgaXRlbS5uYW1lLCBpdGVtLnByaWNlLCAnVFJVRScsIGl0ZW0uZGVzY3JpcHRpb24gfHwgJyddLFxuICBdO1xuICBhd2FpdCBhcHBlbmRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGAke01FTlVfU0hFRVRfTkFNRX0hQTpGYCwgbWVudVZhbHVlcyk7XG5cbiAgLy8gMi4gQWRkIG9wdGlvbnMgaWYgYW55XG4gIGlmIChpdGVtLm9wdGlvbkdyb3VwcyAmJiBpdGVtLm9wdGlvbkdyb3Vwcy5sZW5ndGggPiAwKSB7XG4gICAgY29uc3QgYWxsT3B0aW9uc1JhbmdlID0gYCR7TUVOVV9PUFRJT05TX1NIRUVUX05BTUV9IUEyOkFgO1xuICAgIGNvbnN0IGFsbE9wdGlvbklkc0RhdGEgPSBhd2FpdCBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGFsbE9wdGlvbnNSYW5nZSk7XG4gICAgbGV0IGxhc3RPcHRpb25JZE51bSA9IGFsbE9wdGlvbklkc0RhdGEubGVuZ3RoID4gMCBcbiAgICAgICAgPyBNYXRoLm1heCgwLCAuLi5hbGxPcHRpb25JZHNEYXRhLm1hcChyb3cgPT4gcGFyc2VJbnQoKHJvd1swXSB8fCAnbzAnKS5yZXBsYWNlKCdvJywgJycpLCAxMCkpLmZpbHRlcihudW0gPT4gIWlzTmFOKG51bSkpKVxuICAgICAgICA6IDA7XG5cbiAgICBjb25zdCBvcHRpb25zVmFsdWVzID0gW107XG4gICAgZm9yIChjb25zdCBncm91cCBvZiBpdGVtLm9wdGlvbkdyb3Vwcykge1xuICAgICAgY29uc3QgY2hvaWNlcyA9IGdyb3VwLmNob2ljZXMuc3BsaXQoJywnKS5tYXAoYyA9PiBjLnRyaW0oKSk7XG4gICAgICBjb25zdCBwcmljZURlbHRhcyA9IChncm91cC5wcmljZURlbHRhcyB8fCAnJykuc3BsaXQoJywnKS5tYXAocCA9PiBwYXJzZUludChwLnRyaW0oKSwgMTApKTtcbiAgICAgIGNvbnN0IGRlZmF1bHRDaG9pY2UgPSBjaG9pY2VzWzBdOyAvLyBUaGUgZmlyc3QgY2hvaWNlIGlzIHRoZSBkZWZhdWx0XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hvaWNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBjaG9pY2VOYW1lID0gY2hvaWNlc1tpXTtcbiAgICAgICAgaWYgKCFjaG9pY2VOYW1lKSBjb250aW51ZTtcbiAgICAgICAgXG4gICAgICAgIGxhc3RPcHRpb25JZE51bSsrO1xuICAgICAgICBjb25zdCBuZXdPcHRpb25JZCA9IGBvJHtsYXN0T3B0aW9uSWROdW0udG9TdHJpbmcoKS5wYWRTdGFydCgzLCAnMCcpfWA7XG4gICAgICAgIGNvbnN0IHByaWNlRGVsdGEgPSAhaXNOYU4ocHJpY2VEZWx0YXNbaV0pID8gcHJpY2VEZWx0YXNbaV0gOiAwO1xuICAgICAgICBjb25zdCBpc0RlZmF1bHQgPSBjaG9pY2VOYW1lID09PSBkZWZhdWx0Q2hvaWNlO1xuXG4gICAgICAgIG9wdGlvbnNWYWx1ZXMucHVzaChbXG4gICAgICAgICAgbmV3T3B0aW9uSWQsXG4gICAgICAgICAgbmV3TWVudUlkLFxuICAgICAgICAgIGdyb3VwLmdyb3VwTmFtZSxcbiAgICAgICAgICBjaG9pY2VOYW1lLFxuICAgICAgICAgIHByaWNlRGVsdGEsXG4gICAgICAgICAgaXNEZWZhdWx0ID8gJ1RSVUUnIDogJ0ZBTFNFJ1xuICAgICAgICBdKTtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgaWYgKG9wdGlvbnNWYWx1ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBhd2FpdCBhcHBlbmRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGAke01FTlVfT1BUSU9OU19TSEVFVF9OQU1FfSFBOkZgLCBvcHRpb25zVmFsdWVzKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZW51SXRlbUlkOiBuZXdNZW51SWQgfTtcbn1cblxuZXhwb3J0IHR5cGUgVXBkYXRlTWVudUl0ZW1SZXF1ZXN0ID0ge1xuICAgIGlkOiBzdHJpbmc7IC8vIEV4aXN0aW5nIG1lbnUgaXRlbSBJRFxuICAgIHZlbmRvcklkOiBzdHJpbmc7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICAgIHByaWNlOiBudW1iZXI7XG4gICAgb3B0aW9uR3JvdXBzPzogQWRkTWVudUl0ZW1SZXF1ZXN0WydvcHRpb25Hcm91cHMnXTtcbn1cblxuLyoqXG4gKiBVcGRhdGVzIGFuIGV4aXN0aW5nIG1lbnUgaXRlbSBhbmQgaXRzIG9wdGlvbnMuXG4gKiBAcGFyYW0ge1VwZGF0ZU1lbnVJdGVtUmVxdWVzdH0gaXRlbSAtIFRoZSBtZW51IGl0ZW0gZGF0YSB0byB1cGRhdGUuXG4gKiBAcmV0dXJucyB7UHJvbWlzZTx7c3VjY2VzczogYm9vbGVhbn0+fSBBIHN1Y2Nlc3MgZmxhZy5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZU1lbnVJdGVtKGl0ZW06IFVwZGF0ZU1lbnVJdGVtUmVxdWVzdCk6IFByb21pc2U8eyBzdWNjZXNzOiBib29sZWFuIH0+IHtcbiAgICAvLyBDaGVjayBmb3IgZHVwbGljYXRlIG1lbnUgaXRlbSBuYW1lXG4gICAgY29uc3QgZXhpc3RpbmdNZW51cyA9IGF3YWl0IGdldE1lbnVzQnlWZW5kb3JJZChpdGVtLnZlbmRvcklkKTtcbiAgICBpZiAoZXhpc3RpbmdNZW51cy5zb21lKG1lbnUgPT4gbWVudS5pZCAhPT0gaXRlbS5pZCAmJiBtZW51Lm5hbWUudHJpbSgpLnRvTG93ZXJDYXNlKCkgPT09IGl0ZW0ubmFtZS50cmltKCkudG9Mb3dlckNhc2UoKSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwi6Kmy5bqX5a625bey5pyJ55u45ZCM5ZCN56ix55qE5ZOB6aCF44CCXCIpO1xuICAgIH1cblxuICAgIC8vIDEuIEZpbmQgYW5kIHVwZGF0ZSB0aGUgbWVudSBpdGVtJ3MgYmFzaWMgaW5mbyAobmFtZSwgcHJpY2UpXG4gICAgY29uc3QgbWVudVJhbmdlID0gYCR7TUVOVV9TSEVFVF9OQU1FfSFBMjpGYDtcbiAgICBjb25zdCBtZW51RGF0YSA9IGF3YWl0IGdldFNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgbWVudVJhbmdlKTtcbiAgICBjb25zdCByb3dJbmRleCA9IG1lbnVEYXRhLmZpbmRJbmRleChyb3cgPT4gcm93WzBdID09PSBpdGVtLmlkKTtcblxuICAgIGlmIChyb3dJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGDmib7kuI3liLAgSUQg54K6ICR7aXRlbS5pZH0g55qE6I+c5Zau5ZOB6aCF44CCYCk7XG4gICAgfVxuICAgIGNvbnN0IHJvd1RvVXBkYXRlID0gcm93SW5kZXggKyAyOyAvLyArMiBmb3IgMS1iYXNlZCBpbmRleCBhbmQgaGVhZGVyXG4gICAgY29uc3QgdXBkYXRlTWVudVJhbmdlID0gYCR7TUVOVV9TSEVFVF9OQU1FfSFDJHtyb3dUb1VwZGF0ZX06RiR7cm93VG9VcGRhdGV9YDtcbiAgICBhd2FpdCB1cGRhdGVTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIHVwZGF0ZU1lbnVSYW5nZSwgW1tpdGVtLm5hbWUsIGl0ZW0ucHJpY2UsICdUUlVFJywgaXRlbS5kZXNjcmlwdGlvbiB8fCAnJ11dKTtcblxuICAgIC8vIDIuIFJlYWQgYWxsIGV4aXN0aW5nIG9wdGlvbnNcbiAgICBjb25zdCBtZW51T3B0aW9uc0RhdGFXaXRoSGVhZGVyID0gYXdhaXQgZ2V0U2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCBgJHtNRU5VX09QVElPTlNfU0hFRVRfTkFNRX0hQTpGYCk7XG4gICAgY29uc3Qgb3B0aW9uc0hlYWRlcnMgPSBtZW51T3B0aW9uc0RhdGFXaXRoSGVhZGVyLmxlbmd0aCA+IDAgPyBtZW51T3B0aW9uc0RhdGFXaXRoSGVhZGVyWzBdIDogW107XG4gICAgY29uc3Qgb3B0aW9uc1Jvd3MgPSBtZW51T3B0aW9uc0RhdGFXaXRoSGVhZGVyLmxlbmd0aCA+IDEgPyBtZW51T3B0aW9uc0RhdGFXaXRoSGVhZGVyLnNsaWNlKDEpIDogW107XG5cbiAgICAvLyAzLiBGaWx0ZXIgb3V0IGFsbCBvbGQgb3B0aW9ucyBmb3IgdGhlIGN1cnJlbnQgbWVudSBpdGVtXG4gICAgY29uc3Qgb3RoZXJJdGVtc09wdGlvbnMgPSBvcHRpb25zUm93cy5maWx0ZXIocm93ID0+IHJvd1sxXSAhPT0gaXRlbS5pZCk7XG4gICAgXG4gICAgLy8gNC4gQ3JlYXRlIG5ldyBvcHRpb24gcm93cyBmcm9tIHRoZSByZXF1ZXN0XG4gICAgbGV0IGxhc3RPcHRpb25JZE51bSA9IG9wdGlvbnNSb3dzLmxlbmd0aCA+IDBcbiAgICAgICAgPyBNYXRoLm1heCgwLCAuLi5vcHRpb25zUm93cy5tYXAocm93ID0+IHBhcnNlSW50KChyb3dbMF0gfHwgJ28wJykucmVwbGFjZSgnbycsICcnKSwgMTApKS5maWx0ZXIobnVtID0+ICFpc05hTihudW0pKSlcbiAgICAgICAgOiAwO1xuXG4gICAgY29uc3QgbmV3T3B0aW9uc1ZhbHVlcyA9IFtdO1xuICAgIGlmIChpdGVtLm9wdGlvbkdyb3Vwcykge1xuICAgICAgICBmb3IgKGNvbnN0IGdyb3VwIG9mIGl0ZW0ub3B0aW9uR3JvdXBzKSB7XG4gICAgICAgICAgICBjb25zdCBjaG9pY2VzID0gZ3JvdXAuY2hvaWNlcy5zcGxpdCgnLCcpLm1hcChjID0+IGMudHJpbSgpKTtcbiAgICAgICAgICAgIGNvbnN0IHByaWNlRGVsdGFzID0gKGdyb3VwLnByaWNlRGVsdGFzIHx8ICcnKS5zcGxpdCgnLCcpLm1hcChwID0+IHBhcnNlSW50KHAudHJpbSgpLCAxMCkpO1xuICAgICAgICAgICAgY29uc3QgZGVmYXVsdENob2ljZSA9IGNob2ljZXNbMF07IC8vIFRoZSBmaXJzdCBjaG9pY2UgaXMgdGhlIGRlZmF1bHRcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaG9pY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hvaWNlTmFtZSA9IGNob2ljZXNbaV07XG4gICAgICAgICAgICAgICAgaWYgKCFjaG9pY2VOYW1lKSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBsYXN0T3B0aW9uSWROdW0rKztcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdPcHRpb25JZCA9IGBvJHtsYXN0T3B0aW9uSWROdW0udG9TdHJpbmcoKS5wYWRTdGFydCgzLCAnMCcpfWA7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJpY2VEZWx0YSA9ICFpc05hTihwcmljZURlbHRhc1tpXSkgPyBwcmljZURlbHRhc1tpXSA6IDA7XG4gICAgICAgICAgICAgICAgY29uc3QgaXNEZWZhdWx0ID0gY2hvaWNlTmFtZSA9PT0gZGVmYXVsdENob2ljZTtcblxuICAgICAgICAgICAgICAgIG5ld09wdGlvbnNWYWx1ZXMucHVzaChbXG4gICAgICAgICAgICAgICAgICAgIG5ld09wdGlvbklkLFxuICAgICAgICAgICAgICAgICAgICBpdGVtLmlkLCAvLyBVc2UgZXhpc3RpbmcgbWVudSBpdGVtIElEXG4gICAgICAgICAgICAgICAgICAgIGdyb3VwLmdyb3VwTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgY2hvaWNlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgcHJpY2VEZWx0YSxcbiAgICAgICAgICAgICAgICAgICAgaXNEZWZhdWx0ID8gJ1RSVUUnIDogJ0ZBTFNFJ1xuICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gNS4gQ29tYmluZSBvbGQgb3B0aW9ucyAoZnJvbSBvdGhlciBpdGVtcykgYW5kIG5ldyBvcHRpb25zIGZvciB0aGlzIGl0ZW1cbiAgICBjb25zdCBmaW5hbE9wdGlvbnMgPSBbLi4ub3RoZXJJdGVtc09wdGlvbnMsIC4uLm5ld09wdGlvbnNWYWx1ZXNdO1xuICAgIFxuICAgIGNvbnN0IGZpbmFsVmFsdWVzID0gZmluYWxPcHRpb25zLmxlbmd0aCA+IDAgPyBbb3B0aW9uc0hlYWRlcnMsIC4uLmZpbmFsT3B0aW9uc10gOiBbb3B0aW9uc0hlYWRlcnNdO1xuXG5cbiAgICAvLyA2LiBCYXRjaCB1cGRhdGUgdGhlIG9wdGlvbnMgc2hlZXRcbiAgICBhd2FpdCBiYXRjaFVwZGF0ZVNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgW1xuICAgICAgICB7XG4gICAgICAgICAgICByYW5nZTogYCR7TUVOVV9PUFRJT05TX1NIRUVUX05BTUV9IUExOkZgLFxuICAgICAgICAgICAgdmFsdWVzOiBmaW5hbFZhbHVlcyxcbiAgICAgICAgfVxuICAgIF0pO1xuXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xufVxuXG5cbmV4cG9ydCB0eXBlIERlbGV0ZU1lbnVJdGVtUmVxdWVzdCA9IHtcbiAgICBpZDogc3RyaW5nO1xufTtcblxuLyoqXG4gKiBEZWxldGVzIGEgbWVudSBpdGVtIGZyb20gdGhlICdtZW51cycgc2hlZXQgYnkgaXRzIElELlxuICogVGhpcyBpcyBhIFwiaGFyZCBkZWxldGVcIiBvcGVyYXRpb24uIEl0IHJlYWRzIGFsbCBkYXRhLCBmaWx0ZXJzIG91dCB0aGVcbiAqIGl0ZW0gdG8gYmUgZGVsZXRlZCBhbmQgaXRzIG9wdGlvbnMsIGNsZWFycyB0aGUgc2hlZXRzLCBhbmQgd3JpdGVzIHRoZVxuICogZmlsdGVyZWQgZGF0YSBiYWNrLlxuICogQHBhcmFtIHtEZWxldGVNZW51SXRlbVJlcXVlc3R9IHJlcSAtIFRoZSByZXF1ZXN0IGNvbnRhaW5pbmcgdGhlIGl0ZW0gSUQgdG8gZGVsZXRlLlxuICogQHJldHVybnMge1Byb21pc2U8e3N1Y2Nlc3M6IGJvb2xlYW59Pn0gQSBzdWNjZXNzIGZsYWcuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVNZW51SXRlbShyZXE6IERlbGV0ZU1lbnVJdGVtUmVxdWVzdCk6IFByb21pc2U8eyBzdWNjZXNzOiBib29sZWFuIH0+IHtcbiAgLy8gMS4gR2V0IGFsbCBkYXRhIGZyb20gdGhlIHR3byBzaGVldHMsIGluY2x1ZGluZyBoZWFkZXJzLlxuICBjb25zdCBbbWVudXNEYXRhV2l0aEhlYWRlciwgbWVudU9wdGlvbnNEYXRhV2l0aEhlYWRlcl0gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgZ2V0U2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCBgJHtNRU5VX1NIRUVUX05BTUV9IUE6RmApLFxuICAgIGdldFNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgYCR7TUVOVV9PUFRJT05TX1NIRUVUX05BTUV9IUE6RmApLFxuICBdKTtcblxuICBjb25zdCBtZW51SGVhZGVycyA9IG1lbnVzRGF0YVdpdGhIZWFkZXIubGVuZ3RoID4gMCA/IG1lbnVzRGF0YVdpdGhIZWFkZXJbMF0gOiBbXTtcbiAgY29uc3QgbWVudVJvd3MgPSBtZW51c0RhdGFXaXRoSGVhZGVyLmxlbmd0aCA+IDEgPyBtZW51c0RhdGFXaXRoSGVhZGVyLnNsaWNlKDEpIDogW107XG5cbiAgY29uc3Qgb3B0aW9uc0hlYWRlcnMgPSBtZW51T3B0aW9uc0RhdGFXaXRoSGVhZGVyLmxlbmd0aCA+IDAgPyBtZW51T3B0aW9uc0RhdGFXaXRoSGVhZGVyWzBdIDogW107XG4gIGNvbnN0IG9wdGlvbnNSb3dzID0gbWVudU9wdGlvbnNEYXRhV2l0aEhlYWRlci5sZW5ndGggPiAxID8gbWVudU9wdGlvbnNEYXRhV2l0aEhlYWRlci5zbGljZSgxKSA6IFtdO1xuXG4gIC8vIDIuIEZpbHRlciBkYXRhIHRvIGtlZXAuXG4gIGNvbnN0IG1lbnVzVG9LZWVwID0gbWVudVJvd3MuZmlsdGVyKHJvdyA9PiByb3dbMF0gIT09IHJlcS5pZCk7XG4gIGNvbnN0IG1lbnVPcHRpb25zVG9LZWVwID0gb3B0aW9uc1Jvd3MuZmlsdGVyKHJvdyA9PiByb3dbMV0gIT09IHJlcS5pZCk7XG5cbiAgLy8gMy4gUHJlcGFyZSBiYXRjaCB1cGRhdGUgZGF0YSAoY2xlYXIgYW5kIHdyaXRlKS5cbiAgLy8gV2Ugd3JpdGUgYmFjayB0aGUgaGVhZGVycyBwbHVzIHRoZSBmaWx0ZXJlZCBkYXRhLlxuICBjb25zdCBiYXRjaERhdGEgPSBbXG4gICAge1xuICAgICAgcmFuZ2U6IGAke01FTlVfU0hFRVRfTkFNRX0hQTE6RmAsXG4gICAgICB2YWx1ZXM6IG1lbnVIZWFkZXJzLmxlbmd0aCA+IDAgPyBbbWVudUhlYWRlcnMsIC4uLm1lbnVzVG9LZWVwXSA6IG1lbnVzVG9LZWVwLFxuICAgIH0sXG4gICAge1xuICAgICAgcmFuZ2U6IGAke01FTlVfT1BUSU9OU19TSEVFVF9OQU1FfSFBMTpGYCxcbiAgICAgIHZhbHVlczogb3B0aW9uc0hlYWRlcnMubGVuZ3RoID4gMCA/IFtvcHRpb25zSGVhZGVycywgLi4ubWVudU9wdGlvbnNUb0tlZXBdIDogbWVudU9wdGlvbnNUb0tlZXAsXG4gICAgfSxcbiAgXTtcblxuICAvLyA0LiBFeGVjdXRlIGJhdGNoIHVwZGF0ZS5cbiAgYXdhaXQgYmF0Y2hVcGRhdGVTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGJhdGNoRGF0YSk7XG4gIFxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG59XG5cbmV4cG9ydCB0eXBlIEJhdGNoRGVsZXRlTWVudUl0ZW1zUmVxdWVzdCA9IHtcbiAgICBpZHM6IHN0cmluZ1tdO1xufTtcblxuLyoqXG4gKiBEZWxldGVzIG11bHRpcGxlIG1lbnUgaXRlbXMgYW5kIHRoZWlyIGFzc29jaWF0ZWQgb3B0aW9ucyBpbiBhIHNpbmdsZSBiYXRjaCBvcGVyYXRpb24uXG4gKiBAcGFyYW0ge0JhdGNoRGVsZXRlTWVudUl0ZW1zUmVxdWVzdH0gcmVxIC0gVGhlIHJlcXVlc3QgY29udGFpbmluZyB0aGUgYXJyYXkgb2YgaXRlbSBJRHMgdG8gZGVsZXRlLlxuICogQHJldHVybnMge1Byb21pc2U8e3N1Y2Nlc3M6IGJvb2xlYW59Pn0gQSBzdWNjZXNzIGZsYWcuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBiYXRjaERlbGV0ZU1lbnVJdGVtcyhyZXE6IEJhdGNoRGVsZXRlTWVudUl0ZW1zUmVxdWVzdCk6IFByb21pc2U8eyBzdWNjZXNzOiBib29sZWFuIH0+IHtcbiAgaWYgKCFyZXEuaWRzIHx8IHJlcS5pZHMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9OyAvLyBOb3RoaW5nIHRvIGRlbGV0ZVxuICB9XG5cbiAgLy8gMS4gR2V0IGFsbCBkYXRhIGZyb20gdGhlIHR3byBzaGVldHMsIGluY2x1ZGluZyBoZWFkZXJzLlxuICBjb25zdCBbbWVudXNEYXRhV2l0aEhlYWRlciwgbWVudU9wdGlvbnNEYXRhV2l0aEhlYWRlcl0gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgZ2V0U2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCBgJHtNRU5VX1NIRUVUX05BTUV9IUE6RmApLFxuICAgIGdldFNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgYCR7TUVOVV9PUFRJT05TX1NIRUVUX05BTUV9IUE6RmApLFxuICBdKTtcblxuICBjb25zdCBtZW51SGVhZGVycyA9IG1lbnVzRGF0YVdpdGhIZWFkZXIubGVuZ3RoID4gMCA/IG1lbnVzRGF0YVdpdGhIZWFkZXJbMF0gOiBbXTtcbiAgY29uc3QgbWVudVJvd3MgPSBtZW51c0RhdGFXaXRoSGVhZGVyLmxlbmd0aCA+IDEgPyBtZW51c0RhdGFXaXRoSGVhZGVyLnNsaWNlKDEpIDogW107XG5cbiAgY29uc3Qgb3B0aW9uc0hlYWRlcnMgPSBtZW51T3B0aW9uc0RhdGFXaXRoSGVhZGVyLmxlbmd0aCA+IDAgPyBtZW51T3B0aW9uc0RhdGFXaXRoSGVhZGVyWzBdIDogW107XG4gIGNvbnN0IG9wdGlvbnNSb3dzID0gbWVudU9wdGlvbnNEYXRhV2l0aEhlYWRlci5sZW5ndGggPiAxID8gbWVudU9wdGlvbnNEYXRhV2l0aEhlYWRlci5zbGljZSgxKSA6IFtdO1xuXG4gIC8vIDIuIEZpbHRlciBkYXRhIHRvIGtlZXAuXG4gIGNvbnN0IGlkc1RvRGVsZXRlU2V0ID0gbmV3IFNldChyZXEuaWRzKTtcbiAgY29uc3QgbWVudXNUb0tlZXAgPSBtZW51Um93cy5maWx0ZXIocm93ID0+ICFpZHNUb0RlbGV0ZVNldC5oYXMocm93WzBdKSk7XG4gIGNvbnN0IG1lbnVPcHRpb25zVG9LZWVwID0gb3B0aW9uc1Jvd3MuZmlsdGVyKHJvdyA9PiAhaWRzVG9EZWxldGVTZXQuaGFzKHJvd1sxXSkpO1xuXG4gIC8vIDMuIFByZXBhcmUgYmF0Y2ggdXBkYXRlIGRhdGEgKGNsZWFyIGFuZCB3cml0ZSkuXG4gIC8vIFdlIHdyaXRlIGJhY2sgdGhlIGhlYWRlcnMgcGx1cyB0aGUgZmlsdGVyZWQgZGF0YS5cbiAgY29uc3QgYmF0Y2hEYXRhID0gW1xuICAgIHtcbiAgICAgIHJhbmdlOiBgJHtNRU5VX1NIRUVUX05BTUV9IUExOkZgLFxuICAgICAgdmFsdWVzOiBtZW51SGVhZGVycy5sZW5ndGggPiAwID8gW21lbnVIZWFkZXJzLCAuLi5tZW51c1RvS2VlcF0gOiBbXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHJhbmdlOiBgJHtNRU5VX09QVElPTlNfU0hFRVRfTkFNRX0hQTE6RmAsXG4gICAgICB2YWx1ZXM6IG9wdGlvbnNIZWFkZXJzLmxlbmd0aCA+IDAgPyBbb3B0aW9uc0hlYWRlcnMsIC4uLm1lbnVPcHRpb25zVG9LZWVwXSA6IFtdLFxuICAgIH0sXG4gIF07XG5cbiAgLy8gNC4gRXhlY3V0ZSBiYXRjaCB1cGRhdGUuXG4gIGF3YWl0IGJhdGNoVXBkYXRlU2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCBiYXRjaERhdGEpO1xuICBcbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xufVxuXG4vKipcbiAqIER1cGxpY2F0ZXMgYSBtZW51IGl0ZW0gYW5kIGFsbCBpdHMgYXNzb2NpYXRlZCBvcHRpb25zLlxuICogQHBhcmFtIHtzdHJpbmd9IG1lbnVJdGVtSWQgLSBUaGUgSUQgb2YgdGhlIG1lbnUgaXRlbSB0byBkdXBsaWNhdGUuXG4gKiBAcmV0dXJucyB7UHJvbWlzZTx7c3VjY2VzczogYm9vbGVhbn0+fSBBIHN1Y2Nlc3MgZmxhZy5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGR1cGxpY2F0ZU1lbnVJdGVtKG1lbnVJdGVtSWQ6IHN0cmluZyk6IFByb21pc2U8eyBzdWNjZXNzOiBib29sZWFuIH0+IHtcbiAgLy8gMS4gRmV0Y2ggYWxsIGV4aXN0aW5nIGRhdGFcbiAgY29uc3QgW1xuICAgIG1lbnVzRGF0YVdpdGhIZWFkZXIsXG4gICAgbWVudU9wdGlvbnNEYXRhV2l0aEhlYWRlcixcbiAgXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGAke01FTlVfU0hFRVRfTkFNRX0hQTpGYCksXG4gICAgZ2V0U2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCBgJHtNRU5VX09QVElPTlNfU0hFRVRfTkFNRX0hQTpGYCksXG4gIF0pO1xuXG4gIGNvbnN0IG1lbnVSb3dzID0gbWVudXNEYXRhV2l0aEhlYWRlci5sZW5ndGggPiAxID8gbWVudXNEYXRhV2l0aEhlYWRlci5zbGljZSgxKSA6IFtdO1xuICBjb25zdCBvcHRpb25zUm93cyA9IG1lbnVPcHRpb25zRGF0YVdpdGhIZWFkZXIubGVuZ3RoID4gMSA/IG1lbnVPcHRpb25zRGF0YVdpdGhIZWFkZXIuc2xpY2UoMSkgOiBbXTtcblxuICAvLyAyLiBGaW5kIHRoZSBvcmlnaW5hbCBpdGVtIGFuZCBvcHRpb25zXG4gIGNvbnN0IG9yaWdpbmFsTWVudVJvdyA9IG1lbnVSb3dzLmZpbmQocm93ID0+IHJvd1swXSA9PT0gbWVudUl0ZW1JZCk7XG4gIGlmICghb3JpZ2luYWxNZW51Um93KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGDmib7kuI3liLAgSUQg54K6ICR7bWVudUl0ZW1JZH0g55qE6I+c5Zau5ZOB6aCF44CCYCk7XG4gIH1cblxuICBjb25zdCBvcmlnaW5hbE9wdGlvbnMgPSBvcHRpb25zUm93cy5maWx0ZXIocm93ID0+IHJvd1sxXSA9PT0gbWVudUl0ZW1JZCk7XG5cbiAgLy8gMy4gR2VuZXJhdGUgbmV3IG1lbnUgaXRlbSBpbmZvXG4gIGxldCBuZXdNZW51TmFtZSA9IGAke29yaWdpbmFsTWVudVJvd1syXX0gLSDlia/mnKxgO1xuICBsZXQgc3VmZml4ID0gMjtcbiAgd2hpbGUgKG1lbnVSb3dzLnNvbWUocm93ID0+IHJvd1syXSA9PT0gbmV3TWVudU5hbWUgJiYgcm93WzFdID09PSBvcmlnaW5hbE1lbnVSb3dbMV0pKSB7XG4gICAgbmV3TWVudU5hbWUgPSBgJHtvcmlnaW5hbE1lbnVSb3dbMl19IC0g5Ymv5pysICR7c3VmZml4fWA7XG4gICAgc3VmZml4Kys7XG4gIH1cbiAgXG4gIGxldCBsYXN0TWVudUlkTnVtID0gbWVudVJvd3MubGVuZ3RoID4gMCA/IE1hdGgubWF4KDAsIC4uLm1lbnVSb3dzLm1hcChyb3cgPT4gcGFyc2VJbnQoKHJvd1swXSB8fCAnbTAnKS5yZXBsYWNlKCdtJywgJycpLCAxMCkpLmZpbHRlcihudW0gPT4gIWlzTmFOKG51bSkpKSA6IDA7XG4gIGNvbnN0IG5ld01lbnVJZCA9IGBtJHsobGFzdE1lbnVJZE51bSArIDEpLnRvU3RyaW5nKCkucGFkU3RhcnQoMywgJzAnKX1gO1xuICBcbiAgY29uc3QgbmV3TWVudURhdGEgPSBbW1xuICAgICAgbmV3TWVudUlkLFxuICAgICAgb3JpZ2luYWxNZW51Um93WzFdLCAvLyB2ZW5kb3JJZFxuICAgICAgbmV3TWVudU5hbWUsXG4gICAgICBvcmlnaW5hbE1lbnVSb3dbM10sIC8vIHByaWNlXG4gICAgICBvcmlnaW5hbE1lbnVSb3dbNF0sIC8vIGlzQWN0aXZlXG4gICAgICBvcmlnaW5hbE1lbnVSb3dbNV0sIC8vIGRlc2NyaXB0aW9uXG4gIF1dO1xuXG4gIC8vIDQuIEdlbmVyYXRlIG5ldyBvcHRpb25zXG4gIGxldCBsYXN0T3B0aW9uSWROdW0gPSBvcHRpb25zUm93cy5sZW5ndGggPiAwID8gTWF0aC5tYXgoMCwgLi4ub3B0aW9uc1Jvd3MubWFwKHJvdyA9PiBwYXJzZUludCgocm93WzBdIHx8ICdvMCcpLnJlcGxhY2UoJ28nLCAnJyksIDEwKSkuZmlsdGVyKG51bSA9PiAhaXNOYU4obnVtKSkpIDogMDtcbiAgXG4gIGNvbnN0IG5ld09wdGlvbnNEYXRhID0gW107XG4gIGZvciAoY29uc3Qgb3B0aW9uUm93IG9mIG9yaWdpbmFsT3B0aW9ucykge1xuICAgIGxhc3RPcHRpb25JZE51bSsrO1xuICAgIGNvbnN0IG5ld09wdGlvbklkID0gYG8ke2xhc3RPcHRpb25JZE51bS50b1N0cmluZygpLnBhZFN0YXJ0KDMsICcwJyl9YDtcbiAgICBuZXdPcHRpb25zRGF0YS5wdXNoKFtcbiAgICAgIG5ld09wdGlvbklkLFxuICAgICAgbmV3TWVudUlkLCAvLyBMaW5rIHRvIHRoZSBuZXcgbWVudSBpdGVtXG4gICAgICBvcHRpb25Sb3dbMl0sIC8vIGdyb3VwTmFtZVxuICAgICAgb3B0aW9uUm93WzNdLCAvLyBjaG9pY2VOYW1lXG4gICAgICBvcHRpb25Sb3dbNF0sIC8vIHByaWNlRGVsdGFcbiAgICAgIG9wdGlvblJvd1s1XSwgLy8gaXNEZWZhdWx0XG4gICAgXSk7XG4gIH1cblxuICAvLyA1LiBBcHBlbmQgYWxsIG5ldyBkYXRhIHRvIHNoZWV0c1xuICBhd2FpdCBhcHBlbmRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGAke01FTlVfU0hFRVRfTkFNRX0hQTpGYCwgbmV3TWVudURhdGEpO1xuICBpZiAobmV3T3B0aW9uc0RhdGEubGVuZ3RoID4gMCkge1xuICAgIGF3YWl0IGFwcGVuZFNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgYCR7TUVOVV9PUFRJT05TX1NIRUVUX05BTUV9IUE6RmAsIG5ld09wdGlvbnNEYXRhKTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbn1cblxuXG4vLyAtLS0gTWVudSBPcHRpb24gRmxvd3MgLS0tXG5cbmV4cG9ydCB0eXBlIEFkZE1lbnVPcHRpb25SZXF1ZXN0ID0ge1xuICBtZW51SXRlbUlkOiBzdHJpbmc7XG4gIGdyb3VwTmFtZTogc3RyaW5nO1xuICBjaG9pY2VOYW1lOiBzdHJpbmc7XG4gIHByaWNlRGVsdGE6IG51bWJlcjtcbiAgaXNEZWZhdWx0OiBib29sZWFuO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkTWVudU9wdGlvbihyZXE6IEFkZE1lbnVPcHRpb25SZXF1ZXN0KTogUHJvbWlzZTx7IHN1Y2Nlc3M6IGJvb2xlYW4gfT4ge1xuICAvLyBJZiB0aGUgbmV3IG9wdGlvbiBpcyBkZWZhdWx0LCB1bnNldCBvdGhlciBkZWZhdWx0cyBpbiB0aGUgc2FtZSBncm91cC5cbiAgaWYgKHJlcS5pc0RlZmF1bHQpIHtcbiAgICBhd2FpdCBzZXRNZW51T3B0aW9uRGVmYXVsdCh7IG1lbnVJdGVtSWQ6IHJlcS5tZW51SXRlbUlkLCBncm91cE5hbWU6IHJlcS5ncm91cE5hbWUsIG9wdGlvbklkOiAnJyB9KTsgLy8gUGFzcyBlbXB0eSBvcHRpb25JZCB0byB1bnNldCBhbGwsIG5ldyBvbmUgd2lsbCBiZSBzZXRcbiAgfVxuXG4gIGNvbnN0IHJhbmdlID0gYCR7TUVOVV9PUFRJT05TX1NIRUVUX05BTUV9IUE6RmA7XG4gIGNvbnN0IGFsbE9wdGlvbnNSYW5nZSA9IGAke01FTlVfT1BUSU9OU19TSEVFVF9OQU1FfSFBMjpBYDtcbiAgXG4gIGNvbnN0IGFsbE9wdGlvbklkc0RhdGEgPSBhd2FpdCBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGFsbE9wdGlvbnNSYW5nZSk7XG4gIGNvbnN0IGxhc3RJZE51bSA9IGFsbE9wdGlvbklkc0RhdGEubGVuZ3RoID4gMCBcbiAgICAgID8gTWF0aC5tYXgoMCwgLi4uYWxsT3B0aW9uSWRzRGF0YS5tYXAocm93ID0+IHBhcnNlSW50KChyb3dbMF0gfHwgJ28wJykucmVwbGFjZSgnbycsICcnKSwgMTApKS5maWx0ZXIobnVtID0+ICFpc05hTihudW0pKSlcbiAgICAgIDogMDtcblxuICBjb25zdCBuZXdJZCA9IGBvJHsobGFzdElkTnVtICsgMSkudG9TdHJpbmcoKS5wYWRTdGFydCgzLCAnMCcpfWA7XG4gIFxuICBjb25zdCB2YWx1ZXMgPSBbW1xuICAgIG5ld0lkLCBcbiAgICByZXEubWVudUl0ZW1JZCwgXG4gICAgcmVxLmdyb3VwTmFtZSwgXG4gICAgcmVxLmNob2ljZU5hbWUsIFxuICAgIHJlcS5wcmljZURlbHRhLCBcbiAgICByZXEuaXNEZWZhdWx0ID8gJ1RSVUUnIDogJ0ZBTFNFJ1xuICBdXTtcblxuICBhd2FpdCBhcHBlbmRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIHJhbmdlLCB2YWx1ZXMpO1xuXG4gIC8vIElmIHRoZSBuZXcgb3B0aW9uIHdhcyBzZXQgdG8gZGVmYXVsdCwgZW5zdXJlIGl0IGlzIG5vdyB0aGUgb25seSBkZWZhdWx0IG9uZVxuICBpZihyZXEuaXNEZWZhdWx0KSB7XG4gICAgICBhd2FpdCBzZXRNZW51T3B0aW9uRGVmYXVsdCh7IG9wdGlvbklkOiBuZXdJZCwgbWVudUl0ZW1JZDogcmVxLm1lbnVJdGVtSWQsIGdyb3VwTmFtZTogcmVxLmdyb3VwTmFtZSB9KTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbn1cblxuXG5leHBvcnQgdHlwZSBEZWxldGVNZW51T3B0aW9uUmVxdWVzdCA9IHtcbiAgb3B0aW9uSWQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZU1lbnVPcHRpb24ocmVxOiBEZWxldGVNZW51T3B0aW9uUmVxdWVzdCk6IFByb21pc2U8eyBzdWNjZXNzOiBib29sZWFuIH0+IHtcbiAgY29uc3QgcmFuZ2UgPSBgJHtNRU5VX09QVElPTlNfU0hFRVRfTkFNRX0hQTI6RmA7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIHJhbmdlKTtcblxuICBpZiAoIWRhdGEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIuaJvuS4jeWIsOiPnOWWrumBuOmgheizh+aWmeOAglwiKTtcbiAgfVxuICBcbiAgY29uc3Qgcm93SW5kZXggPSBkYXRhLmZpbmRJbmRleChyb3cgPT4gcm93WzBdID09PSByZXEub3B0aW9uSWQpO1xuICBcbiAgaWYgKHJvd0luZGV4ID09PSAtMSkge1xuICAgICAgY29uc29sZS5sb2coYOaJvuS4jeWIsCBJRCDngrogJHtyZXEub3B0aW9uSWR9IOeahOiPnOWWrumBuOmgheOAgmApO1xuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UgfTsgLy8gSXRlbSBub3QgZm91bmRcbiAgfVxuXG4gIGNvbnN0IHJvd1RvRGVsZXRlID0gcm93SW5kZXggKyAyOyBcbiAgLy8gVGhpcyBpcyBub3QgYSBncmVhdCB3YXkgdG8gXCJkZWxldGVcIiBhIHJvdy4gQSBiZXR0ZXIgd2F5IGlzIHRvIHJlYWQgYWxsLCBmaWx0ZXIsIGNsZWFyLCBhbmQgd3JpdGUgYmFjay5cbiAgLy8gRm9yIG5vdywgbGV0J3MganVzdCBjbGVhciB0aGUgc3BlY2lmaWMgcm93LlxuICBjb25zdCBjbGVhclJhbmdlID0gYCR7TUVOVV9PUFRJT05TX1NIRUVUX05BTUV9IUEke3Jvd1RvRGVsZXRlfTpGJHtyb3dUb0RlbGV0ZX1gO1xuXG4gIGF3YWl0IGNsZWFyU2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCBjbGVhclJhbmdlKTtcbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xufVxuXG5leHBvcnQgdHlwZSBTZXRNZW51T3B0aW9uRGVmYXVsdFJlcXVlc3QgPSB7XG4gIG9wdGlvbklkOiBzdHJpbmc7IC8vIFRoZSBvcHRpb24gdG8gc2V0IGFzIGRlZmF1bHQuIElmIGVtcHR5LCBhbGwgb3B0aW9ucyBpbiBncm91cCB3aWxsIGJlIHVuc2V0LlxuICBtZW51SXRlbUlkOiBzdHJpbmc7XG4gIGdyb3VwTmFtZTogc3RyaW5nO1xufVxuXG4vKipcbiAqIFNldHMgYSBzcGVjaWZpYyBvcHRpb24gYXMgdGhlIGRlZmF1bHQgZm9yIGl0cyBncm91cCwgdW5zZXR0aW5nIGFueSBwcmV2aW91cyBkZWZhdWx0LlxuICogQHBhcmFtIHJlcSBUaGUgcmVxdWVzdCBjb250YWluaW5nIG9wdGlvbiwgbWVudSBpdGVtLCBhbmQgZ3JvdXAgaWRlbnRpZmllcnMuXG4gKiBAcmV0dXJucyBBIHN1Y2Nlc3MgZmxhZy5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNldE1lbnVPcHRpb25EZWZhdWx0KHJlcTogU2V0TWVudU9wdGlvbkRlZmF1bHRSZXF1ZXN0KTogUHJvbWlzZTx7IHN1Y2Nlc3M6IGJvb2xlYW4gfT4ge1xuICAgIGNvbnN0IHsgb3B0aW9uSWQsIG1lbnVJdGVtSWQsIGdyb3VwTmFtZSB9ID0gcmVxO1xuICAgIGNvbnN0IHJhbmdlID0gYCR7TUVOVV9PUFRJT05TX1NIRUVUX05BTUV9IUEyOkZgO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIHJhbmdlKTtcblxuICAgIGlmICghZGF0YSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCLmib7kuI3liLDoj5zllq7pgbjpoIXos4fmlpnjgIJcIik7XG4gICAgfVxuXG4gICAgY29uc3QgdXBkYXRlcyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCByb3cgPSBkYXRhW2ldO1xuICAgICAgICAvLyBDaGVjayBpZiB0aGUgb3B0aW9uIGJlbG9uZ3MgdG8gdGhlIHNhbWUgbWVudSBpdGVtIGFuZCBncm91cFxuICAgICAgICBpZiAocm93WzFdID09PSBtZW51SXRlbUlkICYmIHJvd1syXSA9PT0gZ3JvdXBOYW1lKSB7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50T3B0aW9uSWQgPSByb3dbMF07XG4gICAgICAgICAgICBjb25zdCBpc0N1cnJlbnRseURlZmF1bHQgPSByb3dbNV0gPT09ICdUUlVFJztcbiAgICAgICAgICAgIGNvbnN0IHNob3VsZEJlRGVmYXVsdCA9IGN1cnJlbnRPcHRpb25JZCA9PT0gb3B0aW9uSWQ7XG5cbiAgICAgICAgICAgIC8vIElmIHRoaXMgcm93IG5lZWRzIHRvIGNoYW5nZSBpdHMgZGVmYXVsdCBzdGF0dXNcbiAgICAgICAgICAgIGlmIChpc0N1cnJlbnRseURlZmF1bHQgIT09IHNob3VsZEJlRGVmYXVsdCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJvd1RvVXBkYXRlID0gaSArIDI7IC8vICsyIGJlY2F1c2Ugc2hlZXQgaXMgMS1pbmRleGVkIGFuZCB3ZSBza2lwcGVkIGhlYWRlclxuICAgICAgICAgICAgICAgIHVwZGF0ZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIHJhbmdlOiBgJHtNRU5VX09QVElPTlNfU0hFRVRfTkFNRX0hRiR7cm93VG9VcGRhdGV9YCxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzOiBbW3Nob3VsZEJlRGVmYXVsdCA/ICdUUlVFJyA6ICdGQUxTRSddXSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmICh1cGRhdGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIC8vIE5vdGU6IFRoaXMgY2FuIGJlIHNsb3cgaWYgdGhlcmUgYXJlIG1hbnkgdXBkYXRlcy4gQmF0Y2hpbmcgd291bGQgYmUgYmV0dGVyLlxuICAgICAgZm9yIChjb25zdCB1cGRhdGUgb2YgdXBkYXRlcykge1xuICAgICAgICAgIGF3YWl0IHVwZGF0ZVNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgdXBkYXRlLnJhbmdlLCB1cGRhdGUudmFsdWVzKTtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJ1U0FtWXNCIn0=
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/schema/menu.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "AddMenuItemRequestSchema": (()=>AddMenuItemRequestSchema),
    "NewOptionGroupSchema": (()=>NewOptionGroupSchema)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod/lib/index.mjs [app-client] (ecmascript)");
;
const NewOptionGroupSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
    groupName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string().min(1, "選項群組名稱不能為空"),
    choices: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string().min(1, "選項不能為空"),
    priceDeltas: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string().optional()
});
const AddMenuItemRequestSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
    vendorId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string(),
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string().min(1, "品項名稱不能為空"),
    description: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string().optional(),
    price: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].number({
        required_error: "價格為必填欄位",
        invalid_type_error: "價格必須是數字"
    }).min(0, "價格不能為負數").int("價格必須是整數"),
    optionGroups: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].array(NewOptionGroupSchema).optional()
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/admin/MenuEditor.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "MenuEditor": (()=>MenuEditor)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hookform/resolvers/zod/dist/zod.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/textarea.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/form.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/alert-dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/separator.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-toast.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/checkbox.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-plus.js [app-client] (ecmascript) <export default as PlusCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/square-pen.js [app-client] (ecmascript) <export default as Edit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$plus$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FilePlus2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-plus-2.js [app-client] (ecmascript) <export default as FilePlus2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$data$3a$087252__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/ai/flows/data:087252 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$data$3a$fafdee__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/ai/flows/data:fafdee [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$data$3a$4a714a__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/ai/flows/data:4a714a [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$data$3a$0188c5__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/ai/flows/data:0188c5 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$data$3a$21d56e__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/ai/flows/data:21d56e [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$schema$2f$menu$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/schema/menu.ts [app-client] (ecmascript)");
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
;
;
;
;
;
;
;
;
function MenuEditor({ vendorId, vendorName, initialMenu }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const nameInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isPending, startTransition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"])();
    const [editingItem, setEditingItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedItemIds, setSelectedItemIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const form = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"])({
        resolver: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zodResolver"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$schema$2f$menu$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AddMenuItemRequestSchema"]),
        defaultValues: {
            vendorId: vendorId,
            name: "",
            description: "",
            price: undefined,
            optionGroups: []
        }
    });
    const { fields, append, remove } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFieldArray"])({
        control: form.control,
        name: "optionGroups"
    });
    const { reset, clearErrors } = form;
    const resetFormAndDeselect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MenuEditor.useCallback[resetFormAndDeselect]": ()=>{
            reset({
                vendorId: vendorId,
                name: "",
                description: "",
                price: undefined,
                optionGroups: []
            });
            clearErrors();
            setEditingItem(null);
        }
    }["MenuEditor.useCallback[resetFormAndDeselect]"], [
        vendorId,
        reset,
        clearErrors
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MenuEditor.useEffect": ()=>{
            if (editingItem) {
                const optionGroups = editingItem.options?.map({
                    "MenuEditor.useEffect": (group)=>({
                            groupName: group.name,
                            choices: group.choices.map({
                                "MenuEditor.useEffect": (c)=>c.name
                            }["MenuEditor.useEffect"]).join(','),
                            priceDeltas: group.choices.map({
                                "MenuEditor.useEffect": (c)=>c.priceDelta
                            }["MenuEditor.useEffect"]).join(',')
                        })
                }["MenuEditor.useEffect"]) || [];
                reset({
                    vendorId: vendorId,
                    name: editingItem.name,
                    description: editingItem.description || '',
                    price: editingItem.price,
                    optionGroups: optionGroups
                });
                clearErrors();
                nameInputRef.current?.focus();
            } else {
                resetFormAndDeselect();
                nameInputRef.current?.focus();
            }
        }
    }["MenuEditor.useEffect"], [
        editingItem,
        vendorId,
        reset,
        clearErrors,
        resetFormAndDeselect
    ]);
    const onSubmit = (data)=>{
        startTransition(async ()=>{
            try {
                if (editingItem) {
                    const updateData = {
                        id: editingItem.id,
                        vendorId: vendorId,
                        ...data
                    };
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$data$3a$4a714a__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["updateMenuItem"])(updateData);
                    toast({
                        title: "品項已更新",
                        description: `${data.name} 已成功更新。`
                    });
                } else {
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$data$3a$087252__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["addMenuItem"])(data);
                    toast({
                        title: "品項已新增",
                        description: `${data.name} 已成功新增到菜單。`
                    });
                }
                resetFormAndDeselect();
                router.refresh();
            } catch (error) {
                const action = editingItem ? "新增" : "更新";
                toast({
                    variant: "destructive",
                    title: `${action}失敗`,
                    description: error instanceof Error ? error.message : "發生未知錯誤"
                });
            }
        });
    };
    const handleDeleteItem = (itemId, itemName)=>{
        startTransition(async ()=>{
            try {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$data$3a$fafdee__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deleteMenuItem"])({
                    id: itemId
                });
                toast({
                    title: "品項已刪除",
                    description: `${itemName} 已從菜單移除。`
                });
                if (editingItem?.id === itemId) {
                    resetFormAndDeselect();
                }
                router.refresh();
            } catch (error) {
                toast({
                    variant: "destructive",
                    title: "刪除失敗",
                    description: error instanceof Error ? error.message : "發生未知錯誤"
                });
            }
        });
    };
    const handleDuplicateItem = (itemId, itemName)=>{
        startTransition(async ()=>{
            try {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$data$3a$0188c5__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["duplicateMenuItem"])(itemId);
                toast({
                    title: "品項已複製",
                    description: `${itemName} 已成功複製。`
                });
                router.refresh();
            } catch (error) {
                toast({
                    variant: "destructive",
                    title: "複製失敗",
                    description: error instanceof Error ? error.message : "發生未知錯誤"
                });
            }
        });
    };
    const handleEditClick = (item)=>{
        setEditingItem(item);
    };
    const handleBatchDelete = ()=>{
        if (selectedItemIds.length === 0) return;
        startTransition(async ()=>{
            try {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$data$3a$21d56e__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["batchDeleteMenuItems"])({
                    ids: selectedItemIds
                });
                toast({
                    title: "品項已刪除",
                    description: `已成功刪除 ${selectedItemIds.length} 個品項。`
                });
                setSelectedItemIds([]);
                router.refresh();
            } catch (error) {
                toast({
                    variant: "destructive",
                    title: "批量刪除失敗",
                    description: error instanceof Error ? error.message : "發生未知錯誤"
                });
            }
        });
    };
    const toggleSelectAll = (checked)=>{
        if (checked) {
            setSelectedItemIds(initialMenu.map((item)=>item.id));
        } else {
            setSelectedItemIds([]);
        }
    };
    const toggleSelectItem = (id, checked)=>{
        if (checked) {
            setSelectedItemIds((prev)=>[
                    ...prev,
                    id
                ]);
        } else {
            setSelectedItemIds((prev)=>prev.filter((itemId)=>itemId !== id));
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-1 md:grid-cols-2 gap-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    className: "flex items-center gap-2",
                                    children: [
                                        editingItem ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__["Edit"], {
                                            className: "h-6 w-6"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/MenuEditor.tsx",
                                            lineNumber: 196,
                                            columnNumber: 31
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$plus$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FilePlus2$3e$__["FilePlus2"], {
                                            className: "h-6 w-6"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/MenuEditor.tsx",
                                            lineNumber: 196,
                                            columnNumber: 62
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: editingItem ? '編輯品項' : '新增品項'
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/MenuEditor.tsx",
                                            lineNumber: 197,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/admin/MenuEditor.tsx",
                                    lineNumber: 195,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                    children: editingItem ? `正在編輯 ${editingItem.name}。完成後請點擊儲存。` : '在此建立包含多種客製化選項的餐點。'
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admin/MenuEditor.tsx",
                                    lineNumber: 199,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/admin/MenuEditor.tsx",
                            lineNumber: 194,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Form"], {
                                ...form,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    onSubmit: form.handleSubmit(onSubmit),
                                    className: "space-y-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormField"], {
                                            control: form.control,
                                            name: "name",
                                            render: ({ field })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormItem"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormLabel"], {
                                                            children: "品項名稱"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/admin/MenuEditor.tsx",
                                                            lineNumber: 209,
                                                            columnNumber: 23
                                                        }, void 0),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormControl"], {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                placeholder: "例如: 招牌雞腿飯",
                                                                ...field,
                                                                ref: nameInputRef
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/admin/MenuEditor.tsx",
                                                                lineNumber: 211,
                                                                columnNumber: 25
                                                            }, void 0)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/admin/MenuEditor.tsx",
                                                            lineNumber: 210,
                                                            columnNumber: 23
                                                        }, void 0),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormMessage"], {}, void 0, false, {
                                                            fileName: "[project]/src/components/admin/MenuEditor.tsx",
                                                            lineNumber: 217,
                                                            columnNumber: 23
                                                        }, void 0)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/admin/MenuEditor.tsx",
                                                    lineNumber: 208,
                                                    columnNumber: 21
                                                }, void 0)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/MenuEditor.tsx",
                                            lineNumber: 204,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormField"], {
                                            control: form.control,
                                            name: "description",
                                            render: ({ field })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormItem"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormLabel"], {
                                                            children: "品項描述 (選填)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/admin/MenuEditor.tsx",
                                                            lineNumber: 226,
                                                            columnNumber: 23
                                                        }, void 0),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormControl"], {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
                                                                placeholder: "例如: 本日限定、使用台東池上米...",
                                                                ...field
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/admin/MenuEditor.tsx",
                                                                lineNumber: 227,
                                                                columnNumber: 36
                                                            }, void 0)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/admin/MenuEditor.tsx",
                                                            lineNumber: 227,
                                                            columnNumber: 23
                                                        }, void 0),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormMessage"], {}, void 0, false, {
                                                            fileName: "[project]/src/components/admin/MenuEditor.tsx",
                                                            lineNumber: 228,
                                                            columnNumber: 23
                                                        }, void 0)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/admin/MenuEditor.tsx",
                                                    lineNumber: 225,
                                                    columnNumber: 21
                                                }, void 0)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/MenuEditor.tsx",
                                            lineNumber: 221,
                                            columnNumber: 18
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormField"], {
                                            control: form.control,
                                            name: "price",
                                            render: ({ field: { onChange, ...restField } })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormItem"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormLabel"], {
                                                            children: "基本價格"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/admin/MenuEditor.tsx",
                                                            lineNumber: 237,
                                                            columnNumber: 23
                                                        }, void 0),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormControl"], {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                type: "number",
                                                                ...restField,
                                                                onChange: (e)=>{
                                                                    const value = e.target.value;
                                                                    onChange(value === '' ? undefined : parseInt(value, 10));
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/admin/MenuEditor.tsx",
                                                                lineNumber: 239,
                                                                columnNumber: 25
                                                            }, void 0)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/admin/MenuEditor.tsx",
                                                            lineNumber: 238,
                                                            columnNumber: 23
                                                        }, void 0),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormMessage"], {}, void 0, false, {
                                                            fileName: "[project]/src/components/admin/MenuEditor.tsx",
                                                            lineNumber: 248,
                                                            columnNumber: 23
                                                        }, void 0)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/admin/MenuEditor.tsx",
                                                    lineNumber: 236,
                                                    columnNumber: 21
                                                }, void 0)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/MenuEditor.tsx",
                                            lineNumber: 232,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {}, void 0, false, {
                                            fileName: "[project]/src/components/admin/MenuEditor.tsx",
                                            lineNumber: 253,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-lg font-medium",
                                                            children: "客製化選項"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/admin/MenuEditor.tsx",
                                                            lineNumber: 257,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                            type: "button",
                                                            variant: "outline",
                                                            size: "sm",
                                                            onClick: ()=>append({
                                                                    groupName: '',
                                                                    choices: '',
                                                                    priceDeltas: ''
                                                                }),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusCircle$3e$__["PlusCircle"], {
                                                                    className: "mr-2 h-4 w-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/admin/MenuEditor.tsx",
                                                                    lineNumber: 259,
                                                                    columnNumber: 25
                                                                }, this),
                                                                " 新增選項群組"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/admin/MenuEditor.tsx",
                                                            lineNumber: 258,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/admin/MenuEditor.tsx",
                                                    lineNumber: 256,
                                                    columnNumber: 19
                                                }, this),
                                                fields.map((field, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                                        className: "p-4 bg-muted/50 relative",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                type: "button",
                                                                variant: "ghost",
                                                                size: "icon",
                                                                className: "absolute top-2 right-2 h-6 w-6",
                                                                onClick: ()=>remove(index),
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                    className: "h-4 w-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/admin/MenuEditor.tsx",
                                                                    lineNumber: 266,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/admin/MenuEditor.tsx",
                                                                lineNumber: 265,
                                                                columnNumber: 24
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "space-y-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormField"], {
                                                                        control: form.control,
                                                                        name: `optionGroups.${index}.groupName`,
                                                                        render: ({ field })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormItem"], {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormLabel"], {
                                                                                        children: [
                                                                                            "選項群組 ",
                                                                                            index + 1
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/components/admin/MenuEditor.tsx",
                                                                                        lineNumber: 273,
                                                                                        columnNumber: 41
                                                                                    }, void 0),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormControl"], {
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                                            placeholder: "例如: 辣度、飯量",
                                                                                            ...field
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/admin/MenuEditor.tsx",
                                                                                            lineNumber: 273,
                                                                                            columnNumber: 93
                                                                                        }, void 0)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/admin/MenuEditor.tsx",
                                                                                        lineNumber: 273,
                                                                                        columnNumber: 80
                                                                                    }, void 0),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormMessage"], {}, void 0, false, {
                                                                                        fileName: "[project]/src/components/admin/MenuEditor.tsx",
                                                                                        lineNumber: 273,
                                                                                        columnNumber: 151
                                                                                    }, void 0)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/components/admin/MenuEditor.tsx",
                                                                                lineNumber: 273,
                                                                                columnNumber: 31
                                                                            }, void 0)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/admin/MenuEditor.tsx",
                                                                        lineNumber: 269,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormField"], {
                                                                        control: form.control,
                                                                        name: `optionGroups.${index}.choices`,
                                                                        render: ({ field })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormItem"], {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormLabel"], {
                                                                                        children: "選項 (用,分隔)"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/admin/MenuEditor.tsx",
                                                                                        lineNumber: 280,
                                                                                        columnNumber: 41
                                                                                    }, void 0),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormControl"], {
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                                            placeholder: "例如: 正常,飯多,不飯",
                                                                                            ...field
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/admin/MenuEditor.tsx",
                                                                                            lineNumber: 280,
                                                                                            columnNumber: 86
                                                                                        }, void 0)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/admin/MenuEditor.tsx",
                                                                                        lineNumber: 280,
                                                                                        columnNumber: 73
                                                                                    }, void 0),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormDescription"], {
                                                                                        children: "第一個選項為預設選項。"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/admin/MenuEditor.tsx",
                                                                                        lineNumber: 280,
                                                                                        columnNumber: 147
                                                                                    }, void 0),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormMessage"], {}, void 0, false, {
                                                                                        fileName: "[project]/src/components/admin/MenuEditor.tsx",
                                                                                        lineNumber: 280,
                                                                                        columnNumber: 193
                                                                                    }, void 0)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/components/admin/MenuEditor.tsx",
                                                                                lineNumber: 280,
                                                                                columnNumber: 31
                                                                            }, void 0)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/admin/MenuEditor.tsx",
                                                                        lineNumber: 276,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormField"], {
                                                                        control: form.control,
                                                                        name: `optionGroups.${index}.priceDeltas`,
                                                                        render: ({ field })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormItem"], {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormLabel"], {
                                                                                        children: "價格變化 (用,分隔)"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/admin/MenuEditor.tsx",
                                                                                        lineNumber: 287,
                                                                                        columnNumber: 41
                                                                                    }, void 0),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormControl"], {
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                                            placeholder: "例如: 0,10,0 (可留空)",
                                                                                            ...field
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/admin/MenuEditor.tsx",
                                                                                            lineNumber: 287,
                                                                                            columnNumber: 88
                                                                                        }, void 0)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/admin/MenuEditor.tsx",
                                                                                        lineNumber: 287,
                                                                                        columnNumber: 75
                                                                                    }, void 0),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormDescription"], {
                                                                                        children: "請按上方選項順序填寫，留空表示不加價。"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/admin/MenuEditor.tsx",
                                                                                        lineNumber: 287,
                                                                                        columnNumber: 153
                                                                                    }, void 0),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormMessage"], {}, void 0, false, {
                                                                                        fileName: "[project]/src/components/admin/MenuEditor.tsx",
                                                                                        lineNumber: 287,
                                                                                        columnNumber: 207
                                                                                    }, void 0)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/components/admin/MenuEditor.tsx",
                                                                                lineNumber: 287,
                                                                                columnNumber: 31
                                                                            }, void 0)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/admin/MenuEditor.tsx",
                                                                        lineNumber: 283,
                                                                        columnNumber: 28
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/admin/MenuEditor.tsx",
                                                                lineNumber: 268,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, field.id, true, {
                                                        fileName: "[project]/src/components/admin/MenuEditor.tsx",
                                                        lineNumber: 264,
                                                        columnNumber: 21
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/admin/MenuEditor.tsx",
                                            lineNumber: 255,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-2",
                                            children: [
                                                editingItem && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    type: "button",
                                                    variant: "secondary",
                                                    onClick: resetFormAndDeselect,
                                                    className: "w-1/3",
                                                    children: "取消編輯"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/MenuEditor.tsx",
                                                    lineNumber: 296,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    type: "submit",
                                                    className: "w-full",
                                                    disabled: isPending,
                                                    children: isPending ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                                className: "mr-2 h-4 w-4 animate-spin"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/admin/MenuEditor.tsx",
                                                                lineNumber: 301,
                                                                columnNumber: 38
                                                            }, this),
                                                            " 處理中..."
                                                        ]
                                                    }, void 0, true) : editingItem ? '儲存變更' : '確認新增'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/MenuEditor.tsx",
                                                    lineNumber: 300,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/admin/MenuEditor.tsx",
                                            lineNumber: 294,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/admin/MenuEditor.tsx",
                                    lineNumber: 203,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/MenuEditor.tsx",
                                lineNumber: 202,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/admin/MenuEditor.tsx",
                            lineNumber: 201,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/admin/MenuEditor.tsx",
                    lineNumber: 193,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/admin/MenuEditor.tsx",
                lineNumber: 192,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                            children: "現有品項"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/MenuEditor.tsx",
                                            lineNumber: 315,
                                            columnNumber: 17
                                        }, this),
                                        selectedItemIds.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialog"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogTrigger"], {
                                                    asChild: true,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        variant: "destructive",
                                                        size: "sm",
                                                        disabled: isPending,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                className: "mr-2 h-4 w-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/admin/MenuEditor.tsx",
                                                                lineNumber: 320,
                                                                columnNumber: 33
                                                            }, this),
                                                            "刪除選取 (",
                                                            selectedItemIds.length,
                                                            ")"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/admin/MenuEditor.tsx",
                                                        lineNumber: 319,
                                                        columnNumber: 29
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/MenuEditor.tsx",
                                                    lineNumber: 318,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogContent"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogHeader"], {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogTitle"], {
                                                                    children: "確定要批量刪除嗎？"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/admin/MenuEditor.tsx",
                                                                    lineNumber: 325,
                                                                    columnNumber: 48
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogDescription"], {
                                                                    children: [
                                                                        "此動作將會永久刪除您選取的 ",
                                                                        selectedItemIds.length,
                                                                        " 個品項及其所有選項，確定嗎？"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/admin/MenuEditor.tsx",
                                                                    lineNumber: 325,
                                                                    columnNumber: 94
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/admin/MenuEditor.tsx",
                                                            lineNumber: 325,
                                                            columnNumber: 29
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogFooter"], {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogCancel"], {
                                                                    children: "取消"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/admin/MenuEditor.tsx",
                                                                    lineNumber: 326,
                                                                    columnNumber: 48
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogAction"], {
                                                                    variant: "destructive",
                                                                    onClick: handleBatchDelete,
                                                                    disabled: isPending,
                                                                    children: "確定刪除"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/admin/MenuEditor.tsx",
                                                                    lineNumber: 326,
                                                                    columnNumber: 89
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/admin/MenuEditor.tsx",
                                                            lineNumber: 326,
                                                            columnNumber: 29
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/admin/MenuEditor.tsx",
                                                    lineNumber: 324,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/admin/MenuEditor.tsx",
                                            lineNumber: 317,
                                            columnNumber: 22
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/admin/MenuEditor.tsx",
                                    lineNumber: 314,
                                    columnNumber: 14
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 text-sm text-muted-foreground pt-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Checkbox"], {
                                            id: "select-all",
                                            checked: initialMenu.length > 0 && selectedItemIds.length === initialMenu.length,
                                            onCheckedChange: (checked)=>toggleSelectAll(Boolean(checked)),
                                            disabled: initialMenu.length === 0
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/MenuEditor.tsx",
                                            lineNumber: 332,
                                            columnNumber: 18
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "select-all",
                                            children: "全選"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/MenuEditor.tsx",
                                            lineNumber: 338,
                                            columnNumber: 18
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/admin/MenuEditor.tsx",
                                    lineNumber: 331,
                                    columnNumber: 14
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/admin/MenuEditor.tsx",
                            lineNumber: 313,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                            className: "space-y-3",
                            children: (initialMenu || []).length > 0 ? (initialMenu || []).map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                    className: "p-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between items-start",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-start gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Checkbox"], {
                                                            id: `select-${item.id}`,
                                                            className: "mt-1",
                                                            checked: selectedItemIds.includes(item.id),
                                                            onCheckedChange: (checked)=>toggleSelectItem(item.id, Boolean(checked))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/admin/MenuEditor.tsx",
                                                            lineNumber: 347,
                                                            columnNumber: 28
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "font-semibold",
                                                                    children: item.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/admin/MenuEditor.tsx",
                                                                    lineNumber: 354,
                                                                    columnNumber: 31
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-muted-foreground",
                                                                    children: item.description
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/admin/MenuEditor.tsx",
                                                                    lineNumber: 355,
                                                                    columnNumber: 31
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm text-muted-foreground",
                                                                    children: [
                                                                        "$",
                                                                        item.price
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/admin/MenuEditor.tsx",
                                                                    lineNumber: 356,
                                                                    columnNumber: 31
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/admin/MenuEditor.tsx",
                                                            lineNumber: 353,
                                                            columnNumber: 28
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/admin/MenuEditor.tsx",
                                                    lineNumber: 346,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialog"], {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogTrigger"], {
                                                                    asChild: true,
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                        variant: "ghost",
                                                                        size: "icon",
                                                                        disabled: isPending,
                                                                        "aria-label": `複製 ${item.name}`,
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                                                            className: "h-4 w-4 text-green-600"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/admin/MenuEditor.tsx",
                                                                            lineNumber: 363,
                                                                            columnNumber: 32
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/admin/MenuEditor.tsx",
                                                                        lineNumber: 362,
                                                                        columnNumber: 30
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/admin/MenuEditor.tsx",
                                                                    lineNumber: 361,
                                                                    columnNumber: 28
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogContent"], {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogHeader"], {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogTitle"], {
                                                                                    children: "確定要複製品項嗎？"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/admin/MenuEditor.tsx",
                                                                                    lineNumber: 367,
                                                                                    columnNumber: 49
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogDescription"], {
                                                                                    children: [
                                                                                        "此動作將會複製「",
                                                                                        item.name,
                                                                                        "」及其所有選項。"
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/components/admin/MenuEditor.tsx",
                                                                                    lineNumber: 367,
                                                                                    columnNumber: 95
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/admin/MenuEditor.tsx",
                                                                            lineNumber: 367,
                                                                            columnNumber: 30
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogFooter"], {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogCancel"], {
                                                                                    children: "取消"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/admin/MenuEditor.tsx",
                                                                                    lineNumber: 368,
                                                                                    columnNumber: 49
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogAction"], {
                                                                                    onClick: ()=>handleDuplicateItem(item.id, item.name),
                                                                                    disabled: isPending,
                                                                                    children: "確定複製"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/admin/MenuEditor.tsx",
                                                                                    lineNumber: 368,
                                                                                    columnNumber: 90
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/admin/MenuEditor.tsx",
                                                                            lineNumber: 368,
                                                                            columnNumber: 30
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/admin/MenuEditor.tsx",
                                                                    lineNumber: 366,
                                                                    columnNumber: 28
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/admin/MenuEditor.tsx",
                                                            lineNumber: 360,
                                                            columnNumber: 26
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                            variant: "ghost",
                                                            size: "icon",
                                                            disabled: isPending,
                                                            "aria-label": "編輯",
                                                            onClick: ()=>handleEditClick(item),
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__["Edit"], {
                                                                className: "h-4 w-4 text-blue-600"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/admin/MenuEditor.tsx",
                                                                lineNumber: 372,
                                                                columnNumber: 28
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/admin/MenuEditor.tsx",
                                                            lineNumber: 371,
                                                            columnNumber: 26
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialog"], {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogTrigger"], {
                                                                    asChild: true,
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                        variant: "ghost",
                                                                        size: "icon",
                                                                        "aria-label": `刪除 ${item.name}`,
                                                                        disabled: isPending,
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                            className: "h-4 w-4 text-destructive"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/admin/MenuEditor.tsx",
                                                                            lineNumber: 377,
                                                                            columnNumber: 38
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/admin/MenuEditor.tsx",
                                                                        lineNumber: 376,
                                                                        columnNumber: 34
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/admin/MenuEditor.tsx",
                                                                    lineNumber: 375,
                                                                    columnNumber: 30
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogContent"], {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogHeader"], {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogTitle"], {
                                                                                    children: "確定要刪除品項嗎？"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/admin/MenuEditor.tsx",
                                                                                    lineNumber: 381,
                                                                                    columnNumber: 53
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogDescription"], {
                                                                                    children: "此動作將會從資料庫中永久刪除此品項及其所有選項，確定嗎？"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/admin/MenuEditor.tsx",
                                                                                    lineNumber: 381,
                                                                                    columnNumber: 99
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/admin/MenuEditor.tsx",
                                                                            lineNumber: 381,
                                                                            columnNumber: 34
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogFooter"], {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogCancel"], {
                                                                                    children: "取消"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/admin/MenuEditor.tsx",
                                                                                    lineNumber: 382,
                                                                                    columnNumber: 53
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogAction"], {
                                                                                    variant: "destructive",
                                                                                    onClick: ()=>handleDeleteItem(item.id, item.name),
                                                                                    disabled: isPending,
                                                                                    children: "確定刪除"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/admin/MenuEditor.tsx",
                                                                                    lineNumber: 382,
                                                                                    columnNumber: 94
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/admin/MenuEditor.tsx",
                                                                            lineNumber: 382,
                                                                            columnNumber: 34
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/admin/MenuEditor.tsx",
                                                                    lineNumber: 380,
                                                                    columnNumber: 30
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/admin/MenuEditor.tsx",
                                                            lineNumber: 374,
                                                            columnNumber: 26
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/admin/MenuEditor.tsx",
                                                    lineNumber: 359,
                                                    columnNumber: 24
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/admin/MenuEditor.tsx",
                                            lineNumber: 345,
                                            columnNumber: 21
                                        }, this),
                                        item.options && item.options.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-2 pt-2 border-t ml-7",
                                            children: item.options.map((group, gIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium",
                                                            children: [
                                                                group.name,
                                                                ": "
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/admin/MenuEditor.tsx",
                                                            lineNumber: 391,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-muted-foreground",
                                                            children: group.choices.map((c)=>`${c.name}${c.isDefault ? '(預設)' : ''}`).join(', ')
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/admin/MenuEditor.tsx",
                                                            lineNumber: 392,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, `${item.id}-${group.name}-${gIndex}`, true, {
                                                    fileName: "[project]/src/components/admin/MenuEditor.tsx",
                                                    lineNumber: 390,
                                                    columnNumber: 33
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/MenuEditor.tsx",
                                            lineNumber: 388,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, item.id, true, {
                                    fileName: "[project]/src/components/admin/MenuEditor.tsx",
                                    lineNumber: 344,
                                    columnNumber: 17
                                }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-center text-muted-foreground py-4",
                                children: "這個店家還沒有任何菜單品項。"
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/MenuEditor.tsx",
                                lineNumber: 402,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/admin/MenuEditor.tsx",
                            lineNumber: 341,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/admin/MenuEditor.tsx",
                    lineNumber: 312,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/admin/MenuEditor.tsx",
                lineNumber: 311,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/admin/MenuEditor.tsx",
        lineNumber: 190,
        columnNumber: 5
    }, this);
}
_s(MenuEditor, "BD/dU6KADXiS9BQ0xg7wzfa0Vu0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFieldArray"]
    ];
});
_c = MenuEditor;
var _c;
__turbopack_context__.k.register(_c, "MenuEditor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_03c33036._.js.map