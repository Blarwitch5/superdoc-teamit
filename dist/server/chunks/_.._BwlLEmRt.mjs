import { makeGenericAPIRouteHandler } from '@keystatic/core/api/generic';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { a as auth } from './auth_DgRd6eJ0.mjs';
import { jsx } from 'react/jsx-runtime';
import { config as config$1, collection, fields } from '@keystatic/core';

var setCookie = {exports: {}};

var hasRequiredSetCookie;

function requireSetCookie () {
	if (hasRequiredSetCookie) return setCookie.exports;
	hasRequiredSetCookie = 1;

	var defaultParseOptions = {
	  decodeValues: true,
	  map: false,
	  silent: false,
	};

	function isForbiddenKey(key) {
	  return typeof key !== "string" || key in {};
	}

	function createNullObj() {
	  return Object.create(null);
	}

	function isNonEmptyString(str) {
	  return typeof str === "string" && !!str.trim();
	}

	function parseString(setCookieValue, options) {
	  var parts = setCookieValue.split(";").filter(isNonEmptyString);

	  var nameValuePairStr = parts.shift();
	  var parsed = parseNameValuePair(nameValuePairStr);
	  var name = parsed.name;
	  var value = parsed.value;

	  options = options
	    ? Object.assign({}, defaultParseOptions, options)
	    : defaultParseOptions;

	  if (isForbiddenKey(name)) {
	    return null;
	  }

	  try {
	    value = options.decodeValues ? decodeURIComponent(value) : value; // decode cookie value
	  } catch (e) {
	    console.error(
	      "set-cookie-parser: failed to decode cookie value. Set options.decodeValues=false to disable decoding.",
	      e
	    );
	  }

	  var cookie = createNullObj();
	  cookie.name = name;
	  cookie.value = value;

	  parts.forEach(function (part) {
	    var sides = part.split("=");
	    var key = sides.shift().trimLeft().toLowerCase();
	    if (isForbiddenKey(key)) {
	      return;
	    }
	    var value = sides.join("=");
	    if (key === "expires") {
	      cookie.expires = new Date(value);
	    } else if (key === "max-age") {
	      var n = parseInt(value, 10);
	      if (!Number.isNaN(n)) cookie.maxAge = n;
	    } else if (key === "secure") {
	      cookie.secure = true;
	    } else if (key === "httponly") {
	      cookie.httpOnly = true;
	    } else if (key === "samesite") {
	      cookie.sameSite = value;
	    } else if (key === "partitioned") {
	      cookie.partitioned = true;
	    } else if (key) {
	      cookie[key] = value;
	    }
	  });

	  return cookie;
	}

	function parseNameValuePair(nameValuePairStr) {
	  // Parses name-value-pair according to rfc6265bis draft

	  var name = "";
	  var value = "";
	  var nameValueArr = nameValuePairStr.split("=");
	  if (nameValueArr.length > 1) {
	    name = nameValueArr.shift();
	    value = nameValueArr.join("="); // everything after the first =, joined by a "=" if there was more than one part
	  } else {
	    value = nameValuePairStr;
	  }

	  return { name: name, value: value };
	}

	function parse(input, options) {
	  options = options
	    ? Object.assign({}, defaultParseOptions, options)
	    : defaultParseOptions;

	  if (!input) {
	    if (!options.map) {
	      return [];
	    } else {
	      return createNullObj();
	    }
	  }

	  if (input.headers) {
	    if (typeof input.headers.getSetCookie === "function") {
	      // for fetch responses - they combine headers of the same type in the headers array,
	      // but getSetCookie returns an uncombined array
	      input = input.headers.getSetCookie();
	    } else if (input.headers["set-cookie"]) {
	      // fast-path for node.js (which automatically normalizes header names to lower-case)
	      input = input.headers["set-cookie"];
	    } else {
	      // slow-path for other environments - see #25
	      var sch =
	        input.headers[
	          Object.keys(input.headers).find(function (key) {
	            return key.toLowerCase() === "set-cookie";
	          })
	        ];
	      // warn if called on a request-like object with a cookie header rather than a set-cookie header - see #34, 36
	      if (!sch && input.headers.cookie && !options.silent) {
	        console.warn(
	          "Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."
	        );
	      }
	      input = sch;
	    }
	  }
	  if (!Array.isArray(input)) {
	    input = [input];
	  }

	  if (!options.map) {
	    return input
	      .filter(isNonEmptyString)
	      .map(function (str) {
	        return parseString(str, options);
	      })
	      .filter(Boolean);
	  } else {
	    var cookies = createNullObj();
	    return input.filter(isNonEmptyString).reduce(function (cookies, str) {
	      var cookie = parseString(str, options);
	      if (cookie && !isForbiddenKey(cookie.name)) {
	        cookies[cookie.name] = cookie;
	      }
	      return cookies;
	    }, cookies);
	  }
	}

	/*
	  Set-Cookie header field-values are sometimes comma joined in one string. This splits them without choking on commas
	  that are within a single set-cookie field-value, such as in the Expires portion.

	  This is uncommon, but explicitly allowed - see https://tools.ietf.org/html/rfc2616#section-4.2
	  Node.js does this for every header *except* set-cookie - see https://github.com/nodejs/node/blob/d5e363b77ebaf1caf67cd7528224b651c86815c1/lib/_http_incoming.js#L128
	  React Native's fetch does this for *every* header, including set-cookie.

	  Based on: https://github.com/google/j2objc/commit/16820fdbc8f76ca0c33472810ce0cb03d20efe25
	  Credits to: https://github.com/tomball for original and https://github.com/chrusart for JavaScript implementation
	*/
	function splitCookiesString(cookiesString) {
	  if (Array.isArray(cookiesString)) {
	    return cookiesString;
	  }
	  if (typeof cookiesString !== "string") {
	    return [];
	  }

	  var cookiesStrings = [];
	  var pos = 0;
	  var start;
	  var ch;
	  var lastComma;
	  var nextStart;
	  var cookiesSeparatorFound;

	  function skipWhitespace() {
	    while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
	      pos += 1;
	    }
	    return pos < cookiesString.length;
	  }

	  function notSpecialChar() {
	    ch = cookiesString.charAt(pos);

	    return ch !== "=" && ch !== ";" && ch !== ",";
	  }

	  while (pos < cookiesString.length) {
	    start = pos;
	    cookiesSeparatorFound = false;

	    while (skipWhitespace()) {
	      ch = cookiesString.charAt(pos);
	      if (ch === ",") {
	        // ',' is a cookie separator if we have later first '=', not ';' or ','
	        lastComma = pos;
	        pos += 1;

	        skipWhitespace();
	        nextStart = pos;

	        while (pos < cookiesString.length && notSpecialChar()) {
	          pos += 1;
	        }

	        // currently special character
	        if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
	          // we found cookies separator
	          cookiesSeparatorFound = true;
	          // pos is inside the next cookie, so back up and return it.
	          pos = nextStart;
	          cookiesStrings.push(cookiesString.substring(start, lastComma));
	          start = pos;
	        } else {
	          // in param ',' or param separator ';',
	          // we continue from that comma
	          pos = lastComma + 1;
	        }
	      } else {
	        pos += 1;
	      }
	    }

	    if (!cookiesSeparatorFound || pos >= cookiesString.length) {
	      cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
	    }
	  }

	  return cookiesStrings;
	}

	setCookie.exports = parse;
	setCookie.exports.parse = parse;
	setCookie.exports.parseString = parseString;
	setCookie.exports.splitCookiesString = splitCookiesString;
	return setCookie.exports;
}

var setCookieExports = /*@__PURE__*/ requireSetCookie();

function makeHandler(_config) {
  return async function keystaticAPIRoute(context) {
    var _context$locals, _ref, _config$clientId, _ref2, _config$clientSecret, _ref3, _config$secret;
    const envVarsForCf = (_context$locals = context.locals) === null || _context$locals === void 0 || (_context$locals = _context$locals.runtime) === null || _context$locals === void 0 ? void 0 : _context$locals.env;
    const handler = makeGenericAPIRouteHandler({
      ..._config,
      clientId: (_ref = (_config$clientId = _config.clientId) !== null && _config$clientId !== void 0 ? _config$clientId : envVarsForCf === null || envVarsForCf === void 0 ? void 0 : envVarsForCf.KEYSTATIC_GITHUB_CLIENT_ID) !== null && _ref !== void 0 ? _ref : tryOrUndefined(() => {
        return undefined                                          ;
      }),
      clientSecret: (_ref2 = (_config$clientSecret = _config.clientSecret) !== null && _config$clientSecret !== void 0 ? _config$clientSecret : envVarsForCf === null || envVarsForCf === void 0 ? void 0 : envVarsForCf.KEYSTATIC_GITHUB_CLIENT_SECRET) !== null && _ref2 !== void 0 ? _ref2 : tryOrUndefined(() => {
        return undefined                                              ;
      }),
      secret: (_ref3 = (_config$secret = _config.secret) !== null && _config$secret !== void 0 ? _config$secret : envVarsForCf === null || envVarsForCf === void 0 ? void 0 : envVarsForCf.KEYSTATIC_SECRET) !== null && _ref3 !== void 0 ? _ref3 : tryOrUndefined(() => {
        return undefined                                ;
      })
    }, {
      slugEnvName: "PUBLIC_KEYSTATIC_GITHUB_APP_SLUG"
    });
    const {
      body,
      headers,
      status
    } = await handler(context.request);
    let headersInADifferentStructure = /* @__PURE__ */ new Map();
    if (headers) {
      if (Array.isArray(headers)) {
        for (const [key, value] of headers) {
          if (!headersInADifferentStructure.has(key.toLowerCase())) {
            headersInADifferentStructure.set(key.toLowerCase(), []);
          }
          headersInADifferentStructure.get(key.toLowerCase()).push(value);
        }
      } else if (typeof headers.entries === "function") {
        for (const [key, value] of headers.entries()) {
          headersInADifferentStructure.set(key.toLowerCase(), [value]);
        }
        if ("getSetCookie" in headers && typeof headers.getSetCookie === "function") {
          const setCookieHeaders2 = headers.getSetCookie();
          if (setCookieHeaders2 !== null && setCookieHeaders2 !== void 0 && setCookieHeaders2.length) {
            headersInADifferentStructure.set("set-cookie", setCookieHeaders2);
          }
        }
      } else {
        for (const [key, value] of Object.entries(headers)) {
          headersInADifferentStructure.set(key.toLowerCase(), [value]);
        }
      }
    }
    const setCookieHeaders = headersInADifferentStructure.get("set-cookie");
    headersInADifferentStructure.delete("set-cookie");
    if (setCookieHeaders) {
      for (const setCookieValue of setCookieHeaders) {
        var _options$sameSite;
        const {
          name,
          value,
          ...options
        } = setCookieExports.parseString(setCookieValue);
        const sameSite = (_options$sameSite = options.sameSite) === null || _options$sameSite === void 0 ? void 0 : _options$sameSite.toLowerCase();
        context.cookies.set(name, value, {
          domain: options.domain,
          expires: options.expires,
          httpOnly: options.httpOnly,
          maxAge: options.maxAge,
          path: options.path,
          sameSite: sameSite === "lax" || sameSite === "strict" || sameSite === "none" ? sameSite : void 0
        });
      }
    }
    return new Response(body, {
      status,
      headers: [...headersInADifferentStructure.entries()].flatMap(([key, val]) => val.map((x) => [key, x]))
    });
  };
}
function tryOrUndefined(fn) {
  try {
    return fn();
  } catch {
    return void 0;
  }
}

function BrandMark(_props) {
  return /* @__PURE__ */ jsx(
    "a",
    {
      href: "/",
      title: "Retour à la documentation",
      style: {
        display: "inline-flex",
        alignItems: "center",
        fontSize: 12,
        color: "inherit",
        opacity: 0.6,
        textDecoration: "none",
        padding: "2px 6px",
        border: "1px solid currentColor",
        borderRadius: 4
      },
      children: "← Docs"
    }
  );
}
const config = config$1({
  storage: { kind: "local" },
  ui: {
    brand: {
      name: "Team IT Docs",
      mark: BrandMark
    }
  },
  collections: {
    fiches: collection({
      label: "Fiches de process",
      slugField: "title",
      path: "src/content/docs/**",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({
          name: { label: "Titre" },
          slug: {
            label: "Identifiant (slug)",
            description: "Identifiant unique de la fiche — ex : deploiement-npm ou reset-mdp. La catégorie est ajoutée automatiquement au chemin lors de la sauvegarde."
          }
        }),
        description: fields.text({
          label: "Description",
          description: "Résumé court affiché dans la sidebar."
        }),
        category: fields.text({
          label: "Catégorie",
          description: "En minuscules, sans espaces ni accents — ex : web, serveur, administratif. Crée automatiquement une nouvelle section dans la sidebar si elle n'existe pas encore.",
          validation: { isRequired: true, length: { min: 1 } }
        }),
        subcategory: fields.text({
          label: "Sous-catégorie",
          description: "Ex : Déploiement, Configuration, Sauvegarde…"
        }),
        image: fields.image({
          label: "Image principale (optionnel)",
          directory: "src/assets/docs",
          publicPath: "../../assets/docs/"
        }),
        videoUrl: fields.url({
          label: "URL vidéo (optionnel)",
          description: "YouTube non-listé, Vimeo, Microsoft Stream…"
        }),
        createdBy: fields.text({ label: "Créé par", defaultValue: "", validation: { isRequired: false }, description: "Auto-rempli à la sauvegarde — ne pas modifier." }),
        createdAt: fields.text({ label: "Créé le", defaultValue: "", validation: { isRequired: false }, description: "Auto-rempli à la sauvegarde — ne pas modifier." }),
        modifiedBy: fields.text({ label: "Modifié par", defaultValue: "", validation: { isRequired: false }, description: "Auto-rempli à la sauvegarde — ne pas modifier." }),
        modifiedAt: fields.text({ label: "Modifié le", defaultValue: "", validation: { isRequired: false }, description: "Auto-rempli à la sauvegarde — ne pas modifier." }),
        content: fields.mdx({ label: "Contenu" })
      }
    })
  }
});

const keystatic = makeHandler({ config });
function todayISO() {
  return (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
}
function base64UrlToUtf8(b64) {
  const standard = b64.replace(/-/g, "+").replace(/_/g, "/");
  const binStr = atob(standard);
  const bytes = Uint8Array.from(binStr, (c) => c.charCodeAt(0));
  return new TextDecoder().decode(bytes);
}
function utf8ToBase64Url(text) {
  const bytes = new TextEncoder().encode(text);
  let binStr = "";
  for (const byte of bytes) {
    binStr += String.fromCharCode(byte);
  }
  return btoa(binStr).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
}
function readExistingAuthor(filePath) {
  try {
    const content = readFileSync(join(process.cwd(), filePath), "utf-8");
    const createdByMatch = /^createdBy:\s*(.+)$/m.exec(content);
    const createdAtMatch = /^createdAt:\s*(.+)$/m.exec(content);
    const stripQuotes = (val) => val.trim().replace(/^["']|["']$/g, "");
    return {
      createdBy: createdByMatch ? stripQuotes(createdByMatch[1]) : "",
      createdAt: createdAtMatch ? stripQuotes(createdAtMatch[1]) : ""
    };
  } catch {
    return { createdBy: "", createdAt: "" };
  }
}
function injectAuthorIntoFrontmatter(fileContent, userName, today, existingCreatedBy, existingCreatedAt) {
  if (!fileContent.startsWith("---")) return fileContent;
  const closingDash = fileContent.indexOf("\n---", 3);
  if (closingDash === -1) return fileContent;
  let frontmatter = fileContent.slice(3, closingDash);
  const body = fileContent.slice(closingDash);
  const setField = (fm, key, value) => {
    const pattern = new RegExp(`^(${key}:).*$`, "m");
    return pattern.test(fm) ? fm.replace(pattern, `${key}: ${value}`) : fm + `
${key}: ${value}`;
  };
  frontmatter = setField(frontmatter, "createdBy", existingCreatedBy || userName);
  frontmatter = setField(frontmatter, "createdAt", `"${existingCreatedAt || today}"`);
  frontmatter = setField(frontmatter, "modifiedBy", userName);
  frontmatter = setField(frontmatter, "modifiedAt", `"${today}"`);
  return `---${frontmatter}${body}`;
}
function fixCategoryPath(addition) {
  if (!/\.(md|mdx|mdoc)$/.test(addition.path)) return addition;
  const docsMatch = /^src\/content\/docs\/(.+)$/.exec(addition.path);
  if (!docsMatch) return addition;
  const segments = docsMatch[1].split("/");
  if (segments.length >= 2) return addition;
  try {
    const fileContent = base64UrlToUtf8(addition.contents);
    const categoryMatch = /^category:\s*(.+)$/m.exec(fileContent);
    if (!categoryMatch) return addition;
    const category = categoryMatch[1].trim().replace(/^["']|["']$/g, "").toLowerCase().replace(/\s+/g, "-");
    if (!category) return addition;
    const ext = (addition.path.match(/\.(md|mdx|mdoc)$/) ?? [".mdx"])[0];
    const slug = segments[0].replace(/\.(md|mdx|mdoc)$/, "");
    return { ...addition, path: `src/content/docs/${category}/${slug}${ext}` };
  } catch {
    return addition;
  }
}
const ALL = async (context) => {
  const { request } = context;
  const pathname = new URL(request.url).pathname;
  if (request.method === "POST" && pathname.endsWith("/api/keystatic/update") && (request.headers.get("content-type") ?? "").includes("application/json")) {
    const session = await auth.api.getSession({ headers: request.headers });
    if (session?.user) {
      try {
        const body = await request.clone().json();
        if (body?.additions && Array.isArray(body.additions) && body.additions.length > 0) {
          const userName = session.user.name ?? session.user.email ?? "Inconnu";
          const today = todayISO();
          const enrichedAdditions = body.additions.map((addition) => {
            if (!/\.(md|mdx|mdoc)$/.test(addition.path)) return addition;
            const fixed = fixCategoryPath(addition);
            try {
              const fileContent = base64UrlToUtf8(fixed.contents);
              const { createdBy: existingCreatedBy, createdAt: existingCreatedAt } = readExistingAuthor(fixed.path);
              const modified = injectAuthorIntoFrontmatter(fileContent, userName, today, existingCreatedBy, existingCreatedAt);
              return { ...fixed, contents: utf8ToBase64Url(modified) };
            } catch {
              return fixed;
            }
          });
          return keystatic({
            ...context,
            request: new Request(request.url, {
              method: request.method,
              headers: request.headers,
              body: JSON.stringify({ ...body, additions: enrichedAdditions })
            })
          });
        }
      } catch {
      }
    }
  }
  return keystatic(context);
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  ALL
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
