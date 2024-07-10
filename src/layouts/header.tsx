import { signIn, signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import UserProfileShort from '@/entities/user/UserProfileShort'
import { AuthRoutes } from '@/entities/auth'

export const Header = () => {
  const {data: session, status} = useSession()
  const {pathname, push} = useRouter()

  return (
    <nav className="flex items-center justify-between flex-wrap py-6">
      <div className="flex items-center flex-shrink-0 mr-6">
        <Link href="/" className="font-semibold text-xl tracking-tight">
          <img src="https://result.school/_next/static/media/main-logo-black.ba7419f1.svg" alt="logo"/>
        </Link>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto justify-end">
        <div className="text-sm me-3">
          <UserProfileShort user={session?.user}/>
        </div>
        <div className="text-sm">
          {
            session
              ? <>
                {
                  pathname !== '/events/create'
                  && <button
                        className="bg-green-500 text-white p-2 rounded hover:bg-green-700 transition-colors duration-300 ms-2"
                        onClick={() => push('/events/create')}
                    >
                        Create Event
                    </button>
                }
                {
                  pathname !== AuthRoutes.signOut
                  && <button
                        className="bg-red-500 text-white p-2 rounded hover:bg-red-700 transition-colors duration-300 ms-2"
                        onClick={() => signOut()}
                    >
                        Sign out
                    </button>
                }
              </>
              : <>
                {
                  pathname !== AuthRoutes.signIn
                  && <button
                        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700 transition-colors duration-300 ms-2"
                        onClick={() => signIn()}
                    >
                        Sign in
                    </button>
                }
                {
                  pathname !== AuthRoutes.signUp
                  && <button
                        className="bg-green-500 text-white p-2 rounded hover:bg-green-700 transition-colors duration-300 ms-2"
                        onClick={() => push(AuthRoutes.signUp)}
                    >
                        Sign up
                    </button>
                }
              </>
          }
        </div>
      </div>
    </nav>
  )
}
