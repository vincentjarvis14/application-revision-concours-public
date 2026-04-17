import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  fiche: string;
}

// Quiz basé sur le contenu réel du concours d'attaché territorial
const quizData: Question[] = [
  {
    id: 1,
    question: 'Quelle est la durée de validité d\'un permis de construire ?',
    options: ['1 an', '2 ans', '3 ans', '5 ans'],
    correctAnswer: 1,
    explanation: 'Le permis de construire a une validité de 2 ans à compter de sa délivrance. Il devient caduc si les travaux ne sont pas entrepris dans ce délai.',
    fiche: 'Fiche 105 - Le permis de construire',
  },
  {
    id: 2,
    question: 'Quel est le délai d\'instruction d\'un permis de construire pour une maison individuelle ?',
    options: ['1 mois', '2 mois', '3 mois', '4 mois'],
    correctAnswer: 1,
    explanation: 'Le délai d\'instruction de droit commun est de 2 mois pour une maison individuelle. Ce délai peut être majoré dans certains cas (secteur sauvegardé, consultation de commissions...).',
    fiche: 'Fiche 105 - Le permis de construire',
  },
  {
    id: 3,
    question: 'À partir de quelle surface de plancher créée un permis de construire est-il obligatoire (hors zone urbaine PLU) ?',
    options: ['10 m²', '20 m²', '40 m²', '100 m²'],
    correctAnswer: 1,
    explanation: 'Un permis de construire est obligatoire pour toute création de surface de plancher ou emprise au sol supérieure à 20 m². En zone urbaine d\'un PLU, ce seuil est porté à 40 m².',
    fiche: 'Fiche 105 - Le permis de construire',
  },
  {
    id: 4,
    question: 'Quelle est la durée de validité d\'un certificat d\'urbanisme pré-opérationnel ?',
    options: ['6 mois', '12 mois', '18 mois', '24 mois'],
    correctAnswer: 2,
    explanation: 'Le certificat d\'urbanisme pré-opérationnel (type b) a une validité de 18 mois. Il peut être prorogé par périodes d\'un an.',
    fiche: 'Fiche 102 - Le certificat d\'urbanisme',
  },
  {
    id: 5,
    question: 'Quels sont les trois documents composant un SCOT ?',
    options: [
      'PLU, carte communale, RNU',
      'Rapport de présentation, PADD, DOO',
      'Enquête publique, avis, décision',
      'Diagnostic, objectifs, règlement',
    ],
    correctAnswer: 1,
    explanation: 'Le SCOT comprend : le Rapport de présentation, le PADD (Projet d\'Aménagement et de Développement Durables) et le DOO (Document d\'Orientation et d\'Objectifs).',
    fiche: 'Fiche 99 - Le SCOT',
  },
  {
    id: 6,
    question: 'Quelle est la largeur de la bande littorale inconstructible selon la loi Littoral ?',
    options: ['50 mètres', '100 mètres', '200 mètres', '300 mètres'],
    correctAnswer: 1,
    explanation: 'La bande littorale inconstructible est de 100 mètres à compter de la limite haute du rivage, hors espaces urbanisés. Le PLU peut élargir cette bande.',
    fiche: 'Fiche 100 - La loi Littoral',
  },
  {
    id: 7,
    question: 'Quel est le principe fondamental d\'urbanisation en zone montagne ?',
    options: [
      'Construction libre partout',
      'Urbanisation en continuité des bourgs existants',
      'Interdiction totale de construire',
      'Construction uniquement en vallée',
    ],
    correctAnswer: 1,
    explanation: 'En zone montagne, l\'urbanisation doit être réalisée en continuité des bourgs, villages, hameaux ou groupes de constructions traditionnelles existants.',
    fiche: 'Fiche 101 - La loi Montagne',
  },
  {
    id: 8,
    question: 'Tous les combien un SCOT doit-il faire l\'objet d\'une analyse de ses résultats ?',
    options: ['3 ans', '6 ans', '9 ans', '12 ans'],
    correctAnswer: 1,
    explanation: 'Le SCOT doit faire l\'objet d\'une analyse de ses résultats au maximum 6 ans après son approbation, sa révision complète ou son maintien en vigueur.',
    fiche: 'Fiche 99 - Le SCOT',
  },
  {
    id: 9,
    question: 'Quel délai le maire dispose-t-il pour contester la conformité des travaux après réception de la déclaration d\'achèvement ?',
    options: ['1 mois', '2 mois', '3 mois', '6 mois'],
    correctAnswer: 2,
    explanation: 'Le maire ou le préfet dispose d\'un délai de 3 mois à compter de la réception de la déclaration d\'achèvement pour contester la conformité des travaux.',
    fiche: 'Fiche 105 - Le permis de construire',
  },
  {
    id: 10,
    question: 'Quelle est la durée maximale d\'un sursis à statuer opposé à une demande de permis de construire ?',
    options: ['6 mois', '1 an', '2 ans', '3 ans'],
    correctAnswer: 2,
    explanation: 'Le sursis à statuer a une validité maximale de 2 ans. Après expiration, le demandeur a 2 mois pour confirmer sa demande, et l\'autorité doit se prononcer définitivement.',
    fiche: 'Fiche 105 - Le permis de construire',
  },
];

export default function QuizScreen() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const question = quizData[currentQuestion];

  const handleAnswer = (answerIndex: number) => {
    if (showResult) return;
    setSelectedAnswer(answerIndex);
    setShowResult(true);

    if (answerIndex === question.correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setQuizCompleted(false);
  };

  const getOptionStyle = (index: number) => {
    if (!showResult) {
      return selectedAnswer === index ? styles.optionSelected : styles.option;
    }
    if (index === question.correctAnswer) {
      return styles.optionCorrect;
    }
    if (index === selectedAnswer && index !== question.correctAnswer) {
      return styles.optionWrong;
    }
    return styles.option;
  };

  const getOptionTextStyle = (index: number) => {
    if (!showResult) {
      return selectedAnswer === index ? styles.optionTextSelected : styles.optionText;
    }
    if (index === question.correctAnswer) {
      return styles.optionTextCorrect;
    }
    if (index === selectedAnswer && index !== question.correctAnswer) {
      return styles.optionTextWrong;
    }
    return styles.optionText;
  };

  if (quizCompleted) {
    const percentage = Math.round((score / quizData.length) * 100);
    const getMessage = () => {
      if (percentage >= 80) return { text: 'Excellent !', icon: 'trophy' as const };
      if (percentage >= 60) return { text: 'Bien joué !', icon: 'thumbs-up' as const };
      if (percentage >= 40) return { text: 'Continuez !', icon: 'fitness' as const };
      return { text: 'À réviser !', icon: 'book' as const };
    };
    const message = getMessage();

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Quiz Urbanisme</Text>
        </View>

        <View style={styles.resultContainer}>
          <View style={styles.resultCard}>
            <Ionicons
              name={message.icon}
              size={80}
              color={percentage >= 60 ? '#F59E0B' : '#6366F1'}
            />
            <Text style={styles.resultTitle}>{message.text}</Text>
            <Text style={styles.resultScore}>
              {score} / {quizData.length}
            </Text>
            <Text style={styles.resultPercentage}>{percentage}% de réussite</Text>

            <View style={styles.resultStats}>
              <View style={styles.resultStat}>
                <Ionicons name="checkmark-circle" size={24} color="#10B981" />
                <Text style={styles.resultStatText}>{score} bonnes réponses</Text>
              </View>
              <View style={styles.resultStat}>
                <Ionicons name="close-circle" size={24} color="#EF4444" />
                <Text style={styles.resultStatText}>
                  {quizData.length - score} erreurs
                </Text>
              </View>
            </View>

            <TouchableOpacity style={styles.restartButton} onPress={restartQuiz}>
              <Ionicons name="refresh" size={20} color="#FFFFFF" />
              <Text style={styles.restartButtonText}>Recommencer</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Quiz Urbanisme</Text>
        <View style={styles.scoreBadge}>
          <Ionicons name="star" size={16} color="#F59E0B" />
          <Text style={styles.scoreText}>{score} pts</Text>
        </View>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Progress */}
        <View style={styles.progressContainer}>
          <View style={styles.progressHeader}>
            <Text style={styles.progressLabel}>
              Question {currentQuestion + 1}/{quizData.length}
            </Text>
            <Text style={styles.progressPercent}>
              {Math.round(((currentQuestion + 1) / quizData.length) * 100)}%
            </Text>
          </View>
          <View style={styles.progressBar}>
            <View
              style={[
                styles.progressFill,
                { width: `${((currentQuestion + 1) / quizData.length) * 100}%` },
              ]}
            />
          </View>
        </View>

        {/* Fiche reference */}
        <View style={styles.ficheRefContainer}>
          <Ionicons name="document-text" size={14} color="#9CA3AF" />
          <Text style={styles.ficheRefText}>{question.fiche}</Text>
        </View>

        {/* Question Card */}
        <View style={styles.questionCard}>
          <View style={styles.questionIcon}>
            <Ionicons name="help" size={24} color="#6366F1" />
          </View>
          <Text style={styles.questionText}>{question.question}</Text>
        </View>

        {/* Options */}
        <View style={styles.optionsContainer}>
          {question.options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={getOptionStyle(index)}
              onPress={() => handleAnswer(index)}
              disabled={showResult}
            >
              <View style={styles.optionLetter}>
                <Text style={styles.optionLetterText}>
                  {String.fromCharCode(65 + index)}
                </Text>
              </View>
              <Text style={getOptionTextStyle(index)}>{option}</Text>
              {showResult && index === question.correctAnswer && (
                <Ionicons
                  name="checkmark-circle"
                  size={24}
                  color="#10B981"
                  style={styles.optionIcon}
                />
              )}
              {showResult &&
                index === selectedAnswer &&
                index !== question.correctAnswer && (
                  <Ionicons
                    name="close-circle"
                    size={24}
                    color="#EF4444"
                    style={styles.optionIcon}
                  />
                )}
            </TouchableOpacity>
          ))}
        </View>

        {/* Explanation */}
        {showResult && (
          <View style={styles.explanationCard}>
            <View style={styles.explanationHeader}>
              <Ionicons name="information-circle" size={20} color="#6366F1" />
              <Text style={styles.explanationTitle}>Explication</Text>
            </View>
            <Text style={styles.explanationText}>{question.explanation}</Text>
          </View>
        )}

        {/* Next Button */}
        {showResult && (
          <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
            <Text style={styles.nextButtonText}>
              {currentQuestion < quizData.length - 1
                ? 'Question suivante'
                : 'Voir les résultats'}
            </Text>
            <Ionicons name="arrow-forward" size={20} color="#FFFFFF" />
          </TouchableOpacity>
        )}
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
  scoreBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1F2937',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    gap: 4,
  },
  scoreText: {
    color: '#F59E0B',
    fontSize: 14,
    fontWeight: '600',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  progressContainer: {
    marginBottom: 16,
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  progressLabel: {
    color: '#9CA3AF',
    fontSize: 14,
  },
  progressPercent: {
    color: '#6366F1',
    fontSize: 14,
    fontWeight: '600',
  },
  progressBar: {
    height: 6,
    backgroundColor: '#1F2937',
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#6366F1',
    borderRadius: 3,
  },
  ficheRefContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 16,
  },
  ficheRefText: {
    color: '#9CA3AF',
    fontSize: 12,
  },
  questionCard: {
    backgroundColor: '#1F2937',
    borderRadius: 16,
    padding: 24,
    marginBottom: 24,
    alignItems: 'center',
  },
  questionIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(99, 102, 241, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  questionText: {
    fontSize: 17,
    color: '#FFFFFF',
    textAlign: 'center',
    lineHeight: 26,
  },
  optionsContainer: {
    gap: 12,
    marginBottom: 24,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1F2937',
    padding: 16,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#374151',
  },
  optionSelected: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1F2937',
    padding: 16,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#6366F1',
  },
  optionCorrect: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(16, 185, 129, 0.1)',
    padding: 16,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#10B981',
  },
  optionWrong: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(239, 68, 68, 0.1)',
    padding: 16,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#EF4444',
  },
  optionLetter: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#374151',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  optionLetterText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
  optionText: {
    flex: 1,
    color: '#D1D5DB',
    fontSize: 15,
  },
  optionTextSelected: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 15,
  },
  optionTextCorrect: {
    flex: 1,
    color: '#10B981',
    fontSize: 15,
    fontWeight: '600',
  },
  optionTextWrong: {
    flex: 1,
    color: '#EF4444',
    fontSize: 15,
  },
  optionIcon: {
    marginLeft: 8,
  },
  explanationCard: {
    backgroundColor: 'rgba(99, 102, 241, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(99, 102, 241, 0.3)',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
  },
  explanationHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  explanationTitle: {
    color: '#6366F1',
    fontSize: 14,
    fontWeight: '600',
  },
  explanationText: {
    color: '#D1D5DB',
    fontSize: 14,
    lineHeight: 22,
  },
  nextButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6366F1',
    paddingVertical: 16,
    borderRadius: 12,
    gap: 8,
    marginBottom: 24,
  },
  nextButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  resultContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  resultCard: {
    backgroundColor: '#1F2937',
    borderRadius: 24,
    padding: 32,
    alignItems: 'center',
    width: '100%',
  },
  resultTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: 16,
    marginBottom: 8,
  },
  resultScore: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#6366F1',
  },
  resultPercentage: {
    fontSize: 18,
    color: '#9CA3AF',
    marginBottom: 24,
  },
  resultStats: {
    width: '100%',
    gap: 12,
    marginBottom: 24,
  },
  resultStat: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  resultStatText: {
    color: '#D1D5DB',
    fontSize: 16,
  },
  restartButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#6366F1',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
    gap: 8,
  },
  restartButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
