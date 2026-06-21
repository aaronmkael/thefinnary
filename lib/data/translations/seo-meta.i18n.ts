/**
 * Per-locale SEO title/description templates for key page types.
 * These override the generic patterns from getDictionary when richer locale-specific
 * meta is needed (e.g., different keyword order for Japanese SERPs).
 */

export const homeMeta: Record<string, { title: string; description: string }> = {
  en: {
    title: 'Rare Fish, Real Experts | The Fish Collection',
    description: 'The Fish Collection — 200+ exotic fish species from platinum arowana to gem tang. Expert care guides, live arrival guaranteed, free overnight shipping.',
  },
  de: {
    title: 'Seltene Fische, echte Experten | The Fish Collection',
    description: 'The Fish Collection — 200+ exotische Fischarten vom Platin-Arowana bis zum Gem Tang. Expertenpflegeguides, Lebendankunftsgarantie, kostenloser Overnight-Versand.',
  },
  nl: {
    title: 'Zeldzame vissen, echte experts | The Fish Collection',
    description: 'The Fish Collection — 200+ exotische vissoorten van platina arowana tot gem tang. Deskundige verzorgingsgidsen, levende aankomstgarantie, gratis overnachtverzending.',
  },
  fr: {
    title: 'Poissons rares, vrais experts | The Fish Collection',
    description: 'The Fish Collection — 200+ espèces de poissons exotiques, de l\'arowana platine au gem tang. Guides de soins experts, garantie d\'arrivée vivante, livraison express gratuite.',
  },
  es: {
    title: 'Peces raros, expertos reales | The Fish Collection',
    description: 'The Fish Collection — 200+ especies de peces exóticos, desde arowana platino hasta gem tang. Guías de cuidado expertas, garantía de llegada viva, envío nocturno gratuito.',
  },
  ja: {
    title: '希少な魚、本物の専門家 | The Fish Collection',
    description: 'The Fish Collection — プラチナアロワナからジェムタンまで200種以上のエキゾチックフィッシュ。専門家によるケアガイド、生体到着保証、送料無料の翌日配達。',
  },
  pt: {
    title: 'Peixes raros, especialistas reais | The Fish Collection',
    description: 'The Fish Collection — 200+ espécies de peixes exóticos, do arowana platina ao gem tang. Guias de cuidados especializados, garantia de chegada viva, frete expresso gratuito.',
  },
  ko: {
    title: '희귀어, 진정한 전문가 | The Fish Collection',
    description: 'The Fish Collection — 플래티넘 아로와나부터 젬 탱까지 200종 이상의 이국적인 물고기. 전문가 케어 가이드, 생체 도착 보장, 무료 익일 배송.',
  },
  it: {
    title: 'Pesci rari, veri esperti | The Fish Collection',
    description: 'The Fish Collection — 200+ specie di pesci esotici dall\'arowana platino al gem tang. Guide di cura esperte, garanzia di arrivo vivo, spedizione express gratuita.',
  },
};
