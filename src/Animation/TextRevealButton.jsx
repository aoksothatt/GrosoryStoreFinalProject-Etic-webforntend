import React from "react";
("use client");
const TextRevealButton = React.forwardRef((props, ref) => {
  const {
    text = "Khmer Fresh",
    revealColor = "#37FF8B",
    strokeColor = "rgba(100, 100, 100, 0.7)",
    className,
    style,
    ...restProps
  } = props;

  return (
    <button
      ref={ref}
      className={`group relative cursor-pointer bg-transparent border-none p-0 m-0 h-auto font-['Arial'] uppercase inline-block ${
        className || ""
      }`}
      style={{
        fontSize: "1em",
        letterSpacing: "3px",
        color: "transparent",
        WebkitTextStroke: `1px ${strokeColor}`,
        ...style,
      }}
      {...restProps}
    >
      <span className="relative inline-block">
        &nbsp;{text}&nbsp;
        <span
          className="absolute top-0 left-0 w-0 h-full overflow-hidden whitespace-nowrap transition-all duration-500 group-hover:w-full"
          style={{
            color: revealColor,
            WebkitTextStroke: `1px ${revealColor}`,
            borderRight: `4px solid ${revealColor}`,
            filter: "drop-shadow(0 0 10px #37FF8B)",
          }}
        >
          &nbsp;{text}&nbsp;
        </span>
      </span>
    </button>
  );
});

TextRevealButton.displayName = "TextRevealButton";
export default TextRevealButton;
