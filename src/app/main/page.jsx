'use client';

import Typed from 'typed.js';
import { useEffect, useRef } from 'react';

export default function MainPage() {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['JavaScript', 'React', 'Design', 'Next.js'],
      typeSpeed: 50,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div>
        Create New
        <span ref={el} style={{ fontWeight: '300' }} />
      </div>
    </>
  );
}
