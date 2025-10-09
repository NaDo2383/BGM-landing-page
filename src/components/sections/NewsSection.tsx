"use client"

import { useTranslations } from "next-intl"
import { ArrowBtn } from "../ui/ArrowBtn"
import NewsCard from "../ui/NewsCard"
import { NewsItem1 } from "@/types"

export default function NewsSection() {
  const t = useTranslations("news")

  // Mock data for now
  const news: NewsItem1[] = [
    {
      id: "1",
      title: "OINBASE – S&P 500 ИНДЕКСИЙН АНХНЫ КРИПТО БИРЖ БОЛЛОО",
      description:
        "АНУ-ын тэргүүлэгч криптовалютын бирж болох Coinbase Global Inc. (COIN.O) энэ сарын 19-нөөс эхлэн S&P 500 индексэд багтах болсноор, тус индексэд багтсан анхны крипто бирж болж, тус салбарын хувьд түүхэн үйл явдал тохиолоо...",
      img: "/card_img_1.png",
    },
    {
      id: "2",
      title: "Ам.долларын индекс сүүлийн гурван жилийн доод түвшинд хүрлээ",
      description:
        "Тариф, эдийн засгийн хэтийн төлөв болон Холбооны нөөцийн сангийн хараат бус байдал алдагдах зэрэг хүчин зүйлс нь хөрөнгө оруулагчдын хүлээлтийг бууруулж буйтай холбоотойгоор ам.долларын индекс сулраад байна...",
      img: "/card_img_2.png",
    },
    {
      id: "3",
      title: "АНУ-д 3 дугаар сарын байдлаар зэсийн импорт 600% өслөө",
      description:
        "Ерөнхийлөгчийн зүгээс тарифын талаар судалгаа хийх даалгавар өгснөөр 3-р сард зэсийн импорт огцом өсжээ...",
      img: "/card_img_3.png",
    },
    {
      id: "4",
      title: "АНУ-д 3 дугаар сарын байдлаар зэсийн импорт 600% өслөө",
      description:
        "Ерөнхийлөгчийн зүгээс тарифын талаар судалгаа хийх даалгавар өгснөөр 3-р сард зэсийн импорт огцом өсжээ...",
      img: "/card_img_3.png",
    },
    {
      id: "5",
      title: "АНУ-д 3 дугаар сарын байдлаар зэсийн импорт 600% өслөө",
      description:
        "Ерөнхийлөгчийн зүгээс тарифын талаар судалгаа хийх даалгавар өгснөөр 3-р сард зэсийн импорт огцом өсжээ...",
    },
  ]

  return (
    <section className='bg-[#020618] p-6 sm:p-10 lg:p-[0px]'>
      <div className='mx-auto max-w-[1240px] px-2 sm:px-4 flex flex-col gap-8 sm:gap-10 lg:gap-[50px]'>
        {/* Heading */}
        <div className='flex flex-col gap-2'>
          <div className='flex flex-wrap items-center justify-center gap-2 text-center font-[norms-pro] font-bold'>
            <h2 className=' text-white text-2xl sm:text-3xl lg:text-[40px] leading-tight'>
              {t("title1")}
            </h2>
          </div>
          <p className='text-center text-[#90A1B9] font-normal tracking-normal capitalize text-sm sm:text-base leading-relaxed max-w-4xl mx-auto'>
            {t("text")}
          </p>
        </div>

        {/* Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 auto-rows-fr]'>
          {news.map((item, i) => (
            <div
              key={item.id}
              className={`h-full ${i === 0 ? "sm:col-span-2 lg:col-span-2" : ""}`}>
              <NewsCard {...item} featured={i === 0} />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className='flex justify-center'>
          <div className='w-full sm:w-auto'>
            <ArrowBtn
              arrow_bg='black'
              onClick={() => alert("Go!")}
              className='w-full sm:w-auto'
              aria-label={t("seeMore")}>
              {t("seeMore")}
            </ArrowBtn>
          </div>
        </div>
      </div>
    </section>
  )
}
