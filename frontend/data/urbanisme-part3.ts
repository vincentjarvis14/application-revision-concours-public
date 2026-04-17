import { Fiche } from './types';

// Fiche 103 - Les règles communes aux autorisations d'urbanisme
export const ficheReglesCommunes: Fiche = {
  id: 103,
  title: "Les règles communes aux autorisations d'urbanisme",
  theme: 'urbanisme',
  sections: [
    { title: "1. Le cadre d'intervention des règles communes", text: "Les règles communes aux autorisations d'urbanisme définissent le cadre dans lequel s'exercent les différentes formalités préalables aux travaux.", subsections: [
      { title: "1.1. Les hypothèses de contrôle", text: "Les projets de travaux, d'installations et d'aménagements sont soumis, selon leur nature et leur importance, à un permis de construire, un permis d'aménager, un permis de démolir ou une déclaration préalable." },
      { title: "1.2. Les hypothèses d'absence de contrôle", text: "Sont dispensés de toute formalité :\n\n• Les projets de faible importance ou de nature ne nécessitant pas de contrôle (constructions de très petite surface, piscines < 10m², murs < 2m de haut, etc.)\n\n• Les projets de courte durée ou à caractère temporaire\n\n• Les projets couverts par le secret pour des raisons de sécurité (défense nationale)\n\n• Autres projets dispensés par la réglementation" },
    ]},
    { title: "2. Les règles relatives à la demande", text: "", subsections: [
      { title: "2.1. Les personnes compétentes pour présenter une demande", text: "Le propriétaire du terrain, son mandataire, une personne autorisée par le propriétaire, ou une personne ayant qualité pour bénéficier de l'expropriation." },
      { title: "2.2-2.4. Dossier et dépôt", text: "Le nombre d'exemplaires varie selon le type d'autorisation.\n\nLe contenu du dossier est adapté à chaque type d'autorisation.\n\nLe dépôt se fait en mairie. Un récépissé est délivré avec le numéro d'enregistrement, la date de délivrance tacite et les délais d'instruction." },
      { title: "2.5. L'instruction", text: "Le service instructeur vérifie la conformité du projet aux règles d'urbanisme applicables. Il peut demander des pièces complémentaires dans le mois suivant le dépôt." },
    ]},
    { title: "3. La décision", text: "", subsections: [
      { title: "3.1. L'autorité compétente", text: "Principe : la décision est prise au nom de la commune par le maire lorsque la commune dispose d'un PLU ou d'un document en tenant lieu.\n\nExceptions : certaines décisions sont prises au nom de l'État (opérations d'intérêt national, immeubles classés monuments historiques, etc.)." },
      { title: "3.2. Le contenu de la décision", text: "La décision peut être une autorisation (éventuellement assortie de prescriptions), un refus motivé, ou un sursis à statuer." },
      { title: "3.3. Publicité et caractère exécutoire", text: "Les décisions sont affichées en mairie et sur le terrain. Elles sont exécutoires à compter de leur notification au demandeur et de leur transmission au préfet." },
      { title: "3.4. Durée de validité", text: "Les permis et décisions de non-opposition à déclaration préalable ont une durée de validité de 3 ans (depuis la loi ALUR). Ils sont prorogeables pour 1 an." },
    ]},
    { title: "4. Le contrôle administratif", text: "", subsections: [
      { title: "4.1. Le contrôle sur les décisions", text: "Le préfet exerce le contrôle de légalité sur les décisions prises au nom de la commune." },
      { title: "4.2. Le contrôle de l'exécution des décisions", text: "Un contrôle général permet aux agents de visiter les constructions en cours.\n\nÀ l'achèvement des travaux :\n• Le bénéficiaire dépose une déclaration attestant l'achèvement et la conformité des travaux (DAACT)\n• L'administration dispose d'un délai de 3 mois (5 mois dans certains cas) pour procéder au récolement\n• À défaut de contestation dans ce délai, une attestation de conformité peut être demandée" },
    ]},
  ],
};

// Fiche 104 - La déclaration préalable
export const ficheDeclarationPrealable: Fiche = {
  id: 104,
  title: 'La déclaration préalable',
  theme: 'urbanisme',
  sections: [
    { title: "1. Le champ d'application", text: "", subsections: [
      { title: "1.1. Travaux, installations et aménagements soumis à DP", text: "Régime général :\n• Lotissements et divisions foncières ne créant pas de voies ou d'espaces communs\n• Installations de moins de 12m de haut et créant une emprise au sol ou surface de plancher > 5m² et ≤ 20m²\n• Murs de plus de 2m de hauteur\n• Piscines dont le bassin a une superficie ≤ 100m² et couverture < 1,80m de hauteur\n• Châssis et serres de 1,80m à 4m de hauteur\n• Éoliennes terrestres dont le mât a une hauteur ≤ 12m\n\nEn secteurs protégés (secteurs sauvegardés, champs de visibilité de monuments historiques, sites inscrits/classés) : les seuils sont abaissés et davantage de travaux sont soumis à DP." },
      { title: "1.2. Constructions nouvelles soumises à DP", text: "Constructions dont l'emprise au sol ou la surface de plancher est > 5m² et ≤ 20m², et dont la hauteur est ≤ 12m.\n\nEn secteurs protégés : toute construction nouvelle créant une surface de plancher ou une emprise au sol est soumise à DP." },
      { title: "1.3. Clôtures soumises à DP", text: "Les clôtures doivent être précédées d'une déclaration préalable si elles sont situées :\n• En secteur sauvegardé, dans le champ de visibilité d'un monument historique, en zone de protection du patrimoine\n• En site inscrit, classé ou en instance de classement\n• Dans un secteur délimité par le PLU pour protection patrimoniale\n• Dans une commune où le conseil municipal a décidé de soumettre les clôtures à déclaration" },
    ]},
    { title: "2. La procédure", text: "", subsections: [
      { title: "2.1. Dépôt de la déclaration", text: "La déclaration précise l'identité du déclarant, la localisation et superficie du terrain, la nature des travaux, la surface de plancher et la destination des constructions.\n\nDossier joint : plan de situation, plan de masse (3D si construction), représentation de l'aspect extérieur, plan sommaire des lieux." },
      { title: "2.2. Instruction", text: "Délai d'instruction de droit commun : 1 mois (dossier complet).\n\nMajoration du délai si le projet est situé en secteur sauvegardé.\n\nLes procédures de consultation et d'accord sont celles prévues pour les permis." },
    ]},
  ],
};

// Fiche 106 - Le permis d'aménager et le permis de démolir
export const fichePermisAmenagerDemolir: Fiche = {
  id: 106,
  title: "Le permis d'aménager et le permis de démolir",
  theme: 'urbanisme',
  sections: [
    { title: "1. Le permis d'aménager", text: "", subsections: [
      { title: "1.1. Champ d'application", text: "Aménagements généraux soumis à permis d'aménager :\n• Lotissements créant des voies, espaces communs ou équipements\n• Remembrements réalisés par une AFU (association foncière urbaine)\n• Certains terrains de camping et parcs résidentiels de loisirs\n• Certains parcs d'attractions et terrains de sports\n\nAménagements en secteurs spécifiques (secteurs sauvegardés, sites classés, etc.) : des travaux supplémentaires sont soumis à permis." },
      { title: "1.2-1.4. Demande, instruction et décision", text: "La demande est déposée en mairie avec les pièces nécessaires (plan de situation, plan de l'état actuel du terrain, projet d'aménagement).\n\nL'instruction suit les règles communes aux autorisations d'urbanisme.\n\nLa décision peut être une autorisation, un refus motivé ou un sursis à statuer." },
    ]},
    { title: "2. Le permis de démolir", text: "", subsections: [
      { title: "2.1. Champ d'application", text: "Protection obligatoire de certains immeubles :\n• Immeubles situés dans un secteur sauvegardé\n• Immeubles inscrits ou classés au titre des monuments historiques\n• Immeubles situés dans le champ de visibilité d'un monument historique\n• Immeubles situés dans une zone de protection du patrimoine\n• Immeubles situés dans un site inscrit ou classé\n\nExtension possible par la commune : le conseil municipal peut instituer le permis de démolir sur tout ou partie du territoire de la commune." },
      { title: "2.2. Objet de la demande", text: "Le permis de démolir est requis pour la démolition d'une construction.\n\nSont dispensés : les démolitions imposées par l'autorité judiciaire, les démolitions de bâtiments menaçant ruine, les démolitions couvertes par le secret de la défense nationale.\n\nLa demande comprend : l'identité du demandeur, la localisation, les motifs de la démolition, un plan de situation et des photographies." },
      { title: "2.3-2.4. Décision et effets", text: "La décision est prise par l'autorité compétente en matière d'urbanisme.\n\nLe permis de démolir a une durée de validité de 3 ans. Il est prorogeable pour 1 an.\n\nEn cas de démolition sans permis, les sanctions pénales prévues par le code de l'urbanisme s'appliquent." },
    ]},
  ],
};

// Fiche 107 - Les opérations d'aménagement
export const ficheOperationsAmenagement: Fiche = {
  id: 107,
  title: "Les opérations d'aménagement",
  theme: 'urbanisme',
  sections: [
    { title: "1. Les zones d'aménagement concerté (ZAC)", text: "", subsections: [
      { title: "1.1. La création des ZAC", text: "Objet : l'aménagement et l'équipement de terrains en vue de les céder à des utilisateurs publics ou privés.\n\nLocalisation : les ZAC peuvent être créées sur tout ou partie du territoire communal.\n\nProcédure :\n• Initiative de la commune, de l'EPCI compétent ou de l'État\n• Études et concertations préalables avec la population\n• Constitution du dossier de création (rapport de présentation, plan de situation, plan de délimitation, régime applicable)\n• Décision de création par délibération de l'organe délibérant" },
      { title: "1.2. La réalisation des ZAC", text: "Règles d'urbanisme applicables : le PLU s'applique, éventuellement modifié pour être compatible avec le dossier de création.\n\nDossier de réalisation : programme des équipements publics, programme de construction, modalités de financement.\n\nModes de réalisation :\n• Régie directe par la collectivité\n• Concession d'aménagement à un aménageur (public ou privé)\n\nProcessus :\n• Acquisitions foncières (à l'amiable, par préemption ou par expropriation)\n• Aménagement et équipement de la zone\n• Cession des terrains aux constructeurs\n• Possibilité de modification ou de suppression de la ZAC" },
    ]},
    { title: "2. Les lotissements", text: "", subsections: [
      { title: "2.1. Champ d'application", text: "Un lotissement est toute division foncière en propriété ou en jouissance d'une unité foncière ou de plusieurs unités foncières contiguës ayant pour objet d'en détacher un ou plusieurs lots destinés à être bâtis.\n\nDivisions non constitutives de lotissement : divisions résultant d'un remembrement, d'une procédure judiciaire, etc.\n\nDivisions soumises à permis d'aménager : lorsqu'elles prévoient la création de voies, d'espaces communs ou d'équipements communs.\n\nDivisions soumises à déclaration préalable : dans les autres cas." },
      { title: "2.2. Procédures", text: "Demande de permis d'aménager :\n• Pièces d'information (identité, localisation, superficie, nombre de lots)\n• Plan de situation, plan topographique, projet d'aménagement\n• Programme des travaux, projet de règlement, engagements financiers\n\nDéclaration préalable : dossier simplifié comprenant le plan de division et le plan de situation." },
      { title: "2.3. La réalisation", text: "Exécution des travaux : le bénéficiaire du permis d'aménager doit achever les travaux de viabilisation avant la vente des lots.\n\nCommercialisation : des règles de publicité et des conditions temporelles s'appliquent.\n\nGestion des équipements collectifs : les équipements communs sont entretenus par l'association syndicale des colotis ou transférés à la commune.\n\nConstruction : les acquéreurs de lots obtiennent les permis de construire individuels pour leurs constructions." },
    ]},
  ],
};

// Fiche 108 - Le contentieux de l'urbanisme
export const ficheContentieux: Fiche = {
  id: 108,
  title: "Le contentieux de l'urbanisme",
  theme: 'urbanisme',
  sections: [
    { title: "1. Le contentieux administratif", text: "", subsections: [
      { title: "1.1. Le contentieux de l'annulation", text: "Le recours pour excès de pouvoir (REP) permet de contester la légalité d'une décision d'urbanisme.\n\nActes susceptibles de recours : seuls les actes faisant grief (ayant des effets juridiques). Les actes préparatoires ne font pas grief.\n\nIntérêt à agir : le requérant doit justifier d'un intérêt personnel, direct et certain. Pour les permis de construire/démolir/aménager, la personne doit prouver que la construction affecte directement les conditions d'occupation de son bien.\n\nDélai de recours :\n• Par voie d'action : 2 mois après affichage continu d'au moins 2 mois sur le terrain\n• Par voie d'exception : possibilité de contester la légalité d'un acte à l'occasion d'un recours contre une décision prise en application de cet acte\n\nObligation de notification : l'auteur du recours doit notifier son recours à l'auteur de la décision et au titulaire de l'autorisation (LRAR, 15 jours francs), sous peine d'irrecevabilité.\n\nCristallisation des moyens : le juge peut fixer une date limite pour invoquer des moyens nouveaux.\n\nRecours abusifs : possibilité de condamner l'auteur d'un recours abusif à des dommages et intérêts." },
      { title: "1.1.2. Effets des jugements d'annulation", text: "Annulation d'un document d'urbanisme : remet en vigueur le document immédiatement antérieur. Si aucun document antérieur : application du RNU.\n\nAnnulation d'un PLU : n'entraîne pas automatiquement l'annulation des permis de construire délivrés sur son fondement.\n\nAnnulation d'un permis de construire : l'administration est à nouveau saisie de plein droit de la demande.\n\nAnnulation d'une décision de préemption : si le transfert de propriété n'a pas eu lieu, le titulaire du droit ne peut exercer à nouveau. Si le transfert a eu lieu, l'ancien propriétaire peut se voir proposer l'acquisition prioritaire." },
    ]},
    { title: "1.2. Le contentieux de la responsabilité", text: "", subsections: [
      { title: "1.2.1. Régime jurisprudentiel", text: "Responsabilité pour faute : les illégalités sont sanctionnées (autorisations refusées/accordées/retirées à tort, retards, renseignements erronés).\n\nResponsabilité sans faute : rarement reconnue, en cas de rupture d'égalité devant les charges publiques.\n\nLe préjudice doit être certain, direct et personnel. Le préjudice moral peut aussi donner lieu à réparation." },
      { title: "1.2.2. Régime légal", text: "Principe : les servitudes d'urbanisme ne sont pas indemnisables si légalement instituées.\n\nException : indemnisation si modification de l'état antérieur des lieux ou atteinte aux droits acquis.\n\nJurisprudence Bitouzet : indemnisation des propriétaires supportant une charge spéciale et exorbitante, hors proportion avec l'objectif d'intérêt général." },
    ]},
    { title: "1.3. Les procédures d'urgence", text: "Référé-liberté : urgence justifiée, atteinte grave à une liberté fondamentale (droit de propriété). Le juge statue en 48h.\n\nRéféré mesures utiles : mesures conservatoires en urgence.\n\nRéféré-suspension spécifique en urbanisme : le préfet peut assortir son recours contre un acte d'urbanisme d'une demande de suspension. Si les moyens invoqués créent un doute sérieux sur la légalité, la suspension est de droit.\n\nRéférés protection de l'environnement : suspension automatique en cas de défaut d'étude d'impact ou d'enquête publique." },
    { title: "2. Le contentieux judiciaire", text: "", subsections: [
      { title: "2.1. Le contentieux pénal", text: "Infractions : exécuter des travaux sans autorisation, en méconnaissance des prescriptions du permis ou de la déclaration préalable.\n\nSanctions :\n• Amende entre 1 200 € et 6 000 €/m² de surface construite (ou 300 000 € dans les autres cas)\n• En cas de récidive : emprisonnement de 6 mois\n• Personnes morales : amendes quintuplées\n• Mesures de restitution possibles : mise en conformité, démolition avec astreinte\n\nConstatation : par les officiers et agents de police judiciaire, les agents de l'État ou des collectivités assermentés.\n\nPossibilité d'interruption des travaux par l'autorité administrative ou judiciaire." },
      { title: "2.2. Le contentieux civil", text: "Responsabilité civile des constructeurs par les tiers :\n• Violation d'une servitude d'urbanisme : si le permis a été annulé, action en démolition possible dans les 2 ans\n• Violation d'un droit réel : empiètement sur la propriété, non-respect des servitudes de vue\n• Troubles anormaux de voisinage : indépendamment du respect ou non du permis\n\nAction de l'administration : la commune peut saisir le tribunal de grande instance pour ordonner la démolition ou la mise en conformité d'un ouvrage édifié sans autorisation. Action prescrite 10 ans après achèvement des travaux." },
    ]},
  ],
};

export const urbanismeFiches3 = [ficheReglesCommunes, ficheDeclarationPrealable, fichePermisAmenagerDemolir, ficheOperationsAmenagement, ficheContentieux];
