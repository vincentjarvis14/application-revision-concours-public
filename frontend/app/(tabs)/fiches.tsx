import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { themes } from '../../data';
import { Fiche, ContentSection } from '../../data/types';

type Screen = 'themes' | 'sections' | 'fiches' | 'read';

export default function FichesScreen() {
  const [screen, setScreen] = useState<Screen>('themes');
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null);
  const [selectedSection, setSelectedSection] = useState<string | null>(null);
  const [selectedFiche, setSelectedFiche] = useState<Fiche | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const theme = themes.find(t => t.id === selectedTheme);

  const goBack = () => {
    if (screen === 'read') setScreen('fiches');
    else if (screen === 'fiches') setScreen('sections');
    else if (screen === 'sections') setScreen('themes');
  };

  const renderSection = (section: ContentSection, depth: number = 0) => (
    <View key={section.title} style={[styles.contentSection, { marginLeft: depth * 8 }]}>
      <Text style={[
        depth === 0 ? styles.h2 : depth === 1 ? styles.h3 : styles.h4,
      ]}>{section.title}</Text>
      {section.text ? <Text style={styles.paragraph}>{section.text}</Text> : null}
      {section.subsections?.map(sub => renderSection(sub, depth + 1))}
    </View>
  );

  // Écran de lecture d'une fiche
  if (screen === 'read' && selectedFiche) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={goBack} style={styles.backBtn} testID="back-from-read">
            <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
          </TouchableOpacity>
          <View style={styles.headerCenter}>
            <Text style={styles.headerSmall} numberOfLines={1}>Fiche {selectedFiche.id}</Text>
          </View>
          <View style={{ width: 40 }} />
        </View>
        <ScrollView style={styles.readContent} showsVerticalScrollIndicator={false}>
          <View style={[styles.ficheHeaderCard, { borderColor: theme?.color || '#6366F1' }]}>
            <Text style={styles.ficheNumber}>Fiche {selectedFiche.id}</Text>
            <Text style={styles.ficheTitle}>{selectedFiche.title}</Text>
          </View>
          {selectedFiche.sections.map(section => renderSection(section))}
          <View style={{ height: 40 }} />
        </ScrollView>
      </SafeAreaView>
    );
  }

  // Écran liste des fiches d'une section
  if (screen === 'fiches' && theme && selectedSection) {
    const section = theme.sections.find(s => s.name === selectedSection);
    const fiches = section?.fiches || [];

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={goBack} style={styles.backBtn} testID="back-from-fiches">
            <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
          </TouchableOpacity>
          <View style={styles.headerCenter}>
            <Text style={styles.headerSmall} numberOfLines={1}>{selectedSection}</Text>
            <Text style={styles.headerSub}>{fiches.length} fiches</Text>
          </View>
          <View style={{ width: 40 }} />
        </View>
        <ScrollView style={styles.listContent} showsVerticalScrollIndicator={false}>
          {fiches.map(fiche => (
            <TouchableOpacity
              key={fiche.id}
              style={styles.ficheCard}
              onPress={() => { setSelectedFiche(fiche); setScreen('read'); }}
              testID={`fiche-item-${fiche.id}`}
            >
              <View style={[styles.ficheNumBadge, { backgroundColor: `${theme.color}20` }]}>
                <Text style={[styles.ficheNumText, { color: theme.color }]}>{fiche.id}</Text>
              </View>
              <View style={styles.ficheCardInfo}>
                <Text style={styles.ficheCardTitle} numberOfLines={2}>{fiche.title}</Text>
                <Text style={styles.ficheCardSub}>
                  {fiche.sections.length > 1 ? `${fiche.sections.length} sections` : '1 section'}
                </Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#4B5563" />
            </TouchableOpacity>
          ))}
          <View style={{ height: 20 }} />
        </ScrollView>
      </SafeAreaView>
    );
  }

  // Écran liste des sections d'un thème
  if (screen === 'sections' && theme) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={goBack} style={styles.backBtn} testID="back-from-sections">
            <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
          </TouchableOpacity>
          <View style={styles.headerCenter}>
            <Text style={styles.headerSmall} numberOfLines={1}>{theme.title}</Text>
            <Text style={styles.headerSub}>{theme.subtitle}</Text>
          </View>
          <View style={{ width: 40 }} />
        </View>
        <ScrollView style={styles.listContent} showsVerticalScrollIndicator={false}>
          <View style={[styles.themeInfoBanner, { backgroundColor: `${theme.color}15`, borderColor: `${theme.color}40` }]}>
            <Ionicons name={theme.icon as any} size={32} color={theme.color} />
            <Text style={styles.themeInfoTitle}>{theme.title}</Text>
            <Text style={styles.themeInfoSub}>
              {theme.sections.reduce((acc, s) => acc + s.fiches.length, 0)} fiches au total
            </Text>
          </View>

          {theme.sections.map((section, idx) => (
            <TouchableOpacity
              key={section.name}
              style={styles.sectionCard}
              onPress={() => { setSelectedSection(section.name); setScreen('fiches'); }}
              testID={`section-item-${idx}`}
            >
              <View style={[styles.sectionNum, { backgroundColor: theme.color }]}>
                <Text style={styles.sectionNumText}>{idx + 1}</Text>
              </View>
              <View style={styles.sectionCardInfo}>
                <Text style={styles.sectionCardTitle}>{section.name}</Text>
                <Text style={styles.sectionCardCount}>
                  {section.fiches.length} fiche{section.fiches.length > 1 ? 's' : ''}
                </Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#4B5563" />
            </TouchableOpacity>
          ))}
          <View style={{ height: 20 }} />
        </ScrollView>
      </SafeAreaView>
    );
  }

  // Écran principal : liste des thèmes
  const totalFiches = themes.reduce((acc, t) => acc + t.sections.reduce((a, s) => a + s.fiches.length, 0), 0);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Fiches de cours</Text>
        <View style={styles.totalBadge}>
          <Text style={styles.totalText}>{totalFiches} fiches</Text>
        </View>
      </View>

      <ScrollView style={styles.listContent} showsVerticalScrollIndicator={false}>
        <Text style={styles.introText}>
          Retrouvez l'intégralité des fiches de révision organisées par thématique et section.
        </Text>

        {themes.map(t => {
          const tFiches = t.sections.reduce((acc, s) => acc + s.fiches.length, 0);
          return (
            <TouchableOpacity
              key={t.id}
              style={styles.themeCard}
              onPress={() => { setSelectedTheme(t.id); setScreen('sections'); }}
              testID={`theme-${t.id}`}
            >
              <View style={[styles.themeIconBox, { backgroundColor: `${t.color}20` }]}>
                <Ionicons name={t.icon as any} size={32} color={t.color} />
              </View>
              <View style={styles.themeCardContent}>
                <Text style={styles.themeCardTitle}>{t.title}</Text>
                <Text style={styles.themeCardSub}>{t.subtitle}</Text>
                <View style={styles.themeCardStats}>
                  <View style={styles.statItem}>
                    <Ionicons name="folder-open" size={14} color="#9CA3AF" />
                    <Text style={styles.statText}>{t.sections.length} sections</Text>
                  </View>
                  <View style={styles.statItem}>
                    <Ionicons name="document-text" size={14} color="#9CA3AF" />
                    <Text style={styles.statText}>{tFiches} fiches</Text>
                  </View>
                </View>
              </View>
              <Ionicons name="chevron-forward" size={24} color="#6B7280" />
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#111827' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 16, borderBottomWidth: 1, borderBottomColor: '#1F2937' },
  headerTitle: { fontSize: 22, fontWeight: 'bold', color: '#FFFFFF' },
  headerSmall: { fontSize: 16, fontWeight: 'bold', color: '#FFFFFF' },
  headerSub: { fontSize: 12, color: '#9CA3AF', marginTop: 2 },
  headerCenter: { flex: 1, marginHorizontal: 12 },
  backBtn: { width: 40, height: 40, justifyContent: 'center', alignItems: 'center' },
  totalBadge: { backgroundColor: '#1F2937', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 16 },
  totalText: { color: '#9CA3AF', fontSize: 13, fontWeight: '600' },
  listContent: { flex: 1, paddingHorizontal: 20 },
  introText: { fontSize: 14, color: '#9CA3AF', lineHeight: 22, marginTop: 20, marginBottom: 24 },
  themeCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#1F2937', borderRadius: 16, padding: 20, marginBottom: 16 },
  themeIconBox: { width: 64, height: 64, borderRadius: 16, justifyContent: 'center', alignItems: 'center', marginRight: 16 },
  themeCardContent: { flex: 1 },
  themeCardTitle: { fontSize: 17, fontWeight: 'bold', color: '#FFFFFF', marginBottom: 4 },
  themeCardSub: { fontSize: 12, color: '#9CA3AF', marginBottom: 10 },
  themeCardStats: { flexDirection: 'row', gap: 16 },
  statItem: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  statText: { fontSize: 12, color: '#9CA3AF' },
  themeInfoBanner: { borderRadius: 16, padding: 24, marginTop: 16, marginBottom: 24, alignItems: 'center', borderWidth: 1 },
  themeInfoTitle: { fontSize: 18, fontWeight: 'bold', color: '#FFFFFF', marginTop: 12 },
  themeInfoSub: { fontSize: 13, color: '#9CA3AF', marginTop: 4 },
  sectionCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#1F2937', borderRadius: 12, padding: 16, marginBottom: 10 },
  sectionNum: { width: 36, height: 36, borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginRight: 14 },
  sectionNumText: { color: '#FFFFFF', fontSize: 14, fontWeight: 'bold' },
  sectionCardInfo: { flex: 1 },
  sectionCardTitle: { fontSize: 15, fontWeight: '600', color: '#FFFFFF', marginBottom: 2 },
  sectionCardCount: { fontSize: 12, color: '#6B7280' },
  ficheCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#1F2937', borderRadius: 12, padding: 16, marginBottom: 10 },
  ficheNumBadge: { width: 42, height: 42, borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginRight: 14 },
  ficheNumText: { fontSize: 14, fontWeight: 'bold' },
  ficheCardInfo: { flex: 1 },
  ficheCardTitle: { fontSize: 14, fontWeight: '600', color: '#FFFFFF', lineHeight: 20, marginBottom: 2 },
  ficheCardSub: { fontSize: 12, color: '#6B7280' },
  // Reading styles
  readContent: { flex: 1, paddingHorizontal: 20 },
  ficheHeaderCard: { backgroundColor: '#1F2937', borderRadius: 16, padding: 24, marginTop: 16, marginBottom: 24, borderLeftWidth: 4 },
  ficheNumber: { fontSize: 13, color: '#9CA3AF', fontWeight: '600', marginBottom: 8, textTransform: 'uppercase', letterSpacing: 1 },
  ficheTitle: { fontSize: 22, fontWeight: 'bold', color: '#FFFFFF', lineHeight: 30 },
  contentSection: { marginBottom: 20 },
  h2: { fontSize: 18, fontWeight: 'bold', color: '#6366F1', marginBottom: 12, marginTop: 8 },
  h3: { fontSize: 16, fontWeight: '600', color: '#10B981', marginBottom: 10, marginTop: 6 },
  h4: { fontSize: 15, fontWeight: '600', color: '#F59E0B', marginBottom: 8, marginTop: 4 },
  paragraph: { fontSize: 15, color: '#D1D5DB', lineHeight: 24, marginBottom: 12 },
});
