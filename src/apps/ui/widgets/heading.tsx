import { Link } from 'react-router'
import { useConstantsUiNavigation } from '../shared/constants/navigation'
import { navigationUiDomain } from '../shared/navigation'

export const ReactdevHeading = () => {
  const { CONSTANTS_UI_LINK_DOMAIN } = useConstantsUiNavigation()
  const { absolutePath, title } = CONSTANTS_UI_LINK_DOMAIN[navigationUiDomain]
  return (
    <h1>
      <Link to={absolutePath}>{title}</Link>
    </h1>
  )
}
