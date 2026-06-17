import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import { Send, ShieldAlert, Wrench, ArrowRight } from 'lucide-react-native';

export default function ChatDiagnosticScreen() {
  const [messages, setMessages] = useState([
    { id: '1', role: 'assistant', content: "TechDiag AI initialized. I am your master diagnostic assistant.\n\nPlease describe the issue or enter a fault code to begin." }
  ]);
  const [input, setInput] = useState('');
  const [workflowVisible, setWorkflowVisible] = useState(false);
  const scrollViewRef = useRef<ScrollView>(null);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = { id: Date.now().toString(), role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');

    // Simulate AI response logic
    setTimeout(() => {
      let aiContent = "";
      if (input.toLowerCase().includes("p0087")) {
        aiContent = "I've identified P0087 (Low Fuel Rail Pressure). \n\nBefore we proceed: \n⚠️ ENSURE ENGINE IS OFF AND PRESSURE IS RELIEVED.\n\nCould you please provide the Machine Make and Model?";
      } else if (input.toLowerCase().includes("cat") || input.toLowerCase().includes("320")) {
        aiContent = "Acknowledged. CAT 320 Excavator. \n\nIs this an intermittent or constant failure?";
        setWorkflowVisible(true); // Show workflow builder button
      } else {
        aiContent = "Got it. To provide an accurate diagnostic path, I need to know: Has any recent work been done on the fuel or electrical systems?";
      }

      setMessages(prev => [...prev, { id: (Date.now() + 1).toString(), role: 'assistant', content: aiContent }]);
    }, 1000);
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container} keyboardVerticalOffset={100}>
      <View style={styles.safetyBanner}>
        <ShieldAlert size={16} color="#FFD700" />
        <Text style={styles.safetyText}>Safety First: Follow OEM procedures & Lockout/Tagout.</Text>
      </View>

      <ScrollView 
        ref={scrollViewRef}
        onContentSizeChange={() => scrollViewRef.current?.scrollToEnd({ animated: true })}
        style={styles.chatArea}
      >
        {messages.map((m) => (
          <View key={m.id} style={[styles.bubble, m.role === 'user' ? styles.userBubble : styles.aiBubble]}>
            <Text style={[styles.bubbleText, m.role === 'user' ? styles.userText : styles.aiText]}>{m.content}</Text>
          </View>
        ))}
        
        {workflowVisible && (
          <TouchableOpacity style={styles.workflowButton} onPress={() => Alert.alert("Workflow Generated", "Steps: 1. Visual Inspection, 2. Lift Pump Pressure Test, 3. Leak-off test.")}>
            <Wrench size={20} color="#fff" />
            <Text style={styles.workflowButtonText}>Generate Diagnostic Workflow</Text>
            <ArrowRight size={18} color="#fff" />
          </TouchableOpacity>
        )}
      </ScrollView>

      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.input} 
          placeholder="Describe symptoms or fault codes..." 
          placeholderTextColor="#999"
          value={input}
          onChangeText={setInput}
          multiline
        />
        <TouchableOpacity style={styles.sendBtn} onPress={handleSend}>
          <Send size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f0f0f' },
  safetyBanner: { flexDirection: 'row', backgroundColor: '#2c2c2c', padding: 10, alignItems: 'center', justifyContent: 'center' },
  safetyText: { color: '#FFD700', fontSize: 12, marginLeft: 8, fontWeight: 'bold' },
  chatArea: { flex: 1, padding: 15 },
  bubble: { padding: 12, borderRadius: 15, marginBottom: 10, maxWidth: '85%' },
  aiBubble: { alignSelf: 'flex-start', backgroundColor: '#262626', borderBottomLeftRadius: 2 },
  userBubble: { alignSelf: 'flex-end', backgroundColor: '#007AFF', borderBottomRightRadius: 2 },
  bubbleText: { fontSize: 16, lineHeight: 22 },
  aiText: { color: '#e0e0e0' },
  userText: { color: '#fff' },
  inputContainer: { flexDirection: 'row', padding: 15, backgroundColor: '#1a1a1a', alignItems: 'center' },
  input: { flex: 1, backgroundColor: '#2c2c2c', borderRadius: 20, paddingHorizontal: 15, paddingVertical: 10, color: '#fff', fontSize: 16, marginRight: 10, maxHeight: 100 },
  sendBtn: { backgroundColor: '#007AFF', width: 44, height: 44, borderRadius: 22, justifyContent: 'center', alignItems: 'center' },
  workflowButton: { backgroundColor: '#28a745', flexDirection: 'row', padding: 15, borderRadius: 10, marginTop: 10, alignItems: 'center', justifyContent: 'space-between' },
  workflowButtonText: { color: '#fff', fontWeight: 'bold', flex: 1, marginLeft: 10 }
});