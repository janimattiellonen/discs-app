import React from 'react'
import useSWR from 'swr'
import Grid from '@material-ui/core/Grid'

import { useRouter } from 'next/router'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

import config from '../config.client'

import { createQueryString } from '../api/restDbQuery'

import { GalleryItem } from '../components/GalleryItem'

const Gallery = () => {
  const router = useRouter()
  console.log('router obj', JSON.stringify(router, null, 2))

  const queryString = createQueryString({
    query: { type: router?.query?.type, holeInOne: router?.query?.holeInOne, missing: router?.query?.missing },
    limit: 20,
    offset: 0,
  })

  const url = `${config.server.base_url}/rest/discs?metafields=true&apikey=${config.server.api_key}&${queryString}`
  const { data, error } = useSWR(url, fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  return (
    <div>
      {data && data.length > 0 && (
        <Grid container spacing={2}>
          {data.map((disc, i) => (
            <Grid item key={`col-${disc._id}`} xs={12} sm={6} lg={4}>
              <GalleryItem key={i} disc={disc} />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  )
}

export default Gallery
