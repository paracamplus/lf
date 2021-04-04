<div>
  <h2>Test {test} (with wrapper component)</h2>
  <p>
    This page shows how code within a script element is run on the
    server and on the client. Several components also appear, one of
    them wrapped within another.
  </p>

  <p>
    Here we wrap a widget within another widget. Indentation in the
    client output is mine.
  </p>

  <WidgetWrapper bind:test={test} >
    <Widget2 bind:test={test} />
  </WidgetWrapper>

  <center>
    <button><a href='test7'>previous test</a></button>
    <button style='margin-bottom: 2em'><a href='test9'>next test</a></button>
  </center>

  <table>
  <tr><th>server</th><th>client</th></tr>
  <tr><td><pre>

Test#8 - I am running on server.
Test#8 Widget#wrapper - I am running on server.
Test#8 Widget#2/page - I am running on server.

  </pre></td>

  <td><pre style='margin-left: 2em;'>

Test#8 - I am running on client.
Test#8 - Running beforeUpdate on client
  Test#8 Widget#wrapper - I am running on client.
  Test#8 Widget#wrapper - Running beforeUpdate on client
    Test#8 Widget#2/page - I am running on client. 
    Test#8 Widget#2/page - Running beforeUpdate on client 
    Test#8 Widget#2/page - Running onMount on client 
    Test#8 Widget#2/page - Running afterUpdate on client
  Test#8 Widget#wrapper - Running onMount on client 
  Test#8 Widget#wrapper - Running afterUpdate on client
Test#8 - Running onMount on client
Test#8 - Running afterUpdate on client

  </pre></td></tr></table>

</div>

<script>
 import Widget2 from '../components/Widget2.svelte';
 import WidgetWrapper from '../components/WidgetWrapper.svelte';
 import { onMount, beforeUpdate, afterUpdate } from 'svelte';
 import * as utils from '../common/utils.mjs';
 let test = 8;

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
