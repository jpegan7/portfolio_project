class Grid{
    constructor(columns,rows){
        this.columns = columns;
        this.rows = rows;

        this.grid = this.setUpGrid(new Array());
        this.mode = 0;
        this.algorithm = "BFS";

        this.startNodeIndex = -1;
        this.flagIndex = -1;

        this.finalPath = null;

    }

    setUpGrid(g){
        for(var i = 0; i<this.columns*this.rows; i++){
            g.push(0);
        }
        return g;
    }


    //Dynamically chooses what to place
    placeAt(i,j){
        if(this.mode==0)
            this.placeWallAt(i,j);
        else if(this.mode == 1)
            this.placeNodeAt(i,j);
        else if(this.mode == 2)
            this.placeFlagAt(i,j)
    }

    placeWallAt(i,j){
        this.grid[i*this.columns+j] = 1;
    }

    placeNodeAt(i,j){
        
        if(this.startNodeIndex != -1)
            this.grid[this.startNodeIndex] = 0;
        
        this.grid[i*this.columns+j] = 2;
        this.startNodeIndex = i*this.columns+j;
    }

    placeFlagAt(i,j){
        if(this.flagIndex != -1)
            this.grid[this.flagIndex] = 0;

        this.grid[i*this.columns+j] = 3;

        this.flagIndex = i*this.columns+j;
    }

    removeAt(i,j){
        var val = this.grid[i*this.columns+j];

        if(val == 2) this.startNodeIndex = -1;
        else if(val == 3) this.flagIndex= -1;


        this.grid[i*this.columns+j] = 0;
        
    }

    reset(){
        this.startNodeIndex = -1;
        this.flagIndex = -1;
        this.finalPath = null;

        this.grid = this.grid.map(y => 0);
    
    }

    clearSearch(){
        for(var index = 0; index< this.rows*this.columns; index++)
            if(this.grid[index] == 4 || this.grid[index] == 5) this.grid[index] = 0; 
        
        
        this.finalPath = null;

    }
} 
