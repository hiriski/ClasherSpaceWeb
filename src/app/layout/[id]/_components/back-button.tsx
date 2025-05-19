'use client'

import { JSX, useCallback } from 'react'
import Button from '@mui/material/Button'
import { useRouter } from 'next/navigation'

const BaseLayoutBackButton = (): JSX.Element => {
  const router = useRouter()

  const onClickBack = useCallback(() => {
    router.back()
  }, [router])

  return (
    <Button variant="contained" onClick={onClickBack}>
      Back
    </Button>
  )
}

export default BaseLayoutBackButton
