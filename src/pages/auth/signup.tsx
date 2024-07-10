import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import { CreateUserForm } from '@/features/create-user'
import { CreateUserSchemaType, trpc } from '@/shared/api'

export default function SignUp() {
  const router = useRouter()
  const session = useSession()

  const { mutate } = trpc.user.create.useMutation({
    onSuccess: () => {
      router.push('/');
    },
  });

  const handleSubmit = (data: CreateUserSchemaType) => {
    mutate(data);
  }

  if (typeof window !== "undefined" && session.status !== 'unauthenticated') {
    return router.push('/')
  }

  return <CreateUserForm onSubmit={handleSubmit}/>
}
