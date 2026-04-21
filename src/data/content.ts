import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { load } from 'js-yaml';

const dir = join(process.cwd(), 'src', 'content');
const read = (name: string) => load(readFileSync(join(dir, name), 'utf8')) as any;

const general = read('general.yml');
const piliers = read('piliers.yml');
const apropos = read('apropos.yml');
const forfaits = read('forfaits.yml');
const zone = read('zone.yml');
const faq = read('faq.yml');
const temoignages = read('temoignages.yml');
const contact = read('contact.yml');

export const site = {
  meta: {
    brand: general.brand as string,
    baseline: general.baseline as string,
    facebookUrl: general.facebookUrl as string,
    confidentialiteForm: general.confidentialiteForm as string,
  },

  confidentialite: general.confidentialite as {
    dateMaj: string;
    entree: string;
    responsable: { titre: string; texte: string };
    collecte: { titre: string; intro: string; items: string[] };
    finalites: { titre: string; items: string[] };
    basesLegales: { titre: string; texte: string };
    partage: { titre: string; intro: string; items: string[]; note: string };
    transfertHorsQuebec: { titre: string; texte: string };
    conservation: { titre: string; texte: string };
    securite: { titre: string; texte: string };
    droits: { titre: string; intro: string; items: string[]; exercer: string };
    cookies: { titre: string; texte: string };
    incidents: { titre: string; texte: string };
    cai: { titre: string; texte: string; lien: string };
    modifications: string;
  },

  hero: {
    sloganHaut: general.hero.sloganHaut as string,
    sloganBas: general.hero.sloganBas as string,
    accroche: general.hero.accroche as string,
    cta: { label: general.hero.ctaLabel as string, href: '#contact' },
  },

  piliers: (piliers.piliers as { titre: string; texte: string }[]).map(
    (p, i) => ({
      num: String(i + 1).padStart(2, '0'),
      titre: p.titre,
      texte: p.texte,
    })
  ),

  about: {
    intro: apropos.intro as string,
    parcours: apropos.parcours as string,
    methode: apropos.methode as string,
    points: apropos.points as { titre: string; texte: string }[],
  },

  forfaits: forfaits.forfaits as {
    id: string;
    nom: string;
    prix: number;
    surface: string;
    cible: string;
    inclusions: string[];
  }[],

  zone: {
    base: zone.base as string,
    coords: zone.coords as string,
    regions: zone.regions as string[],
    autre: zone.autre as string,
    rayonInclus: zone.rayonInclus as string,
    tarifKm: zone.tarifKm as string,
    note: zone.note as string,
  },

  faq: (faq.faq as { question: string; reponse: string }[]).map((item) => ({
    q: item.question,
    r: item.reponse,
  })),

  temoignages: {
    intro: temoignages.intro as string,
    placeholders: temoignages.temoignages as { auteur: string; texte: string }[],
  },

  contact: {
    adresse: contact.adresse as string,
    tel: contact.tel as string,
    telRaw: contact.telRaw as string,
    email: contact.email as string,
    horaires: contact.horaires as string,
    formIntro: contact.formIntro as string,
  },

  legal: {
    clause: general.legal.clause as string,
  },
} as const;

export type SiteContent = typeof site;
