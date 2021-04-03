<div>
  <h2>Test {test} (single script element)</h2>
  <p>
    This page shows that code within a script element is run on the
    server and on the client. Ignore the <code>Test#2</code> line for now!
  </p>
  
  <p>
    To see it, look at the output of the server and at the browser
    console. You should see:
  </p>

  <center>
    <button style='margin-bottom: 2em'><a href='test2'>next test</a></button>
  </center>

  <table>
  <tr><th>server</th><th>client</th></tr>
  <tr><td><pre>
> TODO@0.0.1 dev
> sapper dev

✔ server (2.3s)
✔ client (2.3s)
✔ service worker (40ms)
Test#2 - I am running on server.
> Listening on http://localhost:3000
Test#1 - I am running on server.
  </pre></td>

  <td><pre style='margin-left: 2em;'>
Test#1 - I am running on client.
  </pre></td></tr></table>
  
</div>

<script>
 import * as utils from '../common/utils.mjs';
 let test = 1;
 
 console.log(`Test#${test} - I am running on ${utils.whereAmI()}.`);

</script>
