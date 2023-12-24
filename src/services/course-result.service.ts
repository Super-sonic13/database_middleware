import { Course, CourseResult } from '@prisma/client';
import { db } from '@utils/db.server';
import { NotFoundError } from '@utils/exeptions/ApiErrors';

export const createCourseResults = async (data: CourseResult[] | any) => {
    const createdCourseResults = await db.courseResult.createMany({ data });

    return createdCourseResults;
};

export const updateCourseResultById = async (id: number, data: CourseResult): Promise<CourseResult> => {
    const updatedCourseResults: CourseResult = await db.courseResult.update({ where: { id }, data: data });

    return updatedCourseResults;
};

export const getCourseResultById = async (id: number): Promise<CourseResult> => {
    const courseResult: CourseResult | null = await db.courseResult.findUnique({ where: { id } });
    
    if (!courseResult) {
        throw new NotFoundError(`Course-result with id ${id} doesn't exist`);
    } 

    return courseResult;
};

export const deleteCourseResultById = async (id: number): Promise<CourseResult> => {
    const deletedCourseResult: CourseResult = await db.courseResult.delete({ where: { id } });

    return deletedCourseResult;
};

export const getListOfCourseResults = async (): Promise<CourseResult[]> => {
    const courseResultsList: CourseResult[] = await db.courseResult.findMany();

    return courseResultsList;
};

export const getCourseResultsByCourseId = async (courseId: number): Promise<CourseResult[]> => {

    const courseResults: CourseResult[] = await db.courseResult.findMany({
        where: {
            courseId,
        }
    })

    return courseResults;

}