import Image, { type ImageProps } from "rc-image";
import { cn } from "@/lib/utils";
import { defaultIcons, toolbarRender } from "./helper";

interface PreviewImageProps extends ImageProps {
  className?: string;
}

function PreviewImage({ className, ...props }: PreviewImageProps) {
  return (
    <Image
      {...props}
      preview={{
        icons: defaultIcons,
        toolbarRender,
      }}
      className={cn("object-cover cursor-pointer", className)}
    />
  );
}

export default PreviewImage;
