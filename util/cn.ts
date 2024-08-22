/* 
 CN function
 This merges tailwind classes. 

 run npm install clsx tailwind-merge then copy into your project. 
 I recomment you place this inside $lib/index.ts . This is where I have it. 
 Placing it there means you don't have to modify the imports. of the component.

*/
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]): string {
	return twMerge(clsx(inputs));
}
