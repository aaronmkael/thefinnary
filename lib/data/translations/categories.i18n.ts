/**
 * Locale-keyed category name translations.
 * English names are the canonical form used in slugs/data; other locales provide display overrides.
 */
export const categoryNames: Record<string, Record<string, string>> = {
  arowana: {
    en: 'Arowana', de: 'Arowana', nl: 'Arowana', fr: 'Arowana', es: 'Arowana',
    ja: 'アロワナ', pt: 'Arowana', ko: '아로와나', it: 'Arowana',
  },
  cichlid: {
    en: 'Cichlid', de: 'Buntbarsch', nl: 'Cichlide', fr: 'Cichlidé', es: 'Cíclido',
    ja: 'シクリッド', pt: 'Ciclídeo', ko: '시클리드', it: 'Ciclide',
  },
  angelfish: {
    en: 'Angelfish', de: 'Kaiserfisch', nl: 'Maanvis', fr: 'Scalaire', es: 'Pez Ángel',
    ja: 'エンゼルフィッシュ', pt: 'Peixe-anjo', ko: '엔젤피시', it: 'Pesce Angelo',
  },
  tang: {
    en: 'Tang', de: 'Doktorfisch', nl: 'Doktersvis', fr: 'Chirurgien', es: 'Cirujano',
    ja: 'ハギ', pt: 'Cirurgião', ko: '탱', it: 'Pesce Chirurgo',
  },
  pufferfish: {
    en: 'Pufferfish', de: 'Kugelfisch', nl: 'Kogelvis', fr: 'Poisson-globe', es: 'Pez Globo',
    ja: 'フグ', pt: 'Baiacu', ko: '복어', it: 'Pesce Palla',
  },
  catfish: {
    en: 'Catfish', de: 'Wels', nl: 'Meerval', fr: 'Poisson-chat', es: 'Bagre',
    ja: 'ナマズ', pt: 'Bagre', ko: '메기', it: 'Pesce Gatto',
  },
  discus: {
    en: 'Discus', de: 'Diskus', nl: 'Discus', fr: 'Discus', es: 'Disco',
    ja: 'ディスカス', pt: 'Disco', ko: '디스커스', it: 'Discus',
  },
  stingray: {
    en: 'Stingray', de: 'Stechrochen', nl: 'Pijlstaartrog', fr: 'Raie', es: 'Raya',
    ja: 'エイ', pt: 'Arraia', ko: '가오리', it: 'Razza',
  },
  goby: {
    en: 'Goby', de: 'Grundel', nl: 'Grondel', fr: 'Gobie', es: 'Gobio',
    ja: 'ハゼ', pt: 'Góbio', ko: '망둑어', it: 'Ghiozzo',
  },
  wrasse: {
    en: 'Wrasse', de: 'Lippfisch', nl: 'Lipvis', fr: 'Labre', es: 'Lábrido',
    ja: 'ベラ', pt: 'Bodião', ko: '놀래기', it: 'Labride',
  },
  clownfish: {
    en: 'Clownfish', de: 'Clownfisch', nl: 'Clownvis', fr: 'Poisson-clown', es: 'Pez Payaso',
    ja: 'クマノミ', pt: 'Peixe-palhaço', ko: '흰동가리', it: 'Pesce Pagliaccio',
  },
  butterflyfish: {
    en: 'Butterflyfish', de: 'Falterfisch', nl: 'Vlindersvis', fr: 'Poisson-papillon', es: 'Pez Mariposa',
    ja: 'チョウチョウウオ', pt: 'Peixe-borboleta', ko: '나비고기', it: 'Pesce Farfalla',
  },
  triggerfish: {
    en: 'Triggerfish', de: 'Drückerfisch', nl: 'Trekkervis', fr: 'Baliste', es: 'Pez Ballesta',
    ja: 'モンガラカワハギ', pt: 'Peixe-porco', ko: '방아쇠고기', it: 'Pesce Balestra',
  },
  lionfish: {
    en: 'Lionfish', de: 'Rotfeuerfisch', nl: 'Koraalduivel', fr: 'Rascasse volante', es: 'Pez León',
    ja: 'ミノカサゴ', pt: 'Peixe-leão', ko: '쏠배감펭', it: 'Pesce Leone',
  },
  eel: {
    en: 'Eel', de: 'Aal', nl: 'Aal', fr: 'Anguille', es: 'Anguila',
    ja: 'ウナギ', pt: 'Enguia', ko: '뱀장어', it: 'Anguilla',
  },
  grouper: {
    en: 'Grouper', de: 'Zackenbarsch', nl: 'Tandbaars', fr: 'Mérou', es: 'Mero',
    ja: 'ハタ', pt: 'Garoupa', ko: '능성어', it: 'Cernia',
  },
  betta: {
    en: 'Betta', de: 'Kampffisch', nl: 'Siamese kempvis', fr: 'Combattant', es: 'Betta',
    ja: 'ベタ', pt: 'Betta', ko: '베타', it: 'Betta',
  },
  seahorse: {
    en: 'Seahorse', de: 'Seepferdchen', nl: 'Zeepaardje', fr: 'Hippocampe', es: 'Caballito de Mar',
    ja: 'タツノオトシゴ', pt: 'Cavalo-marinho', ko: '해마', it: 'Cavalluccio Marino',
  },
  flowerhorn: {
    en: 'Flowerhorn', de: 'Flowerhorn', nl: 'Flowerhorn', fr: 'Flowerhorn', es: 'Flowerhorn',
    ja: 'フラワーホーン', pt: 'Flowerhorn', ko: '플라워혼', it: 'Flowerhorn',
  },
  'wolf-fish': {
    en: 'Wolf Fish', de: 'Wolfsfisch', nl: 'Wolfsvis', fr: 'Poisson-loup', es: 'Pez Lobo',
    ja: 'ウルフフィッシュ', pt: 'Peixe-lobo', ko: '늑대고기', it: 'Pesce Lupo',
  },
};

/**
 * Get localized category name, falling back to English.
 */
export function getCategoryName(slug: string, lang: string): string {
  return categoryNames[slug]?.[lang] ?? categoryNames[slug]?.en ?? slug;
}
