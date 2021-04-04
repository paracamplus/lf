<div>
  <h2>Test {test} (script module + script)</h2>
  <p>
    This page shows that code within a script context module element
    is run on the server and on the client. If you reload that page
    (and thus ask the server to regenerate that page) the script
    context module is not run again on the server but only on the
    client. In fact, the script context module was run while launching
    the server: this is why the <code>Test#2</code> line
    appears in the previous page.
  </p>
  
  <p>
    When this page is displayed and re-loaded, the output of the
    server and the Web console should look like:
  </p>
  
  <center>
    <button><a href='test1'>previous test</a></button>
    <button><a href='test3'>next test</a></button>
  </center>

  <table>
  <tr><th>server</th><th>client</th></tr>
  <tr><td><pre>

Test#2/context - I am running on server.
Test#2 - And now, I am running on server.
      <em>after page reload</em>
Test#2 - And now, I am running on server.
      <em>return to previous test then next test</em>

  </pre></td>

  <td><pre>
    
Test#2/context - I am running on client. 
Test#2 - And now, I am running on client.
      <em>after page reload</em>
Test#2/context - I am running on client. 
Test#2 - And now, I am running on client.
      <em>return to previous test then next test</em>
Test#1 - I am running on client.
Test#2 - And now, I am running on client.
    
  </pre></td></tr></table>

  <h2>Conclusion</h2>
  <p>
    It is important to distinguish reloading a page (that is, ask the
    server to regenerate the page) from following links (that are
    entirely processed by the client).
  </p>

</div>

<script context='module'>
 import * as utils from '../common/utils.mjs';
 let test = 2;
  
  console.log(`Test#${test}/context - I am running on ${utils.whereAmI()}.`);
</script>

<script>
  // Variable test is visible here:
  console.log(`Test#${test} - And now, I am running on ${utils.whereAmI()}.`);
</script>
