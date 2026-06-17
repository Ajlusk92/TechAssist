import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Plus, Clock, Database, AlertCircle } from 'lucide-react-native';

export default function DashboardScreen({ navigation }: any) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Welcome, Tech</Text>
        <Text style={styles.subGreeting}>Ready to troubleshoot?</Text>
      </View>

      <TouchableOpacity 
        style={styles.mainAction} 
        onPress={() => navigation.navigate('Chat')}
      >
        <Plus color="#fff" size={32} />
        <Text style={styles.mainActionText}>New Diagnostic Session</Text>
      </TouchableOpacity>

      <View style={styles.statsRow}>
        <View style={styles.statCard}>
          <Clock color="#007AFF" size={24} />
          <Text style={styles.statValue}>12</Text>
          <Text style={styles.statLabel}>Active Jobs</Text>
        </View>
        <View style={styles.statCard}>
          <Database color="#28a745" size={24} />
          <Text style={styles.statValue}>148</Text>
          <Text style={styles.statLabel}>Saved Specs</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Recent Sessions</Text>
      <TouchableOpacity style={styles.recentItem}>
        <AlertCircle color="#ff4444" size={20} />
        <View style={styles.recentInfo}>
          <Text style={styles.recentTitle}>John Deere 850K - No Start</Text>
          <Text style={styles.recentDate}>2 hours ago • Code: F450</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.recentItem}>
        <AlertCircle color="#ffbb33" size={20} />
        <View style={styles.recentInfo}>
          <Text style={styles.recentTitle}>Freightliner Cascadia - Derate</Text>
          <Text style={styles.recentDate}>Yesterday • Code: SPN 1231</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f0f0f', padding: 20 },
  header: { marginBottom: 25, marginTop: 20 },
  greeting: { fontSize: 28, fontWeight: 'bold', color: '#fff' },
  subGreeting: { fontSize: 16, color: '#888' },
  mainAction: { backgroundColor: '#007AFF', borderRadius: 15, padding: 25, alignItems: 'center', marginBottom: 25, flexDirection: 'row', justifyContent: 'center' },
  mainActionText: { color: '#fff', fontSize: 18, fontWeight: 'bold', marginLeft: 10 },
  statsRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 25 },
  statCard: { backgroundColor: '#1a1a1a', width: '47%', padding: 20, borderRadius: 15, alignItems: 'center' },
  statValue: { color: '#fff', fontSize: 24, fontWeight: 'bold', marginVertical: 5 },
  statLabel: { color: '#888', fontSize: 12 },
  sectionTitle: { color: '#fff', fontSize: 18, fontWeight: 'bold', marginBottom: 15 },
  recentItem: { backgroundColor: '#1a1a1a', padding: 15, borderRadius: 12, flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
  recentInfo: { marginLeft: 15 },
  recentTitle: { color: '#fff', fontSize: 15, fontWeight: '500' },
  recentDate: { color: '#666', fontSize: 12, marginTop: 4 }
});