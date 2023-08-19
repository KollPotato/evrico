export type Pipe<A, B> = (a: A) => B

export function pipe<A>(a: A): A
export function pipe<A, B>(a: A, b: Pipe<A, B>): B
export function pipe<A, B, C>(a: A, b: Pipe<A, B>, c: Pipe<B, C>): C
export function pipe<A, B, C, D>(a: A, b: Pipe<A, B>, c: Pipe<B, C>, d: Pipe<C, D>): D
export function pipe<A, B, C, D, E>(a: A, b: Pipe<A, B>, c: Pipe<B, C>, d: Pipe<C, D>, e: Pipe<D, E>): E
export function pipe<A, B, C, D, E, F>(a: A, b: Pipe<A, B>, c: Pipe<B, C>, d: Pipe<C, D>, e: Pipe<D, E>, f: Pipe<E, F>): F
export function pipe<A, B, C, D, E, F, G>(a: A, b: Pipe<A, B>, c: Pipe<B, C>, d: Pipe<C, D>, e: Pipe<D, E>, f: Pipe<E, F>, g: Pipe<F, G>): G
export function pipe<A, B, C, D, E, F, G, H>(a: A, b: Pipe<A, B>, c: Pipe<B, C>, d: Pipe<C, D>, e: Pipe<D, E>, f: Pipe<E, F>, g: Pipe<F, G>, h: Pipe<G, H>): H
export function pipe<A, B, C, D, E, F, G, H, I>(a: A, b: Pipe<A, B>, c: Pipe<B, C>, d: Pipe<C, D>, e: Pipe<D, E>, f: Pipe<E, F>, g: Pipe<F, G>, h: Pipe<G, H>, i: Pipe<H, I>): I
export function pipe<A, B, C, D, E, F, G, H, I, J>(a: A, b: Pipe<A, B>, c: Pipe<B, C>, d: Pipe<C, D>, e: Pipe<D, E>, f: Pipe<E, F>, g: Pipe<F, G>, h: Pipe<G, H>, i: Pipe<H, I>, j: Pipe<I, J>): J
export function pipe<A, B, C, D, E, F, G, H, I, J, K>(a: A, b: Pipe<A, B>, c: Pipe<B, C>, d: Pipe<C, D>, e: Pipe<D, E>, f: Pipe<E, F>, g: Pipe<F, G>, h: Pipe<G, H>, i: Pipe<H, I>, j: Pipe<I, J>, k: Pipe<J, K>): K
export function pipe<A, B, C, D, E, F, G, H, I, J, K, L>(a: A, b: Pipe<A, B>, c: Pipe<B, C>, d: Pipe<C, D>, e: Pipe<D, E>, f: Pipe<E, F>, g: Pipe<F, G>, h: Pipe<G, H>, i: Pipe<H, I>, j: Pipe<I, J>, k: Pipe<J, K>, l: Pipe<K, L>): L
export function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M>(a: A, b: Pipe<A, B>, c: Pipe<B, C>, d: Pipe<C, D>, e: Pipe<D, E>, f: Pipe<E, F>, g: Pipe<F, G>, h: Pipe<G, H>, i: Pipe<H, I>, j: Pipe<I, J>, k: Pipe<J, K>, l: Pipe<K, L>, m: Pipe<L, M>): M
export function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N>(a: A, b: Pipe<A, B>, c: Pipe<B, C>, d: Pipe<C, D>, e: Pipe<D, E>, f: Pipe<E, F>, g: Pipe<F, G>, h: Pipe<G, H>, i: Pipe<H, I>, j: Pipe<I, J>, k: Pipe<J, K>, l: Pipe<K, L>, m: Pipe<L, M>, n: Pipe<M, N>): N
export function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O>(a: A, b: Pipe<A, B>, c: Pipe<B, C>, d: Pipe<C, D>, e: Pipe<D, E>, f: Pipe<E, F>, g: Pipe<F, G>, h: Pipe<G, H>, i: Pipe<H, I>, j: Pipe<I, J>, k: Pipe<J, K>, l: Pipe<K, L>, m: Pipe<L, M>, n: Pipe<M, N>, o: Pipe<N, O>): O
export function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P>(a: A, b: Pipe<A, B>, c: Pipe<B, C>, d: Pipe<C, D>, e: Pipe<D, E>, f: Pipe<E, F>, g: Pipe<F, G>, h: Pipe<G, H>, i: Pipe<H, I>, j: Pipe<I, J>, k: Pipe<J, K>, l: Pipe<K, L>, m: Pipe<L, M>, n: Pipe<M, N>, o: Pipe<N, O>, p: Pipe<O, P>): P
export function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q>(a: A, b: Pipe<A, B>, c: Pipe<B, C>, d: Pipe<C, D>, e: Pipe<D, E>, f: Pipe<E, F>, g: Pipe<F, G>, h: Pipe<G, H>, i: Pipe<H, I>, j: Pipe<I, J>, k: Pipe<J, K>, l: Pipe<K, L>, m: Pipe<L, M>, n: Pipe<M, N>, o: Pipe<N, O>, p: Pipe<O, P>, q: Pipe<P, Q>): Q
export function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R>(a: A, b: Pipe<A, B>, c: Pipe<B, C>, d: Pipe<C, D>, e: Pipe<D, E>, f: Pipe<E, F>, g: Pipe<F, G>, h: Pipe<G, H>, i: Pipe<H, I>, j: Pipe<I, J>, k: Pipe<J, K>, l: Pipe<K, L>, m: Pipe<L, M>, n: Pipe<M, N>, o: Pipe<N, O>, p: Pipe<O, P>, q: Pipe<P, Q>, r: Pipe<Q, R>): R
export function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S>(a: A, b: Pipe<A, B>, c: Pipe<B, C>, d: Pipe<C, D>, e: Pipe<D, E>, f: Pipe<E, F>, g: Pipe<F, G>, h: Pipe<G, H>, i: Pipe<H, I>, j: Pipe<I, J>, k: Pipe<J, K>, l: Pipe<K, L>, m: Pipe<L, M>, n: Pipe<M, N>, o: Pipe<N, O>, p: Pipe<O, P>, q: Pipe<P, Q>, r: Pipe<Q, R>, s: Pipe<R, S>): S
export function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T>(a: A, b: Pipe<A, B>, c: Pipe<B, C>, d: Pipe<C, D>, e: Pipe<D, E>, f: Pipe<E, F>, g: Pipe<F, G>, h: Pipe<G, H>, i: Pipe<H, I>, j: Pipe<I, J>, k: Pipe<J, K>, l: Pipe<K, L>, m: Pipe<L, M>, n: Pipe<M, N>, o: Pipe<N, O>, p: Pipe<O, P>, q: Pipe<P, Q>, r: Pipe<Q, R>, s: Pipe<R, S>, t: Pipe<S, T>): T
export function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U>(a: A, b: Pipe<A, B>, c: Pipe<B, C>, d: Pipe<C, D>, e: Pipe<D, E>, f: Pipe<E, F>, g: Pipe<F, G>, h: Pipe<G, H>, i: Pipe<H, I>, j: Pipe<I, J>, k: Pipe<J, K>, l: Pipe<K, L>, m: Pipe<L, M>, n: Pipe<M, N>, o: Pipe<N, O>, p: Pipe<O, P>, q: Pipe<P, Q>, r: Pipe<Q, R>, s: Pipe<R, S>, t: Pipe<S, T>, u: Pipe<T, U>): U
export function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V>(a: A, b: Pipe<A, B>, c: Pipe<B, C>, d: Pipe<C, D>, e: Pipe<D, E>, f: Pipe<E, F>, g: Pipe<F, G>, h: Pipe<G, H>, i: Pipe<H, I>, j: Pipe<I, J>, k: Pipe<J, K>, l: Pipe<K, L>, m: Pipe<L, M>, n: Pipe<M, N>, o: Pipe<N, O>, p: Pipe<O, P>, q: Pipe<P, Q>, r: Pipe<Q, R>, s: Pipe<R, S>, t: Pipe<S, T>, u: Pipe<T, U>, v: Pipe<U, V>): V
export function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W>(a: A, b: Pipe<A, B>, c: Pipe<B, C>, d: Pipe<C, D>, e: Pipe<D, E>, f: Pipe<E, F>, g: Pipe<F, G>, h: Pipe<G, H>, i: Pipe<H, I>, j: Pipe<I, J>, k: Pipe<J, K>, l: Pipe<K, L>, m: Pipe<L, M>, n: Pipe<M, N>, o: Pipe<N, O>, p: Pipe<O, P>, q: Pipe<P, Q>, r: Pipe<Q, R>, s: Pipe<R, S>, t: Pipe<S, T>, u: Pipe<T, U>, v: Pipe<U, V>, w: Pipe<V, W>): W
export function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X>(a: A, b: Pipe<A, B>, c: Pipe<B, C>, d: Pipe<C, D>, e: Pipe<D, E>, f: Pipe<E, F>, g: Pipe<F, G>, h: Pipe<G, H>, i: Pipe<H, I>, j: Pipe<I, J>, k: Pipe<J, K>, l: Pipe<K, L>, m: Pipe<L, M>, n: Pipe<M, N>, o: Pipe<N, O>, p: Pipe<O, P>, q: Pipe<P, Q>, r: Pipe<Q, R>, s: Pipe<R, S>, t: Pipe<S, T>, u: Pipe<T, U>, v: Pipe<U, V>, w: Pipe<V, W>, x: Pipe<W, X>): X
export function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y>(a: A, b: Pipe<A, B>, c: Pipe<B, C>, d: Pipe<C, D>, e: Pipe<D, E>, f: Pipe<E, F>, g: Pipe<F, G>, h: Pipe<G, H>, i: Pipe<H, I>, j: Pipe<I, J>, k: Pipe<J, K>, l: Pipe<K, L>, m: Pipe<L, M>, n: Pipe<M, N>, o: Pipe<N, O>, p: Pipe<O, P>, q: Pipe<P, Q>, r: Pipe<Q, R>, s: Pipe<R, S>, t: Pipe<S, T>, u: Pipe<T, U>, v: Pipe<U, V>, w: Pipe<V, W>, x: Pipe<W, X>, y: Pipe<X, Y>): Y
export function pipe<A>(a: A, ...pipes: Function[]): A {
    for (const pipe of pipes) {
        a = pipe(a)
    }

    return a
}
