export const config = {
  id: "can-continue",
  highlight: false,
  isDeprecated: false,
  listName: "Can continue",
  displayText: "Story can continue",
  description: "Test if the story can continue.",
  params: [],
};

export const expose = true;

export default function() {
    return this._story.canContinue;
}
