import { Fiche } from './types';
import { fichesCollectivites } from './env-collectivites';
import { fichesActionAdmin } from './env-action-admin';

// Fiches 1-6 avec contenu complet (déjà intégrées)
const fichesInstitutions: Fiche[] = [
  { id: 1, title: "Les grands principes de l'organisation de l'État", theme: 'environnement', sections: [
    { title: "1. L'État", text: "Les éléments pour constituer un État sont au nombre de trois : une population, un territoire, un pouvoir.", subsections: [
      { title: "1.1. L'État est doté de la personnalité morale", text: "L'État agit au nom de la population sur son territoire. Il a une vie propre et indépendante des volontés individuelles. Cette continuité est indispensable à la sécurité des relations sociales." },
      { title: "1.2. L'État est souverain", text: "L'État dispose d'un pouvoir qui ne relève d'aucun autre : « l'État a la compétence de ses compétences ». Souverain n'est pas synonyme d'omnipotent. L'État doit s'appliquer les règles qu'il pose." },
    ]},
    { title: "2. Unitaire", text: "L'État unitaire possède un seul centre d'impulsion politique. L'État fédéral en a plusieurs (ex: États-Unis). La France est un État unitaire, centralisé, devenu déconcentré et décentralisé." },
    { title: "3. Déconcentré", text: "La déconcentration est une variété de la centralisation : découpage du territoire en circonscriptions à la tête desquelles l'État place un représentant local du pouvoir central. Comme disait Odilon Barrot : « C'est le même marteau qui frappe, mais le manche est plus court »." },
    { title: "4. Décentralisé", text: "La décentralisation crée deux nouvelles catégories de personnes morales : les collectivités territoriales (décentralisation territoriale) et les établissements publics (décentralisation technique). Dotés de la personnalité morale, ils disposent d'organes propres." },
  ]},
  { id: 2, title: "L'organisation administrative de l'État", theme: 'environnement', sections: [
    { title: "1. L'administration centrale", text: "Rôle de conception, animation, évaluation et contrôle.", subsections: [
      { title: "1.1. Organes de conception et décision", text: "• Président de la République : pouvoir réglementaire et de nomination\n• Premier ministre : pouvoir réglementaire général\n• Ministres : pouvoir réglementaire dans leur domaine" },
      { title: "1.2-1.4. Consultation, coordination, contrôle", text: "Consultation : Conseil d'État, CESE\nCoordination : Conseil des ministres, comités interministériels\nContrôle : Cour des comptes, inspections générales" },
    ]},
    { title: "2. L'administration déconcentrée", text: "4 niveaux : région, département, arrondissement, commune.\n\nServices déconcentrés régionaux : DRFiP, DRAAF, DRAC, DREAL, DREETS, Rectorats, ARS\nDépartementaux : DDFiP, DDT(M), DDETS(PP)\n\nLe préfet de département : représentant de l'État, dirige les services déconcentrés, contrôle de légalité, ordre public.\nLe préfet de région : autorité sur les préfets de département, coordonne les politiques." },
  ]},
  { id: 3, title: "Les grandes étapes de la décentralisation", theme: 'environnement', sections: [
    { title: "1. Acte I (1982-2003)", text: "Loi du 2 mars 1982 : région = CT, suppression des tutelles, contrôle de légalité a posteriori.\nLois 1983 : répartition des compétences.\nLoi 1984 : statut FPT.\nLoi 1999 : coopération intercommunale simplifiée." },
    { title: "2. Acte II (2003-2007)", text: "Loi constitutionnelle 2003 : subsidiarité, chef de file, expérimentation, autonomie financière, référendum local.\nLoi 2004 : transferts de compétences." },
    { title: "3. Acte III (2007-2019)", text: "Loi 2010 : carte intercommunale, métropoles.\nLoi MAPTAM 2014 : métropoles à statut particulier.\nLoi 2015 : 12 régions.\nLoi NOTRe 2015 : fin clause générale pour départements/régions.\nLoi 2017 : statut de Paris.\nLoi 2019 : Collectivité européenne d'Alsace." },
  ]},
  { id: 4, title: "L'organisation juridictionnelle", theme: 'environnement', sections: [
    { title: "1. Juridictions judiciaires", text: "Civil : tribunal judiciaire, conseil de prud'hommes, tribunal de commerce.\nPénal : tribunal de police (contraventions), tribunal correctionnel (délits), cour d'assises (crimes).\nCours d'appel : réexaminent les faits.\nCour de cassation : juge uniquement en droit." },
    { title: "2. Juridictions administratives", text: "TA (42 en France) → CAA (9) → Conseil d'État (juridiction suprême + conseiller du gouvernement)." },
    { title: "3. Tribunal des conflits", text: "Règle les conflits d'attribution entre les deux ordres. Composé paritairement." },
    { title: "4. Conseil constitutionnel", text: "Contrôle a priori (avant promulgation) et a posteriori (QPC depuis 2010). Contentieux électoral." },
  ]},
  { id: 5, title: "Les grands principes régissant les CT", theme: 'environnement', sections: [
    { title: "1. Principe d'autonomie", text: "Autonomie juridique (personnalité morale), organique (conseils élus au SUD), fonctionnelle (gestion propre). Depuis loi NOTRe : seules les communes conservent la clause générale de compétence." },
    { title: "2. Libre administration", text: "Article 72 Constitution : les CT s'administrent librement par des conseils élus, avec pouvoir réglementaire. Limité aux compétences infra-législatives." },
  ]},
  { id: 6, title: "Le statut des élus locaux", theme: 'environnement', sections: [
    { title: "1. Indemnités et transparence", text: "Principe de gratuité mais indemnisation possible. Calcul basé sur l'indice 1027 de la FP. Soumises à l'IR.\nDéclarations patrimoniales et d'intérêts à la HATVP pour maires > 20 000 hab." },
    { title: "2. Moyens, formation, facilités", text: "Frais remboursés, locaux, personnel. DIF de 20h/an. Formation obligatoire 1ère année (communes > 3 500 hab.). Autorisations d'absence, crédits d'heures." },
    { title: "3. Protection et responsabilité", text: "Protection contre accidents et menaces. Allocation fin de mandat. Retraite IRCANTEC.\nResponsabilité disciplinaire, financière, civile et pénale. Charte de l'élu local." },
  ]},
];

// Fiches restantes (placeholders pour les sections non encore complétées)
const makeFiche = (id: number, title: string): Fiche => ({
  id, title, theme: 'environnement',
  sections: [{ title: title, text: `Contenu de la fiche ${id} disponible dans le PDF CNFPT. Le contenu détaillé sera intégré prochainement.` }],
});

const fichesFinances: Fiche[] = [38,39,40,41,42,43,44,45].map(id => {
  const titles: Record<number,string> = {
    38: "Le budget des collectivités locales", 39: "Les cinq grands principes budgétaires",
    40: "Les grands principes comptables du budget local", 41: "Les recettes des collectivités locales",
    42: "Les dépenses des collectivités locales", 43: "Le contrôle des actes budgétaires locaux",
    44: "L'autonomie financière des collectivités locales", 45: "Les principales opérations comptables",
  };
  return makeFiche(id, titles[id]);
});

const fichesCommande: Fiche[] = [50,51,52,53,54,55,56,57,58,59,60].map(id => {
  const titles: Record<number,string> = {
    50: "Le champ d'application du code de la commande publique", 51: "Les principes fondamentaux de la commande publique",
    52: "La préparation du marché public", 53: "Les opérations préalables au lancement",
    54: "Publicité, délais, dématérialisation", 55: "L'examen des candidatures et des offres",
    56: "Les organes décisionnels", 57: "L'achèvement de la procédure",
    58: "La gestion administrative du marché public", 59: "La gestion financière du marché public",
    60: "La clôture du marché public",
  };
  return makeFiche(id, titles[id]);
});

const fichesFPT: Fiche[] = [61,62,63,64,65,66,67,68,69,70].map(id => {
  const titles: Record<number,string> = {
    61: "Les organismes gestionnaires de la FPT", 62: "Les modes d'accès à la FPT",
    63: "Les positions statutaires", 64: "Le recrutement et l'intégration",
    65: "Les agents de droit privé", 66: "Le déroulement de carrière",
    67: "Les droits et obligations des agents", 68: "Les obligations de déontologie",
    69: "Le droit disciplinaire", 70: "La cessation de fonction",
  };
  return makeFiche(id, titles[id]);
});

const fichesRH: Fiche[] = [71,72,73,74,75,76,77,78].map(id => {
  const titles: Record<number,string> = {
    71: "L'appréciation de la valeur professionnelle", 72: "La formation tout au long de la vie",
    73: "Les risques psycho-sociaux", 74: "Les acteurs de la santé au travail",
    75: "Le dialogue social", 76: "La lutte contre les inégalités",
    77: "La politique d'optimisation des RH", 78: "La fonction RH stratégique",
  };
  return makeFiche(id, titles[id]);
});

const fichesManagement: Fiche[] = [84,85,86,87,88,89,90].map(id => {
  const titles: Record<number,string> = {
    84: "Le cadre territorial", 85: "Les différents types de management",
    86: "Management : la délégation", 87: "Le management de projet",
    88: "Le management stratégique", 89: "La relation cadre / élus",
    90: "La péréquation financière",
  };
  return makeFiche(id, titles[id]);
});

export const environnementFiches: Fiche[] = [
  ...fichesInstitutions,
  ...fichesCollectivites,
  ...fichesActionAdmin,
  ...fichesFinances,
  ...fichesCommande,
  ...fichesFPT,
  ...fichesRH,
  ...fichesManagement,
];
