type Props = {
      params: {
            category: string;
      };
};

const SupportDetailPage = ({ params }: Props) => {
      return <h1>This is SupportDetailPage, {params.category}</h1>;
};

export default SupportDetailPage;
