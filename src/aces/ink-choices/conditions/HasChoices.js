export const config = {
  id: "has-choices",
  highlight: false,
  isDeprecated: false,
  listName: "Has choices",
  displayText: "Story currently has choices available",
  description: "Test if the story currently has choices to pull from.",
  params: [],
};

export const expose = true;

export default function() {
    return this._story.currentChoices.length > 0;
}
