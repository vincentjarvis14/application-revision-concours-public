import { Fiche } from './types';

// Fiche 105 - Le permis de construire (contenu complet du PDF)
export const fichePermisConstruire: Fiche = {
  id: 105,
  title: 'Le permis de construire',
  theme: 'urbanisme',
  sections: [
    {
      title: 'Définition et objet',
      text: "Le permis de construire est un acte administratif individuel par lequel une autorité administrative autorise des travaux ou une construction. Le projet doit respecter les règles et servitudes applicables au lieu de son implantation.\n\nLe permis de construire est délivré par le maire au nom de la commune ou au nom de l'État, selon qu'il existe ou non un plan local d'urbanisme.\n\nC'est une autorisation administrative préalable d'édifier des constructions nouvelles ou de modifier une ou plusieurs constructions existantes.",
    },
    {
      title: '1. Le champ d\'application du permis de construire',
      text: "Le champ d'application du permis de construire concerne deux types principaux de travaux : les constructions nouvelles et les travaux exécutés sur des constructions existantes. Certains projets localisés en zone protégée sont également soumis à permis.",
      subsections: [
        {
          title: '1.1. Les constructions nouvelles soumises à permis de construire',
          text: "Toutes constructions nouvelles doivent être précédées d'un permis de construire, même si elles ne comportent pas de fondations.\n\nLa destination des constructions (habitat, commerce, industrie, etc.) n'est pas prise en considération.\n\nLe caractère temporaire ou permanent de la construction n'est pas un critère de dispense.",
        },
        {
          title: '1.2. Les travaux exécutés sur des constructions existantes',
          text: "Il n'y a pas de règle générale ; l'assujettissement est exceptionnel. Sont soumis à permis (sauf entretien et réparations ordinaires) :\n\n• Création de surface de plancher ou emprise au sol supérieure à 20 m².\n\n• Dans les zones urbaines d'un PLU, création de surface de plancher ou emprise au sol supérieure à 40 m².\n\n• Exception : si la création de plus de 20 m² et inférieure ou égale à 40 m² porte la surface totale au-delà du seuil d'intervention d'un architecte.\n\n• Modification des structures porteuses ou de la façade avec changement de destination (selon le règlement du PLU).\n\n• Travaux nécessaires à une opération de restauration immobilière.",
        },
        {
          title: '1.3. Les projets localisés en zone protégée',
          text: "Règle générale : soumission à permis si le projet intervient dans un secteur protégé (sauf entretien et réparations ordinaires).\n\nSecteurs sauvegardés (plan approuvé) :\n• Travaux intérieurs modifiant la structure ou les volumes.\n• Travaux portant sur un élément identifié comme présentant un intérêt patrimonial ou paysager par le PLU.\n\nMonuments historiques : tous travaux sur immeuble inscrit sont soumis à permis (sauf entretien, réparations ordinaires et motifs de sécurité).",
        },
      ],
    },
    {
      title: '2. La procédure de délivrance du permis de construire',
      text: "La procédure comprend trois éléments successifs : la demande de permis, l'instruction de la demande et la décision de l'autorité compétente.",
      subsections: [
        {
          title: '2.1. La demande de permis de construire',
          text: "La demande doit être formellement présentée et comprend trois éléments clés : la qualité du demandeur, le contenu de la demande et les conditions de dépôt.",
          subsections: [
            {
              title: '2.1.1. La qualité du demandeur',
              text: "Peut présenter une demande :\n• Le propriétaire du terrain, son mandataire, ou une personne autorisée.\n• En indivision : un ou plusieurs co-indivisaires ou leur mandataire.\n• Une personne ayant qualité pour bénéficier de l'expropriation.\n\nModalités de dépôt : pli recommandé avec accusé de réception ou dépôt en mairie.",
            },
            {
              title: '2.1.2. Le contenu de la demande',
              text: "La demande comprend :\n\nA) Les documents d'information :\n• Identité du ou des demandeurs\n• Identité de l'architecte (si obligatoire)\n• Localisation et superficie du terrain\n• Nature des travaux\n• Destination des constructions (réf. règlement PLU)\n• Surface de plancher\n• Puissance électrique (si > 12 kVA monophasé ou 36 kVA triphasé)\n• Éléments pour calcul des impositions\n• Attestation de la qualité du demandeur\n• Plan de situation du terrain dans la commune\n\nB) Le projet architectural :\n• Obligatoire si recours à un architecte nécessaire\n• Identifie les caractéristiques du projet et son insertion urbaine (incluant les aspects environnementaux)\n• Comprend une notice précisant l'état initial du terrain et les partis retenus pour l'insertion\n• Comprend un plan de masse coté en 3D, un plan des façades et toitures, un plan en coupe\n• Document graphique d'insertion du projet et deux documents photographiques (environnement proche et lointain)\n\nC) Les pièces complémentaires sur condition :\n• Pièces exigées selon les caractéristiques du projet ou sa localisation\n• Exemples : considérations environnementales, accessibilité, sécurité",
            },
            {
              title: '2.1.3. Les conditions de dépôt de la demande',
              text: "Nombre d'exemplaires : 4 exemplaires (plus si enquête publique ou commission spéciale).\n\nModalités : dépôt en mairie ou adressé au maire par pli recommandé avec AR.\n\nFormalités du maire :\n• Attribuer un numéro d'enregistrement\n• Délivrer un récépissé mentionnant le numéro, la date du permis tacite potentiel, et la faculté de notification de dossier incomplet\n\nAffichage : en mairie dans les 15 jours suivant le dépôt, conservé pendant toute l'instruction.\n\nTransmissions : le maire transmet le dossier aux autorités compétentes dans la semaine suivant le dépôt.",
            },
          ],
        },
        {
          title: '2.2. L\'instruction de la demande',
          text: "L'instruction vise à vérifier la conformité du projet aux dispositions législatives et réglementaires. Elle est réalisée par le service instructeur (interne ou externe), sous l'autorité de l'organe compétent.",
          subsections: [
            {
              title: '2.2.1. Le délai d\'instruction et de délivrance',
              text: "Droit commun :\n• 2 mois pour une maison individuelle\n• 3 mois pour un immeuble ou plusieurs maisons\n\nMajorations :\n• +1 mois en secteur sauvegardé\n• +2 mois si consultation d'une commission départementale ou régionale\n\nDélais spéciaux : projets dans un espace à vocation de parc national, projets soumis à l'avis d'une commission nationale.",
            },
            {
              title: '2.2.2. Le point de départ du délai d\'instruction',
              text: "Le délai court à compter de la réception en mairie d'un dossier complet. Des aménagements sont prévus (voir les règles communes aux autorisations d'urbanisme).",
            },
          ],
        },
        {
          title: '2.3. La décision',
          text: "Trois décisions sont possibles : le sursis à statuer, l'octroi du permis ou le refus.",
          subsections: [
            {
              title: '2.3.1. Le sursis à statuer',
              text: "Le sursis à statuer peut être opposé par le maire ou le préfet compétent.\n\nCas d'application : document d'urbanisme en cours de révision ou modification.\n\nValidité : 2 ans.\n\nAprès expiration : le demandeur a 2 mois pour confirmer sa demande. L'autorité se prononce alors définitivement.",
            },
            {
              title: '2.3.2. L\'octroi du permis',
              text: "Condition : le projet est jugé conforme aux règles et servitudes.\n\nDes prescriptions spéciales sont possibles pour organiser une protection particulière.\n\nLe permis est par principe explicite.\n\nPermis tacite : possible si absence de notification explicite après expiration du délai d'instruction. L'autorité délivre un certificat à la demande du bénéficiaire.",
            },
            {
              title: '2.3.3. Le refus de permis de construire',
              text: "Condition : contradiction entre le projet et les règles d'urbanisme.\n\nObligation : la décision doit être motivée.",
            },
          ],
        },
      ],
    },
    {
      title: '3. L\'exécution du permis de construire',
      text: "La mise en œuvre du permis se caractérise par trois points : le délai de validité, les conditions d'ouverture du chantier et les procédures d'achèvement des travaux.",
      subsections: [
        {
          title: '3.1. Le délai d\'exécution d\'un permis',
          text: "Validité : 2 ans à compter de la délivrance.\n\nPéremption :\n• Si la réalisation du projet n'est pas entreprise dans les 2 ans\n• Si les travaux sont interrompus pendant plus d'un an\n\nException au point de départ : si le commencement des travaux est subordonné à une autre autorisation/procédure, le délai court à partir de la date où les travaux peuvent commencer.\n\nRecours juridictionnel : suspend le délai de validité jusqu'à la décision du juge.\n\nProrogation :\n• Possible pour 1 an\n• Demande introduite au moins 2 mois avant expiration du délai\n• Conditions : les règles d'urbanisme et servitudes n'ont pas évolué défavorablement\n• Prorogation tacite possible après expiration du délai de 2 mois suivant la demande",
        },
        {
          title: '3.2. La déclaration d\'ouverture du chantier',
          text: "Obligation : afficher le permis sur le terrain (visible et lisible de l'extérieur).\n\nCet affichage constitue le point de départ du recours contentieux.\n\nAutre affichage : en mairie (8 jours, pendant 2 mois) — n'affecte pas le point de départ du recours.\n\nFormalité : adresser au maire une déclaration d'ouverture du chantier dès le début des travaux.\n\nConséquence : permet aux agents techniques d'exercer leur droit de visite et de contrôle.",
        },
        {
          title: '3.3. La fin du chantier et la déclaration de conformité',
          text: "Double déclaration auprès de la mairie :\n• Déclaration de l'achèvement officiel des travaux\n• Déclaration de conformité juridique des travaux à l'autorisation délivrée\n\nDélai du maire/préfet pour contester la conformité : 3 mois à compter de la réception de la déclaration.\n\nContestation : sous forme de mise en demeure (dossier modificatif ou travaux de mise en conformité).\n\nAttestation de conformité : délivrée sur demande dans les 15 jours après expiration du délai de 3 mois (si pas de contestation). En cas de silence ou de refus, délivrée par le préfet.",
        },
      ],
    },
  ],
};

// Fiche 102 - Le certificat d'urbanisme
export const ficheCertificatUrbanisme: Fiche = {
  id: 102,
  title: "Le certificat d'urbanisme",
  theme: 'urbanisme',
  sections: [
    {
      title: "1. L'objet du certificat d'urbanisme",
      text: "Le certificat d'urbanisme a pour rôle de renseigner un pétitionnaire sur le droit de l'urbanisme en vigueur dans une zone ou sur la possibilité d'y réaliser un projet. Il existe deux types de certificats.",
      subsections: [
        {
          title: "1.1. Le certificat d'urbanisme neutre (type a)",
          text: "Le certificat neutre indique :\n• Les dispositions d'urbanisme applicables\n• Les limitations administratives au droit de propriété\n• Les taxes et participations applicables au terrain\n\nIl ne repose sur aucun projet particulier.",
        },
        {
          title: "1.2. Le certificat d'urbanisme pré-opérationnel (type b)",
          text: "Le certificat pré-opérationnel informe sur la possibilité de réaliser un projet mentionné dans la demande.\n\nLa demande doit préciser : la nature de l'opération, la localisation approximative et la destination des bâtiments projetés.\n\nIl se prononce sur la faisabilité de l'opération et détaille l'état des équipements publics existants ou prévus.\n\nImportant : il ne se prononce pas sur la constructibilité du terrain. Il crée des droits quant à l'application des règles selon le projet.",
        },
      ],
    },
    {
      title: "2. La procédure de délivrance",
      text: "La procédure comprend trois étapes : la demande, l'instruction et la décision.",
      subsections: [
        {
          title: "2.1. La demande",
          text: "Qui peut présenter la demande : le propriétaire, son mandataire, ou toute personne intéressée (acquéreur potentiel, voisin).\n\nContenu : coordonnées du requérant, localisation, superficie, références cadastrales, plan de situation.\n\nSi projet déterminé : note descriptive détaillée de l'opération.\n\nOù adresser : mairie de situation du terrain.\n\nNombre d'exemplaires : 2 (neutre), 4 (pré-opérationnel).",
        },
        {
          title: "2.2. L'instruction de la demande",
          text: "Avis du maire : sous 15 jours (neutre), 1 mois (pré-opérationnel).\n\nDélai d'instruction : 1 mois (neutre), 2 mois (pré-opérationnel).\n\nCas pré-opérationnel : avis de personnes compétentes demandés dans un délai d'1 mois (sinon silence = approbation).",
        },
        {
          title: "2.3. La décision de l'administration",
          text: "Délivrance au plus tard à l'issue du délai d'instruction.\n\nCertificat tacite : si aucune notification dans le délai.\n\nCas pré-opérationnel : motivation obligatoire si le terrain n'est pas utilisable pour l'opération ou si prescriptions.",
        },
      ],
    },
    {
      title: "3. La portée du certificat d'urbanisme",
      text: "Le certificat a une visée informative. Ses effets sont réels mais limités.",
      subsections: [
        {
          title: "3.1. Les effets du certificat d'urbanisme",
          text: "Garanties accordées par le certificat neutre : informe sur les dispositions d'urbanisme, les limitations administratives, les taxes et participations.\n\nGaranties du certificat pré-opérationnel : indique si le terrain est utilisable pour le projet, la localisation du bâtiment, sa destination et les modalités de desserte. Mentionne le sursis à statuer, le périmètre de préemption, la nécessité d'avis/accord de l'État.\n\nPortée temporelle du certificat pré-opérationnel : limitée à 18 mois suivant sa délivrance.\n\nProrogation : par périodes d'un an (demande 2 mois avant expiration), si les règles, servitudes, taxes et participations sont inchangées.",
        },
        {
          title: "3.2. Le contentieux particulier",
          text: "Le certificat d'urbanisme est une décision administrative pouvant faire l'objet d'un recours administratif.\n\nRôle utile : le vendeur informe l'acheteur sur les droits et servitudes. Incite les professionnels (notaires, agents immobiliers) à s'en servir.\n\nLa responsabilité de l'autorité peut être recherchée si les renseignements sont incomplets ou inexacts.",
        },
      ],
    },
  ],
};

// Fiche 99 - Le schéma de cohérence territoriale (SCOT)
export const ficheSCOT: Fiche = {
  id: 99,
  title: 'Le schéma de cohérence territoriale (SCOT)',
  theme: 'urbanisme',
  sections: [
    {
      title: '1. Contenu du SCOT',
      text: "Le SCOT comprend trois documents spécifiques : le rapport de présentation, le PADD et le DOO.",
      subsections: [
        {
          title: '1.1. Le rapport de présentation',
          text: "Rôle : document explicatif des choix du PADD et du DOO.\n\nIl s'appuie sur un diagnostic incluant les prévisions économiques et démographiques et les besoins.\n\nAttention particulière portée au développement économique, à l'aménagement de l'espace, à l'environnement (biodiversité), à l'agriculture, au potentiel agronomique, à l'équilibre social de l'habitat, aux transports, équipements et services.\n\nIl identifie les espaces où le PLU doit analyser les capacités de densification et mutation. Il tient compte de la qualité des paysages et du patrimoine architectural.\n\nIl analyse la consommation d'espaces naturels, agricoles et forestiers (10 dernières années avant approbation) et justifie les objectifs chiffrés de limitation.\n\nIl décrit l'articulation du schéma avec les documents de niveau supérieur : directives territoriales d'aménagement, lois Montagne/Littoral, chartes de parcs, schémas de gestion de l'eau, etc.",
        },
        {
          title: '1.2. Le Projet d\'Aménagement et de Développement Durables (PADD)',
          text: "Le PADD fixe les objectifs dans de nombreux domaines.\n\nPolitiques publiques concernées :\n• Urbanisme, logement\n• Transports et déplacements\n• Implantation commerciale\n• Équipements structurants\n• Développement économique, touristique, culturel\n• Développement des communications électroniques\n• Qualité paysagère\n• Protection des espaces naturels, agricoles et forestiers\n• Préservation des ressources naturelles\n• Lutte contre l'étalement urbain\n• Préservation des continuités écologiques\n\nApproche qualitative : notamment en termes de temps de déplacement.\n\nSi le périmètre du SCOT recouvre un pays, le PADD intègre la charte de développement du pays.",
        },
        {
          title: '1.3. Le Document d\'Orientation et d\'Objectifs (DOO)',
          text: "C'est l'élément central du dossier, élaboré dans le respect des objectifs du PADD.\n\nOrientations et objectifs obligatoires :\n• Organisation de l'espace et grands équilibres urbain/rural/naturel/agricole/forestier\n• Développement urbain maîtrisé, restructuration des espaces urbanisés, revitalisation des centres\n• Mise en valeur des entrées de ville, valorisation des paysages, prévention des risques\n• Développement équilibré rural (habitat, activité économique/artisanale)\n• Espaces et sites à protéger (biodiversité, continuités écologiques)\n• Conditions favorisant l'urbanisation prioritaire (transports collectifs)\n• Grands projets d'équipements et services\n\nPouvoir discrétionnaire :\n• Normes de qualité urbaine/architecturale/paysagère\n• Études d'impact ou de densification\n• Performances énergétiques/environnementales renforcées\n• Objectifs en matière d'espaces verts et de densité\n\nObjectifs par secteur :\n• Politique de l'habitat : mixité sociale, répartition des logements, réhabilitation du parc existant\n• Politique des transports et déplacements : grands projets, politique de stationnement\n• Politique d'équipement commercial et artisanal : localisations préférentielles, revitalisation des centres-villes\n• Spécificités zones montagne/littoral : unités touristiques nouvelles, schéma de mise en valeur de la mer",
        },
      ],
    },
    {
      title: '2. Procédure d\'élaboration du SCOT',
      text: "Structures compétentes : communes, EPCI compétents (communautés urbaines, d'agglomération, métropoles), syndicats mixtes. L'État peut aussi prendre l'initiative.\n\nDétermination du périmètre : territoire d'un seul tenant, sans enclave, recouvrant le périmètre des EPCI compétents.\n\nPrescription : l'EPCI prescrit l'élaboration et précise les objectifs poursuivis et les modalités de concertation.\n\nAssociation de l'État et d'autres organismes : services de l'État associés, consultation de la commission départementale de préservation des espaces, communes limitrophes, associations agréées.\n\nDébat sur les orientations du PADD : au sein de l'organe délibérant, au maximum 4 mois avant l'examen du projet de schéma.\n\nArrêt du projet : par l'organe délibérant de l'EPCI. Transmission pour avis (État, régions, départements, etc.). Avis sous 3 mois (sinon réputé favorable).\n\nÉvaluation environnementale : obligatoire (loi Grenelle II). Réalisée par l'EPCI.\n\nEnquête publique : le projet arrêté + avis des personnes publiques sont soumis à enquête. Le commissaire enquêteur rend un rapport avec des conclusions motivées.\n\nApprobation : par l'organe délibérant à la majorité des suffrages exprimés. Affichage 1 mois, publication dans le recueil des actes administratifs.\n\nEntrée en vigueur : 2 mois après transmission au préfet.",
    },
    {
      title: '3. Les effets du SCOT',
      text: "",
      subsections: [
        {
          title: "3.1. L'ouverture à l'urbanisation",
          text: "Sans SCOT en vigueur : les zones naturelles (N) et les zones à urbaniser (AU) créées par le PLU, les secteurs non constructibles des cartes communales, ne peuvent être ouverts à l'urbanisation. Les autorisations d'exploitation commerciale/cinématographique ne sont pas accordées.\n\nExceptions :\n• Dérogation du préfet si avis de la commission départementale des espaces agricoles\n• Île-de-France, Corse, DOM : schéma directeur/aménagement en vigueur vaut SCOT\n• Communes situées à plus de 15 km du rivage de la mer ou de la limite extérieure d'une unité urbaine de plus de 15 000 habitants",
        },
        {
          title: "3.2. L'obligation de compatibilité des documents locaux",
          text: "Documents et projets devant être compatibles avec le SCOT :\n• PLU, plans de sauvegarde et mise en valeur, cartes communales\n• Programmes locaux de l'habitat (PLH)\n• Plans de déplacements urbains (PDU)\n• Schémas de développement commercial\n• Autorisations d'exploitation commerciale/cinématographique\n• Opérations foncières et d'aménagement (ZAD, ZAC, lotissements, réserves foncières)\n\nSi le SCOT est approuvé après le PLH ou le PDU, ceux-ci doivent être rendus compatibles dans les 3 ans.",
        },
      ],
    },
    {
      title: '4. Procédures d\'évolution des SCOT',
      text: "",
      subsections: [
        {
          title: "4.1. L'analyse des résultats",
          text: "Tous les 6 ans maximum après approbation, révision complète ou maintien en vigueur.\n\nL'EPCI procède à une analyse de l'application du schéma (environnement, transports, maîtrise de la consommation d'espace, implantations commerciales).\n\nL'EPCI délibère ensuite : maintien en vigueur ou révision partielle/complète.",
        },
        {
          title: "4.2. La révision du SCOT",
          text: "C'est la procédure la plus lourde.\n\nQuand : au moment du bilan, ou si des changements importants sont envisagés portant sur les orientations du PADD, les dispositions du DOO relatives aux espaces naturels, ou les objectifs chiffrés de consommation d'espace.\n\nLes modalités sont similaires à celles de l'élaboration.",
        },
        {
          title: "4.3. La modification du SCOT",
          text: "Procédure moins lourde que la révision.\n\nModification normale : enquête publique obligatoire si la modification concerne des éléments importants du DOO.\n\nModification simplifiée : pour les éléments moins importants du DOO ou la rectification d'erreurs matérielles. Pas d'enquête publique, mais mise à disposition du public pendant 1 mois.",
        },
        {
          title: "4.4. La mise en compatibilité du SCOT",
          text: "Le SCOT doit être compatible avec les textes et documents de niveau supérieur.\n\nIl doit également permettre la réalisation de projets d'intérêt général postérieurs à son approbation.\n\nSi la mise en compatibilité n'est pas effectuée dans les 3 ans, le préfet en informe l'EPCI et peut engager lui-même la procédure.",
        },
      ],
    },
  ],
};

export const urbanismeFiches1 = [fichePermisConstruire, ficheCertificatUrbanisme, ficheSCOT];
