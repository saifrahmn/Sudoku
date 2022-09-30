/*var grid= new Array(9);
for(let i=0;i<=8;i++){
	grid[i]= new Array(9);
}*/
var grid=   [[8,3,0,0,1,0,9,0,7],
            [2,0,6,0,5,7,0,3,1],
            [4,0,7,0,9,0,6,0,8],
            [5,6,0,1,0,4,0,8,2],
            [1,0,3,6,0,0,5,0,9],
            [0,4,8,0,2,9,0,0,3],
            [0,5,2,7,8,0,3,0,4],
            [9,0,1,0,4,5,2,7,6],
            [3,7,4,0,6,0,8,0,5]];

solver(grid);
function solver(grid){
    var arr= new Array(9);
    for(let i=0;i<=8;i++){
        arr[i]= new Array(9);
    }
    for(let i=0;i<=8;i++){
        for(let j=0;j<=8;j++){
            if(grid[j][i]==0){
                let k=0;
                    for(let v=0;v<=8;v++){
                        if(j<=2){
                            if(i<=2){
                                for(let x=0;x<=8;x++)

                                    if(v!=grid[x][i]&&grid[x][i]!=0){
                                        arr[k][i]=v;
                                        k++;
                                    }
                                }

                                    for(let y=0;y<=8;y++){
                                        
                                        if(v!=grid[j][y]&&grid[j][y]!=0){
                                            arr[k][i]=v;
                                            k++;
                                        }
                                    }
                                
                                
                            }
                            else if(i>=6){

                            }
                            else{

                            }
                        }
                        else if(j>=6){
                            if(i<=2){

                            }
                            else if(i>=6){

                            }
                            else{
                                
                            }
                        }
                        else{
                            if(i<=2){

                            }
                            else if(i>=6){

                            }
                            else{
                                
                            }
                        }
                        
                    }
                }
                
                
            }
        }
    }
}
/*
function empty(grid){
    var arr=new Array();
    var v=0;
    for(let i=0;i<=8;i++){
        grid[i]= new Array(9);
    }
    for(let i=0;i<=8;i++){
        for(let j=0;j<=8;j++){
            if(grid[i][j]==0){
                arr[x][y]=i,j;
                x++;
                y++;
            }
        }
    }
    console.log(arr);
}
function solver(grid,arr){
    for(let i=0;i<=8;i++){
        if(grid[i])
    }
}
/*
for(let i=0;i<=8;i++){
    if(grid[i][0]!=null){
        var v=grid[i][0];
        if(i%3>=2){
            for(let j=0;j<=8;j++){
                if(j==3||j==4||j==5){
                    continue;
                }
                else{
                    grid[j][0]==
                }
            }
        }
        else if(2>i%3>=1){
            for(let j=3;j<=5;j++){

            }
        }
        else{
            for(let j=0;j<=2;j++){

            }
        }
    }
}*/
