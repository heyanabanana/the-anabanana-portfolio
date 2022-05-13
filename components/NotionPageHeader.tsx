import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import cs from 'classnames';
import { IoSunnyOutline } from '@react-icons/all-files/io5/IoSunnyOutline';
import { IoMoonSharp } from '@react-icons/all-files/io5/IoMoonSharp';
import { Header, Breadcrumbs, Search, useNotionContext } from 'react-notion-x';
import * as types from 'notion-types';

import { useDarkMode } from 'lib/use-dark-mode';
import { navigationStyle, navigationLinks, isSearchEnabled } from 'lib/config';

import { MobileNav } from 'components/MobileNav';

import styles from './styles.module.css';
import Logo from 'public/Logo.png';
import LogoDark from 'public/LogoDark.png';


const ToggleThemeButton = () => {
  const [hasMounted, setHasMounted] = React.useState(false);
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  React.useEffect(() => {
    setHasMounted(true);
  }, []);

  const onToggleTheme = React.useCallback(() => {
    toggleDarkMode();
  }, [toggleDarkMode]);

  return (
    <div className={cs('breadcrumb', 'button', !hasMounted && styles.hidden)} onClick={onToggleTheme}>
      {hasMounted && isDarkMode ? <IoMoonSharp /> : <IoSunnyOutline />}
    </div>
  );
};

export const NotionPageHeader: React.FC<{
  block: types.CollectionViewPageBlock | types.PageBlock;
}> = ({ block }) => {
  const { components, mapPageUrl } = useNotionContext();
  const { isDarkMode } = useDarkMode();

  if (navigationStyle === 'default') {
    return <Header block={block} />;
  }

  return (
    <header className="notion-header flex items-center w-full justify-center">
      <div className="flex justify-between items-center max-w-6xl w-full">
        <Link href="/">
          <div className="ml-3 cursor-pointer ">
            {isDarkMode ? <Image width="205px" height="22px" src={LogoDark} />
: <Image width="205px" height="22px" src={Logo} />
}
          </div>
        </Link>
        <nav>
          <div className="flex items-center text-base leading-5 px-6">
            <div className="hidden md:block">
              {navigationLinks
                ?.filter((n: any) => n.show)
                .map((link, index) => {
                  if (!link.pageId && !link.url) {
                    return null;
                  }

                  if (link.pageId) {
                    return (
                      <components.PageLink
                        href={mapPageUrl(link.pageId)}
                        key={index}
                        className={cs(styles.navLink, 'breadcrumb', 'button')}
                      >
                        {link.title}
                      </components.PageLink>
                    );
                  } else {
                    return (
                      <components.Link href={link.url} key={index} className={cs(styles.navLink, 'breadcrumb', 'button')}>
                        {link.title}
                      </components.Link>
                    );
                  }
                })
                .filter(Boolean)}
            </div>
            <ToggleThemeButton />
            <MobileNav />
            {isSearchEnabled && <Search block={block} title={null} />}
          </div>
        </nav>
      </div>
    </header>
  );
};
