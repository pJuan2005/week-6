# React Native - Tuần 6: Components, Props, State và Hooks

Bài tập luyện tập tuần 6 môn **Lập trình ứng dụng di động với React Native** (sử dụng Expo).

- **Sinh viên thực hiện:** Phạm Xuân Chuẩn
- **Repository:** [week-6](https://github.com/pjuan2005/week-6)
- **Công nghệ sử dụng:** React Native, Expo, React Hooks (`useState`, `useEffect`)

---

## 📑 Mục lục
1. [Cấu trúc thư mục dự án](#-cấu-trúc-thư-mục-dự-án)
2. [Hướng dẫn cài đặt và chạy ứng dụng](#-hướng-dẫn-cài-đặt-và-chạy-ứng-dụng)
3. [Phần A: Câu hỏi ôn tập lý thuyết](#-phần-a-câu-hỏi-ôn-tập-lý-thuyết)
   - [Câu 1: Khái niệm Component & Khối xây dựng UI](#câu-hỏi-1-khái-niệm-component-trong-react-native)
   - [Câu 2: Các đặc điểm chính của Component](#câu-hỏi-2-các-đặc-điểm-chính-của-component)
   - [Câu 3: So sánh Functional Component & Class Component](#câu-hỏi-3-so-sánh-functional-component-và-class-component)
   - [Câu 4: Vai trò của useState](#câu-hỏi-4-vai-trò-của-usestate-trong-functional-component)
   - [Câu 5: Chức năng của useEffect & Tình huống thực tế](#câu-hỏi-5-chức-năng-của-useeffect-trong-react-native)
4. [Phần B: Bài tập thực hành](#-phần-b-bài-tập-thực-hành)
   - [Bài tập 1: Component Greeting](#bài-tập-1-component-greeting)
   - [Bài tập 2: Component StudentInfo](#bài-tập-2-component-studentinfo)
   - [Bài tập 3: Component CounterHook](#bài-tập-3-component-counterhook)

---

## 📁 Cấu trúc thư mục dự án

```text
week-6/
├── assets/                  # Hình ảnh biểu tượng, icon, splash
├── src/
│   └── components/
│       ├── Greeting.js      # [Bài tập 1] Component lời chào sử dụng Props
│       ├── StudentInfo.js   # [Bài tập 2] Component thông tin sinh viên sử dụng Props
│       └── CounterHook.js   # [Bài tập 3] Component bộ đếm sử dụng Hook useState
├── App.js                   # Màn hình chính tích hợp cả 3 bài tập và xem lý thuyết
├── app.json                 # Cấu hình dự án Expo
├── package.json             # Danh sách dependencies và scripts
├── LY_THUYET.md             # Tài liệu trả lời chi tiết 5 câu hỏi lý thuyết
└── README.md                # Tài liệu hướng dẫn và báo cáo tổng quan
```

---

## 🚀 Hướng dẫn cài đặt và chạy ứng dụng

### 1. Cài đặt các gói phụ thuộc (Dependencies)
Mở terminal tại thư mục dự án và chạy:
```bash
npm install
```

### 2. Khởi chạy ứng dụng với Expo
```bash
npx expo start
```
hoặc:
```bash
npm start
```

### 3. Xem kết quả
- **Quét mã QR** trên ứng dụng **Expo Go** (Android/iOS) bằng camera hoặc máy quét mã.
- Hoặc bấm phím `w` trên bàn phím để chạy trực tiếp trên trình duyệt Web.
- Hoặc bấm phím `a` để chạy trên Android Emulator (nếu đã cài sẵn Android Studio).

---

## 📖 Phần A: Câu hỏi ôn tập lý thuyết

Chi tiết đầy đủ xem tại file [LY_THUYET.md](./LY_THUYET.md).

### Câu hỏi 1: Khái niệm Component trong React Native
- **Khái niệm:** Component là khối mã nguồn độc lập, tái sử dụng được, mô tả giao diện (UI) và hành vi tương ứng của một phần ứng dụng.
- **Vì sao là khối xây dựng (Building Blocks):** Ứng dụng mobile được lắp ghép từ các component nhỏ (Lego-like architecture). Cách tiếp cận này giúp chia nhỏ bài toán phức tạp, phát triển song song và dễ kiểm thử.

### Câu hỏi 2: Các đặc điểm chính của Component
- **Tính độc lập:** Quản lý state và logic riêng, không làm ảnh hưởng component khác.
- **Tính tái sử dụng:** Viết 1 lần, sử dụng ở nhiều màn hình thông qua props.
- **Tính đóng gói:** Ẩn giấu chi tiết cài đặt bên trong, chỉ giao tiếp ra ngoài qua props/callbacks.
- **Lợi ích:** Giảm trùng lặp code (DRY), dễ bảo trì, dễ mở rộng quy mô.

### Câu hỏi 3: So sánh Functional Component và Class Component
- **Functional Component:** Cú pháp hàm ngắn gọn, dùng Hooks (`useState`, `useEffect`), không cần con trỏ `this`, dễ tái sử dụng logic với Custom Hooks, hiệu năng tối ưu.
- **Class Component:** Dùng cú pháp class ES6, bắt buộc `render()`, quản lý `this.state` và các hàm vòng đời rời rạc (`componentDidMount`,...), phức tạp về con trỏ `this`.
- **Lý do ưu tiên:** Tinh gọn, dễ bảo trì, tránh bẫy `this`, phù hợp định hướng dài hạn của React.

### Câu hỏi 4: Vai trò của useState trong Functional Component
- **Vai trò:** Quản lý dữ liệu trạng thái nội tại có thể thay đổi trong component.
- **Vì sao không dùng biến thông thường:** Biến thông thường khi đổi giá trị sẽ **không kích hoạt re-render** và sẽ bị reset lại giá trị khởi tạo khi component render lại. `useState` lưu giữ giá trị xuyên suốt chu kỳ render và kích hoạt cập nhật giao diện mượt mà.

### Câu hỏi 5: Chức năng của useEffect trong React Native
- **Chức năng:** Xử lý tác vụ phụ (Side Effects) bên ngoài luồng render giao diện.
- **Tình huống thực tế:**
  1. Ghi log / tracking phân tích người dùng.
  2. Gọi API lấy dữ liệu từ server khi mở màn hình.
  3. Lắng nghe sự kiện (Keyboard, AppState, NetInfo) và hủy đăng ký khi thoát màn hình (cleanup).
  4. Quản lý timer / interval và dọn dẹp bộ nhớ.

---

## 💻 Phần B: Bài tập thực hành

### Bài tập 1: Component `Greeting`
- **Mục tiêu:** Hiểu cách tạo Functional Component và truyền dữ liệu qua `props`.
- **Mã nguồn:** [src/components/Greeting.js](./src/components/Greeting.js)
- **Cách dùng trong App.js:**
```jsx
<Greeting name="Nguyễn Văn A" />
<Greeting name="Trần Thị Bích Ngọc" />
<Greeting name="Phạm Xuân Chuẩn" />
```

### Bài tập 2: Component `StudentInfo`
- **Mục tiêu:** Tái sử dụng component để hiển thị danh sách sinh viên gồm Họ tên, Lớp, Ngành học.
- **Mã nguồn:** [src/components/StudentInfo.js](./src/components/StudentInfo.js)
- **Cách dùng trong App.js:**
```jsx
{studentsList.map((student) => (
  <StudentInfo
    key={student.id}
    studentId={student.id}
    fullName={student.fullName}
    className={student.className}
    major={student.major}
  />
))}
```

### Bài tập 3: Component `CounterHook`
- **Mục tiêu:** Hiểu rõ mối quan hệ giữa `useState`, hàm cập nhật state và quá trình render lại giao diện.
- **Mã nguồn:** [src/components/CounterHook.js](./src/components/CounterHook.js)
- **Tính năng mở rộng:** Có nút Tăng (+1), nút Giảm (-1) và nút Đặt lại (Reset) với giao diện trực quan, kèm hiệu ứng trạng thái.

---
*Bản quyền bài làm thuộc về Phạm Xuân Chuẩn - 2026*
