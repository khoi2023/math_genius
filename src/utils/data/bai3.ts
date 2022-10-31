export default [
  {
    title: '1.	HTML Links',
    contents: [
      'Thẻ <a> xác định siêu liên kết, được sử dụng để liên kết từ trang này sang trang khác',
      'Thuộc tính title : chỉ định thông tin bổ sung và khi di chuyển vào trong phần tử trong web sẽ hiển thị title.',
      'Thuộc tính target chỉ định nơi để mở tài liệu được liên kết',
    ],
    img: require('assets/images/b3a1.png'),
  },
  {
    title: ['2.	Email links'],
    contentWithImg: [
      {
        img: require('assets/images/b3a2.png'),
        contents: [
          'Email links: Mở một email gửi đi  thay vì liên kết đến một tài nguyên hoặc một trang',
        ],
      },
    ],
  },
  {
    title: '3.	Đa phương tiện',
    subcontents: [
      {
        title: 'a) Images ',
        contentWithImg: [
          {
            img: require('assets/images/b3a3.png'),
            contents: [
              '<img>  được sử dụng để nhúng một hình ảnh đơn giản vào một trang web',
              'Thuộc tính:',
              'src:  Chỉ định URL của một hình ảnh',
              'alt: Chỉ định một văn bản thay thế cho một hình ảnh',
            ],
          },
        ],
      },
      {
        title: 'b) Audios',
        contentWithImg: [
          {
            img: require('assets/images/b3a4.png'),
            contents: [
              '<audio> xác định âm thanh, chẳng hạn như nhạc hoặc các luồng âm thanh khác.',
            ],
          },
        ],
      },
      {
        title: 'b) Video',
        contentWithImg: [
          {
            img: require('assets/images/b3a5.png'),
            contents: ['<video>được sử dụng để hiển thị video trên trang web.'],
          },
        ],
      },
    ],
  },
];
