import type { CollectionEntry } from 'astro:content';

type Project = CollectionEntry<'projects'>;

// Years from a free-text period such as '2021 – 2026', '2026 – ongoing' or 'Jun – Jul 2015'.
// An open period ('ongoing' / 'present') ends after any closed one.
const span = (period: string) => {
	const years = period.match(/\d{4}/g)?.map(Number) ?? [0];
	const open = /ongoing|present/i.test(period);
	return { start: years[0], end: open ? Infinity : years[years.length - 1] };
};

// Newest first: by start year, then end year; `order` breaks ties.
export const newestFirst = (a: Project, b: Project) => {
	const x = span(a.data.period);
	const y = span(b.data.period);
	return y.start - x.start || y.end - x.end || a.data.order - b.data.order;
};
