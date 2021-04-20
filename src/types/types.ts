export type BotStep = {
  step_id: number,
  command_key: string,
  name: string,
  type_id: number,
  sort: number,
  linked_steps: string[],
  bot_id: number,
  parent_step_id: number
}

export type BotStepLinked = {
  step_id: number,
  command_key: string,
  name: string,
  type_id: number,
  sort: number,
  linked_steps: BotStepLinked[],
  bot_id: number,
  parent_step_id: number,
  depth_level?: number,
  vertical_offset?: number
}