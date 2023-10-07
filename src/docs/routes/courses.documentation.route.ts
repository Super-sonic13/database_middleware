import j2s from 'joi-to-swagger';
import { createCourseScheme, updateCourseScheme } from '@request-schemas/course.request-schema';

const createCourse = {
    tags: ['Courses'],
    operationId: 'createCourse',
    requestBody: {
        content: {
            'application/json': {
                schema: j2s(createCourseScheme).swagger,
            },
        },
        required: true,
    },
    responses: {
        '201': {
            description: 'Course created successfully!',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            id: { type: 'number', example: 42 },
                            courseName: { type: 'string', example: 'Full course name here' },
                            courseCipher: { type: 'string', example: 'iIWD-336-6-a' },
                            startDate: { type: 'string', example: '2023-11-12T00:00:00.000Z' },
                            endDate: { type: 'string', example: '2023-11-25T00:00:00.000Z' },
                            linkToClassMaterials: { type: 'string', example: 'https://link_to_materials' },
                        }
                    }
                },
            },
        },
        '400': {
            description: 'You try to create existing course with unique field',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            msg: {
                                type: 'string',
                                example: 'Course with course cipher {your cipher} already exist'
                            }
                        }
                    }
                },
            },
        },
        '500': {
            description: 'Internal Server Error',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            message: {
                                type: 'string',
                                example: 'Internal server error',
                            },
                        },
                    },
                },
            },
        }
    },
};

const getCourseById = {
    tags: ['Courses'],
    operationId: 'getCourseById',
    parameters: [
        {
            name: 'id',
            in: 'path',
            description: 'Course id',
            required: true,
            type: 'number',
        },
    ],
    responses: {
        '200': {
            description: 'Course retrived successfully!',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            id: { type: 'number', example: 42 },
                            courseName: { type: 'string', example: 'Full course name here' },
                            courseCipher: { type: 'string', example: 'iIWD-336-6-a' },
                            startDate: { type: 'string', example: '2023-11-12T00:00:00.000Z' },
                            endDate: { type: 'string', example: '2023-11-25T00:00:00.000Z' },
                            linkToClassMaterials: { type: 'string', example: 'https://link_to_materials' },
                        }
                    }
                },
            },
        },
        '404': {
            description: 'You try access course with not existing id',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            msg: {
                                type: 'string',
                                example: 'Course with id 34 dosen`t exist'
                            }
                        }
                    }
                },
            },
        },
        '500': {
            description: 'Internal Server Error',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            message: {
                                type: 'string',
                                example: 'Internal server error',
                            },
                        },
                    },
                },
            },
        }
    },
};

const updateCourseById = {
    tags: ['Courses'],
    operationId: 'updateCourseById',
    parameters: [
        {
            name: 'id',
            in: 'path',
            description: 'Course id',
            required: true,
            type: 'number',
        },
    ],
    requestBody: {
        content: {
            'application/json': {
                schema: j2s(updateCourseScheme).swagger,
            },
        },
        required: true,
    },
    responses: {
        '200': {
            description: 'Course updated successfully!',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            id: { type: 'number', example: 42 },
                            courseName: { type: 'string', example: 'Full course name here' },
                            courseCipher: { type: 'string', example: 'iIWD-336-6-a' },
                            startDate: { type: 'string', example: '2023-11-12T00:00:00.000Z' },
                            endDate: { type: 'string', example: '2023-11-25T00:00:00.000Z' },
                            linkToClassMaterials: { type: 'string', example: 'https://link_to_materials' },
                        }
                    }
                },
            },
        },
        '400': {
            description: 'You try to update unique field that isn`t exist',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            msg: {
                                type: 'string',
                                example: 'Course with your id doesn`t exist'
                            }
                        }
                    }
                },
            },
        },
        '404': {
            description: 'You try access course with not existing id',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            msg: {
                                type: 'string',
                                example: 'Course with id 34 dosen`t exist'
                            }
                        }
                    }
                },
            },
        },
        '500': {
            description: 'Internal Server Error',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            message: {
                                type: 'string',
                                example: 'Internal server error',
                            },
                        },
                    },
                },
            },
        }
    },
};

const deleteCourseById = {
    tags: ['Courses'],
    operationId: 'deleteCourseById',
    parameters: [
        {
            name: 'id',
            in: 'path',
            description: 'Course id',
            required: true,
            type: 'number',
        },
    ],
    responses: {
        '200': {
            description: 'Course deleted successfully!',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            id: { type: 'number', example: 42 },
                            courseName: { type: 'string', example: 'Full course name here' },
                            courseCipher: { type: 'string', example: 'iIWD-336-6-a' },
                            startDate: { type: 'string', example: '2023-11-12T00:00:00.000Z' },
                            endDate: { type: 'string', example: '2023-11-25T00:00:00.000Z' },
                            linkToClassMaterials: { type: 'string', example: 'https://link_to_materials' },
                        }
                    }
                },
            },
        },
        '404': {
            description: 'You try to delete not existing course',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            msg: {
                                type: 'string',
                                example: 'Course with id 34 dosen`t exist'
                            }
                        }
                    }
                },
            },
        },
        '500': {
            description: 'Internal Server Error',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            message: {
                                type: 'string',
                                example: 'Internal server error',
                            },
                        },
                    },
                },
            },
        }  
    },
};

const getListOfCourses = {
    tags: ['Courses'],
    operationId: 'getListOfCourses',
    responses: {
        '200': {
            description: 'Successful Retrieve list of courses',
            content: {
                'application/json': {
                    example: [
                        {
                            id: 1,
                            courseName: 'Full course name here',
                            courseCipher: 'iIWD-336-6-a',
                            startDate: '2023-11-12T00:00:00.000Z',
                            endDate: '2023-11-25T00:00:00.000Z',
                            linkToClassMaterials: 'https://link_to_materials',
                        },
                        {
                            id: 2,
                            courseName: 'Full course name here',
                            courseCipher: 'iIWD-336-6-b',
                            startDate: '2023-09-01T00:00:00.000Z',
                            endDate: '2023-10-01T00:00:00.000Z',
                            linkToClassMaterials: 'https://link_to_materials2',
                        }
                    ]
                },
            },
        },
        '500': {
            description: 'Internal Server Error',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            message: {
                                type: 'string',
                                example: 'Internal server error',
                            },
                        },
                    },
                },
            },
        }
    },
};

const getCourseDetails = {
    tags: ['Courses'],
    operationId: 'getCourseDetails',
    responses: {
        '200': {
            description: 'Successful retrieve courses details',
            content: {
                'application/json': {
                    example: 
                    {
                        id: 1,
                        courseName: "iwd1",
                        courseCipher: "iIWD336-6-a",
                        linkToClassMaterials: "link",
                        startDate: "2023-11-12T00:00:00.000Z",
                        endDate: "2023-11-29T00:00:00.000Z",
                        participants: {
                          facilitators: [
                            {
                              explorerId: "e1",
                              explorerMail: "string",
                              explorerPassword: "string",
                              discordNickname: "string",
                              cohort: "string",
                              contactInfo: {
                                id: 1,
                                firstName: "firstUpdated",
                                lastName: "lastName",
                                email: "email",
                                age: 15,
                                country: "country",
                                timezone: "timezone",
                                sourceOfReferral: "sourceOfReferral",
                                eduQuestSelectedDateTime: "2023-06-08T00:00:00.000Z",
                                eduQuestDecision: "Try again"
                              }
                            }
                          ],
                          interns: [
                            {
                              explorerId: "someExId",
                              explorerMail: "some mail",
                              explorerPassword: "some password",
                              discordNickname: "nameDisc",
                              cohort: "cohort",
                              contactInfo: {
                                id: 5,
                                firstName: "firstUpdated",
                                lastName: "lastName",
                                email: "email2",
                                age: 15,
                                country: "country",
                                timezone: "timezone",
                                sourceOfReferral: "sourceOfReferral",
                                eduQuestSelectedDateTime: "2023-06-08T00:00:00.000Z",
                                eduQuestDecision: "Try again"
                              }
                            }
                          ]
                        },
                        schedule: [
                          {
                            meetNumber: 5,
                            eventDate: "2023-06-06T00:00:00.000Z",
                            googleMeetLink: "some link",
                            classEventType: "expo"
                          },
                          {
                            meetNumber: 4,
                            eventDate: "2023-07-06T00:00:00.000Z",
                            googleMeetLink: "some link",
                            classEventType: "expo"
                          }
                        ]
                    }
                },
            },
        },
        '500': {
            description: 'Internal Server Error',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            message: {
                                type: 'string',
                                example: 'Internal server error',
                            },
                        },
                    },
                },
            },
        }
    },
};

const routes = {
    '/api/courses': {
        get: getListOfCourses,
        post: createCourse,
    },
    '/api/courses/:id': {
        get: getCourseById,
        put: updateCourseById,
        delete: deleteCourseById
    },
    '/courses/:courseCipher/details': {
        get: getCourseDetails
    }
};

export default routes;