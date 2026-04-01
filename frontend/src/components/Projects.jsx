import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [selected, setSelected] = useState(null);

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

  // ================= LOADING =================
  if (loading) {
    return (
      <section className="py-12 px-4 md:px-6 max-w-7xl mx-auto" id="projects">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent text-center mb-8 md:mb-12">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-lg p-8 rounded-3xl border border-slate-700/50 shadow-2xl animate-pulse h-56"
            >
              <div className="h-32 bg-gray-700 rounded mb-4"></div>
              <div className="h-6 bg-gray-700 rounded mb-2"></div>
              <div className="h-4 bg-gray-700 rounded w-3/4"></div>
            </motion.div>
          ))}
        </div>
      </section>
    );
  }

  // ================= ERROR =================
  if (error) {
    return (
      <section className="py-20 px-6">
        <h2 className="text-3xl text-center mb-10">Projects</h2>
        <div className="text-center text-red-400">
          Failed to load projects.{" "}
          <button onClick={() => window.location.reload()} className="underline">
            Retry
          </button>
        </div>
      </section>
    );
  }

  // ================= MAIN =================
  return (
    <>
      <section className="py-12 px-4 md:px-6 max-w-7xl mx-auto" id="projects">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent text-center mb-8 md:mb-12">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {projects.length === 0 ? (
            <p className="col-span-full text-center text-gray-400">
              No projects yet.
            </p>
          ) : (
            projects.map(p => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.03, y: -5 }}
                viewport={{ once: true }}
                onClick={() => setSelected(p)}
                className="cursor-pointer group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl p-5 rounded-3xl border border-slate-700/50 hover:border-cyan-500/50 shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500"
              >
                {/* IMAGE */}
                <img
                  src={
                    p.images && p.images.length > 0
                      ? p.images[0]
                      : "/images/projects/default.png"
                  }
                  alt={p.name}
                  className="w-full h-36 object-cover rounded-xl mb-4 group-hover:scale-110 transition duration-500"
                />

                {/* CONTENT */}
                <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-cyan-400 mb-2">
                  {p.name}
                </h3>

                <p className="text-gray-400 text-sm line-clamp-2">
                  {p.description}
                </p>

                <div className="mt-3 opacity-0 group-hover:opacity-100 transition">
                  <span className="text-cyan-400 text-sm font-medium">
                    View Details →
                  </span>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </section>

      {/* ================= MODAL ================= */}
      {selected && (
        <Modal selected={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
}

// ================= MODAL COMPONENT =================
import { useEffect } from "react";

function Modal({ selected, onClose }) {
  const [index, setIndex] = useState(0);

  // RESET INDEX SAAT GANTI PROJECT
  useEffect(() => {
    setIndex(0);
  }, [selected]);

  const images =
    selected.images && selected.images.length > 0
      ? selected.images
      : ["/images/projects/default.png"];

  const next = () => setIndex((prev) => (prev + 1) % images.length);
  const prev = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-slate-900 p-6 rounded-2xl max-w-lg w-full border border-white/10 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <img
            src={images[index]}
            alt={selected.name}
            className="w-full h-48 object-cover rounded-lg mb-4"
          />

          {images.length > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 px-3 py-1 rounded"
              >
                ‹
              </button>

              <button
                onClick={next}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 px-3 py-1 rounded"
              >
                ›
              </button>
            </>
          )}
        </div>

        {images.length > 1 && (
          <div className="flex justify-center gap-2 mb-4">
            {images.map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full ${
                  i === index ? "bg-cyan-400" : "bg-gray-500"
                }`}
              />
            ))}
          </div>
        )}

        <h3 className="text-2xl font-bold text-white">
          {selected.name}
        </h3>

        <p className="text-gray-400 mt-2">
          {selected.description}
        </p>

        <p className="mt-4 text-gray-300">
          {selected.detail ||
            "This project demonstrates real-world infrastructure implementation and troubleshooting experience."}
        </p>

        <button
          onClick={onClose}
          className="mt-6 px-4 py-2 bg-red-500 hover:bg-red-600 rounded-lg"
        >
          Close
        </button>
      </motion.div>
    </div>
  );
}