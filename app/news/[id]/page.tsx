import { client } from '@/libs/client';
import Image from 'next/image';
import { notFound } from 'next/navigation';

type News = {
	id: string;
	title: string;
	content: string;
	publishedAt: string;
	eyecatch?: {
		url: string;
		height: number;
		width: number;
	};
};

// 日付整形関数
const formatDate = (dateString: string): string => {
	const date = new Date(dateString);
	const year = date.getFullYear();
	const month = date.getMonth() + 1;
	const day = date.getDate();
	return `${year}.${month}.${day}`;
};

async function getNewsDetail(id: string) {
	try {
		const news = await client.get<News>({
			endpoint: 'news',
			contentId: id,
		});
		return news;
	} catch (error) {
		return null;
		console.log(error);
	}
}

export default async function NewsDetail({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;
	const news = await getNewsDetail(id);

	if (!news) {
		notFound();
	}

	return (
		<main>
			{/* ヒーローセクション */}
			<section className="relative h-[50vh] flex items-center">
				{news.eyecatch && (
					<div className="absolute inset-0 z-0">
						<Image
							src={news.eyecatch.url}
							alt={news.title}
							fill
							className="object-cover"
							priority
						/>
						<div className="absolute inset-0 bg-black/40" />
					</div>
				)}
				<div className="container mx-auto px-4 relative z-10">
					<div className="text-white">
						<div className="tracking-wider text-xl mb-8 ps-2">
							{formatDate(news.publishedAt)}
						</div>
						<h1 className="tracking-wider text-4xl md:text-5xl font-bold mb-6 font-serif">
							{news.title}
						</h1>
					</div>
				</div>
			</section>

			{/* 本文 */}
			<section className="py-20">
				<div className="container mx-auto px-4">
					<div className="max-w-3xl mx-auto">
						<div
							className="prose prose-lg max-w-none leading-8"
							dangerouslySetInnerHTML={{ __html: news.content }}
						/>
					</div>
				</div>
			</section>
		</main>
	);
}
