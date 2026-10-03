import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/**
 * Bài tập 1: Component Greeting
 * Nhận prop `name` và hiển thị lời chào mừng người dùng
 */
const Greeting = ({ name }) => {
  return (
    <View style={styles.card}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>
          {name ? name.charAt(0).toUpperCase() : '?'}
        </Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.greetingText}>
          Xin chào, <Text style={styles.highlightName}>{name || 'Bạn'}!</Text> 👋
        </Text>
        <Text style={styles.subText}>Chúc bạn một ngày học tập hiệu quả!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 14,
    marginVertical: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
    borderLeftWidth: 4,
    borderLeftColor: '#2563EB', // Blue accent
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#DBEAFE',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  avatarText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1D4ED8',
  },
  textContainer: {
    flex: 1,
  },
  greetingText: {
    fontSize: 16,
    color: '#1F2937',
    fontWeight: '500',
  },
  highlightName: {
    color: '#1D4ED8',
    fontWeight: 'bold',
  },
  subText: {
    fontSize: 13,
    color: '#6B7280',
    marginTop: 2,
  },
});

export default Greeting;
