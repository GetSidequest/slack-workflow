# Sidequest Workflow Deployment

## Background

Beginning September 26, 2024, Slack no longer supports executing workflows containing a "step from app."

As a result, all workflows with "Steps from Apps" ceased functioning on that date, and there is no direct migration path for those steps or workflows.

In Slack's post about this change, they noted:

> "[f]or existing distributed or Slack Marketplace apps, there is no clear path forward to continue supporting the new Workflow Builder. We've introduced a concept called connector functions, but at this time they cannot be developed outside of Slack.
>
> If you wish to enable your customers to integrate Workflow Builder with your app or services, we recommend making code they can host and execute available so they can utilize your functionality as custom functions in the new Workflow Builder.
>
> There is no other path to distributing custom functions as part of a distributed Slack app or as an app in the Slack Marketplace at this time."

This repository provides the code that users can download, deploy, and host themselves to integrate Sidequest with Slack's Workflow Builder.

---

## Prerequisites

Before deploying, make sure you have the following:

1. **Slack CLI tools**  
   - [Installation instructions for Linux/Mac](https://api.slack.com/automation/cli/install-mac-linux)
   - [Installation instructions for Windows](https://api.slack.com/automation/cli/install-windows)

2. **Authorization**  
   After installing the CLI tools, you need to authorize them with your Slack workspace:  
   [Instructions to authorize Slack CLI](https://api.slack.com/automation/cli/authorization)

---

## Deployment Instructions

1. Clone this repository:
   ``` git clone https://github.com/mantro/sidequest-workflow ```
2. Navigate to the cloned repository directory:
   ``` cd sidequest-workflow ```
3. Deploy the app using Slack CLI:
   ``` slack deploy ```

---

## Usage

Once the app is deployed, a new custom step will be available in Slack's Workflow Builder. You can trigger this step from within any workflow you create.

---

## FAQ

Q: Why is my workflow failing?

1. Slack isn't installed in the workspace

    - Make sure that Slack is installed and authorized in the workspace where you are attempting to run the workflow.
Sidequest is not a member of the channel

2. Ensure that Sidequest is a member of the channel where you are attempting to create a task.

 ---

## Support

For any issues or inquiries, contact us at filip@getsidequest.app.

 ---
