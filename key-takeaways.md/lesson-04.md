# JavaScript
1. **<span style="color:#66CCFF">Phạm vi của biến</span>**
- Var: có thể truy cập được vào biến trước khi khai báo
- Let: Không thể truy cập được trước khi khai báo
2. **<span style="color:#66CCFF">Điều kiện nâng cao</span>**
- if...else
    - Công dụng: Dùng để kiểm tra một điều kiện, nếu đúng thì làm A, nếu sai thì làm B.
    - Ví dụ:

            let age = 20;
            if (age >= 18) {
            console.log("Bạn đã đủ 18 tuổi.");
            } else {
            console.log("Bạn chưa đủ 18 tuổi.");
            }

- if...else...if
    - Công dụng: Dùng khi có nhiều điều kiện cần kiểm tra.
    - Cú pháp:

            if (điều_kiện1) {
            // code 1
            } else if (điều_kiện2) {
            // code 2
            } else {
            // code mặc định nếu không có điều kiện nào đúng
            }

    - Ví dụ:
                
            let score = 75;

            if (score >= 90) {
            console.log("Xuất sắc");
            } else if (score >= 75) {
            console.log("Khá");
            } else if (score >= 50) {
            console.log("Trung bình");
            } else {
            console.log("Yếu");
            }
    
- switch...case
    - Công dụng: Dùng để thay thế cho nhiều if...else if khi so sánh một biến cụ thể với nhiều giá trị.
    - Cú pháp:

                switch (biểu_thức) {
            case giá_trị1:
                // code 1
                break;
            case giá_trị2:
                // code 2
                break;
            default:
                // code mặc định nếu không khớp case nào
            }

    - Ví dụ:

            let day = 3;

            switch (day) {
            case 1:
                console.log("Thứ Hai");
                break;
            case 2:
                console.log("Thứ Ba");
                break;
            case 3:
                console.log("Thứ Tư");
                break;
            default:
                console.log("Không xác định");
            }


- So sánh:
    - == và != (so sánh tương đối -- ép kiểu tự động nếu khác kiểu dữ liệu)
        - Ví dụ:

                console.log(5 == "5");      // true   (ép "5" thành số 5)
                console.log(0 == false);    // true   (ép false -> 0)
                console.log(null == undefined); // true
                console.log(5 != "5");      // false  (vì sau ép kiểu: 5 == 5)

    - ===, !== (so sánh tuyệt đối)
        - Ví dụ:

                console.log(5 === "5");     // false  (số vs string)
                console.log(0 === false);   // false  (number vs boolean)
                console.log(null === undefined); // false (khác kiểu)
                console.log(5 !== "5");     // true   (khác kiểu nên khác nhau)

3. **<span style="color:#66CCFF">Vòng lặp nâng cao</span>**
- for...in
    - dùng cho: Object hoặc array (ít dùng)
    - duyệt: các key (property names) trong object
    - ví dụ: 

            const person = { name: "Nga", age: 25 };

            for (let key in person) {
            console.log(key, person[key]);
            }
            // name Nga
            // age 25
    - Với array: chỉ duyệt qua chỉ số (index) không phải giá trị

            const arr = ["a", "b", "c"];

            for (let i in arr) {
            console.log(i, arr[i]); // 0 a, 1 b, 2 c
            }


- forEach
    - dùng cho: Array
    - duyệt: trực tiếp qua các giá trị trong mảng
    - ví dụ: 

            const arr = ["a", "b", "c"];

            arr.forEach((value, index) => {
            console.log(index, value);
            });
            // 0 a
            // 1 b
            // 2 c

- for...of
    - dùng cho: Array
    - duyệt: trực tiếp qua các giá trị
    - ví dụ: 

            const arr = ["a", "b", "c"];

            for (let value of arr) {
            console.log(value);
            }
            // a
            // b
            // c

- break
    - Công dụng: Dùng để thoát hẳn khỏi vòng lặp ngay lập tức, dù điều kiện vòng lặp chưa kết thúc. Thường dùng khi đã tìm thấy kết quả cần thiết và không cần lặp nữa.
    - Ví dụ:

            for (let i = 1; i <= 10; i++) {
            if (i === 5) {
                break; // dừng vòng lặp khi gặp 5
            }
            console.log(i);
            }
            // Output: 1 2 3 4
- continue
    - Công dụng: Bỏ qua lần lặp hiện tại, chuyển sang lần lặp tiếp theo. Thường dùng khi muốn bỏ qua một số điều kiện đặc biệt.
    - Ví dụ: 

            for (let i = 1; i <= 5; i++) {
            if (i === 3) {
                continue; // bỏ qua số 3, nhảy sang 4
            }
            console.log(i);
            }
            // Output: 1 2 4 5

4. **<span style="color:#66CCFF">Until function</span>**
- String utils function
    - trim()
        - Công dụng: Xóa khoảng trắng ở đầu và cuối chuỗi.
        - Ví dụ:

                let str = "   Hello World   ";
                console.log(str.trim()); // "Hello World"

    - toLowerCase() và toUpperCase()
        - Công dụng:

                toLowerCase(): chuyển toàn bộ ký tự thành chữ thường.
                toUpperCase(): chuyển toàn bộ ký tự thành chữ hoa.
        - Ví dụ:

                let str = "Hello World";
                console.log(str.toLowerCase()); // "hello world"
                console.log(str.toUpperCase()); // "HELLO WORLD"

    - includes()
        - Công dụng: Kiểm tra xem chuỗi có chứa đoạn ký tự con không. Trả về true/false.
        - Ví dụ:

                let str = "Hello World";
                console.log(str.includes("World")); // true
                console.log(str.includes("world")); // false (phân biệt hoa/thường)

    - replace()
        - Công dụng: Thay thế một đoạn chuỗi bằng đoạn chuỗi khác.
        - Ví dụ: 
        
                let str = "Hello World";
                console.log(str.replace("World", "Nga")); // "Hello Nga"

    - split()
        - Công dụng: Cắt chuỗi thành mảng dựa theo ký tự phân tách.
        - Ví dụ:
        
                let str = "a,b,c,d";
                console.log(str.split(",")); // ["a", "b", "c", "d"]

                let str2 = "Hello World";
                console.log(str2.split(" ")); // ["Hello", "World"]

    - substring()
        - Công dụng: Cắt một phần chuỗi từ vị trí start đến end (không bao gồm end).
        - Ví dụ:

                let str = "Hello World";
                console.log(str.substring(0, 5)); // "Hello"
                console.log(str.substring(6));    // "World" (từ 6 đến hết)

    - indexOf()
        - Công dụng: Trả về vị trí đầu tiên (index) của chuỗi con. Nếu không tìm thấy → -1.
        - Ví dụ:

                let str = "Hello World";
                console.log(str.indexOf("World")); // 6
                console.log(str.indexOf("o"));     // 4 (gặp chữ 'o' đầu tiên)
                console.log(str.indexOf("x"));     // -1 (không có)

- Array utils function
    - map()
        - Công dụng: Tạo mảng mới bằng cách áp dụng một hàm cho từng phần tử trong mảng gốc.
        - Ví dụ:

                const nums = [1, 2, 3];
                const squared = nums.map(n => n * n);
                console.log(squared); // [1, 4, 9]

    - filter()
        - Công dụng: Lọc ra các phần tử thỏa mãn điều kiện, trả về mảng mới.
        - Ví dụ:

                const nums = [1, 2, 3, 4, 5];
                const even = nums.filter(n => n % 2 === 0);
                console.log(even); // [2, 4]

    - find()
        - Công dụng: Trả về phần tử đầu tiên thỏa điều kiện. Nếu không có → undefined.
        - Ví dụ:

                const nums = [1, 2, 3, 4, 5];
                const firstEven = nums.find(n => n % 2 === 0);
                console.log(firstEven); // 2

    - reduce()
        - Công dụng: Gộp (reduce) tất cả phần tử trong mảng thành một giá trị duy nhất.
        - Ví dụ:

                arr.reduce((accumulator, currentValue) => ..., initialValue);

    - some()
        - Công dụng: Kiểm tra nếu ít nhất 1 phần tử thỏa điều kiện → true.
        - Ví dụ:
            
                const nums = [1, 2, 3];
                console.log(nums.some(n => n > 2)); // true (có số 3)
                console.log(nums.some(n => n > 5)); // false

    - every()
        - Công dụng: Kiểm tra nếu tất cả phần tử thỏa điều kiện → true.
        - Ví dụ:

                const nums = [2, 4, 6];
                console.log(nums.every(n => n % 2 === 0)); // true
                console.log(nums.every(n => n > 5)); // false

    - push()
        - Công dụng: Thêm phần tử vào cuối mảng. Trả về độ dài mới của mảng.
        - Ví dụ:

                const arr = [1, 2];
                arr.push(3);
                console.log(arr); // [1, 2, 3]

    - shift()
        - Công dụng: Xóa phần tử đầu tiên trong mảng, trả về phần tử bị xóa.
        - Ví dụ:

                const arr = [1, 2, 3];
                const first = arr.shift();
                console.log(first); // 1
                console.log(arr);   // [2, 3]

    - sort()
        - Công dụng: Sắp xếp mảng (mặc định theo chuỗi Unicode). Có thể truyền hàm so sánh để sắp xếp số.
        - Ví dụ:

                const arr = ["banana", "apple", "cherry"];
                arr.sort();
                console.log(arr); // ["apple", "banana", "cherry"]
                ---------------------------------------------

                const arr = ["banana", "apple", "cherry"];
                arr.sort();
                console.log(arr); // ["apple", "banana", "cherry"]