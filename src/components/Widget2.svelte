<span>
  I am widget2 called from {from}.
</span>

<script>
 import * as utils from '../common/utils.mjs';
 import { onMount, beforeUpdate, afterUpdate } from 'svelte';
 export let test;
 let widget = 2;
 export let from = 'page';

 console.log(`Test#${test} Widget#${widget}/${from} - I am running on ${utils.whereAmI()}.`);

 onMount(() => {
   console.log(`Test#${test} Widget#${widget}/${from} - Running onMount on ${utils.whereAmI()}`);
 });

 beforeUpdate(() => {
   console.log(`Test#${test} Widget#${widget}/${from} - Running beforeUpdate on ${utils.whereAmI()}`);
 });

 afterUpdate(() => {
   console.log(`Test#${test} Widget#${widget}/${from} - Running afterUpdate on ${utils.whereAmI()}`);
 });
</script>
