"use client";
import styles from "./style.module.css";
import {MoveRight, MoveLeft} from 'lucide-react'
export default function Pagination({
  pageNumber = 1,
  totalPagesNumber = 10,
}: {
  pageNumber?: string | number;
  totalPagesNumber?: string | number;
}) {
  return (
    <div className={styles.pagination}>
      <div className={styles.pageCount}>
        <span>{pageNumber}</span>
        of
        <span>{totalPagesNumber}</span>
      </div>
      <div className={styles.paginationBtns}>
        <div className={`${styles.btn} ${styles.btndisable}`}>
            <MoveLeft />
        </div>
        <div className={`${styles.btn} ${styles.nextBtn}`}>
            <MoveRight />
        </div>
      </div>
    </div>
  );
}
