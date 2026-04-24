/** Attribute injected by some browser extensions; breaks React hydration if present on SSR nodes. */
export const BIS_SKIN_ATTR = "bis_skin_checked";

/**
 * Runs in `beforeInteractive` (main world, as early as Next injects). Strips existing nodes,
 * re-strips on a microtask, and ignores `setAttribute("bis_skin_checked", …)` so extensions
 * that mutate via the DOM API cannot win the race before deferred React loads.
 */
export const bisSkinCheckedEarlyBootstrapInline = `(function(){if(typeof window!=="undefined"&&window.__esBisBoot)return;typeof window!=="undefined"&&(window.__esBisBoot=1);var a="${BIS_SKIN_ATTR}";function s(){try{document.querySelectorAll("["+a+"]").forEach(function(e){e.removeAttribute(a);});}catch(e){}}s();queueMicrotask(s);try{var p=Element.prototype,o=p.setAttribute;if(typeof o==="function"){p.setAttribute=function(n,v){if(String(n).toLowerCase()===a)return;return o.apply(this,arguments);};}}catch(e){}try{if(typeof MutationObserver!=="undefined"&&document.documentElement){var mo=new MutationObserver(function(){queueMicrotask(s);});mo.observe(document.documentElement,{subtree:true,attributes:true,attributeFilter:[a]});setTimeout(function(){mo.disconnect();},5000);}}catch(e){}})();`;

/**
 * Inline end-of-body: full HTML is parsed; microtask runs again before deferred React.
 */
export const stripBisSkinCheckedInline = `(function(){var a="${BIS_SKIN_ATTR}";function s(){try{document.querySelectorAll("["+a+"]").forEach(function(e){e.removeAttribute(a);});}catch(e){}}s();queueMicrotask(s);})();`;
