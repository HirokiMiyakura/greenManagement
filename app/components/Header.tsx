'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const menuItems = [
		{ name: 'ホーム', path: '/' },
		{ name: '草刈り', path: '/grass-cutting' },
		{ name: '太陽光発電所メンテナンス', path: '/solar-maintenance' },
		{ name: '人工芝施工', path: '/artificial-grass' },
		{ name: '施工事例', path: '/cases' },
		{ name: 'よくあるご質問', path: '/faq' },
	];

	return (
		<header className="bg-white">
			<div className="bg-green-600 text-white py-2">
				<div className="container mx-auto px-4">
					<div className="flex justify-between items-center">
						<p className="text-sm">
							東京・埼玉・千葉・神奈川・群馬・茨城の草刈り、人工芝の施工ならお任せください！
						</p>
						<div className="flex items-center space-x-4">
							<p className="text-sm">
								<a href="tel:08034383925">TEL: 080-3438-3925</a>
							</p>
							<p className="text-sm">受付時間: 9:00～18:00</p>
						</div>
					</div>
				</div>
			</div>
			<nav className="container mx-auto px-4 py-2">
				<div className="flex justify-between items-center">
					<Link href="/" className="text-2xl font-bold text-green-600">
						<Image
							src="/logo.svg"
							alt="グリーンマネジメント"
							width={180}
							height={120}
							className=""
						/>
					</Link>

					{/* デスクトップメニュー */}
					<div className="hidden md:flex items-center space-x-8">
						{menuItems.map((item) => (
							<Link
								key={item.path}
								href={item.path}
								className="text-gray-600 hover:text-green-600 transition-colors text-sm font-serif font-bold"
							>
								{item.name}
							</Link>
						))}
						<Link
							href="/contact"
							className="bg-orange-600 text-white px-6 py-2 rounded hover:bg-orange-700 transition-colors text-lg font-serif font-bold"
						>
							お問い合わせ
						</Link>
					</div>

					{/* モバイルメニューボタン */}
					<button
						className="md:hidden text-gray-600"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
					>
						<svg
							className="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							{isMenuOpen ? (
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M6 18L18 6M6 6l12 12"
								/>
							) : (
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M4 6h16M4 12h16M4 18h16"
								/>
							)}
						</svg>
					</button>
				</div>

				{/* モバイルメニュー */}
				{isMenuOpen && (
					<div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4">
						{menuItems.map((item) => (
							<Link
								key={item.path}
								href={item.path}
								className="block py-2 text-gray-600 hover:text-green-600 transition-colors text-sm"
								onClick={() => setIsMenuOpen(false)}
							>
								{item.name}
							</Link>
						))}
						<Link
							href="/contact"
							className="block mt-4 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition-colors text-sm text-center"
							onClick={() => setIsMenuOpen(false)}
						>
							無料お見積り・ご相談
						</Link>
					</div>
				)}
			</nav>
		</header>
	);
};

export default Header;
