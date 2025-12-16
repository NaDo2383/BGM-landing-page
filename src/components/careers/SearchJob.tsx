import { useTranslations } from "next-intl"
import Link from "next/link"

export default function SearchJob() {
  const t = useTranslations("careers")

  return (
    <div className='max-w-7xl mx-auto font-[norms-pro] flex flex-col items-center lg:flex-col justify-center my-12 sm:my-16 md:my-20 gap-10 sm:gap-14 md:gap-16 px-4 sm:px-6'>
      <div className='flex flex-col gap-12 justify-start w-full'>
        <div>
          <div className='font-medium text-3xl sm:text-4xl md:text-5xl bg-[linear-gradient(92.65deg,#FFFFFF,#AAAAAA)] bg-clip-text text-transparent'>
            {t("search-job")}
          </div>
          <div className='font-[450] text-lg sm:text-2xl md:text-[32px] whitespace-pre text-[#AFAFAF] mt-3.5'>
            {t("search-job-text")}
          </div>
        </div>
        <Link href={"/careers/search-job"} className='w-fit'>
          <div className='py-2 sm:py-2.5 px-3 sm:px-5 cursor-pointer text-white rounded-[15px] w-fit mx-auto bg-[radial-gradient(52.44%_127.23%_at_0%_0%,_#FFBD80_0%,#E46F03_77.25%)] text-sm sm:text-base'>
            {t("apply-now")}
          </div>
        </Link>
      </div>
      <div></div>
    </div>
  )
}
