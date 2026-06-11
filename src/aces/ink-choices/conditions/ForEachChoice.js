export const config = {
  id: "for-each-choice",
  highlight: false,
  isDeprecated: false,
  isLooping: true,
  listName: "For each choice",
  displayText: "For each available choice",
  description: "Loop over every currently available choice. Use 'LoopChoiceText' and 'LoopChoiceIndex' to get its info.",
  params: [],
};

export const expose = true;

export default function() {
    const loopContext = this.runtime.sdk.createLoopingConditionContext();
    for (const choice of this._story.currentChoices) {
        this._loopedChoice = choice;
        loopContext.retrigger();
        if (loopContext.isStopped)
            break;
    }
    loopContext.release();
    this._loopedChoice = null;
}
