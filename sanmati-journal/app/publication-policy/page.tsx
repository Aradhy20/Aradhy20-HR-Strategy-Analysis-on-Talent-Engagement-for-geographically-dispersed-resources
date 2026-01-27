import { Shield, Users, FileSearch } from "lucide-react";

export default function PublicationPolicyPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-600 to-accent-600 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Publication & Policy</h1>
          <p className="text-xl text-primary-50">
            Commitment to Academic Integrity and Excellence
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16 space-y-16">
        {/* Publication Ethics */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
              <Shield className="w-8 h-8 text-primary-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Publication Ethics</h2>
          </div>
          <div className="bg-primary-50 p-8 rounded-xl">
            <p className="text-gray-700 leading-relaxed text-lg mb-4">
              <strong>Sanmati Spectrum of Knowledge & Emerging Discourse</strong> is committed to the 
              highest standards of academic quality, research integrity, and ethical publishing.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              The journal follows <strong>COPE (Committee on Publication Ethics)</strong> guidelines and 
              expects authors, editors, and reviewers to uphold fairness, transparency, and responsibility. 
              Any form of research misconduct is examined and addressed appropriately.
            </p>
            <div className="mt-6 grid md:grid-cols-3 gap-4">
              <EthicsCard
                title="Fairness"
                description="Equal treatment for all submissions regardless of author background"
              />
              <EthicsCard
                title="Transparency"
                description="Clear communication of review process and publication decisions"
              />
              <EthicsCard
                title="Responsibility"
                description="Accountability for maintaining research integrity and quality"
              />
            </div>
          </div>
        </section>

        {/* Peer Review Policy */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center">
              <Users className="w-8 h-8 text-accent-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Peer Review Policy</h2>
          </div>
          <div className="bg-accent-50 p-8 rounded-xl">
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              All submitted manuscripts undergo a <strong>Double-Blind Peer Review</strong> process, in which 
              the identities of both authors and reviewers are kept confidential.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              This process ensures fairness, objectivity, originality, and academic rigor. Manuscripts are 
              evaluated based on their scholarly merit, relevance, clarity, and contribution to knowledge.
            </p>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Review Process Steps</h3>
              <ol className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </span>
                  <span><strong>Initial Screening:</strong> Editorial team checks for basic requirements and scope alignment</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </span>
                  <span><strong>Plagiarism Check:</strong> Manuscript screened for originality using plagiarism detection tools</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </span>
                  <span><strong>Peer Review:</strong> Assigned to expert reviewers for double-blind evaluation</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
                    4
                  </span>
                  <span><strong>Decision:</strong> Accept, reject, or request revisions based on reviewer feedback</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
                    5
                  </span>
                  <span><strong>Publication:</strong> Accepted manuscripts prepared for publication in upcoming issue</span>
                </li>
              </ol>
            </div>
          </div>
        </section>

        {/* Plagiarism Policy */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
              <FileSearch className="w-8 h-8 text-red-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Plagiarism Policy</h2>
          </div>
          <div className="bg-red-50 p-8 rounded-xl border-l-4 border-red-600">
            <p className="text-gray-700 leading-relaxed text-lg mb-4">
              The journal follows a <strong>zero-tolerance policy</strong> toward plagiarism. All submissions 
              are screened for originality using advanced plagiarism detection software.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-red-600 mb-4">Plagiarism Threshold</h3>
              <p className="text-gray-700 text-lg mb-4">
                Manuscripts with a <strong>Similarity Index exceeding 20%</strong> (excluding references) 
                are <strong>rejected without review</strong>.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
                  <p className="font-bold text-green-700 mb-2">✓ Acceptable</p>
                  <p className="text-gray-700">Similarity Index ≤ 20%</p>
                  <p className="text-sm text-gray-600 mt-2">(excluding references and citations)</p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-600">
                  <p className="font-bold text-red-700 mb-2">✗ Rejected</p>
                  <p className="text-gray-700">Similarity Index &gt; 20%</p>
                  <p className="text-sm text-gray-600 mt-2">Immediate rejection without review</p>
                </div>
              </div>
            </div>
            <div className="mt-6 bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-600">
              <p className="text-gray-700">
                <strong>Note:</strong> Authors are responsible for ensuring the originality of their work. 
                Proper citation and attribution of sources is mandatory. Self-plagiarism is also considered 
                a violation of publication ethics.
              </p>
            </div>
          </div>
        </section>

        {/* Additional Policies */}
        <section className="bg-gray-50 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Additional Policies</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <PolicyCard
              title="Authorship"
              description="All listed authors must have made significant contributions to the research. Honorary or gift authorship is not permitted."
            />
            <PolicyCard
              title="Conflicts of Interest"
              description="Authors must disclose any financial or personal relationships that could influence the research."
            />
            <PolicyCard
              title="Data Availability"
              description="Authors should be prepared to share research data upon reasonable request for verification purposes."
            />
            <PolicyCard
              title="Copyright"
              description="Authors retain copyright while granting the journal first publication rights. Proper attribution is required for reuse."
            />
          </div>
        </section>
      </div>
    </div>
  );
}

function EthicsCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <h4 className="font-bold text-gray-900 mb-2">{title}</h4>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}

function PolicyCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary-600">
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}
