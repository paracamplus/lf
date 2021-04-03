<div>
  <h2>Test {test} (script module + script)</h2>
  <p>
    This page shows that code within a script context module element is
    run on the server and on the client. If you reload that page,
    the script context module is not run again. In fact, the script
    context module was run while launching the server on tests: this is
    the <code>Test#2</code> line that appears in the previous test.
  </p>
  
  <p>
    To see it, look at the output of the server and at the browser
    console. You should see (after reloading this page):
  </p>
  
  <center>
    <button><a href='test1'>previous test</a></button>
    <button style='margin-bottom: 2em'><a href='test3'>next test</a></button>
  </center>

  <table>
  <tr><th>server</th><th>client</th></tr>
  <tr><td><pre>

Test#2 - I am running on server.
Test#2 - And now, I am running on server.
Test#2 - And now, I am running on server.

  </pre></td>

  <td><pre style='margin-left: 2em;'>
    
Test#2 - I am running on client. 
Test#2 - And now, I am running on client.
Test#2 - I am running on client. 
Test#2 - And now, I am running on client.
    
  </pre></td></tr></table>

</div>

<script context='module'>
 import * as utils from '../common/utils.mjs';
 let test = 2;
  
  console.log(`Test#${test} - I am running on ${utils.whereAmI()}.`);
</script>

<script>
  // Variable test is visible here:
  console.log(`Test#${test} - And now, I am running on ${utils.whereAmI()}.`);
</script>
