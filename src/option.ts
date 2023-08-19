import { tag } from "./tag"

export type Option<T> = Some<T> | None

export type Some<T> = Readonly<{
    [tag]: "some"
    value: T
}>

export type None = Readonly<{
    [tag]: "none"
}>

export const some = <T>(value: T): Option<T> => {
    return {
        [tag]: "some",
        value
    }
}

export const none: Option<never> = {
    [tag]: "none"
}

export const isSome = <T>(option: Option<T>): option is Some<T> => {
    return option[tag] === "some"
}

export const isNone = <T>(option: Option<T>): option is None => {
    return option[tag] === "none"
}

export const tap = <T>(onSome: (value: T) => unknown): ((option: Option<T>) => Option<T>) => {
    return (option) => {
        if (isSome(option)) {
            onSome(option.value)
            return option
        }

        return option
    }
}

export const tapNone = <T>(onNone: () => unknown): ((option: Option<T>) => Option<T>) => {
    return (option) => {
        if (isNone(option)) {
            onNone()
            return option
        }

        return option
    }
}

export const tapBoth = <T>(onSome: (value: T) => unknown, onNone: () => unknown): ((option: Option<T>) => Option<T>) => {
    return (option) => {
        if (isSome(option)) {
            onSome(option.value)
            return option
        }

        onNone()
        return option
    }
}

export const map = <T, U>(onSome: (value: T) => U): ((option: Option<T>) => Option<U>) => {
    return (option) => isSome(option)
        ? some(onSome(option.value))
        : option
}

export const match = <T, U>(onSome: (value: T) => U, onNone: () => U): ((option: Option<T>) => U) => {
    return (option) => isSome(option)
        ? onSome(option.value)
        : onNone()
}

export const mapNone = <T, U>(onNone: () => U): ((option: Option<T>) => Option<U>) => {
    return (option) => isSome(option)
        ? some(onNone())
        : option
}
