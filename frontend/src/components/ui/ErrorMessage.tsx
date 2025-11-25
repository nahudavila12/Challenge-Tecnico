interface ErrorMessageProps {
  message: string;
}

export const ErrorMessage = ({ message }: ErrorMessageProps) => {
  if (!message) return null;

  return (
    <div className="mb-6 bg-red-50 text-red-700 px-4 py-3 rounded-lg text-sm text-center border border-red-200">
      {message}
    </div>
  );
};

