'use client';

import { useState } from 'react';

interface ShareBarProps {
  title: string;
  labels?: {
    shareThisArticle?: string;
    copyLink?: string;
    copied?: string;
    shareOnTwitter?: string;
    shareOnFacebook?: string;
  };
}

export function ShareBar({ title, labels }: ShareBarProps) {
  const [copied, setCopied] = useState(false);

  const shareLabel = labels?.shareThisArticle ?? 'Share this article';
  const copyLabel = labels?.copyLink ?? 'Copy Link';
  const copiedLabel = labels?.copied ?? 'Copied!';
  const twitterLabel = labels?.shareOnTwitter ?? 'Share on X';
  const facebookLabel = labels?.shareOnFacebook ?? 'Share on Facebook';

  async function handleCopyLink() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback: do nothing
    }
  }

  function handleShare(platform: 'twitter' | 'facebook') {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(title);
    const shareUrl =
      platform === 'twitter'
        ? `https://x.com/intent/tweet?url=${url}&text=${text}`
        : `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    window.open(shareUrl, '_blank', 'noopener,noreferrer,width=600,height=400');
  }

  async function handleNativeShare() {
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({ title, url: window.location.href });
      } catch {
        // User cancelled
      }
    }
  }

  const canNativeShare = typeof navigator !== 'undefined' && typeof navigator.share === 'function';

  return (
    <div className="border-t border-b border-mist py-4 my-12 flex flex-wrap items-center gap-4">
      <span className="font-mono text-sku text-drift">{shareLabel}</span>
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={handleCopyLink}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm border border-mist font-mono text-sku text-drift hover:text-abyss hover:border-lagoon/40 transition-colors duration-200"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <rect x="4" y="4" width="7" height="7" rx="1" />
            <path d="M10 3V2.5A1.5 1.5 0 0 0 8.5 1H2.5A1.5 1.5 0 0 0 1 2.5v6A1.5 1.5 0 0 0 2.5 10H3" />
          </svg>
          {copied ? copiedLabel : copyLabel}
        </button>
        <button
          type="button"
          onClick={() => handleShare('twitter')}
          aria-label={twitterLabel}
          className="inline-flex items-center justify-center w-8 h-8 rounded-sm border border-mist text-drift hover:text-abyss hover:border-lagoon/40 transition-colors duration-200"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" aria-hidden="true">
            <path d="M11.02 1.5h1.87L8.72 6.25l4.9 6.25h-3.83L6.67 8.65l-3.56 3.85H1.24l4.46-4.95L1 1.5h3.93l2.84 3.55 3.25-3.55Zm-.66 11.24h1.04L4.3 2.42H3.18l7.18 10.32Z" />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => handleShare('facebook')}
          aria-label={facebookLabel}
          className="inline-flex items-center justify-center w-8 h-8 rounded-sm border border-mist text-drift hover:text-abyss hover:border-lagoon/40 transition-colors duration-200"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" aria-hidden="true">
            <path d="M13 7a6 6 0 1 0-6.94 5.93V8.84H4.44V7h1.62V5.56c0-1.6.95-2.48 2.41-2.48.7 0 1.43.12 1.43.12v1.57H9.1c-.8 0-1.04.49-1.04 1V7h1.77l-.28 1.84H8.06v4.09A6 6 0 0 0 13 7Z" />
          </svg>
        </button>
        {canNativeShare && (
          <button
            type="button"
            onClick={handleNativeShare}
            aria-label="Share"
            className="inline-flex items-center justify-center w-8 h-8 rounded-sm border border-mist text-drift hover:text-abyss hover:border-lagoon/40 transition-colors duration-200 lg:hidden"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <circle cx="3" cy="7" r="1.5" />
              <circle cx="11" cy="3" r="1.5" />
              <circle cx="11" cy="11" r="1.5" />
              <line x1="4.3" y1="6.2" x2="9.7" y2="3.8" />
              <line x1="4.3" y1="7.8" x2="9.7" y2="10.2" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}
