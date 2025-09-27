import React from 'react';

const Footer = ({ config }) => {
  const footerSections = {
    'Information': ['About', 'FAQ', 'Sitemap'],
    'Useful Links': ['Top tracks', 'Pricing', 'Contact'],
    'Resources': ['Tutorials', 'Blogs', 'Tools'],
    'Legals': ['Privacy', 'Terms', 'Refunds']
  };

  const socialIcons = [
    { name: 'Facebook', icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
    { name: 'Twitter', icon: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' },
    { name: 'YouTube', icon: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' },
    { name: 'Pinterest', icon: 'M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z' },
    { name: 'Instagram', icon: 'M12.017 0C8.396 0 7.989.013 6.77.072 5.56.132 4.708.333 3.999.63c-.765.319-1.414.74-2.063 1.389S.319 3.235 0 4.001C-.297 4.708-.498 5.56-.558 6.77-.618 7.99-.63 8.396-.63 12.017c0 3.624.012 4.027.072 5.247.06 1.21.261 2.062.558 2.769.319.765.74 1.414 1.389 2.063s1.298 1.07 2.063 1.389c.708.297 1.56.498 2.769.558 1.22.06 1.624.072 5.247.072 3.624 0 4.027-.012 5.247-.072 1.21-.06 2.062-.261 2.769-.558.765-.319 1.414-.74 2.063-1.389s1.07-1.298 1.389-2.063c.297-.708.498-1.56.558-2.769.06-1.22.072-1.624.072-5.247 0-3.624-.012-4.027-.072-5.247-.06-1.21-.261-2.062-.558-2.769-.319-.765-.74-1.414-1.389-2.063S19.235.319 18.469 0C17.761-.297 16.909-.498 15.699-.558 14.479-.618 14.073-.63 10.453-.63zm0 2.16c3.555 0 3.978.013 5.38.072 1.299.06 2.006.276 2.476.458.622.242 1.066.532 1.532.998.466.466.756.91.998 1.532.182.47.398 1.177.458 2.476.059 1.402.072 1.825.072 5.38s-.013 3.978-.072 5.38c-.06 1.299-.276 2.006-.458 2.476-.242.622-.532 1.066-.998 1.532-.466.466-.91.756-1.532.998-.47.182-1.177.398-2.476.458-1.402.059-1.825.072-5.38.072s-3.978-.013-5.38-.072c-1.299-.06-2.006-.276-2.476-.458-.622-.242-1.066-.532-1.532-.998-.466-.466-.756-.91-.998-1.532-.182-.47-.398-1.177-.458-2.476C2.173 15.995 2.16 15.572 2.16 12.017s.013-3.978.072-5.38c.06-1.299.276-2.006.458-2.476.242-.622.532-1.066.998-1.532.466-.466.91-.756 1.532-.998.47-.182 1.177-.398 2.476-.458C8.038 2.173 8.461 2.16 12.017 2.16zm0 3.678c-2.269 0-4.108 1.839-4.108 4.108 0 2.269 1.839 4.108 4.108 4.108 2.269 0 4.108-1.839 4.108-4.108 0-2.269-1.839-4.108-4.108-4.108zm0 6.775c-1.473 0-2.667-1.194-2.667-2.667 0-1.473 1.194-2.667 2.667-2.667 1.473 0 2.667 1.194 2.667 2.667 0 1.473-1.194 2.667-2.667 2.667zm5.23-6.937c0 .53-.43.96-.96.96s-.96-.43-.96-.96.43-.96.96-.96.96.43.96.96z' }
  ];

  return (
    <>
      <footer 
        className="py-16"
        style={{ backgroundColor: config.colors.background }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
            {/* Logo & Description */}
            <div className="lg:col-span-2">
              <h3 
                className="text-2xl font-bold mb-4"
                style={{ color: config.colors.text }}
              >
                DESIGNPULLER
              </h3>
              <p 
                className="mb-6"
                style={{ color: config.colors.textSecondary }}
              >
                Your ultimate destination for premium design resources. 
                Perfect for POD, crafts, and creative projects.
              </p>
            </div>

            {/* Navigation Sections */}
            {Object.entries(footerSections).map(([title, links]) => (
              <div key={title}>
                <h4 
                  className="font-semibold mb-4"
                  style={{ color: config.colors.text }}
                >
                  {title}
                </h4>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link}>
                      <a 
                        href="#" 
                        className="hover:opacity-80 transition-opacity"
                        style={{ color: config.colors.textSecondary }}
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex justify-center mb-8">
            <div className="flex space-x-4">
              {socialIcons.map((social) => (
                <a 
                  key={social.name}
                  href="#" 
                  className="w-10 h-10 flex items-center justify-center rounded-full hover:opacity-80 transition-all hover:scale-110"
                  style={{ 
                    color: config.colors.textSecondary,
                    backgroundColor: `${config.colors.surface}20`
                  }}
                  title={social.name}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Follow on Shop Button */}
          <div className="text-center mb-8">
            <button 
              className="px-6 py-3 rounded-lg font-medium text-white transition-transform hover:scale-105"
              style={{ backgroundColor: config.colors.primary }}
            >
              Follow on Shop
            </button>
          </div>

          {/* Bottom Row */}
          <div 
            className="pt-8 border-t text-center"
            style={{ borderColor: config.colors.border }}
          >
            <p style={{ color: config.colors.textSecondary }}>
              © 2025 DesignPuller. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Chat Button */}
      <button 
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full text-white shadow-lg transition-transform hover:scale-110 z-50"
        style={{ backgroundColor: config.colors.primary }}
      >
        <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </button>
    </>
  );
};

export default Footer;