// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export type ProfileType = {
  username: string,
  name: string,
  email: string,
  motto: string
}

export const handler = (
  req: NextApiRequest,
  res: NextApiResponse<ProfileType>
) => {
  res.status(200).json({
    username: 'john.doe@dag-studios.com',
    name: 'John Doe',
    email: 'john.doe@dag-studios.com',
    motto: 'Pride comes before the fall.'
  })
}

export default handler;