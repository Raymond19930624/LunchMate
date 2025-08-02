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
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const username = searchParams.get('username');
    const handleLogout = ()=>{
        router.push('/');
    };
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
                            lineNumber: 21,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-headline text-2xl font-bold text-foreground",
                            children: "餓了嗎？"
                        }, void 0, false, {
                            fileName: "[project]/src/components/SiteHeader.tsx",
                            lineNumber: 22,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/SiteHeader.tsx",
                    lineNumber: 20,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2",
                    children: [
                        username && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                    className: "h-5 w-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SiteHeader.tsx",
                                    lineNumber: 28,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm font-medium text-foreground",
                                    children: decodeURIComponent(username)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SiteHeader.tsx",
                                    lineNumber: 29,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "ghost",
                            size: "icon",
                            "aria-label": "登出",
                            onClick: handleLogout,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                className: "h-5 w-5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/SiteHeader.tsx",
                                lineNumber: 33,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/SiteHeader.tsx",
                            lineNumber: 32,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/SiteHeader.tsx",
                    lineNumber: 25,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/SiteHeader.tsx",
            lineNumber: 19,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/SiteHeader.tsx",
        lineNumber: 18,
        columnNumber: 9
    }, this);
}
_s(SiteHeader, "+JhyKI/TCt/o3i650dm/GAytAZk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
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
"[project]/src/ai/flows/data:a829fc [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"408805d9ef728acadaca549924fae0fa1cec57f9b9":"getMenusByVendorId"},"src/ai/flows/menu-flow.ts",""] */ __turbopack_context__.s({
    "getMenusByVendorId": (()=>getMenusByVendorId)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var getMenusByVendorId = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("408805d9ef728acadaca549924fae0fa1cec57f9b9", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getMenusByVendorId"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vbWVudS1mbG93LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuJ3VzZSBzZXJ2ZXInO1xuLyoqXG4gKiBAZmlsZU92ZXJ2aWV3IEZsb3cgZm9yIGhhbmRsaW5nIG1lbnUgZGF0YSBmcm9tIEdvb2dsZSBTaGVldHMuXG4gKi9cbmltcG9ydCB7IGdldFNoZWV0RGF0YSwgYXBwZW5kU2hlZXREYXRhLCBjbGVhclNoZWV0RGF0YSwgdXBkYXRlU2hlZXREYXRhIH0gZnJvbSAnQC9zZXJ2aWNlcy9zaGVldC1zZXJ2aWNlJztcbmltcG9ydCB7IHogfSBmcm9tICd6b2QnO1xuXG4vLyBUaGUgSUQgb2YgeW91ciBHb29nbGUgU2hlZXRcbmNvbnN0IFNQUkVBRFNIRUVUX0lEID0gJzFaajJoMGNZbHJiMm1CYU5nbDEtUG9PSzd0bENDd0RjY0FYbjV3NjZocDRjJztcbmNvbnN0IE1FTlVfU0hFRVRfTkFNRSA9ICdtZW51cyc7XG5jb25zdCBNRU5VX09QVElPTlNfU0hFRVRfTkFNRSA9ICdtZW51X29wdGlvbnMnO1xuXG5leHBvcnQgdHlwZSBNZW51T3B0aW9uQ2hvaWNlID0ge1xuICBpZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIHByaWNlRGVsdGE6IG51bWJlcjtcbiAgaXNEZWZhdWx0OiBib29sZWFuO1xufVxuXG5leHBvcnQgdHlwZSBNZW51T3B0aW9uR3JvdXAgPSB7XG4gIG5hbWU6IHN0cmluZztcbiAgY2hvaWNlczogTWVudU9wdGlvbkNob2ljZVtdO1xufVxuXG5leHBvcnQgdHlwZSBNZW51SXRlbSA9IHtcbiAgaWQ6IHN0cmluZztcbiAgdmVuZG9ySWQ6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBwcmljZTogbnVtYmVyO1xuICBpc0FjdGl2ZTogYm9vbGVhbjtcbiAgb3B0aW9ucz86IE1lbnVPcHRpb25Hcm91cFtdO1xufTtcblxuLyoqXG4gKiBSZXRyaWV2ZXMgYWxsIG1lbnUgaXRlbXMgZm9yIGEgZ2l2ZW4gdmVuZG9yIGZyb20gdGhlICdtZW51cycgc2hlZXQsIGluY2x1ZGluZyB0aGVpciBvcHRpb25zLlxuICogQHBhcmFtIHtzdHJpbmd9IHZlbmRvcklkIFRoZSBJRCBvZiB0aGUgdmVuZG9yLlxuICogQHJldHVybnMge1Byb21pc2U8TWVudUl0ZW1bXT59IEEgbGlzdCBvZiBtZW51IGl0ZW1zIHdpdGggdGhlaXIgb3B0aW9ucy5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE1lbnVzQnlWZW5kb3JJZCh2ZW5kb3JJZDogc3RyaW5nKTogUHJvbWlzZTxNZW51SXRlbVtdPiB7XG4gIHRyeSB7XG4gICAgY29uc3QgbWVudVNoZWV0RGF0YSA9IGF3YWl0IGdldFNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgTUVOVV9TSEVFVF9OQU1FKTtcbiAgICBjb25zdCBvcHRpb25zU2hlZXREYXRhID0gYXdhaXQgZ2V0U2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCBNRU5VX09QVElPTlNfU0hFRVRfTkFNRSk7XG4gICAgXG4gICAgaWYgKCFtZW51U2hlZXREYXRhIHx8IG1lbnVTaGVldERhdGEubGVuZ3RoIDwgMikge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIGNvbnN0IG1lbnVIZWFkZXJzID0gbWVudVNoZWV0RGF0YVswXTtcbiAgICBjb25zdCBtZW51Um93cyA9IG1lbnVTaGVldERhdGEuc2xpY2UoMSk7XG5cbiAgICBjb25zdCBoZWFkZXJNYXAgPSBtZW51SGVhZGVycy5yZWR1Y2UoKGFjYywgaGVhZGVyLCBpbmRleCkgPT4ge1xuICAgICAgICBhY2NbaGVhZGVyXSA9IGluZGV4O1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgIH0sIHt9IGFzIFJlY29yZDxzdHJpbmcsIG51bWJlcj4pO1xuXG5cbiAgICBjb25zdCBhbGxJdGVtczogTWVudUl0ZW1bXSA9IG1lbnVSb3dzXG4gICAgICAuZmlsdGVyKHJvdyA9PiByb3cubGVuZ3RoID4gMCAmJiByb3dbaGVhZGVyTWFwWyd2ZW5kb3JJZCddXSA9PT0gdmVuZG9ySWQgJiYgcm93W2hlYWRlck1hcFsnaXNBY3RpdmUnXV0gPT09ICdUUlVFJylcbiAgICAgIC5tYXAocm93ID0+ICh7XG4gICAgICAgIGlkOiByb3dbaGVhZGVyTWFwWydpZCddXSB8fCAnJyxcbiAgICAgICAgdmVuZG9ySWQ6IHJvd1toZWFkZXJNYXBbJ3ZlbmRvcklkJ11dIHx8ICcnLFxuICAgICAgICBuYW1lOiByb3dbaGVhZGVyTWFwWyduYW1lJ11dIHx8ICcnLFxuICAgICAgICBwcmljZTogcGFyc2VJbnQocm93W2hlYWRlck1hcFsncHJpY2UnXV0gfHwgJzAnLCAxMCksXG4gICAgICAgIGlzQWN0aXZlOiByb3dbaGVhZGVyTWFwWydpc0FjdGl2ZSddXSA9PT0gJ1RSVUUnLFxuICAgICAgICBvcHRpb25zOiBbXSxcbiAgICAgIH0pKTtcbiAgICAgIFxuICAgIGlmIChvcHRpb25zU2hlZXREYXRhICYmIG9wdGlvbnNTaGVldERhdGEubGVuZ3RoID4gMSkge1xuICAgICAgY29uc3Qgb3B0aW9uc0hlYWRlcnMgPSBvcHRpb25zU2hlZXREYXRhWzBdO1xuICAgICAgY29uc3Qgb3B0aW9uc1Jvd3MgPSBvcHRpb25zU2hlZXREYXRhLnNsaWNlKDEpO1xuICAgICAgY29uc3Qgb3B0aW9uc0hlYWRlck1hcCA9IG9wdGlvbnNIZWFkZXJzLnJlZHVjZSgoYWNjLCBoZWFkZXIsIGluZGV4KSA9PiB7XG4gICAgICAgICAgYWNjW2hlYWRlcl0gPSBpbmRleDtcbiAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgfSwge30gYXMgUmVjb3JkPHN0cmluZywgbnVtYmVyPik7XG5cblxuICAgICAgY29uc3QgYWxsT3B0aW9ucyA9IG9wdGlvbnNSb3dzLm1hcChyb3cgPT4gKHtcbiAgICAgICAgaWQ6IHJvd1tvcHRpb25zSGVhZGVyTWFwWydpZCddXSB8fCAnJyxcbiAgICAgICAgbWVudUl0ZW1JZDogcm93W29wdGlvbnNIZWFkZXJNYXBbJ21lbnVJdGVtSWQnXV0gfHwgJycsXG4gICAgICAgIGdyb3VwTmFtZTogcm93W29wdGlvbnNIZWFkZXJNYXBbJ2dyb3VwTmFtZSddXSB8fCAnJyxcbiAgICAgICAgY2hvaWNlTmFtZTogcm93W29wdGlvbnNIZWFkZXJNYXBbJ2Nob2ljZU5hbWUnXV0gfHwgJycsXG4gICAgICAgIHByaWNlRGVsdGE6IHBhcnNlSW50KHJvd1tvcHRpb25zSGVhZGVyTWFwWydwcmljZURlbHRhJ11dIHx8ICcwJywgMTApLFxuICAgICAgICBpc0RlZmF1bHQ6IHJvd1tvcHRpb25zSGVhZGVyTWFwWydpc0RlZmF1bHQnXV0gPT09ICdUUlVFJyxcbiAgICAgIH0pKTtcblxuICAgICAgLy8gR3JvdXAgb3B0aW9ucyBieSBtZW51IGl0ZW0gSURcbiAgICAgIGNvbnN0IG9wdGlvbnNCeU1lbnVJdGVtID0gYWxsT3B0aW9ucy5yZWR1Y2UoKGFjYywgb3B0aW9uKSA9PiB7XG4gICAgICAgIGlmICghYWNjW29wdGlvbi5tZW51SXRlbUlkXSkge1xuICAgICAgICAgIGFjY1tvcHRpb24ubWVudUl0ZW1JZF0gPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBhY2Nbb3B0aW9uLm1lbnVJdGVtSWRdLnB1c2gob3B0aW9uKTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH0sIHt9IGFzIFJlY29yZDxzdHJpbmcsIHR5cGVvZiBhbGxPcHRpb25zPik7XG5cblxuICAgICAgLy8gQXR0YWNoIG9wdGlvbnMgdG8gbWVudSBpdGVtc1xuICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGFsbEl0ZW1zKSB7XG4gICAgICAgIGlmIChvcHRpb25zQnlNZW51SXRlbVtpdGVtLmlkXSkge1xuICAgICAgICAgIGNvbnN0IGl0ZW1PcHRpb25zID0gb3B0aW9uc0J5TWVudUl0ZW1baXRlbS5pZF07XG4gICAgICAgICAgY29uc3QgZ3JvdXBzID0gaXRlbU9wdGlvbnMucmVkdWNlKChhY2MsIG9wdGlvbikgPT4ge1xuICAgICAgICAgICAgaWYgKCFhY2Nbb3B0aW9uLmdyb3VwTmFtZV0pIHtcbiAgICAgICAgICAgICAgYWNjW29wdGlvbi5ncm91cE5hbWVdID0geyBuYW1lOiBvcHRpb24uZ3JvdXBOYW1lLCBjaG9pY2VzOiBbXSB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYWNjW29wdGlvbi5ncm91cE5hbWVdLmNob2ljZXMucHVzaCh7XG4gICAgICAgICAgICAgIGlkOiBvcHRpb24uaWQsXG4gICAgICAgICAgICAgIG5hbWU6IG9wdGlvbi5jaG9pY2VOYW1lLFxuICAgICAgICAgICAgICBwcmljZURlbHRhOiBvcHRpb24ucHJpY2VEZWx0YSxcbiAgICAgICAgICAgICAgaXNEZWZhdWx0OiBvcHRpb24uaXNEZWZhdWx0LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgIH0sIHt9IGFzIFJlY29yZDxzdHJpbmcsIE1lbnVPcHRpb25Hcm91cD4pO1xuICAgICAgICAgIGl0ZW0ub3B0aW9ucyA9IE9iamVjdC52YWx1ZXMoZ3JvdXBzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICByZXR1cm4gYWxsSXRlbXM7XG5cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwi6K6A5Y+W6I+c5Zau5aSx5pWXOlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIFtdO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIEFkZE1lbnVJdGVtUmVxdWVzdCA9IHtcbiAgdmVuZG9ySWQ6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBwcmljZTogbnVtYmVyO1xufTtcblxuLyoqXG4gKiBBZGRzIGEgbmV3IG1lbnUgaXRlbSB0byB0aGUgJ21lbnVzJyBzaGVldC5cbiAqIEBwYXJhbSB7QWRkTWVudUl0ZW1SZXF1ZXN0fSBpdGVtIC0gVGhlIG1lbnUgaXRlbSBkYXRhIHRvIGFkZC5cbiAqIEByZXR1cm5zIHtQcm9taXNlPHtzdWNjZXNzOiBib29sZWFufT59IEEgc3VjY2VzcyBmbGFnLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkTWVudUl0ZW0oaXRlbTogQWRkTWVudUl0ZW1SZXF1ZXN0KTogUHJvbWlzZTx7IHN1Y2Nlc3M6IGJvb2xlYW4gfT4ge1xuICBjb25zdCBBZGRNZW51SXRlbVNjaGVtYSA9IHoub2JqZWN0KHtcbiAgICB2ZW5kb3JJZDogei5zdHJpbmcoKSxcbiAgICBuYW1lOiB6LnN0cmluZygpLm1pbigxLCBcIuWTgemgheWQjeeoseS4jeiDveeCuuepulwiKSxcbiAgICBwcmljZTogei5udW1iZXIoKS5wb3NpdGl2ZShcIuWDueagvOW/hemgiOaYr+ato+aVuFwiKSxcbiAgfSk7XG5cbiAgY29uc3QgdmFsaWRhdGlvbiA9IEFkZE1lbnVJdGVtU2NoZW1hLnNhZmVQYXJzZShpdGVtKTtcbiAgaWYgKCF2YWxpZGF0aW9uLnN1Y2Nlc3MpIHtcbiAgICAgIGNvbnN0IGEgPSB2YWxpZGF0aW9uLmVycm9yLmZvcm1hdCgpLl9lcnJvcnMuam9pbignLCAnKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcihg6Ly45YWl6LOH5paZ5pyJ6KqkOiAke2F9YCk7XG4gIH1cblxuICBjb25zdCByYW5nZSA9IGAke01FTlVfU0hFRVRfTkFNRX0hQTpFYDtcbiAgY29uc3QgYWxsTWVudXNSYW5nZSA9IGAke01FTlVfU0hFRVRfTkFNRX0hQTI6QWA7XG4gIFxuICBjb25zdCBhbGxNZW51SWRzRGF0YSA9IGF3YWl0IGdldFNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgYWxsTWVudXNSYW5nZSk7XG4gIGNvbnN0IGxhc3RJZE51bSA9IGFsbE1lbnVJZHNEYXRhLmxlbmd0aCA+IDAgXG4gICAgICA/IE1hdGgubWF4KC4uLmFsbE1lbnVJZHNEYXRhLm1hcChyb3cgPT4gcGFyc2VJbnQoKHJvd1swXSB8fCAnbTAnKS5yZXBsYWNlKCdtJywgJycpLCAxMCkpLmZpbHRlcihudW0gPT4gIWlzTmFOKG51bSkpKVxuICAgICAgOiAwO1xuXG4gIGNvbnN0IG5ld0lkID0gYG0keyhsYXN0SWROdW0gKyAxKS50b1N0cmluZygpLnBhZFN0YXJ0KDMsICcwJyl9YDtcbiAgXG4gIGNvbnN0IHZhbHVlcyA9IFtcbiAgICBbbmV3SWQsIGl0ZW0udmVuZG9ySWQsIGl0ZW0ubmFtZSwgaXRlbS5wcmljZSwgJ1RSVUUnXSxcbiAgXTtcblxuICBhd2FpdCBhcHBlbmRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIHJhbmdlLCB2YWx1ZXMpO1xuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG59XG5cbmV4cG9ydCB0eXBlIFVwZGF0ZU1lbnVJdGVtUmVxdWVzdCA9IHtcbiAgICBpZDogc3RyaW5nO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBwcmljZTogbnVtYmVyO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlTWVudUl0ZW0oaXRlbTogVXBkYXRlTWVudUl0ZW1SZXF1ZXN0KTogUHJvbWlzZTx7IHN1Y2Nlc3M6IGJvb2xlYW4gfT4ge1xuICAgIGNvbnN0IHJhbmdlID0gYCR7TUVOVV9TSEVFVF9OQU1FfSFBMjpFYDtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0U2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCByYW5nZSk7XG5cbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwi5om+5LiN5Yiw6I+c5Zau6LOH5paZ44CCXCIpO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCByb3dJbmRleCA9IGRhdGEuZmluZEluZGV4KHJvdyA9PiByb3dbMF0gPT09IGl0ZW0uaWQpO1xuICAgIGlmIChyb3dJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGDmib7kuI3liLAgSUQg54K6ICR7aXRlbS5pZH0g55qE6I+c5Zau5ZOB6aCF44CCYCk7XG4gICAgfVxuXG4gICAgY29uc3Qgcm93VG9VcGRhdGUgPSByb3dJbmRleCArIDI7XG4gICAgY29uc3QgdXBkYXRlUmFuZ2UgPSBgJHtNRU5VX1NIRUVUX05BTUV9IUMke3Jvd1RvVXBkYXRlfTpFJHtyb3dUb1VwZGF0ZX1gO1xuICAgIGNvbnN0IHZhbHVlcyA9IFtbaXRlbS5uYW1lLCBpdGVtLnByaWNlLCAnVFJVRSddXTtcblxuICAgIGF3YWl0IHVwZGF0ZVNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgdXBkYXRlUmFuZ2UsIHZhbHVlcyk7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xufVxuXG5leHBvcnQgdHlwZSBEZWxldGVNZW51SXRlbVJlcXVlc3QgPSB7XG4gICAgaWQ6IHN0cmluZztcbn07XG5cbi8qKlxuICogRGVsZXRlcyBhIG1lbnUgaXRlbSBmcm9tIHRoZSAnbWVudXMnIHNoZWV0IGJ5IGl0cyBJRC5cbiAqIEBwYXJhbSB7RGVsZXRlTWVudUl0ZW1SZXF1ZXN0fSByZXEgLSBUaGUgcmVxdWVzdCBjb250YWluaW5nIHRoZSBpdGVtIElEIHRvIGRlbGV0ZS5cbiAqIEByZXR1cm5zIHtQcm9taXNlPHtzdWNjZXNzOiBib29sZWFufT59IEEgc3VjY2VzcyBmbGFnLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlTWVudUl0ZW0ocmVxOiBEZWxldGVNZW51SXRlbVJlcXVlc3QpOiBQcm9taXNlPHsgc3VjY2VzczogYm9vbGVhbiB9PiB7XG4gICAgY29uc3QgcmFuZ2UgPSBgJHtNRU5VX1NIRUVUX05BTUV9IUEyOkVgO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIHJhbmdlKTtcblxuICAgIGlmICghZGF0YSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCLmib7kuI3liLDoj5zllq7os4fmlpnjgIJcIik7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IHJvd0luZGV4ID0gZGF0YS5maW5kSW5kZXgocm93ID0+IHJvd1swXSA9PT0gcmVxLmlkKTtcbiAgICBcbiAgICBpZiAocm93SW5kZXggPT09IC0xKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGDmib7kuI3liLAgSUQg54K6ICR7cmVxLmlkfSDnmoToj5zllq7lk4HpoIXjgIJgKTtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UgfTsgLy8gSXRlbSBub3QgZm91bmRcbiAgICB9XG5cbiAgICAvLyBHb29nbGUgU2hlZXRzIEFQSSByb3cgaW5kaWNlcyBhcmUgMS1iYXNlZC4gU2hlZXQgZGF0YSBzdGFydHMgZnJvbSByb3cgMi5cbiAgICBjb25zdCByb3dUb1VwZGF0ZSA9IHJvd0luZGV4ICsgMjsgXG4gICAgY29uc3QgdXBkYXRlUmFuZ2UgPSBgJHtNRU5VX1NIRUVUX05BTUV9IUUke3Jvd1RvVXBkYXRlfWA7XG4gICAgXG4gICAgYXdhaXQgdXBkYXRlU2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCB1cGRhdGVSYW5nZSwgW1snRkFMU0UnXV0pO1xuICAgIFxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbn1cblxuXG4vLyAtLS0gTWVudSBPcHRpb24gRmxvd3MgLS0tXG5cbmV4cG9ydCB0eXBlIEFkZE1lbnVPcHRpb25SZXF1ZXN0ID0ge1xuICBtZW51SXRlbUlkOiBzdHJpbmc7XG4gIGdyb3VwTmFtZTogc3RyaW5nO1xuICBjaG9pY2VOYW1lOiBzdHJpbmc7XG4gIHByaWNlRGVsdGE6IG51bWJlcjtcbiAgaXNEZWZhdWx0OiBib29sZWFuO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkTWVudU9wdGlvbihyZXE6IEFkZE1lbnVPcHRpb25SZXF1ZXN0KTogUHJvbWlzZTx7IHN1Y2Nlc3M6IGJvb2xlYW4gfT4ge1xuICAvLyBJZiB0aGUgbmV3IG9wdGlvbiBpcyBkZWZhdWx0LCB1bnNldCBvdGhlciBkZWZhdWx0cyBpbiB0aGUgc2FtZSBncm91cC5cbiAgaWYgKHJlcS5pc0RlZmF1bHQpIHtcbiAgICBhd2FpdCBzZXRNZW51T3B0aW9uRGVmYXVsdCh7IG1lbnVJdGVtSWQ6IHJlcS5tZW51SXRlbUlkLCBncm91cE5hbWU6IHJlcS5ncm91cE5hbWUsIG9wdGlvbklkOiAnJyB9KTsgLy8gUGFzcyBlbXB0eSBvcHRpb25JZCB0byB1bnNldCBhbGwsIG5ldyBvbmUgd2lsbCBiZSBzZXRcbiAgfVxuXG4gIGNvbnN0IHJhbmdlID0gYCR7TUVOVV9PUFRJT05TX1NIRUVUX05BTUV9IUE6RmA7XG4gIGNvbnN0IGFsbE9wdGlvbnNSYW5nZSA9IGAke01FTlVfT1BUSU9OU19TSEVFVF9OQU1FfSFBMjpBYDtcbiAgXG4gIGNvbnN0IGFsbE9wdGlvbklkc0RhdGEgPSBhd2FpdCBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGFsbE9wdGlvbnNSYW5nZSk7XG4gIGNvbnN0IGxhc3RJZE51bSA9IGFsbE9wdGlvbklkc0RhdGEubGVuZ3RoID4gMCBcbiAgICAgID8gTWF0aC5tYXgoLi4uYWxsT3B0aW9uSWRzRGF0YS5tYXAocm93ID0+IHBhcnNlSW50KChyb3dbMF0gfHwgJ28wJykucmVwbGFjZSgnbycsICcnKSwgMTApKS5maWx0ZXIobnVtID0+ICFpc05hTihudW0pKSlcbiAgICAgIDogMDtcblxuICBjb25zdCBuZXdJZCA9IGBvJHsobGFzdElkTnVtICsgMSkudG9TdHJpbmcoKS5wYWRTdGFydCgzLCAnMCcpfWA7XG4gIFxuICBjb25zdCB2YWx1ZXMgPSBbW1xuICAgIG5ld0lkLCBcbiAgICByZXEubWVudUl0ZW1JZCwgXG4gICAgcmVxLmdyb3VwTmFtZSwgXG4gICAgcmVxLmNob2ljZU5hbWUsIFxuICAgIHJlcS5wcmljZURlbHRhLCBcbiAgICByZXEuaXNEZWZhdWx0ID8gJ1RSVUUnIDogJ0ZBTFNFJ1xuICBdXTtcblxuICBhd2FpdCBhcHBlbmRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIHJhbmdlLCB2YWx1ZXMpO1xuXG4gIC8vIElmIHRoZSBuZXcgb3B0aW9uIHdhcyBzZXQgdG8gZGVmYXVsdCwgZW5zdXJlIGl0IGlzIG5vdyB0aGUgb25seSBkZWZhdWx0IG9uZVxuICBpZihyZXEuaXNEZWZhdWx0KSB7XG4gICAgICBhd2FpdCBzZXRNZW51T3B0aW9uRGVmYXVsdCh7IG9wdGlvbklkOiBuZXdJZCwgbWVudUl0ZW1JZDogcmVxLm1lbnVJdGVtSWQsIGdyb3VwTmFtZTogcmVxLmdyb3VwTmFtZSB9KTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbn1cblxuXG5leHBvcnQgdHlwZSBEZWxldGVNZW51T3B0aW9uUmVxdWVzdCA9IHtcbiAgb3B0aW9uSWQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZU1lbnVPcHRpb24ocmVxOiBEZWxldGVNZW51T3B0aW9uUmVxdWVzdCk6IFByb21pc2U8eyBzdWNjZXNzOiBib29sZWFuIH0+IHtcbiAgY29uc3QgcmFuZ2UgPSBgJHtNRU5VX09QVElPTlNfU0hFRVRfTkFNRX0hQTI6RmA7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIHJhbmdlKTtcblxuICBpZiAoIWRhdGEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIuaJvuS4jeWIsOiPnOWWrumBuOmgheizh+aWmeOAglwiKTtcbiAgfVxuICBcbiAgY29uc3Qgcm93SW5kZXggPSBkYXRhLmZpbmRJbmRleChyb3cgPT4gcm93WzBdID09PSByZXEub3B0aW9uSWQpO1xuICBcbiAgaWYgKHJvd0luZGV4ID09PSAtMSkge1xuICAgICAgY29uc29sZS5sb2coYOaJvuS4jeWIsCBJRCDngrogJHtyZXEub3B0aW9uSWR9IOeahOiPnOWWrumBuOmgheOAgmApO1xuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UgfTsgLy8gSXRlbSBub3QgZm91bmRcbiAgfVxuXG4gIGNvbnN0IHJvd1RvRGVsZXRlID0gcm93SW5kZXggKyAyOyBcbiAgY29uc3QgY2xlYXJSYW5nZSA9IGAke01FTlVfT1BUSU9OU19TSEVFVF9OQU1FfSFBJHtyb3dUb0RlbGV0ZX06RiR7cm93VG9EZWxldGV9YDtcblxuICBhd2FpdCBjbGVhclNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgY2xlYXJSYW5nZSk7XG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbn1cblxuZXhwb3J0IHR5cGUgU2V0TWVudU9wdGlvbkRlZmF1bHRSZXF1ZXN0ID0ge1xuICBvcHRpb25JZDogc3RyaW5nOyAvLyBUaGUgb3B0aW9uIHRvIHNldCBhcyBkZWZhdWx0LiBJZiBlbXB0eSwgYWxsIG9wdGlvbnMgaW4gZ3JvdXAgd2lsbCBiZSB1bnNldC5cbiAgbWVudUl0ZW1JZDogc3RyaW5nO1xuICBncm91cE5hbWU6IHN0cmluZztcbn1cblxuLyoqXG4gKiBTZXRzIGEgc3BlY2lmaWMgb3B0aW9uIGFzIHRoZSBkZWZhdWx0IGZvciBpdHMgZ3JvdXAsIHVuc2V0dGluZyBhbnkgcHJldmlvdXMgZGVmYXVsdC5cbiAqIEBwYXJhbSByZXEgVGhlIHJlcXVlc3QgY29udGFpbmluZyBvcHRpb24sIG1lbnUgaXRlbSwgYW5kIGdyb3VwIGlkZW50aWZpZXJzLlxuICogQHJldHVybnMgQSBzdWNjZXNzIGZsYWcuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZXRNZW51T3B0aW9uRGVmYXVsdChyZXE6IFNldE1lbnVPcHRpb25EZWZhdWx0UmVxdWVzdCk6IFByb21pc2U8eyBzdWNjZXNzOiBib29sZWFuIH0+IHtcbiAgICBjb25zdCB7IG9wdGlvbklkLCBtZW51SXRlbUlkLCBncm91cE5hbWUgfSA9IHJlcTtcbiAgICBjb25zdCByYW5nZSA9IGAke01FTlVfT1BUSU9OU19TSEVFVF9OQU1FfSFBMjpGYDtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0U2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCByYW5nZSk7XG5cbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwi5om+5LiN5Yiw6I+c5Zau6YG46aCF6LOH5paZ44CCXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IHVwZGF0ZXMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3Qgcm93ID0gZGF0YVtpXTtcbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIG9wdGlvbiBiZWxvbmdzIHRvIHRoZSBzYW1lIG1lbnUgaXRlbSBhbmQgZ3JvdXBcbiAgICAgICAgaWYgKHJvd1sxXSA9PT0gbWVudUl0ZW1JZCAmJiByb3dbMl0gPT09IGdyb3VwTmFtZSkge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudE9wdGlvbklkID0gcm93WzBdO1xuICAgICAgICAgICAgY29uc3QgaXNDdXJyZW50bHlEZWZhdWx0ID0gcm93WzVdID09PSAnVFJVRSc7XG4gICAgICAgICAgICBjb25zdCBzaG91bGRCZURlZmF1bHQgPSBjdXJyZW50T3B0aW9uSWQgPT09IG9wdGlvbklkO1xuXG4gICAgICAgICAgICAvLyBJZiB0aGlzIHJvdyBuZWVkcyB0byBjaGFuZ2UgaXRzIGRlZmF1bHQgc3RhdHVzXG4gICAgICAgICAgICBpZiAoaXNDdXJyZW50bHlEZWZhdWx0ICE9PSBzaG91bGRCZURlZmF1bHQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByb3dUb1VwZGF0ZSA9IGkgKyAyOyAvLyArMiBiZWNhdXNlIHNoZWV0IGlzIDEtaW5kZXhlZCBhbmQgd2Ugc2tpcHBlZCBoZWFkZXJcbiAgICAgICAgICAgICAgICB1cGRhdGVzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICByYW5nZTogYCR7TUVOVV9PUFRJT05TX1NIRUVUX05BTUV9IUYke3Jvd1RvVXBkYXRlfWAsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlczogW1tzaG91bGRCZURlZmF1bHQgPyAnVFJVRScgOiAnRkFMU0UnXV0sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodXBkYXRlcy5sZW5ndGggPiAwKSB7XG4gICAgICBmb3IgKGNvbnN0IHVwZGF0ZSBvZiB1cGRhdGVzKSB7XG4gICAgICAgICAgYXdhaXQgdXBkYXRlU2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCB1cGRhdGUucmFuZ2UsIHVwZGF0ZS52YWx1ZXMpO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6InFTQXVDc0IifQ==
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/ai/flows/data:0947c2 [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"40a07cd863198c77f598c8ed541dd16aa8d2fca557":"addMenuItem"},"src/ai/flows/menu-flow.ts",""] */ __turbopack_context__.s({
    "addMenuItem": (()=>addMenuItem)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var addMenuItem = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40a07cd863198c77f598c8ed541dd16aa8d2fca557", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "addMenuItem"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vbWVudS1mbG93LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuJ3VzZSBzZXJ2ZXInO1xuLyoqXG4gKiBAZmlsZU92ZXJ2aWV3IEZsb3cgZm9yIGhhbmRsaW5nIG1lbnUgZGF0YSBmcm9tIEdvb2dsZSBTaGVldHMuXG4gKi9cbmltcG9ydCB7IGdldFNoZWV0RGF0YSwgYXBwZW5kU2hlZXREYXRhLCBjbGVhclNoZWV0RGF0YSwgdXBkYXRlU2hlZXREYXRhIH0gZnJvbSAnQC9zZXJ2aWNlcy9zaGVldC1zZXJ2aWNlJztcbmltcG9ydCB7IHogfSBmcm9tICd6b2QnO1xuXG4vLyBUaGUgSUQgb2YgeW91ciBHb29nbGUgU2hlZXRcbmNvbnN0IFNQUkVBRFNIRUVUX0lEID0gJzFaajJoMGNZbHJiMm1CYU5nbDEtUG9PSzd0bENDd0RjY0FYbjV3NjZocDRjJztcbmNvbnN0IE1FTlVfU0hFRVRfTkFNRSA9ICdtZW51cyc7XG5jb25zdCBNRU5VX09QVElPTlNfU0hFRVRfTkFNRSA9ICdtZW51X29wdGlvbnMnO1xuXG5leHBvcnQgdHlwZSBNZW51T3B0aW9uQ2hvaWNlID0ge1xuICBpZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIHByaWNlRGVsdGE6IG51bWJlcjtcbiAgaXNEZWZhdWx0OiBib29sZWFuO1xufVxuXG5leHBvcnQgdHlwZSBNZW51T3B0aW9uR3JvdXAgPSB7XG4gIG5hbWU6IHN0cmluZztcbiAgY2hvaWNlczogTWVudU9wdGlvbkNob2ljZVtdO1xufVxuXG5leHBvcnQgdHlwZSBNZW51SXRlbSA9IHtcbiAgaWQ6IHN0cmluZztcbiAgdmVuZG9ySWQ6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBwcmljZTogbnVtYmVyO1xuICBpc0FjdGl2ZTogYm9vbGVhbjtcbiAgb3B0aW9ucz86IE1lbnVPcHRpb25Hcm91cFtdO1xufTtcblxuLyoqXG4gKiBSZXRyaWV2ZXMgYWxsIG1lbnUgaXRlbXMgZm9yIGEgZ2l2ZW4gdmVuZG9yIGZyb20gdGhlICdtZW51cycgc2hlZXQsIGluY2x1ZGluZyB0aGVpciBvcHRpb25zLlxuICogQHBhcmFtIHtzdHJpbmd9IHZlbmRvcklkIFRoZSBJRCBvZiB0aGUgdmVuZG9yLlxuICogQHJldHVybnMge1Byb21pc2U8TWVudUl0ZW1bXT59IEEgbGlzdCBvZiBtZW51IGl0ZW1zIHdpdGggdGhlaXIgb3B0aW9ucy5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE1lbnVzQnlWZW5kb3JJZCh2ZW5kb3JJZDogc3RyaW5nKTogUHJvbWlzZTxNZW51SXRlbVtdPiB7XG4gIHRyeSB7XG4gICAgY29uc3QgbWVudVNoZWV0RGF0YSA9IGF3YWl0IGdldFNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgTUVOVV9TSEVFVF9OQU1FKTtcbiAgICBjb25zdCBvcHRpb25zU2hlZXREYXRhID0gYXdhaXQgZ2V0U2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCBNRU5VX09QVElPTlNfU0hFRVRfTkFNRSk7XG4gICAgXG4gICAgaWYgKCFtZW51U2hlZXREYXRhIHx8IG1lbnVTaGVldERhdGEubGVuZ3RoIDwgMikge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIGNvbnN0IG1lbnVIZWFkZXJzID0gbWVudVNoZWV0RGF0YVswXTtcbiAgICBjb25zdCBtZW51Um93cyA9IG1lbnVTaGVldERhdGEuc2xpY2UoMSk7XG5cbiAgICBjb25zdCBoZWFkZXJNYXAgPSBtZW51SGVhZGVycy5yZWR1Y2UoKGFjYywgaGVhZGVyLCBpbmRleCkgPT4ge1xuICAgICAgICBhY2NbaGVhZGVyXSA9IGluZGV4O1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgIH0sIHt9IGFzIFJlY29yZDxzdHJpbmcsIG51bWJlcj4pO1xuXG5cbiAgICBjb25zdCBhbGxJdGVtczogTWVudUl0ZW1bXSA9IG1lbnVSb3dzXG4gICAgICAuZmlsdGVyKHJvdyA9PiByb3cubGVuZ3RoID4gMCAmJiByb3dbaGVhZGVyTWFwWyd2ZW5kb3JJZCddXSA9PT0gdmVuZG9ySWQgJiYgcm93W2hlYWRlck1hcFsnaXNBY3RpdmUnXV0gPT09ICdUUlVFJylcbiAgICAgIC5tYXAocm93ID0+ICh7XG4gICAgICAgIGlkOiByb3dbaGVhZGVyTWFwWydpZCddXSB8fCAnJyxcbiAgICAgICAgdmVuZG9ySWQ6IHJvd1toZWFkZXJNYXBbJ3ZlbmRvcklkJ11dIHx8ICcnLFxuICAgICAgICBuYW1lOiByb3dbaGVhZGVyTWFwWyduYW1lJ11dIHx8ICcnLFxuICAgICAgICBwcmljZTogcGFyc2VJbnQocm93W2hlYWRlck1hcFsncHJpY2UnXV0gfHwgJzAnLCAxMCksXG4gICAgICAgIGlzQWN0aXZlOiByb3dbaGVhZGVyTWFwWydpc0FjdGl2ZSddXSA9PT0gJ1RSVUUnLFxuICAgICAgICBvcHRpb25zOiBbXSxcbiAgICAgIH0pKTtcbiAgICAgIFxuICAgIGlmIChvcHRpb25zU2hlZXREYXRhICYmIG9wdGlvbnNTaGVldERhdGEubGVuZ3RoID4gMSkge1xuICAgICAgY29uc3Qgb3B0aW9uc0hlYWRlcnMgPSBvcHRpb25zU2hlZXREYXRhWzBdO1xuICAgICAgY29uc3Qgb3B0aW9uc1Jvd3MgPSBvcHRpb25zU2hlZXREYXRhLnNsaWNlKDEpO1xuICAgICAgY29uc3Qgb3B0aW9uc0hlYWRlck1hcCA9IG9wdGlvbnNIZWFkZXJzLnJlZHVjZSgoYWNjLCBoZWFkZXIsIGluZGV4KSA9PiB7XG4gICAgICAgICAgYWNjW2hlYWRlcl0gPSBpbmRleDtcbiAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgfSwge30gYXMgUmVjb3JkPHN0cmluZywgbnVtYmVyPik7XG5cblxuICAgICAgY29uc3QgYWxsT3B0aW9ucyA9IG9wdGlvbnNSb3dzLm1hcChyb3cgPT4gKHtcbiAgICAgICAgaWQ6IHJvd1tvcHRpb25zSGVhZGVyTWFwWydpZCddXSB8fCAnJyxcbiAgICAgICAgbWVudUl0ZW1JZDogcm93W29wdGlvbnNIZWFkZXJNYXBbJ21lbnVJdGVtSWQnXV0gfHwgJycsXG4gICAgICAgIGdyb3VwTmFtZTogcm93W29wdGlvbnNIZWFkZXJNYXBbJ2dyb3VwTmFtZSddXSB8fCAnJyxcbiAgICAgICAgY2hvaWNlTmFtZTogcm93W29wdGlvbnNIZWFkZXJNYXBbJ2Nob2ljZU5hbWUnXV0gfHwgJycsXG4gICAgICAgIHByaWNlRGVsdGE6IHBhcnNlSW50KHJvd1tvcHRpb25zSGVhZGVyTWFwWydwcmljZURlbHRhJ11dIHx8ICcwJywgMTApLFxuICAgICAgICBpc0RlZmF1bHQ6IHJvd1tvcHRpb25zSGVhZGVyTWFwWydpc0RlZmF1bHQnXV0gPT09ICdUUlVFJyxcbiAgICAgIH0pKTtcblxuICAgICAgLy8gR3JvdXAgb3B0aW9ucyBieSBtZW51IGl0ZW0gSURcbiAgICAgIGNvbnN0IG9wdGlvbnNCeU1lbnVJdGVtID0gYWxsT3B0aW9ucy5yZWR1Y2UoKGFjYywgb3B0aW9uKSA9PiB7XG4gICAgICAgIGlmICghYWNjW29wdGlvbi5tZW51SXRlbUlkXSkge1xuICAgICAgICAgIGFjY1tvcHRpb24ubWVudUl0ZW1JZF0gPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBhY2Nbb3B0aW9uLm1lbnVJdGVtSWRdLnB1c2gob3B0aW9uKTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH0sIHt9IGFzIFJlY29yZDxzdHJpbmcsIHR5cGVvZiBhbGxPcHRpb25zPik7XG5cblxuICAgICAgLy8gQXR0YWNoIG9wdGlvbnMgdG8gbWVudSBpdGVtc1xuICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGFsbEl0ZW1zKSB7XG4gICAgICAgIGlmIChvcHRpb25zQnlNZW51SXRlbVtpdGVtLmlkXSkge1xuICAgICAgICAgIGNvbnN0IGl0ZW1PcHRpb25zID0gb3B0aW9uc0J5TWVudUl0ZW1baXRlbS5pZF07XG4gICAgICAgICAgY29uc3QgZ3JvdXBzID0gaXRlbU9wdGlvbnMucmVkdWNlKChhY2MsIG9wdGlvbikgPT4ge1xuICAgICAgICAgICAgaWYgKCFhY2Nbb3B0aW9uLmdyb3VwTmFtZV0pIHtcbiAgICAgICAgICAgICAgYWNjW29wdGlvbi5ncm91cE5hbWVdID0geyBuYW1lOiBvcHRpb24uZ3JvdXBOYW1lLCBjaG9pY2VzOiBbXSB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYWNjW29wdGlvbi5ncm91cE5hbWVdLmNob2ljZXMucHVzaCh7XG4gICAgICAgICAgICAgIGlkOiBvcHRpb24uaWQsXG4gICAgICAgICAgICAgIG5hbWU6IG9wdGlvbi5jaG9pY2VOYW1lLFxuICAgICAgICAgICAgICBwcmljZURlbHRhOiBvcHRpb24ucHJpY2VEZWx0YSxcbiAgICAgICAgICAgICAgaXNEZWZhdWx0OiBvcHRpb24uaXNEZWZhdWx0LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgIH0sIHt9IGFzIFJlY29yZDxzdHJpbmcsIE1lbnVPcHRpb25Hcm91cD4pO1xuICAgICAgICAgIGl0ZW0ub3B0aW9ucyA9IE9iamVjdC52YWx1ZXMoZ3JvdXBzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICByZXR1cm4gYWxsSXRlbXM7XG5cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwi6K6A5Y+W6I+c5Zau5aSx5pWXOlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIFtdO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIEFkZE1lbnVJdGVtUmVxdWVzdCA9IHtcbiAgdmVuZG9ySWQ6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBwcmljZTogbnVtYmVyO1xufTtcblxuLyoqXG4gKiBBZGRzIGEgbmV3IG1lbnUgaXRlbSB0byB0aGUgJ21lbnVzJyBzaGVldC5cbiAqIEBwYXJhbSB7QWRkTWVudUl0ZW1SZXF1ZXN0fSBpdGVtIC0gVGhlIG1lbnUgaXRlbSBkYXRhIHRvIGFkZC5cbiAqIEByZXR1cm5zIHtQcm9taXNlPHtzdWNjZXNzOiBib29sZWFufT59IEEgc3VjY2VzcyBmbGFnLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkTWVudUl0ZW0oaXRlbTogQWRkTWVudUl0ZW1SZXF1ZXN0KTogUHJvbWlzZTx7IHN1Y2Nlc3M6IGJvb2xlYW4gfT4ge1xuICBjb25zdCBBZGRNZW51SXRlbVNjaGVtYSA9IHoub2JqZWN0KHtcbiAgICB2ZW5kb3JJZDogei5zdHJpbmcoKSxcbiAgICBuYW1lOiB6LnN0cmluZygpLm1pbigxLCBcIuWTgemgheWQjeeoseS4jeiDveeCuuepulwiKSxcbiAgICBwcmljZTogei5udW1iZXIoKS5wb3NpdGl2ZShcIuWDueagvOW/hemgiOaYr+ato+aVuFwiKSxcbiAgfSk7XG5cbiAgY29uc3QgdmFsaWRhdGlvbiA9IEFkZE1lbnVJdGVtU2NoZW1hLnNhZmVQYXJzZShpdGVtKTtcbiAgaWYgKCF2YWxpZGF0aW9uLnN1Y2Nlc3MpIHtcbiAgICAgIGNvbnN0IGEgPSB2YWxpZGF0aW9uLmVycm9yLmZvcm1hdCgpLl9lcnJvcnMuam9pbignLCAnKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcihg6Ly45YWl6LOH5paZ5pyJ6KqkOiAke2F9YCk7XG4gIH1cblxuICBjb25zdCByYW5nZSA9IGAke01FTlVfU0hFRVRfTkFNRX0hQTpFYDtcbiAgY29uc3QgYWxsTWVudXNSYW5nZSA9IGAke01FTlVfU0hFRVRfTkFNRX0hQTI6QWA7XG4gIFxuICBjb25zdCBhbGxNZW51SWRzRGF0YSA9IGF3YWl0IGdldFNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgYWxsTWVudXNSYW5nZSk7XG4gIGNvbnN0IGxhc3RJZE51bSA9IGFsbE1lbnVJZHNEYXRhLmxlbmd0aCA+IDAgXG4gICAgICA/IE1hdGgubWF4KC4uLmFsbE1lbnVJZHNEYXRhLm1hcChyb3cgPT4gcGFyc2VJbnQoKHJvd1swXSB8fCAnbTAnKS5yZXBsYWNlKCdtJywgJycpLCAxMCkpLmZpbHRlcihudW0gPT4gIWlzTmFOKG51bSkpKVxuICAgICAgOiAwO1xuXG4gIGNvbnN0IG5ld0lkID0gYG0keyhsYXN0SWROdW0gKyAxKS50b1N0cmluZygpLnBhZFN0YXJ0KDMsICcwJyl9YDtcbiAgXG4gIGNvbnN0IHZhbHVlcyA9IFtcbiAgICBbbmV3SWQsIGl0ZW0udmVuZG9ySWQsIGl0ZW0ubmFtZSwgaXRlbS5wcmljZSwgJ1RSVUUnXSxcbiAgXTtcblxuICBhd2FpdCBhcHBlbmRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIHJhbmdlLCB2YWx1ZXMpO1xuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG59XG5cbmV4cG9ydCB0eXBlIFVwZGF0ZU1lbnVJdGVtUmVxdWVzdCA9IHtcbiAgICBpZDogc3RyaW5nO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBwcmljZTogbnVtYmVyO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlTWVudUl0ZW0oaXRlbTogVXBkYXRlTWVudUl0ZW1SZXF1ZXN0KTogUHJvbWlzZTx7IHN1Y2Nlc3M6IGJvb2xlYW4gfT4ge1xuICAgIGNvbnN0IHJhbmdlID0gYCR7TUVOVV9TSEVFVF9OQU1FfSFBMjpFYDtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0U2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCByYW5nZSk7XG5cbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwi5om+5LiN5Yiw6I+c5Zau6LOH5paZ44CCXCIpO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCByb3dJbmRleCA9IGRhdGEuZmluZEluZGV4KHJvdyA9PiByb3dbMF0gPT09IGl0ZW0uaWQpO1xuICAgIGlmIChyb3dJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGDmib7kuI3liLAgSUQg54K6ICR7aXRlbS5pZH0g55qE6I+c5Zau5ZOB6aCF44CCYCk7XG4gICAgfVxuXG4gICAgY29uc3Qgcm93VG9VcGRhdGUgPSByb3dJbmRleCArIDI7XG4gICAgY29uc3QgdXBkYXRlUmFuZ2UgPSBgJHtNRU5VX1NIRUVUX05BTUV9IUMke3Jvd1RvVXBkYXRlfTpFJHtyb3dUb1VwZGF0ZX1gO1xuICAgIGNvbnN0IHZhbHVlcyA9IFtbaXRlbS5uYW1lLCBpdGVtLnByaWNlLCAnVFJVRSddXTtcblxuICAgIGF3YWl0IHVwZGF0ZVNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgdXBkYXRlUmFuZ2UsIHZhbHVlcyk7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xufVxuXG5leHBvcnQgdHlwZSBEZWxldGVNZW51SXRlbVJlcXVlc3QgPSB7XG4gICAgaWQ6IHN0cmluZztcbn07XG5cbi8qKlxuICogRGVsZXRlcyBhIG1lbnUgaXRlbSBmcm9tIHRoZSAnbWVudXMnIHNoZWV0IGJ5IGl0cyBJRC5cbiAqIEBwYXJhbSB7RGVsZXRlTWVudUl0ZW1SZXF1ZXN0fSByZXEgLSBUaGUgcmVxdWVzdCBjb250YWluaW5nIHRoZSBpdGVtIElEIHRvIGRlbGV0ZS5cbiAqIEByZXR1cm5zIHtQcm9taXNlPHtzdWNjZXNzOiBib29sZWFufT59IEEgc3VjY2VzcyBmbGFnLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlTWVudUl0ZW0ocmVxOiBEZWxldGVNZW51SXRlbVJlcXVlc3QpOiBQcm9taXNlPHsgc3VjY2VzczogYm9vbGVhbiB9PiB7XG4gICAgY29uc3QgcmFuZ2UgPSBgJHtNRU5VX1NIRUVUX05BTUV9IUEyOkVgO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIHJhbmdlKTtcblxuICAgIGlmICghZGF0YSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCLmib7kuI3liLDoj5zllq7os4fmlpnjgIJcIik7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IHJvd0luZGV4ID0gZGF0YS5maW5kSW5kZXgocm93ID0+IHJvd1swXSA9PT0gcmVxLmlkKTtcbiAgICBcbiAgICBpZiAocm93SW5kZXggPT09IC0xKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGDmib7kuI3liLAgSUQg54K6ICR7cmVxLmlkfSDnmoToj5zllq7lk4HpoIXjgIJgKTtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UgfTsgLy8gSXRlbSBub3QgZm91bmRcbiAgICB9XG5cbiAgICAvLyBHb29nbGUgU2hlZXRzIEFQSSByb3cgaW5kaWNlcyBhcmUgMS1iYXNlZC4gU2hlZXQgZGF0YSBzdGFydHMgZnJvbSByb3cgMi5cbiAgICBjb25zdCByb3dUb1VwZGF0ZSA9IHJvd0luZGV4ICsgMjsgXG4gICAgY29uc3QgdXBkYXRlUmFuZ2UgPSBgJHtNRU5VX1NIRUVUX05BTUV9IUUke3Jvd1RvVXBkYXRlfWA7XG4gICAgXG4gICAgYXdhaXQgdXBkYXRlU2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCB1cGRhdGVSYW5nZSwgW1snRkFMU0UnXV0pO1xuICAgIFxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbn1cblxuXG4vLyAtLS0gTWVudSBPcHRpb24gRmxvd3MgLS0tXG5cbmV4cG9ydCB0eXBlIEFkZE1lbnVPcHRpb25SZXF1ZXN0ID0ge1xuICBtZW51SXRlbUlkOiBzdHJpbmc7XG4gIGdyb3VwTmFtZTogc3RyaW5nO1xuICBjaG9pY2VOYW1lOiBzdHJpbmc7XG4gIHByaWNlRGVsdGE6IG51bWJlcjtcbiAgaXNEZWZhdWx0OiBib29sZWFuO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkTWVudU9wdGlvbihyZXE6IEFkZE1lbnVPcHRpb25SZXF1ZXN0KTogUHJvbWlzZTx7IHN1Y2Nlc3M6IGJvb2xlYW4gfT4ge1xuICAvLyBJZiB0aGUgbmV3IG9wdGlvbiBpcyBkZWZhdWx0LCB1bnNldCBvdGhlciBkZWZhdWx0cyBpbiB0aGUgc2FtZSBncm91cC5cbiAgaWYgKHJlcS5pc0RlZmF1bHQpIHtcbiAgICBhd2FpdCBzZXRNZW51T3B0aW9uRGVmYXVsdCh7IG1lbnVJdGVtSWQ6IHJlcS5tZW51SXRlbUlkLCBncm91cE5hbWU6IHJlcS5ncm91cE5hbWUsIG9wdGlvbklkOiAnJyB9KTsgLy8gUGFzcyBlbXB0eSBvcHRpb25JZCB0byB1bnNldCBhbGwsIG5ldyBvbmUgd2lsbCBiZSBzZXRcbiAgfVxuXG4gIGNvbnN0IHJhbmdlID0gYCR7TUVOVV9PUFRJT05TX1NIRUVUX05BTUV9IUE6RmA7XG4gIGNvbnN0IGFsbE9wdGlvbnNSYW5nZSA9IGAke01FTlVfT1BUSU9OU19TSEVFVF9OQU1FfSFBMjpBYDtcbiAgXG4gIGNvbnN0IGFsbE9wdGlvbklkc0RhdGEgPSBhd2FpdCBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGFsbE9wdGlvbnNSYW5nZSk7XG4gIGNvbnN0IGxhc3RJZE51bSA9IGFsbE9wdGlvbklkc0RhdGEubGVuZ3RoID4gMCBcbiAgICAgID8gTWF0aC5tYXgoLi4uYWxsT3B0aW9uSWRzRGF0YS5tYXAocm93ID0+IHBhcnNlSW50KChyb3dbMF0gfHwgJ28wJykucmVwbGFjZSgnbycsICcnKSwgMTApKS5maWx0ZXIobnVtID0+ICFpc05hTihudW0pKSlcbiAgICAgIDogMDtcblxuICBjb25zdCBuZXdJZCA9IGBvJHsobGFzdElkTnVtICsgMSkudG9TdHJpbmcoKS5wYWRTdGFydCgzLCAnMCcpfWA7XG4gIFxuICBjb25zdCB2YWx1ZXMgPSBbW1xuICAgIG5ld0lkLCBcbiAgICByZXEubWVudUl0ZW1JZCwgXG4gICAgcmVxLmdyb3VwTmFtZSwgXG4gICAgcmVxLmNob2ljZU5hbWUsIFxuICAgIHJlcS5wcmljZURlbHRhLCBcbiAgICByZXEuaXNEZWZhdWx0ID8gJ1RSVUUnIDogJ0ZBTFNFJ1xuICBdXTtcblxuICBhd2FpdCBhcHBlbmRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIHJhbmdlLCB2YWx1ZXMpO1xuXG4gIC8vIElmIHRoZSBuZXcgb3B0aW9uIHdhcyBzZXQgdG8gZGVmYXVsdCwgZW5zdXJlIGl0IGlzIG5vdyB0aGUgb25seSBkZWZhdWx0IG9uZVxuICBpZihyZXEuaXNEZWZhdWx0KSB7XG4gICAgICBhd2FpdCBzZXRNZW51T3B0aW9uRGVmYXVsdCh7IG9wdGlvbklkOiBuZXdJZCwgbWVudUl0ZW1JZDogcmVxLm1lbnVJdGVtSWQsIGdyb3VwTmFtZTogcmVxLmdyb3VwTmFtZSB9KTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbn1cblxuXG5leHBvcnQgdHlwZSBEZWxldGVNZW51T3B0aW9uUmVxdWVzdCA9IHtcbiAgb3B0aW9uSWQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZU1lbnVPcHRpb24ocmVxOiBEZWxldGVNZW51T3B0aW9uUmVxdWVzdCk6IFByb21pc2U8eyBzdWNjZXNzOiBib29sZWFuIH0+IHtcbiAgY29uc3QgcmFuZ2UgPSBgJHtNRU5VX09QVElPTlNfU0hFRVRfTkFNRX0hQTI6RmA7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIHJhbmdlKTtcblxuICBpZiAoIWRhdGEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIuaJvuS4jeWIsOiPnOWWrumBuOmgheizh+aWmeOAglwiKTtcbiAgfVxuICBcbiAgY29uc3Qgcm93SW5kZXggPSBkYXRhLmZpbmRJbmRleChyb3cgPT4gcm93WzBdID09PSByZXEub3B0aW9uSWQpO1xuICBcbiAgaWYgKHJvd0luZGV4ID09PSAtMSkge1xuICAgICAgY29uc29sZS5sb2coYOaJvuS4jeWIsCBJRCDngrogJHtyZXEub3B0aW9uSWR9IOeahOiPnOWWrumBuOmgheOAgmApO1xuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UgfTsgLy8gSXRlbSBub3QgZm91bmRcbiAgfVxuXG4gIGNvbnN0IHJvd1RvRGVsZXRlID0gcm93SW5kZXggKyAyOyBcbiAgY29uc3QgY2xlYXJSYW5nZSA9IGAke01FTlVfT1BUSU9OU19TSEVFVF9OQU1FfSFBJHtyb3dUb0RlbGV0ZX06RiR7cm93VG9EZWxldGV9YDtcblxuICBhd2FpdCBjbGVhclNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgY2xlYXJSYW5nZSk7XG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbn1cblxuZXhwb3J0IHR5cGUgU2V0TWVudU9wdGlvbkRlZmF1bHRSZXF1ZXN0ID0ge1xuICBvcHRpb25JZDogc3RyaW5nOyAvLyBUaGUgb3B0aW9uIHRvIHNldCBhcyBkZWZhdWx0LiBJZiBlbXB0eSwgYWxsIG9wdGlvbnMgaW4gZ3JvdXAgd2lsbCBiZSB1bnNldC5cbiAgbWVudUl0ZW1JZDogc3RyaW5nO1xuICBncm91cE5hbWU6IHN0cmluZztcbn1cblxuLyoqXG4gKiBTZXRzIGEgc3BlY2lmaWMgb3B0aW9uIGFzIHRoZSBkZWZhdWx0IGZvciBpdHMgZ3JvdXAsIHVuc2V0dGluZyBhbnkgcHJldmlvdXMgZGVmYXVsdC5cbiAqIEBwYXJhbSByZXEgVGhlIHJlcXVlc3QgY29udGFpbmluZyBvcHRpb24sIG1lbnUgaXRlbSwgYW5kIGdyb3VwIGlkZW50aWZpZXJzLlxuICogQHJldHVybnMgQSBzdWNjZXNzIGZsYWcuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZXRNZW51T3B0aW9uRGVmYXVsdChyZXE6IFNldE1lbnVPcHRpb25EZWZhdWx0UmVxdWVzdCk6IFByb21pc2U8eyBzdWNjZXNzOiBib29sZWFuIH0+IHtcbiAgICBjb25zdCB7IG9wdGlvbklkLCBtZW51SXRlbUlkLCBncm91cE5hbWUgfSA9IHJlcTtcbiAgICBjb25zdCByYW5nZSA9IGAke01FTlVfT1BUSU9OU19TSEVFVF9OQU1FfSFBMjpGYDtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0U2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCByYW5nZSk7XG5cbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwi5om+5LiN5Yiw6I+c5Zau6YG46aCF6LOH5paZ44CCXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IHVwZGF0ZXMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3Qgcm93ID0gZGF0YVtpXTtcbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIG9wdGlvbiBiZWxvbmdzIHRvIHRoZSBzYW1lIG1lbnUgaXRlbSBhbmQgZ3JvdXBcbiAgICAgICAgaWYgKHJvd1sxXSA9PT0gbWVudUl0ZW1JZCAmJiByb3dbMl0gPT09IGdyb3VwTmFtZSkge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudE9wdGlvbklkID0gcm93WzBdO1xuICAgICAgICAgICAgY29uc3QgaXNDdXJyZW50bHlEZWZhdWx0ID0gcm93WzVdID09PSAnVFJVRSc7XG4gICAgICAgICAgICBjb25zdCBzaG91bGRCZURlZmF1bHQgPSBjdXJyZW50T3B0aW9uSWQgPT09IG9wdGlvbklkO1xuXG4gICAgICAgICAgICAvLyBJZiB0aGlzIHJvdyBuZWVkcyB0byBjaGFuZ2UgaXRzIGRlZmF1bHQgc3RhdHVzXG4gICAgICAgICAgICBpZiAoaXNDdXJyZW50bHlEZWZhdWx0ICE9PSBzaG91bGRCZURlZmF1bHQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByb3dUb1VwZGF0ZSA9IGkgKyAyOyAvLyArMiBiZWNhdXNlIHNoZWV0IGlzIDEtaW5kZXhlZCBhbmQgd2Ugc2tpcHBlZCBoZWFkZXJcbiAgICAgICAgICAgICAgICB1cGRhdGVzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICByYW5nZTogYCR7TUVOVV9PUFRJT05TX1NIRUVUX05BTUV9IUYke3Jvd1RvVXBkYXRlfWAsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlczogW1tzaG91bGRCZURlZmF1bHQgPyAnVFJVRScgOiAnRkFMU0UnXV0sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodXBkYXRlcy5sZW5ndGggPiAwKSB7XG4gICAgICBmb3IgKGNvbnN0IHVwZGF0ZSBvZiB1cGRhdGVzKSB7XG4gICAgICAgICAgYXdhaXQgdXBkYXRlU2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCB1cGRhdGUucmFuZ2UsIHVwZGF0ZS52YWx1ZXMpO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjhSQXdJc0IifQ==
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/ai/flows/data:6e24f4 [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"40c94c095377187d2ed2463238dddbeb5912ed8b69":"deleteMenuItem"},"src/ai/flows/menu-flow.ts",""] */ __turbopack_context__.s({
    "deleteMenuItem": (()=>deleteMenuItem)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var deleteMenuItem = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40c94c095377187d2ed2463238dddbeb5912ed8b69", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "deleteMenuItem"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vbWVudS1mbG93LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuJ3VzZSBzZXJ2ZXInO1xuLyoqXG4gKiBAZmlsZU92ZXJ2aWV3IEZsb3cgZm9yIGhhbmRsaW5nIG1lbnUgZGF0YSBmcm9tIEdvb2dsZSBTaGVldHMuXG4gKi9cbmltcG9ydCB7IGdldFNoZWV0RGF0YSwgYXBwZW5kU2hlZXREYXRhLCBjbGVhclNoZWV0RGF0YSwgdXBkYXRlU2hlZXREYXRhIH0gZnJvbSAnQC9zZXJ2aWNlcy9zaGVldC1zZXJ2aWNlJztcbmltcG9ydCB7IHogfSBmcm9tICd6b2QnO1xuXG4vLyBUaGUgSUQgb2YgeW91ciBHb29nbGUgU2hlZXRcbmNvbnN0IFNQUkVBRFNIRUVUX0lEID0gJzFaajJoMGNZbHJiMm1CYU5nbDEtUG9PSzd0bENDd0RjY0FYbjV3NjZocDRjJztcbmNvbnN0IE1FTlVfU0hFRVRfTkFNRSA9ICdtZW51cyc7XG5jb25zdCBNRU5VX09QVElPTlNfU0hFRVRfTkFNRSA9ICdtZW51X29wdGlvbnMnO1xuXG5leHBvcnQgdHlwZSBNZW51T3B0aW9uQ2hvaWNlID0ge1xuICBpZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIHByaWNlRGVsdGE6IG51bWJlcjtcbiAgaXNEZWZhdWx0OiBib29sZWFuO1xufVxuXG5leHBvcnQgdHlwZSBNZW51T3B0aW9uR3JvdXAgPSB7XG4gIG5hbWU6IHN0cmluZztcbiAgY2hvaWNlczogTWVudU9wdGlvbkNob2ljZVtdO1xufVxuXG5leHBvcnQgdHlwZSBNZW51SXRlbSA9IHtcbiAgaWQ6IHN0cmluZztcbiAgdmVuZG9ySWQ6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBwcmljZTogbnVtYmVyO1xuICBpc0FjdGl2ZTogYm9vbGVhbjtcbiAgb3B0aW9ucz86IE1lbnVPcHRpb25Hcm91cFtdO1xufTtcblxuLyoqXG4gKiBSZXRyaWV2ZXMgYWxsIG1lbnUgaXRlbXMgZm9yIGEgZ2l2ZW4gdmVuZG9yIGZyb20gdGhlICdtZW51cycgc2hlZXQsIGluY2x1ZGluZyB0aGVpciBvcHRpb25zLlxuICogQHBhcmFtIHtzdHJpbmd9IHZlbmRvcklkIFRoZSBJRCBvZiB0aGUgdmVuZG9yLlxuICogQHJldHVybnMge1Byb21pc2U8TWVudUl0ZW1bXT59IEEgbGlzdCBvZiBtZW51IGl0ZW1zIHdpdGggdGhlaXIgb3B0aW9ucy5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE1lbnVzQnlWZW5kb3JJZCh2ZW5kb3JJZDogc3RyaW5nKTogUHJvbWlzZTxNZW51SXRlbVtdPiB7XG4gIHRyeSB7XG4gICAgY29uc3QgbWVudVNoZWV0RGF0YSA9IGF3YWl0IGdldFNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgTUVOVV9TSEVFVF9OQU1FKTtcbiAgICBjb25zdCBvcHRpb25zU2hlZXREYXRhID0gYXdhaXQgZ2V0U2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCBNRU5VX09QVElPTlNfU0hFRVRfTkFNRSk7XG4gICAgXG4gICAgaWYgKCFtZW51U2hlZXREYXRhIHx8IG1lbnVTaGVldERhdGEubGVuZ3RoIDwgMikge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIGNvbnN0IG1lbnVIZWFkZXJzID0gbWVudVNoZWV0RGF0YVswXTtcbiAgICBjb25zdCBtZW51Um93cyA9IG1lbnVTaGVldERhdGEuc2xpY2UoMSk7XG5cbiAgICBjb25zdCBoZWFkZXJNYXAgPSBtZW51SGVhZGVycy5yZWR1Y2UoKGFjYywgaGVhZGVyLCBpbmRleCkgPT4ge1xuICAgICAgICBhY2NbaGVhZGVyXSA9IGluZGV4O1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgIH0sIHt9IGFzIFJlY29yZDxzdHJpbmcsIG51bWJlcj4pO1xuXG5cbiAgICBjb25zdCBhbGxJdGVtczogTWVudUl0ZW1bXSA9IG1lbnVSb3dzXG4gICAgICAuZmlsdGVyKHJvdyA9PiByb3cubGVuZ3RoID4gMCAmJiByb3dbaGVhZGVyTWFwWyd2ZW5kb3JJZCddXSA9PT0gdmVuZG9ySWQgJiYgcm93W2hlYWRlck1hcFsnaXNBY3RpdmUnXV0gPT09ICdUUlVFJylcbiAgICAgIC5tYXAocm93ID0+ICh7XG4gICAgICAgIGlkOiByb3dbaGVhZGVyTWFwWydpZCddXSB8fCAnJyxcbiAgICAgICAgdmVuZG9ySWQ6IHJvd1toZWFkZXJNYXBbJ3ZlbmRvcklkJ11dIHx8ICcnLFxuICAgICAgICBuYW1lOiByb3dbaGVhZGVyTWFwWyduYW1lJ11dIHx8ICcnLFxuICAgICAgICBwcmljZTogcGFyc2VJbnQocm93W2hlYWRlck1hcFsncHJpY2UnXV0gfHwgJzAnLCAxMCksXG4gICAgICAgIGlzQWN0aXZlOiByb3dbaGVhZGVyTWFwWydpc0FjdGl2ZSddXSA9PT0gJ1RSVUUnLFxuICAgICAgICBvcHRpb25zOiBbXSxcbiAgICAgIH0pKTtcbiAgICAgIFxuICAgIGlmIChvcHRpb25zU2hlZXREYXRhICYmIG9wdGlvbnNTaGVldERhdGEubGVuZ3RoID4gMSkge1xuICAgICAgY29uc3Qgb3B0aW9uc0hlYWRlcnMgPSBvcHRpb25zU2hlZXREYXRhWzBdO1xuICAgICAgY29uc3Qgb3B0aW9uc1Jvd3MgPSBvcHRpb25zU2hlZXREYXRhLnNsaWNlKDEpO1xuICAgICAgY29uc3Qgb3B0aW9uc0hlYWRlck1hcCA9IG9wdGlvbnNIZWFkZXJzLnJlZHVjZSgoYWNjLCBoZWFkZXIsIGluZGV4KSA9PiB7XG4gICAgICAgICAgYWNjW2hlYWRlcl0gPSBpbmRleDtcbiAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgfSwge30gYXMgUmVjb3JkPHN0cmluZywgbnVtYmVyPik7XG5cblxuICAgICAgY29uc3QgYWxsT3B0aW9ucyA9IG9wdGlvbnNSb3dzLm1hcChyb3cgPT4gKHtcbiAgICAgICAgaWQ6IHJvd1tvcHRpb25zSGVhZGVyTWFwWydpZCddXSB8fCAnJyxcbiAgICAgICAgbWVudUl0ZW1JZDogcm93W29wdGlvbnNIZWFkZXJNYXBbJ21lbnVJdGVtSWQnXV0gfHwgJycsXG4gICAgICAgIGdyb3VwTmFtZTogcm93W29wdGlvbnNIZWFkZXJNYXBbJ2dyb3VwTmFtZSddXSB8fCAnJyxcbiAgICAgICAgY2hvaWNlTmFtZTogcm93W29wdGlvbnNIZWFkZXJNYXBbJ2Nob2ljZU5hbWUnXV0gfHwgJycsXG4gICAgICAgIHByaWNlRGVsdGE6IHBhcnNlSW50KHJvd1tvcHRpb25zSGVhZGVyTWFwWydwcmljZURlbHRhJ11dIHx8ICcwJywgMTApLFxuICAgICAgICBpc0RlZmF1bHQ6IHJvd1tvcHRpb25zSGVhZGVyTWFwWydpc0RlZmF1bHQnXV0gPT09ICdUUlVFJyxcbiAgICAgIH0pKTtcblxuICAgICAgLy8gR3JvdXAgb3B0aW9ucyBieSBtZW51IGl0ZW0gSURcbiAgICAgIGNvbnN0IG9wdGlvbnNCeU1lbnVJdGVtID0gYWxsT3B0aW9ucy5yZWR1Y2UoKGFjYywgb3B0aW9uKSA9PiB7XG4gICAgICAgIGlmICghYWNjW29wdGlvbi5tZW51SXRlbUlkXSkge1xuICAgICAgICAgIGFjY1tvcHRpb24ubWVudUl0ZW1JZF0gPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBhY2Nbb3B0aW9uLm1lbnVJdGVtSWRdLnB1c2gob3B0aW9uKTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH0sIHt9IGFzIFJlY29yZDxzdHJpbmcsIHR5cGVvZiBhbGxPcHRpb25zPik7XG5cblxuICAgICAgLy8gQXR0YWNoIG9wdGlvbnMgdG8gbWVudSBpdGVtc1xuICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGFsbEl0ZW1zKSB7XG4gICAgICAgIGlmIChvcHRpb25zQnlNZW51SXRlbVtpdGVtLmlkXSkge1xuICAgICAgICAgIGNvbnN0IGl0ZW1PcHRpb25zID0gb3B0aW9uc0J5TWVudUl0ZW1baXRlbS5pZF07XG4gICAgICAgICAgY29uc3QgZ3JvdXBzID0gaXRlbU9wdGlvbnMucmVkdWNlKChhY2MsIG9wdGlvbikgPT4ge1xuICAgICAgICAgICAgaWYgKCFhY2Nbb3B0aW9uLmdyb3VwTmFtZV0pIHtcbiAgICAgICAgICAgICAgYWNjW29wdGlvbi5ncm91cE5hbWVdID0geyBuYW1lOiBvcHRpb24uZ3JvdXBOYW1lLCBjaG9pY2VzOiBbXSB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYWNjW29wdGlvbi5ncm91cE5hbWVdLmNob2ljZXMucHVzaCh7XG4gICAgICAgICAgICAgIGlkOiBvcHRpb24uaWQsXG4gICAgICAgICAgICAgIG5hbWU6IG9wdGlvbi5jaG9pY2VOYW1lLFxuICAgICAgICAgICAgICBwcmljZURlbHRhOiBvcHRpb24ucHJpY2VEZWx0YSxcbiAgICAgICAgICAgICAgaXNEZWZhdWx0OiBvcHRpb24uaXNEZWZhdWx0LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgIH0sIHt9IGFzIFJlY29yZDxzdHJpbmcsIE1lbnVPcHRpb25Hcm91cD4pO1xuICAgICAgICAgIGl0ZW0ub3B0aW9ucyA9IE9iamVjdC52YWx1ZXMoZ3JvdXBzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICByZXR1cm4gYWxsSXRlbXM7XG5cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwi6K6A5Y+W6I+c5Zau5aSx5pWXOlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIFtdO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIEFkZE1lbnVJdGVtUmVxdWVzdCA9IHtcbiAgdmVuZG9ySWQ6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBwcmljZTogbnVtYmVyO1xufTtcblxuLyoqXG4gKiBBZGRzIGEgbmV3IG1lbnUgaXRlbSB0byB0aGUgJ21lbnVzJyBzaGVldC5cbiAqIEBwYXJhbSB7QWRkTWVudUl0ZW1SZXF1ZXN0fSBpdGVtIC0gVGhlIG1lbnUgaXRlbSBkYXRhIHRvIGFkZC5cbiAqIEByZXR1cm5zIHtQcm9taXNlPHtzdWNjZXNzOiBib29sZWFufT59IEEgc3VjY2VzcyBmbGFnLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkTWVudUl0ZW0oaXRlbTogQWRkTWVudUl0ZW1SZXF1ZXN0KTogUHJvbWlzZTx7IHN1Y2Nlc3M6IGJvb2xlYW4gfT4ge1xuICBjb25zdCBBZGRNZW51SXRlbVNjaGVtYSA9IHoub2JqZWN0KHtcbiAgICB2ZW5kb3JJZDogei5zdHJpbmcoKSxcbiAgICBuYW1lOiB6LnN0cmluZygpLm1pbigxLCBcIuWTgemgheWQjeeoseS4jeiDveeCuuepulwiKSxcbiAgICBwcmljZTogei5udW1iZXIoKS5wb3NpdGl2ZShcIuWDueagvOW/hemgiOaYr+ato+aVuFwiKSxcbiAgfSk7XG5cbiAgY29uc3QgdmFsaWRhdGlvbiA9IEFkZE1lbnVJdGVtU2NoZW1hLnNhZmVQYXJzZShpdGVtKTtcbiAgaWYgKCF2YWxpZGF0aW9uLnN1Y2Nlc3MpIHtcbiAgICAgIGNvbnN0IGEgPSB2YWxpZGF0aW9uLmVycm9yLmZvcm1hdCgpLl9lcnJvcnMuam9pbignLCAnKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcihg6Ly45YWl6LOH5paZ5pyJ6KqkOiAke2F9YCk7XG4gIH1cblxuICBjb25zdCByYW5nZSA9IGAke01FTlVfU0hFRVRfTkFNRX0hQTpFYDtcbiAgY29uc3QgYWxsTWVudXNSYW5nZSA9IGAke01FTlVfU0hFRVRfTkFNRX0hQTI6QWA7XG4gIFxuICBjb25zdCBhbGxNZW51SWRzRGF0YSA9IGF3YWl0IGdldFNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgYWxsTWVudXNSYW5nZSk7XG4gIGNvbnN0IGxhc3RJZE51bSA9IGFsbE1lbnVJZHNEYXRhLmxlbmd0aCA+IDAgXG4gICAgICA/IE1hdGgubWF4KC4uLmFsbE1lbnVJZHNEYXRhLm1hcChyb3cgPT4gcGFyc2VJbnQoKHJvd1swXSB8fCAnbTAnKS5yZXBsYWNlKCdtJywgJycpLCAxMCkpLmZpbHRlcihudW0gPT4gIWlzTmFOKG51bSkpKVxuICAgICAgOiAwO1xuXG4gIGNvbnN0IG5ld0lkID0gYG0keyhsYXN0SWROdW0gKyAxKS50b1N0cmluZygpLnBhZFN0YXJ0KDMsICcwJyl9YDtcbiAgXG4gIGNvbnN0IHZhbHVlcyA9IFtcbiAgICBbbmV3SWQsIGl0ZW0udmVuZG9ySWQsIGl0ZW0ubmFtZSwgaXRlbS5wcmljZSwgJ1RSVUUnXSxcbiAgXTtcblxuICBhd2FpdCBhcHBlbmRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIHJhbmdlLCB2YWx1ZXMpO1xuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG59XG5cbmV4cG9ydCB0eXBlIFVwZGF0ZU1lbnVJdGVtUmVxdWVzdCA9IHtcbiAgICBpZDogc3RyaW5nO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBwcmljZTogbnVtYmVyO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlTWVudUl0ZW0oaXRlbTogVXBkYXRlTWVudUl0ZW1SZXF1ZXN0KTogUHJvbWlzZTx7IHN1Y2Nlc3M6IGJvb2xlYW4gfT4ge1xuICAgIGNvbnN0IHJhbmdlID0gYCR7TUVOVV9TSEVFVF9OQU1FfSFBMjpFYDtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0U2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCByYW5nZSk7XG5cbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwi5om+5LiN5Yiw6I+c5Zau6LOH5paZ44CCXCIpO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCByb3dJbmRleCA9IGRhdGEuZmluZEluZGV4KHJvdyA9PiByb3dbMF0gPT09IGl0ZW0uaWQpO1xuICAgIGlmIChyb3dJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGDmib7kuI3liLAgSUQg54K6ICR7aXRlbS5pZH0g55qE6I+c5Zau5ZOB6aCF44CCYCk7XG4gICAgfVxuXG4gICAgY29uc3Qgcm93VG9VcGRhdGUgPSByb3dJbmRleCArIDI7XG4gICAgY29uc3QgdXBkYXRlUmFuZ2UgPSBgJHtNRU5VX1NIRUVUX05BTUV9IUMke3Jvd1RvVXBkYXRlfTpFJHtyb3dUb1VwZGF0ZX1gO1xuICAgIGNvbnN0IHZhbHVlcyA9IFtbaXRlbS5uYW1lLCBpdGVtLnByaWNlLCAnVFJVRSddXTtcblxuICAgIGF3YWl0IHVwZGF0ZVNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgdXBkYXRlUmFuZ2UsIHZhbHVlcyk7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xufVxuXG5leHBvcnQgdHlwZSBEZWxldGVNZW51SXRlbVJlcXVlc3QgPSB7XG4gICAgaWQ6IHN0cmluZztcbn07XG5cbi8qKlxuICogRGVsZXRlcyBhIG1lbnUgaXRlbSBmcm9tIHRoZSAnbWVudXMnIHNoZWV0IGJ5IGl0cyBJRC5cbiAqIEBwYXJhbSB7RGVsZXRlTWVudUl0ZW1SZXF1ZXN0fSByZXEgLSBUaGUgcmVxdWVzdCBjb250YWluaW5nIHRoZSBpdGVtIElEIHRvIGRlbGV0ZS5cbiAqIEByZXR1cm5zIHtQcm9taXNlPHtzdWNjZXNzOiBib29sZWFufT59IEEgc3VjY2VzcyBmbGFnLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlTWVudUl0ZW0ocmVxOiBEZWxldGVNZW51SXRlbVJlcXVlc3QpOiBQcm9taXNlPHsgc3VjY2VzczogYm9vbGVhbiB9PiB7XG4gICAgY29uc3QgcmFuZ2UgPSBgJHtNRU5VX1NIRUVUX05BTUV9IUEyOkVgO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIHJhbmdlKTtcblxuICAgIGlmICghZGF0YSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCLmib7kuI3liLDoj5zllq7os4fmlpnjgIJcIik7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IHJvd0luZGV4ID0gZGF0YS5maW5kSW5kZXgocm93ID0+IHJvd1swXSA9PT0gcmVxLmlkKTtcbiAgICBcbiAgICBpZiAocm93SW5kZXggPT09IC0xKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGDmib7kuI3liLAgSUQg54K6ICR7cmVxLmlkfSDnmoToj5zllq7lk4HpoIXjgIJgKTtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UgfTsgLy8gSXRlbSBub3QgZm91bmRcbiAgICB9XG5cbiAgICAvLyBHb29nbGUgU2hlZXRzIEFQSSByb3cgaW5kaWNlcyBhcmUgMS1iYXNlZC4gU2hlZXQgZGF0YSBzdGFydHMgZnJvbSByb3cgMi5cbiAgICBjb25zdCByb3dUb1VwZGF0ZSA9IHJvd0luZGV4ICsgMjsgXG4gICAgY29uc3QgdXBkYXRlUmFuZ2UgPSBgJHtNRU5VX1NIRUVUX05BTUV9IUUke3Jvd1RvVXBkYXRlfWA7XG4gICAgXG4gICAgYXdhaXQgdXBkYXRlU2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCB1cGRhdGVSYW5nZSwgW1snRkFMU0UnXV0pO1xuICAgIFxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbn1cblxuXG4vLyAtLS0gTWVudSBPcHRpb24gRmxvd3MgLS0tXG5cbmV4cG9ydCB0eXBlIEFkZE1lbnVPcHRpb25SZXF1ZXN0ID0ge1xuICBtZW51SXRlbUlkOiBzdHJpbmc7XG4gIGdyb3VwTmFtZTogc3RyaW5nO1xuICBjaG9pY2VOYW1lOiBzdHJpbmc7XG4gIHByaWNlRGVsdGE6IG51bWJlcjtcbiAgaXNEZWZhdWx0OiBib29sZWFuO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkTWVudU9wdGlvbihyZXE6IEFkZE1lbnVPcHRpb25SZXF1ZXN0KTogUHJvbWlzZTx7IHN1Y2Nlc3M6IGJvb2xlYW4gfT4ge1xuICAvLyBJZiB0aGUgbmV3IG9wdGlvbiBpcyBkZWZhdWx0LCB1bnNldCBvdGhlciBkZWZhdWx0cyBpbiB0aGUgc2FtZSBncm91cC5cbiAgaWYgKHJlcS5pc0RlZmF1bHQpIHtcbiAgICBhd2FpdCBzZXRNZW51T3B0aW9uRGVmYXVsdCh7IG1lbnVJdGVtSWQ6IHJlcS5tZW51SXRlbUlkLCBncm91cE5hbWU6IHJlcS5ncm91cE5hbWUsIG9wdGlvbklkOiAnJyB9KTsgLy8gUGFzcyBlbXB0eSBvcHRpb25JZCB0byB1bnNldCBhbGwsIG5ldyBvbmUgd2lsbCBiZSBzZXRcbiAgfVxuXG4gIGNvbnN0IHJhbmdlID0gYCR7TUVOVV9PUFRJT05TX1NIRUVUX05BTUV9IUE6RmA7XG4gIGNvbnN0IGFsbE9wdGlvbnNSYW5nZSA9IGAke01FTlVfT1BUSU9OU19TSEVFVF9OQU1FfSFBMjpBYDtcbiAgXG4gIGNvbnN0IGFsbE9wdGlvbklkc0RhdGEgPSBhd2FpdCBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGFsbE9wdGlvbnNSYW5nZSk7XG4gIGNvbnN0IGxhc3RJZE51bSA9IGFsbE9wdGlvbklkc0RhdGEubGVuZ3RoID4gMCBcbiAgICAgID8gTWF0aC5tYXgoLi4uYWxsT3B0aW9uSWRzRGF0YS5tYXAocm93ID0+IHBhcnNlSW50KChyb3dbMF0gfHwgJ28wJykucmVwbGFjZSgnbycsICcnKSwgMTApKS5maWx0ZXIobnVtID0+ICFpc05hTihudW0pKSlcbiAgICAgIDogMDtcblxuICBjb25zdCBuZXdJZCA9IGBvJHsobGFzdElkTnVtICsgMSkudG9TdHJpbmcoKS5wYWRTdGFydCgzLCAnMCcpfWA7XG4gIFxuICBjb25zdCB2YWx1ZXMgPSBbW1xuICAgIG5ld0lkLCBcbiAgICByZXEubWVudUl0ZW1JZCwgXG4gICAgcmVxLmdyb3VwTmFtZSwgXG4gICAgcmVxLmNob2ljZU5hbWUsIFxuICAgIHJlcS5wcmljZURlbHRhLCBcbiAgICByZXEuaXNEZWZhdWx0ID8gJ1RSVUUnIDogJ0ZBTFNFJ1xuICBdXTtcblxuICBhd2FpdCBhcHBlbmRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIHJhbmdlLCB2YWx1ZXMpO1xuXG4gIC8vIElmIHRoZSBuZXcgb3B0aW9uIHdhcyBzZXQgdG8gZGVmYXVsdCwgZW5zdXJlIGl0IGlzIG5vdyB0aGUgb25seSBkZWZhdWx0IG9uZVxuICBpZihyZXEuaXNEZWZhdWx0KSB7XG4gICAgICBhd2FpdCBzZXRNZW51T3B0aW9uRGVmYXVsdCh7IG9wdGlvbklkOiBuZXdJZCwgbWVudUl0ZW1JZDogcmVxLm1lbnVJdGVtSWQsIGdyb3VwTmFtZTogcmVxLmdyb3VwTmFtZSB9KTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbn1cblxuXG5leHBvcnQgdHlwZSBEZWxldGVNZW51T3B0aW9uUmVxdWVzdCA9IHtcbiAgb3B0aW9uSWQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZU1lbnVPcHRpb24ocmVxOiBEZWxldGVNZW51T3B0aW9uUmVxdWVzdCk6IFByb21pc2U8eyBzdWNjZXNzOiBib29sZWFuIH0+IHtcbiAgY29uc3QgcmFuZ2UgPSBgJHtNRU5VX09QVElPTlNfU0hFRVRfTkFNRX0hQTI6RmA7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIHJhbmdlKTtcblxuICBpZiAoIWRhdGEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIuaJvuS4jeWIsOiPnOWWrumBuOmgheizh+aWmeOAglwiKTtcbiAgfVxuICBcbiAgY29uc3Qgcm93SW5kZXggPSBkYXRhLmZpbmRJbmRleChyb3cgPT4gcm93WzBdID09PSByZXEub3B0aW9uSWQpO1xuICBcbiAgaWYgKHJvd0luZGV4ID09PSAtMSkge1xuICAgICAgY29uc29sZS5sb2coYOaJvuS4jeWIsCBJRCDngrogJHtyZXEub3B0aW9uSWR9IOeahOiPnOWWrumBuOmgheOAgmApO1xuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UgfTsgLy8gSXRlbSBub3QgZm91bmRcbiAgfVxuXG4gIGNvbnN0IHJvd1RvRGVsZXRlID0gcm93SW5kZXggKyAyOyBcbiAgY29uc3QgY2xlYXJSYW5nZSA9IGAke01FTlVfT1BUSU9OU19TSEVFVF9OQU1FfSFBJHtyb3dUb0RlbGV0ZX06RiR7cm93VG9EZWxldGV9YDtcblxuICBhd2FpdCBjbGVhclNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgY2xlYXJSYW5nZSk7XG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbn1cblxuZXhwb3J0IHR5cGUgU2V0TWVudU9wdGlvbkRlZmF1bHRSZXF1ZXN0ID0ge1xuICBvcHRpb25JZDogc3RyaW5nOyAvLyBUaGUgb3B0aW9uIHRvIHNldCBhcyBkZWZhdWx0LiBJZiBlbXB0eSwgYWxsIG9wdGlvbnMgaW4gZ3JvdXAgd2lsbCBiZSB1bnNldC5cbiAgbWVudUl0ZW1JZDogc3RyaW5nO1xuICBncm91cE5hbWU6IHN0cmluZztcbn1cblxuLyoqXG4gKiBTZXRzIGEgc3BlY2lmaWMgb3B0aW9uIGFzIHRoZSBkZWZhdWx0IGZvciBpdHMgZ3JvdXAsIHVuc2V0dGluZyBhbnkgcHJldmlvdXMgZGVmYXVsdC5cbiAqIEBwYXJhbSByZXEgVGhlIHJlcXVlc3QgY29udGFpbmluZyBvcHRpb24sIG1lbnUgaXRlbSwgYW5kIGdyb3VwIGlkZW50aWZpZXJzLlxuICogQHJldHVybnMgQSBzdWNjZXNzIGZsYWcuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZXRNZW51T3B0aW9uRGVmYXVsdChyZXE6IFNldE1lbnVPcHRpb25EZWZhdWx0UmVxdWVzdCk6IFByb21pc2U8eyBzdWNjZXNzOiBib29sZWFuIH0+IHtcbiAgICBjb25zdCB7IG9wdGlvbklkLCBtZW51SXRlbUlkLCBncm91cE5hbWUgfSA9IHJlcTtcbiAgICBjb25zdCByYW5nZSA9IGAke01FTlVfT1BUSU9OU19TSEVFVF9OQU1FfSFBMjpGYDtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0U2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCByYW5nZSk7XG5cbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwi5om+5LiN5Yiw6I+c5Zau6YG46aCF6LOH5paZ44CCXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IHVwZGF0ZXMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3Qgcm93ID0gZGF0YVtpXTtcbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIG9wdGlvbiBiZWxvbmdzIHRvIHRoZSBzYW1lIG1lbnUgaXRlbSBhbmQgZ3JvdXBcbiAgICAgICAgaWYgKHJvd1sxXSA9PT0gbWVudUl0ZW1JZCAmJiByb3dbMl0gPT09IGdyb3VwTmFtZSkge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudE9wdGlvbklkID0gcm93WzBdO1xuICAgICAgICAgICAgY29uc3QgaXNDdXJyZW50bHlEZWZhdWx0ID0gcm93WzVdID09PSAnVFJVRSc7XG4gICAgICAgICAgICBjb25zdCBzaG91bGRCZURlZmF1bHQgPSBjdXJyZW50T3B0aW9uSWQgPT09IG9wdGlvbklkO1xuXG4gICAgICAgICAgICAvLyBJZiB0aGlzIHJvdyBuZWVkcyB0byBjaGFuZ2UgaXRzIGRlZmF1bHQgc3RhdHVzXG4gICAgICAgICAgICBpZiAoaXNDdXJyZW50bHlEZWZhdWx0ICE9PSBzaG91bGRCZURlZmF1bHQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByb3dUb1VwZGF0ZSA9IGkgKyAyOyAvLyArMiBiZWNhdXNlIHNoZWV0IGlzIDEtaW5kZXhlZCBhbmQgd2Ugc2tpcHBlZCBoZWFkZXJcbiAgICAgICAgICAgICAgICB1cGRhdGVzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICByYW5nZTogYCR7TUVOVV9PUFRJT05TX1NIRUVUX05BTUV9IUYke3Jvd1RvVXBkYXRlfWAsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlczogW1tzaG91bGRCZURlZmF1bHQgPyAnVFJVRScgOiAnRkFMU0UnXV0sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodXBkYXRlcy5sZW5ndGggPiAwKSB7XG4gICAgICBmb3IgKGNvbnN0IHVwZGF0ZSBvZiB1cGRhdGVzKSB7XG4gICAgICAgICAgYXdhaXQgdXBkYXRlU2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCB1cGRhdGUucmFuZ2UsIHVwZGF0ZS52YWx1ZXMpO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6ImlTQTJNc0IifQ==
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/ai/flows/data:396aef [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"40dfee3107286cb3b684d1c0f08025db31158a006e":"updateMenuItem"},"src/ai/flows/menu-flow.ts",""] */ __turbopack_context__.s({
    "updateMenuItem": (()=>updateMenuItem)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var updateMenuItem = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40dfee3107286cb3b684d1c0f08025db31158a006e", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "updateMenuItem"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vbWVudS1mbG93LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuJ3VzZSBzZXJ2ZXInO1xuLyoqXG4gKiBAZmlsZU92ZXJ2aWV3IEZsb3cgZm9yIGhhbmRsaW5nIG1lbnUgZGF0YSBmcm9tIEdvb2dsZSBTaGVldHMuXG4gKi9cbmltcG9ydCB7IGdldFNoZWV0RGF0YSwgYXBwZW5kU2hlZXREYXRhLCBjbGVhclNoZWV0RGF0YSwgdXBkYXRlU2hlZXREYXRhIH0gZnJvbSAnQC9zZXJ2aWNlcy9zaGVldC1zZXJ2aWNlJztcbmltcG9ydCB7IHogfSBmcm9tICd6b2QnO1xuXG4vLyBUaGUgSUQgb2YgeW91ciBHb29nbGUgU2hlZXRcbmNvbnN0IFNQUkVBRFNIRUVUX0lEID0gJzFaajJoMGNZbHJiMm1CYU5nbDEtUG9PSzd0bENDd0RjY0FYbjV3NjZocDRjJztcbmNvbnN0IE1FTlVfU0hFRVRfTkFNRSA9ICdtZW51cyc7XG5jb25zdCBNRU5VX09QVElPTlNfU0hFRVRfTkFNRSA9ICdtZW51X29wdGlvbnMnO1xuXG5leHBvcnQgdHlwZSBNZW51T3B0aW9uQ2hvaWNlID0ge1xuICBpZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIHByaWNlRGVsdGE6IG51bWJlcjtcbiAgaXNEZWZhdWx0OiBib29sZWFuO1xufVxuXG5leHBvcnQgdHlwZSBNZW51T3B0aW9uR3JvdXAgPSB7XG4gIG5hbWU6IHN0cmluZztcbiAgY2hvaWNlczogTWVudU9wdGlvbkNob2ljZVtdO1xufVxuXG5leHBvcnQgdHlwZSBNZW51SXRlbSA9IHtcbiAgaWQ6IHN0cmluZztcbiAgdmVuZG9ySWQ6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBwcmljZTogbnVtYmVyO1xuICBpc0FjdGl2ZTogYm9vbGVhbjtcbiAgb3B0aW9ucz86IE1lbnVPcHRpb25Hcm91cFtdO1xufTtcblxuLyoqXG4gKiBSZXRyaWV2ZXMgYWxsIG1lbnUgaXRlbXMgZm9yIGEgZ2l2ZW4gdmVuZG9yIGZyb20gdGhlICdtZW51cycgc2hlZXQsIGluY2x1ZGluZyB0aGVpciBvcHRpb25zLlxuICogQHBhcmFtIHtzdHJpbmd9IHZlbmRvcklkIFRoZSBJRCBvZiB0aGUgdmVuZG9yLlxuICogQHJldHVybnMge1Byb21pc2U8TWVudUl0ZW1bXT59IEEgbGlzdCBvZiBtZW51IGl0ZW1zIHdpdGggdGhlaXIgb3B0aW9ucy5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE1lbnVzQnlWZW5kb3JJZCh2ZW5kb3JJZDogc3RyaW5nKTogUHJvbWlzZTxNZW51SXRlbVtdPiB7XG4gIHRyeSB7XG4gICAgY29uc3QgbWVudVNoZWV0RGF0YSA9IGF3YWl0IGdldFNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgTUVOVV9TSEVFVF9OQU1FKTtcbiAgICBjb25zdCBvcHRpb25zU2hlZXREYXRhID0gYXdhaXQgZ2V0U2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCBNRU5VX09QVElPTlNfU0hFRVRfTkFNRSk7XG4gICAgXG4gICAgaWYgKCFtZW51U2hlZXREYXRhIHx8IG1lbnVTaGVldERhdGEubGVuZ3RoIDwgMikge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIGNvbnN0IG1lbnVIZWFkZXJzID0gbWVudVNoZWV0RGF0YVswXTtcbiAgICBjb25zdCBtZW51Um93cyA9IG1lbnVTaGVldERhdGEuc2xpY2UoMSk7XG5cbiAgICBjb25zdCBoZWFkZXJNYXAgPSBtZW51SGVhZGVycy5yZWR1Y2UoKGFjYywgaGVhZGVyLCBpbmRleCkgPT4ge1xuICAgICAgICBhY2NbaGVhZGVyXSA9IGluZGV4O1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgIH0sIHt9IGFzIFJlY29yZDxzdHJpbmcsIG51bWJlcj4pO1xuXG5cbiAgICBjb25zdCBhbGxJdGVtczogTWVudUl0ZW1bXSA9IG1lbnVSb3dzXG4gICAgICAuZmlsdGVyKHJvdyA9PiByb3cubGVuZ3RoID4gMCAmJiByb3dbaGVhZGVyTWFwWyd2ZW5kb3JJZCddXSA9PT0gdmVuZG9ySWQgJiYgcm93W2hlYWRlck1hcFsnaXNBY3RpdmUnXV0gPT09ICdUUlVFJylcbiAgICAgIC5tYXAocm93ID0+ICh7XG4gICAgICAgIGlkOiByb3dbaGVhZGVyTWFwWydpZCddXSB8fCAnJyxcbiAgICAgICAgdmVuZG9ySWQ6IHJvd1toZWFkZXJNYXBbJ3ZlbmRvcklkJ11dIHx8ICcnLFxuICAgICAgICBuYW1lOiByb3dbaGVhZGVyTWFwWyduYW1lJ11dIHx8ICcnLFxuICAgICAgICBwcmljZTogcGFyc2VJbnQocm93W2hlYWRlck1hcFsncHJpY2UnXV0gfHwgJzAnLCAxMCksXG4gICAgICAgIGlzQWN0aXZlOiByb3dbaGVhZGVyTWFwWydpc0FjdGl2ZSddXSA9PT0gJ1RSVUUnLFxuICAgICAgICBvcHRpb25zOiBbXSxcbiAgICAgIH0pKTtcbiAgICAgIFxuICAgIGlmIChvcHRpb25zU2hlZXREYXRhICYmIG9wdGlvbnNTaGVldERhdGEubGVuZ3RoID4gMSkge1xuICAgICAgY29uc3Qgb3B0aW9uc0hlYWRlcnMgPSBvcHRpb25zU2hlZXREYXRhWzBdO1xuICAgICAgY29uc3Qgb3B0aW9uc1Jvd3MgPSBvcHRpb25zU2hlZXREYXRhLnNsaWNlKDEpO1xuICAgICAgY29uc3Qgb3B0aW9uc0hlYWRlck1hcCA9IG9wdGlvbnNIZWFkZXJzLnJlZHVjZSgoYWNjLCBoZWFkZXIsIGluZGV4KSA9PiB7XG4gICAgICAgICAgYWNjW2hlYWRlcl0gPSBpbmRleDtcbiAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgfSwge30gYXMgUmVjb3JkPHN0cmluZywgbnVtYmVyPik7XG5cblxuICAgICAgY29uc3QgYWxsT3B0aW9ucyA9IG9wdGlvbnNSb3dzLm1hcChyb3cgPT4gKHtcbiAgICAgICAgaWQ6IHJvd1tvcHRpb25zSGVhZGVyTWFwWydpZCddXSB8fCAnJyxcbiAgICAgICAgbWVudUl0ZW1JZDogcm93W29wdGlvbnNIZWFkZXJNYXBbJ21lbnVJdGVtSWQnXV0gfHwgJycsXG4gICAgICAgIGdyb3VwTmFtZTogcm93W29wdGlvbnNIZWFkZXJNYXBbJ2dyb3VwTmFtZSddXSB8fCAnJyxcbiAgICAgICAgY2hvaWNlTmFtZTogcm93W29wdGlvbnNIZWFkZXJNYXBbJ2Nob2ljZU5hbWUnXV0gfHwgJycsXG4gICAgICAgIHByaWNlRGVsdGE6IHBhcnNlSW50KHJvd1tvcHRpb25zSGVhZGVyTWFwWydwcmljZURlbHRhJ11dIHx8ICcwJywgMTApLFxuICAgICAgICBpc0RlZmF1bHQ6IHJvd1tvcHRpb25zSGVhZGVyTWFwWydpc0RlZmF1bHQnXV0gPT09ICdUUlVFJyxcbiAgICAgIH0pKTtcblxuICAgICAgLy8gR3JvdXAgb3B0aW9ucyBieSBtZW51IGl0ZW0gSURcbiAgICAgIGNvbnN0IG9wdGlvbnNCeU1lbnVJdGVtID0gYWxsT3B0aW9ucy5yZWR1Y2UoKGFjYywgb3B0aW9uKSA9PiB7XG4gICAgICAgIGlmICghYWNjW29wdGlvbi5tZW51SXRlbUlkXSkge1xuICAgICAgICAgIGFjY1tvcHRpb24ubWVudUl0ZW1JZF0gPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBhY2Nbb3B0aW9uLm1lbnVJdGVtSWRdLnB1c2gob3B0aW9uKTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH0sIHt9IGFzIFJlY29yZDxzdHJpbmcsIHR5cGVvZiBhbGxPcHRpb25zPik7XG5cblxuICAgICAgLy8gQXR0YWNoIG9wdGlvbnMgdG8gbWVudSBpdGVtc1xuICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGFsbEl0ZW1zKSB7XG4gICAgICAgIGlmIChvcHRpb25zQnlNZW51SXRlbVtpdGVtLmlkXSkge1xuICAgICAgICAgIGNvbnN0IGl0ZW1PcHRpb25zID0gb3B0aW9uc0J5TWVudUl0ZW1baXRlbS5pZF07XG4gICAgICAgICAgY29uc3QgZ3JvdXBzID0gaXRlbU9wdGlvbnMucmVkdWNlKChhY2MsIG9wdGlvbikgPT4ge1xuICAgICAgICAgICAgaWYgKCFhY2Nbb3B0aW9uLmdyb3VwTmFtZV0pIHtcbiAgICAgICAgICAgICAgYWNjW29wdGlvbi5ncm91cE5hbWVdID0geyBuYW1lOiBvcHRpb24uZ3JvdXBOYW1lLCBjaG9pY2VzOiBbXSB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYWNjW29wdGlvbi5ncm91cE5hbWVdLmNob2ljZXMucHVzaCh7XG4gICAgICAgICAgICAgIGlkOiBvcHRpb24uaWQsXG4gICAgICAgICAgICAgIG5hbWU6IG9wdGlvbi5jaG9pY2VOYW1lLFxuICAgICAgICAgICAgICBwcmljZURlbHRhOiBvcHRpb24ucHJpY2VEZWx0YSxcbiAgICAgICAgICAgICAgaXNEZWZhdWx0OiBvcHRpb24uaXNEZWZhdWx0LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgIH0sIHt9IGFzIFJlY29yZDxzdHJpbmcsIE1lbnVPcHRpb25Hcm91cD4pO1xuICAgICAgICAgIGl0ZW0ub3B0aW9ucyA9IE9iamVjdC52YWx1ZXMoZ3JvdXBzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICByZXR1cm4gYWxsSXRlbXM7XG5cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwi6K6A5Y+W6I+c5Zau5aSx5pWXOlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIFtdO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIEFkZE1lbnVJdGVtUmVxdWVzdCA9IHtcbiAgdmVuZG9ySWQ6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBwcmljZTogbnVtYmVyO1xufTtcblxuLyoqXG4gKiBBZGRzIGEgbmV3IG1lbnUgaXRlbSB0byB0aGUgJ21lbnVzJyBzaGVldC5cbiAqIEBwYXJhbSB7QWRkTWVudUl0ZW1SZXF1ZXN0fSBpdGVtIC0gVGhlIG1lbnUgaXRlbSBkYXRhIHRvIGFkZC5cbiAqIEByZXR1cm5zIHtQcm9taXNlPHtzdWNjZXNzOiBib29sZWFufT59IEEgc3VjY2VzcyBmbGFnLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkTWVudUl0ZW0oaXRlbTogQWRkTWVudUl0ZW1SZXF1ZXN0KTogUHJvbWlzZTx7IHN1Y2Nlc3M6IGJvb2xlYW4gfT4ge1xuICBjb25zdCBBZGRNZW51SXRlbVNjaGVtYSA9IHoub2JqZWN0KHtcbiAgICB2ZW5kb3JJZDogei5zdHJpbmcoKSxcbiAgICBuYW1lOiB6LnN0cmluZygpLm1pbigxLCBcIuWTgemgheWQjeeoseS4jeiDveeCuuepulwiKSxcbiAgICBwcmljZTogei5udW1iZXIoKS5wb3NpdGl2ZShcIuWDueagvOW/hemgiOaYr+ato+aVuFwiKSxcbiAgfSk7XG5cbiAgY29uc3QgdmFsaWRhdGlvbiA9IEFkZE1lbnVJdGVtU2NoZW1hLnNhZmVQYXJzZShpdGVtKTtcbiAgaWYgKCF2YWxpZGF0aW9uLnN1Y2Nlc3MpIHtcbiAgICAgIGNvbnN0IGEgPSB2YWxpZGF0aW9uLmVycm9yLmZvcm1hdCgpLl9lcnJvcnMuam9pbignLCAnKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcihg6Ly45YWl6LOH5paZ5pyJ6KqkOiAke2F9YCk7XG4gIH1cblxuICBjb25zdCByYW5nZSA9IGAke01FTlVfU0hFRVRfTkFNRX0hQTpFYDtcbiAgY29uc3QgYWxsTWVudXNSYW5nZSA9IGAke01FTlVfU0hFRVRfTkFNRX0hQTI6QWA7XG4gIFxuICBjb25zdCBhbGxNZW51SWRzRGF0YSA9IGF3YWl0IGdldFNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgYWxsTWVudXNSYW5nZSk7XG4gIGNvbnN0IGxhc3RJZE51bSA9IGFsbE1lbnVJZHNEYXRhLmxlbmd0aCA+IDAgXG4gICAgICA/IE1hdGgubWF4KC4uLmFsbE1lbnVJZHNEYXRhLm1hcChyb3cgPT4gcGFyc2VJbnQoKHJvd1swXSB8fCAnbTAnKS5yZXBsYWNlKCdtJywgJycpLCAxMCkpLmZpbHRlcihudW0gPT4gIWlzTmFOKG51bSkpKVxuICAgICAgOiAwO1xuXG4gIGNvbnN0IG5ld0lkID0gYG0keyhsYXN0SWROdW0gKyAxKS50b1N0cmluZygpLnBhZFN0YXJ0KDMsICcwJyl9YDtcbiAgXG4gIGNvbnN0IHZhbHVlcyA9IFtcbiAgICBbbmV3SWQsIGl0ZW0udmVuZG9ySWQsIGl0ZW0ubmFtZSwgaXRlbS5wcmljZSwgJ1RSVUUnXSxcbiAgXTtcblxuICBhd2FpdCBhcHBlbmRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIHJhbmdlLCB2YWx1ZXMpO1xuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG59XG5cbmV4cG9ydCB0eXBlIFVwZGF0ZU1lbnVJdGVtUmVxdWVzdCA9IHtcbiAgICBpZDogc3RyaW5nO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBwcmljZTogbnVtYmVyO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlTWVudUl0ZW0oaXRlbTogVXBkYXRlTWVudUl0ZW1SZXF1ZXN0KTogUHJvbWlzZTx7IHN1Y2Nlc3M6IGJvb2xlYW4gfT4ge1xuICAgIGNvbnN0IHJhbmdlID0gYCR7TUVOVV9TSEVFVF9OQU1FfSFBMjpFYDtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0U2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCByYW5nZSk7XG5cbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwi5om+5LiN5Yiw6I+c5Zau6LOH5paZ44CCXCIpO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCByb3dJbmRleCA9IGRhdGEuZmluZEluZGV4KHJvdyA9PiByb3dbMF0gPT09IGl0ZW0uaWQpO1xuICAgIGlmIChyb3dJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGDmib7kuI3liLAgSUQg54K6ICR7aXRlbS5pZH0g55qE6I+c5Zau5ZOB6aCF44CCYCk7XG4gICAgfVxuXG4gICAgY29uc3Qgcm93VG9VcGRhdGUgPSByb3dJbmRleCArIDI7XG4gICAgY29uc3QgdXBkYXRlUmFuZ2UgPSBgJHtNRU5VX1NIRUVUX05BTUV9IUMke3Jvd1RvVXBkYXRlfTpFJHtyb3dUb1VwZGF0ZX1gO1xuICAgIGNvbnN0IHZhbHVlcyA9IFtbaXRlbS5uYW1lLCBpdGVtLnByaWNlLCAnVFJVRSddXTtcblxuICAgIGF3YWl0IHVwZGF0ZVNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgdXBkYXRlUmFuZ2UsIHZhbHVlcyk7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xufVxuXG5leHBvcnQgdHlwZSBEZWxldGVNZW51SXRlbVJlcXVlc3QgPSB7XG4gICAgaWQ6IHN0cmluZztcbn07XG5cbi8qKlxuICogRGVsZXRlcyBhIG1lbnUgaXRlbSBmcm9tIHRoZSAnbWVudXMnIHNoZWV0IGJ5IGl0cyBJRC5cbiAqIEBwYXJhbSB7RGVsZXRlTWVudUl0ZW1SZXF1ZXN0fSByZXEgLSBUaGUgcmVxdWVzdCBjb250YWluaW5nIHRoZSBpdGVtIElEIHRvIGRlbGV0ZS5cbiAqIEByZXR1cm5zIHtQcm9taXNlPHtzdWNjZXNzOiBib29sZWFufT59IEEgc3VjY2VzcyBmbGFnLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlTWVudUl0ZW0ocmVxOiBEZWxldGVNZW51SXRlbVJlcXVlc3QpOiBQcm9taXNlPHsgc3VjY2VzczogYm9vbGVhbiB9PiB7XG4gICAgY29uc3QgcmFuZ2UgPSBgJHtNRU5VX1NIRUVUX05BTUV9IUEyOkVgO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIHJhbmdlKTtcblxuICAgIGlmICghZGF0YSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCLmib7kuI3liLDoj5zllq7os4fmlpnjgIJcIik7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IHJvd0luZGV4ID0gZGF0YS5maW5kSW5kZXgocm93ID0+IHJvd1swXSA9PT0gcmVxLmlkKTtcbiAgICBcbiAgICBpZiAocm93SW5kZXggPT09IC0xKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGDmib7kuI3liLAgSUQg54K6ICR7cmVxLmlkfSDnmoToj5zllq7lk4HpoIXjgIJgKTtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UgfTsgLy8gSXRlbSBub3QgZm91bmRcbiAgICB9XG5cbiAgICAvLyBHb29nbGUgU2hlZXRzIEFQSSByb3cgaW5kaWNlcyBhcmUgMS1iYXNlZC4gU2hlZXQgZGF0YSBzdGFydHMgZnJvbSByb3cgMi5cbiAgICBjb25zdCByb3dUb1VwZGF0ZSA9IHJvd0luZGV4ICsgMjsgXG4gICAgY29uc3QgdXBkYXRlUmFuZ2UgPSBgJHtNRU5VX1NIRUVUX05BTUV9IUUke3Jvd1RvVXBkYXRlfWA7XG4gICAgXG4gICAgYXdhaXQgdXBkYXRlU2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCB1cGRhdGVSYW5nZSwgW1snRkFMU0UnXV0pO1xuICAgIFxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbn1cblxuXG4vLyAtLS0gTWVudSBPcHRpb24gRmxvd3MgLS0tXG5cbmV4cG9ydCB0eXBlIEFkZE1lbnVPcHRpb25SZXF1ZXN0ID0ge1xuICBtZW51SXRlbUlkOiBzdHJpbmc7XG4gIGdyb3VwTmFtZTogc3RyaW5nO1xuICBjaG9pY2VOYW1lOiBzdHJpbmc7XG4gIHByaWNlRGVsdGE6IG51bWJlcjtcbiAgaXNEZWZhdWx0OiBib29sZWFuO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkTWVudU9wdGlvbihyZXE6IEFkZE1lbnVPcHRpb25SZXF1ZXN0KTogUHJvbWlzZTx7IHN1Y2Nlc3M6IGJvb2xlYW4gfT4ge1xuICAvLyBJZiB0aGUgbmV3IG9wdGlvbiBpcyBkZWZhdWx0LCB1bnNldCBvdGhlciBkZWZhdWx0cyBpbiB0aGUgc2FtZSBncm91cC5cbiAgaWYgKHJlcS5pc0RlZmF1bHQpIHtcbiAgICBhd2FpdCBzZXRNZW51T3B0aW9uRGVmYXVsdCh7IG1lbnVJdGVtSWQ6IHJlcS5tZW51SXRlbUlkLCBncm91cE5hbWU6IHJlcS5ncm91cE5hbWUsIG9wdGlvbklkOiAnJyB9KTsgLy8gUGFzcyBlbXB0eSBvcHRpb25JZCB0byB1bnNldCBhbGwsIG5ldyBvbmUgd2lsbCBiZSBzZXRcbiAgfVxuXG4gIGNvbnN0IHJhbmdlID0gYCR7TUVOVV9PUFRJT05TX1NIRUVUX05BTUV9IUE6RmA7XG4gIGNvbnN0IGFsbE9wdGlvbnNSYW5nZSA9IGAke01FTlVfT1BUSU9OU19TSEVFVF9OQU1FfSFBMjpBYDtcbiAgXG4gIGNvbnN0IGFsbE9wdGlvbklkc0RhdGEgPSBhd2FpdCBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGFsbE9wdGlvbnNSYW5nZSk7XG4gIGNvbnN0IGxhc3RJZE51bSA9IGFsbE9wdGlvbklkc0RhdGEubGVuZ3RoID4gMCBcbiAgICAgID8gTWF0aC5tYXgoLi4uYWxsT3B0aW9uSWRzRGF0YS5tYXAocm93ID0+IHBhcnNlSW50KChyb3dbMF0gfHwgJ28wJykucmVwbGFjZSgnbycsICcnKSwgMTApKS5maWx0ZXIobnVtID0+ICFpc05hTihudW0pKSlcbiAgICAgIDogMDtcblxuICBjb25zdCBuZXdJZCA9IGBvJHsobGFzdElkTnVtICsgMSkudG9TdHJpbmcoKS5wYWRTdGFydCgzLCAnMCcpfWA7XG4gIFxuICBjb25zdCB2YWx1ZXMgPSBbW1xuICAgIG5ld0lkLCBcbiAgICByZXEubWVudUl0ZW1JZCwgXG4gICAgcmVxLmdyb3VwTmFtZSwgXG4gICAgcmVxLmNob2ljZU5hbWUsIFxuICAgIHJlcS5wcmljZURlbHRhLCBcbiAgICByZXEuaXNEZWZhdWx0ID8gJ1RSVUUnIDogJ0ZBTFNFJ1xuICBdXTtcblxuICBhd2FpdCBhcHBlbmRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIHJhbmdlLCB2YWx1ZXMpO1xuXG4gIC8vIElmIHRoZSBuZXcgb3B0aW9uIHdhcyBzZXQgdG8gZGVmYXVsdCwgZW5zdXJlIGl0IGlzIG5vdyB0aGUgb25seSBkZWZhdWx0IG9uZVxuICBpZihyZXEuaXNEZWZhdWx0KSB7XG4gICAgICBhd2FpdCBzZXRNZW51T3B0aW9uRGVmYXVsdCh7IG9wdGlvbklkOiBuZXdJZCwgbWVudUl0ZW1JZDogcmVxLm1lbnVJdGVtSWQsIGdyb3VwTmFtZTogcmVxLmdyb3VwTmFtZSB9KTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbn1cblxuXG5leHBvcnQgdHlwZSBEZWxldGVNZW51T3B0aW9uUmVxdWVzdCA9IHtcbiAgb3B0aW9uSWQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZU1lbnVPcHRpb24ocmVxOiBEZWxldGVNZW51T3B0aW9uUmVxdWVzdCk6IFByb21pc2U8eyBzdWNjZXNzOiBib29sZWFuIH0+IHtcbiAgY29uc3QgcmFuZ2UgPSBgJHtNRU5VX09QVElPTlNfU0hFRVRfTkFNRX0hQTI6RmA7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIHJhbmdlKTtcblxuICBpZiAoIWRhdGEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIuaJvuS4jeWIsOiPnOWWrumBuOmgheizh+aWmeOAglwiKTtcbiAgfVxuICBcbiAgY29uc3Qgcm93SW5kZXggPSBkYXRhLmZpbmRJbmRleChyb3cgPT4gcm93WzBdID09PSByZXEub3B0aW9uSWQpO1xuICBcbiAgaWYgKHJvd0luZGV4ID09PSAtMSkge1xuICAgICAgY29uc29sZS5sb2coYOaJvuS4jeWIsCBJRCDngrogJHtyZXEub3B0aW9uSWR9IOeahOiPnOWWrumBuOmgheOAgmApO1xuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UgfTsgLy8gSXRlbSBub3QgZm91bmRcbiAgfVxuXG4gIGNvbnN0IHJvd1RvRGVsZXRlID0gcm93SW5kZXggKyAyOyBcbiAgY29uc3QgY2xlYXJSYW5nZSA9IGAke01FTlVfT1BUSU9OU19TSEVFVF9OQU1FfSFBJHtyb3dUb0RlbGV0ZX06RiR7cm93VG9EZWxldGV9YDtcblxuICBhd2FpdCBjbGVhclNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgY2xlYXJSYW5nZSk7XG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbn1cblxuZXhwb3J0IHR5cGUgU2V0TWVudU9wdGlvbkRlZmF1bHRSZXF1ZXN0ID0ge1xuICBvcHRpb25JZDogc3RyaW5nOyAvLyBUaGUgb3B0aW9uIHRvIHNldCBhcyBkZWZhdWx0LiBJZiBlbXB0eSwgYWxsIG9wdGlvbnMgaW4gZ3JvdXAgd2lsbCBiZSB1bnNldC5cbiAgbWVudUl0ZW1JZDogc3RyaW5nO1xuICBncm91cE5hbWU6IHN0cmluZztcbn1cblxuLyoqXG4gKiBTZXRzIGEgc3BlY2lmaWMgb3B0aW9uIGFzIHRoZSBkZWZhdWx0IGZvciBpdHMgZ3JvdXAsIHVuc2V0dGluZyBhbnkgcHJldmlvdXMgZGVmYXVsdC5cbiAqIEBwYXJhbSByZXEgVGhlIHJlcXVlc3QgY29udGFpbmluZyBvcHRpb24sIG1lbnUgaXRlbSwgYW5kIGdyb3VwIGlkZW50aWZpZXJzLlxuICogQHJldHVybnMgQSBzdWNjZXNzIGZsYWcuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZXRNZW51T3B0aW9uRGVmYXVsdChyZXE6IFNldE1lbnVPcHRpb25EZWZhdWx0UmVxdWVzdCk6IFByb21pc2U8eyBzdWNjZXNzOiBib29sZWFuIH0+IHtcbiAgICBjb25zdCB7IG9wdGlvbklkLCBtZW51SXRlbUlkLCBncm91cE5hbWUgfSA9IHJlcTtcbiAgICBjb25zdCByYW5nZSA9IGAke01FTlVfT1BUSU9OU19TSEVFVF9OQU1FfSFBMjpGYDtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0U2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCByYW5nZSk7XG5cbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwi5om+5LiN5Yiw6I+c5Zau6YG46aCF6LOH5paZ44CCXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IHVwZGF0ZXMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3Qgcm93ID0gZGF0YVtpXTtcbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIG9wdGlvbiBiZWxvbmdzIHRvIHRoZSBzYW1lIG1lbnUgaXRlbSBhbmQgZ3JvdXBcbiAgICAgICAgaWYgKHJvd1sxXSA9PT0gbWVudUl0ZW1JZCAmJiByb3dbMl0gPT09IGdyb3VwTmFtZSkge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudE9wdGlvbklkID0gcm93WzBdO1xuICAgICAgICAgICAgY29uc3QgaXNDdXJyZW50bHlEZWZhdWx0ID0gcm93WzVdID09PSAnVFJVRSc7XG4gICAgICAgICAgICBjb25zdCBzaG91bGRCZURlZmF1bHQgPSBjdXJyZW50T3B0aW9uSWQgPT09IG9wdGlvbklkO1xuXG4gICAgICAgICAgICAvLyBJZiB0aGlzIHJvdyBuZWVkcyB0byBjaGFuZ2UgaXRzIGRlZmF1bHQgc3RhdHVzXG4gICAgICAgICAgICBpZiAoaXNDdXJyZW50bHlEZWZhdWx0ICE9PSBzaG91bGRCZURlZmF1bHQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByb3dUb1VwZGF0ZSA9IGkgKyAyOyAvLyArMiBiZWNhdXNlIHNoZWV0IGlzIDEtaW5kZXhlZCBhbmQgd2Ugc2tpcHBlZCBoZWFkZXJcbiAgICAgICAgICAgICAgICB1cGRhdGVzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICByYW5nZTogYCR7TUVOVV9PUFRJT05TX1NIRUVUX05BTUV9IUYke3Jvd1RvVXBkYXRlfWAsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlczogW1tzaG91bGRCZURlZmF1bHQgPyAnVFJVRScgOiAnRkFMU0UnXV0sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodXBkYXRlcy5sZW5ndGggPiAwKSB7XG4gICAgICBmb3IgKGNvbnN0IHVwZGF0ZSBvZiB1cGRhdGVzKSB7XG4gICAgICAgICAgYXdhaXQgdXBkYXRlU2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCB1cGRhdGUucmFuZ2UsIHVwZGF0ZS52YWx1ZXMpO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6ImlTQTZLc0IifQ==
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/ai/flows/data:e4f767 [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"400d5d098fb5d3b9d2f05a8f3e245c29f34a823284":"addMenuOption"},"src/ai/flows/menu-flow.ts",""] */ __turbopack_context__.s({
    "addMenuOption": (()=>addMenuOption)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var addMenuOption = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("400d5d098fb5d3b9d2f05a8f3e245c29f34a823284", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "addMenuOption"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vbWVudS1mbG93LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuJ3VzZSBzZXJ2ZXInO1xuLyoqXG4gKiBAZmlsZU92ZXJ2aWV3IEZsb3cgZm9yIGhhbmRsaW5nIG1lbnUgZGF0YSBmcm9tIEdvb2dsZSBTaGVldHMuXG4gKi9cbmltcG9ydCB7IGdldFNoZWV0RGF0YSwgYXBwZW5kU2hlZXREYXRhLCBjbGVhclNoZWV0RGF0YSwgdXBkYXRlU2hlZXREYXRhIH0gZnJvbSAnQC9zZXJ2aWNlcy9zaGVldC1zZXJ2aWNlJztcbmltcG9ydCB7IHogfSBmcm9tICd6b2QnO1xuXG4vLyBUaGUgSUQgb2YgeW91ciBHb29nbGUgU2hlZXRcbmNvbnN0IFNQUkVBRFNIRUVUX0lEID0gJzFaajJoMGNZbHJiMm1CYU5nbDEtUG9PSzd0bENDd0RjY0FYbjV3NjZocDRjJztcbmNvbnN0IE1FTlVfU0hFRVRfTkFNRSA9ICdtZW51cyc7XG5jb25zdCBNRU5VX09QVElPTlNfU0hFRVRfTkFNRSA9ICdtZW51X29wdGlvbnMnO1xuXG5leHBvcnQgdHlwZSBNZW51T3B0aW9uQ2hvaWNlID0ge1xuICBpZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIHByaWNlRGVsdGE6IG51bWJlcjtcbiAgaXNEZWZhdWx0OiBib29sZWFuO1xufVxuXG5leHBvcnQgdHlwZSBNZW51T3B0aW9uR3JvdXAgPSB7XG4gIG5hbWU6IHN0cmluZztcbiAgY2hvaWNlczogTWVudU9wdGlvbkNob2ljZVtdO1xufVxuXG5leHBvcnQgdHlwZSBNZW51SXRlbSA9IHtcbiAgaWQ6IHN0cmluZztcbiAgdmVuZG9ySWQ6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBwcmljZTogbnVtYmVyO1xuICBpc0FjdGl2ZTogYm9vbGVhbjtcbiAgb3B0aW9ucz86IE1lbnVPcHRpb25Hcm91cFtdO1xufTtcblxuLyoqXG4gKiBSZXRyaWV2ZXMgYWxsIG1lbnUgaXRlbXMgZm9yIGEgZ2l2ZW4gdmVuZG9yIGZyb20gdGhlICdtZW51cycgc2hlZXQsIGluY2x1ZGluZyB0aGVpciBvcHRpb25zLlxuICogQHBhcmFtIHtzdHJpbmd9IHZlbmRvcklkIFRoZSBJRCBvZiB0aGUgdmVuZG9yLlxuICogQHJldHVybnMge1Byb21pc2U8TWVudUl0ZW1bXT59IEEgbGlzdCBvZiBtZW51IGl0ZW1zIHdpdGggdGhlaXIgb3B0aW9ucy5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE1lbnVzQnlWZW5kb3JJZCh2ZW5kb3JJZDogc3RyaW5nKTogUHJvbWlzZTxNZW51SXRlbVtdPiB7XG4gIHRyeSB7XG4gICAgY29uc3QgbWVudVNoZWV0RGF0YSA9IGF3YWl0IGdldFNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgTUVOVV9TSEVFVF9OQU1FKTtcbiAgICBjb25zdCBvcHRpb25zU2hlZXREYXRhID0gYXdhaXQgZ2V0U2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCBNRU5VX09QVElPTlNfU0hFRVRfTkFNRSk7XG4gICAgXG4gICAgaWYgKCFtZW51U2hlZXREYXRhIHx8IG1lbnVTaGVldERhdGEubGVuZ3RoIDwgMikge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIGNvbnN0IG1lbnVIZWFkZXJzID0gbWVudVNoZWV0RGF0YVswXTtcbiAgICBjb25zdCBtZW51Um93cyA9IG1lbnVTaGVldERhdGEuc2xpY2UoMSk7XG5cbiAgICBjb25zdCBoZWFkZXJNYXAgPSBtZW51SGVhZGVycy5yZWR1Y2UoKGFjYywgaGVhZGVyLCBpbmRleCkgPT4ge1xuICAgICAgICBhY2NbaGVhZGVyXSA9IGluZGV4O1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgIH0sIHt9IGFzIFJlY29yZDxzdHJpbmcsIG51bWJlcj4pO1xuXG5cbiAgICBjb25zdCBhbGxJdGVtczogTWVudUl0ZW1bXSA9IG1lbnVSb3dzXG4gICAgICAuZmlsdGVyKHJvdyA9PiByb3cubGVuZ3RoID4gMCAmJiByb3dbaGVhZGVyTWFwWyd2ZW5kb3JJZCddXSA9PT0gdmVuZG9ySWQgJiYgcm93W2hlYWRlck1hcFsnaXNBY3RpdmUnXV0gPT09ICdUUlVFJylcbiAgICAgIC5tYXAocm93ID0+ICh7XG4gICAgICAgIGlkOiByb3dbaGVhZGVyTWFwWydpZCddXSB8fCAnJyxcbiAgICAgICAgdmVuZG9ySWQ6IHJvd1toZWFkZXJNYXBbJ3ZlbmRvcklkJ11dIHx8ICcnLFxuICAgICAgICBuYW1lOiByb3dbaGVhZGVyTWFwWyduYW1lJ11dIHx8ICcnLFxuICAgICAgICBwcmljZTogcGFyc2VJbnQocm93W2hlYWRlck1hcFsncHJpY2UnXV0gfHwgJzAnLCAxMCksXG4gICAgICAgIGlzQWN0aXZlOiByb3dbaGVhZGVyTWFwWydpc0FjdGl2ZSddXSA9PT0gJ1RSVUUnLFxuICAgICAgICBvcHRpb25zOiBbXSxcbiAgICAgIH0pKTtcbiAgICAgIFxuICAgIGlmIChvcHRpb25zU2hlZXREYXRhICYmIG9wdGlvbnNTaGVldERhdGEubGVuZ3RoID4gMSkge1xuICAgICAgY29uc3Qgb3B0aW9uc0hlYWRlcnMgPSBvcHRpb25zU2hlZXREYXRhWzBdO1xuICAgICAgY29uc3Qgb3B0aW9uc1Jvd3MgPSBvcHRpb25zU2hlZXREYXRhLnNsaWNlKDEpO1xuICAgICAgY29uc3Qgb3B0aW9uc0hlYWRlck1hcCA9IG9wdGlvbnNIZWFkZXJzLnJlZHVjZSgoYWNjLCBoZWFkZXIsIGluZGV4KSA9PiB7XG4gICAgICAgICAgYWNjW2hlYWRlcl0gPSBpbmRleDtcbiAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgfSwge30gYXMgUmVjb3JkPHN0cmluZywgbnVtYmVyPik7XG5cblxuICAgICAgY29uc3QgYWxsT3B0aW9ucyA9IG9wdGlvbnNSb3dzLm1hcChyb3cgPT4gKHtcbiAgICAgICAgaWQ6IHJvd1tvcHRpb25zSGVhZGVyTWFwWydpZCddXSB8fCAnJyxcbiAgICAgICAgbWVudUl0ZW1JZDogcm93W29wdGlvbnNIZWFkZXJNYXBbJ21lbnVJdGVtSWQnXV0gfHwgJycsXG4gICAgICAgIGdyb3VwTmFtZTogcm93W29wdGlvbnNIZWFkZXJNYXBbJ2dyb3VwTmFtZSddXSB8fCAnJyxcbiAgICAgICAgY2hvaWNlTmFtZTogcm93W29wdGlvbnNIZWFkZXJNYXBbJ2Nob2ljZU5hbWUnXV0gfHwgJycsXG4gICAgICAgIHByaWNlRGVsdGE6IHBhcnNlSW50KHJvd1tvcHRpb25zSGVhZGVyTWFwWydwcmljZURlbHRhJ11dIHx8ICcwJywgMTApLFxuICAgICAgICBpc0RlZmF1bHQ6IHJvd1tvcHRpb25zSGVhZGVyTWFwWydpc0RlZmF1bHQnXV0gPT09ICdUUlVFJyxcbiAgICAgIH0pKTtcblxuICAgICAgLy8gR3JvdXAgb3B0aW9ucyBieSBtZW51IGl0ZW0gSURcbiAgICAgIGNvbnN0IG9wdGlvbnNCeU1lbnVJdGVtID0gYWxsT3B0aW9ucy5yZWR1Y2UoKGFjYywgb3B0aW9uKSA9PiB7XG4gICAgICAgIGlmICghYWNjW29wdGlvbi5tZW51SXRlbUlkXSkge1xuICAgICAgICAgIGFjY1tvcHRpb24ubWVudUl0ZW1JZF0gPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBhY2Nbb3B0aW9uLm1lbnVJdGVtSWRdLnB1c2gob3B0aW9uKTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH0sIHt9IGFzIFJlY29yZDxzdHJpbmcsIHR5cGVvZiBhbGxPcHRpb25zPik7XG5cblxuICAgICAgLy8gQXR0YWNoIG9wdGlvbnMgdG8gbWVudSBpdGVtc1xuICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGFsbEl0ZW1zKSB7XG4gICAgICAgIGlmIChvcHRpb25zQnlNZW51SXRlbVtpdGVtLmlkXSkge1xuICAgICAgICAgIGNvbnN0IGl0ZW1PcHRpb25zID0gb3B0aW9uc0J5TWVudUl0ZW1baXRlbS5pZF07XG4gICAgICAgICAgY29uc3QgZ3JvdXBzID0gaXRlbU9wdGlvbnMucmVkdWNlKChhY2MsIG9wdGlvbikgPT4ge1xuICAgICAgICAgICAgaWYgKCFhY2Nbb3B0aW9uLmdyb3VwTmFtZV0pIHtcbiAgICAgICAgICAgICAgYWNjW29wdGlvbi5ncm91cE5hbWVdID0geyBuYW1lOiBvcHRpb24uZ3JvdXBOYW1lLCBjaG9pY2VzOiBbXSB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYWNjW29wdGlvbi5ncm91cE5hbWVdLmNob2ljZXMucHVzaCh7XG4gICAgICAgICAgICAgIGlkOiBvcHRpb24uaWQsXG4gICAgICAgICAgICAgIG5hbWU6IG9wdGlvbi5jaG9pY2VOYW1lLFxuICAgICAgICAgICAgICBwcmljZURlbHRhOiBvcHRpb24ucHJpY2VEZWx0YSxcbiAgICAgICAgICAgICAgaXNEZWZhdWx0OiBvcHRpb24uaXNEZWZhdWx0LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgIH0sIHt9IGFzIFJlY29yZDxzdHJpbmcsIE1lbnVPcHRpb25Hcm91cD4pO1xuICAgICAgICAgIGl0ZW0ub3B0aW9ucyA9IE9iamVjdC52YWx1ZXMoZ3JvdXBzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICByZXR1cm4gYWxsSXRlbXM7XG5cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwi6K6A5Y+W6I+c5Zau5aSx5pWXOlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIFtdO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIEFkZE1lbnVJdGVtUmVxdWVzdCA9IHtcbiAgdmVuZG9ySWQ6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBwcmljZTogbnVtYmVyO1xufTtcblxuLyoqXG4gKiBBZGRzIGEgbmV3IG1lbnUgaXRlbSB0byB0aGUgJ21lbnVzJyBzaGVldC5cbiAqIEBwYXJhbSB7QWRkTWVudUl0ZW1SZXF1ZXN0fSBpdGVtIC0gVGhlIG1lbnUgaXRlbSBkYXRhIHRvIGFkZC5cbiAqIEByZXR1cm5zIHtQcm9taXNlPHtzdWNjZXNzOiBib29sZWFufT59IEEgc3VjY2VzcyBmbGFnLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkTWVudUl0ZW0oaXRlbTogQWRkTWVudUl0ZW1SZXF1ZXN0KTogUHJvbWlzZTx7IHN1Y2Nlc3M6IGJvb2xlYW4gfT4ge1xuICBjb25zdCBBZGRNZW51SXRlbVNjaGVtYSA9IHoub2JqZWN0KHtcbiAgICB2ZW5kb3JJZDogei5zdHJpbmcoKSxcbiAgICBuYW1lOiB6LnN0cmluZygpLm1pbigxLCBcIuWTgemgheWQjeeoseS4jeiDveeCuuepulwiKSxcbiAgICBwcmljZTogei5udW1iZXIoKS5wb3NpdGl2ZShcIuWDueagvOW/hemgiOaYr+ato+aVuFwiKSxcbiAgfSk7XG5cbiAgY29uc3QgdmFsaWRhdGlvbiA9IEFkZE1lbnVJdGVtU2NoZW1hLnNhZmVQYXJzZShpdGVtKTtcbiAgaWYgKCF2YWxpZGF0aW9uLnN1Y2Nlc3MpIHtcbiAgICAgIGNvbnN0IGEgPSB2YWxpZGF0aW9uLmVycm9yLmZvcm1hdCgpLl9lcnJvcnMuam9pbignLCAnKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcihg6Ly45YWl6LOH5paZ5pyJ6KqkOiAke2F9YCk7XG4gIH1cblxuICBjb25zdCByYW5nZSA9IGAke01FTlVfU0hFRVRfTkFNRX0hQTpFYDtcbiAgY29uc3QgYWxsTWVudXNSYW5nZSA9IGAke01FTlVfU0hFRVRfTkFNRX0hQTI6QWA7XG4gIFxuICBjb25zdCBhbGxNZW51SWRzRGF0YSA9IGF3YWl0IGdldFNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgYWxsTWVudXNSYW5nZSk7XG4gIGNvbnN0IGxhc3RJZE51bSA9IGFsbE1lbnVJZHNEYXRhLmxlbmd0aCA+IDAgXG4gICAgICA/IE1hdGgubWF4KC4uLmFsbE1lbnVJZHNEYXRhLm1hcChyb3cgPT4gcGFyc2VJbnQoKHJvd1swXSB8fCAnbTAnKS5yZXBsYWNlKCdtJywgJycpLCAxMCkpLmZpbHRlcihudW0gPT4gIWlzTmFOKG51bSkpKVxuICAgICAgOiAwO1xuXG4gIGNvbnN0IG5ld0lkID0gYG0keyhsYXN0SWROdW0gKyAxKS50b1N0cmluZygpLnBhZFN0YXJ0KDMsICcwJyl9YDtcbiAgXG4gIGNvbnN0IHZhbHVlcyA9IFtcbiAgICBbbmV3SWQsIGl0ZW0udmVuZG9ySWQsIGl0ZW0ubmFtZSwgaXRlbS5wcmljZSwgJ1RSVUUnXSxcbiAgXTtcblxuICBhd2FpdCBhcHBlbmRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIHJhbmdlLCB2YWx1ZXMpO1xuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG59XG5cbmV4cG9ydCB0eXBlIFVwZGF0ZU1lbnVJdGVtUmVxdWVzdCA9IHtcbiAgICBpZDogc3RyaW5nO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBwcmljZTogbnVtYmVyO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlTWVudUl0ZW0oaXRlbTogVXBkYXRlTWVudUl0ZW1SZXF1ZXN0KTogUHJvbWlzZTx7IHN1Y2Nlc3M6IGJvb2xlYW4gfT4ge1xuICAgIGNvbnN0IHJhbmdlID0gYCR7TUVOVV9TSEVFVF9OQU1FfSFBMjpFYDtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0U2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCByYW5nZSk7XG5cbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwi5om+5LiN5Yiw6I+c5Zau6LOH5paZ44CCXCIpO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCByb3dJbmRleCA9IGRhdGEuZmluZEluZGV4KHJvdyA9PiByb3dbMF0gPT09IGl0ZW0uaWQpO1xuICAgIGlmIChyb3dJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGDmib7kuI3liLAgSUQg54K6ICR7aXRlbS5pZH0g55qE6I+c5Zau5ZOB6aCF44CCYCk7XG4gICAgfVxuXG4gICAgY29uc3Qgcm93VG9VcGRhdGUgPSByb3dJbmRleCArIDI7XG4gICAgY29uc3QgdXBkYXRlUmFuZ2UgPSBgJHtNRU5VX1NIRUVUX05BTUV9IUMke3Jvd1RvVXBkYXRlfTpFJHtyb3dUb1VwZGF0ZX1gO1xuICAgIGNvbnN0IHZhbHVlcyA9IFtbaXRlbS5uYW1lLCBpdGVtLnByaWNlLCAnVFJVRSddXTtcblxuICAgIGF3YWl0IHVwZGF0ZVNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgdXBkYXRlUmFuZ2UsIHZhbHVlcyk7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xufVxuXG5leHBvcnQgdHlwZSBEZWxldGVNZW51SXRlbVJlcXVlc3QgPSB7XG4gICAgaWQ6IHN0cmluZztcbn07XG5cbi8qKlxuICogRGVsZXRlcyBhIG1lbnUgaXRlbSBmcm9tIHRoZSAnbWVudXMnIHNoZWV0IGJ5IGl0cyBJRC5cbiAqIEBwYXJhbSB7RGVsZXRlTWVudUl0ZW1SZXF1ZXN0fSByZXEgLSBUaGUgcmVxdWVzdCBjb250YWluaW5nIHRoZSBpdGVtIElEIHRvIGRlbGV0ZS5cbiAqIEByZXR1cm5zIHtQcm9taXNlPHtzdWNjZXNzOiBib29sZWFufT59IEEgc3VjY2VzcyBmbGFnLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlTWVudUl0ZW0ocmVxOiBEZWxldGVNZW51SXRlbVJlcXVlc3QpOiBQcm9taXNlPHsgc3VjY2VzczogYm9vbGVhbiB9PiB7XG4gICAgY29uc3QgcmFuZ2UgPSBgJHtNRU5VX1NIRUVUX05BTUV9IUEyOkVgO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIHJhbmdlKTtcblxuICAgIGlmICghZGF0YSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCLmib7kuI3liLDoj5zllq7os4fmlpnjgIJcIik7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IHJvd0luZGV4ID0gZGF0YS5maW5kSW5kZXgocm93ID0+IHJvd1swXSA9PT0gcmVxLmlkKTtcbiAgICBcbiAgICBpZiAocm93SW5kZXggPT09IC0xKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGDmib7kuI3liLAgSUQg54K6ICR7cmVxLmlkfSDnmoToj5zllq7lk4HpoIXjgIJgKTtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UgfTsgLy8gSXRlbSBub3QgZm91bmRcbiAgICB9XG5cbiAgICAvLyBHb29nbGUgU2hlZXRzIEFQSSByb3cgaW5kaWNlcyBhcmUgMS1iYXNlZC4gU2hlZXQgZGF0YSBzdGFydHMgZnJvbSByb3cgMi5cbiAgICBjb25zdCByb3dUb1VwZGF0ZSA9IHJvd0luZGV4ICsgMjsgXG4gICAgY29uc3QgdXBkYXRlUmFuZ2UgPSBgJHtNRU5VX1NIRUVUX05BTUV9IUUke3Jvd1RvVXBkYXRlfWA7XG4gICAgXG4gICAgYXdhaXQgdXBkYXRlU2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCB1cGRhdGVSYW5nZSwgW1snRkFMU0UnXV0pO1xuICAgIFxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbn1cblxuXG4vLyAtLS0gTWVudSBPcHRpb24gRmxvd3MgLS0tXG5cbmV4cG9ydCB0eXBlIEFkZE1lbnVPcHRpb25SZXF1ZXN0ID0ge1xuICBtZW51SXRlbUlkOiBzdHJpbmc7XG4gIGdyb3VwTmFtZTogc3RyaW5nO1xuICBjaG9pY2VOYW1lOiBzdHJpbmc7XG4gIHByaWNlRGVsdGE6IG51bWJlcjtcbiAgaXNEZWZhdWx0OiBib29sZWFuO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkTWVudU9wdGlvbihyZXE6IEFkZE1lbnVPcHRpb25SZXF1ZXN0KTogUHJvbWlzZTx7IHN1Y2Nlc3M6IGJvb2xlYW4gfT4ge1xuICAvLyBJZiB0aGUgbmV3IG9wdGlvbiBpcyBkZWZhdWx0LCB1bnNldCBvdGhlciBkZWZhdWx0cyBpbiB0aGUgc2FtZSBncm91cC5cbiAgaWYgKHJlcS5pc0RlZmF1bHQpIHtcbiAgICBhd2FpdCBzZXRNZW51T3B0aW9uRGVmYXVsdCh7IG1lbnVJdGVtSWQ6IHJlcS5tZW51SXRlbUlkLCBncm91cE5hbWU6IHJlcS5ncm91cE5hbWUsIG9wdGlvbklkOiAnJyB9KTsgLy8gUGFzcyBlbXB0eSBvcHRpb25JZCB0byB1bnNldCBhbGwsIG5ldyBvbmUgd2lsbCBiZSBzZXRcbiAgfVxuXG4gIGNvbnN0IHJhbmdlID0gYCR7TUVOVV9PUFRJT05TX1NIRUVUX05BTUV9IUE6RmA7XG4gIGNvbnN0IGFsbE9wdGlvbnNSYW5nZSA9IGAke01FTlVfT1BUSU9OU19TSEVFVF9OQU1FfSFBMjpBYDtcbiAgXG4gIGNvbnN0IGFsbE9wdGlvbklkc0RhdGEgPSBhd2FpdCBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGFsbE9wdGlvbnNSYW5nZSk7XG4gIGNvbnN0IGxhc3RJZE51bSA9IGFsbE9wdGlvbklkc0RhdGEubGVuZ3RoID4gMCBcbiAgICAgID8gTWF0aC5tYXgoLi4uYWxsT3B0aW9uSWRzRGF0YS5tYXAocm93ID0+IHBhcnNlSW50KChyb3dbMF0gfHwgJ28wJykucmVwbGFjZSgnbycsICcnKSwgMTApKS5maWx0ZXIobnVtID0+ICFpc05hTihudW0pKSlcbiAgICAgIDogMDtcblxuICBjb25zdCBuZXdJZCA9IGBvJHsobGFzdElkTnVtICsgMSkudG9TdHJpbmcoKS5wYWRTdGFydCgzLCAnMCcpfWA7XG4gIFxuICBjb25zdCB2YWx1ZXMgPSBbW1xuICAgIG5ld0lkLCBcbiAgICByZXEubWVudUl0ZW1JZCwgXG4gICAgcmVxLmdyb3VwTmFtZSwgXG4gICAgcmVxLmNob2ljZU5hbWUsIFxuICAgIHJlcS5wcmljZURlbHRhLCBcbiAgICByZXEuaXNEZWZhdWx0ID8gJ1RSVUUnIDogJ0ZBTFNFJ1xuICBdXTtcblxuICBhd2FpdCBhcHBlbmRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIHJhbmdlLCB2YWx1ZXMpO1xuXG4gIC8vIElmIHRoZSBuZXcgb3B0aW9uIHdhcyBzZXQgdG8gZGVmYXVsdCwgZW5zdXJlIGl0IGlzIG5vdyB0aGUgb25seSBkZWZhdWx0IG9uZVxuICBpZihyZXEuaXNEZWZhdWx0KSB7XG4gICAgICBhd2FpdCBzZXRNZW51T3B0aW9uRGVmYXVsdCh7IG9wdGlvbklkOiBuZXdJZCwgbWVudUl0ZW1JZDogcmVxLm1lbnVJdGVtSWQsIGdyb3VwTmFtZTogcmVxLmdyb3VwTmFtZSB9KTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbn1cblxuXG5leHBvcnQgdHlwZSBEZWxldGVNZW51T3B0aW9uUmVxdWVzdCA9IHtcbiAgb3B0aW9uSWQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZU1lbnVPcHRpb24ocmVxOiBEZWxldGVNZW51T3B0aW9uUmVxdWVzdCk6IFByb21pc2U8eyBzdWNjZXNzOiBib29sZWFuIH0+IHtcbiAgY29uc3QgcmFuZ2UgPSBgJHtNRU5VX09QVElPTlNfU0hFRVRfTkFNRX0hQTI6RmA7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIHJhbmdlKTtcblxuICBpZiAoIWRhdGEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIuaJvuS4jeWIsOiPnOWWrumBuOmgheizh+aWmeOAglwiKTtcbiAgfVxuICBcbiAgY29uc3Qgcm93SW5kZXggPSBkYXRhLmZpbmRJbmRleChyb3cgPT4gcm93WzBdID09PSByZXEub3B0aW9uSWQpO1xuICBcbiAgaWYgKHJvd0luZGV4ID09PSAtMSkge1xuICAgICAgY29uc29sZS5sb2coYOaJvuS4jeWIsCBJRCDngrogJHtyZXEub3B0aW9uSWR9IOeahOiPnOWWrumBuOmgheOAgmApO1xuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UgfTsgLy8gSXRlbSBub3QgZm91bmRcbiAgfVxuXG4gIGNvbnN0IHJvd1RvRGVsZXRlID0gcm93SW5kZXggKyAyOyBcbiAgY29uc3QgY2xlYXJSYW5nZSA9IGAke01FTlVfT1BUSU9OU19TSEVFVF9OQU1FfSFBJHtyb3dUb0RlbGV0ZX06RiR7cm93VG9EZWxldGV9YDtcblxuICBhd2FpdCBjbGVhclNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgY2xlYXJSYW5nZSk7XG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbn1cblxuZXhwb3J0IHR5cGUgU2V0TWVudU9wdGlvbkRlZmF1bHRSZXF1ZXN0ID0ge1xuICBvcHRpb25JZDogc3RyaW5nOyAvLyBUaGUgb3B0aW9uIHRvIHNldCBhcyBkZWZhdWx0LiBJZiBlbXB0eSwgYWxsIG9wdGlvbnMgaW4gZ3JvdXAgd2lsbCBiZSB1bnNldC5cbiAgbWVudUl0ZW1JZDogc3RyaW5nO1xuICBncm91cE5hbWU6IHN0cmluZztcbn1cblxuLyoqXG4gKiBTZXRzIGEgc3BlY2lmaWMgb3B0aW9uIGFzIHRoZSBkZWZhdWx0IGZvciBpdHMgZ3JvdXAsIHVuc2V0dGluZyBhbnkgcHJldmlvdXMgZGVmYXVsdC5cbiAqIEBwYXJhbSByZXEgVGhlIHJlcXVlc3QgY29udGFpbmluZyBvcHRpb24sIG1lbnUgaXRlbSwgYW5kIGdyb3VwIGlkZW50aWZpZXJzLlxuICogQHJldHVybnMgQSBzdWNjZXNzIGZsYWcuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZXRNZW51T3B0aW9uRGVmYXVsdChyZXE6IFNldE1lbnVPcHRpb25EZWZhdWx0UmVxdWVzdCk6IFByb21pc2U8eyBzdWNjZXNzOiBib29sZWFuIH0+IHtcbiAgICBjb25zdCB7IG9wdGlvbklkLCBtZW51SXRlbUlkLCBncm91cE5hbWUgfSA9IHJlcTtcbiAgICBjb25zdCByYW5nZSA9IGAke01FTlVfT1BUSU9OU19TSEVFVF9OQU1FfSFBMjpGYDtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0U2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCByYW5nZSk7XG5cbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwi5om+5LiN5Yiw6I+c5Zau6YG46aCF6LOH5paZ44CCXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IHVwZGF0ZXMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3Qgcm93ID0gZGF0YVtpXTtcbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIG9wdGlvbiBiZWxvbmdzIHRvIHRoZSBzYW1lIG1lbnUgaXRlbSBhbmQgZ3JvdXBcbiAgICAgICAgaWYgKHJvd1sxXSA9PT0gbWVudUl0ZW1JZCAmJiByb3dbMl0gPT09IGdyb3VwTmFtZSkge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudE9wdGlvbklkID0gcm93WzBdO1xuICAgICAgICAgICAgY29uc3QgaXNDdXJyZW50bHlEZWZhdWx0ID0gcm93WzVdID09PSAnVFJVRSc7XG4gICAgICAgICAgICBjb25zdCBzaG91bGRCZURlZmF1bHQgPSBjdXJyZW50T3B0aW9uSWQgPT09IG9wdGlvbklkO1xuXG4gICAgICAgICAgICAvLyBJZiB0aGlzIHJvdyBuZWVkcyB0byBjaGFuZ2UgaXRzIGRlZmF1bHQgc3RhdHVzXG4gICAgICAgICAgICBpZiAoaXNDdXJyZW50bHlEZWZhdWx0ICE9PSBzaG91bGRCZURlZmF1bHQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByb3dUb1VwZGF0ZSA9IGkgKyAyOyAvLyArMiBiZWNhdXNlIHNoZWV0IGlzIDEtaW5kZXhlZCBhbmQgd2Ugc2tpcHBlZCBoZWFkZXJcbiAgICAgICAgICAgICAgICB1cGRhdGVzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICByYW5nZTogYCR7TUVOVV9PUFRJT05TX1NIRUVUX05BTUV9IUYke3Jvd1RvVXBkYXRlfWAsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlczogW1tzaG91bGRCZURlZmF1bHQgPyAnVFJVRScgOiAnRkFMU0UnXV0sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodXBkYXRlcy5sZW5ndGggPiAwKSB7XG4gICAgICBmb3IgKGNvbnN0IHVwZGF0ZSBvZiB1cGRhdGVzKSB7XG4gICAgICAgICAgYXdhaXQgdXBkYXRlU2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCB1cGRhdGUucmFuZ2UsIHVwZGF0ZS52YWx1ZXMpO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6ImdTQThPc0IifQ==
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/ai/flows/data:1b519a [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"40b30050c957649fa04667f1048a25baa031a9f06f":"deleteMenuOption"},"src/ai/flows/menu-flow.ts",""] */ __turbopack_context__.s({
    "deleteMenuOption": (()=>deleteMenuOption)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var deleteMenuOption = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40b30050c957649fa04667f1048a25baa031a9f06f", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "deleteMenuOption"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vbWVudS1mbG93LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuJ3VzZSBzZXJ2ZXInO1xuLyoqXG4gKiBAZmlsZU92ZXJ2aWV3IEZsb3cgZm9yIGhhbmRsaW5nIG1lbnUgZGF0YSBmcm9tIEdvb2dsZSBTaGVldHMuXG4gKi9cbmltcG9ydCB7IGdldFNoZWV0RGF0YSwgYXBwZW5kU2hlZXREYXRhLCBjbGVhclNoZWV0RGF0YSwgdXBkYXRlU2hlZXREYXRhIH0gZnJvbSAnQC9zZXJ2aWNlcy9zaGVldC1zZXJ2aWNlJztcbmltcG9ydCB7IHogfSBmcm9tICd6b2QnO1xuXG4vLyBUaGUgSUQgb2YgeW91ciBHb29nbGUgU2hlZXRcbmNvbnN0IFNQUkVBRFNIRUVUX0lEID0gJzFaajJoMGNZbHJiMm1CYU5nbDEtUG9PSzd0bENDd0RjY0FYbjV3NjZocDRjJztcbmNvbnN0IE1FTlVfU0hFRVRfTkFNRSA9ICdtZW51cyc7XG5jb25zdCBNRU5VX09QVElPTlNfU0hFRVRfTkFNRSA9ICdtZW51X29wdGlvbnMnO1xuXG5leHBvcnQgdHlwZSBNZW51T3B0aW9uQ2hvaWNlID0ge1xuICBpZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIHByaWNlRGVsdGE6IG51bWJlcjtcbiAgaXNEZWZhdWx0OiBib29sZWFuO1xufVxuXG5leHBvcnQgdHlwZSBNZW51T3B0aW9uR3JvdXAgPSB7XG4gIG5hbWU6IHN0cmluZztcbiAgY2hvaWNlczogTWVudU9wdGlvbkNob2ljZVtdO1xufVxuXG5leHBvcnQgdHlwZSBNZW51SXRlbSA9IHtcbiAgaWQ6IHN0cmluZztcbiAgdmVuZG9ySWQ6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBwcmljZTogbnVtYmVyO1xuICBpc0FjdGl2ZTogYm9vbGVhbjtcbiAgb3B0aW9ucz86IE1lbnVPcHRpb25Hcm91cFtdO1xufTtcblxuLyoqXG4gKiBSZXRyaWV2ZXMgYWxsIG1lbnUgaXRlbXMgZm9yIGEgZ2l2ZW4gdmVuZG9yIGZyb20gdGhlICdtZW51cycgc2hlZXQsIGluY2x1ZGluZyB0aGVpciBvcHRpb25zLlxuICogQHBhcmFtIHtzdHJpbmd9IHZlbmRvcklkIFRoZSBJRCBvZiB0aGUgdmVuZG9yLlxuICogQHJldHVybnMge1Byb21pc2U8TWVudUl0ZW1bXT59IEEgbGlzdCBvZiBtZW51IGl0ZW1zIHdpdGggdGhlaXIgb3B0aW9ucy5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE1lbnVzQnlWZW5kb3JJZCh2ZW5kb3JJZDogc3RyaW5nKTogUHJvbWlzZTxNZW51SXRlbVtdPiB7XG4gIHRyeSB7XG4gICAgY29uc3QgbWVudVNoZWV0RGF0YSA9IGF3YWl0IGdldFNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgTUVOVV9TSEVFVF9OQU1FKTtcbiAgICBjb25zdCBvcHRpb25zU2hlZXREYXRhID0gYXdhaXQgZ2V0U2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCBNRU5VX09QVElPTlNfU0hFRVRfTkFNRSk7XG4gICAgXG4gICAgaWYgKCFtZW51U2hlZXREYXRhIHx8IG1lbnVTaGVldERhdGEubGVuZ3RoIDwgMikge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIGNvbnN0IG1lbnVIZWFkZXJzID0gbWVudVNoZWV0RGF0YVswXTtcbiAgICBjb25zdCBtZW51Um93cyA9IG1lbnVTaGVldERhdGEuc2xpY2UoMSk7XG5cbiAgICBjb25zdCBoZWFkZXJNYXAgPSBtZW51SGVhZGVycy5yZWR1Y2UoKGFjYywgaGVhZGVyLCBpbmRleCkgPT4ge1xuICAgICAgICBhY2NbaGVhZGVyXSA9IGluZGV4O1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgIH0sIHt9IGFzIFJlY29yZDxzdHJpbmcsIG51bWJlcj4pO1xuXG5cbiAgICBjb25zdCBhbGxJdGVtczogTWVudUl0ZW1bXSA9IG1lbnVSb3dzXG4gICAgICAuZmlsdGVyKHJvdyA9PiByb3cubGVuZ3RoID4gMCAmJiByb3dbaGVhZGVyTWFwWyd2ZW5kb3JJZCddXSA9PT0gdmVuZG9ySWQgJiYgcm93W2hlYWRlck1hcFsnaXNBY3RpdmUnXV0gPT09ICdUUlVFJylcbiAgICAgIC5tYXAocm93ID0+ICh7XG4gICAgICAgIGlkOiByb3dbaGVhZGVyTWFwWydpZCddXSB8fCAnJyxcbiAgICAgICAgdmVuZG9ySWQ6IHJvd1toZWFkZXJNYXBbJ3ZlbmRvcklkJ11dIHx8ICcnLFxuICAgICAgICBuYW1lOiByb3dbaGVhZGVyTWFwWyduYW1lJ11dIHx8ICcnLFxuICAgICAgICBwcmljZTogcGFyc2VJbnQocm93W2hlYWRlck1hcFsncHJpY2UnXV0gfHwgJzAnLCAxMCksXG4gICAgICAgIGlzQWN0aXZlOiByb3dbaGVhZGVyTWFwWydpc0FjdGl2ZSddXSA9PT0gJ1RSVUUnLFxuICAgICAgICBvcHRpb25zOiBbXSxcbiAgICAgIH0pKTtcbiAgICAgIFxuICAgIGlmIChvcHRpb25zU2hlZXREYXRhICYmIG9wdGlvbnNTaGVldERhdGEubGVuZ3RoID4gMSkge1xuICAgICAgY29uc3Qgb3B0aW9uc0hlYWRlcnMgPSBvcHRpb25zU2hlZXREYXRhWzBdO1xuICAgICAgY29uc3Qgb3B0aW9uc1Jvd3MgPSBvcHRpb25zU2hlZXREYXRhLnNsaWNlKDEpO1xuICAgICAgY29uc3Qgb3B0aW9uc0hlYWRlck1hcCA9IG9wdGlvbnNIZWFkZXJzLnJlZHVjZSgoYWNjLCBoZWFkZXIsIGluZGV4KSA9PiB7XG4gICAgICAgICAgYWNjW2hlYWRlcl0gPSBpbmRleDtcbiAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgfSwge30gYXMgUmVjb3JkPHN0cmluZywgbnVtYmVyPik7XG5cblxuICAgICAgY29uc3QgYWxsT3B0aW9ucyA9IG9wdGlvbnNSb3dzLm1hcChyb3cgPT4gKHtcbiAgICAgICAgaWQ6IHJvd1tvcHRpb25zSGVhZGVyTWFwWydpZCddXSB8fCAnJyxcbiAgICAgICAgbWVudUl0ZW1JZDogcm93W29wdGlvbnNIZWFkZXJNYXBbJ21lbnVJdGVtSWQnXV0gfHwgJycsXG4gICAgICAgIGdyb3VwTmFtZTogcm93W29wdGlvbnNIZWFkZXJNYXBbJ2dyb3VwTmFtZSddXSB8fCAnJyxcbiAgICAgICAgY2hvaWNlTmFtZTogcm93W29wdGlvbnNIZWFkZXJNYXBbJ2Nob2ljZU5hbWUnXV0gfHwgJycsXG4gICAgICAgIHByaWNlRGVsdGE6IHBhcnNlSW50KHJvd1tvcHRpb25zSGVhZGVyTWFwWydwcmljZURlbHRhJ11dIHx8ICcwJywgMTApLFxuICAgICAgICBpc0RlZmF1bHQ6IHJvd1tvcHRpb25zSGVhZGVyTWFwWydpc0RlZmF1bHQnXV0gPT09ICdUUlVFJyxcbiAgICAgIH0pKTtcblxuICAgICAgLy8gR3JvdXAgb3B0aW9ucyBieSBtZW51IGl0ZW0gSURcbiAgICAgIGNvbnN0IG9wdGlvbnNCeU1lbnVJdGVtID0gYWxsT3B0aW9ucy5yZWR1Y2UoKGFjYywgb3B0aW9uKSA9PiB7XG4gICAgICAgIGlmICghYWNjW29wdGlvbi5tZW51SXRlbUlkXSkge1xuICAgICAgICAgIGFjY1tvcHRpb24ubWVudUl0ZW1JZF0gPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBhY2Nbb3B0aW9uLm1lbnVJdGVtSWRdLnB1c2gob3B0aW9uKTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH0sIHt9IGFzIFJlY29yZDxzdHJpbmcsIHR5cGVvZiBhbGxPcHRpb25zPik7XG5cblxuICAgICAgLy8gQXR0YWNoIG9wdGlvbnMgdG8gbWVudSBpdGVtc1xuICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGFsbEl0ZW1zKSB7XG4gICAgICAgIGlmIChvcHRpb25zQnlNZW51SXRlbVtpdGVtLmlkXSkge1xuICAgICAgICAgIGNvbnN0IGl0ZW1PcHRpb25zID0gb3B0aW9uc0J5TWVudUl0ZW1baXRlbS5pZF07XG4gICAgICAgICAgY29uc3QgZ3JvdXBzID0gaXRlbU9wdGlvbnMucmVkdWNlKChhY2MsIG9wdGlvbikgPT4ge1xuICAgICAgICAgICAgaWYgKCFhY2Nbb3B0aW9uLmdyb3VwTmFtZV0pIHtcbiAgICAgICAgICAgICAgYWNjW29wdGlvbi5ncm91cE5hbWVdID0geyBuYW1lOiBvcHRpb24uZ3JvdXBOYW1lLCBjaG9pY2VzOiBbXSB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYWNjW29wdGlvbi5ncm91cE5hbWVdLmNob2ljZXMucHVzaCh7XG4gICAgICAgICAgICAgIGlkOiBvcHRpb24uaWQsXG4gICAgICAgICAgICAgIG5hbWU6IG9wdGlvbi5jaG9pY2VOYW1lLFxuICAgICAgICAgICAgICBwcmljZURlbHRhOiBvcHRpb24ucHJpY2VEZWx0YSxcbiAgICAgICAgICAgICAgaXNEZWZhdWx0OiBvcHRpb24uaXNEZWZhdWx0LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgIH0sIHt9IGFzIFJlY29yZDxzdHJpbmcsIE1lbnVPcHRpb25Hcm91cD4pO1xuICAgICAgICAgIGl0ZW0ub3B0aW9ucyA9IE9iamVjdC52YWx1ZXMoZ3JvdXBzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICByZXR1cm4gYWxsSXRlbXM7XG5cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwi6K6A5Y+W6I+c5Zau5aSx5pWXOlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIFtdO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIEFkZE1lbnVJdGVtUmVxdWVzdCA9IHtcbiAgdmVuZG9ySWQ6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBwcmljZTogbnVtYmVyO1xufTtcblxuLyoqXG4gKiBBZGRzIGEgbmV3IG1lbnUgaXRlbSB0byB0aGUgJ21lbnVzJyBzaGVldC5cbiAqIEBwYXJhbSB7QWRkTWVudUl0ZW1SZXF1ZXN0fSBpdGVtIC0gVGhlIG1lbnUgaXRlbSBkYXRhIHRvIGFkZC5cbiAqIEByZXR1cm5zIHtQcm9taXNlPHtzdWNjZXNzOiBib29sZWFufT59IEEgc3VjY2VzcyBmbGFnLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkTWVudUl0ZW0oaXRlbTogQWRkTWVudUl0ZW1SZXF1ZXN0KTogUHJvbWlzZTx7IHN1Y2Nlc3M6IGJvb2xlYW4gfT4ge1xuICBjb25zdCBBZGRNZW51SXRlbVNjaGVtYSA9IHoub2JqZWN0KHtcbiAgICB2ZW5kb3JJZDogei5zdHJpbmcoKSxcbiAgICBuYW1lOiB6LnN0cmluZygpLm1pbigxLCBcIuWTgemgheWQjeeoseS4jeiDveeCuuepulwiKSxcbiAgICBwcmljZTogei5udW1iZXIoKS5wb3NpdGl2ZShcIuWDueagvOW/hemgiOaYr+ato+aVuFwiKSxcbiAgfSk7XG5cbiAgY29uc3QgdmFsaWRhdGlvbiA9IEFkZE1lbnVJdGVtU2NoZW1hLnNhZmVQYXJzZShpdGVtKTtcbiAgaWYgKCF2YWxpZGF0aW9uLnN1Y2Nlc3MpIHtcbiAgICAgIGNvbnN0IGEgPSB2YWxpZGF0aW9uLmVycm9yLmZvcm1hdCgpLl9lcnJvcnMuam9pbignLCAnKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcihg6Ly45YWl6LOH5paZ5pyJ6KqkOiAke2F9YCk7XG4gIH1cblxuICBjb25zdCByYW5nZSA9IGAke01FTlVfU0hFRVRfTkFNRX0hQTpFYDtcbiAgY29uc3QgYWxsTWVudXNSYW5nZSA9IGAke01FTlVfU0hFRVRfTkFNRX0hQTI6QWA7XG4gIFxuICBjb25zdCBhbGxNZW51SWRzRGF0YSA9IGF3YWl0IGdldFNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgYWxsTWVudXNSYW5nZSk7XG4gIGNvbnN0IGxhc3RJZE51bSA9IGFsbE1lbnVJZHNEYXRhLmxlbmd0aCA+IDAgXG4gICAgICA/IE1hdGgubWF4KC4uLmFsbE1lbnVJZHNEYXRhLm1hcChyb3cgPT4gcGFyc2VJbnQoKHJvd1swXSB8fCAnbTAnKS5yZXBsYWNlKCdtJywgJycpLCAxMCkpLmZpbHRlcihudW0gPT4gIWlzTmFOKG51bSkpKVxuICAgICAgOiAwO1xuXG4gIGNvbnN0IG5ld0lkID0gYG0keyhsYXN0SWROdW0gKyAxKS50b1N0cmluZygpLnBhZFN0YXJ0KDMsICcwJyl9YDtcbiAgXG4gIGNvbnN0IHZhbHVlcyA9IFtcbiAgICBbbmV3SWQsIGl0ZW0udmVuZG9ySWQsIGl0ZW0ubmFtZSwgaXRlbS5wcmljZSwgJ1RSVUUnXSxcbiAgXTtcblxuICBhd2FpdCBhcHBlbmRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIHJhbmdlLCB2YWx1ZXMpO1xuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG59XG5cbmV4cG9ydCB0eXBlIFVwZGF0ZU1lbnVJdGVtUmVxdWVzdCA9IHtcbiAgICBpZDogc3RyaW5nO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBwcmljZTogbnVtYmVyO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlTWVudUl0ZW0oaXRlbTogVXBkYXRlTWVudUl0ZW1SZXF1ZXN0KTogUHJvbWlzZTx7IHN1Y2Nlc3M6IGJvb2xlYW4gfT4ge1xuICAgIGNvbnN0IHJhbmdlID0gYCR7TUVOVV9TSEVFVF9OQU1FfSFBMjpFYDtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0U2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCByYW5nZSk7XG5cbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwi5om+5LiN5Yiw6I+c5Zau6LOH5paZ44CCXCIpO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCByb3dJbmRleCA9IGRhdGEuZmluZEluZGV4KHJvdyA9PiByb3dbMF0gPT09IGl0ZW0uaWQpO1xuICAgIGlmIChyb3dJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGDmib7kuI3liLAgSUQg54K6ICR7aXRlbS5pZH0g55qE6I+c5Zau5ZOB6aCF44CCYCk7XG4gICAgfVxuXG4gICAgY29uc3Qgcm93VG9VcGRhdGUgPSByb3dJbmRleCArIDI7XG4gICAgY29uc3QgdXBkYXRlUmFuZ2UgPSBgJHtNRU5VX1NIRUVUX05BTUV9IUMke3Jvd1RvVXBkYXRlfTpFJHtyb3dUb1VwZGF0ZX1gO1xuICAgIGNvbnN0IHZhbHVlcyA9IFtbaXRlbS5uYW1lLCBpdGVtLnByaWNlLCAnVFJVRSddXTtcblxuICAgIGF3YWl0IHVwZGF0ZVNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgdXBkYXRlUmFuZ2UsIHZhbHVlcyk7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xufVxuXG5leHBvcnQgdHlwZSBEZWxldGVNZW51SXRlbVJlcXVlc3QgPSB7XG4gICAgaWQ6IHN0cmluZztcbn07XG5cbi8qKlxuICogRGVsZXRlcyBhIG1lbnUgaXRlbSBmcm9tIHRoZSAnbWVudXMnIHNoZWV0IGJ5IGl0cyBJRC5cbiAqIEBwYXJhbSB7RGVsZXRlTWVudUl0ZW1SZXF1ZXN0fSByZXEgLSBUaGUgcmVxdWVzdCBjb250YWluaW5nIHRoZSBpdGVtIElEIHRvIGRlbGV0ZS5cbiAqIEByZXR1cm5zIHtQcm9taXNlPHtzdWNjZXNzOiBib29sZWFufT59IEEgc3VjY2VzcyBmbGFnLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlTWVudUl0ZW0ocmVxOiBEZWxldGVNZW51SXRlbVJlcXVlc3QpOiBQcm9taXNlPHsgc3VjY2VzczogYm9vbGVhbiB9PiB7XG4gICAgY29uc3QgcmFuZ2UgPSBgJHtNRU5VX1NIRUVUX05BTUV9IUEyOkVgO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIHJhbmdlKTtcblxuICAgIGlmICghZGF0YSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCLmib7kuI3liLDoj5zllq7os4fmlpnjgIJcIik7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IHJvd0luZGV4ID0gZGF0YS5maW5kSW5kZXgocm93ID0+IHJvd1swXSA9PT0gcmVxLmlkKTtcbiAgICBcbiAgICBpZiAocm93SW5kZXggPT09IC0xKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGDmib7kuI3liLAgSUQg54K6ICR7cmVxLmlkfSDnmoToj5zllq7lk4HpoIXjgIJgKTtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UgfTsgLy8gSXRlbSBub3QgZm91bmRcbiAgICB9XG5cbiAgICAvLyBHb29nbGUgU2hlZXRzIEFQSSByb3cgaW5kaWNlcyBhcmUgMS1iYXNlZC4gU2hlZXQgZGF0YSBzdGFydHMgZnJvbSByb3cgMi5cbiAgICBjb25zdCByb3dUb1VwZGF0ZSA9IHJvd0luZGV4ICsgMjsgXG4gICAgY29uc3QgdXBkYXRlUmFuZ2UgPSBgJHtNRU5VX1NIRUVUX05BTUV9IUUke3Jvd1RvVXBkYXRlfWA7XG4gICAgXG4gICAgYXdhaXQgdXBkYXRlU2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCB1cGRhdGVSYW5nZSwgW1snRkFMU0UnXV0pO1xuICAgIFxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbn1cblxuXG4vLyAtLS0gTWVudSBPcHRpb24gRmxvd3MgLS0tXG5cbmV4cG9ydCB0eXBlIEFkZE1lbnVPcHRpb25SZXF1ZXN0ID0ge1xuICBtZW51SXRlbUlkOiBzdHJpbmc7XG4gIGdyb3VwTmFtZTogc3RyaW5nO1xuICBjaG9pY2VOYW1lOiBzdHJpbmc7XG4gIHByaWNlRGVsdGE6IG51bWJlcjtcbiAgaXNEZWZhdWx0OiBib29sZWFuO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkTWVudU9wdGlvbihyZXE6IEFkZE1lbnVPcHRpb25SZXF1ZXN0KTogUHJvbWlzZTx7IHN1Y2Nlc3M6IGJvb2xlYW4gfT4ge1xuICAvLyBJZiB0aGUgbmV3IG9wdGlvbiBpcyBkZWZhdWx0LCB1bnNldCBvdGhlciBkZWZhdWx0cyBpbiB0aGUgc2FtZSBncm91cC5cbiAgaWYgKHJlcS5pc0RlZmF1bHQpIHtcbiAgICBhd2FpdCBzZXRNZW51T3B0aW9uRGVmYXVsdCh7IG1lbnVJdGVtSWQ6IHJlcS5tZW51SXRlbUlkLCBncm91cE5hbWU6IHJlcS5ncm91cE5hbWUsIG9wdGlvbklkOiAnJyB9KTsgLy8gUGFzcyBlbXB0eSBvcHRpb25JZCB0byB1bnNldCBhbGwsIG5ldyBvbmUgd2lsbCBiZSBzZXRcbiAgfVxuXG4gIGNvbnN0IHJhbmdlID0gYCR7TUVOVV9PUFRJT05TX1NIRUVUX05BTUV9IUE6RmA7XG4gIGNvbnN0IGFsbE9wdGlvbnNSYW5nZSA9IGAke01FTlVfT1BUSU9OU19TSEVFVF9OQU1FfSFBMjpBYDtcbiAgXG4gIGNvbnN0IGFsbE9wdGlvbklkc0RhdGEgPSBhd2FpdCBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGFsbE9wdGlvbnNSYW5nZSk7XG4gIGNvbnN0IGxhc3RJZE51bSA9IGFsbE9wdGlvbklkc0RhdGEubGVuZ3RoID4gMCBcbiAgICAgID8gTWF0aC5tYXgoLi4uYWxsT3B0aW9uSWRzRGF0YS5tYXAocm93ID0+IHBhcnNlSW50KChyb3dbMF0gfHwgJ28wJykucmVwbGFjZSgnbycsICcnKSwgMTApKS5maWx0ZXIobnVtID0+ICFpc05hTihudW0pKSlcbiAgICAgIDogMDtcblxuICBjb25zdCBuZXdJZCA9IGBvJHsobGFzdElkTnVtICsgMSkudG9TdHJpbmcoKS5wYWRTdGFydCgzLCAnMCcpfWA7XG4gIFxuICBjb25zdCB2YWx1ZXMgPSBbW1xuICAgIG5ld0lkLCBcbiAgICByZXEubWVudUl0ZW1JZCwgXG4gICAgcmVxLmdyb3VwTmFtZSwgXG4gICAgcmVxLmNob2ljZU5hbWUsIFxuICAgIHJlcS5wcmljZURlbHRhLCBcbiAgICByZXEuaXNEZWZhdWx0ID8gJ1RSVUUnIDogJ0ZBTFNFJ1xuICBdXTtcblxuICBhd2FpdCBhcHBlbmRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIHJhbmdlLCB2YWx1ZXMpO1xuXG4gIC8vIElmIHRoZSBuZXcgb3B0aW9uIHdhcyBzZXQgdG8gZGVmYXVsdCwgZW5zdXJlIGl0IGlzIG5vdyB0aGUgb25seSBkZWZhdWx0IG9uZVxuICBpZihyZXEuaXNEZWZhdWx0KSB7XG4gICAgICBhd2FpdCBzZXRNZW51T3B0aW9uRGVmYXVsdCh7IG9wdGlvbklkOiBuZXdJZCwgbWVudUl0ZW1JZDogcmVxLm1lbnVJdGVtSWQsIGdyb3VwTmFtZTogcmVxLmdyb3VwTmFtZSB9KTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbn1cblxuXG5leHBvcnQgdHlwZSBEZWxldGVNZW51T3B0aW9uUmVxdWVzdCA9IHtcbiAgb3B0aW9uSWQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZU1lbnVPcHRpb24ocmVxOiBEZWxldGVNZW51T3B0aW9uUmVxdWVzdCk6IFByb21pc2U8eyBzdWNjZXNzOiBib29sZWFuIH0+IHtcbiAgY29uc3QgcmFuZ2UgPSBgJHtNRU5VX09QVElPTlNfU0hFRVRfTkFNRX0hQTI6RmA7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIHJhbmdlKTtcblxuICBpZiAoIWRhdGEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIuaJvuS4jeWIsOiPnOWWrumBuOmgheizh+aWmeOAglwiKTtcbiAgfVxuICBcbiAgY29uc3Qgcm93SW5kZXggPSBkYXRhLmZpbmRJbmRleChyb3cgPT4gcm93WzBdID09PSByZXEub3B0aW9uSWQpO1xuICBcbiAgaWYgKHJvd0luZGV4ID09PSAtMSkge1xuICAgICAgY29uc29sZS5sb2coYOaJvuS4jeWIsCBJRCDngrogJHtyZXEub3B0aW9uSWR9IOeahOiPnOWWrumBuOmgheOAgmApO1xuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UgfTsgLy8gSXRlbSBub3QgZm91bmRcbiAgfVxuXG4gIGNvbnN0IHJvd1RvRGVsZXRlID0gcm93SW5kZXggKyAyOyBcbiAgY29uc3QgY2xlYXJSYW5nZSA9IGAke01FTlVfT1BUSU9OU19TSEVFVF9OQU1FfSFBJHtyb3dUb0RlbGV0ZX06RiR7cm93VG9EZWxldGV9YDtcblxuICBhd2FpdCBjbGVhclNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgY2xlYXJSYW5nZSk7XG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbn1cblxuZXhwb3J0IHR5cGUgU2V0TWVudU9wdGlvbkRlZmF1bHRSZXF1ZXN0ID0ge1xuICBvcHRpb25JZDogc3RyaW5nOyAvLyBUaGUgb3B0aW9uIHRvIHNldCBhcyBkZWZhdWx0LiBJZiBlbXB0eSwgYWxsIG9wdGlvbnMgaW4gZ3JvdXAgd2lsbCBiZSB1bnNldC5cbiAgbWVudUl0ZW1JZDogc3RyaW5nO1xuICBncm91cE5hbWU6IHN0cmluZztcbn1cblxuLyoqXG4gKiBTZXRzIGEgc3BlY2lmaWMgb3B0aW9uIGFzIHRoZSBkZWZhdWx0IGZvciBpdHMgZ3JvdXAsIHVuc2V0dGluZyBhbnkgcHJldmlvdXMgZGVmYXVsdC5cbiAqIEBwYXJhbSByZXEgVGhlIHJlcXVlc3QgY29udGFpbmluZyBvcHRpb24sIG1lbnUgaXRlbSwgYW5kIGdyb3VwIGlkZW50aWZpZXJzLlxuICogQHJldHVybnMgQSBzdWNjZXNzIGZsYWcuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZXRNZW51T3B0aW9uRGVmYXVsdChyZXE6IFNldE1lbnVPcHRpb25EZWZhdWx0UmVxdWVzdCk6IFByb21pc2U8eyBzdWNjZXNzOiBib29sZWFuIH0+IHtcbiAgICBjb25zdCB7IG9wdGlvbklkLCBtZW51SXRlbUlkLCBncm91cE5hbWUgfSA9IHJlcTtcbiAgICBjb25zdCByYW5nZSA9IGAke01FTlVfT1BUSU9OU19TSEVFVF9OQU1FfSFBMjpGYDtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0U2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCByYW5nZSk7XG5cbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwi5om+5LiN5Yiw6I+c5Zau6YG46aCF6LOH5paZ44CCXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IHVwZGF0ZXMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3Qgcm93ID0gZGF0YVtpXTtcbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIG9wdGlvbiBiZWxvbmdzIHRvIHRoZSBzYW1lIG1lbnUgaXRlbSBhbmQgZ3JvdXBcbiAgICAgICAgaWYgKHJvd1sxXSA9PT0gbWVudUl0ZW1JZCAmJiByb3dbMl0gPT09IGdyb3VwTmFtZSkge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudE9wdGlvbklkID0gcm93WzBdO1xuICAgICAgICAgICAgY29uc3QgaXNDdXJyZW50bHlEZWZhdWx0ID0gcm93WzVdID09PSAnVFJVRSc7XG4gICAgICAgICAgICBjb25zdCBzaG91bGRCZURlZmF1bHQgPSBjdXJyZW50T3B0aW9uSWQgPT09IG9wdGlvbklkO1xuXG4gICAgICAgICAgICAvLyBJZiB0aGlzIHJvdyBuZWVkcyB0byBjaGFuZ2UgaXRzIGRlZmF1bHQgc3RhdHVzXG4gICAgICAgICAgICBpZiAoaXNDdXJyZW50bHlEZWZhdWx0ICE9PSBzaG91bGRCZURlZmF1bHQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByb3dUb1VwZGF0ZSA9IGkgKyAyOyAvLyArMiBiZWNhdXNlIHNoZWV0IGlzIDEtaW5kZXhlZCBhbmQgd2Ugc2tpcHBlZCBoZWFkZXJcbiAgICAgICAgICAgICAgICB1cGRhdGVzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICByYW5nZTogYCR7TUVOVV9PUFRJT05TX1NIRUVUX05BTUV9IUYke3Jvd1RvVXBkYXRlfWAsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlczogW1tzaG91bGRCZURlZmF1bHQgPyAnVFJVRScgOiAnRkFMU0UnXV0sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodXBkYXRlcy5sZW5ndGggPiAwKSB7XG4gICAgICBmb3IgKGNvbnN0IHVwZGF0ZSBvZiB1cGRhdGVzKSB7XG4gICAgICAgICAgYXdhaXQgdXBkYXRlU2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCB1cGRhdGUucmFuZ2UsIHVwZGF0ZS52YWx1ZXMpO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Im1TQXNSc0IifQ==
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/ai/flows/data:80c0e4 [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"402844278bf4e6b6c7dd9138a667ae825f137897c0":"setMenuOptionDefault"},"src/ai/flows/menu-flow.ts",""] */ __turbopack_context__.s({
    "setMenuOptionDefault": (()=>setMenuOptionDefault)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var setMenuOptionDefault = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("402844278bf4e6b6c7dd9138a667ae825f137897c0", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "setMenuOptionDefault"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vbWVudS1mbG93LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuJ3VzZSBzZXJ2ZXInO1xuLyoqXG4gKiBAZmlsZU92ZXJ2aWV3IEZsb3cgZm9yIGhhbmRsaW5nIG1lbnUgZGF0YSBmcm9tIEdvb2dsZSBTaGVldHMuXG4gKi9cbmltcG9ydCB7IGdldFNoZWV0RGF0YSwgYXBwZW5kU2hlZXREYXRhLCBjbGVhclNoZWV0RGF0YSwgdXBkYXRlU2hlZXREYXRhIH0gZnJvbSAnQC9zZXJ2aWNlcy9zaGVldC1zZXJ2aWNlJztcbmltcG9ydCB7IHogfSBmcm9tICd6b2QnO1xuXG4vLyBUaGUgSUQgb2YgeW91ciBHb29nbGUgU2hlZXRcbmNvbnN0IFNQUkVBRFNIRUVUX0lEID0gJzFaajJoMGNZbHJiMm1CYU5nbDEtUG9PSzd0bENDd0RjY0FYbjV3NjZocDRjJztcbmNvbnN0IE1FTlVfU0hFRVRfTkFNRSA9ICdtZW51cyc7XG5jb25zdCBNRU5VX09QVElPTlNfU0hFRVRfTkFNRSA9ICdtZW51X29wdGlvbnMnO1xuXG5leHBvcnQgdHlwZSBNZW51T3B0aW9uQ2hvaWNlID0ge1xuICBpZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIHByaWNlRGVsdGE6IG51bWJlcjtcbiAgaXNEZWZhdWx0OiBib29sZWFuO1xufVxuXG5leHBvcnQgdHlwZSBNZW51T3B0aW9uR3JvdXAgPSB7XG4gIG5hbWU6IHN0cmluZztcbiAgY2hvaWNlczogTWVudU9wdGlvbkNob2ljZVtdO1xufVxuXG5leHBvcnQgdHlwZSBNZW51SXRlbSA9IHtcbiAgaWQ6IHN0cmluZztcbiAgdmVuZG9ySWQ6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBwcmljZTogbnVtYmVyO1xuICBpc0FjdGl2ZTogYm9vbGVhbjtcbiAgb3B0aW9ucz86IE1lbnVPcHRpb25Hcm91cFtdO1xufTtcblxuLyoqXG4gKiBSZXRyaWV2ZXMgYWxsIG1lbnUgaXRlbXMgZm9yIGEgZ2l2ZW4gdmVuZG9yIGZyb20gdGhlICdtZW51cycgc2hlZXQsIGluY2x1ZGluZyB0aGVpciBvcHRpb25zLlxuICogQHBhcmFtIHtzdHJpbmd9IHZlbmRvcklkIFRoZSBJRCBvZiB0aGUgdmVuZG9yLlxuICogQHJldHVybnMge1Byb21pc2U8TWVudUl0ZW1bXT59IEEgbGlzdCBvZiBtZW51IGl0ZW1zIHdpdGggdGhlaXIgb3B0aW9ucy5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE1lbnVzQnlWZW5kb3JJZCh2ZW5kb3JJZDogc3RyaW5nKTogUHJvbWlzZTxNZW51SXRlbVtdPiB7XG4gIHRyeSB7XG4gICAgY29uc3QgbWVudVNoZWV0RGF0YSA9IGF3YWl0IGdldFNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgTUVOVV9TSEVFVF9OQU1FKTtcbiAgICBjb25zdCBvcHRpb25zU2hlZXREYXRhID0gYXdhaXQgZ2V0U2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCBNRU5VX09QVElPTlNfU0hFRVRfTkFNRSk7XG4gICAgXG4gICAgaWYgKCFtZW51U2hlZXREYXRhIHx8IG1lbnVTaGVldERhdGEubGVuZ3RoIDwgMikge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIGNvbnN0IG1lbnVIZWFkZXJzID0gbWVudVNoZWV0RGF0YVswXTtcbiAgICBjb25zdCBtZW51Um93cyA9IG1lbnVTaGVldERhdGEuc2xpY2UoMSk7XG5cbiAgICBjb25zdCBoZWFkZXJNYXAgPSBtZW51SGVhZGVycy5yZWR1Y2UoKGFjYywgaGVhZGVyLCBpbmRleCkgPT4ge1xuICAgICAgICBhY2NbaGVhZGVyXSA9IGluZGV4O1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgIH0sIHt9IGFzIFJlY29yZDxzdHJpbmcsIG51bWJlcj4pO1xuXG5cbiAgICBjb25zdCBhbGxJdGVtczogTWVudUl0ZW1bXSA9IG1lbnVSb3dzXG4gICAgICAuZmlsdGVyKHJvdyA9PiByb3cubGVuZ3RoID4gMCAmJiByb3dbaGVhZGVyTWFwWyd2ZW5kb3JJZCddXSA9PT0gdmVuZG9ySWQgJiYgcm93W2hlYWRlck1hcFsnaXNBY3RpdmUnXV0gPT09ICdUUlVFJylcbiAgICAgIC5tYXAocm93ID0+ICh7XG4gICAgICAgIGlkOiByb3dbaGVhZGVyTWFwWydpZCddXSB8fCAnJyxcbiAgICAgICAgdmVuZG9ySWQ6IHJvd1toZWFkZXJNYXBbJ3ZlbmRvcklkJ11dIHx8ICcnLFxuICAgICAgICBuYW1lOiByb3dbaGVhZGVyTWFwWyduYW1lJ11dIHx8ICcnLFxuICAgICAgICBwcmljZTogcGFyc2VJbnQocm93W2hlYWRlck1hcFsncHJpY2UnXV0gfHwgJzAnLCAxMCksXG4gICAgICAgIGlzQWN0aXZlOiByb3dbaGVhZGVyTWFwWydpc0FjdGl2ZSddXSA9PT0gJ1RSVUUnLFxuICAgICAgICBvcHRpb25zOiBbXSxcbiAgICAgIH0pKTtcbiAgICAgIFxuICAgIGlmIChvcHRpb25zU2hlZXREYXRhICYmIG9wdGlvbnNTaGVldERhdGEubGVuZ3RoID4gMSkge1xuICAgICAgY29uc3Qgb3B0aW9uc0hlYWRlcnMgPSBvcHRpb25zU2hlZXREYXRhWzBdO1xuICAgICAgY29uc3Qgb3B0aW9uc1Jvd3MgPSBvcHRpb25zU2hlZXREYXRhLnNsaWNlKDEpO1xuICAgICAgY29uc3Qgb3B0aW9uc0hlYWRlck1hcCA9IG9wdGlvbnNIZWFkZXJzLnJlZHVjZSgoYWNjLCBoZWFkZXIsIGluZGV4KSA9PiB7XG4gICAgICAgICAgYWNjW2hlYWRlcl0gPSBpbmRleDtcbiAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgfSwge30gYXMgUmVjb3JkPHN0cmluZywgbnVtYmVyPik7XG5cblxuICAgICAgY29uc3QgYWxsT3B0aW9ucyA9IG9wdGlvbnNSb3dzLm1hcChyb3cgPT4gKHtcbiAgICAgICAgaWQ6IHJvd1tvcHRpb25zSGVhZGVyTWFwWydpZCddXSB8fCAnJyxcbiAgICAgICAgbWVudUl0ZW1JZDogcm93W29wdGlvbnNIZWFkZXJNYXBbJ21lbnVJdGVtSWQnXV0gfHwgJycsXG4gICAgICAgIGdyb3VwTmFtZTogcm93W29wdGlvbnNIZWFkZXJNYXBbJ2dyb3VwTmFtZSddXSB8fCAnJyxcbiAgICAgICAgY2hvaWNlTmFtZTogcm93W29wdGlvbnNIZWFkZXJNYXBbJ2Nob2ljZU5hbWUnXV0gfHwgJycsXG4gICAgICAgIHByaWNlRGVsdGE6IHBhcnNlSW50KHJvd1tvcHRpb25zSGVhZGVyTWFwWydwcmljZURlbHRhJ11dIHx8ICcwJywgMTApLFxuICAgICAgICBpc0RlZmF1bHQ6IHJvd1tvcHRpb25zSGVhZGVyTWFwWydpc0RlZmF1bHQnXV0gPT09ICdUUlVFJyxcbiAgICAgIH0pKTtcblxuICAgICAgLy8gR3JvdXAgb3B0aW9ucyBieSBtZW51IGl0ZW0gSURcbiAgICAgIGNvbnN0IG9wdGlvbnNCeU1lbnVJdGVtID0gYWxsT3B0aW9ucy5yZWR1Y2UoKGFjYywgb3B0aW9uKSA9PiB7XG4gICAgICAgIGlmICghYWNjW29wdGlvbi5tZW51SXRlbUlkXSkge1xuICAgICAgICAgIGFjY1tvcHRpb24ubWVudUl0ZW1JZF0gPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBhY2Nbb3B0aW9uLm1lbnVJdGVtSWRdLnB1c2gob3B0aW9uKTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH0sIHt9IGFzIFJlY29yZDxzdHJpbmcsIHR5cGVvZiBhbGxPcHRpb25zPik7XG5cblxuICAgICAgLy8gQXR0YWNoIG9wdGlvbnMgdG8gbWVudSBpdGVtc1xuICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGFsbEl0ZW1zKSB7XG4gICAgICAgIGlmIChvcHRpb25zQnlNZW51SXRlbVtpdGVtLmlkXSkge1xuICAgICAgICAgIGNvbnN0IGl0ZW1PcHRpb25zID0gb3B0aW9uc0J5TWVudUl0ZW1baXRlbS5pZF07XG4gICAgICAgICAgY29uc3QgZ3JvdXBzID0gaXRlbU9wdGlvbnMucmVkdWNlKChhY2MsIG9wdGlvbikgPT4ge1xuICAgICAgICAgICAgaWYgKCFhY2Nbb3B0aW9uLmdyb3VwTmFtZV0pIHtcbiAgICAgICAgICAgICAgYWNjW29wdGlvbi5ncm91cE5hbWVdID0geyBuYW1lOiBvcHRpb24uZ3JvdXBOYW1lLCBjaG9pY2VzOiBbXSB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYWNjW29wdGlvbi5ncm91cE5hbWVdLmNob2ljZXMucHVzaCh7XG4gICAgICAgICAgICAgIGlkOiBvcHRpb24uaWQsXG4gICAgICAgICAgICAgIG5hbWU6IG9wdGlvbi5jaG9pY2VOYW1lLFxuICAgICAgICAgICAgICBwcmljZURlbHRhOiBvcHRpb24ucHJpY2VEZWx0YSxcbiAgICAgICAgICAgICAgaXNEZWZhdWx0OiBvcHRpb24uaXNEZWZhdWx0LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgIH0sIHt9IGFzIFJlY29yZDxzdHJpbmcsIE1lbnVPcHRpb25Hcm91cD4pO1xuICAgICAgICAgIGl0ZW0ub3B0aW9ucyA9IE9iamVjdC52YWx1ZXMoZ3JvdXBzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICByZXR1cm4gYWxsSXRlbXM7XG5cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwi6K6A5Y+W6I+c5Zau5aSx5pWXOlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIFtdO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIEFkZE1lbnVJdGVtUmVxdWVzdCA9IHtcbiAgdmVuZG9ySWQ6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBwcmljZTogbnVtYmVyO1xufTtcblxuLyoqXG4gKiBBZGRzIGEgbmV3IG1lbnUgaXRlbSB0byB0aGUgJ21lbnVzJyBzaGVldC5cbiAqIEBwYXJhbSB7QWRkTWVudUl0ZW1SZXF1ZXN0fSBpdGVtIC0gVGhlIG1lbnUgaXRlbSBkYXRhIHRvIGFkZC5cbiAqIEByZXR1cm5zIHtQcm9taXNlPHtzdWNjZXNzOiBib29sZWFufT59IEEgc3VjY2VzcyBmbGFnLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkTWVudUl0ZW0oaXRlbTogQWRkTWVudUl0ZW1SZXF1ZXN0KTogUHJvbWlzZTx7IHN1Y2Nlc3M6IGJvb2xlYW4gfT4ge1xuICBjb25zdCBBZGRNZW51SXRlbVNjaGVtYSA9IHoub2JqZWN0KHtcbiAgICB2ZW5kb3JJZDogei5zdHJpbmcoKSxcbiAgICBuYW1lOiB6LnN0cmluZygpLm1pbigxLCBcIuWTgemgheWQjeeoseS4jeiDveeCuuepulwiKSxcbiAgICBwcmljZTogei5udW1iZXIoKS5wb3NpdGl2ZShcIuWDueagvOW/hemgiOaYr+ato+aVuFwiKSxcbiAgfSk7XG5cbiAgY29uc3QgdmFsaWRhdGlvbiA9IEFkZE1lbnVJdGVtU2NoZW1hLnNhZmVQYXJzZShpdGVtKTtcbiAgaWYgKCF2YWxpZGF0aW9uLnN1Y2Nlc3MpIHtcbiAgICAgIGNvbnN0IGEgPSB2YWxpZGF0aW9uLmVycm9yLmZvcm1hdCgpLl9lcnJvcnMuam9pbignLCAnKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcihg6Ly45YWl6LOH5paZ5pyJ6KqkOiAke2F9YCk7XG4gIH1cblxuICBjb25zdCByYW5nZSA9IGAke01FTlVfU0hFRVRfTkFNRX0hQTpFYDtcbiAgY29uc3QgYWxsTWVudXNSYW5nZSA9IGAke01FTlVfU0hFRVRfTkFNRX0hQTI6QWA7XG4gIFxuICBjb25zdCBhbGxNZW51SWRzRGF0YSA9IGF3YWl0IGdldFNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgYWxsTWVudXNSYW5nZSk7XG4gIGNvbnN0IGxhc3RJZE51bSA9IGFsbE1lbnVJZHNEYXRhLmxlbmd0aCA+IDAgXG4gICAgICA/IE1hdGgubWF4KC4uLmFsbE1lbnVJZHNEYXRhLm1hcChyb3cgPT4gcGFyc2VJbnQoKHJvd1swXSB8fCAnbTAnKS5yZXBsYWNlKCdtJywgJycpLCAxMCkpLmZpbHRlcihudW0gPT4gIWlzTmFOKG51bSkpKVxuICAgICAgOiAwO1xuXG4gIGNvbnN0IG5ld0lkID0gYG0keyhsYXN0SWROdW0gKyAxKS50b1N0cmluZygpLnBhZFN0YXJ0KDMsICcwJyl9YDtcbiAgXG4gIGNvbnN0IHZhbHVlcyA9IFtcbiAgICBbbmV3SWQsIGl0ZW0udmVuZG9ySWQsIGl0ZW0ubmFtZSwgaXRlbS5wcmljZSwgJ1RSVUUnXSxcbiAgXTtcblxuICBhd2FpdCBhcHBlbmRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIHJhbmdlLCB2YWx1ZXMpO1xuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG59XG5cbmV4cG9ydCB0eXBlIFVwZGF0ZU1lbnVJdGVtUmVxdWVzdCA9IHtcbiAgICBpZDogc3RyaW5nO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBwcmljZTogbnVtYmVyO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlTWVudUl0ZW0oaXRlbTogVXBkYXRlTWVudUl0ZW1SZXF1ZXN0KTogUHJvbWlzZTx7IHN1Y2Nlc3M6IGJvb2xlYW4gfT4ge1xuICAgIGNvbnN0IHJhbmdlID0gYCR7TUVOVV9TSEVFVF9OQU1FfSFBMjpFYDtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0U2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCByYW5nZSk7XG5cbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwi5om+5LiN5Yiw6I+c5Zau6LOH5paZ44CCXCIpO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCByb3dJbmRleCA9IGRhdGEuZmluZEluZGV4KHJvdyA9PiByb3dbMF0gPT09IGl0ZW0uaWQpO1xuICAgIGlmIChyb3dJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGDmib7kuI3liLAgSUQg54K6ICR7aXRlbS5pZH0g55qE6I+c5Zau5ZOB6aCF44CCYCk7XG4gICAgfVxuXG4gICAgY29uc3Qgcm93VG9VcGRhdGUgPSByb3dJbmRleCArIDI7XG4gICAgY29uc3QgdXBkYXRlUmFuZ2UgPSBgJHtNRU5VX1NIRUVUX05BTUV9IUMke3Jvd1RvVXBkYXRlfTpFJHtyb3dUb1VwZGF0ZX1gO1xuICAgIGNvbnN0IHZhbHVlcyA9IFtbaXRlbS5uYW1lLCBpdGVtLnByaWNlLCAnVFJVRSddXTtcblxuICAgIGF3YWl0IHVwZGF0ZVNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgdXBkYXRlUmFuZ2UsIHZhbHVlcyk7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xufVxuXG5leHBvcnQgdHlwZSBEZWxldGVNZW51SXRlbVJlcXVlc3QgPSB7XG4gICAgaWQ6IHN0cmluZztcbn07XG5cbi8qKlxuICogRGVsZXRlcyBhIG1lbnUgaXRlbSBmcm9tIHRoZSAnbWVudXMnIHNoZWV0IGJ5IGl0cyBJRC5cbiAqIEBwYXJhbSB7RGVsZXRlTWVudUl0ZW1SZXF1ZXN0fSByZXEgLSBUaGUgcmVxdWVzdCBjb250YWluaW5nIHRoZSBpdGVtIElEIHRvIGRlbGV0ZS5cbiAqIEByZXR1cm5zIHtQcm9taXNlPHtzdWNjZXNzOiBib29sZWFufT59IEEgc3VjY2VzcyBmbGFnLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlTWVudUl0ZW0ocmVxOiBEZWxldGVNZW51SXRlbVJlcXVlc3QpOiBQcm9taXNlPHsgc3VjY2VzczogYm9vbGVhbiB9PiB7XG4gICAgY29uc3QgcmFuZ2UgPSBgJHtNRU5VX1NIRUVUX05BTUV9IUEyOkVgO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIHJhbmdlKTtcblxuICAgIGlmICghZGF0YSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCLmib7kuI3liLDoj5zllq7os4fmlpnjgIJcIik7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IHJvd0luZGV4ID0gZGF0YS5maW5kSW5kZXgocm93ID0+IHJvd1swXSA9PT0gcmVxLmlkKTtcbiAgICBcbiAgICBpZiAocm93SW5kZXggPT09IC0xKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGDmib7kuI3liLAgSUQg54K6ICR7cmVxLmlkfSDnmoToj5zllq7lk4HpoIXjgIJgKTtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UgfTsgLy8gSXRlbSBub3QgZm91bmRcbiAgICB9XG5cbiAgICAvLyBHb29nbGUgU2hlZXRzIEFQSSByb3cgaW5kaWNlcyBhcmUgMS1iYXNlZC4gU2hlZXQgZGF0YSBzdGFydHMgZnJvbSByb3cgMi5cbiAgICBjb25zdCByb3dUb1VwZGF0ZSA9IHJvd0luZGV4ICsgMjsgXG4gICAgY29uc3QgdXBkYXRlUmFuZ2UgPSBgJHtNRU5VX1NIRUVUX05BTUV9IUUke3Jvd1RvVXBkYXRlfWA7XG4gICAgXG4gICAgYXdhaXQgdXBkYXRlU2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCB1cGRhdGVSYW5nZSwgW1snRkFMU0UnXV0pO1xuICAgIFxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbn1cblxuXG4vLyAtLS0gTWVudSBPcHRpb24gRmxvd3MgLS0tXG5cbmV4cG9ydCB0eXBlIEFkZE1lbnVPcHRpb25SZXF1ZXN0ID0ge1xuICBtZW51SXRlbUlkOiBzdHJpbmc7XG4gIGdyb3VwTmFtZTogc3RyaW5nO1xuICBjaG9pY2VOYW1lOiBzdHJpbmc7XG4gIHByaWNlRGVsdGE6IG51bWJlcjtcbiAgaXNEZWZhdWx0OiBib29sZWFuO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkTWVudU9wdGlvbihyZXE6IEFkZE1lbnVPcHRpb25SZXF1ZXN0KTogUHJvbWlzZTx7IHN1Y2Nlc3M6IGJvb2xlYW4gfT4ge1xuICAvLyBJZiB0aGUgbmV3IG9wdGlvbiBpcyBkZWZhdWx0LCB1bnNldCBvdGhlciBkZWZhdWx0cyBpbiB0aGUgc2FtZSBncm91cC5cbiAgaWYgKHJlcS5pc0RlZmF1bHQpIHtcbiAgICBhd2FpdCBzZXRNZW51T3B0aW9uRGVmYXVsdCh7IG1lbnVJdGVtSWQ6IHJlcS5tZW51SXRlbUlkLCBncm91cE5hbWU6IHJlcS5ncm91cE5hbWUsIG9wdGlvbklkOiAnJyB9KTsgLy8gUGFzcyBlbXB0eSBvcHRpb25JZCB0byB1bnNldCBhbGwsIG5ldyBvbmUgd2lsbCBiZSBzZXRcbiAgfVxuXG4gIGNvbnN0IHJhbmdlID0gYCR7TUVOVV9PUFRJT05TX1NIRUVUX05BTUV9IUE6RmA7XG4gIGNvbnN0IGFsbE9wdGlvbnNSYW5nZSA9IGAke01FTlVfT1BUSU9OU19TSEVFVF9OQU1FfSFBMjpBYDtcbiAgXG4gIGNvbnN0IGFsbE9wdGlvbklkc0RhdGEgPSBhd2FpdCBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIGFsbE9wdGlvbnNSYW5nZSk7XG4gIGNvbnN0IGxhc3RJZE51bSA9IGFsbE9wdGlvbklkc0RhdGEubGVuZ3RoID4gMCBcbiAgICAgID8gTWF0aC5tYXgoLi4uYWxsT3B0aW9uSWRzRGF0YS5tYXAocm93ID0+IHBhcnNlSW50KChyb3dbMF0gfHwgJ28wJykucmVwbGFjZSgnbycsICcnKSwgMTApKS5maWx0ZXIobnVtID0+ICFpc05hTihudW0pKSlcbiAgICAgIDogMDtcblxuICBjb25zdCBuZXdJZCA9IGBvJHsobGFzdElkTnVtICsgMSkudG9TdHJpbmcoKS5wYWRTdGFydCgzLCAnMCcpfWA7XG4gIFxuICBjb25zdCB2YWx1ZXMgPSBbW1xuICAgIG5ld0lkLCBcbiAgICByZXEubWVudUl0ZW1JZCwgXG4gICAgcmVxLmdyb3VwTmFtZSwgXG4gICAgcmVxLmNob2ljZU5hbWUsIFxuICAgIHJlcS5wcmljZURlbHRhLCBcbiAgICByZXEuaXNEZWZhdWx0ID8gJ1RSVUUnIDogJ0ZBTFNFJ1xuICBdXTtcblxuICBhd2FpdCBhcHBlbmRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIHJhbmdlLCB2YWx1ZXMpO1xuXG4gIC8vIElmIHRoZSBuZXcgb3B0aW9uIHdhcyBzZXQgdG8gZGVmYXVsdCwgZW5zdXJlIGl0IGlzIG5vdyB0aGUgb25seSBkZWZhdWx0IG9uZVxuICBpZihyZXEuaXNEZWZhdWx0KSB7XG4gICAgICBhd2FpdCBzZXRNZW51T3B0aW9uRGVmYXVsdCh7IG9wdGlvbklkOiBuZXdJZCwgbWVudUl0ZW1JZDogcmVxLm1lbnVJdGVtSWQsIGdyb3VwTmFtZTogcmVxLmdyb3VwTmFtZSB9KTtcbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbn1cblxuXG5leHBvcnQgdHlwZSBEZWxldGVNZW51T3B0aW9uUmVxdWVzdCA9IHtcbiAgb3B0aW9uSWQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZU1lbnVPcHRpb24ocmVxOiBEZWxldGVNZW51T3B0aW9uUmVxdWVzdCk6IFByb21pc2U8eyBzdWNjZXNzOiBib29sZWFuIH0+IHtcbiAgY29uc3QgcmFuZ2UgPSBgJHtNRU5VX09QVElPTlNfU0hFRVRfTkFNRX0hQTI6RmA7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRTaGVldERhdGEoU1BSRUFEU0hFRVRfSUQsIHJhbmdlKTtcblxuICBpZiAoIWRhdGEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIuaJvuS4jeWIsOiPnOWWrumBuOmgheizh+aWmeOAglwiKTtcbiAgfVxuICBcbiAgY29uc3Qgcm93SW5kZXggPSBkYXRhLmZpbmRJbmRleChyb3cgPT4gcm93WzBdID09PSByZXEub3B0aW9uSWQpO1xuICBcbiAgaWYgKHJvd0luZGV4ID09PSAtMSkge1xuICAgICAgY29uc29sZS5sb2coYOaJvuS4jeWIsCBJRCDngrogJHtyZXEub3B0aW9uSWR9IOeahOiPnOWWrumBuOmgheOAgmApO1xuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UgfTsgLy8gSXRlbSBub3QgZm91bmRcbiAgfVxuXG4gIGNvbnN0IHJvd1RvRGVsZXRlID0gcm93SW5kZXggKyAyOyBcbiAgY29uc3QgY2xlYXJSYW5nZSA9IGAke01FTlVfT1BUSU9OU19TSEVFVF9OQU1FfSFBJHtyb3dUb0RlbGV0ZX06RiR7cm93VG9EZWxldGV9YDtcblxuICBhd2FpdCBjbGVhclNoZWV0RGF0YShTUFJFQURTSEVFVF9JRCwgY2xlYXJSYW5nZSk7XG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbn1cblxuZXhwb3J0IHR5cGUgU2V0TWVudU9wdGlvbkRlZmF1bHRSZXF1ZXN0ID0ge1xuICBvcHRpb25JZDogc3RyaW5nOyAvLyBUaGUgb3B0aW9uIHRvIHNldCBhcyBkZWZhdWx0LiBJZiBlbXB0eSwgYWxsIG9wdGlvbnMgaW4gZ3JvdXAgd2lsbCBiZSB1bnNldC5cbiAgbWVudUl0ZW1JZDogc3RyaW5nO1xuICBncm91cE5hbWU6IHN0cmluZztcbn1cblxuLyoqXG4gKiBTZXRzIGEgc3BlY2lmaWMgb3B0aW9uIGFzIHRoZSBkZWZhdWx0IGZvciBpdHMgZ3JvdXAsIHVuc2V0dGluZyBhbnkgcHJldmlvdXMgZGVmYXVsdC5cbiAqIEBwYXJhbSByZXEgVGhlIHJlcXVlc3QgY29udGFpbmluZyBvcHRpb24sIG1lbnUgaXRlbSwgYW5kIGdyb3VwIGlkZW50aWZpZXJzLlxuICogQHJldHVybnMgQSBzdWNjZXNzIGZsYWcuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZXRNZW51T3B0aW9uRGVmYXVsdChyZXE6IFNldE1lbnVPcHRpb25EZWZhdWx0UmVxdWVzdCk6IFByb21pc2U8eyBzdWNjZXNzOiBib29sZWFuIH0+IHtcbiAgICBjb25zdCB7IG9wdGlvbklkLCBtZW51SXRlbUlkLCBncm91cE5hbWUgfSA9IHJlcTtcbiAgICBjb25zdCByYW5nZSA9IGAke01FTlVfT1BUSU9OU19TSEVFVF9OQU1FfSFBMjpGYDtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0U2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCByYW5nZSk7XG5cbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwi5om+5LiN5Yiw6I+c5Zau6YG46aCF6LOH5paZ44CCXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IHVwZGF0ZXMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3Qgcm93ID0gZGF0YVtpXTtcbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIG9wdGlvbiBiZWxvbmdzIHRvIHRoZSBzYW1lIG1lbnUgaXRlbSBhbmQgZ3JvdXBcbiAgICAgICAgaWYgKHJvd1sxXSA9PT0gbWVudUl0ZW1JZCAmJiByb3dbMl0gPT09IGdyb3VwTmFtZSkge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudE9wdGlvbklkID0gcm93WzBdO1xuICAgICAgICAgICAgY29uc3QgaXNDdXJyZW50bHlEZWZhdWx0ID0gcm93WzVdID09PSAnVFJVRSc7XG4gICAgICAgICAgICBjb25zdCBzaG91bGRCZURlZmF1bHQgPSBjdXJyZW50T3B0aW9uSWQgPT09IG9wdGlvbklkO1xuXG4gICAgICAgICAgICAvLyBJZiB0aGlzIHJvdyBuZWVkcyB0byBjaGFuZ2UgaXRzIGRlZmF1bHQgc3RhdHVzXG4gICAgICAgICAgICBpZiAoaXNDdXJyZW50bHlEZWZhdWx0ICE9PSBzaG91bGRCZURlZmF1bHQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByb3dUb1VwZGF0ZSA9IGkgKyAyOyAvLyArMiBiZWNhdXNlIHNoZWV0IGlzIDEtaW5kZXhlZCBhbmQgd2Ugc2tpcHBlZCBoZWFkZXJcbiAgICAgICAgICAgICAgICB1cGRhdGVzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICByYW5nZTogYCR7TUVOVV9PUFRJT05TX1NIRUVUX05BTUV9IUYke3Jvd1RvVXBkYXRlfWAsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlczogW1tzaG91bGRCZURlZmF1bHQgPyAnVFJVRScgOiAnRkFMU0UnXV0sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodXBkYXRlcy5sZW5ndGggPiAwKSB7XG4gICAgICBmb3IgKGNvbnN0IHVwZGF0ZSBvZiB1cGRhdGVzKSB7XG4gICAgICAgICAgYXdhaXQgdXBkYXRlU2hlZXREYXRhKFNQUkVBRFNIRUVUX0lELCB1cGRhdGUucmFuZ2UsIHVwZGF0ZS52YWx1ZXMpO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6InVTQXVUc0IifQ==
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
"[project]/src/components/ui/switch.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Switch": (()=>Switch)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$switch$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-switch/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
const Switch = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$switch$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input", className),
        ...props,
        ref: ref,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$switch$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Thumb"], {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0")
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
_c1 = Switch;
Switch.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$switch$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"].displayName;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Switch$React.forwardRef");
__turbopack_context__.k.register(_c1, "Switch");
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
"[project]/src/app/admin/menu/[vendorId]/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>MenuAdminPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SiteHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SiteHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-toast.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-plus.js [app-client] (ecmascript) <export default as PlusCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/square-pen.js [app-client] (ecmascript) <export default as Edit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/save.js [app-client] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/alert-dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$data$3a$a829fc__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/ai/flows/data:a829fc [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$data$3a$0947c2__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/ai/flows/data:0947c2 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$data$3a$6e24f4__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/ai/flows/data:6e24f4 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$data$3a$396aef__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/ai/flows/data:396aef [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$data$3a$e4f767__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/ai/flows/data:e4f767 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$data$3a$1b519a__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/ai/flows/data:1b519a [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$data$3a$80c0e4__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/ai/flows/data:80c0e4 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$switch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/switch.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-client] (ecmascript)");
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
function MenuAdminPage() {
    _s();
    const { vendorId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const vendorName = searchParams.get('name') || '店家';
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const [menu, setMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [newItemName, setNewItemName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [newItemPrice, setNewItemPrice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isPending, startTransition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"])();
    const [editingState, setEditingState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedItem, setSelectedItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [newOptionGroup, setNewOptionGroup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [newOptionChoice, setNewOptionChoice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [newOptionPrice, setNewOptionPrice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('0');
    const [newOptionIsDefault, setNewOptionIsDefault] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const fetchMenu = async ()=>{
        setIsLoading(true);
        try {
            const fetchedMenu = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$data$3a$a829fc__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getMenusByVendorId"])(vendorId);
            setMenu(fetchedMenu);
            // If an item was selected, update its data
            if (selectedItem) {
                const updatedSelectedItem = fetchedMenu.find((item)=>item.id === selectedItem.id);
                setSelectedItem(updatedSelectedItem || null);
            }
        } catch (error) {
            console.error("讀取菜單失敗:", error);
            toast({
                variant: "destructive",
                title: "讀取菜單失敗",
                description: "無法從 Google Sheet 讀取菜單。"
            });
        } finally{
            setIsLoading(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MenuAdminPage.useEffect": ()=>{
            fetchMenu();
        }
    }["MenuAdminPage.useEffect"], [
        vendorId
    ]);
    const handleAddItem = (e)=>{
        e.preventDefault();
        if (!newItemName.trim() || !newItemPrice.trim()) {
            toast({
                variant: "destructive",
                title: "請輸入品項名稱和價格"
            });
            return;
        }
        const price = parseInt(newItemPrice, 10);
        if (isNaN(price) || price <= 0) {
            toast({
                variant: "destructive",
                title: "請輸入有效的價格"
            });
            return;
        }
        startTransition(async ()=>{
            try {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$data$3a$0947c2__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["addMenuItem"])({
                    vendorId,
                    name: newItemName,
                    price
                });
                toast({
                    title: "品項已新增",
                    description: `${newItemName} 已成功新增到菜單。`
                });
                setNewItemName('');
                setNewItemPrice('');
                await fetchMenu(); // Refresh list
            } catch (error) {
                toast({
                    variant: "destructive",
                    title: "新增失敗",
                    description: error instanceof Error ? error.message : "發生未知錯誤"
                });
            }
        });
    };
    const handleDeleteItem = (itemId, itemName)=>{
        startTransition(async ()=>{
            try {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$data$3a$6e24f4__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deleteMenuItem"])({
                    id: itemId
                });
                toast({
                    title: "品項已刪除",
                    description: `${itemName} 已從菜單移除。`
                });
                await fetchMenu(); // Refresh list
            } catch (error) {
                toast({
                    variant: "destructive",
                    title: "刪除失敗",
                    description: error instanceof Error ? error.message : "發生未知錯誤"
                });
            }
        });
    };
    const handleEditClick = (item)=>{
        setEditingState({
            itemId: item.id,
            name: item.name,
            price: item.price.toString()
        });
    };
    const handleCancelEdit = ()=>{
        setEditingState(null);
    };
    const handleSaveEdit = ()=>{
        if (!editingState) return;
        const price = parseInt(editingState.price, 10);
        if (isNaN(price) || price <= 0) {
            toast({
                variant: "destructive",
                title: "請輸入有效的價格"
            });
            return;
        }
        startTransition(async ()=>{
            try {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$data$3a$396aef__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["updateMenuItem"])({
                    id: editingState.itemId,
                    name: editingState.name,
                    price: price
                });
                toast({
                    title: "品項已更新"
                });
                setEditingState(null);
                await fetchMenu();
            } catch (error) {
                toast({
                    variant: "destructive",
                    title: "更新失敗",
                    description: error instanceof Error ? error.message : "發生未知錯誤"
                });
            }
        });
    };
    const handleAddOption = (e)=>{
        e.preventDefault();
        if (!selectedItem || !newOptionGroup.trim() || !newOptionChoice.trim()) {
            toast({
                variant: "destructive",
                title: "請輸入選項群組和選項名稱"
            });
            return;
        }
        const priceDelta = parseInt(newOptionPrice, 10);
        if (isNaN(priceDelta)) {
            toast({
                variant: "destructive",
                title: "請輸入有效的價格"
            });
            return;
        }
        startTransition(async ()=>{
            try {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$data$3a$e4f767__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["addMenuOption"])({
                    menuItemId: selectedItem.id,
                    groupName: newOptionGroup,
                    choiceName: newOptionChoice,
                    priceDelta,
                    isDefault: newOptionIsDefault
                });
                toast({
                    title: "選項已新增"
                });
                setNewOptionChoice('');
                setNewOptionPrice('0');
                setNewOptionIsDefault(false);
                // Keep group name for convenience
                await fetchMenu();
            } catch (error) {
                toast({
                    variant: "destructive",
                    title: "新增選項失敗",
                    description: error instanceof Error ? error.message : "發生未知錯誤"
                });
            }
        });
    };
    const handleDeleteOption = (optionId)=>{
        startTransition(async ()=>{
            try {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$data$3a$1b519a__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deleteMenuOption"])({
                    optionId
                });
                toast({
                    title: "選項已刪除"
                });
                await fetchMenu();
            } catch (error) {
                toast({
                    variant: "destructive",
                    title: "刪除選項失敗",
                    description: error instanceof Error ? error.message : "發生未知錯誤"
                });
            }
        });
    };
    const handleSetDefault = (optionId, menuItemId, groupName)=>{
        startTransition(async ()=>{
            try {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$data$3a$80c0e4__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["setMenuOptionDefault"])({
                    optionId,
                    menuItemId,
                    groupName
                });
                toast({
                    title: "預設選項已更新"
                });
                await fetchMenu();
            } catch (error) {
                toast({
                    variant: "destructive",
                    title: "設定預設失敗",
                    description: error instanceof Error ? error.message : "發生未知錯誤"
                });
            }
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-background font-body text-foreground",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SiteHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiteHeader"], {}, void 0, false, {
                fileName: "[project]/src/app/admin/menu/[vendorId]/page.tsx",
                lineNumber: 213,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "container mx-auto p-4 sm:p-6 lg:p-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/admin",
                            className: "flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/menu/[vendorId]/page.tsx",
                                    lineNumber: 217,
                                    columnNumber: 17
                                }, this),
                                "返回店家列表"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/menu/[vendorId]/page.tsx",
                            lineNumber: 216,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/menu/[vendorId]/page.tsx",
                        lineNumber: 215,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "font-headline text-3xl font-bold mb-2",
                        children: [
                            "編輯菜單：",
                            decodeURIComponent(vendorName)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/menu/[vendorId]/page.tsx",
                        lineNumber: 221,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted-foreground mb-6",
                        children: [
                            "管理 ",
                            decodeURIComponent(vendorName),
                            " 的菜單品項。"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/menu/[vendorId]/page.tsx",
                        lineNumber: 222,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "lg:col-span-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusCircle$3e$__["PlusCircle"], {
                                                            className: "h-6 w-6"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/menu/[vendorId]/page.tsx",
                                                            lineNumber: 230,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "新增菜單品項"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/menu/[vendorId]/page.tsx",
                                                            lineNumber: 231,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/menu/[vendorId]/page.tsx",
                                                    lineNumber: 229,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                                    children: [
                                                        "為 ",
                                                        decodeURIComponent(vendorName),
                                                        " 加入新的餐點。"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/menu/[vendorId]/page.tsx",
                                                    lineNumber: 233,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/menu/[vendorId]/page.tsx",
                                            lineNumber: 228,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                                onSubmit: handleAddItem,
                                                className: "space-y-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                        placeholder: "品項名稱 (例如: 雞腿飯)",
                                                        value: newItemName,
                                                        onChange: (e)=>setNewItemName(e.target.value),
                                                        disabled: isPending
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/menu/[vendorId]/page.tsx",
                                                        lineNumber: 237,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                        type: "number",
                                                        placeholder: "價格",
                                                        value: newItemPrice,
                                                        onChange: (e)=>setNewItemPrice(e.target.value),
                                                        disabled: isPending
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/menu/[vendorId]/page.tsx",
                                                        lineNumber: 243,
                                                        columnNumber: 19
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
                                                                    fileName: "[project]/src/app/admin/menu/[vendorId]/page.tsx",
                                                                    lineNumber: 251,
                                                                    columnNumber: 36
                                                                }, this),
                                                                " 新增中..."
                                                            ]
                                                        }, void 0, true) : '新增品項'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/menu/[vendorId]/page.tsx",
                                                        lineNumber: 250,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin/menu/[vendorId]/page.tsx",
                                                lineNumber: 236,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/menu/[vendorId]/page.tsx",
                                            lineNumber: 235,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/menu/[vendorId]/page.tsx",
                                    lineNumber: 227,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/menu/[vendorId]/page.tsx",
                                lineNumber: 226,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "lg:col-span-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                    children: "現有品項"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/menu/[vendorId]/page.tsx",
                                                    lineNumber: 262,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                                    children: [
                                                        "點擊品項右側的 ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                                            className: "inline h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/menu/[vendorId]/page.tsx",
                                                            lineNumber: 263,
                                                            columnNumber: 42
                                                        }, this),
                                                        " 來管理客製化選項。"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/menu/[vendorId]/page.tsx",
                                                    lineNumber: 263,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/menu/[vendorId]/page.tsx",
                                            lineNumber: 261,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                            className: "space-y-3",
                                            children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-center items-center py-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                        className: "h-6 w-6 animate-spin text-muted-foreground"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/menu/[vendorId]/page.tsx",
                                                        lineNumber: 268,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "ml-2 text-muted-foreground",
                                                        children: "讀取中..."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/menu/[vendorId]/page.tsx",
                                                        lineNumber: 269,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin/menu/[vendorId]/page.tsx",
                                                lineNumber: 267,
                                                columnNumber: 19
                                            }, this) : menu.length > 0 ? menu.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                                    className: "p-3 flex justify-between items-center transition-all duration-200",
                                                    style: {
                                                        boxShadow: selectedItem?.id === item.id ? '0 0 0 2px hsl(var(--ring))' : 'none'
                                                    },
                                                    children: [
                                                        editingState?.itemId === item.id ? // Editing View
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-grow space-y-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                    value: editingState.name,
                                                                    onChange: (e)=>setEditingState({
                                                                            ...editingState,
                                                                            name: e.target.value
                                                                        }),
                                                                    placeholder: "品項名稱",
                                                                    disabled: isPending
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/menu/[vendorId]/page.tsx",
                                                                    lineNumber: 281,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                    type: "number",
                                                                    value: editingState.price,
                                                                    onChange: (e)=>setEditingState({
                                                                            ...editingState,
                                                                            price: e.target.value
                                                                        }),
                                                                    placeholder: "價格",
                                                                    disabled: isPending
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/menu/[vendorId]/page.tsx",
                                                                    lineNumber: 282,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/admin/menu/[vendorId]/page.tsx",
                                                            lineNumber: 280,
                                                            columnNumber: 25
                                                        }, this) : // Default View
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-4",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "font-semibold",
                                                                        children: item.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/admin/menu/[vendorId]/page.tsx",
                                                                        lineNumber: 288,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm text-muted-foreground",
                                                                        children: [
                                                                            "$",
                                                                            item.price
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/admin/menu/[vendorId]/page.tsx",
                                                                        lineNumber: 289,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/admin/menu/[vendorId]/page.tsx",
                                                                lineNumber: 287,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/menu/[vendorId]/page.tsx",
                                                            lineNumber: 286,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-1",
                                                            children: editingState?.itemId === item.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                        variant: "ghost",
                                                                        size: "icon",
                                                                        onClick: handleSaveEdit,
                                                                        disabled: isPending,
                                                                        "aria-label": "儲存",
                                                                        children: [
                                                                            " ",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                                                                className: "h-4 w-4 text-primary"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/admin/menu/[vendorId]/page.tsx",
                                                                                lineNumber: 297,
                                                                                columnNumber: 128
                                                                            }, this),
                                                                            " "
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/admin/menu/[vendorId]/page.tsx",
                                                                        lineNumber: 297,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                        variant: "ghost",
                                                                        size: "icon",
                                                                        onClick: handleCancelEdit,
                                                                        disabled: isPending,
                                                                        "aria-label": "取消",
                                                                        children: [
                                                                            " ",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                                className: "h-4 w-4"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/admin/menu/[vendorId]/page.tsx",
                                                                                lineNumber: 298,
                                                                                columnNumber: 130
                                                                            }, this),
                                                                            " "
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/admin/menu/[vendorId]/page.tsx",
                                                                        lineNumber: 298,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                        variant: "ghost",
                                                                        size: "icon",
                                                                        onClick: ()=>handleEditClick(item),
                                                                        disabled: isPending,
                                                                        "aria-label": "編輯",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__["Edit"], {
                                                                            className: "h-4 w-4"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/admin/menu/[vendorId]/page.tsx",
                                                                            lineNumber: 302,
                                                                            columnNumber: 140
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/admin/menu/[vendorId]/page.tsx",
                                                                        lineNumber: 302,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                        variant: "ghost",
                                                                        size: "icon",
                                                                        onClick: ()=>setSelectedItem(item),
                                                                        "aria-label": "管理選項",
                                                                        disabled: isPending,
                                                                        children: [
                                                                            " ",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                                                                className: "h-4 w-4"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/admin/menu/[vendorId]/page.tsx",
                                                                                lineNumber: 303,
                                                                                columnNumber: 143
                                                                            }, this),
                                                                            " "
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/admin/menu/[vendorId]/page.tsx",
                                                                        lineNumber: 303,
                                                                        columnNumber: 29
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
                                                                                        fileName: "[project]/src/app/admin/menu/[vendorId]/page.tsx",
                                                                                        lineNumber: 307,
                                                                                        columnNumber: 41
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/admin/menu/[vendorId]/page.tsx",
                                                                                    lineNumber: 306,
                                                                                    columnNumber: 37
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/admin/menu/[vendorId]/page.tsx",
                                                                                lineNumber: 305,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogContent"], {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogHeader"], {
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogTitle"], {
                                                                                                children: "確定要刪除品項嗎？"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/admin/menu/[vendorId]/page.tsx",
                                                                                                lineNumber: 311,
                                                                                                columnNumber: 56
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogDescription"], {
                                                                                                children: "此動作會將品項標示為非啟用，但不會真的從資料庫刪除。"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/admin/menu/[vendorId]/page.tsx",
                                                                                                lineNumber: 311,
                                                                                                columnNumber: 102
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/admin/menu/[vendorId]/page.tsx",
                                                                                        lineNumber: 311,
                                                                                        columnNumber: 37
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogFooter"], {
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogCancel"], {
                                                                                                children: "取消"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/admin/menu/[vendorId]/page.tsx",
                                                                                                lineNumber: 312,
                                                                                                columnNumber: 56
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogAction"], {
                                                                                                onClick: ()=>handleDeleteItem(item.id, item.name),
                                                                                                disabled: isPending,
                                                                                                children: "確定刪除"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/admin/menu/[vendorId]/page.tsx",
                                                                                                lineNumber: 312,
                                                                                                columnNumber: 97
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/admin/menu/[vendorId]/page.tsx",
                                                                                        lineNumber: 312,
                                                                                        columnNumber: 37
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/admin/menu/[vendorId]/page.tsx",
                                                                                lineNumber: 310,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/admin/menu/[vendorId]/page.tsx",
                                                                        lineNumber: 304,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/menu/[vendorId]/page.tsx",
                                                            lineNumber: 294,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, item.id, true, {
                                                    fileName: "[project]/src/app/admin/menu/[vendorId]/page.tsx",
                                                    lineNumber: 273,
                                                    columnNumber: 21
                                                }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-center text-muted-foreground py-4",
                                                children: "這個店家還沒有任何菜單品項。"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/menu/[vendorId]/page.tsx",
                                                lineNumber: 321,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/menu/[vendorId]/page.tsx",
                                            lineNumber: 265,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/menu/[vendorId]/page.tsx",
                                    lineNumber: 260,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/menu/[vendorId]/page.tsx",
                                lineNumber: 259,
                                columnNumber: 11
                            }, this),
                            selectedItem && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "md:col-span-2 lg:col-span-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-start",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                                children: [
                                                                    "管理選項：",
                                                                    selectedItem.name
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/admin/menu/[vendorId]/page.tsx",
                                                                lineNumber: 334,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                                                children: [
                                                                    "為「",
                                                                    selectedItem.name,
                                                                    "」新增或移除客製化選項。"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/admin/menu/[vendorId]/page.tsx",
                                                                lineNumber: 335,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/admin/menu/[vendorId]/page.tsx",
                                                        lineNumber: 333,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        variant: "ghost",
                                                        size: "icon",
                                                        onClick: ()=>setSelectedItem(null),
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                            className: "h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/menu/[vendorId]/page.tsx",
                                                            lineNumber: 337,
                                                            columnNumber: 95
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/menu/[vendorId]/page.tsx",
                                                        lineNumber: 337,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin/menu/[vendorId]/page.tsx",
                                                lineNumber: 332,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/menu/[vendorId]/page.tsx",
                                            lineNumber: 331,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                            className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "font-semibold mb-3",
                                                            children: "現有選項"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/menu/[vendorId]/page.tsx",
                                                            lineNumber: 343,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-4",
                                                            children: selectedItem.options && selectedItem.options.length > 0 ? selectedItem.options.map((group)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "p-3 border rounded-md bg-muted/20",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "font-medium",
                                                                            children: group.name
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/admin/menu/[vendorId]/page.tsx",
                                                                            lineNumber: 347,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                            className: "mt-2 space-y-1 text-sm",
                                                                            children: group.choices.map((choice)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                    className: "flex justify-between items-center group",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "flex items-center gap-2",
                                                                                            children: [
                                                                                                choice.isDefault ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                                                    variant: "default",
                                                                                                    className: "text-xs",
                                                                                                    children: "預設"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/admin/menu/[vendorId]/page.tsx",
                                                                                                    lineNumber: 353,
                                                                                                    columnNumber: 37
                                                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                                                    variant: "outline",
                                                                                                    size: "sm",
                                                                                                    className: "h-6 px-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity",
                                                                                                    onClick: ()=>handleSetDefault(choice.id, selectedItem.id, group.name),
                                                                                                    disabled: isPending,
                                                                                                    children: "設為預設"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/admin/menu/[vendorId]/page.tsx",
                                                                                                    lineNumber: 355,
                                                                                                    columnNumber: 37
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    children: [
                                                                                                        choice.name,
                                                                                                        " (+$",
                                                                                                        choice.priceDelta,
                                                                                                        ")"
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "[project]/src/app/admin/menu/[vendorId]/page.tsx",
                                                                                                    lineNumber: 365,
                                                                                                    columnNumber: 35
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/app/admin/menu/[vendorId]/page.tsx",
                                                                                            lineNumber: 351,
                                                                                            columnNumber: 33
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                                            variant: "ghost",
                                                                                            size: "icon",
                                                                                            className: "h-6 w-6",
                                                                                            onClick: ()=>handleDeleteOption(choice.id),
                                                                                            disabled: isPending,
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                                                className: "h-3 w-3 text-destructive"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/admin/menu/[vendorId]/page.tsx",
                                                                                                lineNumber: 368,
                                                                                                columnNumber: 35
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/admin/menu/[vendorId]/page.tsx",
                                                                                            lineNumber: 367,
                                                                                            columnNumber: 33
                                                                                        }, this)
                                                                                    ]
                                                                                }, choice.id, true, {
                                                                                    fileName: "[project]/src/app/admin/menu/[vendorId]/page.tsx",
                                                                                    lineNumber: 350,
                                                                                    columnNumber: 31
                                                                                }, this))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/admin/menu/[vendorId]/page.tsx",
                                                                            lineNumber: 348,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, group.name, true, {
                                                                    fileName: "[project]/src/app/admin/menu/[vendorId]/page.tsx",
                                                                    lineNumber: 346,
                                                                    columnNumber: 25
                                                                }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm text-muted-foreground",
                                                                children: "尚未設定任何選項。"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/admin/menu/[vendorId]/page.tsx",
                                                                lineNumber: 374,
                                                                columnNumber: 28
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/menu/[vendorId]/page.tsx",
                                                            lineNumber: 344,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/menu/[vendorId]/page.tsx",
                                                    lineNumber: 342,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "font-semibold mb-3",
                                                            children: "新增選項"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/menu/[vendorId]/page.tsx",
                                                            lineNumber: 379,
                                                            columnNumber: 22
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                                            onSubmit: handleAddOption,
                                                            className: "space-y-4 p-3 border rounded-md",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                    placeholder: "選項群組 (例: 飯量、辣度)",
                                                                    value: newOptionGroup,
                                                                    onChange: (e)=>setNewOptionGroup(e.target.value),
                                                                    disabled: isPending
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/menu/[vendorId]/page.tsx",
                                                                    lineNumber: 381,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                    placeholder: "選項名稱 (例: 飯多、小辣)",
                                                                    value: newOptionChoice,
                                                                    onChange: (e)=>setNewOptionChoice(e.target.value),
                                                                    disabled: isPending
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/menu/[vendorId]/page.tsx",
                                                                    lineNumber: 382,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                    type: "number",
                                                                    placeholder: "價格變化 (例: 10 或 0)",
                                                                    value: newOptionPrice,
                                                                    onChange: (e)=>setNewOptionPrice(e.target.value),
                                                                    disabled: isPending
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/menu/[vendorId]/page.tsx",
                                                                    lineNumber: 383,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center space-x-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$switch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Switch"], {
                                                                            id: "is-default-switch",
                                                                            checked: newOptionIsDefault,
                                                                            onCheckedChange: setNewOptionIsDefault,
                                                                            disabled: isPending
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/admin/menu/[vendorId]/page.tsx",
                                                                            lineNumber: 385,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                            htmlFor: "is-default-switch",
                                                                            children: "將此選項設為群組預設值"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/admin/menu/[vendorId]/page.tsx",
                                                                            lineNumber: 386,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/admin/menu/[vendorId]/page.tsx",
                                                                    lineNumber: 384,
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
                                                                                fileName: "[project]/src/app/admin/menu/[vendorId]/page.tsx",
                                                                                lineNumber: 389,
                                                                                columnNumber: 42
                                                                            }, this),
                                                                            " 新增中..."
                                                                        ]
                                                                    }, void 0, true) : '新增選項'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/menu/[vendorId]/page.tsx",
                                                                    lineNumber: 388,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/admin/menu/[vendorId]/page.tsx",
                                                            lineNumber: 380,
                                                            columnNumber: 22
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/menu/[vendorId]/page.tsx",
                                                    lineNumber: 378,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/menu/[vendorId]/page.tsx",
                                            lineNumber: 340,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/menu/[vendorId]/page.tsx",
                                    lineNumber: 330,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/menu/[vendorId]/page.tsx",
                                lineNumber: 329,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/menu/[vendorId]/page.tsx",
                        lineNumber: 224,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/menu/[vendorId]/page.tsx",
                lineNumber: 214,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/menu/[vendorId]/page.tsx",
        lineNumber: 212,
        columnNumber: 5
    }, this);
}
_s(MenuAdminPage, "lKy1vb+yHq0nScj5mqlTkwXio68=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"]
    ];
});
_c = MenuAdminPage;
var _c;
__turbopack_context__.k.register(_c, "MenuAdminPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_f60ead46._.js.map