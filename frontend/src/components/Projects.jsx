import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/projects")
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then(setProjects)
      .catch(err => {
        console.error(err);
        setError(err.message);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
<section className="py-12 px-4 md:px-6 max-w-7xl mx-auto" id="projects">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent text-center mb-8 md:mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"> 
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-lg p-8 rounded-3xl border border-slate-700/50 hover:border-cyan-500/50 hover:bg-slate-800/70 shadow-2xl animate-pulse h-48"
            > 
              <div className="h-6 bg-gray-700 rounded mb-4"></div>
              <div className="h-4 bg-gray-700 rounded w-3/4"></div>
            </motion.div>
          ))}
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 px-6">
        <h2 className="text-3xl text-center mb-10">Projects</h2>
        <div className="text-center text-red-400">
          Failed to load projects. <button onClick={() => window.location.reload()} className="underline">Retry</button>
        </div>
      </section>
    );
  }

  return (
      <section className="py-12 px-4 md:px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent text-center mb-8 md:mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {projects.length === 0 ? (
            <p className="col-span-full text-center text-gray-400">No projects yet.</p>
          ) : (
            projects.map(p => (
              <motion.div 
                key={p.id} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02, y: -5 }}
                viewport={{ once: true }}
                className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl p-8 rounded-3xl border border-slate-700/50 hover:border-cyan-500/50 hover:bg-slate-800/70 shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 h-48 flex flex-col justify-between hover:-translate-y-2"
              >
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-cyan-400 mb-3 line-clamp-2">{p.name}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">{p.description}</p>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-cyan-400 text-sm font-medium">View Project →</span>
                </div>
              </motion.div> 
            ))
          )}
        </div>
      </section>
    );

}