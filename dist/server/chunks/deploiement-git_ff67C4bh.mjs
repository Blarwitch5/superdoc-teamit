import { c as createVNode } from './index_ihQfRkT6.mjs';
import { aX as Fragment, bQ as __astro_tag_component__ } from './sequence_BHhiZ0XQ.mjs';

const frontmatter = {
  "title": "Déploiement Git",
  "description": "Déploiement automatique d'un projet via Git sur Infomaniak.",
  "subcategory": "",
  "createdBy": "Romain Blary",
  "createdAt": "2026-04-09T00:45:00.000Z",
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
    "slug": "prérequis",
    "text": "Prérequis"
  }, {
    "depth": 2,
    "slug": "configuration-via-le-manager",
    "text": "Configuration via le Manager"
  }, {
    "depth": 2,
    "slug": "déploiement-manuel-depuis-manager",
    "text": "Déploiement manuel depuis Manager"
  }, {
    "depth": 2,
    "slug": "déploiement-automatique-via-webhook",
    "text": "Déploiement automatique via webhook"
  }, {
    "depth": 2,
    "slug": "déploiement-via-ssh-avancé",
    "text": "Déploiement via SSH (avancé)"
  }, {
    "depth": 2,
    "slug": "bonnes-pratiques",
    "text": "Bonnes pratiques"
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
    ul: "ul",
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
      children: ["Le déploiement Git permet de mettre à jour automatiquement le site sur le serveur à chaque ", createVNode(_components.code, {
        dir: "auto",
        children: "git push"
      }), ", sans passer par FTP. Infomaniak supporte cette méthode via son interface Manager."]
    }), "\n", createVNode(_components.div, {
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
        children: "Dépôt Git existant (GitHub, GitLab, Bitbucket ou dépôt Infomaniak)"
      }), "\n", createVNode(_components.li, {
        children: "Accès SSH ou accès à l’interface Manager"
      }), "\n"]
    }), "\n", createVNode(_components.div, {
      class: "sl-heading-wrapper level-h2",
      children: [createVNode(_components.h2, {
        id: "configuration-via-le-manager",
        children: "Configuration via le Manager"
      }), createVNode(_components.a, {
        class: "sl-anchor-link",
        href: "#configuration-via-le-manager",
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
          children: "Section intitulée « Configuration via le Manager »"
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
          children: "Hébergement Web → [nom du service] → Déploiement Git"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: ["Cliquer sur ", createVNode(_components.strong, {
          children: "Activer le déploiement Git"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: ["Renseigner :\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "URL du dépôt"
            }), " : URL HTTPS ou SSH du dépôt (ex. : ", createVNode(_components.code, {
              dir: "auto",
              children: "https://github.com/organisation/monsite.git"
            }), ")"]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "Branche"
            }), " : la branche à déployer (ex. : ", createVNode(_components.code, {
              dir: "auto",
              children: "main"
            }), " ou ", createVNode(_components.code, {
              dir: "auto",
              children: "production"
            }), ")"]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "Dossier de destination"
            }), " : généralement ", createVNode(_components.code, {
              dir: "auto",
              children: "/web/"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["Si dépôt privé, ajouter la ", createVNode(_components.strong, {
          children: "clé SSH publique"
        }), " générée par Infomaniak dans les clés autorisées du dépôt (GitHub : Settings → Deploy keys)."]
      }), "\n", createVNode(_components.li, {
        children: ["Cliquer sur ", createVNode(_components.strong, {
          children: "Enregistrer"
        }), "."]
      }), "\n"]
    }), "\n", createVNode(_components.div, {
      class: "sl-heading-wrapper level-h2",
      children: [createVNode(_components.h2, {
        id: "déploiement-manuel-depuis-manager",
        children: "Déploiement manuel depuis Manager"
      }), createVNode(_components.a, {
        class: "sl-anchor-link",
        href: "#déploiement-manuel-depuis-manager",
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
          children: "Section intitulée « Déploiement manuel depuis Manager »"
        })]
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Après configuration, cliquer sur ", createVNode(_components.strong, {
        children: "Déployer"
      }), " dans l’interface pour déclencher un déploiement immédiat."]
    }), "\n", createVNode(_components.div, {
      class: "sl-heading-wrapper level-h2",
      children: [createVNode(_components.h2, {
        id: "déploiement-automatique-via-webhook",
        children: "Déploiement automatique via webhook"
      }), createVNode(_components.a, {
        class: "sl-anchor-link",
        href: "#déploiement-automatique-via-webhook",
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
          children: "Section intitulée « Déploiement automatique via webhook »"
        })]
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Pour déclencher un déploiement à chaque ", createVNode(_components.code, {
        dir: "auto",
        children: "git push"
      }), " :"]
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["Copier l’", createVNode(_components.strong, {
          children: "URL du webhook"
        }), " affichée dans le Manager."]
      }), "\n", createVNode(_components.li, {
        children: ["Sur GitHub : ", createVNode(_components.strong, {
          children: "Settings → Webhooks → Add webhook"
        }), ".\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "Payload URL : l’URL copiée"
          }), "\n", createVNode(_components.li, {
            children: ["Content type : ", createVNode(_components.code, {
              dir: "auto",
              children: "application/json"
            })]
          }), "\n", createVNode(_components.li, {
            children: ["Événement : ", createVNode(_components.code, {
              dir: "auto",
              children: "push"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["Cliquer sur ", createVNode(_components.strong, {
          children: "Add webhook"
        }), "."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["Désormais, chaque ", createVNode(_components.code, {
        dir: "auto",
        children: "git push"
      }), " sur la branche configurée déclenche automatiquement un déploiement."]
    }), "\n", createVNode(_components.div, {
      class: "sl-heading-wrapper level-h2",
      children: [createVNode(_components.h2, {
        id: "déploiement-via-ssh-avancé",
        children: "Déploiement via SSH (avancé)"
      }), createVNode(_components.a, {
        class: "sl-anchor-link",
        href: "#déploiement-via-ssh-avancé",
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
          children: "Section intitulée « Déploiement via SSH (avancé) »"
        })]
      })]
    }), "\n", createVNode(_components.p, {
      children: "Si l’hébergement dispose d’un accès SSH :"
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
            children: [createVNode(_components.div, {
              class: "ec-line",
              children: createVNode(_components.div, {
                class: "code",
                children: createVNode(_components.span, {
                  style: {
                    "--0": "#919F9F",
                    "--1": "#5F636F"
                  },
                  children: "# Depuis le serveur, dans le dossier du site"
                })
              })
            }), createVNode(_components.div, {
              class: "ec-line",
              children: createVNode(_components.div, {
                class: "code",
                children: [createVNode(_components.span, {
                  style: {
                    "--0": "#82AAFF",
                    "--1": "#3B61B0"
                  },
                  children: "git"
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
                  children: "pull"
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
                  children: "origin"
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
                  children: "main"
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
            "data-code": "git pull origin main",
            children: createVNode(_components.div, {})
          })]
        })]
      })]
    }), "\n", createVNode(_components.p, {
      children: "Ou via un script de déploiement déclenché par webhook/CI."
    }), "\n", createVNode(_components.div, {
      class: "sl-heading-wrapper level-h2",
      children: [createVNode(_components.h2, {
        id: "bonnes-pratiques",
        children: "Bonnes pratiques"
      }), createVNode(_components.a, {
        class: "sl-anchor-link",
        href: "#bonnes-pratiques",
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
          children: "Section intitulée « Bonnes pratiques »"
        })]
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Ne jamais déployer directement sur ", createVNode(_components.code, {
          dir: "auto",
          children: "main"
        }), " — travailler sur une branche de développement et merger après validation."]
      }), "\n", createVNode(_components.li, {
        children: ["Configurer un environnement de ", createVNode(_components.strong, {
          children: "staging"
        }), " sur une branche dédiée avant la production."]
      }), "\n", createVNode(_components.li, {
        children: ["Vérifier que le fichier ", createVNode(_components.code, {
          dir: "auto",
          children: ".gitignore"
        }), " exclut les fichiers sensibles (", createVNode(_components.code, {
          dir: "auto",
          children: ".env"
        }), ", ", createVNode(_components.code, {
          dir: "auto",
          children: "vendor/"
        }), ", ", createVNode(_components.code, {
          dir: "auto",
          children: "node_modules/"
        }), ")."]
      }), "\n", createVNode(_components.li, {
        children: "Tester le déploiement sur un site de test avant de configurer la production."
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
