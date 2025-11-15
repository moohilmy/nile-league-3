'use client'

import { useRouter } from "next/router";

const BackButton = ({nameButton} : {nameButton: string}) => {
    const router = useRouter();
  return (
    <button onClick={() => router.back()}>
      ← {nameButton}
    </button>
  )
}

export default BackButton
