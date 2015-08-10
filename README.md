scrollify
---------

Some years back most browsers had support for scrolling the tbody element.
All you had to do was set a max-height or height and overflow:auto and boom
you had a scrolling table with a fixed header (and footer). Everything was
beautiful.

Then in some recent years this capability has disappeared from browsers unless
you manually specify each column width in addition to changing the display type
of the tbody. I don't like manually specifying the width of each column of a table.
I like it to flow naturally based on the contents of the cells. I feel like that
is the whole point.

`scrollify` attempts to "solve" this problem by providing a simple to use jQuery
plugin that will read the widths of the columns as a table would flow normally
and then set those same width manually, then apply the proper magic to make it 
scrollable.

example
-------

```html
<table class="scrollifyable">
  <thead>
    <tr>
      <th>name<th>
      <th>age</th>
      <th>fav food</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Steve</td><td>23</td><td>pizza</td></tr>
    <tr><td>Samantha</td><td>28</td><td>pizza</td></tr>
    <tr><td>Darlene</td><td>32</td><td>pizza</td></tr>
    <tr><td>David</td><td>56</td><td>pizza</td></tr>
    <tr><td>Donald</td><td>24</td><td>pizza</td></tr>
    <tr><td>Terry</td><td>43</td><td>pizza</td></tr>
  </tbody>
</table>

<script>
$('.scrollifyable').scrollify({ maxHeight : '30px' });
</script>
```

license
-------

MIT
