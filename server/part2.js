import myModule from './part1.js';

function useMyModule() {
    console.log('Task 2');
    console.log(myModule.printVar());
}

useMyModule();
export { useMyModule };
