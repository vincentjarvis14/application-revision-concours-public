import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
  // Données de démonstration pour la leçon actuelle
  const currentLesson = {
    title: 'Introduction à JavaScript',
    chapter: 'Chapitre 3 - Variables et Types',
    progress: 65,
    description:
      'Apprenez les concepts fondamentaux des variables, types de données et opérateurs en JavaScript.',
    topics: [
      'Variables: let, const, var',
      'Types primitifs',
      'Objets et tableaux',
      'Opérateurs arithmétiques',
    ],
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Bonjour!</Text>
          <Text style={styles.headerTitle}>RevisionApp</Text>
        </View>
        <TouchableOpacity style={styles.profileButton}>
          <Ionicons name="person-circle-outline" size={40} color="#6366F1" />
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Section Leçon Actuelle */}
        <View style={styles.sectionHeader}>
          <Ionicons name="book" size={24} color="#6366F1" />
          <Text style={styles.sectionTitle}>Leçon Actuelle</Text>
        </View>

        <View style={styles.lessonCard}>
          <View style={styles.lessonHeader}>
            <View style={styles.lessonBadge}>
              <Text style={styles.lessonBadgeText}>En cours</Text>
            </View>
          </View>

          <Text style={styles.lessonTitle}>{currentLesson.title}</Text>
          <Text style={styles.lessonChapter}>{currentLesson.chapter}</Text>

          {/* Barre de progression */}
          <View style={styles.progressContainer}>
            <View style={styles.progressBar}>
              <View
                style={[
                  styles.progressFill,
                  { width: `${currentLesson.progress}%` },
                ]}
              />
            </View>
            <Text style={styles.progressText}>{currentLesson.progress}%</Text>
          </View>

          <Text style={styles.lessonDescription}>
            {currentLesson.description}
          </Text>

          {/* Liste des sujets */}
          <View style={styles.topicsList}>
            {currentLesson.topics.map((topic, index) => (
              <View key={index} style={styles.topicItem}>
                <Ionicons
                  name="checkmark-circle"
                  size={18}
                  color={index < 2 ? '#10B981' : '#4B5563'}
                />
                <Text
                  style={[
                    styles.topicText,
                    index < 2 && styles.topicCompleted,
                  ]}
                >
                  {topic}
                </Text>
              </View>
            ))}
          </View>

          {/* Bouton Continuer */}
          <TouchableOpacity style={styles.continueButton}>
            <Text style={styles.continueButtonText}>Continuer la leçon</Text>
            <Ionicons name="arrow-forward" size={20} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

        {/* Stats rapides */}
        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Ionicons name="flame" size={28} color="#F59E0B" />
            <Text style={styles.statNumber}>7</Text>
            <Text style={styles.statLabel}>Jours consécutifs</Text>
          </View>
          <View style={styles.statCard}>
            <Ionicons name="albums" size={28} color="#6366F1" />
            <Text style={styles.statNumber}>48</Text>
            <Text style={styles.statLabel}>Cartes révisées</Text>
          </View>
          <View style={styles.statCard}>
            <Ionicons name="trophy" size={28} color="#10B981" />
            <Text style={styles.statNumber}>85%</Text>
            <Text style={styles.statLabel}>Score moyen</Text>
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
  greeting: {
    fontSize: 14,
    color: '#9CA3AF',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  profileButton: {
    padding: 4,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 16,
    gap: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  lessonCard: {
    backgroundColor: '#1F2937',
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
  },
  lessonHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  lessonBadge: {
    backgroundColor: '#6366F1',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  lessonBadgeText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },
  lessonTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  lessonChapter: {
    fontSize: 14,
    color: '#9CA3AF',
    marginBottom: 16,
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 16,
  },
  progressBar: {
    flex: 1,
    height: 8,
    backgroundColor: '#374151',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#6366F1',
    borderRadius: 4,
  },
  progressText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6366F1',
  },
  lessonDescription: {
    fontSize: 14,
    color: '#D1D5DB',
    lineHeight: 22,
    marginBottom: 16,
  },
  topicsList: {
    marginBottom: 20,
    gap: 10,
  },
  topicItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  topicText: {
    fontSize: 14,
    color: '#9CA3AF',
  },
  topicCompleted: {
    color: '#10B981',
  },
  continueButton: {
    backgroundColor: '#6366F1',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 14,
    borderRadius: 12,
    gap: 8,
  },
  continueButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
    gap: 12,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#1F2937',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: 8,
  },
  statLabel: {
    fontSize: 11,
    color: '#9CA3AF',
    textAlign: 'center',
    marginTop: 4,
  },
});
