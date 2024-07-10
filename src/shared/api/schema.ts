import { z } from 'zod'

export const CreateEventSchema = z.object({
  title: z.string().min(1),
  description: z.string().optional(),
  date: z.coerce.date(),
})

export type CreateEventSchemaType = z.infer<typeof CreateEventSchema>;

export const UpdateEventSchema = z.object({
  id: z.number().int().positive(),
  title: z.string().min(1).optional(),
  description: z.string().optional().nullable(),
  date: z.coerce.date().optional(),
})

export type UpdateEventSchemaType = z.infer<typeof UpdateEventSchema>;

export const UpdateEventFormDataSchema = z.object({
  id: z.number().int().positive(),
  title: z.string().min(1).optional(),
  description: z.string().optional().nullable(),
  date: z.string().regex(/\d\d\d\d-\d\d-\d\d/).optional(),
})

export type UpdateEventFormDataSchemaType = z.infer<typeof UpdateEventFormDataSchema>;

export const JoinEventSchema = z.object({
  id: z.number().int().positive(),
})

export const LeaveEventSchema = z.object({
  userId: z.number().int().positive(),
  eventId: z.number().int().positive(),
})

export const CreateUserSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(5)
})

export type CreateUserSchemaType = z.infer<typeof CreateUserSchema>;

export const CreateUserFormDataSchema =
  CreateUserSchema
    .merge(z.object({
      confirm: z.string().min(5)}
    ))
    .refine(data => data.password === data.confirm, {
      message: 'Passwords doesn\'t match',
      path: ['confirm'],
    })

export type CreateUserFormDataSchemaType = z.infer<typeof CreateUserFormDataSchema>;

export const CreateParticipationSchema = z.object({
  eventId: z.number().int().positive(),
})

export type CreateParticipationSchemaType = z.infer<typeof CreateParticipationSchema>;

export const DeleteParticipationSchema = z.object({
  eventId: z.number().int().positive(),
})

export type DeleteParticipationSchemaType = z.infer<typeof DeleteParticipationSchema>;


