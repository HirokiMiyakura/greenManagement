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
						src="/service3.jpg"
						alt="人工芝施工"
						fill
						className="object-cover"
						priority
					/>
					<div className="absolute inset-0 bg-black/40" />
				</div>
				<div className="container mx-auto px-4 relative z-10">
					<div className="max-w-2xl text-white">
						<h1 className="text-6xl font-bold mb-6 font-serif leading-20">
							人工芝事業
						</h1>
						<p className="text-xl mb-8 leading-8">
							人工芝で見た目の美しさと維持管理の楽さをお届けします。
						</p>
						<div className="flex flex-col sm:flex-row gap-4">
							<Link
								href="/contact"
								className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors text-center border-2 border-green-600 hover:border-green-700"
							>
								無料見積もり<span className="ps-4">&gt;</span>
							</Link>
							<Link
								href="/case-studies"
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
						グリーンマネイジメントの人工芝施工についてs
					</h2>
					<div className="max-w-3xl mx-auto space-y-12">
						<div className="space-y-4">
							<h3 className="text-2xl font-bold text-gray-900">
								一年中緑の美しい庭
							</h3>
							<p className="text-gray-600 leading-relaxed">
								高品質な人工芝を使用し、一年中鮮やかな緑色を維持。天然芝のような自然な見た目と、優れた耐久性を両立。お庭の美観を損なうことなく、理想的な緑の空間を実現します。
							</p>
						</div>

						<div className="space-y-4">
							<h3 className="text-2xl font-bold text-gray-900">
								メンテナンスフリーの快適さ
							</h3>
							<p className="text-gray-600 leading-relaxed">
								草刈りや水やり、肥料散布などの手間から完全に解放。雑草の心配もなく、常に清潔で美しい状態を維持。お手入れの時間を他の楽しみに使える、新しい庭ライフを提案します。
							</p>
						</div>

						<div className="space-y-4">
							<h3 className="text-2xl font-bold text-gray-900">
								プロの施工技術
							</h3>
							<p className="text-gray-600 leading-relaxed">
								豊富な施工実績を持つプロの技術で、美しく長持ちする人工芝を施工。適切な下地処理と丁寧な施工により、水はけの良さと耐久性を確保。お客様のご要望に応じた、理想的な庭づくりをサポートします。
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
						施工事例（人工芝施工）
					</h2>
					<LatestCases category="artificialgrass" />
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
									人工芝の寿命はどのくらいですか？
								</h3>
								<p className="text-gray-600 leading-8 flex items-start">
									<span className="text-green-600 mr-2">A.</span>
									一般的に8〜10年程度です。ただし、使用頻度やメンテナンス状況によって変わります。当社では高品質な人工芝を使用し、適切な施工を行うことで、より長い寿命を実現しています。また、定期的なメンテナンスにより、美しさと機能性を長く保つことができます。
								</p>
							</div>
							<div className="bg-white rounded-lg p-6 shadow-md">
								<h3 className="text-lg font-bold mb-3 flex items-center">
									<span className="text-green-600 mr-2">Q.</span>
									下地工事は必要ですか？
								</h3>
								<p className="text-gray-600 leading-8 flex items-start">
									<span className="text-green-600 mr-2">A.</span>
									はい、適切な下地工事は必須です。水はけの悪い下地では、人工芝の寿命が短くなったり、カビが発生したりする可能性があります。当社では、現地調査を行い、最適な下地工事を提案させていただきます。砂利や砕石を使用した排水層の構築など、丁寧な下地処理を行います。
								</p>
							</div>
							<div className="bg-white rounded-lg p-6 shadow-md">
								<h3 className="text-lg font-bold mb-3 flex items-center">
									<span className="text-green-600 mr-2">Q.</span>
									ペットを飼っていますが、問題ありませんか？
								</h3>
								<p className="text-gray-600 leading-8 flex items-start">
									<span className="text-green-600 mr-2">A.</span>
									問題ありません。当社の人工芝は、ペットの爪や排泄物にも強い耐久性を持っています。また、適切な下地処理により、においや汚れも気になりにくい設計になっています。ペットと一緒に快適に過ごせる空間づくりをサポートいたします。
								</p>
							</div>
							<div className="bg-white rounded-lg p-6 shadow-md">
								<h3 className="text-lg font-bold mb-3 flex items-center">
									<span className="text-green-600 mr-2">Q.</span>
									メンテナンスは必要ですか？
								</h3>
								<p className="text-gray-600 leading-8 flex items-start">
									<span className="text-green-600 mr-2">A.</span>
									天然芝と比べて大幅にメンテナンスの手間は減りますが、長持ちさせるためには定期的なケアが推奨されます。主なメンテナンスは、ブラッシングによる芝の立ち上げ、落ち葉やゴミの除去、必要に応じた洗浄などです。当社では、メンテナンス方法のご説明や、定期的なメンテナンスサービスも提供しております。
								</p>
							</div>
							<div className="bg-white rounded-lg p-6 shadow-md">
								<h3 className="text-lg font-bold mb-3 flex items-center">
									<span className="text-green-600 mr-2">Q.</span>
									施工期間はどのくらいかかりますか？
								</h3>
								<p className="text-gray-600 leading-8 flex items-start">
									<span className="text-green-600 mr-2">A.</span>
									一般的な庭（約20㎡）の場合、下地工事を含めて2〜3日程度です。ただし、敷地面積や地形、下地の状態によって期間は変わります。現地調査時に、より具体的な施工期間をご案内させていただきます。また、天候によっては工期が変更になる場合もございます。
								</p>
							</div>
							<div className="bg-white rounded-lg p-6 shadow-md">
								<h3 className="text-lg font-bold mb-3 flex items-center">
									<span className="text-green-600 mr-2">Q.</span>
									料金はどのように決まりますか？
								</h3>
								<p className="text-gray-600 leading-8 flex items-start">
									<span className="text-green-600 mr-2">A.</span>
									敷地面積、使用する人工芝の種類、下地工事の内容によって料金が変わります。まずは無料で現地調査を行い、お見積りをご提示させていただきます。高品質な人工芝と丁寧な施工で、長くお楽しみいただける空間づくりをご提案いたします。
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
