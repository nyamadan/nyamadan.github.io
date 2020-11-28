import React from "react";

interface Props {
  src: string;
  width: number;
  height: number;
  alt?: string;
  placeholder?: string;
}

export default function KeepAspectRatioImage({
  src,
  width,
  height,
  alt,
  placeholder,
}: Props) {
  const style = {
    paddingTop: `${(100.0 * height) / width}%`,
  };

  if (placeholder != null && !src.startsWith("data:")) {
    Object.assign(style, {
      backgroundImage: `url(${placeholder})`,
      backgroundSize: "contain",
      filter: "blur(25px)",
    });
  }

  return (
    <div
      className="
        relative
        max-w-full
        overflow-hidden
      "
      style={{
        width: `${width}px`,
      }}
    >
      <div
        className="
          w-full
        "
        style={style}
      />
      <img
        src={src}
        className="
          absolute
          top-0
          left-0
          w-full
          h-auto
        "
        alt={alt}
      />
    </div>
  );
}
