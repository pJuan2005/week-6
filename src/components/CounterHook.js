import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

/**
 * Bài tập 3: Component CounterHook
 * Sử dụng useState để quản lý giá trị đếm bắt đầu từ 0
 * Có nút "Tăng" để tăng giá trị đếm và cập nhật giao diện
 */
const CounterHook = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(prevCount => prevCount - 1);
    }
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Bộ đếm sử dụng Hook useState</Text>
      <Text style={styles.description}>
        Mỗi lần bấm nút "Tăng", hàm setCount được kích hoạt làm thay đổi state count, kích hoạt React re-render lại component.
      </Text>

      <View style={styles.displayContainer}>
        <Text style={styles.label}>Số lần bấm:</Text>
        <View style={styles.badgeCount}>
          <Text style={styles.countText}>{count}</Text>
        </View>
      </View>

      <View style={styles.buttonGroup}>
        <TouchableOpacity
          style={[styles.button, styles.incrementButton]}
          onPress={handleIncrement}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>➕ Tăng (+1)</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.decrementButton, count === 0 && styles.disabledButton]}
          onPress={handleDecrement}
          disabled={count === 0}
          activeOpacity={0.8}
        >
          <Text style={[styles.buttonText, styles.decrementText]}>➖ Giảm</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.resetButton]}
          onPress={handleReset}
          activeOpacity={0.8}
        >
          <Text style={[styles.buttonText, styles.resetText]}>🔄 Đặt lại</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 18,
    marginVertical: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 5,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 6,
  },
  description: {
    fontSize: 13,
    color: '#6B7280',
    lineHeight: 18,
    marginBottom: 16,
  },
  displayContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F9FAFB',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  label: {
    fontSize: 14,
    color: '#4B5563',
    marginBottom: 6,
  },
  badgeCount: {
    backgroundColor: '#2563EB',
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 30,
    minWidth: 90,
    alignItems: 'center',
  },
  countText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
  },
  button: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  incrementButton: {
    backgroundColor: '#16A34A', // Green
  },
  decrementButton: {
    backgroundColor: '#FEF2F2',
    borderWidth: 1,
    borderColor: '#FCA5A5',
  },
  decrementText: {
    color: '#DC2626',
  },
  resetButton: {
    backgroundColor: '#F3F4F6',
    borderWidth: 1,
    borderColor: '#D1D5DB',
  },
  resetText: {
    color: '#4B5563',
  },
  disabledButton: {
    opacity: 0.5,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});

export default CounterHook;
