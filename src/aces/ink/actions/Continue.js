export const config = {
  id: "continue",
  highlight: true,
  isDeprecated: false,
  isAsync: false,
  listName: "Continue",
  displayText: "Continue (maximally: {0})",
  description: "Ask the story to move on.",
  params: [
    {
      id: "maximally",
      name: "Maximally",
      desc: "Check this if you want to get as far as you can.",
      type: "boolean",
      initialValue: "FALSE"
    },
  ],
};

export const expose = true;

export default function (maximally) {
    if (maximally) {
        this._story.ContinueMaximally();
    } else {
        this._story.Continue();
    }
}
