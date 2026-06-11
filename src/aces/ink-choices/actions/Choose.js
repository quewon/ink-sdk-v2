export const config = {
  id: "choose",
  highlight: true,
  isDeprecated: false,
  isAsync: false,
  listName: "Choose",
  displayText: "Choosing (choice {0})",
  description: "Select a choice from the choice list",
  params: [
    {
      id: "choice",
      name: "Choice",
      desc: "The index of the choice in the list.",
      type: "number",
      initialValue: ""
    },
  ],
};

export const expose = true;

export default function (choice) {
    this._loopedChoice = null;
    this._story.ChooseChoiceIndex(choice);
}
