# Svelte Sapper - Evaluation order

## Introduction

LF is an attempt to get a better understanding of the evaluation order
along which the code of pages and components is run in Svelte/Sapper.

Though rarely, I sometime encounter problems to get the appropriate
order of operations between pages and components. These problems often
vanish when refactoring code but, this time, I wanted to have a better
understanding of the exact order of evaluation. Hence this site. I
share it since it might help others.

## Results

The best way to run, see and analyze these experiments is to clone the
repository and run the server so you may be able to look, at the same
time, at the output produced by the server and the client. Here is a
recipe:

```bash
git clone https://github.com/paracamplus/lf.git
cd lf 
npm install
npm run dev
```

And browse http://localhost:3000/

## Conclusion

Partial conclusions appear in the pages describing the various tests.
Here is just a very short although overall summary.

The structure of a `script` element of a page or a component is:

``` javascript
code
beforeUpdate(...)
onMount(...)
afterUpdate(...)
```

There are four steps in the evaluation order:

- `code` is run and arguments of the [lifecycle functions](https://svelte.dev/docs#Run_time) are registered. 
- The functional argument of `beforeUpdate` will then be invoked immediately.
- When the HTML is ready, the functional argument of `onMount` is invoked.
- and immediately after, the functional argument of `afterUpdate` is invoked.

The order of evaluation becomes more complex when a page or a component
includes other components. The four steps of the various parts are
then intermingled. Let us give an example:

``` html
<component1>
  <innercomponent />
</component1>
<component2 /> 
```

Then the order of evaluation follows the order of components
in the HTML part that is:

``` javascript
code
beforeUpdate(...)
    component1.code
    component1.beforeUpdate()
        innercomponent.code
        innercomponent.beforeUpdate()
        innercomponent.onMount()
        innercomponent.afterUpdate()
   component1.onMount()
   component1.afterUpdate()
   component2.code
   component2.beforeUpdate()
   component2.onMount()
   component2.afterUpdate()
onMount(...)
afterUpdate(...)
```

Enjoy!



