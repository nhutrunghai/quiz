# 🧠 Quiz API

> Backend nhỏ bằng Node.js/Express để luyện xây dựng server cho ứng dụng quiz.

![Node.js](https://img.shields.io/badge/Node.js-339933?style=plastic&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=plastic&logo=express&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=plastic&logo=javascript&logoColor=000)
![API](https://img.shields.io/badge/REST_API-2563EB?style=plastic)

---

## 📌 Mục tiêu

Repo này là project backend đơn giản để luyện:

- Tạo server bằng **Express.js**
- Cấu hình CORS
- Gọi/lấy dữ liệu bằng `node-fetch`
- Tổ chức một API quiz cơ bản
- Chuẩn bị nền tảng để mở rộng thành hệ thống câu hỏi, điểm số và danh mục

---

## ⚙️ Tech Stack

```text
Runtime    : Node.js
Framework  : Express.js
Language   : JavaScript ES Modules
Packages   : cors, express, node-fetch
```

---

## 🚀 Cách chạy

### 1. Cài dependencies

```bash
npm install
```

### 2. Chạy server

```bash
npm start
```

> Lưu ý: trong `package.json`, script hiện tại chạy `node server.js`. Nếu file chính của bạn là `index.js`, hãy đổi script thành `node index.js` hoặc đổi tên file cho khớp.

---

## 🗂️ Cấu trúc hiện tại

```text
quiz/
├── index.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

---

## 🧹 Cần dọn repo

Hiện repo từng có `node_modules` được commit lên GitHub. Với project public, nên xóa khỏi Git để repo nhẹ và chuyên nghiệp hơn.

Chạy local:

```bash
git rm -r --cached node_modules
git commit -m "Remove committed node_modules"
git push
```

Sau đó chỉ cần giữ:

```text
package.json
package-lock.json
```

Người khác clone repo sẽ tự chạy `npm install`.

---

## 🧭 Roadmap

- [ ] Chuẩn hóa entry file `server.js`/`index.js`
- [ ] Thêm route lấy danh sách câu hỏi
- [ ] Thêm route kiểm tra đáp án
- [ ] Thêm tính điểm quiz
- [ ] Thêm danh mục câu hỏi
- [ ] Viết ví dụ request/response trong README
- [ ] Thêm test cho API

---

## 👨‍💻 Tác giả

Developed by [Nhữ Trung Hải](https://github.com/nhutrunghai)
