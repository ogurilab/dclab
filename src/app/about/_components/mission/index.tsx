import React from "react";
import { FadeIn, FadeInWithStagger } from "@/components/fade-in";
import { Image } from "@/components/ui/image";
import { Icon } from "@/icons";

export function OurMission() {
  return (
    <div className="relative isolate -z-10">
      <div className="overflow-hidden">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
            <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
              <div className="relative mb-6 flex items-center  gap-4 overflow-hidden  lg:-mt-10 lg:mb-10">
                <div className="relative size-12 sm:size-14">
                  <Icon
                    className="size-full h-12 rounded-md object-cover sm:h-14"
                    fill
                    sizes="(min-width: 1024px) 64px, 48px"
                  />
                </div>
                <span className="text-2xl font-bold tracking-tight text-primary sm:text-4xl">
                  Digital Culture Lab.
                </span>
              </div>
              <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
                文化を大切にする社会を実現する
              </h1>
              <p className="relative mt-6 leading-8 text-muted-foreground sm:max-w-md lg:max-w-none">
                Digital Culture
                Lab.（小栗研究室）は情報メディア技術を使って、「文化を大切にする社会の実現」に貢献します。文化とは、脈々と受け継がれてきた人々の知恵や伝統であり、地域社会の誇りや愛着・個性となるものであり、グローバルな文化交流や国際理解に不可欠なものであり、付加価値を生み出す経済活動や教育活動の源泉であり、新たな文化として発展するための創造性や技術開発の種であると考えています。歴史ある建造物や伝統文化は単に古くさいものではなく、当時の最先端のテクノロジーやエンタテインメントとして、それが現代に至るまで継承されてきたものです。我々は情報メディア技術を文化の中に応用することで、次の時代に継承していくための新たな価値を創出し、文化を大切にする社会の実現に貢献することを目指します。
              </p>
            </div>
            <FadeInWithStagger className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
              <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                <FadeIn className="relative">
                  <Image
                    alt="東京ゲームショウ"
                    className="aspect-[2/3] w-full rounded-xl bg-primary/5 object-cover object-right shadow-lg"
                    height={300}
                    src="/missions/game-show.webp"
                    width={180}
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-primary/10" />
                </FadeIn>
              </div>
              <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                <FadeIn className="relative">
                  <Image
                    alt="獅子奮迅"
                    className="aspect-[2/3] w-full rounded-xl bg-primary/5 object-cover object-right shadow-lg"
                    height={300}
                    src="/missions/shishi.webp"
                    width={180}
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-primary/10" />
                </FadeIn>
                <FadeIn className="relative">
                  <Image
                    alt="古都のゲーム"
                    className="aspect-[2/3] w-full rounded-xl bg-primary/5 object-cover object-left shadow-lg"
                    height={300}
                    src="/missions/koto.webp"
                    width={180}
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-primary/10" />
                </FadeIn>
              </div>
              <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                <FadeIn className="relative">
                  <Image
                    alt="獅子奮迅"
                    className="aspect-[2/3] w-full rounded-xl bg-primary/5 object-cover object-left shadow-lg"
                    height={300}
                    src="/missions/shishi-2.webp"
                    width={180}
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-primary/10" />
                </FadeIn>
                <FadeIn className="relative">
                  <Image
                    alt="タコパ"
                    className="aspect-[2/3] w-full rounded-xl bg-primary/5 object-cover shadow-lg"
                    height={300}
                    src="/missions/takopa.webp"
                    width={180}
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-primary/10" />
                </FadeIn>
              </div>
            </FadeInWithStagger>
          </div>
        </div>
      </div>
    </div>
  );
}
