import { client } from '@/libs/client';
import Link from 'next/link';

type Post = {
	id: string;
	title: string;
	publishedAt: string;
};

// 日付整形関数を追加
const formatDate = (dateString: string): string => {
	const date = new Date(dateString);
	const year = date.getFullYear();
	const month = date.getMonth() + 1; // 0始まりなので+1
	const day = date.getDate();
	return `${year}.${month}.${day}`;
};

async function getBlogPosts() {
	const data = await client.get({
		endpoint: 'news',
		queries: {
			fields: 'id,title,publishedAt',
			limit: 5,
		},
	});

	return data.contents;
}

export default async function ShowBlogPosts() {
	const posts = await getBlogPosts();
	return (
		<div className="space-y-4">
			{posts.map((post: Post) => (
				<div key={post.id} className="flex items-center space-x-6">
					<div className="text-sm text-gray-500">
						{formatDate(post.publishedAt)}
					</div>
					<Link
						href={`/news/${post.id}`}
						className="hover:underline hover:text-green-600"
					>
						<h3 className="text-lg">{post.title}</h3>
					</Link>
				</div>
			))}
		</div>
	);
}
