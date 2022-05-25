import axios from 'axios';
import Link from 'next/link';
import { useQuery } from 'react-query';
import { formatName } from '../lib/utils';
import styles from '../styles/components/navigation.module.scss';

// https://tylerclark.dev/react-query/
const fetcher = async () => {
  const data = await (
    await fetch('/api/navigation')
  ).json()
  return data;
};

const Navigation = () => {
  const { data, isLoading, error, isSuccess } = useQuery('navigation', fetcher);

  if (isLoading) {
    return <p className="text-white p-2">Loading...</p>;
  }

  if (error) {
    return <p className="text-white p-2">Navigation Unavailable. Check the console for details.</p>;
  }

  const renderNavOptions = () => {
    if (isSuccess && !data.error) {
      const postData = data.repository.object.entries.map((entry: any) => {
        return {
          path: entry.name.replace(/\.md$/, ''),
          name: formatName(entry.name),
        };
      });
      const filteredRoutes = postData.filter((route: any) => route.path === 'front-end-dev');
      return filteredRoutes.map((entry: any, i: number) => {
        return (
          <li key={`item-${i}`}>
            <Link href={`/${entry.path.replace(/.md/, '')}`}>
              <a>{formatName(entry.path)}</a>
            </Link>
          </li>
        );
      });
    }
  };

  return (
    <nav className={styles['navigation']}>
      <ul>{data && renderNavOptions()}</ul>
    </nav>
  );
};

export default Navigation;
