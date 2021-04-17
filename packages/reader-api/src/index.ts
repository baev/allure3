export type TestStatus = "failed" | "broken" | "passed" | "skipped" | "unknown";

export interface TestResult {
  id: string;
  name: string;
  status: TestStatus;
}

export interface Visitor {
  visitTestResult(readerId: string, path: string, result: TestResult): Promise<any>;
  visitAttachmentFile(readerId: string, path: string): Promise<any>;
}

export interface Reader {
  read(visitor: Visitor, path: string): Promise<any>;
}
