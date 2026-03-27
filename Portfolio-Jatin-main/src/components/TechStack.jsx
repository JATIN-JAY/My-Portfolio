import { useEffect, useRef } from "react";

const techStack = [
  { name: "React.js", icon: "react" },
  { name: "JavaScript", icon: "javascript" },
  { name: "TailwindCSS", icon: "tailwindcss" },
  { name: "Node.js", icon: "nodejs" },
  { name: "Express", icon: "express" },
  { name: "REST APIs", prefix: "/>" },
  { name: "MongoDB", icon: "mongodb" },
  { name: "MySQL", icon: "mysql" },
  { name: "PostgreSQL", icon: "postgresql" },
  { name: "Java", icon: "java" },
  { name: "C++", icon: "cplusplus" },
  { name: "Docker", icon: "docker" },
];

// STEP 2 — Calculate final grid positions
function getGridPositions(stageW) {
  const COLS = 6;  // Always 6 columns (6 per row, 2 rows total)
  const ICON_W = 90;  // icon wrapper width (increased from 72)
  const ICON_H = 110;  // icon wrapper height (increased from 90)
  const COL_GAP = 48; // horizontal gap between icons
  const ROW_GAP = 40; // vertical gap between icons
  const TOTAL_W = ICON_W + COL_GAP;
  const TOTAL_H = ICON_H + ROW_GAP;

  const totalGridW = COLS * ICON_W + (COLS - 1) * COL_GAP;
  const startX = Math.max(24, (stageW - totalGridW) / 2);
  const startY = 20;

  return techStack.map((_, i) => ({
    x: startX + (i % COLS) * TOTAL_W,
    y: startY + Math.floor(i / COLS) * TOTAL_H,
  }));
}

// STEP 3 — Calculate random spawn positions
function randomSpawn(stageW, stageH) {
  const side = Math.floor(Math.random() * 4);
  const margin = 120;
  const spread = 500;

  switch (side) {
    case 0: // top
      return {
        x: Math.random() * stageW,
        y: -margin - Math.random() * spread,
      };
    case 1: // right
      return {
        x: stageW + margin + Math.random() * spread,
        y: Math.random() * stageH,
      };
    case 2: // bottom
      return {
        x: Math.random() * stageW,
        y: stageH + margin + Math.random() * spread,
      };
    case 3: // left
      return {
        x: -margin - Math.random() * spread,
        y: Math.random() * stageH,
      };
    default:
      return { x: 0, y: 0 };
  }
}

// STEP 4 — Build icons and set spawn positions
function buildIcons(stage) {
  stage.innerHTML = "";
  const icons = [];

  // Add glow styles
  if (!document.getElementById("tech-stack-styles")) {
    const style = document.createElement("style");
    style.id = "tech-stack-styles";
    style.textContent = `
      .tech-icon {
        filter: drop-shadow(0 0 10px rgba(201, 168, 76, 0.6)) drop-shadow(0 0 20px rgba(201, 168, 76, 0.3));
      }
      .tech-icon:hover {
        filter: drop-shadow(0 0 15px rgba(201, 168, 76, 0.8)) drop-shadow(0 0 30px rgba(201, 168, 76, 0.5));
      }
    `;
    document.head.appendChild(style);
  }

  techStack.forEach((tech, idx) => {
    const el = document.createElement("div");
    el.className = "tech-icon";
    el.style.position = "absolute";
    el.style.display = "flex";
    el.style.flexDirection = "column";
    el.style.alignItems = "center";
    el.style.gap = "10px";
    el.style.opacity = "0";
    el.style.willChange = "transform, opacity";
    el.style.minWidth = "90px";
    el.style.cursor = "pointer";
    el.style.transition = "transform 0.25s ease, filter 0.25s ease";

    el.onmouseover = () => {
      el.style.transform = "scale(1.15)";
    };
    el.onmouseout = () => {
      el.style.transform = "scale(1)";
    };

    // Icon container
    const iconWrapper = document.createElement("div");
    iconWrapper.style.width = "90px";
    iconWrapper.style.height = "90px";
    iconWrapper.style.display = "flex";
    iconWrapper.style.alignItems = "center";
    iconWrapper.style.justifyContent = "center";
    iconWrapper.style.backgroundColor = "rgba(201, 168, 76, 0.1)";
    iconWrapper.style.borderRadius = "8px";

    if (tech.icon) {
      const img = document.createElement("img");
      img.src = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.icon}/${tech.icon}-original.svg`;
      img.alt = tech.name;
      img.style.width = "65px";
      img.style.height = "65px";
      img.onerror = () => {
        img.style.display = "none";
      };
      iconWrapper.appendChild(img);
    } else if (tech.prefix) {
      const prefix = document.createElement("span");
      prefix.textContent = tech.prefix;
      prefix.style.fontSize = "28px";
      prefix.style.fontWeight = "bold";
      prefix.style.color = "#c9a84c";
      iconWrapper.appendChild(prefix);
    }

    const label = document.createElement("span");
    label.textContent = tech.name;
    label.style.fontSize = "11px";
    label.style.fontWeight = "600";
    label.style.color = "rgba(255, 255, 255, 0.4)";
    label.style.textAlign = "center";
    label.style.textTransform = "uppercase";
    label.style.letterSpacing = "0.12em";
    label.style.marginTop = "10px";
    label.style.whiteSpace = "nowrap";

    el.appendChild(iconWrapper);
    el.appendChild(label);

    // Set spawn position (off-screen)
    const spawn = randomSpawn(stage.offsetWidth, stage.offsetHeight);
    el.style.left = spawn.x + "px";
    el.style.top = spawn.y + "px";

    stage.appendChild(el);
    icons.push({ el, spawn });
  });

  return icons;
}

// STEP 5 — Run the two-phase animation
function runAnimation(stage) {
  const icons = buildIcons(stage);
  const stageW = stage.offsetWidth;
  const stageH = stage.offsetHeight;
  const finalPositions = getGridPositions(stageW);

  icons.forEach(({ el }, i) => {
    const target = finalPositions[i];

    // PHASE 1 — Fly to scattered position near target
    const scatter = {
      x: target.x + (Math.random() - 0.5) * 140,
      y: target.y + (Math.random() - 0.5) * 100,
    };
    const delay1 = i * 45;
    const dur1 = 600 + Math.random() * 300;

    setTimeout(() => {
      el.style.transition = `opacity 0.25s ease, left ${dur1}ms cubic-bezier(0.25,0.46,0.45,0.94), top ${dur1}ms cubic-bezier(0.25,0.46,0.45,0.94)`;
      el.style.opacity = "1";
      el.style.left = scatter.x + "px";
      el.style.top = scatter.y + "px";
    }, delay1);

    // PHASE 2 — Magnetic snap to final grid position
    const snapDelay = delay1 + dur1 + 80 + i * 18;

    setTimeout(() => {
      el.style.transition = `left 420ms cubic-bezier(0.22,1,0.36,1), top 420ms cubic-bezier(0.22,1,0.36,1)`;
      el.style.left = target.x + "px";
      el.style.top = target.y + "px";
    }, snapDelay);
  });
}

export default function TechStack() {
  const stageRef = useRef(null);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    // STEP 6 — Trigger on scroll using IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            runAnimation(stage);
            observer.unobserve(entry.target); // fire once only
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(stage);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div style={{ padding: "80px 48px", backgroundColor: "#0a0a0a", width: "100%", boxSizing: "border-box" }}>
      {/* Section Header */}
      <div style={{ textAlign: "center", marginBottom: "60px" }}>
        <h2 className="text-4xl md:text-5xl font-bold text-light-50 tracking-tight">
          Tech Stack
        </h2>
      </div>

      {/* Animation Stage with position absolute layout */}
      <div
        ref={stageRef}
        style={{
          position: "relative",
          width: "100%",
          height: "420px",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      />
    </div>
  );
}
