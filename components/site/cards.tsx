import { ArrowRight, Clock } from 'lucide-react'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import type { Article } from '@/lib/data/articles'
import { articleCategories } from '@/lib/data/articles'
import type { Product } from '@/lib/data/products'
import { productCategories } from '@/lib/data/products'
import type { Solution } from '@/lib/data/solutions'
import { images } from '@/lib/images'
import { pick } from '@/lib/localized'
import { formatDate } from '@/lib/seo'

export function SolutionCard({ solution, locale, cta }: { solution: Solution; locale: string; cta: string }) {
  const photo = images[solution.image]
  return (
    <Link
      href={`/solutions/${solution.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-shadow hover:shadow-lg focus-visible:ring-2 focus-visible:ring-leaf focus-visible:outline-none"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="text-lg font-bold text-primary">{pick(solution.title, locale)}</h3>
        <p className="flex-1 leading-relaxed text-muted-foreground">{pick(solution.short, locale)}</p>
        <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-leaf">
          {cta}
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
        </span>
      </div>
    </Link>
  )
}

export function ProductCard({ product, locale, cta }: { product: Product; locale: string; cta: string }) {
  const photo = images[product.image]
  const category = productCategories.find((c) => c.id === product.category)
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-shadow hover:shadow-lg focus-visible:ring-2 focus-visible:ring-leaf focus-visible:outline-none"
    >
      <div className="relative aspect-square bg-secondary">
        <Image
          src={photo.src}
          alt={`${product.name} pack`}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
          className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-1.5 p-5">
        {category && (
          <span className="text-xs font-semibold tracking-wide text-leaf uppercase">{pick(category.label, locale)}</span>
        )}
        <h3 className="text-lg font-bold text-primary">{product.name}</h3>
        <p className="flex-1 text-sm leading-relaxed text-muted-foreground">{pick(product.short, locale)}</p>
        <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-leaf">
          {cta}
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
        </span>
      </div>
    </Link>
  )
}

export function ArticleCard({
  article,
  locale,
  minRead,
}: {
  article: Article
  locale: string
  minRead: string
}) {
  const photo = images[article.image]
  const category = articleCategories.find((c) => c.id === article.category)
  return (
    <Link
      href={`/knowledge/${article.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-shadow hover:shadow-lg focus-visible:ring-2 focus-visible:ring-leaf focus-visible:outline-none"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        {category && (
          <span className="text-xs font-semibold tracking-wide text-leaf uppercase">{pick(category.label, locale)}</span>
        )}
        <h3 className="text-lg leading-snug font-bold text-balance text-primary">{pick(article.title, locale)}</h3>
        <p className="line-clamp-3 flex-1 text-sm leading-relaxed text-muted-foreground">{pick(article.excerpt, locale)}</p>
        <div className="mt-2 flex items-center gap-3 text-xs text-muted-foreground">
          <time dateTime={article.date}>{formatDate(article.date, locale)}</time>
          <span aria-hidden="true">·</span>
          <span className="inline-flex items-center gap-1">
            <Clock className="size-3.5" aria-hidden="true" />
            {minRead}
          </span>
        </div>
      </div>
    </Link>
  )
}
