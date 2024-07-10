import { useRouter } from 'next/router'
import { UpdateEventForm } from '@/features/update-event'
import { UpdateEventSchemaType, trpc } from '@/shared/api'
import { useSession } from 'next-auth/react'

export default function UpdateEvent() {
  const router = useRouter()
  const {data: session, status: authStatus} = useSession()

  const {data, isLoading} = trpc.event.findUnique.useQuery({
    id: Number(router.query.id),
  })

  const {mutate} = trpc.event.update.useMutation({
    onSuccess: (data) => {
      router.push(`/events/${data.id}`)
    },
  })

  function handleSubmit(data: UpdateEventSchemaType) {
    // console.log('form.update.submit', data);
    mutate(data)
  }

  if (isLoading) {
    return 'Loading...'
  }

  if (!data) {
    return 'No data'
  }

  if (authStatus === "unauthenticated" || session?.user.id !== data.authorId) {
    return 'Forbidden'
  }

  return <UpdateEventForm
    initialFormData={{...data, date: data.date.toISOString().split('T')[0]}}
    onSubmit={handleSubmit}
  />

}
