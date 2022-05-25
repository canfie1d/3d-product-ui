import { GraphQLClient } from "graphql-request";

export const githubApi = new GraphQLClient('https://api.github.com/graphql', {
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_API_TOKEN}`
  }
});

export const fileUploadConfig = {
  headers: { 'content-type': 'multipart/form-data' },
  onUploadProgress: (event: any) => {
    console.log(`Current progress:`, Math.round((event.loaded * 100) / event.total));
  },
};
