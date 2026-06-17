import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#050505] pt-12 pb-8 px-8 md:px-16 border-t border-gray-800 border-b-4 border-b-yellow-500">
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10 md:gap-0">
        
        {/* LEFT SIDE: QUICK LINKS */}
        <div>
          <h3 className="text-white font-bold text-lg uppercase tracking-wider mb-6">Quick Links</h3>
          
          {/* 2 Columns of Links */}
          <div className="flex gap-16 sm:gap-24">
            <ul className="flex flex-col gap-3 text-gray-400 font-medium text-sm md:text-base">
              <li><a href="#" className="hover:text-white transition-colors">The Arena</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Episodes</a></li>
              <li><a href="#" className="hover:text-white transition-colors">National Rankings</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Programs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Rulebooks</a></li>
            </ul>
            
            <ul className="flex flex-col gap-3 text-gray-400 font-medium text-sm md:text-base">
              <li><a href="#" className="hover:text-white transition-colors">Join the Team</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sponsorships</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Legal</a></li>
            </ul>
          </div>
        </div>

        {/* RIGHT SIDE: SOCIAL MEDIA */}
        <div className="md:text-right">
          <h3 className="text-white font-bold text-lg uppercase tracking-wider mb-6">Social Media</h3>
          
          {/* Social Icons (Direct SVG coding, no images needed!) */}
          <div className="flex items-center gap-6">
            {/* YouTube */}
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <svg stroke="currentColor" fill="none" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="28" width="28">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
              </svg>
            </a>
            
            {/* Instagram */}
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <svg stroke="currentColor" fill="none" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="28" width="28">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            
            {/* Facebook */}
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <svg stroke="currentColor" fill="none" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="28" width="28">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3.6l.4-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            
            {/* Twitter */}
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <svg stroke="currentColor" fill="none" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="28" width="28">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;