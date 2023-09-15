type Props = {
      params: {
            id: string;
      };
};

const BlogPageDetail = ({ params }: Props) => {
      return <h1>This is BlogPageDetail, {params.id}</h1>;
};

export default BlogPageDetail;
