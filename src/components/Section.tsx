"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Separator from "./Separator";
import { ChevronLeft } from "@mui/icons-material";

export default function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const variants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: "auto" },
  };

  return (
    <div className="flex flex-col">
      <Separator text={title} className="mb-1" />
      <AnimatePresence>
        {open && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={variants}
            className="flex flex-col overflow-hidden"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen((o) => !o)}
        className="shadow-none px-2 max-w-fit mx-auto"
      >
        <ChevronLeft
          width={30}
          height={30}
          className={`stroke-neutral-300 dark:stroke-black-200
            rounded-full 
            ${open ? "rotate-90" : "-rotate-90"}`}
        />
      </button>
    </div>
  );
}
