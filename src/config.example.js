// ═══════════════════════════════════════════════════════
// 💕 CONFIG - 여기만 수정하면 나만의 커플 페이지 완성!
// ═══════════════════════════════════════════════════════
//
// 📌 사용법:
//   1. 아래 값들을 자신의 내용으로 변경하세요
//   2. public/images/ 폴더에 사진을 넣으세요
//   3. npm start 로 확인!
//
// 💡 팁:
//   - 줄바꿈이 필요하면 \n 을 사용하세요
//   - 이미지는 "/images/파일명.jpg" 형태로 입력하세요
//   - sections 배열에 항목을 추가/삭제해서 사진 개수를 조절하세요
//
// ═══════════════════════════════════════════════════════

const CONFIG = {
  // ── 👫 커플 정보 ──
  couple: {
    me: "나의 이름",
    you: "상대방 이름",
  },

  // ── 📅 사귄 날짜 (YYYY-MM-DD 형식) ── D+day 자동 계산됨
  startDate: "2024-01-01",

  // ── 🏠 히어로 (첫 화면) ──
  hero: {
    title: "페이지 제목",
    subtitle: "부제목 텍스트",
    scrollText: "스크롤 안내 문구",
    image: "/images/hero.jpg",
  },

  // ── ❤️ D+Day 카운터 ──
  dday: {
    label: "D+Day 상단 문구",
    suffix: "D+Day 하단 문구",
  },

  // ── 📸 사진 섹션 (원하는 만큼 추가/삭제 가능!) ──
  //
  // layout 옵션:
  //   "full"  → 사진이 전체 너비로 표시
  //   "left"  → 사진 왼쪽, 텍스트 오른쪽
  //   "right" → 사진 오른쪽, 텍스트 왼쪽
  //
  sections: [
    {
      date: "YYYY.MM.DD",
      title: "이 날의 제목",
      description: "이 날의 설명",
      image: "/images/photo1.jpg",
      layout: "full",
    },
  ],

  // ── 💌 편지 섹션 ──
  letter: {
    label: "편지 섹션 라벨",
    toSuffix: "에게",
    message: "편지 본문 내용",
    closing: "편지 마무리 인사",
  },

  // ── 🔻 하단 푸터 ──
  footer: {
    title: "푸터 메인 문구",
    subtitle: "푸터 서브 문구",
  },
};

export default CONFIG;
