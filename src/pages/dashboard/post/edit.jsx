import { Helmet } from 'react-helmet-async';

import { useParams } from 'src/routes/hooks';

import { PostEditView } from 'src/sections/blog/view';

// ----------------------------------------------------------------------

export default function PostEditPage() {
  const params = useParams();
console.log({ postedit: params })
  const { id } = params;

  return (
    <>
      <Helmet>
        <title> Dashboard: Post Edit</title>
      </Helmet>

      <PostEditView id={`${id}`} />
    </>
  );
}
