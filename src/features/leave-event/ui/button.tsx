import { trpc } from "@/shared/api";

type LeaveEventButtonProps = {
  eventId: number;
  onSuccess?: () => void;
};

export const LeaveEventButton = ({
  eventId,
  onSuccess,
}: LeaveEventButtonProps) => {
  const { mutate } = trpc.participation.delete.useMutation({ onSuccess });

  const handleClick = () => {
    mutate({ eventId });
  };

  return (
    <button
      className="h-10 px-6 font-semibold rounded-md bg-red-900 text-white"
      onClick={handleClick}
    >
      Leave
    </button>
  );
};
