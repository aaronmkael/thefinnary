/**
 * Locale-keyed product common-name overrides.
 * Most fish keep their English common names internationally, but some have
 * well-established local names — especially in Japanese, Korean, and German markets.
 * Only products with meaningful locale-specific names are listed here; others fall
 * back to the English commonName via getProductName().
 */

export const productNames: Record<string, Record<string, string>> = {
  'platinum-arowana': {
    ja: 'プラチナアロワナ',
    ko: '플래티넘 아로와나',
    de: 'Platin-Arowana',
    pt: 'Arowana Platina',
    fr: 'Arowana Platine',
    es: 'Arowana Platino',
    it: 'Arowana Platino',
  },
  'golden-arowana': {
    ja: 'ゴールデンアロワナ',
    ko: '골든 아로와나',
    de: 'Goldener Arowana',
    pt: 'Arowana Dourado',
    fr: 'Arowana Doré',
    es: 'Arowana Dorado',
    it: 'Arowana Dorato',
  },
  'red-arowana-blood-red': {
    ja: '血紅アロワナ',
    ko: '블러드 레드 아로와나',
    de: 'Roter Arowana (Blutrot)',
    pt: 'Arowana Vermelho-Sangue',
    fr: 'Arowana Rouge Sang',
    es: 'Arowana Rojo Sangre',
    it: 'Arowana Rosso Sangue',
  },
  'super-red-arowana': {
    ja: 'スーパーレッドアロワナ',
    ko: '수퍼 레드 아로와나',
    de: 'Super-Roter Arowana',
    pt: 'Arowana Super Vermelho',
    fr: 'Arowana Super Rouge',
    es: 'Arowana Super Rojo',
    it: 'Arowana Super Rosso',
  },
  'short-body-albino-silver-arowana': {
    ja: 'ショートボディアルビノシルバーアロワナ',
    ko: '숏바디 알비노 실버 아로와나',
    de: 'Kurzkörper-Albino-Silber-Arowana',
  },
  'gem-tang': {
    ja: 'ジェムタン',
    ko: '젬탱',
    de: 'Juwelen-Doktorfisch',
    fr: 'Chirurgien gemme',
    nl: 'Juwelen doktersvis',
  },
  'peppermint-angelfish': {
    ja: 'ペパーミントエンゼルフィッシュ',
    ko: '페퍼민트 엔젤피시',
    de: 'Pfefferminz-Kaiserfisch',
    fr: 'Scalaire menthe poivrée',
  },
  'flowerhorn-cichlid': {
    ja: 'フラワーホーンシクリッド',
    ko: '플라워혼 시클리드',
    de: 'Flowerhorn-Buntbarsch',
    fr: 'Cichlidé Flowerhorn',
    nl: 'Flowerhorn cichlide',
    es: 'Cíclido Flowerhorn',
    pt: 'Ciclídeo Flowerhorn',
    it: 'Ciclide Flowerhorn',
  },
  'black-diamond-stingray': {
    ja: 'ブラックダイヤモンドスティングレイ',
    ko: '블랙 다이아몬드 가오리',
    de: 'Schwarzer Diamant-Stechrochen',
    pt: 'Arraia Diamante Negro',
    fr: 'Raie diamant noir',
    es: 'Raya Diamante Negro',
    it: 'Razza Diamante Nero',
  },
  'motoro-stingray': {
    ja: 'モトロスティングレイ',
    ko: '모토로 가오리',
    de: 'Motoro-Stechrochen',
    pt: 'Arraia Motoro',
  },
  'blue-diamond-discus': {
    ja: 'ブルーダイヤモンドディスカス',
    ko: '블루 다이아몬드 디스커스',
    de: 'Blauer Diamant-Diskus',
    pt: 'Disco Diamante Azul',
    fr: 'Discus Diamant Bleu',
    es: 'Disco Diamante Azul',
    it: 'Discus Diamante Blu',
  },
  'pigeon-blood-discus': {
    ja: 'ピジョンブラッドディスカス',
    ko: '피전 블러드 디스커스',
    de: 'Taubenblut-Diskus',
    pt: 'Disco Sangue de Pombo',
    fr: 'Discus Sang de Pigeon',
  },
  'cobalt-blue-discus': {
    ja: 'コバルトブルーディスカス',
    ko: '코발트 블루 디스커스',
    de: 'Kobaltblauer Diskus',
  },
  'red-turquoise-discus': {
    ja: 'レッドターコイズディスカス',
    ko: '레드 터콰이즈 디스커스',
    de: 'Roter Türkis-Diskus',
  },
  'fahaka-pufferfish': {
    ja: 'ファハカフグ',
    ko: '파하카 복어',
    de: 'Fahaka-Kugelfisch',
    fr: 'Poisson-globe Fahaka',
    nl: 'Fahaka kogelvis',
  },
  'mbu-pufferfish': {
    ja: 'ムブフグ',
    ko: '음부 복어',
    de: 'Mbu-Kugelfisch',
    fr: 'Poisson-globe Mbu',
  },
  'red-tail-catfish': {
    ja: 'レッドテールキャットフィッシュ',
    ko: '레드테일 메기',
    de: 'Rotschanz-Wels',
    pt: 'Pirarara',
    fr: 'Poisson-chat à queue rouge',
    es: 'Bagre Cola Roja',
    nl: 'Roodstaartmeerval',
    it: 'Pesce Gatto Coda Rossa',
  },
  'red-bellied-piranha': {
    ja: 'レッドベリーピラニア',
    ko: '붉은배 피라냐',
    de: 'Roter Piranha',
    pt: 'Piranha Vermelha',
    fr: 'Piranha rouge',
    es: 'Piraña Roja',
    it: 'Piranha Rosso',
  },
  'electric-eel': {
    ja: 'デンキウナギ',
    ko: '전기뱀장어',
    de: 'Zitteraal',
    pt: 'Poraquê',
    fr: 'Anguille électrique',
    es: 'Anguila Eléctrica',
    nl: 'Sidderaal',
    it: 'Anguilla Elettrica',
  },
  'black-ghost-knife-fish': {
    ja: 'ブラックゴーストナイフフィッシュ',
    ko: '블랙 고스트 나이프피시',
    de: 'Schwarzer Geistermesserfisch',
    pt: 'Ituí-Cavalo',
  },
  'clown-loach': {
    ja: 'クラウンローチ',
    ko: '클라운 로치',
    de: 'Prachtschmerle',
    nl: 'Clownbotia',
    fr: 'Loche clown',
    it: 'Botia Pagliaccio',
  },
  'zebra-pleco': {
    ja: 'ゼブラプレコ',
    ko: '제브라 플레코',
    de: 'Zebra-Harnischwels',
    pt: 'Cascudo Zebra',
  },
  'arapaima': {
    ja: 'ピラルクー',
    ko: '아라파이마',
    de: 'Arapaima',
    pt: 'Pirarucu',
    fr: 'Arapaïma',
  },
  'lungfish': {
    ja: 'ハイギョ',
    ko: '폐어',
    de: 'Lungenfisch',
    pt: 'Piramboia',
    fr: 'Dipneuste',
    es: 'Pez Pulmonado',
    it: 'Pesce Polmonato',
  },
  'elephantnose-fish': {
    ja: 'エレファントノーズフィッシュ',
    ko: '코끼리코 물고기',
    de: 'Elefantenrüsselfisch',
    fr: 'Poisson-éléphant',
    es: 'Pez Elefante',
    nl: 'Olifantneus',
    it: 'Pesce Elefante',
  },
  'platinum-white-betta': {
    ja: 'プラチナホワイトベタ',
    ko: '플래티넘 화이트 베타',
    de: 'Platin-Weißer Kampffisch',
    fr: 'Combattant blanc platine',
  },
  'neptune-grouper': {
    ja: 'ネプチューングルーパー',
    ko: '넵튠 그루퍼',
    de: 'Neptun-Zackenbarsch',
    fr: 'Mérou Neptune',
  },
  'altum-angelfish': {
    ja: 'アルタムエンゼルフィッシュ',
    ko: '알텀 엔젤피시',
    de: 'Hoher Segelflosser',
    fr: 'Scalaire Altum',
  },
  'clarion-angelfish': {
    ja: 'クラリオンエンゼルフィッシュ',
    ko: '클라리온 엔젤피시',
    de: 'Clarion-Kaiserfisch',
    fr: 'Scalaire de Clarion',
  },
};

/**
 * Get localized product name, falling back to English commonName.
 */
export function getProductName(slug: string, lang: string, fallback: string): string {
  return productNames[slug]?.[lang] ?? fallback;
}
