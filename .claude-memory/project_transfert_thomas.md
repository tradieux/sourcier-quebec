---
name: Checklist transfert à Thomas
description: Étapes pour rendre Thomas 100% autonome — transfert de tous les comptes et services vers sourcierquebec@gmail.com
type: project
originSessionId: ca923888-562b-4509-af39-021b91ee9f59
---
Checklist de transfert pour que Thomas soit propriétaire de tout le stack, indépendant de Thierry.

**Why:** Thomas est néophyte mais doit posséder tous ses comptes/services. Thierry reste collaborateur/mainteneur, pas propriétaire.

**Comptes à transférer / créer sous sourcierquebec@gmail.com :**

1. **GitHub** — créer un compte `sourcierquebec` (sourcierquebec@gmail.com), transférer le repo `tradieux/sourcier-quebec` → `sourcierquebec/sourcier-quebec` (Settings → Transfer repository). Ajouter `tradieux` comme collaborateur.
2. **Cloudflare Pages** — créer le compte Cloudflare sous sourcierquebec@gmail.com, ou transférer le projet Pages vers son compte. Reconnecter au repo GitHub après transfert.
3. **DecapBridge** — créer le compte sous sourcierquebec@gmail.com. Ajouter Thierry comme collaborateur.
4. **Formspree** — le formulaire actuel (endpoint `xaqaebva`) est probablement sous le compte de Thierry. Créer un compte Formspree sous sourcierquebec@gmail.com, recréer le formulaire, mettre à jour l'endpoint dans `index.astro`.
5. **Nom de domaine** (si applicable) — quand Thomas achète son domaine définitif, configurer DNS vers Cloudflare Pages. Transférer la propriété du domaine à son nom.

**How to apply:** Faire le transfert une fois la migration Cloudflare Pages + DecapBridge validée et fonctionnelle. Nécessite une session avec Thomas pour la vérification email GitHub. Pour Formspree, noter le nouvel endpoint après migration.
