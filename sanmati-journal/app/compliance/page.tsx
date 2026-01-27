import { Shield, FileCheck, Award, BookOpen } from "lucide-react";

export default function CompliancePage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-600 to-accent-600 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Compliance</h1>
          <p className="text-xl text-primary-50">
            Standards, Guidelines & Best Practices
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16 space-y-16">
        {/* COPE Guidelines */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
              <Shield className="w-8 h-8 text-primary-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">COPE Guidelines Compliance</h2>
          </div>
          <div className="bg-primary-50 p-8 rounded-xl">
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              <strong>Sanmati Spectrum of Knowledge & Emerging Discourse</strong> adheres to the 
              <strong> Committee on Publication Ethics (COPE)</strong> guidelines to ensure the highest 
              standards of publication ethics and integrity.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <ComplianceCard
                title="Ethical Oversight"
                description="All submissions are reviewed for ethical compliance, including proper consent, data handling, and research approval."
              />
              <ComplianceCard
                title="Misconduct Handling"
                description="Clear procedures for addressing plagiarism, data fabrication, duplicate publication, and authorship disputes."
              />
              <ComplianceCard
                title="Transparency"
                description="Open communication about editorial processes, peer review, and publication decisions."
              />
              <ComplianceCard
                title="Accountability"
                description="Editors, reviewers, and authors are held accountable for maintaining research integrity."
              />
            </div>
          </div>
        </section>

        {/* Publication Standards */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center">
              <FileCheck className="w-8 h-8 text-accent-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Publication Standards</h2>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-accent-600">
            <div className="space-y-6">
              <StandardItem
                title="Originality"
                description="All manuscripts must be original, unpublished work. Simultaneous submission to multiple journals is prohibited."
              />
              <StandardItem
                title="Authorship Criteria"
                description="Authors must have made substantial contributions to conception, design, execution, or interpretation of the research."
              />
              <StandardItem
                title="Conflict of Interest"
                description="All potential conflicts of interest must be disclosed at the time of submission."
              />
              <StandardItem
                title="Data Integrity"
                description="Research data must be accurate, verifiable, and available for review upon request."
              />
              <StandardItem
                title="Citation Ethics"
                description="Proper attribution of sources is mandatory. All referenced works must be cited appropriately."
              />
              <StandardItem
                title="Human/Animal Research"
                description="Studies involving human subjects or animals must have appropriate ethical approval and informed consent."
              />
            </div>
          </div>
        </section>

        {/* Quality Assurance */}
        <section className="bg-gray-50 p-8 rounded-xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <Award className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Quality Assurance</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <QualityCard
              title="Rigorous Peer Review"
              description="Double-blind peer review by subject matter experts ensures academic quality and validity."
            />
            <QualityCard
              title="Editorial Oversight"
              description="Experienced editorial board provides guidance and maintains publication standards."
            />
            <QualityCard
              title="Plagiarism Screening"
              description="All submissions undergo plagiarism detection with a maximum 20% similarity threshold."
            />
          </div>
        </section>

        {/* Indexing & Registration */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <BookOpen className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Indexing & Registration</h2>
          </div>
          <div className="bg-blue-50 p-8 rounded-xl">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">ISSN Registration</h3>
                <p className="text-gray-700 mb-2">
                  The journal is registered with the International Standard Serial Number (ISSN) system.
                </p>
                <p className="text-lg font-bold text-primary-600">
                  ISSN (Print): 3108-1819
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Future Indexing</h3>
                <p className="text-gray-700">
                  The journal is working towards indexing in major academic databases and citation indices 
                  to enhance visibility and accessibility of published research.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Author Responsibilities */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Author Responsibilities</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <ResponsibilityCard
              title="Accurate Reporting"
              items={[
                "Present research findings accurately and objectively",
                "Provide sufficient detail for replication",
                "Acknowledge limitations and potential biases",
              ]}
            />
            <ResponsibilityCard
              title="Proper Attribution"
              items={[
                "Cite all sources and prior work appropriately",
                "Acknowledge contributions from all collaborators",
                "Obtain permissions for copyrighted materials",
              ]}
            />
            <ResponsibilityCard
              title="Ethical Conduct"
              items={[
                "Ensure research complies with ethical standards",
                "Obtain necessary approvals and consents",
                "Disclose funding sources and conflicts of interest",
              ]}
            />
            <ResponsibilityCard
              title="Responsive Communication"
              items={[
                "Respond promptly to editorial queries",
                "Address reviewer comments constructively",
                "Correct errors if identified post-publication",
              ]}
            />
          </div>
        </section>

        {/* Reviewer Responsibilities */}
        <section className="bg-accent-50 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Reviewer Responsibilities</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <ReviewerCard
              title="Confidentiality"
              description="Maintain confidentiality of manuscripts and review process"
            />
            <ReviewerCard
              title="Objectivity"
              description="Provide unbiased, constructive, and evidence-based feedback"
            />
            <ReviewerCard
              title="Timeliness"
              description="Complete reviews within agreed timeframe or decline promptly"
            />
            <ReviewerCard
              title="Disclosure"
              description="Declare conflicts of interest and decline if unable to be impartial"
            />
            <ReviewerCard
              title="Respect"
              description="Treat authors' work with respect and provide constructive criticism"
            />
            <ReviewerCard
              title="Integrity"
              description="Report suspected misconduct or ethical violations to editors"
            />
          </div>
        </section>

        {/* Contact for Compliance */}
        <section className="bg-gradient-to-r from-primary-600 to-accent-600 text-white p-8 rounded-xl text-center">
          <h2 className="text-3xl font-bold mb-4">Questions About Compliance?</h2>
          <p className="text-xl text-primary-50 mb-6">
            For inquiries regarding publication ethics, compliance, or to report concerns, please contact us.
          </p>
          <a
            href="mailto:sanmatijournal@gmail.com"
            className="inline-block bg-white text-primary-700 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
          >
            Contact Editorial Office
          </a>
        </section>
      </div>
    </div>
  );
}

function ComplianceCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}

function StandardItem({ title, description }: { title: string; description: string }) {
  return (
    <div className="border-l-4 border-accent-600 pl-4">
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}

function QualityCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-green-600">
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}

function ResponsibilityCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary-600">
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex gap-2 text-gray-700">
            <span className="text-primary-600 font-bold">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ReviewerCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-700 text-sm">{description}</p>
    </div>
  );
}
