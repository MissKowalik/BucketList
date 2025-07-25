import { Dream } from "./models/Dream.js";

export const themes = ["teknikdrömmar", "vardagsdrömmar", "husdrömmar", "sportdrömmar", "resdrömmar"];
export let name = "Drömmare";
export const user = {
    name: ""
};
export let dreams: Dream[] = [{
    id: 1,
    name: "Lära mig HTML/CSS",
    theme: "teknikdrömmar",
    checked: true
},
{
    id: 2,
    name: "Lära mig TypeScript",
    theme: "teknikdrömmar",
    checked: false
},
{
    id: 3,
    name: "En dröm som tar flera rader lorem ipsum",
    theme: "vardagsdrömmar",
    checked: false
}
]