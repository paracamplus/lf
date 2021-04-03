<div>
  <h2>Test {test} (beforeUpdate, onMount, afterUpdate)</h2>
  <p>
    This page shows how code within a script element is run on the
    server and on the client while, on the client, several lifecycle
    functions are additionally run on the client along a precise order.
  </p>

  <p>
    If you return to test2, you will see that the script context
    module is not run again on the server. In fact, the script element
    is also not re-run on the server.
  </p>
  
  <p>
    To see it, look at the output of the server and at the browser
    console. You should see (after reloading this page):
  </p>
  
  <center>
    <button><a href='test2'>previous test</a></button>
    <button style='margin-bottom: 2em'><a href='test4'>next test</a></button>
  </center>

  <table>
  <tr><th>server</th><th>client</th></tr>
  <tr><td><pre>

Test#3 - I am running on server.

  </pre></td>

  <td><pre style='margin-left: 2em;'>
    
Test#3 - I am running on client.
Test#3 - Running beforeUpdate on client 
Test#3 - Running onMount on client
Test#3 - Running afterUpdate on client

  </pre></td></tr></table>

</div>

<script>
 import * as utils from '../common/utils.mjs';
 import { onMount, beforeUpdate, afterUpdate } from 'svelte';
 let test = 3;
 
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
