export default [
  {
    title: '1. Form Validation',
    contents: [
      '‘required’: Chỉ định xem trường biểu mẫu có cần được điền trước khi có thể gửi biểu mẫu hay không.',
      '‘Minlength’ và ‘maxlength’: Chỉ định độ dài tối thiểu và tối đa của dữ liệu dạng văn bản (string).',
      '‘Min’ và ‘max’: Chỉ định giá trị tối thiểu và lớn nhất của các loại đầu vào số.',
      '‘Type’: Chỉ định dữ liệu cần phải là một số, một địa chỉ email hay một số loại đặt trước cụ thể khác.',
    ],
    img: require('assets/images/b4a1.png'),
  },
  {
    title: '2. HTML Table',
    contentWithImg: [
      {
        img: require('assets/images/b4a2.png'),
        contents: [
          'Table: Tập hợp dữ liệu có cấu trúc bao gồm các hàng và cột (dữ liệu dạng bảng)',
        ],
      },
      {
        img: require('assets/images/b4a3.png'),
        contents: [
          'Thuộc tính của table:',
          'Text-align : Thuộc tính này cho biết bảng phải được căn chỉnh như thế nào bên trong tài liệu chứa. Nó có thể có các giá trị sau: (letf, center, right)',
          'Background-color : Chỉ định màu nền của bảng.',
          'Border : Thuộc tính này xác định kích thước của khung bao quanh bảng, tính bằng pixel.',
        ],
      },
      {
        img: require('assets/images/b4a4.png'),
        contents: [
          'Border-collapse: Đặt xem có nên thu gọn các đường viền bảng thành một đường viền duy nhất hay không',
          'Padding: Kiểm soát khoảng cách giữa đường viền và nội dung trong bảng',
        ],
      },
    ],
  },
  {
    title: '3. HTML Form',
    subcontents: [
      {
        contentWithImg: [
          {
            img: require('assets/images/b4a5.png'),
            contents: [
              'Phần tử <form> trong HTML xác định một biểu mẫu được sử dụng để thu thập thông tin đầu vào của người dùng. Một biểu mẫu HTML chứa các thành phần biểu mẫu.',
              'Form elements: Là các loại phần tử đầu vào khác nhau, như: text fields, checkboxes, radio buttons, submit buttons,...',
            ],
          },
        ],
      },
      {
        title: '3.1.	Cấu trúc của HTML Form',
        contentWithImg: [
          {
            img: require('assets/images/b4a6.png'),
            contents: [
              'Cấu trúc của HTML Form: Các thẻ bạn sử dụng để quản lý cấu trúc chung của biểu mẫu bao gồm: ',
              '<form> được sử dụng để tạo một biểu mẫu HTML cho đầu vào của người dùng',
            ],
          },
        ],
      },
      {
        contentWithImg: [
          {
            img: require('assets/images/b4a7.png'),
            contents: [
              'Cấu trúc của HTML Form: Các thẻ bạn sử dụng để quản lý cấu trúc chung của biểu mẫu bao gồm:',
              '<fieldset>: được sử dụng để nhóm dữ liệu liên quan trong một biểu mẫu.',
              '<legend>: xác định chú thích cho <fieldset> phần tử.',
              '<label>: Xác định nhãn cho tiện ích biểu mẫu HTML',
              '<button>: Xác định một nút có thể nhấp',
              '<input>: Có thể được hiển thị theo nhiều cách, tùy thuộc vào loại thuộc tính',
            ],
          },
        ],
      },
      {
        contentWithImg: [
          {
            img: require('assets/images/b4a8.png'),
            contents: [
              '<select>:  xác định danh sách thả xuống',
              '<option>  xác định một tùy chọn có thể được chọn.',
            ],
          },
        ],
      },
      {
        title: '3.2.	Gửi form dữ liệu',
        contentWithImg: [
          {
            img: require('assets/images/b4a9.png'),
            contents: [
              'Về phía client: Xác định cách gửi dữ liệu',
              'Thuộc tính Action: Xác định nơi dữ liệu được gửi. Giá trị của nó phải là một URL tương đối hoặc tuyệt đối hợp lệ',
            ],
          },
          {
            img: require('assets/images/b4a10.png'),
            contents: [
              'Thuộc tính Method: Xác định cách dữ liệu được gửi. Dữ liệu biểu mẫu HTML có thể được truyền qua POST Method hoặc GET Method',
            ],
          },
        ],
      },
    ],
  },
];
