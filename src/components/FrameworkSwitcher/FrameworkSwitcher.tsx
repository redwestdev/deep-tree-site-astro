import { useEffect, useState } from 'react';

import s from './styles.module.scss';

type Framework = 'react' | 'vue';

interface Props {
  currentPath: string;
  base?: string;
}

export default function FrameworkSwitcher({ currentPath, base = '' }: Props) {
  const basePath = base.replace(/\/$/, '');

  const [active, setActive] = useState<Framework>(() =>
    currentPath.includes('/vue') ? 'vue' : 'react'
  );

  useEffect(() => {
    setActive(currentPath.includes('/vue') ? 'vue' : 'react');
  }, [currentPath]);

  function switchTo(target: Framework) {
    if (target === active) return;

    const match = currentPath.match(/\/(react|vue)\/(.*)/);
    const slug = match ? match[2] : '';

    // Vue only has index for now — always fall back to /vue/
    window.location.href = target === 'vue' ? `${basePath}/vue/` : `${basePath}/react/${slug}`;
  }

  return (
    <div className={s.wrapper} role='tablist' aria-label='Framework'>
      <button
        role='tab'
        aria-selected={active === 'react'}
        onClick={() => switchTo('react')}
        className={`${s.tab} ${active === 'react' ? s['tab--active'] : ''}`}
      >
        React
      </button>
      <button
        role='tab'
        aria-selected={active === 'vue'}
        onClick={() => switchTo('vue')}
        className={`${s.tab} ${active === 'vue' ? s['tab--active'] : ''}`}
      >
        Vue
        <span className={s.badge}>Soon</span>
      </button>
    </div>
  );
}
