<div>
  <h2>Test {test} (with components)</h2>
  <p>
    This page shows how code within a script element is run on the
    server and on the client. Several components also appear.
  </p>

  <p>
    This is a variation of test4: the order of importations is modified
    without consequences. The order of evaluation is the same and follows
    the order of components in the HTML section.
  </p>

  <Widget1 bind:test={test} />
  <Widget2 bind:test={test} />

  <center>
    <button><a href='test4'>previous test</a></button>
    <button style='margin-bottom: 2em'><a href='test6'>next test</a></button>
  </center>

  <table>
  <tr><th>server</th><th>client</th></tr>
  <tr><td><pre>

Test#5 - I am running on server.
Test#5 Widget#1 - I am running on server.
Test#5 Widget#2/widget1 - I am running on server.
Test#5 Widget#2/page - I am running on server.

  </pre></td>

  <td><pre style='margin-left: 2em;'>

Test#5 - I am running on client. 
Test#5 - Running beforeUpdate on client 
  Test#5 Widget#1 - I am running on client.
  Test#5 Widget#1 - Running beforeUpdate on client 
    Test#5 Widget#2/widget1 - I am running on client. 
    Test#5 Widget#2/widget1 - Running beforeUpdate on client 
  Test#5 Widget#2/page - I am running on client. 
  Test#5 Widget#2/page - Running beforeUpdate on client 
    Test#5 Widget#2/widget1 - Running onMount on client 
    Test#5 Widget#2/widget1 - Running afterUpdate on client 
  Test#5 Widget#1 - Running onMount on client
  Test#5 Widget#1 - Running afterUpdate on client
  Test#5 Widget#2/page - Running onMount on client
  Test#5 Widget#2/page - Running afterUpdate on client
Test#5 - Running onMount on client 
Test#5 - Running afterUpdate on client

  </pre></td></tr></table>

</div>

<script>
 import Widget2 from '../components/Widget2.svelte';
 import Widget1 from '../components/Widget1.svelte';
 import * as utils from '../common/utils.mjs';
 import { onMount, beforeUpdate, afterUpdate } from 'svelte';
 let test = 5;

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
