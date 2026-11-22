// Experience & education timeline. Source: CV v5 (Jul 2026).
// start/end are 'YYYY-MM'; omit end for ongoing. Order here doesn't matter: views sort by date.

export type Kind = 'work' | 'education' | 'project' | 'milestone';

export type Entry = {
	start: string;
	end?: string;
	period: string; // human-readable
	title: string;
	org: string;
	short: string; // one line, used on the home page
	text: string; // fuller text, used on About
	project?: string; // slug in src/content/projects
	kind: Kind;
	earlier?: string; // earlier title in the same position, shown under the title
	// Home-page timeline: entries with the same lane are drawn as one continuous branch.
	lane?: string;
	endTitle?: string; // home page: adds an end event with this title at `end`
	startLabel?: string; // home page: date shown for the start event (default 'Mon YYYY')
};

export const kindLabel: Record<Kind, string> = {
	work: 'position',
	education: 'degree',
	project: 'internship / thesis project',
	milestone: 'milestone',
};

export const timeline: Entry[] = [
	{
		start: '2024-10',
		period: '2024 – present',
		title: 'Full-time on NICA-MPD',
		org: 'LHEP, JINR · NICA-MPD electromagnetic calorimeter',
		short: 'Calibration, QA and data analysis for the MPD electromagnetic calorimeter.',
		text: 'Full-time NICA-MPD work since submitting the PhD thesis (Oct 2024); Research Scientist since May 2026. Cosmic-ray testing of the half-sectors before installation, then analysis of cosmic and beam (collision) data recorded with the calorimeter inside MPD. C++/Python pipelines for calibration, equalisation, waveform quality control and live-monitoring prototypes.',
		project: 'mpd-ecal-data-analysis',
		kind: 'work',
		lane: 'jinr',
	},
	{
		start: '2026-05',
		period: 'May 2026',
		title: 'Promoted to Research Scientist',
		org: 'LHEP, JINR',
		short: '',
		text: '',
		kind: 'milestone',
		lane: 'jinr',
	},
	{
		start: '2025-10',
		period: 'Oct 2025',
		title: 'PhD defended',
		org: 'Gauhati University',
		short: 'Thesis submitted Oct 2024.',
		text: '',
		kind: 'milestone',
		lane: 'phd',
	},
	{
		start: '2019-05',
		end: '2024-10',
		period: '2019 – 2024',
		title: 'Junior Research Scientist, PhD research at JINR',
		org: 'LHEP, JINR · NICA-MPD electromagnetic calorimeter',
		short: 'Calorimeter work that served both the thesis and NICA-MPD.',
		text: 'PhD research carried out at JINR as a Junior Research Scientist, with the work serving both the thesis and the NICA-MPD calorimeter: LED calibration of 2,400 SiPM readout boards, cosmic-muon QA of the modules before they were assembled into half-sectors, cosmic tests of the half-sectors, and electron-beam data analysis.',
		project: 'module-tests-and-beam',
		kind: 'work',
		lane: 'jinr',
	},
	{
		start: '2022-01',
		startLabel: '2022',
		period: '2022 – present',
		title: 'Technical & Scientific Advisor',
		org: 'DSRL (startup), Technology Incubation Centre, IIT Guwahati',
		short: 'Technical and scientific advice on instrumentation across the start-up’s projects.',
		text: 'Technical and scientific advice on instrumentation across the start-up’s projects.',
		kind: 'work',
		lane: 'advisor',
	},
	{
		start: '2018-11',
		end: '2018-12',
		period: 'Nov – Dec 2018',
		title: 'Summer Student Programme',
		org: 'LHEP, JINR · NICA',
		short: 'Cosmic-muon calibration of calorimeter modules for MPD, the start of the JINR work.',
		text: 'Cosmic calibration of the modules for the MPD electromagnetic calorimeter, which led to the position at JINR.',
		project: 'module-tests-and-beam',
		kind: 'project',
	},
	{
		start: '2016-09',
		end: '2025-10',
		period: 'Sep 2016 – Oct 2025',
		title: 'PhD, Physical Science (Experimental HEP)',
		org: 'Gauhati University · research at IIT Guwahati and JINR',
		short: 'Shower simulation, SiPM readout electronics, cosmic-muon QA of calorimeter modules and half-sectors, and electron-beam data analysis.',
		text: 'Thesis: "Simulation and Reconstruction of Electromagnetic Shower and Design and Development of Readout Electronics for SiPM". Submitted Oct 2024, awarded Oct 2025. Supervisors: Prof. E. Saikia, Prof. B. Bhuyan.',
		project: 'dune-nd-ecal-simulation',
		kind: 'education',
		lane: 'phd',
	},
	{
		start: '2016-09',
		end: '2017-02',
		period: '2016 – 2017',
		title: 'Junior Research Fellow, DUNE-India',
		org: 'IIT Guwahati',
		short: 'Calorimeter and readout studies for the DUNE near detector.',
		text: 'ECAL and readout development for the DUNE near detector.',
		project: 'dune-nd-ecal-simulation',
		kind: 'work',
	},
	{
		start: '2016-01',
		end: '2016-06',
		period: 'Jan – Jun 2016',
		title: 'MS thesis project',
		org: 'HEP lab, IIT Guwahati · DUNE-India',
		short: 'SiPM front-end readout prototype for the DUNE fine-grained-tracker ECAL.',
		text: 'Design, simulation and tests of a front-end readout board for Hamamatsu MPPCs (supervised by Prof. B. Bhuyan).',
		project: 'mppc-frontend-readout',
		kind: 'project',
	},
	{
		start: '2015-06',
		end: '2015-07',
		period: 'Jun – Jul 2015',
		title: 'Summer Student',
		org: 'Institute for Plasma Research (IPR)',
		short: 'Quadrant-photodiode control matrix for laser-beam alignment.',
		text: 'Control matrix for laser-beam alignment using a quadrant-photodiode sensor.',
		project: 'qpd-beam-alignment',
		kind: 'project',
	},
	{
		start: '2014-08',
		end: '2016-05',
		period: 'Aug 2014 – May 2016',
		title: 'MS, Physical Science',
		org: 'Gauhati University',
		short: '',
		text: 'Master of Science in Physical Science, Institute of Science and Technology, Gauhati University.',
		kind: 'education',
		lane: 'ms',
		endTitle: 'MS completed',
	},
	{
		start: '2013-06',
		end: '2014-02',
		period: 'Jun 2013 – Feb 2014',
		title: 'Project Intern, TMT India',
		org: 'Indian Institute of Astrophysics (IIA), Bangalore',
		short: 'Nine-month internship testing mirror actuators for the Thirty Meter Telescope.',
		text: 'Nine-month internship after the BS, testing mirror actuators for the Thirty Meter Telescope.',
		project: 'tmt-actuator-test-software',
		kind: 'project',
		lane: 'tmt',
		endTitle: 'Internship completed',
	},
	{
		start: '2013-01',
		end: '2013-05',
		period: 'Jan – May 2013',
		title: 'BS thesis project',
		org: 'Indian Institute of Astrophysics (IIA), Bangalore · TMT India',
		short: 'Test-station software for Thirty Meter Telescope mirror actuators.',
		text: 'BS thesis project: test-station software for Thirty Meter Telescope mirror actuators.',
		project: 'tmt-actuator-test-software',
		kind: 'project',
	},
	{
		start: '2011-06',
		end: '2011-07',
		period: 'Jun – Jul 2011',
		title: 'Summer research project',
		org: 'Department of Physics, IIT Guwahati',
		short: 'Laser Raman spectroscopy of diamond-like-carbon thin films.',
		text: 'Determination of properties of diamond-like-carbon thin films with laser Raman spectroscopy (supervised by Prof. A. Khare).',
		kind: 'project',
	},
	{
		start: '2009-08',
		end: '2013-05',
		period: 'Aug 2009 – May 2013',
		title: 'BS, Physical Science',
		org: 'Gauhati University',
		short: '',
		text: 'Bachelor of Science in Physical Science, Institute of Science and Technology, Gauhati University.',
		kind: 'education',
		lane: 'bs',
		endTitle: 'BS completed',
	},
];

// Newest first, for lists.
export const timelineNewestFirst = timeline.filter((e) => e.kind !== 'milestone').sort(
	(a, b) => b.start.localeCompare(a.start) || (b.end ?? '9999').localeCompare(a.end ?? '9999'),
);

export const skills: { group: string; items: string[] }[] = [
	{ group: 'Languages', items: ['C++17', 'Python', 'C', 'Bash', 'SQL', 'MATLAB'] },
	{ group: 'Data & ML', items: ['NumPy / pandas / SciPy', 'scikit-learn', 'PyTorch', 'XGBoost', 'statistical modelling & fitting', 'anomaly detection'] },
	{ group: 'HPC & systems', items: ['CUDA', 'SLURM clusters', 'Linux', 'Docker / Podman', 'PostgreSQL', 'MongoDB', 'Git', 'CMake'] },
	{ group: 'Physics software', items: ['CERN ROOT / RooFit', 'Geant4', 'MPDRoot', 'FLUKA'] },
	{ group: 'Hardware', items: ['SiPM readout & DAQ', 'embedded Qt / SBCs', 'detector calibration', 'test-stand automation'] },
];
