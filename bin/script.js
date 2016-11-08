#!/usr/bin/env node

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
    exec("git config --global --unset alias.ffi");
    exec("git config --global --unset alias.cii");
}



else if(argv.h || argv.help){
    console.log("automatize [OPTIONS]\n"+
        "default install all aliases\n"+
		"-d --delete  remove all aliases automagit -d\n"+
		"-h --help show help\n"+
		"-v show package version -v\n"+
		"-c put your own commit -c\n\nEXAMPLES\n"+
		"git ci \"COMMIT\"\t git add + commit\n"+
		"git cii \"COMMIT\" git add + commit + push\n"+
		"git cif\t\t git add + commit with text no relevants changes + push\n"+
		"git f\t\t git add + commit + increase version npm in package.json + push + update npm package\n"+
		"git fi \"COMMIT\"  git add + commit + increase version npm in package.json + push + update npm package.\n"+
		"git fin\t\t git push + update npm package.\n"+
		"git final\t increase version npm in package.json + push + update npm package\n");
}

else{
    exec("git config --global alias.ci '!git add -A && git commit -m'");
    exec("git config --global alias.cii '!f() { git add -A && git commit -m \"$@\" && git push; }; f'");
    exec("git config --global alias.cif '!git add -A && git commit -m \"no relevants changes\" && git push'");
    exec("git config --global alias.f '!git add -A && git commit -m \"no relevants changes\" && npm version patch && git push && npm publish'");
    exec("git config --global alias.fi '!f() { git add -A && git commit -m \"$@\" && npm version patch && git push && npm publish; }; f'");
    exec("git config --global alias.fin '!git push && npm publish'");
    exec("git config --global alias.final 'npm version patch && git push && npm publish'");
    
    
}







