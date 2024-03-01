import "./globals.css";
import { useRouter } from 'next/router';

export async function getStaticProps({ params }) {
  const { id } = params;
  return {
    id
  };
}

export default function Page({ data }) {
    const router = useRouter();
    const { id } = router.query;
 
    if(!data) {
      return <div>Loading...</div>
    }
    return (
      <Box>
        My Page {id}
      </Box>
    )
  }