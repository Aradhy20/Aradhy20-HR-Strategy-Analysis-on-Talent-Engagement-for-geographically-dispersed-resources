export default function EditorialTeamPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-600 to-accent-600 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Editorial Team</h1>
          <p className="text-xl text-primary-50">
            Distinguished Scholars Leading Academic Excellence
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16 space-y-16">
        {/* Editors-in-Chief */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Editors-in-Chief
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <EditorCard
              name="Dr. Namrta Jain"
              title="Editor-in-Chief"
              designation="Assistant Professor"
              affiliation="Teerthanker Mahaveer University, Moradabad"
              email="sanmatijournal@gmail.com"
              phone="+91 9870713912, +91 8979782949"
              profileUrl="https://scholar.google.com"
            />
            <EditorCard
              name="Dr. Ratnesh Kumar Jain"
              title="Co-Editor-in-Chief"
              designation="Assistant Dean Students' Welfare / Associate Professor"
              affiliation="Teerthanker Mahaveer University, Moradabad"
              email="jainratnesh79@gmail.com"
              phone="+91 7999525735"
            />
          </div>
        </section>

        {/* Editorial Board */}
        <section className="bg-gray-50 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Editorial Board
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <BoardMemberCard
              name="Prof. Pralhad Joshi"
              designation="Vice-Chancellor"
              affiliation="Kumar Bhaskar Varma Sanskrit and Ancient Studies University, Assam"
            />
            <BoardMemberCard
              name="Dr. Kalpna Jain"
              designation="Principal / Associate Professor"
              affiliation="Teerthanker Mahaveer University, Moradabad"
            />
            <BoardMemberCard
              name="Prof. S. P. Subashini"
              designation="Dean, Faculty of Nursing"
              affiliation="Teerthanker Mahaveer University, Moradabad"
            />
            <BoardMemberCard
              name="Dr. Harishchandra Verma"
              designation="Principal/Director"
              affiliation="Shri Vishwanath College of Pharmacy, Sultanpur"
            />
            <BoardMemberCard
              name="Dr. Amita Kumari"
              designation="Assistant Professor"
              affiliation="Vinoba Bhave University, Hazaribagh, Jharkhand"
            />
          </div>
        </section>

        {/* Advisory Board */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Advisory Board
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <BoardMemberCard
              name="Dr. Rakesh Kumar"
              designation="Associate Professor"
              affiliation="Faculty of Law & Legal Studies, Teerthanker Mahaveer University, Moradabad"
            />
            <BoardMemberCard
              name="Dr. Sushil Kumar"
              designation="HOD (B.Ed.) & Associate Professor"
              affiliation="B. N. Mandal University, Bihar"
            />
          </div>
        </section>
      </div>
    </div>
  );
}

function EditorCard({
  name,
  title,
  designation,
  affiliation,
  email,
  phone,
  profileUrl,
}: {
  name: string;
  title: string;
  designation: string;
  affiliation: string;
  email: string;
  phone: string;
  profileUrl?: string;
}) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-primary-600 hover:shadow-2xl transition-shadow">
      <div className="text-center mb-4">
        <div className="w-24 h-24 bg-gradient-to-br from-primary-600 to-accent-600 rounded-full mx-auto mb-4 flex items-center justify-center">
          <span className="text-white text-3xl font-bold">
            {name.split(" ").map(n => n[0]).join("")}
          </span>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-1">{name}</h3>
        <p className="text-primary-600 font-semibold text-lg">{title}</p>
      </div>
      <div className="space-y-3 text-gray-700">
        <p className="font-medium">{designation}</p>
        <p className="text-sm">{affiliation}</p>
        <div className="pt-3 border-t border-gray-200 space-y-2 text-sm">
          <p>📧 {email}</p>
          <p>📞 {phone}</p>
          {profileUrl && (
            <a
              href={profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 hover:text-primary-700 font-medium inline-block"
            >
              🔗 Google Scholar Profile
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function BoardMemberCard({
  name,
  designation,
  affiliation,
}: {
  name: string;
  designation: string;
  affiliation: string;
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-accent-600">
      <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
      <p className="text-primary-600 font-medium mb-2">{designation}</p>
      <p className="text-gray-600 text-sm">{affiliation}</p>
    </div>
  );
}
