"use client";

import { useSearchParams } from 'next/navigation';

export function useLanguage() {
  const searchParams = useSearchParams();
  const lang = searchParams.get('lang') || 'en';
  return { isEn: lang === 'en', lang };
}
