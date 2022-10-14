function receivesAFunction(callBack){
    return(callBack())    
}
function returnsANamedFunction(){
    return Function()
}
function returnsAnAnonymousFunction(){
    return ()=> x + y
}