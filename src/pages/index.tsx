import { trpc } from "@/shared/api"
import { EventsList } from '@/entities/event/ui/list'

export default function Home() {
  const {data, refetch} = trpc.event.findMany.useQuery()
  return <EventsList list={data} refetch={refetch}/>
}
