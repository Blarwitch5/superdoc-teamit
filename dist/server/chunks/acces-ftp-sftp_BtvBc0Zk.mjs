import { c as createVNode } from './index_ihQfRkT6.mjs';
import { aX as Fragment, bQ as __astro_tag_component__ } from './sequence_BHhiZ0XQ.mjs';

const frontmatter = {
  "title": "Accès FTP / SFTP",
  "description": "Configuration de l'accès FTP/SFTP à un hébergement Infomaniak avec FileZilla.",
  "subcategory": "",
  "createdBy": "Romain Blary",
  "createdAt": "2026-03-26T18:30:00.000Z",
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
    "slug": "récupérer-les-identifiants-ftp",
    "text": "Récupérer les identifiants FTP"
  }, {
    "depth": 2,
    "slug": "configuration-dans-filezilla",
    "text": "Configuration dans FileZilla"
  }, {
    "depth": 3,
    "slug": "via-le-gestionnaire-de-sites-recommandé",
    "text": "Via le Gestionnaire de sites (recommandé)"
  }, {
    "depth": 2,
    "slug": "navigation-et-transfert",
    "text": "Navigation et transfert"
  }, {
    "depth": 2,
    "slug": "bonnes-pratiques",
    "text": "Bonnes pratiques"
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
    h3: "h3",
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
        children: [createVNode(_components.strong, {
          children: "FileZilla"
        }), " installé (", createVNode(_components.a, {
          href: "https://filezilla-project.org/",
          children: "filezilla-project.org"
        }), ")"]
      }), "\n", createVNode(_components.li, {
        children: "Identifiants FTP disponibles dans Infomaniak Manager"
      }), "\n"]
    }), "\n", createVNode(_components.div, {
      class: "sl-heading-wrapper level-h2",
      children: [createVNode(_components.h2, {
        id: "récupérer-les-identifiants-ftp",
        children: "Récupérer les identifiants FTP"
      }), createVNode(_components.a, {
        class: "sl-anchor-link",
        href: "#récupérer-les-identifiants-ftp",
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
          children: "Section intitulée « Récupérer les identifiants FTP »"
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
          children: "Hébergement Web → [nom du service] → FTP"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: ["Copier :\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "Hôte"
            }), " (ex. : ", createVNode(_components.code, {
              dir: "auto",
              children: "ftp.cluster0XX.hosting.ovh.net"
            }), " ou ", createVNode(_components.code, {
              dir: "auto",
              children: "ftp.infomaniak.com"
            }), ")"]
          }), "\n", createVNode(_components.li, {
            children: createVNode(_components.strong, {
              children: "Nom d’utilisateur"
            })
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "Port"
            }), " : ", createVNode(_components.code, {
              dir: "auto",
              children: "21"
            }), " (FTP) ou ", createVNode(_components.code, {
              dir: "auto",
              children: "22"
            }), " (SFTP)"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Le mot de passe FTP peut être celui du compte ou un mot de passe dédié à réinitialiser depuis cette interface."
    }), "\n", createVNode(_components.div, {
      class: "sl-heading-wrapper level-h2",
      children: [createVNode(_components.h2, {
        id: "configuration-dans-filezilla",
        children: "Configuration dans FileZilla"
      }), createVNode(_components.a, {
        class: "sl-anchor-link",
        href: "#configuration-dans-filezilla",
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
          children: "Section intitulée « Configuration dans FileZilla »"
        })]
      })]
    }), "\n", createVNode(_components.div, {
      class: "sl-heading-wrapper level-h3",
      children: [createVNode(_components.h3, {
        id: "via-le-gestionnaire-de-sites-recommandé",
        children: "Via le Gestionnaire de sites (recommandé)"
      }), createVNode(_components.a, {
        class: "sl-anchor-link",
        href: "#via-le-gestionnaire-de-sites-recommandé",
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
          children: "Section intitulée « Via le Gestionnaire de sites (recommandé) »"
        })]
      })]
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["Ouvrir FileZilla → ", createVNode(_components.strong, {
          children: "Fichier → Gestionnaire de sites → Nouveau site"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: ["Renseigner :\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "Protocole"
            }), " : ", createVNode(_components.code, {
              dir: "auto",
              children: "SFTP - SSH File Transfer Protocol"
            }), " (préférer SFTP pour la sécurité) ou ", createVNode(_components.code, {
              dir: "auto",
              children: "FTP"
            })]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "Hôte"
            }), " : l’hôte copié depuis Manager"]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "Port"
            }), " : ", createVNode(_components.code, {
              dir: "auto",
              children: "22"
            }), " pour SFTP, ", createVNode(_components.code, {
              dir: "auto",
              children: "21"
            }), " pour FTP"]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "Mode de connexion"
            }), " : Normale"]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "Identifiant / Mot de passe"
            }), " : identifiants FTP"]
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["Cliquer sur ", createVNode(_components.strong, {
          children: "Connexion"
        }), "."]
      }), "\n"]
    }), "\n", createVNode(_components.div, {
      class: "sl-heading-wrapper level-h2",
      children: [createVNode(_components.h2, {
        id: "navigation-et-transfert",
        children: "Navigation et transfert"
      }), createVNode(_components.a, {
        class: "sl-anchor-link",
        href: "#navigation-et-transfert",
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
          children: "Section intitulée « Navigation et transfert »"
        })]
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Le panneau gauche affiche les fichiers locaux, le droit les fichiers distants."
      }), "\n", createVNode(_components.li, {
        children: ["La racine du site web est généralement dans ", createVNode(_components.code, {
          dir: "auto",
          children: "/web/"
        }), " ou ", createVNode(_components.code, {
          dir: "auto",
          children: "/htdocs/"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: ["Pour transférer : glisser-déposer entre les deux panneaux, ou clic droit → ", createVNode(_components.strong, {
          children: "Envoyer"
        }), "."]
      }), "\n"]
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
        children: ["Utiliser ", createVNode(_components.strong, {
          children: "SFTP"
        }), " plutôt que FTP (connexion chiffrée)."]
      }), "\n", createVNode(_components.li, {
        children: "Ne pas modifier les fichiers directement sur le serveur — travailler en local et uploader."
      }), "\n", createVNode(_components.li, {
        children: ["Sauvegarder avant toute modification importante (voir ", createVNode(_components.a, {
          href: "/serveur/sauvegarde-site/",
          children: "Sauvegarde de site"
        }), ")."]
      }), "\n"]
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
          children: "Connexion refusée"
        }), " : vérifier le port (21 vs 22) et les identifiants."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Timeout"
        }), " : vérifier que le pare-feu ne bloque pas les ports FTP/SFTP."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Erreur 530"
        }), " : identifiants incorrects — réinitialiser le mot de passe FTP dans Manager."]
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

const url = "src/content/docs/serveur/acces-ftp-sftp.mdx";
const file = "/Users/blarwitch/Sites/teamit/teamit-superdoc/src/content/docs/serveur/acces-ftp-sftp.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/blarwitch/Sites/teamit/teamit-superdoc/src/content/docs/serveur/acces-ftp-sftp.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
