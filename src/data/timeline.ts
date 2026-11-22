// Experience & education timeline. Source: CV v5 (Jul 2026).
// start/end are 'YYYY-MM'; omit end for ongoing. Order here doesn't matter: views sort by date.

export type Kind = 'work' | 'education' | 'project';

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
};

export const kindLabel: Record<Kind, string> = {
	work: 'position',
	education: 'degree',
	project: 'internship / thesis project',
};

export const timeline: Entry[] = [
	{
		start: '2019-05',
		period: '2019 – present',
		title: 'Research Scientist',
		org: 'LHEP, JINR · NICA-MPD electromagnetic calorimeter',
		short: 'Calibration and QA of the MPD calorimeter, from readout boards to the installed detector; now analysing its cosmic and beam data.',
		text: 'Junior Research Scientist 2019–2026, Research Scientist since May 2026. Construction-stage calibration and QA of the calorimeter: LED calibration of 2,400 SiPM readout boards, cosmic-muon tests of the modules before assembly, and cosmic-ray testing of all 50 half-sectors before installation. Now analysing cosmic and beam (collision) data recorded with the calorimeter inside MPD. Built the C++/Python pipelines for calibration, equalisation, waveform quality control and live-monitoring prototypes.',
		project: 'mpd-ecal-data-analysis',
		kind: 'work',
	},
	{
		start: '2022-01',
		end: '2024-12',
		period: '2022 – 2024',
		title: 'Technical & Scientific Advisor',
		org: 'DSRL (startup), Technology Incubation Centre, IIT Guwahati',
		short: 'Instrumentation advice on SiPM bias electronics and gamma-ray detection.',
		text: 'Instrumentation advice for start-up projects: SiPM bias electronics, gamma-ray detection concepts.',
		kind: 'work',
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
		short: 'Electromagnetic shower simulation and reconstruction; SiPM readout electronics.',
		text: 'Thesis: "Simulation and Reconstruction of Electromagnetic Shower and Design and Development of Readout Electronics for SiPM". Submitted Nov 2024, awarded Oct 2025. Supervisors: Prof. E. Saikia, Prof. B. Bhuyan.',
		project: 'dune-nd-ecal-simulation',
		kind: 'education',
	},
	{
		start: '2016-09',
		end: '2017-02',
		period: '2016 – 2017',
		title: 'Junior Research Fellow, DUNE-India',
		org: 'IIT Guwahati',
		short: 'Calorimeter and readout studies for the DUNE near detector.',
		text: 'ECAL and readout development for the DUNE near detector. DUNE collaboration author since 2018.',
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
		short: 'Master’s degree in physical science.',
		text: 'Master of Science in Physical Science, Institute of Science and Technology, Gauhati University.',
		kind: 'education',
	},
	{
		start: '2013-06',
		end: '2014-02',
		period: 'Jun 2013 – Feb 2014',
		title: 'Project Intern, TMT India',
		org: 'Indian Institute of Astrophysics (IIA), Bangalore',
		short: 'Nine-month internship continuing the Thirty Meter Telescope actuator test-station software.',
		text: 'Nine-month internship after the BS, continuing the test-station software for Thirty Meter Telescope mirror actuators.',
		project: 'tmt-actuator-test-software',
		kind: 'project',
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
		short: 'Bachelor’s degree in physical science.',
		text: 'Bachelor of Science in Physical Science, Institute of Science and Technology, Gauhati University.',
		kind: 'education',
	},
];

// Newest first, for lists.
export const timelineNewestFirst = [...timeline].sort(
	(a, b) => b.start.localeCompare(a.start) || (b.end ?? '9999').localeCompare(a.end ?? '9999'),
);

export const skills: { group: string; items: string[] }[] = [
	{ group: 'Languages', items: ['C++17', 'Python', 'C', 'Bash', 'SQL', 'MATLAB'] },
	{ group: 'Data & ML', items: ['NumPy / pandas / SciPy', 'scikit-learn', 'PyTorch', 'XGBoost', 'statistical modelling & fitting', 'anomaly detection'] },
	{ group: 'HPC & systems', items: ['CUDA', 'SLURM clusters', 'Linux', 'Docker / Podman', 'PostgreSQL', 'MongoDB', 'Git', 'CMake'] },
	{ group: 'Physics software', items: ['CERN ROOT / RooFit', 'Geant4', 'MPDRoot', 'FLUKA'] },
	{ group: 'Hardware', items: ['SiPM readout & DAQ', 'embedded Qt / SBCs', 'detector calibration', 'test-stand automation'] },
];
