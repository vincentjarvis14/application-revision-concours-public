# 📚 Application de Révision - Concours Attaché Territorial

Application mobile React Native (Expo) de révision pour le **concours d'attaché territorial (Catégorie A)**. Elle contient des fiches de cours, des flashcards interactives et des quiz basés sur le programme officiel du CNFPT.

---

## 🏗️ Architecture du projet

```
frontend/
├── app/                          # Écrans (Expo Router - file-based routing)
│   ├── _layout.tsx               # Layout racine (SafeAreaProvider + Stack)
│   ├── index.tsx                 # Redirection vers (tabs)
│   ├── (tabs)/                   # Navigation par onglets
│   │   ├── _layout.tsx           # Configuration des 4 onglets
│   │   ├── index.tsx             # Onglet Accueil (vue d'ensemble)
│   │   ├── fiches.tsx            # Onglet Fiches (lecture du contenu) ⭐ PRINCIPAL
│   │   ├── flashcards.tsx        # Onglet Flashcards (cartes de révision)
│   │   └── quiz.tsx              # Onglet Quiz (QCM avec correction)
│   └── theme/
│       └── [id].tsx              # Page détail d'une thématique (NON UTILISÉE actuellement)
│
├── data/                         # Données des fiches (contenu statique)
│   ├── types.ts                  # Types TypeScript (Fiche, Theme, ContentSection, etc.)
│   ├── index.ts                  # Point d'entrée : combine toutes les fiches, exporte `themes`
│   ├── environnement-data.ts     # Fiches 1-6 complètes + placeholders 38-90
│   ├── env-collectivites.ts      # Fiches 7-25 (collectivités locales) ✅ COMPLÈTES
│   ├── env-action-admin.ts       # Fiches 26-37 (action administrative) ✅ COMPLÈTES
│   ├── urbanisme-part1.ts        # Fiches 99, 102, 105 (SCOT, CU, Permis) ✅ COMPLÈTES
│   ├── urbanisme-part2.ts        # Fiches 96, 98, 100, 101 (RNU, PLU, Littoral, Montagne) ✅ COMPLÈTES
│   └── urbanisme-part3.ts        # Fiches 103-108 (règles communes, DP, contentieux) ✅ COMPLÈTES
│
├── assets/                       # Images et polices
├── app.json                      # Configuration Expo
├── package.json                  # Dépendances
├── tsconfig.json                 # Configuration TypeScript
└── metro.config.js               # ⚠️ NE PAS MODIFIER
```

---

## 📱 Les 4 onglets de l'application

### 1. Accueil (`app/(tabs)/index.tsx`)
- Vue d'ensemble des 2 thématiques
- Statistiques (nombre de fiches, niveau)
- Conseil du jour

### 2. Fiches (`app/(tabs)/fiches.tsx`) — ÉCRAN PRINCIPAL
- **Navigation hiérarchique en 4 niveaux** gérée par état (`useState`) :
  - `themes` → Liste des 2 thématiques
  - `sections` → Liste des sections d'une thématique
  - `fiches` → Liste des fiches d'une section
  - `read` → Lecture complète d'une fiche avec hiérarchie de titres colorés
- Utilise `TouchableOpacity` de **`react-native-gesture-handler`** (important pour le fonctionnement sur mobile/Expo Go)
- Hiérarchie visuelle : titres H2 en violet (#6366F1), H3 en vert (#10B981), H4 en jaune (#F59E0B)

### 3. Flashcards (`app/(tabs)/flashcards.tsx`)
- **Sélection du contenu** : l'utilisateur choisit les sections à réviser avant de commencer
- Carte retournable avec animation (react-native-reanimated)
- Navigation précédent/suivant
- Auto-évaluation (À revoir / Difficile / Maîtrisé)
- 22 flashcards couvrant urbanisme + environnement territorial

### 4. Quiz (`app/(tabs)/quiz.tsx`)
- **Sélection du contenu** : choix des sections à tester
- QCM avec 4 options (A, B, C, D)
- Feedback immédiat (correct/incorrect) avec explication détaillée
- Barre de progression et score en temps réel
- Écran de résultats avec statistiques
- 20 questions couvrant urbanisme + environnement territorial

---

## 📊 Structure des données

### Types (`data/types.ts`)
```typescript
interface ContentSection {
  title: string;
  text: string;
  subsections?: ContentSection[];  // Récursif pour la hiérarchie
}

interface Fiche {
  id: number;            // Numéro de fiche (ex: 105 = permis de construire)
  title: string;
  theme: 'urbanisme' | 'environnement';
  sections: ContentSection[];
}

interface Theme {
  id: string;            // 'environnement' ou 'urbanisme'
  title: string;
  subtitle: string;
  color: string;         // Couleur du thème (violet ou vert)
  icon: string;          // Nom d'icône Ionicons
  sections: ThemeSection[];
}
```

### Organisation des données (`data/index.ts`)
Le fichier `data/index.ts` combine toutes les fiches et les organise en thèmes et sections. Il exporte :
- `themes` : tableau des 2 thématiques avec leurs sections et fiches
- `getFicheById(id)` : récupère une fiche par son numéro
- `getAllFiches()` : retourne toutes les fiches

### Comment le contenu est organisé
Chaque fiche suit la structure du PDF source CNFPT :
```
Thème > Section > Fiche > Sections de contenu > Sous-sections > Sous-sous-sections
```

---

## ✅ CE QUI A ÉTÉ FAIT

### Urbanisme — 12 fiches COMPLÈTES avec contenu détaillé du PDF
| Fiche | Titre | Fichier |
|-------|-------|---------|
| 96 | Le règlement national d'urbanisme (RNU) | `urbanisme-part2.ts` |
| 98 | Le plan local d'urbanisme (PLU) | `urbanisme-part2.ts` |
| 99 | Le schéma de cohérence territoriale (SCOT) | `urbanisme-part1.ts` |
| 100 | La loi Littoral | `urbanisme-part2.ts` |
| 101 | La loi Montagne | `urbanisme-part2.ts` |
| 102 | Le certificat d'urbanisme | `urbanisme-part1.ts` |
| 103 | Les règles communes aux autorisations d'urbanisme | `urbanisme-part3.ts` |
| 104 | La déclaration préalable | `urbanisme-part3.ts` |
| 105 | Le permis de construire | `urbanisme-part1.ts` |
| 106 | Le permis d'aménager et le permis de démolir | `urbanisme-part3.ts` |
| 107 | Les opérations d'aménagement (ZAC, lotissements) | `urbanisme-part3.ts` |
| 108 | Le contentieux de l'urbanisme | `urbanisme-part3.ts` |

### Environnement Territorial — 37 fiches COMPLÈTES
| Fiches | Section | Fichier |
|--------|---------|---------|
| 1-6 | Institutions françaises + Statut élus | `environnement-data.ts` |
| 7-25 | Collectivités locales (19 fiches) | `env-collectivites.ts` |
| 26-37 | Action administrative locale (12 fiches) | `env-action-admin.ts` |

### Fonctionnalités implémentées
- ✅ Navigation par onglets (4 onglets)
- ✅ Lecture complète des fiches avec hiérarchie de titres
- ✅ Flashcards interactives avec animation de retournement
- ✅ Quiz QCM avec correction et explications
- ✅ Sélection du contenu pour Flashcards et Quiz
- ✅ Design sombre moderne (thème dark #111827)
- ✅ Compatible Expo Go (iOS + Android)

---

## ❌ CE QUI RESTE À FAIRE

### PRIORITÉ 1 : Compléter le contenu des fiches manquantes
**53 fiches d'Environnement Territorial sont en placeholder** (fiches 38-90). Elles ont un titre mais pas de contenu détaillé. Le PDF source contient tout le contenu.

| Fiches | Section | État | Fichier à modifier |
|--------|---------|------|-------------------|
| 38-45 | Finances publiques locales (8 fiches) | ❌ Placeholder | `environnement-data.ts` |
| 50-60 | Commande publique (11 fiches) | ❌ Placeholder | `environnement-data.ts` |
| 61-70 | Statut de la FPT (10 fiches) | ❌ Placeholder | `environnement-data.ts` |
| 71-78 | Ressources humaines (8 fiches) | ❌ Placeholder | `environnement-data.ts` |
| 84-90 | Management (7 fiches) | ❌ Placeholder | `environnement-data.ts` |

**Comment compléter :** 
1. Ouvrir le PDF `Environnement territorial catégorie A - TOUTES LES FICHES.pdf`
2. Pour chaque fiche, extraire le contenu et le structurer selon le format TypeScript existant
3. Créer de nouveaux fichiers `env-finances.ts`, `env-commande.ts`, etc. (comme `env-collectivites.ts`)
4. Les importer dans `environnement-data.ts` et remplacer les placeholders
5. Mettre à jour le tableau dans `environnement-data.ts` pour remplacer `makeFiche(id, title)` par les vraies fiches

**Exemple de structure pour une fiche complète :**
```typescript
{
  id: 39,
  title: "Les cinq grands principes budgétaires",
  theme: 'environnement',
  sections: [
    {
      title: "1. Principe d'annualité",
      text: "Le budget est voté pour un an...",
      subsections: [
        { title: "1.1. Définition", text: "..." },
        { title: "1.2. Exceptions", text: "..." },
      ]
    },
    { title: "2. Principe d'unité", text: "..." },
    // ... etc
  ]
}
```

### PRIORITÉ 2 : Enrichir les Flashcards et Quiz
Les flashcards (22) et questions de quiz (20) ne couvrent qu'une partie du contenu. À enrichir :

- **Flashcards** (`app/(tabs)/flashcards.tsx`) : le tableau `allFlashcards` contient les cartes. Ajouter des cartes pour les nouvelles sections (finances, commande publique, FPT, RH, management).
- **Quiz** (`app/(tabs)/quiz.tsx`) : le tableau `allQuestions` contient les questions. Ajouter des questions avec le même format.
- **Les deux fichiers utilisent un objet `themesStructure`/`sectionsStructure`** pour la sélection par section. Penser à mettre à jour ces structures quand on ajoute de nouvelles sections.

### PRIORITÉ 3 : Fonctionnalités à ajouter
- [ ] **Recherche** : ajouter un champ de recherche dans l'onglet Fiches pour trouver rapidement une fiche par mot-clé
- [ ] **Favoris/Signets** : permettre de marquer des fiches comme favorites (utiliser AsyncStorage)
- [ ] **Progression** : sauvegarder la progression de lecture (fiches lues, score des quiz) avec AsyncStorage ou MongoDB
- [ ] **Mode hors-ligne** : les données sont déjà statiques, mais ajouter un cache pour les images si nécessaire
- [ ] **Spaced Repetition** : implémenter un algorithme de répétition espacée pour les flashcards (type SM-2)
- [ ] **Export PDF** : permettre d'exporter des fiches en PDF pour impression
- [ ] **Statistiques** : dashboard avec courbes de progression, temps de révision, points forts/faibles

### PRIORITÉ 4 : Améliorations techniques
- [ ] Migrer les données vers une base de données (MongoDB déjà configuré côté backend)
- [ ] Ajouter des tests unitaires
- [ ] Optimiser le chargement des données volumineuses (lazy loading des fiches)
- [ ] Ajouter une authentification utilisateur (JWT ou Google Auth)

---

## 🛠️ Stack technique

| Technologie | Version | Rôle |
|-------------|---------|------|
| Expo | SDK 54 | Framework mobile |
| React Native | 0.79+ | UI native |
| Expo Router | v4 | Navigation (file-based routing) |
| TypeScript | 5.x | Typage statique |
| react-native-reanimated | 3.x | Animations (flip des flashcards) |
| react-native-gesture-handler | 2.x | Gestion des gestes tactiles |
| react-native-safe-area-context | 5.x | Safe area (notch, barre de statut) |
| @expo/vector-icons (Ionicons) | 15.x | Icônes |
| FastAPI (backend) | 0.115+ | API backend (peu utilisé pour l'instant) |
| MongoDB | 7.x | Base de données (configurée mais non utilisée) |

---

## 🚀 Installation et lancement

### Prérequis
- Node.js 18+
- Yarn
- Expo CLI (`npm install -g expo-cli`)
- Expo Go sur votre téléphone (App Store / Play Store)

### Lancement
```bash
# Cloner le repo
git clone https://github.com/VOTRE_USERNAME/application-revision-concours-public.git
cd application-revision-concours-public/frontend

# Installer les dépendances
yarn install

# Lancer en mode développement
npx expo start

# Scanner le QR code avec Expo Go
```

### Backend (optionnel, non nécessaire actuellement)
```bash
cd backend
pip install -r requirements.txt
python server.py
```

---

## 🎨 Design

- **Thème sombre** : fond #111827, cartes #1F2937
- **Couleur accent Environnement Territorial** : violet #6366F1
- **Couleur accent Urbanisme** : vert #10B981
- **Hiérarchie des titres de lecture** :
  - H2 (sections principales) : violet #6366F1
  - H3 (sous-sections) : vert #10B981
  - H4 (sous-sous-sections) : jaune #F59E0B
  - Texte : gris clair #D1D5DB, interligne 24px

---

## 📄 Documents source

L'application est basée sur les documents officiels du **CNFPT (Centre National de la Fonction Publique Territoriale)** :

1. **`Environnement territorial catégorie A - TOUTES LES FICHES.pdf`** (460+ pages)
   - 90 fiches couvrant : institutions, collectivités locales, action administrative, finances publiques, commande publique, FPT, RH, management
   
2. **`xwiki_vitrine_Le+permis+de+construire_merge.pdf`**
   - 12 documents d'urbanisme : RNU, PLU, SCOT, lois Littoral/Montagne, permis de construire, certificat d'urbanisme, déclaration préalable, contentieux, etc.

3. **`Les fiches connaissances du cadre d'emplois des attachés territoriaux - Wikiterritorial.html`**
   - Sommaire et structure des fiches

4. **`Environnement territorial catégorie A - Wikiterritorial.html`**
   - Liste détaillée des fiches par section

---

## ⚠️ Points d'attention pour Claude Code

1. **NE PAS modifier `metro.config.js`** — casse la configuration Expo
2. **`TouchableOpacity` doit venir de `react-native-gesture-handler`** dans les ScrollView sur mobile (sinon les clics ne fonctionnent pas sur Expo Go)
3. **Les données sont statiques** (pas d'API) — tout le contenu est dans `/data/`
4. **Le fichier `environnement-data.ts`** est le point d'assemblage : il importe les fiches des sous-fichiers et exporte `environnementFiches`
5. **Le fichier `data/index.ts`** est le point d'entrée principal : il organise les fiches en thèmes et sections
6. **Pour ajouter une fiche** : créer l'objet `Fiche` dans le bon fichier, s'assurer qu'il est importé dans `environnement-data.ts`, et que son `id` tombe dans la bonne plage pour être filtré dans `data/index.ts`
7. **Le backend FastAPI et MongoDB sont configurés mais non utilisés** — tout est côté frontend pour l'instant

---

## 📝 Licence

Projet personnel de révision pour le concours d'attaché territorial. Le contenu des fiches provient des documents publics du CNFPT Wikiterritorial.
