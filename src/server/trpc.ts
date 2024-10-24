import { initTRPC } from '@trpc/server'
import { ZodError } from 'zod'

const t = initTRPC.create({
    errorFormatter(opts) {
        const { shape, error } = opts
        return {
            ...shape,
            data: {
                ...shape.data,
                zodError:
                    error.code === 'BAD_REQUEST' &&
                    error.cause instanceof ZodError
                        ? error.cause.flatten()
                        : null,
            },
        }
    },
})

export const createRouter = t.router
export const publicProcedure = t.procedure
export const createCallerFactory = t.createCallerFactory
