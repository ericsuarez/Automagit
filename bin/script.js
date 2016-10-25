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

if(argv.delete || argv.d){
    exec("git config --global --unset alias.ci");
    exec("git config --global --unset alias.cif");
    exec("git config --global --unset alias.f");
    exec("git config --global --unset alias.ff");
    exec("git config --global --unset alias.fff");
}



else if(argv.h || argv.help){
    console.log("automatize [OPTIONS]\n"+
        "default install all aliases\n"+
		"-d --delete  remove all aliases automatize -d\n"+
		"-h --help show help\n"+
		"-v show package version -v\n");
}

else{
    exec("git config --global alias.ci '!git add -A && git commit -m'");
    exec("git config --global alias.cif '!git add -A && git commit -m \"no relevants changes\" && git push'");
    exec("git config --global alias.f '!git add -A && git commit -m \"no relevants changes\" && git push'");
    exec("git config --global alias.ff '!git add -A && git commit -m \"no relevants changes\" && git push && npm publish'");
    exec("git config --global alias.fff '!git add -A && git commit -m \"no relevants changes\" && npm version patch && git push && npm publish'");
}






