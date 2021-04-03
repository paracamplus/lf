<p> I am widget1 and here is widget2:
  <Widget2 from='widget1' bind:test={test}/></p>

<script>
 import Widget2 from '../components/Widget2.svelte';
 import * as utils from '../common/utils.mjs';
 import { onMount, beforeUpdate, afterUpdate } from 'svelte';
 export let test;
 let widget = 1;

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
