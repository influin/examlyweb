import {
  Tile,
  TileVisual,
  TileTitle,
  TileDescription,
  TileContent,
  TileLink,
} from "../../ui/tile";
import { Section } from "../../ui/section";
import RippleIllustration from "../../illustrations/ripple";
import ChatIllustration from "../../illustrations/chat";
import { MousePointerClick, Shield, TextCursor, Wrench } from "lucide-react";
import MockupResponsiveTopIllustration from "../../illustrations/mockup-responsive-top";
import RadarSmallIllustration from "../../illustrations/radar-small";

export default function BentoGrid() {
  return (
    <Section>
      <div className="mx-auto flex max-w-container flex-col items-center gap-6 sm:gap-12">
        <h2 className="text-balance text-center text-3xl font-semibold sm:text-5xl">
          Build a website that is hard to forget.
        </h2>
        <p className="text-md max-w-[720px] text-balance text-center font-medium text-muted-foreground sm:text-xl">
          Build a top-notch landing page even if you don&apos;t have the time
          for it. Create an irresistible offer that speaks professionalism and
          hi-end design.
        </p>
        <div className="grid grid-cols-12 gap-4">
          <Tile className="col-span-12 lg:col-span-4">
            <TileLink />
            <TileVisual className="-mx-32 -my-16 lg:my-0">
              <RippleIllustration />
            </TileVisual>
            <TileContent>
              <MousePointerClick className="h-8 w-8 stroke-1 text-muted-foreground" />
              <TileTitle>Top-level performance</TileTitle>
              <TileDescription>
                <p>
                  With no heavy assets or dependencies, your website will feel
                  snappy and load instantly.
                </p>
                <p>No bloat, no extra maintenance.</p>
              </TileDescription>
            </TileContent>
          </Tile>

          <Tile className="col-span-12 md:col-span-6 lg:col-span-4">
            <TileLink />
            <TileVisual className="items-center">
              <ChatIllustration />
            </TileVisual>
            <TileContent>
              <TextCursor className="h-8 w-8 stroke-1 text-muted-foreground" />
              <TileTitle>Data-agnostic</TileTitle>
              <TileDescription>
                <p>
                  All the data is separate from components so you can edit it in
                  seconds or make it dynamic.
                </p>
                <p>Easily connect to a CMS of your choice.</p>
              </TileDescription>
            </TileContent>
          </Tile>
          <Tile className="col-span-12 md:col-span-6 lg:col-span-4">
            <TileLink />
            <TileVisual className="relative min-h-[240px]">
              <RadarSmallIllustration className="absolute left-1/2 top-1/2 -mt-32 h-[512px] w-[512px] -translate-x-1/2 -translate-y-1/2" />
            </TileVisual>
            <TileContent>
              <Shield className="h-8 w-8 stroke-1 text-muted-foreground" />
              <TileTitle>Made for search engines</TileTitle>
              <TileDescription>
                <p className="max-w-[520px]">
                  Unlike the bloated no-code solutions, Launch UI is built to be
                  perfectly optimized for search engines.
                </p>
              </TileDescription>
            </TileContent>
          </Tile>
          <Tile className="col-span-12 md:flex-row">
            <TileContent className="grow basis-0 md:justify-end">
              <Wrench className="h-8 w-8 stroke-1 text-muted-foreground" />
              <TileTitle>The code is yours</TileTitle>
              <TileDescription>
                <p className="max-w-[320px] lg:max-w-[460px]">
                  With Launch UI, the code is yours forever. You can use it as a
                  starting point for your own projects and customize it to your
                  needs.
                </p>
                <p>Never bother about subscriptions and lock-ins.</p>
              </TileDescription>
            </TileContent>
            <TileVisual className="min-h-[240px] basis-0 sm:p-4 md:min-h-[320px] md:py-12 lg:px-12">
              <MockupResponsiveTopIllustration />
            </TileVisual>
          </Tile>
        </div>
      </div>
    </Section>
  );
}
