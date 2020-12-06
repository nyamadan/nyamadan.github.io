import React, { useCallback, useEffect, useRef, useState } from "react";

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
  const img = useRef<HTMLImageElement | null>(null);
  const [visible, setVisible] = useState(false);
  const placeholderStyle = {
    paddingTop: `${(100.0 * height) / width}%`,
    backgroundImage: `url(${placeholder ?? src})`,
    backgroundSize: "contain",
    filter: "blur(25px)",
  };

  useEffect(() => {
    setVisible(img.current?.complete ?? false);
  }, [img.current?.complete, src]);

  const onLoad = useCallback(() => {
    setVisible(true);
  }, [setVisible]);

  return (
    <div
      className={`
        relative
        max-w-full
        overflow-hidden
      `}
      style={{
        width: `${width}px`,
      }}
    >
      <div
        className="
          w-full
        "
        style={placeholderStyle}
      />
      <img
        ref={img}
        src={src}
        className={`
          absolute
          top-0
          left-0
          w-full
          h-auto
          duration-200
          ${placeholder ? "transition-opacity" : "transition-none"}
          ${visible ? "opacity-100" : "opacity-0"}
        `}
        alt={alt}
        onLoad={onLoad}
      />
    </div>
  );
}
