# tasks Crud
## Table of Contents
- [Full Setup](#full-setup)
    - [Installation](#installation)
    - [Run](#run)
- [Usage](#usage)
    - [HTTP paths](#http-paths)
    - [get a task](#army-id)
    - [get a task's auth](#validate-question)
    - [Post a new task](#/)
    - [update a task](#army-id)

## Full Setup
### Installation

```bash
git clone https://gitlab.com/yesodot/selenium/apollo/sociometry/sociometry-ui.git

cd task-crud

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
| Post   |  create                                                          | create a task                                          |
| Put    |  updateByid                                                  | update a task                                      |
| Get    |  getByid                                                     | get by army id                                     |
| Get    |  validateQuestion                                                | get auth by army id                                     |

**-------------------------------------------------------------------------------------------------------------------------------------**

### create
post a task
#### Paramters
| Name   | Type   | Description                                                    |
| id  | string | army id of the task  |
| firstName  | string | first name of the task  |
| lastName  | string | lastname of the task  |
| permissions  | permissionType | basic, mada or segel  |
| validationQuestion  | {string, string} | the question and the anwer of the task  |

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
get a task
#### Paramters
| Name   | Type   | Description                                                    |
| id  | string | the id of the task in the params |

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
update a task
#### Paramters
| Name   | Type   | Description                                                    |
| id  | string | army id of the task  |
| firstName  | string | first name of the task  |
| lastName  | string | lastname of the task  |
| permissions  | permissionType | basic, mada or segel  |
| validationQuestion  | {string, string} | the question and the anwer of the task  |

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
authenticate the question and answer of a task
#### Paramters
| Name   | Type   | Description                                                    |
| id  | string | army id of the task  |
| question  | string | question  of the task  |
| answer  | string | answer of the task  |

#### Response
```typescript
"status": "200 OK"
true
```
**-----------------------------------------------------------------------------------------------------------------------------------------**
