// say-hello.test.ts
import { sayHello } from "../src/say-hello";
describe('sayHello', function () {
    it('should return hello daniel', function () {
        expect(sayHello('daniel')).toBe('hello daniel');
    });
});
