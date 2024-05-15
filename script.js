var btc=document.getElementById("bitcoin");
var eth=document.getElementById("ethereum");
var doge=document.getElementById("dogecoin");

var settings={
    "async": true,
    "scrossDomin":true,
    "url":"http://api.coingecko.com/api/v3/simple/price?ides=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd",
    "method":"GET",
    "headers":{}
}
$.ajax(settings).done(function (response)
{
   btc.innerHTML=response.bitcoin.usd;
   eth.innerHTML=response.ethereum.usd;
   doge.innerHTML=response.dogecoin.usd;
});