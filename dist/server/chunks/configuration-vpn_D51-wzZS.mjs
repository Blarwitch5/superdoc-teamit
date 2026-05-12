import { c as createVNode } from './index_9aq_q4Mc.mjs';
import { bi as Fragment, bP as __astro_tag_component__ } from './sequence_DUL7TRkU.mjs';

const frontmatter = {
  "title": "Configuration du VPN",
  "description": "Installer et configurer le client VPN pour l'accès distant au réseau de l'entreprise.",
  "category": "installation"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "prérequis",
    "text": "Prérequis"
  }, {
    "depth": 2,
    "slug": "installation-du-client-openvpn",
    "text": "Installation du client OpenVPN"
  }, {
    "depth": 2,
    "slug": "importer-le-profil-de-connexion",
    "text": "Importer le profil de connexion"
  }, {
    "depth": 2,
    "slug": "se-connecter",
    "text": "Se connecter"
  }, {
    "depth": 2,
    "slug": "vérification",
    "text": "Vérification"
  }, {
    "depth": 2,
    "slug": "déconnexion",
    "text": "Déconnexion"
  }, {
    "depth": 2,
    "slug": "dépannage",
    "text": "Dépannage"
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
        children: "Identifiants VPN fournis par l’administrateur réseau"
      }), "\n", createVNode(_components.li, {
        children: ["Fichier de configuration (", createVNode(_components.code, {
          dir: "auto",
          children: ".ovpn"
        }), " pour OpenVPN ou profil fourni)"]
      }), "\n"]
    }), "\n", createVNode(_components.div, {
      class: "sl-heading-wrapper level-h2",
      children: [createVNode(_components.h2, {
        id: "installation-du-client-openvpn",
        children: "Installation du client OpenVPN"
      }), createVNode(_components.a, {
        class: "sl-anchor-link",
        href: "#installation-du-client-openvpn",
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
          children: "Section intitulée « Installation du client OpenVPN »"
        })]
      })]
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["Téléchargez ", createVNode(_components.strong, {
          children: "OpenVPN Connect"
        }), " depuis ", createVNode(_components.a, {
          href: "https://openvpn.net/client/",
          children: "openvpn.net/client"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: "Lancez l’installeur et suivez les étapes (options par défaut)."
      }), "\n"]
    }), "\n", createVNode(_components.div, {
      class: "sl-heading-wrapper level-h2",
      children: [createVNode(_components.h2, {
        id: "importer-le-profil-de-connexion",
        children: "Importer le profil de connexion"
      }), createVNode(_components.a, {
        class: "sl-anchor-link",
        href: "#importer-le-profil-de-connexion",
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
          children: "Section intitulée « Importer le profil de connexion »"
        })]
      })]
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Ouvrez OpenVPN Connect."
      }), "\n", createVNode(_components.li, {
        children: ["Cliquez sur ", createVNode(_components.strong, {
          children: "+"
        }), " → ", createVNode(_components.strong, {
          children: "Upload File"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: ["Sélectionnez le fichier ", createVNode(_components.code, {
          dir: "auto",
          children: ".ovpn"
        }), " fourni par l’IT."]
      }), "\n", createVNode(_components.li, {
        children: ["Entrez le nom du profil (ex : ", createVNode(_components.code, {
          dir: "auto",
          children: "VPN Entreprise"
        }), ") → ", createVNode(_components.strong, {
          children: "Ajouter"
        }), "."]
      }), "\n"]
    }), "\n", createVNode(_components.div, {
      class: "sl-heading-wrapper level-h2",
      children: [createVNode(_components.h2, {
        id: "se-connecter",
        children: "Se connecter"
      }), createVNode(_components.a, {
        class: "sl-anchor-link",
        href: "#se-connecter",
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
          children: "Section intitulée « Se connecter »"
        })]
      })]
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Dans OpenVPN Connect, sélectionnez le profil importé."
      }), "\n", createVNode(_components.li, {
        children: "Entrez vos identifiants (nom d’utilisateur et mot de passe VPN)."
      }), "\n", createVNode(_components.li, {
        children: ["Cliquez sur ", createVNode(_components.strong, {
          children: "Connecter"
        }), " — l’icône passe au vert en cas de succès."]
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
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["Une fois connecté, ouvrez un navigateur et accédez à une ressource interne (ex : serveur de fichiers ", createVNode(_components.code, {
          dir: "auto",
          children: "\\\\\\\\192.168.x.x"
        }), " ou intranet)."]
      }), "\n", createVNode(_components.li, {
        children: "Si la connexion réseau interne fonctionne, le VPN est opérationnel."
      }), "\n"]
    }), "\n", createVNode(_components.div, {
      class: "sl-heading-wrapper level-h2",
      children: [createVNode(_components.h2, {
        id: "déconnexion",
        children: "Déconnexion"
      }), createVNode(_components.a, {
        class: "sl-anchor-link",
        href: "#déconnexion",
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
          children: "Section intitulée « Déconnexion »"
        })]
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Cliquez sur le bouton ", createVNode(_components.strong, {
        children: "Déconnecter"
      }), " dans OpenVPN Connect. Déconnectez-vous toujours du VPN quand il n’est plus nécessaire."]
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Problème"
          }), createVNode(_components.th, {
            children: "Solution"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Connexion refusée"
          }), createVNode(_components.td, {
            children: ["Vérifiez identifiants et que le fichier ", createVNode(_components.code, {
              dir: "auto",
              children: ".ovpn"
            }), " est le bon"]
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "VPN connecté mais pas d’accès réseau"
          }), createVNode(_components.td, {
            children: "Vérifiez le split tunneling avec l’admin"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Déconnexions fréquentes"
          }), createVNode(_components.td, {
            children: "Vérifiez la stabilité de la connexion Internet locale"
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
        children: "Le mot de passe VPN est différent du mot de passe Windows/AD. Contactez l’IT pour tout renouvellement."
      }), "\n", createVNode(_components.li, {
        children: ["Ne partagez jamais votre profil ", createVNode(_components.code, {
          dir: "auto",
          children: ".ovpn"
        }), " ou vos identifiants VPN."]
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

const url = "src/content/docs/installation/configuration-vpn.mdx";
const file = "/Users/blarwitch/Sites/teamit/teamit-superdoc/src/content/docs/installation/configuration-vpn.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/blarwitch/Sites/teamit/teamit-superdoc/src/content/docs/installation/configuration-vpn.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
