import Image from 'next/image'
import type { ReactNode } from 'react'
import { images, type ImageKey } from '@/lib/images'
import { Breadcrumbs, type Crumb } from './breadcrumbs'

type Props = {
  image: ImageKey
  eyebrow?: string
  title: string
  intro?: string
  crumbs: Crumb[]
  children?: ReactNode
}

/** Shared inner-page hero: same photography + deep-green treatment as the homepage hero, shorter. */
export function PageHero({ image, eyebrow, title, intro, crumbs, children }: Props) {
  const photo = images[image]
  return (
    <section aria-labelledby="page-title" className="relative isolate overflow-hidden bg-deep text-primary-foreground">
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover object-center"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-deep via-deep/80 to-deep/30 md:bg-gradient-to-r md:from-deep/95 md:via-deep/70 md:to-deep/10" />

      <div className="mx-auto flex min-h-[380px] max-w-7xl flex-col justify-end gap-5 px-4 pt-24 pb-12 md:min-h-[440px] md:justify-center md:pt-16 md:pb-16 lg:px-6">
        <Breadcrumbs items={crumbs} className="text-primary-foreground" />
        <div className="flex max-w-2xl flex-col gap-4">
          {eyebrow && (
            <span className="inline-flex w-fit items-center rounded-full bg-leaf px-3.5 py-1.5 text-xs font-semibold tracking-wide">
              {eyebrow}
            </span>
          )}
          <h1 id="page-title" className="text-3xl leading-tight font-extrabold tracking-tight text-balance md:text-5xl">
            {title}
          </h1>
          {intro && <p className="max-w-xl text-base leading-relaxed text-pretty text-primary-foreground/85 md:text-lg">{intro}</p>}
          {children && <div className="flex flex-col gap-3 pt-2 sm:flex-row">{children}</div>}
        </div>
      </div>
    </section>
  )
}
