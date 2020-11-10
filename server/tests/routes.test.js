var request = require("supertest");
var app = require("../app");

describe("app", () => {
    it("ads have been loaded", (done) => {
        request(app).get("/ads")
            .expect(200, done);
    })
})