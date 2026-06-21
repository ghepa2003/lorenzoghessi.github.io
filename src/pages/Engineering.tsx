import { motion } from 'framer-motion';
import { PageTransition } from '../components/PageTransition';
import { GraduationCap } from '@phosphor-icons/react';

export default function Engineering() {
  const experiences = [
    {
      company: 'Leonardo S.p.A.',
      role: 'Robotics Research Intern',
      period: '07/2026 – Present',
      location: 'Genoa, Italy',
      points: [
        'Designed and implemented a model-mediated teleoperation architecture in ROS/C++ to compensate for variable communication delays.',
        'Developed and validated control algorithms for object manipulation with delayed feedback, integrating hardware-in-the-loop testing on a real robotic system.'
      ]
    },
    {
      company: 'Assolombarda',
      role: 'Laboratory Coordinator',
      period: '09/2021 – Present',
      location: 'Monza',
      points: [
        'Managed a team of 10 facilitators across shift planning and technical operations, maintaining full uptime of ABB YuMi cobots and Lab 4.0 equipment.',
        'Designed new didactic modules integrating ABB RobotStudio and cobot programming.',
        'Delivered hands-on robotics workshops to 1000+ middle and high school students across 4+ years.'
      ]
    },
    {
      company: 'Delta Service Automation',
      role: 'Engineering Intern | PLC & HMI',
      period: '09/2024 – 10/2024',
      location: 'Vaprio d\'Adda',
      points: [
        'Debugged and optimized PLC/HMI software (DELTA) on automatic labeling and product-tracking machines, directly reducing machine downtime.',
        'Revised electrical schematics, authored technical maintenance manuals, and modeled 3D mechanical assemblies in SolidWorks.'
      ]
    }
  ];

  const projects = [
    {
      title: 'Flexible Joint Control',
      tools: 'MATLAB/Simulink',
      period: '02/2026 – 06/2026',
      desc: 'Experimental parameter identification (friction, spring stiffness) and synthesis of frequency-domain and state-space controllers (LQR, H∞, MRAC, SMC) for precise tip positioning under uncertainty.'
    },
    {
      title: 'Trajectory control for a Mobile Robot',
      tools: 'ROS/C++',
      period: '10/2025 – 11/2025',
      desc: 'Built a Turtlebot simulator in Linux/ROS Noetic (Boost Odeint); designed a PI tracking controller with feedback linearization and velocity feed-forward.'
    },
    {
      title: 'Drone Real-Time Control',
      tools: 'C/C++, FreeRTOS',
      period: '04/2025 – 06/2025',
      desc: 'Developed dynamic model in Simscape, synthesized LQR controller in MATLAB/Simulink, and implemented control code on real hardware using an RTOS architecture.'
    }
  ];

  return (
    <PageTransition>
      <main className="min-h-[100dvh] pt-32 pb-24 px-4 md:px-12 lg:px-24 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Header Column */}
          <div className="lg:col-span-4">
            <div className="sticky top-32">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 text-ivory">Engineering<br/>Log.</h1>
              <p className="text-slate-300 mb-8 max-w-[40ch] leading-relaxed">
                Technical deployments, multivariable control synthesis, and embedded real-time systems.
              </p>
              
              <div className="space-y-4 font-mono text-xs text-slate-300">
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span>System.Status</span>
                  <span className="text-emerald-500">Nominal</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span>Uptime</span>
                  <span className="text-ivory font-bold">99.99%</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span>Active.Tasks</span>
                  <span className="text-ivory font-bold">[Teleoperation, ROS]</span>
                </div>
              </div>
            </div>
          </div>

          {/* Data Column */}
          <div className="lg:col-span-8 space-y-24">

            {/* Education Section (Cockpit Mode) */}
            <section>
              <h2 className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-8 border-b border-white/10 pb-2">00 // Education</h2>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="border border-emerald-500/10 hover:border-emerald-500/30 transition-colors rounded-2xl p-6 bg-obsidian/50 backdrop-blur-sm shadow-[0_8px_32px_rgba(16,185,129,0.02)]"
              >
                <div className="flex items-center gap-3 mb-6">
                  <GraduationCap className="text-emerald-500 text-xl" />
                  <h3 className="text-lg font-bold text-ivory">Academic Trajectory</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-white/10">
                  <div className="pt-4 md:pt-0">
                    <p className="font-mono text-xs text-emerald-500 mb-1">2024 - PRESENT</p>
                    <p className="font-bold text-ivory mb-1">MSc Automation & Control</p>
                    <p className="text-sm text-slate-300">Polytechnic University of Milan</p>
                  </div>
                  <div className="pt-4 md:pt-0 md:pl-6">
                    <p className="font-mono text-xs text-emerald-500 mb-1">2025</p>
                    <p className="font-bold text-ivory mb-1">Erasmus+</p>
                    <p className="text-sm text-slate-300">Chalmers University of Technology</p>
                  </div>
                  <div className="pt-4 md:pt-0 md:pl-6">
                    <p className="font-mono text-xs text-emerald-500 mb-1">2026 - PRESENT</p>
                    <p className="font-bold text-ivory mb-1">Master Thesis</p>
                    <p className="text-sm text-slate-300">Leonardo S.p.A.</p>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-white/5">
                  <p className="font-mono text-xs text-slate-400 mb-3">CORE COMPETENCIES</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="font-mono text-xs bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 px-2 py-1 rounded">Multivariable control</span>
                    <span className="font-mono text-xs bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 px-2 py-1 rounded">Real-time systems</span>
                    <span className="font-mono text-xs bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 px-2 py-1 rounded">Teleoperation</span>
                  </div>
                </div>
              </motion.div>
            </section>
            
            {/* Experience Section */}
            <section>
              <h2 className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-8 border-b border-white/10 pb-2">01 // Experience</h2>
              <div className="flex flex-col space-y-12">
                {experiences.map((exp, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    className="group"
                  >
                    <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-4">
                      <h3 className="text-xl font-bold text-ivory group-hover:text-emerald-500 transition-colors">{exp.company}</h3>
                      <span className="font-mono text-sm text-slate-400">{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-ivory font-medium opacity-90">{exp.role}</span>
                      <span className="w-1 h-1 rounded-full bg-slate-500"></span>
                      <span className="text-slate-300 text-sm">{exp.location}</span>
                    </div>
                    <ul className="space-y-3 text-slate-300 text-sm leading-relaxed max-w-[75ch]">
                      {exp.points.map((pt, j) => (
                        <li key={j} className="flex gap-4">
                          <span className="text-emerald-500 font-mono select-none mt-0.5">→</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Projects Section */}
            <section>
              <h2 className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-8 border-b border-white/10 pb-2">02 // Key Projects</h2>
              <div className="flex flex-col space-y-0 divide-y divide-white/5 border-t border-white/5">
                {projects.map((proj, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="py-8 group hover:bg-emerald-500/5 px-4 -mx-4 transition-colors rounded-xl"
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                      <h3 className="text-lg font-bold text-ivory group-hover:text-emerald-500 transition-colors">{proj.title}</h3>
                      <div className="flex gap-3 text-xs font-mono">
                        <span className="text-emerald-500">{proj.tools}</span>
                        <span className="text-slate-400">{proj.period}</span>
                      </div>
                    </div>
                    <p className="text-slate-300 text-sm max-w-[80ch] leading-relaxed">
                      {proj.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </section>

          </div>
        </div>
      </main>
    </PageTransition>
  );
}
