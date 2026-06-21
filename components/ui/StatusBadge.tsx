interface StatusBadgeProps {
  inStock: boolean;
  stockCount: number;
  labels?: {
    soldOut?: string;
    lastOne?: string;
    countLeft?: string;
    inStock?: string;
  };
}

export function StatusBadge({ inStock, stockCount, labels = {} }: StatusBadgeProps) {
  const {
    soldOut = 'Sold Out',
    lastOne = 'Last One',
    countLeft = '{count} Left',
    inStock: inStockLabel = 'In Stock',
  } = labels;

  if (!inStock) {
    return (
      <span className="inline-flex items-center gap-1.5 font-mono text-[11px] font-semibold text-out-stock bg-out-stock-bg px-2 py-[3px] rounded-pill">
        <span className="block w-[5px] h-[5px] rounded-pill bg-out-stock" />
        {soldOut}
      </span>
    );
  }

  if (stockCount <= 3) {
    return (
      <span className="inline-flex items-center gap-1.5 font-mono text-[11px] font-semibold text-low-stock bg-low-stock-bg px-2 py-[3px] rounded-pill">
        <span className="block w-[5px] h-[5px] rounded-pill bg-low-stock" />
        {stockCount === 1 ? lastOne : countLeft.replace('{count}', String(stockCount))}
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1.5 font-mono text-[11px] font-semibold text-in-stock bg-in-stock-bg px-2 py-[3px] rounded-pill">
      <span className="block w-[5px] h-[5px] rounded-pill bg-in-stock" />
      {inStockLabel}
    </span>
  );
}
