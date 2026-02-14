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
    me: "나의 이름",                  // 예: "민수"
    you: "상대방 이름",               // 예: "지은"
  },

  // ── 📅 사귄 날짜 (YYYY-MM-DD 형식) ──
  startDate: "2024-01-01",           // 예: "2024-03-15" → D+day 자동 계산됨

  // ── 🏠 히어로 (첫 화면) ──
  hero: {
    title: "페이지 제목",             // 예: "Dear You", "Our Story"
    subtitle: "부제목 텍스트",         // 예: "우리의 소중한 순간들"
    scrollText: "Scroll",            // 스크롤 안내 문구
    image: "/images/hero.jpg",       // 첫 화면 배경 이미지 (세로 사진 추천)
  },

  // ── ❤️ D+Day 카운터 ──
  dday: {
    label: "D+Day 상단 문구",         // 예: "We've been together"
    suffix: "D+Day 하단 문구",        // 예: "일째 함께하는 중"
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
      date: "YYYY.MM.DD",            // 예: "2024.03.15"
      title: "이 날의 제목",           // 예: "처음 만난 날"
      description: "이 날의 설명",     // 예: "카페에서 눈이 마주쳤던 순간,\n시간이 멈춘 것 같았어."
      image: "/images/photo1.jpg",   // 이 섹션의 사진
      layout: "full",                // "full" | "left" | "right"
    },
    // ↓ 아래 블록을 복사해서 원하는 만큼 추가하세요!
    // {
    //   date: "YYYY.MM.DD",
    //   title: "제목",
    //   description: "설명",
    //   image: "/images/photo2.jpg",
    //   layout: "right",
    // },
  ],

  // ── 💌 편지 섹션 ──
  letter: {
    label: "편지 섹션 라벨",           // 예: "Love Letter"
    toSuffix: "에게",                 // "{상대방 이름}에게" 형태로 표시됨
    message: "편지 본문 내용",         // 예: "처음 만난 그날부터 지금까지,\n매 순간이 나에게는 기적이었어."
    closing: "편지 마무리 인사",       // 예: "사랑해 💕"
  },

  // ── 🔻 하단 푸터 ──
  footer: {
    title: "푸터 메인 문구",           // 예: "Happy Valentine's Day"
    subtitle: "푸터 서브 문구",        // 예: "MADE WITH ♥ FOR YOU"
  },
};

export default CONFIG;
