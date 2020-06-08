function parser(){
    // let arr = [];
    // function recursy(elem){
    //     elem.childNodes.forEach(node => {
    //         if(node.nodeName.match(/P/)){
    //             const obj = {
    //                 header: node.nodeName,
    //                 content: node.textContent
    //             };
    //             arr.push(obj);
    //         } else {
    //             recursy(node);
    //         }
    //     });
    // }
    // recursy(document.body);

    // async function post(url){
    //     const response = await fetch(url, {
    //         method: 'POST',
    //         headers: {
    //             'Content-type':'application/json'
    //         },
    //         body: JSON.stringify(arr)
    //     });
    //     return await response.text();
    // }
    // post('http://localhost:3000/requests')
    //     .then(result => console.log(result));
    // document.body.childNodes.forEach(node => {
    //     console.log(node);
    // }); 
}
export default parser;