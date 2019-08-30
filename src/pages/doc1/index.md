---
path: "/create-gatsby-from-scratch"
date: "2019-12-12"
title: "Create Document Using Gatsby From Scratch"
author: "Mon Patrick Ganzan"
---

This is my very **FIRST** document in Gatsby.

Install Gatsby Globally
npm i -g gatsby-cli


Create New Gatsby Project
gatsby new <project-name>

Change directory to new project
cd <project name>

Running the server
gatsby develop

Open the app on http://localhost:8000

Create a page
Create a new file under pages named <file>.js

Snippet of a sample code for a page

```
import React from 'react'

const SamplePage = () => (
    <div>
        <h1>Sample Page</h1>
        <p>
            Sample Page.
        </p>
    </div>
)

export default SamplePage;
```

To access the page you can go to http://localhost:8000/sample

To Create Menus
