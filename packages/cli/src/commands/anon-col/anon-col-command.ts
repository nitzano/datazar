import { Command } from "commander";
import { addEngineCommands } from "../../engine/add-engine-commands.js";

export const anonColCommand: Command = new Command("anon-col");

anonColCommand
  .description("Anonymize a single column in a table")
  .option("--confirm", "Confirm before running", true)
  .option("--no-confirm", "skip confirmation");
// .addCommand(scrambleCommand)
// .addCommand(maskCommand);
// .addCommand(fakeCommand)

addEngineCommands(anonColCommand);
