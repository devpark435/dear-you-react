import { useState, useMemo, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { useRef } from "react";
import CONFIG from "./config";
import "./styles.css";

// ═══════════════════════════════════════════════════════
// 유틸리티
// ═══════════════════════════════════════════════════════

// D+day 계산
function getDday(startDate) {
  const start = new Date(startDate);
  const now = new Date();
  const diff = Math.floor((now - start) / (1000 * 60 * 60 * 24));
  return diff;
}

// ═══════════════════════════════════════════════════════
// 공통 컴포넌트
// ═══════════════════════════════════════════════════════

// 스크롤 기반 Fade-in 래퍼 (motion/react 사용)
function FadeIn({ children, delay = 0, direction = "up", style = {} }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });

  const dirMap = {
    up: { y: 48 },
    down: { y: -48 },
    left: { x: 48 },
    right: { x: -48 },
    none: { y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...dirMap[direction] }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{
        duration: 1,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      style={style}
    >
      {children}
    </motion.div>
  );
}

// ── 구분선 ──
function Divider() {
  return (
    <FadeIn style={{ textAlign: "center", padding: "20px 0" }}>
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "16px",
          color: "#c4a882",
          fontSize: "10px",
          letterSpacing: "4px",
          fontFamily: "'Cormorant Garamond', serif",
        }}
      >
        <div
          style={{
            width: "40px",
            height: "1px",
            background: "linear-gradient(to right, transparent, #d4c4b0)",
          }}
        />
        ✦
        <div
          style={{
            width: "40px",
            height: "1px",
            background: "linear-gradient(to left, transparent, #d4c4b0)",
          }}
        />
      </div>
    </FadeIn>
  );
}

// ═══════════════════════════════════════════════════════
// 히어로 섹션
// ═══════════════════════════════════════════════════════

function HeroSection() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      style={{ position: "relative", height: "100svh", overflow: "hidden" }}
    >
      {/* 배경 이미지 */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={loaded ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 1.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${CONFIG.hero.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.4)",
        }}
      />
      <img
        src={CONFIG.hero.image}
        alt=""
        style={{ display: "none" }}
        onLoad={() => setLoaded(true)}
      />

      {/* 그라디언트 오버레이 */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(42,28,20,0.2) 0%, rgba(42,28,20,0.1) 40%, rgba(42,28,20,0.6) 100%)",
        }}
      />

      {/* 콘텐츠 */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "0 24px",
          textAlign: "center",
        }}
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.5 }}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(13px, 3vw, 15px)",
            letterSpacing: "6px",
            color: "rgba(255,245,235,0.7)",
            textTransform: "uppercase",
            marginBottom: "16px",
          }}
        >
          {CONFIG.couple.me} & {CONFIG.couple.you}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.8 }}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(48px, 12vw, 80px)",
            fontWeight: 300,
            fontStyle: "italic",
            color: "#fff5eb",
            lineHeight: 1.1,
            marginBottom: "24px",
          }}
        >
          {CONFIG.hero.title}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={loaded ? { opacity: 1 } : {}}
          transition={{ duration: 1.2, delay: 1.1 }}
          style={{
            width: "40px",
            height: "1px",
            background: "rgba(255,245,235,0.4)",
            marginBottom: "20px",
          }}
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 1.2 }}
          style={{
            fontFamily: "'Noto Serif KR', serif",
            fontSize: "clamp(13px, 3vw, 16px)",
            fontWeight: 300,
            color: "rgba(255,245,235,0.8)",
            letterSpacing: "2px",
          }}
        >
          {CONFIG.hero.subtitle}
        </motion.p>

        {/* 스크롤 인디케이터 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={loaded ? { opacity: 0.5 } : {}}
          transition={{ duration: 1.5, delay: 2 }}
          style={{
            position: "absolute",
            bottom: "40px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
            animation: loaded
              ? "gentleBounce 2.5s ease-in-out infinite 2.5s"
              : "none",
          }}
        >
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "11px",
              letterSpacing: "3px",
              color: "#fff5eb",
              textTransform: "uppercase",
            }}
          >
            {CONFIG.hero.scrollText}
          </p>
          <div
            style={{
              width: "1px",
              height: "24px",
              background:
                "linear-gradient(to bottom, rgba(255,245,235,0.6), transparent)",
            }}
          />
        </motion.div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════
// D+Day 카운터 섹션
// ═══════════════════════════════════════════════════════

function DdaySection() {
  const dday = useMemo(() => getDday(CONFIG.startDate), []);

  return (
    <div
      style={{
        padding: "80px 24px",
        textAlign: "center",
        background: "#faf6f0",
      }}
    >
      <FadeIn>
        <p
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(11px, 2.5vw, 13px)",
            letterSpacing: "5px",
            color: "#b8936a",
            textTransform: "uppercase",
            marginBottom: "20px",
          }}
        >
          {CONFIG.dday.label}
        </p>
      </FadeIn>
      <FadeIn delay={0.15}>
        <p
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(56px, 14vw, 88px)",
            fontWeight: 300,
            color: "#2c1810",
            lineHeight: 1,
            marginBottom: "8px",
          }}
        >
          {dday}
        </p>
      </FadeIn>
      <FadeIn delay={0.3}>
        <p
          style={{
            fontFamily: "'Noto Serif KR', serif",
            fontSize: "clamp(14px, 3vw, 17px)",
            fontWeight: 300,
            color: "#8a7568",
            letterSpacing: "1px",
          }}
        >
          {CONFIG.dday.suffix}
        </p>
      </FadeIn>
    </div>
  );
}

// ═══════════════════════════════════════════════════════
// 사진 섹션
// ═══════════════════════════════════════════════════════

function PhotoSection({ section, index }) {
  const { date, title, description, image, layout = "center" } = section;
  const [imgLoaded, setImgLoaded] = useState(false);

  // 정렬 방향에 따른 스타일 계산
  const textAlign =
    layout === "left" ? "left" : layout === "right" ? "right" : "center";
  const fadeDir =
    layout === "left" ? "right" : layout === "right" ? "left" : "up";

  // 사진 margin: left→왼쪽 붙임, right→오른쪽 붙임, center→가운데
  const photoMargin =
    layout === "left"
      ? "0 auto 0 20px"
      : layout === "right"
        ? "0 20px 0 auto"
        : "0 auto";

  // 모두 85%로 제한하여 정렬이 눈에 보이게
  const photoMaxWidth = "85%";

  // 텍스트 padding: 정렬 방향에 맞게
  const textPadding =
    layout === "left"
      ? "28px 32px 0 20px"
      : layout === "right"
        ? "28px 20px 0 32px"
        : "28px 32px 0";

  return (
    <div style={{ padding: "60px 0" }}>
      {/* 사진 */}
      <FadeIn direction={fadeDir}>
        <div
          style={{
            margin: photoMargin,
            maxWidth: photoMaxWidth,
            borderRadius: "8px",
            overflow: "hidden",
            aspectRatio: "3/4",
            maxHeight: "520px",
            position: "relative",
            background: "#e8e0d8",
          }}
        >
          <img
            src={image}
            alt={title}
            onLoad={() => setImgLoaded(true)}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: imgLoaded ? 1 : 0,
              transition: "opacity 0.8s ease",
            }}
          />
        </div>
      </FadeIn>

      {/* 텍스트 */}
      <div
        style={{
          padding: textPadding,
          textAlign,
        }}
      >
        <FadeIn delay={0.1} direction={fadeDir}>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "12px",
              letterSpacing: "4px",
              color: "#b8936a",
              marginBottom: "10px",
              textTransform: "uppercase",
            }}
          >
            {date}
          </p>
        </FadeIn>
        <FadeIn delay={0.2} direction={fadeDir}>
          <h2
            style={{
              fontFamily: "'Noto Serif KR', serif",
              fontSize: "clamp(20px, 5vw, 26px)",
              fontWeight: 400,
              color: "#2c1810",
              marginBottom: "14px",
            }}
          >
            {title}
          </h2>
        </FadeIn>
        <FadeIn delay={0.3} direction={fadeDir}>
          <p
            style={{
              fontFamily: "'Nanum Myeongjo', serif",
              fontSize: "clamp(14px, 3.2vw, 16px)",
              color: "#8a7568",
              lineHeight: 1.9,
              whiteSpace: "pre-line",
            }}
          >
            {description}
          </p>
        </FadeIn>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════
// 🍫 초콜릿 레터 섹션 (5번 터치 → 크랙 → 깨짐 → 편지)
// ═══════════════════════════════════════════════════════

// 크랙 SVG 경로 (단계별 점진적 추가)
const CRACK_PATHS = [
  // 1단계: 가운데 세로 크랙
  ["M170 80 L165 130 L172 180 L168 230 L170 270"],
  // 2단계: 좌우 가지 크랙
  [
    "M170 80 L165 130 L172 180 L168 230 L170 270",
    "M165 130 L130 115 L110 100",
    "M172 180 L210 170 L235 155",
  ],
  // 3단계: 더 많은 가지
  [
    "M170 80 L165 130 L172 180 L168 230 L170 270",
    "M165 130 L130 115 L110 100",
    "M172 180 L210 170 L235 155",
    "M168 230 L135 245 L105 240",
    "M165 130 L185 105 L205 85",
  ],
  // 4단계: 전체 크랙
  [
    "M170 80 L165 130 L172 180 L168 230 L170 270",
    "M165 130 L130 115 L110 100",
    "M172 180 L210 170 L235 155",
    "M168 230 L135 245 L105 240",
    "M165 130 L185 105 L205 85",
    "M172 180 L145 200 L120 215",
    "M168 230 L200 250 L225 245",
    "M170 80 L150 65",
    "M170 270 L185 285",
  ],
];

// 흔들림 애니메이션 이름 (phase에 따라)
const SHAKE_ANIMATIONS = [
  "none",
  "shake1 0.4s ease",
  "shake2 0.4s ease",
  "shake3 0.5s ease",
  "shake4 0.5s ease",
];

function ChocolateLetter() {
  // phase: 0=초기, 1~4=크랙 단계, 5=깨짐(편지 표시)
  const [phase, setPhase] = useState(0);
  const [shakeKey, setShakeKey] = useState(0);

  // 초콜릿 조각 (깨질 때 날아가는 파편)
  const crumbs = useMemo(
    () =>
      Array.from({ length: 16 }, (_, i) => ({
        id: i,
        size: 8 + Math.random() * 18,
        x: (Math.random() - 0.5) * 400,
        y: -(100 + Math.random() * 300),
        rotate: Math.random() * 720 - 360,
        color: `hsl(${15 + Math.random() * 15}, ${55 + Math.random() * 20}%, ${25 + Math.random() * 20}%)`,
        delay: Math.random() * 0.15,
      })),
    []
  );

  // 터치 핸들러
  const handleTap = useCallback(() => {
    if (phase >= 5) return;
    const next = phase + 1;
    setPhase(next);
    setShakeKey((k) => k + 1);
  }, [phase]);

  // 힌트 텍스트 결정
  const hintText =
    phase === 0
      ? CONFIG.letter.hintStart
      : phase <= 2
        ? CONFIG.letter.hintMore
        : phase <= 4
          ? CONFIG.letter.hintAlmost
          : "";

  return (
    <div className="chocolate-section">
      {/* 상단 라벨 */}
      <FadeIn>
        <p className="chocolate-label">{CONFIG.letter.gift}</p>
      </FadeIn>

      <AnimatePresence mode="wait">
        {phase < 5 ? (
          <motion.div
            key="chocolate"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.5 }}
          >
            {/* 하트 초콜릿 */}
            <div
              className="chocolate-stage"
              onClick={handleTap}
              key={shakeKey}
              style={{
                animation: phase > 0 ? SHAKE_ANIMATIONS[phase] || "none" : "none",
              }}
            >
              <svg
                viewBox="0 0 340 340"
                width="340"
                height="340"
                style={{ overflow: "visible" }}
              >
                <defs>
                  {/* 초콜릿 그라디언트 */}
                  <radialGradient
                    id="chocoGrad"
                    cx="40%"
                    cy="35%"
                    r="60%"
                  >
                    <stop offset="0%" stopColor="#8B5E3C" />
                    <stop offset="40%" stopColor="#6B3A2A" />
                    <stop offset="100%" stopColor="#4A2518" />
                  </radialGradient>
                  {/* 하이라이트 */}
                  <radialGradient
                    id="chocoHighlight"
                    cx="35%"
                    cy="30%"
                    r="30%"
                  >
                    <stop offset="0%" stopColor="rgba(255,255,255,0.15)" />
                    <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                  </radialGradient>
                  {/* 하트 클리핑 패스 */}
                  <clipPath id="heartClip">
                    <path d="M170 290 C170 290 30 210 30 120 C30 60 80 30 120 30 C145 30 165 45 170 65 C175 45 195 30 220 30 C260 30 310 60 310 120 C310 210 170 290 170 290Z" />
                  </clipPath>
                </defs>

                {/* 그림자 */}
                <ellipse
                  cx="170"
                  cy="310"
                  rx="100"
                  ry="12"
                  fill="rgba(0,0,0,0.08)"
                />

                {/* 하트 본체 */}
                <path
                  d="M170 290 C170 290 30 210 30 120 C30 60 80 30 120 30 C145 30 165 45 170 65 C175 45 195 30 220 30 C260 30 310 60 310 120 C310 210 170 290 170 290Z"
                  fill="url(#chocoGrad)"
                  stroke="#3A1A0A"
                  strokeWidth="1"
                />

                {/* 하이라이트 */}
                <path
                  d="M170 290 C170 290 30 210 30 120 C30 60 80 30 120 30 C145 30 165 45 170 65 C175 45 195 30 220 30 C260 30 310 60 310 120 C310 210 170 290 170 290Z"
                  fill="url(#chocoHighlight)"
                />

                {/* 크랙 라인 (phase에 따라 표시) */}
                {phase > 0 &&
                  phase <= 4 &&
                  CRACK_PATHS[phase - 1].map((d, i) => (
                    <motion.path
                      key={`crack-${phase}-${i}`}
                      d={d}
                      className="crack-line"
                      clipPath="url(#heartClip)"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{
                        duration: 0.3,
                        delay: i * 0.05,
                        ease: "easeOut",
                      }}
                    />
                  ))}
              </svg>
            </div>

            {/* 힌트 텍스트 */}
            <motion.p
              className="chocolate-hint"
              key={`hint-${phase}`}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              {hintText}
            </motion.p>
          </motion.div>
        ) : (
          /* 편지 팝업 (phase 5) */
          <motion.div
            key="letter"
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            {/* 깨지는 조각 */}
            {crumbs.map((c) => (
              <motion.div
                key={c.id}
                className="chocolate-crumb"
                style={{
                  width: c.size,
                  height: c.size,
                  background: c.color,
                  left: "50%",
                  top: "40%",
                }}
                initial={{ x: 0, y: 0, opacity: 1, rotate: 0 }}
                animate={{
                  x: c.x,
                  y: c.y,
                  opacity: 0,
                  rotate: c.rotate,
                }}
                transition={{
                  duration: 0.8 + Math.random() * 0.4,
                  delay: c.delay,
                  ease: "easeOut",
                }}
              />
            ))}

            {/* 편지 내용 */}
            <div className="letter-popup">
              <p className="letter-popup-to">
                {CONFIG.couple.you}
                {CONFIG.letter.toSuffix}
              </p>
              <p className="letter-popup-message">{CONFIG.letter.message}</p>
              <p className="letter-popup-closing">{CONFIG.letter.closing}</p>
              <p className="letter-popup-from">— {CONFIG.couple.me}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ═══════════════════════════════════════════════════════
// 푸터
// ═══════════════════════════════════════════════════════

function Footer() {
  return (
    <div
      style={{
        padding: "48px 24px 64px",
        textAlign: "center",
        background: "#f5f0ea",
      }}
    >
      <FadeIn>
        <p
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(11px, 2.5vw, 12px)",
            letterSpacing: "5px",
            color: "#c4a882",
            textTransform: "uppercase",
          }}
        >
          {CONFIG.footer.title}
        </p>
        <p
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(9px, 2vw, 10px)",
            letterSpacing: "3px",
            color: "#d4c4b0",
            marginTop: "16px",
          }}
        >
          {CONFIG.footer.subtitle}
        </p>
      </FadeIn>
    </div>
  );
}

// ══════════════════════════════
// 메인 App
// ══════════════════════════════
export default function App() {
  return (
    <div className="dear-you-app">
      <HeroSection />
      <DdaySection />
      <Divider />

      {CONFIG.sections.map((section, i) => (
        <div key={i}>
          <PhotoSection section={section} index={i} />
          {i < CONFIG.sections.length - 1 && <Divider />}
        </div>
      ))}

      <ChocolateLetter />
      <Footer />
    </div>
  );
}
