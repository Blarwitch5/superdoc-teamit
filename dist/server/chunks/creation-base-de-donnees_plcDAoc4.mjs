import { c as createVNode } from './index_9aq_q4Mc.mjs';
import { bi as Fragment, bP as __astro_tag_component__ } from './sequence_DUL7TRkU.mjs';

const frontmatter = {
  "title": "Création d'une base de données MySQL",
  "description": "Créer une base de données MySQL et un utilisateur dédié sur Infomaniak.",
  "category": "serveur"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "prérequis",
    "text": "Prérequis"
  }, {
    "depth": 2,
    "slug": "créer-la-base-de-données",
    "text": "Créer la base de données"
  }, {
    "depth": 2,
    "slug": "accéder-à-phpmyadmin",
    "text": "Accéder à phpMyAdmin"
  }, {
    "depth": 2,
    "slug": "exemple-de-configuration-php--wordpress",
    "text": "Exemple de configuration (PHP / WordPress)"
  }, {
    "depth": 2,
    "slug": "notes",
    "text": "Notes"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    button: "button",
    code: "code",
    div: "div",
    em: "em",
    figcaption: "figcaption",
    figure: "figure",
    h2: "h2",
    li: "li",
    link: "link",
    ol: "ol",
    path: "path",
    pre: "pre",
    script: "script",
    span: "span",
    strong: "strong",
    svg: "svg",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.div, {
      class: "sl-heading-wrapper level-h2",
      children: [createVNode(_components.h2, {
        id: "prérequis",
        children: "Prérequis"
      }), createVNode(_components.a, {
        class: "sl-anchor-link",
        href: "#prérequis",
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
          children: "Section intitulée « Prérequis »"
        })]
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Hébergement Infomaniak actif incluant une offre avec base de données"
      }), "\n", createVNode(_components.li, {
        children: "Accès au Manager avec droits d’administration"
      }), "\n"]
    }), "\n", createVNode(_components.div, {
      class: "sl-heading-wrapper level-h2",
      children: [createVNode(_components.h2, {
        id: "créer-la-base-de-données",
        children: "Créer la base de données"
      }), createVNode(_components.a, {
        class: "sl-anchor-link",
        href: "#créer-la-base-de-données",
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
          children: "Section intitulée « Créer la base de données »"
        })]
      })]
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["Connectez-vous au Manager → ", createVNode(_components.strong, {
          children: "Hébergement Web"
        }), " → sélectionnez l’hébergement → ", createVNode(_components.strong, {
          children: "Gérer"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: ["Allez dans l’onglet ", createVNode(_components.strong, {
          children: "Bases de données"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: ["Cliquez sur ", createVNode(_components.strong, {
          children: "Créer une base de données"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: ["Renseignez :\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "Nom"
            }), " : choisissez un nom explicite (ex : ", createVNode(_components.code, {
              dir: "auto",
              children: "nomprojet_prod"
            }), ")"]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "Utilisateur"
            }), " : créez un utilisateur dédié (ex : ", createVNode(_components.code, {
              dir: "auto",
              children: "nomprojet_user"
            }), ")"]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "Mot de passe"
            }), " : générez un mot de passe fort"]
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["Notez les informations affichées après création :\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: ["Serveur MySQL (ex : ", createVNode(_components.code, {
              dir: "auto",
              children: "mysqlXXXX.infomaniak.com"
            }), ")"]
          }), "\n", createVNode(_components.li, {
            children: "Nom de la base, utilisateur, mot de passe"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.div, {
      class: "sl-heading-wrapper level-h2",
      children: [createVNode(_components.h2, {
        id: "accéder-à-phpmyadmin",
        children: "Accéder à phpMyAdmin"
      }), createVNode(_components.a, {
        class: "sl-anchor-link",
        href: "#accéder-à-phpmyadmin",
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
          children: "Section intitulée « Accéder à phpMyAdmin »"
        })]
      })]
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["Dans l’onglet ", createVNode(_components.strong, {
          children: "Bases de données"
        }), ", cliquez sur ", createVNode(_components.strong, {
          children: "phpMyAdmin"
        }), " à côté de la base créée."]
      }), "\n", createVNode(_components.li, {
        children: "Connectez-vous avec l’utilisateur et le mot de passe créés."
      }), "\n", createVNode(_components.li, {
        children: "Vous pouvez importer un dump SQL ou créer les tables manuellement."
      }), "\n"]
    }), "\n", createVNode(_components.div, {
      class: "sl-heading-wrapper level-h2",
      children: [createVNode(_components.h2, {
        id: "exemple-de-configuration-php--wordpress",
        children: "Exemple de configuration (PHP / WordPress)"
      }), createVNode(_components.a, {
        class: "sl-anchor-link",
        href: "#exemple-de-configuration-php--wordpress",
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
          children: "Section intitulée « Exemple de configuration (PHP / WordPress) »"
        })]
      })]
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
          "data-language": "php",
          children: createVNode(_components.code, {
            children: [createVNode(_components.div, {
              class: "ec-line",
              children: createVNode(_components.div, {
                class: "code",
                children: [createVNode(_components.span, {
                  style: {
                    "--0": "#C5E478",
                    "--1": "#3B61B0"
                  },
                  children: "define"
                }), createVNode(_components.span, {
                  style: {
                    "--0": "#D6DEEB",
                    "--1": "#403F53"
                  },
                  children: "("
                }), createVNode(_components.span, {
                  style: {
                    "--0": "#D9F5DD",
                    "--1": "#111111"
                  },
                  children: "'"
                }), createVNode(_components.span, {
                  style: {
                    "--0": "#ECC48D",
                    "--1": "#984E4D"
                  },
                  children: "DB_NAME"
                }), createVNode(_components.span, {
                  style: {
                    "--0": "#D9F5DD",
                    "--1": "#111111"
                  },
                  children: "'"
                }), createVNode(_components.span, {
                  style: {
                    "--0": "#D6DEEB",
                    "--1": "#403F53"
                  },
                  children: ","
                }), createVNode(_components.span, {
                  style: {
                    "--0": "#82AAFF",
                    "--1": "#3B61B0"
                  },
                  children: "     "
                }), createVNode(_components.span, {
                  style: {
                    "--0": "#D9F5DD",
                    "--1": "#111111"
                  },
                  children: "'"
                }), createVNode(_components.span, {
                  style: {
                    "--0": "#ECC48D",
                    "--1": "#984E4D"
                  },
                  children: "nomprojet_prod"
                }), createVNode(_components.span, {
                  style: {
                    "--0": "#D9F5DD",
                    "--1": "#111111"
                  },
                  children: "'"
                }), createVNode(_components.span, {
                  style: {
                    "--0": "#D6DEEB",
                    "--1": "#403F53"
                  },
                  children: ");"
                })]
              })
            }), createVNode(_components.div, {
              class: "ec-line",
              children: createVNode(_components.div, {
                class: "code",
                children: [createVNode(_components.span, {
                  style: {
                    "--0": "#C5E478",
                    "--1": "#3B61B0"
                  },
                  children: "define"
                }), createVNode(_components.span, {
                  style: {
                    "--0": "#D6DEEB",
                    "--1": "#403F53"
                  },
                  children: "("
                }), createVNode(_components.span, {
                  style: {
                    "--0": "#D9F5DD",
                    "--1": "#111111"
                  },
                  children: "'"
                }), createVNode(_components.span, {
                  style: {
                    "--0": "#ECC48D",
                    "--1": "#984E4D"
                  },
                  children: "DB_USER"
                }), createVNode(_components.span, {
                  style: {
                    "--0": "#D9F5DD",
                    "--1": "#111111"
                  },
                  children: "'"
                }), createVNode(_components.span, {
                  style: {
                    "--0": "#D6DEEB",
                    "--1": "#403F53"
                  },
                  children: ","
                }), createVNode(_components.span, {
                  style: {
                    "--0": "#82AAFF",
                    "--1": "#3B61B0"
                  },
                  children: "     "
                }), createVNode(_components.span, {
                  style: {
                    "--0": "#D9F5DD",
                    "--1": "#111111"
                  },
                  children: "'"
                }), createVNode(_components.span, {
                  style: {
                    "--0": "#ECC48D",
                    "--1": "#984E4D"
                  },
                  children: "nomprojet_user"
                }), createVNode(_components.span, {
                  style: {
                    "--0": "#D9F5DD",
                    "--1": "#111111"
                  },
                  children: "'"
                }), createVNode(_components.span, {
                  style: {
                    "--0": "#D6DEEB",
                    "--1": "#403F53"
                  },
                  children: ");"
                })]
              })
            }), createVNode(_components.div, {
              class: "ec-line",
              children: createVNode(_components.div, {
                class: "code",
                children: [createVNode(_components.span, {
                  style: {
                    "--0": "#C5E478",
                    "--1": "#3B61B0"
                  },
                  children: "define"
                }), createVNode(_components.span, {
                  style: {
                    "--0": "#D6DEEB",
                    "--1": "#403F53"
                  },
                  children: "("
                }), createVNode(_components.span, {
                  style: {
                    "--0": "#D9F5DD",
                    "--1": "#111111"
                  },
                  children: "'"
                }), createVNode(_components.span, {
                  style: {
                    "--0": "#ECC48D",
                    "--1": "#984E4D"
                  },
                  children: "DB_PASSWORD"
                }), createVNode(_components.span, {
                  style: {
                    "--0": "#D9F5DD",
                    "--1": "#111111"
                  },
                  children: "'"
                }), createVNode(_components.span, {
                  style: {
                    "--0": "#D6DEEB",
                    "--1": "#403F53"
                  },
                  children: ","
                }), createVNode(_components.span, {
                  style: {
                    "--0": "#82AAFF",
                    "--1": "#3B61B0"
                  },
                  children: " "
                }), createVNode(_components.span, {
                  style: {
                    "--0": "#D9F5DD",
                    "--1": "#111111"
                  },
                  children: "'"
                }), createVNode(_components.span, {
                  style: {
                    "--0": "#ECC48D",
                    "--1": "#984E4D"
                  },
                  children: "motdepasse"
                }), createVNode(_components.span, {
                  style: {
                    "--0": "#D9F5DD",
                    "--1": "#111111"
                  },
                  children: "'"
                }), createVNode(_components.span, {
                  style: {
                    "--0": "#D6DEEB",
                    "--1": "#403F53"
                  },
                  children: ");"
                })]
              })
            }), createVNode(_components.div, {
              class: "ec-line",
              children: createVNode(_components.div, {
                class: "code",
                children: [createVNode(_components.span, {
                  style: {
                    "--0": "#C5E478",
                    "--1": "#3B61B0"
                  },
                  children: "define"
                }), createVNode(_components.span, {
                  style: {
                    "--0": "#D6DEEB",
                    "--1": "#403F53"
                  },
                  children: "("
                }), createVNode(_components.span, {
                  style: {
                    "--0": "#D9F5DD",
                    "--1": "#111111"
                  },
                  children: "'"
                }), createVNode(_components.span, {
                  style: {
                    "--0": "#ECC48D",
                    "--1": "#984E4D"
                  },
                  children: "DB_HOST"
                }), createVNode(_components.span, {
                  style: {
                    "--0": "#D9F5DD",
                    "--1": "#111111"
                  },
                  children: "'"
                }), createVNode(_components.span, {
                  style: {
                    "--0": "#D6DEEB",
                    "--1": "#403F53"
                  },
                  children: ","
                }), createVNode(_components.span, {
                  style: {
                    "--0": "#82AAFF",
                    "--1": "#3B61B0"
                  },
                  children: "     "
                }), createVNode(_components.span, {
                  style: {
                    "--0": "#D9F5DD",
                    "--1": "#111111"
                  },
                  children: "'"
                }), createVNode(_components.span, {
                  style: {
                    "--0": "#ECC48D",
                    "--1": "#984E4D"
                  },
                  children: "mysqlXXXX.infomaniak.com"
                }), createVNode(_components.span, {
                  style: {
                    "--0": "#D9F5DD",
                    "--1": "#111111"
                  },
                  children: "'"
                }), createVNode(_components.span, {
                  style: {
                    "--0": "#D6DEEB",
                    "--1": "#403F53"
                  },
                  children: ");"
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
            "data-code": "define('DB_NAME',     'nomprojet_prod');define('DB_USER',     'nomprojet_user');define('DB_PASSWORD', 'motdepasse');define('DB_HOST',     'mysqlXXXX.infomaniak.com');",
            children: createVNode(_components.div, {})
          })]
        })]
      })]
    }), "\n", createVNode(_components.div, {
      class: "sl-heading-wrapper level-h2",
      children: [createVNode(_components.h2, {
        id: "notes",
        children: "Notes"
      }), createVNode(_components.a, {
        class: "sl-anchor-link",
        href: "#notes",
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
          children: "Section intitulée « Notes »"
        })]
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Un seul utilisateur par base est suffisant pour la plupart des projets."
      }), "\n", createVNode(_components.li, {
        children: "Pour les accès distants (depuis un poste local), activez l’accès distant dans les paramètres de la base de données — à désactiver une fois le travail terminé."
      }), "\n", createVNode(_components.li, {
        children: ["Faites une sauvegarde régulière via phpMyAdmin → ", createVNode(_components.strong, {
          children: "Exporter"
        }), " (voir fiche ", createVNode(_components.em, {
          children: "Sauvegarde d’un site web"
        }), ")."]
      }), "\n"]
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

const url = "src/content/docs/serveur/creation-base-de-donnees.mdx";
const file = "/Users/blarwitch/Sites/teamit/teamit-superdoc/src/content/docs/serveur/creation-base-de-donnees.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/blarwitch/Sites/teamit/teamit-superdoc/src/content/docs/serveur/creation-base-de-donnees.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
