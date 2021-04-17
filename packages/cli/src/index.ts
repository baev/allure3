import { start } from "@allure/core";
import yargs from "yargs";

// eslint-disable-next-line @typescript-eslint/no-unused-expressions
yargs(process.argv.slice(2))
  .scriptName("allure")
  // .command("generate", "generates Allure report", (args) =>
  //   args.options({ results: { type: "string", demandOption: true } }),
  // )
  .command<{ results: string }>(
    "serve <results>",
    "serves Allure report",
    (args) =>
      args.options({
        port: { type: "number", default: 0 },
      }),
    (args) => {
      start({ results: [args.results] });
    },
  )
  .options({
    config: { type: "string", demandOption: false },
  })
  .help().argv;
