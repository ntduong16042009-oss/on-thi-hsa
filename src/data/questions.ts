import { Question, HSATopicId, Difficulty } from '../types';

export const QUESTIONS_BANK: Question[] = [
  {
    "id": "Q001",
    "topicId": "doc-hieu",
    "difficulty": "Cơ bản",
    "passage": {
      "title": "Tư duy phản biện trong kỷ nguyên trí tuệ nhân tạo",
      "author": "TS. Lê Đăng Khoa",
      "source": "Tạp chí Tia Sáng, số 14/2024",
      "content": "Trong bối cảnh các mô hình ngôn ngữ lớn (LLM) có thể tổng hợp kiến thức nhân loại chỉ trong vài giây, vai trò của người học đang chuyển dịch căn bản từ việc \"ghi nhớ dữ kiện\" sang \"chất vấn và kiểm chứng thông tin\". Trí tuệ nhân tạo (AI) có thể đưa ra câu trả lời lưu loát, nhưng nó không chịu trách nhiệm đạo đức về tính xác thực của câu trả lời đó. Khả năng tư duy phản biện – biết đặt câu hỏi đúng, nhận diện các thiên kiến ngầm và phân định giữa lập luận vững chắc với sự ngụy biện khéo léo – trở thành tấm lá chắn trí tuệ thiết yếu của công dân thế kỷ 21."
    },
    "prompt": "Theo văn bản, vai trò của người học trong thời đại trí tuệ nhân tạo đang chuyển dịch căn bản như thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Từ nghiên cứu lý thuyết sang phát triển các công nghệ mới."
      },
      {
        "key": "B",
        "text": "Từ việc ghi nhớ dữ kiện sang chất vấn và kiểm chứng thông tin."
      },
      {
        "key": "C",
        "text": "Từ tiếp nhận thụ động sang cạnh tranh tốc độ xử lý với máy móc."
      },
      {
        "key": "D",
        "text": "Từ học tập cá nhân sang phối hợp chặt chẽ với các mô hình ngôn ngữ."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Câu văn đầu tiên nêu rõ: \"vai trò của người học đang chuyển dịch căn bản từ việc 'ghi nhớ dữ kiện' sang 'chất vấn và kiểm chứng thông tin'\".",
    "keyTakeaway": "Dạng câu hỏi nhận biết thông tin hiển ngôn: Đọc quét từ khóa chính trong câu hỏi để định vị trực tiếp câu văn chứa câu trả lời trong ngữ liệu."
  },
  {
    "id": "Q002",
    "topicId": "doc-hieu",
    "difficulty": "Thông hiểu",
    "passage": {
      "title": "Tư duy phản biện trong kỷ nguyên trí tuệ nhân tạo",
      "author": "TS. Lê Đăng Khoa",
      "source": "Tạp chí Tia Sáng, số 14/2024",
      "content": "Trong bối cảnh các mô hình ngôn ngữ lớn (LLM) có thể tổng hợp kiến thức nhân loại chỉ trong vài giây, vai trò của người học đang chuyển dịch căn bản từ việc \"ghi nhớ dữ kiện\" sang \"chất vấn và kiểm chứng thông tin\". Trí tuệ nhân tạo (AI) có thể đưa ra câu trả lời lưu loát, nhưng nó không chịu trách nhiệm đạo đức về tính xác thực của câu trả lời đó. Khả năng tư duy phản biện – biết đặt câu hỏi đúng, nhận diện các thiên kiến ngầm và phân định giữa lập luận vững chắc với sự ngụy biện khéo léo – trở thành tấm lá chắn trí tuệ thiết yếu của công dân thế kỷ 21."
    },
    "prompt": "Cụm từ \"tấm lá chắn trí tuệ\" trong đoạn văn được sử dụng nhằm nhấn mạnh điều gì?",
    "options": [
      {
        "key": "A",
        "text": "Vai trò bảo vệ nhận thức của con người trước thông tin sai lệch và thiên kiến."
      },
      {
        "key": "B",
        "text": "Khả năng phòng thủ của con người trước nguy cơ bị máy móc thay thế việc làm."
      },
      {
        "key": "C",
        "text": "Hệ thống an ninh mạng bảo vệ dữ liệu cá nhân của người học."
      },
      {
        "key": "D",
        "text": "Sự vượt trội của trực giác cảm xúc so với thuật toán tính toán logic."
      }
    ],
    "correctAnswer": "A",
    "explanation": "\"Tấm lá chắn trí tuệ\" là hình ảnh ẩn dụ cho tư duy phản biện, giúp con người tự bảo vệ tâm trí trước những câu trả lời thiếu xác thực, thiên kiến ngầm và ngụy biện khéo léo do AI hoặc thông tin sai lệch tạo ra.",
    "keyTakeaway": "Phân tích nghĩa ẩn dụ trong ngữ cảnh: Xác định đối tượng được ví von và chức năng biểu đạt của hình ảnh đối với thông điệp chung của văn bản."
  },
  {
    "id": "Q003",
    "topicId": "suy-luan-logic",
    "difficulty": "Vận dụng",
    "passage": {
      "title": "Tư duy phản biện trong kỷ nguyên trí tuệ nhân tạo",
      "author": "TS. Lê Đăng Khoa",
      "source": "Tạp chí Tia Sáng, số 14/2024",
      "content": "Trong bối cảnh các mô hình ngôn ngữ lớn (LLM) có thể tổng hợp kiến thức nhân loại chỉ trong vài giây, vai trò của người học đang chuyển dịch căn bản từ việc \"ghi nhớ dữ kiện\" sang \"chất vấn và kiểm chứng thông tin\". Trí tuệ nhân tạo (AI) có thể đưa ra câu trả lời lưu loát, nhưng nó không chịu trách nhiệm đạo đức về tính xác thực của câu trả lời đó. Khả năng tư duy phản biện – biết đặt câu hỏi đúng, nhận diện các thiên kiến ngầm và phân định giữa lập luận vững chắc với sự ngụy biện khéo léo – trở thành tấm lá chắn trí tuệ thiết yếu của công dân thế kỷ 21."
    },
    "prompt": "Nhận định nào sau đây KHÔNG PHÙ HỢP với logic của đoạn trích?",
    "options": [
      {
        "key": "A",
        "text": "Sự lưu loát của câu trả lời do AI cung cấp không đồng nghĩa với tính chân thực tuyệt đối."
      },
      {
        "key": "B",
        "text": "Người học hiện đại cần chú trọng kỹ năng kiểm chứng hơn là tích lũy thuần túy dung lượng thông tin."
      },
      {
        "key": "C",
        "text": "Trí tuệ nhân tạo đã hoàn toàn giải phóng con người khỏi nhu cầu rèn luyện năng lực tư duy."
      },
      {
        "key": "D",
        "text": "Trách nhiệm đạo đức trong việc thẩm định sự thật thuộc về chính con người tiếp nhận."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Ngược lại với phương án C, đoạn trích nhấn mạnh rằng vì AI không chịu trách nhiệm đạo đức và dễ tạo thông tin thiên kiến nên con người càng cần rèn luyện tư duy phản biện hơn bao giờ hết.",
    "keyTakeaway": "Với câu hỏi phủ định (\"KHÔNG PHÙ HỢP\"), hãy kiểm tra tính tương phản với luận điểm chính của tác giả."
  },
  {
    "id": "Q004",
    "topicId": "tieng-viet",
    "difficulty": "Cơ bản",
    "prompt": "Từ Hán - Việt nào sau đây bị dùng SAI ngữ cảnh trong câu: \"Trong bài phát biểu, vị giáo sư đã chỉ ra những yếu điểm cơ bản của đề án cần được khắc phục kịp thời\"?",
    "options": [
      {
        "key": "A",
        "text": "phát biểu"
      },
      {
        "key": "B",
        "text": "cơ bản"
      },
      {
        "key": "C",
        "text": "khắc phục"
      },
      {
        "key": "D",
        "text": "yếu điểm"
      }
    ],
    "correctAnswer": "D",
    "explanation": "\"Yếu điểm\" (chữ Hán: 要点) có nghĩa là điểm mấu chốt, điểm trọng yếu quan trọng nhất. Từ mang nghĩa điểm yếu, nhược điểm trong trường hợp này phải dùng từ \"nhược điểm\" hoặc \"điểm yếu\".",
    "keyTakeaway": "Phân biệt \"yếu điểm\" (yếu = trọng yếu: điểm then chốt quan trọng) với \"nhược điểm / điểm yếu\" (nhược = kém cỏi)."
  },
  {
    "id": "Q005",
    "topicId": "tieng-viet",
    "difficulty": "Thông hiểu",
    "prompt": "Cặp từ nào dưới đây có các yếu tố đồng âm nhưng khác nghĩa hoàn toàn?",
    "options": [
      {
        "key": "A",
        "text": "Thanh minh (trong tiết thanh minh) và Phân minh (trong trắng đen phân minh)"
      },
      {
        "key": "B",
        "text": "Đồng thoại (trong truyện đồng thoại) và Đồng niên (trong bạn đồng niên)"
      },
      {
        "key": "C",
        "text": "Phi cơ (trong lái phi cơ) và Phi lý (trong luận điểm phi lý)"
      },
      {
        "key": "D",
        "text": "Cố quốc (trong hoài niệm cố quốc) và Cố vấn (trong ban cố vấn)"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Trong \"phi cơ\", yếu tố \"phi\" (飛) có nghĩa là bay; trong \"phi lý\", yếu tố \"phi\" (非) có nghĩa là không, trái ngược (không hợp lý). Hai chữ \"phi\" này là từ đồng âm khác nghĩa.",
    "keyTakeaway": "Nắm chắc ngữ nghĩa các yếu tố cấu thành từ Hán Việt quen thuộc (phi: bay vs phi: sai trái/không)."
  },
  {
    "id": "Q006",
    "topicId": "tieng-viet",
    "difficulty": "Vận dụng",
    "prompt": "Thành ngữ nào sau đây đồng nghĩa với thành ngữ \"Khẩu Phật tâm xà\"?",
    "options": [
      {
        "key": "A",
        "text": "Ăn ốc nói mò"
      },
      {
        "key": "B",
        "text": "Miệng thốt hoa sen, lòng đầy gai góc"
      },
      {
        "key": "C",
        "text": "Mồm loa mép giải"
      },
      {
        "key": "D",
        "text": "Nói như rót mật vào tai"
      }
    ],
    "correctAnswer": "B",
    "explanation": "\"Khẩu Phật tâm xà\" (miệng nam mô bụng một bồ dao găm) chỉ người ngoài miệng nói lời từ bi, hiền hậu nhưng trong lòng thâm độc, hiểm ác; tương đương với \"Miệng thốt hoa sen, lòng đầy gai góc\".",
    "keyTakeaway": "Thành ngữ tiếng Việt và Hán - Việt thường có sự đối ứng tương đương về hình tượng và hàm nghĩa ẩn dụ phê phán."
  },
  {
    "id": "Q007",
    "topicId": "tu-vung-ngu-phap",
    "difficulty": "Thông hiểu",
    "prompt": "Câu nào sau đây mắc lỗi sai ngữ pháp về cấu trúc chủ - vị?",
    "options": [
      {
        "key": "A",
        "text": "Đoàn thanh tra qua quá trình kiểm tra thực tế đã phát hiện nhiều sai phạm nghiêm trọng."
      },
      {
        "key": "B",
        "text": "Thực tiễn kiểm tra đã giúp đoàn thanh tra phát hiện nhiều sai phạm nghiêm trọng."
      },
      {
        "key": "C",
        "text": "Qua thực tiễn kiểm tra của đoàn thanh tra đã phát hiện nhiều sai phạm nghiêm trọng."
      },
      {
        "key": "D",
        "text": "Những sai phạm nghiêm trọng đã được đoàn thanh tra phát hiện qua đợt kiểm tra thực tế."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Câu A dùng trạng ngữ \"Qua thực tiễn kiểm tra của đoàn thanh tra\" và vị ngữ \"đã phát hiện...\", câu hoàn toàn thiếu chủ ngữ (ai phát hiện?). Các câu B, C, D đều có cấu trúc ngữ pháp chuẩn xác.",
    "keyTakeaway": "Lỗi câu thiếu chủ ngữ thường do lạm dụng giới từ (\"Qua...\", \"Bằng...\", \"Với...\") biến chủ ngữ thành trạng ngữ."
  },
  {
    "id": "Q008",
    "topicId": "tu-vung-ngu-phap",
    "difficulty": "Vận dụng",
    "prompt": "Trong câu: \"Mặc dù hoàn cảnh gia đình rất khó khăn, nhưng bạn Nam vẫn không ngừng nỗ lực và giành giải nhất trong kỳ thi học sinh giỏi quốc gia\", quan hệ từ \"mặc dù ... nhưng\" biểu thị mối quan hệ cú pháp nào?",
    "options": [
      {
        "key": "A",
        "text": "Quan hệ nguyên nhân - kết quả"
      },
      {
        "key": "B",
        "text": "Quan hệ tương phản, nhượng bộ"
      },
      {
        "key": "C",
        "text": "Quan hệ điều kiện - giả thiết"
      },
      {
        "key": "D",
        "text": "Quan hệ đồng thời, tăng tiến"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Cặp quan hệ từ \"Mặc dù ... nhưng\" liên kết hai vế có ý nghĩa trái ngược, thể hiện sự nhượng bộ (chấp nhận sự thật ở vế một) để làm nổi bật kết quả phi thường ở vế hai.",
    "keyTakeaway": "Nhận diện cặp liên từ: Tuy/Dù/Mặc dù ... nhưng biểu thị quan hệ tương phản - nhượng bộ."
  },
  {
    "id": "Q009",
    "topicId": "tu-vung-ngu-phap",
    "difficulty": "Cơ bản",
    "prompt": "Chọn từ viết đúng chính tả tiếng Việt trong các từ sau:",
    "options": [
      {
        "key": "A",
        "text": "Sáng lạng"
      },
      {
        "key": "B",
        "text": "Xáng lạng"
      },
      {
        "key": "C",
        "text": "Sán lạn"
      },
      {
        "key": "D",
        "text": "Xán lạn"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Từ chuẩn chính tả là \"xán lạn\" (tiếng Hán: 灿烂 - rực rỡ, sáng sủa). Do phát âm lệch nên người Việt hay viết sai thành \"sáng lạng\".",
    "keyTakeaway": "Chuẩn chính tả: \"xán lạn\" (x - l), \"bạt mạng\" (không phải bạt mạng), \"giành giật\" (g - gi)."
  },
  {
    "id": "Q010",
    "topicId": "bien-phap-tu-tu",
    "difficulty": "Thông hiểu",
    "passage": {
      "author": "Nguyễn Khoa Điềm",
      "source": "Trường ca Mặt đường khát vọng (1971)",
      "content": "Để Đất Nước này là Đất Nước Nhuận hồng\nĐất Nước của những người con gái, con trai\nĐẹp như hoa hồng, cứng hơn sắt thép\nXa nhau không hề rơi nước mắt\nNước mắt chỉ để dành cho ngày gặp mặt."
    },
    "prompt": "Trong câu thơ: \"Đẹp như hoa hồng, cứng hơn sắt thép\", tác giả đã sử dụng phối hợp những biện pháp tu từ nào?",
    "options": [
      {
        "key": "A",
        "text": "So sánh và tương phản (đối lập)"
      },
      {
        "key": "B",
        "text": "Ẩn dụ và hoán dụ"
      },
      {
        "key": "C",
        "text": "Nói quá và điệp ngữ"
      },
      {
        "key": "D",
        "text": "Chêm xen và nhân hóa"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Câu thơ sử dụng từ so sánh (\"như\", \"hơn\") kết hợp thủ pháp đối lập tương phản giữa vẻ đẹp mềm mại, tươi thắm của \"hoa hồng\" với ý chí kiên cường, bất khuất \"cứng hơn sắt thép\".",
    "keyTakeaway": "Khi phân tích thơ ca kháng chiến, chú ý sự kết hợp giữa chất trữ tình lãng mạn (hoa hồng) và chất hùng tráng (sắt thép)."
  },
  {
    "id": "Q011",
    "topicId": "bien-phap-tu-tu",
    "difficulty": "Vận dụng",
    "prompt": "Câu văn nào dưới đây chứa biện pháp tu từ ẨN DỤ CHUYỂN ĐỔI CẢM GIÁC?",
    "options": [
      {
        "key": "A",
        "text": "Bàn tay mẹ gầy gò sạm nắng qua bao mùa bão gió."
      },
      {
        "key": "B",
        "text": "Tiếng cười giòn tan rộn rã khắp khoang tàu."
      },
      {
        "key": "C",
        "text": "Áo chàm đưa buổi phân ly / Cầm tay nhau biết nói gì hôm nay."
      },
      {
        "key": "D",
        "text": "Mặt trời của bắp thì nằm trên đồi / Mặt trời của mẹ, con nằm trên lưng."
      }
    ],
    "correctAnswer": "B",
    "explanation": "\"Giòn tan\" là cảm nhận vị giác/xúc giác (độ giòn của thức ăn hay vật thể) được chuyển đổi sang miêu tả âm thanh \"tiếng cười\" (thính giác), tạo nên ấn tượng sảng khoái, trong trẻo.",
    "keyTakeaway": "Ẩn dụ chuyển đổi cảm giác: miêu tả một đối tượng thuộc giác quan này bằng từ ngữ cảm nhận của giác quan khác."
  },
  {
    "id": "Q012",
    "topicId": "bien-phap-tu-tu",
    "difficulty": "Thông hiểu",
    "prompt": "Hai câu thơ của Tố Hữu: \"Áo nâu cùng với áo xanh / Nông thôn cùng với thị thành đứng lên\" sử dụng biện pháp tu từ gì qua hai hình ảnh \"áo nâu\" và \"áo xanh\"?",
    "options": [
      {
        "key": "A",
        "text": "Ẩn dụ"
      },
      {
        "key": "B",
        "text": "Nhân hóa"
      },
      {
        "key": "C",
        "text": "Nói giảm nói tránh"
      },
      {
        "key": "D",
        "text": "Hoán dụ"
      }
    ],
    "correctAnswer": "D",
    "explanation": "\"Áo nâu\" là dấu hiệu đặc trưng trang phục của giai cấp nông dân; \"áo xanh\" là áo bảo hộ của công nhân. Lấy dấu hiệu của sự vật/con người để gọi tên người mang dấu hiệu đó là biện pháp hoán dụ.",
    "keyTakeaway": "Phân biệt hoán dụ (dựa trên quan hệ tương cận gắn bó gần gũi trong thực tế) với ẩn dụ (dựa trên quan hệ tương đồng ngầm)."
  },
  {
    "id": "Q013",
    "topicId": "phong-cach-ngon-ngu",
    "difficulty": "Cơ bản",
    "passage": {
      "source": "Cục An toàn thông tin, Bộ Thông tin và Truyền thông",
      "content": "Căn cứ Nghị định số 13/2023/NĐ-CP ngày 17 tháng 04 năm 2023 của Chính phủ về bảo vệ dữ liệu cá nhân; Xét đề nghị của Vụ trưởng Vụ Pháp chế; Quyết định ban hành Quy chế bảo mật và an toàn hệ thống thông tin phục vụ chuyển đổi số quốc gia..."
    },
    "prompt": "Đoạn trích trên thuộc phong cách ngôn ngữ nào?",
    "options": [
      {
        "key": "A",
        "text": "Phong cách ngôn ngữ khoa học"
      },
      {
        "key": "B",
        "text": "Phong cách ngôn ngữ báo chí"
      },
      {
        "key": "C",
        "text": "Phong cách ngôn ngữ hành chính"
      },
      {
        "key": "D",
        "text": "Phong cách ngôn ngữ chính luận"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Văn bản có kết cấu quy phạm pháp luật (\"Căn cứ...\", \"Xét đề nghị...\", \"Quyết định...\"), ngôn từ chuẩn xác, khuôn mẫu hành chính pháp lý.",
    "keyTakeaway": "Phong cách hành chính có tính khuôn mẫu nghiêm ngặt, tính minh xác và tính quyền lực pháp lý."
  },
  {
    "id": "Q014",
    "topicId": "phong-cach-ngon-ngu",
    "difficulty": "Thông hiểu",
    "passage": {
      "source": "Báo Tuổi Trẻ, 2024",
      "content": "Sáng nay 15-9, tại Trung tâm Hội nghị Quốc gia Hà Nội, Diễn đàn Kinh tế Xanh 2024 đã chính thức khai mạc với sự tham gia của hơn 800 đại biểu trong nước và quốc tế. Trong phiên toàn thể đầu tiên, các chuyên gia đã tập trung thảo luận giải pháp trung hòa carbon và huy động tài chính khí hậu cho các doanh nghiệp vừa và nhỏ."
    },
    "prompt": "Đặc trưng cơ bản nổi bật nhất của phong cách ngôn ngữ báo chí thể hiện trong đoạn trích trên là gì?",
    "options": [
      {
        "key": "A",
        "text": "Tính hình tượng thẩm mỹ và cảm xúc chủ quan"
      },
      {
        "key": "B",
        "text": "Tính thông tin thời sự, tính ngắn gọn và chính xác"
      },
      {
        "key": "C",
        "text": "Tính trừu tượng, khái quát và suy lý logic tuyệt đối"
      },
      {
        "key": "D",
        "text": "Tính biểu cảm cá nhân và ngôn ngữ đời thường tự do"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Đoạn bản tin cung cấp thời gian (\"Sáng nay 15-9\"), địa điểm (\"Trung tâm Hội nghị Quốc gia\"), sự kiện (\"Diễn đàn Kinh tế Xanh khai mạc\") rõ ràng, đảm bảo tính thời sự và xác thực.",
    "keyTakeaway": "Phong cách báo chí có 3 đặc trưng cốt lõi: Tính thông tin thời sự, Tính ngắn gọn, Tính sinh động hấp dẫn."
  },
  {
    "id": "Q015",
    "topicId": "kien-thuc-van-hoc",
    "difficulty": "Cơ bản",
    "prompt": "Tác phẩm nào dưới đây KHÔNG thuộc trào lưu văn học hiện thực phê phán giai đoạn 1930 - 1945?",
    "options": [
      {
        "key": "A",
        "text": "Hồn bướm mơ tiên (Khái Hưng)"
      },
      {
        "key": "B",
        "text": "Số đỏ (Vũ Trọng Phụng)"
      },
      {
        "key": "C",
        "text": "Chí Phèo (Nam Cao)"
      },
      {
        "key": "D",
        "text": "Tắt đèn (Ngô Tất Tố)"
      }
    ],
    "correctAnswer": "A",
    "explanation": "\"Hồn bướm mơ tiên\" của Khái Hưng là tác phẩm tiêu biểu của trào lưu văn học lãng mạn (Tự Lực văn đoàn), trong khi Số đỏ, Chí Phèo, Tắt đèn đều thuộc dòng hiện thực phê phán 1930 - 1945.",
    "keyTakeaway": "Phân biệt hai dòng văn học công khai giai đoạn 1930-1945: Dòng văn học lãng mạn (Tự lực văn đoàn, Thơ mới) và Dòng văn học hiện thực phê phán."
  },
  {
    "id": "Q016",
    "topicId": "kien-thuc-van-hoc",
    "difficulty": "Thông hiểu",
    "prompt": "Đặc điểm phong cách nghệ thuật nổi bật của nhà văn Nguyễn Tuân sau Cách mạng tháng Tám là gì?",
    "options": [
      {
        "key": "A",
        "text": "Quay về khai thác sâu sắc bi kịch tinh thần của những trí thức tiểu tư sản nghèo"
      },
      {
        "key": "B",
        "text": "Tiếp tục tìm kiếm cái đẹp tài hoa, uyên bác nhưng hướng về nhân dân lao động và cuộc sống mới"
      },
      {
        "key": "C",
        "text": "Sử dụng ngòi bút trào phúng sắc lạnh để vạch trần xã hội thực dân nửa phong kiến"
      },
      {
        "key": "D",
        "text": "Tập trung khám phá chất lãng mạn thoát ly thực tại của các danh nhân thời xưa"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Sau 1945, phong cách tài hoa uyên bác của Nguyễn Tuân không biến mất mà thay đổi điểm tựa: ông tìm kiếm chất \"vàng mười\" ở những con người lao động bình dị (như ông lái đò Sông Đà) phụng sự Tổ quốc.",
    "keyTakeaway": "Sự chuyển biến phong cách Nguyễn Tuân: Trước CMT8 nhân vật tài hoa là danh sĩ lánh đời; sau CMT8 là người lao động bình dị nhưng tài ba."
  },
  {
    "id": "Q017",
    "topicId": "kien-thuc-van-hoc",
    "difficulty": "Vận dụng",
    "prompt": "Cảm hứng chủ đạo xuyên suốt tác phẩm \"Tuyên ngôn Độc lập\" của Chủ tịch Hồ Chí Minh là gì?",
    "options": [
      {
        "key": "A",
        "text": "Cảm hứng ngợi ca chiến công quân sự vang dội của các lực lượng vũ trang"
      },
      {
        "key": "B",
        "text": "Nỗi xót xa trước những đau thương mất mát của đồng bào trong hơn 80 năm đô hộ"
      },
      {
        "key": "C",
        "text": "Khát vọng độc lập tự do và tinh thần quyết tâm bảo vệ chủ quyền dân tộc thiêng liêng"
      },
      {
        "key": "D",
        "text": "Niềm hân hoan khi khối liên minh quốc tế ủng hộ chính phủ non trẻ"
      }
    ],
    "correctAnswer": "C",
    "explanation": "\"Tuyên ngôn Độc lập\" là áng văn chính luận mẫu mực, thấm đượm khát vọng quyền sống, quyền tự do và lời thề sắt son: \"Toàn thể dân tộc Việt Nam quyết đem tất cả tinh thần và lực lượng, tính mạng và của cải để giữ vững quyền tự do, độc lập ấy\".",
    "keyTakeaway": "Văn chính luận Hồ Chí Minh luôn nhất quán về mục tiêu: Độc lập tự do cho Tổ quốc, hạnh phúc cho nhân dân."
  },
  {
    "id": "Q018",
    "topicId": "phan-tich-van-ban",
    "difficulty": "Thông hiểu",
    "passage": {
      "title": "Trích đoạn Vợ nhặt",
      "author": "Kim Lân",
      "content": "Bà lão cúi đầu nín lặng. Bà lão hiểu rồi. Lòng người mẹ nghèo khổ ấy còn hiểu ra biết bao nhiêu cơ sự, vừa oán oán vừa xót thương cho số kiếp đứa con mình. Chao ôi, người ta dựng vợ gả chồng cho con là lúc trong nhà ăn nên làm nổi, những mong sinh con đẻ cái nở mặt sau này. Còn mình thì... Trong kẽ mắt kèm nhèm của bà rỉ xuống hai dòng nước mắt... Biết rằng chúng nó có nuôi nổi nhau sống qua được cái thì này không?"
    },
    "prompt": "Tâm trạng của nhân vật bà cụ Tứ trong đoạn trích thể hiện sự giằng xé phức tạp giữa những cảm xúc nào?",
    "options": [
      {
        "key": "A",
        "text": "Vừa oán giận đứa con dại dột vừa lo sợ bị xóm làng cười chê dị nghị."
      },
      {
        "key": "B",
        "text": "Vừa mừng rỡ vì con trai đã có vợ vừa bực tức vì không được thông báo trước."
      },
      {
        "key": "C",
        "text": "Tuyệt vọng cùng cực vì nạn đói và từ chối chấp nhận người đàn bà xa lạ."
      },
      {
        "key": "D",
        "text": "Vừa xót xa, thương xót cho con vừa tủi phận vì cảnh nghèo và âu lo cho tương lai."
      }
    ],
    "correctAnswer": "D",
    "explanation": "Kim Lân diễn tả sâu sắc tấm lòng người mẹ nông dân: \"vừa oán oán vừa xót thương cho số kiếp đứa con mình\", tủi thân vì không lo trọn vẹn cho con và âu lo trăn trở \"Biết rằng chúng nó có nuôi nổi nhau sống qua được cái thì này không?\".",
    "keyTakeaway": "Phân tích tâm lý nhân vật bà cụ Tứ: Nỗi tủi hờn nghèo khó gắn liền với tình mẫu tử bao la và niềm tin nhân đạo vào sự sống."
  },
  {
    "id": "Q019",
    "topicId": "phan-tich-van-ban",
    "difficulty": "Vận dụng",
    "passage": {
      "title": "Trích đoạn Vợ nhặt",
      "author": "Kim Lân",
      "content": "Bà lão cúi đầu nín lặng. Bà lão hiểu rồi. Lòng người mẹ nghèo khổ ấy còn hiểu ra biết bao nhiêu cơ sự, vừa oán oán vừa xót thương cho số kiếp đứa con mình. Chao ôi, người ta dựng vợ gả chồng cho con là lúc trong nhà ăn nên làm nổi, những mong sinh con đẻ cái nở mặt sau này. Còn mình thì... Trong kẽ mắt kèm nhèm của bà rỉ xuống hai dòng nước mắt... Biết rằng chúng nó có nuôi nổi nhau sống qua được cái thì này không?"
    },
    "prompt": "Chi tiết \"Trong kẽ mắt kèm nhèm của bà rỉ xuống hai dòng nước mắt\" mang giá trị biểu cảm nghệ thuật như thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Biểu hiện sự yếu đuối, bất lực buông xuôi số phận của người già trước nạn đói"
      },
      {
        "key": "B",
        "text": "Phản ánh sự bi kịch hóa quá mức hoàn cảnh sống của nhân vật"
      },
      {
        "key": "C",
        "text": "Chắt lọc nỗi đau nghẹn ngào, cay đắng tích tụ của cả một đời lam lũ nghèo khổ"
      },
      {
        "key": "D",
        "text": "Nhấn mạnh sự già nua, lụ khụ về mặt sinh học của người mẹ già"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Giọt nước mắt của người già thường khó chảy ra; khi đã \"rỉ xuống hai dòng nước mắt\" là khi nỗi đau thương, xót xa đã dâng trào tới tột cùng nơi tâm can người mẹ nghèo.",
    "keyTakeaway": "Chi tiết nghệ thuật đặc sắc (giọt nước mắt bà cụ Tứ) là điểm hội tụ tư tưởng nhân đạo của tác phẩm."
  },
  {
    "id": "Q020",
    "topicId": "suy-luan-logic",
    "difficulty": "Thông hiểu",
    "prompt": "Cho câu: \"Mặc dù anh ấy không tham gia khóa tập huấn chuyên sâu nhưng vẫn hoàn thành dự án đúng tiến độ\". Tiền giả định ngầm của câu nói này là gì?",
    "options": [
      {
        "key": "A",
        "text": "Khóa tập huấn chuyên sâu hoàn toàn vô ích và lãng phí thời gian đối với nhân viên."
      },
      {
        "key": "B",
        "text": "Bất kỳ ai tham gia tập huấn cũng đều hoàn thành dự án chậm trễ hơn anh ấy."
      },
      {
        "key": "C",
        "text": "Dự án đã được ban lãnh đạo cắt giảm yêu cầu độ khó xuống mức tối thiểu."
      },
      {
        "key": "D",
        "text": "Tham gia khóa tập huấn chuyên sâu thông thường là điều kiện thuận lợi hoặc cần thiết để hoàn thành dự án tốt."
      }
    ],
    "correctAnswer": "D",
    "explanation": "Cấu trúc \"Mặc dù [không A] nhưng vẫn [đạt được B]\" ngầm chứa tiền giả định logic rằng thông thường việc có A sẽ giúp đạt được B; việc không có A sẽ dễ dẫn tới thất bại.",
    "keyTakeaway": "Tiền giả định logic: Điều kiện nền tảng được người nói và người nghe ngầm hiểu là đúng để câu nói có ý nghĩa."
  },
  {
    "id": "Q021",
    "topicId": "suy-luan-logic",
    "difficulty": "Vận dụng cao",
    "prompt": "Xác định lỗi ngụy biện trong lập luận sau: \"Nếu chúng ta cho phép học sinh sử dụng máy tính bảng trong giờ học, các em sẽ mải chơi game, từ đó dẫn đến việc chểnh mảng thi cử, bỏ học hàng loạt và làm suy sụp chất lượng giáo dục quốc gia\".",
    "options": [
      {
        "key": "A",
        "text": "Ngụy biện đánh tráo khái niệm (Equivocation)"
      },
      {
        "key": "B",
        "text": "Ngụy biện dốc trơn (Slippery Slope)"
      },
      {
        "key": "C",
        "text": "Ngụy biện tấn công cá nhân (Ad Hominem)"
      },
      {
        "key": "D",
        "text": "Ngụy biện khái quát hóa vội vã (Hasty Generalization)"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Ngụy biện dốc trơn lập luận rằng một bước đi ban đầu nhỏ (cho dùng máy tính bảng) tất yếu sẽ kéo theo chuỗi hệ quả cực đoan tiêu cực tiếp theo mà không đưa ra chứng cứ logic chứng minh chuỗi nhân quả đó.",
    "keyTakeaway": "Nhận diện các kiểu ngụy biện logic trong văn bản nghị luận: Dốc trơn (suy diễn liên hoàn tai họa), Người rơm (bóp méo quan điểm), Tấn công cá nhân."
  },
  {
    "id": "Q022",
    "topicId": "danh-gia-thuc-tien",
    "difficulty": "Vận dụng",
    "passage": {
      "title": "Bàn về văn hóa ứng xử trên mạng xã hội",
      "author": "Nguyễn Văn Hòa",
      "source": "Diễn đàn Văn hóa & Đời sống",
      "content": "Không gian mạng cho phép người ta ẩn danh, và chính sự ẩn danh này đã trở thành một chiếc mặt nạ giải phóng những góc tối trong tâm lý con người. Khi người ta không phải đối diện bằng xương bằng thịt với nỗi đau của người khác, sự tàn nhẫn được nhân bội dưới dạng những dòng bình luận vô cảm. Văn hóa số thực chất không bắt đầu từ thuật toán, mà bắt đầu từ trách nhiệm của mỗi cá nhân sau mỗi cú nhấp chuột."
    },
    "prompt": "Thông điệp có ý nghĩa thực tiễn sâu sắc nhất mà đoạn trích gửi gắm tới giới trẻ ngày nay là gì?",
    "options": [
      {
        "key": "A",
        "text": "Cần nâng cao ý thức trách nhiệm đạo đức và lòng trắc ẩn ngay cả trong không gian ảo."
      },
      {
        "key": "B",
        "text": "Nên hạn chế tối đa việc sử dụng mạng xã hội để tránh xa những xung đột tiêu cực."
      },
      {
        "key": "C",
        "text": "Nhà nước cần cấm hoàn toàn tính năng ẩn danh trên các nền tảng truyền thông số."
      },
      {
        "key": "D",
        "text": "Các thuật toán mạng xã hội phải chịu toàn bộ trách nhiệm trước các vụ bắt nạt mạng."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Đoạn trích khẳng định: \"Văn hóa số thực chất không bắt đầu từ thuật toán, mà bắt đầu từ trách nhiệm của mỗi cá nhân sau mỗi cú nhấp chuột\", nhắn nhủ con người giữ vững đạo đức và sự thấu cảm trong môi trường số.",
    "keyTakeaway": "Câu hỏi liên hệ thực tiễn đòi hỏi rút ra bài học nhận thức và hành động tích cực, mang tính xây dựng xã hội."
  },
  {
    "id": "Q023",
    "topicId": "doc-hieu-nang-cao",
    "difficulty": "Vận dụng cao",
    "passage": {
      "title": "So sánh quan niệm hạnh phúc",
      "content": "Văn bản 1: \"Hạnh phúc không phải là một đích đến tĩnh tại mà là một phẩm chất của sự trải nghiệm. Nó sinh ra khi con người dấn thân trọn vẹn vào một mục tiêu có ý nghĩa vượt lên trên chính bản thân mình.\" (Mihaly Csikszentmihalyi)\n\nVăn bản 2: \"Hạnh phúc nằm ở chỗ biết đủ. Càng giảm bớt những ham muốn vật chất vô tận và hướng tâm trí vào sự an tịnh nội tại, con người càng ít bị tổn thương trước những biến động ngoại cảnh.\" (Seneca)"
    },
    "prompt": "Điểm khác biệt cơ bản về phương pháp đạt được hạnh phúc giữa hai quan điểm trên là gì?",
    "options": [
      {
        "key": "A",
        "text": "Văn bản 1 đề cao sự an nhàn tĩnh lặng, trong khi Văn bản 2 đề cao sự cạnh tranh thành tích cá nhân."
      },
      {
        "key": "B",
        "text": "Văn bản 1 phủ nhận vai trò của mục tiêu, trong khi Văn bản 2 tuyệt đối hóa giá trị của vật chất."
      },
      {
        "key": "C",
        "text": "Văn bản 1 hướng tới hành động dấn thân ngoại giới, trong khi Văn bản 2 hướng tới tiết chế và kiểm soát nội tâm."
      },
      {
        "key": "D",
        "text": "Hai văn bản có quan điểm hoàn toàn mâu thuẫn và không thể dung hòa trong thực tế."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Văn bản 1 (Tâm lý học hiện đại) nhấn mạnh \"dấn thân trọn vẹn vào mục tiêu ý nghĩa\"; Văn bản 2 (Chủ nghĩa Khắc kỷ cổ đại) nhấn mạnh \"biết đủ\", \"giảm bớt ham muốn\" để đạt sự tĩnh tại nội tâm.",
    "keyTakeaway": "Dạng so sánh văn bản nâng cao: Tìm trục so sánh cốt lõi (Mục đích vs Phương pháp đạt được) để đối chiếu chính xác."
  },
  {
    "id": "Q024",
    "topicId": "doc-hieu",
    "difficulty": "Thông hiểu",
    "passage": {
      "title": "Văn hóa đọc trong thời đại màn hình",
      "author": "Nguyễn Thị Bích Hải",
      "content": "Đọc sâu (deep reading) là một quá trình nhận thức đòi hỏi sự kiên nhẫn. Khi chúng ta đọc một cuốn sách giấy, não bộ tạo dựng các liên tưởng không gian, thẩm thấu ngôn từ và kích hoạt các nếp gấp tư duy trừu tượng. Ngược lại, việc lướt web trên màn hình điện thoại thường đẩy chúng ta vào chế độ \"quét thông tin\" (skimming) nông cạn, khiến khả năng tập trung kéo dài bị phân mảnh."
    },
    "prompt": "Theo tác giả, \"đọc sâu\" đem lại lợi ích nổi bật nào cho hoạt động nhận thức của não bộ?",
    "options": [
      {
        "key": "A",
        "text": "Giúp quét nhanh khối lượng dữ liệu khổng lồ trong thời gian ngắn nhất."
      },
      {
        "key": "B",
        "text": "Loại bỏ hoàn toàn nhu cầu sử dụng các thiết bị công nghệ số."
      },
      {
        "key": "C",
        "text": "Tăng tốc độ ghi nhớ các con số và dữ liệu thống kê máy móc."
      },
      {
        "key": "D",
        "text": "Tạo dựng liên tưởng không gian và kích hoạt tư duy trừu tượng sâu sắc."
      }
    ],
    "correctAnswer": "D",
    "explanation": "Đoạn trích nêu rõ: \"Khi chúng ta đọc một cuốn sách giấy, não bộ tạo dựng các liên tưởng không gian, thẩm thấu ngôn từ và kích hoạt các nếp gấp tư duy trừu tượng\".",
    "keyTakeaway": "Nắm bắt câu chủ đề và từ khóa so sánh (đọc sâu vs đọc lướt)."
  },
  {
    "id": "Q025",
    "topicId": "tieng-viet",
    "difficulty": "Thông hiểu",
    "prompt": "Trong các câu sau, câu nào sử dụng SAI từ ngữ do nhầm lẫn từ gần âm?",
    "options": [
      {
        "key": "A",
        "text": "Mùa đông lạnh giá mà đứa trẻ chỉ mặc manh áo phong thanh đơn sơ."
      },
      {
        "key": "B",
        "text": "Anh ấy vừa nghe phong thanh về quyết định điều động nhân sự của công ty."
      },
      {
        "key": "C",
        "text": "Đoàn công tác đã có chuyến tham quan và học hỏi kinh nghiệm tại nước bạn."
      },
      {
        "key": "D",
        "text": "Những bằng chứng được đưa ra hoàn toàn minh bạch và thuyết phục."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Câu B viết sai: chỉ mặc manh áo mỏng, không đủ ấm thì phải dùng từ \"phong phanh\", không phải \"phong thanh\" (phong thanh nghĩa là nghe tin đồn loáng thoáng).",
    "keyTakeaway": "Phân biệt \"phong phanh\" (áo quần phong phanh mỏng manh) với \"phong thanh\" (nghe phong thanh = nghe tiếng gió thổi loáng thoáng)."
  },
  {
    "id": "Q026",
    "topicId": "tu-vung-ngu-phap",
    "difficulty": "Thông hiểu",
    "prompt": "Xác định phương tiện liên kết câu được sử dụng giữa hai câu văn sau: \"Mùa thu đã về trên từng con phố nhỏ Hà Nội. Nơi đây, hương hoa sữa bắt đầu nồng nàn trong gió sớm.\"",
    "options": [
      {
        "key": "A",
        "text": "Phép thế"
      },
      {
        "key": "B",
        "text": "Phép lặp từ ngữ"
      },
      {
        "key": "C",
        "text": "Phép đồng nghĩa"
      },
      {
        "key": "D",
        "text": "Phép liên tưởng"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Cụm từ \"Nơi đây\" ở câu thứ hai thay thế cho \"từng con phố nhỏ Hà Nội\" ở câu thứ nhất. Đây là phép thế đại từ chỉ không gian.",
    "keyTakeaway": "Các phép liên kết câu: Phép thế (dùng đại từ thay thế), Phép nối (dùng quan hệ từ), Phép lặp (lặp lại từ ngữ), Phép liên tưởng."
  },
  {
    "id": "Q027",
    "topicId": "bien-phap-tu-tu",
    "difficulty": "Cơ bản",
    "prompt": "Hai câu thơ: \"Bàn tay ta làm nên tất cả / Có sức người sỏi đá cũng thành cơm\" (Hoàng Trung Thông) sử dụng biện pháp tu từ nào qua từ \"bàn tay\"?",
    "options": [
      {
        "key": "A",
        "text": "Ẩn dụ"
      },
      {
        "key": "B",
        "text": "So sánh"
      },
      {
        "key": "C",
        "text": "Hoán dụ"
      },
      {
        "key": "D",
        "text": "Điệp từ"
      }
    ],
    "correctAnswer": "C",
    "explanation": "\"Bàn tay\" là một bộ phận cơ thể đại diện cho toàn bộ con người lao động và sức lao động sáng tạo. Đây là hoán dụ lấy bộ phận để chỉ toàn thể.",
    "keyTakeaway": "Hoán dụ lấy bộ phận chỉ toàn thể: Bàn tay = sức lao động của con người; Chân sút = cầu thủ bóng đá."
  },
  {
    "id": "Q028",
    "topicId": "phong-cach-ngon-ngu",
    "difficulty": "Thông hiểu",
    "prompt": "Văn bản nào sau đây mang đặc trưng của phong cách ngôn ngữ chính luận?",
    "options": [
      {
        "key": "A",
        "text": "Hịch tướng sĩ (Trần Quốc Tuấn)"
      },
      {
        "key": "B",
        "text": "Truyện Kiều (Nguyễn Du)"
      },
      {
        "key": "C",
        "text": "Đơn xin phép nghỉ học (Học sinh)"
      },
      {
        "key": "D",
        "text": "Báo cáo tài chính quý III của doanh nghiệp"
      }
    ],
    "correctAnswer": "A",
    "explanation": "\"Hịch tướng sĩ\" bàn luận về vận mệnh đất nước trước nguy cơ giặc ngoại xâm, đưa ra lập luận đanh thép nhằm khích lệ lòng yêu nước và ý chí chiến đấu, tiêu biểu cho phong cách chính luận cổ.",
    "keyTakeaway": "Phong cách chính luận: Dùng lí lẽ, dẫn chứng để bày tỏ quan điểm chính trị, tư tưởng xã hội một cách thuyết phục."
  },
  {
    "id": "Q029",
    "topicId": "kien-thuc-van-hoc",
    "difficulty": "Thông hiểu",
    "prompt": "Hình tượng nhân vật Huấn Cao trong tác phẩm \"Chữ người tử tù\" của Nguyễn Tuân thể hiện quan niệm thẩm mỹ nào?",
    "options": [
      {
        "key": "A",
        "text": "Bi kịch của người trí thức sa cơ lỡ bước trong ngục tù phong kiến"
      },
      {
        "key": "B",
        "text": "Vẻ đẹp của sự nhẫn nhục, cam chịu trước bạo lực cường quyền"
      },
      {
        "key": "C",
        "text": "Nghệ thuật thuần túy tách rời khỏi đời sống hiện thực"
      },
      {
        "key": "D",
        "text": "Sự thống nhất giữa cái Đẹp tài hoa và cái Thiện, khí phách anh hùng bất khuất"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Huấn Cao là sự kết tinh hoàn mỹ giữa tài năng nghệ thuật xuất chúng (viết chữ đẹp), khí phách hiên ngang bất khuất và thiên lương trong sáng (cái Đẹp gắn liền với cái Thiện).",
    "keyTakeaway": "Tư tưởng thẩm mỹ của Nguyễn Tuân trong Vang bóng một thời: Cái Đẹp và cái Thiện không thể tách rời; cái Đẹp có sức mạnh cảm hóa cái ác."
  },
  {
    "id": "Q030",
    "topicId": "phan-tich-van-ban",
    "difficulty": "Thông hiểu",
    "passage": {
      "title": "Tây Tiến",
      "author": "Quang Dũng",
      "content": "Doanh trại bừng lên hội đuốc hoa\nKìa em xiêng áo tự bao giờ\nKhèn lên man điệu nàng e ấp\nNhạc về Viên Chăn xây hồn thơ."
    },
    "prompt": "Từ \"bừng\" trong câu thơ \"Doanh trại bừng lên hội đuốc hoa\" có tác dụng gợi tả điều gì?",
    "options": [
      {
        "key": "A",
        "text": "Sự nguy hiểm bất ngờ của một đám cháy trong đêm tối nơi đóng quân"
      },
      {
        "key": "B",
        "text": "Sự bừng sáng đột ngột của ánh lửa và niềm hân hoan náo nức, xua tan cái lạnh giá của núi rừng"
      },
      {
        "key": "C",
        "text": "Sự tức giận, bừng bừng khí thế chiến đấu của những người lính"
      },
      {
        "key": "D",
        "text": "Khoảnh khắc bình minh vừa rạng rỡ ló rạng nơi biên cương"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Từ \"bừng\" vừa gợi thị giác (ánh sáng đuốc hoa bừng lên rực rỡ) vừa gợi tâm trạng (niềm vui, sự sôi nổi ấm áp trong đêm liên hoan văn nghệ thắm tình quân dân).",
    "keyTakeaway": "Nhãn tự trong thơ: Phân tích các động từ/tính từ đắc địa mang khả năng làm bừng sáng cả câu thơ."
  },
  {
    "id": "Q031",
    "topicId": "suy-luan-logic",
    "difficulty": "Thông hiểu",
    "prompt": "Xét phát biểu: \"Tất cả các sinh viên đạt học bổng xuất sắc đều có điểm rèn luyện loại tốt trở lên. Minh không có điểm rèn luyện loại tốt.\" Kết luận logic tất yếu là:",
    "options": [
      {
        "key": "A",
        "text": "Minh chắc chắn không đạt học bổng xuất sắc."
      },
      {
        "key": "B",
        "text": "Minh vẫn có thể đạt học bổng nếu điểm học tập cao."
      },
      {
        "key": "C",
        "text": "Minh bị đình chỉ học tập kỳ này."
      },
      {
        "key": "D",
        "text": "Minh là sinh viên có hoàn cảnh khó khăn."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Tam đoạn luận logic: Nếu P thì Q (Đạt học bổng -> Điểm rèn luyện tốt). Minh không có Q (không có rèn luyện tốt) -> Suy ra Minh không có P (không đạt học bổng). Phép suy luận phủ định hợp lý.",
    "keyTakeaway": "Quy tắc suy luận Modus Tollens: P -> Q; phủ định Q -> phủ định P."
  },
  {
    "id": "Q032",
    "topicId": "danh-gia-thuc-tien",
    "difficulty": "Vận dụng",
    "prompt": "Nhận định: \"Sách mở ra trước mắt tôi những chân trời mới\" (M. Gorki) khẳng định giá trị nào của việc đọc sách đối với con người?",
    "options": [
      {
        "key": "A",
        "text": "Giúp con người đạt được thành công về mặt tài chính nhanh chóng"
      },
      {
        "key": "B",
        "text": "Mở rộng tầm hiểu biết tri thức, bồi đắp tâm hồn và khát vọng sống cao đẹp"
      },
      {
        "key": "C",
        "text": "Thay thế hoàn toàn những trải nghiệm thực tế trong đời sống"
      },
      {
        "key": "D",
        "text": "Cung cấp công cụ giải trí đơn thuần sau giờ làm việc căng thẳng"
      }
    ],
    "correctAnswer": "B",
    "explanation": "\"Những chân trời mới\" tượng trưng cho sự khai phóng tri thức, tầm nhìn rộng mở và sự trưởng thành nhân cách nhờ sách.",
    "keyTakeaway": "Phân tích các câu danh ngôn văn học: Quy về giá trị nhận thức, giáo dục và thẩm mỹ."
  },
  {
    "id": "Q033",
    "topicId": "doc-hieu-nang-cao",
    "difficulty": "Vận dụng",
    "passage": {
      "title": "Tự do và Trách nhiệm",
      "content": "Con người sinh ra tự do nhưng ở đâu họ cũng ở trong xiềng xích của những trách nhiệm xã hội. Tự do chân chính không phải là muốn làm gì thì làm theo ý thích bốc đồng, mà là năng lực tự giác hành động theo những chuẩn mực đạo đức mà lý trí đã nhận thức được."
    },
    "prompt": "Theo đoạn trích, cốt lõi của \"tự do chân chính\" là gì?",
    "options": [
      {
        "key": "A",
        "text": "Sự giải phóng tuyệt đối khỏi mọi ràng buộc của luật pháp và tập quán"
      },
      {
        "key": "B",
        "text": "Khả năng thỏa mãn mọi nhu cầu cá nhân bất chấp hoàn cảnh xung quanh"
      },
      {
        "key": "C",
        "text": "Quyền năng áp đặt ý chí của bản thân lên các cá nhân khác"
      },
      {
        "key": "D",
        "text": "Năng lực tự giác hành động theo các chuẩn mực đạo đức do lý trí soi sáng"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Câu kết của văn bản chỉ rõ: \"tự do chân chính không phải là muốn làm gì thì làm... mà là năng lực tự giác hành động theo những chuẩn mực đạo đức mà lý trí đã nhận thức được\".",
    "keyTakeaway": "Phân tích định nghĩa trong văn bản triết học - xã hội: Chú ý cấu trúc \"không phải là... mà là...\"."
  },
  {
    "id": "Q034",
    "topicId": "tieng-viet",
    "difficulty": "Cơ bản",
    "prompt": "Từ nào dưới đây là từ láy?",
    "options": [
      {
        "key": "A",
        "text": "Róc rách"
      },
      {
        "key": "B",
        "text": "Xe cộ"
      },
      {
        "key": "C",
        "text": "Nhà cửa"
      },
      {
        "key": "D",
        "text": "Mặt mũi"
      }
    ],
    "correctAnswer": "A",
    "explanation": "\"Róc rách\" là từ láy tượng thanh mô phỏng tiếng nước chảy róc rách. \"Xe cộ\", \"nhà cửa\", \"mặt mũi\" đều là từ ghép đẳng nghĩa (cả hai tiếng đều có nghĩa hoặc có nguồn gốc từ ghép cổ).",
    "keyTakeaway": "Phân biệt từ ghép đẳng lập có vẻ ngoài giống từ láy (chùa chiền, chim chóc, mặt mũi là từ ghép; róc rách, lấp lánh là từ láy)."
  },
  {
    "id": "Q035",
    "topicId": "tu-vung-ngu-phap",
    "difficulty": "Vận dụng",
    "prompt": "Chỉ ra lỗi logic trong câu văn sau: \"Anh ấy bước vào phòng thi với vẻ mặt vừa lo lắng, vừa tự tin, lại vừa hoàn toàn tuyệt vọng.\"",
    "options": [
      {
        "key": "A",
        "text": "Thiếu vị ngữ chính trong câu"
      },
      {
        "key": "B",
        "text": "Mâu thuẫn logic nội tại giữa các trạng thái tâm lý đối lập cùng tồn tại tuyệt đối"
      },
      {
        "key": "C",
        "text": "Sai trật tự sắp xếp giữa các trạng từ"
      },
      {
        "key": "D",
        "text": "Lạm dụng phép lặp từ ngữ"
      }
    ],
    "correctAnswer": "B",
    "explanation": "\"Tự tin\" (tin tưởng vào khả năng của mình) và \"hoàn toàn tuyệt vọng\" (mất hết niềm tin, buông xuôi) là hai trạng thái tâm lý triệt tiêu lẫn nhau, không thể cùng quy nạp về một thời điểm đối với một chủ thể.",
    "keyTakeaway": "Lỗi logic ngữ nghĩa trong câu: Khi dùng phép liệt kê các thuộc tính hoặc trạng thái, các yếu tố không được loại trừ hay mâu thuẫn đối kháng nhau."
  },
  {
    "id": "Q036",
    "topicId": "bien-phap-tu-tu",
    "difficulty": "Thông hiểu",
    "passage": {
      "author": "Chế Lan Viên",
      "source": "Người đi tìm hình của Nước",
      "content": "Đêm mơ nước, ngày thấy hình của nước\nCây cỏ trong chiêm bao xanh sắc biếc quê nhà\nĂn một miếng ngon cũng đắng lòng vì Tổ quốc\nChẳng một phút canh cánh lòng nguôi nhớ..."
    },
    "prompt": "Cặp từ \"Đêm mơ nước\" và \"ngày thấy hình của nước\" sử dụng biện pháp tu từ gì để nhấn mạnh nỗi trăn trở của người thanh niên yêu nước?",
    "options": [
      {
        "key": "A",
        "text": "Nói quá và chêm xen"
      },
      {
        "key": "B",
        "text": "Nhân hóa và so sánh"
      },
      {
        "key": "C",
        "text": "Phép đối và điệp từ"
      },
      {
        "key": "D",
        "text": "Chơi chữ và hoán dụ"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Phép đối giữa \"Đêm mơ nước\" (thời gian đêm - tiềm thức) với \"ngày thấy hình của nước\" (thời gian ngày - ý thức thường trực) kết hợp điệp từ \"nước\" nhấn mạnh nỗi nhớ nước day dứt khôn nguôi.",
    "keyTakeaway": "Phép đối trong thơ hiện đại tạo nhịp điệu cân xứng và làm nổi bật trạng thái tâm lý thường trực."
  },
  {
    "id": "Q037",
    "topicId": "phong-cach-ngon-ngu",
    "difficulty": "Thông hiểu",
    "prompt": "Tính trừu tượng, tính khái quát và tính phi cá thể là các đặc trưng cơ bản của phong cách ngôn ngữ nào?",
    "options": [
      {
        "key": "A",
        "text": "Phong cách ngôn ngữ nghệ thuật"
      },
      {
        "key": "B",
        "text": "Phong cách ngôn ngữ sinh hoạt"
      },
      {
        "key": "C",
        "text": "Phong cách ngôn ngữ báo chí"
      },
      {
        "key": "D",
        "text": "Phong cách ngôn ngữ khoa học"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Phong cách ngôn ngữ khoa học có 3 đặc trưng cơ bản: Tính khái quát, trừu tượng; Tính logic, nghiêm ngặt; Tính phi cá thể (khách quan, phi cảm xúc).",
    "keyTakeaway": "Học thuộc đặc trưng của 6 phong cách ngôn ngữ tiếng Việt để làm nhanh câu hỏi phân loại phong cách."
  },
  {
    "id": "Q038",
    "topicId": "kien-thuc-van-hoc",
    "difficulty": "Cơ bản",
    "prompt": "Ai là tác giả của tác phẩm \"Chí Phèo\"?",
    "options": [
      {
        "key": "A",
        "text": "Nam Cao"
      },
      {
        "key": "B",
        "text": "Ngô Tất Tố"
      },
      {
        "key": "C",
        "text": "Vũ Trọng Phụng"
      },
      {
        "key": "D",
        "text": "Nguyễn Công Hoan"
      }
    ],
    "correctAnswer": "A",
    "explanation": "\"Chí Phèo\" (nguyên văn: Cái lò gạch cũ, Đôi lứa xứng đôi) xuất bản năm 1941 là kiệt tác văn học hiện thực phê phán của nhà văn Nam Cao.",
    "keyTakeaway": "Tác giả - tác phẩm trọng tâm chương trình Ngữ văn."
  },
  {
    "id": "Q039",
    "topicId": "phan-tich-van-ban",
    "difficulty": "Vận dụng",
    "passage": {
      "author": "Nam Cao",
      "source": "Chí Phèo (1941)",
      "content": "Hắn vừa đi vừa chửi. Bao giờ cũng thế, cứ rượu xong là hắn chửi. Bắt đầu chửi trời. Có hề gì? Trời có của riêng nhà nào? Rồi hắn chửi đời. Thế cũng chẳng sao: đời là tất cả nhưng chẳng là ai. Tức mình hắn chửi ngay tất cả làng Vũ Đại. Nhưng cả làng Vũ Đại ai cũng nhủ: \"Chắc nó trừ mình ra!\". Không ai lên tiếng cả."
    },
    "prompt": "Ý nghĩa sâu xa của tiếng chửi của nhân vật Chí Phèo ở phần mở đầu thiên truyện là gì?",
    "options": [
      {
        "key": "A",
        "text": "Tiếng gọi tuyệt vọng mong muốn được giao tiếp, kết nối với xã hội loài người nhưng bị cự tuyệt"
      },
      {
        "key": "B",
        "text": "Hành vi côn đồ hung hãn thuần túy nhằm đe dọa cưỡng đoạt tiền bạc của dân làng"
      },
      {
        "key": "C",
        "text": "Cơn mê sảng mất trí vô thức của một kẻ nghiện rượu nặng không thể phục hồi"
      },
      {
        "key": "D",
        "text": "Lời tố cáo trực tiếp của Chí Phèo đối với chế độ thực dân phong kiến đương thời"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Chửi là cách duy nhất một kẻ bị gạt ra ngoài lề xã hội như Chí Phèo tìm kiếm sự hồi đáp từ đồng loại. Cả làng Vũ Đại không ai đáp lại chứng tỏ sự cô độc tột cùng và bi kịch bị cự tuyệt quyền làm người.",
    "keyTakeaway": "Tiếng chửi của Chí Phèo là một tín hiệu giao tiếp bi thảm của một con người khát khao hòa nhập nhưng bị bỏ rơi."
  },
  {
    "id": "Q040",
    "topicId": "suy-luan-logic",
    "difficulty": "Thông hiểu",
    "prompt": "Cho mệnh đề: \"Nếu trời mưa to thì buổi biểu diễn ngoài trời sẽ bị hoãn\". Trường hợp nào dưới đây chứng minh mệnh đề trên là SAI?",
    "options": [
      {
        "key": "A",
        "text": "Trời không mưa và buổi biểu diễn vẫn diễn ra tốt đẹp."
      },
      {
        "key": "B",
        "text": "Trời mưa to và buổi biểu diễn bị hoãn sang tuần sau."
      },
      {
        "key": "C",
        "text": "Trời không mưa nhưng buổi biểu diễn bị hoãn do sự cố kỹ thuật."
      },
      {
        "key": "D",
        "text": "Trời mưa to nhưng buổi biểu diễn ngoài trời vẫn diễn ra bình thường."
      }
    ],
    "correctAnswer": "D",
    "explanation": "Mệnh đề kéo theo P -> Q chỉ sai trong duy nhất một trường hợp: Tiền đề P đúng (trời mưa to) nhưng kết luận Q sai (buổi biểu diễn không bị hoãn).",
    "keyTakeaway": "Quy tắc chân trị logic của mệnh đề kéo theo P -> Q."
  },
  {
    "id": "Q041",
    "topicId": "doc-hieu",
    "difficulty": "Thông hiểu",
    "passage": {
      "title": "Bảo tồn đa dạng sinh học",
      "author": "Viện Sinh thái học Việt Nam",
      "content": "Rừng ngập mặn Cần Giờ đóng vai trò như lá phổi xanh của Thành phố Hồ Chí Minh, đồng thời là bức tường thành thiên nhiên phòng hộ ven biển. Không chỉ hấp thụ một lượng carbon khổng lồ (gấp 4 lần so với rừng trên cạn), hệ sinh thái rừng ngập mặn còn là nơi cư ngụ, sinh sản của hàng trăm loài thủy hải sản quý hiếm, góp phần duy trì sinh kế bền vững cho hàng vạn ngư dân địa phương."
    },
    "prompt": "Vai trò của rừng ngập mặn Cần Giờ được so sánh với những hình ảnh nào trong đoạn văn?",
    "options": [
      {
        "key": "A",
        "text": "Kho báu tài nguyên và tấm khiên vững chãi"
      },
      {
        "key": "B",
        "text": "Vương quốc thủy sinh và lá chắn bão tố"
      },
      {
        "key": "C",
        "text": "Lá phổi xanh và bức tường thành thiên nhiên"
      },
      {
        "key": "D",
        "text": "Chiếc nôi sinh thái và pháo đài biển đảo"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Đoạn văn sử dụng trực tiếp hai hình ảnh: \"lá phổi xanh của Thành phố Hồ Chí Minh\" và \"bức tường thành thiên nhiên phòng hộ ven biển\".",
    "keyTakeaway": "Đối chiếu từ ngữ nguyên văn trong câu hỏi nhận biết ngữ liệu."
  },
  {
    "id": "Q042",
    "topicId": "tieng-viet",
    "difficulty": "Vận dụng",
    "prompt": "Trong câu thơ \"Người ngắm trăng soi ngoài cửa sổ / Trăng nhòm khe cửa ngắm nhà thơ\" (Hồ Chí Minh), từ \"nhòm\" có tác dụng nghệ thuật gì?",
    "options": [
      {
        "key": "A",
        "text": "Mô tả ánh sáng mặt trăng quá chói chang xuyên thủng bức tường nhà lao"
      },
      {
        "key": "B",
        "text": "Nhấn mạnh sự rình rập, theo dõi gắt gao của lính cai ngục đối với Bác"
      },
      {
        "key": "C",
        "text": "Thể hiện sự yếu ớt, le lói của ánh sáng trong đêm tối ngục tù tăm tối"
      },
      {
        "key": "D",
        "text": "Nhân hóa ánh trăng như một người bạn tri âm tri kỷ có cử chỉ tinh nghịch, chủ động chia sẻ cùng người tù"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Từ \"nhòm\" (dùng cho hành động con người) nhân hóa vầng trăng, biến mối quan hệ giữa người và trăng thành cuộc hội ngộ tri âm vượt qua song sắt nhà tù hà khắc.",
    "keyTakeaway": "Biện pháp nhân hóa trong thơ chữ Hán của Bác: Thiên nhiên trở thành bạn đồng hành trung trinh của người chiến sĩ cách mạng."
  },
  {
    "id": "Q043",
    "topicId": "tu-vung-ngu-phap",
    "difficulty": "Cơ bản",
    "prompt": "Xác định từ loại của từ \"vội vàng\" trong câu: \"Tôi không muốn vội vàng đưa ra quyết định khi chưa suy nghĩ thấu đáo.\"",
    "options": [
      {
        "key": "A",
        "text": "Tính từ"
      },
      {
        "key": "B",
        "text": "Phó từ"
      },
      {
        "key": "C",
        "text": "Động từ"
      },
      {
        "key": "D",
        "text": "Danh từ"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Trong câu này, \"vội vàng\" là tính từ biểu thị đặc điểm, tính chất của hành động \"đưa ra quyết định\".",
    "keyTakeaway": "Nhận diện từ loại căn cứ vào vị trí và chức năng ngữ pháp trong câu."
  },
  {
    "id": "Q044",
    "topicId": "bien-phap-tu-tu",
    "difficulty": "Thông hiểu",
    "prompt": "Biện pháp tu từ nào được sử dụng trong câu tục ngữ: \"Một cây làm chẳng nên non / Ba cây chụm lại nên hòn núi cao\"?",
    "options": [
      {
        "key": "A",
        "text": "Nói quá và chêm xen"
      },
      {
        "key": "B",
        "text": "Hoán dụ và tương phản (đối lập)"
      },
      {
        "key": "C",
        "text": "Ẩn dụ chuyển đổi cảm giác"
      },
      {
        "key": "D",
        "text": "Nhân hóa và chơi chữ"
      }
    ],
    "correctAnswer": "B",
    "explanation": "\"Một cây\" (ít ỏi, đơn lẻ), \"ba cây\" (số lượng nhiều, biểu trưng cho sự đoàn kết) là hình ảnh hoán dụ/biểu tượng, đặt trong thế tương phản đối lập với \"chẳng nên non\" và \"nên hòn núi cao\".",
    "keyTakeaway": "Tục ngữ Việt Nam thường chuộng thủ pháp đối xứng tương phản về số lượng để đúc kết bài học triết lý nhân sinh."
  },
  {
    "id": "Q045",
    "topicId": "phong-cach-ngon-ngu",
    "difficulty": "Cơ bản",
    "prompt": "Đoạn hội thoại sau thuộc phong cách ngôn ngữ nào?\n\"- Bác Nam đi đâu sớm thế?\n- Ờ, tôi chạy ra chợ mua mớ rau với con cá về nấu canh trưa đây.\"",
    "options": [
      {
        "key": "A",
        "text": "Phong cách ngôn ngữ nghệ thuật"
      },
      {
        "key": "B",
        "text": "Phong cách ngôn ngữ báo chí"
      },
      {
        "key": "C",
        "text": "Phong cách ngôn ngữ sinh hoạt"
      },
      {
        "key": "D",
        "text": "Phong cách ngôn ngữ chính luận"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Đoạn đối thoại mang đầy đủ đặc trưng của ngôn ngữ sinh hoạt: sử dụng từ ngữ xưng hô thân mật (\"bác\", \"tôi\"), từ tình thái, khẩu ngữ đời thường (\"Ờ\", \"đây\", \"mớ rau\").",
    "keyTakeaway": "Phong cách sinh hoạt: Thể hiện giao tiếp hàng ngày, tính cụ thể, tính cảm xúc và tính cá thể cao."
  },
  {
    "id": "Q046",
    "topicId": "kien-thuc-van-hoc",
    "difficulty": "Thông hiểu",
    "prompt": "Dòng thơ \"Sông Mã xa rồi Tây Tiến ơi! / Nhớ về rừng núi, nhớ chơi vơi\" (Quang Dũng) mở đầu cho nỗi nhớ gì của người chiến binh?",
    "options": [
      {
        "key": "A",
        "text": "Nỗi nhớ người yêu và mái ấm gia đình nơi hậu phương Hà Nội"
      },
      {
        "key": "B",
        "text": "Nỗi nhớ da diết, mênh mang không định hình về thiên nhiên Tây Bắc hùng vĩ và đồng đội gắn bó"
      },
      {
        "key": "C",
        "text": "Sự nuối tiếc tuổi trẻ đã qua đi trong gian khổ chiến hào"
      },
      {
        "key": "D",
        "text": "Nỗi nhớ những chiến công hiển hách lừng lẫy bên dòng sông Mã"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Cụm từ \"nhớ chơi vơi\" độc đáo gợi trạng thái nỗi nhớ bồng bềnh, hư ảo, lan tỏa khắp không gian núi rừng hiểm trở và thời gian kỷ niệm chiến trường.",
    "keyTakeaway": "Từ láy \"chơi vơi\" là điểm sáng thẩm mỹ diễn tả nỗi nhớ da diết đặc trưng của người lính trí thức Hà thành."
  },
  {
    "id": "Q047",
    "topicId": "phan-tich-van-ban",
    "difficulty": "Vận dụng",
    "passage": {
      "author": "Xuân Diệu",
      "source": "Vội vàng (1938)",
      "content": "Tôi muốn tắt nắng đi\nCho màu đừng nhạt mất;\nTôi muốn buộc gió lại\nCho hương đừng bay đi.\nCủa ong bướm này đây tuần tháng mật;\nNày đây hoa của đồng nội xanh rì..."
    },
    "prompt": "Ước muốn \"tắt nắng\", \"buộc gió\" của nhà thơ Xuân Diệu thể hiện tâm trạng gì?",
    "options": [
      {
        "key": "A",
        "text": "Sự sợ hãi cái nắng gắt và gió lạnh của thời tiết thiên nhiên"
      },
      {
        "key": "B",
        "text": "Sự chán chường thực tại và muốn trốn chạy vào thế giới ảo mộng"
      },
      {
        "key": "C",
        "text": "Ý chí chinh phục thiên nhiên để phục vụ sản xuất nông nghiệp"
      },
      {
        "key": "D",
        "text": "Khát vọng táo bạo muốn đoạt quyền tạo hóa để níu giữ vẻ đẹp và hương sắc mùa xuân của cuộc đời"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Ước muốn phi lý tưởng chừng ngông cuồng thực chất xuất phát từ tình yêu cuộc sống trần thế đến cuồng nhiệt say đắm: thi sĩ muốn thời gian ngừng trôi để tận hưởng vẻ đẹp tươi non nhất của trần gian.",
    "keyTakeaway": "Thơ mới Xuân Diệu: Tình yêu cuộc sống trần thế mãnh liệt và nỗi ám ảnh thường trực trước bước đi vội vã của thời gian."
  },
  {
    "id": "Q048",
    "topicId": "suy-luan-logic",
    "difficulty": "Thông hiểu",
    "prompt": "Xác định quan hệ ngữ nghĩa giữa hai vế trong câu: \"Vì nước biển nóng lên do biến đổi khí hậu, cho nên các rạn san hô trên thế giới đang bị tẩy trắng hàng loạt.\"",
    "options": [
      {
        "key": "A",
        "text": "Quan hệ tương phản - nhượng bộ"
      },
      {
        "key": "B",
        "text": "Quan hệ tăng tiến đồng cấp"
      },
      {
        "key": "C",
        "text": "Quan hệ nhân quả (Nguyên nhân - Kết quả)"
      },
      {
        "key": "D",
        "text": "Quan hệ điều kiện - kết quả"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Cặp từ \"Vì ... cho nên\" biểu thị rõ rệt quan hệ nhân quả: nước biển nóng lên là nguyên nhân dẫn tới kết quả san hô bị tẩy trắng.",
    "keyTakeaway": "Phân biệt \"Vì... nên...\" (nhân quả, sự việc đã/đang diễn ra) với \"Nếu... thì...\" (điều kiện/giả thiết, sự việc chưa diễn ra)."
  },
  {
    "id": "Q049",
    "topicId": "danh-gia-thuc-tien",
    "difficulty": "Vận dụng",
    "prompt": "Hiện tượng \"FOMO\" (Fear Of Missing Out - nỗi sợ bị bỏ lỡ) phổ biến ở giới trẻ khi sử dụng mạng xã hội phản ánh vấn đề tâm lý nào?",
    "options": [
      {
        "key": "A",
        "text": "Sự am hiểu tường tận mọi xu hướng công nghệ thông tin tân tiến nhất"
      },
      {
        "key": "B",
        "text": "Ý chí phấn đấu không ngừng nghỉ để vượt lên trên mọi người xung quanh"
      },
      {
        "key": "C",
        "text": "Nhu cầu kết nối xã hội bị biến tướng thành sự bất an thường trực và thiếu năng lực tập trung vào hiện tại"
      },
      {
        "key": "D",
        "text": "Khả năng quản lý quỹ thời gian học tập và giải trí cực kỳ khoa học"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Hội chứng FOMO khiến người trẻ liên tục kiểm tra thông báo vì sợ mình không theo kịp bạn bè, sinh ra tâm lý lo âu, phân tâm và đánh mất khả năng cảm nhận cuộc sống thực tại.",
    "keyTakeaway": "Liên hệ thực tiễn xã hội số: Nhận diện tác động tâm lý của không gian mạng đối với sự tập trung và sức khỏe tinh thần."
  },
  {
    "id": "Q050",
    "topicId": "doc-hieu-nang-cao",
    "difficulty": "Vận dụng cao",
    "passage": {
      "title": "Văn hóa và Toàn cầu hóa",
      "author": "GS. Trần Quốc Vượng",
      "content": "Hòa nhập không có nghĩa là hòa tan. Một nền văn hóa chỉ có thể tồn tại và đóng góp vào bức tranh chung của nhân loại khi nó giữ được bản sắc độc đáo của cội nguồn. Bản sắc không phải là một chiếc hộp đông cứng từ quá khứ, mà là một sinh thể liên tục hấp thu tinh hoa nhân loại trên nền tảng cốt lõi của dân tộc."
    },
    "prompt": "Nhận định: \"Bản sắc không phải là một chiếc hộp đông cứng từ quá khứ, mà là một sinh thể...\" sử dụng cách hiểu biện chứng nào về văn hóa?",
    "options": [
      {
        "key": "A",
        "text": "Văn hóa truyền thống đã lỗi thời và cần được thay thế hoàn toàn bằng văn hóa ngoại nhập"
      },
      {
        "key": "B",
        "text": "Bản sắc văn hóa có tính mở, vừa bảo tồn giá trị truyền thống vừa tiếp biến và phát triển năng động"
      },
      {
        "key": "C",
        "text": "Cần đóng kín mọi ngả đường giao lưu để bảo vệ tính nguyên vẹn thuần khiết của di sản"
      },
      {
        "key": "D",
        "text": "Văn hóa chỉ có giá trị khi được bảo quản trong viện bảo tàng và thư viện cổ"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Hình ảnh ẩn dụ \"không phải chiếc hộp đông cứng\" mà là \"sinh thể liên tục hấp thu\" khẳng định văn hóa là quá trình sống động: bảo tồn cái gốc nhưng luôn sáng tạo, tiếp biến cùng thời đại.",
    "keyTakeaway": "Quan niệm tiếp biến văn hóa: Kế thừa truyền thống kết hợp tinh hoa hiện đại để tạo nên sức sống mới."
  }
];

const ADDITIONAL_QUESTIONS: Question[] = [
  {
    "id": "Q051",
    "topicId": "doc-hieu",
    "difficulty": "Thông hiểu",
    "passage": {
      "title": "Tự hào văn hóa di sản",
      "content": "Không gian văn hóa Cồng chiêng Tây Nguyên trải rộng suốt 5 tỉnh Kon Tum, Gia Lai, Đắk Lắk, Đắk Nông và Lâm Đồng. Âm thanh cồng chiêng không chỉ là âm nhạc thuần túy, mà là tiếng nói tâm linh kết nối con người với thần linh, gắn bó mật thiết với vòng đời người từ lễ thổi tai chào đời đến lễ bỏ mả tiễn đưa linh hồn."
    },
    "prompt": "Theo đoạn văn, âm thanh cồng chiêng Tây Nguyên mang ý nghĩa đặc biệt nào?",
    "options": [
      {
        "key": "A",
        "text": "Là tiếng nói tâm linh kết nối con người với thần linh và gắn liền với các nghi lễ vòng đời"
      },
      {
        "key": "B",
        "text": "Là nhạc cụ biểu diễn thương mại phục vụ khách du lịch quốc tế"
      },
      {
        "key": "C",
        "text": "Là tín hiệu báo động khi có thú dữ tấn công buôn làng"
      },
      {
        "key": "D",
        "text": "Chỉ được sử dụng trong các cuộc chiến đấu bảo vệ lãnh thổ xưa kia"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Văn bản nêu rõ: \"Âm thanh cồng chiêng không chỉ là âm nhạc thuần túy, mà là tiếng nói tâm linh kết nối con người với thần linh, gắn bó mật thiết với vòng đời người...\".",
    "keyTakeaway": "Đọc hiểu văn hóa di sản: Chú ý chức năng văn hóa tâm linh bên cạnh chức năng nghệ thuật."
  },
  {
    "id": "Q052",
    "topicId": "tieng-viet",
    "difficulty": "Cơ bản",
    "prompt": "Từ nào dưới đây KHÔNG PHẢI là từ mượn gốc Pháp?",
    "options": [
      {
        "key": "A",
        "text": "Xà phòng"
      },
      {
        "key": "B",
        "text": "Sơn hà"
      },
      {
        "key": "C",
        "text": "Cà phê"
      },
      {
        "key": "D",
        "text": "Ghi đông"
      }
    ],
    "correctAnswer": "B",
    "explanation": "\"Sơn hà\" (núi sông) là từ Hán - Việt. \"Xà phòng\" (savon), \"Cà phê\" (café), \"Ghi đông\" (guidon) đều là từ mượn gốc Pháp.",
    "keyTakeaway": "Phân biệt lớp từ mượn trong tiếng Việt: Từ mượn gốc Hán và từ mượn gốc Ấn-Âu (Pháp, Anh)."
  },
  {
    "id": "Q053",
    "topicId": "tu-vung-ngu-phap",
    "difficulty": "Vận dụng",
    "prompt": "Câu nào sau đây mắc lỗi sai ngữ pháp do dùng từ nối không thích hợp?",
    "options": [
      {
        "key": "A",
        "text": "Tuy trời mưa to nhưng trận đấu bóng đá vẫn diễn ra sôi nổi."
      },
      {
        "key": "B",
        "text": "Vì bạn ấy rất chăm chỉ rèn luyện nên kết quả học tập ngày càng tiến bộ."
      },
      {
        "key": "C",
        "text": "Mặc dù anh ta hết lòng khuyên nhủ, do đó cô ấy vẫn không thay đổi quyết định."
      },
      {
        "key": "D",
        "text": "Nếu ngày mai thời tiết thuận lợi thì lớp chúng ta sẽ đi dã ngoại."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Câu C dùng cặp \"Mặc dù ... do đó\": \"mặc dù\" biểu thị tương phản nhưng \"do đó\" lại biểu thị nguyên nhân - kết quả. Cần sửa thành \"Mặc dù anh ta hết lòng khuyên nhủ nhưng cô ấy vẫn không thay đổi quyết định\".",
    "keyTakeaway": "Lỗi dùng cặp quan hệ từ cọc cạch: Phải dùng đúng cặp đi đôi (Mặc dù ... nhưng; Vì ... nên; Nếu ... thì)."
  },
  {
    "id": "Q054",
    "topicId": "bien-phap-tu-tu",
    "difficulty": "Thông hiểu",
    "prompt": "Trong câu thơ: \"Tiếng chim hót líu lo như rắc phấn vàng xuống mặt hồ tĩnh lặng\", tác giả đã sử dụng biện pháp tu từ nào?",
    "options": [
      {
        "key": "A",
        "text": "Hoán dụ và nhân hóa"
      },
      {
        "key": "B",
        "text": "Điệp từ và nói quá"
      },
      {
        "key": "C",
        "text": "Chơi chữ và đảo ngữ"
      },
      {
        "key": "D",
        "text": "So sánh và ẩn dụ chuyển đổi cảm giác"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Dùng từ \"như\" để so sánh tiếng chim với hành động rắc phấn, đồng thời biến âm thanh tiếng chim (thính giác) thành màu sắc phấn vàng (thị giác) và hạt bụi phấn (xúc giác).",
    "keyTakeaway": "Sự giao thoa cảm giác trong thơ ca tạo nên thi ảnh độc đáo, giàu sức gợi."
  },
  {
    "id": "Q055",
    "topicId": "phong-cach-ngon-ngu",
    "difficulty": "Thông hiểu",
    "passage": {
      "source": "SGK Vật lý 12",
      "content": "Hiện tượng quang điện ngoài là hiện tượng ánh sáng làm bật các electron ra khỏi bề mặt kim loại. Định luật giới hạn quang điện khẳng định: Đối với mỗi kim loại, ánh sáng kích thích phải có bước sóng ngắn hơn hoặc bằng giới hạn quang điện của kim loại đó thì mới gây ra được hiện tượng quang điện."
    },
    "prompt": "Văn bản trên thuộc phong cách ngôn ngữ nào?",
    "options": [
      {
        "key": "A",
        "text": "Phong cách ngôn ngữ báo chí"
      },
      {
        "key": "B",
        "text": "Phong cách ngôn ngữ chính luận"
      },
      {
        "key": "C",
        "text": "Phong cách ngôn ngữ nghệ thuật"
      },
      {
        "key": "D",
        "text": "Phong cách ngôn ngữ khoa học"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Văn bản định nghĩa khái niệm vật lý chính xác, dùng thuật ngữ chuyên ngành (electron, quang điện ngoài, bước sóng), phi cảm xúc, thuần phong cách khoa học.",
    "keyTakeaway": "Đặc điểm phong cách khoa học: Thuật ngữ chuyên ngành, câu văn định nghĩa chính xác, tính khách quan tuyệt đối."
  },
  {
    "id": "Q056",
    "topicId": "kien-thuc-van-hoc",
    "difficulty": "Cơ bản",
    "prompt": "Tác phẩm \"Người lái đò Sông Đà\" của nhà văn Nguyễn Tuân thuộc thể loại văn học nào?",
    "options": [
      {
        "key": "A",
        "text": "Truyện ngắn"
      },
      {
        "key": "B",
        "text": "Tiểu thuyết"
      },
      {
        "key": "C",
        "text": "Tùy bút"
      },
      {
        "key": "D",
        "text": "Kịch bản văn học"
      }
    ],
    "correctAnswer": "C",
    "explanation": "\"Người lái đò Sông Đà\" in trong tập tùy bút \"Sông Đà\" (1960), là đỉnh cao thể loại tùy bút của Nguyễn Tuân.",
    "keyTakeaway": "Thể loại tùy bút: Đề cao cái tôi tác giả, chất trữ tình kết hợp sự quan sát uyên bác và ngôn từ điêu luyện."
  },
  {
    "id": "Q057",
    "topicId": "phan-tich-van-ban",
    "difficulty": "Thông hiểu",
    "passage": {
      "author": "Nguyễn Khoa Điềm",
      "source": "Mặt đường khát vọng",
      "content": "Khi ta lớn lên Đất Nước đã có rồi\nĐất Nước có trong những cái \"ngày xửa ngày xưa...\" mẹ thường hay kể\nĐất Nước bắt đầu với miếng trầu bây giờ bà ăn\nĐất Nước lớn lên khi dân mình biết trồng tre mà đánh giặc..."
    },
    "prompt": "Đoạn thơ trên thể hiện cảm nhận mới mẻ của nhà thơ về Đất Nước trên bình diện nào?",
    "options": [
      {
        "key": "A",
        "text": "Đất Nước trừu tượng, xa vời qua những khái niệm triết học kinh viện"
      },
      {
        "key": "B",
        "text": "Đất Nước chỉ tồn tại trong các công trình kiến trúc đền đài nguy nga"
      },
      {
        "key": "C",
        "text": "Đất Nước gần gũi, gắn liền với phong tục, cổ tích và truyền thống đấu tranh hàng ngàn đời của nhân dân"
      },
      {
        "key": "D",
        "text": "Đất Nước là lãnh thổ địa lý thuần túy được phân chia ranh giới"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Nguyễn Khoa Điềm đưa Đất Nước về với những gì thân thương nhất trong đời sống nhân dân: câu chuyện cổ tích, miếng trầu của bà, cây tre đánh giặc.",
    "keyTakeaway": "Tư tưởng \"Đất Nước của Nhân dân\" trong trường ca Mặt đường khát vọng."
  },
  {
    "id": "Q058",
    "topicId": "suy-luan-logic",
    "difficulty": "Vận dụng",
    "prompt": "Trong lập luận: \"Vì tất cả các kim loại đều dẫn điện tốt, mà than chì dẫn điện tốt, nên than chì là một kim loại\". Lỗi sai logic ở đây là gì?",
    "options": [
      {
        "key": "A",
        "text": "Lỗi phủ định tiền đề hợp lý"
      },
      {
        "key": "B",
        "text": "Lỗi quy kết thuộc tính chung đảo ngược (ngụy biện khẳng định hệ quả)"
      },
      {
        "key": "C",
        "text": "Lỗi dùng từ đa nghĩa mơ hồ"
      },
      {
        "key": "D",
        "text": "Lỗi tấn công cá nhân người phát ngôn"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Kim loại dẫn điện tốt không có nghĩa là CHỈ CÓ kim loại mới dẫn điện tốt. Than chì là phi kim có khả năng dẫn điện. Lập luận ngộ nhận rằng có thuộc tính \"dẫn điện\" thì ắt phải là \"kim loại\".",
    "keyTakeaway": "Ngụy biện khẳng định hệ quả: Nếu A thì B; có B chưa chắc đã có A."
  },
  {
    "id": "Q059",
    "topicId": "danh-gia-thuc-tien",
    "difficulty": "Thông hiểu",
    "prompt": "Câu tục ngữ \"Thương người như thể thương thân\" phản ánh truyền thống đạo lý cốt lõi nào của dân tộc Việt Nam?",
    "options": [
      {
        "key": "A",
        "text": "Tinh thần kiên cường bất khuất trước thiên tai bão lũ"
      },
      {
        "key": "B",
        "text": "Truyền thống tôn sư trọng đạo và hiếu học"
      },
      {
        "key": "C",
        "text": "Ý chí độc lập tự chủ trong phát triển kinh tế"
      },
      {
        "key": "D",
        "text": "Tinh thần tương thân tương ái, coi trọng tình nghĩa và lòng nhân ái"
      }
    ],
    "correctAnswer": "D",
    "explanation": "\"Thương người như thể thương thân\" dạy con người đặt mình vào vị trí của người khác để yêu thương, san sẻ và đùm bọc, là cốt lõi tinh thần nhân đạo Việt Nam.",
    "keyTakeaway": "Hệ giá trị đạo đức truyền thống trong kho tàng ca dao tục ngữ Việt Nam."
  },
  {
    "id": "Q060",
    "topicId": "doc-hieu-nang-cao",
    "difficulty": "Vận dụng cao",
    "passage": {
      "title": "Ý nghĩa của sự thất bại",
      "author": "J.K. Rowling",
      "content": "Thất bại giúp tôi cởi bỏ tất cả những điều phù phiếm không cần thiết. Tôi bắt đầu nhìn thẳng vào con người thực của mình thay vì cố gắng đóng vai một người khác. Thất bại mang lại cho tôi sự vững vàng nội tại mà tôi chưa từng đạt được sau bất kỳ kỳ thi đỗ đạt nào. Nó cho tôi nhận ra rằng: bản thân tôi sở hữu một ý chí kiên định và những người bạn quý giá hơn cả kim cương."
    },
    "prompt": "Hàm ý triết lý sâu xa nhất của đoạn văn là gì?",
    "options": [
      {
        "key": "A",
        "text": "Thất bại là thước đo thanh lọc, giúp con người khám phá sức mạnh nội tại và những giá trị đích thực"
      },
      {
        "key": "B",
        "text": "Cần chủ động tìm kiếm sự thất bại để chứng tỏ bản lĩnh trước người khác"
      },
      {
        "key": "C",
        "text": "Thành công trong học tập và thi cử hoàn toàn không mang lại giá trị gì cho tương lai"
      },
      {
        "key": "D",
        "text": "Tình bạn chỉ có thể xuất hiện khi con người rơi vào cảnh khốn cùng nhất"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Đoạn văn khẳng định giá trị kiến tạo của nghịch cảnh: thất bại giúp loại bỏ ảo tưởng phù phiếm và đánh thức ý chí kiên định cùng các giá trị chân thật trong đời.",
    "keyTakeaway": "Đọc hiểu nghị luận nhân sinh: Tìm thông điệp mang tính giải phóng tư duy và củng cố niềm tin tích cực."
  }
];

export const EXPANDED_QUESTIONS: Question[] = [
  {
    "id": "Q061",
    "topicId": "doc-hieu",
    "difficulty": "Thông hiểu",
    "passage": {
      "title": "Ý nghĩa của sự sống và lý tưởng cống hiến",
      "author": "Nikolai Ostrovsky",
      "source": "Thép đã tôi thế đấy",
      "content": "Cái quý nhất của con người ta là sự sống. Đời người chỉ sống có một lần. Phải sống sao cho khỏi xót xa, ân hận vì những năm tháng đã sống hoài, sống phí, cho khỏi hổ thẹn vì dĩ vãng ti tiện và hèn đớn của mình, để khi nhắm mắt xuôi tay có thể nói rằng: Tất cả đời ta, tất cả sức ta, ta đã hiến dâng cho sự nghiệp cao đẹp nhất trên đời, sự nghiệp đấu tranh giải phóng loài người."
    },
    "prompt": "Theo đoạn trích trên, tác giả muốn nhấn mạnh điều cốt lõi nào về lẽ sống của con người?",
    "options": [
      {
        "key": "A",
        "text": "Việc bảo vệ tính mạng cá nhân và tránh xa những biến động khốc liệt của hoàn cảnh thời đại."
      },
      {
        "key": "B",
        "text": "Lối sống có lý tưởng cao cả, cống hiến trọn vẹn sức lực để không phải ân hận về những năm tháng sống hoài phí."
      },
      {
        "key": "C",
        "text": "Nỗ lực tìm kiếm danh vọng cá nhân để lưu danh sử sách cho hậu thế noi theo."
      },
      {
        "key": "D",
        "text": "Sự hưởng thụ các tiện nghi vật chất khi tuổi thanh xuân còn đang rực rỡ."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Đoạn trích kinh điển khẳng định chân lý: sự sống là quý giá nhất, con người cần sống có mục đích và cống hiến hết mình cho lý tưởng cao đẹp để không bao giờ phải hối tiếc vì đã sống vô nghĩa.",
    "keyTakeaway": "Đọc hiểu nghị luận nhân sinh: Xác định luận điểm cốt lõi về mục đích sống và thái độ cống hiến của cá nhân với cộng đồng."
  },
  {
    "id": "Q062",
    "topicId": "tieng-viet",
    "difficulty": "Thông hiểu",
    "prompt": "Thành ngữ nào dưới đây chỉ trạng thái tâm lý lúng túng, bối rối, vướng mắc không tìm ra lối thoát?",
    "options": [
      {
        "key": "A",
        "text": "Như cá gặp nước"
      },
      {
        "key": "B",
        "text": "Như rồng gặp mây"
      },
      {
        "key": "C",
        "text": "Như gà mắc tóc"
      },
      {
        "key": "D",
        "text": "Như diều gặp gió"
      }
    ],
    "correctAnswer": "C",
    "explanation": "\"Như gà mắc tóc\" ví sự lúng túng, hoang mang, vướng víu không biết xoay xở giải quyết ra sao. Các thành ngữ B, C, D đều diễn tả trạng thái may mắn, thuận lợi tột bậc.",
    "keyTakeaway": "Thành ngữ so sánh dân gian: Phân biệt các hình ảnh ẩn dụ mang sắc thái bế tắc (tiêu cực) và thời cơ thuận lợi (tích cực)."
  },
  {
    "id": "Q063",
    "topicId": "tu-vung-ngu-phap",
    "difficulty": "Thông hiểu",
    "prompt": "Chỉ ra câu văn có trật tự từ được sắp xếp hợp lý nhằm miêu tả đúng trình tự tự nhiên và tính dồn dập của hiện tượng thời tiết:",
    "options": [
      {
        "key": "A",
        "text": "Cơn mưa rào trút xuống xối xả, rồi tiếng sấm rền vang sau khi tia chớp xuất hiện."
      },
      {
        "key": "B",
        "text": "Màn đêm xé rách bởi cơn mưa rào trút xuống trước khi tia chớp ló rạng trên bầu trời."
      },
      {
        "key": "C",
        "text": "Xối xả cơn mưa rào trút xuống khi cả sấm và chớp đều đã biến mất hoàn toàn."
      },
      {
        "key": "D",
        "text": "Tiếng sấm rền vang, rồi những tia chớp xé rách màn đêm, và cơn mưa rào trút xuống xối xả."
      }
    ],
    "correctAnswer": "D",
    "explanation": "Trật tự câu A diễn tả logic tự nhiên của cơn dông: sấm chớp báo hiệu ở trên cao trước rồi cơn mưa rào mới ập xuống, tạo cảm giác mạch lạc và nhịp điệu dồn dập.",
    "keyTakeaway": "Quy tắc sắp xếp trật tự từ trong câu tiếng Việt: Phản ánh trình tự thời gian, nguyên nhân - kết quả và diễn biến tâm lý."
  },
  {
    "id": "Q064",
    "topicId": "bien-phap-tu-tu",
    "difficulty": "Vận dụng",
    "prompt": "Xác định các biện pháp tu từ được phối hợp trong hai câu thơ: \"Bác đã đi rồi sao, Bác ơi! / Mùa thu đang đẹp, nắng xanh trời\" (Tố Hữu):",
    "options": [
      {
        "key": "A",
        "text": "Nói giảm nói tránh và câu hỏi tu từ"
      },
      {
        "key": "B",
        "text": "Nói quá và chơi chữ"
      },
      {
        "key": "C",
        "text": "Hoán dụ và nghịch ngữ"
      },
      {
        "key": "D",
        "text": "Chêm xen và so sánh ngầm"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Từ \"đi rồi\" là biện pháp nói giảm nói tránh biểu thị sự qua đời của Bác Hồ, kết hợp câu hỏi tu từ bộc lộ niềm đau đớn, bàng hoàng tột độ của toàn dân tộc.",
    "keyTakeaway": "Nói giảm nói tránh trong văn cảnh đau thương: Giảm bớt sự tang tóc, khẳng định sự bất tử của hình tượng vĩ nhân."
  },
  {
    "id": "Q065",
    "topicId": "phong-cach-ngon-ngu",
    "difficulty": "Cơ bản",
    "prompt": "Đặc điểm nào sau đây KHÔNG THUỘC phong cách ngôn ngữ hành chính?",
    "options": [
      {
        "key": "A",
        "text": "Sử dụng nhiều từ ngữ địa phương và các biện pháp tu từ gợi cảm xúc cá nhân"
      },
      {
        "key": "B",
        "text": "Tính khuôn mẫu chặt chẽ về mặt bố cục và thể thức văn bản"
      },
      {
        "key": "C",
        "text": "Tính minh xác rõ ràng, không cho phép hiểu theo nghĩa nước đôi"
      },
      {
        "key": "D",
        "text": "Tính quyền lực pháp lý dựa trên quy định của pháp luật hiện hành"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Văn bản hành chính - công vụ đòi hỏi tính minh xác tuyệt đối, nghiêm cấm dùng từ ngữ địa phương, tiếng lóng hay các thủ pháp nghệ thuật bộc lộ cảm xúc chủ quan.",
    "keyTakeaway": "Đặc trưng phong cách ngôn ngữ hành chính: Tính khuôn mẫu, tính minh xác và tính công quyền (quyền lực)."
  },
  {
    "id": "Q066",
    "topicId": "kien-thuc-van-hoc",
    "difficulty": "Thông hiểu",
    "prompt": "Nhà thơ nào được mệnh danh là \"nhà thơ mới nhất trong các nhà thơ mới\" và là \"ông hoàng thơ tình\" của nền văn học Việt Nam?",
    "options": [
      {
        "key": "A",
        "text": "Huy Cận"
      },
      {
        "key": "B",
        "text": "Hàn Mặc Tử"
      },
      {
        "key": "C",
        "text": "Chế Lan Viên"
      },
      {
        "key": "D",
        "text": "Xuân Diệu"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Xuân Diệu được nhà phê bình Hoài Thanh ca ngợi là \"nhà thơ mới nhất trong các nhà thơ mới\" với nguồn cảm hứng dạt dào về tình yêu đôi lứa và lòng yêu đời tha thiết.",
    "keyTakeaway": "Gương mặt đại diện phong trào Thơ mới: Xuân Diệu (thơ tình, khát vọng sống), Huy Cận (nỗi sầu không gian), Hàn Mặc Tử (thơ tôn giáo, siêu thực)."
  },
  {
    "id": "Q067",
    "topicId": "phan-tich-van-ban",
    "difficulty": "Vận dụng",
    "prompt": "Ý nghĩa nhân văn sâu sắc nhất của hình tượng \"bát cháo hành\" mà thị Nở mang cho Chí Phèo là gì?",
    "options": [
      {
        "key": "A",
        "text": "Phương thuốc dân gian chữa khỏi dứt điểm cơn cảm lạnh của Chí Phèo"
      },
      {
        "key": "B",
        "text": "Biểu tượng của tình thương mộc mạc chân thật, đánh thức lương tri và khát vọng hoàn lương bị vùi lấp"
      },
      {
        "key": "C",
        "text": "Minh chứng cho sự tài hoa nấu nướng của người phụ nữ nông thôn"
      },
      {
        "key": "D",
        "text": "Món quà mang tính thương hại thuần túy của một người hàng xóm"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Bát cháo hành là hương vị đầu tiên của tình người mà Chí Phèo được nhận trong đời. Tình thương mộc mạc ấy đã đánh thức bản tính lương thiện và khao khát được làm người hòa nhập với mọi người.",
    "keyTakeaway": "Chi tiết nghệ thuật bát cháo hành: Biểu tượng cho sức mạnh cảm hóa của tình người trong văn học hiện thực Nam Cao."
  },
  {
    "id": "Q068",
    "topicId": "suy-luan-logic",
    "difficulty": "Thông hiểu",
    "prompt": "Câu nào sau đây mắc lỗi lập luận ngụy biện \"người rơm\" (Straw Man)?",
    "options": [
      {
        "key": "A",
        "text": "Bạn đề xuất cải thiện chất lượng bữa ăn căn tin, hóa ra bạn muốn biến trường học thành nhà hàng xa xỉ!"
      },
      {
        "key": "B",
        "text": "Chúng ta không thể tin lời anh ấy vì anh ấy chưa từng tham gia nghiên cứu khoa học."
      },
      {
        "key": "C",
        "text": "Hiện tượng này xảy ra sau đợt mưa lớn nên mưa chắc chắn là nguyên nhân duy nhất."
      },
      {
        "key": "D",
        "text": "Mọi người trong lớp đều chọn phương án A nên phương án A chắc chắn đúng."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Ngụy biện người rơm là bóp méo, phóng đại đề xuất của người khác (cải thiện bữa ăn -> biến thành nhà hàng xa xỉ) để dễ dàng công kích lập luận đó.",
    "keyTakeaway": "Ngụy biện người rơm: Bóp méo ý kiến của đối phương thành một phiên bản cực đoan, phi lý rồi tập trung bác bỏ phiên bản đó."
  },
  {
    "id": "Q069",
    "topicId": "danh-gia-thuc-tien",
    "difficulty": "Vận dụng",
    "prompt": "Giải pháp căn bản nhất để giữ gìn và phát huy sự trong sáng của tiếng Việt trong thời kỳ hội nhập quốc tế là gì?",
    "options": [
      {
        "key": "A",
        "text": "Nghiêm cấm tuyệt đối mọi việc vay mượn từ ngữ có nguồn gốc tiếng nước ngoài"
      },
      {
        "key": "B",
        "text": "Tự do chêm xen tiếng Anh vào mọi hoàn cảnh giao tiếp hàng ngày để thể hiện sự hiện đại"
      },
      {
        "key": "C",
        "text": "Nâng cao ý thức tự tôn ngôn ngữ dân tộc, sử dụng tiếng Việt chuẩn mực, tiếp thu có chọn lọc từ ngữ quốc tế trên nền tảng ngữ pháp tiếng Việt"
      },
      {
        "key": "D",
        "text": "Chỉ đọc và sử dụng văn bản thời cổ, dừng việc sáng tạo các từ ngữ công nghệ mới"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Giữ gìn sự trong sáng của tiếng Việt không đồng nghĩa với đóng cửa ngôn ngữ, mà phải vừa bảo tồn quy tắc chuẩn mực dân tộc, vừa làm giàu vốn từ có chọn lọc theo đúng tinh thần lời dạy của cố Thủ tướng Phạm Văn Đồng.",
    "keyTakeaway": "Nguyên tắc giữ gìn sự trong sáng của tiếng Việt: Bảo tồn bản sắc ngữ pháp kết hợp phát triển vốn từ năng động."
  },
  {
    "id": "Q070",
    "topicId": "doc-hieu-nang-cao",
    "difficulty": "Vận dụng cao",
    "prompt": "Khi đọc một văn bản thông tin chứa các biểu đồ và số liệu thống kê khoa học, thao tác phản biện quan trọng nhất để tránh bị thao túng bởi dữ liệu là gì?",
    "options": [
      {
        "key": "A",
        "text": "Chỉ chú ý vào tiêu đề giật gân và câu cảm thán của tác giả"
      },
      {
        "key": "B",
        "text": "Tuyệt đối tin tưởng toàn bộ vì đồ thị máy tính luôn đảm bảo tính khách quan tuyệt đối"
      },
      {
        "key": "C",
        "text": "Bỏ qua toàn bộ biểu đồ và chỉ đọc phần kết luận chung"
      },
      {
        "key": "D",
        "text": "Kiểm tra nguồn trích dẫn, quy mô mẫu nghiên cứu, trục tọa độ và phương pháp thu thập dữ liệu"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Dữ liệu số có thể bị bóp méo qua việc cắt cụt trục tung, chọn mẫu thiên lệch hoặc nguồn khảo sát không độc lập. Độc giả có tư duy phản biện cần xem xét phương pháp luận thu thập số liệu.",
    "keyTakeaway": "Đọc hiểu văn bản đa phương thức: Phân tích tính khoa học của biểu đồ và kiểm tra tính minh bạch của nguồn số liệu."
  },
  {
    "id": "Q071",
    "topicId": "doc-hieu",
    "difficulty": "Cơ bản",
    "passage": {
      "title": "Kỷ niệm ngày đầu tiên đi học",
      "author": "Thanh Tịnh",
      "source": "Tôi đi học (1941)",
      "content": "Hằng năm cứ vào cuối thu, lá ngoài đường rụng nhiều và trên không có những đám mây bàng bạc, lòng tôi lại nao nức những kỷ niệm mơn man của buổi tựu trường. Tôi quên thế nào được những cảm giác trong sáng ấy nảy nở trong lòng tôi như mấy cành hoa tươi mỉm cười giữa bầu trời quang đãng."
    },
    "prompt": "Trong đoạn văn trên, hình ảnh thiên nhiên nào báo hiệu thời điểm buổi tựu trường diễn ra?",
    "options": [
      {
        "key": "A",
        "text": "Cơn mưa rào mùa hạ và tiếng ve sầu râm ran trên vòm lá"
      },
      {
        "key": "B",
        "text": "Những chồi non biếc của cành đào nở rộ trong gió xuân"
      },
      {
        "key": "C",
        "text": "Lá ngoài đường rụng nhiều và trên không có những đám mây bàng bạc vào cuối thu"
      },
      {
        "key": "D",
        "text": "Gió bấc căm căm và những đợt sương muối bao phủ mặt đất"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Câu văn mở đầu của tác phẩm nêu rõ: \"Hằng năm cứ vào cuối thu, lá ngoài đường rụng nhiều và trên không có những đám mây bàng bạc, lòng tôi lại nao nức...\".",
    "keyTakeaway": "Nhận diện chi tiết không gian và thời gian nghệ thuật trong văn xuôi trữ tình."
  },
  {
    "id": "Q072",
    "topicId": "tieng-viet",
    "difficulty": "Thông hiểu",
    "prompt": "Từ nào sau đây mang nghĩa là \"điều tâm huyết được giữ kín trong lòng và luôn tự nhắc nhở mình phải thực hiện\"?",
    "options": [
      {
        "key": "A",
        "text": "Tâm niệm"
      },
      {
        "key": "B",
        "text": "Tâm đắc"
      },
      {
        "key": "C",
        "text": "Tâm can"
      },
      {
        "key": "D",
        "text": "Tâm tính"
      }
    ],
    "correctAnswer": "A",
    "explanation": "\"Tâm niệm\" là điều ghi sâu trong lòng để răn mình. \"Tâm đắc\" là thấy rất ưng ý, hài lòng; \"tâm can\" là đáy lòng, ruột gan; \"tâm tính\" là tính tình của con người.",
    "keyTakeaway": "Nắm vững sắc thái ngữ nghĩa của hệ thống từ Hán - Việt có yếu tố \"Tâm\"."
  },
  {
    "id": "Q073",
    "topicId": "tu-vung-ngu-phap",
    "difficulty": "Vận dụng",
    "prompt": "Câu nào sau đây mắc lỗi mơ hồ về nghĩa do cách dùng đại từ hoặc trật tự từ ngữ không chặt chẽ?",
    "options": [
      {
        "key": "A",
        "text": "Người lái xe phát hiện một con trâu đang chạy băng qua đường phía trước xe."
      },
      {
        "key": "B",
        "text": "Người lái xe nhìn thấy một con trâu qua gương chiếu hậu khi nó đang chạy qua đường."
      },
      {
        "key": "C",
        "text": "Qua gương chiếu hậu, người lái xe thấy chiếc xe tải phía sau đang tăng tốc."
      },
      {
        "key": "D",
        "text": "Bác nông dân đang thong thả dắt trâu đi về làng khi hoàng hôn buông xuống."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Câu A dùng đại từ \"nó\" ở cuối câu gây mơ hồ: \"nó\" có thể hiểu là con trâu đang chạy qua đường, hoặc người lái xe đang lái chiếc xe chạy qua đường.",
    "keyTakeaway": "Lỗi câu mơ hồ nghĩa: Cần dùng đại từ thay thế có đối tượng quy chiếu rõ ràng và vị trí từ hạn định chuẩn xác."
  },
  {
    "id": "Q074",
    "topicId": "bien-phap-tu-tu",
    "difficulty": "Thông hiểu",
    "passage": {
      "author": "Tố Hữu",
      "source": "Mẹ Suốt",
      "content": "Tàu bay hắn bắn sớm trưa\nThì tui cứ việc nắng mưa đưa đò\nGhé tai nghe tiếng bom gầm\nĐúng rồi tiếng súng ta trầm bên kia..."
    },
    "prompt": "Cặp từ \"sớm trưa\" và \"nắng mưa\" trong đoạn thơ trên sử dụng biện pháp tu từ gì để làm nổi bật tinh thần quả cảm của Mẹ Suốt?",
    "options": [
      {
        "key": "A",
        "text": "Nói quá và chơi chữ đồng âm"
      },
      {
        "key": "B",
        "text": "Nhân hóa và ẩn dụ chuyển đổi cảm giác"
      },
      {
        "key": "C",
        "text": "So sánh ngầm giữa bom đạn và thời tiết"
      },
      {
        "key": "D",
        "text": "Tiểu đối kết hợp hoán dụ chỉ sự liên tục của thời gian và hoàn cảnh gian khổ"
      }
    ],
    "correctAnswer": "D",
    "explanation": "\"Sớm trưa\", \"nắng mưa\" là thủ pháp tiểu đối sóng đôi, hoán dụ cho sự khắc nghiệt triền miên của bom đạn và thời tiết, làm sáng lên lòng quả cảm bất chấp hiểm nguy của mẹ Suốt.",
    "keyTakeaway": "Thủ pháp tiểu đối trong thơ lục bát và song thất lục bát: Tạo nhịp điệu đăng đối và tăng sức gợi hình ảnh."
  },
  {
    "id": "Q075",
    "topicId": "phong-cach-ngon-ngu",
    "difficulty": "Thông hiểu",
    "prompt": "Văn bản nào sau đây thuộc phong cách ngôn ngữ chính luận?",
    "options": [
      {
        "key": "A",
        "text": "Truyện ngắn \"Gió lạnh đầu mùa\" của Thạch Lam"
      },
      {
        "key": "B",
        "text": "Bản \"Lời kêu gọi toàn quốc kháng chiến\" của Chủ tịch Hồ Chí Minh (1946)"
      },
      {
        "key": "C",
        "text": "Biên bản cuộc họp toàn thể Hội đồng sư phạm nhà trường"
      },
      {
        "key": "D",
        "text": "Bản tin dự báo thời tiết phát trên sóng đài truyền hình"
      }
    ],
    "correctAnswer": "B",
    "explanation": "\"Lời kêu gọi toàn quốc kháng chiến\" thể hiện lập trường chính trị kiên định, lập luận đanh thép, tác động trực tiếp đến ý chí bảo vệ Tổ quốc của toàn thể nhân dân, mang đặc trưng phong cách chính luận.",
    "keyTakeaway": "Phong cách chính luận: Bàn luận về các vấn đề chính trị, xã hội với lập luận chặt chẽ, dẫn chứng thuyết phục và cảm xúc mãnh liệt."
  },
  {
    "id": "Q076",
    "topicId": "kien-thuc-van-hoc",
    "difficulty": "Thông hiểu",
    "prompt": "Truyện ngắn \"Vợ chồng A Phủ\" của nhà văn Tô Hoài được sáng tác sau chuyến đi thực tế nào của tác giả?",
    "options": [
      {
        "key": "A",
        "text": "Chuyến đi cùng bộ đội vào giải phóng Tây Bắc kéo dài 8 tháng năm 1952"
      },
      {
        "key": "B",
        "text": "Chuyến đi khảo sát văn hóa dân gian ở đồng bằng Bắc Bộ năm 1945"
      },
      {
        "key": "C",
        "text": "Chuyến tham quan danh lam thắng cảnh cố đô Huế năm 1954"
      },
      {
        "key": "D",
        "text": "Chuyến công tác vượt dãy Trường Sơn vào chiến trường miền Nam năm 1968"
      }
    ],
    "correctAnswer": "A",
    "explanation": "\"Vợ chồng A Phủ\" là kết quả của chuyến đi thực tế cùng bộ đội giải phóng Tây Bắc năm 1952, được in trong tập \"Truyện Tây Bắc\" (được tặng Giải Nhất Giải thưởng Hội Văn nghệ Việt Nam 1954 - 1955).",
    "keyTakeaway": "Hoàn cảnh sáng tác tác phẩm văn học cách mạng: Gắn bó máu thịt giữa văn nghệ sĩ với cuộc sống chiến đấu của đồng bào Tây Bắc."
  },
  {
    "id": "Q077",
    "topicId": "phan-tich-van-ban",
    "difficulty": "Vận dụng",
    "passage": {
      "title": "Trích đoạn Đêm tình mùa xuân ở Hồng Ngài",
      "author": "Tô Hoài",
      "source": "Vợ chồng A Phủ (1952)",
      "content": "Ngoài đầu núi lấp ló đã có tiếng ai thổi sáo rủ bạn đi chơi. Mị nghe tiếng sáo vọng lại, thiết tha bổi hổi. Mị ngồi nhẩm thầm bài hát của người đang thổi: \"Mày có con trai con gái rồi / Mày đi làm nương / Ta chưa có con trai con gái / Ta đi tìm người yêu...\" Mị thấy phơi phới trở lại, trong lòng đột nhiên vui sướng như những đêm Tết ngày trước."
    },
    "prompt": "Âm thanh tiếng sáo trong đoạn văn trên đóng vai trò nghệ thuật gì đối với diễn biến tâm trạng của nhân vật Mị?",
    "options": [
      {
        "key": "A",
        "text": "Là ngọn gió lành đánh thức ký ức thanh xuân tươi đẹp và khơi dậy khát vọng tự do, hạnh phúc bị vùi lấp"
      },
      {
        "key": "B",
        "text": "Là tín hiệu báo động buôn làng chuẩn bị bước vào cuộc chiến tranh mới"
      },
      {
        "key": "C",
        "text": "Chỉ là âm thanh giải trí ngẫu nhiên không tác động gì tới tâm trạng nhân vật"
      },
      {
        "key": "D",
        "text": "Khiến Mị thêm oán hận dân làng và muốn rời bỏ Hồng Ngài ngay trong đêm"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Tiếng sáo là chi tiết nghệ thuật đắt giá: từ âm thanh ngoại cảnh biến thành tiếng gọi của tình yêu và sự sống, thức tỉnh ý thức về quyền sống và sự tự do vốn bị tước đoạt trong tâm hồn Mị.",
    "keyTakeaway": "Nghệ thuật miêu tả tâm lý nhân vật Mị: Âm thanh tiếng sáo là chất xúc tác phục sinh tâm hồn."
  },
  {
    "id": "Q078",
    "topicId": "suy-luan-logic",
    "difficulty": "Thông hiểu",
    "prompt": "Nhận diện lỗi lập luận trong phát biểu: \"Tôi vừa gặp hai người bạn đến từ thành phố X và cả hai đều rất nóng tính, do đó tất cả người dân ở thành phố X đều nóng tính\":",
    "options": [
      {
        "key": "A",
        "text": "Ngụy biện tiền đề giả định"
      },
      {
        "key": "B",
        "text": "Ngụy biện dựa vào số đông"
      },
      {
        "key": "C",
        "text": "Ngụy biện dựa vào thẩm quyền"
      },
      {
        "key": "D",
        "text": "Khái quát hóa vội vã (Hasty Generalization)"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Lỗi khái quát hóa vội vã xảy ra khi người nói vội vàng rút ra kết luận chung cho toàn thể từ một số lượng mẫu khảo sát quá nhỏ và không mang tính đại diện.",
    "keyTakeaway": "Ngụy biện khái quát hóa vội vã: Mẫu số quá ít không đủ căn cứ logic để suy ra quy luật phổ quát."
  },
  {
    "id": "Q079",
    "topicId": "danh-gia-thuc-tien",
    "difficulty": "Vận dụng",
    "prompt": "Hiện tượng \"buồng vang thông tin\" (Echo Chamber) trên các mạng xã hội hiện nay gây ra tác động tiêu cực nào tới nhận thức của người dùng?",
    "options": [
      {
        "key": "A",
        "text": "Giúp người dùng mở rộng vốn hiểu biết trên mọi lĩnh vực khoa học khác nhau"
      },
      {
        "key": "B",
        "text": "Chỉ tiếp xúc với những quan điểm đồng điệu, làm gia tăng sự định kiến và làm suy giảm năng lực tiếp nhận đa chiều"
      },
      {
        "key": "C",
        "text": "Làm giảm hoàn toàn thời gian sử dụng thiết bị điện tử của người trẻ"
      },
      {
        "key": "D",
        "text": "Thúc đẩy sự đoàn kết và thấu hiểu lẫn nhau giữa các nhóm cộng đồng"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Buồng vang thông tin là hiện tượng thuật toán mạng xã hội chỉ phân phối nội dung phù hợp với sở thích có sẵn, khiến người dùng tự nhốt mình trong vùng an toàn thông tin, củng cố thiên kiến và bài trừ quan điểm trái chiều.",
    "keyTakeaway": "Tư duy phản biện thời đại số: Nhận diện hiện tượng buồng vang thông tin và chủ động tiếp cận nguồn dữ liệu đa chiều."
  },
  {
    "id": "Q080",
    "topicId": "doc-hieu-nang-cao",
    "difficulty": "Vận dụng cao",
    "passage": {
      "title": "So sánh quan niệm về bước đi của thời gian",
      "content": "Văn bản 1: \"Thời gian trôi như bóng câu qua cửa sổ, đời người ngắn ngủi tựa làn mây nổi. Người quân tử phải biết giữ chí hướng kiên định, không màng danh lợi hão huyền.\" (Tư tưởng Nho gia truyền thống)\n\nVăn bản 2: \"Xuân đương tới, nghĩa là xuân đương qua / Xuân còn non, nghĩa là xuân sẽ già / Mà xuân hết, nghĩa là tôi cũng mất / Lòng tôi rộng, nhưng lượng trời cứ chật...\" (Xuân Diệu - Vội vàng)"
    },
    "prompt": "Điểm khác biệt căn bản trong quan niệm về thời gian giữa hai văn bản trên là gì?",
    "options": [
      {
        "key": "A",
        "text": "Văn bản 1 coi thời gian là vô tận; Văn bản 2 khẳng định thời gian có thể ngừng trôi theo ý muốn"
      },
      {
        "key": "B",
        "text": "Văn bản 1 bi quan tuyệt vọng; Văn bản 2 hoàn toàn dửng dưng vô cảm"
      },
      {
        "key": "C",
        "text": "Văn bản 1 xem thời gian theo quy luật tuần hoàn và hướng tới sự điềm tĩnh; Văn bản 2 ý thức thời gian tuyến tính một đi không trở lại, thúc giục sự sống vội vã"
      },
      {
        "key": "D",
        "text": "Cả hai văn bản đều xem thời gian là ảo ảnh không có thực"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Quan niệm trung đại nhìn thời gian tuần hoàn bình thản theo vũ trụ; trong khi Thơ mới của Xuân Diệu nhìn thời gian theo thước đo tuổi trẻ tuyến tính (một đi không trở lại), từ đó nảy sinh nỗi ám ảnh và khát khao sống cuống quýt.",
    "keyTakeaway": "So sánh tư tưởng văn học: Sự chuyển biến từ quan niệm thời gian vũ trụ tuần hoàn sang thời gian cá nhân tuyến tính."
  },
  {
    "id": "Q081",
    "topicId": "doc-hieu",
    "difficulty": "Cơ bản",
    "passage": {
      "title": "Đa dạng sinh học tại Vườn quốc gia Cúc Phương",
      "source": "Cục Kiểm lâm Việt Nam",
      "content": "Vườn quốc gia Cúc Phương là vườn quốc gia đầu tiên của Việt Nam, được thành lập năm 1962. Nằm trên địa bàn ba tỉnh Ninh Bình, Hòa Bình và Thanh Hóa, Cúc Phương sở hữu hệ sinh thái rừng nhiệt đới mưa ẩm quanh năm với hàng ngàn loài thực vật bậc cao và hàng trăm loài động vật quý hiếm, trong đó có loài voọc mông trắng đặc hữu."
    },
    "prompt": "Loài động vật đặc hữu nào được nhắc tới trong văn bản trên như một biểu tượng của Vườn quốc gia Cúc Phương?",
    "options": [
      {
        "key": "A",
        "text": "Sao la"
      },
      {
        "key": "B",
        "text": "Hổ Đông Dương"
      },
      {
        "key": "C",
        "text": "Tê giác một sừng"
      },
      {
        "key": "D",
        "text": "Voọc mông trắng"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Văn bản nêu rõ ở câu cuối: \"trong đó có loài voọc mông trắng đặc hữu\".",
    "keyTakeaway": "Đọc quét thông tin tường minh (Scanning): Xác định tên riêng và số liệu trực tiếp trong ngữ liệu thông tin."
  },
  {
    "id": "Q082",
    "topicId": "tieng-viet",
    "difficulty": "Thông hiểu",
    "prompt": "Trong các cụm từ sau, từ \"chân\" trong trường hợp nào được dùng theo NGHĨA GỐC?",
    "options": [
      {
        "key": "A",
        "text": "Đứng dưới chân núi ngắm mây bay"
      },
      {
        "key": "B",
        "text": "Cầu thủ sút bóng bằng chân trái"
      },
      {
        "key": "C",
        "text": "Chiếc ghế này bị gãy một chân"
      },
      {
        "key": "D",
        "text": "Nhìn về phía chân trời xa xăm"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Nghĩa gốc của \"chân\" là bộ phận dưới cùng của cơ thể người hoặc động vật dùng để đi, đứng. Các trường hợp B, C, D đều là nghĩa chuyển theo phương thức ẩn dụ.",
    "keyTakeaway": "Phân biệt nghĩa gốc và nghĩa chuyển: Nghĩa gốc xuất hiện đầu tiên, cụ thể; nghĩa chuyển dựa trên cơ chế tương đồng hoặc tương cận."
  },
  {
    "id": "Q083",
    "topicId": "tu-vung-ngu-phap",
    "difficulty": "Thông hiểu",
    "prompt": "Câu nào dưới đây là CÂU ĐẶC BIỆT?",
    "options": [
      {
        "key": "A",
        "text": "Hôm nay, trời mưa to."
      },
      {
        "key": "B",
        "text": "Tôi rất thích ngắm mưa."
      },
      {
        "key": "C",
        "text": "Mưa."
      },
      {
        "key": "D",
        "text": "Khi trời mưa, đường phố rất vắng vẻ."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Câu đặc biệt là câu không có cấu tạo theo mô hình chủ ngữ - vị ngữ. Từ \"Mưa.\" đứng một mình thông báo sự tồn tại của hiện tượng thời tiết. Các câu còn lại đều có kết cấu C-V.",
    "keyTakeaway": "Phân biệt câu đặc biệt (không thể xác định C-V) với câu rút gọn (có thể khôi phục thành phần lược bỏ nhờ ngữ cảnh)."
  },
  {
    "id": "Q084",
    "topicId": "bien-phap-tu-tu",
    "difficulty": "Vận dụng",
    "passage": {
      "author": "Bằng Việt",
      "source": "Bếp lửa (1963)",
      "content": "Nhóm bếp lửa ấp iu nồng đượm\nNhóm niềm yêu thương, khoai sắn ngọt bùi\nNhóm nồi xôi gạo mới sẻ chung vui\nNhóm dậy cả những tâm tình tuổi nhỏ..."
    },
    "prompt": "Từ \"nhóm\" trong khổ thơ trên được tác giả sử dụng theo thủ pháp nghệ thuật nào và mang ý nghĩa gì?",
    "options": [
      {
        "key": "A",
        "text": "Chơi chữ đồng âm chỉ tập hợp người"
      },
      {
        "key": "B",
        "text": "Nói quá để thổi phồng ngọn lửa bếp củi"
      },
      {
        "key": "C",
        "text": "Điệp từ kết hợp chuyển nghĩa từ hành động thực tiễn sang đánh thức tình cảm, tâm hồn"
      },
      {
        "key": "D",
        "text": "Nhân hóa ngọn lửa biết suy nghĩ như con người"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Từ \"nhóm\" vừa mang nghĩa thực (nhóm lửa bằng que củi), vừa mang nghĩa ẩn dụ tinh thần (khơi dậy tình yêu thương, sự sẻ chia và niềm tin vào cuộc sống).",
    "keyTakeaway": "Nghệ thuật điệp từ đa nghĩa: Vừa diễn tả hành động cụ thể vừa khơi mở tầng ý nghĩa tâm linh, tình cảm."
  },
  {
    "id": "Q085",
    "topicId": "phong-cach-ngon-ngu",
    "difficulty": "Cơ bản",
    "prompt": "Tính thời sự, tính thông tin chính xác và tính ngắn gọn hấp dẫn là những đặc trưng cơ bản nhất của phong cách ngôn ngữ nào?",
    "options": [
      {
        "key": "A",
        "text": "Phong cách ngôn ngữ sinh hoạt"
      },
      {
        "key": "B",
        "text": "Phong cách ngôn ngữ nghệ thuật"
      },
      {
        "key": "C",
        "text": "Phong cách ngôn ngữ khoa học"
      },
      {
        "key": "D",
        "text": "Phong cách ngôn ngữ báo chí"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Phong cách ngôn ngữ báo chí (truyền thông) có 3 đặc trưng cốt lõi: Tính thông tin thời sự, tính ngắn gọn và tính sinh động, hấp dẫn.",
    "keyTakeaway": "Ba đặc trưng cơ bản của phong cách báo chí: Cập nhật nhanh chóng, độ chính xác cao và tác động dư luận mạnh mẽ."
  },
  {
    "id": "Q086",
    "topicId": "kien-thuc-van-hoc",
    "difficulty": "Thông hiểu",
    "prompt": "Hành động bán con Vàng và tự tử bằng bả chó của nhân vật lão Hạc trong truyện ngắn cùng tên của Nam Cao thể hiện phẩm chất cao quý nào?",
    "options": [
      {
        "key": "A",
        "text": "Sự u mê, lú lẫn của một người nông dân nghèo khổ trước hoàn cảnh ngặt nghèo"
      },
      {
        "key": "B",
        "text": "Lòng tự trọng ngời sáng và tình thương con bao la, thà chết chứ không xâm phạm vào mảnh vườn của con"
      },
      {
        "key": "C",
        "text": "Sự tiếc của hẹp hòi vì sợ mất con chó quý"
      },
      {
        "key": "D",
        "text": "Ý muốn trừng phạt người con trai đã bỏ đi đồn điền cao su"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Cái chết dữ dội bằng bả chó của lão Hạc là sự lựa chọn đầy ý thức và đau đớn để giữ gìn nhân phẩm trong sạch, không phiền lụy hàng xóm và bảo toàn trọn vẹn gia tài cho con trai.",
    "keyTakeaway": "Chủ nghĩa nhân đạo Nam Cao: Khám phá và ngợi ca vẻ đẹp tâm hồn cao thượng của người nông dân nghèo cùng quẫn."
  },
  {
    "id": "Q087",
    "topicId": "phan-tich-van-ban",
    "difficulty": "Vận dụng cao",
    "passage": {
      "title": "Nghệ thuật nhìn đời và nhìn người",
      "author": "Nguyễn Minh Châu",
      "source": "Chiếc thuyền ngoài xa (1983)",
      "content": "Chẳng biết ai đó đã nói rằng: Cái đẹp là đạo đức. Nhưng khi chiếc thuyền vừa vào bờ, người nghệ sĩ đã chứng kiến cảnh gã chồng vũ phu đánh đập vợ tàn bạo. Hóa ra vẻ đẹp tuyệt đỉnh ngoại cảnh lại có thể che giấu những nghịch lý đau đớn của hiện thực nhân sinh. Người nghệ sĩ không thể chỉ nhìn cuộc đời từ xa bằng con mắt lãng mạn thuần túy."
    },
    "prompt": "Thông điệp nghệ thuật sâu sắc nhất mà nhà văn Nguyễn Minh Châu gửi gắm qua sự đối lập giữa \"chiếc thuyền ngoài xa\" và \"cảnh tượng bạo lực bên trong gia đình làng chài\" là gì?",
    "options": [
      {
        "key": "A",
        "text": "Cần cấm các nghệ sĩ chụp ảnh ở vùng biển xa xôi để tránh nhìn thấy tiêu cực"
      },
      {
        "key": "B",
        "text": "Cái đẹp ngoại cảnh luôn luôn đồng nhất hoàn hảo với bản chất đạo đức bên trong"
      },
      {
        "key": "C",
        "text": "Nghệ thuật phải gắn liền với đời sống, người cầm bút phải nhìn nhận con người và cuộc đời đa diện, nhiều chiều"
      },
      {
        "key": "D",
        "text": "Cuộc sống làng chài không thể có tình thương yêu gia đình"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Nguyễn Minh Châu đặt ra bài học nhận thức: Cái đẹp nghệ thuật không được tách rời đạo đức thực tế. Người nghệ sĩ phải dũng cảm nhìn thẳng vào những góc khuất số phận con người để tìm giải pháp cứu lấy nhân phẩm.",
    "keyTakeaway": "Tư tưởng văn học đổi mới sau 1986: Nhìn cuộc đời đa diện, phát hiện nghịch lý nhân sinh và đề cao trách nhiệm xã hội của văn nghệ sĩ."
  },
  {
    "id": "Q088",
    "topicId": "suy-luan-logic",
    "difficulty": "Thông hiểu",
    "prompt": "Cho hai tiền đề:\n1. Mọi hành vi vi phạm luật giao thông đều bị xử phạt theo quy định.\n2. Anh Nam vượt đèn đỏ tại ngã tư.\nKết luận logic tất yếu rút ra là gì?",
    "options": [
      {
        "key": "A",
        "text": "Hành vi vượt đèn đỏ của anh Nam bị xử phạt theo quy định"
      },
      {
        "key": "B",
        "text": "Anh Nam không bị xử phạt vì đây là lần đầu tiên vi phạm"
      },
      {
        "key": "C",
        "text": "Mọi người vượt đèn đỏ đều là người vi phạm luật giao thông ngoại trừ anh Nam"
      },
      {
        "key": "D",
        "text": "Không thể rút ra kết luận nào vì thiếu thông tin về người làm chứng"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Theo tam đoạn luận (Syllogism): Đại tiền đề (Mọi vi phạm đều bị phạt), Tiểu tiền đề (Anh Nam vi phạm lỗi vượt đèn đỏ) -> Kết luận tất yếu: Hành vi của anh Nam phải bị xử phạt.",
    "keyTakeaway": "Quy tắc suy luận diễn dịch logic: Kết luận được đảm bảo tính chân thực nếu các tiền đề đều đúng và cấu trúc suy luận hợp lệ."
  },
  {
    "id": "Q089",
    "topicId": "danh-gia-thuc-tien",
    "difficulty": "Vận dụng",
    "prompt": "Trước xu hướng đọc nhanh, đọc lướt các mẩu tin ngắn trên không gian mạng, người học cần rèn luyện năng lực nào để duy trì khả năng tư duy chiều sâu?",
    "options": [
      {
        "key": "A",
        "text": "Hạn chế hoàn toàn việc đọc sách in và chuyển sang nghe tóm tắt âm thanh tự động"
      },
      {
        "key": "B",
        "text": "Tăng tốc độ cuộn màn hình để xem được nhiều video ngắn hơn mỗi ngày"
      },
      {
        "key": "C",
        "text": "Chỉ đọc tiêu đề bài viết và bỏ qua toàn bộ phần nội dung phân tích"
      },
      {
        "key": "D",
        "text": "Năng lực đọc sâu (deep reading), đọc có phản biện, ghi chép và kết nối ý tưởng"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Đọc sâu (deep reading) rèn luyện sự chú ý bền bỉ, giúp não bộ kích hoạt tư duy trừu tượng, đối chiếu dữ liệu và xây dựng thế giới quan độc lập.",
    "keyTakeaway": "Phát triển văn hóa đọc thời đại số: Rèn luyện kỹ năng đọc sâu chống lại hội chứng suy giảm độ tập trung."
  },
  {
    "id": "Q090",
    "topicId": "doc-hieu-nang-cao",
    "difficulty": "Vận dụng cao",
    "passage": {
      "title": "Báo cáo về chuyển dịch năng lượng xanh",
      "source": "Bộ Tài nguyên và Môi trường",
      "content": "Chuyển dịch sang năng lượng tái tạo (điện gió, điện mặt trời) là con đường duy nhất để Việt Nam hiện thực hóa cam kết phát thải ròng bằng 0 (Net Zero) vào năm 2050. Tuy nhiên, thách thức lớn nằm ở chi phí đầu tư hạ tầng truyền tải và tính bất định của thời tiết. Giải pháp kết hợp các nguồn pin lưu trữ năng lượng và phát triển thị trường tín chỉ carbon được xem là bước đi mang tính đột phá."
    },
    "prompt": "Theo văn bản, đâu là giải pháp then chốt để khắc phục tính bất định của nguồn năng lượng tái tạo (gió và mặt trời)?",
    "options": [
      {
        "key": "A",
        "text": "Ứng dụng hệ thống pin lưu trữ năng lượng và nâng cấp hạ tầng truyền tải"
      },
      {
        "key": "B",
        "text": "Quay trở lại mở rộng tối đa việc xây dựng các nhà máy nhiệt điện than truyền thống"
      },
      {
        "key": "C",
        "text": "Chờ đợi cho đến khi các điều kiện thời tiết trở nên hoàn toàn ổn định"
      },
      {
        "key": "D",
        "text": "Ngừng toàn bộ việc đầu tư vào các dự án điện gió ngoài khơi"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Văn bản nêu rõ: \"Giải pháp kết hợp các nguồn pin lưu trữ năng lượng và phát triển thị trường tín chỉ carbon được xem là bước đi mang tính đột phá\" để giải quyết thách thức truyền tải và thời tiết thất thường.",
    "keyTakeaway": "Đọc hiểu văn bản chính sách môi trường: Nắm bắt mối quan hệ giữa mục tiêu chiến lược, thách thức hạ tầng và giải pháp công nghệ."
  },
  {
    "id": "Q091",
    "topicId": "doc-hieu",
    "difficulty": "Thông hiểu",
    "passage": {
      "author": "Xuân Quỳnh",
      "source": "Sóng (1967)",
      "content": "Dữ dội và dịu êm\nỒn ào và lặng lẽ\nSông không hiểu nổi mình\nSóng tìm ra tận bể\n\nÔi con sóng ngày xưa\nVà ngày sau vẫn thế\nNỗi khát vọng tình yêu\nBồi hồi trong ngực trẻ..."
    },
    "prompt": "Hai trạng thái đối lập \"dữ dội - dịu êm\", \"ồn ào - lặng lẽ\" của hình tượng sóng ẩn dụ cho điều gì trong tâm hồn người phụ nữ khi yêu?",
    "options": [
      {
        "key": "A",
        "text": "Sự bất an, tráo trở và thiếu chung thủy trong các mối quan hệ tình cảm"
      },
      {
        "key": "B",
        "text": "Sự chia rẽ không thể hàn gắn giữa khát vọng cá nhân và nghĩa vụ gia đình"
      },
      {
        "key": "C",
        "text": "Nỗi sợ hãi trước những cơn bão biển ngoài đại dương mênh mông"
      },
      {
        "key": "D",
        "text": "Những cung bậc cảm xúc phong phú, phức tạp và những trạng thái tâm lý đầy nghịch lý nhưng thống nhất"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Hai cặp từ đối lập phản ánh bản chất muôn đời của sóng và cũng chính là những sắc thái tâm lý phức tạp của người phụ nữ: khi nồng nàn mãnh liệt, khi e ấp trầm lặng, luôn khao khát tự khám phá và thấu hiểu chính mình.",
    "keyTakeaway": "Hình tượng sóng trong thơ Xuân Quỳnh: Sự tương đồng kỳ diệu giữa quy luật thiên nhiên và tâm lý tình yêu người phụ nữ."
  },
  {
    "id": "Q092",
    "topicId": "tieng-viet",
    "difficulty": "Thông hiểu",
    "prompt": "Từ ngữ nào dưới đây phù hợp nhất để thay thế cho cụm từ \"cho tiền\" nhằm đảm bảo tính trang trọng trong văn bản thông cáo báo chí tài trợ giáo dục?",
    "options": [
      {
        "key": "A",
        "text": "Bố thí"
      },
      {
        "key": "B",
        "text": "Đút lót"
      },
      {
        "key": "C",
        "text": "Tài trợ"
      },
      {
        "key": "D",
        "text": "Biếu xén"
      }
    ],
    "correctAnswer": "C",
    "explanation": "\"Tài trợ\" mang sắc thái ý nghĩa trang trọng, văn minh, thể hiện sự đồng hành vì mục tiêu cao đẹp của cộng đồng giáo dục. Các từ còn lại mang sắc thái tiêu cực hoặc bất lịch sự.",
    "keyTakeaway": "Lựa chọn từ ngữ chuẩn mực theo phong cách chức năng: Sử dụng từ ngữ có sắc thái biểu cảm phù hợp với vị thế giao tiếp."
  },
  {
    "id": "Q093",
    "topicId": "tu-vung-ngu-phap",
    "difficulty": "Vận dụng",
    "prompt": "Trong các câu sau, câu nào có cách diễn đạt CHUẨN XÁC, không bị lặp từ và không sai ngữ pháp?",
    "options": [
      {
        "key": "A",
        "text": "Nhờ sự chỉ đạo sát sao của Ban Giám hiệu, kỳ thi học sinh giỏi cấp trường đã thành công tốt đẹp."
      },
      {
        "key": "B",
        "text": "Bằng sự chỉ đạo sát sao của Ban Giám hiệu đã làm cho kỳ thi học sinh giỏi thành công tốt đẹp."
      },
      {
        "key": "C",
        "text": "Qua sự chỉ đạo sát sao của Ban Giám hiệu đã đem lại nhiều thắng lợi to lớn."
      },
      {
        "key": "D",
        "text": "Mặc dù Ban Giám hiệu chỉ đạo sát sao nhưng kỳ thi học sinh giỏi đã diễn ra đúng quy chế."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Câu A có cấu trúc trạng ngữ (\"Nhờ sự chỉ đạo...\"), chủ ngữ (\"kỳ thi...\") và vị ngữ (\"đã thành công...\") hoàn chỉnh, logic. Các câu B, C thiếu chủ ngữ do lạm dụng giới từ \"Bằng...\", \"Qua...\". Câu D dùng sai quan hệ từ \"mặc dù... nhưng\".",
    "keyTakeaway": "Quy tắc ngữ pháp câu: Đảm bảo đầy đủ hai thành phần nòng cốt Chủ ngữ - Vị ngữ và dùng đúng quan hệ từ phù hợp logic ý nghĩa."
  },
  {
    "id": "Q094",
    "topicId": "bien-phap-tu-tu",
    "difficulty": "Thông hiểu",
    "prompt": "Biện pháp tu từ nào được sử dụng chủ yếu trong câu văn: \"Mồ hôi mà đổ xuống đồng / Lúa mọc trùng trùng sáng cả đồi nương\"?",
    "options": [
      {
        "key": "A",
        "text": "So sánh và ẩn dụ chuyển đổi cảm giác"
      },
      {
        "key": "B",
        "text": "Hoán dụ và nói quá"
      },
      {
        "key": "C",
        "text": "Chơi chữ và câu hỏi tu từ"
      },
      {
        "key": "D",
        "text": "Nhân hóa và chêm xen"
      }
    ],
    "correctAnswer": "B",
    "explanation": "\"Mồ hôi\" là hình ảnh hoán dụ lấy dấu hiệu giọt mồ hôi chỉ công sức lao động nặng nhọc của người nông dân; \"Lúa mọc trùng trùng sáng cả đồi nương\" là thủ pháp nói quá ca ngợi thành quả kỳ diệu của bàn tay lao động.",
    "keyTakeaway": "Sự kết hợp giữa hoán dụ và nói quá: Khắc họa hình tượng người lao động với tầm vóc kỳ vĩ, tràn đầy niềm lạc quan tin tưởng."
  },
  {
    "id": "Q095",
    "topicId": "phong-cach-ngon-ngu",
    "difficulty": "Cơ bản",
    "prompt": "Phong cách ngôn ngữ sinh hoạt chủ yếu tồn tại ở dạng thức nào trong đời sống hàng ngày?",
    "options": [
      {
        "key": "A",
        "text": "Dạng văn bản in trên các công báo của Chính phủ"
      },
      {
        "key": "B",
        "text": "Dạng luận án tiến sĩ bảo vệ trước hội đồng khoa học"
      },
      {
        "key": "C",
        "text": "Dạng nói (hội thoại trực tiếp, trao đổi thường nhật)"
      },
      {
        "key": "D",
        "text": "Dạng văn kiện ký kết hiệp ước ngoại giao quốc tế"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Phong cách ngôn ngữ sinh hoạt trước hết và chủ yếu tồn tại ở dạng nói (khẩu ngữ), xuất hiện trong các cuộc đối thoại, trò chuyện, nhắn tin trao đổi thông tin đời thường.",
    "keyTakeaway": "Đặc thù phong cách sinh hoạt: Ưu thế của lời nói miệng, sự trợ giúp đắc lực của ngữ điệu, nét mặt và cử chỉ phi ngôn ngữ."
  },
  {
    "id": "Q096",
    "topicId": "kien-thuc-van-hoc",
    "difficulty": "Thông hiểu",
    "prompt": "Kiệt tác \"Truyện Kiều\" của Đại thi hào Nguyễn Du được viết bằng thể thơ truyền thống nào của dân tộc?",
    "options": [
      {
        "key": "A",
        "text": "Thể thơ song thất lục bát"
      },
      {
        "key": "B",
        "text": "Thể thơ thất ngôn bát cú Đường luật"
      },
      {
        "key": "C",
        "text": "Thể thơ lục bát"
      },
      {
        "key": "D",
        "text": "Thể thơ hát nói"
      }
    ],
    "correctAnswer": "C",
    "explanation": "\"Truyện Kiều\" (Đoạn trường tân thanh) gồm 3254 câu thơ lục bát, là đỉnh cao chói lọi của văn học chữ Nôm và mẫu mực của nghệ thuật ngôn từ tiếng Việt.",
    "keyTakeaway": "Thể thơ lục bát trong Truyện Kiều: Biểu tượng cho sự thăng hoa của ngôn ngữ văn học dân tộc Việt Nam."
  },
  {
    "id": "Q097",
    "topicId": "phan-tich-van-ban",
    "difficulty": "Vận dụng",
    "passage": {
      "author": "Thanh Thảo",
      "source": "Đàn ghi ta của Lor-ca (1979)",
      "content": "những tiếng đàn bọt nước\nTây Ban Nha áo choàng đỏ gắt\nli-la li-la li-la\nđi lang thang về miền đơn độc\nvới vầng trăng chếnh choáng\ntrên yên ngựa mỏi mòn..."
    },
    "prompt": "Hình ảnh ẩn dụ \"những tiếng đàn bọt nước\" gợi lên cảm nhận sâu sắc nào về cuộc đời và nghệ thuật của người nghệ sĩ tài hoa Lor-ca?",
    "options": [
      {
        "key": "A",
        "text": "Sự vô dụng của âm nhạc trước các biến động chính trị"
      },
      {
        "key": "B",
        "text": "Niềm vui tươi hồn nhiên của một buổi biểu diễn trên bãi biển"
      },
      {
        "key": "C",
        "text": "Sự phản kháng tiêu cực muốn rút lui khỏi cuộc đời"
      },
      {
        "key": "D",
        "text": "Vẻ đẹp thanh khiết nhưng mỏng manh, ngắn ngủi và số phận bi tráng trước cái chết bạo tàn"
      }
    ],
    "correctAnswer": "D",
    "explanation": "\"Tiếng đàn\" là linh hồn nghệ thuật; \"bọt nước\" gợi sự ngắn ngủi, dễ tan vỡ. Ẩn dụ chuyển đổi cảm giác này khắc họa số phận bi thảm của người nghệ sĩ thiên tài bị phát xít sát hại khi khát vọng cách tân còn dang dở.",
    "keyTakeaway": "Thi pháp thơ tượng trưng siêu thực Thanh Thảo: Khối liên tưởng đa chiều về sự sống, cái chết và sự bất tử của nghệ thuật chân chính."
  },
  {
    "id": "Q098",
    "topicId": "suy-luan-logic",
    "difficulty": "Thông hiểu",
    "prompt": "Xác định kiểu ngụy biện trong lập luận sau: \"Anh không nên nghe lời khuyên về phương pháp đọc sách của người đó, vì anh ta từng thi trượt môn Toán thời phổ thông!\":",
    "options": [
      {
        "key": "A",
        "text": "Ngụy biện dựa vào nỗi sợ hãi"
      },
      {
        "key": "B",
        "text": "Ngụy biện tấn công cá nhân (Ad Hominem)"
      },
      {
        "key": "C",
        "text": "Ngụy biện dốc trơn liên hoàn"
      },
      {
        "key": "D",
        "text": "Ngụy biện hai sai thành một đúng"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Ngụy biện tấn công cá nhân (Ad Hominem) là hành vi công kích tính cách, quá khứ hoặc hoàn cảnh riêng của người nói (trượt môn Toán) thay vì phân tích tính đúng đắn của luận điểm mà họ đưa ra (phương pháp đọc sách).",
    "keyTakeaway": "Nhận diện lỗi ngụy biện Ad Hominem: Tách biệt rạch ròi giữa người phát ngôn và giá trị logic của chính phát ngôn."
  },
  {
    "id": "Q099",
    "topicId": "danh-gia-thuc-tien",
    "difficulty": "Vận dụng",
    "prompt": "Khi sử dụng các công cụ trí tuệ nhân tạo (AI) hỗ trợ học tập môn Ngữ văn, thái độ học tập đúng đắn nhất của học sinh là gì?",
    "options": [
      {
        "key": "A",
        "text": "Sử dụng AI như một công cụ gợi mở ý tưởng và tham khảo tài liệu, đồng thời giữ vững năng lực tự suy nghĩ độc lập và cảm thụ văn học riêng"
      },
      {
        "key": "B",
        "text": "Sao chép nguyên văn toàn bộ bài viết do AI tạo ra để nộp bài kiểm tra"
      },
      {
        "key": "C",
        "text": "Tuyệt đối tẩy chay mọi công nghệ mới vì cho rằng chúng làm mai một văn hóa"
      },
      {
        "key": "D",
        "text": "Để AI thay thế hoàn toàn việc đọc tác phẩm văn học gốc trong chương trình"
      }
    ],
    "correctAnswer": "A",
    "explanation": "AI là trợ thủ tổng hợp thông tin hữu ích nhưng không thể thay thế xúc cảm thẩm mỹ, tư duy phản biện và trải nghiệm sống của chính người học. Tự chủ tư duy là chìa khóa của giáo dục hiện đại.",
    "keyTakeaway": "Đạo đức học thuật và năng lực số: Khai thác công nghệ thông minh trên nền tảng tư duy độc lập và tính trung thực học đường."
  },
  {
    "id": "Q100",
    "topicId": "doc-hieu-nang-cao",
    "difficulty": "Vận dụng cao",
    "passage": {
      "title": "Mối quan hệ giữa Cá nhân và Cộng đồng",
      "content": "Một hạt cát không làm nên sa mạc, nhưng sa mạc không thể tồn tại nếu thiếu từng hạt cát. Cá nhân không thể phát triển toàn diện nếu tách rời khỏi những ràng buộc trách nhiệm và sự đùm bọc của cộng đồng. Đồng thời, sự phồn vinh của một xã hội được đo bằng không gian tự do sáng tạo và phẩm giá mà nó dành cho từng cá nhân riêng biệt."
    },
    "prompt": "Luận điểm bao trùm của đoạn văn trên là gì?",
    "options": [
      {
        "key": "A",
        "text": "Cá nhân luôn luôn phải hy sinh toàn bộ quyền lợi riêng cho tập thể vô điều kiện"
      },
      {
        "key": "B",
        "text": "Mối quan hệ biện chứng tương hỗ không thể tách rời giữa sự phát triển tự do của cá nhân và sức mạnh bền vững của cộng đồng"
      },
      {
        "key": "C",
        "text": "Cộng đồng là một thực thể trừu tượng không có vai trò gì đối với sự hình thành nhân cách"
      },
      {
        "key": "D",
        "text": "Sự phát triển kinh tế sa mạc đóng vai trò then chốt trong bảo vệ môi trường toàn cầu"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Văn bản sử dụng hình ảnh so sánh \"hạt cát - sa mạc\" để khẳng định tính thống nhất biện chứng: cá nhân gắn bó với cộng đồng và cộng đồng tôn trọng giá trị cá nhân.",
    "keyTakeaway": "Đọc hiểu triết học nhân văn: Nắm bắt mối quan hệ hai chiều giữa cá nhân và xã hội trong tiến trình phát triển."
  },
  {
    "id": "Q101",
    "topicId": "doc-hieu",
    "difficulty": "Thông hiểu",
    "passage": {
      "title": "Vẻ đẹp sông Hương vùng thượng lưu",
      "author": "Hoàng Phủ Ngọc Tường",
      "source": "Ai đã đặt tên cho dòng sông? (1981)",
      "content": "Trước khi về đến vùng châu thổ êm đềm, nó là một bản trường ca của rừng già, rầm rộ giữa bóng cây đại ngàn, mãnh liệt qua những ghềnh thác, cuộn xoáy như cơn lốc vào những đáy vực bí ẩn, và cũng có lúc nó trở nên dịu dàng và say đắm giữa những dặm dài chói lọi màu đỏ của hoa đỗ quyên rừng."
    },
    "prompt": "Ở vùng thượng lưu đại ngàn, sông Hương được tác giả so sánh với hình ảnh nghệ thuật độc đáo nào?",
    "options": [
      {
        "key": "A",
        "text": "Một người thiếu nữ Digan phóng khoáng và man dại"
      },
      {
        "key": "B",
        "text": "Một dải lụa bạch mềm mại vắt ngang qua thành phố"
      },
      {
        "key": "C",
        "text": "Một bản trường ca của rừng già"
      },
      {
        "key": "D",
        "text": "Một viên ngọc bích quý giá giữa thung lũng"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Câu văn đầu tiên so sánh trực tiếp: \"nó là một bản trường ca của rừng già, rầm rộ giữa bóng cây đại ngàn...\".",
    "keyTakeaway": "Bút ký Hoàng Phủ Ngọc Tường: Ngôn từ tài hoa, giàu chất thơ và trí tưởng tượng phong phú."
  },
  {
    "id": "Q102",
    "topicId": "tieng-viet",
    "difficulty": "Thông hiểu",
    "prompt": "Thành ngữ nào dưới đây chỉ hành vi nhìn nhận sai lệch, nhầm lẫn tai hại sự vật này với sự vật khác do thị lực kém hoặc thiếu quan sát kỹ lưỡng?",
    "options": [
      {
        "key": "A",
        "text": "Đâm lao phải theo lao"
      },
      {
        "key": "B",
        "text": "Nước chảy bèo trôi"
      },
      {
        "key": "C",
        "text": "Đánh trống bỏ dùi"
      },
      {
        "key": "D",
        "text": "Nhìn gà hóa cuốc"
      }
    ],
    "correctAnswer": "D",
    "explanation": "\"Nhìn gà hóa cuốc\" ví sự nhìn nhầm, lẫn lộn buồn cười do quáng mắt hoặc không xem xét cẩn thận.",
    "keyTakeaway": "Thành ngữ phản ánh nhận thức: Phân biệt các thành ngữ chỉ sai lầm quan sát vs hành vi đạo đức."
  },
  {
    "id": "Q103",
    "topicId": "tu-vung-ngu-phap",
    "difficulty": "Thông hiểu",
    "prompt": "Xác định thành phần biệt lập trong câu: \"Chao ôi, bông hoa sen đầu mùa thơm ngát làm sao!\":",
    "options": [
      {
        "key": "A",
        "text": "Thành phần gọi đáp"
      },
      {
        "key": "B",
        "text": "Thành phần phụ chú"
      },
      {
        "key": "C",
        "text": "Thành phần tình thái"
      },
      {
        "key": "D",
        "text": "Thành phần cảm thán (\"Chao ôi\")"
      }
    ],
    "correctAnswer": "D",
    "explanation": "\"Chao ôi\" là từ ngữ bộc lộ trực tiếp cảm xúc trầm trồ khen ngợi của người nói, thuộc thành phần biệt lập cảm thán.",
    "keyTakeaway": "Bốn thành phần biệt lập trong câu tiếng Việt: Tình thái, Cảm thán, Gọi - đáp, và Phụ chú."
  },
  {
    "id": "Q104",
    "topicId": "bien-phap-tu-tu",
    "difficulty": "Thông hiểu",
    "prompt": "Dấu gạch ngang trong câu: \"Cô bé ấy - người mà tôi từng gặp năm ngoái ở Sa Pa - nay đã trở thành một giáo viên nhiệt huyết\" được dùng để đánh dấu thành phần tu từ nào?",
    "options": [
      {
        "key": "A",
        "text": "Thành phần chêm xen (phụ chú bổ sung thông tin)"
      },
      {
        "key": "B",
        "text": "Lời đối thoại trực tiếp của nhân vật"
      },
      {
        "key": "C",
        "text": "Liệt kê các mục ngang hàng"
      },
      {
        "key": "D",
        "text": "Bộ phận vị ngữ mở rộng"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Cụm từ nằm giữa hai dấu gạch ngang giải thích rõ hơn về \"cô bé ấy\", là thủ pháp chêm xen làm cho lời kể thêm chân thực, thân mật.",
    "keyTakeaway": "Phép chêm xen: Bổ sung thông tin giải thích, bộc lộ thái độ cảm xúc mà không làm thay đổi kết cấu ngữ pháp chính của câu."
  },
  {
    "id": "Q105",
    "topicId": "suy-luan-logic",
    "difficulty": "Vận dụng",
    "prompt": "Trong đoạn văn nghị luận: \"Muốn xây dựng một đất nước phồn vinh thì giáo dục phải là quốc sách hàng đầu. Đất nước ta đang nỗ lực phát triển kinh tế mạnh mẽ, cho nên việc đổi mới căn bản và toàn diện giáo dục là đòi hỏi cấp bách của thời đại\", tiền đề cốt lõi của lập luận là gì?",
    "options": [
      {
        "key": "A",
        "text": "Giáo dục chỉ có nhiệm vụ trang bị kỹ năng công nghệ thông tin"
      },
      {
        "key": "B",
        "text": "Chỉ cần phát triển kinh tế thì giáo dục sẽ tự khắc hoàn thiện không cần đầu tư"
      },
      {
        "key": "C",
        "text": "Chất lượng nguồn nhân lực do giáo dục đào tạo là nhân tố quyết định sự thịnh vượng của quốc gia"
      },
      {
        "key": "D",
        "text": "Các nước đang phát triển không cần chú trọng đến giáo dục đại học"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Lập luận dựa trên mối quan hệ nhân quả nền tảng: Giáo dục tạo ra con người - động lực của phát triển kinh tế; do đó phát triển kinh tế đòi hỏi giáo dục phải đổi mới.",
    "keyTakeaway": "Xác định tiền đề lập luận: Tìm căn cứ cốt lõi mà người viết dựa vào đó để triển khai hệ thống luận điểm bảo vệ quan điểm của mình."
  }
];

export const ALL_QUESTIONS: Question[] = [
  ...QUESTIONS_BANK,
  ...ADDITIONAL_QUESTIONS,
  ...EXPANDED_QUESTIONS,
];
