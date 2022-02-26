# subTasks Crud
## Table of Contents
- [Full Setup](#full-setup)
    - [Installation](#installation)
    - [Run](#run)
- [Usage](#usage)
    - [HTTP paths](#http-paths)
    - [get a subTask](#army-id)
    - [get a subTask's auth](#validate-question)
    - [Post a new subTask](#/)
    - [update a subTask](#army-id)

## Full Setup
### Installation

```bash
git clone https://gitlab.com/yesodot/selenium/apollo/sociometry/sociometry-ui.git

cd subTask-crud

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
| Post   |  create                                                          | create a subTask                                          |
| Put    |  updateByid                                                  | update a subTask                                      |
| Get    |  getByid                                                     | get by army id                                     |
| Get    |  validateQuestion                                                | get auth by army id                                     |

**-------------------------------------------------------------------------------------------------------------------------------------**

### create
post a subTask
#### Paramters
| Name   | Type   | Description                                                    |
| id  | string | army id of the subTask  |
| firstName  | string | first name of the subTask  |
| lastName  | string | lastname of the subTask  |
| permissions  | permissionType | basic, mada or segel  |
| validationQuestion  | {string, string} | the question and the anwer of the subTask  |

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
get a subTask
#### Paramters
| Name   | Type   | Description                                                    |
| id  | string | the id of the subTask in the params |

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
update a subTask
#### Paramters
| Name   | Type   | Description                                                    |
| id  | string | army id of the subTask  |
| firstName  | string | first name of the subTask  |
| lastName  | string | lastname of the subTask  |
| permissions  | permissionType | basic, mada or segel  |
| validationQuestion  | {string, string} | the question and the anwer of the subTask  |

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
authenticate the question and answer of a subTask
#### Paramters
| Name   | Type   | Description                                                    |
| id  | string | army id of the subTask  |
| question  | string | question  of the subTask  |
| answer  | string | answer of the subTask  |

#### Response
```typescript
"status": "200 OK"
true
```
**-----------------------------------------------------------------------------------------------------------------------------------------**
