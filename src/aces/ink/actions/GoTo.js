export const config = {
  id: "go-to",
  highlight: true,
  isDeprecated: false,
  isAsync: false,
  listName: "Go to",
  displayText: "Go to {0}",
  description: "Divert the story to a different place.",
  params: [
    {
      id: "path",
      name: "Path",
      desc: "The ink path to go to.",
      type: "string",
      initialValue: ""
    },
  ],
};

export const expose = true;

export default function (path) {
    this._story.ChoosePathString(path);
}
