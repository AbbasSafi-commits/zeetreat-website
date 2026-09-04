import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | ZEETREAT',
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-serif font-bold text-gray-900 mb-8">Privacy Policy</h1>
        <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
          <p className="text-sm text-gray-500">Last updated: September 2026</p>
          
          <section>
            <h2 className="text-2xl font-serif font-bold text-gray-900 mt-8 mb-4">Introduction</h2>
            <p>
              ZEETREAT ("Company", "we", "our", or "us") operates the website. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-gray-900 mt-8 mb-4">Information Collection and Use</h2>
            <p>
              We collect several different types of information for various purposes to provide and improve our service to you.
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Personal Data: Contact information you provide through forms</li>
              <li>Usage Data: Information about how you interact with our website</li>
              <li>Cookies: To enhance your browsing experience</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-gray-900 mt-8 mb-4">Use of Data</h2>
            <p>
              ZEETREAT uses the collected data for various purposes including:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>To provide and maintain our service</li>
              <li>To notify you about changes to our website</li>
              <li>To provide customer support</li>
              <li>To gather analysis and feedback to improve our service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-gray-900 mt-8 mb-4">Security of Data</h2>
            <p>
              The security of your data is important to us but remember that no method of transmission over the Internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-gray-900 mt-8 mb-4">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
