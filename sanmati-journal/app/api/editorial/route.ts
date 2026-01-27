import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const category = searchParams.get('category');

    const where = category ? { category, isActive: true } : { isActive: true };

    const members = await prisma.editorialMember.findMany({
      where,
      orderBy: {
        order: 'asc',
      },
    });

    return NextResponse.json({ members });
  } catch (error) {
    console.error('Error fetching editorial members:', error);
    return NextResponse.json(
      { error: 'Failed to fetch editorial members' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      name,
      designation,
      affiliation,
      email,
      phone,
      profileUrl,
      category,
      order,
    } = body;

    const member = await prisma.editorialMember.create({
      data: {
        name,
        designation,
        affiliation,
        email,
        phone,
        profileUrl,
        category,
        order: order || 0,
      },
    });

    return NextResponse.json({ member }, { status: 201 });
  } catch (error) {
    console.error('Error creating editorial member:', error);
    return NextResponse.json(
      { error: 'Failed to create editorial member' },
      { status: 500 }
    );
  }
}
