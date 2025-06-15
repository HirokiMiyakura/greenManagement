import Image from 'next/image';
import Link from 'next/link';
import LatestCases from '../components/LatestCases';
import ContactCTA from '../components/ContactCTA';

export default function Home() {
	return (
		<main>
			{/* ヒーローセクション */}
			<section className="relative h-[60vh] flex items-center">
				<div className="absolute inset-0 z-0">
					<Image
						src="/cases.jpg"
						alt="庭のメンテナンス"
						fill
						className="object-cover"
						priority
					/>
					<div className="absolute inset-0 bg-black/40" />
				</div>
				<div className="container mx-auto px-4 relative z-10">
					<div className="max-w-2xl text-white">
						<h1 className="text-6xl font-bold mb-6 font-serif leading-20">
							施工事例
						</h1>
						<p className="text-xl mb-8 leading-8">施工事例一覧をご覧ください</p>
						<div className="flex flex-col sm:flex-row gap-4">
							<Link
								href="/contact"
								className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors text-center border-2 border-green-600 hover:border-green-700"
							>
								無料見積もり<span className="ps-4">&gt;</span>
							</Link>
							{/* <Link
								href="/case-studies"
								className="bg-transparent text-white px-8 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-colors text-center border-2 border-white"
							>
								施工事例を見る
							</Link> */}
						</div>
					</div>
				</div>
			</section>

			{/* サービス紹介 */}
			<section className="py-20 bg-white">
				<div className="container mx-auto px-4">
					<h2 className="text-green-600 text-3xl font-bold text-center mb-12 font-serif">
						施工事例
					</h2>
					<LatestCases />
				</div>
			</section>

			<ContactCTA />
		</main>
	);
}
