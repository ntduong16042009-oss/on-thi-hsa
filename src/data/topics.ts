import { TopicInfo, HSATopicId } from '../types';

export const HSA_TOPICS: TopicInfo[] = [
  {
    id: 'doc-hieu',
    name: 'Đọc hiểu văn bản',
    shortName: 'Đọc hiểu',
    description: 'Khai thác thông tin trực tiếp, bố cục, từ ngữ và nội dung hiển ngôn của ngữ liệu văn xuôi, thơ và văn bản thông tin.',
    weightPercent: 20
  },
  {
    id: 'tieng-viet',
    name: 'Kiến thức tiếng Việt',
    shortName: 'Tiếng Việt',
    description: 'Quy tắc ngữ âm, cấu tạo từ, ngữ nghĩa từ Hán - Việt, từ mượn, thành ngữ và biến thể phương ngữ.',
    weightPercent: 12
  },
  {
    id: 'tu-vung-ngu-phap',
    name: 'Từ vựng và ngữ pháp',
    shortName: 'Ngữ pháp',
    description: 'Nhận diện lỗi dùng từ, lỗi logic cú pháp câu, liên kết câu và các loại câu ghép, câu phức trong tiếng Việt.',
    weightPercent: 12
  },
  {
    id: 'bien-phap-tu-tu',
    name: 'Biện pháp tu từ',
    shortName: 'Tu từ',
    description: 'Xác định và phân tích tác dụng biểu đạt của ẩn dụ, hoán dụ, điệp từ, nghịch ngữ, đảo ngữ, tương phản và nói giảm nói tránh.',
    weightPercent: 10
  },
  {
    id: 'phong-cach-ngon-ngu',
    name: 'Phong cách ngôn ngữ',
    shortName: 'Phong cách',
    description: 'Phân biệt 6 phong cách chức năng: Báo chí, Khoa học, Chính luận, Nghệ thuật, Sinh hoạt, Hành chính - công vụ.',
    weightPercent: 8
  },
  {
    id: 'kien-thuc-van-hoc',
    name: 'Kiến thức văn học',
    shortName: 'Văn học sử',
    description: 'Giai đoạn văn học trung đại và hiện đại (1930 - 1945, 1945 - 1975, sau 1986), tác giả lớn, thi pháp và thể loại.',
    weightPercent: 10
  },
  {
    id: 'phan-tich-van-ban',
    name: 'Phân tích văn bản',
    shortName: 'Phân tích',
    description: 'Giải mã dụng ý nghệ thuật của tác giả, điểm nhìn trần thuật, giọng điệu, nhịp điệu và hình tượng thẩm mỹ.',
    weightPercent: 10
  },
  {
    id: 'suy-luan-logic',
    name: 'Suy luận logic & ngữ nghĩa',
    shortName: 'Suy luận',
    description: 'Rút ra hàm ý, tiền giả định, quan hệ nhân quả và suy đoán logic từ các dữ kiện có trong ngữ liệu.',
    weightPercent: 8
  },
  {
    id: 'danh-gia-thuc-tien',
    name: 'Đánh giá & liên hệ thực tiễn',
    shortName: 'Đánh giá',
    description: 'Bình luận quan điểm của tác giả, liên hệ với các vấn đề văn hóa, xã hội và công nghệ trong đời sống đương đại.',
    weightPercent: 5
  },
  {
    id: 'doc-hieu-nang-cao',
    name: 'Đọc hiểu nâng cao',
    shortName: 'Nâng cao',
    description: 'Xử lý văn bản đa phương thức, so sánh đối chiếu quan điểm giữa các đoạn trích triết học, khoa học xã hội.',
    weightPercent: 5
  }
];

export function getTopicById(id: HSATopicId): TopicInfo | undefined {
  return HSA_TOPICS.find(t => t.id === id);
}
