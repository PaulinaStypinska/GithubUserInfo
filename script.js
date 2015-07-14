// github user finder example

//First, let's create a function that does the AJAX call to the GitHub API.

function getGithubInfo(username) {
  var xhr = new XMLHttpRequest();
  // open and then send the request
    var url = 'https://api.github.com/users/' + username;
    xhr.open('GET', url, false);
                xhr.send();
    if (xhr.status != 200){
        $("#profile h2").html("No such user: " + username);
    }
        var userJson = xhr.responseText;
    var userObject = JSON.parse(userJson);
    return userObject;
}

getGithubInfo('PaulinaStypinska');

$(document).ready(function(){
  $(document).on('keypress', '#username', function(e){
    if (e.which === 13) {
      // get val() from input field
       var username = $('#username').val();    
      // assign getGithubUserInfo(username) to a variable response
        var githubInfo = getGithubInfo(username);
        showUser(githubInfo);
        console.log(githubInfo);
    }
  })
});

function showUser(user) {
  //render user information
    $("#profile h2").html(user.login + " is GitHub user #" + user.id);
    $("#profile .information").html("<a href='"+ user.html_url + "' class=profile>" + user.login + "</a>");
    $("#profile .avatar").html("<img src=" + user.avatar_url + " style width=220px>");
}

