import {useState} from "react";

export const useTabs = (initialTabs, contentList) => {
    const [index, setIndex] = useState(initialTabs)
    return {
        contentItem: contentList[index],
        contentChange: setIndex
    }
}