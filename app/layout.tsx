import type { Metadata } from 'next';
import { Noto_Sans_JP, Shippori_Mincho } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

const notoSansJP = Noto_Sans_JP({
	subsets: ['latin'],
	weight: ['400', '500', '700'],
	display: 'swap',
	variable: '--font-noto-sans-jp',
});

const shipporiMincho = Shippori_Mincho({
	subsets: ['latin'],
	weight: ['400', '500', '700'],
	display: 'swap',
	variable: '--font-shippori-mincho',
});

export const metadata: Metadata = {
	title: 'グリーンマネジメント',
	description:
		'庭のメンテナンスはプロにお任せください。草刈りから人工芝の施工まで、庭の管理に関する全てのサービスを提供しています。',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="ja"
			className={`${notoSansJP.variable} ${shipporiMincho.variable}`}
		>
			<body className="min-h-screen flex flex-col">
				<Header />
				<main className="flex-grow">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
