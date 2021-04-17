import { promises as fsp } from "fs";
import { Reader, TestResult } from "@allure/reader-api";

const allure2ReaderId = "Allure2Reader";

const Allure2Reader: Reader = {
  read: async (visitor, path) => {
    if (!path.endsWith(".json")) {
      return;
    }
    const buffer = await fsp.readFile(path, "utf-8");
    const parsed = JSON.parse(buffer) as TestResult;
    await visitor.visitTestResult(allure2ReaderId, path, parsed);
  },
};

export { Allure2Reader };
