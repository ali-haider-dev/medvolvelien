import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t bg-[url('/Banner.jpg')] bg-cover bg-center">
      <div className="container mx-auto grid grid-cols-1 gap-8 px-4 py-8 sm:grid-cols-2 lg:grid-cols-3 lg:items-start lg:justify-items-center">
        {/* Company logo section - uncomment if needed
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="flex size-8 items-center justify-center rounded-md bg-blue-600/10">
              <span className="text-lg font-bold text-blue-700">PI</span>
            </div>
            <span className="text-sm font-semibold tracking-tight text-gray-900">PI Referral Partners</span>
          </div>
          <p className="text-sm text-muted-foreground">
            We help chiropractors grow personal injury referrals with direct attorney connections and managed marketing.
          </p>
        </div> */}

        <div>
          <h4 className="mb-3 text-sm font-semibold text-white">Company</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <Link href="#about" className="text-white hover:text-gray-900">
                About
              </Link>
            </li>
            <li>
              <Link href="#services" className="text-white hover:text-gray-900">
                Services
              </Link>
            </li>
            <li>
              <Link href="#contact" className="text-white hover:text-gray-900">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold text-white">Contact</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="text-white">Email: medvolvelien@gmail.com</li>
            <li className="text-white">Phone: (915) 600-7417</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold text-white">Legal</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <Link href="#" className="text-white hover:text-gray-900">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="text-white hover:text-gray-900">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-6 text-xs text-muted-foreground sm:flex-row">
          <p className="text-white">{`© ${new Date().getFullYear()} Medvolve Liens. All rights reserved.`}</p>
          <p className="text-xs text-white">
            Not legal advice. For informational purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
}
