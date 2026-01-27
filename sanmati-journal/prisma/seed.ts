import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seed...');

  // Create admin user
  const hashedPassword = await bcrypt.hash('admin123', 10);
  const admin = await prisma.user.upsert({
    where: { email: 'admin@sanmatijournal.com' },
    update: {},
    create: {
      email: 'admin@sanmatijournal.com',
      name: 'Admin User',
      password: hashedPassword,
      role: 'ADMIN',
      affiliation: 'Sanmati Journal',
    },
  });
  console.log('✅ Admin user created:', admin.email);

  // Create Editorial Members
  const editorialMembers = [
    {
      name: 'Dr. Namrta Jain',
      designation: 'Assistant Professor',
      affiliation: 'Teerthanker Mahaveer University, Moradabad',
      email: 'sanmatijournal@gmail.com',
      phone: '+91 9870713912, +91 8979782949',
      profileUrl: 'https://scholar.google.com',
      category: 'Editor-in-Chief',
      order: 1,
    },
    {
      name: 'Dr. Ratnesh Kumar Jain',
      designation: 'Assistant Dean Students\' Welfare / Associate Professor',
      affiliation: 'Teerthanker Mahaveer University, Moradabad',
      email: 'jainratnesh79@gmail.com',
      phone: '+91 7999525735',
      category: 'Co-Editor-in-Chief',
      order: 2,
    },
    {
      name: 'Prof. Pralhad Joshi',
      designation: 'Vice-Chancellor',
      affiliation: 'Kumar Bhaskar Varma Sanskrit and Ancient Studies University, Assam',
      category: 'Editorial Board',
      order: 3,
    },
    {
      name: 'Dr. Kalpna Jain',
      designation: 'Principal / Associate Professor',
      affiliation: 'Teerthanker Mahaveer University, Moradabad',
      category: 'Editorial Board',
      order: 4,
    },
    {
      name: 'Prof. S. P. Subashini',
      designation: 'Dean, Faculty of Nursing',
      affiliation: 'Teerthanker Mahaveer University, Moradabad',
      category: 'Editorial Board',
      order: 5,
    },
    {
      name: 'Dr. Harishchandra Verma',
      designation: 'Principal/Director',
      affiliation: 'Shri Vishwanath College of Pharmacy, Sultanpur',
      category: 'Editorial Board',
      order: 6,
    },
    {
      name: 'Dr. Amita Kumari',
      designation: 'Assistant Professor',
      affiliation: 'Vinoba Bhave University, Hazaribagh, Jharkhand',
      category: 'Editorial Board',
      order: 7,
    },
    {
      name: 'Dr. Rakesh Kumar',
      designation: 'Associate Professor',
      affiliation: 'Faculty of Law & Legal Studies, Teerthanker Mahaveer University, Moradabad',
      category: 'Advisory Board',
      order: 8,
    },
    {
      name: 'Dr. Sushil Kumar',
      designation: 'HOD (B.Ed.) & Associate Professor',
      affiliation: 'B. N. Mandal University, Bihar',
      category: 'Advisory Board',
      order: 9,
    },
  ];

  for (const member of editorialMembers) {
    await prisma.editorialMember.upsert({
      where: { id: member.name.replace(/\s+/g, '-').toLowerCase() },
      update: {},
      create: member,
    });
  }
  console.log('✅ Editorial members created');

  // Create Basic Info
  const basicInfoData = [
    {
      section: 'vision',
      title: 'Vision',
      content: 'To promote high-quality, ethical, and multidisciplinary research that contributes to knowledge creation and addresses contemporary academic and societal challenges.',
    },
    {
      section: 'mission',
      title: 'Mission',
      content: 'To provide a credible platform for scholars, researchers, and academicians to publish original, peer-reviewed research, encouraging innovation, inclusivity, and academic excellence across disciplines.',
    },
    {
      section: 'objective',
      title: 'Objective',
      content: 'The objective of the journal is to provide a national multidisciplinary platform for scholars, researchers, and the academic community. It encourages original research, innovative perspectives, and excellence in scholarly inquiry.',
    },
    {
      section: 'scope',
      title: 'Scope',
      content: 'The journal publishes research papers, case studies, theme-based articles, book reviews, and research presented at conferences and seminars across arts, humanities, social sciences, mass communication, sciences, and other diverse disciplines.',
    },
    {
      section: 'about',
      title: 'About the Journal',
      content: 'Sanmati Spectrum of Knowledge & Emerging Discourse is dedicated to promoting multidisciplinary academic dialogue and advancing knowledge through rigorous research. The journal encourages innovative perspectives that integrate arts, sciences, society, culture, and technology.',
    },
  ];

  for (const info of basicInfoData) {
    await prisma.basicInfo.upsert({
      where: { section: info.section },
      update: {},
      create: info,
    });
  }
  console.log('✅ Basic information created');

  // Create Policies
  const policiesData = [
    {
      section: 'publication_ethics',
      title: 'Publication Ethics',
      content: 'Sanmati Spectrum of Knowledge & Emerging Discourse is committed to the highest standards of academic quality, research integrity, and ethical publishing. The journal follows COPE guidelines and expects authors, editors, and reviewers to uphold fairness, transparency, and responsibility.',
    },
    {
      section: 'peer_review',
      title: 'Peer Review Policy',
      content: 'All submitted manuscripts undergo a Double-Blind Peer Review process, in which the identities of both authors and reviewers are kept confidential. This process ensures fairness, objectivity, originality, and academic rigor.',
    },
    {
      section: 'plagiarism',
      title: 'Plagiarism Policy',
      content: 'The journal follows a zero-tolerance policy toward plagiarism. All submissions are screened for originality. Manuscripts with a Similarity Index exceeding 20% (excluding references) are rejected without review.',
    },
  ];

  for (const policy of policiesData) {
    await prisma.policy.upsert({
      where: { section: policy.section },
      update: {},
      create: policy,
    });
  }
  console.log('✅ Policies created');

  // Create Important Dates
  await prisma.importantDate.create({
    data: {
      label: 'Last Date of Submission',
      date: new Date('2026-02-25'),
      description: 'Volume 1, Issue 1',
    },
  });
  console.log('✅ Important dates created');

  console.log('🎉 Database seed completed successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
