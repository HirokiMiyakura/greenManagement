import Image from 'next/image';
import Link from 'next/link';
import LatestCases from '@/app/components/LatestCases';
import ContactCTA from '@/app/components/ContactCTA';

export default async function Home() {
	return (
		<main>
			{/* ヒーローセクション */}
			<section className="relative h-[60vh] flex items-center">
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
						グリーンマネイジメントの草刈りについて
					</h2>
					<div className="max-w-3xl mx-auto space-y-12">
						<div className="space-y-4">
							<h3 className="text-2xl font-bold text-gray-900">
								丁寧な草刈り作業
							</h3>
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
							<h3 className="text-2xl font-bold text-gray-900">
								草刈り後の整地
							</h3>
							<p className="text-gray-600 leading-relaxed">
								草刈り後の刈り草の回収、整地作業まで徹底的に行います。お庭の見た目を美しく保つだけでなく、雑草の再発を防ぐための環境整備も実施。お客様のご要望に応じて、細部まで丁寧に仕上げます。
							</p>
						</div>

						<div className="text-center mt-8">
							<Link
								href="/contact"
								className="inline-block bg-transparent text-green-600 hover:text-white px-12 py-4 rounded-full hover:bg-green-600 transition-colors text-center border-1"
							>
								お問い合わせ<span className="ps-6">&gt;</span>
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
					<LatestCases category="grasscutting" />
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
									除草剤は使用しますか？安全ですか？
								</h3>
								<p className="text-gray-600 leading-8 flex items-start">
									<span className="text-green-600 mr-2">A.</span>
									環境に配慮した安全な除草剤を使用しています。お子様やペットがいる場合、または有機栽培を行っている場合は、除草剤を使用しない方法もご提案可能です。お客様のご要望に応じて、最適な方法を選択させていただきます。
								</p>
							</div>
							<div className="bg-white rounded-lg p-6 shadow-md">
								<h3 className="text-lg font-bold mb-3 flex items-center">
									<span className="text-green-600 mr-2">Q.</span>
									草刈り後の草の処分はどうなりますか？
								</h3>
								<p className="text-gray-600 leading-8 flex items-start">
									<span className="text-green-600 mr-2">A.</span>
									刈り取った草は全て回収し、適切に処分いたします。ご希望の場合は、堆肥化も可能です。また、お客様がご自身で処分したい場合も、ご要望に応じて対応させていただきます。
								</p>
							</div>
							<div className="bg-white rounded-lg p-6 shadow-md">
								<h3 className="text-lg font-bold mb-3 flex items-center">
									<span className="text-green-600 mr-2">Q.</span>
									雨の日でも作業は可能ですか？
								</h3>
								<p className="text-gray-600 leading-8 flex items-start">
									<span className="text-green-600 mr-2">A.</span>
									小雨程度であれば作業可能ですが、安全面を考慮して、大雨の場合は作業を延期させていただく場合があります。天候による作業の延期は、事前にご連絡させていただきます。
								</p>
							</div>
							<div className="bg-white rounded-lg p-6 shadow-md">
								<h3 className="text-lg font-bold mb-3 flex items-center">
									<span className="text-green-600 mr-2">Q.</span>
									定期的なメンテナンスの頻度はどのくらいですか？
								</h3>
								<p className="text-gray-600 leading-8 flex items-start">
									<span className="text-green-600 mr-2">A.</span>
									一般的に月1回のメンテナンスをお勧めしていますが、季節や草の成長速度によって最適な頻度は変わります。春から夏にかけては2週間に1回、秋から冬にかけては月1回程度が目安です。お庭の状況に応じて、最適な頻度をご提案させていただきます。
								</p>
							</div>
							<div className="bg-white rounded-lg p-6 shadow-md">
								<h3 className="text-lg font-bold mb-3 flex items-center">
									<span className="text-green-600 mr-2">Q.</span>
									作業時間はどのくらいかかりますか？
								</h3>
								<p className="text-gray-600 leading-8 flex items-start">
									<span className="text-green-600 mr-2">A.</span>
									面積や草の状態によって異なりますが、一般的な庭（100㎡程度）で1〜2時間程度です。作業前に現地調査を行い、正確な所要時間をお見積りさせていただきます。また、作業の進捗状況は随時ご報告いたします。
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
