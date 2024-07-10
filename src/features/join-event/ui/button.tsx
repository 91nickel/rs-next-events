import { trpc } from "@/shared/api";

type JoinEventButtonProps = {
  eventId: number;
  onSuccess?: () => void;
};

export const JoinEventButton = ({
  eventId,
  onSuccess,
}: JoinEventButtonProps) => {
  const { mutate } = trpc.participation.create.useMutation({ onSuccess });

  const handleClick = () => {
    mutate({ eventId });
  };

  return (
    <button
      className="h-10 px-6 font-semibold rounded-md bg-black text-white"
      onClick={handleClick}
    >
      Participate
    </button>
  );
};
