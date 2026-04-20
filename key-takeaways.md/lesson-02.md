# Version control system
1. **<span style="color:#66CCFF">Định nghĩa</span>**
- VCS (Version Control System): Hệ thông quản lý các phiên bản
2. **<span style="color:#66CCFF">Các loại VCS</span>**
- *Local*: Lưu ở máy cá nhân
- *Centralize*: Lưu ở 1 máy chủ tập trung
- *Distributed*: lưu ở nhiều máy khác nhau
# Git
1. **<span style="color:#66CCFF">Khởi tạo git</span>**
- Câu lệnh: `git init`
2. **<span style="color:#66CCFF">Cấu hình git</span>**
- *Cấu hình cho 1 repo cụ thể*
    - `git config user.name "<name>"`
    - `git config user.email "<name>"`
- *Cấu hình cho toàn bộ máy tính*
    - `git config --global user.name "<name>"`
    - `git config --global user.email "<name>"`
3. **<span style="color:#66CCFF">Thêm file vào vùng staging</span>**
- *Thêm 1 file*
    - `git add <file_name>`
- *Thêm toàn bộ file*
    - `git add .`
4. **<span style="color:#66CCFF">Xem trạng thái file</span>**
- Câu lệnh: `git status`
- <span style="color:green">File màu xanh</span>: vùng staging
- <span style="color:red">File màu đỏ</span>: vùng working directory
- <span style="color:grey">File màu xám</span>: repository
5. **<span style="color:#66CCFF">Commit</span>**
- *Câu lệnh*: `git commit -m"message"`
- *Kiểm tra lịch sử commit*: `git log`
- *Commit convention:* `<type>: <short_description>`
    - type: loại commit
        - chore: sửa nhỏ lẻ, chính tả, xóa
file không dùng tới,...
        - feat: thêm tính năng mới, test
case mới
        - fix: sửa lỗi 1 test trước đó
    - short_description: mô tả ngắn gọn
(50 kí tự), tiếng Anh hoặc tiếng Việt
không dấu.
6. **<span style="color:#66CCFF">Git simple workflow</span>**
![Git Simple Workflow](./../images/git-workflow.png)
# JavaScript
1. **<span style="color:#66CCFF">Console log/span>**
- Đây là lệnh in ra màn hình: `console.log(<biến cần in ra>)`
2. **<span style="color:#66CCFF">Variable</span>**
- Cấu trúc: <tên biến> <giá trị của biến>
- Các kiểu khai báo biến
    - var: khai báo lại được, phạm vi cụ bộ (global)
    - let: k khai báo lại được, phạm vi trong cặp ngoăc {}
    - const: hằng số, khai báo các giá trị k thể thay đổi
3. **<span style="color:#66CCFF">Data type</span>**
- Có nhiều kiểu dữ liệu: String, Number, Bigint, Boolean, Undefined, Null, Symbol, Object
4. **<span style="color:#66CCFF">Comparison operator</span>**
- *Comparison operator*: Dùng để so sánh giá trị giữa 2 biến với
nhau. Kết quả sẽ trả về Boolean (true
hoặc false).
    - So sánh hơn kém: >, <
    - So sánh bằng: ==, ===,!=, !==,>=, <=
- *Unary operator*: toán tử 1 ngôi, dùng để tăng hoặc giảm giá
trị
    - i++ bằng với i=i+1
    - i-- bằng với i=i-1
- *Arithmetic operator*: toán tử
số học, dùng tính toán giá trị biểu
thức
    - Các phép toán: +, -, *, /
5. **<span style="color:#66CCFF">Condition</span>**
- Conditional: điều kiện, dùng để kiểm tra
có nên thực hiện một đoạn logic không.
    - Cú pháp: if (<điều kiện>) { // code }.
6. **<span style="color:#66CCFF">Loop</span>**
- Loop: vòng lặp, dùng để thực hiện một đoạn logic một
số lần nhất định
    - Cú pháp: for(<khởi tạo>; <điều
kiện chạy>; <điều kiện tăng>) {
// code }