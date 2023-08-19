# Evrico

`Option` and `Result` types for JavaScript and TypeScript developers.

## Examples

```ts
import { O, pipe } from "evrico"

pipe(
    O.some(5),
    O.map(x => x * 2),
    console.log // Some(10)
) 

pipe(
    O.none,
    O.map(x => x * 2),
    console.log // None
) 
```

Inspired by `fp-ts`
