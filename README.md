# Automatize tasks in github with alias. 
## Description
 This package add aliases to improve your performace. For example if you want
 do a add, commit and push directly. You can use the option git cif

## Install

```npm install -g automagit```

## Options

```
automatize [OPTIONS]
        default install all aliases
		-d --delete  remove all aliases automatize -d
		-h --help show help
		-v show package version -v
```

## This alias will add:

```bash
    git ci     "COMMIT" git add + commit
	git cii    "COMMIT" git add + commit + push
	git cif    git add + commit with text no relevants changes + push
	git f      git add + commit + increase version npm in package.json + push + update npm package
	git fi     "COMMIT"  git add + commit + increase version npm in package.json + push + update npm package
	git fin    git push + update npm package
	git final  increase version npm in package.json + push + update npm package
```

## Youtube Video


[![Video](http://oi67.tinypic.com/34eqqsy.jpg)](https://www.youtube.com/watch?v=xr9-FqQ2NzM&feature=youtu.be)

