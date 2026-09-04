import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | ZEETREAT',
};

export default function Terms() {
  return (
    <main className="min-h-screen py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-serif font-bold text-gray-900 mb-8">Terms of Service</h1>
        <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
          <p className="text-sm text-gray-500">Last updated: September 2026</p>
          
          <section>
            <h2 className="text-2xl font-serif font-bold text-gray-900 mt-8 mb-4">Acceptance of Terms</h2>
            <p>
              By accessing and using the ZEETREAT website, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-gray-900 mt-8 mb-4">Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials (information or software) on ZEETREAT's website for personal, non-commercial transitory viewing only.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-gray-900 mt-8 mb-4">Disclaimer</h2>
            <p>
              The materials on ZEETREAT's website are provided as is. ZEETREAT makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-gray-900 mt-8 mb-4">Limitations</h2>
            <p>
              In no event shall ZEETREAT or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on ZEETREAT's website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-gray-900 mt-8 mb-4">Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us through our website.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
