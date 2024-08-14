import { IProject } from "../react/types/project.type";

export const project1: IProject = {
  "name": "Automation UI- Upload Multiple Media",
  "domain": "localhost",
  "data": {
    "pageTitle": "Media Library"
  },
  "objectModels": [
    {
      "name": "PageMediaLibrary",
      "url": "/media-library",
      "precondition": {
        "login": {
          "email": {
            "selector": "input[data-testid='login_email']",
            "value": "user@examplee.com"
          },
          "password": {
            "selector": "input[data-testid='login_input_password']",
            "value": "password"
          }
        }
      },
      "testCases": [
        {
          "type": "UI_BEHAVIOR",
          "name": "Should render the media library with status code 200",
          "path": "/media-library",
          "steps": [
            {
              "type": "FILL",
              "selector": "input[data-testid='login_email']",
              "value": "user@examplee.com"
            },
            {
              "type": "CLICK",
              "selector": "button[data-testid='login_submit']"
            },
            {
              "type": "FILL",
              "selector": "input[data-testid='login_submit']",
              "value": "user@examplee.com"
            }
          ],
          "expectations": [
            {
              "value": 200,
              "message": "Expect response status code 200 for / page"
            }
          ]
        },
        {
          "type": "BODY_CONTENT",
          "name": "Should render `Add Media` button on page",
          "path": "/media-library",
          "selector": "button[data-testid='btn_add_media']",
          "steps": [],
          "expectations": [
            {
              "type": "EXIST",
              "value": true,
              "message": "`Add Media` button should exist on the page"
            }
          ]
        }
      ]
    }
  ]
}
