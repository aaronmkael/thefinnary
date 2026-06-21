'use client';

interface ProductFilterProps {
  onSortChange: (sort: string) => void;
  onSearchChange: (query: string) => void;
  resultCount: number;
  sort: string;
  labels?: {
    searchPlaceholder?: string;
    sortNameAZ?: string;
    sortPriceHighLow?: string;
    sortPriceLowHigh?: string;
    sortCareLevel?: string;
    resultCount?: string;
  };
}

export function ProductFilter({
  onSortChange,
  onSearchChange,
  resultCount,
  sort,
  labels = {},
}: ProductFilterProps) {
  const {
    searchPlaceholder = 'Search species...',
    sortNameAZ = 'Name: A–Z',
    sortPriceHighLow = 'Price: High to Low',
    sortPriceLowHigh = 'Price: Low to High',
    sortCareLevel = 'Care Level',
    resultCount: resultCountLabel = '{count} species',
  } = labels;

  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
      <div className="relative flex-1 min-w-0">
        <input
          type="text"
          placeholder={searchPlaceholder}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full font-heading text-[15px] text-ink bg-surface border border-mist rounded-xs h-[44px] px-4 focus:outline-none focus:ring-2 focus:ring-lagoon focus:ring-offset-2 transition-colors placeholder:text-drift placeholder:italic hover:border-shallows"
        />
      </div>

      <select
        value={sort}
        onChange={(e) => onSortChange(e.target.value)}
        className="font-heading text-[15px] text-ink bg-surface border border-mist rounded-xs h-[44px] px-4 focus:outline-none focus:ring-2 focus:ring-lagoon focus:ring-offset-2 transition-colors appearance-none cursor-pointer sm:w-auto"
      >
        <option value="name-asc">{sortNameAZ}</option>
        <option value="price-desc">{sortPriceHighLow}</option>
        <option value="price-asc">{sortPriceLowHigh}</option>
        <option value="care-level">{sortCareLevel}</option>
      </select>

      <p className="font-mono text-param text-drift whitespace-nowrap">
        {resultCountLabel.replace('{count}', String(resultCount))}
      </p>
    </div>
  );
}
