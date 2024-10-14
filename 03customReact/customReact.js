function customRender(reactElement, container){
    /*const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAtrribute = ("href", reactElement.props.href)
    domElement.setAtrribute = ("target", reactElement.props.href)
    container.appendChild(domElement)*/
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.prop) {
        if (prop === "children") continue
        domElement.setAttribute(prop, reactElement.props[prop])
    }

    container.appendChild(domElement)


}

const reactElement = {
    type: 'a',
    props: {
        href: "https://www.google.com",
        target: '_blank'
    },
    children: "Click me to visit google"
}


const mainContainer = document.querySelector("#root")

customRender(reactElement, mainContainer)