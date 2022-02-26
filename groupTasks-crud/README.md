# groupTask Crud
## Table of Contents
- [Full Setup](#full-setup)
    - [Installation](#installation)
    - [Run](#run)
- [Usage](#usage)
    - [HTTP paths](#http-paths)
    - [get a groupTask](#army-id)
    - [get a groupTask's auth](#validate-question)
    - [Post a new groupTask](#/)
    - [update a groupTask](#army-id)

## Full Setup
### Installation

```bash
git clone https://gitlab.com/yesodot/selenium/apollo/sociometry/sociometry-ui.git

cd groupTask-crud

npm install
```

### Run 

```bash
npm start
```

## Usage
#### HTTP paths 

| METHOD | ENDPOINT                                                         | DESCRIPTION                                       |
| ------ | :----------------------------------------------------------------| :----------------------------------------------    |
| Post   |  create                                                          | create a groupTask                                          |
| Put    |  updateByid                                                  | update a groupTask                                      |
| Get    |  getByid                                                     | get by army id                                     |
| Get    |  validateQuestion                                                | get auth by army id                                     |

**-------------------------------------------------------------------------------------------------------------------------------------**

### create
post a groupTask
#### Paramters
| Name   | Type   | Description                                                    |
| id  | string | army id of the groupTask  |
| firstName  | string | first name of the groupTask  |
| lastName  | string | lastname of the groupTask  |
| permissions  | permissionType | basic, mada or segel  |
| validationQuestion  | {string, string} | the question and the anwer of the groupTask  |

#### Response
```typescript
"status": "200 OK"
{
    "id": "8599492",
    "firstName": "string",
    "lastName": "string",
    "permissions": ["QUESTION1"],
    "validationQuestion": {
        "question": "MADA",
        "answer": "string"
  }
}
```
**-----------------------------------------------------------------------------------------------------------------------------------------**
### getByid
get a groupTask
#### Paramters
| Name   | Type   | Description                                                    |
| id  | string | the id of the groupTask in the params |

#### Response
```typescript
"status": "200 OK"
{
    "id": "8599492",
    "firstName": "string",
    "lastName": "string",
    "permissions": ["QUESTION1"],
    "validationQuestion": {
        "question": "MADA",
        "answer": "string"
  }
}
```
**-----------------------------------------------------------------------------------------------------------------------------------------**

### updateByid
update a groupTask
#### Paramters
| Name   | Type   | Description                                                    |
| id  | string | army id of the groupTask  |
| firstName  | string | first name of the groupTask  |
| lastName  | string | lastname of the groupTask  |
| permissions  | permissionType | basic, mada or segel  |
| validationQuestion  | {string, string} | the question and the anwer of the groupTask  |

#### Response
```typescript
"status": "200 OK"
{
    "id": "8599492",
    "firstName": "string",
    "lastName": "string",
    "permissions": ["QUESTION1"],
    "validationQuestion": {
        "question": "MADA",
        "answer": "string"
  }
}
```
**-----------------------------------------------------------------------------------------------------------------------------------------**
### validateQuestion
authenticate the question and answer of a groupTask
#### Paramters
| Name   | Type   | Description                                                    |
| id  | string | army id of the groupTask  |
| question  | string | question  of the groupTask  |
| answer  | string | answer of the groupTask  |

#### Response
```typescript
"status": "200 OK"
true
```
**-----------------------------------------------------------------------------------------------------------------------------------------**
