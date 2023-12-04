import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "https://7jzr31g2.api.sanity.io/v1/graphql/production/default",
  documents: "**/*.{gql,graphql}",
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    "./src/graphql/generated.ts": {
      plugins: ["typescript", "typescript-operations", "typed-document-node"],
    },
  },
};

export default config;
