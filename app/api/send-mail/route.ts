import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
	try {
		const { to, subject, text } = await request.json();

		if (!process.env.RESEND_API_KEY) {
			throw new Error('Resend APIキーが設定されていません');
		}

		// メール送信
		const { data, error } = await resend.emails.send({
			from: 'Green Management <onboarding@resend.dev>',
			to: [to],
			subject,
			text,
		});

		if (error) {
			throw error;
		}

		console.log('メール送信成功:', data);

		return NextResponse.json(
			{ message: 'メール送信に成功しました' },
			{ status: 200 }
		);
	} catch (error) {
		console.error('メール送信エラー:', error);
		return NextResponse.json(
			{
				message: 'メール送信に失敗しました',
				error: error instanceof Error ? error.message : '不明なエラー',
			},
			{ status: 500 }
		);
	}
}
