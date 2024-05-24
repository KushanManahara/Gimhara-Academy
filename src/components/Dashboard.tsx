import React from "react"; // IMPORT REACT

interface CardListProps {
  // DEFINE PROPS INTERFACE
  title: string;
  content: React.ReactNode; // USE React.ReactNode FOR CONTENT
}

const CardList: React.FC<CardListProps> = ({ title }) => {
  // USE React.FC FOR FUNCTION COMPONENT WITH PROPS
  return (
    <div className="min-h-full">
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            {title}
          </h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8"></div>
      </main>
    </div>
  );
};

export default CardList; // EXPORT COMPONENT
