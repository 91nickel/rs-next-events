import { CreateEventForm } from "@/features/create-event";
import { CreateEventSchemaType, trpc } from "@/shared/api";
import { useRouter } from "next/router";

export default function CreateEvent() {
  const router = useRouter();

  const { mutate } = trpc.event.create.useMutation({
    onSuccess: (data) => {
      router.push(`/events/${data.id}`);
    },
  });

  const handleSubmit = (data: CreateEventSchemaType) => {
    mutate(data);
  };

  return <CreateEventForm onSubmit={handleSubmit} />;
}
