import { c as createVNode } from './index_9aq_q4Mc.mjs';
import { bi as Fragment, bP as __astro_tag_component__ } from './sequence_DUL7TRkU.mjs';

const frontmatter = {
  "title": "Connexion FTP / SFTP",
  "description": "Se connecter aux fichiers d'un hébergement Infomaniak via FTP ou SFTP avec FileZilla.",
  "category": "serveur"
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
    "slug": "configurer-filezilla-sftp-recommandé",
    "text": "Configurer FileZilla (SFTP recommandé)"
  }, {
    "depth": 2,
    "slug": "navigation-dans-les-fichiers",
    "text": "Navigation dans les fichiers"
  }, {
    "depth": 2,
    "slug": "ftp-classique-si-sftp-non-disponible",
    "text": "FTP classique (si SFTP non disponible)"
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
        children: [createVNode(_components.a, {
          href: "https://filezilla-project.org/",
          children: "FileZilla"
        }), " installé (ou Cyberduck en alternative)"]
      }), "\n", createVNode(_components.li, {
        children: "Identifiants FTP disponibles dans le Manager Infomaniak"
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
        children: ["Connectez-vous au Manager → ", createVNode(_components.strong, {
          children: "Hébergement Web"
        }), " → sélectionnez l’hébergement → ", createVNode(_components.strong, {
          children: "Gérer"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: ["Allez dans l’onglet ", createVNode(_components.strong, {
          children: "FTP / SSH"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: ["Notez :\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "Serveur FTP"
            }), " (ex : ", createVNode(_components.code, {
              dir: "auto",
              children: "ftp1234.infomaniak.com"
            }), ")"]
          }), "\n", createVNode(_components.li, {
            children: createVNode(_components.strong, {
              children: "Utilisateur FTP principal"
            })
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "Mot de passe"
            }), " (si oublié, cliquez sur ", createVNode(_components.strong, {
              children: "Réinitialiser le mot de passe FTP"
            }), ")"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.div, {
      class: "sl-heading-wrapper level-h2",
      children: [createVNode(_components.h2, {
        id: "configurer-filezilla-sftp-recommandé",
        children: "Configurer FileZilla (SFTP recommandé)"
      }), createVNode(_components.a, {
        class: "sl-anchor-link",
        href: "#configurer-filezilla-sftp-recommandé",
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
          children: "Section intitulée « Configurer FileZilla (SFTP recommandé) »"
        })]
      })]
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["Ouvrez FileZilla → ", createVNode(_components.strong, {
          children: "Fichier"
        }), " → ", createVNode(_components.strong, {
          children: "Gestionnaire de sites"
        }), " → ", createVNode(_components.strong, {
          children: "Nouveau site"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: ["Renseignez :\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "Protocole"
            }), " : ", createVNode(_components.code, {
              dir: "auto",
              children: "SFTP - SSH File Transfer Protocol"
            })]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "Hôte"
            }), " : ", createVNode(_components.code, {
              dir: "auto",
              children: "ftp1234.infomaniak.com"
            })]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "Port"
            }), " : ", createVNode(_components.code, {
              dir: "auto",
              children: "22"
            })]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "Type d’authentification"
            }), " : Normale"]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "Identifiant"
            }), " et ", createVNode(_components.strong, {
              children: "Mot de passe"
            }), " FTP"]
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["Cliquez sur ", createVNode(_components.strong, {
          children: "Connexion"
        }), "."]
      }), "\n"]
    }), "\n", createVNode(_components.div, {
      class: "sl-heading-wrapper level-h2",
      children: [createVNode(_components.h2, {
        id: "navigation-dans-les-fichiers",
        children: "Navigation dans les fichiers"
      }), createVNode(_components.a, {
        class: "sl-anchor-link",
        href: "#navigation-dans-les-fichiers",
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
          children: "Section intitulée « Navigation dans les fichiers »"
        })]
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Le dossier des fichiers web accessibles publiquement est ", createVNode(_components.strong, {
          children: createVNode(_components.code, {
            dir: "auto",
            children: "web/"
          })
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: ["Ne modifiez pas les dossiers système en dehors de ", createVNode(_components.code, {
          dir: "auto",
          children: "web/"
        }), "."]
      }), "\n"]
    }), "\n", createVNode(_components.div, {
      class: "sl-heading-wrapper level-h2",
      children: [createVNode(_components.h2, {
        id: "ftp-classique-si-sftp-non-disponible",
        children: "FTP classique (si SFTP non disponible)"
      }), createVNode(_components.a, {
        class: "sl-anchor-link",
        href: "#ftp-classique-si-sftp-non-disponible",
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
          children: "Section intitulée « FTP classique (si SFTP non disponible) »"
        })]
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Utilisez le port ", createVNode(_components.code, {
        dir: "auto",
        children: "21"
      }), " avec le protocole FTP et le chiffrement ", createVNode(_components.strong, {
        children: "FTP explicite sur TLS"
      }), "."]
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
        children: "Préférez toujours SFTP (port 22) au FTP simple pour la sécurité."
      }), "\n", createVNode(_components.li, {
        children: ["Pour créer des utilisateurs FTP supplémentaires avec accès restreint à un sous-dossier : Manager → ", createVNode(_components.strong, {
          children: "FTP / SSH"
        }), " → ", createVNode(_components.strong, {
          children: "Ajouter un utilisateur FTP"
        }), "."]
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
