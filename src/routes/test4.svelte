<div>
  <h2>Test {test} (with components)</h2>
  <p>
    This page shows how code within a script element is run on the
    server and on the client in presence of several components.
  </p>

  <p>
  We see that the code of the script element of the current page is run
  then the components start loading and everything is interlaced.
  Indentation in the client column is mine to help understand the
  order of operations. Note that included components are completely loaded
  (that is no more code is run) before the including component (or page)
  is completely loaded.
  </p>

  <div class='border'>
    <Widget1 bind:test={test} />
    <Widget2 bind:test={test} />
  </div>

  <center>
    <button><a href='test3'>previous test</a></button>
    <button><a href='test5'>next test</a></button>
  </center>

  <table>
  <tr><th>server</th><th>client</th></tr>
  <tr><td><pre>

Test#4 - I am running on server.
Test#4 Widget#1 - I am running on server.
Test#4 Widget#2/widget1 - I am running on server.
Test#4 Widget#2/page - I am running on server.

  </pre></td>

  <td><pre>
    
Test#4 - I am running on client. 
Test#4 - Running beforeUpdate on client 
  Test#4 Widget#1 - I am running on client.
  Test#4 Widget#1 - Running beforeUpdate on client 
    Test#4 Widget#2/widget1 - I am running on client. 
    Test#4 Widget#2/widget1 - Running beforeUpdate on client 
  Test#4 Widget#2/page - I am running on client. 
  Test#4 Widget#2/page - Running beforeUpdate on client 
    Test#4 Widget#2/widget1 - Running onMount on client 
    Test#4 Widget#2/widget1 - Running afterUpdate on client 
  Test#4 Widget#1 - Running onMount on client
  Test#4 Widget#1 - Running afterUpdate on client
  Test#4 Widget#2/page - Running onMount on client
  Test#4 Widget#2/page - Running afterUpdate on client
Test#4 - Running onMount on client 
Test#4 - Running afterUpdate on client

  </pre></td></tr></table>

  <h2>Conclusion</h2>
  <p>
    The evaluation order is respected but if code and beforeUpdate are
    run in sequence, onMount and afterUpdate are run after the
    corresponding HTML is generated.
  </p>

</div>

<script>
 import Widget1 from '../components/Widget1.svelte';
 import Widget2 from '../components/Widget2.svelte';
 import * as utils from '../common/utils.mjs';
 import { onMount, beforeUpdate, afterUpdate } from 'svelte';
 let test = 4;

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
