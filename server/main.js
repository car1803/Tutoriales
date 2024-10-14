import { useMyModule } from './part2.js';
import { app } from './part3.js';

if (app) {
    import('./part2.js').then(({ useMyModule }) => {console.log("Task 4");useMyModule();})
} else {
    import('./part3.js').then(() => {console.log('Server module loaded');})
}
