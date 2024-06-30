type BigHeadingProps = {
  text: string;
};

const BigHeading: React.FC<BigHeadingProps> = ({ text }) => {
  return (
    <h2 className="text-8xl sm:text-5xl px-16 text-center leading-normal font-extrabold">
      {text}
    </h2>
  );
};

export default BigHeading;
