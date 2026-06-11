export const config = {
  id: "any-var-changed",
  highlight: false,
  isDeprecated: false,
  isTrigger: true,
  listName: "On any variable changed",
  displayText: "On any variable changed",
  description: "Trigger when any variable changes values",
  params: [],
};

export const expose = true;

export default function () {
    return true;
}
