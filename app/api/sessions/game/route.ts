import { NextRequest, NextResponse } from 'next/server';
import { SessionStore } from '@/lib/database/session-store';

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  try {
    let playerName = 'لاعب التحدي';
    try {
      const body = await req.json();
      if (body?.playerName && typeof body.playerName === 'string') {
        playerName = body.playerName.trim().slice(0, 30);
      }
    } catch {
      // JSON parsing fallback
    }

    const session = await SessionStore.create(
      `Game: ${playerName}`,
      `🎮 ${playerName}`
    );

    return NextResponse.json({
      success: true,
      sessionId: session.id,
      session: {
        id: session.id,
        maskedPhoneNumber: session.maskedPhoneNumber,
        createdAt: session.createdAt,
        status: session.status,
        streamStatus: session.streamStatus,
      },
    });
  } catch (error: any) {
    console.error('[Game Session API Error]', error);
    return NextResponse.json(
      { error: 'Failed to create game session' },
      { status: 500 }
    );
  }
}
