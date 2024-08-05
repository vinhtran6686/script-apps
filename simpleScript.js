console.log("Simple JS script has been loaded and run212312312!");
alert("Simple JS script has been loaded and run!");

// Tạo một phần tử div mới
var newDiv = document.createElement('div');
newDiv.innerText = 'Đây là phần tử mới được thêm vào!'; // Thiết lập nội dung text cho div
newDiv.style.color = 'red'; // Đặt màu chữ là đỏ cho div
newDiv.style.fontSize = '20px'; // Đặt kích thước font cho div

// Lấy phần tử .root đầu tiên trong tài liệu
var parentNode = document.querySelector('.root');

// Thêm phần tử div mới vào trong phần tử .root
parentNode.appendChild(newDiv);
