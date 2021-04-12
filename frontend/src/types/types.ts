export type BotStep = {
  step_id: number,
  command_key: string,
  name: string,
  type_id: number,
  sort: number,
  linked_steps: string[],
  bot_id: number
}