import { TestResult, Visitor } from "@allure/reader-api";
import { Allure2Reader } from "@allure/readers";
import { watch } from "chokidar";

export interface Config {
  results: string[];
}

const start = (config: Config) => {
  const visitor: Visitor = {
    // eslint-disable-next-line
    visitTestResult: async (readerId: string, path: string, result: TestResult) => {
      // eslint-disable-next-line no-console
      console.log(readerId, path, result);
    },
    visitAttachmentFile: async () => {},
  };
  const watcher = watch(config.results, { depth: 1 });
  watcher.on("add", (path) => Allure2Reader.read(visitor, path));
};

export { start };
