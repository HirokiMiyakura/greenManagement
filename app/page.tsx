import Image from 'next/image';
import Link from 'next/link';
import LatestNews from './components/LatestNews';
import LatestCases from './components/LatestCases';
import ContactCTA from './components/ContactCTA';

export default function Home() {
	return (
		<main>
			{/* ヒーローセクション */}
			<section className="relative h-[80vh] flex items-center">
				<div className="absolute inset-0 z-0">
					<Image
						src="/image_fx_2.jpg"
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
							<span className="text-7xl text-green-600">“緑”</span>
							のメンテナンスは
							<br />
							プロにお任せください
						</h1>
						<p className="text-xl mb-8 leading-8">
							草刈りから人工芝の施工まで、
							<br />
							庭の管理に関する全てのサービスを提供しています。
						</p>
						<div className="flex flex-col sm:flex-row gap-4">
							<Link
								href="/contact"
								className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors text-center border-2 border-green-600 hover:border-green-700"
							>
								無料見積もり<span className="ps-4">&gt;</span>
							</Link>
							<Link
								href="/cases"
								className="bg-transparent text-white px-8 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-colors text-center border-2 border-white"
							>
								施工事例を見る<span className="ps-4">&gt;</span>
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* サービス紹介 */}
			<section className="py-20 bg-white">
				<div className="container mx-auto px-4">
					<h2 className="text-green-600 text-3xl font-bold text-center mb-12 font-serif">
						サービス紹介
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<div className="bg-white rounded-lg overflow-hidden shadow-lg">
							<div className="relative h-64">
								<Image
									src="/service1.jpg"
									alt="草刈りサービス"
									fill
									className="object-cover"
								/>
							</div>
							<div className="p-6">
								<h3 className="text-xl font-bold mb-4 font-serif">
									草刈りサービス
								</h3>
								<p className="text-gray-600 mb-4">
									プロの技術で、庭の美観を保ちます。定期的なメンテナンスで、常に清潔で美しい庭を維持できます。
								</p>
								<Link
									href="/grass-cutting"
									className="text-green-600 hover:text-green-700 font-semibold"
								>
									詳しく見る<span className="ps-6">&gt;</span>
								</Link>
							</div>
						</div>
						<div className="bg-white rounded-lg overflow-hidden shadow-lg">
							<div className="relative h-64">
								<Image
									src="/service2.jpg"
									alt="太陽光発電所メンテナンス"
									fill
									className="object-cover"
								/>
							</div>
							<div className="p-6">
								<h3 className="text-xl font-bold mb-4 font-serif">
									太陽光発電所メンテナンス
								</h3>
								<p className="text-gray-600 mb-4">
									プロの技術で、発電効率の低下を防ぎます。定期的なメンテナンスで、発電量を最大化します。
								</p>
								<Link
									href="/solar-maintenance"
									className="text-green-600 hover:text-green-700 font-semibold"
								>
									詳しく見る<span className="ps-6">&gt;</span>
								</Link>
							</div>
						</div>
						<div className="bg-white rounded-lg overflow-hidden shadow-lg">
							<div className="relative h-64">
								<Image
									src="/service3.jpg"
									alt="人工芝施工"
									fill
									className="object-cover"
								/>
							</div>
							<div className="p-6">
								<h3 className="text-xl font-bold mb-4 font-serif">
									人工芝施工
								</h3>
								<p className="text-gray-600 mb-4">
									高品質な人工芝を使用し、プロの技術で施工。メンテナンスフリーで、一年中緑の美しい庭を実現します。
								</p>
								<Link
									href="/artificial-grass"
									className="text-green-600 hover:text-green-700 font-semibold"
								>
									詳しく見る<span className="ps-6">&gt;</span>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* 施工事例 */}
			<section className="py-20 bg-gray-50">
				<div className="container mx-auto px-4">
					<h2 className="text-green-600 text-3xl font-bold text-center mb-12 font-serif">
						施工事例
					</h2>
					<LatestCases />

					<div className="text-center mt-12">
						<Link
							href="/cases"
							className="inline-block bg-transparent text-green-600 hover:text-white px-12 py-4 rounded-full hover:bg-green-600 transition-colors text-center border-1"
						>
							施工事例をもっと見る<span className="ps-6">&gt;</span>
						</Link>
					</div>
				</div>
			</section>

			{/* 新着情報 */}
			<section className="py-20 bg-white">
				<div className="container mx-auto px-4">
					<h2 className="text-green-600 text-3xl font-bold text-center mb-12 font-serif">
						新着情報
					</h2>
					<div className="max-w-3xl mx-auto space-y-4">
						<LatestNews />
					</div>
					<div className="text-center mt-12">
						{/* <Link
							href="/news"
							className="inline-block bg-transparent text-green-600 hover:text-white px-12 py-4 rounded-full hover:bg-green-600 transition-colors text-center border-1"
						>
							新着情報一覧を見る<span className="ps-6">&gt;</span>
						</Link> */}
					</div>
				</div>
			</section>

			{/* よくあるご質問 */}
			<section className="py-20 bg-white">
				<div className="container mx-auto px-4">
					<h2 className="text-green-600 text-3xl font-bold text-center mb-12 font-serif">
						よくあるご質問
					</h2>
					<div className="max-w-3xl mx-auto">
						<div className="space-y-6">
							<div className="bg-white rounded-lg p-6 shadow-md">
								<h3 className="text-lg font-bold mb-3 flex items-center">
									<span className="text-green-600 mr-2">Q.</span>
									草刈りの料金はどのように決まりますか？
								</h3>
								<p className="text-gray-600 leading-8 flex items-start">
									<span className="text-green-600 mr-2">A.</span>
									面積、草の高さ、作業の難易度によって料金が変わります。まずは無料で現地調査を行い、お見積りをご提示させていただきます。定期的なメンテナンス契約の場合は、お得な料金プランもご用意しております。
								</p>
							</div>
							<div className="bg-white rounded-lg p-6 shadow-md">
								<h3 className="text-lg font-bold mb-3 flex items-center">
									<span className="text-green-600 mr-2">Q.</span>
									太陽光発電所のメンテナンスはどのくらいの頻度で必要ですか？
								</h3>
								<p className="text-gray-600 leading-8 flex items-start">
									<span className="text-green-600 mr-2">A.</span>
									一般的に3ヶ月に1回の定期メンテナンスをお勧めしています。ただし、地域や季節によって草の成長速度が異なるため、発電所の状況に応じて最適な頻度をご提案させていただきます。
								</p>
							</div>
							<div className="bg-white rounded-lg p-6 shadow-md">
								<h3 className="text-lg font-bold mb-3 flex items-center">
									<span className="text-green-600 mr-2">Q.</span>
									人工芝の耐用年数はどのくらいですか？
								</h3>
								<p className="text-gray-600 leading-8 flex items-start">
									<span className="text-green-600 mr-2">A.</span>
									当社で使用している人工芝は、一般的に8〜10年の耐用年数があります。ただし、使用状況やメンテナンスの頻度によって変わります。定期的なメンテナンスを行うことで、より長く美しい状態を保つことができます。
								</p>
							</div>
						</div>
						<div className="text-center mt-12">
							<Link
								href="/faq"
								className="inline-block bg-transparent text-green-600 hover:text-white px-12 py-4 rounded-full hover:bg-green-600 transition-colors text-center border-1"
							>
								よくあるご質問一覧を見る<span className="ps-6">&gt;</span>
							</Link>
						</div>
					</div>
				</div>
			</section>

			<ContactCTA />
		</main>
	);
}
