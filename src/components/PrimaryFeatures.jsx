'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import clsx from 'clsx'
import ImageSlide1 from '@/images/slides/1.png'
import ImageSlide2 from '@/images/slides/2.png'
import ImageSlide3 from '@/images/slides/3.png'
import ImageSlide4 from '@/images/slides/4.png'
import ImageSlide5 from '@/images/slides/5.png'
import { Button } from '@material-tailwind/react'
import { Carousel } from 'flowbite-react'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-features.jpg'
import screenshotExpenses from '@/images/screenshots/expenses.png'
import screenshotPayroll from '@/images/screenshots/payroll.png'
import screenshotReporting from '@/images/screenshots/reporting.png'
import screenshotVatReturns from '@/images/screenshots/vat-returns.png'

const features = [
  {
    title: 'abcabc',
    description:
      "ldvlscxv.xfg,hdfkgjdlfjgs.fdjglsdfgdsfjg",
    image: screenshotPayroll,
  },
  {
    title: 'abcabcabc',
    description:
      "lszhlshdfglsdhgsfhfglasgld.",
    image: screenshotExpenses,
  },
  {
    title: 'abcabc',
    description:
      "lshzlghs,df.zshflsdhflhsldgfszdbgzsd.",
    image: screenshotVatReturns,
  },
  {
    title: 'abcabcabc',
    description:
      'dhflashfslkdfhlsaKFHGBSLDBFLSKD.',
    image: screenshotReporting,
  },
]

export function PrimaryFeatures() {
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <section
      id="features"
      aria-label="Features for running your books"
      className="relative overflow-hidden bg-[#f8fafc] pb-5 pt-5 sm:py-32 md:pb-28 md:pt-20"
    >
      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="font-display text-3xl tracking-tight text-[#0f172a] sm:text-4xl md:text-5xl">
            Global Sustainable GSTC 2024
          </h2>

          <p className="mb-5 mt-6 text-lg tracking-tight text-[#0f172a]">
            Tourism conference list - Singapore
          </p>
        </div>
        {/* //started */}
        <div className="h-[240px] md:h-[580px]">
          <Carousel>
            <Image
              src={ImageSlide1}
              alt=""
              style={{
                height: 'auto',
                objectFit: 'contain',
              }}
              // sizes="52.75rem"
            />
            <Image
              src={ImageSlide2}
              alt=""
              style={{
                height: 'auto',
                objectFit: 'contain',
              }}
              // sizes="52.75rem"
            />
            <Image
              src={ImageSlide3}
              alt=""
              style={{
                height: 'auto',
                objectFit: 'contain',
              }}
              // sizes="52.75rem"
            />
            <Image
              src={ImageSlide4}
              alt=""
              style={{
                height: 'auto',
                objectFit: 'contain',
              }}
              // sizes="52.75rem"
            />
            <Image
              src={ImageSlide5}
              alt=""
              style={{
                height: 'auto',
                objectFit: 'contain',
              }}
              // sizes="52.75rem"
            />
          </Carousel>
        </div>
        {/* //end */}
      </Container>
    </section>
  )
}
