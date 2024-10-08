#!/usr/bin/env node

import { anonColCommand } from "@databye/cli";
import { Command } from "commander";
import process from "node:process";
// Import {anonDbCommand} from './commands/anon-db/anon-db-command';

const program = new Command().alias("dbye");

program.addCommand(anonColCommand);
program.parse(process.argv);
