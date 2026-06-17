import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Wrench, ShieldCheck, Zap } from 'lucide-react-native';

export default function Dashboard({ navigation }: any) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <ShieldCheck color="#FFD700" size={32} />
        <Text style={styles.cardTitle}>Safety Protocol Active</Text>
        <Text style={styles.cardSub}>Follow all OEM service manuals.</Text>
      </View>

      <TouchableOpacity 
        style={styles.btnPrimary} 
        onPress={() => navigation.navigate('Diagnostic')}
      >
        <Zap color="#fff" size={20} />
        <Text style={styles.btnText}>Start New Diagnostic</Text>
      </TouchableOpacity>

      <Text style={styles.sectionLabel}>Quick Tools</Text>
      <View style={styles.row}>
        <TouchableOpacity style={styles.toolItem}><Text style={styles.toolText}>Fault Code Lookup</Text></TouchableOpacity>
        <TouchableOpacity style={styles.toolItem}><Text style={styles.toolText}>Unit Specs</Text></TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', padding: 20 },
  card: { backgroundColor: '#1a1a1a', padding: 20, borderRadius: 12, marginBottom: 20, borderLeftWidth: 4, borderLeftColor: '#FFD700' },
  cardTitle: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  cardSub: { color: '#aaa', marginTop: 5 },
  btnPrimary: { backgroundColor: '#007AFF', padding: 20, borderRadius: 12, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
  btnText: { color: '#fff', fontSize: 18, fontWeight: 'bold', marginLeft: 10 },
  sectionLabel: { color: '#888', marginTop: 30, marginBottom: 10, fontWeight: 'bold' },
  row: { flexDirection: 'row', justifyContent: 'space-between' },
  toolItem: { backgroundColor: '#1a1a1a', width: '48%', padding: 15, borderRadius: 10, alignItems: 'center' },
  toolText: { color: '#fff' }
});