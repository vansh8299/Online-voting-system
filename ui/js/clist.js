$(document).ready(function () {
  $(".modal").modal();
  // $.ajax({
  //    url: '/getaddress',
  //    method: 'post'
  // }).done(function(){
  // 	console.log('done');
  // });

  web3 = new Web3(window.ethereum);
  abi = JSON.parse('[{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"totalVotesFor","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"validCandidate","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"votesReceived","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"x","type":"bytes32"}],"name":"bytes32ToString","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"candidateList","outputs":[{"name":"","type":"bytes32"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"voteForCandidate","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"contractOwner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"inputs":[{"name":"candidateNames","type":"bytes32[]"}],"payable":false,"type":"constructor"}]');
  contractInstance = new web3.eth.Contract(abi,'0x1d2f581120740510196fa385563e737c309f157d');  // deployed address will come here
  

  //check cookie
  function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }
// dummy database
  var aadhaar_list = {
    12345: "Rahul",
    78912: "Varun",
    // aadhar no : name
  };

  var aadhaar = readCookie("aadhaar");
  console.log(aadhaar);
  var address = aadhaar_list[aadhaar];
  console.log(address);
  $("#loc_info").text("Name as per Aadhaar : " + address);

  function disable() {
    $("#vote1").addClass("disabled");
    $("#vote2").addClass("disabled");
    $("#vote3").addClass("disabled");
    $("#vote4").addClass("disabled");

    //logout
    document.cookie = "show=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC";
    document.cookie = "aadhaar=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC";
    window.location = "/app";
  }

  $("#vote1").click(async function (){
    await window.ethereum.request({method: 'eth_requestAccounts'});
    contractInstance.methods.voteForCandidate(web3.utils.asciiToHex("Varun")).send({ from: '0x4876f8410ca999236b05ce727865734411e55bbe' }, async function () { // address of 1st acc from metamask will be here
      console.log((await contractInstance.methods.totalVotesFor(web3.utils.asciiToHex("Varun")).call({ from: '0x4876f8410ca999236b05ce727865734411e55bbe' } ,function (err, res) {
        if (err) {
          console.log("An error occured", err)
          return
        }
        console.log("The Vote count is: ", res)
      })));  
      alert("vote submited to BJP");
        disable();
        $("#loc_info").text("Vote submited successfully to BJP");

  });
  });

  $("#vote2").click(async function () {
    await window.ethereum.request({method: 'eth_requestAccounts'});
    contractInstance.methods.voteForCandidate(web3.utils.asciiToHex("Ribhav")).send({ from: '0xe40E308A440AA90c1e00456E27ac1c485Daedc05' }, async function () {
      console.log((await contractInstance.methods.totalVotesFor(web3.utils.asciiToHex("Ribhav")).call({ from: '0xe40E308A440AA90c1e00456E27ac1c485Daedc05' } ,function (err, res) {
        if (err) {
          console.log("An error occured", err)
          return
        }
        console.log("The Vote count is: ", res)
      })));  
      alert("vote submited to CONGRESS");
        disable();
        $("#loc_info").text("Vote submited successfully to CONGRESS");

  });
  });
  $("#vote3").click(async function () {
    await window.ethereum.request({method: 'eth_requestAccounts'});
    contractInstance.methods.voteForCandidate(web3.utils.asciiToHex("Sharad")).send({ from: '0xe40E308A440AA90c1e00456E27ac1c485Daedc05' }, async function () {
      console.log((await contractInstance.methods.totalVotesFor(web3.utils.asciiToHex("Sharad")).call({ from: '0xe40E308A440AA90c1e00456E27ac1c485Daedc05' } ,function (err, res) {
        if (err) {
          console.log("An error occured", err)
          return
        }
        console.log("The Vote count is: ", res)
      })));  
      alert("vote submited to NCP");
      disable();
      $("#loc_info").text("Vote submited successfully to NCP");

  });
  });
  $("#vote4").click(async function () {
    await window.ethereum.request({method: 'eth_requestAccounts'});
    contractInstance.methods.voteForCandidate(web3.utils.asciiToHex("Sharad")).send({ from: '0xe40E308A440AA90c1e00456E27ac1c485Daedc05' }, async function () {
      console.log((await contractInstance.methods.totalVotesFor(web3.utils.asciiToHex("Sharad")).call({ from: '0xe40E308A440AA90c1e00456E27ac1c485Daedc05' } ,function (err, res) {
        if (err) {
          console.log("An error occured", err)
          return
        }
        console.log("The Vote count is: ", res)
      })));  
      alert("vote submited to SHIV SENA");
      disable();
      $("#loc_info").text("Vote submited successfully to SHIV SENA");

  });
  });
});
