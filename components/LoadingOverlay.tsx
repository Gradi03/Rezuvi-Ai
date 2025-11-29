"use client";

import { motion, AnimatePresence } from "framer-motion";

interface Props {
  show: boolean;
}

const LoadingOverlay: React.FC<Props> = ({ show }) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="glass-card px-6 py-4 flex items-center gap-3"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
          >
            <span className="h-3 w-3 rounded-full border-2 border-brand border-t-transparent animate-spin" />
            <div>
              <p className="text-sm font-medium">Generating your resume with AI…</p>
              <p className="text-xs text-slate-300">This usually takes just a few seconds.</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingOverlay;


