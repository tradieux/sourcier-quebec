---
name: Setup DecapBridge en cours
description: Étapes restantes pour rendre le panneau /admin fonctionnel avec DecapBridge — en attente du site ID
type: project
originSessionId: ca923888-562b-4509-af39-021b91ee9f59
---
**État au 2026-04-16** : Decap CMS intégré dans le code (8 fichiers YAML, config.yml, admin/index.html). Repo pushé sur `tradieux/sourcier-quebec`. Le panneau `/admin` n'est pas encore fonctionnel — il manque le backend DecapBridge.

**Config DecapBridge trouvée** (exemple réel) :
```yaml
backend:
  name: git-gateway
  repo: tradieux/sourcier-quebec
  branch: main
  auth_type: pkce
  base_url: https://auth.decapbridge.com
  auth_endpoint: /sites/<SITE_ID>/pkce
  auth_token_endpoint: /sites/<SITE_ID>/token
  gateway_url: https://gateway.decapbridge.com
```

**Étapes restantes pour Thierry :**
1. Créer un compte sur https://decapbridge.com/auth/signup
2. Ajouter un site : provider GitHub, repo `tradieux/sourcier-quebec`
3. Login URL : `https://sourcier.thierrypoitras.com/admin`
4. Auth type : **Classic** (email/password — adapté pour Thomas)
5. Créer un **GitHub fine-grained token** (Settings → Developer settings → Personal access tokens) avec accès `Contents: read/write` sur le repo `sourcier-quebec`
6. Donner le **site ID** (UUID) à Claude pour mettre à jour `public/admin/config.yml`
7. Rebuild Docker sur le VPS

**Aussi** : mettre à jour `admin/index.html` pour utiliser Decap CMS >= 3.8.3 (requis pour login Google/Microsoft).

**How to apply:** À la prochaine session, demander le site ID DecapBridge. Mettre à jour config.yml avec le backend, rebuild, tester `/admin`.
