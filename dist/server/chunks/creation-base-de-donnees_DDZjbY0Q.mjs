import { c as createVNode } from './index_ihQfRkT6.mjs';
import { aX as Fragment, bQ as __astro_tag_component__ } from './sequence_BHhiZ0XQ.mjs';

const frontmatter = {
  "title": "Création d'une base de données",
  "description": "Création et configuration d'une base de données MySQL sur Infomaniak.",
  "subcategory": "",
  "createdBy": "Romain Blary",
  "createdAt": "2026-04-15T00:30:00.000Z",
  "modifiedBy": "",
  "modifiedAt": ""
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "accès",
    "text": "Accès"
  }, {
    "depth": 2,
    "slug": "création",
    "text": "Création"
  }, {
    "depth": 2,
    "slug": "informations-de-connexion",
    "text": "Informations de connexion"
  }, {
    "depth": 2,
    "slug": "accès-à-phpmyadmin",
    "text": "Accès à phpMyAdmin"
  }, {
    "depth": 2,
    "slug": "import-dun-dump-sql",
    "text": "Import d’un dump SQL"
  }, {
    "depth": 2,
    "slug": "sauvegardes",
    "text": "Sauvegardes"
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
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.div, {
      class: "sl-heading-wrapper level-h2",
      children: [createVNode(_components.h2, {
        id: "accès",
        children: "Accès"
      }), createVNode(_components.a, {
        class: "sl-anchor-link",
        href: "#accès",
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
          children: "Section intitulée « Accès »"
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
          children: "Hébergement Web → [nom du service] → Bases de données"
        }), "."]
      }), "\n"]
    }), "\n", createVNode(_components.div, {
      class: "sl-heading-wrapper level-h2",
      children: [createVNode(_components.h2, {
        id: "création",
        children: "Création"
      }), createVNode(_components.a, {
        class: "sl-anchor-link",
        href: "#création",
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
          children: "Section intitulée « Création »"
        })]
      })]
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["Cliquer sur ", createVNode(_components.strong, {
          children: "Créer une base de données"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: ["Renseigner :\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "Nom"
            }), " : identifiant de la base (ex. : ", createVNode(_components.code, {
              dir: "auto",
              children: "monsite_prod"
            }), ")"]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "Mot de passe"
            }), " : générer un mot de passe fort ou en saisir un (min. 12 caractères)"]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "Version MySQL"
            }), " : choisir la version selon les prérequis de l’application (MySQL 8 recommandé)"]
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["Cliquer sur ", createVNode(_components.strong, {
          children: "Créer"
        }), "."]
      }), "\n"]
    }), "\n", createVNode(_components.div, {
      class: "sl-heading-wrapper level-h2",
      children: [createVNode(_components.h2, {
        id: "informations-de-connexion",
        children: "Informations de connexion"
      }), createVNode(_components.a, {
        class: "sl-anchor-link",
        href: "#informations-de-connexion",
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
          children: "Section intitulée « Informations de connexion »"
        })]
      })]
    }), "\n", createVNode(_components.p, {
      children: "Après la création, noter les informations affichées :"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Paramètre"
          }), createVNode(_components.th, {
            children: "Valeur"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Hôte"
          }), createVNode(_components.td, {
            children: [createVNode(_components.code, {
              dir: "auto",
              children: "mysqliXXX.infomaniak.com"
            }), " (fourni par Infomaniak)"]
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Port"
          }), createVNode(_components.td, {
            children: createVNode(_components.code, {
              dir: "auto",
              children: "3306"
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Nom de la base"
          }), createVNode(_components.td, {
            children: "Le nom saisi à la création"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Nom d’utilisateur"
          }), createVNode(_components.td, {
            children: "Identique au nom de la base (par défaut)"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Mot de passe"
          }), createVNode(_components.td, {
            children: "Celui défini à la création"
          })]
        })]
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Ces informations sont à renseigner dans le fichier de configuration de l’application (", createVNode(_components.code, {
        dir: "auto",
        children: ".env"
      }), ", ", createVNode(_components.code, {
        dir: "auto",
        children: "wp-config.php"
      }), ", etc.)."]
    }), "\n", createVNode(_components.div, {
      class: "sl-heading-wrapper level-h2",
      children: [createVNode(_components.h2, {
        id: "accès-à-phpmyadmin",
        children: "Accès à phpMyAdmin"
      }), createVNode(_components.a, {
        class: "sl-anchor-link",
        href: "#accès-à-phpmyadmin",
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
          children: "Section intitulée « Accès à phpMyAdmin »"
        })]
      })]
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["Dans la liste des bases de données, cliquer sur l’icône ", createVNode(_components.strong, {
          children: "phpMyAdmin"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: "Se connecter avec le nom d’utilisateur et le mot de passe de la base."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Depuis phpMyAdmin, il est possible d’importer un dump SQL, de créer des tables et d’exécuter des requêtes."
    }), "\n", createVNode(_components.div, {
      class: "sl-heading-wrapper level-h2",
      children: [createVNode(_components.h2, {
        id: "import-dun-dump-sql",
        children: "Import d’un dump SQL"
      }), createVNode(_components.a, {
        class: "sl-anchor-link",
        href: "#import-dun-dump-sql",
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
          children: "Section intitulée « Import d’un dump SQL »"
        })]
      })]
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Dans phpMyAdmin, sélectionner la base de données."
      }), "\n", createVNode(_components.li, {
        children: ["Onglet ", createVNode(_components.strong, {
          children: "Importer"
        }), " → choisir le fichier ", createVNode(_components.code, {
          dir: "auto",
          children: ".sql"
        }), " ou ", createVNode(_components.code, {
          dir: "auto",
          children: ".sql.gz"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: ["Cliquer sur ", createVNode(_components.strong, {
          children: "Exécuter"
        }), "."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Pour les fichiers volumineux (> 50 Mo), utiliser la commande MySQL en SSH si disponible :"
    }), "\n", createVNode(_components.div, {
      class: "expressive-code",
      children: [createVNode(_components.link, {
        rel: "stylesheet",
        href: "/_astro/ec.v4551.css"
      }), createVNode(_components.script, {
        type: "module",
        src: "/_astro/ec.0vx5m.js"
      }), createVNode(_components.figure, {
        class: "frame is-terminal not-content",
        children: [createVNode(_components.figcaption, {
          class: "header",
          children: [createVNode(_components.span, {
            class: "title"
          }), createVNode(_components.span, {
            class: "sr-only",
            children: "Fenêtre de terminal"
          })]
        }), createVNode(_components.pre, {
          "data-language": "bash",
          children: createVNode(_components.code, {
            children: createVNode(_components.div, {
              class: "ec-line",
              children: createVNode(_components.div, {
                class: "code",
                children: [createVNode(_components.span, {
                  style: {
                    "--0": "#82AAFF",
                    "--1": "#3B61B0"
                  },
                  children: "mysql"
                }), createVNode(_components.span, {
                  style: {
                    "--0": "#D6DEEB",
                    "--1": "#403F53"
                  },
                  children: " "
                }), createVNode(_components.span, {
                  style: {
                    "--0": "#82AAFF",
                    "--1": "#3B61B0"
                  },
                  children: "-h"
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
                  children: "mysqliXXX.infomaniak.com"
                }), createVNode(_components.span, {
                  style: {
                    "--0": "#D6DEEB",
                    "--1": "#403F53"
                  },
                  children: " "
                }), createVNode(_components.span, {
                  style: {
                    "--0": "#82AAFF",
                    "--1": "#3B61B0"
                  },
                  children: "-u"
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
                  children: "utilisateur"
                }), createVNode(_components.span, {
                  style: {
                    "--0": "#D6DEEB",
                    "--1": "#403F53"
                  },
                  children: " "
                }), createVNode(_components.span, {
                  style: {
                    "--0": "#82AAFF",
                    "--1": "#3B61B0"
                  },
                  children: "-p"
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
                  children: "nom_de_la_base"
                }), createVNode(_components.span, {
                  style: {
                    "--0": "#D6DEEB",
                    "--1": "#403F53"
                  },
                  children: " "
                }), createVNode(_components.span, {
                  style: {
                    "--0": "#7FDBCA",
                    "--1": "#096E72"
                  },
                  children: "<"
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
                  children: "dump.sql"
                })]
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
            "data-code": "mysql -h mysqliXXX.infomaniak.com -u utilisateur -p nom_de_la_base < dump.sql",
            children: createVNode(_components.div, {})
          })]
        })]
      })]
    }), "\n", createVNode(_components.div, {
      class: "sl-heading-wrapper level-h2",
      children: [createVNode(_components.h2, {
        id: "sauvegardes",
        children: "Sauvegardes"
      }), createVNode(_components.a, {
        class: "sl-anchor-link",
        href: "#sauvegardes",
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
          children: "Section intitulée « Sauvegardes »"
        })]
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Infomaniak effectue des sauvegardes automatiques quotidiennes. Pour un export manuel depuis phpMyAdmin : onglet ", createVNode(_components.strong, {
        children: "Exporter → Rapide → SQL → Exécuter"
      }), "."]
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
