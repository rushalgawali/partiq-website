'use client'

import { useEffect } from 'react'
import Clarity from '@microsoft/clarity'

export default function MicrosoftClarity() {
  useEffect(() => {
    Clarity.init('vlppfq5sd8')
  }, [])

  return null
}