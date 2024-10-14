const myModule = (function() {
    let privateVar = "I am private variable";
    function printVar() {
        console.log('Task 1');
        return privateVar;
    }
    
    return {
        printVar
    };
})();

export default myModule;
