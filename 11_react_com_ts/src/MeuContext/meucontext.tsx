import { createContext } from "react"

/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ api context
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
interface IAppContext {
    language: string,
    framework: string,
    projects: number
}

export const AppContext = createContext<IAppContext|null>(null);

export const contextValue: IAppContext = {
    language: "Javascript",
    framework: "Express",
    projects: 5
  }

