import { c as createVNode } from './index_ihQfRkT6.mjs';
import { aX as Fragment, bQ as __astro_tag_component__ } from './sequence_BHhiZ0XQ.mjs';

const frontmatter = {
  "title": "Certificat SSL",
  "description": "Activation et renouvellement d'un certificat SSL sur Infomaniak.",
  "subcategory": "",
  "createdBy": "",
  "createdAt": "",
  "modifiedBy": "",
  "modifiedAt": ""
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "contexte",
    "text": "Contexte"
  }, {
    "depth": 2,
    "slug": "activation-dun-certificat-lets-encrypt-gratuit",
    "text": "Activation d’un certificat Let’s Encrypt (gratuit)"
  }, {
    "depth": 2,
    "slug": "vérification",
    "text": "Vérification"
  }, {
    "depth": 2,
    "slug": "renouvellement-automatique",
    "text": "Renouvellement automatique"
  }, {
    "depth": 2,
    "slug": "redirection-http--https",
    "text": "Redirection HTTP → HTTPS"
  }, {
    "depth": 3,
    "slug": "via-le-htaccess-apache",
    "text": "Via le .htaccess (Apache)"
  }, {
    "depth": 3,
    "slug": "via-wordpress",
    "text": "Via WordPress"
  }, {
    "depth": 2,
    "slug": "certificat-payant-dv--ov--ev",
    "text": "Certificat payant (DV / OV / EV)"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    button: "button",
    code: "code",
    div: "div",
    figcaption: "figcaption",
    figure: "figure",
    h2: "h2",
    h3: "h3",
    li: "li",
    link: "link",
    ol: "ol",
    p: "p",
    path: "path",
    pre: "pre",
    script: "script",
    span: "span",
    strong: "strong",
    svg: "svg",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.div, {
      class: "sl-heading-wrapper level-h2",
      children: [createVNode(_components.h2, {
        id: "contexte",
        children: "Contexte"
      }), createVNode(_components.a, {
        class: "sl-anchor-link",
        href: "#contexte",
        children: [createVNode(_components.span, {
          "aria-hidden": "true",
          class: "sl-anchor-icon",
          children: createVNode(_components.svg, {
            width: "16",
            height: "16",
            viewBox: "0 0 24 24",
            children: createVNode(_components.path, {
              fill: "currentcolor",
              d: "m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"
            })
          })
        }), createVNode(_components.span, {
          class: "sr-only",
          "data-pagefind-ignore": true,
          children: "Section intitulée « Contexte »"
        })]
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Un certificat SSL est indispensable pour sécuriser les échanges (HTTPS) et améliorer le référencement. Infomaniak propose des certificats ", createVNode(_components.strong, {
        children: "Let’s Encrypt"
      }), " gratuits et des certificats payants (DV, OV, EV)."]
    }), "\n", createVNode(_components.div, {
      class: "sl-heading-wrapper level-h2",
      children: [createVNode(_components.h2, {
        id: "activation-dun-certificat-lets-encrypt-gratuit",
        children: "Activation d’un certificat Let’s Encrypt (gratuit)"
      }), createVNode(_components.a, {
        class: "sl-anchor-link",
        href: "#activation-dun-certificat-lets-encrypt-gratuit",
        children: [createVNode(_components.span, {
          "aria-hidden": "true",
          class: "sl-anchor-icon",
          children: createVNode(_components.svg, {
            width: "16",
            height: "16",
            viewBox: "0 0 24 24",
            children: createVNode(_components.path, {
              fill: "currentcolor",
              d: "m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"
            })
          })
        }), createVNode(_components.span, {
          class: "sr-only",
          "data-pagefind-ignore": true,
          children: "Section intitulée « Activation d’un certificat Let’s Encrypt (gratuit) »"
        })]
      })]
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["Se connecter à ", createVNode(_components.a, {
          href: "https://manager.infomaniak.com",
          children: "manager.infomaniak.com"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: ["Aller dans ", createVNode(_components.strong, {
          children: "Hébergement Web → [nom du service] → SSL"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: ["Cliquer sur ", createVNode(_components.strong, {
          children: "Ajouter un certificat SSL"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: ["Choisir ", createVNode(_components.strong, {
          children: "Let’s Encrypt (gratuit)"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: "Sélectionner le ou les domaines à sécuriser."
      }), "\n", createVNode(_components.li, {
        children: ["Cliquer sur ", createVNode(_components.strong, {
          children: "Valider"
        }), " — le certificat est émis en quelques minutes."]
      }), "\n"]
    }), "\n", createVNode(_components.div, {
      class: "sl-heading-wrapper level-h2",
      children: [createVNode(_components.h2, {
        id: "vérification",
        children: "Vérification"
      }), createVNode(_components.a, {
        class: "sl-anchor-link",
        href: "#vérification",
        children: [createVNode(_components.span, {
          "aria-hidden": "true",
          class: "sl-anchor-icon",
          children: createVNode(_components.svg, {
            width: "16",
            height: "16",
            viewBox: "0 0 24 24",
            children: createVNode(_components.path, {
              fill: "currentcolor",
              d: "m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"
            })
          })
        }), createVNode(_components.span, {
          class: "sr-only",
          "data-pagefind-ignore": true,
          children: "Section intitulée « Vérification »"
        })]
      })]
    }), "\n", createVNode(_components.p, {
      children: "Une fois activé, vérifier que le site est accessible en HTTPS :"
    }), "\n", createVNode(_components.div, {
      class: "expressive-code",
      children: [createVNode(_components.link, {
        rel: "stylesheet",
        href: "/_astro/ec.v4551.css"
      }), createVNode(_components.script, {
        type: "module",
        src: "/_astro/ec.0vx5m.js"
      }), createVNode(_components.figure, {
        class: "frame not-content",
        children: [createVNode(_components.figcaption, {
          class: "header"
        }), createVNode(_components.pre, {
          "data-language": "plaintext",
          children: createVNode(_components.code, {
            children: createVNode(_components.div, {
              class: "ec-line",
              children: createVNode(_components.div, {
                class: "code",
                children: createVNode(_components.span, {
                  style: {
                    "--0": "#d6deeb",
                    "--1": "#403f53"
                  },
                  children: "https://www.votredomaine.ch"
                })
              })
            })
          })
        }), createVNode(_components.div, {
          class: "copy",
          children: [createVNode(_components.div, {
            "aria-live": "polite"
          }), createVNode(_components.button, {
            title: "Copier dans le presse-papiers",
            "data-copied": "Copié !",
            "data-code": "https://www.votredomaine.ch",
            children: createVNode(_components.div, {})
          })]
        })]
      })]
    }), "\n", createVNode(_components.p, {
      children: "L’icône cadenas doit être visible dans la barre d’adresse du navigateur."
    }), "\n", createVNode(_components.div, {
      class: "sl-heading-wrapper level-h2",
      children: [createVNode(_components.h2, {
        id: "renouvellement-automatique",
        children: "Renouvellement automatique"
      }), createVNode(_components.a, {
        class: "sl-anchor-link",
        href: "#renouvellement-automatique",
        children: [createVNode(_components.span, {
          "aria-hidden": "true",
          class: "sl-anchor-icon",
          children: createVNode(_components.svg, {
            width: "16",
            height: "16",
            viewBox: "0 0 24 24",
            children: createVNode(_components.path, {
              fill: "currentcolor",
              d: "m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"
            })
          })
        }), createVNode(_components.span, {
          class: "sr-only",
          "data-pagefind-ignore": true,
          children: "Section intitulée « Renouvellement automatique »"
        })]
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Les certificats Let’s Encrypt sont renouvelés automatiquement par Infomaniak ", createVNode(_components.strong, {
        children: "30 jours avant expiration"
      }), ". Aucune action manuelle n’est requise si le certificat a été créé via le Manager."]
    }), "\n", createVNode(_components.p, {
      children: "En cas d’échec de renouvellement automatique, Infomaniak envoie un e-mail d’alerte — vérifier les adresses de notification dans le compte."
    }), "\n", createVNode(_components.div, {
      class: "sl-heading-wrapper level-h2",
      children: [createVNode(_components.h2, {
        id: "redirection-http--https",
        children: "Redirection HTTP → HTTPS"
      }), createVNode(_components.a, {
        class: "sl-anchor-link",
        href: "#redirection-http--https",
        children: [createVNode(_components.span, {
          "aria-hidden": "true",
          class: "sl-anchor-icon",
          children: createVNode(_components.svg, {
            width: "16",
            height: "16",
            viewBox: "0 0 24 24",
            children: createVNode(_components.path, {
              fill: "currentcolor",
              d: "m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"
            })
          })
        }), createVNode(_components.span, {
          class: "sr-only",
          "data-pagefind-ignore": true,
          children: "Section intitulée « Redirection HTTP → HTTPS »"
        })]
      })]
    }), "\n", createVNode(_components.p, {
      children: "Après l’activation du SSL, forcer la redirection HTTP vers HTTPS."
    }), "\n", createVNode(_components.div, {
      class: "sl-heading-wrapper level-h3",
      children: [createVNode(_components.h3, {
        id: "via-le-htaccess-apache",
        children: ["Via le ", createVNode(_components.code, {
          dir: "auto",
          children: ".htaccess"
        }), " (Apache)"]
      }), createVNode(_components.a, {
        class: "sl-anchor-link",
        href: "#via-le-htaccess-apache",
        children: [createVNode(_components.span, {
          "aria-hidden": "true",
          class: "sl-anchor-icon",
          children: createVNode(_components.svg, {
            width: "16",
            height: "16",
            viewBox: "0 0 24 24",
            children: createVNode(_components.path, {
              fill: "currentcolor",
              d: "m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"
            })
          })
        }), createVNode(_components.span, {
          class: "sr-only",
          "data-pagefind-ignore": true,
          children: "Section intitulée « Via le .htaccess (Apache) »"
        })]
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Ajouter en début de fichier ", createVNode(_components.code, {
        dir: "auto",
        children: ".htaccess"
      }), " à la racine du site :"]
    }), "\n", createVNode(_components.div, {
      class: "expressive-code",
      children: createVNode(_components.figure, {
        class: "frame not-content",
        children: [createVNode(_components.figcaption, {
          class: "header"
        }), createVNode(_components.pre, {
          "data-language": "apache",
          children: createVNode(_components.code, {
            children: [createVNode(_components.div, {
              class: "ec-line",
              children: createVNode(_components.div, {
                class: "code",
                children: [createVNode(_components.span, {
                  style: {
                    "--0": "#C792EA",
                    "--1": "#8844AE"
                  },
                  children: "RewriteEngine"
                }), createVNode(_components.span, {
                  style: {
                    "--0": "#D6DEEB",
                    "--1": "#403F53"
                  },
                  children: " On"
                })]
              })
            }), createVNode(_components.div, {
              class: "ec-line",
              children: createVNode(_components.div, {
                class: "code",
                children: [createVNode(_components.span, {
                  style: {
                    "--0": "#C792EA",
                    "--1": "#8844AE"
                  },
                  children: "RewriteCond"
                }), createVNode(_components.span, {
                  style: {
                    "--0": "#D6DEEB",
                    "--1": "#403F53"
                  },
                  children: " "
                }), createVNode(_components.span, {
                  style: {
                    "--0": "#5CA7E4",
                    "--1": "#3A688F"
                  },
                  children: "%{HTTPS}"
                }), createVNode(_components.span, {
                  style: {
                    "--0": "#D6DEEB",
                    "--1": "#403F53"
                  },
                  children: " "
                }), createVNode(_components.span, {
                  style: {
                    "--0": "#ECC48D",
                    "--1": "#3B61B0"
                  },
                  children: "off"
                })]
              })
            }), createVNode(_components.div, {
              class: "ec-line",
              children: createVNode(_components.div, {
                class: "code",
                children: [createVNode(_components.span, {
                  style: {
                    "--0": "#C792EA",
                    "--1": "#8844AE"
                  },
                  children: "RewriteRule"
                }), createVNode(_components.span, {
                  style: {
                    "--0": "#D6DEEB",
                    "--1": "#403F53"
                  },
                  children: " "
                }), createVNode(_components.span, {
                  style: {
                    "--0": "#5CA7E4",
                    "--1": "#3A688F"
                  },
                  children: "^(.*)$"
                }), createVNode(_components.span, {
                  style: {
                    "--0": "#D6DEEB",
                    "--1": "#403F53"
                  },
                  children: " "
                }), createVNode(_components.span, {
                  style: {
                    "--0": "#ECC48D",
                    "--1": "#3B61B0"
                  },
                  children: "https://%{HTTP_HOST}%{REQUEST_URI}"
                }), createVNode(_components.span, {
                  style: {
                    "--0": "#D6DEEB",
                    "--1": "#403F53"
                  },
                  children: " [L,R="
                }), createVNode(_components.span, {
                  style: {
                    "--0": "#F78C6C",
                    "--1": "#AA0982"
                  },
                  children: "301"
                }), createVNode(_components.span, {
                  style: {
                    "--0": "#D6DEEB",
                    "--1": "#403F53"
                  },
                  children: "]"
                })]
              })
            })]
          })
        }), createVNode(_components.div, {
          class: "copy",
          children: [createVNode(_components.div, {
            "aria-live": "polite"
          }), createVNode(_components.button, {
            title: "Copier dans le presse-papiers",
            "data-copied": "Copié !",
            "data-code": "RewriteEngine OnRewriteCond %{HTTPS} offRewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]",
            children: createVNode(_components.div, {})
          })]
        })]
      })
    }), "\n", createVNode(_components.div, {
      class: "sl-heading-wrapper level-h3",
      children: [createVNode(_components.h3, {
        id: "via-wordpress",
        children: "Via WordPress"
      }), createVNode(_components.a, {
        class: "sl-anchor-link",
        href: "#via-wordpress",
        children: [createVNode(_components.span, {
          "aria-hidden": "true",
          class: "sl-anchor-icon",
          children: createVNode(_components.svg, {
            width: "16",
            height: "16",
            viewBox: "0 0 24 24",
            children: createVNode(_components.path, {
              fill: "currentcolor",
              d: "m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"
            })
          })
        }), createVNode(_components.span, {
          class: "sr-only",
          "data-pagefind-ignore": true,
          children: "Section intitulée « Via WordPress »"
        })]
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Installer le plugin ", createVNode(_components.strong, {
        children: "Really Simple SSL"
      }), " ou modifier l’URL du site dans ", createVNode(_components.strong, {
        children: "Réglages → Général"
      }), "."]
    }), "\n", createVNode(_components.div, {
      class: "sl-heading-wrapper level-h2",
      children: [createVNode(_components.h2, {
        id: "certificat-payant-dv--ov--ev",
        children: "Certificat payant (DV / OV / EV)"
      }), createVNode(_components.a, {
        class: "sl-anchor-link",
        href: "#certificat-payant-dv--ov--ev",
        children: [createVNode(_components.span, {
          "aria-hidden": "true",
          class: "sl-anchor-icon",
          children: createVNode(_components.svg, {
            width: "16",
            height: "16",
            viewBox: "0 0 24 24",
            children: createVNode(_components.path, {
              fill: "currentcolor",
              d: "m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"
            })
          })
        }), createVNode(_components.span, {
          class: "sr-only",
          "data-pagefind-ignore": true,
          children: "Section intitulée « Certificat payant (DV / OV / EV) »"
        })]
      })]
    }), "\n", createVNode(_components.p, {
      children: "Pour les sites nécessitant un niveau de confiance élevé (e-commerce, banque) :"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["Aller dans ", createVNode(_components.strong, {
          children: "SSL → Acheter un certificat"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: "Choisir le type (DV = validation de domaine, OV = organisation, EV = extended)."
      }), "\n", createVNode(_components.li, {
        children: "Suivre le processus de validation selon le type choisi."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Les certificats OV et EV nécessitent une validation de l’organisation (documents à fournir à l’autorité de certification)."
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}

const url = "src/content/docs/web/certificat-ssl.mdx";
const file = "/Users/blarwitch/Sites/teamit/teamit-superdoc/src/content/docs/web/certificat-ssl.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/blarwitch/Sites/teamit/teamit-superdoc/src/content/docs/web/certificat-ssl.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
