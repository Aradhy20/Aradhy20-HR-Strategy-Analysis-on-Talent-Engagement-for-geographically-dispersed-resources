"use client";

import Link from "next/link";
import { BookOpen, Users, FileText, Award, Calendar, Mail } from "lucide-react";

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600 text-white py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Sanmati Spectrum of Knowledge
              <span className="block text-primary-100 mt-2">& Emerging Discourse</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-50 max-w-3xl mx-auto">
              A National Multidisciplinary Peer Reviewed Refereed Journal
            </p>
            <p className="text-lg text-primary-100 max-w-4xl mx-auto">
              Arts, Humanities, Social Sciences, Journalism & Mass Communication, Science
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <Link
                href="/submission-guidelines"
                className="bg-white text-primary-700 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
              >
                Submit Your Paper
              </Link>
              <Link
                href="/basic-info"
                className="bg-primary-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-900 transition-colors border border-primary-500"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About the Journal</h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
          </div>
          <div className="max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed space-y-4">
            <p>
              <strong>Sanmati Spectrum of Knowledge & Emerging Discourse</strong> is a national, multidisciplinary, 
              peer-reviewed and referred quarterly journal. The journal provides a scholarly platform for original 
              research, case studies, thematic articles, book reviews, and conference/seminar papers across diverse disciplines.
            </p>
            <p>
              We are dedicated to promoting multidisciplinary academic dialogue and advancing knowledge through rigorous 
              research. The journal encourages innovative perspectives that integrate arts, sciences, society, culture, 
              and technology.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Publish With Us</h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Award className="w-12 h-12 text-primary-600" />}
              title="Peer Reviewed"
              description="Double-blind peer review process ensuring academic rigor and quality"
            />
            <FeatureCard
              icon={<BookOpen className="w-12 h-12 text-primary-600" />}
              title="Multidisciplinary"
              description="Covers diverse fields from arts to sciences, fostering interdisciplinary research"
            />
            <FeatureCard
              icon={<Users className="w-12 h-12 text-primary-600" />}
              title="Expert Editorial Board"
              description="Guided by renowned academicians and researchers from prestigious institutions"
            />
            <FeatureCard
              icon={<FileText className="w-12 h-12 text-primary-600" />}
              title="ISSN Registered"
              description="ISSN (Print): 3108-1819 - Nationally recognized publication"
            />
            <FeatureCard
              icon={<Calendar className="w-12 h-12 text-primary-600" />}
              title="Quarterly Publication"
              description="Regular publication schedule with fast review and acceptance process"
            />
            <FeatureCard
              icon={<Mail className="w-12 h-12 text-primary-600" />}
              title="Bilingual Support"
              description="Accepts manuscripts in both Hindi and English languages"
            />
          </div>
        </div>
      </section>

      {/* Journal Information */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Journal Information</h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <InfoCard label="ISSN (Print)" value="3108-1819" />
            <InfoCard label="Frequency" value="Quarterly" />
            <InfoCard label="Language" value="Hindi & English" />
            <InfoCard label="Year Started" value="2026" />
            <InfoCard label="Nature" value="National" />
            <InfoCard label="Format" value="Print (Offline)" />
            <InfoCard label="Review Process" value="Double-Blind" />
            <InfoCard label="Publication Month" value="March 2026" />
          </div>
        </div>
      </section>

      {/* Editorial Team Preview */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Editorial Leadership</h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <EditorCard
              name="Dr. Namrta Jain"
              title="Editor-in-Chief"
              affiliation="Assistant Professor, Teerthanker Mahaveer University, Moradabad"
              email="sanmatijournal@gmail.com"
              phone="+91 9870713912, +91 8979782949"
            />
            <EditorCard
              name="Dr. Ratnesh Kumar Jain"
              title="Co-Editor-in-Chief"
              affiliation="Assistant Dean / Associate Professor, Teerthanker Mahaveer University, Moradabad"
              email="jainratnesh79@gmail.com"
              phone="+91 7999525735"
            />
          </div>
          <div className="text-center mt-8">
            <Link
              href="/editorial-team"
              className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              View Full Editorial Team
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-4xl font-bold">Submit Your Research</h2>
          <p className="text-xl text-primary-50">
            Volume 1, Issue 1 | January–March 2026
          </p>
          <p className="text-lg">
            Last Date of Submission: <strong>25 February 2026</strong>
          </p>
          <p className="text-lg">
            Notification of Acceptance: Within 10–15 days
          </p>
          <Link
            href="/submission-guidelines"
            className="inline-block bg-white text-primary-700 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-colors mt-4"
          >
            View Submission Guidelines
          </Link>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-100">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function InfoCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary-600">
      <p className="text-sm text-gray-600 mb-1">{label}</p>
      <p className="text-lg font-bold text-gray-900">{value}</p>
    </div>
  );
}

function EditorCard({ name, title, affiliation, email, phone }: { 
  name: string; 
  title: string; 
  affiliation: string; 
  email: string; 
  phone: string;
}) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
      <p className="text-primary-600 font-semibold mb-4">{title}</p>
      <p className="text-gray-700 mb-4">{affiliation}</p>
      <div className="space-y-2 text-sm text-gray-600">
        <p>📧 {email}</p>
        <p>📞 {phone}</p>
      </div>
    </div>
  );
}
