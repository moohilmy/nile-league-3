import styles from "./style.module.css";
import { motion,AnimatePresence } from "motion/react";
import React from "react";
export default function SelectorSection({
  onClickFn,
  selectorSeleced,
  isOpened,
  children,
  selectorHeader,
}: {
  onClickFn: () => void;
  selectorSeleced: string | number;
  isOpened: boolean;
  selectorHeader: string;
  children: React.ReactNode;
}) {
  return (
    <div className={styles.SelectedContainer}>
      <div onClick={onClickFn} className={styles.selected}>
        <span className={styles.selectedHeader}>{selectorHeader}</span>
        <span className={styles.selectedItem}>{selectorSeleced}</span>
      </div>
      <AnimatePresence>
      {isOpened && (
        <motion.ul
          initial={{ opacity: 0,}}
          animate={{ opacity: 1, }}
          exit={{ opacity: 0, height: 0, overflow: 'hidden' }}
          className={styles.filterList}
        >
          {children}
        </motion.ul>
      )}
      </AnimatePresence>
    </div>
  );
}
