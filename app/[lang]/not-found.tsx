import Link from 'next/link';
import { getDictionary } from '@/lib/i18n/getDictionary';
import type { Lang } from '@/lib/seo/i18n';

export default async function NotFound() {
  const dict = await getDictionary('en' as Lang);

  return (
    <div className="max-w-narrow mx-auto px-5 py-24 md:py-40 text-center">
      <p className="font-mono text-price font-bold text-lagoon mb-4">{dict.notFound?.errorCode ?? '404'}</p>
      <h1 className="font-heading text-h1 font-bold text-ink mb-3">
        {dict.notFound?.pageNotFound ?? 'Page Not Found'}
      </h1>
      <p className="font-body text-base text-deep-text mb-10 max-w-[400px] mx-auto">
        {dict.notFound?.description ?? "The page you're looking for doesn't exist or has been moved. Let's get you back on track."}
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-3">
        <Link href="/en/" className="btn-primary">
          {dict.common?.returnHome ?? 'Return Home'}
        </Link>
        <Link href="/en/exotic-fish/" className="btn-secondary">
          {dict.common?.browseAllFish ?? 'Browse All Fish'}
        </Link>
      </div>
    </div>
  );
}
