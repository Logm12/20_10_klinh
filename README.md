# Một Chút Dịu Dàng Dành Cho Em — 20/10 Gift Website 🌷

Website quà tặng 20/10 cá nhân hóa với chủ đề **"Thế giới thực vật & phòng thí nghiệm Hóa - Sinh diệu kỳ"** dành riêng cho cô em gái nhỏ Khánh Linh.

## 🌸 Điểm nổi bật & Cấu trúc trải nghiệm (4 Chương)

1. **Chapter 01: Một điều bất ngờ nhỏ**
   - Hộp quà pastel tinh tế với dải ruy băng mềm mại.
   - Hiệu ứng mở quà kết hợp pháo hoa hoa cỏ nhẹ nhàng (botanical confetti) và lời chào ấm áp.
2. **Chapter 02: Công thức cho một ngày dễ thương**
   - Bình tam giác Erlenmeyer tương tác sinh động với mực chất lỏng và bọt khí li ti.
   - Thả 4 nguyên tố cảm xúc (Niềm vui, Bình yên, May mắn, Yêu thương mang tên gọi Hóa - Sinh thú vị).
   - Đóa hoa nở rộ từ cổ bình khi phản ứng hoàn tất.
3. **Chapter 03: Những điều bé nhỏ về em**
   - Cuốn sổ scrapbook với các khung ảnh polaroid organic, nhãn dán sticker đáng yêu.
   - Tương tác chạm/click để lật mở những mẩu giấy ghi chú và lời nhắn nhủ chân thành từ người anh.
   - Dự phòng thông minh: hiển thị placeholder minh họa trang nhã nếu chưa tải ảnh lên.
4. **Chapter 04: Bức thư gửi em & Khởi đầu dịu êm**
   - Phong thư mở ra trang giấy viết thư trang nhã, font chữ viết tay ấm áp.
   - Lời chúc 20/10 chân tình, tôn trọng và nâng niu cảm xúc của em gái.
   - Nút phát lại trải nghiệm mượt mà từ đầu.

---

## 🛠️ Công nghệ sử dụng

- **Framework**: Next.js 14 (App Router) + React 18
- **Ngôn ngữ**: TypeScript (Type-safe 100%)
- **Styling**: Tailwind CSS với Design Tokens tùy chỉnh theo bảng màu pastel ấm (Cream, Blush pink, Sage green, Soft lavender, Warm brown)
- **Icons & Visuals**: Lucide Icons & Custom Vector SVGs vẽ thủ công
- **Hiệu ứng & Tương tác**: Framer Motion & Canvas Confetti

---

## ⚙️ Hướng dẫn tùy biến nội dung (Tất cả trong 1 file)

Mọi thông tin cá nhân, tên em gái, kỷ niệm, danh sách nguyên tố, lời thư đều được tách bạch tại file:
👉 `src/content/personal.ts`

### 1. Thay đổi tên, biệt danh:
```typescript
sister: {
  name: "Khánh Linh",
  nickname: "Cô Bé Hóa Sinh",
  specialty: "Hóa học & Sinh học 🌿🔬",
}
```

### 2. Thêm ảnh thật của em gái:
- Đặt các file ảnh vào thư mục `public/images/` với tên `memory-1.jpg`, `memory-2.jpg`, v.v.
- Đường dẫn đã được cấu hình sẵn trong `src/content/personal.ts`. Nếu ảnh chưa có hoặc lỗi, website tự động chuyển sang placeholder minh họa mà không làm hỏng giao diện.

### 3. Thêm nhạc nền:
- Đặt file nhạc MP3 vào `public/audio/gentle-piano.mp3`.
- Nút bật/tắt nhạc hiển thị góc dưới màn hình và chỉ phát khi người xem chủ động bấm (không tự động phát gây giật mình).

---

## 🚀 Khởi chạy dự án nội bộ (Local)

```bash
# Cài đặt thư viện (nếu clone về máy mới)
npm install

# Chạy môi trường dev
npm run dev

# Kiểm tra build production
npm run build

# Khởi chạy bản production build
npm start
```
Mở trình duyệt tại [http://localhost:3000](http://localhost:3000).

---

## 🚢 Triển khai lên Vercel

Dự án hoàn toàn tương thích và tối ưu hóa 100% cho Vercel:
1. Kết nối repository GitHub này trên Dashboard Vercel.
2. Vercel sẽ tự động phát hiện Next.js App Router và thiết lập lệnh build `npm run build`.
3. Bấm **Deploy**.
