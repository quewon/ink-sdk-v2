export const config = {
  id: "load-state",
  highlight: false,
  isDeprecated: false,
  isAsync: false,
  listName: "Load Story State",
  displayText: "Load state from {0}",
  description: "Load a story state from a JSON string.",
  params: [
    {
      id: "state",
      name: "Story State JSON string",
      desc: "The story state to load into the story. Most likely coming from a file.",
      type: "string",
      initialValue: ""
    },
  ],
};

export const expose = true;

export default function (jsonstr) {
    this._story.state.LoadJson(jsonstr);
}
