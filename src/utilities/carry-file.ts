import {readFile} from '@shopify/cli-kit/node/fs'
import {consoleLog, outputInfo} from '@shopify/cli-kit/node/output'

export type LogOperation = {
  message: string
}

export type CarryOperation = {
  command: string
  options: LogOperation
}

const OPERATIONS: {[key: string]: (opt: LogOperation) => void} = {
  log: logOperation,
}

function logOperation(options: LogOperation) {
  outputInfo(options.message)
}

export async function loadCarryFile(path: string): Promise<any> {
  const carryFileContents = await readFile(path)
  const carryFile = JSON.parse(carryFileContents)
  return carryFile
}

export function executeCarryFile(operations: CarryOperation[]) {
  for (const op of operations) {
    OPERATIONS[op.command](op.options)
  }
}
