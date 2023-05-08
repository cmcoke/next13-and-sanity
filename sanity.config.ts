import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

const config = defineConfig({
  projectId: "fv0ir0bz",
  dataset: "production",
  title: "My Person Website",
  apiVersion: "2023-05-08",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemas }
});

export default config;
