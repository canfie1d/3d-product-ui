import { NextApiRequest, NextApiResponse } from 'next';
import { githubApi } from '../../lib/clients';
import { NAV_LINK_QUERY } from '../../lib/queries';
import { formatName } from '../../lib/utils';

export const getNavigation = async () => {
  const res = await githubApi.request(NAV_LINK_QUERY);
  return res;
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const data = await getNavigation()
    res.status(200).json(data)
  } catch (err) {
    res.status(500).json({ error: 'failed to load data' })
  }
};

export default handler;
