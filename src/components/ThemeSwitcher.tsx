// app/components/ThemeSwitcher.tsx
'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Button } from '@nextui-org/react';
import { BsFillSunFill, BsFillMoonStarsFill } from 'react-icons/bs';

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div>
      {theme === 'light' ? (
        <Button variant="shadow" isIconOnly onClick={() => setTheme('dark')}><BsFillMoonStarsFill /></Button>
      ) : (
        <Button variant="shadow" isIconOnly onClick={() => setTheme('light')}><BsFillSunFill /></Button>
      )}
    </div>
  );
}
