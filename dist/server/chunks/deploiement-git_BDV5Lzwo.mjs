import { c as createVNode } from './index_9aq_q4Mc.mjs';
import { bi as Fragment, bP as __astro_tag_component__ } from './sequence_DUL7TRkU.mjs';

const frontmatter = {
  "title": "Déploiement automatique via Git",
  "description": "Configurer le déploiement automatique d'un site depuis un dépôt Git sur Infomaniak.",
  "category": "web"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "prérequis",
    "text": "Prérequis"
  }, {
    "depth": 2,
    "slug": "activer-git-sur-lhébergement",
    "text": "Activer Git sur l’hébergement"
  }, {
    "depth": 2,
    "slug": "configurer-le-dépôt-distant",
    "text": "Configurer le dépôt distant"
  }, {
    "depth": 2,
    "slug": "lier-le-dépôt-à-lhébergement",
    "text": "Lier le dépôt à l’hébergement"
  }, {
    "depth": 2,
    "slug": "déploiement-automatique-webhook",
    "text": "Déploiement automatique (webhook)"
  }, {
    "depth": 2,
    "slug": "vérification",
    "text": "Vérification"
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
        children: "Hébergement Infomaniak actif"
      }), "\n", createVNode(_components.li, {
        children: "Dépôt Git existant (GitHub, GitLab ou Bitbucket)"
      }), "\n", createVNode(_components.li, {
        children: "Accès SSH activé sur l’hébergement"
      }), "\n"]
    }), "\n", createVNode(_components.div, {
      class: "sl-heading-wrapper level-h2",
      children: [createVNode(_components.h2, {
        id: "activer-git-sur-lhébergement",
        children: "Activer Git sur l’hébergement"
      }), createVNode(_components.a, {
        class: "sl-anchor-link",
        href: "#activer-git-sur-lhébergement",
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
          children: "Section intitulée « Activer Git sur l’hébergement »"
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
          children: "Git"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: ["Cliquez sur ", createVNode(_components.strong, {
          children: "Activer Git"
        }), " et choisissez la branche à déployer (généralement ", createVNode(_components.code, {
          dir: "auto",
          children: "main"
        }), ")."]
      }), "\n", createVNode(_components.li, {
        children: ["Infomaniak génère une ", createVNode(_components.strong, {
          children: "clé SSH publique"
        }), " — copiez-la."]
      }), "\n"]
    }), "\n", createVNode(_components.div, {
      class: "sl-heading-wrapper level-h2",
      children: [createVNode(_components.h2, {
        id: "configurer-le-dépôt-distant",
        children: "Configurer le dépôt distant"
      }), createVNode(_components.a, {
        class: "sl-anchor-link",
        href: "#configurer-le-dépôt-distant",
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
          children: "Section intitulée « Configurer le dépôt distant »"
        })]
      })]
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["Sur GitHub/GitLab, allez dans ", createVNode(_components.strong, {
          children: "Settings"
        }), " → ", createVNode(_components.strong, {
          children: "Deploy keys"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: "Collez la clé SSH d’Infomaniak et activez l’accès en lecture."
      }), "\n", createVNode(_components.li, {
        children: ["Copiez l’URL SSH du dépôt (ex : ", createVNode(_components.code, {
          dir: "auto",
          children: "git@github.com:organisation/projet.git"
        }), ")."]
      }), "\n"]
    }), "\n", createVNode(_components.div, {
      class: "sl-heading-wrapper level-h2",
      children: [createVNode(_components.h2, {
        id: "lier-le-dépôt-à-lhébergement",
        children: "Lier le dépôt à l’hébergement"
      }), createVNode(_components.a, {
        class: "sl-anchor-link",
        href: "#lier-le-dépôt-à-lhébergement",
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
          children: "Section intitulée « Lier le dépôt à l’hébergement »"
        })]
      })]
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Retournez dans l’onglet Git du Manager."
      }), "\n", createVNode(_components.li, {
        children: ["Collez l’URL SSH du dépôt dans le champ ", createVNode(_components.strong, {
          children: "Repository URL"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: ["Indiquez le dossier de destination (ex : ", createVNode(_components.code, {
          dir: "auto",
          children: "web/"
        }), " pour la racine publique)."]
      }), "\n", createVNode(_components.li, {
        children: ["Cliquez sur ", createVNode(_components.strong, {
          children: "Enregistrer"
        }), " — Infomaniak effectue un premier pull."]
      }), "\n"]
    }), "\n", createVNode(_components.div, {
      class: "sl-heading-wrapper level-h2",
      children: [createVNode(_components.h2, {
        id: "déploiement-automatique-webhook",
        children: "Déploiement automatique (webhook)"
      }), createVNode(_components.a, {
        class: "sl-anchor-link",
        href: "#déploiement-automatique-webhook",
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
          children: "Section intitulée « Déploiement automatique (webhook) »"
        })]
      })]
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["Dans le Manager, copiez l’", createVNode(_components.strong, {
          children: "URL du webhook"
        }), " fournie par Infomaniak."]
      }), "\n", createVNode(_components.li, {
        children: ["Sur GitHub : ", createVNode(_components.strong, {
          children: "Settings"
        }), " → ", createVNode(_components.strong, {
          children: "Webhooks"
        }), " → ", createVNode(_components.strong, {
          children: "Add webhook"
        }), " → collez l’URL, événement : ", createVNode(_components.code, {
          dir: "auto",
          children: "push"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: "Chaque push sur la branche configurée déclenche un déploiement automatique."
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
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Effectuez un commit de test sur la branche → vérifiez que les fichiers sont mis à jour sur le serveur."
      }), "\n", createVNode(_components.li, {
        children: "Les logs de déploiement sont disponibles dans l’onglet Git du Manager."
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

const url = "src/content/docs/web/deploiement-git.mdx";
const file = "/Users/blarwitch/Sites/teamit/teamit-superdoc/src/content/docs/web/deploiement-git.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/blarwitch/Sites/teamit/teamit-superdoc/src/content/docs/web/deploiement-git.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
