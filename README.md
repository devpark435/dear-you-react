# 💕 Dear You

> 커플을 위한 감성 스크롤 웹페이지 템플릿  
> 코드를 몰라도 **설정 파일 하나만 수정**하면 나만의 커플 페이지를 만들 수 있습니다.

<br>

## ✨ 미리보기

| 히어로 | 사진 섹션 | 편지 |
|:---:|:---:|:---:|
| 전체화면 배경 + 스크롤 유도 | 3가지 레이아웃 | 감성 러브레터 |

<br>

## 🚀 시작하기

### 1. 프로젝트 가져오기

```bash
git clone https://github.com/your-username/dear-you.git
cd dear-you
npm install
```

### 2. 설정 파일 만들기

```bash
cp src/config.example.js src/config.js
```

> `config.example.js`는 가이드가 적힌 템플릿입니다.  
> 복사한 `config.js`에 자신의 내용을 채워넣으세요.

### 3. 사진 넣기

`public/images/` 폴더에 사진을 넣으세요.

```
public/images/
├── hero.jpg        ← 첫 화면 배경 (세로 사진 추천)
├── photo1.jpg      ← 사진 섹션용
├── photo2.jpg
├── ...
└── og-image.jpg    ← 카톡 공유 미리보기 (1200x630px 추천)
```

### 4. 실행

```bash
npm start
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 으로 확인!

<br>

## 📝 설정 파일 가이드 (`src/config.js`)

`config.js` 하나만 수정하면 모든 텍스트와 이미지가 변경됩니다.

### 커플 정보 & 날짜

```js
couple: {
  me: "민수",           // 나의 이름
  you: "지은",          // 상대방 이름
},
startDate: "2024-03-15", // 사귄 날짜 → D+day 자동 계산
```

### 히어로 (첫 화면)

```js
hero: {
  title: "Dear You",              // 메인 타이틀
  subtitle: "우리의 소중한 순간들",  // 서브 타이틀
  scrollText: "Scroll",           // 스크롤 안내 문구
  image: "/images/hero.jpg",      // 배경 이미지
},
```

### D+Day 카운터

```js
dday: {
  label: "We've been together",   // 숫자 위 문구
  suffix: "일째 함께하는 중",       // 숫자 아래 문구
},
```

### 사진 섹션

```js
sections: [
  {
    date: "2024.03.15",
    title: "처음 만난 날",
    description: "카페에서 눈이 마주쳤던 순간,\n시간이 멈춘 것 같았어.",
    image: "/images/photo1.jpg",
    layout: "full",               // 레이아웃 선택
  },
  // 원하는 만큼 추가 가능!
],
```

### 편지

```js
letter: {
  label: "Love Letter",
  toSuffix: "에게",                // "지은에게" 형태로 표시됨
  message: "편지 내용...\n줄바꿈은 \\n 사용",
  closing: "사랑해 💕",
},
```

### 푸터

```js
footer: {
  title: "Happy Valentine's Day",
  subtitle: "MADE WITH ♥ FOR YOU",
},
```

<br>

## 🖼️ 레이아웃 옵션

사진 섹션의 `layout` 값으로 3가지 배치를 선택할 수 있습니다.

### `"full"` — 전체 너비

```
┌─────────────────────┐
│                     │
│      📷 사진        │
│                     │
├─────────────────────┤
│    날짜 / 제목       │
│      설명 텍스트     │
└─────────────────────┘
```

사진이 화면 전체 너비를 차지하고, 아래에 텍스트가 중앙 정렬됩니다.  
**임팩트 있는 사진**에 추천합니다.

### `"left"` — 사진 왼쪽, 텍스트 오른쪽

```
┌───────────┬─────────┐
│           │  날짜   │
│  📷 사진  │  제목   │
│           │  설명   │
└───────────┴─────────┘
```

### `"right"` — 사진 오른쪽, 텍스트 왼쪽

```
┌─────────┬───────────┐
│  날짜   │           │
│  제목   │  📷 사진  │
│  설명   │           │
└─────────┴───────────┘
```

> 💡 **팁**: `"full"` → `"right"` → `"left"` → `"full"` 순서로 번갈아 사용하면 리듬감 있는 페이지가 됩니다!

<br>

## 📱 카카오톡 미리보기 (OG 태그)

`public/index.html`을 열어서 아래 부분을 수정하세요:

```html
<title>페이지 제목</title>
<meta property="og:title" content="카톡에 보일 제목" />
<meta property="og:description" content="카톡에 보일 설명" />
<meta property="og:url" content="https://배포된-주소.com" />
```

미리보기 이미지는 `public/images/og-image.jpg`에 넣으면 됩니다.  
(권장 크기: **1200 x 630px**)

<br>

## 🔒 프라이버시

개인 정보가 담긴 파일은 `.gitignore`에 등록되어 **git에 올라가지 않습니다**:

| 파일 | 설명 |
|------|------|
| `src/config.js` | 이름, 날짜, 편지 내용 등 개인정보 |
| `public/images/*` | 커플 사진 |

대신 `src/config.example.js`가 가이드 템플릿으로 포함되어 있어서,  
클론한 사람은 이걸 복사해서 자신의 `config.js`를 만들면 됩니다.

<br>

## 📂 프로젝트 구조

```
dear-you/
├── public/
│   ├── images/            ← 📸 사진 넣는 곳 (gitignore됨)
│   │   └── .gitkeep
│   └── index.html         ← OG태그 (카톡 미리보기)
├── src/
│   ├── config.example.js  ← 🎯 설정 템플릿 (가이드 포함)
│   ├── config.js          ← 🔒 내 설정 (gitignore됨)
│   ├── App.jsx            ← 메인 컴포넌트 (수정 불필요)
│   ├── styles.css         ← 전역 스타일
│   └── index.js           ← 엔트리포인트
└── package.json
```

<br>

## 🌐 배포하기

### Vercel (추천)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# build/ 폴더를 Netlify에 드래그 앤 드롭
```

### GitHub Pages

```bash
# package.json에 homepage 추가 후
npm run build
npx gh-pages -d build
```

<br>

## 🛠️ 기술 스택

- **React** — UI 프레임워크
- **motion/react** — 스크롤 애니메이션
- **Google Fonts** — Cormorant Garamond, Noto Serif KR, Nanum Myeongjo

<br>

---

Made with ♥ by [DevPark](https://github.com/your-username)
