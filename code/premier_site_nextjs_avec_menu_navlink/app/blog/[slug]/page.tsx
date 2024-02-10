interface IBlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage(props: IBlogPostPageProps) {
  return (
    <div>
      <h1>Blog Post</h1>
      <h1>{props.params.slug}</h1>
    </div>
  );
}
