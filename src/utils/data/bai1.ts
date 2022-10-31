export default [
  {
    title: '1. Giới thiệu về HTML',
    contents: [
      'HTML là viết tắt của Hyper Text Markup Language',
      'HTML mô tả cấu trúc của một trang Web',
      'HTML bao gồm một loạt các phần tử',
      'Các phần tử HTML cho trình duyệt biết cách hiển thị nội dung',
      'Các phần tử HTML được đại diện bởi các thẻ',
      'Ví dụ: ',
    ],
    img: require('assets/images/b1a1.png'),
  },
  {
    title: '2. HTML Element',
    contentWithImg: [
      {
        img: require('assets/images/b1a3.png'),
        contents: [
          'Các thuộc tính luôn được chỉ định trong thẻ bắt đầu',
          'Các thuộc tính thường có trong các cặp tên (name) / giá trị (value) như: name = "value"',
          'Thuộc tính class(Attribute class): Định nghĩa kiểu bằng nhau cho các phần tử có cùng tên lớp.',
        ],
        contents1: [],
      },
      {
        img: require('assets/images/b1a4.png'),
        img2: '',
        contents: [
          'Lồng HTML (Nesting HTML):',
          'Các phần tử HTML có thể được lồng vào nhau (phần tử có thể chứa phần tử).',
          'Tất cả các tài liệu HTML đều bao gồm các phần tử HTML lồng nhau',
        ],
      },
    ],
  },
  {
    title: '3. Block và Inline',
    subcontents: [
      {
        title: 'a) Block ',
        contentWithImg: [
          {
            img: require('assets/images/b1a5.png'),
            contents: [
              'Block Element luôn bắt đầu trên một dòng mới và chiếm toàn bộ chiều rộng có sẵn (kéo dài sang trái và phải hết mức có thể).',
            ],
          },
        ],
      },
      {
        title: 'b) Inline',
        contentWithImg: [
          {
            img: require('assets/images/b1a6.png'),
            contents: [
              'Inline Element không bắt đầu trên một dòng mới và chỉ chiếm chiều rộng bằng cần thiết.',
            ],
          },
        ],
      },
    ],
  },
];
