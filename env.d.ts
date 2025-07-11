// env.d.ts
namespace NodeJS {
  interface ProcessEnv {
    SANITY_PROJECT_ID: string;
    SANITY_DATASET: string;
    SANITY_API_VERSION: string;
    SANITY_USE_CDN: "true" | "false";
  }
}
