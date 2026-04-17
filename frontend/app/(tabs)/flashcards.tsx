import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolate,
} from 'react-native-reanimated';

const { width } = Dimensions.get('window');

interface Flashcard {
  id: number;
  question: string;
  answer: string;
  category: string;
  section: string;
  fiche: string;
}

// Flashcards organisées par thématique et section
const allFlashcards: Flashcard[] = [
  // URBANISME - Permis de construire
  {
    id: 1,
    question: "Qu'est-ce qu'un permis de construire ?",
    answer: "C'est un acte administratif individuel par lequel une autorité administrative autorise des travaux ou une construction, à condition que le projet respecte les règles et servitudes applicables au lieu de son implantation.",
    category: 'Urbanisme',
    section: 'Permis de construire',
    fiche: 'Fiche 105',
  },
  {
    id: 2,
    question: 'Quelle est la durée de validité d\'un permis de construire ?',
    answer: '2 ans à compter de sa délivrance. Le permis devient caduc si les travaux ne sont pas entrepris dans ce délai ou sont interrompus pendant plus d\'un an. Une prorogation d\'1 an est possible.',
    category: 'Urbanisme',
    section: 'Permis de construire',
    fiche: 'Fiche 105',
  },
  {
    id: 3,
    question: 'Quel est le délai d\'instruction d\'un permis de construire pour une maison individuelle ?',
    answer: '2 mois en droit commun. Ce délai peut être majoré d\'1 mois en secteur sauvegardé ou de 2 mois si consultation d\'une commission départementale/régionale.',
    category: 'Urbanisme',
    section: 'Permis de construire',
    fiche: 'Fiche 105',
  },
  {
    id: 4,
    question: 'À partir de quelle surface de plancher créée un permis de construire est-il obligatoire ?',
    answer: 'Plus de 20 m² de surface de plancher ou d\'emprise au sol. Dans les zones urbaines d\'un PLU, ce seuil est porté à 40 m² (sauf si le total dépasse le seuil nécessitant un architecte).',
    category: 'Urbanisme',
    section: 'Permis de construire',
    fiche: 'Fiche 105',
  },
  {
    id: 5,
    question: 'Qui délivre le permis de construire ?',
    answer: 'Le maire, au nom de la commune si elle dispose d\'un PLU approuvé, ou au nom de l\'État dans les autres cas.',
    category: 'Urbanisme',
    section: 'Permis de construire',
    fiche: 'Fiche 105',
  },
  // URBANISME - Certificat d'urbanisme
  {
    id: 6,
    question: 'Quels sont les deux types de certificats d\'urbanisme ?',
    answer: '1) Certificat neutre (ou "a") : informe sur les règles applicables au terrain\n2) Certificat pré-opérationnel (ou "b") : indique si un projet précis peut être réalisé sur le terrain.',
    category: 'Urbanisme',
    section: 'Certificat d\'urbanisme',
    fiche: 'Fiche 102',
  },
  {
    id: 7,
    question: 'Quelle est la durée de validité d\'un certificat d\'urbanisme pré-opérationnel ?',
    answer: '18 mois. Une prorogation par périodes d\'un an est possible si les règles, servitudes et taxes n\'ont pas changé.',
    category: 'Urbanisme',
    section: 'Certificat d\'urbanisme',
    fiche: 'Fiche 102',
  },
  {
    id: 8,
    question: 'Quel est le délai d\'instruction d\'un certificat d\'urbanisme neutre ?',
    answer: '1 mois à compter du dépôt d\'un dossier complet.',
    category: 'Urbanisme',
    section: 'Certificat d\'urbanisme',
    fiche: 'Fiche 102',
  },
  // URBANISME - SCOT
  {
    id: 9,
    question: 'Quels sont les 3 documents composant un SCOT ?',
    answer: '1) Le rapport de présentation (diagnostic, justifications)\n2) Le PADD (Projet d\'Aménagement et de Développement Durables)\n3) Le DOO (Document d\'Orientation et d\'Objectifs)',
    category: 'Urbanisme',
    section: 'SCOT',
    fiche: 'Fiche 99',
  },
  {
    id: 10,
    question: 'Tous les combien un SCOT doit-il être analysé ?',
    answer: '6 ans maximum après son approbation, sa révision complète ou son maintien en vigueur. L\'EPCI procède alors à une analyse de son application.',
    category: 'Urbanisme',
    section: 'SCOT',
    fiche: 'Fiche 99',
  },
  // URBANISME - Loi Montagne
  {
    id: 11,
    question: 'Quel est le principe fondamental d\'urbanisation en zone montagne ?',
    answer: 'L\'urbanisation doit être réalisée en continuité des bourgs, villages, hameaux ou groupes de constructions traditionnelles existants. Les constructions isolées sont interdites.',
    category: 'Urbanisme',
    section: 'Loi Montagne',
    fiche: 'Fiche 101',
  },
  {
    id: 12,
    question: 'Quelle est la largeur de la bande inconstructible autour des plans d\'eau en zone montagne ?',
    answer: '300 mètres à compter de la rive des plans d\'eau naturels ou artificiels (sauf plans d\'eau > 1000 ha soumis à la loi Littoral).',
    category: 'Urbanisme',
    section: 'Loi Montagne',
    fiche: 'Fiche 101',
  },
  // URBANISME - Loi Littoral
  {
    id: 13,
    question: 'Quelle est la largeur de la bande littorale inconstructible ?',
    answer: '100 mètres à compter de la limite haute du rivage, hors espaces urbanisés. Le PLU peut porter cette largeur au-delà de 100m pour des motifs de sensibilité des milieux ou d\'érosion.',
    category: 'Urbanisme',
    section: 'Loi Littoral',
    fiche: 'Fiche 100',
  },
  {
    id: 14,
    question: 'À quelles communes s\'applique la loi Littoral ?',
    answer: 'Aux communes riveraines des mers, océans, étangs salés, plans d\'eau intérieurs > 1000 ha, et communes riveraines d\'estuaires/deltas (liste fixée par décret). Plus de 1200 communes en France.',
    category: 'Urbanisme',
    section: 'Loi Littoral',
    fiche: 'Fiche 100',
  },
  // ENVIRONNEMENT TERRITORIAL - Décentralisation
  {
    id: 15,
    question: 'Quelles sont les grandes étapes de la décentralisation en France ?',
    answer: 'Acte I (1982-1983) : Lois Defferre\nActe II (2003-2004) : Révision constitutionnelle\nActe III (2010-2015) : Réforme territoriale (loi NOTRe, etc.)',
    category: 'Environnement Territorial',
    section: 'Institutions françaises',
    fiche: 'Fiche 3',
  },
  {
    id: 16,
    question: 'Quels sont les principes fondamentaux de la décentralisation ?',
    answer: '1) Libre administration des collectivités\n2) Absence de tutelle d\'une collectivité sur une autre\n3) Compensation financière des transferts de compétences\n4) Contrôle de légalité a posteriori par le préfet',
    category: 'Environnement Territorial',
    section: 'Institutions françaises',
    fiche: 'Fiche 3',
  },
  // ENVIRONNEMENT TERRITORIAL - Collectivités locales
  {
    id: 17,
    question: 'Quelles sont les trois catégories de collectivités territoriales ?',
    answer: '1) Les communes\n2) Les départements\n3) Les régions\n(+ collectivités à statut particulier et collectivités d\'outre-mer)',
    category: 'Environnement Territorial',
    section: 'Collectivités locales',
    fiche: 'Fiche 5',
  },
  {
    id: 18,
    question: 'Quelle est la durée du mandat du maire ?',
    answer: '6 ans, comme les conseillers municipaux. Le maire est élu par le conseil municipal lors de la première réunion suivant le renouvellement général.',
    category: 'Environnement Territorial',
    section: 'Collectivités locales',
    fiche: 'Fiche 14',
  },
  // ENVIRONNEMENT TERRITORIAL - Finances publiques
  {
    id: 19,
    question: 'Quels sont les 5 grands principes budgétaires des collectivités ?',
    answer: '1) Annualité\n2) Unité\n3) Universalité\n4) Spécialité\n5) Équilibre réel',
    category: 'Environnement Territorial',
    section: 'Finances publiques',
    fiche: 'Fiche 39',
  },
  {
    id: 20,
    question: 'Qu\'est-ce que le principe d\'équilibre réel du budget local ?',
    answer: 'Le budget doit être voté en équilibre réel : les recettes et dépenses doivent être évaluées de façon sincère, et le remboursement de la dette en capital doit être couvert par des ressources propres.',
    category: 'Environnement Territorial',
    section: 'Finances publiques',
    fiche: 'Fiche 39',
  },
  // ENVIRONNEMENT TERRITORIAL - Fonction publique
  {
    id: 21,
    question: 'Quels sont les modes d\'accès à la fonction publique territoriale ?',
    answer: '1) Le concours (voie principale)\n2) Le recrutement direct (catégorie C)\n3) La promotion interne\n4) Le détachement\n5) L\'intégration directe',
    category: 'Environnement Territorial',
    section: 'Fonction publique',
    fiche: 'Fiche 62',
  },
  {
    id: 22,
    question: 'Quelles sont les positions statutaires d\'un fonctionnaire territorial ?',
    answer: '1) Activité\n2) Détachement\n3) Disponibilité\n4) Congé parental\n5) Position hors cadres (pour certains emplois)',
    category: 'Environnement Territorial',
    section: 'Fonction publique',
    fiche: 'Fiche 63',
  },
];

// Structure des thématiques pour la sélection
const themesStructure = {
  'Urbanisme': {
    color: '#10B981',
    sections: ['Permis de construire', 'Certificat d\'urbanisme', 'SCOT', 'Loi Montagne', 'Loi Littoral'],
  },
  'Environnement Territorial': {
    color: '#6366F1',
    sections: ['Institutions françaises', 'Collectivités locales', 'Finances publiques', 'Fonction publique'],
  },
};

export default function FlashcardsScreen() {
  const [showSelection, setShowSelection] = useState(true);
  const [selectedSections, setSelectedSections] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const rotation = useSharedValue(0);

  // Filtrer les flashcards selon les sections sélectionnées
  const filteredCards = selectedSections.length > 0
    ? allFlashcards.filter((f) => selectedSections.includes(f.section))
    : [];

  const currentCard = filteredCards[currentIndex];

  const toggleSection = (section: string) => {
    setSelectedSections((prev) =>
      prev.includes(section)
        ? prev.filter((s) => s !== section)
        : [...prev, section]
    );
  };

  const selectAllFromTheme = (theme: string) => {
    const themeSections = themesStructure[theme as keyof typeof themesStructure].sections;
    const allSelected = themeSections.every((s) => selectedSections.includes(s));
    if (allSelected) {
      setSelectedSections((prev) => prev.filter((s) => !themeSections.includes(s)));
    } else {
      setSelectedSections((prev) => [...new Set([...prev, ...themeSections])]);
    }
  };

  const startReview = () => {
    if (selectedSections.length > 0) {
      setCurrentIndex(0);
      setIsFlipped(false);
      rotation.value = 0;
      setShowSelection(false);
    }
  };

  const flipCard = () => {
    const newValue = isFlipped ? 0 : 180;
    rotation.value = withTiming(newValue, { duration: 400 });
    setIsFlipped(!isFlipped);
  };

  const nextCard = () => {
    if (currentIndex < filteredCards.length - 1) {
      rotation.value = 0;
      setIsFlipped(false);
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevCard = () => {
    if (currentIndex > 0) {
      rotation.value = 0;
      setIsFlipped(false);
      setCurrentIndex(currentIndex - 1);
    }
  };

  const frontAnimatedStyle = useAnimatedStyle(() => {
    const rotateY = interpolate(rotation.value, [0, 180], [0, 180]);
    return {
      transform: [{ rotateY: `${rotateY}deg` }],
      backfaceVisibility: 'hidden',
    };
  });

  const backAnimatedStyle = useAnimatedStyle(() => {
    const rotateY = interpolate(rotation.value, [0, 180], [180, 360]);
    return {
      transform: [{ rotateY: `${rotateY}deg` }],
      backfaceVisibility: 'hidden',
    };
  });

  // Écran de sélection
  if (showSelection) {
    const totalSelected = allFlashcards.filter((f) =>
      selectedSections.includes(f.section)
    ).length;

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Flashcards</Text>
          <View style={styles.counterBadge}>
            <Text style={styles.counterText}>{totalSelected} cartes</Text>
          </View>
        </View>

        <ScrollView style={styles.selectionContent} showsVerticalScrollIndicator={false}>
          <Text style={styles.selectionTitle}>Choisissez vos sujets de révision</Text>
          <Text style={styles.selectionSubtitle}>
            Sélectionnez les sections que vous souhaitez réviser
          </Text>

          {Object.entries(themesStructure).map(([theme, data]) => {
            const themeSections = data.sections;
            const selectedCount = themeSections.filter((s) =>
              selectedSections.includes(s)
            ).length;
            const allSelected = selectedCount === themeSections.length;

            return (
              <View key={theme} style={styles.themeBlock}>
                <TouchableOpacity
                  style={styles.themeHeader}
                  onPress={() => selectAllFromTheme(theme)}
                >
                  <View style={[styles.themeIcon, { backgroundColor: `${data.color}20` }]}>
                    <Ionicons
                      name={theme === 'Urbanisme' ? 'map' : 'business'}
                      size={24}
                      color={data.color}
                    />
                  </View>
                  <View style={styles.themeInfo}>
                    <Text style={styles.themeName}>{theme}</Text>
                    <Text style={styles.themeCount}>
                      {selectedCount}/{themeSections.length} sections
                    </Text>
                  </View>
                  <View
                    style={[
                      styles.checkbox,
                      allSelected && { backgroundColor: data.color, borderColor: data.color },
                    ]}
                  >
                    {allSelected && (
                      <Ionicons name="checkmark" size={16} color="#FFFFFF" />
                    )}
                  </View>
                </TouchableOpacity>

                <View style={styles.sectionsList}>
                  {themeSections.map((section) => {
                    const isSelected = selectedSections.includes(section);
                    const cardCount = allFlashcards.filter(
                      (f) => f.section === section
                    ).length;

                    return (
                      <TouchableOpacity
                        key={section}
                        style={[
                          styles.sectionItem,
                          isSelected && styles.sectionItemSelected,
                        ]}
                        onPress={() => toggleSection(section)}
                      >
                        <View
                          style={[
                            styles.sectionCheckbox,
                            isSelected && {
                              backgroundColor: data.color,
                              borderColor: data.color,
                            },
                          ]}
                        >
                          {isSelected && (
                            <Ionicons name="checkmark" size={14} color="#FFFFFF" />
                          )}
                        </View>
                        <Text
                          style={[
                            styles.sectionName,
                            isSelected && styles.sectionNameSelected,
                          ]}
                        >
                          {section}
                        </Text>
                        <View style={styles.cardCountBadge}>
                          <Text style={styles.cardCountText}>{cardCount}</Text>
                        </View>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </View>
            );
          })}
        </ScrollView>

        <View style={styles.startButtonContainer}>
          <TouchableOpacity
            style={[
              styles.startButton,
              selectedSections.length === 0 && styles.startButtonDisabled,
            ]}
            onPress={startReview}
            disabled={selectedSections.length === 0}
          >
            <Ionicons name="play" size={24} color="#FFFFFF" />
            <Text style={styles.startButtonText}>
              Commencer ({totalSelected} cartes)
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  // Écran de révision
  if (!currentCard) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => setShowSelection(true)}>
            <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Flashcards</Text>
          <View style={{ width: 24 }} />
        </View>
        <View style={styles.emptyState}>
          <Ionicons name="albums-outline" size={64} color="#4B5563" />
          <Text style={styles.emptyText}>Aucune carte disponible</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => setShowSelection(true)}>
          <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitleSmall}>Révision</Text>
        <View style={styles.counterBadge}>
          <Text style={styles.counterText}>
            {currentIndex + 1} / {filteredCards.length}
          </Text>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Badges */}
        <View style={styles.badgesRow}>
          <View style={styles.ficheBadge}>
            <Ionicons name="bookmark" size={14} color="#6366F1" />
            <Text style={styles.ficheBadgeText}>{currentCard.section}</Text>
          </View>
          <View style={styles.ficheBadge}>
            <Ionicons name="document-text" size={14} color="#9CA3AF" />
            <Text style={[styles.ficheBadgeText, { color: '#9CA3AF' }]}>
              {currentCard.fiche}
            </Text>
          </View>
        </View>

        {/* Flashcard */}
        <TouchableOpacity
          style={styles.cardContainer}
          onPress={flipCard}
          activeOpacity={0.9}
        >
          <Animated.View style={[styles.card, styles.cardFront, frontAnimatedStyle]}>
            <Ionicons
              name="help-circle-outline"
              size={32}
              color="#6366F1"
              style={styles.cardIcon}
            />
            <Text style={styles.cardLabel}>Question</Text>
            <Text style={styles.cardText}>{currentCard.question}</Text>
            <Text style={styles.tapHint}>Tapez pour voir la réponse</Text>
          </Animated.View>

          <Animated.View style={[styles.card, styles.cardBack, backAnimatedStyle]}>
            <Ionicons
              name="bulb-outline"
              size={32}
              color="#10B981"
              style={styles.cardIcon}
            />
            <Text style={styles.cardLabelGreen}>Réponse</Text>
            <Text style={styles.cardText}>{currentCard.answer}</Text>
            <Text style={styles.tapHint}>Tapez pour voir la question</Text>
          </Animated.View>
        </TouchableOpacity>

        {/* Navigation */}
        <View style={styles.navigation}>
          <TouchableOpacity
            style={[
              styles.navButton,
              currentIndex === 0 && styles.navButtonDisabled,
            ]}
            onPress={prevCard}
            disabled={currentIndex === 0}
          >
            <Ionicons
              name="chevron-back"
              size={24}
              color={currentIndex === 0 ? '#4B5563' : '#FFFFFF'}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.changeSelectionBtn}
            onPress={() => setShowSelection(true)}
          >
            <Ionicons name="options" size={20} color="#6366F1" />
            <Text style={styles.changeSelectionText}>Modifier</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.navButton,
              currentIndex === filteredCards.length - 1 && styles.navButtonDisabled,
            ]}
            onPress={nextCard}
            disabled={currentIndex === filteredCards.length - 1}
          >
            <Ionicons
              name="chevron-forward"
              size={24}
              color={currentIndex === filteredCards.length - 1 ? '#4B5563' : '#FFFFFF'}
            />
          </TouchableOpacity>
        </View>

        {/* Feedback */}
        <View style={styles.feedbackContainer}>
          <Text style={styles.feedbackTitle}>Auto-évaluation</Text>
          <View style={styles.feedbackButtons}>
            <TouchableOpacity style={[styles.feedbackButton, styles.feedbackRed]}>
              <Ionicons name="close-circle" size={24} color="#EF4444" />
              <Text style={styles.feedbackText}>À revoir</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.feedbackButton, styles.feedbackYellow]}>
              <Ionicons name="help-circle" size={24} color="#F59E0B" />
              <Text style={styles.feedbackText}>Difficile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.feedbackButton, styles.feedbackGreen]}>
              <Ionicons name="checkmark-circle" size={24} color="#10B981" />
              <Text style={styles.feedbackText}>Maîtrisé</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111827',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#1F2937',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  headerTitleSmall: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  counterBadge: {
    backgroundColor: '#1F2937',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  counterText: {
    color: '#9CA3AF',
    fontSize: 14,
    fontWeight: '600',
  },
  selectionContent: {
    flex: 1,
    paddingHorizontal: 20,
  },
  selectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: 24,
    marginBottom: 8,
  },
  selectionSubtitle: {
    fontSize: 14,
    color: '#9CA3AF',
    marginBottom: 24,
  },
  themeBlock: {
    marginBottom: 24,
  },
  themeHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1F2937',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  themeIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  themeInfo: {
    flex: 1,
  },
  themeName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  themeCount: {
    fontSize: 12,
    color: '#9CA3AF',
    marginTop: 2,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#4B5563',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionsList: {
    gap: 8,
    paddingLeft: 16,
  },
  sectionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1F2937',
    padding: 14,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#374151',
  },
  sectionItemSelected: {
    borderColor: '#6366F1',
    backgroundColor: 'rgba(99, 102, 241, 0.1)',
  },
  sectionCheckbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#4B5563',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  sectionName: {
    flex: 1,
    fontSize: 14,
    color: '#D1D5DB',
  },
  sectionNameSelected: {
    color: '#FFFFFF',
    fontWeight: '500',
  },
  cardCountBadge: {
    backgroundColor: '#374151',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  cardCountText: {
    fontSize: 12,
    color: '#9CA3AF',
    fontWeight: '600',
  },
  startButtonContainer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#1F2937',
  },
  startButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6366F1',
    paddingVertical: 16,
    borderRadius: 12,
    gap: 10,
  },
  startButtonDisabled: {
    backgroundColor: '#374151',
  },
  startButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  content: {
    padding: 20,
    alignItems: 'center',
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    color: '#6B7280',
    fontSize: 16,
    marginTop: 16,
  },
  badgesRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 20,
  },
  ficheBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1F2937',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    gap: 6,
  },
  ficheBadgeText: {
    color: '#6366F1',
    fontSize: 12,
    fontWeight: '600',
  },
  cardContainer: {
    width: width - 40,
    height: 300,
    marginBottom: 24,
  },
  card: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 20,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardFront: {
    backgroundColor: '#1F2937',
    borderWidth: 2,
    borderColor: '#6366F1',
  },
  cardBack: {
    backgroundColor: '#1F2937',
    borderWidth: 2,
    borderColor: '#10B981',
  },
  cardIcon: {
    marginBottom: 12,
  },
  cardLabel: {
    fontSize: 14,
    color: '#6366F1',
    fontWeight: '600',
    marginBottom: 16,
  },
  cardLabelGreen: {
    fontSize: 14,
    color: '#10B981',
    fontWeight: '600',
    marginBottom: 16,
  },
  cardText: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
    lineHeight: 26,
  },
  tapHint: {
    position: 'absolute',
    bottom: 16,
    fontSize: 12,
    color: '#6B7280',
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 32,
  },
  navButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#1F2937',
    justifyContent: 'center',
    alignItems: 'center',
  },
  navButtonDisabled: {
    backgroundColor: '#111827',
    borderWidth: 1,
    borderColor: '#1F2937',
  },
  changeSelectionBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(99, 102, 241, 0.1)',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    gap: 6,
    borderWidth: 1,
    borderColor: '#6366F1',
  },
  changeSelectionText: {
    color: '#6366F1',
    fontSize: 14,
    fontWeight: '600',
  },
  feedbackContainer: {
    width: '100%',
  },
  feedbackTitle: {
    fontSize: 16,
    color: '#9CA3AF',
    textAlign: 'center',
    marginBottom: 16,
  },
  feedbackButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  feedbackButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 16,
    borderRadius: 12,
    gap: 6,
  },
  feedbackRed: {
    backgroundColor: 'rgba(239, 68, 68, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(239, 68, 68, 0.3)',
  },
  feedbackYellow: {
    backgroundColor: 'rgba(245, 158, 11, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(245, 158, 11, 0.3)',
  },
  feedbackGreen: {
    backgroundColor: 'rgba(16, 185, 129, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(16, 185, 129, 0.3)',
  },
  feedbackText: {
    fontSize: 12,
    color: '#D1D5DB',
    fontWeight: '600',
  },
});
