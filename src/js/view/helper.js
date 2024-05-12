import { TIME_OUT } from "../config";


const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

export const getJson = async function(url){
  try {
    const request = await Promise.race([fetch(url), timeout(TIME_OUT)])
      const data = await request.json();
      if (!request.ok) throw new Error(`${data.message} ${request.status}`)
      return data
    
  } catch (error) {
    throw error
  }
  
}