import { JSX } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { BaseLayoutApi } from '../_api/base-layout.api'
import BaseLayoutDetail from '../_components/base-layout-detail'
import BaseLayoutBackButton from './_components/back-button'

// Next.js will invalidate the cache when a
// request comes in, at most once every 60 seconds.
export const revalidate = 60

// We'll prerender only the params from `generateStaticParams` at build time.
// If a request comes in for a path that hasn't been generated,
// Next.js will server-render the page on-demand.
export const dynamicParams = true // or false, to 404 on unknown paths

export async function generateStaticParams(): Promise<Array<{ id: string }>> {
  const response = await BaseLayoutApi.fetchList({ paginate: false })
  const data = response.data
  return data.map((item) => ({
    id: String(item.id),
  }))
}

interface PageProps {
  params: Promise<{ id: string }>
}

const BaseLayoutDetailPage = async ({ params }: PageProps): Promise<JSX.Element> => {
  const { id } = await params
  const data = await BaseLayoutApi.fetchById(parseInt(id))
  return (
    <Box>
      <Stack direction="row" gap={2} sx={{ mb: 4, alignItems: 'center' }}>
        <BaseLayoutBackButton />
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 700 }}>
            Base Layout Detail
          </Typography>
        </Box>
      </Stack>
      <BaseLayoutDetail data={data} />
    </Box>
  )
}

export default BaseLayoutDetailPage
