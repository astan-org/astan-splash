import Image from "next/image"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <a href="/">
              <Image src="/logo.png" alt="Astan Logo" width={120} height={40} className="h-10 w-auto" />
            </a>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Home
            </a>
          </nav>
        </div>
      </header>

      {/* Privacy Policy Content */}
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold text-foreground mb-8">Cross-Platform Abuse Response - Privacy Policy</h1>

        <div className="prose prose-lg max-w-none text-muted-foreground space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Information We Collect</h2>
            <p>
              ASTAN INC. ("we," "our," or "us") collects information you provide directly to us when using our
              cross-platform social media safety reporting services. This includes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Account information and authentication credentials</li>
              <li>Incident reports and safety concern details</li>
              <li>Supporting documentation (screenshots, evidence files)</li>
              <li>Contact information for communication purposes</li>
              <li>Usage data and audit logs for security and compliance</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide, maintain, and improve our cross-platform reporting services</li>
              <li>Process and route incident reports to appropriate social media platforms</li>
              <li>Maintain comprehensive audit trails for compliance and security purposes</li>
              <li>Communicate with you about your reports and service updates</li>
              <li>Verify identity and prevent fraudulent reporting</li>
              <li>Analyze trends to improve platform safety measures</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Information Sharing and Disclosure</h2>
            <p>We share your information only in the following circumstances:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>With Social Media Platforms:</strong> We share incident reports with relevant platforms for
                resolution, following strict authentication protocols
              </li>
              <li>
                <strong>With Your Consent:</strong> We may share information when you explicitly authorize us to do so
              </li>
              <li>
                <strong>Legal Requirements:</strong> We may disclose information when required by law, court order, or
                government request
              </li>
              <li>
                <strong>Service Providers:</strong> We may share data with trusted third-party service providers who
                assist in our operations under strict confidentiality agreements
              </li>
            </ul>
            <p className="mt-4">
              We never sell, rent, or trade your personal information to third parties for marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Data Security and Protection</h2>
            <p>We implement enterprise-grade security measures to protect your information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>End-to-end encryption for all data transmission</li>
              <li>Secure authentication protocols and multi-factor authentication</li>
              <li>Regular security audits and penetration testing</li>
              <li>Compliance with industry standards (SOC 2, ISO 27001)</li>
              <li>Secure cloud infrastructure with access controls</li>
              <li>Employee training on data protection and privacy</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Data Retention</h2>
            <p>
              We retain your information for as long as necessary to provide our services and comply with legal
              obligations. Specifically:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Incident reports: Retained for 7 years for audit and compliance purposes</li>
              <li>Account information: Retained while your account is active and for 2 years after closure</li>
              <li>Audit logs: Retained for 5 years for security and compliance monitoring</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Your Privacy Rights</h2>
            <p>You have the following rights regarding your personal information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Access:</strong> Request a copy of the personal information we hold about you
              </li>
              <li>
                <strong>Correction:</strong> Request correction of inaccurate or incomplete information
              </li>
              <li>
                <strong>Deletion:</strong> Request deletion of your personal information (subject to legal retention
                requirements)
              </li>
              <li>
                <strong>Portability:</strong> Receive your data in a structured, machine-readable format
              </li>
              <li>
                <strong>Consent Withdrawal:</strong> Withdraw consent for data processing where applicable
              </li>
              <li>
                <strong>Objection:</strong> Object to certain types of data processing
              </li>
            </ul>
            <p className="mt-4">To exercise these rights, please contact us using the information provided below.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">7. International Data Transfers</h2>
            <p>
              Your information may be transferred to and processed in countries other than your country of residence. We
              ensure appropriate safeguards are in place for international transfers, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Standard contractual clauses approved by relevant authorities</li>
              <li>Adequacy decisions by regulatory bodies</li>
              <li>Certification under recognized privacy frameworks</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">8. Children's Privacy</h2>
            <p>
              Our services are not intended for individuals under the age of 18. We do not knowingly collect personal
              information from children under 18. If we become aware that we have collected such information, we will
              take steps to delete it promptly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">9. Contact Information</h2>
            <p>
              If you have questions about this Privacy Policy, our data practices, or wish to exercise your privacy
              rights, please contact us:
            </p>
            <div className="bg-blue-50/50 rounded-lg p-6 border border-blue-100 mt-4">
              <p className="font-semibold text-foreground">ASTAN INC.</p>
              <p>Privacy Officer</p>
              <p>131 Continental Dr, Suite 305</p>
              <p>Newark, DE 19713</p>
              <p className="mt-2">Email: privacy@astan.io</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">10. Updates to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal
              requirements, or other factors. We will notify you of any material changes by:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Posting the updated policy on this page</li>
              <li>Updating the "Last Updated" date</li>
              <li>Sending email notifications for significant changes</li>
              <li>Providing prominent notice on our website</li>
            </ul>
            <p className="mt-4">
              We encourage you to review this Privacy Policy periodically to stay informed about how we protect your
              information.
            </p>
            <p className="text-sm text-muted-foreground mt-6 p-4 bg-gray-50 rounded-lg">
              <strong>Last Updated:</strong>{" "}
              {new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border bg-gradient-to-b from-blue-50/30 to-white py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Image src="/logo.png" alt="Astan Logo" width={120} height={40} className="h-8 w-auto" />
          </div>
          <p className="text-muted-foreground">
            &copy; { new Date().getFullYear() } ASTAN INC. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
