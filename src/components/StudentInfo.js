import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/**
 * Bài tập 2: Component StudentInfo
 * Hiển thị thông tin sinh viên gồm: Họ tên, Lớp và Ngành học
 * Các thông tin nhận qua props từ component cha
 */
const StudentInfo = ({ fullName, className, major, studentId }) => {
  return (
    <View style={styles.card}>
      <View style={styles.headerRow}>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{className || 'Chưa xếp lớp'}</Text>
        </View>
        {studentId && <Text style={styles.idText}>MSSV: {studentId}</Text>}
      </View>

      <Text style={styles.nameText}>{fullName || 'Nguyễn Văn A'}</Text>

      <View style={styles.divider} />

      <View style={styles.infoRow}>
        <Text style={styles.label}>🎓 Ngành học:</Text>
        <Text style={styles.value}>{major || 'Công nghệ thông tin'}</Text>
      </View>

      <View style={styles.infoRow}>
        <Text style={styles.label}>🏫 Lớp học:</Text>
        <Text style={styles.value}>{className || 'DHKTPM18A'}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 16,
    marginVertical: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 5,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  badge: {
    backgroundColor: '#EEF2FF',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#C7D2FE',
  },
  badgeText: {
    fontSize: 12,
    color: '#4338CA',
    fontWeight: '600',
  },
  idText: {
    fontSize: 12,
    color: '#6B7280',
    fontStyle: 'italic',
  },
  nameText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 6,
  },
  divider: {
    height: 1,
    backgroundColor: '#F3F4F6',
    marginVertical: 8,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 3,
  },
  label: {
    fontSize: 14,
    color: '#4B5563',
    fontWeight: '500',
  },
  value: {
    fontSize: 14,
    color: '#1F2937',
    fontWeight: '600',
  },
});

export default StudentInfo;
