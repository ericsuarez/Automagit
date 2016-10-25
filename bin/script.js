require('shelljs/global');
var argv = require('minimist')(process.argv.slice(2));
var pck = require('../package.json');
//require git

if (!which('git')) {
  echo('Sorry, this script requires git');
  exit(1);
}

if(argv.v){
    console.log(pck.version);
}

if(argv.delete){
    exec("git config  --global --remove-section alias");
}


else if(argv.h || argv.help){
    console.log("automatize [OPTIONS]\n"+
        "default install all aliases\n"+
		"-d delete all aliases automatize -d\n"+
		"-h --help show help\n"+
		"-v show package version -v\n");
}

else{
    var x = "no relevants changes";
    exec("git config --global alias.ci '!git add -A && git commit -m'");
    exec("git config --global alias.cif '!git add -A && git commit -m " + x + "'");
    exec("git config --global alias.cif '!git add -A && git commit -m " + x + " && git push'");
    exec("git config --global alias.cif '!git add -A && git commit -m " + x + " && git push && npm publish'");
    exec("git config --global alias.cif '!git add -A && git commit -m " + x + " && npm version patch && git push && npm publish'");
}






