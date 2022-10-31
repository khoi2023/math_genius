export default [
  {
    title: '1. Tổng quan về tạo kiểu văn bản',
    contents: [
      'Các thuộc tính CSS được sử dụng để tạo kiểu cho văn bản thường chia thành hai loại:',
      'Kiểu phông chữ: Các thuộc tính ảnh hưởng đến phông chữ được áp dụng cho văn bản, ảnh hưởng đến phông chữ nào được áp dụng, độ lớn của nó, cho dù nó có in đậm, in nghiêng, v.v.',
      'Kiểu bố cục văn bản: Các thuộc tính ảnh hưởng đến khoảng cách và các đặc điểm bố cục khác của văn bản, cho phép thao tác. Ví dụ, khoảng cách giữa các dòng và chữ cái, cũng như cách văn bản được căn chỉnh trong hộp nội dung.',
    ],
  },
  {
    title: '2.	Kiểu văn bản và phông chữ',
    contentWithImg: [
      {
        img: require('assets/images/b6a2.png'),
        contents: [
          'color: Thuộc tính color đặt màu của nội dung nền trước của các phần tử đã chọn',
        ],
      },
      {
        img: require('assets/images/b6a3.png'),
        contents: [
          'Font families: Thuộc tính phông chữ chỉ định phông chữ cho một phần tử.',
          'Có hai loại tên font-family:',
          '-	family-name - Tên của font-family, như "times", "courier", "arial", v.v.',
          '-	generic-family - Tên của một generic-family, như "serif", "sans-serif", "fantasy", "monospace".',
        ],
      },
      {
        contents: [
          'Font:',
          'font-size: Thuộc tính font-size đặt kích thước của phông chữ.',
          'font-style: Thuộc tính font-style chỉ định kiểu phông chữ cho văn bản',
          'font-weight: Thuộc tính font-weight đặt cách hiển thị các ký tự dày hay mỏng trong văn bản.',
          'text-transform: Thuộc tính text-transform kiểm soát việc viết hoa của văn bản.',
          'text-decoration: Thuộc tính trang trí văn bản chỉ định trang trí được thêm vào văn bản',
        ],
      },
      {
        contents: [
          'Bố cục văn bản:',
          'Căn chỉnh văn bản (Text alignment) : Thuộc tính text-align được sử dụng để kiểm soát cách văn bản được căn chỉnh trong hộp nội dung chứa nó (trái, phải, chính giữa, căn đều).',
          'Chiều cao dòng (Line height) : Thuộc tính line-height chỉ định chiều cao của một dòng.',
          'Khoảng cách giữa các chữ và từ (Letter and word spacing): Các thuộc tính letter-spacing và word-spacing cho phép bạn đặt khoảng cách giữa các chữ cái và các từ trong văn bản của mình.',
        ],
      },
    ],
  },
  {
    title: '3.	Tạo kiểu danh sách',
    subcontents: [
      {
        title: '',
        contentWithImg: [
          {
            img: require('assets/images/b6a4.png'),
            contents: [
              'Bullet styles: Thuộc tính list-style-type chỉ định loại điểm đánh dấu mục danh sách.',
            ],
          },
          {
            img: require('assets/images/b6a5.png'),
            contents: [
              'Bullet styles: một số giá trị của thuộc tính list-style-type',
            ],
          },
          {
            img: require('assets/images/b6a6.png'),
            contents: [
              'Bullet position: Thuộc tính list-style-position chỉ định vị trí của các điểm đánh dấu mục danh sách.',
              'list-style-position: outside',
            ],
          },
          {
            img: require('assets/images/b6a7.png'),
            contents: ['list-style-position: inside'],
          },
        ],
      },
    ],
  },
];
