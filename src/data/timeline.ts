// Experience & education timeline (newest first). Source: CV v5 (Jul 2026).

export type Entry = {
	period: string;
	title: string;
	org: string;
	text: string;
	short: string; // one line, used on the home page
	project?: string; // slug in src/content/projects
	kind: 'work' | 'education' | 'internship';
};

export const timeline: Entry[] = [
	{
		period: '2019 – present',
		short: 'Calibration and QA of the MPD calorimeter, from readout boards to the installed detector; now analysing its cosmic and beam data.',
		title: 'Research Scientist',
		org: 'LHEP, JINR · NICA-MPD electromagnetic calorimeter',
		text: 'Junior Research Scientist 2019–2026, Research Scientist since May 2026. Construction-stage calibration and QA of the calorimeter: LED calibration of 2,400 SiPM readout boards, cosmic-muon tests of the modules before assembly, and cosmic-ray testing of all 50 half-sectors before installation. Now analysing cosmic and beam (collision) data recorded with the calorimeter inside MPD. Built the C++/Python pipelines for calibration, equalisation, waveform quality control and live-monitoring prototypes.',
		project: 'sipm-board-calibration',
		kind: 'work',
	},
	{
		period: '2022 – 2024',
		short: 'Instrumentation advice on SiPM bias electronics and gamma-ray detection.',
		title: 'Technical & Scientific Advisor',
		org: 'DSRL (startup), Technology Incubation Centre, IIT Guwahati',
		text: 'Instrumentation advice for start-up projects: SiPM bias electronics, gamma-ray detection concepts.',
		kind: 'work',
	},
	{
		period: '2016 – 2025',
		short: 'Electromagnetic shower simulation and reconstruction; SiPM readout electronics.',
		title: 'PhD, Physical Science (Experimental HEP)',
		org: 'Gauhati University · research at IIT Guwahati and JINR',
		text: 'Thesis: "Simulation and Reconstruction of Electromagnetic Shower and Design and Development of Readout Electronics for SiPM". Submitted Nov 2024, awarded Oct 2025. Supervisors: Prof. E. Saikia, Prof. B. Bhuyan.',
		project: 'dune-nd-ecal-simulation',
		kind: 'education',
	},
	{
		period: '2016 – 2017',
		short: 'Calorimeter and readout studies for the DUNE near detector.',
		title: 'Junior Research Fellow, DUNE-India',
		org: 'IIT Guwahati',
		text: 'ECAL and readout development for the DUNE near detector. DUNE collaboration author since 2018.',
		project: 'dune-nd-ecal-simulation',
		kind: 'work',
	},
	{
		period: '2014 – 2016',
		short: 'Thesis on a SiPM front-end readout prototype, at IIT Guwahati.',
		title: 'MS, Physical Science',
		org: 'Gauhati University · thesis at IIT Guwahati',
		text: 'Thesis project: SiPM (MPPC) front-end readout prototype for the DUNE fine-grained-tracker ECAL.',
		project: 'mppc-frontend-readout',
		kind: 'education',
	},
	{
		period: 'Jun – Jul 2015',
		short: 'Quadrant-photodiode control matrix for laser-beam alignment.',
		title: 'Summer Student',
		org: 'Institute for Plasma Research (IPR)',
		text: 'Control matrix for laser-beam alignment using a quadrant-photodiode sensor.',
		project: 'qpd-beam-alignment',
		kind: 'internship',
	},
	{
		period: '2013 – 2014',
		short: 'Test-station software for Thirty Meter Telescope mirror actuators.',
		title: 'Project Intern, TMT India',
		org: 'Indian Institute of Astrophysics (IIA), Bangalore',
		text: 'Test-station software for Thirty Meter Telescope mirror actuators (BS thesis project, then 9-month internship).',
		project: 'tmt-actuator-test-software',
		kind: 'internship',
	},
	{
		period: '2009 – 2013',
		short: 'Physics degree; summer research on Raman spectroscopy at IIT Guwahati.',
		title: 'BS, Physical Science',
		org: 'Gauhati University',
		text: 'Summer internship at IIT Guwahati (2011): Raman spectroscopy of diamond-like-carbon thin films.',
		kind: 'education',
	},
];

export const skills: { group: string; items: string[] }[] = [
	{ group: 'Languages', items: ['C++17', 'Python', 'C', 'Bash', 'SQL', 'MATLAB'] },
	{ group: 'Data & ML', items: ['NumPy / pandas / SciPy', 'scikit-learn', 'PyTorch', 'XGBoost', 'statistical modelling & fitting', 'anomaly detection'] },
	{ group: 'HPC & systems', items: ['CUDA', 'SLURM clusters', 'Linux', 'Docker / Podman', 'PostgreSQL', 'MongoDB', 'Git', 'CMake'] },
	{ group: 'Physics software', items: ['CERN ROOT / RooFit', 'Geant4', 'MPDRoot', 'FLUKA'] },
	{ group: 'Hardware', items: ['SiPM readout & DAQ', 'embedded Qt / SBCs', 'detector calibration', 'test-stand automation'] },
];
