export const config = {
  id: "has-tags",
  highlight: false,
  isDeprecated: false,
  listName: "Has tags",
  displayText: "Passage has tags available",
  description: "Test if the passage has tags to pull from.",
  params: [],
};

export const expose = true;

export default function() {
    return this._story.currentTags.length > 0;
}
