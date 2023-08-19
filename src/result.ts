import { tag } from "./tag"

export type Result<T, E> = Ok<T> | Err<E>

export type Ok<T> = Readonly<{
    [tag]: "ok"
    value: T
}>

export type Err<E> = Readonly<{
    [tag]: "err"
    error: E
}>

export const ok = <T>(value: T): Result<T, never> => {
    return {
        [tag]: "ok",
        value
    }
}

export const err = <E>(error: E): Result<never, E> => {
    return {
        [tag]: "err",
        error
    }
}

export const isOk = <T, E>(result: Result<T, E>): result is Ok<T> => {
    return result[tag] === "ok"
}

export const isErr = <T, E>(result: Result<T, E>): result is Err<E> => {
    return result[tag] === "err"
}

export const map = <T, E, U>(onOk: (value: T) => U): ((result: Result<T, E>) => Result<U, E>) => {
    return (result) => isOk(result)
        ? ok(onOk(result.value))
        : result
}

export const match = <T, E, U>(onOk: (value: T) => U, onErr: (error: E) => U): ((result: Result<T, E>) => U) => {
    return (result) => isOk(result)
        ? onOk(result.value)
        : onErr(result.error)
}

export const mapErr = <E, S, T>(onErr: (value: E) => S): ((result: Result<T, E>) => Result<T, S>) => {
    return (result) => isErr(result)
        ? err(onErr(result.error))
        : result
}
