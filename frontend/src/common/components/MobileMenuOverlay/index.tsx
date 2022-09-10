import useMobileMenu from 'common/hooks/useMobileMenu';

import { Overlay } from './styled';

export default function MobileMenuOverlay(): JSX.Element {
  const { isMobileMenuOpened, closeMobileMenu } = useMobileMenu();

  return <Overlay $isShow={isMobileMenuOpened} onClick={closeMobileMenu} />;
}
