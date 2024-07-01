import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'What is GSTC?',
      answer:
        'GSTC, or Global Sustainable Tourism Council, is an organization that develops global standards for sustainable tourism and provides certification for destinations, hotels, and tour operators that comply with these standards.',
    },
    {
      question: 'Why is it important to have sustainable tourism standards?',
      answer: 'Sustainable tourism standards help reduce the negative impacts of tourism on the environment, local cultures, and economies. They also promote socially and environmentally responsible practices and enhance tourist experiences.',
    },
    {
      question: 'How does GSTC influence the tourism industry?',
      answer:
        'GSTC influences the tourism industry by promoting sustainable practices through certification and advocacy. It encourages positive changes in how destinations and tourism businesses operate.',
    },
  ],
  [
    {
      question: 'What are GSTC primary focuses in sustainable tourism development?',
      answer:
        'GSTC focuses on ensuring that tourism activities support environmental protection, respect local cultures, and provide fair economic benefits to local communities.',
    },
    {
      question:
        'How can a destination or tourism business obtain GSTC certification?',
      answer:
        'To obtain GSTC certification, a destination or tourism business must align its practices with the criteria set by GSTC. The process involves independent evaluation of compliance with the established standards.',
    },
    {
      question:
        'How does GSTC develop sustainable tourism standards?',
      answer:
        'GSTC develops sustainable tourism standards through a rigorous process involving input from experts, stakeholders, and public consultation. These standards aim to address environmental, socio-cultural, and economic aspects of tourism sustainability.',
    },
  ],
  [
    {
      question: 'How does GSTC collaborate with governments and other organizations to promote sustainable tourism?',
      answer:
        'GSTC collaborates with governments, NGOs, and industry stakeholders to advocate for policies that promote sustainable tourism. It provides guidance and support for destinations and businesses to integrate sustainability into their operations and policies.',
    },
    {
      question: 'sdfsdfbshdcknsgvkhlfdgdnvllh?',
      answer:
        'xxxxxxxxxxxxxxxxxxxxxxxxxx.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            If you can’t find what you’re looking for, email our support team
            and if you’re lucky someone will get back to you.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
