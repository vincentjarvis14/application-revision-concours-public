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
import { useLocalSearchParams, useRouter } from 'expo-router';

// Données complètes des thématiques
const themesData: Record<string, any> = {
  environnement: {
    title: 'Environnement Territorial',
    subtitle: 'Catégorie A - Toutes spécialités',
    color: '#6366F1',
    icon: 'business',
    sections: [
      {
        name: 'Les institutions françaises',
        fiches: [
          { id: 1, title: 'Les grands principes de l\'organisation de l\'État' },
          { id: 2, title: 'L\'organisation administrative de l\'État' },
          { id: 3, title: 'Les grandes étapes de la décentralisation' },
          { id: 4, title: 'L\'organisation juridictionnelle' },
        ],
      },
      {
        name: 'Les collectivités locales',
        fiches: [
          { id: 5, title: 'Les grands principes régissant les collectivités territoriales' },
          { id: 6, title: 'Le statut des élus locaux' },
          { id: 7, title: 'Principaux chiffres sur les élus locaux' },
          { id: 8, title: 'La participation des citoyens à la vie locale' },
          { id: 9, title: 'La composition du conseil municipal' },
          { id: 10, title: 'Le rôle du conseil municipal' },
          { id: 14, title: 'Le maire' },
          { id: 15, title: 'Les adjoints au maire' },
          { id: 16, title: 'La commune nouvelle' },
          { id: 17, title: 'Les grandes étapes de l\'intercommunalité' },
          { id: 20, title: 'Le département' },
          { id: 21, title: 'La région' },
        ],
      },
      {
        name: 'L\'action administrative locale',
        fiches: [
          { id: 26, title: 'Le domaine des collectivités territoriales' },
          { id: 27, title: 'Les services publics locaux' },
          { id: 28, title: 'Les actes des collectivités territoriales' },
          { id: 31, title: 'Le principe de légalité' },
          { id: 32, title: 'Le contrôle de légalité' },
          { id: 33, title: 'Les pouvoirs de police du maire' },
          { id: 35, title: 'La responsabilité administrative' },
        ],
      },
      {
        name: 'Les finances publiques locales',
        fiches: [
          { id: 38, title: 'Le budget des collectivités locales' },
          { id: 39, title: 'Les cinq grands principes budgétaires' },
          { id: 41, title: 'Les recettes des collectivités locales' },
          { id: 42, title: 'Les dépenses des collectivités locales' },
          { id: 43, title: 'Le contrôle des actes budgétaires locaux' },
          { id: 44, title: 'L\'autonomie financière des collectivités' },
        ],
      },
      {
        name: 'La commande publique',
        fiches: [
          { id: 50, title: 'Le champ d\'application du code de la commande publique' },
          { id: 51, title: 'Les principes fondamentaux de la commande publique' },
          { id: 52, title: 'La préparation du marché public' },
          { id: 55, title: 'L\'examen des candidatures et des offres' },
          { id: 58, title: 'La gestion administrative du marché public' },
        ],
      },
      {
        name: 'Le statut de la fonction publique territoriale',
        fiches: [
          { id: 61, title: 'Les organismes gestionnaires de la FPT' },
          { id: 62, title: 'Les modes d\'accès à la fonction publique territoriale' },
          { id: 63, title: 'Les positions statutaires des fonctionnaires' },
          { id: 66, title: 'Le déroulement de carrière des agents territoriaux' },
          { id: 67, title: 'Les droits et obligations des agents territoriaux' },
          { id: 69, title: 'Le droit disciplinaire des agents territoriaux' },
        ],
      },
      {
        name: 'Les ressources humaines',
        fiches: [
          { id: 71, title: 'L\'appréciation de la valeur professionnelle' },
          { id: 72, title: 'La formation tout au long de la vie' },
          { id: 73, title: 'Les risques psycho-sociaux' },
          { id: 75, title: 'Le dialogue social' },
        ],
      },
      {
        name: 'Management',
        fiches: [
          { id: 84, title: 'Le cadre territorial' },
          { id: 85, title: 'Les différents types de management' },
          { id: 86, title: 'Management : la délégation' },
          { id: 87, title: 'Le management de projet' },
          { id: 88, title: 'Le management stratégique' },
          { id: 89, title: 'La relation cadre / élus' },
        ],
      },
    ],
  },
  urbanisme: {
    title: 'Politiques d\'Urbanisme',
    subtitle: 'Spécialité Urbanisme et développement des territoires',
    color: '#10B981',
    icon: 'map',
    sections: [
      {
        name: 'Règlement national d\'urbanisme',
        fiches: [
          { id: 96, title: 'Le règlement national d\'urbanisme (RNU)' },
        ],
      },
      {
        name: 'Documents d\'urbanisme',
        fiches: [
          { id: 98, title: 'Le plan local d\'urbanisme (PLU)' },
          { id: 99, title: 'Le schéma de cohérence territoriale (SCOT)' },
          { id: 100, title: 'La loi Littoral' },
          { id: 101, title: 'La loi Montagne' },
        ],
      },
      {
        name: 'Autorisations d\'urbanisme',
        fiches: [
          { id: 102, title: 'Le certificat d\'urbanisme' },
          { id: 103, title: 'Les règles communes aux autorisations d\'urbanisme' },
          { id: 104, title: 'La déclaration préalable' },
          { id: 105, title: 'Le permis de construire' },
          { id: 106, title: 'Le permis d\'aménager et le permis de démolir' },
        ],
      },
      {
        name: 'Opérations d\'aménagement',
        fiches: [
          { id: 107, title: 'Les opérations d\'aménagement' },
        ],
      },
      {
        name: 'Contentieux de l\'urbanisme',
        fiches: [
          { id: 108, title: 'Le contentieux de l\'urbanisme' },
        ],
      },
    ],
  },
};

export default function ThemeDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const theme = themesData[id as string];

  if (!theme) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Thématique non trouvée</Text>
        </View>
      </SafeAreaView>
    );
  }

  const totalFiches = theme.sections.reduce(
    (acc: number, section: any) => acc + section.fiches.length,
    0
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <View style={styles.headerInfo}>
          <Text style={styles.headerTitle} numberOfLines={1}>
            {theme.title}
          </Text>
          <Text style={styles.headerSubtitle}>{totalFiches} fiches</Text>
        </View>
      </View>

      <ScrollView
        style={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Theme Info Card */}
        <View style={[styles.infoCard, { borderColor: theme.color }]}>
          <View
            style={[
              styles.infoIconContainer,
              { backgroundColor: `${theme.color}20` },
            ]}
          >
            <Ionicons name={theme.icon} size={32} color={theme.color} />
          </View>
          <Text style={styles.infoTitle}>{theme.title}</Text>
          <Text style={styles.infoSubtitle}>{theme.subtitle}</Text>
          <View style={styles.infoStats}>
            <View style={styles.infoStat}>
              <Ionicons name="folder-open" size={18} color="#9CA3AF" />
              <Text style={styles.infoStatText}>
                {theme.sections.length} sections
              </Text>
            </View>
            <View style={styles.infoStat}>
              <Ionicons name="document-text" size={18} color="#9CA3AF" />
              <Text style={styles.infoStatText}>{totalFiches} fiches</Text>
            </View>
          </View>
        </View>

        {/* Sections */}
        {theme.sections.map((section: any, sectionIndex: number) => (
          <View key={sectionIndex} style={styles.section}>
            <View style={styles.sectionHeader}>
              <View
                style={[
                  styles.sectionNumber,
                  { backgroundColor: theme.color },
                ]}
              >
                <Text style={styles.sectionNumberText}>{sectionIndex + 1}</Text>
              </View>
              <View style={styles.sectionHeaderInfo}>
                <Text style={styles.sectionTitle}>{section.name}</Text>
                <Text style={styles.sectionCount}>
                  {section.fiches.length} fiche
                  {section.fiches.length > 1 ? 's' : ''}
                </Text>
              </View>
            </View>

            <View style={styles.fichesList}>
              {section.fiches.map((fiche: any, ficheIndex: number) => (
                <TouchableOpacity key={fiche.id} style={styles.ficheItem}>
                  <View style={styles.ficheLeft}>
                    <View style={styles.ficheBadge}>
                      <Text style={styles.ficheBadgeText}>{fiche.id}</Text>
                    </View>
                    <Text style={styles.ficheTitle} numberOfLines={2}>
                      {fiche.title}
                    </Text>
                  </View>
                  <Ionicons name="chevron-forward" size={20} color="#4B5563" />
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ))}

        {/* Action Buttons */}
        <View style={styles.actionButtons}>
          <TouchableOpacity
            style={[styles.actionButton, { backgroundColor: theme.color }]}
            onPress={() => router.push('/flashcards')}
          >
            <Ionicons name="albums" size={24} color="#FFFFFF" />
            <Text style={styles.actionButtonText}>Réviser avec Flashcards</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.actionButton, styles.actionButtonOutline]}
            onPress={() => router.push('/quiz')}
          >
            <Ionicons name="help-circle" size={24} color={theme.color} />
            <Text style={[styles.actionButtonText, { color: theme.color }]}>
              Tester avec un Quiz
            </Text>
          </TouchableOpacity>
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
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#1F2937',
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  headerInfo: {
    flex: 1,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  headerSubtitle: {
    fontSize: 12,
    color: '#9CA3AF',
    marginTop: 2,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: '#EF4444',
    fontSize: 16,
  },
  infoCard: {
    backgroundColor: '#1F2937',
    borderRadius: 16,
    padding: 24,
    marginTop: 20,
    marginBottom: 24,
    alignItems: 'center',
    borderWidth: 2,
  },
  infoIconContainer: {
    width: 64,
    height: 64,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  infoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 4,
  },
  infoSubtitle: {
    fontSize: 14,
    color: '#9CA3AF',
    textAlign: 'center',
    marginBottom: 16,
  },
  infoStats: {
    flexDirection: 'row',
    gap: 24,
  },
  infoStat: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  infoStatText: {
    fontSize: 14,
    color: '#9CA3AF',
  },
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionNumber: {
    width: 32,
    height: 32,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  sectionNumberText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  sectionHeaderInfo: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  sectionCount: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 2,
  },
  fichesList: {
    backgroundColor: '#1F2937',
    borderRadius: 12,
    overflow: 'hidden',
  },
  ficheItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#374151',
  },
  ficheLeft: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  ficheBadge: {
    backgroundColor: '#374151',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    minWidth: 36,
    alignItems: 'center',
  },
  ficheBadgeText: {
    color: '#9CA3AF',
    fontSize: 11,
    fontWeight: '600',
  },
  ficheTitle: {
    flex: 1,
    fontSize: 14,
    color: '#D1D5DB',
    lineHeight: 20,
  },
  actionButtons: {
    gap: 12,
    marginBottom: 32,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderRadius: 12,
    gap: 10,
  },
  actionButtonOutline: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#374151',
  },
  actionButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
