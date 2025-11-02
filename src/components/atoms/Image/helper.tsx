import { cn } from "@/lib/utils";
import {
  ChevronLeft,
  ChevronRight,
  FlipHorizontal,
  FlipVertical,
  RotateCcw,
  RotateCw,
  X,
  ZoomIn,
  ZoomOut,
} from "lucide-react";
import type { ToolbarRenderInfoType } from "rc-image/lib/Preview";

export const defaultIcons = {
  rotateLeft: <RotateCcw />,
  rotateRight: <RotateCw />,
  zoomIn: <ZoomIn />,
  zoomOut: <ZoomOut />,
  close: <X />,
  left: <ChevronLeft />,
  right: <ChevronRight />,
  flipX: <FlipHorizontal />,
  flipY: <FlipVertical />,
};

export const toolbarRender: (
  originalNode: React.ReactElement,
  info: Omit<ToolbarRenderInfoType, "current" | "total">
) => React.ReactNode = (
  _,
  { transform: { scale }, actions: { onZoomIn, onZoomOut } }
) => (
  <div className="rc-image-preview-operations">
    <button
      onClick={onZoomOut}
      className={cn(
        "rc-image-preview-operations-operation rc-image-preview-operations-operation-zoomIn",
        scale <= 1 && "rc-image-preview-operations-operation-disabled"
      )}
    >
      {defaultIcons.zoomOut}
    </button>
    <button
      onClick={onZoomIn}
      className={cn(
        "rc-image-preview-operations-operation rc-image-preview-operations-operation-zoomOut",
        scale >= 50 && "rc-image-preview-operations-operation-disabled"
      )}
    >
      {defaultIcons.zoomIn}
    </button>
  </div>
);
