"use client"
import React from "react"
import Link from "next/link"
import { useTranslations } from "next-intl"
import clsx from "clsx"
import { motion } from "framer-motion"
import Image from "next/image"

import ContactUsForm from "@/components/sections/ContactUsForm"
import NewsCard from "@/components/ui/NewsCard"
import { NewsItem1 } from "@/types"
import NewsletterList, { NewsItem } from "./NewsletterList"
import LatestNewsPanel from "./LatestNewsPanel"
import SmallHero from "./SmallHero"

const NewsInsightPage = () => {
  const news: NewsItem1[] = [
    {
      id: "1",
      title: "OINBASE – S&P 500 ИНДЕКСИЙН АНХНЫ КРИПТО БИРЖ БОЛЛОО",
      description:
        "АНУ-ын тэргүүлэгч криптовалютын бирж болох Coinbase Global Inc. (COIN.O) энэ сарын 19-нөөс эхлэн S&P 500 индексэд багтах болсноор, тус индексэд багтсан анхны крипто бирж болж, тус салбарын хувьд түүхэн үйл явдал тохиолоо. Энэхүү шийдвэрийн дараа Coinbase-ийн хувьцаа өргөтгөсөн арилжаанд 8–10%-иар өссөн байна. Шинжээчдийн үзэж буйгаар, индексийг дагадаг хөрөнгө оруулалтын сангууд уг хувьцааг багцдаа нэмэх шаардлагатай тул эрэлт нэмэгдэж, үнэ $293 хүрч өсөх боломжтой гэж Oppenheimer онцолжээ. Үүнээс гадна Coinbase нь олон улсын тэлэлтийн стратегийн хүрээнд, крипто деривативын гол тоглогч болох Deribit биржийг $2.9 тэрбумын үнээр худалдан авахаар тохиролцоонд хүрээд байгаа нь тус компанийн гадаад зах зээл дэх байр суурийг улам бататгах хүлээлттэй байна.",
      img: "/card_img_1.png",
    },
    {
      id: "2",
      title: "Ам.долларын индекс сүүлийн гурван жилийн доод түвшинд хүрлээ",
      description:
        "Тариф, эдийн засгийн хэтийн төлөв болон Холбооны нөөцийн сангийн хараат бус байдал алдагдах зэрэг хүчин зүйлс нь хөрөнгө оруулагчдын хүлээлтийг бууруулж буйтай холбоотойгоор ам.долларын индекс сүүлийн гурван жилийн доод түвшинд хүрч 2025 он гарснаас хойш 8.8%-иар сулраад байна. Goldman Sachs-ийн шинжээчид долларын индексийн 90, 95, 101 болон 107 гэсэн үнийн түвшнүүд гол анхаарал хандуулах бүс гэж үзэж байгаа бөгөөд одоогийн уналтын шалтгааныг дараах байдлаар тайлбарлаж байна: • Худалдааны бодлого ба тарифууд – АНУ-ын Ерөнхийлөгчийн зүгээс өргөн хүрээтэй тарифуудыг хэрэгжүүлж эхэлсэн нь, дэлхийн эдийн засгийн өсөлтөд сөргөөр нөлөөлөх нөхцөл байдалд хүргэж байна. Энэ нь хөрөнгө оруулагчдын итгэлийг бууруулж, долларын ханшид дарамт учруулж байгаа",
      img: "/card_img_2.png",
    },
    {
      id: "3",
      title: "АНУ-д 3 дугаар сарын байдлаар зэсийн импорт 600% өслөө",
      description:
        "АНУ-ын ерөнхийлөгч Д.Трамд өнгөрсөн 2 дугаар сард худалдааны яамандаа зэсийн импортын тарифын асуудлаар судалгаа хийхийг үүрэгдсэний дараа 3 дугаар сард тус улсын зэсийн импорт 70,000 тонноос 500,000 орчим тоннд хүрч 600 гаруй хувиар өссөн тухай Mercuria Energy Group мэдээллээ. АНУ-ын зэсийн жилийн хэрэглээ 1.6 сая тоннд хүрсэн ч дотоодын үйлдвэрлэл жилийн нийт хэрэглээний 50%-ийг л хангахуйц байгаа тул тус улсын засгийн газрын зүгээс дотоодын үйлдвэрлэлийг сэргээх зорилгоор тариф ногдуулахаар төлөвлөж байгаа аж. Иймд тариф хэрэгжихээс урьтан импортын хэмжээ өссөн бөгөөд Нью-Йоркийн Comex дээрх үнэ Лондонгийн металлын биржийн үнээс давсан нь арбитражийн боломжийг ч үүсгээд байгаа аж. Хэрэв тариф хэрэгжвэл зэсийн үнэ 12,000-13,000 ам.долларт хүрч өсөх магадлалтай байна.",
      img: "/card_img_3.png",
    },
    {
      id: "4",
      title: "Ам.долларын индекс сүүлийн гурван жилийн доод түвшинд хүрлээ",
      description:
        "Тариф, эдийн засгийн хэтийн төлөв болон Холбооны нөөцийн сангийн хараат бус байдал алдагдах зэрэг хүчин зүйлс нь хөрөнгө оруулагчдын хүлээлтийг бууруулж буйтай холбоотойгоор ам.долларын индекс сүүлийн гурван жилийн доод түвшинд хүрч 2025 он гарснаас хойш 8.8%-иар сулраад байна. Goldman Sachs-ийн шинжээчид долларын индексийн 90, 95, 101 болон 107 гэсэн үнийн түвшнүүд гол анхаарал хандуулах бүс гэж үзэж байгаа бөгөөд одоогийн уналтын шалтгааныг дараах байдлаар тайлбарлаж байна: • Худалдааны бодлого ба тарифууд – АНУ-ын Ерөнхийлөгчийн зүгээс өргөн хүрээтэй тарифуудыг хэрэгжүүлж эхэлсэн нь, дэлхийн эдийн засгийн өсөлтөд сөргөөр нөлөөлөх нөхцөл байдалд хүргэж байна. Энэ нь хөрөнгө оруулагчдын итгэлийг бууруулж, долларын ханшид дарамт учруулж байгаа",
      img: "/card_img_2.png",
    },
  ]

  const sample: NewsItem[] = Array.from({ length: 6 }).map((_, i) => ({
    id: String(i + 1),
    title:
      "First Brands’ Implosion Is Ripping Through Private Credit – And Lenders Are Scrambling To Contain The Fallout",
    timeAgo: "2 HOURS AGO",
    image: "https://picsum.photos/200/300", // replace with your src
  }))

  return (
    <>
      <SmallHero />
      <section className='bg-[#050505] py-10 px-6 md:px-12 md:p-[100px] '>
        <div className='max-w-[1280px] mx-auto'>
          <div className='  grid grid-cols-1 md:grid-cols-3 gap-[50px]'>
            {news.map((news, index) => {
              if (index === 0)
                return (
                  <Link
                    href={`/newsInsight/${news.id}`}
                    key={index}
                    className='group block h-full max-h-[380px] focus:outline-none md:col-span-3'>
                    <motion.article
                      whileHover={{ y: -2 }}
                      transition={{ type: "spring", stiffness: 260, damping: 22 }}
                      className={clsx(
                        "h-full rounded-[30px] p-3 md:p-4 ",
                        "bg-[linear-gradient(#171717,#111111)] border border-[#434343]",
                        "shadow-[inset_0_1px_0_rgba(255,255,255,.06)]",
                        "flex flex-col md:flex-row md:gap-4"
                      )}>
                      {/* Image */}
                      <div
                        className={clsx(
                          "relative overflow-hidden w-1/2 rounded-[15px]",
                          "aspect-[4/3]"
                        )}>
                        {news.img ? (
                          <Image
                            src={news.img}
                            alt={news.title}
                            fill
                            sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
                            className='object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]'
                            priority={false}
                          />
                        ) : (
                          <div className='absolute inset-0 bg-gradient-to-br from-slate-600 to-slate-800' />
                        )}

                        {/* subtle inner border/highlight to match mock */}
                        <div className='pointer-events-none absolute inset-0 rounded-[15px] ring-1 ring-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,.08)]' />
                      </div>
                      <div className='w-1/2 font-[norms-pro] sm:flex sm:flex-col sm:justify-evenly'>
                        {/* Text */}
                        <h3 className='mt-4 text-white leading-tight font-bold text-[18px] sm:text-[36px]'>
                          {news.title}
                        </h3>
                        <p
                          className='mt-2 text-white/60 text-sm leading-6 line-clamp-2 sm:line-clamp-6 font-[450] font-[norms-pro]'
                          dangerouslySetInnerHTML={{ __html: news.description }}
                        />
                      </div>
                    </motion.article>
                  </Link>
                )

              return <NewsCard key={index} {...news} />
            })}
          </div>
        </div>
      </section>
      <section className='bg-[#121212] min-h-[756px] py-24'>
        <div className='max-w-[1280px] mx-auto w-full flex gap-8'>
          <div className='w-3/5 aspect-[4/3] bg-[linear-gradient(#262626,#111111,#262626)] rounded-[25px] p-7 '>
            <div className='rounded-[15px] overflow-hidden relative w-full aspect-[4/3]'>
              <Image
                src={"/outlook-sample.png"}
                alt={"outlook image"}
                fill
                sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
                className='object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03] '
                priority={false}
              />
            </div>
          </div>
          <div className='flex flex-col justify-between'>
            <div className=' mt-16 flex flex-col gap-6'>
              <div className='text-4xl uppercase text-whit whitespace-pre font-[benzin-extraBold]'>
                {"2025 September \n& FUTURE"}
              </div>
              <div className='font-[norms-pro] underline text-2xl font-[450]'>
                Global Outlook 09/2025
              </div>
            </div>
            <div className='flex gap-3.5 font-[norms-pro] font-semibold mb-20'>
              <div className='px-5 py-2.5 rounded-[15px] border border-[#E89548] cursor-pointer'>
                2024 Global Outlook
              </div>
              <div className='px-5 py-2.5 rounded-[15px] border border-[#E89548] cursor-pointer bg-[linear-gradient(#E89548,#E87811)]'>
                2025 Global Outlook
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='mx-auto max-w-[1112px] px-6 md:px-0 py-10'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
          <NewsletterList items={sample.slice(0, 4)} />

          <LatestNewsPanel
            items={sample}
            className='lg:ml-2'
            maxHeight={760} // tweak to match your mock
          />
        </div>
      </section>
      <ContactUsForm />
    </>
  )
}

export default NewsInsightPage
