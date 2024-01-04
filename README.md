[![Continuous Integration](https://github.com/kaiosilveira/replace-inline-code-with-function-call-refactoring/actions/workflows/ci.yml/badge.svg)](https://github.com/kaiosilveira/replace-inline-code-with-function-call-refactoring/actions/workflows/ci.yml)

ℹ️ _This repository is part of my Refactoring catalog based on Fowler's book with the same title. Please see [kaiosilveira/refactoring](https://github.com/kaiosilveira/refactoring) for more details._

---

# Replace Inline Code with Function Call

<table>
<thead>
<th>Before</th>
<th>After</th>
</thead>
<tbody>
<tr>
<td>

```javascript
let appliesToMass = false;

for (const s of states) {
  if (s === 'MA') appliesToMass = true;
}
```

</td>

<td>

```javascript
appliesToMass = states.includes('MA');
```

</td>
</tr>
</tbody>
</table>

Sometimes (and especially in large codebases) it's common for us to find code that is doing essentially the same sequence of computations that we have already encapsulated in a nearby function. In these cases, we can simply replace this block of computation with a function call.

## Working example

Our working example is a pretty simple one: a function that checks whether or not we have `"MA"` as one of the states in a list of states. Our goal is to leverage the language support for this kind of operation, so we can make the code more idiomatic.

### Test suite

Our test suite is straightforward: we test both possibilities for the `appliesToMass` function: either returning `true` or `false`:

```javascript
describe('appliesToMass', () => {
  it('should return true if Massachussets is in the list of states', () => {
    expect(appliesToMass(['MA', 'NH', 'ME'])).toBe(true);
  });

  it('should return true if Massachussets is not in the list of states', () => {
    expect(appliesToMass(['NH', 'ME'])).toBe(false);
  });
});
```

### Steps

This is a quick one: we just need to replace the existing `for` loop with `Array.includes`:

```diff
diff --git a/src/index.js b/src/index.js
@@ -1,9 +1,3 @@
 export function appliesToMass(states) {
-  let appliesToMass = false;
-
-  for (const s of states) {
-    if (s === 'MA') appliesToMass = true;
-  }
-
-  return appliesToMass;
+  return states.includes('MA');
 }
```

And that's it!

### Commit history

Below there's the commit history for the steps detailed above.

| Commit SHA                                                                                                                                    | Message                                  |
| --------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| [fc4baf6](https://github.com/kaiosilveira/replace-inline-code-with-function-call-refactoring/commit/fc4baf6385f2437602fe677d4010c88da4900807) | replace `for` loop with `Array.includes` |
