// lexical scope
const myVar="value1";
function myApp(){
    function myFunc(){
        //const myVar="value59";
        const myFunc2=()=>{
            console.log("inside myFunc",myVar);
        }
        myFunc2();
        };
    console.log(myVar);
    myFunc();
}

myApp();

// javascript first checks in local scope then in lexical scope
// that is parent of local scope
// example myFunc()->myApp()->Global Scope if not then error