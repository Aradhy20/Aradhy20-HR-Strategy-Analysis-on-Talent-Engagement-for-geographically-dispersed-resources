import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const status = searchParams.get('status');

    const where = status ? { status: status as any } : {};

    const papers = await prisma.paper.findMany({
      where,
      include: {
        author: {
          select: {
            id: true,
            name: true,
            email: true,
            affiliation: true,
          },
        },
        coAuthors: true,
      },
      orderBy: {
        submittedAt: 'desc',
      },
    });

    return NextResponse.json({ papers });
  } catch (error) {
    console.error('Error fetching papers:', error);
    return NextResponse.json(
      { error: 'Failed to fetch papers' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      title,
      abstract,
      keywords,
      language,
      submissionArea,
      manuscriptFile,
      authorId,
      coAuthors,
    } = body;

    const paper = await prisma.paper.create({
      data: {
        title,
        abstract,
        keywords,
        language,
        submissionArea,
        manuscriptFile,
        authorId,
        coAuthors: {
          create: coAuthors || [],
        },
      },
      include: {
        author: true,
        coAuthors: true,
      },
    });

    return NextResponse.json({ paper }, { status: 201 });
  } catch (error) {
    console.error('Error creating paper:', error);
    return NextResponse.json(
      { error: 'Failed to create paper submission' },
      { status: 500 }
    );
  }
}
