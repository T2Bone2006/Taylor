
import { defineConfig } from "sanity"
import { structureTool } from "sanity/structure";
import schemas from "./sanity/schemas"

export const config = defineConfig({
    projectId: "nu5dig81",
    dataset: "production",
    title: "Taylor Burrows",
    apiVersion: "2024-01-16",
    basePath: "/admin",
    plugins: [structureTool()],
    schema: { types: schemas},
    useCdn: true,
    token: "skuDIXmceCLbDX2jlUiKDqms4I2kDIRAQ3SEqVApY9qYI9dRbCTJy4LNllRp87EmimBW6OhNNXmgHQoFMvLVBW7QlU6qvylK0czaOL4RXC5356QZ7bOXSopPimdBFJNVqePjPeK1xRriLnbbNw2rxcM8dulVq9gm9t1BmelTqsD7iw7jNDtu",

})

export default config;