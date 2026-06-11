<img src="./src/icon.svg" width="100" /><br>
# Ink
<i>Provides easy support for Ink stories</i> <br>
### Version 2.0.0.0

[<img src="https://placehold.co/200x50/4493f8/FFF?text=Download&font=montserrat" width="200"/>](https://github.com/quewon/ink-sdk-v2/releases/download/SmugRainbowPony_INK-2.0.0.0.c3addon/SmugRainbowPony_INK-2.0.0.0.c3addon)
<br>
<sub> [See all releases](https://github.com/quewon/ink-sdk-v2/releases) </sub> <br>

#### What's New in 2.0.0.0
- **Added:** - HasTags (checks if a passage has tags)
- **Added:** - LoopTagIndex
- **Added:** - TagsAmount
- **Added:** - OnAnyVariableChanged
- **Added:** - LastChangedVariable
- **Added:** - Support for calling and evaluating Ink functions
- **Changed:** - Ported to SDK V2
- **Changed:** - CheckTags condition is now CheckTagExists
- **Changed:** - VariableChanged is now OnVariableChanged
- **Fixed:** - Deprecated KeyValueTag
- **Fixed:** - Fixed an update issue with observing variables

<sub>[View full changelog](#changelog)</sub>

---
<b><u>Author:</u></b> SmugRainbowPony, skymen <br>
<sub>Made using [CAW](https://marketplace.visualstudio.com/items?itemName=skymen.caw) </sub><br>

## Table of Contents
- [Usage](#usage)
- [Examples Files](#examples-files)
- [Properties](#properties)
- [Actions](#actions)
- [Conditions](#conditions)
- [Expressions](#expressions)
---
## Usage
To build the addon, run the following commands:

```
npm i
npm run build
```

To run the dev server, run

```
npm i
npm run dev
```

## Examples Files

---
## Properties
| Property Name | Description | Type |
| --- | --- | --- |


---
## Actions
| Action | Description | Params
| --- | --- | --- |
| Continue | Ask the story to move on. | Maximally             *(boolean)* <br> |
| Go to | Divert the story to a different place. | Path             *(string)* <br> |
| Load Story State | Load a story state from a JSON string. | Story State JSON string             *(string)* <br> |
| Set story | Load a story in the ink engine. | Story JSON string             *(string)* <br> |
| Choose | Select a choice from the choice list | Choice             *(number)* <br> |
| Add parameter | Add a parameter to an Ink function call. | Parameter             *(any)* <br> |
| Call function | Call an Ink function. | Function name             *(string)* <br> |
| Set variable | Set the value of an ink variable. | Variable             *(string)* <br>Variable             *(any)* <br> |
| Watch variable | Start listening for changes in ink variable. | Variable             *(string)* <br> |


---
## Conditions
| Condition | Description | Params
| --- | --- | --- |
| Can continue | Test if the story can continue. |  |
| For each choice | Loop over every currently available choice. Use 'LoopChoiceText' and 'LoopChoiceIndex' to get its info. |  |
| Has choices | Test if the story currently has choices to pull from. |  |
| Check tag exists | Check that a specific tag exists in the passage | Tag *(string)* <br> |
| For each tag | Loop over every currently available tag. Use 'LoopTagText' and 'LoopTagIndex' to get its info. |  |
| Has tags | Test if the passage has tags to pull from. |  |
| On any variable changed | Trigger when any variable changes values |  |
| On variable changed | Trigger when variable changes values | Variable *(string)* <br> |


---
## Expressions
| Expression | Description | Return Type | Params
| --- | --- | --- | --- |
| CurrentText | Text built by the last call to Continue. | string |  | 
| StateToJson | The state of the story as a JSON string. | string |  | 
| ChoiceText | Text to display for the given choice. | string | Choice *(number)* <br> | 
| ChoicesAmount | Number of available choices. | number |  | 
| LoopChoiceIndex | Get the index of the current choice in the loop | number |  | 
| LoopChoiceText | Get the text of the current choice in the loop | string |  | 
| EvaluateFunction | The output of your Ink function. | any | Function name *(string)* <br> | 
| LastFunctionOutput | The output value of your last Ink function call. | any |  | 
| LastFunctionReturn | The return value of your last Ink function call. | any |  | 
| KeyValueTag | Get the value corresponding to a key in a tag formatted to have 'KEY SEPARATOR VALUE'. Spaces around SEPARATOR are ignored. | string | Key *(string)* <br>Separator *(string)* <br> | 
| LoopTagIndex | Get the index of the current tag in the loop | number |  | 
| LoopTagText | Get the text of the current tag in the loop | string |  | 
| TagsAmount | Number of available tags. | number |  | 
| LastChangedVariable | The name of the last changed Ink variable | any |  | 
| VariableValue | The value of an ink variable | any | Variable *(string)* <br> | 


---
## Changelog

**2.0.0.0**
- **Added:** - HasTags (checks if a passage has tags)
- **Added:** - LoopTagIndex
- **Added:** - TagsAmount
- **Added:** - OnAnyVariableChanged
- **Added:** - LastChangedVariable
- **Added:** - Support for calling and evaluating Ink functions
- **Changed:** - Ported to SDK V2
- **Changed:** - CheckTags condition is now CheckTagExists
- **Changed:** - VariableChanged is now OnVariableChanged
- **Fixed:** - Deprecated KeyValueTag
- **Fixed:** - Fixed an update issue with observing variables

**0.0.0.0**
- **Added:** Initial release.
