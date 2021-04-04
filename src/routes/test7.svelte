<div>
  <h2>Test {test} (with unused component)</h2>
  <p>
    This page imports Widget3 but does not use it so its code will not run.
  </p>

  <div class='border'>
    <Widget2 bind:test={test} />
    <Widget1 bind:test={test} />
  </div>

  <center>
    <button><a href='test6'>previous test</a></button>
    <button><a href='test8'>next test</a></button>
  </center>

  <table>
  <tr><th>server</th><th>client</th></tr>
  <tr><td><pre>

Test#7 - I am running on server.
Test#7 Widget#2/page - I am running on server.
Test#7 Widget#1 - I am running on server.
Test#7 Widget#2/widget1 - I am running on server.

  </pre></td>

  <td><pre style='margin-left: 2em;'>

Test#7 - I am running on client. 
Test#7 - Running beforeUpdate on client 
  Test#7 Widget#2/page - I am running on client. 
  Test#7 Widget#2/page - Running beforeUpdate on client 
  Test#7 Widget#1 - I am running on client.
  Test#7 Widget#1 - Running beforeUpdate on client 
    Test#7 Widget#2/widget1 - I am running on client. 
    Test#7 Widget#2/widget1 - Running beforeUpdate on client 
  Test#7 Widget#2/page - Running onMount on client
  Test#7 Widget#2/page - Running afterUpdate on client
    Test#7 Widget#2/widget1 - Running onMount on client 
    Test#7 Widget#2/widget1 - Running afterUpdate on client 
  Test#7 Widget#1 - Running onMount on client
  Test#7 Widget#1 - Running afterUpdate on client
Test#7 - Running onMount on client 
Test#7 - Running afterUpdate on client

  </pre></td></tr></table>

  <h2>Conclusion</h2>
  <p>
    Imported but unused components do not perturb the evaluation order
    of used components.
  </p>

</div>

<script>
 import Widget2 from '../components/Widget2.svelte';
 import Widget1 from '../components/Widget1.svelte';
 import Widget3 from '../components/Widget3.svelte';
 import { onMount, beforeUpdate, afterUpdate } from 'svelte';
 import * as utils from '../common/utils.mjs';
 let test = 7;

 console.log(`Test#${test} - I am running on ${utils.whereAmI()}.`);

 onMount(() => {
   console.log(`Test#${test} - Running onMount on ${utils.whereAmI()}`);
 });

 beforeUpdate(() => {
   console.log(`Test#${test} - Running beforeUpdate on ${utils.whereAmI()}`);
 });

 afterUpdate(() => {
   console.log(`Test#${test} - Running afterUpdate on ${utils.whereAmI()}`);
 });

</script>
