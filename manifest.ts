import { Manifest } from "deno-slack-sdk/mod.ts";
import { CreateTask } from "./functions/create_task.ts";

export default Manifest({
  name: "Sidequest Create Workflow",
  description: "Create a task in Sidequest",
  icon: "assets/logo.png",
  functions: [CreateTask],
  botScopes: ["commands"],
  outgoingDomains: ["api.getsidequest.app"],
});
