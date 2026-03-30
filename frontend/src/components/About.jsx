export default function About() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-slate-900 to-slate-950" id="about">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl mt:5 md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-white via-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6">
            PROFESSIONAL SUMMARY
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed text-justify">
            IT Support Engineer with experience in infrastructure support, network monitoring, and system administration in enterprise environments. Skilled in managing Linux servers, deploying VPN solutions, and maintaining network performance using Zabbix and LibreNMS. Proven ability to handle 50+ user requests weekly and manage 20+ network devices, ensuring high system availability and reliability. Seeking remote or international opportunities in IT Support or Infrastructure roles.
          </p>
        </div>

        {/* Two-column skills */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 mb-20">
          {/* Core Competencies */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mr-3"></div>
              CORE SKILLS
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>• IT Support Engineer & Troubleshooting</li>
              <li>• Network Monitoring & Incident Response</li>
              <li>• SLA Management & Incident Handling</li>
              <li>• Linux System Administration</li>
              <li>• VPN Deployment (OpenVPN)</li>
              <li>• LAN/WAN & Network Infrastructure</li>
              <li>• Switching & Routing (Layer 2/3)</li>
              <li>• Firewall (Cisco, FortiGate, MikroTik – Basic)</li>
              <li>• WLAN Deployment (Ruijie)</li>
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full mr-3"></div>
              TECH STACK
            </h3>
            <div className="space-y-4 text-gray-300">
              <div>
                <h4 className="font-semibold text-cyan-400 mb-2">Monitoring:</h4>
                <p>Zabbix, LibreNMS, OpManager, PRTG</p>
              </div>
              <div>
                <h4 className="font-semibold text-cyan-400 mb-2">Systems:</h4>
                <p>Linux (Ubuntu), Windows Server, Windows 10/11, macOS</p>
              </div>
              <div>
                <h4 className="font-semibold text-cyan-400 mb-2">Networking:</h4>
                <p>TCP/IP, DNS, DHCP, Routing, Switching, VLAN</p>
              </div>
              <div>
                <h4 className="font-semibold text-cyan-400 mb-2">Tools:</h4>
                <p>OpenVPN, Docker (Basic), Nginx Proxy Manager, VMware, Proxmox</p>
              </div>
              <div>
                <h4 className="font-semibold text-cyan-400 mb-2">Other:</h4>
                <p>CCTV (Hikvision, Dahua), RDP, AnyDesk, TeamViewer, RustDesk</p>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width sections */}
        <div className="space-y-16">
          {/* Professional Experience */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <div className="w-3 h-3 bg-gradient-to-r from-orange-400 to-red-500 rounded-full mr-3"></div>
              PROFESSIONAL EXPERIENCE
            </h3>
            <div className="bg-slate-800/50 border border-gray-700 rounded-2xl p-8 space-y-6">
              <div className="flex flex-col lg:flex-row gap-6 lg:items-start">
                <div className="text-3xl lg:text-4xl font-black bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent min-w-fit self-start">
                  2019 – Present
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl font-bold text-white mb-2">IT Support Engineer / Infrastructure Support</h4>
                  <p className="text-cyan-400 text-lg mb-6">PT PLN Icon Plus (Subsidiary of PT PLN) — Indonesia</p>
                  <ul className="space-y-3 text-gray-300">
                    <li>• Provided technical support for hardware, software, and network-related issues, handling 50+ user support requests weekly</li>
                    <li>• Implemented and maintained network monitoring systems using Zabbix and LibreNMS to improve incident response time</li>
                    <li>• Managed and maintained 20+ network devices including routers, switches, and access points</li>
                    <li>• Administered Linux servers including installation, configuration, troubleshooting, and performance optimization</li>
                    <li>• Deployed and maintained secure VPN connections using OpenVPN</li>
                    <li>• Assisted in implementing firewall policies to enhance network security and prevent unauthorized access</li>
                    <li>• Performed preventive maintenance to ensure system reliability and minimize downtime</li>
                    <li>• Improved system uptime and reduced downtime through proactive monitoring and preventive maintenance</li>
                    <li>• Supported multi-site network infrastructure across operational locations</li>
                    <li>• Assisted end users with technical issues and system configurations</li>
                  </ul>
                  <div className="mt-8 pt-6 border-t border-orange-400/50">
                    <h5 className="font-semibold text-xl text-orange-400 mb-4">Key Achievements</h5>
                    <ul className="space-y-3 text-gray-300 ml-6 pl-4 border-l-4 border-orange-400">
                      <li>• Installed and maintained LAN and WAN infrastructure across multiple locations</li>
                      <li>• Configured routers and switches (MikroTik & Cisco) including routing, VLAN, and IP addressing</li>
                      <li>• Deployed and configured wireless networks (WLAN) with secure access</li>
                      <li>• Installed and troubleshot IP CCTV systems (Hikvision & Dahua)</li>
                      <li>• Resolved hardware issues including printers and scanners</li>
                      <li>• Installed and configured operating systems (Windows Server, Windows 10/11, Linux)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full mr-3"></div>
              EDUCATION
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-800/50 border border-gray-700 rounded-xl p-8 text-center group hover:border-blue-500/50 transition-all hover:shadow-2xl">
                <div className="text-4xl font-black text-blue-400 mb-4 group-hover:scale-110 transition-transform">2025</div>
                <h4 className="font-bold text-xl text-white mb-2">Bachelor's Degree in Information Systems</h4>
                <p className="text-gray-400 text-lg">Indonesia</p>
              </div>
              <div className="bg-slate-800/50 border border-gray-700 rounded-xl p-8 text-center group hover:border-blue-500/50 transition-all hover:shadow-2xl">
                <div className="text-4xl font-black text-blue-400 mb-4 group-hover:scale-110 transition-transform">2013</div>
                <h4 className="font-bold text-xl text-white mb-2">Vocational High School (SMK) – Computer Network Engineering (TKJ)</h4>
              </div>
            </div>
          </div>

          {/* Additional */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full mr-3"></div>
              ADDITIONAL
            </h3>
            <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/30 rounded-2xl p-8">
              <ul className="space-y-3 text-gray-300 text-lg mb-6">
                <li>• Available for remote work (global time zones)</li>
                <li>• Strong analytical and problem-solving skills</li>
                <li>• Fast learner with high adaptability</li>
              </ul>
              <a href="/CV_AMUNG SUNARYA.pdf" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300" download>
                <span>Download Full CV</span>
                <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10l-5.5 5.5m0 0L7.5 18M1.5 12.5L7.5 18m6-6l5.5-5.5m0 0L18.5 6M19.5 11.5l-5.5-5.5" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
