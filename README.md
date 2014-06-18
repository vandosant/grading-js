# Grading

You work for a school, and you need to help the teachers come up with some analytics about their students.

## Challenge 1 - Determining differences

You are given an array of grades.  You need to process this array, and return an array that describes whether each grade
was higher, lower or even to the previous grade.

So given the following array:

```javascript
[6,3,5,4,3,4,4,5]
```

Your code would produce:

```javascript
["down","up","down","down","up","even","up"]
```

When given an empty array, it returns an empty array.

NOTE: your array tracks the differences between grades, so it will be one item _shorter_ than the given array.

## Challenge 2 - Finding students in decline

A student is considered in decline if they have 3 grades lower than previous grades, even if there are some steady
grades in there.  For example:

```javascript
[10, 10, 10, 9, 9, 8, 8, 8, 8, 7] // ["even", "even", "down", "even", "down", "even", "even", "even", "down"]
[10, 10, 10, 9, 9, 8, 8, 8, 8, 7] // in decline

[10, 9, 8, 7] // ["down", "down", "down"]
[10, 9, 8, 7] // in decline

[10, 9, 8, 7, 8] // ["down", "down", "down", "up"]
[10, 9, 8, 7, 8] // not in decline

[10, 9, 8] // ["down", "down"]
[10, 9, 8] // not in decline
```

## Challenge 3 - Check your code

There are 27 students in decline in the `data/grades.json` files, and 73 students not in decline.

Write code in `index.html` that runs an ajax request against that file, and make sure that the results match.

# Setup

* Fork
* Clone
* Create a new branch for your work using `git checkout -b v1`
* Implement specs in `spec/grade_parser_spec.js`
* Run specs by opening `spec/SpecRunner.html`
* Push using `git push -u origin v1`

## Further Practice

This warmup can be completed multiple times to increase your comfort level with the material.
To work on this from scratch, you can:

1. Add an upstream remote that points to the original repo `git remote add upstream git@github.com:gSchool/THIS-REPO.git`
1. Fetch the latest from the upstream remote using `git fetch upstream`
1. Create a new branch from the master branch of the upstream remote `git checkout -b v2 upstream/master`
1. Implement specs and code
1. Push using `git push -u origin v2`

Each time you do the exercise, create a new branch. For example the 3rd time you do the exercise the branch
name will be v3 instead of v2.
