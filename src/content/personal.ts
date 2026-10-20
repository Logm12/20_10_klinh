export interface MemoryItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tag: string;
  imagePlaceholderText: string;
  imageSrc?: string;
  sticker?: string;
}

export interface HappinessIngredient {
  id: string;
  name: string;
  scienceName: string; // Tên phân tử hoặc ẩn dụ khoa học vui
  icon: string;
  color: string;
  glowColor: string;
  note: string;
}

export interface PersonalConfig {
  sister: {
    name: string; // Tên hiển thị chính
    nickname: string; // Biệt danh thân thương
    specialty: string; // Ngành học / Đam mê: Hóa - Sinh
  };
  brother: {
    signOff: string; // Chữ ký người anh
  };
  siteMeta: {
    title: string;
    description: string;
    occasion: string;
  };
  chapter1: {
    badge: string;
    headline: string;
    subheadline: string;
    openBoxCta: string;
    openedQuote: string;
  };
  chapter2: {
    badge: string;
    title: string;
    subtitle: string;
    instructions: string;
    completionTitle: string;
    completionMessage: string;
    ingredients: HappinessIngredient[];
  };
  chapter4: {
    badge: string;
    title: string;
    subtitle: string;
    letterDate: string;
    letterSalutation: string;
    paragraphs: string[];
    closing: string;
    wishes: string[];
  };
  audio: {
    enabled: boolean;
    src: string;
    title: string;
  };
}

export const personalConfig: PersonalConfig = {
  sister: {
    name: "Khánh Linh",
    nickname: "Cô Bé Hóa Sinh",
    specialty: "Hóa học & Sinh học 🌿🔬",
  },
  brother: {
    signOff: "Anh Long",
  },
  siteMeta: {
    title: "Một chút dịu dàng dành cho em — 20/10",
    description: "Món quà 20/10 ấm áp, dịu dàng gửi tặng cô em gái nhỏ yêu thương ngành Hóa - Sinh.",
    occasion: "Ngày Phụ Nữ Việt Nam 20/10",
  },
  chapter1: {
    badge: "Chapter 01 • Một điều bất ngờ nhỏ",
    headline: "Gửi tặng em gái nhỏ,",
    subheadline: "Một góc dịu dàng được ấp ủ riêng cho ngày 20/10 — nơi những phản ứng chỉ sinh ra niềm vui và sự an yên.",
    openBoxCta: "Em chạm để mở hộp quà nhé 🌷",
    openedQuote: "Chào mừng em đến với góc nhỏ ấm áp này. Hãy thở thật sâu và thư giãn nhé!",
  },
  chapter2: {
    badge: "Chapter 02 • Phòng điều chế hạnh phúc",
    title: "Công thức cho một ngày dễ thương",
    subtitle: "Thả những nguyên tố tích cực vào bình tam giác Erlenmeyer thần kỳ để ươm mầm một đóa hoa rạng rỡ.",
    instructions: "Chạm lần lượt vào từng chiếc thẻ nguyên liệu bên dưới để điều chế nhé:",
    completionTitle: "Phản ứng tỏa nhiệt ấm áp thành công! ✨",
    completionMessage:
      "Tất cả nguyên liệu hòa tan tạo thành nguồn năng lượng tích cực nhất dành tặng em. Đóa hoa hạnh phúc đã nở rộ rồi này!",
    ingredients: [
      {
        id: "joy",
        name: "Một chút niềm vui",
        scienceName: "Dopamine & Serotonin",
        icon: "✨",
        color: "#F6D6DE",
        glowColor: "rgba(246, 214, 222, 0.8)",
        note: "Để nụ cười luôn tự nhiên nở trên môi dù ngày bận rộn.",
      },
      {
        id: "peace",
        name: "Một chút bình yên",
        scienceName: "GABA & Chlorophyll",
        icon: "🌿",
        color: "#B8CEB5",
        glowColor: "rgba(184, 206, 181, 0.8)",
        note: "Một khoảng lặng dịu êm để lòng nhẹ nhõm như đi giữa vườn cây.",
      },
      {
        id: "luck",
        name: "Một chút may mắn",
        scienceName: "Catalyst + Luck",
        icon: "🍀",
        color: "#E5C48A",
        glowColor: "rgba(229, 196, 138, 0.8)",
        note: "Chất xúc tác giúp mọi thí nghiệm và dự định đều hanh thông.",
      },
      {
        id: "love",
        name: "Thật nhiều thương yêu",
        scienceName: "Oxytocin Matrix",
        icon: "🌸",
        color: "#DDD5F3",
        glowColor: "rgba(221, 213, 243, 0.8)",
        note: "Tình thương vô điều kiện từ gia đình luôn đứng sau ủng hộ em.",
      },
    ],
  },

  chapter4: {
    badge: "Chapter 03 • Bức thư gửi em",
    title: "Gửi đến em — một khởi đầu dịu em",
    subtitle: "Mấy dòng chân thành anh viết gửi em nhân ngày 20/10.",
    letterDate: "Ngày 20 tháng 10 năm 2026",
    letterSalutation: "Khánh Linh thương mến,",
    paragraphs: [
      "20/10 vui vẻ nha em. Dạo này học hành trên trường cũng như dạy học part time, và 1 số chuyện nó không hay lắm chắc khiến em có nhiều lúc cảm thấy mệt và căng thẳng. Chơi với nhau 10 năm rùi nên anh biết: bề ngoài trông có vẻ lạnh lùng vê lù, việc gì cũng tự gánh một mình và luôn đòi hỏi bản thân phải thật chỉn chu.",
      "Nhưng em biết không, trong sinh học, một cái cây muốn nở hoa rực rỡ thì cũng cần những mùa rụng lá để tích lũy dinh dưỡng; và trong hóa học, có những phản ứng cần thời gian ủ rất lâu mới kết tinh thành những tinh thể đẹp nhất. Em không nhất thiết lúc nào cũng phải gồng mình quá mức mạnh mẽ hay hoàn hảo, mà che đi cảm xúc thật của mình.",
      "Khi nào thấy mệt, em cứ thong thả nghỉ ngơi, ngủ một giấc thật sâu, uống một ly nước ấm. Em vẫn luôn là niềm tự hào của tất cả mọi người! Hãy nhớ rằng bất kể có chuyện gì xảy ra, phía sau em luôn có người tin tưởng, đồng hành và yêu thương em vô điều kiện. Nếu mà cảm thấy mệt mỏi quá, or stress quá mà không chịu được, cứ chia sẻ tới anh qua Messenger nha",
    ],
    closing: "Chúc em một ngày 20/10 thật nhiều niềm vui và luôn tìm thấy sự dịu dàng trong cuộc sống!",
    wishes: [
      "Luôn giữ được nụ cười an yên 🌷",
      "Công việc, học hành thật suôn sẻ, kết quả như ý 🌿",
      "Ăn uống ngủ nghỉ điều độ, nhớ thương bản thân 💖",
    ],
  },
  audio: {
    enabled: true,
    src: "/audio/phep-mau.m4a",
    title: "Phép màu",
  },
};
