import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
	return (
		<main>
			{/* ヒーローセクション */}
			<section className="relative h-[50vh] flex items-center">
				<div className="absolute inset-0 z-0">
					<Image
						src="/service1.jpg"
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
							草刈り事業
						</h1>
						<p className="text-xl mb-8 leading-8">
							あなたの庭を美しく保ちます。
						</p>
						<div className="flex flex-col sm:flex-row gap-4">
							<Link
								href="/contact"
								className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors text-center border-2 border-green-600 hover:border-green-700"
							>
								無料見積もり
							</Link>
							<Link
								href="/case-studies"
								className="bg-transparent text-white px-8 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-colors text-center border-2 border-white"
							>
								施工事例を見る
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* サービス紹介 */}
			<section className="py-20 bg-white">
				<div className="container mx-auto px-4">
					<h2 className="text-green-600 text-3xl font-bold text-center mb-12 font-serif">
						グリーンマネイジメントの草刈りについて
					</h2>
					<div className="max-w-3xl mx-auto space-y-12">
						<div className="space-y-4">
							<h3 className="text-2xl font-bold text-gray-900">丁寧な草刈り作業</h3>
							<p className="text-gray-600 leading-relaxed">
								プロの技術と最新の機材を駆使し、お庭の美観を完璧に保ちます。雑草の種類や成長状況に応じた最適な刈り高調整、安全で効率的な作業で、常に清潔で美しい庭を維持。定期的なメンテナンスで、お庭の価値を最大限に引き出します。
							</p>
						</div>

						<div className="space-y-4">
							<h3 className="text-2xl font-bold text-gray-900">除草剤の散布</h3>
							<p className="text-gray-600 leading-relaxed">
								環境に配慮した安全な除草剤を使用し、雑草の再発を防ぎます。お庭の状況に応じて、適切な除草剤を選択。散布後の効果を最大限に引き出すため、天候や季節を考慮した最適なタイミングで作業を実施します。
							</p>
						</div>

						<div className="space-y-4">
							<h3 className="text-2xl font-bold text-gray-900">草刈り後の整地</h3>
							<p className="text-gray-600 leading-relaxed">
								草刈り後の刈り草の回収、整地作業まで徹底的に行います。お庭の見た目を美しく保つだけでなく、雑草の再発を防ぐための環境整備も実施。お客様のご要望に応じて、細部まで丁寧に仕上げます。
							</p>
						</div>

						<div className="text-center mt-8">
							<Link
								href="/contact"
								className="inline-block bg-transparent text-green-600 hover:text-white px-12 py-4 rounded-full hover:bg-green-600 transition-colors text-center border-1"
							>
								お問い合わせ<span className="ps-6">{'>'}</span>
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* 施工事例 */}
			<section className="py-20 bg-gray-50">
				<div className="container mx-auto px-4">
					<h2 className="text-green-600 text-3xl font-bold text-center mb-12 font-serif">
						施工事例（草刈り）
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<div>
							<div className="relative h-64 mb-4 overflow-hidden rounded-lg">
								<Image
									src="/works1.jpg"
									alt="施工事例"
									fill
									className="object-cover transition-transform group-hover:scale-105"
								/>
							</div>
							<h3 className="text-lg font-bold mb-2">草刈り業務</h3>
							<p>埼玉県日高市</p>
						</div>
						<div>
							<div className="relative h-64 mb-4 overflow-hidden rounded-lg">
								<Image
									src="/works2.jpg"
									alt="施工事例"
									fill
									className="object-cover transition-transform group-hover:scale-105"
								/>
							</div>
							<h3 className="text-lg font-bold mb-2">太陽光発電所メンテナンス</h3>
							<p>埼玉県鳩山町</p>
						</div>
						<div>
							<div className="relative h-64 mb-4 overflow-hidden rounded-lg">
								<Image
									src="/works2.jpg"
									alt="施工事例"
									fill
									className="object-cover transition-transform group-hover:scale-105"
								/>
							</div>
							<h3 className="text-lg font-bold mb-2">人工芝施工</h3>
							<p>埼玉県坂戸市</p>
						</div>
					</div>
					
					<div className="text-center mt-12">
						<Link
							href="/cases"
							className="inline-block bg-transparent text-green-600 hover:text-white px-12 py-4 rounded-full hover:bg-green-600 transition-colors text-center border-1"
						>
							施工事例をもっと見る<span className="ps-6">></span>
						</Link>
					</div>
				</div>
			</section>

			{/* 料金プラン */}
			<section className="py-20 bg-gray-50">
				<div className="container mx-auto px-4">
					<h2 className="text-green-600 text-3xl font-bold text-center mb-12 font-serif">
						料金プラン
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{/* お試し利用 */}
						<div className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-200">
							<div className="p-6">
								<h3 className="text-xl font-bold mb-4">お試し利用</h3>
								<p className="text-gray-500 mb-4">はじめてご利用のお客さま</p>
								<div className="text-2xl font-bold text-green-600 mb-6">
									¥5,000~
								</div>
								<ul className="space-y-3 mb-6">
									<li className="flex items-start">
										<svg
											className="h-5 w-5 text-green-600 mr-2 mt-1"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M5 13l4 4L19 7"
											/>
										</svg>
										<span>初回限定料金でご案内</span>
									</li>
									<li className="flex items-start">
										<svg
											className="h-5 w-5 text-green-600 mr-2 mt-1"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M5 13l4 4L19 7"
											/>
										</svg>
										<span>LINE友達登録で特典</span>
									</li>
									<li className="flex items-start">
										<svg
											className="h-5 w-5 text-green-600 mr-2 mt-1"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M5 13l4 4L19 7"
											/>
										</svg>
										<span>この機会にお試しください</span>
									</li>
								</ul>
								<Link
									href="/estimate"
									className="block w-full bg-green-600 text-white text-center px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
								>
									初回限定料金で利用する
								</Link>
							</div>
						</div>

						{/* 通常利用 */}
						<div className="bg-white rounded-lg overflow-hidden shadow-lg border-2 border-green-600 transform scale-105">
							<div className="p-6">
								<h3 className="text-xl font-bold mb-4">通常利用</h3>
								<p className="text-gray-500 mb-4">2回目以降ご利用のお客さま</p>
								<div className="text-2xl font-bold text-green-600 mb-6">
									¥15,000~
								</div>
								<ul className="space-y-3 mb-6">
									<li className="flex items-start">
										<svg
											className="h-5 w-5 text-green-600 mr-2 mt-1"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M5 13l4 4L19 7"
											/>
										</svg>
										<span>面積に応じた割引</span>
									</li>
									<li className="flex items-start">
										<svg
											className="h-5 w-5 text-green-600 mr-2 mt-1"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M5 13l4 4L19 7"
											/>
										</svg>
										<span>刈高等の調整可能</span>
									</li>
									<li className="flex items-start">
										<svg
											className="h-5 w-5 text-green-600 mr-2 mt-1"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M5 13l4 4L19 7"
											/>
										</svg>
										<span>詳細は別途ご相談</span>
									</li>
								</ul>
								<Link
									href="/contact"
									className="block w-full bg-green-600 text-white text-center px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
								>
									お問い合わせ
								</Link>
							</div>
						</div>

						{/* サブスクリプション */}
						<div className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-200">
							<div className="p-6">
								<h3 className="text-xl font-bold mb-4">サブスクリプション</h3>
								<p className="text-gray-500 mb-4">定期利用のお客さま</p>
								<div className="text-2xl font-bold text-green-600 mb-6">
									¥100,000~
								</div>
								<ul className="space-y-3 mb-6">
									<li className="flex items-start">
										<svg
											className="h-5 w-5 text-green-600 mr-2 mt-1"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M5 13l4 4L19 7"
											/>
										</svg>
										<span>定期的な保守管理</span>
									</li>
									<li className="flex items-start">
										<svg
											className="h-5 w-5 text-green-600 mr-2 mt-1"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M5 13l4 4L19 7"
											/>
										</svg>
										<span>時間的コストを削減</span>
									</li>
									<li className="flex items-start">
										<svg
											className="h-5 w-5 text-green-600 mr-2 mt-1"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M5 13l4 4L19 7"
											/>
										</svg>
										<span>雑草の高さを管理</span>
									</li>
								</ul>
								<Link
									href="/contact"
									className="block w-full bg-green-600 text-white text-center px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
								>
									お問い合わせ
								</Link>
							</div>
						</div>
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
							{[1, 2, 3].map((i) => (
								<div key={i} className="bg-white rounded-lg p-6 shadow-md">
									<h3 className="text-lg font-bold mb-3 flex items-center">
										<span className="text-green-600 mr-2">Q.</span>
										よくあるご質問 {i}
									</h3>
									<p className="text-gray-600 pl-6 flex items-start">
										<span className="text-green-600 mr-2">A.</span>
										よくあるご質問の回答をここに記載します。お客様からよくいただく質問と回答を掲載しています。
									</p>
								</div>
							))}
						</div>
						<div className="text-center mt-12">
							<Link
								href="/faq"
								className="inline-block bg-transparent text-green-600 hover:text-white px-12 py-4 rounded-full hover:bg-green-600 transition-colors text-center border-1"
							>
								よくあるご質問一覧を見る<span className="ps-6">></span>
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* お問い合わせ */}
			<section className="py-20 bg-gray-50">
				<div className="container mx-auto px-4">
					<h2 className="text-green-600 text-3xl font-bold text-center mb-12 font-serif">
						お問い合わせ
					</h2>
					<p className="text-lg text-center text-gray-600 mb-8">
						無料でお見積り・ご相談を承っております。
						<br />
						お庭のことでお困りの際は、ぜひご連絡ください。
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Link
							href="/contact"
							className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors text-center border-2 border-green-600 hover:border-green-700"
						>
							お問い合わせ
						</Link>
						<Link
							href="/estimate"
							className="bg-transparent text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors text-center border-2 border-gray-300 hover:border-gray-400"
						>
							簡単お見積もり
						</Link>
					</div>
				</div>
			</section>
		</main>
	);
}
