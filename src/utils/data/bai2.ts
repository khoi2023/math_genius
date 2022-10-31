export default [
  {
    title: '1.	Heading',
    contents: [
      'Có 6 phần tử heading  — <h1>, <h2>, <h3>, <h4>, <h5>  và  <h6>',
      'Mỗi phần tử đại diện cho một cấp độ nội dung khác nhau trong tài liệu; <h1> đại diện cho tiêu đề chính, <h2> đại diện cho tiêu đề phụ, <h3> đại diện cho tiêu đề phụ phụ, v.v.',
    ],
    img: require('assets/images/b2a1.png'),
  },
  {
    title: '2.	Văn bản',
    contentWithImg: [
      {
        img: require('assets/images/b2a2.png'),
        contents: [
          'Phần tử <p> đại điện cho một đoạn văn ( paragraph ).',
          'Một đoạn văn ( paragraph ) luôn bắt đầu trên một dòng mới và các trình duyệt sẽ tự động thêm một số khoảng trắng (lề) vào trước và sau một đoạn văn.',
        ],
      },
      {
        img: require('assets/images/b2a3.png'),
        contents: [
          'Cấu trúc phân cấp: ',
          'Chỉ nên sử dụng một <h1> duy nhất trên mỗi trang - đây là tiêu đề cấp cao nhất và tất cả các tiêu đề khác nằm bên dưới tiêu đề này trong hệ thống phân cấp.',
          'Đảm bảo rằng bạn sử dụng các tiêu đề theo đúng thứ tự trong hệ thống phân cấp.',
          'Trong số sáu cấp độ tiêu đề có sẵn, bạn nên sử dụng không quá ba cấp độ trên mỗi trang, trừ khi bạn cảm thấy cần thiết',
        ],
      },
    ],
  },
  {
    title: '3.	HTML List',
    subcontents: [
      {
        contentWithImg: [
          {
            img: require('assets/images/b2a3.png'),
            contents: [
              'Có ba loại List khác nhau trong HTML và mỗi loại có một mục đích và ý nghĩa cụ thể:',
              'Danh sách không có thứ tự ( Unordered list )',
              'Danh sách có thứ tự ( Ordered list )',
              'Danh sách mô tả ( Description list )',
            ],
          },
        ],
      },
      {
        title: '3.1. Danh sách không thứ tự ( Unordered list )',
        contentWithImg: [
          {
            img: require('assets/images/b2a5.png'),
            contents: [
              'Được sử dụng để tạo danh sách các mục có liên quan, không theo thứ tự cụ thể.',
            ],
          },
        ],
      },
      {
        title: '3.2. Danh sách thứ tự ( Ordered list )',
        contentWithImg: [
          {
            img: require('assets/images/b2a4.png'),
            contents: [
              'Được sử dụng để tạo danh sách các mục liên quan, theo một thứ tự cụ thể.',
            ],
          },
        ],
      },
      {
        title: '3.3. Danh sách mô tả ( Description list )',
        contentWithImg: [
          {
            img: require('assets/images/b2a6.png'),
            contents: [
              'Được sử dụng để tạo danh sách các thuật ngữ và mô tả của chúng.',
            ],
          },
        ],
      },
    ],
  },
];
