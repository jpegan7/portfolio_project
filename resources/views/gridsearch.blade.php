<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>Jack's Site - Pathfinder</title>
    <link rel="stylesheet" type="text/css" href="{{ url('/css/path.css') }}" />
  </head>
  
  <body id = "b">
    <canvas id="window"></canvas>
    <select id="algorithms">
        <option value="bfs">BFS</option>
        <option value="dfs">DFS</option>
        <option value="A*">A*</option>
    </select>
    
    <input type="range" min="1" max="100" value="10"  id="animationSlider">
    Animation Delay:
    <strong id="animationSpeed"> </strong>

    <div id = "under">
        <input type="button" id="node" class="under" value="Place Node">
        <input type="button" id="wall" class="under" value="Place Wall">
        <input type="button" id="flag" class="under" value="Place Flag">
        <input type="button" id="start" class="under" value="Start Search">
        <input type="button" id="clear" class="under" value="Clear Search">
        <input type="button" id="reset" class="under" value="Reset">
        <input type="checkbox" id="diag" class="under" value="Diagonal">
        <label for="diag" id="diagLabel" class="under">Diagonal Allowed</label>
    </div>

    Path Length:
    <strong id="pathLength"> </strong>
</br>
    # of Cells Visited: 
    <strong id="totalCells"></strong>
    
    <script type="text/javascript" src="{{ URL::asset('js/grid.js') }}"></script>
    <script type="text/javascript" src="{{ URL::asset('js/pathScript.js') }}"></script>
  </body>
</html>