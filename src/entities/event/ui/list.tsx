import { EventCard } from '@/entities/event'
import { JoinEventButton } from '@/features/join-event'
import { LeaveEventButton } from '@/features/leave-event'
import { EventCardProps } from '@/entities/event/ui/card'
import { useSession } from 'next-auth/react'

interface IProps {
  list: EventCardProps[] | undefined
  refetch: () => void
}

export const EventsList = ({list, refetch}: IProps) => {

  const {data: session} = useSession()

  if (!list)
    return 'Loading...'

  const List = list?.map((event) => {
    const Action = session && (
      event.isJoined
        ? <LeaveEventButton eventId={event.id} onSuccess={refetch}/>
        : <JoinEventButton eventId={event.id} onSuccess={refetch}/>
    )

    return (
      <li key={event.id} className="mb-6">
        <EventCard {...event} action={Action} update={session?.user.id === event.authorId}/>
      </li>
    )
  })

  return <ul>{List}</ul>
}
