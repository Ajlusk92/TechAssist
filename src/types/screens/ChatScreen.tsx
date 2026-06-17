import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { Send } from 'lucide-react-native';
import { getNextStep } from '../diagLogic';
import { Message } from '../types';

export default function ChatScreen() {
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', role: 'assistant', text: "TechDiag AI Ready. Describe the machine's symptom." }
  ]);
  const [input, setInput] = useState('');
  const [stepCount, setStepCount] = useState(0);

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMsg: Message = { id: Date.now().toString(), role: 'user', text: input };
    const responseText = getNextStep(input, stepCount);
    const aiMsg: Message = { id: (Date.now() + 1).toString(), role: 'assistant', text: responseText };

    setMessages([...messages, userMsg, aiMsg]);
    setInput('');
    setStepCount(stepCount + 1);
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container} keyboardVerticalOffset={90}>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[styles.bubble, item.role === 'user' ? styles.userBubble : styles.aiBubble]}>
            <Text style={styles.messageText}>{item.text}</Text>
          </View>
        )}
        contentContainerStyle={{ padding: 15 }}
      />
      <View style={styles.inputArea}>
        <TextInput
          style={styles.input}
          value={input}
          onChangeText={setInput}
          placeholder="Type answer here..."
          placeholderTextColor="#666"
        />
        <TouchableOpacity onPress={sendMessage} style={styles.sendCircle}>
          <Send color="#fff" size={20} />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  bubble: { padding: 12, borderRadius: 15, marginBottom: 10, maxWidth: '85%' },
  userBubble: { alignSelf: 'flex-end', backgroundColor: '#007AFF' },
  aiBubble: { alignSelf: 'flex-start', backgroundColor: '#222' },
  messageText: { color: '#fff', fontSize: 16 },
  inputArea: { flexDirection: 'row', padding: 15, backgroundColor: '#121212', alignItems: 'center' },
  input: { flex: 1, backgroundColor: '#222', borderRadius: 25, paddingHorizontal: 15, height: 45, color: '#fff' },
  sendCircle: { backgroundColor: '#007AFF', width: 45, height: 45, borderRadius: 22.5, marginLeft: 10, justifyContent: 'center', alignItems: 'center' }
});