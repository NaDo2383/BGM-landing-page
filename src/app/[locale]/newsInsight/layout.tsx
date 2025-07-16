import SmallHero from "@/components/news-insight/SmallHero"

export default async function NewsInsightLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <SmallHero />
      {children}
    </section>
  )
}
