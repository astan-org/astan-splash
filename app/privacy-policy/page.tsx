import Image from "next/image"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Footer */}
      <footer className="border-t border-border bg-gradient-to-b from-blue-50/30 to-white py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Image src="/logo.png" alt="Astan Logo" width={120} height={40} className="h-8 w-auto" />
          </div>
          <p className="text-muted-foreground">
            &copy; { new Date().getFullYear(); } ASTAN INC. All rights reserved. Cross Platform Protocol for Trust.
          </p>
        </div>
      </footer>
    </div>
  )
}
