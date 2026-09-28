import ExportedImage from "next-image-export-optimizer";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import hero from "../../public/images/hero.jpg";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-10 px-4 py-16 sm:px-6">
      <section className="flex flex-col items-start gap-4">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Waitly
        </h1>
        <p className="max-w-xl text-lg text-muted-foreground">
          Static Next.js site with Tailwind CSS, shadcn/ui and build-time image
          optimization, ready for GitHub Pages.
        </p>
        <Button size="lg">Get started</Button>
      </section>

      <Card>
        <CardHeader>
          <CardTitle>Optimized image</CardTitle>
          <CardDescription>
            Resized WebP variants and a blur placeholder are generated at build
            time.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ExportedImage
            src={hero}
            alt="Gradient hero"
            placeholder="blur"
            priority
            sizes="(min-width: 1024px) 960px, 100vw"
            className="h-auto w-full rounded-lg"
          />
        </CardContent>
      </Card>
    </main>
  );
}
