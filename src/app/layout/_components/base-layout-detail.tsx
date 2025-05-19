'use client'

import { FC, JSX, useState } from 'react'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Image from 'next/image'

interface Props {
  data: IBaseLayout
}

const BaseLayoutDetail: FC<Props> = ({ data }): JSX.Element => {
  const [currentImg] = useState(data.imageUrls?.[0] ?? null)

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
      key={data.id}
    >
      <Stack sx={{ height: 400, overflow: 'hidden', cursor: 'pointer' }}>
        <Image src={currentImg} alt="Image of base layout" width={800} height={400} />
      </Stack>
      <Stack sx={{ px: 2, py: 1 }}>
        <Typography variant="h5" sx={{ fontWeight: '600' }} gutterBottom>
          {data.name}
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: '500' }}>
          {data.description}
        </Typography>
      </Stack>
      <Stack sx={{ px: 2, py: 1 }}>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </Stack>
    </Box>
  )
}
export default BaseLayoutDetail
