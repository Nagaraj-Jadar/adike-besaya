import { setRequestLocale } from 'next-intl/server'
import { Hero } from '@/components/home/hero'
import { StatsStrip } from '@/components/home/stats-strip'
import { SolutionsSection } from '@/components/home/solutions-section'
import { SoilExpertSection } from '@/components/home/soil-expert-section'
import { ProductsSection } from '@/components/home/products-section'
import { KnowledgeSection } from '@/components/home/knowledge-section'
import { StoriesSection } from '@/components/home/stories-section'

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <main>
      <Hero />
      <StatsStrip />
      <SolutionsSection />
      <SoilExpertSection />
      <ProductsSection />
      <KnowledgeSection />
      <StoriesSection />
    </main>
  )
}
