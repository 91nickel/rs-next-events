import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CreateUserFormDataSchema, CreateUserFormDataSchemaType, CreateUserSchemaType } from '@/shared/api'

type CreateUserFormProps = {
  onSubmit: (data: CreateUserSchemaType) => void;
};

export const CreateUserForm = ({onSubmit}: CreateUserFormProps) => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<CreateUserFormDataSchemaType>({resolver: zodResolver(CreateUserFormDataSchema), mode: 'onChange'})

  function beforeSubmit(data: CreateUserFormDataSchemaType): void {
    return onSubmit({
      name: data.name,
      email: data.email,
      password: data.password,
    })
  }

  return (
    <form onSubmit={handleSubmit(beforeSubmit)}>

      <div className="space-y-12">

        <div>

          <h2 className="text-base font-semibold leading-7 text-gray-900">
            New User
          </h2>

          <p className="mt-1 text-sm leading-6 text-gray-600">
            Fill form to create new user
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Имя
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  id="name"
                  autoComplete="name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register('name')}
                />
              </div>
              {errors.name && (
                <p className="mt-3 text-sm leading-6 text-red-500">
                  {errors.name.message}
                </p>
              )}
            </div>

          </div>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  id="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register('email')}
                />
              </div>
              {errors.email && (
                <p className="mt-3 text-sm leading-6 text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>

          </div>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Пароль
              </label>
              <div className="mt-2">
                <input
                  type="password"
                  id="password"
                  autoComplete="password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register('password')}
                />
              </div>
              {errors.password && (
                <p className="mt-3 text-sm leading-6 text-red-500">
                  {errors.password.message}
                </p>
              )}
            </div>

          </div>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label
                htmlFor="confirm"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Подтверждение пароля
              </label>
              <div className="mt-2">
                <input
                  type="password"
                  id="confirm"
                  autoComplete="confirm"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register('confirm')}
                />
              </div>
              {errors.confirm && (
                <p className="mt-3 text-sm leading-6 text-red-500">
                  {errors.confirm.message}
                </p>
              )}
            </div>

          </div>

        </div>

      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Отмена
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Создать
        </button>
      </div>

    </form>
  )
}
