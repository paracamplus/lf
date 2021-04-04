<div>
  <h2>Test {test} (beforeUpdate, onMount, afterUpdate)</h2>
  <p>
    This page shows how code within a script element is run on the
    server and on the client while, on the client, several lifecycle
    functions are additionally run on the client along a precise order.
  </p>

  <p>
    When this page is displayed, the output of the server and the Web
    console should look like:
  </p>
  
  <center>
    <button><a href='test2'>previous test</a></button>
    <button><a href='test4'>next test</a></button>
  </center>

  <table>
  <tr><th>server</th><th>client</th></tr>
  <tr><td><pre>
&nbsp;
      <em>reload page</em>
Test#3 - I am running on server.
      <em>return to previous test then next test</em>

  </pre></td>

  <td><pre>
    
Test#3 - I am running on client.
Test#3 - Running beforeUpdate on client 
Test#3 - Running onMount on client
Test#3 - Running afterUpdate on client
     <em>reload page</em>
Test#3 - I am running on client.
Test#3 - Running beforeUpdate on client 
Test#3 - Running onMount on client
Test#3 - Running afterUpdate on client
      <em>return to previous test then next test</em>
Test#3 - I am running on client.
Test#3 - Running beforeUpdate on client 
Test#3 - Running onMount on client
Test#3 - Running afterUpdate on client

  </pre></td></tr></table>

  <h2>Conclusion</h2>
  <p>
    The order of evaluation is fixed: first the code is run, then the
    various lifecycle functions are run. More on this on next tests...
  </p>

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
