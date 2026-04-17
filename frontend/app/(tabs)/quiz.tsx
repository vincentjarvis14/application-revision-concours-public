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
}

const quizData: Question[] = [
  {
    id: 1,
    question: 'Quel mot-clé déclare une variable constante en JavaScript?',
    options: ['var', 'let', 'const', 'define'],
    correctAnswer: 2,
  },
  {
    id: 2,
    question: 'Quel est le résultat de typeof null?',
    options: ['null', 'undefined', 'object', 'boolean'],
    correctAnswer: 2,
  },
  {
    id: 3,
    question: 'Quelle méthode ajoute un élément à la fin d\'un tableau?',
    options: ['push()', 'pop()', 'shift()', 'unshift()'],
    correctAnswer: 0,
  },
  {
    id: 4,
    question: "Qu'est-ce qu'une Promise en JavaScript?",
    options: [
      'Une fonction synchrone',
      'Un objet représentant une valeur future',
      'Une variable globale',
      'Une méthode de tableau',
    ],
    correctAnswer: 1,
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
      return selectedAnswer === index
        ? styles.optionSelected
        : styles.option;
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
      return selectedAnswer === index
        ? styles.optionTextSelected
        : styles.optionText;
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
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Quiz</Text>
        </View>

        <View style={styles.resultContainer}>
          <View style={styles.resultCard}>
            <Ionicons
              name={percentage >= 70 ? 'trophy' : 'refresh-circle'}
              size={80}
              color={percentage >= 70 ? '#F59E0B' : '#6366F1'}
            />
            <Text style={styles.resultTitle}>
              {percentage >= 70 ? 'Félicitations!' : 'Continuez à pratiquer!'}
            </Text>
            <Text style={styles.resultScore}>
              {score} / {quizData.length}
            </Text>
            <Text style={styles.resultPercentage}>{percentage}% correct</Text>

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
              <Text style={styles.restartButtonText}>Recommencer le quiz</Text>
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
        <Text style={styles.headerTitle}>Quiz</Text>
        <View style={styles.scoreBadge}>
          <Ionicons name="star" size={16} color="#F59E0B" />
          <Text style={styles.scoreText}>{score} pts</Text>
        </View>
      </View>

      <ScrollView
        style={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Progress */}
        <View style={styles.progressContainer}>
          <View style={styles.progressHeader}>
            <Text style={styles.progressLabel}>Question {currentQuestion + 1}/{quizData.length}</Text>
            <Text style={styles.progressPercent}>
              {Math.round(((currentQuestion + 1) / quizData.length) * 100)}%
            </Text>
          </View>
          <View style={styles.progressBar}>
            <View
              style={[
                styles.progressFill,
                {
                  width: `${((currentQuestion + 1) / quizData.length) * 100}%`,
                },
              ]}
            />
          </View>
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

        {/* Feedback */}
        {showResult && (
          <View
            style={[
              styles.feedbackCard,
              selectedAnswer === question.correctAnswer
                ? styles.feedbackCorrect
                : styles.feedbackWrong,
            ]}
          >
            <Ionicons
              name={
                selectedAnswer === question.correctAnswer
                  ? 'checkmark-circle'
                  : 'information-circle'
              }
              size={24}
              color={
                selectedAnswer === question.correctAnswer ? '#10B981' : '#F59E0B'
              }
            />
            <Text style={styles.feedbackText}>
              {selectedAnswer === question.correctAnswer
                ? 'Excellent ! Bonne réponse !'
                : `La bonne réponse était : ${question.options[question.correctAnswer]}`}
            </Text>
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
    marginBottom: 24,
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
    fontSize: 18,
    color: '#FFFFFF',
    textAlign: 'center',
    lineHeight: 28,
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
    fontSize: 16,
  },
  optionTextSelected: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 16,
  },
  optionTextCorrect: {
    flex: 1,
    color: '#10B981',
    fontSize: 16,
    fontWeight: '600',
  },
  optionTextWrong: {
    flex: 1,
    color: '#EF4444',
    fontSize: 16,
  },
  optionIcon: {
    marginLeft: 8,
  },
  feedbackCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
    marginBottom: 24,
    gap: 12,
  },
  feedbackCorrect: {
    backgroundColor: 'rgba(16, 185, 129, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(16, 185, 129, 0.3)',
  },
  feedbackWrong: {
    backgroundColor: 'rgba(245, 158, 11, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(245, 158, 11, 0.3)',
  },
  feedbackText: {
    flex: 1,
    color: '#D1D5DB',
    fontSize: 14,
    lineHeight: 20,
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
