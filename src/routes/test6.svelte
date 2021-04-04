<div>
  <h2>Test {test} (with components)</h2>
  <p>
    This page is a variation of test5: Widget2 is used before Widget1.
    Therefore the order of evaluation is not the same as in test4 and
    test5, it follows the order of components in the HTML section.
  </p>

  <div class='border'>
    <Widget2 bind:test={test} />
    <Widget1 bind:test={test} />
  </div>

  <center>
    <button><a href='test5'>previous test</a></button>
    <button><a href='test7'>next test</a></button>
  </center>

  <table>
  <tr><th>server</th><th>client</th></tr>
  <tr><td><pre>

Test#6 - I am running on server.
Test#6 Widget#2/page - I am running on server.
Test#6 Widget#1 - I am running on server.
Test#6 Widget#2/widget1 - I am running on server.

  </pre></td>

  <td><pre style='margin-left: 2em;'>

Test#6 - I am running on client. 
Test#6 - Running beforeUpdate on client 
  Test#6 Widget#2/page - I am running on client. 
  Test#6 Widget#2/page - Running beforeUpdate on client 
  Test#6 Widget#1 - I am running on client.
  Test#6 Widget#1 - Running beforeUpdate on client 
    Test#6 Widget#2/widget1 - I am running on client. 
    Test#6 Widget#2/widget1 - Running beforeUpdate on client 
  Test#6 Widget#2/page - Running onMount on client
  Test#6 Widget#2/page - Running afterUpdate on client
    Test#6 Widget#2/widget1 - Running onMount on client 
    Test#6 Widget#2/widget1 - Running afterUpdate on client 
  Test#6 Widget#1 - Running onMount on client
  Test#6 Widget#1 - Running afterUpdate on client
Test#6 - Running onMount on client 
Test#6 - Running afterUpdate on client

  </pre></td></tr></table>

  <h2>Conclusion</h2>
  <p>
    The order of evaluation follows the order of components in the HTML part.
  </p>

</div>

<script>
 import Widget2 from '../components/Widget2.svelte';
 import Widget1 from '../components/Widget1.svelte';
 import * as utils from '../common/utils.mjs';
 import { onMount, beforeUpdate, afterUpdate } from 'svelte';
 let test = 6;

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
