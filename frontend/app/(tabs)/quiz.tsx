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
  section: string;
  fiche: string;
}

// Toutes les questions organisées par section
const allQuestions: Question[] = [
  // Permis de construire
  {
    id: 1,
    question: 'Quelle est la durée de validité d\'un permis de construire ?',
    options: ['1 an', '2 ans', '3 ans', '5 ans'],
    correctAnswer: 1,
    explanation: 'Le permis de construire a une validité de 2 ans à compter de sa délivrance. Il devient caduc si les travaux ne sont pas entrepris dans ce délai.',
    section: 'Permis de construire',
    fiche: 'Fiche 105',
  },
  {
    id: 2,
    question: 'Quel est le délai d\'instruction d\'un permis de construire pour une maison individuelle ?',
    options: ['1 mois', '2 mois', '3 mois', '4 mois'],
    correctAnswer: 1,
    explanation: 'Le délai d\'instruction de droit commun est de 2 mois pour une maison individuelle.',
    section: 'Permis de construire',
    fiche: 'Fiche 105',
  },
  {
    id: 3,
    question: 'À partir de quelle surface un permis de construire est-il obligatoire (hors zone urbaine PLU) ?',
    options: ['10 m²', '20 m²', '40 m²', '100 m²'],
    correctAnswer: 1,
    explanation: 'Un permis est obligatoire pour toute création de surface > 20 m². En zone urbaine PLU, ce seuil est de 40 m².',
    section: 'Permis de construire',
    fiche: 'Fiche 105',
  },
  {
    id: 4,
    question: 'Quel délai le maire a-t-il pour contester la conformité des travaux après réception de la DAACT ?',
    options: ['1 mois', '2 mois', '3 mois', '6 mois'],
    correctAnswer: 2,
    explanation: 'Le maire dispose de 3 mois à compter de la réception de la déclaration d\'achèvement pour contester la conformité.',
    section: 'Permis de construire',
    fiche: 'Fiche 105',
  },
  {
    id: 5,
    question: 'Quelle est la durée maximale d\'un sursis à statuer ?',
    options: ['6 mois', '1 an', '2 ans', '3 ans'],
    correctAnswer: 2,
    explanation: 'Le sursis à statuer a une validité maximale de 2 ans. Après expiration, le demandeur a 2 mois pour confirmer sa demande.',
    section: 'Permis de construire',
    fiche: 'Fiche 105',
  },
  // Certificat d'urbanisme
  {
    id: 6,
    question: 'Quelle est la durée de validité d\'un certificat d\'urbanisme pré-opérationnel ?',
    options: ['6 mois', '12 mois', '18 mois', '24 mois'],
    correctAnswer: 2,
    explanation: 'Le certificat d\'urbanisme pré-opérationnel (type b) a une validité de 18 mois.',
    section: 'Certificat d\'urbanisme',
    fiche: 'Fiche 102',
  },
  {
    id: 7,
    question: 'Quel est le délai d\'instruction d\'un certificat d\'urbanisme neutre ?',
    options: ['15 jours', '1 mois', '2 mois', '3 mois'],
    correctAnswer: 1,
    explanation: 'Le délai d\'instruction d\'un certificat d\'urbanisme neutre (type a) est de 1 mois.',
    section: 'Certificat d\'urbanisme',
    fiche: 'Fiche 102',
  },
  // SCOT
  {
    id: 8,
    question: 'Quels sont les trois documents composant un SCOT ?',
    options: [
      'PLU, carte communale, RNU',
      'Rapport de présentation, PADD, DOO',
      'Enquête publique, avis, décision',
      'Diagnostic, objectifs, règlement',
    ],
    correctAnswer: 1,
    explanation: 'Le SCOT comprend : le Rapport de présentation, le PADD et le DOO.',
    section: 'SCOT',
    fiche: 'Fiche 99',
  },
  {
    id: 9,
    question: 'Tous les combien un SCOT doit-il faire l\'objet d\'une analyse ?',
    options: ['3 ans', '6 ans', '9 ans', '12 ans'],
    correctAnswer: 1,
    explanation: 'Le SCOT doit faire l\'objet d\'une analyse au maximum 6 ans après son approbation.',
    section: 'SCOT',
    fiche: 'Fiche 99',
  },
  // Loi Littoral
  {
    id: 10,
    question: 'Quelle est la largeur de la bande littorale inconstructible ?',
    options: ['50 mètres', '100 mètres', '200 mètres', '300 mètres'],
    correctAnswer: 1,
    explanation: 'La bande littorale inconstructible est de 100 mètres à compter de la limite haute du rivage.',
    section: 'Loi Littoral',
    fiche: 'Fiche 100',
  },
  {
    id: 11,
    question: 'À partir de quelle taille un plan d\'eau intérieur est-il soumis à la loi Littoral ?',
    options: ['100 ha', '500 ha', '1000 ha', '2000 ha'],
    correctAnswer: 2,
    explanation: 'La loi Littoral s\'applique aux plans d\'eau intérieurs > 1000 hectares.',
    section: 'Loi Littoral',
    fiche: 'Fiche 100',
  },
  // Loi Montagne
  {
    id: 12,
    question: 'Quel est le principe fondamental d\'urbanisation en zone montagne ?',
    options: [
      'Construction libre partout',
      'Urbanisation en continuité des bourgs existants',
      'Interdiction totale de construire',
      'Construction uniquement en vallée',
    ],
    correctAnswer: 1,
    explanation: 'En zone montagne, l\'urbanisation doit être réalisée en continuité des bourgs, villages, hameaux existants.',
    section: 'Loi Montagne',
    fiche: 'Fiche 101',
  },
  {
    id: 13,
    question: 'Quelle est la largeur de la bande inconstructible autour des plans d\'eau en zone montagne ?',
    options: ['100 mètres', '200 mètres', '300 mètres', '500 mètres'],
    correctAnswer: 2,
    explanation: '300 mètres à compter de la rive des plans d\'eau naturels ou artificiels.',
    section: 'Loi Montagne',
    fiche: 'Fiche 101',
  },
  // Collectivités locales
  {
    id: 14,
    question: 'Quelle est la durée du mandat du maire ?',
    options: ['4 ans', '5 ans', '6 ans', '7 ans'],
    correctAnswer: 2,
    explanation: '6 ans, comme les conseillers municipaux.',
    section: 'Collectivités locales',
    fiche: 'Fiche 14',
  },
  {
    id: 15,
    question: 'Quelles sont les trois catégories de collectivités territoriales ?',
    options: [
      'État, régions, départements',
      'Communes, départements, régions',
      'EPCI, communes, métropoles',
      'Cantons, arrondissements, préfectures',
    ],
    correctAnswer: 1,
    explanation: 'Les communes, les départements et les régions sont les trois catégories de collectivités territoriales.',
    section: 'Collectivités locales',
    fiche: 'Fiche 5',
  },
  // Finances publiques
  {
    id: 16,
    question: 'Quels sont les 5 grands principes budgétaires ?',
    options: [
      'Liberté, égalité, fraternité, solidarité, subsidiarité',
      'Annualité, unité, universalité, spécialité, équilibre réel',
      'Transparence, efficacité, efficience, économie, éthique',
      'Légalité, proportionnalité, nécessité, adaptation, continuité',
    ],
    correctAnswer: 1,
    explanation: 'Les 5 principes sont : annualité, unité, universalité, spécialité et équilibre réel.',
    section: 'Finances publiques',
    fiche: 'Fiche 39',
  },
  // Fonction publique
  {
    id: 17,
    question: 'Quel est le principal mode d\'accès à la fonction publique territoriale ?',
    options: ['L\'entretien', 'Le concours', 'La cooptation', 'L\'élection'],
    correctAnswer: 1,
    explanation: 'Le concours est la voie principale d\'accès à la fonction publique territoriale.',
    section: 'Fonction publique',
    fiche: 'Fiche 62',
  },
  {
    id: 18,
    question: 'Quelle position permet à un fonctionnaire de travailler dans une autre administration ?',
    options: ['La disponibilité', 'Le détachement', 'La mise à disposition', 'Le congé parental'],
    correctAnswer: 1,
    explanation: 'Le détachement permet d\'exercer dans une autre administration tout en conservant ses droits à l\'avancement.',
    section: 'Fonction publique',
    fiche: 'Fiche 63',
  },
  // Institutions françaises
  {
    id: 19,
    question: 'Quelle loi a lancé l\'Acte I de la décentralisation ?',
    options: ['Loi Defferre (1982)', 'Loi NOTRe (2015)', 'Loi MAPTAM (2014)', 'Loi ATR (1992)'],
    correctAnswer: 0,
    explanation: 'Les lois Defferre de 1982-1983 ont lancé l\'Acte I de la décentralisation.',
    section: 'Institutions françaises',
    fiche: 'Fiche 3',
  },
  {
    id: 20,
    question: 'Qui exerce le contrôle de légalité sur les actes des collectivités ?',
    options: ['Le tribunal administratif', 'Le préfet', 'La chambre régionale des comptes', 'Le Conseil d\'État'],
    correctAnswer: 1,
    explanation: 'Le préfet exerce le contrôle de légalité a posteriori sur les actes des collectivités.',
    section: 'Institutions françaises',
    fiche: 'Fiche 3',
  },
];

// Structure des sections pour la sélection
const sectionsStructure = {
  'Urbanisme': {
    color: '#10B981',
    sections: ['Permis de construire', 'Certificat d\'urbanisme', 'SCOT', 'Loi Montagne', 'Loi Littoral'],
  },
  'Environnement Territorial': {
    color: '#6366F1',
    sections: ['Institutions françaises', 'Collectivités locales', 'Finances publiques', 'Fonction publique'],
  },
};

export default function QuizScreen() {
  const [showSelection, setShowSelection] = useState(true);
  const [selectedSections, setSelectedSections] = useState<string[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  // Filtrer et mélanger les questions
  const filteredQuestions = selectedSections.length > 0
    ? allQuestions.filter((q) => selectedSections.includes(q.section))
    : [];

  const question = filteredQuestions[currentQuestion];

  const toggleSection = (section: string) => {
    setSelectedSections((prev) =>
      prev.includes(section)
        ? prev.filter((s) => s !== section)
        : [...prev, section]
    );
  };

  const selectAllFromTheme = (theme: string) => {
    const themeSections = sectionsStructure[theme as keyof typeof sectionsStructure].sections;
    const allSelected = themeSections.every((s) => selectedSections.includes(s));
    if (allSelected) {
      setSelectedSections((prev) => prev.filter((s) => !themeSections.includes(s)));
    } else {
      setSelectedSections((prev) => [...new Set([...prev, ...themeSections])]);
    }
  };

  const startQuiz = () => {
    if (selectedSections.length > 0) {
      setCurrentQuestion(0);
      setSelectedAnswer(null);
      setShowResult(false);
      setScore(0);
      setQuizCompleted(false);
      setShowSelection(false);
    }
  };

  const handleAnswer = (answerIndex: number) => {
    if (showResult) return;
    setSelectedAnswer(answerIndex);
    setShowResult(true);
    if (answerIndex === question.correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < filteredQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const restartQuiz = () => {
    setShowSelection(true);
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

  // Écran de sélection
  if (showSelection) {
    const totalSelected = filteredQuestions.length;

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Quiz</Text>
          <View style={styles.counterBadge}>
            <Text style={styles.counterText}>{totalSelected} questions</Text>
          </View>
        </View>

        <ScrollView style={styles.selectionContent} showsVerticalScrollIndicator={false}>
          <Text style={styles.selectionTitle}>Configurez votre quiz</Text>
          <Text style={styles.selectionSubtitle}>
            Sélectionnez les sujets sur lesquels vous voulez être interrogé
          </Text>

          {Object.entries(sectionsStructure).map(([theme, data]) => {
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
                    const questionCount = allQuestions.filter(
                      (q) => q.section === section
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
                        <View style={styles.questionCountBadge}>
                          <Ionicons name="help-circle" size={14} color="#9CA3AF" />
                          <Text style={styles.questionCountText}>{questionCount}</Text>
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
            onPress={startQuiz}
            disabled={selectedSections.length === 0}
          >
            <Ionicons name="play" size={24} color="#FFFFFF" />
            <Text style={styles.startButtonText}>
              Lancer le quiz ({totalSelected} questions)
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  // Écran de résultats
  if (quizCompleted) {
    const percentage = Math.round((score / filteredQuestions.length) * 100);
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
          <Text style={styles.headerTitle}>Résultats</Text>
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
              {score} / {filteredQuestions.length}
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
                  {filteredQuestions.length - score} erreurs
                </Text>
              </View>
            </View>

            <View style={styles.resultButtons}>
              <TouchableOpacity style={styles.restartButton} onPress={restartQuiz}>
                <Ionicons name="options" size={20} color="#FFFFFF" />
                <Text style={styles.restartButtonText}>Nouveau quiz</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.retryButton}
                onPress={() => {
                  setCurrentQuestion(0);
                  setSelectedAnswer(null);
                  setShowResult(false);
                  setScore(0);
                  setQuizCompleted(false);
                }}
              >
                <Ionicons name="refresh" size={20} color="#6366F1" />
                <Text style={styles.retryButtonText}>Réessayer</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }

  // Écran de quiz
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => setShowSelection(true)}>
          <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitleSmall}>Quiz</Text>
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
              Question {currentQuestion + 1}/{filteredQuestions.length}
            </Text>
            <Text style={styles.progressPercent}>
              {Math.round(((currentQuestion + 1) / filteredQuestions.length) * 100)}%
            </Text>
          </View>
          <View style={styles.progressBar}>
            <View
              style={[
                styles.progressFill,
                { width: `${((currentQuestion + 1) / filteredQuestions.length) * 100}%` },
              ]}
            />
          </View>
        </View>

        {/* Section badge */}
        <View style={styles.sectionBadgeRow}>
          <View style={styles.sectionBadge}>
            <Ionicons name="bookmark" size={14} color="#6366F1" />
            <Text style={styles.sectionBadgeText}>{question.section}</Text>
          </View>
          <View style={styles.ficheBadge}>
            <Text style={styles.ficheBadgeText}>{question.fiche}</Text>
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
                <Ionicons name="checkmark-circle" size={24} color="#10B981" />
              )}
              {showResult && index === selectedAnswer && index !== question.correctAnswer && (
                <Ionicons name="close-circle" size={24} color="#EF4444" />
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
              {currentQuestion < filteredQuestions.length - 1
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
  questionCountBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#374151',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    gap: 4,
  },
  questionCountText: {
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
  sectionBadgeRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 16,
  },
  sectionBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(99, 102, 241, 0.1)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    gap: 6,
    borderWidth: 1,
    borderColor: 'rgba(99, 102, 241, 0.3)',
  },
  sectionBadgeText: {
    color: '#6366F1',
    fontSize: 12,
    fontWeight: '600',
  },
  ficheBadge: {
    backgroundColor: '#1F2937',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  ficheBadgeText: {
    color: '#9CA3AF',
    fontSize: 12,
    fontWeight: '600',
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
  resultButtons: {
    width: '100%',
    gap: 12,
  },
  restartButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6366F1',
    paddingVertical: 14,
    borderRadius: 12,
    gap: 8,
  },
  restartButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  retryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    paddingVertical: 14,
    borderRadius: 12,
    gap: 8,
    borderWidth: 2,
    borderColor: '#6366F1',
  },
  retryButtonText: {
    color: '#6366F1',
    fontSize: 16,
    fontWeight: '600',
  },
});
