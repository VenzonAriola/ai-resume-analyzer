import {twMerge} from "tailwind-merge";
import {type ClassValue, clsx} from "clsx";

/**
 * Formats a file size in bytes to a human-readable string (KB,MB,GB)
 * @params bytes - The size in bytes
 * @returns A formatted string with the appropriate unit
 */
export function cn(inputs: ClassValue[]){
    return twMerge(clsx(inputs))
}

export function formatSize(bytes:number) : string{
    if(bytes ===0) return '0 Bytes';

    const k =1024;
    const sizes= ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB'];

    //Determine the appropriate unit by calculating the log
    const i = Math.floor(Math.log(bytes)/Math.log(k));

    //Format with 2 decimal places and round
    return parseFloat((bytes/Math.pow(k,i)).toFixed(2))+ ' ' + sizes[i];
}

export const generateUUID = () => crypto.randomUUID();