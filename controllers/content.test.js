import request from "supertest";
import { getDummyData } from './content.js'

const baseURL = "http://localhost:3000"

describe("GET /contents", () => {

    beforeAll(async () => {
        // set up the content
        await getDummyData();
    })

    it("should return 200", async () => {
        const response = await request(baseURL).get("/contents");
        expect(response.statusCode).toBe(200);
    });

    it("should return /contents", async () => {
        const response = await request(baseURL).get("/contents");
        expect(response.body.posts.length == 2).toBe(true);
    });
});