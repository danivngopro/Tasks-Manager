# compositor Crud
## Table of Contents
- [Full Setup](#full-setup)
    - [Installation](#installation)
    - [Run](#run)
- [Usage](#usage)
    - [HTTP paths](#http-paths)
    - [get a compositor](#army-id)
    - [get a compositor's auth](#validate-question)
    - [Post a new compositor](#/)
    - [update a compositor](#army-id)

## Full Setup
### Installation

```bash
git clone https://gitlab.com/yesodot/selenium/apollo/sociometry/sociometry-ui.git

cd compositor-crud

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
| Post   |  create                                                          | create a compositor                                          |
| Put    |  updateByid                                                  | update a compositor                                      |
| Get    |  getByid                                                     | get by army id                                     |
| Get    |  validateQuestion                                                | get auth by army id                                     |

**-------------------------------------------------------------------------------------------------------------------------------------**

### create
post a compositor
#### Paramters
| Name   | Type   | Description                                                    |
| id  | string | army id of the compositor  |
| firstName  | string | first name of the compositor  |
| lastName  | string | lastname of the compositor  |
| permissions  | permissionType | basic, mada or segel  |
| validationQuestion  | {string, string} | the question and the anwer of the compositor  |

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
get a compositor
#### Paramters
| Name   | Type   | Description                                                    |
| id  | string | the id of the compositor in the params |

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
update a compositor
#### Paramters
| Name   | Type   | Description                                                    |
| id  | string | army id of the compositor  |
| firstName  | string | first name of the compositor  |
| lastName  | string | lastname of the compositor  |
| permissions  | permissionType | basic, mada or segel  |
| validationQuestion  | {string, string} | the question and the anwer of the compositor  |

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
authenticate the question and answer of a compositor
#### Paramters
| Name   | Type   | Description                                                    |
| id  | string | army id of the compositor  |
| question  | string | question  of the compositor  |
| answer  | string | answer of the compositor  |

#### Response
```typescript
"status": "200 OK"
true
```
**-----------------------------------------------------------------------------------------------------------------------------------------**
