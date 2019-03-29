import {App} from "../src/components/App";
import "jasmine";
describe("Namer getName function return value", () => {
    it("Should be defined.", ()=>{
        const app = new App();
        expect(app.handleSubmit()).toBeDefined("The function handleSubmit() should be defined.");
    });
});