import type { Product } from '@/types/product';
import { CareLevelIndicator } from './CareLevelIndicator';

interface SpeciesSpecsProps {
  product: Product;
  labels?: {
    heading?: string;
    careLevel?: string;
    minTankSize?: string;
    maxSize?: string;
    temperature?: string;
    phRange?: string;
    origin?: string;
    diet?: string;
    temperament?: string;
    lifespan?: string;
    galSuffix?: string;
  };
}

export function SpeciesSpecs({ product, labels = {} }: SpeciesSpecsProps) {
  const {
    heading = 'Species Specs',
    careLevel = 'Care Level',
    minTankSize = 'Min. Tank Size',
    maxSize = 'Max Size',
    temperature = 'Temperature',
    phRange = 'pH Range',
    origin = 'Origin',
    diet = 'Diet',
    temperament = 'Temperament',
    lifespan = 'Lifespan',
    galSuffix = 'gal',
  } = labels;

  const specs = [
    { label: careLevel, value: <CareLevelIndicator level={product.careLevel} label={product.careLevelLabel} /> },
    { label: minTankSize, value: `${product.tankSizeGallons} ${galSuffix}` },
    { label: maxSize, value: `${product.maxSizeInches}"` },
    { label: temperature, value: `${product.waterParameters.tempMin}–${product.waterParameters.tempMax}°F` },
    { label: phRange, value: `${product.waterParameters.phMin}–${product.waterParameters.phMax}` },
    { label: origin, value: product.origin },
    { label: diet, value: product.diet },
    { label: temperament, value: product.temperament },
    { label: lifespan, value: product.lifespan },
  ];

  return (
    <div className="bg-reef border border-mist rounded-md overflow-hidden">
      {/* Header */}
      <div className="bg-mist/50 px-5 py-3 flex items-center justify-between">
        <h2 className="font-heading text-[10px] font-bold tracking-wider text-wade uppercase">
          {heading}
        </h2>
        <span className="font-mono text-sku text-drift">{product.sku}</span>
      </div>

      {/* Specs grid — hairline dividers via gap on mist bg */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-px bg-mist">
        {specs.map((spec) => (
          <div key={spec.label} className="bg-surface p-4">
            <dt className="font-heading text-[10px] font-bold tracking-wider text-wade uppercase mb-1">
              {spec.label}
            </dt>
            <dd className="font-mono text-param text-ink">{spec.value}</dd>
          </div>
        ))}
      </div>
    </div>
  );
}
