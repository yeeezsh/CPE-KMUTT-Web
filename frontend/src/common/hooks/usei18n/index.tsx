import { useState } from 'react';

import { useRouter } from 'next/router';

//TODO: refactor
export enum AppLanguage {
  TH = 'th',
  EN = 'en',
}

type usei18nType = { language: { lang: AppLanguage }; swap: () => void };

//TODO: add unit test
export default function usei18n(): usei18nType {
  const router = useRouter();
  const [appLanguage, setAppLanguage] = useState({ lang: router.locale as AppLanguage });

  function swapLanguage() {
    if (appLanguage.lang === AppLanguage.EN) {
      setAppLanguage({ lang: AppLanguage.TH });
      router.push(router.asPath, undefined, { locale: AppLanguage.TH });
      return;
    }

    if (appLanguage.lang === AppLanguage.TH) {
      setAppLanguage({ lang: AppLanguage.EN });
      router.push(router.asPath, undefined, { locale: AppLanguage.EN });
      return;
    }
  }

  return {
    language: appLanguage,
    swap: swapLanguage,
  };
}
