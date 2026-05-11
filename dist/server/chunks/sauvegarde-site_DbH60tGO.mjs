import { c as createVNode } from './index_9aq_q4Mc.mjs';
import { bi as Fragment, bP as __astro_tag_component__ } from './sequence_DUL7TRkU.mjs';

const frontmatter = {
  "title": "Sauvegarde d'un site web",
  "description": "Effectuer une sauvegarde complète des fichiers et de la base de données d'un hébergement.",
  "category": "serveur"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "ce-que-couvre-cette-sauvegarde",
    "text": "Ce que couvre cette sauvegarde"
  }, {
    "depth": 2,
    "slug": "1-sauvegarder-les-fichiers-via-ftp",
    "text": "1. Sauvegarder les fichiers via FTP"
  }, {
    "depth": 2,
    "slug": "2-sauvegarder-la-base-de-données-via-phpmyadmin",
    "text": "2. Sauvegarder la base de données via phpMyAdmin"
  }, {
    "depth": 2,
    "slug": "3-archiver-la-sauvegarde",
    "text": "3. Archiver la sauvegarde"
  }, {
    "depth": 2,
    "slug": "restaurer-la-base-de-données",
    "text": "Restaurer la base de données"
  }, {
    "depth": 2,
    "slug": "fréquence-recommandée",
    "text": "Fréquence recommandée"
  }, {
    "depth": 2,
    "slug": "notes",
    "text": "Notes"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    div: "div",
    em: "em",
    h2: "h2",
    li: "li",
    ol: "ol",
    path: "path",
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
        id: "ce-que-couvre-cette-sauvegarde",
        children: "Ce que couvre cette sauvegarde"
      }), createVNode(_components.a, {
        class: "sl-anchor-link",
        href: "#ce-que-couvre-cette-sauvegarde",
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
          children: "Section intitulée « Ce que couvre cette sauvegarde »"
        })]
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Fichiers du site (dossier ", createVNode(_components.code, {
          dir: "auto",
          children: "web/"
        }), ")"]
      }), "\n", createVNode(_components.li, {
        children: "Base de données MySQL"
      }), "\n"]
    }), "\n", createVNode(_components.div, {
      class: "sl-heading-wrapper level-h2",
      children: [createVNode(_components.h2, {
        id: "1-sauvegarder-les-fichiers-via-ftp",
        children: "1. Sauvegarder les fichiers via FTP"
      }), createVNode(_components.a, {
        class: "sl-anchor-link",
        href: "#1-sauvegarder-les-fichiers-via-ftp",
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
          children: "Section intitulée « 1. Sauvegarder les fichiers via FTP »"
        })]
      })]
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["Connectez-vous à l’hébergement avec FileZilla (voir fiche ", createVNode(_components.em, {
          children: "Connexion FTP / SFTP"
        }), ")."]
      }), "\n", createVNode(_components.li, {
        children: ["Sélectionnez l’intégralité du dossier ", createVNode(_components.code, {
          dir: "auto",
          children: "web/"
        }), " dans le panneau distant."]
      }), "\n", createVNode(_components.li, {
        children: ["Faites un clic droit → ", createVNode(_components.strong, {
          children: "Télécharger"
        }), " dans un dossier local daté (ex : ", createVNode(_components.code, {
          dir: "auto",
          children: "sauvegarde_2026-05-08/"
        }), ")."]
      }), "\n"]
    }), "\n", createVNode(_components.div, {
      class: "sl-heading-wrapper level-h2",
      children: [createVNode(_components.h2, {
        id: "2-sauvegarder-la-base-de-données-via-phpmyadmin",
        children: "2. Sauvegarder la base de données via phpMyAdmin"
      }), createVNode(_components.a, {
        class: "sl-anchor-link",
        href: "#2-sauvegarder-la-base-de-données-via-phpmyadmin",
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
          children: "Section intitulée « 2. Sauvegarder la base de données via phpMyAdmin »"
        })]
      })]
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["Ouvrez phpMyAdmin depuis le Manager → ", createVNode(_components.strong, {
          children: "Hébergement Web"
        }), " → ", createVNode(_components.strong, {
          children: "Bases de données"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: "Sélectionnez la base de données dans le panneau de gauche."
      }), "\n", createVNode(_components.li, {
        children: ["Cliquez sur ", createVNode(_components.strong, {
          children: "Exporter"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: ["Choisissez le format ", createVNode(_components.strong, {
          children: "SQL"
        }), " → cliquez sur ", createVNode(_components.strong, {
          children: "Exécuter"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: ["Enregistrez le fichier ", createVNode(_components.code, {
          dir: "auto",
          children: ".sql"
        }), " dans le même dossier que les fichiers du site."]
      }), "\n"]
    }), "\n", createVNode(_components.div, {
      class: "sl-heading-wrapper level-h2",
      children: [createVNode(_components.h2, {
        id: "3-archiver-la-sauvegarde",
        children: "3. Archiver la sauvegarde"
      }), createVNode(_components.a, {
        class: "sl-anchor-link",
        href: "#3-archiver-la-sauvegarde",
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
          children: "Section intitulée « 3. Archiver la sauvegarde »"
        })]
      })]
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["Compressez le dossier de sauvegarde en ", createVNode(_components.code, {
          dir: "auto",
          children: ".zip"
        }), " ou ", createVNode(_components.code, {
          dir: "auto",
          children: ".tar.gz"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: "Stockez l’archive sur un support externe ou un espace cloud sécurisé."
      }), "\n"]
    }), "\n", createVNode(_components.div, {
      class: "sl-heading-wrapper level-h2",
      children: [createVNode(_components.h2, {
        id: "restaurer-la-base-de-données",
        children: "Restaurer la base de données"
      }), createVNode(_components.a, {
        class: "sl-anchor-link",
        href: "#restaurer-la-base-de-données",
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
          children: "Section intitulée « Restaurer la base de données »"
        })]
      })]
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Dans phpMyAdmin, sélectionnez la base de données cible."
      }), "\n", createVNode(_components.li, {
        children: ["Cliquez sur ", createVNode(_components.strong, {
          children: "Importer"
        }), " → sélectionnez le fichier ", createVNode(_components.code, {
          dir: "auto",
          children: ".sql"
        }), " → ", createVNode(_components.strong, {
          children: "Exécuter"
        }), "."]
      }), "\n"]
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
            children: "Site vitrine statique"
          }), createVNode(_components.td, {
            children: "Mensuelle ou avant chaque modification"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Site e-commerce / WordPress actif"
          }), createVNode(_components.td, {
            children: "Hebdomadaire"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Application métier critique"
          }), createVNode(_components.td, {
            children: "Quotidienne (automatiser si possible)"
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
        children: ["Infomaniak propose des sauvegardes automatiques quotidiennes (7 jours de rétention) accessibles dans le Manager → ", createVNode(_components.strong, {
          children: "Sauvegardes"
        }), ". Cette fiche documente la sauvegarde manuelle en complément."]
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
