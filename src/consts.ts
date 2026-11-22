// Global site data. Edit here; every page reads from this file.

export const SITE_TITLE = 'Maharnab Bhattacharjee';
export const SITE_TAGLINE = 'Experimental high-energy physics';
export const SITE_DESCRIPTION =
	'Experimental physicist working on calorimeter calibration, SiPM readout and data analysis for the MPD experiment at NICA.';

export const AFFILIATION = 'Research Scientist, LHEP, JINR';

// Public email, split so it isn't in the HTML as one string (see components/Email.astro).
export const EMAIL = ['maharnabb', 'gmail.com'] as const;

export const LINKS = {
	github: 'https://github.com/maharnab',
	linkedin: 'https://www.linkedin.com/in/maharnabb',
	orcid: 'https://orcid.org/0000-0002-8700-4930',
	inspire: 'https://inspirehep.net/authors/1615127',
	scopus: 'https://www.scopus.com/authid/detail.uri?authorId=57870446500',
};

// Default social-preview image (LinkedIn/Slack/X cards).
export const OG_IMAGE = '/images/work/headshot.jpg';

// Blog interaction options (used on individual blog post pages only).
// Set GOATCOUNTER_DOMAIN to your GoatCounter subdomain, without protocol, e.g. 'maharnab'.
export const GOATCOUNTER_DOMAIN = '';
// Set DISQUS_SHORTNAME to enable Disqus comments, e.g. 'maharnab-blog'.
export const DISQUS_SHORTNAME = '';
