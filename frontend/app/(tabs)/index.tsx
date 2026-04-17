import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

// Données des thématiques
const thematiques = [
  {
    id: 'environnement',
    title: 'Environnement Territorial',
    subtitle: 'Catégorie A - Toutes spécialités',
    icon: 'business',
    color: '#6366F1',
    totalFiches: 90,
    sections: [
      { name: 'Institutions françaises', fiches: 4 },
      { name: 'Collectivités locales', fiches: 21 },
      { name: 'Action administrative locale', fiches: 12 },
      { name: 'Finances publiques locales', fiches: 8 },
      { name: 'Commande publique', fiches: 11 },
      { name: 'Statut fonction publique', fiches: 10 },
      { name: 'Ressources humaines', fiches: 8 },
      { name: 'Management', fiches: 6 },
    ],
  },
  {
    id: 'urbanisme',
    title: 'Politiques d\'Urbanisme',
    subtitle: 'Spécialité Urbanisme et développement',
    icon: 'map',
    color: '#10B981',
    totalFiches: 13,
    sections: [
      { name: 'Règlement national d\'urbanisme', fiches: 1 },
      { name: 'Documents d\'urbanisme', fiches: 4 },
      { name: 'Autorisations d\'urbanisme', fiches: 5 },
      { name: 'Opérations d\'aménagement', fiches: 1 },
      { name: 'Contentieux de l\'urbanisme', fiches: 1 },
      { name: 'Lois Montagne et Littoral', fiches: 2 },
    ],
  },
];

export default function HomeScreen() {
  const router = useRouter();
  const [progress] = useState({ environnement: 35, urbanisme: 20 });

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Concours Attaché Territorial</Text>
          <Text style={styles.headerTitle}>Fiches de Révision</Text>
        </View>
        <TouchableOpacity style={styles.profileButton}>
          <Ionicons name="school" size={36} color="#6366F1" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Stats rapides */}
        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Ionicons name="flame" size={24} color="#F59E0B" />
            <Text style={styles.statNumber}>103</Text>
            <Text style={styles.statLabel}>Fiches totales</Text>
          </View>
          <View style={styles.statCard}>
            <Ionicons name="albums" size={24} color="#6366F1" />
            <Text style={styles.statNumber}>2</Text>
            <Text style={styles.statLabel}>Thématiques</Text>
          </View>
          <View style={styles.statCard}>
            <Ionicons name="trophy" size={24} color="#10B981" />
            <Text style={styles.statNumber}>Cat. A</Text>
            <Text style={styles.statLabel}>Niveau</Text>
          </View>
        </View>

        {/* Section Thématiques */}
        <View style={styles.sectionHeader}>
          <Ionicons name="book" size={24} color="#6366F1" />
          <Text style={styles.sectionTitle}>Thématiques</Text>
        </View>

        {thematiques.map((theme) => (
          <TouchableOpacity
            key={theme.id}
            style={styles.themeCard}
            onPress={() => router.push(`/theme/${theme.id}`)}
          >
            <View style={styles.themeHeader}>
              <View style={[styles.themeIconContainer, { backgroundColor: `${theme.color}20` }]}>
                <Ionicons name={theme.icon as any} size={28} color={theme.color} />
              </View>
              <View style={styles.themeInfo}>
                <Text style={styles.themeTitle}>{theme.title}</Text>
                <Text style={styles.themeSubtitle}>{theme.subtitle}</Text>
              </View>
              <Ionicons name="chevron-forward" size={24} color="#6B7280" />
            </View>

            {/* Barre de progression */}
            <View style={styles.progressContainer}>
              <View style={styles.progressBar}>
                <View
                  style={[
                    styles.progressFill,
                    { width: `${progress[theme.id as keyof typeof progress]}%`, backgroundColor: theme.color },
                  ]}
                />
              </View>
              <Text style={[styles.progressText, { color: theme.color }]}>
                {progress[theme.id as keyof typeof progress]}%
              </Text>
            </View>

            {/* Sections */}
            <View style={styles.sectionsPreview}>
              {theme.sections.slice(0, 3).map((section, index) => (
                <View key={index} style={styles.sectionBadge}>
                  <Text style={styles.sectionBadgeText}>{section.name}</Text>
                </View>
              ))}
              {theme.sections.length > 3 && (
                <View style={[styles.sectionBadge, styles.moreBadge]}>
                  <Text style={styles.moreBadgeText}>+{theme.sections.length - 3}</Text>
                </View>
              )}
            </View>

            <View style={styles.themeFooter}>
              <View style={styles.fichesCount}>
                <Ionicons name="document-text" size={16} color="#9CA3AF" />
                <Text style={styles.fichesCountText}>{theme.totalFiches} fiches</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}

        {/* Conseil du jour */}
        <View style={styles.tipCard}>
          <View style={styles.tipHeader}>
            <Ionicons name="bulb" size={24} color="#F59E0B" />
            <Text style={styles.tipTitle}>Conseil du jour</Text>
          </View>
          <Text style={styles.tipText}>
            Le permis de construire a une validité de 2 ans. Passé ce délai sans début des travaux, il devient caduc !
          </Text>
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
    fontSize: 12,
    color: '#9CA3AF',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  headerTitle: {
    fontSize: 22,
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
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 24,
    gap: 12,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#1F2937',
    borderRadius: 12,
    padding: 14,
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: 6,
  },
  statLabel: {
    fontSize: 10,
    color: '#9CA3AF',
    textAlign: 'center',
    marginTop: 2,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    gap: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  themeCard: {
    backgroundColor: '#1F2937',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
  },
  themeHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  themeIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  themeInfo: {
    flex: 1,
  },
  themeTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 2,
  },
  themeSubtitle: {
    fontSize: 12,
    color: '#9CA3AF',
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 16,
  },
  progressBar: {
    flex: 1,
    height: 6,
    backgroundColor: '#374151',
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 3,
  },
  progressText: {
    fontSize: 12,
    fontWeight: '600',
  },
  sectionsPreview: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 12,
  },
  sectionBadge: {
    backgroundColor: '#374151',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  sectionBadgeText: {
    fontSize: 11,
    color: '#D1D5DB',
  },
  moreBadge: {
    backgroundColor: '#4B5563',
  },
  moreBadgeText: {
    fontSize: 11,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  themeFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  fichesCount: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  fichesCountText: {
    fontSize: 12,
    color: '#9CA3AF',
  },
  tipCard: {
    backgroundColor: 'rgba(245, 158, 11, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(245, 158, 11, 0.3)',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
  },
  tipHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  tipTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#F59E0B',
  },
  tipText: {
    fontSize: 13,
    color: '#D1D5DB',
    lineHeight: 20,
  },
});
