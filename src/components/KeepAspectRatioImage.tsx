import React, { useCallback, useEffect, useRef, useState } from "react";

type BaseProps = {
  alt?: string;
  placeholder?: string;
};

type S = {
  src: string;
  width: number;
  height: number;
};

type U = {
  src: string & {
    width: number;
    height: number;
  };
};

type Props = BaseProps & (S | U);

const isS = (params: S | U): params is S => {
  const s = params as unknown as { width?: number; height?: number };
  return s.width != null && s.height != null;
};

const KeepAspectRatioImage = function KeepAspectRatioImage(props: Props) {
  const { alt, placeholder } = props;
  const img = useRef<HTMLImageElement | null>(null);
  const [visible, setVisible] = useState(false);

  /* eslint-disable react/destructuring-assignment */
  const { src, width, height } = isS(props)
    ? { src: props.src, width: props.width, height: props.height }
    : { src: props.src, width: props.src.width, height: props.src.height };
  /* eslint-enable react/destructuring-assignment */

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
};

export default KeepAspectRatioImage;
