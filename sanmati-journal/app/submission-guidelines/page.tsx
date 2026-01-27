import { Calendar, Mail, FileText, CheckCircle } from "lucide-react";

export default function SubmissionGuidelinesPage() {
  const submissionAreas = [
    "Arts & Humanities",
    "Social Sciences",
    "Journalism & Mass Communication",
    "Science & Technology",
    "Education",
    "Management & Commerce",
    "Law & Public Administration",
    "Health & Medical Sciences",
    "Environment & Sustainable Development",
    "Indian Knowledge Systems",
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-600 to-accent-600 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Submission Guidelines</h1>
          <p className="text-xl text-primary-50">
            Guidelines for Authors & Researchers
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16 space-y-16">
        {/* Call for Papers */}
        <section className="bg-gradient-to-br from-primary-50 to-accent-50 p-8 rounded-xl border-l-4 border-primary-600">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Call for Papers</h2>
              <p className="text-lg text-gray-700">Volume 1, Issue 1 | January–March 2026</p>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            <strong>Sanmati Spectrum of Knowledge & Emerging Discourse</strong> invites original, unpublished, 
            and high-quality research papers for its <strong>Volume 1, Issue 1 (January–March 2026)</strong>.
          </p>
          
          {/* Important Dates */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <Calendar className="w-6 h-6 text-primary-600" />
              <h3 className="text-xl font-bold text-gray-900">Important Dates</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <DateCard
                label="Last Date of Submission"
                date="25 February 2026"
                color="red"
              />
              <DateCard
                label="Notification of Acceptance"
                date="Within 10–15 days"
                color="blue"
              />
              <DateCard
                label="Publication Month"
                date="March 2026"
                color="green"
              />
            </div>
          </div>
        </section>

        {/* Areas of Submission */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Areas of Submission</h2>
          <p className="text-gray-700 mb-6 text-lg">
            We welcome submissions across diverse disciplines including but not limited to:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {submissionAreas.map((area, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-primary-50 to-white p-4 rounded-lg shadow-md border-l-4 border-primary-600 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0" />
                  <span className="font-medium text-gray-900">{area}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Submission Information */}
        <section className="bg-gray-50 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Important Submission Information</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <InfoCard
              title="Submission Mode"
              content="Email only"
              icon={<Mail className="w-6 h-6 text-primary-600" />}
            />
            <InfoCard
              title="Submission Email"
              content="sanmatijournal@gmail.com"
              icon={<Mail className="w-6 h-6 text-primary-600" />}
            />
            <InfoCard
              title="Language"
              content="Hindi / English"
              icon={<FileText className="w-6 h-6 text-primary-600" />}
            />
            <InfoCard
              title="Review Process"
              content="Double-Blind Peer Review"
              icon={<CheckCircle className="w-6 h-6 text-primary-600" />}
            />
            <InfoCard
              title="Publication Frequency"
              content="Quarterly"
              icon={<Calendar className="w-6 h-6 text-primary-600" />}
            />
            <InfoCard
              title="Manuscript Status"
              content="Original and unpublished"
              icon={<FileText className="w-6 h-6 text-primary-600" />}
            />
          </div>
        </section>

        {/* Formatting Guidelines */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Formatting Guidelines</h2>
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-primary-600">
            <div className="space-y-4">
              <GuidelineItem
                label="Submission Format"
                value="MS Word (.doc/.docx)"
              />
              <GuidelineItem
                label="Font (English)"
                value="Times New Roman"
              />
              <GuidelineItem
                label="Font (Hindi)"
                value="Mangal Unicode"
              />
              <GuidelineItem
                label="Title"
                value="14 pt Bold"
              />
              <GuidelineItem
                label="Main Text"
                value="12 pt"
              />
              <GuidelineItem
                label="Line Spacing"
                value="1.5"
              />
              <GuidelineItem
                label="Abstract"
                value="150–250 words with 4–6 keywords"
              />
              <GuidelineItem
                label="Maximum Co-authors"
                value="Two"
              />
              <GuidelineItem
                label="Referencing Style"
                value="APA (American Psychological Association)"
              />
            </div>
          </div>
        </section>

        {/* Manuscript Structure */}
        <section className="bg-primary-50 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Manuscript Structure</h2>
          <div className="space-y-4 text-gray-700">
            <StructureItem
              number="1"
              title="Title Page"
              description="Include manuscript title, author name(s), affiliation, email, and contact details"
            />
            <StructureItem
              number="2"
              title="Abstract"
              description="Concise summary (150-250 words) highlighting objectives, methodology, findings, and conclusions"
            />
            <StructureItem
              number="3"
              title="Keywords"
              description="4-6 relevant keywords for indexing and searchability"
            />
            <StructureItem
              number="4"
              title="Introduction"
              description="Background, research problem, objectives, and significance of the study"
            />
            <StructureItem
              number="5"
              title="Literature Review"
              description="Critical analysis of existing research and theoretical framework"
            />
            <StructureItem
              number="6"
              title="Methodology"
              description="Research design, data collection methods, and analytical techniques"
            />
            <StructureItem
              number="7"
              title="Results & Discussion"
              description="Presentation of findings with interpretation and comparison with existing literature"
            />
            <StructureItem
              number="8"
              title="Conclusion"
              description="Summary of key findings, implications, and future research directions"
            />
            <StructureItem
              number="9"
              title="References"
              description="Complete list of cited works in APA format"
            />
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-primary-600 to-accent-600 text-white p-8 rounded-xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Submit?</h2>
          <p className="text-xl text-primary-50 mb-6">
            Researchers, academicians, and scholars are encouraged to contribute and be part of this 
            multidisciplinary academic discourse.
          </p>
          <a
            href="mailto:sanmatijournal@gmail.com"
            className="inline-block bg-white text-primary-700 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
          >
            Submit Your Manuscript
          </a>
        </section>
      </div>
    </div>
  );
}

function DateCard({ label, date, color }: { label: string; date: string; color: string }) {
  const colorClasses = {
    red: "bg-red-50 border-red-600 text-red-700",
    blue: "bg-blue-50 border-blue-600 text-blue-700",
    green: "bg-green-50 border-green-600 text-green-700",
  };

  return (
    <div className={`p-4 rounded-lg border-l-4 ${colorClasses[color as keyof typeof colorClasses]}`}>
      <p className="text-sm font-semibold mb-1">{label}</p>
      <p className="text-lg font-bold">{date}</p>
    </div>
  );
}

function InfoCard({ title, content, icon }: { title: string; content: string; icon: React.ReactNode }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary-600">
      <div className="flex items-center gap-3 mb-2">
        {icon}
        <h3 className="font-bold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-700">{content}</p>
    </div>
  );
}

function GuidelineItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col md:flex-row md:items-center gap-2 py-3 border-b border-gray-200 last:border-0">
      <span className="font-semibold text-gray-900 md:w-1/3">{label}:</span>
      <span className="text-gray-700 md:w-2/3">{value}</span>
    </div>
  );
}

function StructureItem({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="flex gap-4 bg-white p-4 rounded-lg shadow-sm">
      <div className="flex-shrink-0 w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
        {number}
      </div>
      <div>
        <h3 className="font-bold text-gray-900 mb-1">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
}
