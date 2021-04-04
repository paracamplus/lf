<div>
  <h2>Test {test} (single script element)</h2>
  <p>
    This page shows that code within a script element is (at first)
    run on the server and on the client.
    Ignore the <code>Test#2</code> line for now!
  </p>
  
  <p>
    When this page is displayed, the output of the server and the Web
    console should look like:
  </p>

  <center>
    <button><a href='/'>start page</a></button>
    <button><a href='test2'>next test</a></button>
  </center>

  <table>
  <tr><th>server</th><th>client</th></tr>
  <tr><td><pre>
> TODO@0.0.1 dev
> sapper dev

✔ server (2.3s)
✔ client (2.3s)
✔ service worker (40ms)
Test#2/context - I am running on server.
> Listening on http://localhost:3000
Test#1 - I am running on server.
  </pre></td>

  <td><pre>
Test#1 - I am running on client.
  </pre></td></tr></table>

  <h2>Conclusion</h2>
  <p>
    When the page is loaded, code runs on both side but, return to
    `start page` (with the button) then back again to `first test`.
    Only client code is re-run. Server code is only run when the page
    is initially or re-loaded that is, when requested from the server.
    The `start page` button is processed on the client only.
  </p>
  
</div>

<script>
 import * as utils from '../common/utils.mjs';
 let test = 1;
 
 console.log(`Test#${test} - I am running on ${utils.whereAmI()}.`);

</script>
