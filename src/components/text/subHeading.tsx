type SubHeadingProps = {
  text: string;
};

const SubHeading: React.FC<SubHeadingProps> = ({ text }) => {
  return (
    <p className="text-2xl sm:text-lg sm:pl-10 sm:pr-10 max-w-2xl pt-10 leading-normal text-center">
      {text}
    </p>
  );
};

export default SubHeading;
