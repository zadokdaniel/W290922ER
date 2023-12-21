# Exercise

1. create a new project with start,dev scripts and nodemon
2. create a txt file with 5 words manually
3. copy the txt file using js with the name "copy.txt"

- BONUS instead of "copy.txt" receive the name using arguments

ONCE SYNC ONCE ASYNC (promise / cb)

# Solution Reference

The current project provides an answer to the tool requested above

## scripts

`npm run start` - will start `app.js` with no arguments

`npm run dev` - will start `app.js` with no arguments using `nodemon`

## app.js Arguments

The tool may receive the following parameters

Usage: `[--name <name>] [<method>]`

Args:

- **_\<name\>_** the name of the file to copy into. Default "copy"
- **_\<method\>_** one of the following flags:
  - **_-sync_** using sync method. Default!
  - **_-cb_** using callback method
  - **_-p_** using promises method
  - **_-s_** using stream method

| parameter  | type   | description                                              | default |
| ---------- | ------ | -------------------------------------------------------- | ------- |
| **--name** | string | Optional. The name of the copied file for example "copy" | "copy"  |
| **-sync**  | bool   | Optional. To perform copy using sync functions           | true    |
| **-cb**    | bool   | Optional. To perform copy using callback functions       | false   |
| **-p**     | bool   | Optional. To perform copy using promise functions        | false   |
| **-s**     | bool   | Optional. To perform copy using streams                  | false   |

-sync is the default behavior. you should pass only one of the -sync/-cb/-p/-s
