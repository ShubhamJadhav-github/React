// function customRender(reactElement, container){
//     const DOMelement = document.createElement(reactElement.type);
//     DOMelement.innerHTML = reactElement.content;
//     DOMelement.setAttribute('href', reactElement.props.href)
//     DOMelement.setAttribute('target', reactElement.props.target)
    
//     container.appendChild(DOMelement);
// };

// const reactElement = {
//     type : 'a',
//     props:{
//         href : 'https://www.google.com',
//         target : '_blank'
//     },
//     content: 'Google Search'
// };
// const container = document.getElementById('root');
// customRender(reactElement, container);


function customRender(reactElement, container){
    
    //--------Version-1-------------------------
    const domElement = document.createElement(reactElement.type)
    
    domElement.innerHTML = reactElement.children;
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    container.appendChild(domElement);
    


}
const reactElement = {
    type : 'a',
    props : {
        href: 'https://www.google.com',
        target: '_blank'
    },
    children : 'GOOGLE LINK !'
}

const container = document.getElementById('root')

customRender(reactElement, container)