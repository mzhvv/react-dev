import { Link } from 'react-router'
import { cva, type VariantProps } from 'class-variance-authority'

import type { NavigationSections as TNavigationSections } from '@navigation'

import type { buttonVariants as TbuttonVariants } from '@ui/components'
import { Button } from '@ui/components'

type Variant = 'sidebar' | 'page'

const navigationSectionsVariant = cva('', {
  variants: {
    variant: {
      page: '',
      sidebar: 'p-2',
    },
  },
})

const labelVariant = cva('text-sidebar-foreground/70 flex h-7 items-center px-2 text-xs', {
  variants: {
    variant: {
      page: '',
      sidebar: '',
    },
  },
})

const buttonVariantsMap = {
  page: { variant: 'ghost', size: 'sm', className: '' },
  sidebar: { variant: 'ghost', size: 'sm', className: 'w-full justify-start' },
} as const satisfies Record<Variant, VariantProps<typeof TbuttonVariants> & { className: string }>

interface NavigationSectionsProps {
  navigationSections: TNavigationSections
  variant: Variant
}

export const NavigationSections: React.FC<NavigationSectionsProps> = ({
  navigationSections,
  variant,
}) => {
  return navigationSections.map(object => (
    <div key={object.key} className={navigationSectionsVariant({ variant })}>
      <div className={labelVariant()}>{object.title}</div>
      <ul>
        {object.links.map(link => (
          <li key={link.path}>
            <Button asChild {...buttonVariantsMap[variant]}>
              <Link to={link.path}>
                {'icon' in link && link.icon && <link.icon />}
                {link.title}
              </Link>
            </Button>
          </li>
        ))}
      </ul>
    </div>
  ))
}
