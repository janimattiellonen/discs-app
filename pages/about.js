import React from 'react'
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

const About = () => {
  const { data, error } = useSWR('/api/hello', fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  return (
    <div>
      <h1>About</h1>

      <p>About this page</p>

      {data && data.name && <p>Hello {data.name}</p>}
    </div>
  )
}

export default About
