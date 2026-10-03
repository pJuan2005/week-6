import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

// Import các components từ bài tập 1, 2, 3
import Greeting from './src/components/Greeting';
import StudentInfo from './src/components/StudentInfo';
import CounterHook from './src/components/CounterHook';

export default function App() {
  const [activeTab, setActiveTab] = useState('practice'); // 'practice' | 'theory'

  // Dữ liệu danh sách sinh viên cho Bài tập 2
  const studentsList = [
    {
      id: '2021001',
      fullName: 'Phạm Xuân Chuẩn',
      className: 'DHKTPM18A',
      major: 'Kỹ thuật phần mềm',
    },
    {
      id: '2021002',
      fullName: 'Nguyễn Văn An',
      className: 'DHKHMT18B',
      major: 'Khoa học máy tính',
    },
    {
      id: '2021003',
      fullName: 'Trần Thị Mai Hoa',
      className: 'DHTTTT18A',
      major: 'Hệ thống thông tin',
    },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#F3F4F6" />

      {/* Header chính của ứng dụng */}
      <View style={styles.header}>
        <Text style={styles.headerSubtitle}>BÀI TẬP TUẦN 6 • REACT NATIVE</Text>
        <Text style={styles.headerTitle}>Components, Props & State</Text>
        <Text style={styles.authorTag}>Sinh viên thực hiện: Phạm Xuân Chuẩn</Text>
      </View>

      {/* Thanh chuyển đổi Tab: Thực hành & Lý thuyết */}
      <View style={styles.tabBar}>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'practice' && styles.activeTabButton]}
          onPress={() => setActiveTab('practice')}
          activeOpacity={0.8}
        >
          <Text
            style={[styles.tabButtonText, activeTab === 'practice' && styles.activeTabText]}
          >
            💻 Bài tập thực hành
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'theory' && styles.activeTabButton]}
          onPress={() => setActiveTab('theory')}
          activeOpacity={0.8}
        >
          <Text
            style={[styles.tabButtonText, activeTab === 'theory' && styles.activeTabText]}
          >
            📚 Câu hỏi lý thuyết
          </Text>
        </TouchableOpacity>
      </View>

      {/* Nội dung tương ứng theo tab */}
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {activeTab === 'practice' ? (
          <View>
            {/* ================= BÀI TẬP 1 ================= */}
            <View style={styles.sectionContainer}>
              <View style={styles.sectionHeader}>
                <View style={styles.badgeNumber}>
                  <Text style={styles.badgeNumberText}>1</Text>
                </View>
                <View>
                  <Text style={styles.sectionTitle}>Bài tập 1: Component Greeting</Text>
                  <Text style={styles.sectionDesc}>
                    Sử dụng Functional Component với prop `name` (tái sử dụng 3 lần)
                  </Text>
                </View>
              </View>

              <Greeting name="Nguyễn Văn A" />
              <Greeting name="Trần Thị Bích Ngọc" />
              <Greeting name="Phạm Xuân Chuẩn" />
            </View>

            {/* ================= BÀI TẬP 2 ================= */}
            <View style={styles.sectionContainer}>
              <View style={styles.sectionHeader}>
                <View style={styles.badgeNumber}>
                  <Text style={styles.badgeNumberText}>2</Text>
                </View>
                <View>
                  <Text style={styles.sectionTitle}>Bài tập 2: Component StudentInfo</Text>
                  <Text style={styles.sectionDesc}>
                    Hiển thị thông tin sinh viên nhận qua props (họ tên, lớp, ngành học)
                  </Text>
                </View>
              </View>

              {studentsList.map((student) => (
                <StudentInfo
                  key={student.id}
                  studentId={student.id}
                  fullName={student.fullName}
                  className={student.className}
                  major={student.major}
                />
              ))}
            </View>

            {/* ================= BÀI TẬP 3 ================= */}
            <View style={styles.sectionContainer}>
              <View style={styles.sectionHeader}>
                <View style={styles.badgeNumber}>
                  <Text style={styles.badgeNumberText}>3</Text>
                </View>
                <View>
                  <Text style={styles.sectionTitle}>Bài tập 3: Component CounterHook</Text>
                  <Text style={styles.sectionDesc}>
                    Quản lý giá trị đếm bằng useState & cập nhật giao diện khi bấm nút
                  </Text>
                </View>
              </View>

              <CounterHook />
            </View>
          </View>
        ) : (
          /* ================= PHẦN LÝ THUYẾT ================= */
          <View>
            <View style={styles.theoryIntroCard}>
              <Text style={styles.theoryIntroTitle}>A. Câu hỏi ôn tập lý thuyết</Text>
              <Text style={styles.theoryIntroText}>
                Nội dung trả lời chi tiết 5 câu hỏi ôn tập lý thuyết tuần 6 về Component, Props, State và Hooks trong React Native.
              </Text>
            </View>

            {/* Câu 1 */}
            <View style={styles.theoryCard}>
              <Text style={styles.questionTitle}>
                Câu 1: Khái niệm Component trong React Native
              </Text>
              <Text style={styles.answerText}>
                • <Text style={styles.bold}>Khái niệm:</Text> Component là một khối mã độc lập, có thể tái sử dụng, chịu trách nhiệm mô tả một phần của giao diện người dùng (UI) và logic hoạt động tương ứng.
              </Text>
              <Text style={styles.answerText}>
                • <Text style={styles.bold}>Vì sao là "khối xây dựng" (Building Blocks)?</Text> Tương tự như những khối gạch lắp ghép (Lego), giao diện của một ứng dụng di động phức tạp được tạo nên bằng cách ghép nối nhiều component nhỏ hơn lại với nhau (từ Button, TextInput cho đến Header, Screen). Cách tiếp cận này giúp chia nhỏ bài toán phức tạp, giúp việc phát triển dễ dàng, độc lập và có tính tổ chức cao.
              </Text>
            </View>

            {/* Câu 2 */}
            <View style={styles.theoryCard}>
              <Text style={styles.questionTitle}>
                Câu 2: Các đặc điểm chính của Component
              </Text>
              <Text style={styles.answerText}>
                • <Text style={styles.bold}>Tính độc lập (Independence):</Text> Mỗi component tự quản lý trạng thái (state) và logic riêng, không phụ thuộc chặt chẽ hoặc làm ảnh hưởng trực tiếp đến component khác.
              </Text>
              <Text style={styles.answerText}>
                • <Text style={styles.bold}>Tính tái sử dụng (Reusability):</Text> Viết mã một lần nhưng có thể hiển thị và gọi dùng ở nhiều màn hình khác nhau bằng cách truyền các bộ dữ liệu khác nhau qua `props`.
              </Text>
              <Text style={styles.answerText}>
                • <Text style={styles.bold}>Tính đóng gói (Encapsulation):</Text> Component ẩn giấu cấu trúc bên trong (JSX, CSS/StyleSheet, hàm xử lý), bên ngoài chỉ cần tương tác qua giao diện props và callbacks.
              </Text>
              <Text style={styles.answerText}>
                • <Text style={styles.bold}>Lợi ích:</Text> Giúp mã nguồn rõ ràng, dễ phân công công việc nhóm, giảm trùng lặp code, kiểm thử đơn giản và dễ dàng mở rộng, bảo trì sau này.
              </Text>
            </View>

            {/* Câu 3 */}
            <View style={styles.theoryCard}>
              <Text style={styles.questionTitle}>
                Câu 3: So sánh Functional Component & Class Component
              </Text>
              <Text style={styles.answerText}>
                • <Text style={styles.bold}>Cú pháp:</Text> Functional Component là hàm JavaScript nhận props và trả về JSX; Class Component kế thừa từ React.Component và cần hàm render().
              </Text>
              <Text style={styles.answerText}>
                • <Text style={styles.bold}>Quản lý State & Vòng đời:</Text> Trước đây chỉ Class Component có state và lifecycle methods (componentDidMount, ...). Từ React 16.8, Functional Component sử dụng Hooks (useState, useEffect) để thực hiện mọi tác vụ này một cách gọn gàng.
              </Text>
              <Text style={styles.answerText}>
                • <Text style={styles.bold}>Vì sao ưu tiên Functional Component + Hooks?</Text> Mã nguồn ngắn gọn hơn, loại bỏ sự phức tạp của con trỏ `this`, khả năng trừu tượng hóa và chia sẻ logic dễ dàng với Custom Hooks, đồng thời tối ưu hiệu năng tốt hơn.
              </Text>
            </View>

            {/* Câu 4 */}
            <View style={styles.theoryCard}>
              <Text style={styles.questionTitle}>
                Câu 4: Vai trò của useState trong Functional Component
              </Text>
              <Text style={styles.answerText}>
                • <Text style={styles.bold}>Vai trò:</Text> `useState` cho phép khai báo và theo dõi biến trạng thái nội tại của một component, cung cấp hàm cập nhật giá trị tương ứng.
              </Text>
              <Text style={styles.answerText}>
                • <Text style={styles.bold}>Vì sao không dùng biến thông thường?</Text> Trong React, biến cục bộ thông thường (let/var) khi bị thay đổi giá trị sẽ <Text style={styles.bold}>KHÔNG</Text> kích hoạt cơ chế render lại (re-render) của component. Hơn nữa, mỗi khi component render lại, các biến thông thường sẽ bị khởi tạo lại giá trị ban đầu. Ngược lại, `useState` giữ nguyên giá trị qua các lần render và tự động kích hoạt cập nhật giao diện khi gọi hàm setter.
              </Text>
            </View>

            {/* Câu 5 */}
            <View style={styles.theoryCard}>
              <Text style={styles.questionTitle}>
                Câu 5: Chức năng của useEffect trong React Native
              </Text>
              <Text style={styles.answerText}>
                • <Text style={styles.bold}>Chức năng:</Text> Quản lý các tác vụ phụ (Side Effects) bên ngoài phạm vi render thuần túy của component (thay thế componentDidMount, componentDidUpdate, componentWillUnmount).
              </Text>
              <Text style={styles.answerText}>
                • <Text style={styles.bold}>Các tình huống thực tế:</Text>
                {'\n'}- Ghi log / Analytics khi màn hình xuất hiện.
                {'\n'}- Gọi API fetch dữ liệu từ server khi component vừa được mount.
                {'\n'}- Đăng ký lắng nghe sự kiện (Keyboard, NetInfo, AppState) và dọn dẹp (cleanup) khi unmount.
                {'\n'}- Quản lý đồng hồ bấm giờ (setInterval, setTimeout) và hủy timer khi rời màn hình.
              </Text>
            </View>
          </View>
        )}

        <View style={styles.footer}>
          <Text style={styles.footerText}>© 2026 Pham Xuan Chuan • React Native Week 6</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 12,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  headerSubtitle: {
    fontSize: 11,
    fontWeight: '700',
    color: '#2563EB',
    letterSpacing: 1.2,
    marginBottom: 4,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#111827',
  },
  authorTag: {
    fontSize: 13,
    color: '#6B7280',
    marginTop: 4,
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#E5E7EB',
    padding: 4,
    marginHorizontal: 16,
    marginTop: 12,
    marginBottom: 6,
    borderRadius: 10,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 8,
  },
  activeTabButton: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  tabButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6B7280',
  },
  activeTabText: {
    color: '#2563EB',
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 30,
  },
  sectionContainer: {
    marginBottom: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  badgeNumber: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#2563EB',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  badgeNumberText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1F2937',
  },
  sectionDesc: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 1,
  },
  theoryIntroCard: {
    backgroundColor: '#EFF6FF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#BFDBFE',
  },
  theoryIntroTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1E40AF',
    marginBottom: 4,
  },
  theoryIntroText: {
    fontSize: 13,
    color: '#3B82F6',
    lineHeight: 18,
  },
  theoryCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 1,
  },
  questionTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
    paddingBottom: 8,
  },
  answerText: {
    fontSize: 13.5,
    color: '#374151',
    lineHeight: 20,
    marginBottom: 8,
  },
  bold: {
    fontWeight: 'bold',
    color: '#111827',
  },
  footer: {
    alignItems: 'center',
    paddingVertical: 16,
  },
  footerText: {
    fontSize: 12,
    color: '#9CA3AF',
  },
});
