// src/react-dev/shared/libs/theme/ui/hide-variants.tsx

import { Suspense, useState } from 'react'

import { cn } from '@ui/lib'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@ui/components/accordion'
import { Spinner } from '@ui/components/spinner'

export const HideVariantsAccordion: React.FC<{
  accordionTitle: string
  fallbackHeight?: string
  children: React.ReactNode
}> = ({ accordionTitle, fallbackHeight, children }) => {
  const [isVariantsOpen, setIsVariantsOpen] = useState(false)
  const onIsVariantsOpenChange = (value: string) => setIsVariantsOpen(!!value)

  return (
    <Accordion type='single' collapsible onValueChange={onIsVariantsOpenChange}>
      <AccordionItem
        value={`${accordionTitle.toLowerCase().replace(/\s+/g, '-')}-variants`}
        className='pb-[3px] data-[state=open]:border-b!'
      >
        <AccordionTrigger
          aria-label={`${isVariantsOpen ? 'Close' : 'Show'} "${accordionTitle}" variants`}
          title={`${isVariantsOpen ? 'Close' : 'Show'} "${accordionTitle}" variants`}
          className='text-foreground/70 p-2 text-xs font-medium'
        >
          <span>{`"${accordionTitle}" variants`}</span>
        </AccordionTrigger>
        <AccordionContent
          aria-label={`"${accordionTitle}" variants`}
          className='space-y-3 p-3 px-[3px]'
        >
          {isVariantsOpen && (
            <Suspense
              fallback={
                <div
                  role='status'
                  aria-label={`Loading "${accordionTitle}" variants`}
                  className={cn('flex items-center justify-center gap-2', fallbackHeight)}
                >
                  <Spinner aria-hidden='true' className='text-primary' />
                  <span>{`Loading "${accordionTitle}" variants`}</span>
                </div>
              }
            >
              {children}
            </Suspense>
          )}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
