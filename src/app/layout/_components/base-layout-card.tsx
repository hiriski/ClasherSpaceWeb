'use client'

import { FC, JSX, useCallback, useState } from 'react'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

interface Props {
  item: IBaseLayout
}

const BaseLayoutCardItem: FC<Props> = ({ item }): JSX.Element => {
  const router = useRouter()

  const [currentImg] = useState(item.imageUrls?.[0] ?? null)

  const onClickDetail = useCallback(() => {
    router.push(`/layout/${item.id}`)
  }, [router, item.id])

  return (
    <Box
      sx={{
        borderWidth: 1,
        borderRadius: 2,
        borderColor: 'divider',
        borderStyle: 'solid',
        boxShadow: 1,
        overflow: 'hidden',
      }}
      key={item.id}
    >
      <Stack sx={{ height: 400, overflow: 'hidden', cursor: 'pointer' }} onClick={onClickDetail}>
        <Image src={currentImg} alt="Image of base layout" width={800} height={400} />
      </Stack>
      <Stack sx={{ px: 2, py: 1 }}>
        <Typography variant="h5" sx={{ fontWeight: '600' }} gutterBottom>
          {item.name}
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: '500' }}>
          {item.description}
        </Typography>
      </Stack>
    </Box>
  )
}
export default BaseLayoutCardItem
