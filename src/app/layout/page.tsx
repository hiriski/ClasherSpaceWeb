import { JSX } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import BaseLayoutCardItem from './_components/base-layout-card'
import { BaseLayoutApi } from './_api/base-layout.api'

export const revalidate = 3600 // invalidate every hour

const BaseLayoutPage = async (): Promise<JSX.Element> => {
  const response = await BaseLayoutApi.fetchList({ paginate: true })
  const data: IBaseLayout[] = response.data

  return (
    <Box>
      <Typography variant="h3" sx={{ fontWeight: 700, mb: 4 }}>
        Base Layout
      </Typography>
      <Stack gap={2}>
        {data.map((post) => (
          <BaseLayoutCardItem key={String(post.id)} item={post} />
        ))}
      </Stack>
    </Box>
  )
}
export default BaseLayoutPage
