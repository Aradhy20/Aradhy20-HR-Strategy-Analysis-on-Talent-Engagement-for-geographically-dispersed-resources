# Sanmati Spectrum of Knowledge & Emerging Discourse

A modern, dynamic academic journal website built with Next.js 14, React, TypeScript, Tailwind CSS, and PostgreSQL.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14 (App Router), React 19, TypeScript, Tailwind CSS
- **Database**: PostgreSQL with Prisma ORM for type-safe database access
- **Responsive Design**: Mobile-first, fully responsive design
- **Dynamic Content**: CMS-like functionality for managing journal content
- **Paper Submission System**: Complete workflow for manuscript submissions
- **Editorial Management**: Manage editorial board members and reviewers
- **Peer Review System**: Double-blind peer review workflow
- **Authentication**: Secure authentication with NextAuth.js v5

## 📋 Pages

1. **Home** - Hero section, journal overview, latest publications
2. **Basic Information** - Vision, mission, objectives, scope
3. **Editorial Team** - Editors-in-Chief, editorial board, advisory board
4. **Publication & Policy** - Ethics, peer review, plagiarism policies
5. **Submission Guidelines** - Call for papers, formatting guidelines
6. **Compliance** - COPE guidelines, quality assurance
7. **Admin Dashboard** - Manage submissions, content, and users

## 🛠️ Technology Stack

- **Frontend**: Next.js 14, React 19, TypeScript
- **Styling**: Tailwind CSS v3
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Authentication**: NextAuth.js v5
- **Form Handling**: React Hook Form + Zod
- **Icons**: Lucide React

## 📦 Installation

### Prerequisites

- Node.js 18+ 
- PostgreSQL database
- npm or yarn

### Setup Steps

1. **Clone the repository**
   ```bash
   cd sanmati-journal
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   
   Copy `.env.example` to `.env` and update with your values:
   ```bash
   cp .env.example .env
   ```

   Update the following in `.env`:
   ```env
   DATABASE_URL="postgresql://user:password@localhost:5432/sanmati_journal?schema=public"
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="your-secret-key-here"
   ADMIN_EMAIL="admin@sanmatijournal.com"
   ADMIN_PASSWORD="your-secure-password"
   ```

4. **Setup the database**
   
   Generate Prisma client:
   ```bash
   npx prisma generate
   ```

   Run database migrations:
   ```bash
   npx prisma migrate dev --name init
   ```

   (Optional) Seed the database:
   ```bash
   npx prisma db seed
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🗄️ Database Schema

The application uses PostgreSQL with the following main models:

- **User** - Authors, reviewers, editors, admins
- **Paper** - Manuscript submissions
- **CoAuthor** - Co-authors for papers
- **Review** - Peer review records
- **EditorialMember** - Editorial board members
- **JournalIssue** - Published journal issues
- **BasicInfo** - Dynamic content for basic information
- **Policy** - Publication policies
- **SubmissionGuideline** - Submission guidelines
- **ImportantDate** - Key dates and deadlines

## 🎨 Design Features

- Clean, modern academic design
- Gradient color schemes (Primary blue, Accent purple)
- Responsive navigation with mobile menu
- Card-based layouts
- Smooth transitions and hover effects
- Accessible design patterns

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1920px+)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🔐 Authentication & Authorization

- NextAuth.js v5 for secure authentication
- Role-based access control (Admin, Editor, Reviewer, Author)
- Protected admin routes
- Session management

## 📝 Content Management

Admin users can manage:
- Paper submissions and reviews
- Editorial board members
- Journal information and policies
- Submission guidelines
- Important dates

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Configure environment variables
4. Deploy

### Other Platforms

The application can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Render
- DigitalOcean App Platform

## 📊 Database Management

### Prisma Studio

View and edit your database with Prisma Studio:
```bash
npx prisma studio
```

### Migrations

Create a new migration:
```bash
npx prisma migrate dev --name migration_name
```

Apply migrations in production:
```bash
npx prisma migrate deploy
```

## 🧪 Development

### Build for production
```bash
npm run build
```

### Start production server
```bash
npm start
```

### Lint code
```bash
npm run lint
```

## 📧 Contact Information

**Journal Email**: sanmatijournal@gmail.com

**Editor-in-Chief**: Dr. Namrta Jain
- Email: sanmatijournal@gmail.com
- Phone: +91 9870713912, +91 8979782949

**Co-Editor-in-Chief**: Dr. Ratnesh Kumar Jain
- Email: jainratnesh79@gmail.com
- Phone: +91 7999525735

## 📄 License

This project is proprietary software for Sanmati Spectrum of Knowledge & Emerging Discourse.

## 🙏 Acknowledgments

- Teerthanker Mahaveer University, Moradabad
- JTS Publications
- All editorial board members and reviewers

---

**ISSN (Print)**: 3108-1819  
**Year of Commencement**: 2026  
**Publication Frequency**: Quarterly
