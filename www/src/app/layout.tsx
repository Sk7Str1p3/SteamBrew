const description =
	"Apply themes/skins/customization the new version of the Steam® Client. Steam Client Homebrew is a community focused on extending Steam's base functionality. We've developed Millennium, commonly known as Millennium for Steam, that lets you add new features to your Steam Client.";

export const metadata = {
	metadataBase: new URL('http://localhost:3000'),
	title: 'Millennium • Steam Homebrew.',
	description: description,
	url: 'https://steambrew.app/',
	image: '/favicon.ico',
	imageAlt: 'Millennium for Steam Logo',
	openGraph: {
		title: 'The Steam Enhancement Project',
		description: description,
		url: 'https://steambrew.app/',
		image: '/favicon.ico',
		imageAlt: 'Millennium for Steam Logo',
		siteName: 'Steam Homebrew',
	},
	twitter: {
		card: 'summary',
		site: 'Steam Homebrew | Millennium',
		title: 'The Steam Enhancement Project',
		description: description,
		url: 'https://steambrew.app/',
		image: '/favicon.ico',
		imageAlt: 'Millennium for Steam Logo®',
	},
	siteName: 'Steam Homebrew | Millennium',
	keywords:
		'Steam, Steam++, Better Steam, Steam Mod, Steam Themes, Steam Plugins, Steam Extensions, Steam Client Mod, Steam Hacks, Millennium, Millennium Steam, Millennium Steam Patcher, Steam Patcher, Millennium Patcher, Patcher, Millennium for Steam, Millennium Steam',
	author: 'Steam Homebrew',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={'SteamBrewAppBody'}>{children}</body>
		</html>
	);
}
