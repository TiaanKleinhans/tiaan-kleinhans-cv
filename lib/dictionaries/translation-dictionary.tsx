// lib/dictionary.ts (Example)

import { AvailableTranslations } from '@/constants/cv-translations-details';
import 'server-only'; // Ensure this code only runs on the server

export const translationDictionary = Object.fromEntries(
  AvailableTranslations.map((translation) => [
    translation.code,
    () => import(`@/messages/${translation.code}.json`).then((module) => module.default),
  ])
);

export const getDictionary = async (locale: keyof typeof translationDictionary) => {
  return translationDictionary[locale]();
};

export type Locale = keyof typeof translationDictionary;
