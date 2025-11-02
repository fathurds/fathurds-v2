import Image from "rc-image";
import React from "react";
import { defaultIcons, toolbarRender } from "./helper";
import type { PreviewGroupPreview } from "rc-image/lib/PreviewGroup";

function PreviewImageGroup({
  preview = {},
  children,
}: {
  preview?: PreviewGroupPreview;
  children: React.ReactNode;
}) {
  return (
    <Image.PreviewGroup
      preview={{
        toolbarRender,
        icons: defaultIcons,
        ...preview,
      }}
    >
      {children}
    </Image.PreviewGroup>
  );
}

export default PreviewImageGroup;
