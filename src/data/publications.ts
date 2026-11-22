// Publication data. Source: INSPIRE-HEP author profile (M.Bhattacharjee.4), retrieved 2026-11-22.

export type Pub = {
	authors: string;
	title: string;
	venue: string;
	year: number;
	doi?: string;
	arxiv?: string;
	firstAuthor?: boolean;
};

// Detector / calorimeter papers (small author lists, direct contribution).
export const ecalPapers: Pub[] = [
	{
		authors: 'V.M. Baryshnikov, R. Adhikary, M. Bhattacharjee, V.M. Golovatyuk et al.',
		title:
			'Reconstruction of Cosmic Muon Tracks Inside the Half-Sector of the ECal MPD/NICA Electromagnetic Calorimeter to Align the Tower Responses',
		venue: 'Phys. Part. Nucl. Lett. 22, 1164',
		year: 2025,
		doi: '10.1134/S1547477125701377',
	},
	{
		authors: 'M. Bhattacharjee, V.M. Baryshnikov, P.A. Bakhtin, S.A. Bulychjov et al.',
		title: 'Methods for Calibrating Half-Sectors of the MPD/NICA Electromagnetic Calorimeter Using Cosmic Ray Muons',
		venue: 'Phys. Part. Nucl. 55, 803',
		year: 2024,
		doi: '10.1134/S1063779624700217',
		firstAuthor: true,
	},
	{
		authors: 'V. Baryshnikov, V. Babkin, S. Bazylev, M. Bhattacharjee et al.',
		title: 'Status of the Time-of-Flight and ECal Particle Identification Systems of the MPD Experiment at the NICA Collider',
		venue: 'Moscow Univ. Phys. Bull. 79, 33',
		year: 2024,
		doi: '10.3103/S0027134924700723',
	},
	{
		authors: 'M. Bhattacharjee, I. Tyapkin, B. Dabrowska, D. Egorov et al.',
		title: 'Calibration of NICA-MPD electromagnetic calorimeter modules with cosmic muons',
		venue: 'J. Phys. Conf. Ser. 1690, 012052',
		year: 2020,
		doi: '10.1088/1742-6596/1690/1/012052',
		firstAuthor: true,
	},
	{
		authors: 'A.Yu. Semenov, S. Bazylev, E. Belyaeva, M. Bhattacharjee et al.',
		title: 'Electromagnetic Calorimeter for MPD Spectrometer at NICA Collider',
		venue: 'JINST 15, C05017',
		year: 2020,
		doi: '10.1088/1748-0221/15/05/C05017',
		arxiv: '2002.07709',
	},
	{
		authors: 'A.Yu. Semenov, I.A. Semenova, M. Bhattacharjee et al.',
		title: 'Calibration of MPD electromagnetic calorimeter with muons',
		venue: 'JINST 15, C05077',
		year: 2020,
		doi: '10.1088/1748-0221/15/05/C05077',
		arxiv: '2002.06908',
	},
];

export const thesis = {
	title: 'Simulation and Reconstruction of Electromagnetic Shower and Design and Development of Readout Electronics for SiPM',
	institution: 'Gauhati University',
	year: 2025,
	href: '', // PLACEHOLDER: Shodhganga / university repository link when available
};
