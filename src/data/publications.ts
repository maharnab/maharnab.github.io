// Publication data. Source: INSPIRE-HEP author profile (M.Bhattacharjee.4), retrieved 2026-11-22.

export type Pub = {
	authors: string;
	title: string;
	venue: string;
	year: number;
	doi?: string;
	arxiv?: string;
	note?: string;
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

// Large-collaboration papers: selected, most relevant to ML / GPU / computing.
export const mpdCollaborationPapers: Pub[] = [
	{
		authors: 'MPD Collaboration (R. Abdulin et al.)',
		title: 'MPD physics performance studies in Bi+Bi collisions at √sNN = 9.2 GeV',
		venue: 'Rev. Mex. Fis. 71, 041201',
		year: 2025,
		doi: '10.31349/RevMexFis.71.041201',
		arxiv: '2503.21117',
	},
];

export const duneSelected: Pub[] = [
	{
		authors: 'DUNE Collaboration',
		title: 'Neutrino interaction classification with a convolutional neural network in the DUNE far detector',
		venue: 'Phys. Rev. D 102, 092003',
		year: 2020,
		doi: '10.1103/PhysRevD.102.092003',
		arxiv: '2006.15052',
		note: 'ML',
	},
	{
		authors: 'DUNE Collaboration',
		title: 'Separation of track- and shower-like energy deposits in ProtoDUNE-SP using a convolutional neural network',
		venue: 'Eur. Phys. J. C 82, 903',
		year: 2022,
		doi: '10.1140/epjc/s10052-022-10791-2',
		arxiv: '2203.17053',
		note: 'ML',
	},
	{
		authors: 'DUNE Collaboration',
		title: 'Neutrino interaction vertex reconstruction in DUNE with Pandora deep learning',
		venue: 'Eur. Phys. J. C 85, 697',
		year: 2025,
		doi: '10.1140/epjc/s10052-025-14313-8',
		arxiv: '2502.06637',
		note: 'ML',
	},
	{
		authors: 'DUNE Collaboration',
		title: 'Highly-parallelized simulation of a pixelated LArTPC on a GPU',
		venue: 'JINST 18, P04034',
		year: 2023,
		doi: '10.1088/1748-0221/18/04/P04034',
		arxiv: '2212.09807',
		note: 'GPU',
	},
	{
		authors: 'DUNE Collaboration',
		title: 'Deep Underground Neutrino Experiment (DUNE) Near Detector Conceptual Design Report',
		venue: 'Instruments 5, 31',
		year: 2021,
		doi: '10.3390/instruments5040031',
		arxiv: '2103.13910',
	},
	{
		authors: 'DUNE Collaboration',
		title: 'Long-baseline neutrino oscillation physics potential of the DUNE experiment',
		venue: 'Eur. Phys. J. C 80, 978',
		year: 2020,
		doi: '10.1140/epjc/s10052-020-08456-z',
		arxiv: '2006.16043',
	},
];

export const DUNE_PAPER_COUNT = 39; // DUNE-collaboration papers on INSPIRE, 2018–2026
export const TOTAL_PAPER_COUNT = 46; // all INSPIRE records, 2026-11-22

export type Talk = { title: string; event: string; date: string };
export const talks: Talk[] = [
	{
		title: 'Preliminary calibration of SiPMs for the NICA-MPD electromagnetic calorimeter',
		event: 'ICPPA 2026 (MEPhI)',
		date: 'Oct 2026',
	},
	{ title: 'Experimental HEP: NICA MPD-ECAL', event: 'Wavicle Colloquium Series, Gauhati University', date: 'Mar 2024' },
	{ title: 'ECAL Mass Production: Status Report', event: 'XI MPD Collaboration Meeting, JINR', date: 'Apr 2023' },
	{
		title: 'Calibration of NICA-MPD electromagnetic calorimeter modules with cosmic muons',
		event: '5th ICPPA (MEPhI, online)',
		date: 'Oct 2020',
	},
	{
		title: 'Frontend readout development of silicon photomultipliers for particle detectors in HEP experiments',
		event: 'RAAS 2019, Gauhati University',
		date: 'May 2019',
	},
	{ title: 'Frontend readout prototype for FGT-ECAL of DUNE', event: 'Research Conclave, IIT Guwahati', date: 'Mar 2016' },
	{ title: "TMT actuators' testing and development", event: 'North-East Meet of Astronomers (NEMA15)', date: 'Oct 2015' },
];

export const thesis = {
	title: 'Simulation and Reconstruction of Electromagnetic Shower and Design and Development of Readout Electronics for SiPM',
	institution: 'Gauhati University',
	year: 2025,
	href: '', // PLACEHOLDER: Shodhganga / university repository link when available
};
