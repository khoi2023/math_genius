export default [
  {
    title: '1.	CSS Selectors',
    contents: [
      'CSS Selectors được sử dụng để "tìm" (hoặc chọn) các phần tử HTML mà bạn muốn tạo kiểu.',
      'Chúng ta có thể chia các bộ chọn CSS thành bốn loại:',
      'Bộ chọn đơn giản (type, id, class)',
      'Bộ kết hợp selector',
      'Pseudo classes  và pseudo elements',
      'Thuộc tính selectors',
    ],
    img: require('assets/images/b7a1.png'),
  },
  {
    title: '2.	Pseudo class và Pseudo element',
    contentWithImg: [
      {
        img: require('assets/images/b7a2.png'),
        contents: [
          'Pseudo class: Được sử dụng để xác định một trạng thái đặc biệt của một phần tử.',
        ],
      },
      {
        img: require('assets/images/b7a3.png'),
        contents: [
          'Pseudo element: Được sử dụng để tạo kiểu cho các phần cụ thể của một phần tử.',
        ],
      },
    ],
  },
  {
    title: '3.	Combinator selector',
    subcontents: [
      {
        contentWithImg: [
          {
            img: require('assets/images/b1a2.png'),
            contents: [
              'Combinator selector được sử dụng để chọn cơ sở phần tử dựa trên mối quan hệ',
              'Có 4 bộ kết hợp khác nhau trong CSS:',
            ],
          },
          {
            img: require('assets/images/b5a4.png'),
            contents: [
              'Descendant selector (space): chọn tất cả những thẻ con nằm trong một selector nào đó.',
            ],
          },
          {
            img: require('assets/images/b5a7.png'),
            contents: [
              'Child selector (>): chọn tất cả những thẻ con trực tiếp của một selector nào đó',
            ],
          },
          {
            img: require('assets/images/b6a1.png'),
            contents: [
              'General sibling selector (~): chọn tất cả những thẻ anh/chị/em của selector nào đó.',
            ],
          },
        ],
      },
    ],
  },
];
