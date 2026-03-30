export default function Contact() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-black" id="contact">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent mb-12">
          Get In Touch
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-2xl mx-auto">
          <a href="https://wa.me/6287874314203" target="_blank" rel="noopener noreferrer" className="group p-6 bg-slate-800/50 hover:bg-slate-700/70 rounded-2xl border-2 border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/20">
            <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/>
              </svg>
            </div>
            <p className="font-medium text-white group-hover:text-emerald-400 transition-colors">WhatsApp</p>
          </a>
          <a href="https://www.linkedin.com/in/amung-sunarya-952005119?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="group p-6 bg-slate-800/50 hover:bg-slate-700/70 rounded-2xl border-2 border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20">
            <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.065 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0h.003z"/>
              </svg>
            </div>
            <p className="font-medium text-white group-hover:text-blue-400 transition-colors">LinkedIn</p>
          </a>
          <a href="https://www.facebook.com/share/1DJktWWy5u/" target="_blank" rel="noopener noreferrer" className="group p-6 bg-slate-800/50 hover:bg-slate-700/70 rounded-2xl border-2 border-slate-700/50 hover:border-pink-500/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-pink-500/20">
            <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm-1.262-5.537h-1.712v1.831h1.712v3.153h1.752v-3.153h2.224v-1.831h-2.224v-1.438h2.938v-1.631h-4.674z"/>
              </svg>
            </div>
            <p className="font-medium text-white group-hover:text-pink-400 transition-colors">Facebook</p>
          </a>
          <a href="https://www.instagram.com/amungxsunarya?igsh=MTFiYzh2ZzRpYTY1NA==" target="_blank" rel="noopener noreferrer" className="group p-6 bg-slate-800/50 hover:bg-slate-700/70 rounded-2xl border-2 border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20">
            <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.68 22.336c-.73 0-1.318-.587-1.318-1.312V3.936c0-.725.588-1.313 1.318-1.313h8.64c.73 0 1.319.588 1.319 1.313v5.394h-5.762v-2.03h-2.956v5.262h2.956v5.332c0 .73-.589 1.322-1.318 1.322h-3.877z"/>
              </svg>
            </div>
            <p className="font-medium text-white group-hover:text-purple-400 transition-colors">Instagram</p>
          </a>
          <a href="mailto:amungsunarya45@gmail.com" className="group p-6 bg-slate-800/50 hover:bg-slate-700/70 rounded-2xl border-2 border-slate-700/50 hover:border-orange-500/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/20 col-span-1 md:col-span-1">
            <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-orange-400 to-orange-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </div>
            <p className="font-medium text-white group-hover:text-orange-400 transition-colors">Email</p>
          </a>
        </div>
        <div className="mt-12 p-6 bg-slate-800/30 rounded-2xl border border-slate-700/50 max-w-md mx-auto">
          <p className="text-lg font-semibold text-gray-200">📱 087874314203</p>
          <p className="text-sm text-gray-400 mt-2">Available for remote work (global time zones) | IT Support Engineer & Infrastructure roles</p>
        </div>
      </div>
    </section>
  );
}
