export default [
  {
    title: '1.	CSS là gì',
    contents: [
      'CSS là một ngôn ngữ mô tả phong cách của một tài liệu HTML.',
      'CSS là viết tắt của Cascading Style Sheets',
      'CSS mô tả cách các phần tử HTML sẽ được hiển thị trên màn hình, trên giấy, trong lời nói hoặc trên các phương tiện khác.',
    ],
    img: require('assets/images/b5a1.png'),
  },
  {
    title: '2. Cú pháp CSS',
    contentWithImg: [
      {
        img: require('assets/images/b5a2.png'),
        contents: [
          'Mục tiêu cơ bản của ngôn ngữ CSS là cho phép công cụ trình duyệt vẽ các phần tử của trang bằng các tính năng cụ thể, như màu sắc, vị trí hoặc trang trí.',
          'Cú pháp CSS bao gồm: thuộc tính (property), giá trị (value)',
          'Khai báo CSS : 1 thuộc tính và giá trị được gọi là khai báo',
          'Khối khai báo CSS: Các khai báo được nhóm thành các khối',
        ],
      },
    ],
  },
  {
    title: '3.	Inline, Internal, External',
    subcontents: [
      {
        title: '',
        contentWithImg: [
          {
            img: require('assets/images/b5a3.png'),
            contents: [
              'Inline - bằng cách sử dụng thuộc tính style trong các phần tử HTML.',
              'Kiểu inline: Viết trực tiếp trên thẻ thông qua “style”.',
            ],
          },
          {
            img: require('assets/images/b5a5.png'),
            contents: [
              'Internal - bằng cách sử dụng phần tử <style> trong phần <head>.',
              'Kiểu Internal: Chúng ta sẽ code bên trong thẻ “ <style> code css </style>”.',
            ],
          },
          {
            img: require('assets/images/b5a6.png'),
            contents: [
              'External - bằng cách sử dụng tệp CSS bên ngoài.',
              'Kiểu External: Chúng ta cần tạo một file style.css (có phần đuôi là .css) và sau đó import vào file HTML thông qua thẻ link.',
              'Bước 1: Tạo một file style.css với nội dung sau',
              'Bước 2: Tạo một file index.html cùng cấp với file style.css',
            ],
          },
        ],
      },
    ],
  },
];
