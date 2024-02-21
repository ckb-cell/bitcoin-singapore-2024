import 'server-only';

const aganda = {
  en: () => import('../locals/en/aganda.json').then((module) => module.default),
  zh: () => import('../locals/zh/aganda.json').then((module) => module.default),
};

export const getAgenda = async (locale: keyof typeof aganda) => aganda[locale]();

const speakers = {
  en: () => import('../locals/en/speakers.json').then((module) => module.default),
  zh: () => import('../locals/zh/speakers.json').then((module) => module.default),
};

export const getSpeakers = async (locale: keyof typeof speakers) => speakers[locale]();

const dictionaries = {
  en: () => import('../locals/en.json').then((module) => module.default),
  zh: () => import('../locals/zh.json').then((module) => module.default),
};

export const getDictionary = async (locale: keyof typeof dictionaries) => {
  return dictionaries[locale]();
};
