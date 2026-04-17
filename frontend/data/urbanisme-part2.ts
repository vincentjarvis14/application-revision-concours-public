import { Fiche } from './types';

// Fiche 96 - Le règlement national d'urbanisme
export const ficheRNU: Fiche = {
  id: 96,
  title: "Le règlement national d'urbanisme (RNU)",
  theme: 'urbanisme',
  sections: [
    {
      title: "1. Champ d'application du RNU",
      text: "Le RNU fixe les règles générales d'utilisation du sol, d'aménagement et de constructibilité. Il détermine la faisabilité d'un projet.",
      subsections: [
        {
          title: '1.1. Présentation générale',
          text: "Le RNU fixe les dispositions applicables aux terrains constructibles dans les villes sans PLU, POS ou document en tenant lieu. Certaines règles d'ordre public s'appliquent sur l'ensemble du territoire.",
        },
        {
          title: "1.2. Règles applicables à l'ensemble du territoire",
          text: "4 dispositions d'ordre public s'appliquent partout (R. 111-2, R. 111-4, R. 111-15, R. 111-21) :\n\n• Protection de la salubrité et de la sécurité publique : un projet peut être refusé ou accepté sous réserve si atteinte à la salubrité ou à la sécurité.\n\n• Protection des sites et vestiges archéologiques : un projet peut être refusé si atteinte à la conservation ou mise en valeur d'un site ou vestige.\n\n• Protection de l'environnement : les permis et décisions doivent respecter les préoccupations environnementales.\n\n• Protection des lieux environnants : les constructions ne doivent pas porter atteinte au caractère ou à l'intérêt des lieux avoisinants, des sites, des paysages naturels ou urbains, des perspectives monumentales.",
        },
        {
          title: "1.3. Règles applicables aux territoires sans PLU",
          text: "Ces règles limitent le droit de construction si atteinte à l'intérêt urbanistique, à l'hygiène, à la sécurité ou à la salubrité.\n\nLocalisation et desserte :\n• Un projet peut être refusé s'il compromet des activités agricoles/forestières, favorise l'urbanisation dispersée, impose des équipements publics disproportionnés, ou compromet la mise en valeur de substances minières.\n• Le permis peut imposer des installations de stationnement, des voies privées, ou le maintien d'espaces verts.\n\nImplantation et volume :\n• Distance minimum de 3m entre deux bâtiments non contigus sur le même terrain.\n• Règles impératives sur les distances par rapport à la voie publique et aux limites parcellaires.\n\nAspect des constructions :\n• Un projet peut être refusé si la construction porte atteinte au caractère des lieux avoisinants, des sites, des paysages.\n• Les murs séparatifs apparents doivent s'harmoniser avec les façades.",
        },
      ],
    },
    {
      title: '2. La règle de la constructibilité limitée',
      text: "Cette disposition fondamentale s'applique aux communes sans PLU ni carte communale opposable aux tiers.",
      subsections: [
        {
          title: '2.1. Présentation générale',
          text: "La constructibilité limitée vise à lutter contre l'urbanisation diffuse. Elle interdit les constructions hors des parties actuellement urbanisées, sauf 4 exceptions. Le RNU doit être respecté.",
        },
        {
          title: '2.2. La notion de parties actuellement urbanisées (PAU)',
          text: "Il n'y a pas de définition ou de critères précis. L'appréciation dépend des circonstances locales (type d'habitats à proximité). C'est une vision quasi-photographique des constructions.\n\nL'absence de réseaux et la distance ne suffisent pas à identifier un espace urbanisé. Un terrain situé à 530m de la partie agglomérée d'un village n'est pas dans les PAU.\n\nCette notion fluctuante est appréciée par l'autorité locale (sous contrôle du juge). Un terrain hors PAU est inconstructible.",
        },
        {
          title: '2.3. Les 4 exceptions',
          text: "Exception 1 : Adaptation, changement de destination, réfection, extension de constructions existantes, construction de bâtiments nouveaux d'habitation à l'intérieur du périmètre d'une ancienne exploitation agricole.\n\nException 2 : Constructions et installations nécessaires à l'exploitation agricole, équipements collectifs, aires d'accueil des gens du voyage, mise en valeur des ressources naturelles, opérations d'intérêt national.\n\nException 3 : Constructions et installations incompatibles avec le voisinage des zones habitées, extension mesurée de constructions existantes.\n\nException 4 : Sur délibération motivée du conseil municipal, si l'intérêt de la commune (éviter la diminution de population) le justifie.",
        },
        {
          title: '2.4. Meilleur encadrement de la constructibilité limitée',
          text: "La loi ALUR a modifié la procédure pour les projets hors parties urbanisées.\n\nLes projets susceptibles d'être autorisés hors espaces urbanisés doivent être soumis à l'avis de la CDCEA (Commission Départementale de Consommation des Espaces Agricoles).\n\nAvis simple pour les 3 premiers cas de constructibilité tolérée, avis conforme pour le dernier cas.\n\nCommunes sans SCOT ni document d'urbanisme : les secteurs hors parties actuellement urbanisées ne peuvent ouvrir à l'urbanisation, sauf pour les 2 derniers cas de constructibilité. Dérogation possible du préfet.",
        },
      ],
    },
  ],
};

// Fiche 98 - Le plan local d'urbanisme
export const fichePLU: Fiche = {
  id: 98,
  title: "Le plan local d'urbanisme (PLU)",
  theme: 'urbanisme',
  sections: [
    {
      title: "1. L'élaboration du PLU",
      text: "L'élaboration du PLU suit une procédure en plusieurs étapes.",
      subsections: [
        {
          title: '1.1. La prescription',
          text: "L'élaboration du PLU est prescrite par délibération de l'organe délibérant de la commune ou de l'EPCI compétent. Cette délibération précise les objectifs poursuivis et les modalités de concertation.",
        },
        {
          title: "1.2. L'association avec l'État et les personnes concernées",
          text: "L'État et les personnes publiques associées participent à l'élaboration. Le préfet porte à la connaissance de la commune ou de l'EPCI les informations nécessaires à l'exercice de ses compétences en matière d'urbanisme.",
        },
        {
          title: "1.3-1.4. Débat d'orientation et évaluation environnementale",
          text: "Un débat a lieu au sein de l'organe délibérant sur les orientations générales du PADD, au plus tard 2 mois avant l'examen du projet.\n\nL'évaluation environnementale est obligatoire lorsque le PLU est susceptible d'avoir des incidences notables sur l'environnement.",
        },
        {
          title: "1.5-1.7. Arrêt, enquête publique et approbation",
          text: "Le projet de PLU est arrêté par délibération de l'organe délibérant. Il est soumis pour avis aux personnes publiques associées et consultées.\n\nUne enquête publique est organisée. Le projet est ensuite approuvé par délibération.\n\nLe PLU approuvé est tenu à la disposition du public et entre en vigueur à compter de sa transmission au préfet.",
        },
      ],
    },
    {
      title: '2. Le contenu du PLU',
      text: "Le PLU comprend plusieurs documents.",
      subsections: [
        {
          title: '2.1. Le rapport de présentation',
          text: "Il expose le diagnostic, analyse l'état initial de l'environnement, explique les choix retenus pour établir le PADD, les OAP et le règlement. Il évalue les incidences des orientations du plan sur l'environnement.",
        },
        {
          title: '2.2. Le PADD',
          text: "Le Projet d'Aménagement et de Développement Durables définit les orientations générales des politiques d'aménagement, d'équipement, d'urbanisme, de paysage, de protection des espaces naturels, agricoles et forestiers, et de préservation ou de remise en bon état des continuités écologiques.",
        },
        {
          title: '2.3. Les OAP',
          text: "Les Orientations d'Aménagement et de Programmation comprennent des dispositions portant sur l'aménagement, l'habitat, les transports et les déplacements. Elles peuvent comporter un échéancier prévisionnel de l'ouverture à l'urbanisation.",
        },
        {
          title: '2.4. Le règlement et le zonage',
          text: "Le règlement fixe les règles applicables à l'intérieur de chaque zone.\n\nLe zonage délimite :\n• Zones urbaines (U) : secteurs déjà urbanisés et secteurs où les équipements publics existants ou en cours permettent d'admettre immédiatement des constructions.\n\n• Zones à urbaniser (AU) : secteurs à caractère naturel destinés à être ouverts à l'urbanisation.\n\n• Zones agricoles (A) : secteurs à protéger en raison du potentiel agronomique, biologique ou économique des terres agricoles.\n\n• Zones naturelles et forestières (N) : secteurs à protéger en raison de la qualité des sites, milieux et espaces naturels, des paysages et de leur intérêt.\n\n• Zonages spéciaux : emplacements réservés, espaces boisés classés, secteurs de mixité sociale.\n\nLe règlement de zone traite de l'usage des sols et destination des constructions, des caractéristiques architecturales, urbaines et écologiques, des équipements de zone, et des obligations en matière de stationnement.",
        },
        {
          title: '2.5. Les annexes',
          text: "Les annexes du PLU comprennent les servitudes d'utilité publique, les schémas des réseaux d'eau et d'assainissement, et divers documents informatifs.",
        },
      ],
    },
    {
      title: '3. Les effets du PLU',
      text: "Le PLU produit des effets quant aux compétences et modifie les modalités d'application du droit de l'urbanisme.",
      subsections: [
        {
          title: '3.1. Les effets quant aux compétences',
          text: "Le PLU opère un transfert de compétences : c'est le maire qui délivre les autorisations d'urbanisme au nom de la commune.\n\nIl modifie également le domaine d'intervention : le PLU se substitue aux règles du RNU.",
        },
        {
          title: "3.2. L'évolution des modalités d'application",
          text: "Évolution de la hiérarchie des normes : le PLU doit être compatible avec les documents de rang supérieur (SCOT, directives territoriales, etc.).\n\nLe PLU doit faire l'objet d'un suivi régulier et d'une évaluation de ses résultats, au plus tard 9 ans après son approbation.",
        },
      ],
    },
    {
      title: '4. Les évolutions du PLU',
      text: "",
      subsections: [
        {
          title: '4.1. La révision',
          text: "Procédure normale : nécessaire lorsque la commune envisage de changer les orientations du PADD ou de réduire un espace boisé classé, une zone agricole ou naturelle. La procédure est similaire à l'élaboration.\n\nProcédure simplifiée : dans les autres cas, notamment pour rectifier une erreur matérielle.",
        },
        {
          title: '4.2. La modification',
          text: "Modification normale : avec enquête publique, lorsque la modification n'est pas assez importante pour justifier une révision.\n\nModification simplifiée : sans enquête publique, pour les modifications mineures. Le dossier est mis à la disposition du public pendant 1 mois.",
        },
        {
          title: '4.3. La mise en compatibilité',
          text: "Le PLU doit être mis en compatibilité avec les documents de niveau supérieur (SCOT, directives territoriales, etc.) dans un délai de 3 ans.\n\nIl peut aussi être mis en compatibilité pour permettre la réalisation d'un projet d'intérêt général.",
        },
        {
          title: '4.4. La mise à jour',
          text: "La mise à jour concerne les servitudes d'utilité publique et les annexes. Elle est effectuée par arrêté du maire.",
        },
      ],
    },
    {
      title: '5. Les spécificités du PLU intercommunal',
      text: "Le PLU intercommunal (PLUi) couvre l'ensemble du territoire de l'EPCI compétent.\n\nIl peut tenir lieu de programme local de l'habitat (PLH) et de plan de déplacements urbains (PDU).\n\nEn cas de modification du périmètre de l'EPCI, l'EPCI nouvellement compétent achève la procédure en cours ou se substitue à l'ancien EPCI.",
    },
  ],
};

// Fiche 100 - La loi Littoral
export const ficheLittoral: Fiche = {
  id: 100,
  title: 'La loi Littoral',
  theme: 'urbanisme',
  sections: [
    {
      title: "1. Champ d'application de la loi Littoral",
      text: "La loi Littoral s'applique aux communes riveraines des mers, océans, étangs salés, plans d'eau intérieurs de plus de 1000 hectares, et communes riveraines d'estuaires et deltas (liste fixée par le Code de l'environnement).\n\nElle concerne plus de 1200 communes françaises.\n\nObjectif : protéger et mettre en valeur les espaces littoraux. Équilibre entre le développement des activités économiques, la maîtrise de l'urbanisation, la protection des équilibres biologiques et la préservation des sites et paysages.",
    },
    {
      title: '2. Les objectifs de la loi Littoral',
      text: "• Recherche et innovation sur les particularités et ressources du littoral\n• Protection des équilibres biologiques et écologiques, lutte contre l'érosion\n• Préservation des sites, paysages et du patrimoine\n• Préservation et développement des activités économiques liées à la proximité de l'eau (pêche, cultures marines, activités portuaires, construction navale, transports maritimes)\n• Maintien et développement des activités agricoles, sylvicoles, industrielles, artisanales et touristiques en zone littorale\n• Mesures de protection et d'aménagement du littoral intégrées dans les documents locaux d'urbanisme",
    },
    {
      title: "3. Les conditions de l'urbanisation en zone littorale",
      text: "",
      subsections: [
        {
          title: "3.1. Extension de l'urbanisation en continuité",
          text: "L'extension de l'urbanisation se réalise en continuité des agglomérations et villages existants, ou en hameaux nouveaux intégrés à l'environnement.\n\nSont interdits : les constructions isolées et la création sur un site vierge d'agglomérations nouvelles importantes.\n\n2 exceptions pour l'activité agricole :\n• Travaux de mise aux normes des exploitations agricoles\n• Constructions liées aux activités agricoles/forestières incompatibles avec le voisinage des zones habitées (accord du préfet nécessaire)",
        },
        {
          title: "3.2. Urbanisation limitée dans les espaces proches du rivage",
          text: "Dans les « espaces proches du rivage », l'extension de l'urbanisation est limitée et doit être motivée dans le PLU.\n\nLa délimitation des espaces proches du rivage est appréciée localement (pas de critère unique de distance).\n\nLe caractère limité de l'extension est apprécié selon les conditions générales d'urbanisation de la commune.\n\nSi l'extension n'est pas prévue par un schéma ni justifiée par le PLU : elle nécessite une délibération spécifique du conseil municipal, l'accord du préfet et l'avis de la commission départementale.",
        },
        {
          title: '3.3. Protection de la bande littorale',
          text: "Bande de 100 mètres (horizontale depuis la limite haute du rivage ou les plus hautes eaux des plans d'eau intérieurs) : constructions interdites hors espaces urbanisés.\n\nLe PLU peut porter la largeur de cette bande au-delà de 100m pour des motifs de sensibilité des milieux ou d'érosion des côtes.\n\n2 exceptions à l'interdiction :\n• Constructions et installations nécessaires aux services publics ou aux activités économiques nécessitant la proximité immédiate de l'eau\n• Les communes littorales peuvent établir un schéma d'aménagement des plages (dérogatoire) autorisant le maintien ou la reconstruction d'équipements existants",
        },
      ],
    },
    {
      title: '4. Les espaces protégés par la loi Littoral',
      text: "",
      subsections: [
        {
          title: '4.1. Espaces, sites et paysages remarquables',
          text: "Les documents d'urbanisme doivent préserver les espaces terrestres et marins, les sites et paysages remarquables ou caractéristiques du patrimoine naturel et culturel du littoral, et les milieux nécessaires au maintien des équilibres biologiques.\n\nConcernés : dunes, plages, îlots inhabités, marais, gisements minéraux et fossiles, récifs coralliens.\n\nDes aménagements légers peuvent être implantés pour la gestion, la mise en valeur et l'ouverture au public, sous réserve de ne pas dénaturer le caractère des sites.\n\nDepuis 2013 : les canalisations du réseau public de transport et distribution d'électricité (énergies renouvelables) sont autorisées.",
        },
        {
          title: '4.2. Parcs et ensembles boisés les plus significatifs',
          text: "Les PLU doivent classer en espaces boisés les parcs et ensembles boisés existants les plus significatifs de la commune, après consultation de la commission départementale.\n\nSont pris en compte : la qualité du boisement, sa superficie et son importance dans le paysage.",
        },
      ],
    },
    {
      title: '5. Les règles spécifiques de la loi Littoral',
      text: "",
      subsections: [
        {
          title: '5.1. Le libre accès au rivage',
          text: "Les opérations d'aménagement admises à proximité du rivage doivent organiser et préserver le libre accès du public au rivage de la mer.\n\nServitude longitudinale : bande de 3m réservée au passage des piétons le long du rivage.\n\nServitude transversale : relie la voie publique au rivage de la mer, en l'absence de voie publique à moins de 500m permettant l'accès au rivage.\n\nCours d'eau et lacs domaniaux : servitude de marchepied (3,25m depuis la limite des plus hautes eaux). Étendue aux piétons par la loi de 2006.",
        },
        {
          title: '5.2-5.3. Aménagement des plages et création de routes',
          text: "Les communes littorales peuvent établir un schéma d'aménagement des plages et espaces naturels de bord de mer.\n\nRoutes nouvelles de transit : localisées à plus de 2000m du rivage.\nRoutes sur plages, dunes, corniche : interdites.\nRoutes de desserte locale : ne doivent pas être établies sur le rivage ni le longer.\n\nDérogation possible si contrainte liée à la configuration des lieux ou à l'insularité.",
        },
        {
          title: '5.4. Terrains de camping',
          text: "L'aménagement et l'ouverture de terrains de camping hors espaces urbanisés sont subordonnés à la délimitation de secteurs prévus par le PLU.\n\nIls doivent respecter les dispositions relatives à l'extension de l'urbanisation et ne peuvent être installés dans la bande littorale de 100m.",
        },
      ],
    },
  ],
};

// Fiche 101 - La loi Montagne
export const ficheMontagne: Fiche = {
  id: 101,
  title: 'La loi Montagne',
  theme: 'urbanisme',
  sections: [
    {
      title: "1. Champ d'application",
      text: "La loi Montagne s'applique aux zones de montagne (Alpes, Corse, Massif central, Jura, Vosges, Pyrénées), soit plus de 5500 communes.\n\nObjectifs : permettre aux populations locales et aux élus d'acquérir les moyens et la maîtrise de leur développement, dans le respect de l'identité culturelle montagnarde et la parité des revenus.\n\nElle fixe les conditions de protection de l'espace montagnard : préserver les terres agricoles, pastorales, forestières, les espaces et paysages du patrimoine naturel et culturel.",
    },
    {
      title: "2. Principes d'aménagement et de protection",
      text: "",
      subsections: [
        {
          title: '2.1. Préservation des terres agricoles, pastorales et forestières',
          text: "Les terres nécessaires au maintien et au développement des activités agricoles, pastorales et forestières sont préservées.\n\nSEULES les constructions nécessaires à ces activités sont autorisées dans les espaces agricoles et naturels.\n\nPréservation des prairies pâturables.\n\nAutres constructions autorisées :\n• Équipements sportifs (ski, randonnée)\n• Restauration, reconstruction, extension limitée d'anciens chalets d'alpage ou d'estive (procédure spécifique, accord du préfet)\n\nSi les chalets ne sont pas desservis ou par des voies non utilisables en hiver : l'autorité peut subordonner les travaux à une servitude administrative interdisant l'utilisation hivernale.",
        },
        {
          title: "2.2. Urbanisation en continuité de celle existante",
          text: "Principe : l'urbanisation est réalisée en continuité des bourgs, villages, hameaux ou groupes de constructions traditionnelles existants. Les constructions isolées sont interdites.\n\nDérogations :\n\n• Adaptation, changement de destination, réfection, extension limitée de constructions existantes, ou réalisation d'installations incompatibles avec le voisinage des zones habitées.\n\n• Si le SCOT ou le PLU comporte une étude justifiant la compatibilité de l'urbanisation en discontinuité avec les objectifs de protection.\n\n• Le PLU peut délimiter des hameaux ou groupes d'habitations nouveaux intégrés à l'environnement.\n\n• Communes sans PLU/carte communale : constructions autorisées si l'intérêt de la commune (éviter la diminution de population) le justifie, sous conditions.",
        },
        {
          title: "2.3. Règles d'urbanisme particulières",
          text: "Urbanisation sur les rives de plans d'eau :\n• Interdiction de toute construction dans une bande de 300m à compter de la rive des plans d'eau naturels ou artificiels (sauf plans d'eau > 1000 ha soumis à la loi Littoral).\n• Dérogations possibles par document d'urbanisme avec étude.\n\nConstruction de routes panoramiques :\n• Interdiction de créer des routes nouvelles de vision panoramique, corniche, bouclage au-dessus de la limite forestière.\n• Dérogations : désenclavement d'agglomérations existantes, massifs forestiers, défense nationale, liaison internationale.\n\nInstallations de nécessité technique :\n• Les installations nécessaires aux établissements scientifiques, à la défense nationale, à l'exploitation de ressources minérales d'intérêt national, ou aux services publics ne sont pas soumises aux dispositions de la loi Montagne si leur localisation est une nécessité technique impérative.",
        },
      ],
    },
    {
      title: '3. Unités touristiques nouvelles (UTN)',
      text: "",
      subsections: [
        {
          title: '3.1. Définition',
          text: "Une opération de développement touristique en zone de montagne constitue une unité touristique nouvelle (UTN) si elle a un objet ou un effet spécifique :\n• Construction de surfaces d'hébergement touristique\n• Création d'équipement touristique\n• Création de remontées mécaniques",
        },
        {
          title: '3.2. But des UTN',
          text: "Les UTN permettent de s'affranchir de certaines obligations de la loi Montagne (urbanisation en continuité, capacité d'accueil compatible avec la préservation des espaces naturels).",
        },
        {
          title: '3.3. Autorisation',
          text: "UTN d'importance interrégionale ou régionale : autorisation délivrée par le préfet coordonnateur de massif, après avis de la commission spécialisée du comité de massif.\n\nUTN d'importance départementale : autorisation délivrée par le représentant de l'État dans le département.\n\nAutres UTN : pas soumises à autorisation.",
        },
        {
          title: '3.4. Procédure',
          text: "Les projets d'UTN hors SCOT : le dossier est mis à disposition du public pendant au moins 1 mois.\n\nContenu du dossier :\n• État des milieux naturels, paysages, site, environnement\n• Caractéristiques du projet et demande à satisfaire\n• Risques naturels et mesures de prévention\n• Effets prévisibles, mesures de suppression, compensation ou réhabilitation\n• Estimation du coût et équilibre économique et financier",
        },
      ],
    },
    {
      title: "4. Modalités d'application",
      text: "Deux possibilités pour préciser les modalités :\n\nDirectives territoriales d'aménagement (DTA) : s'imposent aux documents de planification (les SCOT doivent être compatibles avec les DTA).\n\nPrescriptions particulières de massif : en l'absence de DTA, peuvent être définies sur tout ou partie d'un massif. Elles peuvent adapter les seuils et critères d'études d'impact, désigner les espaces et paysages remarquables du patrimoine montagnard, et préciser les modalités d'application de la loi.",
    },
  ],
};

export const urbanismeFiches2 = [ficheRNU, fichePLU, ficheLittoral, ficheMontagne];
