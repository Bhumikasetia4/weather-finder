const request=require('request')


const geocode=(address,callback)=>{
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoiYmh1bWlrYTgiLCJhIjoiY2s4b3Q0a3VqMWN0OTNzbndxMWlybmdpdCJ9.d5PphwCLM7w98CIxV0seMA&limit=1'
        request({url:url,json:true},(error,response) =>{
            if (error){
        callback('Unable to coonct to location services!',undefined)
            }
            else if(response.body.features.length===0)
            {
            callback('Unable to find location.Please try another!',undefined)
            }
            else{
                callback(undefined,{
                  latitude:response.body.features[0].center[1],
                  longitude:response.body.features[0].center[0] ,
                  location:response.body.features[0].place_name 
                })
            }
        })
    
    }
  
    module.exports=geocode