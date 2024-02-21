 

 const dummyApiResponse ={
    showLightAndDarkMode:true,
    showTicTacToeBoard:true,
    showRandomColorGenerator:true,
    showAccordian: true,
    // showTreeView:true,
    // showQrCodeGen:true,
    // showScrollIndicator:true
 }


export default function featureFlagsDataServiceCall(){


    return new Promise((resolve,reject)=>{
        if(dummyApiResponse ) setTimeout(resolve(dummyApiResponse),500);
        else reject('Some error occourd! Please try again')
    })
}