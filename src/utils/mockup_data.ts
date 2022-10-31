export const TOPIC = [
  {
    file: 'bai1',
    title: 'Nhập môn HTML',
  },
  {
    file: 'bai2',
    title: 'HTML Text',
  },
  {
    file: 'bai3',
    title: 'HTML Links',
  },
  {
    file: 'bai4',
    title: 'HTML Table',
  },
  {
    file: 'bai5',
    title: 'Làm quen với CSS',
  },
  {
    file: 'bai6',
    title: 'Styling Text',
  },
  {
    file: 'bai7',
    title: 'Selectors',
  },
];

export const listImages = [];

export const evaluateSentence = (mark: number) => {
  if (mark >= 3) {
    return [
      'Ôi bạn thật xuất sắc!',
      'Wow, giỏi quá đi! ',
      'Xin chúc mừng, bạn giỏi quá!',
      'Bài làm của bạn quá xuất sắc, thật ngưỡng mộ!',
    ];
  } else if (mark >= 2) {
    return [
      'Wow, bạn giỏi quá!',
      'Một kết quả tuyệt vời! Nếu muốn đạt huy chương vàng, bạn hãy xem lại lý thuyết và thử lại một lần nữa nhé!',
      'Thiếu 1 xíu nữa thôi là được huy chương vàng rồi ấy, thật bình tĩnh và thử lại nha!',
    ];
  } else if (mark >= 1) {
    return [
      'Yay! hãy cố gắng đạt huy chương vàng vào lần sau nha!',
      'Một kết quả khá tốt! Tuy nhiên mình tin bạn có thể làm tốt hơn nữa đó!',
      'Một vài câu sai khá đáng tiếc nè! Bạn hãy xem lại lý thuyết và thử lại nhé!',
    ];
  } else
    return [
      'Có vẻ như bạn chưa tập trung lắm, lần sau cố gắng làm tốt hơn nha!',
      'Kết quả này chưa được tốt lắm, hãy cố gắng hơn vào lần sau nhé!',
      'Hãy xem lại phần lý thuyết và thử lại một lần nữa nha!',
    ];
};
