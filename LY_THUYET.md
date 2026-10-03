# BÁO CÁO BÀI TẬP TUẦN 6: REACT NATIVE & EXPO
**Học phần:** Phát triển ứng dụng di động với React Native  
**Chủ đề:** Components, Props, State và Hooks trong React Native  
**Sinh viên thực hiện:** Phạm Xuân Chuẩn  

---

## PHẦN A: CÂU HỎI ÔN TẬP LÝ THUYẾT

### Câu hỏi 1:
**Hãy trình bày khái niệm component trong React Native. Theo anh/chị, vì sao có thể xem component là các “khối xây dựng” cơ bản để tạo nên giao diện người dùng của một ứng dụng mobile?**

#### Trả lời:
1. **Khái niệm Component trong React Native:**
   - Trong React Native, **Component** là một đơn vị mã nguồn độc lập, có thể tái sử dụng, chịu trách nhiệm định nghĩa diện mạo (giao diện - UI) và hành vi (logic xử lý) của một phần ứng dụng.
   - Component nhận các giá trị đầu vào gọi là `props` (properties) và quản lý trạng thái nội tại gọi là `state`, sau đó trả về các phần tử JSX (được React Native biên dịch thành các Native View tương ứng trên Android và iOS như `UIView` hoặc `android.view.View`).

2. **Vì sao xem Component là các “khối xây dựng” (Building Blocks) cơ bản?**
   - **Tư duy lắp ghép (Lego-like Architecture):** Giống như việc xây dựng một ngôi nhà từ các viên gạch hoặc lắp ráp đồ chơi Lego từ các khối nhỏ, giao diện của một ứng dụng di động phức tạp (màn hình Home, Profile, Checkout,...) được hình thành bằng cách kết hợp, lồng ghép nhiều component nhỏ hơn (Button, Text, Image, Header, Card, List,...).
   - **Chia để trị (Divide and Conquer):** Thay vì viết hàng nghìn dòng mã trong một file duy nhất rất khó kiểm soát, lập trình viên chia nhỏ giao diện thành từng component chuyên biệt với phạm vi trách nhiệm duy nhất (Single Responsibility Principle).
   - **Phát triển độc lập & dễ dàng kiểm thử:** Các thành viên trong nhóm có thể phát triển song song các component khác nhau mà không lo xung đột, đồng thời có thể viết unit test riêng lẻ cho từng component.

---

### Câu hỏi 2:
**Hãy phân tích các đặc điểm chính của component như tính độc lập, tính tái sử dụng và tính đóng gói. Trong quá trình phát triển một ứng dụng React Native, các đặc điểm này giúp ích như thế nào cho việc quản lý và bảo trì mã nguồn?**

#### Trả lời:
1. **Phân tích các đặc điểm chính:**
   - **Tính độc lập (Independence):** Mỗi component hoạt động như một thực thể tự cung tự cấp. Trạng thái (state) và logic xử lý của component này không ảnh hưởng tiêu cực hoặc làm sập component khác. Nếu một component gặp sự cố, ta dễ dàng cô lập và khắc phục lỗi.
   - **Tính tái sử dụng (Reusability):** Một component sau khi được định nghĩa có thể được gọi và sử dụng ở nhiều vị trí khác nhau trong một màn hình, hoặc xuyên suốt toàn bộ ứng dụng bằng cách truyền vào các tập dữ liệu `props` khác nhau (ví dụ: Button tùy biến có thể dùng cho màn hình Login, Đăng ký, Thanh toán,...).
   - **Tính đóng gói (Encapsulation):** Toàn bộ cấu trúc giao diện (JSX), logic xử lý (handlers, effects) và định kiểu (StyleSheet) đều được gói gọn bên trong component. Bên ngoài chỉ tương tác với component thông qua giao tiếp công khai (public contract) là `props` và `callbacks`, không cần biết cấu trúc chi tiết bên trong.

2. **Lợi ích đối với việc quản lý và bảo trì mã nguồn:**
   - **Giảm thiểu trùng lặp mã (DRY - Don't Repeat Yourself):** Tránh việc copy-paste code giao diện tương tự nhau, giúp codebase gọn gàng, giảm dung lượng bundle của app.
   - **Bảo trì và sửa đổi dễ dàng:** Khi cần thay đổi thiết kế hoặc sửa một lỗi giao diện (ví dụ đổi màu thương hiệu của Button), lập trình viên chỉ cần sửa đúng tại một file component gốc, toàn bộ ứng dụng sẽ tự động được cập nhật đồng nhất.
   - **Dễ dàng mở rộng quy mô (Scalability):** Cho phép xây dựng một hệ thống Design System chuẩn hóa (UI Kit) cho dự án, giúp ứng dụng phát triển lớn mạnh mà không bị rối loạn cấu trúc.

---

### Câu hỏi 3:
**Hãy so sánh Functional Component và Class Component trong React Native. Theo anh/chị, vì sao hiện nay Functional Component thường được ưu tiên sử dụng hơn khi kết hợp với Hooks?**

#### Trả lời:
1. **Bảng so sánh Functional Component và Class Component:**

| Tiêu chí so sánh | Functional Component (với Hooks) | Class Component |
| :--- | :--- | :--- |
| **Cú pháp khai báo** | Là một hàm JavaScript thông thường (`function` hoặc Arrow Function). Ngắn gọn, súc tích. | Là một Class ES6 kế thừa từ `React.Component`, bắt buộc phải có phương thức `render()`. |
| **Quản lý State** | Sử dụng Hook `useState`, `useReducer`. Khai báo linh hoạt nhiều biến state độc lập. | Quản lý thông qua đối tượng `this.state` duy nhất và cập nhật bằng `this.setState()`. |
| **Quản lý Vòng đời (Lifecycle)** | Sử dụng Hook `useEffect` để thay thế toàn diện cho Mount, Update, Unmount. | Phân tán qua nhiều phương thức riêng lẻ: `componentDidMount`, `componentDidUpdate`, `componentWillUnmount`. |
| **Từ khóa `this`** | Không cần dùng từ khóa `this`, tránh được các lỗi phổ biến về binding context. | Bắt buộc sử dụng `this.props`, `this.state`, phải bind hàm trong constructor hoặc dùng arrow function. |
| **Khả năng tái sử dụng Logic** | Dễ dàng chia sẻ và đóng gói logic phi hình ảnh thông qua **Custom Hooks**. | Khó tái sử dụng logic hơn, phải sử dụng Higher-Order Components (HOC) hoặc Render Props gây lồng ghép phức tạp ("Wrapper Hell"). |
| **Hiệu năng & Tối ưu** | Nhẹ hơn, bundle size nhỏ hơn, tối ưu tốt hơn với công cụ biên dịch (minification). | Dung lượng code lớn hơn, tốn bộ nhớ hơn do chi phí khởi tạo instance class. |

2. **Vì sao Functional Component + Hooks được ưu tiên hàng đầu hiện nay?**
   - **Code tinh gọn, dễ đọc, dễ hiểu:** Giảm thiểu đáng kể mã "boilerplate", tập trung thẳng vào logic nghiệp vụ và giao diện.
   - **Tránh bẫy con trỏ `this`:** Loại bỏ hoàn toàn sự nhầm lẫn về phạm vi của `this` trong JavaScript vốn là rào cản lớn với người mới học.
   - **Tổ chức mã logic theo tính năng thay vì theo vòng đời:** Trong Class Component, logic liên quan đến một tính năng (ví dụ: đăng ký và hủy socket) bị xé nhỏ đặt ở 2 hàm khác nhau (`componentDidMount` và `componentWillUnmount`). Với `useEffect`, toàn bộ logic liên quan được gom gọn vào một chỗ duy nhất.
   - **Định hướng chiến lược của React Core Team:** React và React Native đều tối ưu hóa các tính năng mới (Concurrent Mode, Server Components, Fast Refresh, Suspense) dành riêng cho Functional Components.

---

### Câu hỏi 4:
**Hãy giải thích vai trò của useState trong Functional Component. Khi xây dựng một giao diện có dữ liệu thay đổi theo thao tác của người dùng, vì sao cần sử dụng state thay vì chỉ dùng biến thông thường?**

#### Trả lời:
1. **Vai trò của `useState` trong Functional Component:**
   - `useState` là một React Hook cơ bản cho phép Functional Component lưu trữ và theo dõi trạng thái cục bộ (local state).
   - Cú pháp: `const [state, setState] = useState(initialValue);`
   - `useState` trả về một mảng gồm 2 phần tử: giá trị trạng thái hiện tại (`state`) và một hàm dùng để cập nhật giá trị đó (`setState`).

2. **Vì sao cần sử dụng `state` thay vì biến thông thường (let/var)?**
   - **Cơ chế Re-render của React:** Khi một biến thông thường (ví dụ: `let count = 0; count++;`) thay đổi giá trị, React hoàn toàn **không nhận biết được sự thay đổi này**, do đó React **sẽ không kích hoạt quá trình render lại (re-render)** giao diện. Người dùng sẽ không nhìn thấy bất kỳ sự thay đổi nào trên màn hình.
   - **Tính bền vững của dữ liệu qua các lần render:** Trong Functional Component, mỗi khi component render lại (do prop thay đổi hoặc component cha re-render), toàn bộ thân hàm sẽ được thực thi lại từ đầu. Các biến cục bộ thông thường sẽ bị **khởi tạo lại về giá trị ban đầu** (`count` lại trở về 0). Ngược lại, giá trị lưu trữ bởi `useState` được React giữ lại nguyên vẹn giữa các chu kỳ render.
   - **Kích hoạt Virtual DOM diffing:** Khi gọi hàm setter (ví dụ `setCount(count + 1)`), React sẽ ghi nhận trạng thái mới, lên lịch re-render component, so sánh chênh lệch (reconciliation) và cập nhật chính xác phần tử giao diện tương ứng trên màn hình một cách mượt mà và tối ưu.

---

### Câu hỏi 5:
**Hãy trình bày chức năng của useEffect trong React Native. Nêu một số tình huống thực tế có thể sử dụng useEffect, chẳng hạn như ghi log sau khi render, gọi API hoặc xử lý tác vụ phụ trong component.**

#### Trả lời:
1. **Chức năng của `useEffect` trong React Native:**
   - `useEffect` là Hook dùng để thực thi các **tác vụ phụ (Side Effects)** trong Functional Component. Side effects là những tác vụ can thiệp ra bên ngoài phạm vi của việc tính toán và trả về JSX thuần túy.
   - Cú pháp tổng quát:
     ```javascript
     useEffect(() => {
       // Thực hiện side-effect ở đây

       return () => {
         // Cleanup function (dọn dẹp khi unmount hoặc trước khi effect chạy lại)
       };
     }, [dependencies]);
     ```
   - Điều khiển tần suất thực thi thông qua mảng phụ thuộc (`dependencies`):
     - Không truyền mảng deps: Chạy sau mỗi lần render.
     - Truyền mảng rỗng `[]`: Chỉ chạy một lần duy nhất sau lần render đầu tiên (tương đương `componentDidMount`).
     - Truyền mảng có biến `[propA, stateB]`: Chạy sau lần đầu tiên và mỗi khi một trong các giá trị phụ thuộc thay đổi.

2. **Một số tình huống thực tế sử dụng `useEffect`:**
   - **Gọi API để lấy dữ liệu từ máy chủ (Data Fetching):**
     Ngay khi màn hình danh sách sản phẩm hoặc hồ sơ cá nhân hiển thị lần đầu, sử dụng `useEffect` với `[]` để gọi `fetch()` hoặc `axios` lấy dữ liệu và cập nhật vào `state`.
   - **Ghi nhận nhật ký (Logging) & Đo lường Analytics:**
     Gửi sự kiện phân tích người dùng xem màn hình (screen view analytics) hoặc log thông số mỗi khi người dùng thay đổi bộ lọc tìm kiếm.
   - **Thiết lập đồng hồ bấm giờ (Timers/Intervals):**
     Ví dụ làm bộ đếm ngược mã OTP: dùng `setInterval` trong `useEffect` và bắt buộc trả về hàm cleanup `clearInterval` để hủy bộ đếm khi người dùng rời màn hình, tránh rò rỉ bộ nhớ (memory leak).
   - **Đăng ký lắng nghe sự kiện hệ thống (Subscriptions & Event Listeners):**
     Lắng nghe bàn phím mở/đóng (`Keyboard.addListener`), kiểm tra kết nối mạng (`NetInfo.addEventListener`), trạng thái ứng dụng vào nền (`AppState.addEventListener`) và gỡ bỏ listener khi component unmount.

---

## PHẦN B: BÀI TẬP THỰC HÀNH

### Bài tập 1: Component Greeting
- **Yêu cầu:** Tạo Functional Component nhận prop `name` và hiển thị lời chào. Dùng ít nhất 2 lần với 2 tên khác nhau trong App.js.
- **File thực hiện:** `src/components/Greeting.js`
- **Mã nguồn:**
```javascript
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Greeting = ({ name }) => {
  return (
    <View style={styles.card}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>{name ? name.charAt(0).toUpperCase() : '?'}</Text>
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
```

---

### Bài tập 2: Component StudentInfo
- **Yêu cầu:** Xây dựng component hiển thị họ tên, lớp, ngành học từ props. Trong App.js hiển thị danh sách sinh viên.
- **File thực hiện:** `src/components/StudentInfo.js`
- **Mã nguồn:**
```javascript
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

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
```

---

### Bài tập 3: Component CounterHook
- **Yêu cầu:** Tạo component sử dụng `useState` quản lý giá trị đếm ban đầu là 0, hiển thị số lần bấm và nút "Tăng".
- **File thực hiện:** `src/components/CounterHook.js`
- **Mã nguồn:**
```javascript
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CounterHook = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  const handleDecrement = () => {
    if (count > 0) setCount(prevCount => prevCount - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Bộ đếm sử dụng Hook useState</Text>
      <View style={styles.displayContainer}>
        <Text style={styles.label}>Số lần bấm:</Text>
        <View style={styles.badgeCount}>
          <Text style={styles.countText}>{count}</Text>
        </View>
      </View>
      <View style={styles.buttonGroup}>
        <TouchableOpacity style={styles.incrementButton} onPress={handleIncrement}>
          <Text style={styles.buttonText}>➕ Tăng (+1)</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.decrementButton} onPress={handleDecrement}>
          <Text style={styles.buttonText}>➖ Giảm</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
          <Text style={styles.buttonText}>🔄 Đặt lại</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
```
