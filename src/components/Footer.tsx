import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#f5f5f5] py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Simple links */}
        <div className="flex flex-wrap justify-center gap-6 mb-6">
          <Link href="/policies" className="text-[#555] hover:text-[#F97068] text-sm uppercase tracking-wide font-medium">
            Policies
          </Link>
          <Link href="/terms-and-conditions" className="text-[#555] hover:text-[#F97068] text-sm uppercase tracking-wide font-medium">
            Terms
          </Link>
          <Link href="/contact" className="text-[#555] hover:text-[#F97068] text-sm uppercase tracking-wide font-medium">
            Contact
          </Link>
          <Link href="/faqs" className="text-[#555] hover:text-[#F97068] text-sm uppercase tracking-wide font-medium">
            About Us
          </Link>
        </div>

        {/* Copyright */}
        <p className="text-[#777] text-center text-sm">
          &copy;{new Date().getFullYear()} Life Like Locals. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
