<p> This is <code>widget{widget}</code>.</p>

<script>
 import * as utils from '../common/utils.mjs';
 import { onMount, beforeUpdate, afterUpdate } from 'svelte';
 export let test;
 let widget = 3;

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
