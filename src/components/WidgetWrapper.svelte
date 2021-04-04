<div>
  Inclusion begins here:
  <slot></slot>
  and is now stopped.
</div>

<script>
 import { onMount, beforeUpdate, afterUpdate } from 'svelte';
 import * as utils from '../common/utils.mjs';
 export let test;
 let widget = 'wrapper';

 console.log(`Test#${test} Widget#${widget} - I am running on ${utils.whereAmI()}.`);

 onMount(() => {
   console.log(`Test#${test} Widget#${widget} - Running onMount on ${utils.whereAmI()}`);
 });

 beforeUpdate(() => {
   console.log(`Test#${test} Widget#${widget} - Running beforeUpdate on ${utils.whereAmI()}`);
 });

 afterUpdate(() => {
   console.log(`Test#${test} Widget#${widget} - Running afterUpdate on ${utils.whereAmI()}`);
 });

</script>
