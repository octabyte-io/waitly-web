import { cn } from "@/lib/utils";
import { SCENES, type SceneId } from "./scenes";

/**
 * A post's cover: one of its mocks, shown as a picture. It is decoration here,
 * so it is hidden from screen readers; the mock is described where it appears
 * in the post.
 */
export function SceneCover({ scene, className }: { scene: SceneId; className?: string }) {
  return (
    <div aria-hidden="true" className={cn("pointer-events-none select-none", className)}>
      {SCENES[scene].render()}
    </div>
  );
}

/**
 * The cover as a thumbnail for a card: the mock drawn smaller, cut to a fixed
 * shape and faded out at the foot. `zoom` is how much smaller, from 0 to 1.
 */
export function SceneThumb({ scene, zoom, className }: { scene: SceneId; zoom: number; className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none aspect-[16/9] overflow-hidden rounded-[1.25rem] bg-sky/35 px-4 pt-4 select-none",
        "[mask-image:linear-gradient(to_bottom,black_72%,transparent)]",
        className,
      )}
    >
      <div className="origin-top-left" style={{ width: `${100 / zoom}%`, transform: `scale(${zoom})` }}>
        {SCENES[scene].render()}
      </div>
    </div>
  );
}
