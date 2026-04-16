---
name: Projet Sourcier Québec
description: Site vitrine pour Thomas, sourcier professionnel basé à La Pocatière (Québec) — contenu et structure déjà définis
type: project
originSessionId: 4585db24-2196-47e2-be23-f481d97913ef
---
Site vitrine pour **Sourcier Québec** (Thomas, sourcier professionnel formé en France, 10+ ans d'expérience, basé au 413d rue Lafontaine, La Pocatière, G0R1Z0). Contact : 1(418)356-6638, sourcierquebec@gmail.com.

**Services** : détection de veines d'eau pour forage résidentiel / agricole / municipal. Zone : Chaudière-Appalaches, Bas-Saint-Laurent, déplacement possible partout au Québec.

**Forfaits** : Résidentiel 250$ (≤5000 m²), Agricole 350$ (≤10000 m²), Municipal 550$. Déplacement inclus 20 km, puis 0,75$/km + temps.

**Structure 9 sections** définie dans `/home/debian/inbox/Structure_Site_Sourcier_Quebec.docx` : Héro, 3 Piliers (Précision/Économie/Aide à la décision), À Propos & Services, Forfaits, Zone d'intervention, FAQ, Témoignages (liés Google Business), Formulaire contact, Footer + clause de non-garantie.

**Why:** Client néophyte qui doit pouvoir éditer seul après livraison (prix, textes, coordonnées). Pas de blog ni e-commerce. Répertoire de travail : `/home/debian/thomas-le-sourcier`.

**Stack retenue** (README du repo) : **Astro statique + Decap CMS** avec `/admin`. Actuellement en prod sur Docker + nginx + Traefik (`sourcier.thierrypoitras.com`) — setup temporaire pour montrer les maquettes, pas le target. Pas de remote Git configuré — déploiement via `docker compose up -d --build` directement sur le VPS.

**Contrainte 2026 importante** : Netlify Identity + Git Gateway **dépréciés depuis février 2025**. L'auth Decap classique (`config.yml` avec `backend: git-gateway`) ne peut plus être mise en place pour de nouveaux sites. Il faut un remplaçant.

**Stack recommandée pour la livraison** (analysée le 2026-04-15, décision reportée) :
1. Hébergement : **Cloudflare Pages** (free tier généreux : 500 builds/mois, bande passante illimitée). Préférable à Netlify dont le nouveau modèle credit-based (300 crédits/mois free) est plus serré.
2. Auth Decap : **DecapBridge** (free : 3 sites, 10 collaborateurs/site). Login Google/Microsoft/password, pas de compte GitHub requis → compatible client néophyte.
3. Workflow : Thomas → `/admin` → login email → DecapBridge commit → Cloudflare Pages rebuild auto.

Alternatives écartées :
- **Sveltia CMS** : moderne mais auth directe GitHub → Thomas devrait avoir un compte GitHub, incompatible avec profil néophyte.
- **VPS actuel en chemin critique** : déconseillé long terme (si le VPS tombe, Thomas ne peut rien faire).

**How to apply:** Ne pas proposer Webflow ni autre CMS. Phase actuelle = maquettes A/B/C en validation client, pas encore d'intégration Decap. Préserver la clause de non-garantie dans le footer (obligation légale). Prévoir avis Google Business + formulaire vers sourcierquebec@gmail.com. **Avant d'engager DecapBridge**, documenter la stratégie de sortie (voir risque ci-dessous).

**État au 2026-04-16** : Maquette validée par le client. Palette « editorial » active. Design responsive fonctionnel. Le formulaire contact utilise Formspree (endpoint `xaqaebva`). **Decap CMS intégré** : contenu migré vers 8 fichiers YAML dans `src/content/`, panneau admin à `/admin`, `content.ts` lit les YAML et exporte le même objet `site`. Repo pushé sur GitHub `tradieux/sourcier-quebec` (à transférer vers un compte `sourcierquebec` plus tard). **Prochaine étape** : connecter Cloudflare Pages + DecapBridge.

**Risque DecapBridge shutdown** : protégé par l'architecture git-based de Decap. Le contenu vit en YAML/MD dans le repo, la CMS n'est qu'une UI d'édition. Si DecapBridge disparaît : (a) le site continue de fonctionner (statique), (b) seule l'édition via `/admin` casse, (c) migration possible vers Sveltia CMS + GitHub OAuth, un autre proxy Decap, ou un autre CMS headless git-based (Tina, Keystatic, Pages CMS). Pas de lock-in sur le contenu.
