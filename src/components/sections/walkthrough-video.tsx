import { Bezel } from "@/components/site/primitives";

/** The setup and test screencast, also linked from the App Store listing. */
export const WALKTHROUGH = {
  src: "/video/waitly-walkthrough.mp4",
  poster: "/video/waitly-walkthrough-poster.jpg",
};

export function WalkthroughVideo({ className }: { className?: string }) {
  return (
    <Bezel className={className}>
      <video
        controls
        playsInline
        preload="none"
        poster={WALKTHROUGH.poster}
        className="aspect-video w-full rounded-[1.25rem] bg-ink"
      >
        <source src={WALKTHROUGH.src} type="video/mp4" />
        <a href={WALKTHROUGH.src}>Download the setup walkthrough</a> (MP4, 15 MB).
      </video>
    </Bezel>
  );
}
