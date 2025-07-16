// create a dream <li> element
export function createDreamListItem(dream) {
    // create list item
    const li = document.createElement("li");
    li.className = "dream-list_item";
    li.setAttribute("data-id", dream.id.toString());
    // create checkbox
    const checkbox = document.createElement("input");
    checkbox.className = "dream-check";
    checkbox.type = "checkbox";
    checkbox.name = "dream-check";
    checkbox.id = `dream-check-${dream.id}`;
    checkbox.checked = dream.checked;
    // create label
    const label = document.createElement("label");
    label.htmlFor = checkbox.id;
    label.innerHTML = `${dream.name}, <span class="dream-theme">${dream.theme}</span>`;
    // create button
    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "delete-button";
    const deleteIcon = document.createElement("img");
    deleteIcon.src = "../assets/images/trash_delete.png";
    deleteButton.appendChild(deleteIcon);
    // append all to li
    li.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(deleteButton);
    return li;
}
//# sourceMappingURL=domHelpers.js.map