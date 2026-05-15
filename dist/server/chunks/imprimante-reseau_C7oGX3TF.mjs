import { c as createVNode } from './index_ihQfRkT6.mjs';
import { aX as Fragment, bQ as __astro_tag_component__ } from './sequence_BHhiZ0XQ.mjs';

const frontmatter = {
  "title": "Imprimante réseau",
  "description": "Ajout et configuration d'une imprimante réseau sur Windows.",
  "subcategory": "",
  "createdBy": "Romain Blary",
  "createdAt": "2026-02-09T23:15:00.000Z",
  "modifiedBy": "",
  "modifiedAt": ""
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "prérequis",
    "text": "Prérequis"
  }, {
    "depth": 2,
    "slug": "méthode-1--détection-automatique",
    "text": "Méthode 1 — Détection automatique"
  }, {
    "depth": 2,
    "slug": "méthode-2--ajout-manuel-par-adresse-ip",
    "text": "Méthode 2 — Ajout manuel par adresse IP"
  }, {
    "depth": 2,
    "slug": "définir-comme-imprimante-par-défaut",
    "text": "Définir comme imprimante par défaut"
  }, {
    "depth": 2,
    "slug": "vérification",
    "text": "Vérification"
  }, {
    "depth": 2,
    "slug": "dépannage",
    "text": "Dépannage"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    div: "div",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    path: "path",
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
        children: "Imprimante connectée au réseau local (IP fixe recommandée)"
      }), "\n", createVNode(_components.li, {
        children: "Adresse IP de l’imprimante (vérifiable sur l’écran de l’imprimante ou via le panneau de configuration réseau)"
      }), "\n", createVNode(_components.li, {
        children: "Pilotes disponibles sur le site du fabricant"
      }), "\n"]
    }), "\n", createVNode(_components.div, {
      class: "sl-heading-wrapper level-h2",
      children: [createVNode(_components.h2, {
        id: "méthode-1--détection-automatique",
        children: "Méthode 1 — Détection automatique"
      }), createVNode(_components.a, {
        class: "sl-anchor-link",
        href: "#méthode-1--détection-automatique",
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
          children: "Section intitulée « Méthode 1 — Détection automatique »"
        })]
      })]
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["Aller dans ", createVNode(_components.strong, {
          children: "Paramètres → Bluetooth et appareils → Imprimantes et scanners"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: ["Cliquer sur ", createVNode(_components.strong, {
          children: "Ajouter un appareil"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: "Windows recherche les imprimantes disponibles sur le réseau."
      }), "\n", createVNode(_components.li, {
        children: ["Sélectionner l’imprimante détectée et cliquer sur ", createVNode(_components.strong, {
          children: "Ajouter"
        }), "."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Si l’imprimante n’apparaît pas, passer à la méthode 2."
    }), "\n", createVNode(_components.div, {
      class: "sl-heading-wrapper level-h2",
      children: [createVNode(_components.h2, {
        id: "méthode-2--ajout-manuel-par-adresse-ip",
        children: "Méthode 2 — Ajout manuel par adresse IP"
      }), createVNode(_components.a, {
        class: "sl-anchor-link",
        href: "#méthode-2--ajout-manuel-par-adresse-ip",
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
          children: "Section intitulée « Méthode 2 — Ajout manuel par adresse IP »"
        })]
      })]
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["Aller dans ", createVNode(_components.strong, {
          children: "Paramètres → Bluetooth et appareils → Imprimantes et scanners"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: ["Cliquer sur ", createVNode(_components.strong, {
          children: "Ajouter manuellement"
        }), " (lien en bas de la liste)."]
      }), "\n", createVNode(_components.li, {
        children: ["Choisir ", createVNode(_components.strong, {
          children: "Ajouter une imprimante à l’aide d’une adresse TCP/IP ou d’un nom d’hôte"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: "Saisir l’adresse IP de l’imprimante."
      }), "\n", createVNode(_components.li, {
        children: "Windows détecte le pilote ou propose d’en installer un."
      }), "\n", createVNode(_components.li, {
        children: ["Si le pilote n’est pas trouvé automatiquement : cliquer sur ", createVNode(_components.strong, {
          children: "Disque fourni"
        }), " et pointer vers le pilote téléchargé."]
      }), "\n"]
    }), "\n", createVNode(_components.div, {
      class: "sl-heading-wrapper level-h2",
      children: [createVNode(_components.h2, {
        id: "définir-comme-imprimante-par-défaut",
        children: "Définir comme imprimante par défaut"
      }), createVNode(_components.a, {
        class: "sl-anchor-link",
        href: "#définir-comme-imprimante-par-défaut",
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
          children: "Section intitulée « Définir comme imprimante par défaut »"
        })]
      })]
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["Aller dans ", createVNode(_components.strong, {
          children: "Paramètres → Bluetooth et appareils → Imprimantes et scanners"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: ["Cliquer sur l’imprimante → ", createVNode(_components.strong, {
          children: "Définir par défaut"
        }), "."]
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
      children: ["Imprimer une page de test : ", createVNode(_components.strong, {
        children: "Paramètres de l’imprimante → Page de test"
      }), "."]
    }), "\n", createVNode(_components.div, {
      class: "sl-heading-wrapper level-h2",
      children: [createVNode(_components.h2, {
        id: "dépannage",
        children: "Dépannage"
      }), createVNode(_components.a, {
        class: "sl-anchor-link",
        href: "#dépannage",
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
          children: "Section intitulée « Dépannage »"
        })]
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Imprimante hors ligne"
        }), " : vérifier la connexion réseau de l’imprimante et redémarrer le service ", createVNode(_components.code, {
          dir: "auto",
          children: "Spouleur d'impression"
        }), " (services.msc)."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Travaux bloqués"
        }), " : ouvrir la file d’impression → annuler tous les travaux → relancer le spouleur."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Mauvais pilote"
        }), " : désinstaller l’imprimante et réinstaller avec le pilote officiel du fabricant."]
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

const url = "src/content/docs/installation/imprimante-reseau.mdx";
const file = "/Users/blarwitch/Sites/teamit/teamit-superdoc/src/content/docs/installation/imprimante-reseau.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/blarwitch/Sites/teamit/teamit-superdoc/src/content/docs/installation/imprimante-reseau.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
