import { useState, useMemo } from "react";
import { motion, useInView } from "motion/react";
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
  const { date, title, description, image, layout = "full" } = section;
  const [imgLoaded, setImgLoaded] = useState(false);

  // 풀 와이드 레이아웃
  if (layout === "full") {
    return (
      <div style={{ padding: "60px 0" }}>
        <FadeIn>
          <div
            style={{
              margin: "0 20px",
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

        <div style={{ padding: "28px 32px 0", textAlign: "center" }}>
          <FadeIn delay={0.1}>
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
          <FadeIn delay={0.2}>
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
          <FadeIn delay={0.3}>
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

  // 좌/우 레이아웃
  const isImageLeft = layout === "left";

  return (
    <div
      style={{
        padding: "60px 20px",
        display: "flex",
        flexDirection: isImageLeft ? "row" : "row-reverse",
        gap: "20px",
        alignItems: "center",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      <FadeIn
        direction={isImageLeft ? "right" : "left"}
        style={{ flex: "1 1 280px", maxWidth: "380px" }}
      >
        <div
          style={{
            borderRadius: "8px",
            overflow: "hidden",
            aspectRatio: "3/4",
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

      <div
        style={{
          flex: "1 1 220px",
          maxWidth: "320px",
          textAlign: isImageLeft ? "left" : "right",
          padding: "8px 0",
        }}
      >
        <FadeIn delay={0.15} direction={isImageLeft ? "left" : "right"}>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "12px",
              letterSpacing: "4px",
              color: "#b8936a",
              marginBottom: "10px",
            }}
          >
            {date}
          </p>
        </FadeIn>
        <FadeIn delay={0.25} direction={isImageLeft ? "left" : "right"}>
          <h2
            style={{
              fontFamily: "'Noto Serif KR', serif",
              fontSize: "clamp(20px, 5vw, 24px)",
              fontWeight: 400,
              color: "#2c1810",
              marginBottom: "14px",
            }}
          >
            {title}
          </h2>
        </FadeIn>
        <FadeIn delay={0.35} direction={isImageLeft ? "left" : "right"}>
          <p
            style={{
              fontFamily: "'Nanum Myeongjo', serif",
              fontSize: "clamp(13px, 3vw, 15px)",
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
// 러브레터 섹션
// ═══════════════════════════════════════════════════════

function LetterSection() {
  return (
    <div
      style={{
        padding: "80px 32px 60px",
        textAlign: "center",
        background: "#faf6f0",
        position: "relative",
      }}
    >
      {/* 장식 아이콘 */}
      <FadeIn>
        <div
          style={{
            fontSize: "32px",
            marginBottom: "28px",
            opacity: 0.8,
          }}
        >
          💌
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <p
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(11px, 2.5vw, 13px)",
            letterSpacing: "5px",
            color: "#b8936a",
            textTransform: "uppercase",
            marginBottom: "32px",
          }}
        >
          {CONFIG.letter.label}
        </p>
      </FadeIn>

      <FadeIn delay={0.2}>
        <h2
          style={{
            fontFamily: "'Noto Serif KR', serif",
            fontSize: "clamp(20px, 5vw, 26px)",
            fontWeight: 300,
            color: "#2c1810",
            marginBottom: "36px",
          }}
        >
          {CONFIG.couple.you}{CONFIG.letter.toSuffix}
        </h2>
      </FadeIn>

      <FadeIn delay={0.3}>
        <div
          style={{
            maxWidth: "400px",
            margin: "0 auto",
            padding: "32px",
            background: "rgba(255,255,255,0.5)",
            borderRadius: "12px",
            border: "1px solid rgba(180,160,140,0.15)",
          }}
        >
          <p
            style={{
              fontFamily: "'Nanum Myeongjo', serif",
              fontSize: "clamp(14px, 3.2vw, 16px)",
              color: "#5a4a40",
              lineHeight: 2.2,
              whiteSpace: "pre-line",
              marginBottom: "28px",
            }}
          >
            {CONFIG.letter.message}
          </p>

          <p
            style={{
              fontFamily: "'Noto Serif KR', serif",
              fontSize: "clamp(16px, 4vw, 20px)",
              color: "#2c1810",
              marginBottom: "8px",
            }}
          >
            {CONFIG.letter.closing}
          </p>

          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(13px, 3vw, 15px)",
              color: "#b8936a",
              fontStyle: "italic",
            }}
          >
            — {CONFIG.couple.me}
          </p>
        </div>
      </FadeIn>
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

      <LetterSection />
      <Footer />
    </div>
  );
}
