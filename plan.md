Markdown Pastebin
https://markdownpastebin.com/?id=20aefbf15d9e480bb64d2e67e40fcf26
TODO App

Suggestion for TODO app requirements using React
Data structure

Context driven.
modul css

components needed:

TodoForm
TodoItem
TodoFilter
TodoSorter
TodoList

Task: {
id <UUID>
created <Timestamp>
description <String>
Status <Boolean>
}

Actions

    Add task
    View tasks
    Delete task

Filters

    Hide completed (default)
    Hide incompleted
    Show all
    Search

Sorting

    Created Descending (default)
    Created Ascending

Optional challenges

    customHook, useLocalStorage

    Action: Edit tasks
    Action: Mark as important (requires additional boolean)
    Sorting: Sort by completed (requires additional timestamp)
    Datastructure: Hierarchical task/subtasks structure (too difficult maybe?)

Lines: 33Words: 89
