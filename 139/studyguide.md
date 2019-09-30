# 139 Assessment Study Guide

## Blocks
* Closures and scopes
  - Closures are a general programming term for a "chunk" of code that is saved
    for later execution. A closure retains references to its surround artifacts
    -- its binding.
  - Closures understand their surrounding context when initialized:
    - Local variables
    - Method references
    - Constants and other artifacts in the code
    - Said another way, a closure's binding consists of artifacts that were in
      scope at the point at which the closure was created

* How blocks work and when we'd want to use them
  - Blocks are chunks of code that live between `{...}` or `do...end`. Blocks
    have lenient arity rules meaning, they don't enforce argument count. The
    return value of a block is based on the last expression in the block.
  - Blocks can be used to defer some implementation code to method invocation
    decision.
  - Blocks are also used to perform some kind of before/after actions - sandwich
    code.
* Blocks and variable scope
  - When initialized, a block understands it surrounding context. Local
    variables, method references, and constantants are enclosed in the block's
    binding and can be referenced when the block is executed.
  - inner scopes can access outer scopes
* Write methods that use blocks and procs
* Methods with an explicit block parameter
* Arguments and return values with blocks
* When can you pass a block to a method?
* `&:symbol`
  - adding a `&` in front of an object is telling Ruby to try to convert this
    object to a block
    - `&` checks whether the object is a Proc
      - if it is, it uses the object as is
      - if not, it calls `#to_proc` on it (errors if this doesn't return a proc)
    - if no errors were thrown, the object is now converted to a block
  - Unary `&` operator is only used in the context of method definition and
    method invocation

## Testing with Minitest
* Testing terminology
* Minitest vs RSpec
* SEAT approach
* Assertions

## Core Tools/Packaging Code
* Purpose of core tools
* Gemfiles
