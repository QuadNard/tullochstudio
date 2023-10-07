"use client";

import Image, { ImageProps } from "next/image";
import { useEffect, useState } from "react";

export default function BlurImage(props: ImageProps) {
  const [loading, setLoading] = useState(true);
  const [src, setSrc] = useState(props.src);
  useEffect(() => setSrc(props.src), [props.src]); // update the `src` value when the `prop.src` value changes

  return (
    <Image
      {...props}
      src={src}
      alt={props.alt}
      className={`${props.className} ${loading ? "blur-[2px]" : "blur-0"}`}
      onLoadingComplete={async () => {
        setLoading(false);
      }}
      onError={() => {
        setSrc(`https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png`); // if the image fails to load, use the default avatar
      }}
    />
  );
}