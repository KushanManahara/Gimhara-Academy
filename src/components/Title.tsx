const Title: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div>
      <h2 className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 text-center text-5xl font-black">
        {text}
      </h2>
    </div>
  );
};

export default Title;
