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
}

const flashcardsData: Flashcard[] = [
  {
    id: 1,
    question: 'Quelle est la différence entre let et const?',
    answer:
      'let permet de réassigner une valeur, const crée une constante qui ne peut pas être réassignée.',
    category: 'JavaScript',
  },
  {
    id: 2,
    question: "Qu'est-ce qu'une fonction fléchée?",
    answer:
      "Une syntaxe concise pour écrire des fonctions: (params) => expression. Elle n'a pas son propre 'this'.",
    category: 'JavaScript',
  },
  {
    id: 3,
    question: 'Expliquez le concept de closure.',
    answer:
      'Une closure est une fonction qui se souvient de son environnement lexical même après que la fonction externe a terminé.',
    category: 'JavaScript',
  },
  {
    id: 4,
    question: "Qu'est-ce que le DOM?",
    answer:
      'Document Object Model - une interface qui représente la structure HTML comme un arbre d\'objets manipulables.',
    category: 'Web',
  },
];

export default function FlashcardsScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const rotation = useSharedValue(0);

  const currentCard = flashcardsData[currentIndex];

  const flipCard = () => {
    const newValue = isFlipped ? 0 : 180;
    rotation.value = withTiming(newValue, { duration: 400 });
    setIsFlipped(!isFlipped);
  };

  const nextCard = () => {
    if (currentIndex < flashcardsData.length - 1) {
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

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Flashcards</Text>
        <View style={styles.counterBadge}>
          <Text style={styles.counterText}>
            {currentIndex + 1} / {flashcardsData.length}
          </Text>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Category Badge */}
        <View style={styles.categoryContainer}>
          <View style={styles.categoryBadge}>
            <Ionicons name="bookmark" size={14} color="#6366F1" />
            <Text style={styles.categoryText}>{currentCard.category}</Text>
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
              currentIndex === flashcardsData.length - 1 &&
                styles.navButtonDisabled,
            ]}
            onPress={nextCard}
            disabled={currentIndex === flashcardsData.length - 1}
          >
            <Text
              style={[
                styles.navButtonText,
                currentIndex === flashcardsData.length - 1 &&
                  styles.navButtonTextDisabled,
              ]}
            >
              Suivant
            </Text>
            <Ionicons
              name="chevron-forward"
              size={24}
              color={
                currentIndex === flashcardsData.length - 1
                  ? '#4B5563'
                  : '#FFFFFF'
              }
            />
          </TouchableOpacity>
        </View>

        {/* Feedback buttons */}
        <View style={styles.feedbackContainer}>
          <Text style={styles.feedbackTitle}>Comment s'est passé ?</Text>
          <View style={styles.feedbackButtons}>
            <TouchableOpacity style={[styles.feedbackButton, styles.feedbackRed]}>
              <Ionicons name="close-circle" size={24} color="#EF4444" />
              <Text style={styles.feedbackText}>À revoir</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.feedbackButton, styles.feedbackYellow]}
            >
              <Ionicons name="help-circle" size={24} color="#F59E0B" />
              <Text style={styles.feedbackText}>Difficile</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.feedbackButton, styles.feedbackGreen]}
            >
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
  categoryContainer: {
    marginBottom: 20,
  },
  categoryBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1F2937',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    gap: 6,
  },
  categoryText: {
    color: '#6366F1',
    fontSize: 14,
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
    fontSize: 18,
    color: '#FFFFFF',
    textAlign: 'center',
    lineHeight: 28,
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
