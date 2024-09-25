import { DefineFunction, Schema, SlackFunction } from "deno-slack-sdk/mod.ts";

export const CreateTask = DefineFunction({
  callback_id: "create_task",
  title: "Create a Sidequest Task",
  description: "Create a task in Sidequest",
  source_file: "functions/create_task.ts",
  input_parameters: {
    properties: {
      title: {
        type: Schema.types.string,
        title: "Summary",
        description: "Summarize the task",
        hint: "What needs to be done?",
      },
      description: {
        type: Schema.types.string,
        name: "Details",
        description: "Provide additional details, if needed.",
      },
      pool_id: {
        type: Schema.slack.types.channel_id,
        title: "To",
        description: "Select a recipient",
        hint: "Who should work on this?",
      },
      watching_user_ids: {
        type: Schema.types.array,
        title: "CC",
        hint: "who should be kept in the loop?",
        default: [],
        items: {
          type: Schema.slack.types.user_id,
        },
      },
      requester_id: {
        type: Schema.slack.types.user_id,
        title: "From",
        hint: "Who would like this to be done?",
      },
      start_date: {
        type: Schema.types.string,
        title: "Start date",
        hint: "The task will be hidden from your Hmoe Screen until this date",
      },
      due_date: {
        type: Schema.types.string,
        title: "Due date",
        hint: "When should this be completed",
      },
      importance: {
        type: Schema.types.string,
        description: "Importance of the task",
        enum: ["1", "2", "3"],
        choices: [
          {
            value: "1",
            title: "Low",
          },
          {
            value: "2",
            title: "Medium",
          },
          {
            value: "3",
            title: "High",
          },
        ],
      },

      remind_at: {
        type: Schema.types.string,
        description: "Remind at date of the task",
      },
    },
    required: ["requester_id", "pool_id", "title"],
  },
});

export default SlackFunction(CreateTask, async ({ inputs, team_id }) => {
  const teamId = team_id;
  const userId = inputs.requester_id;
  const requesterId = inputs.requester_id;
  const poolId = inputs.pool_id;
  const title = inputs.title;
  const description = inputs.description;
  const startDate = inputs.start_date;
  const dueDate = inputs.due_date;
  const importance = inputs.importance;
  const watchingUserIds = inputs.watching_user_ids ?? [];
  const remindAt = inputs.remind_at;

  const request_body = {
    teamId,
    userId,
    requesterId,
    poolId,
    title,
    description,
    startDate,
    dueDate,
    importance,
    watchingUserIds,
    remindAt,
  };

  const res = await fetch("https://api.getsidequest.app/api/task/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request_body),
  });

  if (!res.ok) {
    return {
      error: "Failed to create task",
    };
  }

  return {
    outputs: {},
  };
});
