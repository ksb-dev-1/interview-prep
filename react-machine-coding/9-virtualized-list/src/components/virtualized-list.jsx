import { useState, useMemo } from "react";

export function VirtualizedList({
  data,
  renderRow,
  itemHeight = 50,
  containerHeight = 400,
}) {
  const [scrollTop, setScrollTop] = useState(0);

  const totalHeight = data.length * itemHeight;
  const BUFFER = 5;
  const startIndex = Math.max(0, Math.floor(scrollTop / itemHeight) - BUFFER);
  const visibleCount = Math.ceil(containerHeight / itemHeight);
  const endIndex = Math.min(
    data.length,
    startIndex + visibleCount + BUFFER * 2,
  );

  const visibleItems = useMemo(() => {
    return data.slice(startIndex, endIndex);
  }, [data, startIndex, endIndex]);

  return (
    <div
      style={{
        height: containerHeight,
        overflowY: "auto",
        maxWidth: "36rem",
        margin: "0 auto",
        border: "1px solid #ccc",
      }}
      onScroll={(e) => setScrollTop(e.target.scrollTop)}
    >
      <div
        style={{
          height: totalHeight,
          position: "relative",
        }}
      >
        <div
          style={{
            // top: `${startIndex * ITEM_HEIGHT}px`,
            transform: `translateY(${startIndex * itemHeight}px)`,
            position: "absolute",
            width: "100%",
          }}
        >
          {visibleItems.map((item, index) => (
            <div key={startIndex + index} className="item">
              {renderRow(`Item : ${item + 1}`)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// const visibleItems = data.slice(startIndex, endIndex);

// 1. Using top

// position: absolute;
// top: 500px;
// Changes layout position
// Browser may trigger:
// layout (reflow)
// repaint
// Slightly slower for frequent updates (scrolling)

// 🔹 2. Using transform

// transform: translateY(500px);
// Does NOT affect layout
// Uses GPU acceleration
// Only triggers compositing
// Much smoother for scrolling

// 3. “What are limitations?”

// You should say:

// ❌ Assumes fixed item height
// ❌ Not good for dynamic height items
// ❌ Fast scrolling can cause blank gaps

// “This is a fixed-height virtualizer using overscan buffer to avoid flicker. It has limitations like static heights and no adaptive buffering. In production I’d likely use a library unless customization is required.”
