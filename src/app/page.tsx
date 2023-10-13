import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { buttonVariants } from '@/components/ui/button';

import { STRINGS } from '@/lib/strings';

export default function Home() {
  return (
    <>
      <MaxWidthWrapper className="mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center">
        <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">
          {STRINGS.WELCOME}
          <span className="text-green-700 block">{STRINGS.CTA}</span>
        </h1>
        <p className="mt-5 max-w-prose text-zinc-700 font-medium sm:text-lg">
          {STRINGS.GROUP_DESC}
        </p>
        <Link
          className={buttonVariants({ size: 'lg', className: 'mt-5' })}
          href="/"
          target="_blank"
        >
          {STRINGS.JOIN} <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </MaxWidthWrapper>
    </>
  );
}
