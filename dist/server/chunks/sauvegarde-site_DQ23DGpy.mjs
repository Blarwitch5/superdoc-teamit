import { c as createVNode } from './index_ihQfRkT6.mjs';
import { aX as Fragment, bQ as __astro_tag_component__ } from './sequence_BHhiZ0XQ.mjs';

const frontmatter = {
  "title": "Sauvegarde de site",
  "description": "Procédure de sauvegarde manuelle d'un site hébergé sur Infomaniak.",
  "subcategory": "",
  "createdBy": "Romain Blary",
  "createdAt": "2026-02-09T02:15:00.000Z",
  "modifiedBy": "",
  "modifiedAt": ""
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "vue-densemble",
    "text": "Vue d’ensemble"
  }, {
    "depth": 2,
    "slug": "sauvegarde-des-fichiers",
    "text": "Sauvegarde des fichiers"
  }, {
    "depth": 3,
    "slug": "via-filezilla-ftpsftp",
    "text": "Via FileZilla (FTP/SFTP)"
  }, {
    "depth": 3,
    "slug": "via-le-manager-infomaniak",
    "text": "Via le Manager Infomaniak"
  }, {
    "depth": 2,
    "slug": "sauvegarde-de-la-base-de-données",
    "text": "Sauvegarde de la base de données"
  }, {
    "depth": 3,
    "slug": "via-phpmyadmin",
    "text": "Via phpMyAdmin"
  }, {
    "depth": 3,
    "slug": "via-ssh-si-disponible",
    "text": "Via SSH (si disponible)"
  }, {
    "depth": 2,
    "slug": "organisation-des-sauvegardes",
    "text": "Organisation des sauvegardes"
  }, {
    "depth": 2,
    "slug": "fréquence-recommandée",
    "text": "Fréquence recommandée"
  }, {
    "depth": 2,
    "slug": "restauration",
    "text": "Restauration"
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
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.div, {
      class: "sl-heading-wrapper level-h2",
      children: [createVNode(_components.h2, {
        id: "vue-densemble",
        children: "Vue d’ensemble"
      }), createVNode(_components.a, {
        class: "sl-anchor-link",
        href: "#vue-densemble",
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
          children: "Section intitulée « Vue d’ensemble »"
        })]
      })]
    }), "\n", createVNode(_components.p, {
      children: "Une sauvegarde complète comprend deux éléments :"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Les fichiers"
        }), " du site (code, médias, configuration)"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "La base de données"
        }), " (contenu, utilisateurs, paramètres)"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "À effectuer avant toute mise à jour majeure, migration ou intervention risquée."
    }), "\n", createVNode(_components.div, {
      class: "sl-heading-wrapper level-h2",
      children: [createVNode(_components.h2, {
        id: "sauvegarde-des-fichiers",
        children: "Sauvegarde des fichiers"
      }), createVNode(_components.a, {
        class: "sl-anchor-link",
        href: "#sauvegarde-des-fichiers",
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
          children: "Section intitulée « Sauvegarde des fichiers »"
        })]
      })]
    }), "\n", createVNode(_components.div, {
      class: "sl-heading-wrapper level-h3",
      children: [createVNode(_components.h3, {
        id: "via-filezilla-ftpsftp",
        children: "Via FileZilla (FTP/SFTP)"
      }), createVNode(_components.a, {
        class: "sl-anchor-link",
        href: "#via-filezilla-ftpsftp",
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
          children: "Section intitulée « Via FileZilla (FTP/SFTP) »"
        })]
      })]
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["Se connecter au serveur (voir ", createVNode(_components.a, {
          href: "/serveur/acces-ftp-sftp/",
          children: "Accès FTP/SFTP"
        }), ")."]
      }), "\n", createVNode(_components.li, {
        children: ["Naviguer jusqu’au dossier racine du site (généralement ", createVNode(_components.code, {
          dir: "auto",
          children: "/web/"
        }), ")."]
      }), "\n", createVNode(_components.li, {
        children: "Sélectionner tous les fichiers et dossiers (Ctrl+A)."
      }), "\n", createVNode(_components.li, {
        children: ["Télécharger vers un dossier local dédié (ex. : ", createVNode(_components.code, {
          dir: "auto",
          children: "sauvegardes/monsite_AAAA-MM-JJ/"
        }), ")."]
      }), "\n"]
    }), "\n", createVNode(_components.div, {
      class: "sl-heading-wrapper level-h3",
      children: [createVNode(_components.h3, {
        id: "via-le-manager-infomaniak",
        children: "Via le Manager Infomaniak"
      }), createVNode(_components.a, {
        class: "sl-anchor-link",
        href: "#via-le-manager-infomaniak",
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
          children: "Section intitulée « Via le Manager Infomaniak »"
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
          children: "Hébergement Web → [nom du service] → Sauvegardes"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: "Sélectionner un point de restauration ou déclencher une sauvegarde manuelle."
      }), "\n", createVNode(_components.li, {
        children: "Télécharger l’archive générée."
      }), "\n"]
    }), "\n", createVNode(_components.div, {
      class: "sl-heading-wrapper level-h2",
      children: [createVNode(_components.h2, {
        id: "sauvegarde-de-la-base-de-données",
        children: "Sauvegarde de la base de données"
      }), createVNode(_components.a, {
        class: "sl-anchor-link",
        href: "#sauvegarde-de-la-base-de-données",
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
          children: "Section intitulée « Sauvegarde de la base de données »"
        })]
      })]
    }), "\n", createVNode(_components.div, {
      class: "sl-heading-wrapper level-h3",
      children: [createVNode(_components.h3, {
        id: "via-phpmyadmin",
        children: "Via phpMyAdmin"
      }), createVNode(_components.a, {
        class: "sl-anchor-link",
        href: "#via-phpmyadmin",
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
          children: "Section intitulée « Via phpMyAdmin »"
        })]
      })]
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Ouvrir phpMyAdmin depuis le Manager."
      }), "\n", createVNode(_components.li, {
        children: "Sélectionner la base de données."
      }), "\n", createVNode(_components.li, {
        children: ["Onglet ", createVNode(_components.strong, {
          children: "Exporter"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: ["Choisir ", createVNode(_components.strong, {
          children: "Rapide"
        }), ", format ", createVNode(_components.strong, {
          children: "SQL"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: ["Cliquer sur ", createVNode(_components.strong, {
          children: "Exécuter"
        }), " — un fichier ", createVNode(_components.code, {
          dir: "auto",
          children: ".sql"
        }), " est téléchargé."]
      }), "\n"]
    }), "\n", createVNode(_components.div, {
      class: "sl-heading-wrapper level-h3",
      children: [createVNode(_components.h3, {
        id: "via-ssh-si-disponible",
        children: "Via SSH (si disponible)"
      }), createVNode(_components.a, {
        class: "sl-anchor-link",
        href: "#via-ssh-si-disponible",
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
          children: "Section intitulée « Via SSH (si disponible) »"
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
                  children: "mysqldump"
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
                  children: ">"
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
                  children: "sauvegarde_AAAA-MM-JJ.sql"
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
            "data-code": "mysqldump -h mysqliXXX.infomaniak.com -u utilisateur -p nom_de_la_base > sauvegarde_AAAA-MM-JJ.sql",
            children: createVNode(_components.div, {})
          })]
        })]
      })]
    }), "\n", createVNode(_components.div, {
      class: "sl-heading-wrapper level-h2",
      children: [createVNode(_components.h2, {
        id: "organisation-des-sauvegardes",
        children: "Organisation des sauvegardes"
      }), createVNode(_components.a, {
        class: "sl-anchor-link",
        href: "#organisation-des-sauvegardes",
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
          children: "Section intitulée « Organisation des sauvegardes »"
        })]
      })]
    }), "\n", createVNode(_components.p, {
      children: "Stocker les sauvegardes dans un emplacement séparé du serveur (NAS, cloud, poste local) avec la convention de nommage :"
    }), "\n", createVNode(_components.div, {
      class: "expressive-code",
      children: createVNode(_components.figure, {
        class: "frame not-content",
        children: [createVNode(_components.figcaption, {
          class: "header"
        }), createVNode(_components.pre, {
          "data-language": "plaintext",
          children: createVNode(_components.code, {
            children: [createVNode(_components.div, {
              class: "ec-line",
              children: createVNode(_components.div, {
                class: "code",
                children: createVNode(_components.span, {
                  style: {
                    "--0": "#d6deeb",
                    "--1": "#403f53"
                  },
                  children: "sauvegardes/"
                })
              })
            }), createVNode(_components.div, {
              class: "ec-line",
              children: createVNode(_components.div, {
                class: "code",
                children: [createVNode(_components.span, {
                  class: "indent",
                  children: createVNode(_components.span, {
                    style: {
                      "--0": "#d6deeb",
                      "--1": "#403f53"
                    },
                    children: "  "
                  })
                }), createVNode(_components.span, {
                  style: {
                    "--0": "#d6deeb",
                    "--1": "#403f53"
                  },
                  children: "monsite_2024-06-15/"
                })]
              })
            }), createVNode(_components.div, {
              class: "ec-line",
              children: createVNode(_components.div, {
                class: "code",
                children: [createVNode(_components.span, {
                  class: "indent",
                  children: createVNode(_components.span, {
                    style: {
                      "--0": "#d6deeb",
                      "--1": "#403f53"
                    },
                    children: "    "
                  })
                }), createVNode(_components.span, {
                  style: {
                    "--0": "#d6deeb",
                    "--1": "#403f53"
                  },
                  children: "fichiers/"
                })]
              })
            }), createVNode(_components.div, {
              class: "ec-line",
              children: createVNode(_components.div, {
                class: "code",
                children: [createVNode(_components.span, {
                  class: "indent",
                  children: createVNode(_components.span, {
                    style: {
                      "--0": "#d6deeb",
                      "--1": "#403f53"
                    },
                    children: "    "
                  })
                }), createVNode(_components.span, {
                  style: {
                    "--0": "#d6deeb",
                    "--1": "#403f53"
                  },
                  children: "base_de_donnees.sql"
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
            "data-code": "sauvegardes/  monsite_2024-06-15/    fichiers/    base_de_donnees.sql",
            children: createVNode(_components.div, {})
          })]
        })]
      })
    }), "\n", createVNode(_components.div, {
      class: "sl-heading-wrapper level-h2",
      children: [createVNode(_components.h2, {
        id: "fréquence-recommandée",
        children: "Fréquence recommandée"
      }), createVNode(_components.a, {
        class: "sl-anchor-link",
        href: "#fréquence-recommandée",
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
          children: "Section intitulée « Fréquence recommandée »"
        })]
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Type de site"
          }), createVNode(_components.th, {
            children: "Fréquence"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Site vitrine (peu de mises à jour)"
          }), createVNode(_components.td, {
            children: "Mensuelle + avant chaque intervention"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Site e-commerce / CMS actif"
          }), createVNode(_components.td, {
            children: "Hebdomadaire automatique + manuelle avant intervention"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Application critique"
          }), createVNode(_components.td, {
            children: "Quotidienne automatique"
          })]
        })]
      })]
    }), "\n", createVNode(_components.div, {
      class: "sl-heading-wrapper level-h2",
      children: [createVNode(_components.h2, {
        id: "restauration",
        children: "Restauration"
      }), createVNode(_components.a, {
        class: "sl-anchor-link",
        href: "#restauration",
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
          children: "Section intitulée « Restauration »"
        })]
      })]
    }), "\n", createVNode(_components.p, {
      children: "Pour restaurer :"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Fichiers"
        }), " : uploader les fichiers via FTP en écrasant les existants."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Base de données"
        }), " : importer le dump ", createVNode(_components.code, {
          dir: "auto",
          children: ".sql"
        }), " via phpMyAdmin (onglet ", createVNode(_components.strong, {
          children: "Importer"
        }), ") ou via SSH."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Toujours tester la restauration dans un environnement de staging avant la production."
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

const url = "src/content/docs/serveur/sauvegarde-site.mdx";
const file = "/Users/blarwitch/Sites/teamit/teamit-superdoc/src/content/docs/serveur/sauvegarde-site.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/blarwitch/Sites/teamit/teamit-superdoc/src/content/docs/serveur/sauvegarde-site.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
