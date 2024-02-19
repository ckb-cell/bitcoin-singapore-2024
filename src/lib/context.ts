import serverContext from 'server-only-context';

export const [getLocale, setLocale] = serverContext<'zh' | 'en'>('en');
