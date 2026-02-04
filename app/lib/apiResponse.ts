import { NextResponse } from "next/server";

export const sendResponse = (
    success: boolean,
    message: string,
    data: any = null,
    status: number = 200
) => {
    return NextResponse.json(
        {
            success,
            message,
            data,
        },
        { status }
    );
};

export const sendError = (
    message: string,
    status: number = 500,
    error: any = null
) => {
    return NextResponse.json(
        {
            success: false,
            message,
            error: error?.message || error || null,
        },
        { status }
    );
};
