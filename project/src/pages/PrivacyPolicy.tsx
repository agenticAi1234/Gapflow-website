import { motion } from 'framer-motion';

export default function PrivacyPolicy() {
  const definitions = [
    { term: 'Organisation', definition: 'Means Gapcloud Pty Ltd a company registered in Australia under ACN 135 564 813' },
    { term: 'APP', definition: "Means Australian Privacy Principles as defined in Australia's Privacy Act 1988" },
    { term: 'Responsible Person', definition: 'Means Stuart Marsh' },
    { term: 'Register of Systems', definition: 'Means a register of all systems or contexts in which personal data is processed by the Organisation.' },
  ];

  return (
    <div className="bg-white min-h-screen">
      <section className="pt-20 pb-10 bg-slate-50 border-b border-slate-100">
        <div className="container-tight">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mb-6"
          >
            Privacy Policy
          </motion.h1>
          <div className="flex items-center gap-4 text-sm font-bold text-slate-400 uppercase tracking-widest">
            <span>Last Updated</span>
            <span className="text-slate-900">15th May, 2026</span>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="container-tight">
          <div className="max-w-none">
            <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-5">Definitions</h2>
            <div className="overflow-x-auto mb-12">
              <table className="w-full border-collapse border border-slate-200">
                <thead>
                  <tr className="bg-slate-50">
                    <th className="border border-slate-200 px-6 py-4 text-left text-sm font-black text-slate-900 uppercase tracking-wider">Term</th>
                    <th className="border border-slate-200 px-6 py-4 text-left text-sm font-black text-slate-900 uppercase tracking-wider">Definition</th>
                  </tr>
                </thead>
                <tbody>
                  {definitions.map((item, i) => (
                    <tr key={i}>
                      <td className="border border-slate-200 px-6 py-4 text-sm font-bold text-slate-700">{item.term}</td>
                      <td className="border border-slate-200 px-6 py-4 text-sm text-slate-500 leading-relaxed">{item.definition}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-3">1. Data protection principles</h2>
                <p className="text-slate-600 mb-4 font-medium leading-relaxed">
                  The Organisation is committed to processing data in accordance with its responsibilities under the APP.
                </p>
                <p className="text-slate-600 mb-4 font-medium leading-relaxed">
                  APP requires that personal data shall be:
                </p>
                <ol className="list-decimal pl-6 space-y-2 text-slate-600 font-medium">
                  <li>Processed lawfully, fairly and in a transparent manner in relation to individuals;</li>
                  <li>Collected for specified, explicit and legitimate purposes and not further processed in a manner that is incompatible with those purposes; further processing for archiving purposes in the public interest, scientific or historical research purposes or statistical purposes shall not be considered to be incompatible with the initial purposes;</li>
                  <li>Adequate, relevant and limited to what is necessary in relation to the purposes for which they are processed;</li>
                  <li>Accurate and, where necessary, kept up to date; every reasonable step must be taken to ensure that personal data that are inaccurate, having regard to the purposes for which they are processed, are erased or rectified without delay;</li>
                  <li>Kept in a form which permits identification of data subjects for no longer than is necessary for the purposes for which the personal data are processed; personal data may be stored for longer periods insofar as the personal data will be processed solely for archiving purposes in the public interest, scientific or historical research purposes or statistical purposes subject to implementation of the appropriate technical and organisational measures required by the APP in order to safeguard the rights and freedoms of individuals; and</li>
                  <li>Processed in a manner that ensures appropriate security of the personal data, including protection against unauthorised or unlawful processing and against accidental loss, destruction or damage, using appropriate technical or organisational measures.</li>
                </ol>
              </div>

              <div>
                <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-3">2. General provisions</h2>
                <ol className="list-decimal pl-6 space-y-2 text-slate-600 font-medium">
                  <li>This policy applies to all personal data processed by the Organisation.</li>
                  <li>The Responsible Person shall take responsibility for the Organisation's ongoing compliance with this policy.</li>
                  <li>This policy shall be reviewed at least annually.</li>
                  <li>The Organisation shall register with the Information Commissioner's Office as an organisation that processes personal data.</li>
                </ol>
              </div>

              <div>
                <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-3">3. Lawful, fair and transparent processing</h2>
                <ol className="list-decimal pl-6 space-y-2 text-slate-600 font-medium">
                  <li>To ensure its processing of data is lawful, fair and transparent, the Organisation shall maintain a Register of Systems.</li>
                  <li>The Register of Systems shall be reviewed at least annually.</li>
                  <li>Individuals have the right to access their personal data and any such requests made to the Organisation shall be dealt with in a timely manner.</li>
                </ol>
              </div>

              <div>
                <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-3">4. Lawful purposes</h2>
                <ol className="list-decimal pl-6 space-y-2 text-slate-600 font-medium">
                  <li>All data processed by the Organisation must be done on one of the following lawful bases: consent, contract, legal obligation, vital interests, public task or legitimate interests (see Australian Privacy Principles guidelines — Home (oaic.gov.au) for more information).</li>
                  <li>The Organisation shall note the appropriate lawful basis in the Register of Systems.</li>
                  <li>Where consent is relied upon as a lawful basis for processing data, evidence of opt-in consent shall be kept with the personal data.</li>
                  <li>Where communications are sent to individuals based on their consent, the option for the individual to revoke their consent should be clearly available and systems should be in place to ensure such revocation is reflected accurately in the Organisation's systems.</li>
                </ol>
              </div>

              <div>
                <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-3">5. Data minimisation</h2>
                <ol className="list-decimal pl-6 space-y-2 text-slate-600 font-medium">
                  <li>The Organisation shall ensure that personal data are adequate, relevant and limited to what is necessary in relation to the purposes for which they are processed.</li>
                </ol>
              </div>

              <div>
                <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-3">6. Accuracy</h2>
                <ol className="list-decimal pl-6 space-y-2 text-slate-600 font-medium">
                  <li>The Organisation shall take reasonable steps to ensure personal data is accurate.</li>
                  <li>Where necessary for the lawful basis on which data is processed, steps shall be put in place to ensure that personal data is kept up to date.</li>
                </ol>
              </div>

              <div>
                <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-3">7. Archiving / removal</h2>
                <ol className="list-decimal pl-6 space-y-2 text-slate-600 font-medium">
                  <li>To ensure that personal data is kept for no longer than necessary, the Organisation shall put in place an archiving policy for each area in which personal data is processed and review this process annually.</li>
                  <li>The archiving policy shall consider what data should/must be retained, for how long, and why.</li>
                </ol>
              </div>

              <div>
                <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-3">8. Security</h2>
                <ol className="list-decimal pl-6 space-y-2 text-slate-600 font-medium">
                  <li>The Organisation shall ensure that personal data is stored securely using modern software that is kept-up-to-date.</li>
                  <li>Access to personal data shall be limited to personnel who need access and appropriate security should be in place to avoid unauthorised sharing of information.</li>
                  <li>When personal data is deleted this should be done safely such that the data is irrecoverable.</li>
                  <li>Appropriate back-up and disaster recovery solutions shall be in place.</li>
                </ol>
              </div>

              <div>
                <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-3">9. Breach</h2>
                <p className="text-slate-600 font-medium leading-relaxed">
                  In the event of a breach of security leading to the accidental or unlawful destruction, loss, alteration, unauthorised disclosure of, or access to, personal data, the Organisation shall promptly assess the risk to people's rights and freedoms and if appropriate report this breach to the ICO (more information on the ICO website).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
