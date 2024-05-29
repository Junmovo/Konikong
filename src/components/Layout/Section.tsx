'use client';

import React, { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
}

export default function Section({ children }: SectionProps): JSX.Element {
  return (
    <>
      <section className="max-w-[1340px] mx-auto">{children}</section>
    </>
  );
}
