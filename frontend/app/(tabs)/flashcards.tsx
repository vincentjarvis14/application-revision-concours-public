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
  fiche: string;
}

// Flashcards basées sur le contenu réel du concours
const flashcardsData: Flashcard[] = [
  // Permis de construire
  {
    id: 1,
    question: "Qu'est-ce qu'un permis de construire ?",
    answer: "C'est un acte administratif individuel par lequel une autorité administrative autorise des travaux ou une construction, à condition que le projet respecte les règles et servitudes applicables au lieu de son implantation.",
    category: 'Urbanisme',
    fiche: 'Fiche 105',
  },
  {
    id: 2,
    question: 'Quelle est la durée de validité d\'un permis de construire ?',
    answer: '2 ans à compter de sa délivrance. Le permis devient caduc si les travaux ne sont pas entrepris dans ce délai ou sont interrompus pendant plus d\'un an. Une prorogation d\'1 an est possible.',
    category: 'Urbanisme',
    fiche: 'Fiche 105',
  },
  {
    id: 3,
    question: 'Quel est le délai d\'instruction d\'un permis de construire pour une maison individuelle ?',
    answer: '2 mois en droit commun. Ce délai peut être majoré d\'1 mois en secteur sauvegardé ou de 2 mois si consultation d\'une commission départementale/régionale.',
    category: 'Urbanisme',
    fiche: 'Fiche 105',
  },
  {
    id: 4,
    question: 'À partir de quelle surface de plancher créée un permis de construire est-il obligatoire ?',
    answer: 'Plus de 20 m² de surface de plancher ou d\'emprise au sol. Dans les zones urbaines d\'un PLU, ce seuil est porté à 40 m² (sauf si le total dépasse le seuil nécessitant un architecte).',
    category: 'Urbanisme',
    fiche: 'Fiche 105',
  },
  // Certificat d'urbanisme
  {
    id: 5,
    question: 'Quels sont les deux types de certificats d\'urbanisme ?',
    answer: '1) Certificat neutre (ou "a") : informe sur les règles applicables au terrain\n2) Certificat pré-opérationnel (ou "b") : indique si un projet précis peut être réalisé sur le terrain.',
    category: 'Urbanisme',
    fiche: 'Fiche 102',
  },
  {
    id: 6,
    question: 'Quelle est la durée de validité d\'un certificat d\'urbanisme pré-opérationnel ?',
    answer: '18 mois. Une prorogation par périodes d\'un an est possible si les règles, servitudes et taxes n\'ont pas changé.',
    category: 'Urbanisme',
    fiche: 'Fiche 102',
  },
  // SCOT
  {
    id: 7,
    question: 'Quels sont les 3 documents composant un SCOT ?',
    answer: '1) Le rapport de présentation (diagnostic, justifications)\n2) Le PADD (Projet d\'Aménagement et de Développement Durables)\n3) Le DOO (Document d\'Orientation et d\'Objectifs)',
    category: 'Urbanisme',
    fiche: 'Fiche 99',
  },
  {
    id: 8,
    question: 'Tous les combien un SCOT doit-il être analysé ?',
    answer: '6 ans maximum après son approbation, sa révision complète ou son maintien en vigueur. L\'EPCI procède alors à une analyse de son application.',
    category: 'Urbanisme',
    fiche: 'Fiche 99',
  },
  // Loi Montagne
  {
    id: 9,
    question: 'Quel est le principe fondamental d\'urbanisation en zone montagne ?',
    answer: 'L\'urbanisation doit être réalisée en continuité des bourgs, villages, hameaux ou groupes de constructions traditionnelles existants. Les constructions isolées sont interdites.',
    category: 'Urbanisme',
    fiche: 'Fiche 101',
  },
  // Loi Littoral
  {
    id: 10,
    question: 'Quelle est la largeur de la bande littorale inconstructible ?',
    answer: '100 mètres à compter de la limite haute du rivage, hors espaces urbanisés. Le PLU peut porter cette largeur au-delà de 100m pour des motifs de sensibilité des milieux ou d\'érosion.',
    category: 'Urbanisme',
    fiche: 'Fiche 100',
  },
  // Collectivités locales
  {
    id: 11,
    question: 'Quelles sont les grandes étapes de la décentralisation en France ?',
    answer: 'Acte I (1982-1983) : Lois Defferre\nActe II (2003-2004) : Révision constitutionnelle\nActe III (2010-2015) : Réforme territoriale (loi NOTRe, etc.)',
    category: 'Environnement Territorial',
    fiche: 'Fiche 3',
  },
  {
    id: 12,
    question: 'Qui délivre le permis de construire ?',
    answer: 'Le maire, au nom de la commune si elle dispose d\'un PLU approuvé, ou au nom de l\'État dans les autres cas.',
    category: 'Urbanisme',
    fiche: 'Fiche 105',
  },
];

export default function FlashcardsScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const rotation = useSharedValue(0);

  const categories = [...new Set(flashcardsData.map((f) => f.category))];
  
  const filteredCards = selectedCategory
    ? flashcardsData.filter((f) => f.category === selectedCategory)
    : flashcardsData;

  const currentCard = filteredCards[currentIndex];

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

  const selectCategory = (cat: string | null) => {
    setSelectedCategory(cat);
    setCurrentIndex(0);
    rotation.value = 0;
    setIsFlipped(false);
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

  if (!currentCard) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Flashcards</Text>
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
        <Text style={styles.headerTitle}>Flashcards</Text>
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
        {/* Filtres par catégorie */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categoriesScroll}
          contentContainerStyle={styles.categoriesContainer}
        >
          <TouchableOpacity
            style={[
              styles.categoryChip,
              !selectedCategory && styles.categoryChipActive,
            ]}
            onPress={() => selectCategory(null)}
          >
            <Text
              style={[
                styles.categoryChipText,
                !selectedCategory && styles.categoryChipTextActive,
              ]}
            >
              Toutes
            </Text>
          </TouchableOpacity>
          {categories.map((cat) => (
            <TouchableOpacity
              key={cat}
              style={[
                styles.categoryChip,
                selectedCategory === cat && styles.categoryChipActive,
              ]}
              onPress={() => selectCategory(cat)}
            >
              <Text
                style={[
                  styles.categoryChipText,
                  selectedCategory === cat && styles.categoryChipTextActive,
                ]}
              >
                {cat}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Fiche Badge */}
        <View style={styles.ficheBadgeContainer}>
          <View style={styles.ficheBadge}>
            <Ionicons name="document-text" size={14} color="#6366F1" />
            <Text style={styles.ficheBadgeText}>{currentCard.fiche}</Text>
          </View>
        </View>

        {/* Flashcard */}
        <TouchableOpacity
          style={styles.cardContainer}
          onPress={flipCard}
          activeOpacity={0.9}
        >
          {/* Front of card */}
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

          {/* Back of card */}
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
            <Text
              style={[
                styles.navButtonText,
                currentIndex === 0 && styles.navButtonTextDisabled,
              ]}
            >
              Précédent
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.navButton,
              currentIndex === filteredCards.length - 1 && styles.navButtonDisabled,
            ]}
            onPress={nextCard}
            disabled={currentIndex === filteredCards.length - 1}
          >
            <Text
              style={[
                styles.navButtonText,
                currentIndex === filteredCards.length - 1 && styles.navButtonTextDisabled,
              ]}
            >
              Suivant
            </Text>
            <Ionicons
              name="chevron-forward"
              size={24}
              color={currentIndex === filteredCards.length - 1 ? '#4B5563' : '#FFFFFF'}
            />
          </TouchableOpacity>
        </View>

        {/* Feedback buttons */}
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
  categoriesScroll: {
    marginBottom: 16,
    width: '100%',
  },
  categoriesContainer: {
    gap: 8,
    paddingRight: 20,
  },
  categoryChip: {
    backgroundColor: '#1F2937',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#374151',
  },
  categoryChipActive: {
    backgroundColor: '#6366F1',
    borderColor: '#6366F1',
  },
  categoryChipText: {
    color: '#9CA3AF',
    fontSize: 13,
    fontWeight: '500',
  },
  categoryChipTextActive: {
    color: '#FFFFFF',
  },
  ficheBadgeContainer: {
    marginBottom: 16,
  },
  ficheBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1F2937',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 16,
    gap: 6,
  },
  ficheBadgeText: {
    color: '#6366F1',
    fontSize: 13,
    fontWeight: '600',
  },
  cardContainer: {
    width: width - 40,
    height: 320,
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
    width: '100%',
    marginBottom: 32,
  },
  navButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1F2937',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 12,
    gap: 4,
  },
  navButtonDisabled: {
    backgroundColor: '#111827',
    borderWidth: 1,
    borderColor: '#1F2937',
  },
  navButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
  navButtonTextDisabled: {
    color: '#4B5563',
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
