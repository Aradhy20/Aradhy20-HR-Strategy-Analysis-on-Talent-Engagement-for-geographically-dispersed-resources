export default function BasicInfoPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-600 to-accent-600 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Basic Information</h1>
          <p className="text-xl text-primary-50">
            Vision, Mission, Objectives & Scope
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16 space-y-16">
        {/* Vision & Mission */}
        <section>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-8 rounded-xl border-l-4 border-primary-600">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Vision</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                To promote high-quality, ethical, and multidisciplinary research that contributes to 
                knowledge creation and addresses contemporary academic and societal challenges.
              </p>
            </div>
            <div className="bg-gradient-to-br from-accent-50 to-accent-100 p-8 rounded-xl border-l-4 border-accent-600">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Mission</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                To provide a credible platform for scholars, researchers, and academicians to publish 
                original, peer-reviewed research, encouraging innovation, inclusivity, and academic 
                excellence across disciplines.
              </p>
            </div>
          </div>
        </section>

        {/* Objective & Scope */}
        <section className="bg-gray-50 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Objective & Scope</h2>
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p className="text-lg">
              <strong>Sanmati Spectrum of Knowledge & Emerging Discourse</strong> is a national 
              multidisciplinary quarterly research journal that promotes original research and scholarly 
              discourse in the fields of arts, humanities, social sciences, sciences, and other allied disciplines.
            </p>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Objective</h3>
              <p>
                The objective of the journal is to provide a national multidisciplinary platform for 
                scholars, researchers, and the academic community. It encourages original research, 
                innovative perspectives, and excellence in scholarly inquiry.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Scope</h3>
              <p>
                The journal publishes research papers, case studies, theme-based articles, book reviews, 
                and research presented at conferences and seminars across arts, humanities, social sciences, 
                mass communication, sciences, and other diverse disciplines. It aims to offer scholars an 
                opportunity to share their ideas and foster multidimensional academic discourse.
              </p>
            </div>
          </div>
        </section>

        {/* Journal Information */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Journal Information</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <InfoItem label="Journal Title" value="Sanmati Spectrum of Knowledge & Emerging Discourse" />
            <InfoItem label="ISSN (Print)" value="3108-1819" />
            <InfoItem label="Publication Format" value="Print (Offline)" />
            <InfoItem label="Frequency" value="Quarterly" />
            <InfoItem label="Language" value="Bilingual (Hindi & English)" />
            <InfoItem label="Year of Commencement" value="2026" />
            <InfoItem label="Nature" value="National" />
            <InfoItem 
              label="Publisher" 
              value="JTS Publications, V-508 Gali No. 17, Vijay Park, Delhi – 110053" 
            />
          </div>
        </section>

        {/* About the Journal */}
        <section className="bg-primary-50 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">About the Journal</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            <strong>Sanmati Spectrum of Knowledge & Emerging Discourse</strong> is dedicated to promoting 
            multidisciplinary academic dialogue and advancing knowledge through rigorous research. The journal 
            encourages innovative perspectives that integrate arts, sciences, society, culture, and technology.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg mt-4">
            We provide a scholarly platform for original research, case studies, thematic articles, book reviews, 
            and conference/seminar papers across diverse disciplines. Our commitment to academic excellence and 
            ethical publishing ensures that every contribution meets the highest standards of quality and integrity.
          </p>
        </section>
      </div>
    </div>
  );
}

function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary-600">
      <p className="text-sm text-gray-600 mb-2 font-semibold">{label}</p>
      <p className="text-gray-900">{value}</p>
    </div>
  );
}
