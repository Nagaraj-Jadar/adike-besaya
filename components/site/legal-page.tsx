import { Breadcrumbs } from './breadcrumbs'
import { PendingNote } from './pending-note'

export function LegalPage({
  title,
  notice,
  sections,
}: {
  title: string
  notice: string
  sections: { heading: string; body: string }[]
}) {
  return (
    <article className="mx-auto flex max-w-3xl flex-col gap-8 px-4 pt-24 pb-16 md:pt-28 lg:px-6">
      <Breadcrumbs items={[{ label: title }]} className="text-foreground" />
      <h1 className="text-4xl font-extrabold tracking-tight text-primary">{title}</h1>
      <PendingNote>{notice}</PendingNote>
      {sections.map((s) => (
        <section key={s.heading} className="flex flex-col gap-2">
          <h2 className="text-xl font-bold text-primary">{s.heading}</h2>
          <p className="leading-relaxed text-pretty">{s.body}</p>
        </section>
      ))}
    </article>
  )
}
